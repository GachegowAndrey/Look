var barDiv = document.getElementById('mBows');

var StrenghtLevel0 = {
  x: ["Rusted Spellbow ", "Magian Crutch", "Metered Catharsis ", "Master's Merle", "Terminal Gyre", 
  "Gimble Gyre", "Militant Dove", "Herald's Helix",
   "Dragon's Quickening ", "Dragon's Breath", "Dragon's Tempest", "Blackwing Bow"],
  y: [17, 113, 7, 87, 106, 117, 141, 151, 151, 151, 640, 950],
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
  x: ["Rusted Spellbow ", "Magian Crutch", "Metered Catharsis ", "Master's Merle", "Terminal Gyre", 
  "Gimble Gyre", "Militant Dove", "Herald's Helix",
   "Dragon's Quickening ", "Dragon's Breath", "Dragon's Tempest", "Blackwing Bow"],
  y: [24, 121, 14, 87, 106, 117, 141, 151, 151, 151, 725, 998],
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
  x: ["Rusted Spellbow ", "Magian Crutch", "Metered Catharsis ", "Master's Merle", "Terminal Gyre", 
  "Gimble Gyre", "Militant Dove", "Herald's Helix",
   "Dragon's Quickening ", "Dragon's Breath", "Dragon's Tempest", "Blackwing Bow"],
  y: [31, 129, 21, 87, 106, 117, 141, 151, 151, 151, 780, 1055],
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
  x: ["Rusted Spellbow ", "Magian Crutch", "Metered Catharsis ", "Master's Merle", "Terminal Gyre", 
  "Gimble Gyre", "Militant Dove", "Herald's Helix",
   "Dragon's Quickening ", "Dragon's Breath", "Dragon's Tempest", "Blackwing Bow"],
  y: [45, 137, 35, 87, 106, 117, 141, 151, 151, 151, 840, 1112],
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
  x: ["Rusted Spellbow ", "Magian Crutch", "Metered Catharsis ", "Master's Merle", "Terminal Gyre", 
  "Gimble Gyre", "Militant Dove", "Herald's Helix",
   "Dragon's Quickening ", "Dragon's Breath", "Dragon's Tempest", "Blackwing Bow"],
  y: [94, 207, 213, 253, 257, 277, 284, 424,543,688,915 ,1184] ,
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
  x: ["Rusted Spellbow ", "Magian Crutch", "Metered Catharsis ", "Master's Merle", "Terminal Gyre", 
  "Gimble Gyre", "Militant Dove", "Herald's Helix",
   "Dragon's Quickening ", "Dragon's Breath", "Dragon's Tempest", "Blackwing Bow"],
  y: [276, 400, 321, 388, 410, 404, 466, 395, 151, 151, 1020, 1305],
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
  x: ["Rusted Spellbow ", "Magian Crutch", "Metered Catharsis ", "Master's Merle", "Terminal Gyre", 
  "Gimble Gyre", "Militant Dove", "Herald's Helix",
   "Dragon's Quickening ", "Dragon's Breath", "Dragon's Tempest", "Blackwing Bow"],
  y: [367, 485, 405, 439, 495,471, 529, 504, 151, 151, 1220, 1522],
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
  title:'MBows',
  barmode: 'group'
};

Plotly.plot( barDiv, data, layout );