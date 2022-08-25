var barDiv = document.getElementById('daggers');

var primaryGDP = {
  x: ["Aneled Stilettos", "Golden Stilettos", "Rusted Daggers", "Aneled Snags", "Snags of Gold", 
  "Aneled Bardiches", "Golden Bardiches", "Criteria"],
  y: [66, 80, 84, 87, 106, 117, 141, 151],
  type: 'bar',
  name: 'StrenghtDragonForged',
  marker:{
    color:'red',
    line:{
      color:'blue',
      width: 1
    }
  }
  
};

var secondaryGDP = {
  x: ["Aneled Stilettos", "Golden Stilettos", "Rusted Daggers", "Aneled Snags", "Snags of Gold", 
  "Aneled Bardiches", "Golden Bardiches", "Criteria"],
  y: [356, 387, 321, 388, 410, 404, 466, 395],
  type: 'bar',
  name: 'StrenghtSilverD',
  marker:{
    color:'silver',
    line:{
      color:'blue',
      width: 1
    }
  }
};

var tertiaryGDP = {
  x: ["Aneled Stilettos", "Golden Stilettos", "Rusted Daggers", "Aneled Snags", "Snags of Gold", 
  "Aneled Bardiches", "Golden Bardiches", "Criteria"],
  y: [415, 451, 405, 439, 495,471, 529, 504],
  type: 'bar',
  name: 'StrenghtGoldD',
  marker:{
    color:'gold',
    line:{
      color:'blue',
      width: 1
    }
  }
};

var data = [primaryGDP, secondaryGDP, tertiaryGDP];

var layout = {
  title:'Daggers',
  barmode: 'stack'
};

Plotly.plot( barDiv, data, layout );