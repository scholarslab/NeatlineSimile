<?php

/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4 cc=76; */

/**
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

class FixturesTest_OutgoingEvents extends NeatlineSimile_FixtureCase
{


    /**
     * `OutgoingEvents.records.json`
     */
    public function testOutgoingEvents()
    {

        $record = $this->__record($this->exhibit);
        $record->start_date = '2001';
        $record->save();

        $this->writeFixtureFromRoute('neatline/records',
            'OutgoingEvents.records.json'
        );

    }


}
