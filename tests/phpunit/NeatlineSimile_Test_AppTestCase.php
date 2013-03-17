<?php

/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4 cc=76; */

/**
 * Test suite parent class.
 *
 * @package     omeka
 * @subpackage  neatline-SIMILE
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */


class NeatlineSimile_Test_AppTestCase extends Omeka_Test_AppTestCase
{


    /**
     * Bootstrap the plugin.
     */
    public function setUp()
    {
        parent::setUp();
        $pluginHelper = new Omeka_Test_Helper_Plugin;
        $pluginHelper->setUp('Neatline');
        $pluginHelper->setUp('NeatlineSimile');
    }


}
