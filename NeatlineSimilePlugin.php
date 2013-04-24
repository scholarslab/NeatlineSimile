<?php

/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4 cc=76; */

/**
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */


class NeatlineSimilePlugin extends Omeka_Plugin_AbstractPlugin
{


    const NAME  = 'SIMILE Timeline';
    const ID    = 'Simile';


    protected $_hooks = array(
        'install',
        'uninstall',
        'neatline_public_static',
        'neatline_editor_static'
    );


    protected $_filters = array(
        'neatline_exhibit_tabs',
        'neatline_exhibit_widgets',
        'neatline_record_widgets'
    );


    /**
     * Create exhibit expansion table.
     */
    public function hookInstall()
    {

        $sql = "CREATE TABLE IF NOT EXISTS
            `{$this->_db->prefix}neatline_simile_exhibit_expansion` (
            `id`                INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
            `default_date`      VARCHAR(100) NULL,
            `interval_unit`     VARCHAR(100) NULL,
            `interval_pixels`   INT(10) UNSIGNED NULL,
            `track_height`      INT(10) UNSIGNED NULL,
            `tape_height`       INT(10) UNSIGNED NULL,
             PRIMARY KEY        (`id`)
        ) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci";

        $this->_db->query($sql);

    }


    /**
     * Drop exhibit expansion table.
     */
    public function hookUninstall()
    {
        $sql = "DROP TABLE IF EXISTS
            `{$this->_db->prefix}neatline_simile_exhibit_expansion`";
        $this->_db->query($sql);
    }


    /**
     * Queue public payloads.
     *
     * @param array $args Array of arguments, with `exhibit`.
     */
    public function hookNeatlinePublicStatic($args)
    {
        if ($args['exhibit']->hasWidget(self::ID)) {
            simile_queueSimileApi();
            queue_css_file('payloads/simile-public');
            queue_js_file('payloads/simile-public');
        }
    }


    /**
     * Queue editor payloads.
     *
     * @param array $args Array of arguments, with `exhibit`.
     */
    public function hookNeatlineEditorStatic($args)
    {
        if ($args['exhibit']->hasWidget(self::ID)) {
            simile_queueSimileApi();
            queue_css_file('payloads/simile-public');
            queue_js_file('payloads/simile-editor');
        }
    }


    /**
     * Register the exhibit widget tab.
     *
     * @param array $tabs Tabs, <LABEL> => <ID>.
     * @return array The array, with "Waypoints".
     */
    public function filterNeatlineExhibitTabs($tabs, $args)
    {
        if ($args['exhibit']->hasWidget(self::ID)) {
            $tabs[self::NAME] = 'simile';
        }
        return $tabs;
    }


    /**
     * Register the exhibit widget.
     *
     * @param array $widgets Widgets, <NAME> => <ID>.
     * @return array The array, with Simile.
     */
    public function filterNeatlineExhibitWidgets($widgets)
    {
        return array_merge($widgets, array(
            self::NAME => self::ID
        ));
    }


    /**
     * Register the record widget.
     *
     * @param array $widgets Widgets, <NAME> => <ID>.
     * @return array The array, with Simile.
     */
    public function filterNeatlineRecordWidgets($widgets)
    {
        return array_merge($widgets, array(
            self::NAME => self::ID
        ));
    }


}
