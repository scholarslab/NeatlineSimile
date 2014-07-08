
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
    expect(this.v.neatline.eventSource.getCount()).toEqual(count);
  };


  /**
   * Assert the current year of the focus date.
   *
   * @param {Number} year: The current year.
   */
  SM.assertCurrentYear = function(year) {
    var now = this.v.neatline.band.getCenterVisibleDate().getFullYear();
    expect(now).toEqual(year);
  };


  /**
   * Assert the interval unit.
   *
   * @param {Number} ms: The time unit in milliseconds.
   */
  SM.assertIntervalUnit = function(ms) {
    expect(this.v.neatline.band._bandInfo.ether._interval).toEqual(ms);
  };


  /**
   * Assert the interval width.
   *
   * @param {Number} pixels: The width.
   */
  SM.assertIntervalPixels = function(pixels) {
    expect(this.v.neatline.band._bandInfo.ether._pixelsPerInterval).
      toEqual(pixels);
  };


  /**
   * Assert the track height.
   *
   * @param {Number} height: The height.
   */
  SM.assertTrackHeight = function(height) {
    expect(this.v.neatline.theme.event.track.height).toEqual(height);
  };


  /**
   * Assert the tape height.
   *
   * @param {Number} height: The height.
   */
  SM.assertTapeHeight = function(height) {
    expect(this.v.neatline.theme.event.tape.height).toEqual(height);
  };


  return SM;


})(SM || {});
