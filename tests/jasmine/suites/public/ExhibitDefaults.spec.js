
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=76; */

/**
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

describe('Exhibit Defaults', function() {


  beforeEach(function() {
    loadFixtures('neatline-partial.html');
  });


  it('should set track height', function() {

    // --------------------------------------------------------------------
    // When the exhibit starts, the `simile_track_height` field should be
    // manifested in the timeline theme.
    // --------------------------------------------------------------------

    NL.startApplication();
    SM.aliasNeatline();

    expect(SM.vw.PUBLIC.theme.event.track.height).toEqual(30);

  });


  it('should set tape height', function() {

    // --------------------------------------------------------------------
    // When the exhibit starts, the `simile_tape_height` field should be
    // manifested in the timeline theme.
    // --------------------------------------------------------------------

    NL.startApplication();
    SM.aliasNeatline();

    expect(SM.vw.PUBLIC.theme.event.tape.height).toEqual(8);

  });


  it('should set interval pixels', function() {

    // --------------------------------------------------------------------
    // When the exhibit starts, the `simile_tape_height` field should be
    // manifested in the timeline theme.
    // --------------------------------------------------------------------

    NL.startApplication();
    SM.aliasNeatline();

    expect(SM.vw.PUBLIC.band._bandInfo.ether._pixelsPerInterval).
      toEqual(100);

  });


  it('should set interval unit', function() {

    // --------------------------------------------------------------------
    // When the exhibit starts, the `simile_interval_unit` field should be
    // manifested in the timeline theme.
    // --------------------------------------------------------------------

    NL.startApplication();
    SM.aliasNeatline();

    expect(SM.vw.PUBLIC.band._bandInfo.ether._interval).
      toEqual(1000*60*60*24*365);

  });


  it('should set default date', function() {

    // --------------------------------------------------------------------
    // If a default date for the timeline has been set, the date should be
    // set when the exhibit starts.
    // --------------------------------------------------------------------

    // Mock `simile_default_date`.
    Neatline.global.exhibit.simile_default_date = '1900-02-01';

    NL.startApplication();
    SM.aliasNeatline();

    SM.assertCurrentYear(1900);

  });


  it('should set current date when no default exists', function() {

    // --------------------------------------------------------------------
    // When no default date is defined, the timeline should default to the
    // current date.
    // --------------------------------------------------------------------

    NL.startApplication();
    SM.aliasNeatline();

    SM.assertCurrentYear(new Date().getFullYear());

  });


});
