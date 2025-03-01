"use strict";(self.webpackChunkau_slickgrid_demo=self.webpackChunkau_slickgrid_demo||[]).push([[7662],{3521:(e,t,s)=>{var i=s(1601),r=s.n(i),n=s(6314);s.n(n)()(r()).push([e.id,".demo39 .badge{display:none}.demo39 .badge.fully-loaded{display:inline-flex}",""])},5281:(e,t,s)=>{s.r(t),s.d(t,{Example39:()=>P});var i={};s.r(i),s.d(i,{bindables:()=>c,default:()=>o,dependencies:()=>l,name:()=>n,register:()=>d,template:()=>a});var r=s(5394);s(3521);const n="example39",a='<div class="demo39">\n  <h2>\n    Example 39: GraphQL Backend Service with Infinite Scroll\n    <span class="float-end">\n      <a style="font-size: 18px" target="_blank"\n          href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example39.ts">\n        <span class="mdi mdi-link-variant"></span> code\n      </a>\n    </span>\n  </h2>\n\n  <h6 class="title is-6 italic content">\n    <ul>\n      <li>\n        Infinite scrolling allows the grid to lazy-load rows from the server when reaching the scroll bottom (end) position.\n        In its simplest form, the more the user scrolls down, the more rows get loaded.\n        If we reached the end of the dataset and there is no more data to load, then we\'ll assume to have the entire dataset loaded in memory.\n        This contrast with the regular Pagination approach which will hold only hold data for 1 page at a time.\n      </li>\n      <li>NOTES</li>\n      <ol>\n        <li>\n          <code>presets.pagination</code> is not supported with Infinite Scroll and will revert to the first page,\n          simply because since we keep appending data, we always have to start from index zero (no offset).\n        </li>\n        <li>\n          Pagination is not shown BUT in fact, that is what is being used behind the scene whenever reaching the scroll end (fetching next batch).\n        </li>\n        <li>\n          Also note that whenever the user changes the Sort(s)/Filter(s) it will always reset and go back to zero index (first page).\n        </li>\n      </ol>\n    </ul>\n  </h6>\n\n  <div class="row">\n    <div class="col-sm-5">\n      <div class.bind="status.class" role="alert" data-test="status">\n        <strong>Status: </strong> ${status.text}\n        <span hidden.bind="!processing">\n          <i class="mdi mdi-sync mdi-spin-1s"></i>\n        </span>\n      </div>\n\n      <div class="row">\n        <div class="col-md-12">\n          <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="clear-filters-sorting"\n                  click.trigger="clearAllFiltersAndSorts()" title="Clear all Filters & Sorts">\n            <i class="mdi mdi-filter-remove-outline"></i>\n            Clear all Filter & Sorts\n          </button>\n          <label for="serverdelay" class="ml-4">Server Delay: </label>\n          <input id="serverdelay" type="number" data-test="server-delay" style="width: 55px"\n                value.bind="serverWaitDelay"\n                title="input a fake timer delay to simulate slow server response" />\n        </div>\n      </div>\n\n      <br />\n      <div show.bind="metrics" style="margin: 10px 0px">\n        <b>Metrics:</b>\n        <span>\n        <span>${metrics.endTime | dateFormat: \'DD MMM, h:mm:ss a\'}</span> —\n          <span data-test="itemCount">${metrics.itemCount}</span>\n          of\n          <span data-test="totalItemCount">${metrics.totalItemCount}</span>\n          items\n        </span>\n        <span class="badge rounded-pill text-bg-primary" class.bind="tagDataClass" data-test="data-loaded-tag">All Data Loaded!!!</span>\n      </div>\n    </div>\n\n    <div class="col-sm-7">\n      <div class="alert alert-info" data-test="alert-graphql-query">\n        <strong>GraphQL Query:</strong>\n        <div innerhtml.bind="graphqlQuery" data-test="graphql-query-result"></div>\n      </div>\n    </div>\n  </div>\n\n  <aurelia-slickgrid\n    grid-id="grid39"\n    column-definitions.bind="columnDefinitions"\n    grid-options.bind="gridOptions"\n    dataset.bind="dataset"\n    instances.bind="aureliaGrid"\n    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"\n    on-row-count-changed.trigger="refreshMetrics($event.detail.args)">\n  </aurelia-slickgrid>\n</div>\n',o=a,l=[],c={};let h;function d(e){h||(h=r.K9.define({name:n,template:a,dependencies:l,bindables:c})),e.register(h)}var u=s(8880),f=s(7557),p=s(7158),g=s(6609),m=s(5072),b=s.n(m),y=s(7825),C=s.n(y),v=s(7659),w=s.n(v),S=s(5056),k=s.n(S),R=s(540),I=s.n(R),x=s(1113),T=s.n(x),E=s(7431),A={};A.styleTagTransform=T(),A.setAttributes=k(),A.insert=w().bind(null,"head"),A.domAPI=C(),A.insertStyleElement=I(),b()(E.A,A),E.A&&E.A.locals&&E.A.locals,s(6757);const q="assets/data",D="users";function O(e){return e.replace(/^"/,"").replace(/"$/,"").toLowerCase()}let P=(()=>{let e,t,s=[(0,r.EM)(i)],n=[];return t=class{constructor(e=(0,f.hd)((0,f.pn)(u.xl))){this.http=e,this.dataset=[],this.tagDataClass="",this.graphqlQuery="...",this.processing=!1,this.status={text:"processing...",class:"alert alert-danger"},this.serverWaitDelay=250,this.backendService=new p.P,this.initializeGrid()}aureliaGridReady(e){this.aureliaGrid=e}initializeGrid(){this.columnDefinitions=[{id:"name",field:"name",nameKey:"NAME",width:60,type:g.PUO.string,sortable:!0,filterable:!0,filter:{model:g.CuW.compoundInput}},{id:"gender",field:"gender",nameKey:"GENDER",filterable:!0,sortable:!0,width:60,filter:{model:g.CuW.singleSelect,collection:[{value:"",label:""},{value:"male",labelKey:"MALE"},{value:"female",labelKey:"FEMALE"}]}},{id:"company",field:"company",nameKey:"COMPANY",width:60,sortable:!0,filterable:!0,filter:{model:g.CuW.multipleSelect,customStructure:{label:"company",value:"company"},collectionSortBy:{property:"company",sortDesc:!1},collectionAsync:this.http.fetch(`${q}/customers_100.json`).then((e=>e.json())),filterOptions:{filter:!0}}}],this.gridOptions={enableAutoResize:!0,autoResize:{container:"#demo-container",rightPadding:10},enableAutoTooltip:!0,autoTooltipOptions:{enableForHeaderCells:!0},enableFiltering:!0,enableCellNavigation:!0,multiColumnSort:!1,gridMenu:{resizeOnShowHeaderRow:!0},backendServiceApi:{disableInternalPostProcess:!0,service:this.backendService,options:{datasetName:D,addLocaleIntoQuery:!0,extraQueryArguments:[{field:"userId",value:123}],infiniteScroll:{fetchSize:30}},preProcess:()=>this.displaySpinner(!0),process:e=>this.getCustomerApiCall(e),postProcess:e=>{this.metrics={endTime:new Date,totalItemCount:e.data[D].totalCount||0},this.displaySpinner(!1),this.getCustomerCallback(e)}}}}clearAllFiltersAndSorts(){this.aureliaGrid?.gridService&&this.aureliaGrid.gridService.clearAllFiltersAndSorts()}displaySpinner(e){this.processing=e,this.status=e?{text:"processing...",class:"alert alert-danger"}:{text:"finished",class:"alert alert-success"}}getCustomerCallback(e){const{nodes:t,totalCount:s}=e.data[D];this.aureliaGrid&&(this.metrics.totalItemCount=s,e.infiniteScrollBottomHit?this.aureliaGrid.dataView?.addItems(t):(this.aureliaGrid.slickGrid?.scrollTo(0),this.dataset=t,this.metrics.itemCount=t.length))}getCustomerApiCall(e){return this.getCustomerDataApiMock(e)}getCustomerDataApiMock(e){return new Promise((t=>{let s=0,i=0,r="",n="";this.http.fetch(`${q}/customers_100.json`).then((e=>e.json())).then((a=>{let o=a;if(e.includes("first:")){const t=e.match(/first:([0-9]+),/)||[];s=+t[1]}if(e.includes("offset:")){const t=e.match(/offset:([0-9]+),/)||[];i=+t[1]}if(e.includes("orderBy:")){const[t,s,i]=/orderBy:\[{field:([a-zA-Z/]+),direction:(ASC|DESC)}\]/gi.exec(e)||[];r=s||"",n=i||""}if(e.includes("orderBy:")){const[t,s,i]=/orderBy:\[{field:([a-zA-Z/]+),direction:(ASC|DESC)}\]/gi.exec(e)||[];r=s||"",n=i||""}if(e.includes("filterBy:")){const t=/{field:(\w+),operator:(\w+),value:([0-9a-z',"\s]*)}/gi;let s;for(;null!==(s=t.exec(e));){const e=s[1]||"",t=s[2]||"",i=s[3]||"";let[r,n]=i.split(",");e&&t&&""!==i&&(o=o.filter((s=>{const a=s[e];switch(r=O(r),n=O(n||""),t){case"EQ":return a.toLowerCase()===r;case"NE":return a.toLowerCase()!==r;case"LE":return a.toLowerCase()<=r;case"LT":return a.toLowerCase()<r;case"GT":return a.toLowerCase()>r;case"GE":return a.toLowerCase()>=r;case"EndsWith":return a.toLowerCase().endsWith(r);case"StartsWith":return a.toLowerCase().startsWith(r);case"Starts+Ends":return a.toLowerCase().startsWith(r)&&a.toLowerCase().endsWith(n);case"Contains":return a.toLowerCase().includes(r);case"Not_Contains":return!a.toLowerCase().includes(r);case"IN":const e=i.toLocaleLowerCase().split(",");for(const t of e)if(a.toLocaleLowerCase()===O(t))return!0}})))}}let l=i;l>o.length&&(e=e.replace(`offset:${l}`,""),l=0);const c=e=>r?e[r]:e;switch(n.toUpperCase()){case"ASC":o=o.sort(((e,t)=>c(e).localeCompare(c(t))));break;case"DESC":o=o.sort(((e,t)=>c(t).localeCompare(c(e))))}const h=o.slice(l,l+s),d={data:{[D]:{nodes:h,totalCount:o.length}}};setTimeout((()=>{this.graphqlQuery=this.gridOptions.backendServiceApi.service.buildQuery(),t(d)}),this.serverWaitDelay)}))}))}refreshMetrics(e){e?.current>=0&&(this.metrics.itemCount=this.aureliaGrid.dataView?.getFilteredItemCount()||0,this.tagDataClass=this.metrics.itemCount===this.metrics.totalItemCount?"fully-loaded":"partial-load")}},a=t,"symbol"==typeof(o="Example39")&&(o=o.description?"[".concat(o.description,"]"):""),Object.defineProperty(a,"name",{configurable:!0,value:l?"".concat(l," ",o):o}),(()=>{const i="function"==typeof Symbol&&Symbol.metadata?Object.create(null):void 0;(function(e,t,s,i,r,n){function a(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected");return e}for(var o,l=i.kind,c="getter"===l?"get":"setter"===l?"set":"value",h=!t&&e?i.static?e:e.prototype:null,d=t||(h?Object.getOwnPropertyDescriptor(h,i.name):{}),u=!1,f=s.length-1;f>=0;f--){var p={};for(var g in i)p[g]="access"===g?{}:i[g];for(var g in i.access)p.access[g]=i.access[g];p.addInitializer=function(e){if(u)throw new TypeError("Cannot add initializers after decoration has completed");n.push(a(e||null))};var m=(0,s[f])("accessor"===l?{get:d.get,set:d.set}:d[c],p);if("accessor"===l){if(void 0===m)continue;if(null===m||"object"!=typeof m)throw new TypeError("Object expected");(o=a(m.get))&&(d.get=o),(o=a(m.set))&&(d.set=o),(o=a(m.init))&&r.unshift(o)}else(o=a(m))&&("field"===l?r.unshift(o):d[c]=o)}h&&Object.defineProperty(h,i.name,d),u=!0})(null,e={value:t},s,{kind:"class",name:t.name,metadata:i},null,n),t=e.value,i&&Object.defineProperty(t,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:i}),function(e,t,s){for(var i=arguments.length>2,r=0;r<t.length;r++)s=i?t[r].call(e,s):t[r].call(e)}(t,n)})(),t;var a,o,l})()},7431:(e,t,s)=>{s.d(t,{A:()=>o});var i=s(1601),r=s.n(i),n=s(6314),a=s.n(n)()(r());a.push([e.id,".demo39 .badge{display:none}.demo39 .badge.fully-loaded{display:inline-flex}",""]);const o=a},8880:(e,t,s)=>{s.d(t,{Pq:()=>r,xl:()=>u});var i=s(7557);function r(e,t){return JSON.stringify(void 0!==e?e:{},t)}class n{constructor(){this.cache=new Map,this.delete=e=>this.cache.delete(e),this.has=e=>this.cache.has(e),this.set=(e,t)=>this.cache.set(e,t),this.get=e=>this.cache.get(e),this.clear=()=>this.cache.clear()}}const a=i.DI.createInterface((e=>e.singleton(n)));class o{constructor(){this.baseUrl="",this.defaults={},this.interceptors=[],this.dispatcher=null,this.c=(0,i.hd)(i.p7)}withBaseUrl(e){return this.baseUrl=e,this}withDefaults(e){return this.defaults=e,this}withInterceptor(e){return this.interceptors.push(e),this}useStandardConfiguration(){return Object.assign(this.defaults,{credentials:"same-origin"},this.defaults),this.rejectErrorResponses()}rejectErrorResponses(){return this.withInterceptor({response:l})}withRetry(e){const t=this.c.invoke(T,[e]);return this.withInterceptor(t)}withDispatcher(e){return this.dispatcher=e,this}}function l(e){if(!e.ok)throw e;return e}const c=(e,...t)=>new Error(`AUR${String(e).padStart(4,"0")}:${t.map(String)}`),h=/^([a-z][a-z0-9+\-.]*:)?\/\//i,d=i.DI.createInterface("fetch",(e=>{if("function"!=typeof fetch)throw c(5e3);return e.instance(fetch)})),u=i.DI.createInterface("IHttpClient",(e=>e.aliasTo(f)));class f{constructor(){this.activeRequestCount=0,this.isRequesting=!1,this.isConfigured=!1,this.baseUrl="",this.defaults=null,this.t=[],this.i=null,this.h=(0,i.hd)((0,i.P9)(o)),this.u=(0,i.hd)(d)}get interceptors(){return this.t.slice(0)}configure(e){let t;if("object"==typeof e)t={defaults:e};else{if("function"!=typeof e)throw c(5002,typeof e);{t=this.h(),t.baseUrl=this.baseUrl,t.defaults={...this.defaults},t.interceptors=this.t,t.dispatcher=this.i;const s=e(t);if(null!=s){if("object"!=typeof s)throw c(5001,typeof s);t=s}}}const s=t.defaults;if(s?.headers instanceof Headers)throw c(5003);const i=t.interceptors;if(i?.length>0){if(i.filter((e=>e instanceof T)).length>1)throw c(5004);const e=i.findIndex((e=>e instanceof T));if(e>=0&&e!==i.length-1)throw c(5005)}return this.baseUrl=t.baseUrl,this.defaults=s,this.t=t.interceptors??[],this.i=t.dispatcher,this.isConfigured=!0,this}fetch(e,t){this.C();let s=this.buildRequest(e,t);return this.processRequest(s,this.t).then((e=>{let t;if(e instanceof Response)t=Promise.resolve(e);else{if(!(e instanceof Request))throw c(5006,e);s=e,t=this.u.call(void 0,s)}return this.processResponse(t,this.t,s)})).then((e=>e instanceof Request?this.fetch(e):e)).then((e=>(this.R(),e)),(e=>{throw this.R(),e}))}buildRequest(e,t){const s=this.defaults??{};let i,r,n;const a=function(e){const t={},s=e??{};for(const e of Object.keys(s))t[e]="function"==typeof s[e]?s[e]():s[e];return t}(s.headers);if(e instanceof Request)i=e,n=new Headers(i.headers).get("Content-Type");else{t||(t={}),r=t.body;const a=void 0!==r?{body:r}:null,o={...s,headers:{},...t,...a};n=new Headers(o.headers).get("Content-Type"),i=new Request(p(this.baseUrl,e),o)}return n||(new Headers(a).has("content-type")?i.headers.set("Content-Type",new Headers(a).get("content-type")):void 0!==r&&function(e){try{JSON.parse(e)}catch(e){return!1}return!0}(r)&&i.headers.set("Content-Type","application/json")),function(e,t){const s=t??{};for(const t of Object.keys(s))e.has(t)||e.set(t,s[t])}(i.headers,a),r instanceof Blob&&r.type&&i.headers.set("Content-Type",r.type),i}get(e,t){return this.fetch(e,t)}post(e,t,s){return this.I(e,t,s,"POST")}put(e,t,s){return this.I(e,t,s,"PUT")}patch(e,t,s){return this.I(e,t,s,"PATCH")}delete(e,t,s){return this.I(e,t,s,"DELETE")}dispose(){this.t.forEach((e=>e.dispose?.())),this.t.length=0,this.i=null}C(){this.isRequesting=!!++this.activeRequestCount,this.isRequesting&&null!=this.i&&b(this.i,y.started)}R(){this.isRequesting=!! --this.activeRequestCount,this.isRequesting||null==this.i||b(this.i,y.drained)}processRequest(e,t){return this.B(e,t,"request","requestError",Request,this)}processResponse(e,t,s){return this.B(e,t,"response","responseError",Response,s,this)}B(e,t,s,i,r,...n){return(t??[]).reduce(((e,t)=>{const a=t[s],o=t[i];return e.then(a?e=>e instanceof r?a.call(t,e,...n):e:g,o?e=>o.call(t,e,...n):m)}),Promise.resolve(e))}I(e,t,s,i){return s||(s={}),s.method=i,null!=t&&(s.body=t),this.fetch(e,s)}}function p(e,t){return h.test(t)?t:(e??"")+t}function g(e){return e}function m(e){throw e}function b(e,t){const s=new e.ownerDocument.defaultView.CustomEvent(t,{bubbles:!0,cancelable:!0});setTimeout((()=>{e.dispatchEvent(s)}),1)}const y=Object.freeze({started:"aurelia-fetch-client-request-started",drained:"aurelia-fetch-client-requests-drained"}),C=i.DI.createInterface((e=>e.singleton(w))),v=Object.freeze({Set:"au:fetch:cache:set",Get:"au:fetch:cache:get",Clear:"au:fetch:cache:clear",Reset:"au:fetch:cache:reset",Dispose:"au:fetch:cache:dispose",CacheHit:"au:fetch:cache:hit",CacheMiss:"au:fetch:cache:miss",CacheStale:"au:fetch:cache:stale",CacheStaleRefreshed:"au:fetch:cache:stale:refreshed",CacheExpired:"au:fetch:cache:expired",CacheBackgroundRefreshed:"au:fetch:cache:background:refreshed",CacheBackgroundRefreshing:"au:fetch:cache:background:refreshing",CacheBackgroundStopped:"au:fetch:cache:background:stopped"});class w{constructor(){this.storage=(0,i.hd)(a),this.p=(0,i.hd)(i.r_),this.ea=(0,i.hd)(i.xe),this.q=(0,i.hd)(u),this.H=[],this.O=-1,this.j=[],this.T=new Map}subscribe(e,t){const s=this.ea.subscribe(e,t);return this.H.push(s),s}subscribeOnce(e,t){const s=this.ea.subscribeOnce(e,t);return this.H.push(s),s}setStaleTimer(e,t,s){const i=this.p.setTimeout((async()=>{this.delete(e),await this.q.get(s);const t=this.getItem(e);this.ea.publish(v.CacheStaleRefreshed,{key:e,value:t}),this.N(i)}),t);this.j.push(i)}startBackgroundRefresh(e){!e||this.O>-1||(this.O=this.p.setInterval((()=>{this.ea.publish(v.CacheBackgroundRefreshing),this.T.forEach(((e,t)=>{this.delete(t),this.q.get(e).then((()=>{const e=this.getItem(t);this.ea.publish(v.CacheBackgroundRefreshed,{key:t,value:e})}))}))}),e))}stopBackgroundRefresh(){this.p.clearInterval(this.O),this.O=-1,this.ea.publish(v.CacheBackgroundStopped)}set(e,t,s,i){const r={data:t,...s};this.setItem(e,r,i)}get(e){return this.getItem(e)?.data}setItem(e,t,s){t.lastCached=Date.now(),this.storage.set(e,t),this.T.set(e,s),this.ea.publish(v.Set,{key:e,value:t})}getItem(e){if(!this.storage.has(e))return void this.ea.publish(v.CacheMiss,{key:e});const t=this.storage.get(e);if(!t?.staleTime||!t?.lastCached)return this.ea.publish(v.CacheHit,{key:e,value:t}),t;const s=Date.now();if(s>t.lastCached+(t.staleTime??0))this.ea.publish(v.CacheStale,{key:e,value:t});else{if(!(s>t.lastCached+(t.cacheTime??0)))return this.ea.publish(v.CacheHit,{key:e,value:t}),t;this.ea.publish(v.CacheExpired,{key:e,value:t})}}delete(e){this.storage.delete(e),this.ea.publish(v.Clear,{key:e})}clear(){this.storage.clear(),this.T.clear(),this.ea.publish(v.Reset),this.stopBackgroundRefresh(),this.j.forEach((e=>{this.p.clearTimeout(e)})),this.j.length=0}dispose(){this.clear(),this.H.forEach((e=>e.dispose())),this.ea.publish(v.Dispose)}N(e){this.p.clearTimeout(e);const t=this.j.indexOf(e);t>-1&&this.j.splice(t,1)}}const S={cacheTime:3e5,staleTime:0,refreshStaleImmediate:!1,refreshInterval:0};class k{constructor(e){this.P=(0,i.hd)(C),this.cf={...S,...e??{}}}request(e){if(this.P.startBackgroundRefresh(this.cf.refreshInterval),"GET"!==e.method)return e;const t=this.P.get(this.key(e));return this.mark(t)??e}response(e,t){if(!t)return e;if(e.headers.has(k.cacheHeader))return e;const s=this.key(t);return this.P.setItem(s,{data:e,...this.cf},t),this.cf?.refreshStaleImmediate&&this.cf.staleTime>0&&this.P.setStaleTimer(s,this.cf.staleTime,t),e}dispose(){this.P.stopBackgroundRefresh()}key(e){return`${k.prefix}${e.url}`}mark(e){return e?.headers.set(k.cacheHeader,"hit"),e}}k.prefix="au:interceptor:",k.cacheHeader="x-au-fetch-cache";class R{constructor(){this.cache=(0,i.hd)(i.r_).globalThis.indexedDB,this.getStore=()=>this.database.transaction(R.cacheName,"readwrite").objectStore(R.cacheName),this.delete=e=>{this.getStore().delete(e)},this.has=e=>this.getStore().count(e).result>0,this.set=(e,t)=>this.getStore().put(t,e),this.get=e=>this.getStore().get(e).result,this.clear=()=>{const e=this.getStore();e.getAllKeys().result.forEach((t=>{e.delete(t)}))},this.database=this.cache.open(R.cacheName).result}}R.cacheName="au-cache";const I=Object.freeze({fixed:0,incremental:1,exponential:2,random:3}),x={maxRetries:3,interval:1e3,strategy:I.fixed};class T{constructor(e){if(this.p=(0,i.hd)(i.r_),this.retryConfig={...x,...e??{}},this.retryConfig.strategy===I.exponential&&this.retryConfig.interval<=1e3)throw c(5007,this.retryConfig.interval)}request(e){return e.retryConfig||(e.retryConfig={...this.retryConfig},e.retryConfig.counter=0),e.retryConfig.requestClone=e.clone(),e}response(e,t){return delete t.retryConfig,e}responseError(e,t,s){const{retryConfig:i}=t,{requestClone:r}=i;return Promise.resolve().then((()=>{if(i.counter<i.maxRetries){const n=null==i.doRetry||i.doRetry(e,t);return Promise.resolve(n).then((n=>{if(n){i.counter++;const e=function(e){const{interval:t,strategy:s,minRandomInterval:i,maxRandomInterval:r,counter:n}=e;if("function"==typeof s)return e.strategy(n);switch(s){case I.fixed:return E[I.fixed](t);case I.incremental:return E[I.incremental](n,t);case I.exponential:return E[I.exponential](n,t);case I.random:return E[I.random](n,t,i,r);default:throw c(5008,s)}}(i);return new Promise((t=>this.p.setTimeout(t,isNaN(e)?0:e))).then((()=>{const e=r.clone();return"function"==typeof i.beforeRetry?i.beforeRetry(e,s):e})).then((e=>{const t={...e,retryConfig:i};return s.fetch(t)}))}throw delete t.retryConfig,e}))}throw delete t.retryConfig,e}))}}const E=[e=>e,(e,t)=>t*e,(e,t)=>1===e?t:t**e/1e3,(e,t,s=0,i=6e4)=>Math.random()*(i-s)+s]}}]);