"use strict";(self.webpackChunkaurelia_slickgrid_demo_bs5=self.webpackChunkaurelia_slickgrid_demo_bs5||[]).push([[748],{86617:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(8081),a=i.n(n),l=i(23645),r=i.n(l)()(a());r.push([e.id,"#grid21 .slick-header-column:last-child .slick-header-menu-button,#grid21 .slick-header-column:last-child .slick-resizable-handle,#grid21 .slick-header-column:last-child .slick-sort-indicator,#grid21 .slick-header-column:last-child .slick-sort-indicator-numbered{margin-right:18px}",""]);const s=r},61403:(e,t,i)=>{i.r(t),i.d(t,{Example21:()=>R});var n={};i.r(n),i.d(n,{default:()=>o,dependencies:()=>d,name:()=>r,register:()=>h,template:()=>s});var a=i(71542),l=i(86617);const r="example21",s='<h2>\n  ${title}\n  <span class="float-end">\n    <a style="font-size: 18px"\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example21.ts">\n      <span class="fa fa-link"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle"\n      innerhtml.bind="subTitle"></div>\n\n<div class="row row-cols-lg-auto g-1 align-items-center">\n  <div class="col">\n    <label for="columnSelect">Single Search:</label>\n  </div>\n  <div class="col">\n    <select class="form-select" class="form-select" data-test="search-column-list" name="selectedColumn"\n            value.bind="selectedColumn" id="columnSelect">\n      <option repeat.for="column of columnDefinitions"\n              model.bind="column">\n        ${column.name}\n      </option>\n    </select>\n  </div>\n  <div class="col">\n    <select value.bind="selectedOperator"\n            class="form-select"\n            data-test="search-operator-list">\n      <option repeat.for="operator of operatorList"\n              model.bind="operator">\n        ${operator}\n      </option>\n    </select>\n  </div>\n\n  <div class="col">\n    <div class="input-group">\n      <input type="text"\n              class="form-control"\n              placeholder="search value"\n              data-test="search-value-input"\n              value.bind="searchValue" />\n      <button class="btn btn-outline-secondary d-flex align-items-center pl-2 pr-2" data-test="clear-search-value"\n              click.trigger="clearGridSearchInput()">\n        <span class="fa fa-times"></span>\n      </button>\n    </div>\n  </div>\n</div>\n\n<hr />\n\n<aurelia-slickgrid grid-id="grid21"\n                    column-definitions.bind="columnDefinitions"\n                    grid-options.bind="gridOptions"\n                    dataset.bind="dataset"\n                    instances.bind="aureliaGrid">\n</aurelia-slickgrid>\n',o=s,d=[];let c;function h(e){c||(c=a.b_N.define({name:r,template:s,dependencies:d})),e.register(c)}var u=i(38845),p=i(93379),m=i.n(p),f=i(7795),g=i.n(f),b=i(90569),v=i.n(b),y=i(3565),w=i.n(y),k=i(19216),S=i.n(k),C=i(44589),x=i.n(C),D={};D.styleTagTransform=x(),D.setAttributes=w(),D.insert=v().bind(null,"head"),D.domAPI=g(),D.insertStyleElement=S(),m()(l.Z,D),l.Z&&l.Z.locals&&l.Z.locals,i(31932);var M=function(e,t,i,n){var a,l=arguments.length,r=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(l<3?a(r):l>3?a(t,i,r):a(t,i))||r);return l>3&&r&&Object.defineProperty(t,i,r),r},O=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let R=class{constructor(){this.searchValue="",this.title="Example 21: Grid AutoHeight",this.subTitle='\n  The SlickGrid option "autoHeight" can be used if you wish to keep the full height of the grid without any scrolling\n  <ul>\n    <li>You define a fixed grid width via "gridWidth" in the View</li>\n    <li>You can still use the "autoResize" for the width to be resized automatically (the height will never change in this case)</li>\n    <li>This dataset has 25 rows, if you scroll down the page you can see the entire set is shown without any grid scrolling (though you might have browser scrolling)</li>\n  </ul>\n  ',this.columnDefinitions=[],this.dataset=[],this.operatorList=["=","<","<=",">",">=","<>","StartsWith","EndsWith"],this.defineGrid()}attached(){this.getData()}defineGrid(){this.columnDefinitions=[{id:"title",name:"Title",field:"title",width:100,sortable:!0,type:u.fSu.string},{id:"duration",name:"Duration (days)",field:"duration",width:100,sortable:!0,type:u.fSu.number},{id:"complete",name:"% Complete",field:"percentComplete",width:100,sortable:!0,formatter:u.UgU.percentCompleteBar,type:u.fSu.number},{id:"start",name:"Start",field:"start",width:100,sortable:!0,formatter:u.UgU.dateIso,type:u.fSu.date},{id:"finish",name:"Finish",field:"finish",width:100,sortable:!0,formatter:u.UgU.dateIso,type:u.fSu.date},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",width:100,sortable:!0,formatter:u.UgU.checkmark,type:u.fSu.number}],this.gridOptions={autoHeight:!0,autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:!0,showHeaderRow:!1,alwaysShowVerticalScroll:!1,enableColumnPicker:!0,enableCellNavigation:!0,enableRowSelection:!0}}getData(){const e=[];for(let t=0;t<25;t++){const i=2e3+Math.floor(10*Math.random()),n=Math.floor(11*Math.random()),a=Math.floor(29*Math.random()),l=Math.round(100*Math.random());e[t]={id:t,title:"Task "+t,duration:Math.round(100*Math.random())+"",percentComplete:l,percentCompleteNumber:l,start:new Date(i,n,a),finish:new Date(i,n+1,a),effortDriven:t%5==0}}this.dataset=e}generatePhoneNumber(){let e="";for(let t=0;t<10;t++)e+=Math.round(9*Math.random())+"";return e}clearGridSearchInput(){this.searchValue="",this.updateFilter()}selectedOperatorChanged(){this.updateFilter()}selectedColumnChanged(){this.updateFilter()}searchValueChanged(){this.updateFilter()}updateFilter(){this.aureliaGrid?.filterService.updateSingleFilter({columnId:`${this.selectedColumn.id||""}`,operator:this.selectedOperator,searchTerms:[this.searchValue||""]})}};M([(0,a.ExJ)(),O("design:type",Object)],R.prototype,"selectedColumn",void 0),M([(0,a.ExJ)(),O("design:type",String)],R.prototype,"selectedOperator",void 0),M([(0,a.ExJ)(),O("design:type",Object)],R.prototype,"searchValue",void 0),R=M([(0,a.MoW)(n),O("design:paramtypes",[])],R)}}]);