var columnDefs = [
  {headerName: "Weapon", field: "Weapon",flex: 1},
  {headerName: "Type", field: "Type",flex: 1},
  {headerName: "Name", field: "Name",flex: 1},
  {headerName: "MaxDamage", field: "MaxDamage",flex: 1}
  
];
    
// specify the data
var rowData = [
  {Weapon: "Physical", Type: "Daggers", Name: "Aneled Snags", MaxDamage:439,},
  {Weapon: "Physical", Type: "Daggers", Name: "Criteria", MaxDamage:504,},
  {Weapon: "Magic", Type: "Magic Bows", Name: "Rusted Spellbow", MaxDamage:367,},
  {Weapon: "Magic", Type: "Magic Bows", Name: "Blackwing Bow", MaxDamage:1522,},
  {Weapon: "Physical", Type: "Daggers", Name: "Throatcutters", MaxDamage:518,}
  
];
    
// let the grid know which columns and what data to use
var gridOptions = {
  columnDefs: columnDefs,
  defaultColDef: {
    
    sortable: true,
  },
  rowData: rowData
};

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function() {
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);
});