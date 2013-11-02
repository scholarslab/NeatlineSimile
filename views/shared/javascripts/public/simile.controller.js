
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=80; */

/**
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

Neatline.module('Simile', { startWithParent: false,
  define: function(Simile) {


  Simile.Controller = Neatline.Shared.Controller.extend({


    slug: 'SIMILE',

    events:[
      { 'refresh': 'load' },
      'select'
    ],

    commands: [
      'focusByModel',
      'restart'
    ],


    /**
     * Instantiate the components and load starting events.
     */
    init: function() {
      this.collection = new Neatline.Shared.Record.Collection();
      this.view = new Simile.View({ slug: this.slug });
      this.load();
    },


    /**
     * Load timeline events.
     */
    load: function() {
     this.collection.update({widget: 'Simile'}, _.bind(function(records) {
        this.ingest(records);
      }, this));
    },


    /**
     * Restart the timeline and re-render the current collection.
     *
     * @param {Object} exhibit: The exhibit model.
     */
    restart: function(exhibit) {
      this.view.init(exhibit);
      this.ingest(this.collection);
    },


    /**
     * Render a collection of records on the timeline.
     *
     * @param {Object} records: The collection of records.
     */
    ingest: function(records) {
      this.view.ingest(records);
    },


    /**
     * Focus by model, unless the event was triggered by the timeline.
     *
     * @param {Object} args: Event arguments.
     */
    select: function(args) {
      if (args.source !== this.slug) this.focusByModel(args.model);
    },


    /**
     * Focus the timeline on a record's start date.
     *
     * @param {Object} model: The record model.
     */
    focusByModel: function(model) {
      this.view.focusByModel(model);
    }


  });


}});
