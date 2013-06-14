
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=76; */

/**
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

describe('Event Focusing', function() {


  beforeEach(function() {
    SM.loadNeatline();
    SM.vw.PUBLIC.setCenterDate('1999-02-01');
  });


  it('should focus on event on `select`', function() {

    // --------------------------------------------------------------------
    // When the `select` event is triggered with a model that has a start
    // date, the timeline should focus on the date.
    // --------------------------------------------------------------------

    var record = new Neatline.Shared.Record.Model({
      start_date: '2000-02-01'
    });

    // `select` should focus timeline.
    Neatline.vent.trigger('select', { model: record });
    SM.assertCurrentYear(2000);

  });


  it('should not focus when model has no start date', function() {

    // --------------------------------------------------------------------
    // When the model does not have a start date, the timeline should not
    // change focus position.
    // --------------------------------------------------------------------

    var record = new Neatline.Shared.Record.Model();

    // `select` should not focus timeline.
    Neatline.vent.trigger('select', { model: record });
    SM.assertCurrentYear(1999);

  });


  it('should not focus when event is clicked', function() {

    // --------------------------------------------------------------------
    // When a timeline event is clicked, the timeline should _not_ focus
    // on the start date of the event.
    // --------------------------------------------------------------------

    // Load an event.
    SM.respondSimile200(SM.json.EventFocusing.records);

    // Click on the event.
    SM.clickEvent(SM.vw.PUBLIC.getEvents()[0]);

    // Should not focus.
    SM.assertCurrentYear(1999);

  });


});
