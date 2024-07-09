"use strict";(self.webpackChunkaurelia_slickgrid_locale_demo_bs5=self.webpackChunkaurelia_slickgrid_locale_demo_bs5||[]).push([[16],{8016:(e,t,i)=>{i.r(t),i.d(t,{Example15:()=>b});var a={};i.r(a),i.d(a,{bindables:()=>d,default:()=>o,dependencies:()=>s,name:()=>n,register:()=>u,template:()=>l});var r=i(5394);const n="example15",l='<h2>\n  ${title}\n  <span class="float-end">\n    <a style="font-size: 18px"\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example15.ts">\n      <span class="mdi mdi-link-variant"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle" innerhtml.bind="subTitle"></div>\n\n<button class="btn btn-outline-secondary btn-sm btn-icon" data-test="reset-button"\n        click.trigger="clearGridStateFromLocalStorage()">\n  <i class="mdi mdi-close"></i>\n  Clear Grid State from Local Storage &amp; Reset Grid\n</button>\n\n<aurelia-slickgrid grid-id="grid15"\n                    column-definitions.bind="columnDefinitions"\n                    grid-options.bind="gridOptions"\n                    dataset.bind="dataset"\n                    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"\n                    on-grid-state-changed.trigger="gridStateChanged($event.detail)"\n                    >\n</aurelia-slickgrid>\n',o=l,s=[],d={};let c;function u(e){c||(c=r.K94.define({name:n,template:l,dependencies:s,bindables:d})),e.register(c)}var m=i(3651),p=i(9209),h=(i(6757),function(e,t,i,a,r,n){function l(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected");return e}for(var o,s=a.kind,d="getter"===s?"get":"setter"===s?"set":"value",c=!t&&e?a.static?e:e.prototype:null,u=t||(c?Object.getOwnPropertyDescriptor(c,a.name):{}),m=!1,p=i.length-1;p>=0;p--){var h={};for(var g in a)h[g]="access"===g?{}:a[g];for(var g in a.access)h.access[g]=a.access[g];h.addInitializer=function(e){if(m)throw new TypeError("Cannot add initializers after decoration has completed");n.push(l(e||null))};var f=(0,i[p])("accessor"===s?{get:u.get,set:u.set}:u[d],h);if("accessor"===s){if(void 0===f)continue;if(null===f||"object"!=typeof f)throw new TypeError("Object expected");(o=l(f.get))&&(u.get=o),(o=l(f.set))&&(u.set=o),(o=l(f.init))&&r.unshift(o)}else(o=l(f))&&("field"===s?r.unshift(o):u[d]=o)}c&&Object.defineProperty(c,a.name,u),m=!0});function g(e,t){return Math.floor(Math.random()*(t-e+1)+e)}const f="gridState";let b=(()=>{let e,t,i=[(0,r.EMX)(a)],n=[];return t=class{constructor(){this.title="Example 15: Grid State & Presets using Local Storage",this.subTitle='\n  Grid State & Preset (<a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/grid-state-preset" target="_blank">Wiki docs</a>)\n  <br/>\n  <ul class="small">\n    <li>Uses Local Storage to persist the Grid State and uses Grid Options "presets" to put the grid back to it\'s previous state</li>\n    <ul>\n       <li>to demo this, simply change any columns (position reorder, visibility, size, filter, sort), then refresh your browser with (F5)</li>\n    </ul>\n    <li>Local Storage is just one option, you can use whichever is more convenient for you (Local Storage, Session Storage, DB, ...)</li>\n  </ul>\n',this.columnDefinitions=[],this.dataset=[];const e=JSON.parse(localStorage[f]||null);this.defineGrid(e)}attached(){this.dataset=this.getData(500)}detaching(){this.saveCurrentGridState()}aureliaGridReady(e){this.aureliaGrid=e}clearGridStateFromLocalStorage(){this.aureliaGrid.gridService.resetGrid(this.columnDefinitions),this.aureliaGrid.paginationService.changeItemPerPage(25),setTimeout((()=>localStorage[f]=null))}defineGrid(e){const t=[];for(let e=0;e<500;e++)t.push({value:e,label:e});this.columnDefinitions=[{id:"title",name:"Title",field:"title",filterable:!0,sortable:!0,type:p.PUO.string,minWidth:45,width:100,filter:{model:p.CuW.compoundInput}},{id:"description",name:"Description",field:"description",filterable:!0,sortable:!0,minWidth:80,width:100,type:p.PUO.string,filter:{model:p.CuW.input,filterShortcuts:[{title:"Blank Values",searchTerms:["< A"],iconCssClass:"mdi mdi-filter-minus-outline"},{title:"Non-Blank Values",searchTerms:["> A"],iconCssClass:"mdi mdi-filter-plus-outline"}]}},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,type:p.PUO.number,exportCsvForceToKeepAsString:!0,minWidth:55,width:100,filterable:!0,filter:{collection:t,model:p.CuW.multipleSelect,filterOptions:{maxHeight:250,width:175}}},{id:"complete",name:"% Complete",field:"percentComplete",minWidth:70,type:p.PUO.number,sortable:!0,width:100,formatter:p._tQ.percentCompleteBar,filterable:!0,filter:{model:p.CuW.slider,operator:">"}},{id:"start",name:"Start",field:"start",formatter:p._tQ.dateIso,sortable:!0,minWidth:75,exportWithFormatter:!0,width:100,type:p.PUO.date,filterable:!0,filter:{model:p.CuW.compoundDate,filterShortcuts:[{title:"Past",searchTerms:[(0,m.GP)(new Date,"YYYY-MM-DD")],operator:"<",iconCssClass:"mdi mdi-calendar"},{title:"Future",searchTerms:[(0,m.GP)(new Date,"YYYY-MM-DD")],operator:">",iconCssClass:"mdi mdi-calendar-clock"}]}},{id:"completed",field:"completed",minWidth:85,maxWidth:85,formatter:p._tQ.checkmarkMaterial,width:100,type:p.PUO.boolean,sortable:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:p.CuW.singleSelect}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableCheckboxSelector:!0,enableFiltering:!0,columnPicker:{hideForceFitButton:!0},gridMenu:{hideForceFitButton:!0,hideClearFrozenColumnsCommand:!1},headerMenu:{hideFreezeColumnsCommand:!1},enablePagination:!0,pagination:{pageSizes:[5,10,15,20,25,30,40,50,75,100],pageSize:25}},e&&(this.gridOptions.presets=e)}getData(e){const t=(new Date).getFullYear(),i=[];for(let a=0;a<e;a++){const e=Math.round(100*Math.random()),r=g(t-15,t+8),n=g(10,25),l=g(1,12),o=l<10?`0${l}`:l,s=g(10,28),d=g(0,100),c=g(10,23),u=g(10,59);i[a]={id:a,title:"Task "+a,description:a%5?"desc "+a:null,duration:e,percentComplete:d,percentCompleteNumber:d,start:new Date(r,l,s),usDateShort:`${l}/${s}/${n}`,utcDate:`${r}-${o}-${s}T${c}:${u}:${u}Z`,completed:a%3==0}}return i}gridStateChanged(e){console.log("Client sample, Grid State changed:: ",e),localStorage[f]=JSON.stringify(e.gridState)}saveCurrentGridState(){const e=this.aureliaGrid.gridStateService.getCurrentGridState();console.log("Client sample, current Grid State:: ",e),localStorage[f]=JSON.stringify(e)}useDefaultPresets(){return{columns:[{columnId:"description",width:170},{columnId:"title",width:55},{columnId:"duration"},{columnId:"complete"},{columnId:"start"},{columnId:"usDateShort"},{columnId:"utcDate"}],filters:[{columnId:"duration",searchTerms:[2,22,44]},{columnId:"usDateShort",operator:"<",searchTerms:["4/20/25"]}],sorters:[{columnId:"duration",direction:"DESC"},{columnId:"complete",direction:"ASC"}]}}},l=t,"symbol"==typeof(o="Example15")&&(o=o.description?"[".concat(o.description,"]"):""),Object.defineProperty(l,"name",{configurable:!0,value:s?"".concat(s," ",o):o}),(()=>{const a="function"==typeof Symbol&&Symbol.metadata?Object.create(null):void 0;h(null,e={value:t},i,{kind:"class",name:t.name,metadata:a},null,n),t=e.value,a&&Object.defineProperty(t,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:a}),function(e,t,i){for(var a=arguments.length>2,r=0;r<t.length;r++)i=a?t[r].call(e,i):t[r].call(e)}(t,n)})(),t;var l,o,s})()}}]);