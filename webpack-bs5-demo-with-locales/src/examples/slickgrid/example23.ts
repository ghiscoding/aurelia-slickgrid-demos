import { addDay, format } from '@formkit/tempo';

import { SlickCustomTooltip } from '@slickgrid-universal/custom-tooltip-plugin';
import { ExcelExportService } from '@slickgrid-universal/excel-export';

import { CustomInputFilter } from './custom-inputFilter';
import {
  type AureliaGridInstance,
  type Column,
  type CurrentFilter,
  Filters,
  Formatters,
  type GridOption,
  type GridStateChange,
  type Metrics,
  type MultipleSelectOption,
  OperatorType,
  type SliderRangeOption,
} from 'aurelia-slickgrid';

const NB_ITEMS = 1500;

function randomBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export class Example23 {
  title = 'Example 23: Filtering from Range of Search Values';
  subTitle = `
    This demo shows how to use Filters with Range of Search Values (<a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/column-functionalities/filters/range-filters" target="_blank">Wiki docs</a>)
    <br/>
    <ul class="small">
      <li>All input filters support the following operators: (>, >=, <, <=, <>, !=, =, ==, *) and now also the (..) for an input range</li>
      <li>All filters (which support ranges) can be defined via the 2 dots (..) which represents a range, this also works for dates and slider in the "presets"</li>
      <ul>
        <li>For a numeric range defined in an input filter (must be of type text), you can use 2 dots (..) to represent a range</li>
        <li>example: typing "10..90" will filter values between 10 and 90 (but excluding the number 10 and 90)</li>
      </ul>
    </ul>
  `;

  aureliaGrid!: AureliaGridInstance;
  columnDefinitions: Column[] = [];
  gridOptions!: GridOption;
  dataset: any[] = [];
  hideSubTitle = false;
  metrics!: Metrics;
  filterList = [
    { value: '', label: '' },
    { value: 'currentYearTasks', label: 'Current Year Completed Tasks' },
    { value: 'nextYearTasks', label: 'Next Year Active Tasks' },
  ];
  selectedPredefinedFilter = '';

  constructor() {
    // define the grid options & columns and then create the grid itself
    this.defineGrid();
  }

  attached() {
    // populate the dataset once the grid is ready
    this.dataset = this.mockData(NB_ITEMS);
  }

  detaching() {
    this.saveCurrentGridState();
  }

  /* Define grid Options and Columns */
  defineGrid() {
    this.columnDefinitions = [
      {
        id: 'title', name: 'Title', field: 'id', minWidth: 100,
        sortable: true,
        filterable: true,
        params: { useFormatterOuputToFilter: true }
      },
      {
        id: 'description', name: 'Description', field: 'description', filterable: true, sortable: true, minWidth: 80,
        filter: {
          model: CustomInputFilter, // create a new instance to make each Filter independent from each other
          enableTrimWhiteSpace: true // or use global "enableFilterTrimWhiteSpace" to trim on all Filters
        }
      },
      {
        id: 'percentComplete', name: '% Complete', field: 'percentComplete', minWidth: 120,
        sortable: true,
        customTooltip: { position: 'center' },
        formatter: Formatters.progressBar,
        type: 'number',
        filterable: true,
        filter: {
          model: Filters.sliderRange,
          maxValue: 100, // or you can use the filter options as well
          operator: OperatorType.rangeInclusive, // defaults to inclusive
          options: {
            hideSliderNumbers: false, // you can hide/show the slider numbers on both side
            min: 0, step: 5
          } as SliderRangeOption
        }
      },
      {
        id: 'start', name: 'Start', field: 'start', formatter: Formatters.dateIso, sortable: true, minWidth: 75, width: 100, exportWithFormatter: true,
        type: 'date', filterable: true, filter: { model: Filters.compoundDate }
      },
      {
        id: 'finish', name: 'Finish', field: 'finish', formatter: Formatters.dateIso, sortable: true, minWidth: 75, width: 120, exportWithFormatter: true,
        type: 'date',
        filterable: true,
        filter: {
          model: Filters.dateRange,
        }
      },
      {
        id: 'duration', field: 'duration', name: 'Duration', maxWidth: 90,
        type: 'number',
        sortable: true,
        filterable: true, filter: {
          model: Filters.input,
          operator: OperatorType.rangeExclusive // defaults to exclusive
        }
      },
      {
        id: 'completed', name: 'Completed', field: 'completed', minWidth: 85, maxWidth: 90,
        formatter: Formatters.checkmarkMaterial,
        exportWithFormatter: true, // you can set this property in the column definition OR in the grid options, column def has priority over grid options
        filterable: true,
        filter: {
          collection: [{ value: '', label: '' }, { value: true, label: 'True' }, { value: false, label: 'False' }],
          model: Filters.singleSelect,
          options: { autoAdjustDropHeight: true } as MultipleSelectOption
        }
      }
    ];

    const presetLowestDay = format(addDay(new Date(), -2), 'YYYY-MM-DD');
    const presetHighestDay = format(addDay(new Date(), 25), 'YYYY-MM-DD');

    this.gridOptions = {
      autoResize: {
        container: '#demo-container',
        rightPadding: 10,
      },
      enableExcelCopyBuffer: true,
      enableFiltering: true,
      // enableFilterTrimWhiteSpace: true,

      // use columnDef searchTerms OR use presets as shown below
      presets: {
        filters: [
          //  you can use the 2 dots separator on all Filters which support ranges
          { columnId: 'duration', searchTerms: ['4..88'] },
          // { columnId: 'percentComplete', searchTerms: ['5..80'] }, // without operator will default to 'RangeExclusive'
          // { columnId: 'finish', operator: 'RangeInclusive', searchTerms: [`${presetLowestDay}..${presetHighestDay}`] },

          // or you could also use 2 searchTerms values, instead of using the 2 dots (only works with SliderRange & DateRange Filters)
          // BUT make sure to provide the operator, else the filter service won't know that this is really a range
          { columnId: 'percentComplete', operator: 'RangeInclusive', searchTerms: [5, 80] }, // same result with searchTerms: ['5..80']
          { columnId: 'finish', operator: 'RangeInclusive', searchTerms: [presetLowestDay, presetHighestDay] },
        ],
        sorters: [
          { columnId: 'percentComplete', direction: 'DESC' },
          { columnId: 'duration', direction: 'ASC' },
        ],
      },
      externalResources: [new SlickCustomTooltip(), new ExcelExportService()],
    };
  }

  mockData(itemCount: number, startingIndex = 0): any[] {
    // mock a dataset
    const tempDataset: any[] = [];
    for (let i = startingIndex; i < startingIndex + itemCount; i++) {
      const randomDuration = randomBetween(0, 365);
      const randomYear = randomBetween(new Date().getFullYear(), new Date().getFullYear() + 1);
      const randomMonth = randomBetween(0, 12);
      const randomDay = randomBetween(10, 28);
      const randomPercent = randomBetween(0, 100);

      tempDataset.push({
        id: i,
        title: 'Task ' + i,
        description: i % 5 ? 'desc ' + i : null, // also add some random to test NULL field
        duration: randomDuration,
        percentComplete: randomPercent,
        percentCompleteNumber: randomPercent,
        start: i % 4 ? null : new Date(randomYear, randomMonth, randomDay), // provide a Date format
        finish: new Date(randomYear, randomMonth, randomDay),
        completed: randomPercent === 100 ? true : false,
      });
    }

    return tempDataset;
  }

  clearFilters() {
    this.selectedPredefinedFilter = '';
    this.aureliaGrid.filterService.clearFilters();
  }

  /** Dispatched event of a Grid State Changed event */
  gridStateChanged(gridState: GridStateChange) {
    console.log('Client sample, Grid State changed:: ', gridState);
  }

  /** Save current Filters, Sorters in LocaleStorage or DB */
  saveCurrentGridState() {
    console.log('Client sample, current Grid State:: ', this.aureliaGrid.gridStateService.getCurrentGridState());
  }

  refreshMetrics(_e: Event, args: any) {
    if (args && args.current >= 0) {
      window.setTimeout(() => {
        this.metrics = {
          startTime: new Date(),
          itemCount: (args && args.current) || 0,
          totalItemCount: this.dataset.length || 0,
        };
      });
    }
  }

  setFiltersDynamically() {
    const presetLowestDay = format(addDay(new Date(), -5), 'YYYY-MM-DD');
    const presetHighestDay = format(addDay(new Date(), 25), 'YYYY-MM-DD');

    // we can Set Filters Dynamically (or different filters) afterward through the FilterService
    this.aureliaGrid.filterService.updateFilters([
      { columnId: 'duration', searchTerms: ['14..78'], operator: 'RangeInclusive' },
      { columnId: 'percentComplete', operator: 'RangeExclusive', searchTerms: [15, 85] },
      { columnId: 'finish', operator: 'RangeInclusive', searchTerms: [presetLowestDay, presetHighestDay] },
    ]);
  }

  setSortingDynamically() {
    this.aureliaGrid.sortService.updateSorting([
      // orders matter, whichever is first in array will be the first sorted column
      { columnId: 'finish', direction: 'DESC' },
      { columnId: 'percentComplete', direction: 'ASC' },
    ]);
  }

  predefinedFilterChanged(newPredefinedFilter: string) {
    let filters: CurrentFilter[] = [];
    const currentYear = new Date().getFullYear();

    switch (newPredefinedFilter) {
      case 'currentYearTasks':
        filters = [
          { columnId: 'finish', operator: OperatorType.rangeInclusive, searchTerms: [`${currentYear}-01-01`, `${currentYear}-12-31`] },
          { columnId: 'completed', operator: OperatorType.equal, searchTerms: [true] },
        ];
        break;
      case 'nextYearTasks':
        filters = [{ columnId: 'start', operator: '>=', searchTerms: [`${currentYear + 1}-01-01`] }];
        break;
    }
    this.aureliaGrid.filterService.updateFilters(filters);
  }

  toggleSubTitle() {
    this.hideSubTitle = !this.hideSubTitle;
    const action = this.hideSubTitle ? 'add' : 'remove';
    document.querySelector('.subtitle')?.classList[action]('hidden');
    this.aureliaGrid.resizerService.resizeGrid(0);
  }
}
