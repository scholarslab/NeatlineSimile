
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=76; */

/**
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */


var SM = (function(SM) {


  /**
   * Read JSON fixtures.
   */
  SM.loadJsonFixtures = function() {

    this.json = {

      EventLoading: {
        records: {
          points:   readFixtures('EventLoading.records.points.json'),
          spans:    readFixtures('EventLoading.records.spans.json'),
          nostart:  readFixtures('EventLoading.records.nostart.json')
        }
      },

      OutgoingEvents: {
        records:    readFixtures('OutgoingEvents.records.json')
      },

      EventFocusing: {
        records:    readFixtures('EventFocusing.records.json')
      }

    };

  };


  return SM;


})(SM || {});
