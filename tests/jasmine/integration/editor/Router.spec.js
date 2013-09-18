
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=80; */

/**
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

describe('Router', function() {


  var el;


  beforeEach(function() {

    SM.loadEditor();

    el = {
      simile: NL.vw.EXHIBIT.$('li[data-slug="simile"]')
    };

  });


  it('#simile', function() {

    // ------------------------------------------------------------------------
    // `#simile` should activate the tab and show the timeline defaults form.
    // ------------------------------------------------------------------------

    NL.navigate('simile');

    // Tabs and SIMILE form should be visible.
    expect(NL.vw.EDITOR.__ui.editor).toContain(NL.vw.EXHIBIT.$el);
    expect(NL.vw.EDITOR.__ui.editor).toContain(SM.vw.EDITOR.$el);

    // "SIMILE Timeline" tab should be active.
    expect(el.simile).toHaveClass('active');

  });


});
