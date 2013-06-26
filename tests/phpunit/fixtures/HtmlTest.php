<?php

/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4 cc=76; */

/**
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

class FixturesTest_Html extends NeatlineSimile_Case_Default
{


    protected $_isAdminTest = false;


    /**
     * Mock an exhibit and set it on the view.
     */
    public function setUp()
    {

        parent::setUp();

        // Mock exhibit.
        $exhibit = $this->_exhibit();
        $exhibit->base_layer = 'OpenStreetMap';
        $exhibit->widgets = 'Simile';
        $exhibit->save();

        // Reload to join extensions.
        $exhibit = $this->_reload($exhibit);

        // Set exhibit on view.
        get_view()->neatline_exhibit = $exhibit;

    }


    public function testNeatlinePartial()
    {
        $this->_writeFixture(
            get_view()->partial('exhibits/partials/exhibit.php'),
            'neatline-partial.html'
        );
    }


    public function testEditorPartial()
    {
        $this->_writeFixture(
            get_view()->partial('exhibits/partials/editor_core.php'),
            'editor-partial.html'
        );
    }


}
