
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=76; */

/**
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

Neatline.module('Editor.Exhibit.Simile', function(
  Simile, Neatline, Backbone, Marionette, $, _) {


  /**
   * Fetch the exhibit and display the form.
   *
   * @param {Object} container: The container element.
   */
  var display = function(container) {
    Simile.__view.showIn(container);
  };
  Neatline.commands.setHandler(Simile.ID+':display', display);


});
