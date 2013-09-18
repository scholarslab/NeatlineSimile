
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=80; */

/**
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

describe('Exhibit Defaults', function() {


  beforeEach(function() {
    loadFixtures('SharedHtml.exhibit.html');
  });


  it('should set default date', function() {

    // ------------------------------------------------------------------------
    // If a default date for the timeline has been set, it should be set when
    // the exhibit starts.
    // ------------------------------------------------------------------------

    // Mock `simile_default_date`.
    Neatline.g.neatline.exhibit.simile_default_date = '1900-02-01';

    NL.startApplication();
    SM.aliasNeatline();

    SM.assertCurrentYear(1900);

  });


  it('should set current date when no default exists', function() {

    // ------------------------------------------------------------------------
    // When no default date is defined, the timeline should default to the
    // current date.
    // ------------------------------------------------------------------------

    NL.startApplication();
    SM.aliasNeatline();

    SM.assertCurrentYear(new Date().getFullYear());

  });


  it('should set interval unit', function() {

    // ------------------------------------------------------------------------
    // The "Interval Unit" field should be manifested.
    // ------------------------------------------------------------------------

    NL.startApplication();
    SM.aliasNeatline();

    SM.assertIntervalUnit(1000*60*60*24*365);

  });


  it('should set interval pixels', function() {

    // ------------------------------------------------------------------------
    // The "Interval Pixels" field should be manifested.
    // ------------------------------------------------------------------------

    NL.startApplication();
    SM.aliasNeatline();

    SM.assertIntervalPixels(100);

  });


  it('should set track height', function() {

    // ------------------------------------------------------------------------
    // The "Track Height" field should be manifested.
    // ------------------------------------------------------------------------

    NL.startApplication();
    SM.aliasNeatline();

    SM.assertTrackHeight(30);

  });


  it('should set tape height', function() {

    // ------------------------------------------------------------------------
    // The "Tape Height" field should be manifested.
    // ------------------------------------------------------------------------

    NL.startApplication();
    SM.aliasNeatline();

    SM.assertTapeHeight(10);

  });


});
