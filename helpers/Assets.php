<?php

/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4 cc=76; */

/**
 * Asset helpers.
 *
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */


/**
 * Include the Simile API.
 */
function simile_queueSimileApi()
{
    nl_appendScript(
        'http://static.simile.mit.edu/timeline/api-2.3.0/timeline-api.js'
    );
}
