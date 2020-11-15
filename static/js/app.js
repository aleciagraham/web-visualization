// Plan
// init function 
// 1) Fill out dropdown with all of the ids
// 2) Calls a buildPage function that draws the chart and the panel for the first one

// buildPage function 
// 1) That takes one parameter, which is the subject ID
// 2) Draws our plotly charts and fills the panel

// Need an event listener for the dropdown
// optionChanged function
// - That takes as a parameter the user selection

init();

function buildPage(subject){

    d3.json("samples.json").then((data) => {
  
      console.log(data);
    
        // Filter data.samples based on subject

        filtered = data.samples.filter(samples => samples.id == subject);
        console.log(filtered);
      // call first array [0]
        var filteredData = filtered[0]
        // Use dot notation to get at .otu_ids, .otu_labels, .otu_sample_values
        otu_ids = filteredData.otu_ids;
        otu_labels = filteredData.otu_labels;
        otu_sample_values= filteredData.otu_sample_values;
        //wash frequency
        wfreq = filteredData.wfreq;
          // Use slice for the horizontal bar chart
      //   * Use `sample_values` as the values for the bar chart.
    //   * Use `otu_ids` as the labels for the bar chart.
         //   * Use `otu_labels` as the hovertext for the chart.

         chartotu_ids = filteredData.otu_ids.slice(0,10);
         chartotu_labels = filteredData.otu_labels.slice(0,10);
         chartotu_sample_values= filteredData.otu_sample_values;
         

var barChart = [{
    // orientation: 'h'
  x: chartotu_sample_values,
  y: chartotu_ids,
  type: 'bar',
  orientation: 'h',
  text: ['4.17 below the mean', '4.17 below the mean', '0.17 below the mean', '0.17 below the mean', '0.83 above the mean', '7.83 above the mean'],
  marker: {
    color: 'rgb(142,124,195)'
  }
}];


var data = barChart;

var barChartlayout = {
    font:{
    family: 'Raleway, sans-serif'
  },
   yaxis: {
  
    gridwidth: 2
  },
  bargap :0.05

    };
    
Plotly.newPlot('bar', barChart,barChartlayout);



      var bubbleChart = [{
        x:  otu_ids,
        y: otu_sample_values,
         marker: {
          color: chartotu_ids,
          opacity: [1, 0.8, 0.6, 0.4],
          size: chartotu_sample_values
        }
      }];
         
      Plotly.newPlot('bubble', bubbleChart);

///gauge chart

    var gaugeChart = [
        {
          domain: { x: [0, 10], y: [0, 10] },
          value:10,
          title: { text: "Belly Button Washing Frequency (Scrubs per week)" },
          type: "indicator",
          mode: "wfreq",
          delta: { reference: 10 },
          gauge: {
            axis: { range: [null,10] },
            steps: [
              { range: [0,10], color: "lightgray" },
              { range: [0, 10], color: "gray" }
            ],
            threshold: {
              line: { color: "red", width: 4 },
              thickness: 0.75,
              value: 20
            }
          }
        }
      ];
      
      var layout = { width: 600, height: 450, margin: { t: 0, b: 0 } };
      Plotly.newPlot('gauge', gaugeChart);
      


    });
    
      // Panel
      // Filter data.metadata based on subject
      // The array that you get back you are interested in [0]
  
    //   var panel = d3.select("#sample-metadata");
  
    //   panel.html("");
  
    //   Object.entries(panel).forEach(([key, value]) => {

    //     // One idea is to append header elements (h5 or h6) of the key: value
    //   })
  
  
 

    // };
  
};
  function init() {
  
//     // Fill dropdown with IDs
//     // Get firstOne id and call buildPage with that id
  
    d3.json("samples.json").then((data) => {
  
      var selector = d3.select("#selDataset");
  
      console.log(data);
  
      data.names.forEach((subject) => {
        selector
          .append("option")
          .text(subject)
          .property("value", subject)
      })
        firstOne = data.names[0];
  
      buildPage(firstOne);
  
    })
  }
  
  function optionChanged(selection) {
  
    buildPage(selection);
  }
  

  
