
/**
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */


var SM = (function(SM) {


  /**
   * Shortcut public views.
   */
  SM.aliasNeatline = function() {
    this.v = {
      neatline: Neatline.Simile.__controller.view
    };
  };


  /**
   * Shortcut editor views.
   */
  SM.aliasEditor = function() {
    this.v = {
      neatline: Neatline.Simile.__controller.view,
      editor:   Neatline.Editor.Exhibit.Simile.__controller.view
    };
  };


  return SM;


})(SM || {});
