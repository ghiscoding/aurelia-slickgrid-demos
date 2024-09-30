"use strict";(self.webpackChunkau_slickgrid_demo=self.webpackChunkau_slickgrid_demo||[]).push([[5281],{7662:(e,t,i)=>{i.r(t),i.d(t,{Example29:()=>b});var n={};i.r(n),i.d(n,{CustomFooter:()=>o});var a={};i.r(a),i.d(a,{bindables:()=>f,default:()=>c,dependencies:()=>d,name:()=>s,register:()=>m,template:()=>l});var r=i(5394);let o=(()=>{let e,t,i=[(0,r.EMX)({name:"custom-footer",template:'<button click.trigger="clickMe()">I\'m a button from an Aurelia custom element (click me)</button>\n  <div if.bind="clickedTimes">You\'ve clicked me ${clickedTimes} time(s)</div>'})],n=[];return t=class{constructor(){this.clickedTimes=0}clickMe(){this.clickedTimes++}},a=t,"symbol"==typeof(o="CustomFooter")&&(o=o.description?"[".concat(o.description,"]"):""),Object.defineProperty(a,"name",{configurable:!0,value:s?"".concat(s," ",o):o}),(()=>{const a="function"==typeof Symbol&&Symbol.metadata?Object.create(null):void 0;(function(e,t,i,n,a,r){function o(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected");return e}for(var s,l=n.kind,c="getter"===l?"get":"setter"===l?"set":"value",d=!t&&e?n.static?e:e.prototype:null,f=t||(d?Object.getOwnPropertyDescriptor(d,n.name):{}),u=!1,m=i.length-1;m>=0;m--){var h={};for(var p in n)h[p]="access"===p?{}:n[p];for(var p in n.access)h.access[p]=n.access[p];h.addInitializer=function(e){if(u)throw new TypeError("Cannot add initializers after decoration has completed");r.push(o(e||null))};var b=(0,i[m])("accessor"===l?{get:f.get,set:f.set}:f[c],h);if("accessor"===l){if(void 0===b)continue;if(null===b||"object"!=typeof b)throw new TypeError("Object expected");(s=o(b.get))&&(f.get=s),(s=o(b.set))&&(f.set=s),(s=o(b.init))&&a.unshift(s)}else(s=o(b))&&("field"===l?a.unshift(s):f[c]=s)}d&&Object.defineProperty(d,n.name,f),u=!0})(null,e={value:t},i,{kind:"class",name:t.name,metadata:a},null,n),t=e.value,a&&Object.defineProperty(t,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:a}),function(e,t,i){for(var n=arguments.length>2,a=0;a<t.length;a++)i=n?t[a].call(e,i):t[a].call(e)}(t,n)})(),t;var a,o,s})();const s="example29",l='\n<h2>\n  ${title}\n  <span class="float-end">\n    <a style="font-size: 18px"\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example29.ts">\n      <span class="mdi mdi-link-variant"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle"\n      innerhtml.bind="subTitle"></div>\n\n\n<aurelia-slickgrid grid-id="grid"\n                    column-definitions.bind="columnDefinitions"\n                    grid-options.bind="gridOptions"\n                    dataset.bind="dataset">\n  <div au-slot="slickgrid-header" class="custom-header-slot">\n    <h3>Grid with header and footer slot</h3>\n  </div>\n  <custom-footer class="custom-footer-slot"\n                  au-slot="slickgrid-footer">\n  </custom-footer>\n</aurelia-slickgrid>\n',c=l,d=[n],f={};let u;function m(e){u||(u=r.K94.define({name:s,template:l,dependencies:d,bindables:f})),e.register(u)}var h=i(8211),p=(i(6757),function(e,t,i,n,a,r){function o(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected");return e}for(var s,l=n.kind,c="getter"===l?"get":"setter"===l?"set":"value",d=!t&&e?n.static?e:e.prototype:null,f=t||(d?Object.getOwnPropertyDescriptor(d,n.name):{}),u=!1,m=i.length-1;m>=0;m--){var h={};for(var p in n)h[p]="access"===p?{}:n[p];for(var p in n.access)h.access[p]=n.access[p];h.addInitializer=function(e){if(u)throw new TypeError("Cannot add initializers after decoration has completed");r.push(o(e||null))};var b=(0,i[m])("accessor"===l?{get:f.get,set:f.set}:f[c],h);if("accessor"===l){if(void 0===b)continue;if(null===b||"object"!=typeof b)throw new TypeError("Object expected");(s=o(b.get))&&(f.get=s),(s=o(b.set))&&(f.set=s),(s=o(b.init))&&a.unshift(s)}else(s=o(b))&&("field"===l?a.unshift(s):f[c]=s)}d&&Object.defineProperty(d,n.name,f),u=!0});let b=(()=>{let e,t,i=[(0,r.EMX)(a)],n=[];return t=class{constructor(){this.title="Example 29: Grid with Header and Footer slot",this.subTitle="Simple Grids with a custom header and footer via named slots",this.columnDefinitions=[],this.dataset=[],this.defineGrids()}attached(){this.dataset=this.mockData(995)}defineGrids(){this.columnDefinitions=[{id:"title",name:"Title",field:"title",sortable:!0,minWidth:100},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,minWidth:100},{id:"%",name:"% Complete",field:"percentComplete",sortable:!0,minWidth:100},{id:"start",name:"Start",field:"start",formatter:h._tQ.dateIso},{id:"finish",name:"Finish",field:"finish",formatter:h._tQ.dateIso},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",sortable:!0,minWidth:100}],this.gridOptions={enableAutoResize:!1,enableSorting:!0,gridHeight:225,gridWidth:800}}mockData(e){const t=[];for(let i=0;i<e;i++){const e=2e3+Math.floor(10*Math.random()),n=Math.floor(11*Math.random()),a=Math.floor(29*Math.random()),r=Math.round(100*Math.random());t[i]={id:i,title:"Task "+i,duration:Math.round(100*Math.random())+"",percentComplete:r,start:new Date(e,n+1,a),finish:new Date(e+1,n+1,a),effortDriven:i%5==0}}return t}},o=t,"symbol"==typeof(s="Example29")&&(s=s.description?"[".concat(s.description,"]"):""),Object.defineProperty(o,"name",{configurable:!0,value:l?"".concat(l," ",s):s}),(()=>{const a="function"==typeof Symbol&&Symbol.metadata?Object.create(null):void 0;p(null,e={value:t},i,{kind:"class",name:t.name,metadata:a},null,n),t=e.value,a&&Object.defineProperty(t,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:a}),function(e,t,i){for(var n=arguments.length>2,a=0;a<t.length;a++)i=n?t[a].call(e,i):t[a].call(e)}(t,n)})(),t;var o,s,l})()}}]);