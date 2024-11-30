"use strict";(self.webpackChunkau_slickgrid_demo=self.webpackChunkau_slickgrid_demo||[]).push([[3639],{3639:(e,t,i)=>{i.r(t),i.d(t,{Example6:()=>f});var r={};i.r(r),i.d(r,{bindables:()=>d,default:()=>l,dependencies:()=>o,name:()=>n,register:()=>u,template:()=>s});var a=i(5394);const n="example6",s='<h2>\n  ${title}\n  <span class="float-end">\n    <a style="font-size: 18px"\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example6.ts">\n      <span class="mdi mdi-link-variant"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle" innerhtml.bind="subTitle"></div>\n\n<div class="row">\n  <div class="col-sm-5">\n    <div class.bind="status.class" role="alert" data-test="status">\n      <strong>Status: </strong> ${status.text}\n      <span hidden.bind="!processing">\n        <i class="mdi mdi-sync mdi-spin"></i>\n      </span>\n    </div>\n\n    <div class="row">\n      <div class="col-md-12">\n        <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="clear-filters-sorting"\n                click.trigger="clearAllFiltersAndSorts()" title="Clear all Filters & Sorts">\n          <i class="mdi mdi-filter-remove-outline"></i>\n          Clear all Filter & Sorts\n        </button>\n        <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="set-dynamic-filter"\n                click.trigger="setFiltersDynamically()">\n          Set Filters Dynamically\n        </button>\n        <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="set-dynamic-sorting"\n                click.trigger="setSortingDynamically()">\n          Set Sorting Dynamically\n        </button>\n        <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="reset-presets"\n                click.trigger="resetToOriginalPresets()">\n          Reset Original Presets\n        </button>\n        <label for="serverdelay" class="ml-4">Server Delay: </label>\n        <input id="serverdelay" type="number" data-test="server-delay" style="width: 55px"\n              value.bind="serverWaitDelay"\n              title="input a fake timer delay to simulate slow server response" />\n      </div>\n    </div>\n\n    <hr>\n\n    <div class="row">\n      <span style="margin-left: 10px">\n        <label>Pagination strategy: </label>\n        <span data-test="radioStrategy">\n          <label class="radio-inline control-label" for="radioOffset">\n            <input type="radio" name="inlineRadioOptions" data-test="offset" id="radioOffset" checked value.bind="false"\n            click.trigger="setIsWithCursor(false)"> Offset\n          </label>\n          <label class="radio-inline control-label" for="radioCursor">\n            <input type="radio" name="inlineRadioOptions" data-test="cursor" id="radioCursor" value.bind="true"\n            click.trigger="setIsWithCursor(true)"> Cursor\n          </label>\n        </span>\n      </span>\n    </div>\n    <br />\n    <div if.bind="metrics" style="margin: 10px 0px">\n      <b>Metrics:</b> ${metrics.endTime | dateFormat: \'DD MMM, h:mm:ss a\'} | ${metrics.executionTime}ms |\n      ${metrics.totalItemCount}\n      items\n    </div>\n    <div class="row" style="margin-bottom: 5px">\n      <div class="col-md-12">\n        <label>Programmatically go to first/last page:</label>\n        <div class="btn-group" role="group">\n          <button class="btn btn-outline-secondary btn-xs btn-icon px-2" data-test="goto-first-page" click.trigger="goToFirstPage()">\n            <i class="mdi mdi-page-first"></i>\n          </button>\n          <button class="btn btn-outline-secondary btn-xs btn-icon px-2" data-test="goto-last-page" click.trigger="goToLastPage()">\n            <i class="mdi mdi-page-last icon"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="col-sm-7">\n    <div class="alert alert-info" data-test="alert-graphql-query">\n      <strong>GraphQL Query:</strong> <span data-test="graphql-query-result">${graphqlQuery}</span>\n    </div>\n  </div>\n</div>\n\n<hr />\n\n<aurelia-slickgrid grid-id="grid6"\n                    column-definitions.bind="columnDefinitions"\n                    grid-options.bind="gridOptions"\n                    dataset.bind="dataset"\n                    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"\n                    on-grid-state-changed.trigger="gridStateChanged($event.detail)">\n</aurelia-slickgrid>\n',l=s,o=[],d={};let c;function u(e){c||(c=a.K9.define({name:n,template:s,dependencies:o,bindables:d})),e.register(c)}var m=i(3651),p=i(7158),g=i(6609),h=(i(6757),function(e,t,i,r,a,n){function s(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected");return e}for(var l,o=r.kind,d="getter"===o?"get":"setter"===o?"set":"value",c=!t&&e?r.static?e:e.prototype:null,u=t||(c?Object.getOwnPropertyDescriptor(c,r.name):{}),m=!1,p=i.length-1;p>=0;p--){var g={};for(var h in r)g[h]="access"===h?{}:r[h];for(var h in r.access)g.access[h]=r.access[h];g.addInitializer=function(e){if(m)throw new TypeError("Cannot add initializers after decoration has completed");n.push(s(e||null))};var b=(0,i[p])("accessor"===o?{get:u.get,set:u.set}:u[d],g);if("accessor"===o){if(void 0===b)continue;if(null===b||"object"!=typeof b)throw new TypeError("Object expected");(l=s(b.get))&&(u.get=l),(l=s(b.set))&&(u.set=l),(l=s(b.init))&&a.unshift(l)}else(l=s(b))&&("field"===o?a.unshift(l):u[d]=l)}c&&Object.defineProperty(c,r.name,u),m=!0});const b="users";let f=(()=>{let e,t,i=[(0,a.EM)(r)],n=[];return t=class{constructor(){this.title="Example 6: Grid with Backend GraphQL Service",this.subTitle='\n  Use it when you need to support Pagination with a GraphQL endpoint (for simple JSON, use a regular grid).\n  <br/>Take a look at the (<a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/backend-services/graphql" target="_blank">Wiki docs</a>)\n    <ul class="small">\n      <li><span class="red bold">(*) NO DATA SHOWN</span> - just change filters &amp; page and look at the "GraphQL Query" changing</li>\n      <li>Only "Name" field is sortable for the demo (because we use JSON files), however "multiColumnSort: true" is also supported</li>\n      <li>String column also support operator (>, >=, <, <=, <>, !=, =, ==, *)</li>\n      <ul>\n        <li>The (*) can be used as startsWith (ex.: "abc*" => startsWith "abc") / endsWith (ex.: "*xyz" => endsWith "xyz")</li>\n        <li>The other operators can be used on column type number for example: ">=100" (greater or equal than 100)</li>\n      </ul>\n      <li>You can also preload a grid with certain "presets" like Filters / Sorters / Pagination <a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/grid-state-preset" target="_blank">Wiki - Grid Preset</a></li>\n      <li>Also note that the column Name has a filter with a custom %% operator that behaves like an SQL LIKE operator supporting % wildcards.</li>\n      <li>Depending on your configuration, your GraphQL Server might already support regex querying (e.g. Hasura <a href="https://hasura.io/docs/latest/queries/postgres/filters/text-search-operators/#_regex" target="_blank">_regex</a>)\n      or you could add your own implementation (e.g. see this SO <a href="https://stackoverflow.com/a/37981802/1212166">Question</a>).</li>\n    </ul>\n  ',this.isWithCursor=!1,this.columnDefinitions=[],this.dataset=[],this.graphqlService=new p.P,this.graphqlQuery="",this.processing=!1,this.status={text:"",class:""},this.serverWaitDelay=250,this.defineGrid()}detaching(){this.saveCurrentGridState()}aureliaGridReady(e){this.aureliaGrid=e}defineGrid(){this.columnDefinitions=[{id:"name",field:"name",name:"Name",width:60,columnGroup:"Customer Information",type:g.PUO.string,sortable:!0,filterable:!0,filter:{model:g.CuW.compoundInput,compoundOperatorList:[{operator:"",desc:"Contains"},{operator:"<>",desc:"Not Contains"},{operator:"=",desc:"Equals"},{operator:"!=",desc:"Not equal to"},{operator:"a*",desc:"Starts With"},{operator:"Custom",desc:"SQL Like"}]}},{id:"gender",field:"gender",name:"Gender",filterable:!0,sortable:!0,width:60,columnGroup:"Customer Information",filter:{model:g.CuW.singleSelect,collection:[{value:"",label:""},{value:"male",label:"male"},{value:"female",label:"female"}]}},{id:"company",field:"company",name:"Company",width:60,columnGroup:"Customer Information",sortable:!0,filterable:!0,filter:{model:g.CuW.multipleSelect,collection:[{value:"acme",label:"Acme"},{value:"abc",label:"Company ABC"},{value:"xyz",label:"Company XYZ"}],filterOptions:{filter:!0}}},{id:"billingAddressStreet",field:"billing.address.street",name:"Billing Address Street",width:60,filterable:!0,sortable:!0,columnGroup:"Billing Information"},{id:"billingAddressZip",field:"billing.address.zip",name:"Billing Address Zip",width:60,type:g.PUO.number,columnGroup:"Billing Information",filterable:!0,sortable:!0,filter:{model:g.CuW.compoundInput},formatter:g._tQ.complexObject},{id:"finish",field:"finish",name:"Date",formatter:g._tQ.dateIso,sortable:!0,minWidth:90,width:120,exportWithFormatter:!0,columnGroup:"Billing Information",type:g.PUO.date,filterable:!0,filter:{model:g.CuW.dateRange,filterShortcuts:[{title:"Nexy 20 days",iconCssClass:"mdi mdi-calendar",searchTerms:[(0,m.GP)(new Date,"YYYY-MM-DD"),(0,m.GP)((0,m.kO)(new Date,20),"YYYY-MM-DD")]}]}}];const e=(new Date).getFullYear(),t=`${e}-01-01`,i=`${e}-02-15`;this.gridOptions={enableFiltering:!0,enableCellNavigation:!0,createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:28,gridHeight:200,gridWidth:900,compoundOperatorAltTexts:{text:{Custom:{operatorAlt:"%%",descAlt:"SQL Like"}}},gridMenu:{resizeOnShowHeaderRow:!0},enablePagination:!0,pagination:{pageSizes:[10,15,20,25,30,40,50,75,100],pageSize:20,totalItems:0},presets:{columns:[{columnId:"name",width:100},{columnId:"gender",width:55},{columnId:"company"},{columnId:"billingAddressZip"},{columnId:"billingAddressStreet",width:120},{columnId:"finish",width:130}],filters:[{columnId:"gender",searchTerms:["male"],operator:g.huT.equal},{columnId:"name",searchTerms:["Joh*oe"],operator:g.huT.startsWithEndsWith},{columnId:"company",searchTerms:["xyz"],operator:"IN"},{columnId:"finish",searchTerms:[t,i],operator:g.huT.rangeInclusive}],sorters:[{columnId:"name",direction:"asc"},{columnId:"company",direction:g.UEL.DESC}],pagination:{pageNumber:this.isWithCursor?1:2,pageSize:20}},backendServiceApi:{service:this.graphqlService,options:{datasetName:b,addLocaleIntoQuery:!0,extraQueryArguments:[{field:"userId",value:123}],filterQueryOverride:({fieldName:e,columnDef:t,columnFilterOperator:i,searchValues:r})=>{if(i===g.huT.custom&&"name"===t?.id)return{field:e,operator:"Like",value:r[0]}},useCursor:this.isWithCursor,keepArgumentFieldDoubleQuotes:!0},preProcess:()=>this.displaySpinner(!0),process:e=>this.getCustomerApiCall(e),postProcess:e=>{this.metrics=e.metrics,this.displaySpinner(!1)}}}}clearAllFiltersAndSorts(){this.aureliaGrid&&this.aureliaGrid.gridService&&this.aureliaGrid.gridService.clearAllFiltersAndSorts()}displaySpinner(e){this.processing=e,this.status=e?{text:"processing...",class:"alert alert-danger"}:{text:"finished",class:"alert alert-success"}}getCustomerApiCall(e){let t;if(this.aureliaGrid?.paginationService){const{paginationService:e}=this.aureliaGrid,i=e._initialized?e.getCurrentPageNumber():1,r=String.fromCharCode("A".charCodeAt(0)+i-1),a=String.fromCharCode(r.charCodeAt(0)+1);t={hasPreviousPage:0===e.dataFrom,hasNextPage:100===e.dataTo,startCursor:r,endCursor:a}}else t={hasPreviousPage:!1,hasNextPage:!0,startCursor:"A",endCursor:"B"};const i={data:{[b]:{nodes:[],totalCount:100,pageInfo:t}}};return new Promise((e=>{setTimeout((()=>{this.graphqlQuery=this.graphqlService.buildQuery(),this.isWithCursor&&this.aureliaGrid?.paginationService?.setCursorPageInfo(i.data[b].pageInfo),e(i)}),this.serverWaitDelay)}))}goToFirstPage(){this.aureliaGrid.paginationService.goToFirstPage()}goToLastPage(){this.aureliaGrid.paginationService.goToLastPage()}gridStateChanged(e){console.log("GraphQL sample, Grid State changed:: ",e)}saveCurrentGridState(){console.log("GraphQL current grid state",this.aureliaGrid.gridStateService.getCurrentGridState())}setFiltersDynamically(){const e=(new Date).getFullYear(),t=`${e}-01-01`,i=`${e}-02-15`;this.aureliaGrid.filterService.updateFilters([{columnId:"gender",searchTerms:["female"],operator:g.huT.equal},{columnId:"name",searchTerms:["Jane"],operator:g.huT.startsWith},{columnId:"company",searchTerms:["acme"],operator:"IN"},{columnId:"billingAddressZip",searchTerms:["11"],operator:g.huT.greaterThanOrEqual},{columnId:"finish",searchTerms:[t,i],operator:g.huT.rangeInclusive}])}setSortingDynamically(){this.aureliaGrid.sortService.updateSorting([{columnId:"billingAddressZip",direction:"DESC"},{columnId:"company",direction:"ASC"}])}resetToOriginalPresets(){const e=(new Date).getFullYear(),t=`${e}-01-01`,i=`${e}-02-15`;this.aureliaGrid.filterService.updateFilters([{columnId:"gender",searchTerms:["male"],operator:g.huT.equal},{columnId:"name",searchTerms:["Joh*oe"],operator:g.huT.startsWithEndsWith},{columnId:"company",searchTerms:["xyz"],operator:"IN"},{columnId:"finish",searchTerms:[t,i],operator:g.huT.rangeInclusive}]),this.aureliaGrid.sortService.updateSorting([{columnId:"name",direction:"asc"},{columnId:"company",direction:g.UEL.DESC}]),setTimeout((()=>{this.aureliaGrid.paginationService?.changeItemPerPage(20),this.aureliaGrid.paginationService?.goToPageNumber(2)}))}setIsWithCursor(e){return this.isWithCursor=e,this.resetOptions({useCursor:this.isWithCursor}),!0}resetOptions(e){this.displaySpinner(!0);const t=this.gridOptions.backendServiceApi.service;this.aureliaGrid.paginationService.setCursorBased(e.useCursor),t.updateOptions(e),this.gridOptions={...this.gridOptions},this.aureliaGrid.paginationService?.goToFirstPage()}},s=t,"symbol"==typeof(l="Example6")&&(l=l.description?"[".concat(l.description,"]"):""),Object.defineProperty(s,"name",{configurable:!0,value:o?"".concat(o," ",l):l}),(()=>{const r="function"==typeof Symbol&&Symbol.metadata?Object.create(null):void 0;h(null,e={value:t},i,{kind:"class",name:t.name,metadata:r},null,n),t=e.value,r&&Object.defineProperty(t,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:r}),function(e,t,i){for(var r=arguments.length>2,a=0;a<t.length;a++)i=r?t[a].call(e,i):t[a].call(e)}(t,n)})(),t;var s,l,o})()}}]);