
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=76; */

/**
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

Neatline.module('Simile', { startWithParent: false,
  define: function(Simile, Neatline, Backbone, Marionette, $, _) {


  Simile.ID = 'SIMILE';


  /**
   * Since SIMILE publishes a record filter immediately on start-up, wait
   * until the rest of the modules are running before starting SIMILE.
   */
  Neatline.on('initialize:after', function() {
    Simile.start();
  });


  /**
   * Instantiate the components and trigger the starting event query.
   */
  Simile.addInitializer(function() {
    Simile.__collection = new Neatline.Shared.Record.Collection();
    Simile.__view = new Simile.View();
    Neatline.execute(Simile.ID+':load');
  });


}});
