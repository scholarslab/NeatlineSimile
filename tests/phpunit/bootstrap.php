<?php

/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4 cc=80: */

/**
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */


define('NL_SIMILE_DIR', dirname(dirname(dirname(__FILE__))));

// Load Neatline testing bootstrap.
require_once NL_SIMILE_DIR.'/Neatline/tests/phpunit/bootstrap.php';

// Load test cases.
require_once 'cases/NeatlineSimile_Case_Default.php';
require_once 'cases/NeatlineSimile_Case_Fixture.php';
