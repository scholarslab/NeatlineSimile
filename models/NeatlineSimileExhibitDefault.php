<?php

/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4 cc=80; */

/**
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

class NeatlineSimileExhibitDefault extends Neatline_Row_Abstract
{


    public $exhibit_id;
    public $default_date;
    public $interval_unit   = 'YEAR';
    public $interval_pixels = 100;
    public $tape_height     = 10;
    public $track_height    = 30;


}
