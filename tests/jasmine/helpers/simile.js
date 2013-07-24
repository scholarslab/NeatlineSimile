
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=76; */

/**
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */


var SM = (function(SM) {


  /**
   * Click on an event.
   *
   * @param {Object} event: The event.
   */
  SM.clickEvent = function(event) {
    this.vw.PUBLIC.band._eventPainter._showBubble(1, 2, event);
  };


  /**
   * Set the focus date.
   *
   * @param {String} date: The date.
   */
  SM.setFocus = function(date) {
    this.vw.PUBLIC.setCenterDate(new Date(date));
  };


  return SM;


})(SM || {});
