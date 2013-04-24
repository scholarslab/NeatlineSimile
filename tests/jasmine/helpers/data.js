
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=76; */

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
