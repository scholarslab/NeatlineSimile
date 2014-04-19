<?php

/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4 cc=80; */

/**
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

class FixturesTest_PublishEvents extends NeatlineSimile_Case_Fixture
{


    public function testRecords()
    {

        $record = $this->_record($this->exhibit);
        $record->start_date = '2001';
        $record->save();

        $this->_writeRecordsApiFixture($this->exhibit,
            'NeatlinePublishEvents.json'
        );

    }


}
