function rowSpan(params) {
  return params.data.Status==='Pre-Daimon' ? 11 :'Post-Daimon'? 12 :'Whilst carrying a Fiend-luring Incense'? 3 : 1;
}

class ShowCellRenderer {
  init(params) {
    const cellBlank = !params.value;
    if (cellBlank) {
      return;
    }

    this.ui = document.createElement('div');
    this.ui.innerHTML =
      '<div class="show-name">' +
      params.value.name +
      '' +
      '</div>' +
      '<div class="show-presenter">' +
      params.value.presenter +
      '</div>';
  }

  getGui() {
    return this.ui;
  }

  refresh() {
    return false;
  }
}

const columnDefs = [
  {
    field: 'Status',
    
    rowSpan: rowSpan,
    cellClassRules: {
      'show-cell': 'value !== undefined',
    },
    width: 200,flex: 1,
  },
  { field: 'Dangerous foes' ,flex: 1,height: 200,},
  
  { field: 'Smaller foes',flex: 1,height: 200, },
  { field: 'Note',flex: 1,height: 200 },
  
];

const gridOptions = {
  columnDefs: columnDefs,
  defaultColDef: {
    resizable: true,
    width: 170,
  },
  rowData: getData(),
  suppressRowTransform: true,
};

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function () {
  const gridDiv = document.querySelector('#myGrid');
  new agGrid.Grid(gridDiv, gridOptions);
});

