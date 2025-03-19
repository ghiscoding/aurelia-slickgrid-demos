"use strict";(self.webpackChunkau_slickgrid_demo=self.webpackChunkau_slickgrid_demo||[]).push([[8719],{6798:(e,n,t)=>{t.d(n,{A:()=>s});var i=t(1601),o=t.n(i),l=t(6314),a=t.n(l)()(o());a.push([e.id,"#grid43{--slick-border-color: #d4d4d4;--slick-header-menu-display: none;--slick-header-column-height: 20px;--slick-grid-border-color: #d4d4d4;--slick-row-selected-color: #d4ebfd;--slick-cell-active-box-shadow: inset 0 0 0 1px #3ca4ff;--slick-row-mouse-hover-box-shadow: 0;--slick-cell-odd-background-color: #fff;--slick-cell-border-right: 1px solid var(--slick-border-color);--slick-cell-border-bottom: 0;--slick-cell-border-top: 1px solid var(--slick-border-color);--slick-header-filter-row-border-bottom: 1px solid var(--slick-border-color);--slick-cell-border-left: 0;--slick-cell-box-shadow: none;--slick-row-mouse-hover-color: #fff;--slick-cell-display: flex}#grid43 .slick-cell.rowspan{z-index:9}#grid43 .slick-cell{display:flex;align-items:center}",""]);const s=a},7832:(e,n,t)=>{var i=t(1601),o=t.n(i),l=t(6314);t.n(l)()(o()).push([e.id,"#grid43{--slick-border-color: #d4d4d4;--slick-header-menu-display: none;--slick-header-column-height: 20px;--slick-grid-border-color: #d4d4d4;--slick-row-selected-color: #d4ebfd;--slick-cell-active-box-shadow: inset 0 0 0 1px #3ca4ff;--slick-row-mouse-hover-box-shadow: 0;--slick-cell-odd-background-color: #fff;--slick-cell-border-right: 1px solid var(--slick-border-color);--slick-cell-border-bottom: 0;--slick-cell-border-top: 1px solid var(--slick-border-color);--slick-header-filter-row-border-bottom: 1px solid var(--slick-border-color);--slick-cell-border-left: 0;--slick-cell-box-shadow: none;--slick-row-mouse-hover-color: #fff;--slick-cell-display: flex}#grid43 .slick-cell.rowspan{z-index:9}#grid43 .slick-cell{display:flex;align-items:center}",""])},8719:(e,n,t)=>{t.r(n),t.d(n,{Example43:()=>C});var i={};t.r(i),t.d(i,{bindables:()=>c,default:()=>s,dependencies:()=>r,name:()=>l,register:()=>m,template:()=>a});var o=t(5394);t(7832);const l="example43",a='<h2>\n  Example 43: colspan/rowspan - Employees Timesheets\n  <span class="float-end">\n    <a\n      style="font-size: 18px"\n      target="_blank"\n      href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example43.ts"\n    >\n      <span class="mdi mdi-link-variant"></span> code\n    </a>\n  </span>\n  <button\n      class="ms-2 btn btn-outline-secondary btn-sm btn-icon"\n      type="button"\n      data-test="toggle-subtitle"\n      click.trigger="hideSubTitle = !hideSubTitle"\n    >\n      <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>\n    </button>\n</h2>\n\n<div class="subtitle" hidden.bind="hideSubTitle">\n  <p class="italic example-details">\n    <b>NOTES</b>: <code>rowspan</code> is an opt-in feature, because of its small perf hit (it needs to loop through all row\n    metadatas to map all rowspan), and requires the <code>enableCellRowSpan</code> grid option to be enabled to work properly.\n    The <code>colspan</code>/<code>rowspan</code> are both using DataView item metadata and are both based on row indexes and\n    will <b>not</b> keep the row in sync with the data. It is really up to you the user to update the metadata logic of how and\n    where the cells should span when a side effect kicks in. (i.e: Filtering/Sorting/Paging/Column Reorder... will\n    <b>not</b> change/update the spanning in the grid by itself and that is why they these features are all disabled in this\n    example). Also, column/row freezing (pinning) are also not supported, or at least not recommended unless you know exactly\n    what you\'re doing (like in this demo here because we know our pinning doesn\'t intersect)! Any freezing column/row that could\n    intersect with a <code>colspan</code>/<code>rowspan</code> <b>will cause problems</b>.\n  </p>\n</div>\n\n<button\n  class="ms-1 btn btn-outline-secondary btn-sm btn-icon"\n  data-test="goto-up"\n  click.trigger="navigateUp()"\n  title="from an active cell, navigate to cell above"\n>\n  <span class="mdi mdi-chevron-down mdi-rotate-180"></span>\n  Navigate Up Cell\n</button>\n<button\n  class="ms-1 btn btn-outline-secondary btn-sm btn-icon"\n  data-test="goto-down"\n  click.trigger="navigateDown()"\n  title="from an active cell, navigate to cell below"\n>\n  <span class="mdi mdi-chevron-down"></span>\n  Navigate Down Cell\n</button>\n<button\n  class="ms-1 btn btn-outline-secondary btn-sm btn-icon"\n  data-test="goto-prev"\n  click.trigger="navigatePrev()"\n  title="from an active cell, navigate to previous left cell"\n>\n  <span class="mdi mdi-chevron-down mdi-rotate-90"></span>\n  Navigate to Left Cell\n</button>\n<button\n  class="ms-1 btn btn-outline-secondary btn-sm btn-icon"\n  data-test="goto-next"\n  click.trigger="navigateNext()"\n  title="from an active cell, navigate to next right cell"\n>\n  <span class="mdi mdi-chevron-down mdi-rotate-270"></span>\n  Navigate to Right Cell\n</button>\n<button class="ms-2 btn btn-outline-secondary btn-sm btn-icon mx-1" data-test="toggle-employee-id" click.trigger="toggleEmployeeIdVisibility()">\n  Show/Hide EmployeeID\n</button>\n<button class="ms-1 btn btn-outline-secondary btn-sm btn-icon mx-1" click.trigger="toggleEditing()" data-test="toggle-editing">\n  <span class="mdi mdi-pencil-outline"></span>\n  <span\n    >Toggle Editing: <span id="isEditable" class="text-italic">${ isEditable }</span></span\n  >\n</button>\n<button class="btn btn-outline-secondary btn-sm btn-icon mx-1" data-test="export-excel-btn" click.trigger="exportToExcel()">\n  <i class="mdi mdi-file-excel-outline text-success"></i> Export to Excel\n</button>\n\n<aurelia-slickgrid\n  grid-id="grid43"\n  column-definitions.bind="columnDefinitions"\n  grid-options.bind="gridOptions"\n  dataset.bind="dataset"\n  instances.bind="aureliaGrid">\n</aurelia-slickgrid>\n',s=a,r=[],c={};let d;function m(e){d||(d=o.K9.define({name:l,template:a,dependencies:r,bindables:c})),e.register(d)}var p=t(7793),u=t(6670),h=t(5072),g=t.n(h),b=t(7825),k=t.n(b),f=t(7659),v=t.n(f),y=t(5056),x=t.n(y),w=t(540),T=t.n(w),D=t(1113),M=t.n(D),E=t(6798),B={};B.styleTagTransform=M(),B.setAttributes=x(),B.insert=v().bind(null,"head"),B.domAPI=k(),B.insertStyleElement=T(),g()(E.A,B),E.A&&E.A.locals&&E.A.locals,t(6757);let C=(()=>{let e,n,t=[(0,o.EM)(i)],l=[];return n=class{constructor(){this.columnDefinitions=[],this.dataset=[],this.isEditable=!1,this.hideSubTitle=!1,this.showEmployeeId=!0,this.excelExportService=new p.N,this.metadata={0:{columns:{1:{rowspan:2},2:{colspan:2},6:{colspan:3},10:{colspan:3,rowspan:10},13:{colspan:2},17:{colspan:2,rowspan:2}}},1:{columns:{3:{colspan:3},6:{colspan:4},13:{colspan:2,rowspan:5},15:{colspan:2}}},2:{columns:{2:{colspan:3,rowspan:2},5:{colspan:2},7:{colspan:3},15:{colspan:2},17:{colspan:2}}},3:{columns:{6:{colspan:4},16:{colspan:2}}},4:{columns:{2:{colspan:4},7:{colspan:3},15:{colspan:2,rowspan:2},17:{colspan:2}}},5:{columns:{2:{colspan:2},4:{colspan:3},7:{colspan:3},17:{colspan:2}}},6:{columns:{2:{colspan:2},5:{colspan:2},7:{colspan:3},14:{colspan:2},16:{colspan:3}}},7:{columns:{2:{colspan:3},5:{colspan:3},13:{colspan:3,rowspan:2},16:{colspan:2}}},8:{columns:{2:{colspan:3},7:{colspan:3,rowspan:2},17:{colspan:2}}},9:{columns:{2:{colspan:3},5:{colspan:2},13:{colspan:3},16:{colspan:3}}}},this.defineGrid()}attached(){this.dataset=this.loadData()}defineGrid(){this.columnDefinitions=[{id:"employeeID",name:"Employee ID",field:"employeeID",minWidth:100},{id:"employeeName",name:"Employee Name",field:"employeeName",editor:{model:u.R8o.text},minWidth:120},{id:"9:00",name:"9:00 AM",field:"9:00",editor:{model:u.R8o.text},minWidth:120},{id:"9:30",name:"9:30 AM",field:"9:30",editor:{model:u.R8o.text},minWidth:120},{id:"10:00",name:"10:00 AM",field:"10:00",editor:{model:u.R8o.text},minWidth:120},{id:"10:30",name:"10:30 AM",field:"10:30",editor:{model:u.R8o.text},minWidth:120},{id:"11:00",name:"11:00 AM",field:"11:00",editor:{model:u.R8o.text},minWidth:120},{id:"11:30",name:"11:30 AM",field:"11:30",editor:{model:u.R8o.text},minWidth:120},{id:"12:00",name:"12:00 PM",field:"12:00",editor:{model:u.R8o.text},minWidth:120},{id:"12:30",name:"12:30 PM",field:"12:30",editor:{model:u.R8o.text},minWidth:120},{id:"1:00",name:"1:00 PM",field:"1:00",editor:{model:u.R8o.text},minWidth:120},{id:"1:30",name:"1:30 PM",field:"1:30",editor:{model:u.R8o.text},minWidth:120},{id:"2:00",name:"2:00 PM",field:"2:00",editor:{model:u.R8o.text},minWidth:120},{id:"2:30",name:"2:30 PM",field:"2:30",editor:{model:u.R8o.text},minWidth:120},{id:"3:00",name:"3:00 PM",field:"3:00",editor:{model:u.R8o.text},minWidth:120},{id:"3:30",name:"3:30 PM",field:"3:30",editor:{model:u.R8o.text},minWidth:120},{id:"4:00",name:"4:00 PM",field:"4:00",editor:{model:u.R8o.text},minWidth:120},{id:"4:30",name:"4:30 PM",field:"4:30",editor:{model:u.R8o.text},minWidth:120},{id:"5:00",name:"5:00 PM",field:"5:00",editor:{model:u.R8o.text},minWidth:120}],this.gridOptions={autoResize:{bottomPadding:30,rightPadding:50},enableCellNavigation:!0,enableColumnReorder:!0,enableCellRowSpan:!0,enableHeaderMenu:!1,enableExcelExport:!0,externalResources:[this.excelExportService],enableExcelCopyBuffer:!0,autoEdit:!0,editable:!1,datasetIdPropertyName:"employeeID",frozenColumn:0,gridHeight:348,rowHeight:30,dataView:{globalItemMetadataProvider:{getRowMetadata:(e,n)=>this.metadata[n]}},rowTopOffsetRenderType:"top"}}exportToExcel(){this.excelExportService.exportToExcel({filename:"export",format:"xlsx"})}navigateDown(){this.aureliaGrid?.slickGrid?.navigateDown()}navigateUp(){this.aureliaGrid?.slickGrid?.navigateUp()}navigateNext(){this.aureliaGrid?.slickGrid?.navigateNext()}navigatePrev(){this.aureliaGrid?.slickGrid?.navigatePrev()}toggleEditing(){this.isEditable=!this.isEditable,this.aureliaGrid.slickGrid.setOptions({editable:this.isEditable})}loadData(){return[{employeeID:10001,employeeName:"Davolio","9:00":"Analysis Tasks","9:30":"Analysis Tasks","10:00":"Team Meeting","10:30":"Testing","11:00":"Development","11:30":"Development","12:00":"Development","12:30":"Support","1:00":"Lunch Break","1:30":"Lunch Break","2:00":"Lunch Break","2:30":"Testing","3:00":"Testing","3:30":"Development","4:00":"Conference","4:30":"Team Meeting","5:00":"Team Meeting"},{employeeID:10002,employeeName:"Buchanan","9:00":"Task Assign","9:30":"Support","10:00":"Support","10:30":"Support","11:00":"Testing","11:30":"Testing","12:00":"Testing","12:30":"Testing","1:00":"Lunch Break","1:30":"Lunch Break","2:00":"Lunch Break","2:30":"Development","3:00":"Development","3:30":"Check Mail","4:00":"Check Mail","4:30":"Team Meeting","5:00":"Team Meeting"},{employeeID:10003,employeeName:"Fuller","9:00":"Check Mail","9:30":"Check Mail","10:00":"Check Mail","10:30":"Analysis Tasks","11:00":"Analysis Tasks","11:30":"Support","12:00":"Support","12:30":"Support","1:00":"Lunch Break","1:30":"Lunch Break","2:00":"Lunch Break","2:30":"Development","3:00":"Development","3:30":"Team Meeting","4:00":"Team Meeting","4:30":"Development","5:00":"Development"},{employeeID:10004,employeeName:"Leverling","9:00":"Testing","9:30":"Check Mail","10:00":"Check Mail","10:30":"Support","11:00":"Testing","11:30":"Testing","12:00":"Testing","12:30":"Testing","1:00":"Lunch Break","1:30":"Lunch Break","2:00":"Lunch Break","2:30":"Development","3:00":"Development","3:30":"Check Mail","4:00":"Conference","4:30":"Conference","5:00":"Team Meeting"},{employeeID:10005,employeeName:"Peacock","9:00":"Task Assign","9:30":"Task Assign","10:00":"Task Assign","10:30":"Task Assign","11:00":"Check Mail","11:30":"Support","12:00":"Support","12:30":"Support","1:00":"Lunch Break","1:30":"Lunch Break","2:00":"Lunch Break","2:30":"Development","3:00":"Development","3:30":"Team Meeting","4:00":"Team Meeting","4:30":"Testing","5:00":"Testing"},{employeeID:10006,employeeName:"Janet","9:00":"Testing","9:30":"Testing","10:00":"Support","10:30":"Support","11:00":"Support","11:30":"Team Meeting","12:00":"Team Meeting","12:30":"Team Meeting","1:00":"Lunch Break","1:30":"Lunch Break","2:00":"Lunch Break","2:30":"Development","3:00":"Development","3:30":"Team Meeting","4:00":"Team Meeting","4:30":"Development","5:00":"Development"},{employeeID:10007,employeeName:"Suyama","9:00":"Analysis Tasks","9:30":"Analysis Tasks","10:00":"Testing","10:30":"Development","11:00":"Development","11:30":"Testing","12:00":"Testing","12:30":"Testing","1:00":"Lunch Break","1:30":"Lunch Break","2:00":"Lunch Break","2:30":"Support","3:00":"Build","3:30":"Build","4:00":"Check Mail","4:30":"Check Mail","5:00":"Check Mail"},{employeeID:10008,employeeName:"Robert","9:00":"Task Assign","9:30":"Task Assign","10:00":"Task Assign","10:30":"Development","11:00":"Development","11:30":"Development","12:00":"Testing","12:30":"Support","1:00":"Lunch Break","1:30":"Lunch Break","2:00":"Lunch Break","2:30":"Check Mail","3:00":"Check Mail","3:30":"Check Mail","4:00":"Team Meeting","4:30":"Team Meeting","5:00":"Build"},{employeeID:10009,employeeName:"Andrew","9:00":"Check Mail","9:30":"Team Meeting","10:00":"Team Meeting","10:30":"Support","11:00":"Testing","11:30":"Development","12:00":"Development","12:30":"Development","1:00":"Lunch Break","1:30":"Lunch Break","2:00":"Lunch Break","2:30":"Check Mail","3:00":"Check Mail","3:30":"Check Mail","4:00":"Team Meeting","4:30":"Development","5:00":"Development"},{employeeID:10010,employeeName:"Michael","9:00":"Task Assign","9:30":"Task Assign","10:00":"Task Assign","10:30":"Analysis Tasks","11:00":"Analysis Tasks","11:30":"Development","12:00":"Development","12:30":"Development","1:00":"Lunch Break","1:30":"Lunch Break","2:00":"Lunch Break","2:30":"Testing","3:00":"Testing","3:30":"Testing","4:00":"Build","4:30":"Build","5:00":"Build"}]}toggleEmployeeIdVisibility(){const e={};this.showEmployeeId=!this.showEmployeeId;const n=this.showEmployeeId?1:-1;for(const t of Object.keys(this.metadata)){e[t]={columns:{}};for(const i of Object.keys(this.metadata[t].columns))e[t].columns[Number(i)+n]=this.metadata[t].columns[i]}this.showEmployeeId?this.columnDefinitions.unshift({id:"employeeID",name:"Employee ID",field:"employeeID",width:100}):this.columnDefinitions.splice(0,1),this.aureliaGrid.slickGrid.setColumns(this.columnDefinitions),this.metadata=e,this.aureliaGrid.slickGrid.remapAllColumnsRowSpan(),this.aureliaGrid.slickGrid.invalidate()}},a=n,"symbol"==typeof(s="Example43")&&(s=s.description?"[".concat(s.description,"]"):""),Object.defineProperty(a,"name",{configurable:!0,value:r?"".concat(r," ",s):s}),(()=>{const i="function"==typeof Symbol&&Symbol.metadata?Object.create(null):void 0;(function(e,n,t,i,o,l){function a(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected");return e}for(var s,r=i.kind,c="getter"===r?"get":"setter"===r?"set":"value",d=!n&&e?i.static?e:e.prototype:null,m=n||(d?Object.getOwnPropertyDescriptor(d,i.name):{}),p=!1,u=t.length-1;u>=0;u--){var h={};for(var g in i)h[g]="access"===g?{}:i[g];for(var g in i.access)h.access[g]=i.access[g];h.addInitializer=function(e){if(p)throw new TypeError("Cannot add initializers after decoration has completed");l.push(a(e||null))};var b=(0,t[u])("accessor"===r?{get:m.get,set:m.set}:m[c],h);if("accessor"===r){if(void 0===b)continue;if(null===b||"object"!=typeof b)throw new TypeError("Object expected");(s=a(b.get))&&(m.get=s),(s=a(b.set))&&(m.set=s),(s=a(b.init))&&o.unshift(s)}else(s=a(b))&&("field"===r?o.unshift(s):m[c]=s)}d&&Object.defineProperty(d,i.name,m),p=!0})(null,e={value:n},t,{kind:"class",name:n.name,metadata:i},null,l),n=e.value,i&&Object.defineProperty(n,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:i}),function(e,n,t){for(var i=arguments.length>2,o=0;o<n.length;o++)t=i?n[o].call(e,t):n[o].call(e)}(n,l)})(),n;var a,s,r})()}}]);