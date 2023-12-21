"use strict";(self.webpackChunkaurelia_slickgrid_demo_bs5=self.webpackChunkaurelia_slickgrid_demo_bs5||[]).push([[402],{35402:(e,t,i)=>{i.r(t),i.d(t,{Example15:()=>f});var a={};i.r(a),i.d(a,{default:()=>o,dependencies:()=>s,name:()=>r,register:()=>c,template:()=>l});var n=i(71542);const r="example15",l='<h2>\n  ${title}\n  <span class="float-end">\n    <a style="font-size: 18px"\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/src/examples/slickgrid/example15.ts">\n      <span class="fa fa-link"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle" innerhtml.bind="subTitle"></div>\n\n<button class="btn btn-outline-secondary btn-sm" data-test="reset-button"\n        click.trigger="clearGridStateFromLocalStorage()">\n  <i class="fa fa-times"></i>\n  Clear Grid State from Local Storage &amp; Reset Grid\n</button>\n\n<button class="btn btn-outline-secondary btn-sm" data-test="language-button" click.trigger="switchLanguage()">\n  <i class="fa fa-language"></i>\n  Switch Language\n</button>\n<strong>Locale:</strong>\n<span style="font-style: italic" data-test="selected-locale">\n  ${selectedLanguage + \'.json\'}\n</span>\n\n<aurelia-slickgrid grid-id="grid15"\n                    column-definitions.bind="columnDefinitions"\n                    grid-options.bind="gridOptions"\n                    dataset.bind="dataset"\n                    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"\n                    on-grid-state-changed.trigger="gridStateChanged($event.detail)"\n                    >\n</aurelia-slickgrid>\n',o=l,s=[];let d;function c(e){d||(d=n.b_N.define({name:r,template:l,dependencies:s})),e.register(d)}var u=i(54967),g=i(2249),m=(i(31932),function(e,t,i,a){var n,r=arguments.length,l=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(l=(r<3?n(l):r>3?n(t,i,l):n(t,i))||l);return r>3&&l&&Object.defineProperty(t,i,l),l});function p(e,t){return Math.floor(Math.random()*(t-e+1)+e)}const h="gridState";let f=class{constructor(e){this.i18n=e,this.title="Example 15: Grid State & Presets using Local Storage",this.subTitle='\n  Grid State & Preset (<a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/grid-state-preset" target="_blank">Wiki docs</a>)\n  <br/>\n  <ul class="small">\n    <li>Uses Local Storage to persist the Grid State and uses Grid Options "presets" to put the grid back to it\'s previous state</li>\n    <ul>\n       <li>to demo this, simply change any columns (position reorder, visibility, size, filter, sort), then refresh your browser with (F5)</li>\n    </ul>\n    <li>Local Storage is just one option, you can use whichever is more convenient for you (Local Storage, Session Storage, DB, ...)</li>\n  </ul>\n',this.columnDefinitions=[],this.dataset=[];const t=JSON.parse(localStorage[h]||null);this.defineGrid(t),this.i18n.setLocale("en"),this.selectedLanguage="en"}attached(){this.dataset=this.getData(500)}detaching(){this.saveCurrentGridState()}aureliaGridReady(e){this.aureliaGrid=e}clearGridStateFromLocalStorage(){this.aureliaGrid.gridService.resetGrid(this.columnDefinitions),this.aureliaGrid.paginationService.changeItemPerPage(25),setTimeout((()=>localStorage[h]=null))}defineGrid(e){const t=[];for(let e=0;e<500;e++)t.push({value:e,label:e});this.columnDefinitions=[{id:"title",name:"Title",field:"title",nameKey:"TITLE",filterable:!0,sortable:!0,type:g.fSu.string,minWidth:45,width:100,filter:{model:g.x$p.compoundInput}},{id:"description",name:"Description",field:"description",filterable:!0,sortable:!0,minWidth:80,width:100,type:g.fSu.string,filter:{model:g.x$p.input}},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,type:g.fSu.number,exportCsvForceToKeepAsString:!0,minWidth:55,width:100,nameKey:"DURATION",filterable:!0,filter:{collection:t,model:g.x$p.multipleSelect,filterOptions:{maxHeight:250,width:175}}},{id:"complete",name:"% Complete",field:"percentComplete",nameKey:"PERCENT_COMPLETE",minWidth:70,type:g.fSu.number,sortable:!0,width:100,formatter:g.UgU.percentCompleteBar,filterable:!0,filter:{model:g.x$p.slider,operator:">"}},{id:"start",name:"Start",field:"start",nameKey:"START",formatter:g.UgU.dateIso,sortable:!0,minWidth:75,exportWithFormatter:!0,width:100,type:g.fSu.date,filterable:!0,filter:{model:g.x$p.compoundDate}},{id:"completed",field:"completed",nameKey:"COMPLETED",minWidth:85,maxWidth:85,formatter:g.UgU.checkmark,width:100,type:g.fSu.boolean,sortable:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:g.x$p.singleSelect}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableCheckboxSelector:!0,enableFiltering:!0,enableTranslate:!0,i18n:this.i18n,columnPicker:{hideForceFitButton:!0},gridMenu:{hideForceFitButton:!0,hideClearFrozenColumnsCommand:!1},headerMenu:{hideFreezeColumnsCommand:!1},enablePagination:!0,pagination:{pageSizes:[5,10,15,20,25,30,40,50,75,100],pageSize:25}},e&&(this.gridOptions.presets=e)}getData(e){const t=[];for(let i=0;i<e;i++){const e=Math.round(100*Math.random()),a=p(2e3,2025),n=p(10,25),r=p(1,12),l=r<10?`0${r}`:r,o=p(10,28),s=p(0,100),d=p(10,23),c=p(10,59);t[i]={id:i,title:"Task "+i,description:i%5?"desc "+i:null,duration:e,percentComplete:s,percentCompleteNumber:s,start:new Date(a,r,o),usDateShort:`${r}/${o}/${n}`,utcDate:`${a}-${l}-${o}T${d}:${c}:${c}Z`,completed:i%3==0}}return t}gridStateChanged(e){console.log("Client sample, Grid State changed:: ",e),localStorage[h]=JSON.stringify(e.gridState)}saveCurrentGridState(){const e=this.aureliaGrid.gridStateService.getCurrentGridState();console.log("Client sample, current Grid State:: ",e),localStorage[h]=JSON.stringify(e)}async switchLanguage(){const e="en"===this.selectedLanguage?"fr":"en";await this.i18n.setLocale(e),this.selectedLanguage=e}useDefaultPresets(){return{columns:[{columnId:"description",width:170},{columnId:"title",width:55},{columnId:"duration"},{columnId:"complete"},{columnId:"start"},{columnId:"usDateShort"},{columnId:"utcDate"}],filters:[{columnId:"duration",searchTerms:[2,22,44]},{columnId:"usDateShort",operator:"<",searchTerms:["4/20/25"]}],sorters:[{columnId:"duration",direction:"DESC"},{columnId:"complete",direction:"ASC"}]}}};var b,S;f=m([(0,n.MoW)(a),(b=0,S=u.mb,function(e,t){S(e,t,b)}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:paramtypes",[Object])],f)}}]);