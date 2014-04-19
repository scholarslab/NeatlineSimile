<?php

/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4 cc=80: */

/**
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

class FixturesTest_LoadTimelineEvents extends NeatlineSimile_Case_Fixture
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
        $record1->start_date    = '2001';
        $record2->start_date    = '2002';
        $record3->start_date    = '2003';

        $record1->save();
        $record2->save();
        $record3->save();

        $this->_writeRecordsApiFixture($this->exhibit,
            'NeatlineLoadTimelineEvents.points.json'
        );

        $record1->end_date = '2004';
        $record2->end_date = '2005';
        $record3->end_date = '2006';

        $record1->save();
        $record2->save();
        $record3->save();

        $this->_writeRecordsApiFixture($this->exhibit,
            'NeatlineLoadTimelineEvents.spans.json'
        );

        $record3->start_date = null;
        $record3->save();

        $this->_writeRecordsApiFixture($this->exhibit,
            'NeatlineLoadTimelineEvents.nostart.json'
        );

    }


}
