"use strict";(self.webpackChunkaurelia_slickgrid_demo_bs5=self.webpackChunkaurelia_slickgrid_demo_bs5||[]).push([[48],{92478:(e,t,i)=>{i.d(t,{A:()=>o});var a=i(31601),n=i.n(a),l=i(76314),r=i.n(l)()(n());r.push([e.id,".alert{padding:8px;margin-bottom:10px}.col-sm-1{max-width:70px}",""]);const o=r},23048:(e,t,i)=>{i.r(t),i.d(t,{Example10:()=>C});var a={};i.r(a),i.d(a,{default:()=>s,dependencies:()=>d,name:()=>r,register:()=>g,template:()=>o});var n=i(65394),l=i(92478);const r="example10",o='<h2>\n  ${title}\n  <span class="float-end">\n    <a style="font-size: 18px"\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example10.ts">\n      <span class="fa fa-link"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle"\n      innerhtml.bind="subTitle"></div>\n\n<div class="row">\n  <div class="col-sm-4" style="max-width: 175px;">\n    Pagination\n    <button class="btn btn-outline-secondary btn-xs px-2" data-test="goto-first-page"\n            click.trigger="goToGrid1FirstPage()">\n      <i class="fa fa-caret-left fa-lg"></i>\n    </button>\n    <button class="btn btn-outline-secondary btn-xs px-2" data-test="goto-last-page" click.trigger="goToGrid1LastPage()">\n      <i class="fa fa-caret-right fa-lg"></i>\n    </button>\n  </div>\n  <div class="col-sm-8">\n    <div class="alert alert-success">\n      <strong>(single select) Selected Row:</strong>\n      <span innerhtml.bind="selectedTitle"\n            data-test="grid1-selections"></span>\n    </div>\n  </div>\n</div>\n\n<div class="overflow-hidden">\n  <aurelia-slickgrid grid-id="grid1"\n                      column-definitions.bind="columnDefinitions1"\n                      grid-options.bind="gridOptions1"\n                      dataset.bind="dataset1"\n                      on-aurelia-grid-created.trigger="aureliaGrid1Ready($event.detail)"\n                      on-grid-state-changed.trigger="grid1StateChanged($event.detail)"\n                      on-selected-rows-changed.trigger="onGrid1SelectedRowsChanged($event.detail.eventData, $event.detail.args)">\n  </aurelia-slickgrid>\n</div>\n\n<hr class="col-md-6 offset-md-1">\n\n<div class="row">\n  <div class="col-sm-4 col-md-3" style="max-width: 190px;">\n    <label for="enableGrid2Pagination">\n      Pagination:\n      <input type="checkbox" id="enableGrid2Pagination"\n              checked.bind="isGrid2WithPagination"\n              data-test="toggle-pagination-grid2" />\n    </label>\n    <span style="margin-left: 5px" if.bind="isGrid2WithPagination">\n      <button class="btn btn-outline-secondary btn-xs px-2" data-test="goto-first-page"\n              click.trigger="goToGrid2FirstPage()">\n        <i class="fa fa-caret-left fa-lg"></i>\n      </button>\n      <button class="btn btn-outline-secondary btn-xs px-2" data-test="goto-last-page"\n              click.trigger="goToGrid2LastPage()">\n        <i class="fa fa-caret-right fa-lg"></i>\n      </button>\n    </span>\n  </div>\n  <div class="col-sm-8">\n    <div class="alert alert-success">\n      <strong>(multi-select) Selected Row(s):</strong>\n      <span innerhtml.bind="selectedTitles"\n            data-test="grid2-selections"></span>\n    </div>\n  </div>\n</div>\n\n<div class="overflow-hidden">\n  <aurelia-slickgrid grid-id="grid2"\n                      column-definitions.bind="columnDefinitions2"\n                      grid-options.bind="gridOptions2"\n                      dataset.bind="dataset2"\n                      on-aurelia-grid-created.trigger="aureliaGrid2Ready($event.detail)"\n                      on-grid-state-changed.trigger="grid2StateChanged($event.detail)">\n  </aurelia-slickgrid>\n</div>\n',s=o,d=[];let c;function g(e){c||(c=n.K94.define({name:r,template:o,dependencies:d})),e.register(c)}var h=i(93492),u=i(85072),f=i.n(u),p=i(97825),b=i.n(p),m=i(77659),v=i.n(m),y=i(55056),S=i.n(y),P=i(10540),w=i.n(P),k=i(41113),G=i.n(k),x={};x.styleTagTransform=G(),x.setAttributes=S(),x.insert=v().bind(null,"head"),x.domAPI=b(),x.insertStyleElement=w(),f()(l.A,x),l.A&&l.A.locals&&l.A.locals,i(96757);var T=function(e,t,i){for(var a=arguments.length>2,n=0;n<t.length;n++)i=a?t[n].call(e,i):t[n].call(e);return a?i:void 0};let C=(()=>{var e;let t,i=[],a=[];return e=class{constructor(){this.title="Example 10: Multiple Grids with Row Selection",this.subTitle='\n    Row selection, single or multi-select (<a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/row-selection" target="_blank">Wiki docs</a>).\n    <ul>\n      <li>Single Select, you can click on any cell to make the row active</li>\n      <li>Multiple Selections, you need to specifically click on the checkbox to make 1 or more selections</li>\n      <li>NOTE: Any Row Selection(s) will be reset when using Pagination and changing Page (you will need to set it back manually if you want it back)</li>\n    </ul>\n  ',this.isGrid2WithPagination=T(this,i,!0),this.aureliaGrid1=T(this,a),this.columnDefinitions1=[],this.columnDefinitions2=[],this.dataset1=[],this.dataset2=[],this.selectedTitles="",this.selectedTitle="",this.selectedGrid2IDs=[],this.defineGrids()}attached(){this.dataset1=this.prepareData(495),this.dataset2=this.prepareData(525)}aureliaGrid1Ready(e){this.aureliaGrid1=e}aureliaGrid2Ready(e){this.aureliaGrid2=e}defineGrids(){this.columnDefinitions1=[{id:"title",name:"Title",field:"title",sortable:!0,type:h.PUO.string,filterable:!0},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,type:h.PUO.number,filterable:!0},{id:"complete",name:"% Complete",field:"percentComplete",formatter:h._tQ.percentCompleteBar,type:h.PUO.number,filterable:!0,sortable:!0},{id:"start",name:"Start",field:"start",formatter:h._tQ.dateIso,exportWithFormatter:!0,type:h.PUO.date,filterable:!0,sortable:!0,filter:{model:h.CuW.compoundDate}},{id:"finish",name:"Finish",field:"finish",formatter:h._tQ.dateIso,exportWithFormatter:!0,type:h.PUO.date,filterable:!0,sortable:!0,filter:{model:h.CuW.compoundDate}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",formatter:h._tQ.checkmark,type:h.PUO.boolean,sortable:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"true"},{value:!1,label:"false"}],model:h.CuW.singleSelect}}],this.columnDefinitions2=[{id:"title",name:"Title",field:"title",sortable:!0,type:h.PUO.string,filterable:!0},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,type:h.PUO.number,filterable:!0},{id:"complete",name:"% Complete",field:"percentComplete",formatter:h._tQ.percentCompleteBar,type:h.PUO.number,filterable:!0,sortable:!0},{id:"start",name:"Start",field:"start",formatter:h._tQ.dateIso,exportWithFormatter:!0,type:h.PUO.date,filterable:!0,sortable:!0,filter:{model:h.CuW.compoundDate}},{id:"finish",name:"Finish",field:"finish",formatter:h._tQ.dateIso,exportWithFormatter:!0,type:h.PUO.date,filterable:!0,sortable:!0,filter:{model:h.CuW.compoundDate}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",formatter:h._tQ.checkmark,type:h.PUO.boolean,sortable:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"true"},{value:!1,label:"false"}],model:h.CuW.singleSelect}}],this.gridOptions1={enableAutoResize:!1,enableCellNavigation:!0,enableRowSelection:!0,enableCheckboxSelector:!0,enableFiltering:!0,checkboxSelector:{hideSelectAllCheckbox:!0},multiSelect:!1,rowSelectionOptions:{selectActiveRow:!0},columnPicker:{hideForceFitButton:!0},gridMenu:{hideForceFitButton:!0},gridHeight:225,gridWidth:800,enablePagination:!0,pagination:{pageSizes:[5,10,15,20,25,50,75,100],pageSize:5},presets:{pagination:{pageNumber:2,pageSize:5}}},this.gridOptions2={enableAutoResize:!1,enableCellNavigation:!0,enableFiltering:!0,checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0,applySelectOnAllPages:!0},rowSelectionOptions:{selectActiveRow:!1},enableCheckboxSelector:!0,enableRowSelection:!0,gridHeight:255,gridWidth:800,enablePagination:!0,pagination:{pageSizes:[5,10,15,20,25,50,75,100],pageSize:5},presets:{rowSelection:{dataContextIds:[3,12,13,522]}}}}prepareData(e){const t=[];for(let i=0;i<e;i++){const e=2e3+Math.floor(10*Math.random()),a=Math.floor(11*Math.random()),n=Math.floor(29*Math.random()),l=Math.round(100*Math.random());t[i]={id:i,title:"Task "+i,duration:Math.round(100*Math.random())+"",percentComplete:l,percentCompleteNumber:l,start:new Date(e,a,n),finish:new Date(e,a+1,n),effortDriven:i%5==0}}return t}goToGrid1FirstPage(){this.aureliaGrid1.paginationService.goToFirstPage()}goToGrid1LastPage(){this.aureliaGrid1.paginationService.goToLastPage()}goToGrid2FirstPage(){this.aureliaGrid2.paginationService.goToFirstPage()}goToGrid2LastPage(){this.aureliaGrid2.paginationService.goToLastPage()}grid1StateChanged(e){console.log("Grid State changed:: ",e),console.log("Grid State changed:: ",e.change)}grid2StateChanged(e){console.log("Grid State changed:: ",e),console.log("Grid State changed:: ",e.change),e.gridState.rowSelection&&(this.selectedGrid2IDs=e.gridState.rowSelection.filteredDataContextIds||[],this.selectedGrid2IDs=this.selectedGrid2IDs.sort(((e,t)=>e-t)),this.selectedTitles=this.selectedGrid2IDs.map((e=>`Task ${e}`)).join(","),this.selectedTitles.length>293&&(this.selectedTitles=this.selectedTitles.substring(0,293)+"..."))}isGrid2WithPaginationChanged(){this.aureliaGrid2.paginationService.togglePaginationVisibility(this.isGrid2WithPagination)}onGrid1SelectedRowsChanged(e,t){const i=t&&t.grid;Array.isArray(t.rows)&&(this.selectedTitle=t.rows.map((e=>{const t=i.getDataItem(e);return t&&t.title||""})))}},(()=>{const l="function"==typeof Symbol&&Symbol.metadata?Object.create(null):void 0;t=[(0,n._tP)()],function(e,t,i,a,n,l){function r(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected");return e}for(var o,s=a.kind,d="getter"===s?"get":"setter"===s?"set":"value",c=!t&&e?a.static?e:e.prototype:null,g=t||(c?Object.getOwnPropertyDescriptor(c,a.name):{}),h=!1,u=i.length-1;u>=0;u--){var f={};for(var p in a)f[p]="access"===p?{}:a[p];for(var p in a.access)f.access[p]=a.access[p];f.addInitializer=function(e){if(h)throw new TypeError("Cannot add initializers after decoration has completed");l.push(r(e||null))};var b=(0,i[u])("accessor"===s?{get:g.get,set:g.set}:g[d],f);if("accessor"===s){if(void 0===b)continue;if(null===b||"object"!=typeof b)throw new TypeError("Object expected");(o=r(b.get))&&(g.get=o),(o=r(b.set))&&(g.set=o),(o=r(b.init))&&n.unshift(o)}else(o=r(b))&&("field"===s?n.unshift(o):g[d]=o)}c&&Object.defineProperty(c,a.name,g),h=!0}(null,null,t,{kind:"field",name:"isGrid2WithPagination",static:!1,private:!1,access:{has:e=>"isGrid2WithPagination"in e,get:e=>e.isGrid2WithPagination,set:(e,t)=>{e.isGrid2WithPagination=t}},metadata:l},i,a),l&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:l})})(),e})();n.K94.define(a,C)}}]);