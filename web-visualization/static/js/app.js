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
function buildPage(subject){
  d3.json("samples.json").then((data) => {
        console.log(data);
      // Filter data.samples based on subject
      filtered = data.samples.filter(samples => samples.id == subject);
      console.log(filtered);
    // call first array [0]
      var filteredData = filtered[0]
      console.log(filteredData)
      // Use dot notation to get at .otu_ids, .otu_labels, .otu_sample_values
      otu_ids = filteredData.otu_ids;
      otu_labels = filteredData.otu_labels;
      otu_sample_values= filteredData.sample_values;
      //wash frequency
      // wfreq = filteredData.wfreq;
       chartotu_ids = filteredData.otu_ids.slice(0,10).map(otuID => `OTU ${otuID}`);
       chartotu_labels = filteredData.otu_labels.slice(0,10);
       chartotu_sample_values= filteredData.sample_values;
var barChart = [{
  // orientation: 'h'
x: chartotu_sample_values,
y: chartotu_ids,
type: 'bar',
orientation: 'h',
text: chartotu_labels,
marker: {
  color: 'rgb(142,124,195)'
}
}];
// var data = barChart;
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
//bubble chart
console.log(otu_sample_values)
console.log(chartotu_sample_values)
var bubbleChart = [{
      x:  otu_ids,
      y: otu_sample_values,
      mode: "markers",
       marker: {
        color: otu_sample_values,
        opacity: [1, 0.8, 0.6, 0.4],
        size: otu_sample_values
      }
    }];
Plotly.newPlot('bubble', bubbleChart);


// gauge chart
//   var gaugeChart = [
//       {
//         margin: { t: 0, b: 0 },
//         width: 50,
//         height: 450
//         domain: { x: [50, 10], y: 50, 10] },
//         value:10,
//         title: { text: "Belly Button Washing Frequency (Scrubs per week)" },
//         type: "indicator",
//         mode: "wfreq",
//         delta: { reference: 10 },
//         gauge: {
//           axis: { range: [null,10] },
//           steps: [
//             { range: [0,10], color: "lightgray" },
//             { range: [0, 10], color: "gray" }
//           ],
//           threshold: {
//             line: { color: "red", width: 4 },
//             thickness: 0.75,
//             value: 20}
//           }
//         }
      
//     ];
// // var gaugeChart = { width: 600, height: 450, margin: { t: 0, b: 0 } };
//       Plotly.newPlot('gauge', gaugeChart);
// //  filling in demographic panel


function demoPanel(subject) {
  d3.json("samples.json").then((data) => {
  var PANEL = d3.select("#sample-metadata")
 PANEL.html("")
  filteredMetadata = data.metadata.filter(samples => samples.id == subject);
  console.log(filteredMetadata)
       Object.entries(filteredMetadata[0]).forEach(([key, value]) => {
        PANEL.append("h5").text(`${key}:${value}`) })
      }) };


demoPanel(subject)


    })}

    // function demoPanel(subject) {
    //   d3.json("samples.json").then((data) => {
    //   var PANEL = d3.select("#sample-metadata")
    //  PANEL.html("")
    //   filteredMetadata = data.metadata.filter(samples => samples.id == subject);
    //   console.log(filteredMetadata)
    //        Object.entries(filteredMetadata[0]).forEach(([key, value]) => {
    //         PANEL.append("h5").text(`${key}:${value}`) })
    //       }) };


  function optionChanged(selection) {
      buildPage(selection);
      // demoPanel(selection)
       }


    function init() {
      //     // Fill dropdown with IDs
      //     // Get firstOne id and call buildPage with that id
          d3.json("samples.json").then((data) => {
            var selector = d3.select("#selDataset");
            data.names.forEach((subject) => {
            selector
              .append("option")
              .text(subject)
              .property("value", subject);})
            
          firstDataset = data.names[0];
            buildPage(firstDataset);
            // demoPanel(firstDataset);
          });
        };
     init()