
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=76; */

/**
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

describe('Form Router', function() {


  beforeEach(function() {

    SM.loadEditor();

    el = {
      simile: NL.vw.EXHIBIT.$('li[data-slug="simile"]')
    };

  });


  it('#simile', function() {

    NL.navigate('simile');

    // Tabs and waypoints form should be visible.
    expect(NL.vw.EDITOR.__ui.editor).toContain(NL.vw.EXHIBIT.$el);
    expect(NL.vw.EDITOR.__ui.editor).toContain(SM.vw.EDITOR.$el);

    // "Simile" tab should be active.
    expect(el.simile).toHaveClass('active');

  });


});
