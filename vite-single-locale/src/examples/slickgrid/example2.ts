import { ExcelExportService } from '@slickgrid-universal/excel-export';
import { TextExportService } from '@slickgrid-universal/text-export';

import {
  type AureliaGridInstance,
  type Column,
  DelimiterType,
  Filters,
  type Formatter,
  Formatters,
  type GridOption,
  type GridStateChange,
  type SlickGrid,
} from 'aurelia-slickgrid';

import { localeFrench } from '../locales/fr';

const NB_ITEMS = 1500;

// create a custom translate Formatter (typically you would move that a separate file, for separation of concerns)
const taskFormatter: Formatter = (_row, _cell, value) => {
  return value !== undefined ? `Titre ${value}` : '';
};
const exportBooleanFormatter: Formatter = (_row, _cell, value) => {
  return value ? 'Vrai' : 'Faux';
};

export class Example2 {
  title = 'Example 12: Localization with Single Custom Locales';
  subTitle = `This Examples uses French Locales but you could use your own custom locales
    <ul>
      <li>Defining your own Custom Locales must include all necessary text, see the default (<a href="https://github.com/ghiscoding/aurelia-slickgrid-demos/blob/master/vite-single-locale/src/locales/en.ts" target="_blank">English Custom Locales</a>)</li>
      <li>Support Custom Locales (through the "locales" grid option), following these steps (<a href="https://github.com/ghiscoding/aurelia-slickgrid/wiki/Localization-with-Custom-Locales" target="_blank">Wiki docs</a>)</li>
      <li>For more info about "Download to File", read the <a href=https://github.com/ghiscoding/aurelia-slickgrid/wiki/Export-to-File" target="_blank">Wiki page</a></li>
    </ul>`;

  aureliaGrid!: AureliaGridInstance;
  gridOptions!: GridOption;
  columnDefinitions: Column[] = [];
  dataset: any[] = [];
  duplicateTitleHeaderCount = 1;
  gridObj!: SlickGrid;
  hideSubTitle = false;
  excelExportService = new ExcelExportService();
  textExportService = new TextExportService();

  constructor() {
    // define the grid options & columns and then create the grid itself
    this.defineGrid();
  }

  attached() {
    // populate the dataset once the grid is ready
    this.getData(NB_ITEMS);
  }

  aureliaGridReady(aureliaGrid: AureliaGridInstance) {
    this.aureliaGrid = aureliaGrid;
    this.gridObj = aureliaGrid.slickGrid;
  }

  /* Define grid Options and Columns */
  defineGrid() {
    this.columnDefinitions = [
      { id: 'title', name: 'Titre', field: 'id', sortable: true, minWidth: 100, filterable: true, formatter: taskFormatter, params: { useFormatterOuputToFilter: true } },
      { id: 'description', name: 'Description', field: 'description', filterable: true, sortable: true, minWidth: 80 },
      {
        id: 'duration', name: 'Durée (jours)', field: 'duration', sortable: true,
        formatter: Formatters.percentCompleteBar,
        minWidth: 100,
        filterable: true,
        filter: { model: Filters.compoundSlider, operator: '>=' }
      },
      { id: 'start', name: 'Début', field: 'start', formatter: Formatters.dateIso, outputType: 'dateIso', type: 'date', minWidth: 100, filterable: true, filter: { model: Filters.compoundDate } },
      { id: 'finish', name: 'Fin', field: 'finish', formatter: Formatters.dateIso, outputType: 'dateIso', type: 'date', minWidth: 100, filterable: true, filter: { model: Filters.compoundDate } },
      {
        id: 'completedBool', name: 'Complétée', field: 'completedBool', minWidth: 100,
        sortable: true,
        formatter: Formatters.checkmarkMaterial,
        exportCustomFormatter: exportBooleanFormatter,
        filterable: true,
        filter: {
          collection: [{ value: true, label: 'Vrai' }, { value: false, label: 'Faux' }],
          model: Filters.multipleSelect,
        }
      }
    ];

    this.gridOptions = {
      autoResize: {
        container: '#demo-container',
        rightPadding: 10,
      },
      enableAutoResize: true,
      enableExcelCopyBuffer: true,
      enableFiltering: true,
      checkboxSelector: {
        // you can toggle these 2 properties to show the "select all" checkbox in different location
        hideInFilterHeaderRow: false,
        hideInColumnTitleRow: true,
      },
      enableCheckboxSelector: true,
      enableSelection: true,
      // Provide a custom locales set
      locale: 'fr', // this helps certain elements to know which locale to use, for example the Date Filter/Editor
      locales: localeFrench,
      showCustomFooter: true, // display some metrics in the bottom custom footer
      customFooterOptions: {
        metricTexts: {
          // default text displayed in the metrics section on the right
          items: 'Éléments',
          of: 'de',
          lastUpdate: 'Dernière mise à jour',
        },
        dateFormat: 'YYYY-MM-DD hh:mm a',
        hideTotalItemCount: false,
        hideLastUpdateTimestamp: false,
      },
      gridMenu: {
        hideExportCsvCommand: false, // false by default, so it's optional
        hideExportTextDelimitedCommand: false, // true by default, so if you want it, you will need to disable the flag
      },
      enableExcelExport: true,
      enableTextExport: true,
      textExportOptions: {
        // set at the grid option level, meaning all column will evaluate the Formatter (when it has a Formatter defined)
        exportWithFormatter: true,
        sanitizeDataExport: true,
      },
      excelExportOptions: { exportWithFormatter: true, sanitizeDataExport: true },
      externalResources: [this.excelExportService, this.textExportService],
    };
  }

