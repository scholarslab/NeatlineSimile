
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=76; */

/**
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */


var SM = (function(SM) {


  /**
   * Assert the number of vector layers.
   *
   * @param {Number} count: The number.
   */
  SM.assertEventCount = function(count) {
    expect(this.vw.PUBLIC.eventSource.getCount()).toEqual(count);
  };


  /**
   * Assert the current year of the focus date.
   *
   * @param {Number} year: The current year.
   */
  SM.assertCurrentYear = function(year) {
    var now = this.vw.PUBLIC.band.getCenterVisibleDate().getFullYear();
    expect(now).toEqual(year);
  };


  return SM;


})(SM || {});
