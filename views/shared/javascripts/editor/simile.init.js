
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=76; */

/**
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

Neatline.module('Editor.Exhibit.Simile', function(
  Simile, Neatline, Backbone, Marionette, $, _) {


  Simile.ID = 'EDITOR:SIMILE';


  Simile.addInitializer(function() {
    Simile.__router = new Simile.Router();
    Simile.__view = new Simile.View();
  });


});
