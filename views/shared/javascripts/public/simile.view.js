
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
     * Start SIMILE, load events.
     */
    init: function() {
      this.__initSimile();
      // TODO
    },


    /**
     * Instantiate SIMILE.
     */
    __initSimile: function() {

      // Disable `__history__.html`.
      SimileAjax.History.enabled = false;

      this.timeline = Timeline.create(this.el, [
        Timeline.createBandInfo({
          intervalPixels: 100,
          intervalUnit: Timeline.DateTime.YEAR,
          width: '100%'
        })
      ]);

    }


  });


});
