"use strict";(self.webpackChunkaurelia_slickgrid_demo_bs5=self.webpackChunkaurelia_slickgrid_demo_bs5||[]).push([[672],{2975:(e,t,s)=>{s.d(t,{A:()=>h});var i=s(1601),n=s.n(i),r=s(6314),a=s.n(r)()(n());a.push([e.id,".tab-content{padding:10px}",""]);const h=a},3291:(e,t,s)=>{s.r(t),s.d(t,{Example22:()=>q});var i={};s.r(i),s.d(i,{default:()=>o,dependencies:()=>c,name:()=>a,register:()=>d,template:()=>h});var n=s(5394),r=s(2975);const a="example22",h='<h2>\n  ${title}\n  <span class="float-end">\n    <a style="font-size: 18px"\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example22.ts">\n      <span class="mdi mdi-link-variant"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle"\n      innerhtml.bind="subTitle"></div>\n\n<div>\n  <nav>\n    <div class="nav nav-tabs" id="nav-tab" role="tablist">\n      <button\n          class="nav-link active"\n          id="javascript-tab"\n          data-bs-toggle="tab"\n          data-bs-target="#javascript"\n          type="button"\n          role="tab"\n          aria-controls="javascript"\n          aria-selected="true">\n        JavaScript\n      </button>\n      <button\n          class="nav-link"\n          id="fetch-tab"\n          data-bs-toggle="tab"\n          data-bs-target="#fetch"\n          type="button"\n          role="tab"\n          aria-controls="fetch"\n          aria-selected="false"\n          click.trigger="resizeGrid2()">\n        Fetch-Client\n      </button>\n    </div>\n  </nav>\n  <div class="tab-content" id="nav-tabContent">\n    <div class="tab-pane fade show active" id="javascript" role="tabpanel" aria-labelledby="javascript-tab" tabindex="0">\n      <h4>Grid 1 - Load Local Data</h4>\n      <aurelia-slickgrid grid-id="grid1"\n                          column-definitions.bind="columnDefinitions1"\n                          grid-options.bind="gridOptions1"\n                          dataset.bind="dataset1">\n      </aurelia-slickgrid>\n    </div>\n    <div class="tab-pane fade" id="fetch" role="tabpanel" aria-labelledby="fetch-tab" tabindex="0">\n      <h4>Grid 2 - Load a JSON dataset through Fetch-Client</h4>\n      <aurelia-slickgrid grid-id="grid2"\n                          column-definitions.bind="columnDefinitions2"\n                          grid-options.bind="gridOptions2"\n                          dataset.bind="dataset2"\n                          on-aurelia-grid-created.trigger="aureliaGrid2Ready($event.detail)">\n      </aurelia-slickgrid>\n    </div>\n  </div>\n</div>\n',o=h,c=[];let l;function d(e){l||(l=n.K94.define({name:a,template:h,dependencies:c})),e.register(l)}var u=s(8880),f=s(7557),p=s(3492),g=s(5072),b=s.n(g),m=s(7825),y=s.n(m),v=s(7659),C=s.n(v),R=s(5056),w=s.n(R),k=s(540),T=s.n(k),x=s(1113),I=s.n(x),E={};E.styleTagTransform=I(),E.setAttributes=w(),E.insert=C().bind(null,"head"),E.domAPI=y(),E.insertStyleElement=T(),b()(r.A,E),r.A&&r.A.locals&&r.A.locals,s(6757);class q{constructor(e=(0,f.hd)((0,f.pn)(u.xl))){this.http=e,this.title="Example 22: Grids in Bootstrap Tabs",this.subTitle='This example demonstrate the creation of multiple grids in Bootstrap Tabs\n   <ol>\n    <li>Regular mocked data with javascript</li>\n    <li>Load dataset through Fetch-Client. Also note we need to call a "resizeGrid()" after focusing on this tab</li>\n  </ol>',this.columnDefinitions1=[],this.columnDefinitions2=[],this.dataset1=[],this.dataset2=[],this.defineGrid1(),this.defineGrid2()}aureliaGrid2Ready(e){this.aureliaGrid2=e}async attached(){this.dataset1=this.mockData();const e=await this.http.fetch("assets/data/customers_100.json");this.dataset2=await e.json()}defineGrid1(){this.columnDefinitions1=[{id:"title",name:"Title",field:"title",sortable:!0,minWidth:100},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,minWidth:100},{id:"%",name:"% Complete",field:"percentComplete",sortable:!0,minWidth:100},{id:"start",name:"Start",field:"start",minWidth:100},{id:"finish",name:"Finish",field:"finish",minWidth:100},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",sortable:!0,minWidth:100}],this.gridOptions1={enableAutoResize:!0,autoResize:{container:"#demo-container",rightPadding:10},enableSorting:!0}}defineGrid2(){this.columnDefinitions2=[{id:"name",name:"Name",field:"name",filterable:!0,sortable:!0},{id:"gender",name:"Gender",field:"gender",filterable:!0,sortable:!0,filter:{model:p.CuW.singleSelect,collection:[{value:"",label:""},{value:"male",label:"male"},{value:"female",label:"female"}]}},{id:"company",name:"Company",field:"company",filterable:!0,sortable:!0}],this.gridOptions2={enableAutoResize:!0,autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:!0,enableSorting:!0}}mockData(){const e=[];for(let t=0;t<1e3;t++){const s=2e3+Math.floor(10*Math.random()),i=Math.floor(11*Math.random()),n=Math.floor(29*Math.random()),r=Math.round(100*Math.random());e[t]={id:t,title:"Task "+t,duration:Math.round(100*Math.random())+"",percentComplete:r,start:`${i}/${n}/${s}`,finish:`${i}/${n}/${s}`,effortDriven:t%5==0}}return e}resizeGrid2(){this.aureliaGrid2.resizerService.resizeGrid(10)}}n.K94.define(i,q)},8880:(e,t,s)=>{s.d(t,{Pq:()=>n,xl:()=>d});var i=s(7557);function n(e,t){return JSON.stringify(void 0!==e?e:{},t)}class r{constructor(){this.cache=new Map,this.delete=e=>this.cache.delete(e),this.has=e=>this.cache.has(e),this.set=(e,t)=>this.cache.set(e,t),this.get=e=>this.cache.get(e),this.clear=()=>this.cache.clear()}}const a=i.DI.createInterface((e=>e.singleton(r)));class h{constructor(){this.baseUrl="",this.defaults={},this.interceptors=[],this.dispatcher=null,this.c=(0,i.hd)(i.p7)}withBaseUrl(e){return this.baseUrl=e,this}withDefaults(e){return this.defaults=e,this}withInterceptor(e){return this.interceptors.push(e),this}useStandardConfiguration(){return Object.assign(this.defaults,{credentials:"same-origin"},this.defaults),this.rejectErrorResponses()}rejectErrorResponses(){return this.withInterceptor({response:o})}withRetry(e){const t=this.c.invoke(I,[e]);return this.withInterceptor(t)}withDispatcher(e){return this.dispatcher=e,this}}function o(e){if(!e.ok)throw e;return e}const c=/^([a-z][a-z0-9+\-.]*:)?\/\//i,l=i.DI.createInterface("fetch",(e=>{if("function"!=typeof fetch)throw new Error("Could not resolve fetch function. Please provide a fetch function implementation or a polyfill for the global fetch function.");return e.instance(fetch)})),d=i.DI.createInterface("IHttpClient",(e=>e.aliasTo(u)));class u{constructor(){this.activeRequestCount=0,this.isRequesting=!1,this.isConfigured=!1,this.baseUrl="",this.defaults=null,this.t=[],this.i=null,this.h=(0,i.hd)((0,i.P9)(h)),this.u=(0,i.hd)(l)}get interceptors(){return this.t.slice(0)}configure(e){let t;if("object"==typeof e)t={defaults:e};else{if("function"!=typeof e)throw new Error("invalid config, expecting a function or an object, received "+typeof e);{t=this.h(),t.baseUrl=this.baseUrl,t.defaults={...this.defaults},t.interceptors=this.t,t.dispatcher=this.i;const s=e(t);if(null!=s){if("object"!=typeof s)throw new Error("The config callback did not return a valid HttpClientConfiguration like instance. Received "+typeof s);t=s}}}const s=t.defaults;if(s?.headers instanceof Headers)throw new Error("Default headers must be a plain object.");const i=t.interceptors;if(i?.length>0){if(i.filter((e=>e instanceof I)).length>1)throw new Error("Only one RetryInterceptor is allowed.");const e=i.findIndex((e=>e instanceof I));if(e>=0&&e!==i.length-1)throw new Error("The retry interceptor must be the last interceptor defined.")}return this.baseUrl=t.baseUrl,this.defaults=s,this.t=t.interceptors??[],this.i=t.dispatcher,this.isConfigured=!0,this}fetch(e,t){this.C();let s=this.buildRequest(e,t);return this.processRequest(s,this.t).then((e=>{let t;if(e instanceof Response)t=Promise.resolve(e);else{if(!(e instanceof Request))throw new Error(`An invalid result was returned by the interceptor chain. Expected a Request or Response instance, but got [${e}]`);s=e,t=this.u.call(void 0,s)}return this.processResponse(t,this.t,s)})).then((e=>e instanceof Request?this.fetch(e):e)).then((e=>(this.R(),e)),(e=>{throw this.R(),e}))}buildRequest(e,t){const s=this.defaults??{};let i,n,r;const a=function(e){const t={},s=e??{};for(const e of Object.keys(s))t[e]="function"==typeof s[e]?s[e]():s[e];return t}(s.headers);if(e instanceof Request)i=e,r=new Headers(i.headers).get("Content-Type");else{t||(t={}),n=t.body;const a=void 0!==n?{body:n}:null,h={...s,headers:{},...t,...a};r=new Headers(h.headers).get("Content-Type"),i=new Request(f(this.baseUrl,e),h)}return r||(new Headers(a).has("content-type")?i.headers.set("Content-Type",new Headers(a).get("content-type")):void 0!==n&&function(e){try{JSON.parse(e)}catch(e){return!1}return!0}(n)&&i.headers.set("Content-Type","application/json")),function(e,t){const s=t??{};for(const t of Object.keys(s))e.has(t)||e.set(t,s[t])}(i.headers,a),n instanceof Blob&&n.type&&i.headers.set("Content-Type",n.type),i}get(e,t){return this.fetch(e,t)}post(e,t,s){return this.I(e,t,s,"POST")}put(e,t,s){return this.I(e,t,s,"PUT")}patch(e,t,s){return this.I(e,t,s,"PATCH")}delete(e,t,s){return this.I(e,t,s,"DELETE")}dispose(){this.t.forEach((e=>e.dispose?.())),this.t.length=0,this.i=null}C(){this.isRequesting=!!++this.activeRequestCount,this.isRequesting&&null!=this.i&&b(this.i,m.started)}R(){this.isRequesting=!! --this.activeRequestCount,this.isRequesting||null==this.i||b(this.i,m.drained)}processRequest(e,t){return this.B(e,t,"request","requestError",Request,this)}processResponse(e,t,s){return this.B(e,t,"response","responseError",Response,s,this)}B(e,t,s,i,n,...r){return(t??[]).reduce(((e,t)=>{const a=t[s],h=t[i];return e.then(a?e=>e instanceof n?a.call(t,e,...r):e:p,h?e=>h.call(t,e,...r):g)}),Promise.resolve(e))}I(e,t,s,i){return s||(s={}),s.method=i,null!=t&&(s.body=t),this.fetch(e,s)}}function f(e,t){return c.test(t)?t:(e??"")+t}function p(e){return e}function g(e){throw e}function b(e,t){const s=new e.ownerDocument.defaultView.CustomEvent(t,{bubbles:!0,cancelable:!0});setTimeout((()=>{e.dispatchEvent(s)}),1)}const m=Object.freeze({started:"aurelia-fetch-client-request-started",drained:"aurelia-fetch-client-requests-drained"}),y=i.DI.createInterface((e=>e.singleton(C))),v=Object.freeze({Set:"au:fetch:cache:set",Get:"au:fetch:cache:get",Clear:"au:fetch:cache:clear",Reset:"au:fetch:cache:reset",Dispose:"au:fetch:cache:dispose",CacheHit:"au:fetch:cache:hit",CacheMiss:"au:fetch:cache:miss",CacheStale:"au:fetch:cache:stale",CacheStaleRefreshed:"au:fetch:cache:stale:refreshed",CacheExpired:"au:fetch:cache:expired",CacheBackgroundRefreshed:"au:fetch:cache:background:refreshed",CacheBackgroundRefreshing:"au:fetch:cache:background:refreshing",CacheBackgroundStopped:"au:fetch:cache:background:stopped"});class C{constructor(){this.storage=(0,i.hd)(a),this.p=(0,i.hd)(i.r_),this.ea=(0,i.hd)(i.xe),this.q=(0,i.hd)(d),this.H=[],this.O=-1,this.j=[],this.T=new Map}subscribe(e,t){const s=this.ea.subscribe(e,t);return this.H.push(s),s}subscribeOnce(e,t){const s=this.ea.subscribeOnce(e,t);return this.H.push(s),s}setStaleTimer(e,t,s){const i=this.p.setTimeout((async()=>{this.delete(e),await this.q.get(s);const t=this.getItem(e);this.ea.publish(v.CacheStaleRefreshed,{key:e,value:t}),this.P(i)}),t);this.j.push(i)}startBackgroundRefresh(e){!e||this.O>-1||(this.O=this.p.setInterval((()=>{this.ea.publish(v.CacheBackgroundRefreshing),this.T.forEach(((e,t)=>{this.delete(t),this.q.get(e).then((()=>{const e=this.getItem(t);this.ea.publish(v.CacheBackgroundRefreshed,{key:t,value:e})}))}))}),e))}stopBackgroundRefresh(){this.p.clearInterval(this.O),this.O=-1,this.ea.publish(v.CacheBackgroundStopped)}set(e,t,s,i){const n={data:t,...s};this.setItem(e,n,i)}get(e){return this.getItem(e)?.data}setItem(e,t,s){t.lastCached=Date.now(),this.storage.set(e,t),this.T.set(e,s),this.ea.publish(v.Set,{key:e,value:t})}getItem(e){if(!this.storage.has(e))return void this.ea.publish(v.CacheMiss,{key:e});const t=this.storage.get(e);if(!t?.staleTime||!t?.lastCached)return this.ea.publish(v.CacheHit,{key:e,value:t}),t;const s=Date.now();if(s>t.lastCached+(t.staleTime??0))this.ea.publish(v.CacheStale,{key:e,value:t});else{if(!(s>t.lastCached+(t.cacheTime??0)))return this.ea.publish(v.CacheHit,{key:e,value:t}),t;this.ea.publish(v.CacheExpired,{key:e,value:t})}}delete(e){this.storage.delete(e),this.ea.publish(v.Clear,{key:e})}clear(){this.storage.clear(),this.T.clear(),this.ea.publish(v.Reset),this.stopBackgroundRefresh(),this.j.forEach((e=>{this.p.clearTimeout(e)})),this.j.length=0}dispose(){this.clear(),this.H.forEach((e=>e.dispose())),this.ea.publish(v.Dispose)}P(e){this.p.clearTimeout(e);const t=this.j.indexOf(e);t>-1&&this.j.splice(t,1)}}const R={cacheTime:3e5,staleTime:0,refreshStaleImmediate:!1,refreshInterval:0};class w{constructor(e){this.N=(0,i.hd)(y),this.cf={...R,...e??{}}}request(e){if(this.N.startBackgroundRefresh(this.cf.refreshInterval),"GET"!==e.method)return e;const t=this.N.get(this.key(e));return this.mark(t)??e}response(e,t){if(!t)return e;if(e.headers.has(w.cacheHeader))return e;const s=this.key(t);return this.N.setItem(s,{data:e,...this.cf},t),this.cf?.refreshStaleImmediate&&this.cf.staleTime>0&&this.N.setStaleTimer(s,this.cf.staleTime,t),e}dispose(){this.N.stopBackgroundRefresh()}key(e){return`${w.prefix}${e.url}`}mark(e){return e?.headers.set(w.cacheHeader,"hit"),e}}w.prefix="au:interceptor:",w.cacheHeader="x-au-fetch-cache";class k{constructor(){this.cache=(0,i.hd)(i.r_).globalThis.indexedDB,this.getStore=()=>this.database.transaction(k.cacheName,"readwrite").objectStore(k.cacheName),this.delete=e=>{this.getStore().delete(e)},this.has=e=>this.getStore().count(e).result>0,this.set=(e,t)=>this.getStore().put(t,e),this.get=e=>this.getStore().get(e).result,this.clear=()=>{const e=this.getStore();e.getAllKeys().result.forEach((t=>{e.delete(t)}))},this.database=this.cache.open(k.cacheName).result}}k.cacheName="au-cache";const T=Object.freeze({fixed:0,incremental:1,exponential:2,random:3}),x={maxRetries:3,interval:1e3,strategy:T.fixed};class I{constructor(e){if(this.p=(0,i.hd)(i.r_),this.retryConfig={...x,...e??{}},this.retryConfig.strategy===T.exponential&&this.retryConfig.interval<=1e3)throw new Error("An interval less than or equal to 1 second is not allowed when using the exponential retry strategy")}request(e){return e.retryConfig||(e.retryConfig={...this.retryConfig},e.retryConfig.counter=0),e.retryConfig.requestClone=e.clone(),e}response(e,t){return delete t.retryConfig,e}responseError(e,t,s){const{retryConfig:i}=t,{requestClone:n}=i;return Promise.resolve().then((()=>{if(i.counter<i.maxRetries){const r=null==i.doRetry||i.doRetry(e,t);return Promise.resolve(r).then((r=>{if(r){i.counter++;const e=function(e){const{interval:t,strategy:s,minRandomInterval:i,maxRandomInterval:n,counter:r}=e;if("function"==typeof s)return e.strategy(r);switch(s){case T.fixed:return E[T.fixed](t);case T.incremental:return E[T.incremental](r,t);case T.exponential:return E[T.exponential](r,t);case T.random:return E[T.random](r,t,i,n);default:throw new Error("Unrecognized retry strategy")}}(i);return new Promise((t=>this.p.setTimeout(t,isNaN(e)?0:e))).then((()=>{const e=n.clone();return"function"==typeof i.beforeRetry?i.beforeRetry(e,s):e})).then((e=>{const t={...e,retryConfig:i};return s.fetch(t)}))}throw delete t.retryConfig,e}))}throw delete t.retryConfig,e}))}}const E=[e=>e,(e,t)=>t*e,(e,t)=>1===e?t:t**e/1e3,(e,t,s=0,i=6e4)=>Math.random()*(i-s)+s]}}]);