<?php

/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4 cc=80: */

/**
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */


class NeatlineSimile_Case_Fixture extends NeatlineSimile_Case_Default
{


    protected $_isAdminTest = false;


    /**
     * Create a mock exhibit, register script paths.
     */
    public function setUp()
    {

        parent::setUp();

        // Register script paths.
        get_view()->setScriptPath(NL_SIMILE_DIR.'/views/shared');
        get_view()->addScriptPath(NL_DIR.'/views/shared');

        // Create a mock exhibit.
        $this->exhibit = $this->_exhibit();

    }


    /**
     * Get the Jasmine fixtures directory.
     *
     * @return string The directory.
     */
    protected function _getFixturesPath()
    {
        return NL_SIMILE_DIR.'/tests/jasmine/fixtures/';
    }


}
