
/**
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

describe('Hard linking Neatline Records', function() {

  var fixtures = {
    after: readFixtures('NeatlineLoadTimelineEvents.after.json')
  };

  beforeEach(function() {
    jasmine.clock().install();
    SM.loadNeatline();
    SM.respondSimile200(fixtures.after);
    SM.setFocus('2015');
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should properly position the timeline.', function() {
    var after = JSON.parse(fixtures.after);

    NL.navigate('records/' + after.records[0].id);
    jasmine.clock().tick(1000);
    SM.assertCurrentYear(1949);

    NL.navigate('records/' + after.records[1].id);
    jasmine.clock().tick(1000);
    SM.assertCurrentYear(2005);

    NL.navigate('records/' + after.records[2].id);
    jasmine.clock().tick(1000);
    SM.assertCurrentYear(1371);
  });

});
