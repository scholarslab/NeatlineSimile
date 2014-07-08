<?php

/**
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */


class NeatlineSimile_Case_Default extends Neatline_Case_Default
{


    /**
     * Install NeatlineSimile.
     */
    public function setUp()
    {
        parent::setUp();
        $this->helper->setUp('NeatlineSimile');
    }


}
