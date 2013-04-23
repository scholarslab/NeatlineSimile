
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=76; */

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
    this.vw = {
      PUBLIC: Neatline.Simile.__view
    };
  };


  /**
   * Shortcut editor views.
   */
  SM.aliasEditor = function() {
    this.vw = {
      PUBLIC: Neatline.Simile.__view,
      EDITOR: Neatline.Editor.Exhibit.Simile.__view
    };
  };


  return SM;


})(SM || {});
