
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=76; */

/**
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

describe('Map Interactions', function() {


  beforeEach(function() {
    SM.loadNeatline();
  });


  describe('record has no visibility dates', function() {
    it('should always be visible');
  });


  describe('record has show after date', function() {
    it('should be visible when timeline is after the date');
    it('should be hidden when timeline is before the date');
  });


  describe('record has show before date', function() {
    it('should be visible when timeline is before the date');
    it('should be hidden when timeline is after the date');
  });


  describe('record has show after and before dates', function() {
    it('should be visible when timeline is between dates');
    it('should be hidden when timeline is before the interval');
    it('should be hidden when timeline is after the interval');
  });


});
