# NeatlineSimile

Neatline Simile makes it possible to add the [SIMILE Timeline][simile] widget to Neatline exhibits. Once the timeline has been added, records can be plotted as points and spans on the timeline, and the timeline can be used to control the _visibility_ of records on the map (and elsewhere in other viewports added by sub-plugins, like the [Waypoints][waypoints] list).

For example, if a record is plotted as a point on the map and has a "After Date" of 1500 and an "Before Date" of 1600, the record will be visible when only the timeline is between those two dates, and will be automatically hidden as soon as it is dragged before 1500 or after 1600. This makes it possible to string together complex time-series sequences and animations that show how things change over time.

## Installation

To get started, download the latest version from the Omeka add-ons repository and install the plugin just like any other Omeka plugin:

  1. Uncompress the `.zip` archive.

  2. Move the `NeatlineSimile` into the `/plugins` folder in you Omeka installation.

  3. In the Omeka administrative interface, click on **Plugins** in the top navigation bar and find the listing for "Neatline Widget ~ SIMILE Timeline". Click on "Install."

  **Note**: Since NeatlineSimile is a "sub-plugin" that extends the core functionality of Neatline (itself a plugin), Neatline has to be installed in order to install NeatlineSimile.

## Usage

## Enabling the widget

NeatlineSimile adds a "widget" to your installation of Neatline that can be turned on and off for each individual exhibit. Widgets can be activated when an exhibit is first created or by clicking on the "Exhibit Settings" link for an exhibit in the main browse view, which opens the same form that is dispalyed when the exhibit is created. In either case:

  1. Scroll down to the "Widgets" field. Click on the input box to display a list of available widgets.

  2. Click on the listing for "SIMILE Timeline." Once selected, the listing will be displayed as a box in the input.

  3. To lock in the change, click "Save Exhibit" at the bottom of the form.

Now, when you open the editor for the exhibit, you'll see the timeline at the bottom right of the screen.

## Plotting points

Plotting records on the timeline is simple:

  1. Open up the record that you want to plot (or create a new one).

  2. Open the **Style** tab and scroll down to the the "Dates" field set.

  3. Mark the record as being active on the timeline by clicking the listing for "SIMILE Timeline" in the list of options in the "Widgets" field.

  4. Enter a date in the "Start Date" field. **Important**: All dates must be entered in a portable, standards-compliant format called [ISO 8601][iso-8601]. For more detail, see the [Neatline documentation][date-docs].

  5. Click "Save" at the bottom of the form. The timeline will automatically update to display the new point.

## Plotting spans

## Setting visibility intervals

## Editing timeline defaults


[simile]: http://www.simile-widgets.org/timeline/
[waypoints]: https://github.com/scholarslab/nl-widget-Waypoints
[iso-8601]: https://en.wikipedia.org/wiki/ISO_8601
[date-docs]: https://github.com/scholarslab/Neatline/blob/develop/docs/style-tab-dates.md
