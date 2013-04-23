
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=76; */

/**
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

Neatline.module('Simile', function(
  Simile, Neatline, Backbone, Marionette, $, _) {


  /**
   * Load timeline events.
   */
  var load = function() {
    Simile.__collection.update({widget: 'simile'}, function(records) {
      ingest(records);
    });
  };
  Neatline.commands.setHandler(this.ID+':load', load);
  Neatline.vent.on('refresh', load);


  /**
   * Render a collection of records on the timeline.
   *
   * @param {Object} records: The collection of records.
   */
  var ingest = function(records) {
    Simile.__view.ingest(records);
  };
  Neatline.commands.setHandler(this.ID+':ingest', ingest);


  /**
   * Focus the timeline on a record's start date.
   *
   * @param {Object} model: The record model.
   */
  var focusByModel = function(model) {
    Simile.__view.focusByModel(model);
  };
  Neatline.commands.setHandler(this.ID+':focusByModel', focusByModel);


  /**
   * Focus by model, unless the event was triggered by the timeline.
   *
   * @param {Object} args: Event arguments.
   */
  var select = function(args) {
    if (args.source !== 'SIMILE') focusByModel(args.model);
  };
  Neatline.commands.setHandler(this.ID+':select', select);
  Neatline.vent.on('select', select);


});
