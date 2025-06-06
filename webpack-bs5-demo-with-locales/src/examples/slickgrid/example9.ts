import {
  type AureliaGridInstance,
  type Column,
  ExtensionName,
  Filters,
  Formatters,
  type GridOption,
  type SlickDataView,
  type SlickGrid,
} from 'aurelia-slickgrid';
import './example9.scss'; // provide custom CSS/SASS styling

export class Example9 {
  title = 'Example 9: Grid Menu Control';
  subTitle = `
    This example demonstrates using the <b>Slick.Controls.GridMenu</b> plugin to easily add a Grid Menu (aka hamburger menu) on the top right corner of the grid.<br/>
    (<a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/grid-menu" target="_blank">Wiki docs</a>)
    <ul>
      <li>You can change the Grid Menu icon, for example "mdi-dots-vertical"&nbsp;&nbsp;<span class="mdi mdi-dots-vertical"></span>&nbsp;&nbsp;(which is shown in this example)</li>
      <li>By default the Grid Menu shows all columns which you can show/hide them</li>
      <li>You can configure multiple custom "commands" to show up in the Grid Menu and use the "onGridMenuCommand()" callback</li>
      <li>Doing a "right + click" over any column header will also provide a way to show/hide a column (via the Column Picker Plugin)</li>
      <li>You can change the icons of both picker via SASS variables as shown in this demo (check all SASS variables)</li>
      <li><i class="mdi mdi-arrow-down icon"></i> You can also show the Grid Menu anywhere on your page</li>
    </ul>
  `;

  aureliaGrid!: AureliaGridInstance;
  columnDefinitions: Column[] = [];
  gridOptions!: GridOption;
  dataset: any[] = [];
  dataView!: SlickDataView;
  gridObj!: SlickGrid;
  hideSubTitle = false;

  constructor() {
    // define the grid options & columns and then create the grid itself
    this.defineGrid();
  }

  attached() {
    // populate the dataset once the grid is ready
    this.getData();
  }

  aureliaGridReady(aureliaGrid: AureliaGridInstance) {
    this.aureliaGrid = aureliaGrid;
    this.gridObj = aureliaGrid && aureliaGrid.slickGrid;
    this.dataView = aureliaGrid && aureliaGrid.dataView;
  }

