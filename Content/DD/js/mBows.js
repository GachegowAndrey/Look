var barDiv = document.getElementById('mBows');

var StrenghtLevel0 = {
  x: ["Rusted Spellbow ", "Magian Crutch", "Metered Catharsis ", "Master's Merle", "Terminal Gyre", 
  "Gimble Gyre", "Militant Dove", "Herald's Helix",
   "Dragon's Quickening ", "Dragon's Breath", "Dragon's Tempest", "Blackwing Bow"],
  y: [17, 113, 89, 164, 189, 206, 98, 325, 430, 520, 640, 950],
  type: 'bar',
  text: ['','','','','','','',''],
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
  y: [24, 121, 104, 173, 199, 217, 127, 342, 449, 546, 725, 998],
  type: 'bar',
  text: ['-  <br> 170 G','','','','-<br>6,150G','10,420 G','',''],
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
  y: [31, 129, 132, 183, 209, 229, 161, 359, 472, 576, 780, 1055],
  type: 'bar',
  text: ['Poison  <br> 23 160 G,Sconce*3','','','','19,100G/Chestnut Branch *5','32,400 G/Pigeons Blood *2','',''],
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
  y: [45, 137, 170, 195, 221, 240, 208, 379, 500, 615, 840, 1112],
  type: 'bar',
  text: ['Poison/Torpor<br>68 000 G,Mandrake*4','','','','58,900G/Slick Black Pinion *2','','',''],
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
  y: [94, 207, 213, 253, 257, 277, 283, 424,543,688,915 ,1184] ,
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
  y: [276, 400, 321, 388, 410, 404, 425, 524, 650, 793, 1020, 1305],
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
  y: [367, 485, 405, 439, 495,471, 529, 724, 855, 998, 1220, 1522],
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