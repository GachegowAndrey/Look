var barDiv = document.getElementById('daggers');

var StrenghtLevel0 = {
  x: ["Aneled Stilettos", "Golden Stilettos", "Rusted Daggers", "Aneled Snags", "Snags of Gold", 
  "Aneled Bardiches", "Golden Bardiches", "Criteria"],
  y: [48, 58, 7, 87, 106, 117, 141, 151],
  type: 'bar',
  text: ['Tarring','Silence','','Overspeeding','','Overspeeding','','Overspeeding'],
  textposition: 'inside',
  name: 'StrenghtLevel0',
  marker:{
    color:'grey',
    line:{
      color:'blue',
      width: 1
    }
  }
  
};

var Strenght1Star = {
  x: ["Aneled Stilettos", "Golden Stilettos", "Rusted Daggers", "Aneled Snags", "Snags of Gold", 
  "Aneled Bardiches", "Golden Bardiches", "Criteria"],
  y: [50, 61, 14, 87, 106, 117, 141, 151],
  type: 'bar',
  text: ['Tarring  <br> 610 G','Silence 560 G','','Overspeeding','','Overspeeding','','Overspeeding'],
  textposition: 'inside',
  name: 'Strenght1Star',
  marker:{
    color:'00ff00',
    line:{
      color:'blue',
      width: 1
    }
  }
  
};

var Strenght2Star = {
  x: ["Aneled Stilettos", "Golden Stilettos", "Rusted Daggers", "Aneled Snags", "Snags of Gold", 
  "Aneled Bardiches", "Golden Bardiches", "Criteria"],
  y: [54, 65, 21, 87, 106, 117, 141, 151],
  type: 'bar',
  name: 'Strenght2Star',
  marker:{
    color:'0080ff',
    line:{
      color:'blue',
      width: 1
    }
  }
  
};

var Strenght3Star = {
  x: ["Aneled Stilettos", "Golden Stilettos", "Rusted Daggers", "Aneled Snags", "Snags of Gold", 
  "Aneled Bardiches", "Golden Bardiches", "Criteria"],
  y: [57, 69, 35, 87, 106, 117, 141, 151],
  type: 'bar',
  name: 'Strenght3Star',
  marker:{
    color:'purple',
    line:{
      color:'blue',
      width: 1
    }
  }
  
};
var StrenghtDragonForged = {
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

var StrenghtSilverD = {
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

var StrenghtGoldD = {
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

var data = [StrenghtLevel0,Strenght1Star,Strenght2Star,
Strenght3Star,StrenghtDragonForged, StrenghtSilverD, StrenghtGoldD];

var layout = {
  title:'Daggers',
  barmode: 'group'
};

Plotly.plot( barDiv, data, layout );