<?php

/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4 cc=76; */

/**
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

    // SimileAjax:
    nl_appendScript(web_path_to(
        'javascripts/payloads/simile/dist/timeline_ajax/simile-ajax-api.js').
        '?bundle=true'
    );

    // Timeline:
    nl_appendScript(web_path_to(
        'javascripts/payloads/simile/dist/timeline_js/timeline-api.js').
        '?bundle=true'
    );

}
