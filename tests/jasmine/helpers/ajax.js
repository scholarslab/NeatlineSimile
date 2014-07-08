
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
