<?php

/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=76; */

/**
 * Simile pane.
 *
 * @package     omeka
 * @subpackage  neatline-SIMILE
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

?>

<div class="control-group">

  <?php echo common('neatline/input', array(
      'name'  => 'simile_start',
      'label' => 'Start Date',
      'bind'  => 'record.simile_start'
  )); ?>

  <?php echo common('neatline/input', array(
      'name'  => 'simile_end',
      'label' => 'End Date',
      'bind'  => 'record.simile_end'
  )); ?>

  <?php echo common('neatline/input', array(
      'name'  => 'simile_start_visible',
      'label' => 'Start Visible Date',
      'bind'  => 'record.simile_start_visible'
  )); ?>

  <?php echo common('neatline/input', array(
      'name'  => 'simile_end_visible',
      'label' => 'End Visible Date',
      'bind'  => 'record.simile_end_visible'
  )); ?>

</div>
