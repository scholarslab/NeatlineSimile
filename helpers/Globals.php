<?php

/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4 cc=80; */

/**
 * @package     omeka
 * @subpackage  neatline
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */


/**
 * Construct the strings array.
 *
 * @return array The array of strings.
 */
function simile_globals()
{

    return array('simile' => array(

        // STRINGS
        // --------------------------------------------------------------------

        'strings' => array(

            'settings' => array(
                'save' => array(
                    'success' => __('The settings were saved successfully!'),
                    'error' => __('ERROR: The settings were not saved.'),
                ),
            )

        )
    
    ));

}
