"use strict";(self.webpackChunkaurelia_slickgrid_demo_bs5=self.webpackChunkaurelia_slickgrid_demo_bs5||[]).push([[960],{70960:(e,t,i)=>{i.r(t),i.d(t,{Example12:()=>b});var a={};i.r(a),i.d(a,{default:()=>s,dependencies:()=>r,name:()=>l,register:()=>c,template:()=>o});var n=i(65394);const l="example12",o='<h2>\n  ${title}\n  <span class="float-end">\n    <a style="font-size: 18px"\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example12.ts">\n      <span class="fa fa-link"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle" innerhtml.bind="subTitle"></div>\n\n<hr />\n\n<div class="row">\n  <div class="col-sm-12">\n    <button class="btn btn-outline-secondary btn-sm" data-test="language-button" click.trigger="switchLanguage()">\n      <i class="fa fa-language"></i>\n      Switch Language\n    </button>\n    <label>Locale:</label>\n    <span style="font-style: italic; width: 70px;" data-test="selected-locale">\n      ${selectedLanguage + \'.json\'}\n    </span>\n\n    <span style="margin-left: 20px">\n      <button class="btn btn-outline-secondary btn-sm" click.trigger="exportToFile(\'csv\')">\n        <i class="fa fa-download"></i>\n        Download to CSV\n      </button>\n      <button class="btn btn-outline-secondary btn-sm" click.trigger="exportToFile(\'txt\')">\n        <i class="fa fa-download"></i>\n        Download to Text\n      </button>\n      <button class="btn btn-outline-secondary btn-sm" click.trigger="exportToExcel()">\n        <i class="fa fa-file-excel-o text-success"></i>\n        Download to Excel\n      </button>\n    </span>\n    <span style="margin-left: 10px">\n      <button class="btn btn-outline-secondary btn-sm" click.trigger="dynamicallyAddTitleHeader()">\n        <i class="fa fa-plus"></i>\n        Dynamically Duplicate Title Column\n      </button>\n    </span>\n  </div>\n</div>\n<aurelia-slickgrid grid-id="grid12"\n                    column-definitions.bind="columnDefinitions"\n                    grid-options.bind="gridOptions"\n                    dataset.bind="dataset"\n                    on-grid-state-changed.trigger="gridStateChanged($event.detail)"\n                    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)">\n</aurelia-slickgrid>\n',s=o,r=[];let d;function c(e){d||(d=n.K94.define({name:l,template:o,dependencies:r})),e.register(d)}var u=i(17557),m=i(18003),p=i(53271),h=i(68152),f=i(93492);i(96757);const g=(e,t,i,a,n,l)=>{const o=(l&&"function"==typeof l.getOptions?l.getOptions():{}).i18n;return o?.tr("TASK_X",{x:i})??""};class b{constructor(e=(0,u.hd)(h.TH)){this.i18n=e,this.title="Example 12: Localization (i18n)",this.subTitle='Support multiple locales with the i18next plugin, following these steps.\n    Take a look at the (<a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/localization/localization" target="_blank">Wiki documentation</a>)\n    <ol class="small">\n      <li>You first need to "enableTranslate" in the Grid Options</li>\n      <li>In the Column Definitions, you have following options</li>\n      <ul>\n        <li>To translate a header title, use "nameKey" with a translate key (nameKey: \'TITLE\')</li>\n        <li>For the cell values, you need to use a Formatter, there\'s 2 ways of doing it</li>\n        <ul>\n          <li>formatter: myCustomTranslateFormatter <b>&lt;= "Title" column uses it</b></li>\n          <li>formatter: Formatters.translate <b>&lt;= "Completed" column uses it</b></li>\n        </ul>\n      </ul>\n      <li>For date localization, you need to create your own custom formatter. </li>\n      <ul>\n        <li>You can easily implement logic to switch between Formatters "dateIso" or "dateUs", depending on current locale.</li>\n      </ul>\n      <li>For the Select (dropdown) filter, you can fill in the "labelKey" property, if found it will use it, else it will use "label"</li>\n        <ul>\n          <li>What if your select options have totally different value/label pair? In this case, you can use the <b>customStructure: { label: \'customLabel\', value: \'customValue\'}</b> to change the property name(s) to use.\'</li>\n          <li>What if you want to use "customStructure" and translation? Simply pass this flag <b>enableTranslateLabel: true</b></li>\n          <li>More info on the Select Filter <a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/column-functionalities/filters/select-filter" target="_blank">Wiki page</a>\n        </ul>\n        <li>For more info about "Download to File", read the <a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/export-to-excel" target="_blank">Wiki page</a></li>\n      </ol>\n    ',this.columnDefinitions=[],this.dataset=[],this.duplicateTitleHeaderCount=1,this.excelExportService=new m.N,this.textExportService=new p.f,this.defineGrid(),this.i18n.setLocale("en"),this.selectedLanguage="en"}attached(){this.getData(1500)}aureliaGridReady(e){this.aureliaGrid=e,this.gridObj=e.slickGrid}defineGrid(){this.columnDefinitions=[{id:"title",name:"Title",field:"id",nameKey:"TITLE",minWidth:100,formatter:g,sortable:!0,filterable:!0,params:{useFormatterOuputToFilter:!0}},{id:"description",name:"Description",field:"description",filterable:!0,sortable:!0,minWidth:80},{id:"duration",name:"Duration (days)",field:"duration",nameKey:"DURATION",sortable:!0,formatter:f._tQ.percentCompleteBar,minWidth:100,exportWithFormatter:!1,filterable:!0,type:f.PUO.number,filter:{model:f.CuW.slider,filterOptions:{hideSliderNumber:!0}}},{id:"start",name:"Start",field:"start",nameKey:"START",formatter:f._tQ.dateIso,outputType:f.PUO.dateIso,type:f.PUO.date,minWidth:100,filterable:!0,filter:{model:f.CuW.compoundDate}},{id:"finish",name:"Finish",field:"finish",nameKey:"FINISH",formatter:f._tQ.dateIso,outputType:f.PUO.dateIso,type:f.PUO.date,minWidth:100,filterable:!0,filter:{model:f.CuW.compoundDate}},{id:"completedBool",name:"Completed",field:"completedBool",nameKey:"COMPLETED",minWidth:100,sortable:!0,formatter:f._tQ.checkmark,exportCustomFormatter:f._tQ.translateBoolean,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,labelKey:"TRUE"},{value:!1,labelKey:"FALSE"}],model:f.CuW.singleSelect,enableTranslateLabel:!0}},{id:"completed",name:"Completed",field:"completed",nameKey:"COMPLETED",formatter:f._tQ.translate,sortable:!0,minWidth:100,exportWithFormatter:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:"TRUE",labelKey:"TRUE"},{value:"FALSE",labelKey:"FALSE"}],collectionSortBy:{property:"labelKey",sortDesc:!0},model:f.CuW.singleSelect,enableTranslateLabel:!0}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableAutoResize:!0,enableExcelCopyBuffer:!0,enableFiltering:!0,enableTranslate:!0,i18n:this.i18n,checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},enableCheckboxSelector:!0,enableRowSelection:!0,showCustomFooter:!0,customFooterOptions:{metricTexts:{itemsKey:"ITEMS",ofKey:"OF",lastUpdateKey:"LAST_UPDATE"},dateFormat:"YYYY-MM-DD hh:mm a",hideTotalItemCount:!1,hideLastUpdateTimestamp:!1},gridMenu:{hideExportCsvCommand:!1,hideExportTextDelimitedCommand:!1},enableExcelExport:!0,enableTextExport:!0,textExportOptions:{exportWithFormatter:!0,sanitizeDataExport:!0},excelExportOptions:{customExcelHeader:(e,t)=>{const i="fr"===this.i18n.getLocale()?"Titre qui est suffisament long pour être coupé":"My header that is long enough to wrap",a=e.getStyleSheet().createFormat({font:{size:12,fontName:"Calibri",bold:!0,color:"FF0000FF"},alignment:{wrapText:!0}});t.setRowInstructions(0,{height:30}),t.mergeCells("B1","D1");const n=[];n.push({value:""}),n.push({value:i,metadata:{style:a.id}}),t.data.push(n)},exportWithFormatter:!0,sanitizeDataExport:!0},externalResources:[this.excelExportService,this.textExportService]}}getData(e){const t=[];for(let i=0;i<e;i++){const e=2e3+Math.floor(10*Math.random()),a=Math.floor(11*Math.random()),n=Math.floor(29*Math.random());t[i]={id:i,description:i%5?"desc "+i:"🚀🦄 español",duration:Math.round(100*Math.random())+"",start:new Date(e,a,n),finish:new Date(e,a+1,n),completedBool:i%5==0,completed:i%5==0?"TRUE":"FALSE"}}this.dataset=t}dynamicallyAddTitleHeader(){const e={id:"title"+this.duplicateTitleHeaderCount++,field:"id",nameKey:"TITLE",formatter:g,sortable:!0,minWidth:100,filterable:!0,params:{useFormatterOuputToFilter:!0}};this.columnDefinitions.push(e),this.columnDefinitions=this.columnDefinitions.slice()}exportToExcel(){this.excelExportService.exportToExcel({filename:"Export",format:f.ptE.xlsx})}exportToFile(e="csv"){this.textExportService.exportToFile({delimiter:"csv"===e?f.IQ1.comma:f.IQ1.tab,filename:"myExport",format:"csv"===e?f.ptE.csv:f.ptE.txt})}gridStateChanged(e){console.log("Grid State changed:: ",e),console.log("Grid State changed:: ",e.change)}async switchLanguage(){const e="en"===this.selectedLanguage?"fr":"en";await this.i18n.setLocale(e),this.selectedLanguage=e}}n.K94.define(a,b)}}]);