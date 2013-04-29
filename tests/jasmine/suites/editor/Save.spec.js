
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=76; */

/**
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

describe('Form Save', function() {


  var el;


  beforeEach(function() {

    SM.loadEditor();

    el = {
      date:   SM.vw.EDITOR.$('input[name="simile-default-date"]'),
      unit:   SM.vw.EDITOR.$('select[name="simile-interval-unit"]'),
      pixels: SM.vw.EDITOR.$('input[name="simile-interval-pixels"]'),
      tape:   SM.vw.EDITOR.$('input[name="simile-tape-height"]'),
      track:  SM.vw.EDITOR.$('input[name="simile-track-height"]'),
      save:   SM.vw.EDITOR.$('a[name="save"]')
    };

  });


  it('should issue PUT request when "Save" is clicked', function() {

    // --------------------------------------------------------------------
    // When the "Save" button is clicked, a well-formed PUT request should
    // be issued to the exhibit API with the new data.
    // --------------------------------------------------------------------

    el.date.    val('1').   trigger('change');
    el.unit.    val('DAY'). trigger('change');
    el.pixels.  val('2').   trigger('change');
    el.tape.    val('3').   trigger('change');
    el.track.   val('4').   trigger('change');

    // Click "Save" button.
    el.save.trigger('click');

    // Route should be /neatline/put/:id, method PUT.
    NL.assertLastRequestRoute(Neatline.global.exhibits_api);
    NL.assertLastRequestMethod('PUT');

    // Decode request parameters.
    var params = NL.getLastRequestParams();

    // Check query string values.
    expect(params.simile_default_date).     toEqual('1');
    expect(params.simile_interval_unit).    toEqual('DAY');
    expect(params.simile_interval_pixels).  toEqual('2');
    expect(params.simile_tape_height).      toEqual('3');
    expect(params.simile_track_height).     toEqual('4');

  });


});
