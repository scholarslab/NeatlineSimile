<?php

/**
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

class FixturesTest_SharedHtml extends NeatlineSimile_Case_Fixture
{


    /**
     * Activate the SIMILE widget.
     */
    public function setUp()
    {

        parent::setUp();

        // Set spatial layer, flip on SIMILE.
        $this->exhibit->spatial_layer = 'OpenStreetMap';
        $this->exhibit->widgets = 'Simile';
        $this->exhibit->save();

        // Reload to join extensions.
        $this->exhibit = $this->_reload($this->exhibit);

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
