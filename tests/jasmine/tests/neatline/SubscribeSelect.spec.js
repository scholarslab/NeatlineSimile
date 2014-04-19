
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=80: */

/**
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

describe('Subscribe `select`', function() {


  var fixtures = {
    records: readFixtures('NeatlineSubscribeSelect.json')
  };


  beforeEach(function() {
    SM.loadNeatline();
    SM.setFocus('1999-02-01');
  });


  it('should focus on `start_date` when no `end_date`', function() {

    // ------------------------------------------------------------------------
    // When `select` is triggered with a model that has a `start_date` but no
    // `end_date`, the timeline should focus on the start date.
    // ------------------------------------------------------------------------

    var record = new Neatline.Shared.Record.Model({
      start_date: '2000-02-01'
    });

    // `select` should focus timeline.
    Neatline.vent.trigger('select', { model: record });
    SM.assertCurrentYear(2000);

  });


  it('should focus on middle point when `end_date`', function() {

    // ------------------------------------------------------------------------
    // When the model has a `start_date` and an `end_date`, the timeline
    // should focus on the center of the span.
    // ------------------------------------------------------------------------

    var record = new Neatline.Shared.Record.Model({
      start_date: '2000-02-01',
      end_date:   '2002-02-01'
    });

    // `select` should focus timeline.
    Neatline.vent.trigger('select', { model: record });
    SM.assertCurrentYear(2001);

  });


  it('should not focus when model has no `start_date`', function() {

    // ------------------------------------------------------------------------
    // When the model does not have a start date, the timeline should not
    // change focus position.
    // ------------------------------------------------------------------------

    var record = new Neatline.Shared.Record.Model();

    // `select` should not focus timeline.
    Neatline.vent.trigger('select', { model: record });
    SM.assertCurrentYear(1999);

  });


  it('should not focus when event is clicked', function() {

    // ------------------------------------------------------------------------
    // When a timeline event is clicked, the timeline should _not_ focus on
    // the start date of the event.
    // ------------------------------------------------------------------------

    // Load an event.
    SM.respondSimile200(fixtures.records);

    // Click on the event.
    SM.clickEvent(SM.v.neatline.getEvents()[0]);

    // Should not focus.
    SM.assertCurrentYear(1999);

  });


});
