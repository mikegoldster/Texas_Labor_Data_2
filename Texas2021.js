
Plotly.d3.csv("Texas Predicted 2021.csv", function(err, rows){

    function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }
  
  
  var trace1 = {
    type: "scatter",
    mode: "lines",
    name: 'Regions',
    x: unpack(rows, 'Locations'),
    y: unpack(rows, '2003'),
    line: {color: '#17BECF'}
  }
  
  var trace2 = {
    type: "scatter",
    mode: "lines",
    name: 'Regions',
    x: unpack(rows, 'Locations'),
    y: unpack(rows, '2006'),
    line: {color: '#7F7F7F'}
  }
  
  var data = [trace1,trace2];
  
  var layout = {
    title: 'Time Series of Texas Employment',
    xaxis: {
      autorange: true,
      range: ['2003', '2018'],
      rangeselector: {buttons: [
    
          {
            count: 6,
            label: '6m',
            step: 'month',
            stepmode: 'backward'
          },
          {step: 'all'}
        ]},
      rangeslider: {range: ['2003', '2018']},
      type: 'date'
    },
    yaxis: {
      autorange: true,
      range: [-40000, 6000000],
      type: 'linear'
    }
  };
  
  Plotly.newPlot('myDiv', data, layout);
  })