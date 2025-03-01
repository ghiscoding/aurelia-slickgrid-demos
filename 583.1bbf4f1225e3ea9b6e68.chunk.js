(self.webpackChunkau_slickgrid_demo=self.webpackChunkau_slickgrid_demo||[]).push([[583],{583:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Example34:()=>W});var i={};n.r(i),n.d(i,{bindables:()=>d,default:()=>l,dependencies:()=>s,name:()=>r,register:()=>u,template:()=>o});var a=n(5394);n(9774);const r="example34",o='<h2>\n  ${title}\n  <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="toggleDarkMode()" data-test="toggle-dark-mode">\n    <span class="mdi mdi-theme-light-dark"></span>\n    <span>Toggle Dark Mode</span>\n  </button>\n  <span class="float-end">\n    <a style="font-size: 18px" target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example34.ts">\n      <span class="mdi mdi-link-variant"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle" innerhtml.bind="subTitle"></div>\n\n<div class="trading-platform">\n  <div class="row mb-4 simulation-form">\n    <div class="col-sm-12 d-flex align-items-center">\n      <div class="range">\n        <label for="refreshRateRange" class="form-label me-1">Changes Rate(ms)</label>\n        <input type="range" class="form-range" id="refreshRateRange" min="0" max="250" value.bind="refreshRate">\n        <span class="refresh-rate">\n          <input type="number" value.bind="refreshRate">\n        </span>\n      </div>\n      <span class="ms-3 me-1">\n        <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="start-btn" click.trigger="startSimulation()">\n          <li class="mdi mdi-play-circle-outline"></li> Start Simulation\n        </button>\n      </span>\n      <span class="me-3">\n        <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="stop-btn" click.trigger="stopSimulation()">\n          <li class="mdi mdi-stop-circle-outline"></li> Stop Simulation\n        </button>\n      </span>\n      <span class="mx-1">\n        <label for="change-per-cycle-input">Changes p/Cycle</label>\n        <input type="number" id="change-per-cycle-input" value.bind="minChangePerCycle" max.bind="maxChangePerCycle">\n        to\n        <input type="number" value.bind="maxChangePerCycle" min.bind="minChangePerCycle">\n      </span>\n      <span class="ms-2">\n        <label for="highlight-input">Highlight Duration(ms)</label>\n        <input type="number" id="highlight-input" data-test="highlight-input" value.bind="highlightDuration">\n      </span>\n      <div class="ms-auto">\n        <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="toggleFullScreen()">\n          <li class.bind="isFullScreen ? \'mdi mdi-arrow-collapse\' : \'mdi mdi-arrow-expand\'"></li> Toggle Full-Screen\n        </button>\n      </div>\n    </div>\n  </div>\n\n  <aurelia-slickgrid grid-id="grid34" column-definitions.bind="columnDefinitions" grid-options.bind="gridOptions"\n                      dataset.bind="dataset" instances.bind="aureliaGrid">\n  </aurelia-slickgrid>\n</div>\n',l=o,s=[],d={};let c;function u(e){c||(c=a.K9.define({name:r,template:o,dependencies:s,bindables:d})),e.register(c)}var m=n(138),p=n(2327),h=n.n(p),g=n(6609),f=n(5072),b=n.n(f),y=n(7825),v=n.n(y),x=n(7659),k=n.n(x),C=n(5056),w=n.n(C),S=n(540),T=n.n(S),M=n(1113),P=n.n(M),A=n(5711),D={};D.styleTagTransform=P(),D.setAttributes=w(),D.insert=k().bind(null,"head"),D.domAPI=v(),D.insertStyleElement=T(),b()(A.A,D),A.A&&A.A.locals&&A.A.locals,n(6757);const O=(e,t,n)=>`<img src="https://flags.fmcdn.net/data/flags/mini/${n.substring(0,2).toLowerCase()}.png" width="20"/> ${n}`,N=(e,t,n,i,a)=>{const r=a.priceChange>=0?"up":"down",o=new DocumentFragment,l=document.createElement("div");l.className="d-inline-flex align-items-center text-"+("up"===r?"success":"danger");const s=document.createElement("span");return s.className=`mdi mdi-arrow-${r}`,l.appendChild(s),o.appendChild(l),n instanceof HTMLElement?l.appendChild(n):l.appendChild(document.createTextNode(n)),o},_=(e,t,n)=>`<div class="d-inline-flex align-items-center"><span class="me-1 mdi mdi-16px mdi-${"Buy"===n?"plus":"minus"}-circle ${"Buy"===n?"text-info":"text-warning"}"></span> ${n}</div>`,E=(e,t,n,i,a)=>{if(a.historic.length<2)return"";const r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.setAttributeNS(null,"width","135"),r.setAttributeNS(null,"height","30"),r.setAttributeNS(null,"stroke-width","2"),r.classList.add("sparkline"),h()(r,a.historic,{cursorwidth:2,onmousemove:(e,t)=>{const n=e.target.closest("svg"),i=n?.nextElementSibling;i&&(i.hidden=!1,i.textContent=`$${(100*t.value/100).toFixed(2)}`,i.style.top=`${e.offsetY}px`,i.style.left=`${e.offsetX+20}px`)},onmouseout:e=>{const t=e.target.closest("svg"),n=t?.nextElementSibling;n&&(n.hidden=!0)}});const o=document.createElement("div");return o.appendChild(r),o.appendChild((0,g.fhB)("div",{className:"trading-tooltip",hidden:!0})),o};let W=(()=>{let e,t,n=[(0,a.EM)(i)],r=[];return t=class{constructor(){this._darkMode=!1,this.title="Example 34: Real-Time Trading Platform",this.subTitle="Simulate a stock trading platform with lot of price changes\n  <ul>\n    <li>you can start/stop the simulation</li>\n    <li>optionally change random numbers, between 0 and 10 symbols, per cycle (higher numbers means more changes)</li>\n    <li>optionally change the simulation changes refresh rate in ms (lower number means more changes).</li>\n    <li>you can Group by 1 of these columns: Currency, Market or Type</li>\n    <li>to show SlickGrid HUGE PERF., do the following: (1) lower Changes Rate (2) increase both Changes per Cycle and (3) lower Highlight Duration</li>\n  </ul>",this.columnDefinitions=[],this.dataset=[],this.isFullScreen=!1,this.highlightDuration=150,this.itemCount=200,this.minChangePerCycle=0,this.maxChangePerCycle=10,this.refreshRate=75,this.defineGrid()}attached(){this.getData(),setTimeout((()=>{this.startSimulation()}),this.refreshRate)}detaching(){this.stopSimulation(),document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light"}defineGrid(){this.columnDefinitions=[{id:"currency",name:"Currency",field:"currency",filterable:!0,sortable:!0,minWidth:65,width:65,formatter:O,filter:{model:g.CuW.singleSelect,collection:[{label:"",value:""},{label:"CAD",value:"CAD"},{label:"USD",value:"USD"}]},grouping:{getter:"currency",formatter:e=>`Currency: <span style="color: var(--slick-primary-color); font-weight: bold;">${e.value}</span>  <span style="color: #659bff;">(${e.count} items)</span>`,aggregators:[new g.J2q.Sum("amount")],aggregateCollapsed:!0,collapsed:!1}},{id:"symbol",name:"Symbol",field:"symbol",filterable:!0,sortable:!0,minWidth:65,width:65},{id:"market",name:"Market",field:"market",filterable:!0,sortable:!0,minWidth:75,width:75,grouping:{getter:"market",formatter:e=>`Market: <span style="color: var(--slick-primary-color); font-weight: bold;">${e.value}</span>  <span style="color: #659bff;">(${e.count} items)</span>`,aggregators:[new g.J2q.Sum("amount")],aggregateCollapsed:!0,collapsed:!1}},{id:"company",name:"Company",field:"company",filterable:!0,sortable:!0,minWidth:80,width:130},{id:"trsnType",name:"Type",field:"trsnType",filterable:!0,sortable:!0,minWidth:60,width:60,formatter:_,filter:{model:g.CuW.singleSelect,collection:[{label:"",value:""},{label:"Buy",value:"Buy"},{label:"Sell",value:"Sell"}]},grouping:{getter:"trsnType",formatter:e=>`Type: <span style="color: var(--slick-primary-color); font-weight: bold;">${e.value}</span>  <span style="color: #659bff;">(${e.count} items)</span>`,aggregators:[new g.J2q.Sum("amount")],aggregateCollapsed:!0,collapsed:!1}},{id:"priceChange",name:"Change",field:"priceChange",filterable:!0,sortable:!0,minWidth:80,width:80,filter:{model:g.CuW.compoundInputNumber},type:g.PUO.number,formatter:g._tQ.multiple,params:{formatters:[g._tQ.dollar,N],maxDecimal:2}},{id:"price",name:"Price",field:"price",filterable:!0,sortable:!0,minWidth:70,width:70,filter:{model:g.CuW.compoundInputNumber},type:g.PUO.number,formatter:g._tQ.dollar,params:{maxDecimal:2}},{id:"quantity",name:"Quantity",field:"quantity",filterable:!0,sortable:!0,minWidth:70,width:70,filter:{model:g.CuW.compoundInputNumber},type:g.PUO.number},{id:"amount",name:"Amount",field:"amount",filterable:!0,sortable:!0,minWidth:70,width:60,filter:{model:g.CuW.compoundInputNumber},type:g.PUO.number,formatter:g._tQ.dollar,params:{maxDecimal:2},groupTotalsFormatter:g.tao.sumTotalsDollarBold},{id:"historic",name:"Price History",field:"historic",minWidth:100,width:150,maxWidth:150,formatter:E},{id:"execution",name:"Execution Timestamp",field:"execution",filterable:!0,sortable:!0,minWidth:125,formatter:g._tQ.dateTimeIsoAmPm,exportWithFormatter:!0,type:g.PUO.dateTimeIsoAM_PM,filter:{model:g.CuW.compoundDate}}],this.gridOptions={autoResize:{container:".trading-platform",rightPadding:0,bottomPadding:10},formatterOptions:{displayNegativeNumberWithParentheses:!0,thousandSeparator:","},draggableGrouping:{dropPlaceHolderText:"Drop a column header here to group by any of these available columns: Currency, Market or Type",deleteIconCssClass:"mdi mdi-close text-color-danger",sortAscIconCssClass:"mdi mdi-arrow-up",sortDescIconCssClass:"mdi mdi-arrow-down"},enableDraggableGrouping:!0,createPreHeaderPanel:!0,darkMode:this._darkMode,showPreHeaderPanel:!0,preHeaderPanelHeight:40,enableCellNavigation:!0,enableFiltering:!0,cellHighlightCssClass:"changed"}}getData(){const e=[];for(let t=0;t<200;t++){const n=Math.round(100*Math.random()),i=this.randomNumber(1,50),a=this.randomNumber(125,255),r=this.randomNumber(-25,35,!1),o=this.randomNumber(r,300),l=o<5?a:i,s=o*l,d=new Date;d.setHours(9,30,0);const c=Math.floor(10*Math.random())%2?"CAD":"USD",u=m.a.company.name();e[t]={id:t,currency:c,trsnType:Math.round(100*Math.random())%2?"Buy":"Sell",company:u,symbol:"CAD"===c?u.substr(0,3).toUpperCase()+".TO":u.substr(0,4).toUpperCase(),market:"CAD"===c?"TSX":o>200?"Nasdaq":"S&P 500",duration:t%33==0?null:100*Math.random()+"",percentCompleteNumber:n,priceChange:r,price:o,quantity:l,amount:s,execution:d,historic:[o]}}this.dataset=e}startSimulation(){const e={},t=this.randomNumber(this.minChangePerCycle,this.maxChangePerCycle);for(let n=0;n<t;n++){const t=this.randomNumber(1,50),n=this.randomNumber(125,255),i=Math.round(Math.random()*(this.dataset.length-1)),a=this.randomNumber(-25,25,!1),r=(0,g.A4q)(this.dataset[i]),o={...this.dataset[i]};o.priceChange=a,o.price=o.price+a<0?0:o.price+a,o.quantity=o.price<5?n:t,o.amount=o.price*o.quantity,o.trsnType=Math.round(100*Math.random())%2?"Buy":"Sell",o.execution=new Date,o.historic.push(o.price),o.historic=o.historic.slice(-20),e[i]||(e[i]={}),e[i].id="changed",this.renderCellHighlighting(o,this.findColumnById("priceChange"),a),(r.priceChange<0&&o.priceChange>0||r.priceChange>0&&o.priceChange<0)&&this.renderCellHighlighting(o,this.findColumnById("price"),a),this.aureliaGrid.dataView.updateItem(o.id,o)}this.timer=setTimeout(this.startSimulation.bind(this),this.refreshRate||0)}stopSimulation(){clearTimeout(this.timer)}findColumnById(e){return this.columnDefinitions.find((t=>t?.field===e))}renderCellHighlighting(e,t,n){if(e&&t){const i=this.aureliaGrid.dataView.getRowByItem(e);if(i>=0){const a={[i]:{[t.id]:n>=0?"changed-gain":"changed-loss"}};this.aureliaGrid.slickGrid.setCellCssStyles(`highlight_${[t.id]}${i}`,a),setTimeout((()=>this.removeUnsavedStylingFromCell(e,t,i)),this.highlightDuration)}}}removeUnsavedStylingFromCell(e,t,n){this.aureliaGrid.slickGrid.removeCellCssStyles(`highlight_${[t.id]}${n}`)}toggleFullScreen(){const e=document.querySelector(".trading-platform");e?.classList.contains("full-screen")?(e.classList.remove("full-screen"),this.isFullScreen=!1):e&&(e.classList.add("full-screen"),this.isFullScreen=!0),this.aureliaGrid.resizerService.resizeGrid()}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.aureliaGrid.slickGrid?.setOptions({darkMode:this._darkMode})}toggleBodyBackground(){this._darkMode?(document.querySelector(".panel-wm-content").classList.add("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="dark"):(document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light")}randomNumber(e,t,n=!0){const i=Math.random()*(t-e+1)+e;return n?Math.floor(i):i}},o=t,"symbol"==typeof(l="Example34")&&(l=l.description?"[".concat(l.description,"]"):""),Object.defineProperty(o,"name",{configurable:!0,value:s?"".concat(s," ",l):l}),(()=>{const i="function"==typeof Symbol&&Symbol.metadata?Object.create(null):void 0;(function(e,t,n,i,a,r){function o(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected");return e}for(var l,s=i.kind,d="getter"===s?"get":"setter"===s?"set":"value",c=!t&&e?i.static?e:e.prototype:null,u=t||(c?Object.getOwnPropertyDescriptor(c,i.name):{}),m=!1,p=n.length-1;p>=0;p--){var h={};for(var g in i)h[g]="access"===g?{}:i[g];for(var g in i.access)h.access[g]=i.access[g];h.addInitializer=function(e){if(m)throw new TypeError("Cannot add initializers after decoration has completed");r.push(o(e||null))};var f=(0,n[p])("accessor"===s?{get:u.get,set:u.set}:u[d],h);if("accessor"===s){if(void 0===f)continue;if(null===f||"object"!=typeof f)throw new TypeError("Object expected");(l=o(f.get))&&(u.get=l),(l=o(f.set))&&(u.set=l),(l=o(f.init))&&a.unshift(l)}else(l=o(f))&&("field"===s?a.unshift(l):u[d]=l)}c&&Object.defineProperty(c,i.name,u),m=!0})(null,e={value:t},n,{kind:"class",name:t.name,metadata:i},null,r),t=e.value,i&&Object.defineProperty(t,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:i}),function(e,t,n){for(var i=arguments.length>2,a=0;a<t.length;a++)n=i?t[a].call(e,n):t[a].call(e)}(t,r)})(),t;var o,l,s})()},2327:e=>{e.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){var i=n(2),a=n(3),r=n(4);e.exports=function(e){return i(e)||a(e)||r()}},function(e,t,n){"use strict";n.r(t),n.d(t,"sparkline",(function(){return s}));var i=n(0),a=n.n(i);function r(e,t,n,i){return parseFloat((t-i*t/e+n).toFixed(2))}function o(e){return e.value}function l(e,t){var n=document.createElementNS("http://www.w3.org/2000/svg",e);for(var i in t)n.setAttribute(i,t[i]);return n}function s(e,t,n){var i;if(i=e,a()(i.querySelectorAll("*")).forEach((function(e){return i.removeChild(e)})),!(t.length<=1)){n=n||{},"number"==typeof t[0]&&(t=t.map((function(e){return{value:e}})));var s=n.onmousemove,d=n.onmouseout,c="interactive"in n?n.interactive:!!s,u=n.spotRadius||2,m=2*u,p=n.cursorWidth||2,h=parseFloat(e.attributes["stroke-width"].value),g=n.fetch||o,f=t.map((function(e){return g(e)})),b=parseFloat(e.attributes.width.value)-2*m,y=parseFloat(e.attributes.height.value),v=y-2*h-m,x=Math.max.apply(Math,a()(f)),k=-1e3,C=f.length-1,w=b/C,S=[],T=r(x,v,h+u,f[0]),M="M".concat(m," ").concat(T);f.forEach((function(e,n){var i=n*w+m,a=r(x,v,h+u,e);S.push(Object.assign({},t[n],{index:n,x:i,y:a})),M+=" L ".concat(i," ").concat(a)}));var P=l("path",{class:"sparkline--line",d:M,fill:"none"}),A=l("path",{class:"sparkline--fill",d:"".concat(M," V ").concat(y," L ").concat(m," ").concat(y," Z"),stroke:"none"});if(e.appendChild(A),e.appendChild(P),c){var D=l("line",{class:"sparkline--cursor",x1:k,x2:k,y1:0,y2:y,"stroke-width":p}),O=l("circle",{class:"sparkline--spot",cx:k,cy:k,r:u});e.appendChild(D),e.appendChild(O);var N=l("rect",{width:e.attributes.width.value,height:e.attributes.height.value,style:"fill: transparent; stroke: transparent",class:"sparkline--interaction-layer"});e.appendChild(N),N.addEventListener("mouseout",(function(e){D.setAttribute("x1",k),D.setAttribute("x2",k),O.setAttribute("cx",k),d&&d(e)})),N.addEventListener("mousemove",(function(e){var t=e.offsetX,n=S.find((function(e){return e.x>=t}));n||(n=S[C]);var i,a=S[S.indexOf(n)-1],r=(i=a?a.x+(n.x-a.x)/2<=t?n:a:n).x,o=i.y;O.setAttribute("cx",r),O.setAttribute("cy",o),D.setAttribute("x1",r),D.setAttribute("x2",r),s&&s(e,i)}))}}}t.default=s},function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}}])},5711:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var i=n(1601),a=n.n(i),r=n(6314),o=n.n(r)()(a());o.push([e.id,".trading-platform.full-screen{position:absolute;top:0;left:0;right:0;bottom:0;padding:10px 12px 0 10px;background-color:#fff;z-index:1040;position:fixed}.changed-gain{background-color:#eafae8 !important}.changed-loss{background-color:#ffeae8 !important}.simulation-form input[type=number]{height:32px;width:50px;border:1px solid silver;border-radius:3px}.simulation-form div.range{display:contents;width:200px}.simulation-form div.range label.form-label{margin:0}.simulation-form div.range input.form-range{width:120px}.simulation-form .refresh-rate input{height:30px;width:46px}.sparkline{stroke:#00b78d;fill:rgba(0,183,141,.05)}*[hidden]{display:none}.trading-tooltip{position:absolute;background:rgba(0,0,0,.7);color:#fff;padding:2px 5px;font-size:12px;white-space:nowrap;z-index:9999}.slick-dark-mode .text-success,.dark-mode .text-success{color:#42b47f !important}.slick-dark-mode .changed-gain,.dark-mode .changed-gain{background-color:rgba(0,255,0,.1137254902) !important}.slick-dark-mode .changed-loss,.dark-mode .changed-loss{background-color:rgba(255,0,0,.1058823529) !important}.slick-dark-mode .trading-platform.full-screen,.dark-mode .trading-platform.full-screen{background-color:#33393e}",""]);const l=o},9774:(e,t,n)=>{"use strict";var i=n(1601),a=n.n(i),r=n(6314);n.n(r)()(a()).push([e.id,".trading-platform.full-screen{position:absolute;top:0;left:0;right:0;bottom:0;padding:10px 12px 0 10px;background-color:#fff;z-index:1040;position:fixed}.changed-gain{background-color:#eafae8 !important}.changed-loss{background-color:#ffeae8 !important}.simulation-form input[type=number]{height:32px;width:50px;border:1px solid silver;border-radius:3px}.simulation-form div.range{display:contents;width:200px}.simulation-form div.range label.form-label{margin:0}.simulation-form div.range input.form-range{width:120px}.simulation-form .refresh-rate input{height:30px;width:46px}.sparkline{stroke:#00b78d;fill:rgba(0,183,141,.05)}*[hidden]{display:none}.trading-tooltip{position:absolute;background:rgba(0,0,0,.7);color:#fff;padding:2px 5px;font-size:12px;white-space:nowrap;z-index:9999}.slick-dark-mode .text-success,.dark-mode .text-success{color:#42b47f !important}.slick-dark-mode .changed-gain,.dark-mode .changed-gain{background-color:rgba(0,255,0,.1137254902) !important}.slick-dark-mode .changed-loss,.dark-mode .changed-loss{background-color:rgba(255,0,0,.1058823529) !important}.slick-dark-mode .trading-platform.full-screen,.dark-mode .trading-platform.full-screen{background-color:#33393e}",""])}}]);