"use strict";(self.webpackChunkaurelia_slickgrid_demo_bs5=self.webpackChunkaurelia_slickgrid_demo_bs5||[]).push([[930],{91100:(e,t,i)=>{i.d(t,{Z:()=>s});var a=i(8081),n=i.n(a),r=i(23645),l=i.n(r)()(n());l.push([e.id,".trading-platform.full-screen{position:absolute;top:0;left:0;right:0;bottom:0;padding:10px 12px 0 10px;background-color:#fff;z-index:8000;position:fixed}.changed-gain{background-color:#eafae8 !important}.changed-loss{background-color:#ffeae8 !important}.simulation-form input[type=number]{height:32px;width:50px;border:1px solid silver;border-radius:3px}.simulation-form div.range{display:contents;width:200px}.simulation-form div.range label.form-label{margin:0}.simulation-form div.range input.form-range{width:120px}.simulation-form .refresh-rate input{height:30px;width:46px}.sparkline{stroke:#00b78d;fill:rgba(0,183,141,.03)}",""]);const s=l},95930:(e,t,i)=>{i.r(t),i.d(t,{Example34:()=>U});var a={};i.r(a),i.d(a,{default:()=>o,dependencies:()=>d,name:()=>l,register:()=>c,template:()=>s});var n=i(71542),r=i(91100);const l="example34",s='<h2>\n  ${title}\n  <span class="float-end">\n    <a style="font-size: 18px" target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example34.ts">\n      <span class="fa fa-link"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle" innerhtml.bind="subTitle"></div>\n\n<div class="trading-platform">\n  <div class="row mb-4 simulation-form">\n    <div class="col-sm-12 d-flex align-items-center">\n      <div class="range">\n        <label for="refreshRateRange" class="form-label me-1">Changes Rate(ms)</label>\n        <input type="range" class="form-range" id="refreshRateRange" min="0" max="250" value.bind="refreshRate">\n        <span class="refresh-rate">\n          <input type="number" value.bind="refreshRate">\n        </span>\n      </div>\n      <span class="ms-3 me-1">\n        <button class="btn btn-outline-secondary btn-sm" data-test="start-btn" click.trigger="startSimulation()">\n          <li class="fa fa-play"></li> Start Simulation\n        </button>\n      </span>\n      <span class="me-3">\n        <button class="btn btn-outline-secondary btn-sm" data-test="stop-btn" click.trigger="stopSimulation()">\n          <li class="fa fa-stop"></li> Stop Simulation\n        </button>\n      </span>\n      <span class="mx-1">\n        <label for="change-per-cycle-input">Changes p/Cycle</label>\n        <input type="number" id="change-per-cycle-input" value.bind="minChangePerCycle" max.bind="maxChangePerCycle">\n        to\n        <input type="number" value.bind="maxChangePerCycle" min.bind="minChangePerCycle">\n      </span>\n      <span class="ms-2">\n        <label for="highlight-input">Highlight Duration(ms)</label>\n        <input type="number" id="highlight-input" data-test="highlight-input" value.bind="highlightDuration">\n      </span>\n      <div class="ms-auto">\n        <button class="btn btn-outline-secondary btn-sm" click.trigger="toggleFullScreen()">\n          <li class.bind="isFullScreen ? \'fa fa-compress\' : \'fa fa-arrows-alt\'"></li> Toggle Full-Screen\n        </button>\n      </div>\n    </div>\n  </div>\n\n  <aurelia-slickgrid grid-id="grid34" column-definitions.bind="columnDefinitions" grid-options.bind="gridOptions"\n                      dataset.bind="dataset" instances.bind="aureliaGrid">\n  </aurelia-slickgrid>\n</div>\n',o=s,d=[];let m;function c(e){m||(m=n.b_N.define({name:l,template:s,dependencies:d})),e.register(m)}var u=i(43009),h=i(16934),p=i.n(h),g=i(38845),f=i(93379),b=i.n(f),y=i(7795),C=i.n(y),S=i(90569),w=i.n(S),v=i(3565),x=i.n(v),k=i(19216),P=i.n(k),D=i(44589),T=i.n(D),$={};$.styleTagTransform=T(),$.setAttributes=x(),$.insert=w().bind(null,"head"),$.domAPI=C(),$.insertStyleElement=P(),b()(r.Z,$),r.Z&&r.Z.locals&&r.Z.locals,i(31932);const N=(e,t,i)=>`<img src="https://flags.fmcdn.net/data/flags/mini/${i.substr(0,2).toLowerCase()}.png" width="20"/> ${i}`,M=(e,t,i,a,n)=>{const r=n.priceChange>=0?"up":"down",l=new DocumentFragment,s=document.createElement("span");return s.className=`fa fa-arrow-${r} text-${"up"===r?"success":"danger"}`,l.appendChild(s),i instanceof HTMLElement&&l.appendChild(i),l},R=(e,t,i)=>`<span <span class="fa fa-${"Buy"===i?"plus":"minus"}-circle ${"Buy"===i?"text-info":"text-warning"}"></span> ${i}`,W=(e,t,i,a,n)=>{const r=document.createElementNS("http://www.w3.org/2000/svg","svg");return r.setAttributeNS(null,"width","135"),r.setAttributeNS(null,"height","30"),r.setAttributeNS(null,"stroke-width","2"),r.classList.add("sparkline"),p()(r,n.historic,{interactive:!0}),r.outerHTML};let U=class{constructor(){this.title="Example 34: Real-Time Trading Platform",this.subTitle="Simulate a stock trading platform with lot of price changes\n  <ul>\n    <li>you can start/stop the simulation</li>\n    <li>optionally change random numbers, between 0 and 10 symbols, per cycle (higher numbers means more changes)</li>\n    <li>optionally change the simulation changes refresh rate in ms (lower number means more changes).</li>\n    <li>you can Group by 1 of these columns: Currency, Market or Type</li>\n    <li>to show SlickGrid HUGE PERF., do the following: (1) lower Changes Rate (2) increase both Changes per Cycle and (3) lower Highlight Duration\n  </ul>",this.columnDefinitions=[],this.dataset=[],this.isFullScreen=!1,this.highlightDuration=150,this.itemCount=200,this.minChangePerCycle=0,this.maxChangePerCycle=10,this.refreshRate=75,this.defineGrid()}attached(){this.getData(),setTimeout((()=>{this.startSimulation()}),this.refreshRate)}detaching(){this.stopSimulation()}defineGrid(){this.columnDefinitions=[{id:"currency",name:"Currency",field:"currency",filterable:!0,sortable:!0,minWidth:65,width:65,formatter:N,filter:{model:g.x$p.singleSelect,collection:[{label:"",value:""},{label:"CAD",value:"CAD"},{label:"USD",value:"USD"}]},grouping:{getter:"currency",formatter:e=>`Currency: <span style="color: #003597; font-weight: bold;">${e.value}</span>  <span style="color: #659bff;">(${e.count} items)</span>`,aggregators:[new g.WFP.Sum("amount")],aggregateCollapsed:!0,collapsed:!1}},{id:"symbol",name:"Symbol",field:"symbol",filterable:!0,sortable:!0,minWidth:65,width:65},{id:"market",name:"Market",field:"market",filterable:!0,sortable:!0,minWidth:75,width:75,grouping:{getter:"market",formatter:e=>`Market: <span style="color: #003597; font-weight: bold;">${e.value}</span>  <span style="color: #659bff;">(${e.count} items)</span>`,aggregators:[new g.WFP.Sum("amount")],aggregateCollapsed:!0,collapsed:!1}},{id:"company",name:"Company",field:"company",filterable:!0,sortable:!0,minWidth:80,width:130},{id:"trsnType",name:"Type",field:"trsnType",filterable:!0,sortable:!0,minWidth:60,width:60,formatter:R,filter:{model:g.x$p.singleSelect,collection:[{label:"",value:""},{label:"Buy",value:"Buy"},{label:"Sell",value:"Sell"}]},grouping:{getter:"trsnType",formatter:e=>`Type: <span style="color: #003597; font-weight: bold;">${e.value}</span>  <span style="color: #659bff;">(${e.count} items)</span>`,aggregators:[new g.WFP.Sum("amount")],aggregateCollapsed:!0,collapsed:!1}},{id:"priceChange",name:"Change",field:"priceChange",filterable:!0,sortable:!0,minWidth:80,width:80,filter:{model:g.x$p.compoundInputNumber},type:g.fSu.number,formatter:g.UgU.multiple,params:{formatters:[g.UgU.dollarColored,M],maxDecimal:2}},{id:"price",name:"Price",field:"price",filterable:!0,sortable:!0,minWidth:70,width:70,filter:{model:g.x$p.compoundInputNumber},type:g.fSu.number,formatter:g.UgU.dollar,params:{maxDecimal:2}},{id:"quantity",name:"Quantity",field:"quantity",filterable:!0,sortable:!0,minWidth:70,width:70,filter:{model:g.x$p.compoundInputNumber},type:g.fSu.number},{id:"amount",name:"Amount",field:"amount",filterable:!0,sortable:!0,minWidth:70,width:60,filter:{model:g.x$p.compoundInputNumber},type:g.fSu.number,formatter:g.UgU.dollar,params:{maxDecimal:2},groupTotalsFormatter:g.qP.sumTotalsDollarBold},{id:"historic",name:"Price History",field:"historic",minWidth:100,width:150,maxWidth:150,formatter:W},{id:"execution",name:"Execution Timestamp",field:"execution",filterable:!0,sortable:!0,minWidth:125,formatter:g.UgU.dateTimeIsoAmPm,exportWithFormatter:!0,type:g.fSu.dateTimeIsoAM_PM,filter:{model:g.x$p.compoundDate}}],this.gridOptions={autoResize:{container:".trading-platform",rightPadding:0,bottomPadding:10},formatterOptions:{displayNegativeNumberWithParentheses:!0,thousandSeparator:","},draggableGrouping:{dropPlaceHolderText:"Drop a column header here to group by any of these available columns: Currency, Market or Type",deleteIconCssClass:"fa fa-times"},enableDraggableGrouping:!0,createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:40,enableCellNavigation:!0,enableFiltering:!0,cellHighlightCssClass:"changed"}}getData(){const e=[];for(let t=0;t<200;t++){const i=Math.round(100*Math.random()),a=this.randomNumber(1,50),n=this.randomNumber(125,255),r=this.randomNumber(-25,35,!1),l=this.randomNumber(r,300),s=l<5?n:a,o=l*s,d=new Date;d.setHours(9,30,0);const m=Math.floor(10*Math.random())%2?"CAD":"USD",c=u.We.company.name();e[t]={id:t,currency:m,trsnType:Math.round(100*Math.random())%2?"Buy":"Sell",company:c,symbol:"CAD"===m?c.substr(0,3).toUpperCase()+".TO":c.substr(0,4).toUpperCase(),market:"CAD"===m?"TSX":l>200?"Nasdaq":"S&P 500",duration:t%33==0?null:100*Math.random()+"",percentCompleteNumber:i,priceChange:r,price:l,quantity:s,amount:o,execution:d,historic:[l]}}this.dataset=e}startSimulation(){const e={},t=this.randomNumber(this.minChangePerCycle,this.maxChangePerCycle);for(let i=0;i<t;i++){const t=this.randomNumber(1,50),i=this.randomNumber(125,255),a=Math.round(Math.random()*(this.dataset.length-1)),n=this.randomNumber(-25,25,!1),r=(0,g.p$x)(this.dataset[a]),l={...this.dataset[a]};l.priceChange=n,l.price=l.price+n<0?0:l.price+n,l.quantity=l.price<5?i:t,l.amount=l.price*l.quantity,l.trsnType=Math.round(100*Math.random())%2?"Buy":"Sell",l.execution=new Date,l.historic.push(l.price),l.historic=l.historic.slice(-20),e[a]||(e[a]={}),e[a].id="changed",this.renderCellHighlighting(l,this.findColumnById("priceChange"),n),(r.priceChange<0&&l.priceChange>0||r.priceChange>0&&l.priceChange<0)&&this.renderCellHighlighting(l,this.findColumnById("price"),n),this.aureliaGrid.dataView.updateItem(l.id,l)}this.timer=setTimeout(this.startSimulation.bind(this),this.refreshRate||0)}stopSimulation(){clearTimeout(this.timer)}findColumnById(e){return this.columnDefinitions.find((t=>t.field===e))}renderCellHighlighting(e,t,i){if(e&&t){const a=this.aureliaGrid.dataView.getRowByItem(e);if(a>=0){const n={[a]:{[t.id]:i>=0?"changed-gain":"changed-loss"}};this.aureliaGrid.slickGrid.setCellCssStyles(`highlight_${[t.id]}${a}`,n),setTimeout((()=>this.removeUnsavedStylingFromCell(e,t,a)),this.highlightDuration)}}}removeUnsavedStylingFromCell(e,t,i){this.aureliaGrid.slickGrid.removeCellCssStyles(`highlight_${[t.id]}${i}`)}toggleFullScreen(){const e=document.querySelector(".trading-platform");e?.classList.contains("full-screen")?(e.classList.remove("full-screen"),this.isFullScreen=!1):e&&(e.classList.add("full-screen"),this.isFullScreen=!0),this.aureliaGrid.resizerService.resizeGrid()}randomNumber(e,t,i=!0){const a=Math.random()*(t-e+1)+e;return i?Math.floor(a):a}};U=function(e,t,i,a){var n,r=arguments.length,l=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(l=(r<3?n(l):r>3?n(t,i,l):n(t,i))||l);return r>3&&l&&Object.defineProperty(t,i,l),l}([(0,n.MoW)(a),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:paramtypes",[])],U)}}]);