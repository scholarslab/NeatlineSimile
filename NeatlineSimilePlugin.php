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


    const NAME  = 'SIMILE Timeline';
    const ID    = 'SIMILE';
    const SLUG  = 'simile';


    protected $_hooks = array(
        'install',
        'uninstall',
        'neatline_editor_underscore',
        'neatline_public_js',
        'neatline_editor_js'
    );


    protected $_filters = array(
        'neatline_widgets',
        'neatline_exhibit_tabs',
        'neatline_record_tabs'
    );


    /**
     * Add columns.
     */
    public function hookInstall()
    {
        // TODO
    }


    /**
     * Remove columns.
     */
    public function hookUninstall()
    {
        // TODO
    }


    /**
     * Queue exhibit settings template.
     */
    public function hookNeatlineEditorUnderscore()
    {
        // TODO
    }


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
     * @param array $widgets Presenters, <NAME> => <ID>.
     * @return array The array, with Simile.
     */
    public function filterNeatlineWidgets($widgets)
    {
        return array_merge($widgets, array(
            self::NAME => self::ID
        ));
    }


    /**
     * Register the exhibit tab.
     *
     * @param array $tabs Tabs, <NAME> => <SLUG>.
     * @param array $args Array of arguments, with `exhibit`.
     * @return array The array, with Simile.
     */
    public function filterNeatlineExhibitTabs($tabs, $args)
    {
        if ($args['exhibit']->hasWidget(self::ID)) {
            return array_merge($tabs, array(
                self::NAME => self::SLUG
            ));
        }
    }


    /**
     * Register the record tab.
     *
     * @param array $tabs Presenters, <NAME> => { <form>, <slug> }.
     * @param array $args Array of arguments, with `exhibit`.
     * @return array The array, with Simile.
     */
    public function filterNeatlineRecordTabs($tabs, $args)
    {
        if ($args['exhibit']->hasWidget(self::ID)) {
            return array_merge($tabs, array(
                self::NAME => array(
                    'form' => common('record'),
                    'slug' => self::SLUG
                )
            ));
        }
    }


}
