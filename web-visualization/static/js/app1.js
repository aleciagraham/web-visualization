
function buildPage(subject){

    d3.json("samples.json").then((data) => {
        console.log(data);
            // Filter data.samples based on subject
        filtered = data.samples.filter(samples => samples.id == subject);     
      // call first array [0]
       var filteredData = filtered[0];
        otu_ids = filteredData.otu_ids;
        otu_labels = filteredData.otu_labels;
        otu_sample_values= filteredData.otu_sample_values;

//Use slice 10 samples for the horizontal bar chart

chartotu_ids = filteredData.otu_ids.slice(0,10);
chartotu_labels = filteredData.otu_labels.slice(0,10);
chartotu_sample_values= filteredData.otu_sample_values;
    });
///Bar Chart
var barChart = [{
    x: chartotu_ids,
    y: chartotu_sample_values,
    type: 'bar',
    orientation: 'h',
    text: chartotu_labels,
    marker: {
      color: 'dark blue'
    }
  }];

  var data = barChart;
  var barChartlayout = {
  xaxis: chartotu_ids,
       bargap :0.05,
    height: 600,
    width: 500
      };

Plotly.newPlot('bar', barChart,barChartlayout);



funtion init(){

 var selection =d3.select("selDataset");
    data.names.forEach((subject) => {
        selection
        .append("option"),
        .text(subject),
        .property("value", subject)})
};







//end of program
}

init()