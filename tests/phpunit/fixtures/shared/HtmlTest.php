<?php

/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4 cc=80; */

/**
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

class FixturesTest_SharedHtml extends NeatlineSimile_Case_Default
{


    protected $_isAdminTest = false;


    /**
     * Mock an exhibit and set it on the view.
     */
    public function setUp()
    {

        parent::setUp();

        $exhibit = $this->_exhibit();
        $exhibit->spatial_layer = 'OpenStreetMap';
        $exhibit->widgets = 'Simile';
        $exhibit->save();

        // Reload to join extensions.
        $this->exhibit = $this->_reload($exhibit);

    }


    public function testNeatlinePartial()
    {
        $this->_writeExhibitMarkupFixture($this->exhibit,
            'SharedHtml.exhibit.html'
        );
    }


    public function testEditorPartial()
    {
        $this->_writeEditorMarkupFixture($this->exhibit,
            'SharedHtml.editor.html'
        );
    }


}
