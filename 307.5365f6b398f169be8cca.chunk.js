"use strict";(self.webpackChunkaurelia_slickgrid_demo_bs5=self.webpackChunkaurelia_slickgrid_demo_bs5||[]).push([[307],{220:(e,i,n)=>{n.d(i,{A:()=>o});var t=n(1601),a=n.n(t),l=n(6314),s=n.n(l)()(a());s.push([e.id,"#grid7-1{--slick-header-button-float: right}#grid7-2{--slick-header-button-margin: 4px 0 50px 0;--slick-header-button-float: left}",""]);const o=s},4307:(e,i,n)=>{n.r(i),n.d(i,{Example7:()=>A});var t={};n.r(t),n.d(t,{default:()=>d,dependencies:()=>r,name:()=>s,register:()=>c,template:()=>o});var a=n(5394),l=n(220);const s="example7",o='<h2>\n  ${title}\n  <span class="float-end">\n    <a style="font-size: 18px"\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example7.ts">\n      <span class="mdi mdi-link-variant"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle" innerhtml.bind="subTitle"></div>\n\n<h5>Grid 1</h5>\n<aurelia-slickgrid\n                    grid-id="grid7-1"\n                    column-definitions.bind="columnDefinitions1"\n                    grid-options.bind="gridOptions1"\n                    dataset.bind="dataset1"\n                    on-aurelia-grid-created.trigger="aureliaGrid1Ready($event.detail)">\n</aurelia-slickgrid>\n<br />\n<h5>Grid 2 - <span class="subtitle">with both Header Buttons & Menus</span></h5>\n<aurelia-slickgrid\n                    grid-id="grid7-2"\n                    column-definitions.bind="columnDefinitions2"\n                    grid-options.bind="gridOptions2"\n                    dataset.bind="dataset2"\n                    on-aurelia-grid-created.trigger="aureliaGrid2Ready($event.detail)">\n</aurelia-slickgrid>\n',d=o,r=[];let h;function c(e){h||(h=a.K94.define({name:s,template:o,dependencies:r})),e.register(h)}var m=n(5072),u=n.n(m),g=n(7825),b=n.n(g),p=n(7659),f=n.n(p),C=n(5056),v=n.n(C),k=n(540),y=n.n(k),x=n(1113),O=n.n(x),H={};H.styleTagTransform=O(),H.setAttributes=v(),H.insert=f().bind(null,"head"),H.domAPI=b(),H.insertStyleElement=y(),u()(l.A,H),l.A&&l.A.locals&&l.A.locals,n(6757);let G={},w={};class A{constructor(){this.title="Example 7: Header Button Plugin",this.subTitle='\n    This example demonstrates using the <b>Slick.Plugins.HeaderButtons</b> plugin to easily add buttons to colum headers.\n    These buttons can be specified directly in the column definition, and are very easy to configure and use.\n    (<a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/header-menu-header-buttons" target="_blank">Wiki docs</a>)\n    <ul>\n      <li>Resize the 1st column to see all icon/command</li>\n      <li>Mouse hover the 2nd column to see it\'s icon/command</li>\n      <li>For all the other columns, click on top-right red circle icon to enable highlight of negative numbers.</li>\n      <li>Use override callback functions to change the properties of show/hide, enable/disable the menu or certain item(s) from the list</li>\n      <ol>\n        <li>These callbacks are: "itemVisibilityOverride", "itemUsabilityOverride"</li>\n        <li>for example the "Column E" does not show the header button via "itemVisibilityOverride"</li>\n        <li>for example the "Column J" header button is displayed but it not usable via "itemUsabilityOverride"</li>\n      </ol>\n    </ul>\n  ',this.columnDefinitions1=[],this.columnDefinitions2=[],this.dataset1=[],this.dataset2=[],this.defineGrid(),G={},w={}}attached(){this.dataset1=this.loadData(200,1),this.dataset2=this.loadData(200,2)}aureliaGrid1Ready(e){this.aureliaGrid1=e}aureliaGrid2Ready(e){this.aureliaGrid2=e}defineGrid(){this.columnDefinitions1=[],this.columnDefinitions2=[],this.gridOptions1={enableAutoResize:!0,enableHeaderButton:!0,enableHeaderMenu:!1,autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:!1,enableExcelCopyBuffer:!0,excelCopyBufferOptions:{onCopyCells:(e,i)=>console.log("onCopyCells",e,i),onPasteCells:(e,i)=>console.log("onPasteCells",e,i),onCopyCancelled:(e,i)=>console.log("onCopyCancelled",e,i)},enableCellNavigation:!0,gridHeight:275,headerButton:{onCommand:(e,i)=>this.handleOnCommand(e,i,1)}},this.gridOptions2={...this.gridOptions1,enableHeaderMenu:!0,enableFiltering:!0,headerButton:{onCommand:(e,i)=>this.handleOnCommand(e,i,2)}}}handleOnCommand(e,i,n){const t=i.column,a=i.button;"toggle-highlight"===i.command&&("mdi mdi-lightbulb-on text-danger"===a.cssClass?(1===n?delete G[t.id]:delete w[t.id],a.cssClass="mdi mdi-lightbulb-outline text-warning faded",a.tooltip="Highlight negative numbers."):(1===n?G[t.id]=!0:w[t.id]=!0,a.cssClass="mdi mdi-lightbulb-on text-danger",a.tooltip="Remove highlight."),this[`aureliaGrid${n}`].slickGrid.invalidate())}loadData(e,i){const n=[];for(let e=0;e<10;e++)n.push({id:e,name:"Column "+String.fromCharCode("A".charCodeAt(0)+e),field:e+"",width:0===e?70:100,filterable:!0,sortable:!0,formatter:(e,n,t,a)=>1===i&&G[a.id]&&t<0||2===i&&w[a.id]&&t<0?`<div style="color:red; font-weight:bold;">${t}</div>`:t,header:{buttons:[{cssClass:"mdi mdi-lightbulb-outline text-warning faded",command:"toggle-highlight",tooltip:"Highlight negative numbers.",itemVisibilityOverride:e=>"Column E"!==e.column.name,itemUsabilityOverride:e=>"Column J"!==e.column.name,action:(e,i)=>{console.log(`execute a callback action to "${i.command}" on ${i.column.name}`)}}]}});n[0].name="Resize me!",n[0].header={buttons:[{cssClass:"mdi mdi-message-text",handler:()=>{alert("Tag")}},{cssClass:"mdi mdi-forum-outline",handler:()=>{alert("Comment")}},{cssClass:"mdi mdi-information",handler:()=>{alert("Info")}},{cssClass:"mdi mdi-help-circle",handler:()=>{alert("Help")}}]},2===i&&n[0].header?.buttons?.reverse(),n[1].name="Hover me!",n[1].header={buttons:[{cssClass:"mdi mdi-help-circle",showOnHover:!0,tooltip:"This button only appears on hover.",handler:()=>{alert("Help")}}]};const t=[];for(let i=0;i<e;i++){const e=t[i]={};e.id=i;for(let i=0;i<n.length;i++)e[i]=Math.round(10*Math.random())-5}return this[`columnDefinitions${i}`]=n,t}}a.K94.define(t,A)}}]);