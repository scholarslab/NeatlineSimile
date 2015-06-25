<?php

/**
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

class FixturesTest_RecordHardLinkEventsTest extends NeatlineSimile_Case_Fixture
{


    public function testPoints()
    {

        $record1 = $this->_record($this->exhibit);
        $record2 = $this->_record($this->exhibit);
        $record3 = $this->_record($this->exhibit);

        $record1->title         = 'title1';
        $record2->title         = 'title2';
        $record3->title         = 'title3';
        $record1->fill_color    = '#111111';
        $record2->fill_color    = '#222222';
        $record3->fill_color    = '#333333';

        $record1->after_date  = '1910';
        $record1->before_date = '1989';
        $record1->start_date  = null;
        $record1->end_date    = null;
        $record2->after_date  = '2000';
        $record2->before_date = '2010';
        $record2->start_date  = null;
        $record2->end_date    = null;
        $record3->after_date  = '1343';
        $record3->before_date = '1400';
        $record3->start_date  = null;
        $record3->end_date    = null;

        $record1->save();
        $record2->save();
        $record3->save();

        $this->_writeRecordsApiFixture($this->exhibit,
            'NeatlineLoadTimelineEvents.after.json'
        );

    }
}


