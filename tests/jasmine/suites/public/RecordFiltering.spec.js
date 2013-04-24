
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=76; */

/**
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

describe('Record Filtering', function() {


  var record;


  beforeEach(function() {
    SM.loadNeatline();
  });


  afterEach(function() {
    Neatline.vent.off('setFilter');
  });


  describe('record has no visibility dates', function() {

    var async = new AsyncSpec(this);

    beforeEach(function() {
      record = new Neatline.Shared.Record.Model();
    });

    async.it('should always pass', function(done) {

      Neatline.vent.on('setFilter', function(args) {
        expect(args.evaluator(record)).toBeTruthy();
        done();
      });

      SM.setFocus('2000');

    });

  });


  describe('record has show after date', function() {

    var async = new AsyncSpec(this);

    beforeEach(function() {
      record = new Neatline.Shared.Record.Model({
        show_after_date: '2000'
      });
    });

    async.it('should pass when TL is after the date', function(done) {

      Neatline.vent.on('setFilter', function(args) {
        expect(args.evaluator(record)).toBeTruthy();
        done();
      });

      SM.setFocus('2001');

    });

    async.it('should block when TL is before the date', function(done) {

      Neatline.vent.on('setFilter', function(args) {
        expect(args.evaluator(record)).toBeFalsy();
        done();
      });

      SM.setFocus('1999');

    });

  });


  describe('record has show before date', function() {

    var async = new AsyncSpec(this);

    beforeEach(function() {
      record = new Neatline.Shared.Record.Model({
        show_before_date: '2000'
      });
    });

    async.it('should pass when before the date', function(done) {

      Neatline.vent.on('setFilter', function(args) {
        expect(args.evaluator(record)).toBeTruthy();
        done();
      });

      SM.setFocus('1999');

    });

    async.it('should block when after the date', function(done) {

      Neatline.vent.on('setFilter', function(args) {
        expect(args.evaluator(record)).toBeFalsy();
        done();
      });

      SM.setFocus('2001');

    });

  });


  describe('record has show after and before dates', function() {

    var async = new AsyncSpec(this);

    beforeEach(function() {
      record = new Neatline.Shared.Record.Model({
        show_after_date: '2000',
        show_before_date: '2010'
      });
    });

    async.it('should pass when inside the interval', function(done) {

      Neatline.vent.on('setFilter', function(args) {
        expect(args.evaluator(record)).toBeTruthy();
        done();
      });

      SM.setFocus('2005');

    });

    async.it('should block when before the interval', function(done) {

      Neatline.vent.on('setFilter', function(args) {
        expect(args.evaluator(record)).toBeFalsy();
        done();
      });

      SM.setFocus('1999');

    });

    async.it('should block when after the interval', function(done) {

      Neatline.vent.on('setFilter', function(args) {
        expect(args.evaluator(record)).toBeFalsy();
        done();
      });

      SM.setFocus('2011');

    });

  });


});
