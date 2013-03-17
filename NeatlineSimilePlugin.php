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
        'neatline_public_static',
        'neatline_editor_static'
    );


    protected $_filters = array(
        'neatline_widgets',
        'neatline_styles',
        'neatline_exhibit_tabs',
        'neatline_record_tabs'
    );


    /**
     * Add fields.
     */
    public function hookInstall()
    {
        NeatlinePlugin::addExhibitField('simile_focus',
            'VARCHAR(100) NULL');
        NeatlinePlugin::addExhibitField('simile_zoom',
            'INT(10) UNSIGNED NULL');
        NeatlinePlugin::addRecordField('simile_active',
            'TINYINT(1) NOT NULL');
        NeatlinePlugin::addRecordField('simile_start',
            'VARCHAR(100) NULL');
        NeatlinePlugin::addRecordField('simile_end',
            'VARCHAR(100) NULL');
        NeatlinePlugin::addRecordField('simile_start_visible',
            'VARCHAR(100) NULL');
        NeatlinePlugin::addRecordField('simile_end_visible',
            'VARCHAR(100) NULL');
    }


    /**
     * Remove columns.
     */
    public function hookUninstall()
    {
        NeatlinePlugin::dropExhibitField('simile_focus');
        NeatlinePlugin::dropExhibitField('simile_zoom');
        NeatlinePlugin::dropRecordField('simile_active');
        NeatlinePlugin::dropRecordField('simile_start');
        NeatlinePlugin::dropRecordField('simile_end');
        NeatlinePlugin::dropRecordField('simile_start_visible');
        NeatlinePlugin::dropRecordField('simile_end_visible');
    }


    /**
     * Queue exhibit settings template.
     *
     * @param array $args Array of arguments, with `exhibit`.
     */
    public function hookNeatlineEditorUnderscore($args)
    {
        echo common('exhibit');
    }


    /**
     * Queue public payloads.
     *
     * @param array $args Array of arguments, with `exhibit`.
     */
    public function hookNeatlinePublicStatic($args)
    {
        // TODO
    }


    /**
     * Queue editor payloads.
     *
     * @param array $args Array of arguments, with `exhibit`.
     */
    public function hookNeatlineEditorStatic($args)
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
     * Register the taggable styles.
     *
     * @param array $styles Array of column names.
     * @return array The modified array.
     */
    public function filterNeatlineStyles($styles)
    {
        return array_merge($styles, array(
            'simile_active',
            'simile_start',
            'simile_end',
            'simile_start_visible',
            'simile_end_visible'
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

        // Is SIMILE enabled for the exhibit?
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

        // Is SIMILE enabled for the exhibit?
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
