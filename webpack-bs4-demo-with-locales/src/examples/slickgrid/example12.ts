import { ExcelExportService } from '@slickgrid-universal/excel-export';
import { TextExportService } from '@slickgrid-universal/text-export';
import { autoinject } from 'aurelia-framework';

import {
  AureliaGridInstance,
  Column,
  DelimiterType,
  FieldType,
  FileType,
  Filters,
  Formatter,
  Formatters,
  GridOption,
  GridStateChange,
  SlickGrid,
} from 'aurelia-slickgrid';
import { localeFrench } from 'locales/fr';

const NB_ITEMS = 1500;

const taskFormatter: Formatter = (row: number, cell: number, value: any, columnDef: any, dataContext: any, grid: any) => {
  return value !== undefined ? `Titre ${value}` : '';
};
const exportBooleanFormatter: Formatter = (row: number, cell: number, value: any, columnDef: any, dataContext: any, grid: any) => {
  return value ? 'Vrai' : 'Faux';
};

@autoinject()
export class Example12 {
  title = 'Example 12: Localization with Single Custom Locales';
  subTitle = `This Examples uses French Locales but you could use your own custom locales
    <ul>
      <li>Defining your own Custom Locales must include all necessary text, see the default (<a href="https://github.com/ghiscoding/aurelia-slickgrid-demos/blob/master/webpack-bs3-demo-with-locales/src/locales/en.ts" target="_blank">English Custom Locales</a>)</li>
      <li>Support Custom Locales (through the "locales" grid option), following these steps (<a href="https://github.com/ghiscoding/aurelia-slickgrid/wiki/Localization-with-Custom-Locales" target="_blank">Wiki docs</a>)</li>
      <li>For more info about "Download to File", read the <a href=https://github.com/ghiscoding/aurelia-slickgrid/wiki/Export-to-File" target="_blank">Wiki page</a></li>
    </ul>`;

  aureliaGrid: AureliaGridInstance;
  gridOptions: GridOption;
  columnDefinitions: Column[];
  dataset: any[];
  duplicateTitleHeaderCount = 1;
  gridObj: SlickGrid;
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
      { id: 'start', name: 'Début', field: 'start', formatter: Formatters.dateIso, outputType: FieldType.dateIso, type: FieldType.date, minWidth: 100, filterable: true, filter: { model: Filters.compoundDate } },
      { id: 'finish', name: 'Fin', field: 'finish', formatter: Formatters.dateIso, outputType: FieldType.dateIso, type: FieldType.date, minWidth: 100, filterable: true, filter: { model: Filters.compoundDate } },
      {
        id: 'completedBool', name: 'Complétée', field: 'completedBool', minWidth: 100,
        sortable: true,
        formatter: Formatters.checkmark,
        exportCustomFormatter: exportBooleanFormatter,
        filterable: true,
        filter: {
          collection: [{ value: true, label: 'Vrai' }, { value: false, label: 'Faux' }],
          model: Filters.multipleSelect,
          filterOptions: {
            autoDropWidth: true
          }
        }
      }
    ];

    this.gridOptions = {
      autoResize: {
        container: '#demo-container',
        rightPadding: 10
      },
      enableAutoResize: true,
      enableExcelCopyBuffer: true,
      enableFiltering: true,
      checkboxSelector: {
        // you can toggle these 2 properties to show the "select all" checkbox in different location
        hideInFilterHeaderRow: false,
        hideInColumnTitleRow: true
      },
      enableCheckboxSelector: true,
      enableRowSelection: true,

      // Provide a custom locales set
      locale: 'fr', // this helps certain elements to know which locale to use, for example the Date Filter/Editor
      locales: localeFrench,
      showCustomFooter: true, // display some metrics in the bottom custom footer
      customFooterOptions: {
        metricTexts: {
          // default text displayed in the metrics section on the right
          items: 'Éléments',
          of: 'de',
          lastUpdateKey: 'Dernière mise à jour',
        },
        dateFormat: 'YYYY-MM-DD hh:mm a',
        hideTotalItemCount: false,
        hideLastUpdateTimestamp: false,
      },
      gridMenu: {
        hideExportCsvCommand: false,           // false by default, so it's optional
        hideExportTextDelimitedCommand: false  // true by default, so if you want it, you will need to disable the flag
      },
      enableExcelExport: true,
      enableTextExport: true,
      textExportOptions: {
        // set at the grid option level, meaning all column will evaluate the Formatter (when it has a Formatter defined)
        exportWithFormatter: true,
        sanitizeDataExport: true
      },
      excelExportOptions: { exportWithFormatter: true, sanitizeDataExport: true },
      registerExternalResources: [this.excelExportService, this.textExportService],
    };
  }

  getData(count: number) {
    // mock a dataset
    this.dataset = [];
    for (let i = 0; i < count; i++) {
      const randomYear = 2000 + Math.floor(Math.random() * 10);
      const randomMonth = Math.floor(Math.random() * 11);
      const randomDay = Math.floor((Math.random() * 29));

      this.dataset[i] = {
        id: i,
        description: (i % 5) ? 'desc ' + i : '🚀🦄 español', // also add some random to test NULL field
        duration: Math.round(Math.random() * 100) + '',
        start: new Date(randomYear, randomMonth, randomDay),
        finish: new Date(randomYear, (randomMonth + 1), randomDay),
        completedBool: (i % 5 === 0) ? true : false,
        completed: (i % 5 === 0) ? 'TRUE' : 'FALSE'
      };
    }
  }

  dynamicallyAddTitleHeader() {
    // you can dynamically add your column to your column definitions
    // and then use the spread operator [...cols] OR slice to force Aurelia to review the changes
    const newCol = { id: `title${this.duplicateTitleHeaderCount++}`, field: 'id', nameKey: 'TITLE', formatter: taskFormatter, sortable: true, minWidth: 100, filterable: true, params: { useFormatterOuputToFilter: true } };
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
      format: FileType.xlsx
    });
  }

  exportToFile(type = 'csv') {
    this.textExportService.exportToFile({
      delimiter: (type === 'csv') ? DelimiterType.comma : DelimiterType.tab,
      filename: 'myExport',
      format: (type === 'csv') ? FileType.csv : FileType.txt
    });
  }

  /** Dispatched event of a Grid State Changed event */
  gridStateChanged(gridStateChanges: GridStateChange) {
    console.log('Grid State changed:: ', gridStateChanges);
    console.log('Grid State changed:: ', gridStateChanges.change);
  }
}
