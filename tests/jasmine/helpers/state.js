
/**
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */


var SM = (function(SM) {


  /**
   * Load neatline application.
   */
  SM.loadNeatline = function() {
    loadFixtures('SharedHtml.exhibit.html');
    NL.__initNeatline();
    this.aliasNeatline();
  };


  /**
   * Load editor application.
   */
  SM.loadEditor = function() {
    loadFixtures('SharedHtml.editor.html');
    NL.__initEditor();
    this.aliasEditor();
  };


  /**
   * Refresh the timeline.
   *
   * @param {Object} response: The response body.
   */
  SM.refreshWidget = function(response) {
    Neatline.vent.trigger('refresh');
    this.respondSimile200(response);
  };


  return SM;


})(SM || {});
