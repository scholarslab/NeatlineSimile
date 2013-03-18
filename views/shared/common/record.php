<?php

/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=76; */

/**
 * Simile record form panel.
 *
 * @package     omeka
 * @subpackage  neatline-SIMILE
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

?>

<div class="control-group">

  <?php echo common('neatline/input', array(
      'name'  => 'simile-start-date',
      'label' => 'Start Date',
      'bind'  => 'record.simile_start_date'
  )); ?>

  <?php echo common('neatline/input', array(
      'name'  => 'simile-end-date',
      'label' => 'End Date',
      'bind'  => 'record.simile_end_date'
  )); ?>

  <?php echo common('neatline/input', array(
      'name'  => 'simile-start-visible-date',
      'label' => 'Start Visible Date',
      'bind'  => 'record.simile_start_visible_date'
  )); ?>

  <?php echo common('neatline/input', array(
      'name'  => 'simile-end-visible',
      'label' => 'End Visible Date',
      'bind'  => 'record.simile_end_visible_date'
  )); ?>

</div>
