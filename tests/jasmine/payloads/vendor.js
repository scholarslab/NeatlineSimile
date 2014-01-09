
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=80; */

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


/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=80; */

/**
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */


var SM = (function(SM) {


  /**
   * Respond 200 to a SIMILE wdiget collection request.
   *
   * @param {Object} response: The response body.
   */
  SM.respondSimile200 = function(response) {
    _.each(NL.server.requests, _.bind(function(request) {
      if (_.str.include(request.url, 'widget=Simile')) {
        NL.respond200(request, response);
      }
    }, this));
  };


  return SM;


})(SM || {});


/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=80; */

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


/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=80; */

/**
 * @package     omeka
 * @subpackage  neatline-Waypoints
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */


var SM = (function(SM) {


  /**
   * Convert an RGH CSS color string to hexadecimal format:
   * "rgb(0, 0, 0)" -> "#000000"
   *
   * @return {String} hex: The hex color.
   */
  SM.rgbToHex = function(rgb) {

    rgb = rgb.split('(')[1].split(')')[0].split(',');

    var hex = _.map(rgb, function(val) {
      val = parseInt(val).toString(16);
      return val.length == 1 ? '0' + val : val;
    }).join('');

    return '#' + hex;

  };


  return SM;


})(SM || {});


/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=80; */

/**
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */


/**
 * Load SIMILE.
 */
document.write('<script type="text/javascript" src="/views/shared/javascripts/payloads//simile/ajax/simile-ajax-api.js?bundle=true"></script>');
document.write('<script type="text/javascript" src="/views/shared/javascripts/payloads//simile/js/timeline-api.js?bundle=true"></script>');


/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=80; */

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


/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=80; */

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
