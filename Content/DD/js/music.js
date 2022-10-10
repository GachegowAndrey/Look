var columnDefs = [
  
  {headerName: "Name", field: "Name",flex: 1},
  {headerName: "value", field: "value", flex: 1,width: 350,wrapText: true}
  
];
    
// specify the data
var rowData = [
  { Name: "groove", 
  value:"Грув — ритмическое ощущение в музыке,создаваемое игрой музыкантов-барабанщиков, гитаристов и клавишников."+
   "В популярной музыке грув рассматривается в жанрах сальса, фанк, рок, фьюжн, соул и свинг."+
    "Слово часто используется при описании музыки, при которой хочется двигаться, танцевать — «грувить».",},
  { Name: "salsa", value:' Сальса включает много стилей и вариаций; в широком смысле термин можно использовать для практически любой музыки латиноамериканского происхождения',},
  { Name: "reggae", value:'направление современной музыки',},
  { Name: "techno", value:'жанр электронной музыки',},
  
  
];
    
// let the grid know which columns and what data to use
var gridOptions = {
  rowHeight: 0,
  columnDefs: columnDefs,
  defaultColDef: {
    
    width: 170,
    sortable: true,
    editable: true,
    resizable: true,
    filter: true,
  },
  rowData: rowData

};

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function() {
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);
});

