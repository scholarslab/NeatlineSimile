
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=80: */

/**
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

describe('Load Timelien Events', function() {


  var fixtures = {
    points:   readFixtures('NeatlineLoadTimelineEvents.points.json'),
    spans:    readFixtures('NeatlineLoadTimelineEvents.spans.json'),
    nostart:  readFixtures('NeatlineLoadTimelineEvents.nostart.json')
  };


  beforeEach(function() {
    SM.loadNeatline();
    SM.respondSimile200(fixtures.points);
    SM.setFocus('2000');
  });


  it('should load events when exhibit starts', function() {

    // ------------------------------------------------------------------------
    // When the exhibit starts, the starting set of records that arrives in
    // the initial query should be rendered on the timeline.
    // ------------------------------------------------------------------------

    SM.assertEventCount(3);

  });


  it('should render point events', function() {

    // ------------------------------------------------------------------------
    // Records that have a defined `start_date` but no `end_date` should be
    // rendered as point events (end date same as start date).
    // ------------------------------------------------------------------------

    var evt = SM.v.neatline.getEvents();
    expect(evt[0]._start).toEqual(new Date('2001'));
    expect(evt[0]._end).toEqual(new Date('2001'));
    expect(evt[1]._start).toEqual(new Date('2002'));
    expect(evt[1]._end).toEqual(new Date('2002'));
    expect(evt[2]._start).toEqual(new Date('2003'));
    expect(evt[2]._end).toEqual(new Date('2003'));

  });


  it('should render duration events', function() {

    // ------------------------------------------------------------------------
    // Records that have a defined `start_date` `end_date` should be rendered
    // as duration events (end date after start date).
    // ------------------------------------------------------------------------

    SM.refreshWidget(fixtures.spans);

    var evt = SM.v.neatline.getEvents();
    expect(evt[0]._start).toEqual(new Date('2001'));
    expect(evt[0]._end).toEqual(new Date('2004'));
    expect(evt[1]._start).toEqual(new Date('2002'));
    expect(evt[1]._end).toEqual(new Date('2005'));
    expect(evt[2]._start).toEqual(new Date('2003'));
    expect(evt[2]._end).toEqual(new Date('2006'));

  });


  it('should not render events with no start date', function() {

    // ------------------------------------------------------------------------
    // Records with no `start_date` should not be displayed at all.
    // ------------------------------------------------------------------------

    SM.refreshWidget(fixtures.nostart);
    SM.assertEventCount(2);

  });


  describe('should set fill colors', function() {

    // ------------------------------------------------------------------------
    // The DOM elements used to represent point on the timeline should be set
    // to the record's `fill_color`.
    // ------------------------------------------------------------------------

    it('point events', function() {
      SM.refreshWidget(fixtures.points);
    });

    it('duration events', function() {
      SM.refreshWidget(fixtures.spans);
    });

    afterEach(function() {

      var evt = SM.v.neatline.getEvents();
      var el1 = SM.v.neatline.getEventElement(evt[0]);
      var el2 = SM.v.neatline.getEventElement(evt[1]);
      var el3 = SM.v.neatline.getEventElement(evt[2]);

      var hex1 = SM.rgbToHex($(el1).css('background-color'));
      var hex2 = SM.rgbToHex($(el2).css('background-color'));
      var hex3 = SM.rgbToHex($(el3).css('background-color'));

      expect(hex1).toEqual('#111111');
      expect(hex2).toEqual('#222222');
      expect(hex3).toEqual('#333333');

    });

  });


  it('should reload events when exhibit is refreshed', function() {

    // ------------------------------------------------------------------------
    // When the exhibit is refreshed, the events should be updated.
    // ------------------------------------------------------------------------

    Neatline.vent.trigger('refresh');
    SM.respondSimile200(fixtures.spans);

    var evt = SM.v.neatline.getEvents();
    expect(evt[0]._start).toEqual(new Date('2001'));
    expect(evt[0]._end).toEqual(new Date('2004'));
    expect(evt[1]._start).toEqual(new Date('2002'));
    expect(evt[1]._end).toEqual(new Date('2005'));
    expect(evt[2]._start).toEqual(new Date('2003'));
    expect(evt[2]._end).toEqual(new Date('2006'));

    SM.assertEventCount(3);

  });


});
