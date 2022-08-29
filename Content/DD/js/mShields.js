var barDiv = document.getElementById('mShields');
var barDiv2 = document.getElementById('mShields2');

var RustedMagickShield = {
  x: ["UpLevel0","UpLevel1","UpLevel2","UpLevel3","UpLevelDF","UpLevelDFS","UpLevelDFG"],
  y: [9,14,21,36,82,326,433],
  //y:[5,8,12,20,46,134,197],
  type: 'bar',
  name: 'Rusted Magick Shield',
  marker:{
    color:'B7410E',
    line:{
      color:'blue',
      width: 1
    }
  }
  
};

var WoodenWall = {
  x: ["UpLevel0","UpLevel1","UpLevel2","UpLevel3","UpLevelDF","UpLevelDFS","UpLevelDFG"],
  y: [45,49,54,60,103,222,265],
 //y:[96,106,117,128,220,452,550],
  type: 'bar',
  name: 'Wooden Wall',
  marker:{
    color:'Wooden',
    line:{
      color:'blue',
      width: 1
    }
  }
};

var Zombiebane = {
  x: ["UpLevel0","UpLevel1","UpLevel2","UpLevel3","UpLevelDF","UpLevelDFS","UpLevelDFG"],
  y: [31,40,58,82,109,249,289],
 //y: [64,84,120,170,226,407,490],
  type: 'bar',
  name: 'Zombiebane',
  marker:{
    color:'zombie',
    line:{
      color:'blue',
      width: 1
    }
  }
};

var RustedMagickShieldM = {
  x: ["UpLevel0","UpLevel1","UpLevel2","UpLevel3","UpLevelDF","UpLevelDFS","UpLevelDFG"],
  //y: [9,14,21,36,82,326,433],
  y:[5,8,12,20,46,134,197],
  type: 'bar',
  name: 'Rusted Magick Shield',
  marker:{
    color:'B7410E',
    line:{
      color:'blue',
      width: 1
    }
  }
  
};

var WoodenWallM = {
  x: ["UpLevel0","UpLevel1","UpLevel2","UpLevel3","UpLevelDF","UpLevelDFS","UpLevelDFG"],
  //y: [45,49,54,60,103,222,265],
 y:[96,106,117,128,220,452,550],
  type: 'bar',
  name: 'Wooden Wall',
  marker:{
    color:'A45A52',
    line:{
      color:'blue',
      width: 1
    }
  }
};

var ZombiebaneM = {
  x: ["UpLevel0","UpLevel1","UpLevel2","UpLevel3","UpLevelDF","UpLevelDFS","UpLevelDFG"],
 //y: [31,40,58,82,109,249,289],
 y: [64,84,120,170,226,407,490],
  type: 'bar',
  name: 'Zombiebane',
  marker:{
    color:'zombie',
    line:{
      color:'blue',
      width: 1
    }
  }
};


var MagickBucklerS = {
  x: ["UpLevel0","UpLevel1","UpLevel2","UpLevel3","UpLevelDF","UpLevelDFS","UpLevelDFG"],
 y: [60 , 65,  70,  76 , 115, 224,267],
 //y: [122, 132, 143, 156, 234, 454, 554,],
  type: 'bar',
  name: 'Magick Buckler',
  marker:{
    color:'silver',
    line:{
      color:'blue',
      width: 1
    }
  }
};

var MagickBucklerM = {
  x: ["UpLevel0","UpLevel1","UpLevel2","UpLevel3","UpLevelDF","UpLevelDFS","UpLevelDFG"],
 //y: [60  65  70  76  115 224 267],
 y: [122, 132, 143, 156, 234, 454, 554],
  type: 'bar',
  name: 'Magick Buckler',
  marker:{
    color:'silver',
    line:{
      color:'blue',
      width: 1
    }
  }
};
var ThunderKiteShieldS= {
  x: ["UpLevel0","UpLevel1","UpLevel2","UpLevel3","UpLevelDF","UpLevelDFS","UpLevelDFG"],
 y: [84 , 89,  95,  101, 120, 219, 262],
 //y: [227 , 242, 258, 274, 324, 492, 619],
  type: 'bar',
  name: 'Thunder Kite Shield',
  marker:{
    color:'blue',
    line:{
      color:'blue',
      width: 1
    }
  }
};
var ThunderKiteShieldM= {
  x: ["UpLevel0","UpLevel1","UpLevel2","UpLevel3","UpLevelDF","UpLevelDFS","UpLevelDFG"],
 //y: [84  89  95  101 120 219 262],
 y: [227 , 242, 258, 274, 324, 492, 619],
  type: 'bar',
  name: 'Thunder Kite Shield',
  marker:{
    color:'blue',
    line:{
      color:'blue',
      width: 1
    }
  }
};



var data = [RustedMagickShield, WoodenWall, Zombiebane,MagickBucklerS,ThunderKiteShieldS];
var data2 = [RustedMagickShieldM, WoodenWallM, ZombiebaneM,MagickBucklerM,ThunderKiteShieldM ];
var layout = {
  title:'mShieldsStrength',
  barmode: 'group'
};
var layout2 = {
  title:'mShieldsMagick',
  barmode: 'group'
};
Plotly.plot( barDiv, data, layout );
Plotly.plot( barDiv2, data2, layout2 );


