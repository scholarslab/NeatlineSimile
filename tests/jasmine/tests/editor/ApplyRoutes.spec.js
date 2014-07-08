
/**
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

describe('Apply Routes', function() {


  var elements;


  beforeEach(function() {

    SM.loadEditor();

    elements = {
      simile: NL.v.exhibit.$('li[data-slug="simile"]')
    };

  });


  it('#simile', function() {

    // ------------------------------------------------------------------------
    // `#simile` should activate the tab and show the timeline defaults form.
    // ------------------------------------------------------------------------

    NL.navigate('simile');

    // Tabs and SIMILE form should be visible.
    expect(NL.v.editor.__ui.editor).toContainHtml(NL.v.exhibit.$el);
    expect(NL.v.editor.__ui.editor).toContainHtml(SM.v.editor.$el);

    // "SIMILE Timeline" tab should be active.
    expect(elements.simile).toHaveClass('active');

  });


});
