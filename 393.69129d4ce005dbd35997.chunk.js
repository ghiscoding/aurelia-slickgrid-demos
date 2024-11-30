"use strict";(self.webpackChunkau_slickgrid_demo=self.webpackChunkau_slickgrid_demo||[]).push([[393],{7887:(e,t,n)=>{n.d(t,{A:()=>r});var i=n(1601),a=n.n(i),s=n(6314),l=n.n(s)()(a());l.push([e.id,"",""]);const r=l},6377:(e,t,n)=>{var i=n(1601),a=n.n(i),s=n(6314);n.n(s)()(a()).push([e.id,"",""])},393:(e,t,n)=>{n.r(t),n.d(t,{Example31:()=>R});var i={};n.r(i),n.d(i,{bindables:()=>d,default:()=>r,dependencies:()=>o,name:()=>s,register:()=>u,template:()=>l});var a=n(5394);n(6377);const s="example31",l='<h2>\n  ${title}\n  <span class="float-end">\n    <a style="font-size: 18px"\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example31.ts">\n      <span class="mdi mdi-link-variant"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle" innerhtml.bind="subTitle"></div>\n\n<div class="row">\n  <div class="col-md-12" aria-label="Basic Editing Commands">\n    <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="clear-filters-sorting"\n            click.trigger="clearAllFiltersAndSorts()" title="Clear all Filters & Sorts">\n      <span class="mdi mdi-close"></span>\n      <span>Clear all Filter & Sorts</span>\n    </button>\n    <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="set-dynamic-filter"\n            click.trigger="setFiltersDynamically()">\n      Set Filters Dynamically\n    </button>\n    <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="set-dynamic-sorting"\n            click.trigger="setSortingDynamically()">\n      Set Sorting Dynamically\n    </button>\n    <button class="btn btn-outline-secondary btn-sm btn-icon" style="margin-left: 10px" data-test="add-gender-button"\n            click.trigger="addOtherGender()" disabled.bind="isOtherGenderAdded">\n      Add Other Gender via RxJS\n    </button>\n  </div>\n</div>\n\n<br />\n\n<div>\n  <span>\n    <label>Programmatically go to first/last page:</label>\n    <div class="btn-group" role="group">\n      <button class="btn btn-outline-secondary btn-xs btn-icon px-2" data-test="goto-first-page" click.trigger="goToFirstPage()">\n        <i class="mdi mdi-page-first"></i>\n      </button>\n      <button class="btn btn-outline-secondary btn-xs btn-icon px-2" data-test="goto-last-page" click.trigger="goToLastPage()">\n        <i class="mdi mdi-page-last icon"></i>\n      </button>\n    </div>\n  </span>\n\n  <span style="margin-left: 10px">\n    <label>OData Version: </label>\n    <span data-test="radioVersion">\n      <label class="radio-inline control-label" for="radio2">\n        <input type="radio" name="inlineRadioOptions" data-test="version2" id="radio2" checked value.bind="2"\n                click.trigger="setOdataVersion(2)"> 2\n      </label>\n      <label class="radio-inline control-label" for="radio4">\n        <input type="radio" name="inlineRadioOptions" data-test="version4" id="radio4" value.bind="4"\n                click.trigger="setOdataVersion(4)"> 4\n      </label>\n    </span>\n    <label class="checkbox-inline control-label" for="enableCount" style="margin-left: 20px">\n      <input type="checkbox" id="enableCount" data-test="enable-count" checked.bind="isCountEnabled"\n              click.trigger="changeCountEnableFlag()">\n      <span style="font-weight: bold">Enable Count</span> (add to OData query)\n    </label>\n    <label class="checkbox-inline control-label" for="enableSelect" style="margin-left: 20px">\n      <input type="checkbox" id="enableSelect" data-test="enable-select" checked.bind="isSelectEnabled"\n              click.trigger="changeEnableSelectFlag()">\n      <span style="font-weight: bold">Enable Select</span> (add to OData query)\n    </label>\n    <label class="checkbox-inline control-label" for="enableExpand" style="margin-left: 20px">\n      <input type="checkbox" id="enableExpand" data-test="enable-expand" checked.bind="isExpandEnabled"\n              click.trigger="changeEnableExpandFlag()">\n      <span style="font-weight: bold">Enable Expand</span> (add to OData query)\n    </label>\n  </span>\n</div>\n\n<div class="row" style="margin-top: 5px">\n  <div class="col-md-10">\n    <div class="alert alert-info" data-test="alert-odata-query">\n      <strong>OData Query:</strong> <span data-test="odata-query-result">${odataQuery}</span>\n    </div>\n  </div>\n  <div class.bind="status.class" role="alert" data-test="status">\n    <strong>Status: </strong> ${status.text}\n  </div>\n</div>\n\n<aurelia-slickgrid grid-id="grid31"\n                    column-definitions.bind="columnDefinitions"\n                    grid-options.bind="gridOptions"\n                    dataset.bind="dataset"\n                    pagination-options.bind="paginationOptions"\n                    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"\n                    on-grid-state-changed.trigger="gridStateChanged($event.detail)">\n</aurelia-slickgrid>\n',r=l,o=[],d={};let c;function u(e){c||(c=a.K9.define({name:s,template:l,dependencies:o,bindables:d})),e.register(c)}var b=n(6441),p=n(8042),g=n(8880),h=n(7557),m=n(2369),f=n(2718),y=n(6609),v=n(5072),S=n.n(v),C=n(7825),E=n.n(C),x=n(7659),k=n.n(x),O=n(5056),w=n.n(O),A=n(540),F=n.n(A),P=n(1113),D=n.n(P),G=n(7887),T={};T.styleTagTransform=D(),T.setAttributes=w(),T.insert=k().bind(null,"head"),T.domAPI=E(),T.insertStyleElement=F(),S()(G.A,T),G.A&&G.A.locals&&G.A.locals,n(6757);let R=(()=>{let e,t,n=[(0,a.EM)(i)],s=[];return t=class{constructor(e=(0,h.hd)((0,h.pn)(g.xl))){this.http=e,this.title="Example 31: Grid with OData Backend Service using RxJS Observables",this.subTitle="Optionally use RxJS instead of Promises, you would typically use this with a Backend Service API (OData/GraphQL)",this.columnDefinitions=[],this.dataset=[],this.isCountEnabled=!0,this.isSelectEnabled=!1,this.isExpandEnabled=!1,this.odataVersion=2,this.odataQuery="",this.processing=!1,this.errorStatus="",this.isPageErrorTest=!1,this.status={text:"",class:""},this.isOtherGenderAdded=!1,this.genderCollection=[{value:"male",label:"male"},{value:"female",label:"female"}],this.initializeGrid()}aureliaGridReady(e){this.aureliaGrid=e}initializeGrid(){this.columnDefinitions=[{id:"name",name:"Name",field:"name",sortable:!0,type:y.PUO.string,filterable:!0,filter:{model:y.CuW.compoundInput}},{id:"gender",name:"Gender",field:"gender",filterable:!0,editor:{model:y.R8o.singleSelect,collectionAsync:(0,m.of)(this.genderCollection)},filter:{model:y.CuW.singleSelect,collectionAsync:(0,m.of)(this.genderCollection),collectionOptions:{addBlankEntry:!0}}},{id:"company",name:"Company",field:"company",filterable:!0,sortable:!0},{id:"category_name",name:"Category",field:"category/name",filterable:!0,sortable:!0}],this.gridOptions={enableAutoResize:!0,autoResize:{container:"#demo-container",rightPadding:10},checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},editable:!0,autoEdit:!0,autoCommitEdit:!0,rowHeight:33,headerRowHeight:35,enableCellNavigation:!0,enableFiltering:!0,enableCheckboxSelector:!0,enableRowSelection:!0,enablePagination:!0,pagination:{pageSizes:[10,20,50,100,500],pageSize:20},presets:{filters:[{columnId:"gender",searchTerms:["male"],operator:y.huT.equal}],sorters:[{columnId:"name",direction:"asc"}],pagination:{pageNumber:2,pageSize:20}},backendServiceApi:{service:new b.r,options:{enableCount:this.isCountEnabled,enableSelect:this.isSelectEnabled,enableExpand:this.isExpandEnabled,version:this.odataVersion},preProcess:()=>this.displaySpinner(!0),process:e=>this.getCustomerApiCall(e),postProcess:e=>{this.metrics=e.metrics,this.displaySpinner(!1),this.getCustomerCallback(e)}},externalResources:[new p.o]}}addOtherGender(){const e={value:"other",label:"other"},t=this.columnDefinitions.find((e=>"gender"===e.id));if(t){let n=t.editor.collection;const i=t.filter.collectionAsync;Array.isArray(n)&&(t.editor.collection=[...this.genderCollection,e],n=t.editor.collection,i?.next&&(i.next(n),i.complete()))}this.isOtherGenderAdded=!0}displaySpinner(e){this.processing=e,this.status=e?{text:"loading...",class:"col-md-2 alert alert-warning"}:{text:"finished!!",class:"col-md-2 alert alert-success"}}getCustomerCallback(e){let t=e.totalRecordCount;this.isCountEnabled&&(t=4===this.odataVersion?e["@odata.count"]:e.d.__count),this.metrics&&(this.metrics.totalItemCount=t),this.paginationOptions={...this.gridOptions.pagination,totalItems:t},this.dataset=4===this.odataVersion?e.value:e.d.results,this.odataQuery=e.query}getCustomerApiCall(e){return this.getCustomerDataApiMock(e)}getCustomerDataApiMock(e){return new f.c((t=>{const n=e.toLowerCase().split("&");let i,a=0,s="",l=100;const r={};for(const e of n)if(e.includes("$top=")&&(i=+e.substring(5)),e.includes("$skip=")&&(a=+e.substring(6)),e.includes("$orderby=")&&(s=e.substring(9)),e.includes("$filter=")){const t=e.substring(8).replace("%20"," ");if(t.includes("contains")){const e=t.match(/contains\(([a-zA-Z/]+),\s?'(.*?)'/),n=e[1].trim();r[n]={type:"substring",term:e[2].trim()}}if(t.includes("substringof")){const e=t.match(/substringof\('(.*?)',\s([a-zA-Z/]+)/),n=e[2].trim();r[n]={type:"substring",term:e[1].trim()}}if(t.includes("eq")){const e=t.match(/([a-zA-Z ]*) eq '(.*?)'/);if(Array.isArray(e)){const t=e[1].trim();r[t]={type:"equal",term:e[2].trim()}}}if(t.includes("startswith")){const e=t.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/),n=e[1].trim();r[n]={type:"starts",term:e[2].trim()}}if(t.includes("endswith")){const e=t.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/),n=e[1].trim();r[n]={type:"ends",term:e[2].trim()}}}this.http.fetch("assets/data/customers_100.json").then((e=>e.json())).then((n=>{if(s?.length>0){const e=s.split(",");for(const t of e){const e=t.split(" "),i=e[0];let a=e=>e;for(const e of i.split("/")){const t=a;a=n=>t(n)[e]}switch((e[1]??"asc").toLocaleLowerCase()){case"asc":n=n.sort(((e,t)=>a(e).localeCompare(a(t))));break;case"desc":n=n.sort(((e,t)=>a(t).localeCompare(a(e))))}}}let o=a,d=n;if(r){for(const e in r)r.hasOwnProperty(e)&&(d=d.filter((t=>{const n=r[e].type,i=r[e].term;let a,s=e;if(e&&-1!==e.indexOf(" ")){const t=e.split(" ");s=t[t.length-1]}let l=t;for(const e of s.split("/"))a=l[e],l=a;if(a)switch(n){case"equal":return a.toLowerCase()===i;case"ends":return a.toLowerCase().endsWith(i);case"starts":return a.toLowerCase().startsWith(i);case"substring":return a.toLowerCase().includes(i)}})));l=d.length}o>d.length&&(e=e.replace(`$skip=${o}`,""),o=0);const c=d.slice(o,o+i);setTimeout((()=>{const n={query:e};this.isCountEnabled||(n.totalRecordCount=l),4===this.odataVersion?(n.value=c,this.isCountEnabled&&(n["@odata.count"]=l)):(n.d={results:c},this.isCountEnabled&&(n.d.__count=l)),t.next(n),t.complete()}),150)}))}))}clearAllFiltersAndSorts(){this.aureliaGrid?.gridService.clearAllFiltersAndSorts()}goToFirstPage(){this.aureliaGrid?.paginationService?.goToFirstPage()}goToLastPage(){this.aureliaGrid?.paginationService?.goToLastPage()}gridStateChanged(e){console.log("Client sample, Grid State changed:: ",e.change)}setFiltersDynamically(){this.aureliaGrid?.filterService.updateFilters([{columnId:"name",searchTerms:["A"],operator:"a*"}])}setSortingDynamically(){this.aureliaGrid?.sortService.updateSorting([{columnId:"name",direction:"DESC"}])}handleOnBeforeSort(e){return!0}handleOnBeforeSearchChange(e){return!0}handleOnBeforePaginationChange(e){return!0}changeCountEnableFlag(){return this.displaySpinner(!0),this.isCountEnabled=!this.isCountEnabled,this.resetOptions({enableCount:this.isCountEnabled}),!0}changeEnableSelectFlag(){return this.isSelectEnabled=!this.isSelectEnabled,this.resetOptions({enableSelect:this.isSelectEnabled}),!0}changeEnableExpandFlag(){return this.isExpandEnabled=!this.isExpandEnabled,this.resetOptions({enableExpand:this.isExpandEnabled}),!0}setOdataVersion(e){return this.displaySpinner(!0),this.odataVersion=e,this.resetOptions({version:this.odataVersion}),!0}resetOptions(e){this.displaySpinner(!0);const t=this.gridOptions.backendServiceApi.service;t.updateOptions(e),t.clearFilters(),this.aureliaGrid?.filterService.clearFilters()}},l=t,"symbol"==typeof(r="Example31")&&(r=r.description?"[".concat(r.description,"]"):""),Object.defineProperty(l,"name",{configurable:!0,value:o?"".concat(o," ",r):r}),(()=>{const i="function"==typeof Symbol&&Symbol.metadata?Object.create(null):void 0;(function(e,t,n,i,a,s){function l(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected");return e}for(var r,o=i.kind,d="getter"===o?"get":"setter"===o?"set":"value",c=!t&&e?i.static?e:e.prototype:null,u=t||(c?Object.getOwnPropertyDescriptor(c,i.name):{}),b=!1,p=n.length-1;p>=0;p--){var g={};for(var h in i)g[h]="access"===h?{}:i[h];for(var h in i.access)g.access[h]=i.access[h];g.addInitializer=function(e){if(b)throw new TypeError("Cannot add initializers after decoration has completed");s.push(l(e||null))};var m=(0,n[p])("accessor"===o?{get:u.get,set:u.set}:u[d],g);if("accessor"===o){if(void 0===m)continue;if(null===m||"object"!=typeof m)throw new TypeError("Object expected");(r=l(m.get))&&(u.get=r),(r=l(m.set))&&(u.set=r),(r=l(m.init))&&a.unshift(r)}else(r=l(m))&&("field"===o?a.unshift(r):u[d]=r)}c&&Object.defineProperty(c,i.name,u),b=!0})(null,e={value:t},n,{kind:"class",name:t.name,metadata:i},null,s),t=e.value,i&&Object.defineProperty(t,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:i}),function(e,t,n){for(var i=arguments.length>2,a=0;a<t.length;a++)n=i?t[a].call(e,n):t[a].call(e)}(t,s)})(),t;var l,r,o})()}}]);