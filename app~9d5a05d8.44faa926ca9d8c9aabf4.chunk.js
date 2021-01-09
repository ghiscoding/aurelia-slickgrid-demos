(window.webpackJsonp=window.webpackJsonp||[]).push([[38,52],{"examples/slickgrid/example25":function(e,t,i){"use strict";i.r(t),function(e){i.d(t,"Example25",(function(){return m}));var a=i("9Jp8"),r=i("aurelia-framework"),n=i("qQke"),o=i("aurelia-slickgrid"),l=(i("nda/"),function(e,t,i,a){var r,n=arguments.length,o=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(t,i,a,r){return new(a||(a=e))((function(e,n){function o(e){try{s(r.next(e))}catch(e){n(e)}}function l(e){try{s(r.throw(e))}catch(e){n(e)}}function s(t){var i;t.done?e(t.value):(i=t.value,i instanceof a?i:new a((function(e){e(i)}))).then(o,l)}s((r=r.apply(t,i||[])).next())}))},c=function(e,t){var i,a,r,n,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return n={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function l(n){return function(l){return function(n){if(i)throw new TypeError("Generator is already executing.");for(;o;)try{if(i=1,a&&(r=2&n[0]?a.return:n[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,n[1])).done)return r;switch(a=0,r&&(n=[2&n[0],r.value]),n[0]){case 0:case 1:r=n;break;case 4:return o.label++,{value:n[1],done:!1};case 5:o.label++,a=n[1],n=[0];continue;case 7:n=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==n[0]&&2!==n[0])){o=0;continue}if(3===n[0]&&(!r||n[1]>r[0]&&n[1]<r[3])){o.label=n[1];break}if(6===n[0]&&o.label<r[1]){o.label=r[1],r=n;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(n);break}r[2]&&o.ops.pop(),o.trys.pop();continue}n=t.call(e,o)}catch(e){n=[6,e],a=0}finally{i=r=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,l])}}},u="https://countries.trevorblades.com/",m=function(){function t(e){this.http=e,this.title="Example 25: GraphQL Basic API without Pagination",this.subTitle='\n  Use basic GraphQL query with any external public APIs (<a href="https://github.com/ghiscoding/aurelia-slickgrid/wiki/GraphQL" target="_blank">Wiki docs</a>).\n  <ul>\n    <li>This Examples uses a Public GraphQL API that you can find at this link <a href="https://countries.trevorblades.com/" target="_blank">https://countries.trevorblades.com/</a></li>\n    <li>Compare to the regular and default GraphQL implementation, you will find the following differences</li>\n    <ul>\n      <li>There are no Pagination and we only use GraphQL <b>once</b> to load the data, then we use the grid as a regular local in-memory grid</li>\n      <li>We enabled the following 2 flags "useLocalFiltering" and "useLocalSorting" to use regular (in memory) DataView filtering/sorting</li>\n    </ul>\n    <li>NOTE - This Example calls multiple GraphQL queries, this is <b>ONLY</b> for demo purposes, you would typically only call 1 query (which is what GraphQL is good at)</li>\n    <li>This example is mainly to demo the use of GraphqlService to build the query and retrieve the data but also to demo how to mix that with local (in-memory) Filtering/Sorting strategies</li>\n  </ul>\n  ',this.dataset=[],this.isWithCursor=!1,this.graphqlQuery="",this.processing=!1,this.status={text:"",class:""},this.defineGrid()}return t.prototype.defineGrid=function(){var e=this;this.columnDefinitions=[{id:"countryCode",field:"code",name:"Code",maxWidth:90,sortable:!0,filterable:!0,columnGroup:"Country"},{id:"countryName",field:"name",name:"Name",width:60,sortable:!0,filterable:!0,columnGroup:"Country"},{id:"countryNative",field:"native",name:"Native",width:60,sortable:!0,filterable:!0,columnGroup:"Country"},{id:"countryPhone",field:"phone",name:"Phone Area Code",maxWidth:110,sortable:!0,filterable:!0,columnGroup:"Country"},{id:"countryCurrency",field:"currency",name:"Currency",maxWidth:90,sortable:!0,filterable:!0,columnGroup:"Country"},{id:"countryEmoji",field:"emoji",name:"Emoji",maxWidth:90,sortable:!0,columnGroup:"Country"},{id:"languageName",field:"languages.name",name:"Names",width:60,formatter:o.Formatters.arrayObjectToCsv,columnGroup:"Language",params:{propertyNames:["name"],useFormatterOuputToFilter:!0},filterable:!0,filter:{model:o.Filters.multipleSelect,collectionAsync:this.getLanguages(),operator:o.OperatorType.inContains,collectionOptions:{addBlankEntry:!0,collectionInsideObjectProperty:"data.languages"},collectionFilterBy:[{property:"name",value:"",operator:"NE"},{property:"name",value:null,operator:"NE"}],collectionSortBy:{property:"name"},customStructure:{value:"name",label:"name"},filterOptions:{filter:!0}}},{id:"languageNative",field:"languages.native",name:"Native",width:60,formatter:o.Formatters.arrayObjectToCsv,params:{propertyNames:["native"],useFormatterOuputToFilter:!0},columnGroup:"Language",filterable:!0,filter:{model:o.Filters.multipleSelect,collectionAsync:this.getLanguages(),operator:o.OperatorType.inContains,collectionOptions:{addBlankEntry:!0,collectionInsideObjectProperty:"data.languages"},collectionFilterBy:[{property:"native",value:"",operator:"NE"},{property:"native",value:null,operator:"NE"}],collectionSortBy:{property:"native"},customStructure:{value:"native",label:"native"},filterOptions:{filter:!0}}},{id:"languageCode",field:"languages.code",name:"Codes",maxWidth:100,formatter:o.Formatters.arrayObjectToCsv,params:{propertyNames:["code"],useFormatterOuputToFilter:!0},columnGroup:"Language",filterable:!0},{id:"continentName",field:"continent.name",name:"Name",width:60,sortable:!0,filterable:!0,formatter:o.Formatters.complexObject,columnGroup:"Continent"},{id:"continentCode",field:"continent.code",name:"Code",maxWidth:90,sortable:!0,filterable:!0,filter:{model:o.Filters.singleSelect,collectionAsync:this.getContinents(),collectionOptions:{collectionInsideObjectProperty:"data.continents",addBlankEntry:!0,separatorBetweenTextLabels:": "},customStructure:{value:"code",label:"code",labelSuffix:"name"}},formatter:o.Formatters.complexObject,columnGroup:"Continent"}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:!0,enableCellNavigation:!0,enablePagination:!1,enableTranslate:!0,createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:28,datasetIdPropertyName:"code",showCustomFooter:!0,backendServiceApi:{service:new a.a,useLocalFiltering:!0,useLocalSorting:!0,options:{datasetName:"countries"},preProcess:function(){return e.displaySpinner(!0)},process:function(t){return e.getCountries(t)},postProcess:function(t){e.metrics=t.metrics,e.displaySpinner(!1)}}}},t.prototype.displaySpinner=function(e){this.processing=e,this.status=e?{text:"processing...",class:"alert alert-danger"}:{text:"done",class:"alert alert-success"}},t.prototype.getCountries=function(t){var i=this;return new e((function(e){return d(i,void 0,void 0,(function(){var i;return c(this,(function(a){switch(a.label){case 0:return[4,this.http.fetch(u,{method:"post",body:Object(n.b)({query:t})})];case 1:return i=a.sent(),e(i.json()),[2]}}))}))}))},t.prototype.getContinents=function(){var t=this;return new e((function(e){return d(t,void 0,void 0,(function(){var t;return c(this,(function(i){switch(i.label){case 0:return[4,this.http.fetch(u,{method:"post",body:Object(n.b)({query:"query { continents { code, name  }}"})})];case 1:return t=i.sent(),e(t.json()),[2]}}))}))}))},t.prototype.getLanguages=function(){var t=this;return new e((function(e){return d(t,void 0,void 0,(function(){var t;return c(this,(function(i){switch(i.label){case 0:return[4,this.http.fetch(u,{method:"post",body:Object(n.b)({query:"query { languages { code, name, native  }}"})})];case 1:return t=i.sent(),e(t.json()),[2]}}))}))}))},t.prototype.setFiltersDynamically=function(){this.aureliaGrid.filterService.updateFilters([{columnId:"countryName",searchTerms:["G"],operator:o.OperatorType.startsWith}])},t.prototype.setSortingDynamically=function(){this.aureliaGrid.sortService.updateSorting([{columnId:"billingAddressZip",direction:"DESC"},{columnId:"company",direction:"ASC"}])},t=l([Object(r.k)(),s("design:paramtypes",[n.a])],t)}()}.call(this,i("CW7D"))},"examples/slickgrid/example26":function(e,t,i){"use strict";i.r(t),i.d(t,"Example26",(function(){return h}));var a=i("aurelia-event-aggregator"),r=i("aurelia-framework"),n=i("qQke"),o=i("1aCK"),l=i("aurelia-i18n"),s=i("aurelia-slickgrid"),d=i("mrP8"),c=i("NW7F"),u=function(){return(u=Object.assign||function(e){for(var t,i=1,a=arguments.length;i<a;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},m=function(e,t,i,a){var r,n=arguments.length,o=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},p=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},h=function(){function e(e,t,i,a,r){this.aureliaUtilService=e,this.ea=t,this.http=i,this.httpFetch=a,this.i18n=r,this.title="Example 26: Use of Aurelia Custom Elements",this.subTitle='\n  <h3>Filters, Editors, AsyncPostRender with Aurelia Custom Elements</h3>\n  Grid with usage of Aurelia Custom Elements as Editor &amp; AsyncPostRender (similar to Formatter).\n  <ul>\n    <li>Support of Aurelia Custom Element as Custom Editor (click on any "Assignee" name cell)</li>\n    <ul>\n      <li>That column uses a simple select drodown wrapped in an Aurelia Custom Element\n      <li>Increased Grid Options "rowHeight" &amp; "headerRowHeight" to 45 so that the Custom Element fits in the cell.</li>\n    </ul>\n    <li>Support of Aurelia Custom Element as Custom Filter ("Assignee" columns), which also uses Custom Element\n    <li>The 2nd "Assignee" column (showing in bold text) uses "asyncPostRender" with an Aurelia Custom Element</li>\n    <ul>\n      <li>Why can\'t we use Aurelia Custom Element as Customer Formatter and why do I see a slight delay in loading the data?</li>\n      <li>It\'s totally normal since SlickGrid Formatters only accept strings (synchronously),\n      so we cannot use that (Aurelia requires at least 1 full cycle to render the element), so we are left with SlickGrid "asyncPostRender" and\n      it works but as the name suggest it\'s async users might see noticeable delay in loading the data\n      </li>\n    </ul>\n  </ul>\n  ',this._commandQueue=[],this.isAutoEdit=!0,this.assignees=[{id:"",name:""},{id:"1",name:"John"},{id:"2",name:"Pierre"},{id:"3",name:"Paul"}],this.defineGrid(),this.selectedLanguage=this.i18n.getLocale()}return e.prototype.attached=function(){this.dataset=this.mockData(100)},e.prototype.defineGrid=function(){var e=this;this.columnDefinitions=[{id:"title",name:"Title",field:"title",filterable:!0,sortable:!0,type:s.FieldType.string,editor:{model:s.Editors.longText,minLength:5,maxLength:255},minWidth:100,onCellChange:function(t,i){console.log(i),e.alertWarning="Updated Title: "+i.dataContext.title}},{id:"assignee",name:"Assignee",field:"assignee",minWidth:100,filterable:!0,sortable:!0,filter:{model:new c.a,collection:this.assignees,params:{aureliaUtilService:this.aureliaUtilService,templateUrl:"examples/slickgrid/filter-select"}},queryFieldFilter:"assignee.id",queryFieldSorter:"assignee.name",formatter:s.Formatters.complexObject,params:{complexFieldLabel:"assignee.name"},exportWithFormatter:!0,editor:{model:d.a,collection:this.assignees,params:{aureliaUtilService:this.aureliaUtilService,templateUrl:"examples/slickgrid/editor-select"}},onCellChange:function(t,i){console.log(i),e.alertWarning="Updated Title: "+i.dataContext.title}},{id:"assignee2",name:"Assignee with Aurelia Component",field:"assignee",minWidth:100,filterable:!0,sortable:!0,filter:{model:new c.a,collection:this.assignees,params:{aureliaUtilService:this.aureliaUtilService,templateUrl:"examples/slickgrid/filter-select"}},queryFieldFilter:"assignee.id",queryFieldSorter:"assignee.name",formatter:function(){return"..."},asyncPostRender:this.renderAureliaComponent.bind(this),params:{templateUrl:"examples/slickgrid/custom-title-formatter",complexFieldLabel:"assignee.name"},exportCustomFormatter:s.Formatters.complexObject},{id:"duration",name:"Duration (days)",field:"duration",filterable:!0,minWidth:100,sortable:!0,type:s.FieldType.number,filter:{model:s.Filters.slider,params:{hideSliderNumber:!1}},editor:{model:s.Editors.slider,minValue:0,maxValue:100}},{id:"complete",name:"% Complete",field:"percentComplete",filterable:!0,formatter:s.Formatters.multiple,type:s.FieldType.number,editor:{enableRenderHtml:!0,collection:Array.from(Array(101).keys()).map((function(e){return{value:e,label:e,symbol:'<i class="fa fa-percent" style="color:cadetblue"></i>'}})),customStructure:{value:"value",label:"label",labelSuffix:"symbol"},collectionSortBy:{property:"label",sortDesc:!0},collectionFilterBy:{property:"value",value:0,operator:s.OperatorType.notEqual},model:s.Editors.singleSelect},minWidth:100,params:{formatters:[s.Formatters.collectionEditor,s.Formatters.percentCompleteBar]}},{id:"start",name:"Start",field:"start",filterable:!0,filter:{model:s.Filters.compoundDate},formatter:s.Formatters.dateIso,sortable:!0,minWidth:100,type:s.FieldType.date,editor:{model:s.Editors.date}},{id:"finish",name:"Finish",field:"finish",filterable:!0,filter:{model:s.Filters.compoundDate},formatter:s.Formatters.dateIso,sortable:!0,minWidth:100,type:s.FieldType.date,editor:{model:s.Editors.date}}],this.gridOptions={asyncEditorLoading:!1,autoEdit:this.isAutoEdit,autoCommitEdit:!1,autoResize:{container:"#demo-container",rightPadding:10},rowHeight:45,editable:!0,enableCellNavigation:!0,enableColumnPicker:!0,enableExcelCopyBuffer:!0,enableFiltering:!0,enableAsyncPostRender:!0,asyncPostRenderDelay:0,editCommandHandler:function(t,i,a){e._commandQueue.push(a),a.execute()},i18n:this.i18n,params:{aureliaUtilService:this.aureliaUtilService}}},e.prototype.mockData=function(e,t){void 0===t&&(t=0);for(var i=[],a=t;a<t+e;a++){var r=2e3+Math.floor(10*Math.random()),n=Math.floor(11*Math.random()),o=Math.floor(29*Math.random()),l=Math.round(100*Math.random());i.push({id:a,title:"Task "+a,assignee:a%3?this.assignees[2]:a%2?this.assignees[1]:this.assignees[0],duration:Math.round(100*Math.random())+"",percentComplete:l,percentCompleteNumber:l,start:new Date(r,n,o),finish:new Date(r,n+1,o),effortDriven:a%5==0})}return i},e.prototype.onCellChanged=function(e,t){console.log("onCellChange",t),this.updatedObject=u({},t.item)},e.prototype.onCellClicked=function(e,t){var i=this.aureliaGrid.gridService.getColumnFromEventArguments(t);console.log(i),"edit"===i.columnDef.id?(this.alertWarning="open a modal window to edit: "+i.dataContext.title,this.aureliaGrid.gridService.highlightRow(t.row,1500)):"delete"===i.columnDef.id&&confirm("Are you sure?")&&(this.aureliaGrid.gridService.deleteItemById(i.dataContext.id),this.alertWarning="Deleted: "+i.dataContext.title)},e.prototype.onCellValidationError=function(e,t){alert(t.validationResults.msg)},e.prototype.changeAutoCommit=function(){return this.gridOptions.autoCommitEdit=!this.gridOptions.autoCommitEdit,this.aureliaGrid.slickGrid.setOptions({autoCommitEdit:this.gridOptions.autoCommitEdit}),!0},e.prototype.renderAureliaComponent=function(e,t,i,a){a.params.templateUrl&&e.length&&this.aureliaUtilService.createAureliaViewModelAddToSlot(a.params.templateUrl,{model:i},e[0],!0)},e.prototype.setAutoEdit=function(e){return this.isAutoEdit=e,this.aureliaGrid.slickGrid.setOptions({autoEdit:e}),!0},e.prototype.switchLanguage=function(){this.selectedLanguage="en"===this.selectedLanguage?"fr":"en",this.i18n.setLocale(this.selectedLanguage)},e.prototype.undo=function(){var e=this._commandQueue.pop();e&&Slick.GlobalEditorLock.cancelCurrentEdit()&&(e.undo(),this.aureliaGrid.slickGrid.gotoCell(e.row,e.cell,!1))},e=m([Object(r.k)(),p("design:paramtypes",[s.AureliaUtilService,a.a,o.a,n.a,l.I18N])],e)}()},"examples/slickgrid/example26.html":function(e,t){e.exports='<template> <h2>${title}</h2> <div class="subtitle" innerhtml.bind="subTitle"></div> <div class="col-sm-6"> <label>autoEdit setting</label> <br/> <span id="radioAutoEdit"> <div class="row"> <label class="radio-inline control-label" for="radioTrue"> <input type="radio" name="inlineRadioOptions" id="radioTrue" checked="checked" value.bind="isAutoEdit" click.delegate="setAutoEdit(true)"> ON (single-click) </label> <label class="radio-inline control-label" for="radioFalse"> <input type="radio" name="inlineRadioOptions" id="radioFalse" value.bind="isAutoEdit" click.delegate="setAutoEdit(false)"> OFF (double-click) </label> </div> <div class="row"> <button class="btn btn-outline-secondary btn-sm" click.delegate="undo()"> <i class="fa fa-undo"></i> Undo last edit(s) </button> <label class="checkbox-inline control-label" for="autoCommitEdit"> <input type="checkbox" id="autoCommitEdit" value.bind="gridOptions.autoCommitEdit" click.delegate="changeAutoCommit()"> Auto Commit Edit </label> </div> </span> <div class="row" style="margin-top:5px"> <button class="btn btn-outline-secondary btn-sm" click.delegate="aureliaGrid.filterService.clearFilters()">Clear Filters</button> <button class="btn btn-outline-secondary btn-sm" click.delegate="aureliaGrid.sortService.clearSorting()">Clear Sorting</button> </div> </div> <div class="col-sm-6"> <div class="alert alert-info" show.bind="updatedObject"> <strong>Updated Item:</strong> ${updatedObject | stringify} </div> <div class="alert alert-warning" show.bind="alertWarning"> ${alertWarning} </div> </div> <div id="grid-container" class="col-sm-12"> <aurelia-slickgrid grid-id="grid26" column-definitions.bind="columnDefinitions" grid-options.bind="gridOptions" dataset.bind="dataset" instances.bind="aureliaGrid" on-cell-change.delegate="onCellChanged($event.detail.eventData, $event.detail.args)" on-click.delegate="onCellClicked($event.detail.eventData, $event.detail.args)" on-validation-error.delegate="onCellValidationError($event.detail.eventData, $event.detail.args)"> </aurelia-slickgrid> </div> </template>'},"examples/slickgrid/example27":function(e,t,i){"use strict";i.r(t),i.d(t,"Example27",(function(){return m}));var a=i("aurelia-framework"),r=i("aurelia-slickgrid"),n=i("LboF"),o=i.n(n),l=i("dnjc"),s={insert:"head",singleton:!1},d=(o()(l.a,s),l.a.locals,function(e,t,i,a){var r,n=arguments.length,o=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o}),c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},u=function(){for(var e=0,t=0,i=arguments.length;t<i;t++)e+=arguments[t].length;var a=Array(e),r=0;for(t=0;t<i;t++)for(var n=arguments[t],o=0,l=n.length;o<l;o++,r++)a[r]=n[o];return a},m=function(){function e(){this.title="Example 27: Tree Data <small>(from a flat dataset with <code>parentId</code> references)</small>",this.subTitle='<ul>\n    <li>It is assumed that your dataset will have Parent/Child references AND also Tree Level (indent) property.</li>\n    <ul>\n      <li>If you do not have the Tree Level (indent), you could call "convertParentChildArrayToHierarchicalView()" then call "convertHierarchicalViewToParentChildArray()"</li>\n      <li>You could also pass the result of "convertParentChildArrayToHierarchicalView()" to "dataset-hierarchical.bind" as defined in the next Hierarchical Example</li>\n    </ul>\n    <li><b>Styling - Material Theme</b></li>\n    <ul>\n      <li>The Material Theme was created with SASS and compiled in CSS (<a href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/src/aurelia-slickgrid/styles/slickgrid-theme-material.scss" target="_blank">slickgrid-theme-material.scss</a>), you can override any of its SASS variables</li>\n      <li>We use a small subset of <a href="https://materialdesignicons.com/" target="_blank">Material Design Icons</a></li>\n      <li>you might need to refresh the page to clear the browser cache and see the correct theme</li>\n    </ul>\n  </ul>',this.datasetHierarchical=[],this.defineGrid()}return e.prototype.attached=function(){this.dataset=this.mockData(200)},e.prototype.defineGrid=function(){this.columnDefinitions=[{id:"title",name:"Title",field:"title",width:220,cssClass:"cell-title",filterable:!0,sortable:!0,queryFieldSorter:"id",type:r.FieldType.string,formatter:r.Formatters.tree},{id:"duration",name:"Duration",field:"duration",minWidth:90,filterable:!0},{id:"percentComplete",name:"% Complete",field:"percentComplete",minWidth:120,maxWidth:200,sortable:!0,filterable:!0,filter:{model:r.Filters.compoundSlider,operator:">="},formatter:r.Formatters.percentCompleteBar,type:r.FieldType.number,exportWithFormatter:!1},{id:"start",name:"Start",field:"start",minWidth:60,type:r.FieldType.dateIso,filterable:!0,sortable:!0,filter:{model:r.Filters.compoundDate},formatter:r.Formatters.dateIso},{id:"finish",name:"Finish",field:"finish",minWidth:60,type:r.FieldType.dateIso,filterable:!0,sortable:!0,filter:{model:r.Filters.compoundDate},formatter:r.Formatters.dateIso},{id:"effortDriven",name:"Effort Driven",width:80,minWidth:20,maxWidth:80,cssClass:"cell-effort-driven",field:"effortDriven",formatter:r.Formatters.checkmark,cannotTriggerInsert:!0,exportWithFormatter:!1,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:r.Filters.singleSelect}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableAutoSizeColumns:!0,enableAutoResize:!0,enableExport:!0,enableFiltering:!0,enableTreeData:!0,treeDataOptions:{columnId:"title",levelPropName:"indent",parentPropName:"parentId"},headerRowHeight:45,rowHeight:40,presets:{filters:[{columnId:"percentComplete",searchTerms:[25],operator:">="}]},contextMenu:{iconCollapseAllGroupsCommand:"mdi mdi-arrow-collapse",iconExpandAllGroupsCommand:"mdi mdi-arrow-expand",iconClearGroupingCommand:"mdi mdi-close",iconCopyCellValueCommand:"mdi mdi-content-copy",iconExportCsvCommand:"mdi mdi-download",iconExportExcelCommand:"mdi mdi-file-excel-outline",iconExportTextDelimitedCommand:"mdi mdi-download"},gridMenu:{iconCssClass:"mdi mdi-menu",iconClearAllFiltersCommand:"mdi mdi-filter-remove-outline",iconClearAllSortingCommand:"mdi mdi-swap-vertical",iconExportCsvCommand:"mdi mdi-download",iconExportExcelCommand:"mdi mdi-file-excel-outline",iconExportTextDelimitedCommand:"mdi mdi-download",iconRefreshDatasetCommand:"mdi mdi-sync",iconToggleFilterCommand:"mdi mdi-flip-vertical",iconTogglePreHeaderCommand:"mdi mdi-flip-vertical"},headerMenu:{iconClearFilterCommand:"mdi mdi mdi-filter-remove-outline",iconClearSortCommand:"mdi mdi-swap-vertical",iconSortAscCommand:"mdi mdi-sort-ascending",iconSortDescCommand:"mdi mdi-flip-v mdi-sort-descending",iconColumnHideCommand:"mdi mdi-close"}}},e.prototype.addNewRow=function(){var e=this,t=this.dataset.length,i=this.dataset.find((function(e){return 1===e.indent})),a={id:t,indent:1,parentId:this.aureliaGrid.dataView.getItemByIdx(i.parentId).id,title:"Task "+t,duration:"1 day",percentComplete:Math.round(100*Math.random()),start:new Date,finish:new Date,effortDriven:!1};this.aureliaGrid.dataView.addItem(a);var r=this.aureliaGrid.dataView.getItems();this.dataset=u(r),setTimeout((function(){var t=e.columnDefinitions.find((function(e){return"title"===e.id}));e.aureliaGrid.sortService.onLocalSortChanged(e.aureliaGrid.slickGrid,[{columnId:"title",sortCol:t,sortAsc:!0}]);var i=e.aureliaGrid.dataView.getRowById(a.id);e.aureliaGrid.slickGrid.scrollRowIntoView(i+3)}),0)},e.prototype.collapseAll=function(){this.aureliaGrid.treeDataService.toggleTreeDataCollapse(!0)},e.prototype.expandAll=function(){this.aureliaGrid.treeDataService.toggleTreeDataCollapse(!1)},e.prototype.logExpandedStructure=function(){console.log("exploded array",this.aureliaGrid.treeDataService.datasetHierarchical)},e.prototype.logFlatStructure=function(){console.log("flat array",this.aureliaGrid.treeDataService.dataset)},e.prototype.mockData=function(e){for(var t=0,i=[],a=[],r=0;r<e;r++){var n=2e3+Math.floor(10*Math.random()),o=Math.floor(11*Math.random()),l=Math.floor(29*Math.random()),s=a[r]={},d=void 0;Math.random()>.8&&r>0&&t<3?(t++,i.push(r-1)):Math.random()<.3&&t>0&&(t--,i.pop()),d=i.length>0?i[i.length-1]:null,s.id=r,s.indent=t,s.parentId=d,s.title="Task "+r,s.duration="5 days",s.percentComplete=Math.round(100*Math.random()),s.start=new Date(n,o,l),s.finish=new Date(n,o+1,l),s.effortDriven=r%5==0}return a},e=d([Object(a.k)(),c("design:paramtypes",[])],e)}()},"examples/slickgrid/example27.html":function(e,t){e.exports='<template> <h2 innerhtml.bind="title"></h2> <div class="subtitle" innerhtml.bind="subTitle"></div> <div class="row"> <div class="col-md-12"> <button click.delegate="addNewRow()" class="btn btn-outline-info btn-sm"> <span class="mdi mdi-plus"></span> <span>Add New Item (in 1st group)</span> </button> <button click.delegate="collapseAll()" class="btn btn-outline-secondary btn-sm"> <span class="mdi mdi-arrow-collapse"></span> <span>Collapse All</span> </button> <button click.delegate="expandAll()" class="btn btn-outline-secondary btn-sm"> <span class="mdi mdi-arrow-expand"></span> <span>Expand All</span> </button> <button click.delegate="logFlatStructure()" class="btn btn-outline-secondary btn-sm"> <span>Log Flag Structure</span> </button> <button click.delegate="logExpandedStructure()" class="btn btn-outline-secondary btn-sm"> <span>Log Expanded Structure</span> </button> </div> </div> <br/> <div id="grid-container" class="col-sm-12"> <aurelia-slickgrid grid-id="grid27" column-definitions.bind="columnDefinitions" grid-options.bind="gridOptions" dataset.bind="dataset" instances.bind="aureliaGrid"> </aurelia-slickgrid> </div> </template>'}}]);
//# sourceMappingURL=app~9d5a05d8.44faa926ca9d8c9aabf4.bundle.map