"use strict";(self.webpackChunkaurelia_slickgrid_demo_bs5=self.webpackChunkaurelia_slickgrid_demo_bs5||[]).push([[852],{66852:(e,t,i)=>{i.r(t),i.d(t,{Example19:()=>b});var a={};i.r(a),i.d(a,{default:()=>r,dependencies:()=>s,name:()=>o,register:()=>c,template:()=>l});var n=i(71542);const o="example19",l='<h2>\n  ${title}\n  <span class="float-end">\n    <a style="font-size: 18px" target="_blank"\n      href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example19.ts">\n      <span class="fa fa-link"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle" innerhtml.bind="subTitle"></div>\n\n<div class="col-sm-6">\n  <button class="btn btn-outline-secondary btn-xs" click.trigger="changeEditableGrid()" data-test="editable-grid-btn">\n    Make Grid Editable\n  </button>\n  <button class="btn btn-outline-secondary btn-xs" click.trigger="closeAllRowDetail()" data-test="close-all-btn">\n    Close all Row Details\n  </button>\n  &nbsp;&nbsp;\n\n  <label for="">Detail View Rows Shown: </label>\n  <input type="number" value.bind="detailViewRowCount" style="height: 22px; width: 40px">\n  <button class="btn btn-outline-secondary btn-xs" style="height: 26px;" click.trigger="changeDetailViewRowCount()"\n    data-test="set-count-btn">\n    Set\n  </button>\n</div>\n<div class="alert alert-${flashAlertType} col-sm-6" if.bind="message" data-test="flash-msg">${message}</div>\n\n<hr />\n\n<aurelia-slickgrid grid-id="grid19" column-definitions.bind="columnDefinitions" grid-options.bind="gridOptions"\n  dataset.bind="dataset" extensions.bind="extensions" instances.bind="aureliaGrid">\n</aurelia-slickgrid>\n',r=l,s=[];let d;function c(e){d||(d=n.b_N.define({name:o,template:l,dependencies:s})),e.register(d)}var m=i(38845),h=i(29128),u=i(26691),p=(i(31932),function(e,t,i,a){var n,o=arguments.length,l=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,a);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(l=(o<3?n(l):o>3?n(t,i,l):n(t,i))||l);return o>3&&l&&Object.defineProperty(t,i,l),l}),f=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let b=class{constructor(){this.detailViewRowCount=9,this.title="Example 19: Row Detail View",this.subTitle='\n    Add functionality to show extra information with a Row Detail View, (<a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/row-detail" target="_blank">Wiki docs</a>)\n    <ul>\n      <li>Click on the row "+" icon or anywhere on the row to open it (the latter can be changed via property "useRowClick: false")</li>\n      <li>Pass a View/Model as a Template to the Row Detail</li>\n      <li>You can use "expandableOverride()" callback to override logic to display expand icon on every row (for example only show it every 2nd row)</li>\n    </ul>\n  ',this.columnDefinitions=[],this.dataset=[],this.flashAlertType="info",this.message="",this.defineGrid()}get rowDetailInstance(){return this.aureliaGrid?.extensionService.getExtensionInstanceByName(m.UXi.rowDetailView)}attached(){this.getData()}defineGrid(){this.columnDefinitions=[{id:"title",name:"Title",field:"title",sortable:!0,type:m.fSu.string,width:70,filterable:!0,editor:{model:m.Kob.text}},{id:"duration",name:"Duration (days)",field:"duration",formatter:m.UgU.decimal,params:{minDecimal:1,maxDecimal:2},sortable:!0,type:m.fSu.number,minWidth:90,filterable:!0},{id:"percent2",name:"% Complete",field:"percentComplete2",editor:{model:m.Kob.slider},formatter:m.UgU.progressBar,type:m.fSu.number,sortable:!0,minWidth:100,filterable:!0,filter:{model:m.x$p.slider,operator:">"}},{id:"start",name:"Start",field:"start",formatter:m.UgU.dateIso,sortable:!0,type:m.fSu.date,minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:m.x$p.compoundDate}},{id:"finish",name:"Finish",field:"finish",formatter:m.UgU.dateIso,sortable:!0,type:m.fSu.date,minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:m.x$p.compoundDate}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",minWidth:100,formatter:m.UgU.checkmark,type:m.fSu.boolean,filterable:!0,sortable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:m.x$p.singleSelect}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:!0,enableRowDetailView:!0,rowSelectionOptions:{selectActiveRow:!0},datasetIdPropertyName:"rowId",rowDetailView:{process:e=>this.simulateServerAsyncCall(e),loadOnce:!0,singleRowExpand:!1,useRowClick:!0,panelRows:this.detailViewRowCount,preloadViewModel:h.k,viewModel:u.Y,parent:this}}}getData(){const e=[];for(let t=0;t<1e3;t++){const i=2e3+Math.floor(10*Math.random()),a=Math.floor(11*Math.random()),n=Math.floor(29*Math.random()),o=Math.round(100*Math.random());e[t]={rowId:t,title:"Task "+t,duration:t%33==0?null:100*Math.random()+"",percentComplete:o,percentComplete2:o,percentCompleteNumber:o,start:new Date(i,a,n),finish:new Date(i,a+1,n),effortDriven:t%5==0}}this.dataset=e}changeDetailViewRowCount(){const e=this.rowDetailInstance.getOptions();e&&e.panelRows&&(e.panelRows=this.detailViewRowCount,this.rowDetailInstance.setOptions(e))}changeEditableGrid(){return this.rowDetailInstance.addonOptions.useRowClick=!1,this.gridOptions.autoCommitEdit=!this.gridOptions.autoCommitEdit,this.aureliaGrid?.slickGrid.setOptions({editable:!0,autoEdit:!0,enableCellNavigation:!0}),!0}closeAllRowDetail(){this.rowDetailInstance.collapseAll()}showFlashMessage(e,t="info"){this.message=e,this.flashAlertType=t}simulateServerAsyncCall(e){const t=["John Doe","Jane Doe","Chuck Norris","Bumblebee","Jackie Chan","Elvis Presley","Bob Marley","Mohammed Ali","Bruce Lee","Rocky Balboa"];return new Promise((i=>{setTimeout((()=>{const a=e;a.assignee=t[this.randomNumber(0,10)],a.reporter=t[this.randomNumber(0,10)],i(a)}),1e3)}))}randomNumber(e,t){return Math.floor(Math.random()*(t-e+1)+e)}};p([n.ExJ,f("design:type",Object)],b.prototype,"detailViewRowCount",void 0),b=p([(0,n.MoW)(a),f("design:paramtypes",[])],b)}}]);