
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=76; */

/**
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

describe('Subscribe `setFilter`', function() {


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


  describe('record has AFTER date', function() {

    var async = new AsyncSpec(this);

    beforeEach(function() {
      record = new Neatline.Shared.Record.Model({
        after_date: '2000'
      });
    });

    async.it('should pass when TL is after the date', function(done) {

      Neatline.vent.on('setFilter', function(args) {
        expect(args.evaluator(record)).toBeTruthy();
        done();
      });

      SM.setFocus('2001');

    });

    async.it('should fail when TL is before the date', function(done) {

      Neatline.vent.on('setFilter', function(args) {
        expect(args.evaluator(record)).toBeFalsy();
        done();
      });

      SM.setFocus('1999');

    });

  });


  describe('record has BEFORE date', function() {

    var async = new AsyncSpec(this);

    beforeEach(function() {
      record = new Neatline.Shared.Record.Model({
        before_date: '2000'
      });
    });

    async.it('should pass when before the date', function(done) {

      Neatline.vent.on('setFilter', function(args) {
        expect(args.evaluator(record)).toBeTruthy();
        done();
      });

      SM.setFocus('1999');

    });

    async.it('should fail when after the date', function(done) {

      Neatline.vent.on('setFilter', function(args) {
        expect(args.evaluator(record)).toBeFalsy();
        done();
      });

      SM.setFocus('2001');

    });

  });


  describe('record has AFTER and BEFORE dates', function() {

    var async = new AsyncSpec(this);

    beforeEach(function() {
      record = new Neatline.Shared.Record.Model({
        after_date: '2000',
        before_date: '2010'
      });
    });

    async.it('should pass when inside the interval', function(done) {

      Neatline.vent.on('setFilter', function(args) {
        expect(args.evaluator(record)).toBeTruthy();
        done();
      });

      SM.setFocus('2005');

    });

    async.it('should fail when before the interval', function(done) {

      Neatline.vent.on('setFilter', function(args) {
        expect(args.evaluator(record)).toBeFalsy();
        done();
      });

      SM.setFocus('1999');

    });

    async.it('should fail when after the interval', function(done) {

      Neatline.vent.on('setFilter', function(args) {
        expect(args.evaluator(record)).toBeFalsy();
        done();
      });

      SM.setFocus('2011');

    });

  });


});