  getData(count: number) {
    // mock a dataset
    const tmpData: any[] = [];
    for (let i = 0; i < count; i++) {
      const randomYear = 2000 + Math.floor(Math.random() * 10);
      const randomMonth = Math.floor(Math.random() * 11);
      const randomDay = Math.floor(Math.random() * 29);

      tmpData[i] = {
        id: i,
        description: i % 5 ? 'desc ' + i : '🚀🦄 español', // also add some random to test NULL field
        duration: Math.round(Math.random() * 100) + '',
        start: new Date(randomYear, randomMonth, randomDay),
        finish: new Date(randomYear, randomMonth + 1, randomDay),
        completedBool: i % 5 === 0 ? true : false,
        completed: i % 5 === 0 ? 'TRUE' : 'FALSE',
      };
    }
    this.dataset = tmpData;
  }

  dynamicallyAddTitleHeader() {
    // you can dynamically add your column to your column definitions
    // and then use the spread operator [...cols] OR slice to force Aurelia to review the changes
    const newCol = { id: `title${this.duplicateTitleHeaderCount++}`, field: 'id', name: 'Titre', formatter: taskFormatter, sortable: true, minWidth: 100, filterable: true, params: { useFormatterOuputToFilter: true } };
    this.columnDefinitions.push(newCol);
    this.columnDefinitions = this.columnDefinitions.slice(); // or use spread operator [...cols]

    // NOTE if you use an Extensions (Checkbox Selector, Row Detail, ...) that modifies the column definitions in any way
    // you MUST use "getAllColumnDefinitions()" from the GridService, using this will be ALL columns including the 1st column that is created internally
    // for example if you use the Checkbox Selector (row selection), you MUST use the code below
    /*
    const allColumns = this.aureliaGrid.gridService.getAllColumnDefinitions();
    allColumns.push(newCol);
    this.columnDefinitions = [...allColumns]; // (or use slice) reassign to column definitions for Aurelia to do dirty checking
    */
  }

  exportToExcel() {
    this.excelExportService.exportToExcel({
      filename: 'Export',
      format: 'xlsx',
    });
  }

  exportToFile(type = 'csv') {
    this.textExportService.exportToFile({
      delimiter: type === 'csv' ? ',' : '\t',
      filename: 'myExport',
      format: type === 'csv' ? 'csv' : 'txt',
    });
  }

  /** Dispatched event of a Grid State Changed event */
  gridStateChanged(gridStateChanges: GridStateChange) {
    console.log('Grid State changed:: ', gridStateChanges);
    console.log('Grid State changed:: ', gridStateChanges.change);
  }

  toggleSubTitle() {
    this.hideSubTitle = !this.hideSubTitle;
    const action = this.hideSubTitle ? 'add' : 'remove';
    document.querySelector('.subtitle')?.classList[action]('hidden');
    this.aureliaGrid.resizerService.resizeGrid(0);
  }
}
