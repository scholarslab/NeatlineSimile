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
    const SLUG  = 'simile';


    protected $_hooks = array(
        'neatline_public_static',
        'neatline_editor_static'
    );


    protected $_filters = array(
        'neatline_exhibit_tabs',
        'neatline_exhibit_widgets',
        'neatline_record_widgets'
    );


    /**
     * Queue public payloads.
     *
     * @param array $args Array of arguments, with `exhibit`.
     */
    public function hookNeatlinePublicStatic($args)
    {
        if ($args['exhibit']->hasWidget(self::SLUG)) {
            queue_css_file('payloads/simile-public');
            queue_js_file('payloads/simile-public');
            simile_queueSimileApi();
        }
    }


    /**
     * Queue editor payloads.
     *
     * @param array $args Array of arguments, with `exhibit`.
     */
    public function hookNeatlineEditorStatic($args)
    {
        if ($args['exhibit']->hasWidget(self::SLUG)) {
            queue_css_file('payloads/simile-public');
            queue_js_file('payloads/simile-editor');
            simile_queueSimileApi();
        }
    }


    /**
     * Register the exhibit widget tab.
     *
     * @param array $tabs Tabs, <LABEL> => <SLUG>.
     * @return array The array, with "Waypoints".
     */
    public function filterNeatlineExhibitTabs($tabs, $args)
    {
        if ($args['exhibit']->hasWidget(self::SLUG)) {
            $tabs[self::NAME] = self::SLUG;
        }
        return $tabs;
    }


    /**
     * Register the exhibit widget.
     *
     * @param array $widgets Widgets, <NAME> => <SLUG>.
     * @return array The array, with Simile.
     */
    public function filterNeatlineExhibitWidgets($widgets)
    {
        return array_merge($widgets, array(
            self::NAME => self::SLUG
        ));
    }


    /**
     * Register the record widget.
     *
     * @param array $widgets Widgets, <NAME> => <SLUG>.
     * @return array The array, with Simile.
     */
    public function filterNeatlineRecordWidgets($widgets)
    {
        return array_merge($widgets, array(
            self::NAME => self::SLUG
        ));
    }


}