  defineGrid() {
    this.columnDefinitions = [
      { id: 'title', name: 'Title', field: 'title', filterable: true },
      { id: 'duration', name: 'Duration', field: 'duration', sortable: true, filterable: true },
      {
        id: 'percentComplete', name: '% Complete', field: 'percentComplete', sortable: true, filterable: true,
        type: 'number',
        formatter: Formatters.percentCompleteBar,
        filter: { model: Filters.compoundSlider, options: { hideSliderNumber: false } }
      },
      { id: 'start', name: 'Start', field: 'start', filterable: true, type: 'dateUs', filter: { model: Filters.compoundDate } },
      { id: 'finish', name: 'Finish', field: 'finish', filterable: true, type: 'dateUs', filter: { model: Filters.compoundDate } },
      {
        id: 'completed', name: 'Completed', field: 'completed', maxWidth: 80, formatter: Formatters.checkmarkMaterial,
        type: 'boolean',
        minWidth: 100,
        sortable: true,
        filterable: true,
        filter: {
          collection: [{ value: '', label: '' }, { value: true, label: 'true' }, { value: false, label: 'false' }],
          model: Filters.singleSelect,
        }
      }
    ];

    this.gridOptions = {
      columnPicker: {
        hideForceFitButton: true,
        hideSyncResizeButton: true,
        onColumnsChanged: (_e, args) => {
          console.log('Column selection changed from Column Picker, visible columns: ', args.visibleColumns);
        },
      },
      enableAutoResize: true,
      enableGridMenu: true,
      autoResize: {
        container: '#demo-container',
        rightPadding: 10,
      },
      enableFiltering: true,
      enableCellNavigation: true,
      gridMenu: {
        // we could disable the menu entirely by returning false depending on some code logic
        menuUsabilityOverride: () => true,

        commandTitle: 'Custom Commands',
        iconCssClass: 'mdi mdi-dots-vertical', // defaults to "mdi-menu"
        hideForceFitButton: true,
        hideSyncResizeButton: true,
        hideToggleFilterCommand: false, // show/hide internal custom commands
        menuWidth: 17,
        resizeOnShowHeaderRow: true,
        subItemChevronClass: 'mdi mdi-chevron-down mdi-rotate-270',
        commandItems: [
          // add Custom Items Commands which will be appended to the existing internal custom items
          // you cannot override an internal items but you can hide them and create your own
          // also note that the internal custom commands are in the positionOrder range of 50-60,
          // if you want yours at the bottom then start with 61, below 50 will make your command(s) show on top
          {
            iconCssClass: 'mdi mdi-help-circle',
            title: 'Help',
            disabled: false,
            command: 'help',
            positionOrder: 90,
            cssClass: 'bold', // container css class
            textCssClass: 'blue', // just the text css class
          },
          // you can pass divider as a string or an object with a boolean (if sorting by position, then use the object)
          // note you should use the "divider" string only when items array is already sorted and positionOrder are not specified
          { divider: true, command: '', positionOrder: 89 },
          // 'divider',
          {
            title: 'Command 1',
            command: 'command1',
            positionOrder: 91,
            cssClass: 'orange',
            iconCssClass: 'mdi mdi-alert',
            // you can use the "action" callback and/or use "onCallback" callback from the grid options, they both have the same arguments
            action: (_e, args) => alert(args.command),
            itemUsabilityOverride: (args) => {
              // for example disable the command if there's any hidden column(s)
              if (args && Array.isArray(args.columns)) {
                return args.columns.length === args.visibleColumns.length;
              }
              return true;
            },
          },
          {
            title: 'Command 2',
            command: 'command2',
            positionOrder: 92,
            cssClass: 'red', // container css class
            textCssClass: 'italic', // just the text css class
            action: (_e, args) => alert(args.command),
            itemVisibilityOverride: () => {
              // for example hide this command from the menu if there's any filter entered
              if (this.aureliaGrid) {
                return this.isObjectEmpty(this.aureliaGrid.filterService.getColumnFilters());
              }
              return true;
            },
          },
          {
            title: 'Disabled command',
            disabled: true,
            command: 'disabled-command',
            positionOrder: 98,
          },
          { command: '', divider: true, positionOrder: 98 },
          {
            // we can also have multiple nested sub-menus
            command: 'export',
            title: 'Exports',
            positionOrder: 99,
            commandItems: [
              { command: 'exports-txt', title: 'Text (tab delimited)' },
              {
                command: 'sub-menu',
                title: 'Excel',
                cssClass: 'green',
                subMenuTitle: 'available formats',
                subMenuTitleCssClass: 'text-italic orange',
                commandItems: [
                  { command: 'exports-csv', title: 'Excel (csv)' },
                  { command: 'exports-xlsx', title: 'Excel (xlsx)' },
                ],
              },
            ],
          },
          {
            command: 'feedback',
            title: 'Feedback',
            positionOrder: 100,
            commandItems: [
              {
                command: 'request-update',
                title: 'Request update from supplier',
                iconCssClass: 'mdi mdi-star',
                tooltip: 'this will automatically send an alert to the shipping team to contact the user for an update',
              },
              'divider',
              {
                command: 'sub-menu',
                title: 'Contact Us',
                iconCssClass: 'mdi mdi-account',
                subMenuTitle: 'contact us...',
                subMenuTitleCssClass: 'italic',
                commandItems: [
                  { command: 'contact-email', title: 'Email us', iconCssClass: 'mdi mdi-pencil-outline' },
                  { command: 'contact-chat', title: 'Chat with us', iconCssClass: 'mdi mdi-message-text-outline' },
                  { command: 'contact-meeting', title: 'Book an appointment', iconCssClass: 'mdi mdi-coffee' },
                ],
              },
            ],
          },
        ],
        // you can use the "action" callback and/or use "onCallback" callback from the grid options, they both have the same arguments
        onCommand: (_e: Event, args: any) => {
          // e.preventDefault(); // preventing default event would keep the menu open after the execution
          const command = args.item?.command;
          if (command.includes('exports-')) {
            alert('Exporting as ' + args?.item.title);
          } else if (command.includes('contact-') || command === 'help') {
            alert('Command: ' + args.command);
          } else {
            console.log('onGridMenuCommand', args.command);
          }
        },
        onColumnsChanged: (_e, args) => {
          console.log('Column selection changed from Grid Menu, visible columns: ', args.visibleColumns);
        },
      },
    };
  }

  getData() {
    // Set up some test columns.
    const mockDataset: any[] = [];
    for (let i = 0; i < 500; i++) {
      mockDataset[i] = {
        id: i,
        title: 'Task ' + i,
        phone: this.generatePhoneNumber(),
        duration: Math.round(Math.random() * 25) + ' days',
        percentComplete: Math.round(Math.random() * 100),
        start: '01/01/2009',
        finish: '01/05/2009',
        completed: i % 5 === 0,
      };
    }
    this.dataset = mockDataset;
  }

  generatePhoneNumber() {
    let phone = '';
    for (let i = 0; i < 10; i++) {
      phone += Math.round(Math.random() * 9) + '';
    }
    return phone;
  }

  toggleGridMenu(e: MouseEvent) {
    if (this.aureliaGrid?.extensionService) {
      const gridMenuInstance = this.aureliaGrid.extensionService.getExtensionInstanceByName(ExtensionName.gridMenu);
      // open the external button Grid Menu, you can also optionally pass Grid Menu options as 2nd argument
      // for example we want to align our external button on the right without affecting the menu within the grid which will stay aligned on the left
      gridMenuInstance.showGridMenu(e, { dropSide: 'right' });
    }
  }

  toggleSubTitle() {
    this.hideSubTitle = !this.hideSubTitle;
    const action = this.hideSubTitle ? 'add' : 'remove';
    document.querySelector('.subtitle')?.classList[action]('hidden');
    this.aureliaGrid.resizerService.resizeGrid(0);
  }

  private isObjectEmpty(obj: any) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] !== '') {
        return false;
      }
    }
    return true;
  }
}
