
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
    this.v.neatline.band._eventPainter._showBubble(1, 2, event);
  };


  /**
   * Set the focus date.
   *
   * @param {String} date: The date.
   */
  SM.setFocus = function(date) {
    this.v.neatline.setCenterDate(new Date(date));
  };


  return SM;


})(SM || {});
