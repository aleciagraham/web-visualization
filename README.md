# web-visualization.


Using a json dataset to create Plot.ly bar, bubble, and summary 'panel' to display metadata JSON.

Bar Chart:
  horizontal orientation
  10 OTUs found in that individual.
  * Use `sample_values` as the values for the bar chart.
  * Use `otu_ids` as the labels for the bar chart.
  * Use `otu_labels` as the hovertext for the chart.


Bubble Chart:
  * Use `otu_ids` for the x values.
  * Use `sample_values` for the y values.
  * Use `sample_values` for the marker size.
  * Use `otu_ids` for the marker colors.
  * Use `otu_labels` for the text values.
  
Panel
4. Display each key-value pair from the metadata JSON object somewhere on the page.

![hw](Images/hw03.png)


Bonus assignment is to create a gauge chart on belly button washing frequency
## Advanced Challenge Assignment (Optional)

The following task is advanced and therefore optional.

* Adapt the Gauge Chart from <https://plot.ly/javascript/gauge-charts/> to plot the weekly washing frequency of the individual.

* You will need to modify the example gauge code to account for values ranging from 0 through 9.

* Update the chart whenever a new sample is selected


© 2019 Trilogy Education Services
