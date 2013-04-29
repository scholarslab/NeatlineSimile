
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=76; */

/**
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

Neatline.module('Simile', function(
  Simile, Neatline, Backbone, Marionette, $, _) {


  Simile.View = Neatline.Shared.Widget.View.extend({


    id: 'simile',


    /**
     * Start SIMILE.
     */
    init: function() {

      // Create exhibit model from defaults.
      var exhibit = new Neatline.Shared.Exhibit.Model();

      // Start the timeline.
      this.__initSimile(exhibit);
      this.__initSelect();
      this.__initFilter();

    },


    /**
     * Instantiate SIMILE.
     *
     * @param {Object} exhibit: An exhibit model.
     */
    __initSimile: function(exhibit) {

      // Destroy existing timeline.
      if (this.timeline) this.timeline.dispose();

      // Reference the event source.
      this.eventSource = new Timeline.DefaultEventSource();

      // Alias default settings.
      var track   = exhibit.get('simile_track_height');
      var tape    = exhibit.get('simile_tape_height');
      var pixels  = exhibit.get('simile_interval_pixels');
      var unit    = exhibit.get('simile_interval_unit');
      var date    = exhibit.get('simile_default_date');

      // Set theme properties.
      this.theme = Timeline.ClassicTheme.create();
      this.theme.event.track.height = parseInt(track);
      this.theme.event.tape.height  = parseInt(tape);

      // Create the timeline.
      this.timeline = Timeline.create(this.el, [
        Timeline.createBandInfo({

          intervalUnit:   Timeline.DateTime[unit],
          intervalPixels: parseInt(pixels),
          eventSource:    this.eventSource,

          theme: this.theme,
          width: '100%',

        })
      ]);

      // Reference band, set date.
      this.band = this.timeline.getBand(0);
      this.setCenterDate(date);

    },


    /**
     * Publish `select` on event click.
     */
    __initSelect: function() {
      this.band._eventPainter._showBubble = function(x, y, evt) {
        Neatline.vent.trigger('select', {
          model:  evt.nModel,
          source: Simile.ID
        });
      };
    },


    /**
     * Bind timeline scrolling to the filter.
     */
    __initFilter: function() {
      this.band.addOnScrollListener(_.bind(this.setFilter, this));
      this.setFilter();
    },


    /**
     * Filter records by visibility dates.
     */
    setFilter: function() {
      Neatline.vent.trigger('setFilter', {
        source: Simile.ID, key: 'simile',
        evaluator: _.bind(function(record) {

          // Hide the record if it either:
          //  - Has a `show_after_date` that is after the current date.
          //  - Has a `show_before_date` that is before the current date.

          var center = this.band.getCenterVisibleDate();
          var v1 = record.get('after_date');
          var v2 = record.get('before_date');

          var visible = true;
          if (v1) visible &= new Date(v1) < center;
          if (v2) visible &= new Date(v2) > center;
          return Boolean(visible);

        }, this)
      });
    },


    /**
     * Render a collection of records.
     *
     * @param {Object} records: The records collection.
     */
    ingest: function(records) {
      this.eventSource.clear();
      records.each(_.bind(this.buildEvent, this));
      this.setEventColors();
    },


    /**
     * Render a record on the timeline.
     *
     * @param {Object} record: The record.
     */
    buildEvent: function(record) {

      // Pass if no start date.
      if (!record.get('start_date')) return;

      // Default fields.
      var data = {
        text:   record.get('title'),
        start:  new Date(record.get('start_date')),
        color:  record.get('fill_color')
      };

      // If present, add end date.
      var end = record.get('end_date');
      if (end) data['end'] = new Date(end);

      // Construct event, set model reference.
      var event = new Timeline.DefaultEventSource.Event(data);
      event.nModel = record;

      // Add to timeline.
      this.eventSource._events.add(event);
      this.eventSource._fire('onAddMany', []);
      this.timeline.layout();

    },


    /**
     * Center the timeline on a date.
     *
     * @param {String} date: The date.
     */
    setCenterDate: function(date) {
      if (_.isString(date)) {
        this.band.setCenterVisibleDate(new Date(date));
      }
    },


    /**
     * Manifest the fill color on an event.
     *
     * @param {Object} model: The record model.
     */
    focusByModel: function(model) {
      this.setCenterDate(model.get('start_date'));
    },


    /**
     * Manifest the fill color on an event.
     */
    setEventColors: function() {
      _.each(this.getEvents(), _.bind(function(event) {
        $(this.getEventElement(event)).css(
          'background', event.nModel.get('fill_color')
        );
      }, this));
    },


    /**
     * Get an array of all events on the timeline.
     */
    getEvents: function() {
      return this.eventSource._events._events._a;
    },


    /**
     * Get an event's DOM element on the timeline.
     *
     * @param {Object} event: The event.
     * @return {Object}: The DOM element.
     */
    getEventElement: function(event) {
      return this.band._eventPainter._eventIdToElmt[event._id];
    },


    /**
     * Clear all timeline events.
     */
    clear: function() {
      this.eventSource.clear();
    },


  });


});
