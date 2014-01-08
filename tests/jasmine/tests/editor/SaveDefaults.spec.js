
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=80; */

/**
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

describe('Save Defaults', function() {


  var elements;


  beforeEach(function() {

    SM.loadEditor();

    elements = {
      unit:   SM.v.editor.$('select[name="simile-interval-unit"]'),
      date:   SM.v.editor.$('input[name="simile-default-date"]'),
      pixels: SM.v.editor.$('input[name="simile-interval-pixels"]'),
      tape:   SM.v.editor.$('input[name="simile-tape-height"]'),
      track:  SM.v.editor.$('input[name="simile-track-height"]'),
      save:   SM.v.editor.$('a[name="save"]')
    };

  });


  it('should issue PUT request when "Save" is clicked', function() {

    // ------------------------------------------------------------------------
    // When the "Save" button is clicked, a PUT request should be issued to
    // the exhibit API with the new values.
    // ------------------------------------------------------------------------

    elements.unit.    val('DAY'). trigger('change');
    elements.date.    val('1').   trigger('change');
    elements.pixels.  val('2').   trigger('change');
    elements.tape.    val('3').   trigger('change');
    elements.track.   val('4').   trigger('change');

    // Click "Save" button.
    elements.save.trigger('click');

    // Should issue PUT request to exhibits API.
    NL.assertLastRequestRoute(Neatline.g.neatline.exhibit_api);
    NL.assertLastRequestMethod('PUT');

    // Parse request parameters.
    var params = NL.getLastRequestParams();

    // Check request parameters.
    expect(params.simile_interval_unit).    toEqual('DAY');
    expect(params.simile_default_date).     toEqual('1');
    expect(params.simile_interval_pixels).  toEqual('2');
    expect(params.simile_tape_height).      toEqual('3');
    expect(params.simile_track_height).     toEqual('4');

  });


  it('should flash notification when save succeeds', function() {

    // ------------------------------------------------------------------------
    // When the "Save" button is clicked and the request succeeds, a success
    // notification should be displayed.
    // ------------------------------------------------------------------------

    spyOn(toastr, 'info');

    // Click on "Save".
    elements.save.trigger('click');
    NL.respondLast200('[]');

    // Should flash success.
    expect(toastr.info).toHaveBeenCalledWith(
      Neatline.g.simile.strings.settings.save.success
    );

  });


  it('should flash notification when save fails', function() {

    // ------------------------------------------------------------------------
    // When the "Save" button is clicked and the request fails, a failure
    // notification should be displayed.
    // ------------------------------------------------------------------------

    spyOn(toastr, 'error');

    // Click on "Save".
    elements.save.trigger('click');
    NL.respondLast500();

    // Should flash error.
    expect(toastr.error).toHaveBeenCalledWith(
      Neatline.g.simile.strings.settings.save.error
    );

  });


});
