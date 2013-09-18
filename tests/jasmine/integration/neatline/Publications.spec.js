
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=80; */

/**
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

describe('Publications', function() {


  var vent, fx = {
    records: readFixtures('NeatlinePublications.json')
  };


  describe('setFilter', function() {

    // ------------------------------------------------------------------------
    // The `setFilter` event should be published with a source, evaluator, and
    // key when the exhibit starts and when the timeline is moved.
    // ------------------------------------------------------------------------

    afterEach(function() {

      var args = vent.mostRecentCall.args;

      // Should publish `setFilter`.
      expect(args[0]).toEqual('setFilter');

      // Should provide source, key, and evaluator.
      expect(args[1].source).toEqual(Neatline.Simile.ID);
      expect(_.isFunction(args[1].evaluator)).toBeTruthy();
      expect(args[1].key).toEqual('simile');

    });

    it('should publish `setFilter` when exhibit starts', function() {

      vent = spyOn(Neatline.vent, 'trigger');

      // Start exhibit.
      SM.loadNeatline();

    });

    it('should publish `setFilter` when band is moved', function() {

      SM.loadNeatline();
      vent = spyOn(Neatline.vent, 'trigger');

      // Move timeline.
      SM.setFocus('2000');

    });

  });


  describe('select', function() {

    it('should publish `select` when event is clicked', function() {

      // ----------------------------------------------------------------------
      // The `select` event should be published with a source and model when
      // an event is clicked.
      // ----------------------------------------------------------------------

      SM.loadNeatline();
      SM.respondSimile200(fx.records);

      // Click an event.
      vent = spyOn(Neatline.vent, 'trigger');
      var event = SM.vw.PUBLIC.getEvents()[0];
      SM.clickEvent(event);

      // Should publish `select`.
      expect(vent).toHaveBeenCalledWith('select', {
        source: Neatline.Simile.ID,
        model:  event.nModel
      });

    });

  });


});
