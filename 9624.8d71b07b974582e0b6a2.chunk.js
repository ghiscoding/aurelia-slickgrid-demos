"use strict";(self.webpackChunkau_slickgrid_demo=self.webpackChunkau_slickgrid_demo||[]).push([[9624],{3800:(e,t,i)=>{i.d(t,{A:()=>d});var n=i(1601),r=i.n(n),a=i(6314),o=i.n(a)()(r());o.push([e.id,".drag-message{position:absolute;display:inline-block;padding:4px 10px;background:#e0e0e0;border:1px solid gray;z-index:99999;border-radius:8px;box-shadow:2px 2px 6px silver}.grid-header{display:flex;align-items:center;box-sizing:border-box;font-weight:bold;height:35px;padding-left:8px;width:100%}.recycle-bin{background:rgba(0,0,0,0);cursor:default;width:120px;border:2px solid #e4e4e4;background:beige;padding:4px;font-size:12pt;font-weight:bold;color:#000;text-align:center;border-radius:10px}.recycle-bin.drag-dropzone{border:2px dashed pink}.recycle-bin.drag-hover{background:pink;cursor:crosshair}",""]);const d=o},7243:(e,t,i)=>{i.r(t),i.d(t,{Example41:()=>S});var n={};i.r(n),i.d(n,{bindables:()=>l,default:()=>d,dependencies:()=>s,name:()=>a,register:()=>g,template:()=>o});var r=i(5394);i(7886);const a="example41",o='<div class="container-fluid">\n  <h2>\n    Example 41: Drag & Drop\n    <span class="float-end">\n      <a style="font-size: 18px" target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example41.ts">\n        <span class="mdi mdi-link-variant"></span> code\n      </a>\n    </span>\n    <button\n      class="ms-2 btn btn-outline-secondary btn-sm btn-icon"\n      type="button"\n      data-test="toggle-subtitle"\n      click.trigger="hideSubTitle = !hideSubTitle"\n    >\n      <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>\n    </button>\n  </h2>\n\n  <div class="subtitle" hidden.bind="hideSubTitle">\n    <ul>\n      <li>Click to select, Ctrl-click to toggle selection(s).</li>\n      <li>Drag one or more rows by the handle icon (1st column) to reorder.</li>\n      <li>Drag one or more rows by selection (2nd or 3rd column) and drag to the recycle bin to delete.</li>\n    </ul>\n  </div>\n\n  <div class="row">\n    <div class="col">\n      <aurelia-slickgrid grid-id="grid41"\n                    column-definitions.bind="columnDefinitions"\n                    grid-options.bind="gridOptions"\n                    dataset.bind="dataset"\n                    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"\n                    on-drag-init.trigger="handleOnDragInit($event.detail.eventData)"\n                    on-drag-start.trigger="handleOnDragStart($event.detail.eventData)"\n                    on-drag.trigger="handleOnDrag($event.detail.eventData, $event.detail.args)"\n                    on-drag-end.trigger="handleOnDragEnd($event.detail.eventData, $event.detail.args)">\n        <div au-slot="slickgrid-header" class="grid-header">\n          <label>Santa\'s TODO list:</label>\n        </div>\n      </aurelia-slickgrid>\n    </div>\n    <div class="col">\n      <div id="dropzone" class="recycle-bin mt-4">\n        Recycle Bin\n      </div>\n    </div>\n  </div>\n</div>\n',d=o,s=[],l={};let c;function g(e){c||(c=r.K9.define({name:a,template:o,dependencies:s,bindables:l})),e.register(c)}var p=i(6670),h=i(5072),u=i.n(h),b=i(7825),m=i.n(b),f=i(7659),v=i.n(f),x=i(5056),w=i.n(x),y=i(540),k=i.n(y),D=i(1113),M=i.n(D),R=i(3800),O={};O.styleTagTransform=M(),O.setAttributes=w(),O.insert=v().bind(null,"head"),O.domAPI=m(),O.insertStyleElement=k(),u()(R.A,O),R.A&&R.A.locals&&R.A.locals,i(6757);let S=(()=>{let e,t,i=[(0,r.EM)(n)],a=[];return t=class{constructor(){this.dataset=[],this.dragRows=[],this.dragMode="",this.hideSubTitle=!1,this.defineGrid(),this.dataset=this.mockData()}aureliaGridReady(e){this.aureliaGrid=e}defineGrid(){this.columnDefinitions=[{id:"name",name:"Name",field:"name",width:300,cssClass:"cell-title"},{id:"complete",name:"Complete",width:60,cssClass:"cell-effort-driven",field:"complete",cannotTriggerInsert:!0,formatter:p._tQ.checkmarkMaterial}],this.gridOptions={enableAutoResize:!1,gridHeight:225,gridWidth:800,rowHeight:33,enableCellNavigation:!0,enableRowSelection:!0,enableRowMoveManager:!0,rowSelectionOptions:{selectActiveRow:!1},rowMoveManager:{columnIndexPosition:0,cancelEditOnDrag:!0,disableRowSelection:!0,hideRowMoveShadow:!1,onBeforeMoveRows:this.onBeforeMoveRows.bind(this),onMoveRows:this.onMoveRows.bind(this)}}}mockData(){return[{id:0,name:"Make a list",complete:!0},{id:1,name:"Check it twice",complete:!1},{id:2,name:"Find out who's naughty",complete:!1},{id:3,name:"Find out who's nice",complete:!1}]}onBeforeMoveRows(e,t){for(const i of t.rows)if(i===t.insertBefore||i===t.insertBefore-1)return e.stopPropagation(),!1;return!0}onMoveRows(e,t){const i=[],n=t.rows,r=t.insertBefore,a=this.dataset.slice(0,r),o=this.dataset.slice(r,this.dataset.length);n.sort(((e,t)=>e-t));for(const e of n)i.push(this.dataset[e]);n.reverse();for(const e of n)e<r?a.splice(e,1):o.splice(e-r,1);this.dataset=a.concat(i.concat(o));const d=[];for(let e=0;e<n.length;e++)d.push(a.length+e);this.aureliaGrid.slickGrid?.resetActiveCell(),this.aureliaGrid.slickGrid?.invalidate()}handleOnDragInit(e){e.stopImmediatePropagation()}handleOnDragStart(e){const t=this.aureliaGrid.slickGrid?.getCellFromEvent(e);if(!t||0===t.cell)return void(this.dragMode="");const i=t.row;if(!this.dataset[i])return;if(p.W9y.isActive())return;e.stopImmediatePropagation(),this.dragMode="recycle";let n=this.aureliaGrid.slickGrid?.getSelectedRows()||[];n.length&&-1!==n.findIndex((e=>e==e))||(n=[i],this.aureliaGrid.slickGrid?.setSelectedRows(n)),this.dragRows=n;const r=n.length,a=document.createElement("span");return a.className="drag-message",a.textContent=`Drag to Recycle Bin to delete ${r} selected row(s)`,this.dragHelper=a,document.body.appendChild(a),document.querySelector("#dropzone")?.classList.add("drag-dropzone"),a}handleOnDrag(e,t){if("recycle"!==this.dragMode)return;this.dragHelper instanceof HTMLElement&&(this.dragHelper.style.top=`${e.pageY+5}px`,this.dragHelper.style.left=`${e.pageX+5}px`);const i=document.querySelector("#dropzone");t.target instanceof HTMLElement&&("dropzone"===t.target.id||t.target===i)?i.classList.add("drag-hover"):i.classList.remove("drag-hover")}handleOnDragEnd(e,t){if("recycle"!=this.dragMode)return;if(this.dragHelper?.remove(),document.querySelector("#dropzone")?.classList.remove("drag-dropzone","drag-hover"),"recycle"!=this.dragMode||"dropzone"!==t.target.id)return;const i=this.dragRows.sort().reverse();for(const e of i)this.dataset.splice(e,1);this.aureliaGrid.slickGrid?.invalidate(),this.aureliaGrid.slickGrid?.setSelectedRows([]),this.dataset=[...this.dataset]}},o=t,"symbol"==typeof(d="Example41")&&(d=d.description?"[".concat(d.description,"]"):""),Object.defineProperty(o,"name",{configurable:!0,value:s?"".concat(s," ",d):d}),(()=>{const n="function"==typeof Symbol&&Symbol.metadata?Object.create(null):void 0;(function(e,t,i,n,r,a){function o(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected");return e}for(var d,s=n.kind,l="getter"===s?"get":"setter"===s?"set":"value",c=!t&&e?n.static?e:e.prototype:null,g=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),p=!1,h=i.length-1;h>=0;h--){var u={};for(var b in n)u[b]="access"===b?{}:n[b];for(var b in n.access)u.access[b]=n.access[b];u.addInitializer=function(e){if(p)throw new TypeError("Cannot add initializers after decoration has completed");a.push(o(e||null))};var m=(0,i[h])("accessor"===s?{get:g.get,set:g.set}:g[l],u);if("accessor"===s){if(void 0===m)continue;if(null===m||"object"!=typeof m)throw new TypeError("Object expected");(d=o(m.get))&&(g.get=d),(d=o(m.set))&&(g.set=d),(d=o(m.init))&&r.unshift(d)}else(d=o(m))&&("field"===s?r.unshift(d):g[l]=d)}c&&Object.defineProperty(c,n.name,g),p=!0})(null,e={value:t},i,{kind:"class",name:t.name,metadata:n},null,a),t=e.value,n&&Object.defineProperty(t,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:n}),function(e,t,i){for(var n=arguments.length>2,r=0;r<t.length;r++)i=n?t[r].call(e,i):t[r].call(e)}(t,a)})(),t;var o,d,s})()},7886:(e,t,i)=>{var n=i(1601),r=i.n(n),a=i(6314);i.n(a)()(r()).push([e.id,".drag-message{position:absolute;display:inline-block;padding:4px 10px;background:#e0e0e0;border:1px solid gray;z-index:99999;border-radius:8px;box-shadow:2px 2px 6px silver}.grid-header{display:flex;align-items:center;box-sizing:border-box;font-weight:bold;height:35px;padding-left:8px;width:100%}.recycle-bin{background:rgba(0,0,0,0);cursor:default;width:120px;border:2px solid #e4e4e4;background:beige;padding:4px;font-size:12pt;font-weight:bold;color:#000;text-align:center;border-radius:10px}.recycle-bin.drag-dropzone{border:2px dashed pink}.recycle-bin.drag-hover{background:pink;cursor:crosshair}",""])}}]);