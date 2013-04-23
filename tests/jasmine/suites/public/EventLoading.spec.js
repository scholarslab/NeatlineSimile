
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=76; */

/**
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

describe('Event Loading', function() {


  beforeEach(function() {
    SM.loadNeatline();
  });


  it('should load events when exhibit starts');
  it('should render point events');
  it('should render duration events');
  it('should not render events with no start date');
  it('should set fill color on point events');
  it('should set fill color on duration events');
  it('should reload events when exhibit is refreshed');


});
