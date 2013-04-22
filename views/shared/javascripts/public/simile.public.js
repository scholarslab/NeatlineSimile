
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
  Neatline.commands.setHandler('SIMILE:load', load);
  Neatline.vent.on('refresh', load);


  /**
   * Render a collection of records on the timeline.
   *
   * @param {Object} records: The collection of records.
   */
  var ingest = function(records) {
    Simile.__view.ingest(records);
  };
  Neatline.commands.setHandler('SIMILE:ingest', ingest);


});
