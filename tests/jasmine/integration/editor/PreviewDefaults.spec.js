
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=76; */

/**
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

describe('Preview Defaults', function() {


  var el, fx = {
    records: readFixtures('Form.records.json')
  };


  beforeEach(function() {

    SM.loadEditor();
    SM.respondSimile200(fx.records);

    el = {
      date:   SM.vw.EDITOR.$('input[name="simile-default-date"]'),
      unit:   SM.vw.EDITOR.$('select[name="simile-interval-unit"]'),
      pixels: SM.vw.EDITOR.$('input[name="simile-interval-pixels"]'),
      tape:   SM.vw.EDITOR.$('input[name="simile-tape-height"]'),
      track:  SM.vw.EDITOR.$('input[name="simile-track-height"]')
    };

  });


  afterEach(function() {

    var spy = spyOn(Neatline.vent, 'trigger');
    var evt = SM.vw.PUBLIC.getEvents();

    // Should re-render events.
    expect(evt[0]._start).toEqual(new Date('2001'));
    expect(evt[0]._end).toEqual(new Date('2001'));
    expect(evt[1]._start).toEqual(new Date('2002'));
    expect(evt[1]._end).toEqual(new Date('2002'));
    expect(evt[2]._start).toEqual(new Date('2003'));
    expect(evt[2]._end).toEqual(new Date('2003'));
    SM.assertEventCount(3);

    // Should re-bind scroll listener.
    SM.setFocus('2000');
    expect(spy.mostRecentCall.args[0]).toEqual('setFilter');

    // Should re-bind select listener.
    SM.clickEvent(evt[0]);
    expect(spy.mostRecentCall.args[0]).toEqual('select');

  });


  it('should update default date', function() {

    // --------------------------------------------------------------------
    // When the value of "Default Date" is changed, the timeline should
    // preview the new date.
    // --------------------------------------------------------------------

    el.date.val('1900-02-01').trigger('change');
    SM.assertCurrentYear(1900);

  });


  it('should update interval unit', function() {

    // --------------------------------------------------------------------
    // When the value of "Interval Unit" is changed, the timeline should
    // preview the new unit.
    // --------------------------------------------------------------------

    el.unit.val('DAY').trigger('change');
    SM.assertIntervalUnit(1000*60*60*24);

  });


  it('should update interval pixels', function() {

    // --------------------------------------------------------------------
    // When the value of "Interval Pixels" is changed, the timeline should
    // preview the new interval.
    // --------------------------------------------------------------------

    el.pixels.val('50').trigger('change');
    SM.assertIntervalPixels(50);

  });


  it('should update track height', function() {

    // --------------------------------------------------------------------
    // When the value of "Track Height" is changed, the timeline should
    // preview the new height.
    // --------------------------------------------------------------------

    el.track.val('50').trigger('change');
    SM.assertTrackHeight(50);

  });


  it('should update tape height', function() {

    // --------------------------------------------------------------------
    // When the value of "Tape Height" is changed, the timeline should
    // preview the new height.
    // --------------------------------------------------------------------

    el.tape.val('50').trigger('change');
    SM.assertTapeHeight(50);

  });


});
