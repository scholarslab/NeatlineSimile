<?php

/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4 cc=76; */

/**
 * Plugin manager class.
 *
 * @package     omeka
 * @subpackage  neatline-SIMILE
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */


class NeatlineSimilePlugin extends Omeka_Plugin_AbstractPlugin
{


    protected $_hooks = array(
        'neatline_public_js',
        'neatline_editor_js'
    );


    protected $_filters = array(
        'neatline_widgets'
    );


    /**
     * Queue public payload.
     */
    public function hookNeatlinePublicJs()
    {
        // TODO
    }


    /**
     * Queue editor payload.
     */
    public function hookNeatlineEditorJs()
    {
        // TODO
    }


    /**
     * Register the widget.
     *
     * @param array $presenters Presenters, <NAME> => <ID>.
     * @return array The array, with Simile.
     */
    public function filterNeatlineWidgets($widgets)
    {
        return array_merge($widgets, array(
            'SIMILE Timeline' => 'Simile'
        ));
    }


}
