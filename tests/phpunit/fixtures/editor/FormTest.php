<?php

/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4 cc=80; */

/**
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

class FixturesTest_Form extends NeatlineSimile_Case_Fixture
{


    /**
     * `Form.records.json`
     */
    public function testForm()
    {

        $record1 = $this->_record($this->exhibit);
        $record2 = $this->_record($this->exhibit);
        $record3 = $this->_record($this->exhibit);

        $record1->title         = 'title1';
        $record2->title         = 'title2';
        $record3->title         = 'title3';
        $record1->start_date    = '2001';
        $record2->start_date    = '2002';
        $record3->start_date    = '2003';

        $record1->save();
        $record2->save();
        $record3->save();

        $this->_writeRecordsApiFixture($this->exhibit,
            'EditorForm.records.json'
        );

    }


}
