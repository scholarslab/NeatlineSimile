
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=76; */

/**
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

Neatline.module('Simile', function(
  Simile, Neatline, Backbone, Marionette, $, _) {


  Simile.ID = 'SIMILE';


  Simile.addInitializer(function() {
    Simile.__collection = new Neatline.Shared.Record.Collection();
    Simile.__view = new Simile.View();
    Neatline.execute(Simile.ID+':load');
  });


});