import{f as be,v as ao,b as D,c as T,C as E,r as O,a as bv,A as fv,R as vv,I as _v,d as yv,p as Sv,F as f,e as Hn,n as _e,g as ye,h as Se,E as C,i as v,S as re,j as et,k as G,G as no,l as Ft,m as ro,T as $a,o as B,q as k,s as ri,P as Oi,t as Cv,u as oo,w as Vd,x as lo,y as oi,z as Ma,B as so,D as Pa,H as wv,J as Ia,K as xv,L as Tv,M as Ev,N as Ls,O as $v,Q as kv,U as I,V as dt,W as Dv,X as Ov,Y as Mv,Z as it,_ as Pv}from"./vendor-BIpUtafM.js";import"./index-478qhrsi.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=i(a);fetch(a.href,r)}})();const Iv="All Selected",Gv="All {{x}} records selected",Fv="Apply Mass Update",Av="Update Selection",Rv="Cancel",Lv="Clear all Filters",zv="Clear all Grouping",Nv="Clear all Sorting",Wv="Unfreeze Columns/Rows",Bv="Clone",jv="Collapse all Groups",Vv="Columns",Hv="Resize by Content",Uv="Commands",qv="Contains",Yv="Copy",Kv="No data to display.",Qv="Ends With",Zv="Equals",Jv="Equal to",Xv="Expand all Groups",e_="Export in CSV format",t_="Export to Excel",i_="Export to PDF",a_="Export in Text format (Tab delimited)",n_="Export in Text format",r_="Filter Shortcuts",o_="{{from}}-{{to}} of {{totalItems}} items",l_="Force fit columns",s_="Freeze Columns",d_="The number must be valid and have a maximum of {{maxDecimal}} decimals.",c_="Greater than",u_="Greater than or equal to",m_="Group by",p_="Hide Column",h_="Search items in a collection, must be separated by a comma (a,b)",g_="items",b_="items per page",f_="items selected",v_="No elements found",__="Last Update",y_="Less than",S_="Less than or equal to",C_="Loading...",w_="Not contains",x_="Not equal to",T_="Search items not in a collection, must be separated by a comma (a,b)",E_="of",$_="OK",k_="Page",D_="page {{x}} of {{y}}",O_="Refresh Dataset",M_="Remove Filter",P_="Remove Sort",I_="Reset Input Value",G_="Reset Form",F_="Save",A_="Select All",R_="Sort Ascending",L_="Sort Descending",z_="Starts With",N_="Synchronous resize",W_="Toggle Filter Row",B_="Toggle Pre-Header Row",j_="Unfreeze Columns",V_="# of % selected",H_="{{x}} of {{y}} selected",U_={ADDRESS:{STREET:"Billing Address Street",ZIP:"Billing Address Zip"},INFORMATION:"Billing Information"},q_="Blank Values",Y_="Non-Blank Values",K_="Custom Commands",Q_="Duration",Z_="Company",J_="Completed",X_="Change Completed Flag",ey="Change Priority",ty="Customer Information",iy="Delete Row",ay="Disabled Command",ny="False",ry="Female",oy="Finish",ly="Future",sy="Gender",dy="Help",cy="High",uy="Low",my="Medium",py="Male",hy="Name",gy="Next 20 days",by="None",fy="Past",vy="% Complete",_y="Priority",yy="Start",Sy="Task {{x}}",Cy="Title",wy="Today",xy="True",Ty="{{x}} day{{plural}}",Ey="Update the current row",$y="Cancel changes of the current row",ky={ALL_SELECTED:Iv,ALL_X_RECORDS_SELECTED:Gv,APPLY_MASS_UPDATE:Fv,APPLY_TO_SELECTION:Av,CANCEL:Rv,CLEAR_ALL_FILTERS:Lv,CLEAR_ALL_GROUPING:zv,CLEAR_ALL_SORTING:Nv,CLEAR_PINNING:Wv,CLONE:Bv,COLLAPSE_ALL_GROUPS:jv,COLUMNS:Vv,COLUMN_RESIZE_BY_CONTENT:Hv,COMMANDS:Uv,CONTAINS:qv,COPY:Yv,EMPTY_DATA_WARNING_MESSAGE:Kv,ENDS_WITH:Qv,EQUALS:Zv,EQUAL_TO:Jv,EXPAND_ALL_GROUPS:Xv,EXPORT_TO_CSV:e_,EXPORT_TO_EXCEL:t_,EXPORT_TO_PDF:i_,EXPORT_TO_TAB_DELIMITED:a_,EXPORT_TO_TEXT_FORMAT:n_,FILTER_SHORTCUTS:r_,FROM_TO_OF_TOTAL_ITEMS:o_,FORCE_FIT_COLUMNS:l_,FREEZE_COLUMNS:s_,INVALID_FLOAT:d_,GREATER_THAN:c_,GREATER_THAN_OR_EQUAL_TO:u_,GROUP_BY:m_,HIDE_COLUMN:p_,IN_COLLECTION_SEPERATED_BY_COMMA:h_,ITEMS:g_,ITEMS_PER_PAGE:b_,ITEMS_SELECTED:f_,NO_ELEMENTS_FOUND:v_,LAST_UPDATE:__,LESS_THAN:y_,LESS_THAN_OR_EQUAL_TO:S_,LOADING:C_,NOT_CONTAINS:w_,NOT_EQUAL_TO:x_,NOT_IN_COLLECTION_SEPERATED_BY_COMMA:T_,OF:E_,OK:$_,PAGE:k_,PAGE_X_OF_Y:D_,REFRESH_DATASET:O_,REMOVE_FILTER:M_,REMOVE_SORT:P_,RESET_INPUT_VALUE:I_,RESET_FORM:G_,SAVE:F_,SELECT_ALL:A_,SORT_ASCENDING:R_,SORT_DESCENDING:L_,STARTS_WITH:z_,SYNCHRONOUS_RESIZE:N_,TOGGLE_FILTER_ROW:W_,TOGGLE_PRE_HEADER_ROW:B_,UNFREEZE_COLUMNS:j_,X_OF_Y_SELECTED:V_,X_OF_Y_MASS_SELECTED:H_,BILLING:U_,BLANK_VALUES:q_,NON_BLANK_VALUES:Y_,CUSTOM_COMMANDS:K_,DURATION:Q_,COMPANY:Z_,COMPLETED:J_,CHANGE_COMPLETED_FLAG:X_,CHANGE_PRIORITY:ey,CUSTOMER_INFORMATION:ty,DELETE_ROW:iy,DISABLED_COMMAND:ay,FALSE:ny,FEMALE:ry,FINISH:oy,FUTURE:ly,GENDER:sy,HELP:dy,HIGH:cy,LOW:uy,MEDIUM:my,MALE:py,NAME:hy,NEXT_20_DAYS:gy,NONE:by,PAST:fy,PERCENT_COMPLETE:vy,PRIORITY:_y,START:yy,TASK_X:Sy,TITLE:Cy,TODAY:wy,TRUE:xy,X_DAY_PLURAL:Ty,RBE_BTN_UPDATE:Ey,RBE_BTN_CANCEL:$y},Dy="Tout sélectionnés",Oy="Sur tous les {{x}} éléments",My="Mettre à jour en masse",Py="Mettre à jour la sélection",Iy="Annuler",Gy="Supprimer tous les filtres",Fy="Supprimer tous les groupes",Ay="Supprimer tous les tris",Ry="Dégeler les colonnes/rangées",Ly="Cloner",zy="Réduire tous les groupes",Ny="Colonnes",Wy="Redimensionner par contenu",By="Commandes",jy="Contient",Vy="Copier",Hy="Aucune donnée à afficher.",Uy="Se termine par",qy="Égale",Yy="Égal à",Ky="Étendre tous les groupes",Qy="Exporter en format CSV",Zy="Exporter vers Excel",Jy="Exporter vers PDF",Xy="Exporter en format texte (délimité par tabulation)",eS="Exporter en format texte",tS="Raccourcis de filtre",iS="{{from}}-{{to}} de {{totalItems}} éléments",aS="Ajustement forcé des colonnes",nS="Geler les colonnes",rS="Plus grand que",oS="Plus grand ou égal à",lS="Grouper par",sS="Cacher la colonne",dS="Recherche incluant certain éléments d'une collection, doit être séparé par une virgule (a,b)",cS="Le nombre doit être valide et avoir un maximum de {{maxDecimal}} décimales.",uS="éléments",mS="éléments par page",pS="éléments sélectionnés",hS="Dernière mise à jour",gS="Plus petit que",bS="Plus petit ou égal à",fS="Chargement...",vS="Aucun élément trouvé",_S="Ne contient pas",yS="Non égal à",SS="Recherche excluant certain éléments d'une collection, doit être séparé par une virgule (a,b)",CS="de",wS="Terminé",xS="Page",TS="page {{x}} de {{y}}",ES="Rafraîchir les données",$S="Supprimer le filtre",kS="Supprimer le tri",DS="Réinitialiser la valeur",OS="Réinitialiser le formulaire",MS="Sauvegarder",PS="Sélectionner tout",IS="Trier par ordre croissant",GS="Trier par ordre décroissant",FS="Commence par",AS="Redimension synchrone",RS="Basculer la ligne des filtres",LS="Basculer la ligne de pré-en-tête",zS="Dégeler les colonnes",NS="# de % sélectionnés",WS="{{x}} de {{y}} sélectionnés",BS={ADDRESS:{STREET:"Adresse de facturation",ZIP:"Code zip de facturation"},INFORMATION:"Information de Facturation"},jS="Valeurs nulles",VS="Valeurs non-nulles",HS="Durée",US="Compagnie",qS="Terminé",YS="Changer l'indicateur terminé",KS="Changer la priorité",QS="Commandes Personnalisées",ZS="Information Client",JS="Supprimer la ligne",XS="Commande désactivée",eC="Faux",tC="Féminin",iC="Fin",aC="Future",nC="Sexe",rC="Aide",oC="Haut",lC="Bas",sC="Moyen",dC="Masculin",cC="Nom",uC="20 prochain jours",mC="Aucun",pC="Passé",hC="% Achevée",gC="Priorité",bC="Début",fC="Tâche {{x}}",vC="Titre",_C="Aujourd'hui",yC="Vrai",SC="{{x}} journée{{plural}}",CC="Mettre à jour la ligne actuelle",wC="Annuler la ligne actuelle",xC={ALL_SELECTED:Dy,ALL_X_RECORDS_SELECTED:Oy,APPLY_MASS_UPDATE:My,APPLY_TO_SELECTION:Py,CANCEL:Iy,CLEAR_ALL_FILTERS:Gy,CLEAR_ALL_GROUPING:Fy,CLEAR_ALL_SORTING:Ay,CLEAR_PINNING:Ry,CLONE:Ly,COLLAPSE_ALL_GROUPS:zy,COLUMNS:Ny,COLUMN_RESIZE_BY_CONTENT:Wy,COMMANDS:By,CONTAINS:jy,COPY:Vy,EMPTY_DATA_WARNING_MESSAGE:Hy,ENDS_WITH:Uy,EQUALS:qy,EQUAL_TO:Yy,EXPAND_ALL_GROUPS:Ky,EXPORT_TO_CSV:Qy,EXPORT_TO_EXCEL:Zy,EXPORT_TO_PDF:Jy,EXPORT_TO_TAB_DELIMITED:Xy,EXPORT_TO_TEXT_FORMAT:eS,FILTER_SHORTCUTS:tS,FROM_TO_OF_TOTAL_ITEMS:iS,FORCE_FIT_COLUMNS:aS,FREEZE_COLUMNS:nS,GREATER_THAN:rS,GREATER_THAN_OR_EQUAL_TO:oS,GROUP_BY:lS,HIDE_COLUMN:sS,IN_COLLECTION_SEPERATED_BY_COMMA:dS,INVALID_FLOAT:cS,ITEMS:uS,ITEMS_PER_PAGE:mS,ITEMS_SELECTED:pS,LAST_UPDATE:hS,LESS_THAN:gS,LESS_THAN_OR_EQUAL_TO:bS,LOADING:fS,NO_ELEMENTS_FOUND:vS,NOT_CONTAINS:_S,NOT_EQUAL_TO:yS,NOT_IN_COLLECTION_SEPERATED_BY_COMMA:SS,OF:CS,OK:wS,PAGE:xS,PAGE_X_OF_Y:TS,REFRESH_DATASET:ES,REMOVE_FILTER:$S,REMOVE_SORT:kS,RESET_INPUT_VALUE:DS,RESET_FORM:OS,SAVE:MS,SELECT_ALL:PS,SORT_ASCENDING:IS,SORT_DESCENDING:GS,STARTS_WITH:FS,SYNCHRONOUS_RESIZE:AS,TOGGLE_FILTER_ROW:RS,TOGGLE_PRE_HEADER_ROW:LS,UNFREEZE_COLUMNS:zS,X_OF_Y_SELECTED:NS,X_OF_Y_MASS_SELECTED:WS,BILLING:BS,BLANK_VALUES:jS,NON_BLANK_VALUES:VS,DURATION:HS,COMPANY:US,COMPLETED:qS,CHANGE_COMPLETED_FLAG:YS,CHANGE_PRIORITY:KS,CUSTOM_COMMANDS:QS,CUSTOMER_INFORMATION:ZS,DELETE_ROW:JS,DISABLED_COMMAND:XS,FALSE:eC,FEMALE:tC,FINISH:iC,FUTURE:aC,GENDER:nC,HELP:rC,HIGH:oC,LOW:lC,MEDIUM:sC,MALE:dC,NAME:cC,NEXT_20_DAYS:uC,NONE:mC,PAST:pC,PERCENT_COMPLETE:hC,PRIORITY:gC,START:bC,TASK_X:fC,TITLE:vC,"TITLE.NAME":"Nom du Titre",TODAY:_C,TRUE:yC,X_DAY_PLURAL:SC,RBE_BTN_UPDATE:CC,RBE_BTN_CANCEL:wC};var TC=Object.create,co=Object.defineProperty,EC=Object.getOwnPropertyDescriptor,$C=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Hd=t=>{throw TypeError(t)},kC=(t,e,i)=>e in t?co(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,DC=(t,e)=>co(t,"name",{value:e,configurable:!0}),OC=t=>[,,,TC(null)],MC=["class","method","getter","setter","accessor","field","value","get","set"],Ud=t=>t!==void 0&&typeof t!="function"?Hd("Function expected"):t,PC=(t,e,i,n,a)=>({kind:MC[t],name:e,metadata:n,addInitializer:r=>i._?Hd("Already initialized"):a.push(Ud(r||null))}),IC=(t,e)=>kC(e,$C("metadata"),t[3]),GC=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},FC=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&EC(a,i));DC(a,i);for(var p=n.length-1;p>=0;p--)u=PC(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,Ud(l)&&(a=l);return IC(t,a),c&&co(a,i,c),m?s^4?r:c:a},qd,uo;qd=[ao("dateFormat")];class Mi{toView(e,i){return be(e,i)}}uo=OC();Mi=FC(uo,0,"DateFormatValueConverter",qd,Mi);GC(uo,1,Mi);var AC=Object.create,mo=Object.defineProperty,RC=Object.getOwnPropertyDescriptor,LC=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Yd=t=>{throw TypeError(t)},zC=(t,e,i)=>e in t?mo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,NC=(t,e)=>mo(t,"name",{value:e,configurable:!0}),WC=t=>[,,,AC(null)],BC=["class","method","getter","setter","accessor","field","value","get","set"],Kd=t=>t!==void 0&&typeof t!="function"?Yd("Function expected"):t,jC=(t,e,i,n,a)=>({kind:BC[t],name:e,metadata:n,addInitializer:r=>i._?Yd("Already initialized"):a.push(Kd(r||null))}),VC=(t,e)=>zC(e,LC("metadata"),t[3]),HC=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},UC=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&RC(a,i));NC(a,i);for(var p=n.length-1;p>=0;p--)u=jC(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,Kd(l)&&(a=l);return VC(t,a),c&&mo(a,i,c),m?s^4?r:c:a},Qd,po;Qd=[ao("decimal")];class Pi{toView(e,i){const n=typeof i=="string"?parseInt(i,10):2,a=typeof e<"u"?parseFloat(e).toFixed(n):e;return e&&`${a}`}}po=WC();Pi=UC(po,0,"DecimalValueConverter",Qd,Pi);HC(po,1,Pi);var qC=Object.create,ho=Object.defineProperty,YC=Object.getOwnPropertyDescriptor,KC=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Zd=t=>{throw TypeError(t)},QC=(t,e,i)=>e in t?ho(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,ZC=(t,e)=>ho(t,"name",{value:e,configurable:!0}),JC=t=>[,,,qC(null)],XC=["class","method","getter","setter","accessor","field","value","get","set"],Jd=t=>t!==void 0&&typeof t!="function"?Zd("Function expected"):t,e0=(t,e,i,n,a)=>({kind:XC[t],name:e,metadata:n,addInitializer:r=>i._?Zd("Already initialized"):a.push(Jd(r||null))}),t0=(t,e)=>QC(e,KC("metadata"),t[3]),i0=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},a0=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&YC(a,i));ZC(a,i);for(var p=n.length-1;p>=0;p--)u=e0(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,Jd(l)&&(a=l);return t0(t,a),c&&ho(a,i,c),m?s^4?r:c:a},Xd,go;Xd=[ao("stringify")];class Ii{toView(e){return JSON.stringify(e,null,4)}}go=JC();Ii=a0(go,0,"StringifyValueConverter",Xd,Ii);i0(go,1,Ii);var n0=Object.create,bo=Object.defineProperty,r0=Object.getOwnPropertyDescriptor,o0=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),li=t=>{throw TypeError(t)},ec=(t,e,i)=>e in t?bo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,zs=(t,e)=>bo(t,"name",{value:e,configurable:!0}),l0=t=>[,,,n0(null)],tc=["class","method","getter","setter","accessor","field","value","get","set"],At=t=>t!==void 0&&typeof t!="function"?li("Function expected"):t,s0=(t,e,i,n,a)=>({kind:tc[t],name:e,metadata:n,addInitializer:r=>i._?li("Already initialized"):a.push(At(r||null))}),d0=(t,e)=>ec(e,o0("metadata"),t[3]),Un=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)e&1?r[a].call(i):n=r[a].call(i,n);return n},ic=(t,e,i,n,a,r)=>{var l,d,u,s,m,o=e&7,g=!!(e&8),c=!!(e&16),p=o>3?t.length+1:o?g?1:2:0,_=tc[o+5],w=o>3&&(t[p-1]=[]),x=t[p]||(t[p]=[]),b=o&&(!c&&!g&&(a=a.prototype),o<5&&(o>3||!c)&&r0(o<4?a:{get[i](){return Ns(this,r)},set[i](h){return Ws(this,r,h)}},i));o?c&&o<4&&zs(r,(o>2?"set ":o>1?"get ":"")+i):zs(a,i);for(var y=n.length-1;y>=0;y--)s=s0(o,i,u={},t[3],x),o&&(s.static=g,s.private=c,m=s.access={has:c?h=>u0(a,h):h=>i in h},o^3&&(m.get=c?h=>(o^1?Ns:m0)(h,a,o^4?r:b.get):h=>h[i]),o>2&&(m.set=c?(h,S)=>Ws(h,a,S,o^4?r:b.set):(h,S)=>h[i]=S)),d=(0,n[y])(o?o<4?c?r:b[_]:o>4?void 0:{get:b.get,set:b.set}:a,s),u._=1,o^4||d===void 0?At(d)&&(o>4?w.unshift(d):o?c?r=d:b[_]=d:a=d):typeof d!="object"||d===null?li("Object expected"):(At(l=d.get)&&(b.get=l),At(l=d.set)&&(b.set=l),At(l=d.init)&&w.unshift(l));return o||d0(t,a),b&&bo(a,i,b),c?o^4?r:b:a},c0=(t,e,i)=>ec(t,e+"",i),fo=(t,e,i)=>e.has(t)||li("Cannot "+i),u0=(t,e)=>Object(e)!==e?li('Cannot use the "in" operator on this value'):t.has(e),Ns=(t,e,i)=>(fo(t,e,"read from private field"),i?i.call(t):e.get(t)),Ws=(t,e,i,n)=>(fo(t,e,"write to private field"),n?n.call(t,i):e.set(t,i),i),m0=(t,e,i)=>(fo(t,e,"access private method"),i),ac,nc,ct;nc=[T({name:"custom-title-formatter",template:'<span style="font-weight: bold" innerhtml.bind="model.assignee.name"></span></template>'})],ac=[D()];class ut{constructor(){c0(this,"model",Un(ct,8,this)),Un(ct,11,this)}}ct=l0();ic(ct,5,"model",ac,ut);ut=ic(ct,0,"CustomTitleFormatter",nc,ut);Un(ct,1,ut);const rc="editor-select",qn=`<div>
  <span if.bind="model.collection">
    <select class="form-control form-select" value.bind="selectedItem" matcher.bind="itemMatcher">
      <option repeat.for="item of model.collection" model.bind="item">\${item.name}</option>
    </select>
  </span>
</div>
`,oc=[],lc={};let Ga;function p0(t){Ga||(Ga=E.define({name:rc,template:qn,dependencies:oc,bindables:lc})),t.register(Ga)}const h0=Object.freeze(Object.defineProperty({__proto__:null,bindables:lc,default:qn,dependencies:oc,name:rc,register:p0,template:qn},Symbol.toStringTag,{value:"Module"}));var g0=Object.create,vo=Object.defineProperty,b0=Object.getOwnPropertyDescriptor,f0=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),si=t=>{throw TypeError(t)},sc=(t,e,i)=>e in t?vo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Bs=(t,e)=>vo(t,"name",{value:e,configurable:!0}),v0=t=>[,,,g0(null)],dc=["class","method","getter","setter","accessor","field","value","get","set"],Rt=t=>t!==void 0&&typeof t!="function"?si("Function expected"):t,_0=(t,e,i,n,a)=>({kind:dc[t],name:e,metadata:n,addInitializer:r=>i._?si("Already initialized"):a.push(Rt(r||null))}),y0=(t,e)=>sc(e,f0("metadata"),t[3]),Ze=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)e&1?r[a].call(i):n=r[a].call(i,n);return n},ka=(t,e,i,n,a,r)=>{var l,d,u,s,m,o=e&7,g=!!(e&8),c=!!(e&16),p=o>3?t.length+1:o?g?1:2:0,_=dc[o+5],w=o>3&&(t[p-1]=[]),x=t[p]||(t[p]=[]),b=o&&(!c&&!g&&(a=a.prototype),o<5&&(o>3||!c)&&b0(o<4?a:{get[i](){return js(this,r)},set[i](h){return Vs(this,r,h)}},i));o?c&&o<4&&Bs(r,(o>2?"set ":o>1?"get ":"")+i):Bs(a,i);for(var y=n.length-1;y>=0;y--)s=_0(o,i,u={},t[3],x),o&&(s.static=g,s.private=c,m=s.access={has:c?h=>S0(a,h):h=>i in h},o^3&&(m.get=c?h=>(o^1?js:C0)(h,a,o^4?r:b.get):h=>h[i]),o>2&&(m.set=c?(h,S)=>Vs(h,a,S,o^4?r:b.set):(h,S)=>h[i]=S)),d=(0,n[y])(o?o<4?c?r:b[_]:o>4?void 0:{get:b.get,set:b.set}:a,s),u._=1,o^4||d===void 0?Rt(d)&&(o>4?w.unshift(d):o?c?r=d:b[_]=d:a=d):typeof d!="object"||d===null?si("Object expected"):(Rt(l=d.get)&&(b.get=l),Rt(l=d.set)&&(b.set=l),Rt(l=d.init)&&w.unshift(l));return o||y0(t,a),b&&vo(a,i,b),c?o^4?r:b:a},Ci=(t,e,i)=>sc(t,typeof e!="symbol"?e+"":e,i),_o=(t,e,i)=>e.has(t)||si("Cannot "+i),S0=(t,e)=>Object(e)!==e?si('Cannot use the "in" operator on this value'):t.has(e),js=(t,e,i)=>(_o(t,e,"read from private field"),i?i.call(t):e.get(t)),Vs=(t,e,i,n)=>(_o(t,e,"write to private field"),n?n.call(t,i):e.set(t,i),i),C0=(t,e,i)=>(_o(t,e,"access private method"),i),cc,uc,mc,pc,Q;pc=[T(h0)],mc=[D()],uc=[D()],cc=[D];class Ve{constructor(e=O(HTMLElement)){this.elm=e,Ci(this,"model",Ze(Q,8,this)),Ze(Q,11,this),Ci(this,"grid",Ze(Q,12,this)),Ze(Q,15,this),Ci(this,"selectedItem",Ze(Q,16,this)),Ze(Q,19,this),Ci(this,"itemMatcher",(i,n)=>i&&n&&i.id===n.id)}focus(){this.elm.querySelector("select")?.focus()}hide(){this.elm.style.display="none"}show(){this.elm.style.display="block"}selectedItemChanged(){}}Q=v0();ka(Q,5,"model",mc,Ve);ka(Q,5,"grid",uc,Ve);ka(Q,5,"selectedItem",cc,Ve);Ve=ka(Q,0,"EditorSelect",pc,Ve);Ze(Q,1,Ve);var w0=Object.create,yo=Object.defineProperty,x0=Object.getOwnPropertyDescriptor,T0=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),hc=t=>{throw TypeError(t)},E0=(t,e,i)=>e in t?yo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,$0=(t,e)=>yo(t,"name",{value:e,configurable:!0}),k0=t=>[,,,w0(null)],D0=["class","method","getter","setter","accessor","field","value","get","set"],gc=t=>t!==void 0&&typeof t!="function"?hc("Function expected"):t,O0=(t,e,i,n,a)=>({kind:D0[t],name:e,metadata:n,addInitializer:r=>i._?hc("Already initialized"):a.push(gc(r||null))}),M0=(t,e)=>E0(e,T0("metadata"),t[3]),P0=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},I0=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&x0(a,i));$0(a,i);for(var p=n.length-1;p>=0;p--)u=O0(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,gc(l)&&(a=l);return M0(t,a),c&&yo(a,i,c),m?s^4?r:c:a},bc,So;bc=[T({name:"example-detail-preload",template:`<div class="container-fluid d-flex align-items-center" style="margin-top: 10px">
    <i class="mdi mdi-sync mdi-spin font-50px"></i>
    <h4>Loading...</h4>
  </div>`})];class mt{dispose(){console.log("preload detaching")}}So=k0();mt=I0(So,0,"ExampleDetailPreload",bc,mt);P0(So,1,mt);const fc="example19-detail-view",Yn=`<div class="container-fluid" style="margin-top: 10px">
  <h3>\${model.title}</h3>
  <div class="row">
    <div class="col-3 detail-label"><label>Assignee:</label> <input class="form-control" value.bind="model.assignee" /></div>
    <div class="col-3 detail-label"><label>Reporter:</label> <span>\${model.reporter}</span></div>
    <div class="col-3 detail-label"><label>Duration:</label> <span>\${model.duration | decimal: 2}</span></div>
    <div class="col-3 detail-label"><label>% Complete:</label> <span>\${model.percentComplete}</span></div>
  </div>

  <div class="row">
    <div class="col-3 detail-label"><label>Start:</label> <span>\${model.start | dateFormat: 'YYYY-MM-DD'}</span></div>
    <div class="col-3 detail-label"><label>Finish:</label> <span>\${model.finish | dateFormat: 'YYYY-MM-DD'}</span></div>
    <div class="col-3 detail-label"><label>Effort Driven:</label> <i class.bind="model.effortDriven ? 'mdi mdi-check' : ''"></i></div>
  </div>

  <hr />

  <div class="col-sm-8">
    <h4>
      Find out who is the Assignee
      <small>
        <button class="btn btn-primary btn-sm" click.trigger="alertAssignee(model.assignee)" data-test="assignee-btn">Click Me</button>
      </small>
    </h4>
  </div>

  <div class="col-sm-4">
    <button class="btn btn-primary btn-danger btn-sm" click.trigger="deleteRow(model)" data-test="delete-btn">Delete Row</button>
    <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="callParentMethod(model)" data-test="parent-btn">
      Call Parent Method
    </button>
  </div>
</div>
`,vc=[],_c={};let Fa;function G0(t){Fa||(Fa=E.define({name:fc,template:Yn,dependencies:vc,bindables:_c})),t.register(Fa)}const F0=Object.freeze(Object.defineProperty({__proto__:null,bindables:_c,default:Yn,dependencies:vc,name:fc,register:G0,template:Yn},Symbol.toStringTag,{value:"Module"}));var A0=Object.create,Co=Object.defineProperty,R0=Object.getOwnPropertyDescriptor,L0=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),di=t=>{throw TypeError(t)},yc=(t,e,i)=>e in t?Co(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Hs=(t,e)=>Co(t,"name",{value:e,configurable:!0}),z0=t=>[,,,A0(null)],Sc=["class","method","getter","setter","accessor","field","value","get","set"],Lt=t=>t!==void 0&&typeof t!="function"?di("Function expected"):t,N0=(t,e,i,n,a)=>({kind:Sc[t],name:e,metadata:n,addInitializer:r=>i._?di("Already initialized"):a.push(Lt(r||null))}),W0=(t,e)=>yc(e,L0("metadata"),t[3]),ae=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)e&1?r[a].call(i):n=r[a].call(i,n);return n},Tt=(t,e,i,n,a,r)=>{var l,d,u,s,m,o=e&7,g=!!(e&8),c=!!(e&16),p=o>3?t.length+1:o?g?1:2:0,_=Sc[o+5],w=o>3&&(t[p-1]=[]),x=t[p]||(t[p]=[]),b=o&&(!c&&!g&&(a=a.prototype),o<5&&(o>3||!c)&&R0(o<4?a:{get[i](){return Us(this,r)},set[i](h){return qs(this,r,h)}},i));o?c&&o<4&&Hs(r,(o>2?"set ":o>1?"get ":"")+i):Hs(a,i);for(var y=n.length-1;y>=0;y--)s=N0(o,i,u={},t[3],x),o&&(s.static=g,s.private=c,m=s.access={has:c?h=>B0(a,h):h=>i in h},o^3&&(m.get=c?h=>(o^1?Us:j0)(h,a,o^4?r:b.get):h=>h[i]),o>2&&(m.set=c?(h,S)=>qs(h,a,S,o^4?r:b.set):(h,S)=>h[i]=S)),d=(0,n[y])(o?o<4?c?r:b[_]:o>4?void 0:{get:b.get,set:b.set}:a,s),u._=1,o^4||d===void 0?Lt(d)&&(o>4?w.unshift(d):o?c?r=d:b[_]=d:a=d):typeof d!="object"||d===null?di("Object expected"):(Lt(l=d.get)&&(b.get=l),Lt(l=d.set)&&(b.set=l),Lt(l=d.init)&&w.unshift(l));return o||W0(t,a),b&&Co(a,i,b),c?o^4?r:b:a},$t=(t,e,i)=>yc(t,typeof e!="symbol"?e+"":e,i),wo=(t,e,i)=>e.has(t)||di("Cannot "+i),B0=(t,e)=>Object(e)!==e?di('Cannot use the "in" operator on this value'):t.has(e),Us=(t,e,i)=>(wo(t,e,"read from private field"),i?i.call(t):e.get(t)),qs=(t,e,i,n)=>(wo(t,e,"write to private field"),n?n.call(t,i):e.set(t,i),i),j0=(t,e,i)=>(wo(t,e,"access private method"),i),Cc,wc,xc,Tc,Ec,$c,A;$c=[T(F0)],Ec=[D()],Tc=[D()],xc=[D()],wc=[D()],Cc=[D()];class fe{constructor(){$t(this,"model",ae(A,8,this)),ae(A,11,this),$t(this,"addon",ae(A,12,this)),ae(A,15,this),$t(this,"grid",ae(A,16,this)),ae(A,19,this),$t(this,"dataView",ae(A,20,this)),ae(A,23,this),$t(this,"parentRef",ae(A,24,this)),ae(A,27,this)}alertAssignee(e){alert(typeof e=="string"?`Assignee on this task is: ${e.toUpperCase()}`:"No one is assigned to this task.")}deleteRow(e){confirm(`Are you sure that you want to delete ${e.title}?`)&&(this.addon.collapseAll(),this.dataView.deleteItem(e.rowId),this.parentRef.showFlashMessage(`Deleted row with ${e.title}`,"danger"))}callParentMethod(e){this.parentRef.showFlashMessage(`We just called Parent Method from the Row Detail Child Component on ${e.title}`)}}A=z0();Tt(A,5,"model",Ec,fe);Tt(A,5,"addon",Tc,fe);Tt(A,5,"grid",xc,fe);Tt(A,5,"dataView",wc,fe);Tt(A,5,"parentRef",Cc,fe);fe=Tt(A,0,"Example19DetailView",$c,fe);ae(A,1,fe);var V0=Object.create,xo=Object.defineProperty,H0=Object.getOwnPropertyDescriptor,U0=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),ci=t=>{throw TypeError(t)},kc=(t,e,i)=>e in t?xo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Ys=(t,e)=>xo(t,"name",{value:e,configurable:!0}),q0=t=>[,,,V0(null)],Dc=["class","method","getter","setter","accessor","field","value","get","set"],zt=t=>t!==void 0&&typeof t!="function"?ci("Function expected"):t,Y0=(t,e,i,n,a)=>({kind:Dc[t],name:e,metadata:n,addInitializer:r=>i._?ci("Already initialized"):a.push(zt(r||null))}),K0=(t,e)=>kc(e,U0("metadata"),t[3]),Kn=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)e&1?r[a].call(i):n=r[a].call(i,n);return n},Oc=(t,e,i,n,a,r)=>{var l,d,u,s,m,o=e&7,g=!!(e&8),c=!!(e&16),p=o>3?t.length+1:o?g?1:2:0,_=Dc[o+5],w=o>3&&(t[p-1]=[]),x=t[p]||(t[p]=[]),b=o&&(!c&&!g&&(a=a.prototype),o<5&&(o>3||!c)&&H0(o<4?a:{get[i](){return Ks(this,r)},set[i](h){return Qs(this,r,h)}},i));o?c&&o<4&&Ys(r,(o>2?"set ":o>1?"get ":"")+i):Ys(a,i);for(var y=n.length-1;y>=0;y--)s=Y0(o,i,u={},t[3],x),o&&(s.static=g,s.private=c,m=s.access={has:c?h=>Q0(a,h):h=>i in h},o^3&&(m.get=c?h=>(o^1?Ks:Z0)(h,a,o^4?r:b.get):h=>h[i]),o>2&&(m.set=c?(h,S)=>Qs(h,a,S,o^4?r:b.set):(h,S)=>h[i]=S)),d=(0,n[y])(o?o<4?c?r:b[_]:o>4?void 0:{get:b.get,set:b.set}:a,s),u._=1,o^4||d===void 0?zt(d)&&(o>4?w.unshift(d):o?c?r=d:b[_]=d:a=d):typeof d!="object"||d===null?ci("Object expected"):(zt(l=d.get)&&(b.get=l),zt(l=d.set)&&(b.set=l),zt(l=d.init)&&w.unshift(l));return o||K0(t,a),b&&xo(a,i,b),c?o^4?r:b:a},at=(t,e,i)=>kc(t,typeof e!="symbol"?e+"":e,i),To=(t,e,i)=>e.has(t)||ci("Cannot "+i),Q0=(t,e)=>Object(e)!==e?ci('Cannot use the "in" operator on this value'):t.has(e),Ks=(t,e,i)=>(To(t,e,"read from private field"),i?i.call(t):e.get(t)),Qs=(t,e,i,n)=>(To(t,e,"write to private field"),n?n.call(t,i):e.set(t,i),i),Z0=(t,e,i)=>(To(t,e,"access private method"),i),Mc,Pc,pt;Pc=[T({name:"custom-pager",template:`<div class="custom-pagination">
  <span class="custom-pagination-settings">
    <span class="custom-pagination-count">
      <span class="page-info-from-to">
        <span class="item-from" aria-label="Page Item From" data-test="item-from">
        \${currentPagination?.dataFrom}
        </span>-
        <span class="item-to" aria-label="Page Item To" data-test="item-to">
        \${currentPagination?.dataTo}
        </span>
      of
      </span>
      <span class="page-info-total-items">
        <span class="total-items" aria-label="Total Items" data-test="total-items">\${currentPagination?.totalItems}</span>
        <span class="text-items"> items</span>
      </span>
    </span>
  </span>
<div class="custom-pagination-nav">
<nav aria-label="Page navigation">
  <ul class="custom-pagination-ul">
    <li class="li page-item seek-first" disabled.class="isLeftPaginationDisabled">
      <a class="pagination-link mdi mdi-page-first icon-seek-first font-22px" aria-label="First Page" role="button" click.trigger="onFirstPageClicked($event)"></a>
    </li>
    <li class="li page-item seek-prev" disabled.class="isLeftPaginationDisabled">
      <a class="pagination-link icon-seek-prev mdi mdi-chevron-down font-22px mdi-rotate-90" aria-label="Previous Page" role="button" click.trigger="onPreviousPageClicked($event)"></a>
    </li>
  </ul>
</nav>
<div class="page-number">
  <span class="text-page">Page</span>
  <span class="page-number" aria-label="Page Number" data-test="page-number-label">\${currentPagination?.pageNumber}</span>
  of
  <span class="page-count" data-test="page-count">\${currentPagination?.pageCount}</span>
</div>
<nav aria-label="Page navigation">
  <ul class="custom-pagination-ul">
    <li class="li page-item seek-next" disabled.class="isRightPaginationDisabled" click.trigger="onNextPageClicked($event)">
      <a class="pagination-link icon-seek-next mdi mdi-chevron-down font-22px mdi-rotate-270" aria-label="Next Page" role="button" ></a>
    </li>
    <li class="li page-item seek-end"  disabled.class="isRightPaginationDisabled">
      <a class="pagination-link icon-seek-end mdi mdi-page-last font-22px" aria-label="Last Page" role="button" click.trigger="onLastPageClicked($event)"></a>
    </li>
  </ul>
</nav>
</div>
</div>`})],Mc=[D()];class ht{constructor(e=O(HTMLElement)){this.elm=e,at(this,"_paginationElement"),at(this,"_subscriptions",[]),at(this,"_grid"),at(this,"_paginationService"),at(this,"_pubSubService"),at(this,"currentPagination",Kn(pt,8,this,{})),Kn(pt,11,this)}get isLeftPaginationDisabled(){return this.currentPagination.pageNumber===1||this.currentPagination.totalItems===0}get isRightPaginationDisabled(){return this.currentPagination.pageNumber===this.currentPagination.pageCount||this.currentPagination.totalItems===0}init(e,i,n){this._grid=e,this._paginationService=i,this._pubSubService=n,this.currentPagination=this._paginationService.getFullPagination(),this._subscriptions.push(this._pubSubService.subscribe("onPaginationRefreshed",a=>{this.currentPagination.dataFrom=a.dataFrom,this.currentPagination.dataTo=a.dataTo,this.currentPagination.pageCount=a.pageCount,this.currentPagination.pageNumber=a.pageNumber,this.currentPagination.pageSize=a.pageSize,this.currentPagination.pageSizes=a.pageSizes,this.currentPagination.totalItems=a.totalItems}))}dispose(){this._pubSubService.unsubscribeAll(this._subscriptions),this.disposeElement()}disposeElement(){this._paginationElement?.remove()}renderPagination(e,i="top"){this._paginationElement=this.elm,this._paginationElement.id="pager",this._paginationElement.className=`pagination-container pager ${this._grid.getUID()}`,this._paginationElement.style.width="100%",i==="top"?(this._paginationElement.classList.add("top"),e.prepend(this._paginationElement)):(this._paginationElement.classList.add("bottom"),e.appendChild(this._paginationElement))}onFirstPageClicked(e){this.isLeftPaginationDisabled||this._paginationService.goToFirstPage(e)}onLastPageClicked(e){this.isRightPaginationDisabled||this._paginationService.goToLastPage(e)}onNextPageClicked(e){this.isRightPaginationDisabled||this._paginationService.goToNextPage(e)}onPreviousPageClicked(e){this.isLeftPaginationDisabled||this._paginationService.goToPreviousPage(e)}}pt=q0();Oc(pt,5,"currentPagination",Mc,ht);ht=Oc(pt,0,"CustomPagerComponent",Pc,ht);Kn(pt,1,ht);const Ic="example45-detail-view",Qn=`<div class.bind="innerGridClass">
  <h4>\${ model.companyName } - Order Details (id: \${ model.id })</h4>
  <div class="container-fluid">
    <aurelia-slickgrid
      if.bind="showGrid"
      class="innergrid"
      grid-id.bind="gridId"
      columns.bind="innerColDefs"
      options.bind="innerGridOptions"
      dataset.bind="innerDataset"
      instances.bind="aureliaGrid"
      on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
      on-before-grid-destroy.trigger="handleBeforeGridDestroy()"
    >
    </aurelia-slickgrid>
  </div>
</div>
`,Gc=[],Fc={};let Aa;function J0(t){Aa||(Aa=E.define({name:Ic,template:Qn,dependencies:Gc,bindables:Fc})),t.register(Aa)}const X0=Object.freeze(Object.defineProperty({__proto__:null,bindables:Fc,default:Qn,dependencies:Gc,name:Ic,register:J0,template:Qn},Symbol.toStringTag,{value:"Module"}));var ew=Object.create,Eo=Object.defineProperty,tw=Object.getOwnPropertyDescriptor,iw=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),ui=t=>{throw TypeError(t)},Ac=(t,e,i)=>e in t?Eo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Zs=(t,e)=>Eo(t,"name",{value:e,configurable:!0}),aw=t=>[,,,ew(null)],Rc=["class","method","getter","setter","accessor","field","value","get","set"],Nt=t=>t!==void 0&&typeof t!="function"?ui("Function expected"):t,nw=(t,e,i,n,a)=>({kind:Rc[t],name:e,metadata:n,addInitializer:r=>i._?ui("Already initialized"):a.push(Nt(r||null))}),rw=(t,e)=>Ac(e,iw("metadata"),t[3]),Zn=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)e&1?r[a].call(i):n=r[a].call(i,n);return n},Lc=(t,e,i,n,a,r)=>{var l,d,u,s,m,o=e&7,g=!!(e&8),c=!!(e&16),p=o>3?t.length+1:o?g?1:2:0,_=Rc[o+5],w=o>3&&(t[p-1]=[]),x=t[p]||(t[p]=[]),b=o&&(!c&&!g&&(a=a.prototype),o<5&&(o>3||!c)&&tw(o<4?a:{get[i](){return Js(this,r)},set[i](h){return Xs(this,r,h)}},i));o?c&&o<4&&Zs(r,(o>2?"set ":o>1?"get ":"")+i):Zs(a,i);for(var y=n.length-1;y>=0;y--)s=nw(o,i,u={},t[3],x),o&&(s.static=g,s.private=c,m=s.access={has:c?h=>ow(a,h):h=>i in h},o^3&&(m.get=c?h=>(o^1?Js:lw)(h,a,o^4?r:b.get):h=>h[i]),o>2&&(m.set=c?(h,S)=>Xs(h,a,S,o^4?r:b.set):(h,S)=>h[i]=S)),d=(0,n[y])(o?o<4?c?r:b[_]:o>4?void 0:{get:b.get,set:b.set}:a,s),u._=1,o^4||d===void 0?Nt(d)&&(o>4?w.unshift(d):o?c?r=d:b[_]=d:a=d):typeof d!="object"||d===null?ui("Object expected"):(Nt(l=d.get)&&(b.get=l),Nt(l=d.set)&&(b.set=l),Nt(l=d.init)&&w.unshift(l));return o||rw(t,a),b&&Eo(a,i,b),c?o^4?r:b:a},Re=(t,e,i)=>Ac(t,typeof e!="symbol"?e+"":e,i),$o=(t,e,i)=>e.has(t)||ui("Cannot "+i),ow=(t,e)=>Object(e)!==e?ui('Cannot use the "in" operator on this value'):t.has(e),Js=(t,e,i)=>($o(t,e,"read from private field"),i?i.call(t):e.get(t)),Xs=(t,e,i,n)=>($o(t,e,"write to private field"),n?n.call(t,i):e.set(t,i),i),lw=(t,e,i)=>($o(t,e,"access private method"),i),zc,Nc,gt;Nc=[T(X0)],zc=[D()];class bt{constructor(){Re(this,"model",Zn(gt,8,this)),Zn(gt,11,this),Re(this,"innerColDefs",[]),Re(this,"innerGridOptions"),Re(this,"aureliaGrid"),Re(this,"innerDataset",[]),Re(this,"showGrid",!1),Re(this,"gridId",""),Re(this,"innerGridClass","")}attached(){this.gridId=`innergrid-${this.model.id}`,this.innerGridClass=`row-detail-${this.model.id}`,this.defineGrid(),this.innerDataset=[...this.model.orderData],this.showGrid=!0}aureliaGridReady(e){this.aureliaGrid=e}defineGrid(){let e;if(this.model.isUsingInnerGridStatePresets){const i=sessionStorage.getItem(`gridstate_${this.innerGridClass}`);i&&(e=JSON.parse(i))}this.innerColDefs=[{id:"orderId",field:"orderId",name:"Order ID",filterable:!0,sortable:!0},{id:"shipCity",field:"shipCity",name:"Ship City",filterable:!0,sortable:!0},{id:"freight",field:"freight",name:"Freight",filterable:!0,sortable:!0,type:"number"},{id:"shipName",field:"shipName",name:"Ship Name",filterable:!0,sortable:!0}],this.innerGridOptions={autoResize:{container:`.${this.innerGridClass}`,rightPadding:30,minHeight:200},enableFiltering:!0,enableSorting:!0,rowHeight:33,enableCellNavigation:!0,datasetIdPropertyName:"orderId",presets:e,rowTopOffsetRenderType:"top"}}handleBeforeGridDestroy(){if(console.log("handleBeforeGridDestroy",this.model),this.model.isUsingInnerGridStatePresets){const e=this.aureliaGrid.gridStateService.getCurrentGridState();sessionStorage.setItem(`gridstate_${this.innerGridClass}`,JSON.stringify(e))}}}gt=aw();Lc(gt,5,"model",zc,bt);bt=Lc(gt,0,"Example45DetailView",Nc,bt);Zn(gt,1,bt);var sw=Object.create,ko=Object.defineProperty,dw=Object.getOwnPropertyDescriptor,cw=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Wc=t=>{throw TypeError(t)},uw=(t,e,i)=>e in t?ko(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,mw=(t,e)=>ko(t,"name",{value:e,configurable:!0}),pw=t=>[,,,sw(null)],hw=["class","method","getter","setter","accessor","field","value","get","set"],Bc=t=>t!==void 0&&typeof t!="function"?Wc("Function expected"):t,gw=(t,e,i,n,a)=>({kind:hw[t],name:e,metadata:n,addInitializer:r=>i._?Wc("Already initialized"):a.push(Bc(r||null))}),bw=(t,e)=>uw(e,cw("metadata"),t[3]),fw=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},vw=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&dw(a,i));mw(a,i);for(var p=n.length-1;p>=0;p--)u=gw(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,Bc(l)&&(a=l);return bw(t,a),c&&ko(a,i,c),m?s^4?r:c:a},jc,Do;jc=[T({name:"example45-preload",template:`<div class="container-fluid d-flex align-items-center" style="margin-top: 10px">
    <i class="mdi mdi-sync mdi-spin font-50px"></i>
    <h4>Loading...</h4>
  </div>`})];class ei{dispose(){console.log("preload detaching")}}Do=pw();ei=vw(Do,0,"Example45Preload",jc,ei);fw(Do,1,ei);const Vc="example47-detail-view",Jn=`<div class="container-fluid" style="margin-top: 10px">
  <h3>\${model.title}</h3>
  <div class="row">
    <div class="col-3 detail-label"><label>Assignee:</label> <input class="form-control assignee" value.bind="model.assignee" /></div>
    <div class="col-3 detail-label"><label>Reporter:</label> <span>\${model.reporter}</span></div>
    <div class="col-3 detail-label"><label>Duration:</label> <span>\${model.duration | decimal: 2}</span></div>
    <div class="col-3 detail-label"><label>% Complete:</label> <span>\${model.percentComplete}</span></div>
  </div>

  <div class="row">
    <div class="col-3 detail-label"><label>Start:</label> <span>\${model.start | dateFormat: 'YYYY-MM-DD'}</span></div>
    <div class="col-3 detail-label"><label>Finish:</label> <span>\${model.finish | dateFormat: 'YYYY-MM-DD'}</span></div>
    <div class="col-3 detail-label"><label>Effort Driven:</label> <i class.bind="model.effortDriven ? 'mdi mdi-check' : ''"></i></div>
  </div>

  <hr />

  <div class="col-sm-8">
    <h4>
      Find out who is the Assignee
      <small>
        <button class="btn btn-primary btn-sm" click.trigger="alertAssignee(model.assignee)" data-test="assignee-btn">Click Me</button>
      </small>
    </h4>
  </div>

  <div class="col-sm-4">
    <button class="btn btn-primary btn-danger btn-sm" click.trigger="deleteRow(model)" data-test="delete-btn">Delete Row</button>
    <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="showNotification(model)" data-test="parent-btn">
      Call Parent Method
    </button>
  </div>
</div>
`,Hc=[],Uc={};let Ra;function _w(t){Ra||(Ra=E.define({name:Vc,template:Jn,dependencies:Hc,bindables:Uc})),t.register(Ra)}const yw=Object.freeze(Object.defineProperty({__proto__:null,bindables:Uc,default:Jn,dependencies:Hc,name:Vc,register:_w,template:Jn},Symbol.toStringTag,{value:"Module"}));function kt(t,e,i=!0){const n=Math.random()*(e-t+1)+t;return i?Math.floor(n):n}function Xn(t,e,i=2e3){const n=document.createElement("div");n.setAttribute("popover",""),n.className=`toast align-items-center text-bg-${e} border-0`,n.style.position="absolute",n.style.zIndex="9999";const a=document.createElement("div");if(a.className="toast-body",a.textContent=t,n.appendChild(a),document.body.appendChild(n),typeof n.showPopover=="function"){n.style.display="block",n.style.margin="0 auto",n.style.marginTop="20px",n.style.borderWidth="0px",n.showPopover(),setTimeout(()=>{n.hidePopover(),n.remove()},i);return}}function nt(t){const e=parseInt(t,10);return e<10?`0${e}`:e}var Sw=Object.create,Oo=Object.defineProperty,Cw=Object.getOwnPropertyDescriptor,ww=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),mi=t=>{throw TypeError(t)},qc=(t,e,i)=>e in t?Oo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,ed=(t,e)=>Oo(t,"name",{value:e,configurable:!0}),xw=t=>[,,,Sw(null)],Yc=["class","method","getter","setter","accessor","field","value","get","set"],Wt=t=>t!==void 0&&typeof t!="function"?mi("Function expected"):t,Tw=(t,e,i,n,a)=>({kind:Yc[t],name:e,metadata:n,addInitializer:r=>i._?mi("Already initialized"):a.push(Wt(r||null))}),Ew=(t,e)=>qc(e,ww("metadata"),t[3]),ne=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)e&1?r[a].call(i):n=r[a].call(i,n);return n},Et=(t,e,i,n,a,r)=>{var l,d,u,s,m,o=e&7,g=!!(e&8),c=!!(e&16),p=o>3?t.length+1:o?g?1:2:0,_=Yc[o+5],w=o>3&&(t[p-1]=[]),x=t[p]||(t[p]=[]),b=o&&(!c&&!g&&(a=a.prototype),o<5&&(o>3||!c)&&Cw(o<4?a:{get[i](){return td(this,r)},set[i](h){return id(this,r,h)}},i));o?c&&o<4&&ed(r,(o>2?"set ":o>1?"get ":"")+i):ed(a,i);for(var y=n.length-1;y>=0;y--)s=Tw(o,i,u={},t[3],x),o&&(s.static=g,s.private=c,m=s.access={has:c?h=>$w(a,h):h=>i in h},o^3&&(m.get=c?h=>(o^1?td:kw)(h,a,o^4?r:b.get):h=>h[i]),o>2&&(m.set=c?(h,S)=>id(h,a,S,o^4?r:b.set):(h,S)=>h[i]=S)),d=(0,n[y])(o?o<4?c?r:b[_]:o>4?void 0:{get:b.get,set:b.set}:a,s),u._=1,o^4||d===void 0?Wt(d)&&(o>4?w.unshift(d):o?c?r=d:b[_]=d:a=d):typeof d!="object"||d===null?mi("Object expected"):(Wt(l=d.get)&&(b.get=l),Wt(l=d.set)&&(b.set=l),Wt(l=d.init)&&w.unshift(l));return o||Ew(t,a),b&&Oo(a,i,b),c?o^4?r:b:a},Dt=(t,e,i)=>qc(t,typeof e!="symbol"?e+"":e,i),Mo=(t,e,i)=>e.has(t)||mi("Cannot "+i),$w=(t,e)=>Object(e)!==e?mi('Cannot use the "in" operator on this value'):t.has(e),td=(t,e,i)=>(Mo(t,e,"read from private field"),i?i.call(t):e.get(t)),id=(t,e,i,n)=>(Mo(t,e,"write to private field"),n?n.call(t,i):e.set(t,i),i),kw=(t,e,i)=>(Mo(t,e,"access private method"),i),Kc,Qc,Zc,Jc,Xc,eu,R;eu=[T(yw)],Xc=[D()],Jc=[D()],Zc=[D()],Qc=[D()],Kc=[D()];class ve{constructor(){Dt(this,"model",ne(R,8,this)),ne(R,11,this),Dt(this,"addon",ne(R,12,this)),ne(R,15,this),Dt(this,"grid",ne(R,16,this)),ne(R,19,this),Dt(this,"dataView",ne(R,20,this)),ne(R,23,this),Dt(this,"parentRef",ne(R,24,this)),ne(R,27,this)}alertAssignee(e){alert(typeof e=="string"?`Assignee on this task is: ${e.toUpperCase()}`:"No one is assigned to this task.")}deleteRow(e){confirm(`Are you sure that you want to delete ${e.title}?`)&&(this.addon.collapseAll(),this.dataView.deleteItem(e.id),Xn(`Deleted row with ${e.title}`,"danger"))}showNotification(e){Xn(`We just called Parent Method from the Row Detail Child Component on ${e.title}`,"info")}}R=xw();Et(R,5,"model",Xc,ve);Et(R,5,"addon",Jc,ve);Et(R,5,"grid",Zc,ve);Et(R,5,"dataView",Qc,ve);Et(R,5,"parentRef",Kc,ve);ve=Et(R,0,"Example47DetailView",eu,ve);ne(R,1,ve);const tu="filter-select",er=`<div>
  <span if.bind="model.collection">
    <select class="form-control form-select" value.bind="selectedItem" matcher.bind="itemMatcher">
      <option repeat.for="item of model.collection" model.bind="item">\${item.name}</option>
    </select>
  </span>
</div>
`,iu=[],au={};let La;function Dw(t){La||(La=E.define({name:tu,template:er,dependencies:iu,bindables:au})),t.register(La)}const Ow=Object.freeze(Object.defineProperty({__proto__:null,bindables:au,default:er,dependencies:iu,name:tu,register:Dw,template:er},Symbol.toStringTag,{value:"Module"}));var Mw=Object.create,Po=Object.defineProperty,Pw=Object.getOwnPropertyDescriptor,Iw=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),pi=t=>{throw TypeError(t)},nu=(t,e,i)=>e in t?Po(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,ad=(t,e)=>Po(t,"name",{value:e,configurable:!0}),Gw=t=>[,,,Mw(null)],ru=["class","method","getter","setter","accessor","field","value","get","set"],Bt=t=>t!==void 0&&typeof t!="function"?pi("Function expected"):t,Fw=(t,e,i,n,a)=>({kind:ru[t],name:e,metadata:n,addInitializer:r=>i._?pi("Already initialized"):a.push(Bt(r||null))}),Aw=(t,e)=>nu(e,Iw("metadata"),t[3]),Je=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)e&1?r[a].call(i):n=r[a].call(i,n);return n},Da=(t,e,i,n,a,r)=>{var l,d,u,s,m,o=e&7,g=!!(e&8),c=!!(e&16),p=o>3?t.length+1:o?g?1:2:0,_=ru[o+5],w=o>3&&(t[p-1]=[]),x=t[p]||(t[p]=[]),b=o&&(!c&&!g&&(a=a.prototype),o<5&&(o>3||!c)&&Pw(o<4?a:{get[i](){return nd(this,r)},set[i](h){return rd(this,r,h)}},i));o?c&&o<4&&ad(r,(o>2?"set ":o>1?"get ":"")+i):ad(a,i);for(var y=n.length-1;y>=0;y--)s=Fw(o,i,u={},t[3],x),o&&(s.static=g,s.private=c,m=s.access={has:c?h=>Rw(a,h):h=>i in h},o^3&&(m.get=c?h=>(o^1?nd:Lw)(h,a,o^4?r:b.get):h=>h[i]),o>2&&(m.set=c?(h,S)=>rd(h,a,S,o^4?r:b.set):(h,S)=>h[i]=S)),d=(0,n[y])(o?o<4?c?r:b[_]:o>4?void 0:{get:b.get,set:b.set}:a,s),u._=1,o^4||d===void 0?Bt(d)&&(o>4?w.unshift(d):o?c?r=d:b[_]=d:a=d):typeof d!="object"||d===null?pi("Object expected"):(Bt(l=d.get)&&(b.get=l),Bt(l=d.set)&&(b.set=l),Bt(l=d.init)&&w.unshift(l));return o||Aw(t,a),b&&Po(a,i,b),c?o^4?r:b:a},wi=(t,e,i)=>nu(t,typeof e!="symbol"?e+"":e,i),Io=(t,e,i)=>e.has(t)||pi("Cannot "+i),Rw=(t,e)=>Object(e)!==e?pi('Cannot use the "in" operator on this value'):t.has(e),nd=(t,e,i)=>(Io(t,e,"read from private field"),i?i.call(t):e.get(t)),rd=(t,e,i,n)=>(Io(t,e,"write to private field"),n?n.call(t,i):e.set(t,i),i),Lw=(t,e,i)=>(Io(t,e,"access private method"),i),ou,lu,su,du,Z;du=[T(Ow)],su=[D()],lu=[D()],ou=[D];class Ae{constructor(e=O(HTMLElement)){this.elm=e,wi(this,"model",Je(Z,8,this)),Je(Z,11,this),wi(this,"grid",Je(Z,12,this)),Je(Z,15,this),wi(this,"selectedItem",Je(Z,16,this)),Je(Z,19,this),wi(this,"itemMatcher",(i,n)=>i&&n&&i.id===n.id)}focus(){this.elm.querySelector("select")?.focus()}selectedItemChanged(){}}Z=Gw();Da(Z,5,"model",su,Ae);Da(Z,5,"grid",lu,Ae);Da(Z,5,"selectedItem",ou,Ae);Ae=Da(Z,0,"FilterSelect",du,Ae);Je(Z,1,Ae);const zw="modulepreload",Nw=function(t,e){return new URL(t,e).href},od={},$=function(e,i,n){let a=Promise.resolve();if(i&&i.length>0){let s=function(m){return Promise.all(m.map(o=>Promise.resolve(o).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};const l=document.getElementsByTagName("link"),d=document.querySelector("meta[property=csp-nonce]"),u=d?.nonce||d?.getAttribute("nonce");a=s(i.map(m=>{if(m=Nw(m,n),m in od)return;od[m]=!0;const o=m.endsWith(".css"),g=o?'[rel="stylesheet"]':"";if(n)for(let p=l.length-1;p>=0;p--){const _=l[p];if(_.href===m&&(!o||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${m}"]${g}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":zw,o||(c.as="script"),c.crossOrigin="",c.href=m,u&&c.setAttribute("nonce",u),document.head.appendChild(c),o)return new Promise((p,_)=>{c.addEventListener("load",p),c.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${m}`)))})}))}function r(l){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=l,window.dispatchEvent(d),!d.defaultPrevented)throw l}return a.then(l=>{for(const d of l||[])d.status==="rejected"&&r(d.reason);return e().catch(r)})},Ww=""+new URL("aurelia-logo-9YSzF-gF.png",import.meta.url).href,Bw=`<div>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <a class="navbar-brand ms-2" href="https://github.com/ghiscoding/aurelia-slickgrid">
      <i class="mdi mdi-github"></i>
      <span>Aurelia-Slickgrid</span>
    </a>
    <img src.bind="aureliaLogo" class="logo" height="35" alt="image" />
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-target="#navbarContent"
      aria-controls="navbarContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="github-button-container">
      <a href="https://github.com/ghiscoding/slickgrid-universal">
        <img src="https://img.shields.io/github/stars/ghiscoding/slickgrid-universal?style=social" />
      </a>
    </div>

    <div class="navbar-collapse collapse justify-content-end me-2" id="navbarContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="#/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://ghiscoding.gitbook.io/aurelia-slickgrid/" target="_blank"> Documentation </a>
        </li>
        <li class="loader" if.bind="router.isNavigating">
          <i class="mdi mdi-sync mdi-spin font-20px"></i>
        </li>
      </ul>
    </div>
  </nav>

  <div class="panel-wm">
    <section id="panel-left" class="panel-wm-left au-animate">
      <ul class="well nav nav-pills nav-stacked">
        <li class="nav-item fw-bold nav-docs">
          <a class="nav-link" href="https://ghiscoding.gitbook.io/aurelia-slickgrid/" target="_blank"> 📘 Documentation </a>
        </li>
        <li repeat.for="r of routes" class="nav-item">
          <a if.bind="r.path !== 'home'" load.bind="r.path" class="nav-link">\${r.title}</a>
        </li>
      </ul>
    </section>
    <section class="panel-wm-content">
      <div id="demo-container">
        <au-viewport></au-viewport>
      </div>
    </section>
  </div>
</div>
`;var jw=Object.create,Go=Object.defineProperty,Vw=Object.getOwnPropertyDescriptor,Hw=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),cu=t=>{throw TypeError(t)},uu=(t,e,i)=>e in t?Go(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Uw=(t,e)=>Go(t,"name",{value:e,configurable:!0}),qw=t=>[,,,jw(null)],Yw=["class","method","getter","setter","accessor","field","value","get","set"],mu=t=>t!==void 0&&typeof t!="function"?cu("Function expected"):t,Kw=(t,e,i,n,a)=>({kind:Yw[t],name:e,metadata:n,addInitializer:r=>i._?cu("Already initialized"):a.push(mu(r||null))}),Qw=(t,e)=>uu(e,Hw("metadata"),t[3]),Zw=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},Jw=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&Vw(a,i));Uw(a,i);for(var p=n.length-1;p>=0;p--)u=Kw(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,mu(l)&&(a=l);return Qw(t,a),c&&Go(a,i,c),m?s^4?r:c:a},ld=(t,e,i)=>uu(t,typeof e!="symbol"?e+"":e,i),pu,Fo;const hu=[{path:"",redirectTo:"example1"},{path:"example1",component:()=>$(()=>Promise.resolve().then(()=>ux),void 0,import.meta.url),title:"1- Basic Grid / 2 Grids"},{path:"example2",component:()=>$(()=>Promise.resolve().then(()=>Ex),void 0,import.meta.url),title:"2- Formatters"},{path:"example3",component:()=>$(()=>Promise.resolve().then(()=>qx),void 0,import.meta.url),title:"3- Editors / Delete"},{path:"example4",component:()=>$(()=>Promise.resolve().then(()=>s1),void 0,import.meta.url),title:"4- Client Side Sort/Filter"},{path:"example5",component:()=>$(()=>Promise.resolve().then(()=>w1),void 0,import.meta.url),title:"5- Backend OData Service"},{path:"example6",component:()=>$(()=>Promise.resolve().then(()=>L1),void 0,import.meta.url),title:"6- Backend GraphQL Service"},{path:"example7",component:()=>$(()=>Promise.resolve().then(()=>Z1),void 0,import.meta.url),title:"7- Header Button Plugin"},{path:"example8",component:()=>$(()=>Promise.resolve().then(()=>cT),void 0,import.meta.url),title:"8- Header Menu Plugin"},{path:"example9",component:()=>$(()=>Promise.resolve().then(()=>wT),void 0,import.meta.url),title:"9- Grid Menu Control"},{path:"example10",component:()=>$(()=>Promise.resolve().then(()=>GT),void 0,import.meta.url),title:"10- Row Selection / 2 Grids"},{path:"example11",component:()=>$(()=>Promise.resolve().then(()=>qT),void 0,import.meta.url),title:"11- Add/Update Grid Item"},{path:"example12",component:()=>$(()=>Promise.resolve().then(()=>lE),void 0,import.meta.url),title:"12- Localization (i18n)"},{path:"example13",component:()=>$(()=>Promise.resolve().then(()=>SE),void 0,import.meta.url),title:"13- Grouping & Aggregators"},{path:"example14",component:()=>$(()=>Promise.resolve().then(()=>GE),void 0,import.meta.url),title:"14- Column Span & Header Grouping"},{path:"example15",component:()=>$(()=>Promise.resolve().then(()=>qE),void 0,import.meta.url),title:"15- Grid State & Local Storage"},{path:"example16",component:()=>$(()=>Promise.resolve().then(()=>o$),void 0,import.meta.url),title:"16- Row Move Plugin"},{path:"example17",component:()=>$(()=>Promise.resolve().then(()=>y$),void 0,import.meta.url),title:"17- Grid from CSV"},{path:"example18",component:()=>$(()=>Promise.resolve().then(()=>G$),void 0,import.meta.url),title:"18- Draggable Grouping"},{path:"example19",component:()=>$(()=>Promise.resolve().then(()=>q$),void 0,import.meta.url),title:"19- Row Detail View"},{path:"example20",component:()=>$(()=>Promise.resolve().then(()=>ok),void 0,import.meta.url),title:"20- Pinned Columns/Rows"},{path:"example21",component:()=>$(()=>Promise.resolve().then(()=>fk),void 0,import.meta.url),title:"21- Grid AutoHeight (full height)"},{path:"example22",component:()=>$(()=>Promise.resolve().then(()=>Ok),void 0,import.meta.url),title:"22- with Bootstrap Tabs"},{path:"example23",component:()=>$(()=>Promise.resolve().then(()=>Hk),void 0,import.meta.url),title:"23- Filter by Range of Values"},{path:"example24",component:()=>$(()=>Promise.resolve().then(()=>sD),void 0,import.meta.url),title:"24- Cell & Context Menu"},{path:"example25",component:()=>$(()=>Promise.resolve().then(()=>SD),void 0,import.meta.url),title:"25- GraphQL without Pagination"},{path:"example26",component:()=>$(()=>Promise.resolve().then(()=>ND),void 0,import.meta.url),title:"26- Use of Aurelia Components"},{path:"example27",component:()=>$(()=>Promise.resolve().then(()=>eO),void 0,import.meta.url),title:"27- Tree Data (Parent/Child)"},{path:"example28",component:()=>$(()=>Promise.resolve().then(()=>uO),void 0,import.meta.url),title:"28- Tree Data (Hierarchical set)"},{path:"example29",component:()=>$(()=>Promise.resolve().then(()=>RO),void 0,import.meta.url),title:"29- Grid with header and footer slots"},{path:"example30",component:()=>$(()=>Promise.resolve().then(()=>eM),void 0,import.meta.url),title:"30- Composite Editor Modal"},{path:"example31",component:()=>$(()=>Promise.resolve().then(()=>hM),void 0,import.meta.url),title:"31- Backend OData with RxJS"},{path:"example32",component:()=>$(()=>Promise.resolve().then(()=>OM),void 0,import.meta.url),title:"32- Columns Resize by Content"},{path:"example33",component:()=>$(()=>Promise.resolve().then(()=>VM),void 0,import.meta.url),title:"33- Regular & Custom Tooltip"},{path:"example34",component:()=>$(()=>Promise.resolve().then(()=>s2),void 0,import.meta.url),title:"34- Real-Time Trading Platform"},{path:"example35",component:()=>$(()=>Promise.resolve().then(()=>w2),void 0,import.meta.url),title:"35- Row Based Editing"},{path:"example36",component:()=>$(()=>Promise.resolve().then(()=>L2),void 0,import.meta.url),title:"36- Excel Export Formulas"},{path:"example37",component:()=>$(()=>Promise.resolve().then(()=>J2),void 0,import.meta.url),title:"37- Footer Totals Row"},{path:"example38",component:()=>$(()=>Promise.resolve().then(()=>pP),void 0,import.meta.url),title:"38- Infinite Scroll with OData"},{path:"example39",component:()=>$(()=>Promise.resolve().then(()=>$P),void 0,import.meta.url),title:"39- Infinite Scroll with GraphQL"},{path:"example40",component:()=>$(()=>Promise.resolve().then(()=>NP),void 0,import.meta.url),title:"40- Infinite Scroll from JSON data"},{path:"example41",component:()=>$(()=>Promise.resolve().then(()=>XP),void 0,import.meta.url),title:"41- Drag & Drop"},{path:"example42",component:()=>$(()=>Promise.resolve().then(()=>uI),void 0,import.meta.url),title:"42- Custom Pagination"},{path:"example43",component:()=>$(()=>Promise.resolve().then(()=>xI),void 0,import.meta.url),title:"43- Colspan/Rowspan (timesheets)"},{path:"example44",component:()=>$(()=>Promise.resolve().then(()=>RI),void 0,import.meta.url),title:"44- Colspan/Rowspan (large data)"},{path:"example45",component:()=>$(()=>Promise.resolve().then(()=>QI),void 0,import.meta.url),title:"45- Row Detail with inner Grid"},{path:"example46",component:()=>$(()=>Promise.resolve().then(()=>lG),void 0,import.meta.url),title:"46- Tree Data with Lazy Loading"},{path:"example47",component:()=>$(()=>Promise.resolve().then(()=>yG),void 0,import.meta.url),title:"47- Row Detail + Grouping"},{path:"example48",component:()=>$(()=>Promise.resolve().then(()=>IG),void 0,import.meta.url),title:"48- Hybrid Selection Model"},{path:"example49",component:()=>$(()=>Promise.resolve().then(()=>UG),void 0,import.meta.url),title:"49- Spreadsheet Drag-Fill"},{path:"example50",component:()=>$(()=>Promise.resolve().then(()=>rF),void 0,import.meta.url),title:"50- Master/Detail Grids"},{path:"example51",component:()=>$(()=>Promise.resolve().then(()=>_F),void 0,import.meta.url),title:"51- Menus with Slots"},{path:"home",component:()=>$(()=>Promise.resolve().then(()=>IF),void 0,import.meta.url),title:"Home"}];pu=[bv({routes:hu,fallback:"example1"}),T({name:"my-app",template:Bw})];class Gi{constructor(){ld(this,"aureliaLogo",Ww),ld(this,"routes",hu)}attached(){this.addGitHubStarsLogo(),setTimeout(()=>{document.querySelector(".nav-link.active")?.scrollIntoView({block:"nearest"})},45)}addGitHubStarsLogo(){if(decodeURIComponent(document.cookie)!=="serve-mode=cypress"){const i=document.createElement("a");i.href="https://github.com/ghiscoding/slickgrid-universal/tree/master/frameworks/aurelia-slickgrid";const n=document.createElement("img");n.src="https://img.shields.io/github/stars/ghiscoding/slickgrid-universal?style=social";const a=document.querySelector(".github-button-container");a&&!a.querySelector("a")&&(i.appendChild(n),a.appendChild(i))}}}Fo=qw();Gi=Jw(Fo,0,"MyApp",pu,Gi);Zw(Fo,1,Gi);fv.register(vv.customize({activeClass:"active",useUrlFragmentHash:!0,useHref:!0}),ut,ht,fe,bt,ei,ve,mt,Ve,Ae).register(_v.customize(t=>{t.translationAttributeAliases=["i18n","tr"],t.initOptions={resources:{en:{translation:ky},fr:{translation:xC}},lng:"en",fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1}}})).register(yv.customize(t=>{t.options.gridMenu.iconCssClass="mdi mdi-menu",t.options.sanitizer=e=>Sv.sanitize(e,{ADD_ATTR:["level"],RETURN_TRUSTED_TYPE:!0})})).register(Pi,Ii,Mi).app(Gi).start();const gu="example1",tr=`<h2>
  Example 1: Basic Grids
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example1.ts"
    >
      <span class="mdi mdi-link-variant"></span> code
    </a>
  </span>
  <button class="ms-2 btn btn-outline-secondary btn-sm btn-icon" type="button" data-test="toggle-subtitle" click.trigger="toggleSubTitle()">
    <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
  </button>
</h2>

<div class="subtitle">Simple Grids with Fixed Sizes (800 x 225)</div>

<h3>
  <div class="column">
    <span class="mr-3">Grid 1</span>
    <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="toggleDarkModeGrid1()" data-test="toggle-dark-mode">
      <i class="mdi mdi-theme-light-dark"></i>
      <span>Toggle Dark Mode</span>
    </button>
  </div>
</h3>

<div class="grid-container1">
  <aurelia-slickgrid
    grid-id="grid1-1"
    columns.bind="columnDefinitions1"
    options.bind="gridOptions1"
    dataset.bind="dataset1"
    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
  >
  </aurelia-slickgrid>
</div>

<hr />

<h3>Grid 2 <small>(with local Pagination)</small></h3>
<aurelia-slickgrid grid-id="grid1-2" columns.bind="columnDefinitions2" options.bind="gridOptions2" dataset.bind="dataset2">
</aurelia-slickgrid>
`,bu=[],fu={};let za;function Xw(t){za||(za=E.define({name:gu,template:tr,dependencies:bu,bindables:fu})),t.register(za)}const ex=Object.freeze(Object.defineProperty({__proto__:null,bindables:fu,default:tr,dependencies:bu,name:gu,register:Xw,template:tr},Symbol.toStringTag,{value:"Module"}));var tx=Object.create,Ao=Object.defineProperty,ix=Object.getOwnPropertyDescriptor,ax=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),vu=t=>{throw TypeError(t)},_u=(t,e,i)=>e in t?Ao(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,nx=(t,e)=>Ao(t,"name",{value:e,configurable:!0}),rx=t=>[,,,tx(null)],ox=["class","method","getter","setter","accessor","field","value","get","set"],yu=t=>t!==void 0&&typeof t!="function"?vu("Function expected"):t,lx=(t,e,i,n,a)=>({kind:ox[t],name:e,metadata:n,addInitializer:r=>i._?vu("Already initialized"):a.push(yu(r||null))}),sx=(t,e)=>_u(e,ax("metadata"),t[3]),dx=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},cx=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&ix(a,i));nx(a,i);for(var p=n.length-1;p>=0;p--)u=lx(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,yu(l)&&(a=l);return sx(t,a),c&&Ao(a,i,c),m?s^4?r:c:a},Ce=(t,e,i)=>_u(t,typeof e!="symbol"?e+"":e,i),Su,Ro;const sd=995;Su=[T(ex)];class Fi{constructor(){Ce(this,"_darkModeGrid1",!1),Ce(this,"aureliaGrid1"),Ce(this,"gridOptions1"),Ce(this,"gridOptions2"),Ce(this,"columnDefinitions1",[]),Ce(this,"columnDefinitions2",[]),Ce(this,"dataset1",[]),Ce(this,"dataset2",[]),Ce(this,"hideSubTitle",!1),this.defineGrids()}attached(){this.dataset1=this.mockData(sd),this.dataset2=this.mockData(sd)}aureliaGridReady(e){this.aureliaGrid1=e}isBrowserDarkModeEnabled(){return window.matchMedia?.("(prefers-color-scheme: dark)").matches??!1}detaching(){document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light"}defineGrids(){this.columnDefinitions1=[{id:"title",name:"Title",field:"title",sortable:!0,minWidth:100},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,minWidth:100},{id:"%",name:"% Complete",field:"percentComplete",sortable:!0,minWidth:100},{id:"start",name:"Start",field:"start",formatter:f.dateIso},{id:"finish",name:"Finish",field:"finish",formatter:f.dateIso},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",sortable:!0,minWidth:100}],this._darkModeGrid1=this.isBrowserDarkModeEnabled(),this.gridOptions1={darkMode:this._darkModeGrid1,gridHeight:225,gridWidth:800,enableAutoResize:!1,enableSorting:!0},this.columnDefinitions2=this.columnDefinitions1,this.gridOptions2={...this.gridOptions1,darkMode:!1,enablePagination:!0,pagination:{pageSizes:[5,10,20,25,50],pageSize:5}}}mockData(e){const i=[];for(let n=0;n<e;n++){const a=2e3+Math.floor(Math.random()*10),r=Math.floor(Math.random()*11),l=Math.floor(Math.random()*29),d=Math.round(Math.random()*100);i[n]={id:n,title:"Task "+n,duration:Math.round(Math.random()*100)+"",percentComplete:d,start:`${nt(a)}-${nt(r+1)}-${nt(l)}`,finish:`${nt(a+1)}-${nt(r+1)}-${nt(l)}`,effortDriven:n%5===0}}return i}toggleDarkModeGrid1(){this._darkModeGrid1=!this._darkModeGrid1,this._darkModeGrid1?document.querySelector(".grid-container1")?.classList.add("dark-mode"):document.querySelector(".grid-container1")?.classList.remove("dark-mode"),this.aureliaGrid1.slickGrid?.setOptions({darkMode:this._darkModeGrid1})}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden")}}Ro=rx();Fi=cx(Ro,0,"Example1",Su,Fi);dx(Ro,1,Fi);const ux=Object.freeze(Object.defineProperty({__proto__:null,get Example1(){return Fi}},Symbol.toStringTag,{value:"Module"})),Cu="example2",ir=`<h2>
  Example 2: Grid with Formatters
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example2.ts"
    >
      <span class="mdi mdi-link-variant"></span> code
    </a>
  </span>
  <button class="ms-2 btn btn-outline-secondary btn-sm btn-icon" type="button" data-test="toggle-subtitle" click.trigger="toggleSubTitle()">
    <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
  </button>
</h2>

<div class="subtitle">
  Grid with Custom and/or included Slickgrid Formatters (<a
    href="https://ghiscoding.gitbook.io/aurelia-slickgrid/column-functionalities/formatters"
    target="_blank"
    >Wiki docs</a
  >).
  <ul>
    <li>The 2 last columns are using Custom Formatters</li>
    <ul>
      <li>The "Completed" column uses a the "onCellClick" event and a formatter to simulate a toggle action</li>
    </ul>
    <li>
      Support Excel Copy Buffer (SlickGrid Copy Manager Plugin), you can use it by simply enabling "enableExcelCopyBuffer" flag. Note that
      it will only evaluate Formatter when the "exportWithFormatter" flag is enabled (through "ExcelExportOptions" or "TextExportOptions" or
      the column definition)
    </li>
    <li>This example also has auto-resize enabled, and we also demo how you can pause the resizer if you wish to</li>
  </ul>
</div>

<button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="togglePauseResizer()">
  Pause auto-resize: <b>\${resizerPaused}</b>
</button>

<aurelia-slickgrid
  grid-id="grid2"
  columns.bind="columnDefinitions"
  options.bind="gridOptions"
  dataset.bind="dataset"
  instances.bind="aureliaGrid"
>
</aurelia-slickgrid>
`,wu=[],xu={};let Na;function mx(t){Na||(Na=E.define({name:Cu,template:ir,dependencies:wu,bindables:xu})),t.register(Na)}const px=Object.freeze(Object.defineProperty({__proto__:null,bindables:xu,default:ir,dependencies:wu,name:Cu,register:mx,template:ir},Symbol.toStringTag,{value:"Module"}));var hx=Object.create,Lo=Object.defineProperty,gx=Object.getOwnPropertyDescriptor,bx=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Tu=t=>{throw TypeError(t)},Eu=(t,e,i)=>e in t?Lo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,fx=(t,e)=>Lo(t,"name",{value:e,configurable:!0}),vx=t=>[,,,hx(null)],_x=["class","method","getter","setter","accessor","field","value","get","set"],$u=t=>t!==void 0&&typeof t!="function"?Tu("Function expected"):t,yx=(t,e,i,n,a)=>({kind:_x[t],name:e,metadata:n,addInitializer:r=>i._?Tu("Already initialized"):a.push($u(r||null))}),Sx=(t,e)=>Eu(e,bx("metadata"),t[3]),Cx=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},wx=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&gx(a,i));fx(a,i);for(var p=n.length-1;p>=0;p--)u=yx(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,$u(l)&&(a=l);return Sx(t,a),c&&Lo(a,i,c),m?s^4?r:c:a},rt=(t,e,i)=>Eu(t,typeof e!="symbol"?e+"":e,i),ku,zo;const xx=(t,e,i)=>i?'<i class="mdi mdi-fire red" aria-hidden="true"></i>':{text:'<i class="mdi mdi-snowflake" aria-hidden="true"></i>',addClasses:"lightblue",toolTip:"Freezing"},Tx=(t,e,i)=>`<span style="margin-left: 5px">
      <button class="btn btn-xs btn-default btn-icon">
        <i class="mdi ${i?"mdi-check-circle":"mdi-circle"}" style="color: ${i?"black":"lavender"}"></i>
      </button>
    </span>`;ku=[T(px)];class Ai{constructor(){rt(this,"aureliaGrid"),rt(this,"gridOptions"),rt(this,"columnDefinitions",[]),rt(this,"dataset",[]),rt(this,"hideSubTitle",!1),rt(this,"resizerPaused",!1),this.defineGrid()}attached(){this.getData()}defineGrid(){this.columnDefinitions=[{id:"title",name:"Title",field:"title",sortable:!0,width:70},{id:"phone",name:"Phone Number using mask",field:"phone",sortable:!0,type:"number",minWidth:100,formatter:f.mask,params:{mask:"(000) 000-0000"}},{id:"duration",name:"Duration (days)",field:"duration",formatter:f.decimal,params:{minDecimal:1,maxDecimal:2},sortable:!0,type:"number",minWidth:90,exportWithFormatter:!0},{id:"complete",name:"% Complete",field:"percentComplete",formatter:f.percentCompleteBar,type:"number",sortable:!0,minWidth:100},{id:"percent2",name:"% Complete",field:"percentComplete2",formatter:f.progressBar,type:"number",sortable:!0,minWidth:100},{id:"start",name:"Start",field:"start",formatter:f.dateIso,sortable:!0,type:"date",minWidth:90,exportWithFormatter:!0},{id:"finish",name:"Finish",field:"finish",formatter:f.dateIso,sortable:!0,type:"date",minWidth:90,exportWithFormatter:!0},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",formatter:xx,type:"number",sortable:!0,minWidth:100},{id:"completed",name:"Completed",field:"completed",type:"number",sortable:!0,minWidth:100,formatter:Tx,onCellClick:(e,i)=>{this.toggleCompletedProperty(i?.dataContext)}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableCellNavigation:!0,showCustomFooter:!0,customFooterOptions:{leftFooterText:"custom footer text",hideTotalItemCount:!0,hideLastUpdateTimestamp:!0},enableExcelCopyBuffer:!0}}getData(){const e=[];for(let i=0;i<500;i++){const n=2e3+Math.floor(Math.random()*10),a=Math.floor(Math.random()*11),r=Math.floor(Math.random()*29),l=Math.round(Math.random()*100);e[i]={id:i,title:"Task "+i,phone:this.generatePhoneNumber(),duration:i%33===0?null:Math.random()*100+"",percentComplete:l,percentComplete2:l,percentCompleteNumber:l,start:new Date(n,a,r),finish:new Date(n,a+1,r),effortDriven:i%5===0}}this.dataset=e}generatePhoneNumber(){let e="";for(let i=0;i<10;i++)e+=Math.round(Math.random()*9)+"";return e}togglePauseResizer(){this.resizerPaused=!this.resizerPaused,this.aureliaGrid.resizerService.pauseResizer(this.resizerPaused)}toggleCompletedProperty(e){typeof e=="object"&&(e.completed=!e.completed,setTimeout(()=>{this.aureliaGrid.gridService.updateItemById(e.id,e,{highlightRow:!1})},250))}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}zo=vx();Ai=wx(zo,0,"Example2",ku,Ai);Cx(zo,1,Ai);const Ex=Object.freeze(Object.defineProperty({__proto__:null,get Example2(){return Ai}},Symbol.toStringTag,{value:"Module"})),Du="example3",ar=`<h2>
  Example 3: Editors / Delete
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example3.ts"
    >
      <span class="mdi mdi-link-variant"></span> code
    </a>
  </span>
  <button class="ms-2 btn btn-outline-secondary btn-sm btn-icon" type="button" data-test="toggle-subtitle" click.trigger="toggleSubTitle()">
    <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
  </button>
</h2>

<div class="subtitle">
  Grid with Inline Editors and onCellClick actions (<a
    href="https://ghiscoding.gitbook.io/aurelia-slickgrid/column-functionalities/editors"
    target="_blank"
    >Wiki docs</a
  >).
  <ul>
    <li>When using "enableCellNavigation: true", clicking on a cell will automatically make it active &amp; selected.</li>
    <ul>
      <li>If you don't want this behavior, then you should disable "enableCellNavigation"</li>
    </ul>
    <li>Inline Editors requires "enableCellNavigation: true" (not sure why though)</li>
    <li>
      Support Excel Copy Buffer (SlickGrid Copy Manager Plugin), you can use it by simply enabling "enableExcelCopyBuffer" flag. Note that
      it will only evaluate Formatter when the "exportWithFormatter" flag is enabled (through "ExcelExportOptions" or "TextExportOptions" or
      the column definition)
    </li>
    <li>
      Support of "collectionAsync" is possible, click on "Clear Filters/Sorting" then add/delete item(s) and look at "Prerequisites" Select
      Filter
    </li>
  </ul>
</div>

<div class="row">
  <div class="col-sm-6">
    <label>autoEdit setting</label>
    <br />
    <span id="radioAutoEdit">
      <div class="row">
        <label class="radio-inline control-label" for="radioTrue">
          <input type="radio" name="inlineRadioOptions" id="radioTrue" checked value.bind="isAutoEdit" click.trigger="setAutoEdit(true)" />
          ON (single-click)
        </label>
        <label class="radio-inline control-label" for="radioFalse">
          <input type="radio" name="inlineRadioOptions" id="radioFalse" value.bind="isAutoEdit" click.trigger="setAutoEdit(false)" /> OFF
          (double-click)
        </label>
      </div>
      <div class="row col-sm-12">
        <span>
          <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="undo()" data-test="undo-btn">
            <i class="mdi mdi-undo"></i>
            Undo last edit(s)
          </button>
          <label class="checkbox-inline control-label" for="autoCommitEdit">
            <input
              type="checkbox"
              id="autoCommitEdit"
              data-test="auto-commit"
              value.bind="gridOptions.autoCommitEdit"
              click.trigger="changeAutoCommit()"
            />
            Auto Commit Edit
          </label>
        </span>
      </div>
    </span>
    <div class="row" style="margin-top: 5px">
      <div class="col-sm-12">
        <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="aureliaGrid.filterService.clearFilters()">
          Clear Filters
        </button>
        <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="aureliaGrid.sortService.clearSorting()">
          Clear Sorting
        </button>
        <button
          class="btn btn-outline-primary btn-sm"
          data-test="add-item-btn"
          click.trigger="addItem()"
          title="Clear Filters &amp; Sorting to see it better"
        >
          Add item
        </button>
        <button class="btn btn-outline-danger btn-sm" data-test="delete-item-btn" click.trigger="deleteItem()">Delete item</button>
      </div>
    </div>
    <div class="row" style="margin-top: 5px">
      <div class="col-sm-12">
        <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="add-title-column" click.trigger="dynamicallyAddTitleHeader()">
          <i class="mdi mdi-shape-square-plus"></i>
          Dynamically Duplicate Title Column
        </button>
        <button
          class="btn btn-outline-secondary btn-sm btn-icon"
          data-test="remove-title-column"
          click.trigger="dynamicallyRemoveLastColumn()"
        >
          <i class="mdi mdi-minus"></i>
          Dynamically Remove Last Column
        </button>
      </div>
    </div>
  </div>

  <div class="col-sm-6">
    <div class="alert alert-info" show.bind="updatedObject"><strong>Updated Item:</strong> \${updatedObject | stringify}</div>
    <div class="alert alert-warning" show.bind="alertWarning">\${alertWarning}</div>
  </div>
</div>

<div id="grid-container" class="col-sm-12">
  <aurelia-slickgrid
    grid-id="grid3"
    columns.bind="columnDefinitions"
    options.bind="gridOptions"
    dataset.bind="dataset"
    instances.bind="aureliaGrid"
    on-cell-change.trigger="onCellChanged($event.detail.eventData, $event.detail.args)"
    on-click.trigger="onCellClicked($event.detail.eventData, $event.detail.args)"
    on-validation-error.trigger="onCellValidationError($event.detail.eventData, $event.detail.args)"
  >
  </aurelia-slickgrid>
</div>
`,Ou=[],Mu={};let Wa;function $x(t){Wa||(Wa=E.define({name:Du,template:ar,dependencies:Ou,bindables:Mu})),t.register(Wa)}const kx=Object.freeze(Object.defineProperty({__proto__:null,bindables:Mu,default:ar,dependencies:Ou,name:Du,register:$x,template:ar},Symbol.toStringTag,{value:"Module"}));var Dx=Object.defineProperty,Ox=(t,e,i)=>e in t?Dx(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Ba=(t,e,i)=>Ox(t,typeof e!="symbol"?e+"":e,i);class Mx{constructor(e){this.args=e,Ba(this,"_lastInputEvent"),Ba(this,"inputElm"),Ba(this,"defaultValue"),this.init()}get columnDef(){return this.args?.column??{}}get columnEditor(){return this.columnDef?.editor??{}}get validator(){return this.columnEditor?.validator||this.columnDef?.validator}init(){const e=this.columnEditor?.placeholder||"";this.inputElm=document.createElement("input"),this.inputElm.className="editor-text",this.inputElm.placeholder=e,this.args.container.appendChild(this.inputElm),this.inputElm.addEventListener("keydown",this.handleKeydown.bind(this)),setTimeout(()=>{this.inputElm.focus(),this.inputElm.select()},50)}handleKeydown(e){this._lastInputEvent=e,(e.key==="ArrowLeft"||e.key==="ArrowRight")&&e.stopImmediatePropagation()}destroy(){this.inputElm.removeEventListener("keydown",this.handleKeydown.bind(this)),this.inputElm.remove()}focus(){this.inputElm.focus()}getValue(){return this.inputElm.value}setValue(e){this.inputElm.value=e}loadValue(e){this.defaultValue=e[this.args.column.field]||"",this.inputElm.value=this.defaultValue,this.inputElm.defaultValue=this.defaultValue,this.inputElm.select()}serializeValue(){return this.inputElm.value}applyValue(e,i){const n=this.validate(i);e[this.args.column.field]=n&&n.valid?i:""}isValueChanged(){const e=this._lastInputEvent?.key;return this.columnEditor?.alwaysSaveOnEnterKey&&e==="Enter"?!0:!(this.inputElm.value===""&&this.defaultValue===null)&&this.inputElm.value!==this.defaultValue}validate(e){if(this.validator){const i=e!==void 0?e:this.inputElm?.value;return this.validator(i,this.args)}return{valid:!0,msg:null}}}var Px=Object.defineProperty,Ix=(t,e,i)=>e in t?Px(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Le=(t,e,i)=>Ix(t,typeof e!="symbol"?e+"":e,i);class No{constructor(){Le(this,"_clearFilterTriggered",!1),Le(this,"_shouldTriggerQuery",!0),Le(this,"filterElm"),Le(this,"grid"),Le(this,"searchTerms",[]),Le(this,"columnDef"),Le(this,"callback"),Le(this,"operator","EQ")}get columnFilter(){return this.columnDef?.filter??{}}get gridOptions(){return this.grid?.getOptions()??{}}init(e){this.grid=e.grid,this.callback=e.callback,this.columnDef=e.columnDef,this.searchTerms=(e.hasOwnProperty("searchTerms")?e.searchTerms:[])||[];const i=Array.isArray(this.searchTerms)&&this.searchTerms.length>0?this.searchTerms[0]:"";this.filterElm=this.createDomElement(i),this.filterElm.addEventListener("keyup",this.handleKeyup.bind(this))}handleKeyup(e){let i=e.target?.value??"";const n=this.gridOptions.enableFilterTrimWhiteSpace||this.columnFilter.enableTrimWhiteSpace;typeof i=="string"&&n&&(i=i.trim()),this._clearFilterTriggered?(this.callback(e,{columnDef:this.columnDef,clearFilterTriggered:this._clearFilterTriggered,shouldTriggerQuery:this._shouldTriggerQuery}),this.filterElm.classList.remove("filled")):(i===""?this.filterElm.classList.remove("filled"):this.filterElm.classList.add("filled"),this.callback(e,{columnDef:this.columnDef,searchTerms:[i],shouldTriggerQuery:this._shouldTriggerQuery})),this._clearFilterTriggered=!1,this._shouldTriggerQuery=!0}clear(e=!0){this.filterElm&&(this._clearFilterTriggered=!0,this._shouldTriggerQuery=e,this.filterElm.value="",this.filterElm.dispatchEvent(new Event("keyup")))}destroy(){this.filterElm&&(this.filterElm.removeEventListener("keyup",this.handleKeyup),this.filterElm.remove())}setValues(e){e&&(this.filterElm.value=e)}createDomElement(e){const i=this.grid.getHeaderRowColumn(this.columnDef.id);Hn(i);let n=this.gridOptions?.defaultFilterPlaceholder??"";this.columnFilter?.placeholder&&(n=this.columnFilter.placeholder);const a=document.createElement("input");a.className="form-control search-filter",a.placeholder=n;const r=e;return a.value=r,a.dataset.columnid=`${this.columnDef.id}`,i&&i.appendChild(a),a}}const dd=""+new URL("collection_100_numbers-DqRiakum.json",import.meta.url).href,Ri=""+new URL("countries-DKOfcFpR.json",import.meta.url).href,cd=""+new URL("country_names-BQhs2ynd.json",import.meta.url).href,ud={timeout:5e3,jsonpCallback:"callback"},Gx=()=>`jsonp_${Date.now()}_${Math.ceil(Math.random()*1e5)}`,xi=t=>delete window[t],ja=t=>{const e=document.getElementById(t);e&&document.getElementsByTagName("head")[0].removeChild(e)};function md(t,e={}){let i=t;const n=e.timeout||ud.timeout,a=e.jsonpCallback||ud.jsonpCallback;let r;return new Promise((l,d)=>{const u=e.jsonpCallbackFunction||Gx(),s=`${a}_${u}`;window[u]=o=>{l({ok:!0,json:()=>Promise.resolve(o)}),r&&clearTimeout(r),ja(s),xi(u)},i+=i.indexOf("?")===-1?"?":"&";const m=document.createElement("script");m.setAttribute("src",`${i}${a}=${u}`),e.charset&&m.setAttribute("charset",e.charset),e.nonce&&m.setAttribute("nonce",e.nonce),e.referrerPolicy&&m.setAttribute("referrerPolicy",e.referrerPolicy),e.crossorigin&&m.setAttribute("crossorigin","true"),m.id=s,document.getElementsByTagName("head")[0].appendChild(m),r=setTimeout(()=>{d(new Error(`JSONP request to ${t} timed out`)),xi(u),ja(s),window[u]=()=>{xi(u)}},n),m.onerror=()=>{d(new Error(`JSONP request to ${t} failed`)),xi(u),ja(s),r&&clearTimeout(r)}})}var Fx=Object.create,Wo=Object.defineProperty,Ax=Object.getOwnPropertyDescriptor,Rx=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Pu=t=>{throw TypeError(t)},Iu=(t,e,i)=>e in t?Wo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Lx=(t,e)=>Wo(t,"name",{value:e,configurable:!0}),zx=t=>[,,,Fx(null)],Nx=["class","method","getter","setter","accessor","field","value","get","set"],Gu=t=>t!==void 0&&typeof t!="function"?Pu("Function expected"):t,Wx=(t,e,i,n,a)=>({kind:Nx[t],name:e,metadata:n,addInitializer:r=>i._?Pu("Already initialized"):a.push(Gu(r||null))}),Bx=(t,e)=>Iu(e,Rx("metadata"),t[3]),jx=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},Vx=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&Ax(a,i));Lx(a,i);for(var p=n.length-1;p>=0;p--)u=Wx(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,Gu(l)&&(a=l);return Bx(t,a),c&&Wo(a,i,c),m?s^4?r:c:a},oe=(t,e,i)=>Iu(t,typeof e!="symbol"?e+"":e,i),Fu,Bo;const Hx=100,Va=t=>t==null||!t.length?{valid:!1,msg:"This is a required field"}:/^Task\s\d+$/.test(t)?{valid:!0,msg:""}:{valid:!1,msg:'Your title is invalid, it must start with "Task" followed by a number'},Ux=(t,e,i)=>{if(i&&Array.isArray(i)){const a=i.map(r=>`Task ${r}`).join(", ");return`<span title="${a}">${a}</span>`}return""};Fu=[T(kx)];class Li{constructor(e=O(_e(ye)),i=O(Se)){this.http=e,this.i18n=i,oe(this,"_commandQueue",[]),oe(this,"aureliaGrid"),oe(this,"gridOptions"),oe(this,"columnDefinitions",[]),oe(this,"dataset",[]),oe(this,"updatedObject"),oe(this,"hideSubTitle",!1),oe(this,"isAutoEdit",!0),oe(this,"alertWarning"),oe(this,"duplicateTitleHeaderCount",1),this.defineGrid()}attached(){this.dataset=this.mockData(Hx)}defineGrid(){this.columnDefinitions=[{id:"edit",field:"id",excludeFromColumnPicker:!0,excludeFromGridMenu:!0,excludeFromHeaderMenu:!0,formatter:f.icon,params:{iconCssClass:"mdi mdi-pencil pointer"},minWidth:30,maxWidth:30,onCellClick:(e,i)=>{console.log(i),this.alertWarning=`Editing: ${i.dataContext.title}`,this.aureliaGrid.gridService.highlightRow(i.row,1500),this.aureliaGrid.gridService.setSelectedRow(i.row)}},{id:"delete",field:"id",excludeFromColumnPicker:!0,excludeFromGridMenu:!0,excludeFromHeaderMenu:!0,formatter:f.icon,params:{iconCssClass:"mdi mdi-trash-can pointer"},minWidth:30,maxWidth:30},{id:"title",name:"Title",field:"title",filterable:!0,sortable:!0,editor:{model:C.longText,placeholder:"something",title:"some title",validator:Va},minWidth:100,onCellChange:(e,i)=>{console.log(i),this.alertWarning=`Updated Title: ${i.dataContext.title}`}},{id:"title2",name:"Title, Custom Editor",field:"title",filterable:!0,sortable:!0,editor:{model:Mx,placeholder:"custom",validator:Va},filter:{model:No,placeholder:"🔎︎ custom"},minWidth:70},{id:"duration",name:"Duration (days)",field:"duration",filterable:!0,minWidth:100,sortable:!0,type:"number",filter:{model:v.slider,options:{hideSliderNumber:!1}},editor:{model:C.slider,minValue:0,maxValue:100}},{id:"complete",name:"% Complete",field:"percentComplete",filterable:!0,formatter:f.multiple,type:"number",editor:{enableRenderHtml:!0,collection:Array.from(Array(101).keys()).map(e=>({value:e,label:e,symbol:'<i class="mdi mdi-percent-outline" style="color:cadetblue"></i>'})),customStructure:{value:"value",label:"label",labelSuffix:"symbol"},collectionSortBy:{property:"label",sortDesc:!0},collectionFilterBy:{property:"value",value:0,operator:"NE"},model:C.singleSelect},minWidth:100,params:{formatters:[f.collectionEditor,f.percentCompleteBar]}},{id:"start",name:"Start",field:"start",filterable:!0,filter:{model:v.compoundDate},formatter:f.dateIso,sortable:!0,minWidth:100,type:"date",editor:{model:C.date}},{id:"finish",name:"Finish",field:"finish",filterable:!0,filter:{model:v.compoundDate},formatter:f.dateIso,sortable:!0,minWidth:100,type:"date",saveOutputType:"dateUtc",editor:{model:C.date,options:{displayDateMin:"today"}}},{id:"cityOfOrigin",name:"City of Origin",field:"cityOfOrigin",filterable:!0,sortable:!0,minWidth:100,editor:{model:C.autocompleter,placeholder:"🔎︎ search city",options:{minLength:3,forceUserInput:!0,fetch:(e,i)=>{md(`http://gd.geobytes.com/AutoCompleteCity?q=${e}`).then(n=>n.json()).then(n=>i(n)).catch(n=>console.log("invalid JSONP response",n))}}},filter:{model:v.autocompleter,options:{minLength:3,fetch:(e,i)=>{md(`http://gd.geobytes.com/AutoCompleteCity?q=${e}`).then(n=>n.json()).then(n=>i(n)).catch(n=>console.log("invalid JSONP response",n))}}}},{id:"countryOfOrigin",name:"Country of Origin",field:"countryOfOrigin",formatter:f.complexObject,dataKey:"code",labelKey:"name",type:"object",sortComparer:re.objectString,filterable:!0,sortable:!0,minWidth:100,editor:{model:C.autocompleter,customStructure:{label:"name",value:"code"},collectionAsync:this.http.fetch(Ri)},filter:{model:v.autocompleter,customStructure:{label:"name",value:"code"},collectionAsync:this.http.fetch(Ri)}},{id:"countryOfOriginName",name:"Country of Origin Name",field:"countryOfOriginName",filterable:!0,sortable:!0,minWidth:100,editor:{model:C.autocompleter,collectionAsync:this.http.fetch(cd)},filter:{model:v.autocompleter,collectionAsync:this.http.fetch(cd)}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",filterable:!0,type:"boolean",filter:{model:v.singleSelect,collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}]},formatter:f.checkmarkMaterial,editor:{model:C.checkbox},minWidth:70},{id:"prerequisites",name:"Prerequisites",field:"prerequisites",filterable:!0,formatter:Ux,exportWithFormatter:!0,sanitizeDataExport:!0,minWidth:100,sortable:!0,editor:{collectionAsync:this.http.fetch(dd),collectionSortBy:{property:"value",sortDesc:!0,fieldType:"number"},customStructure:{label:"label",value:"value",labelPrefix:"prefix"},collectionOptions:{separatorBetweenTextLabels:" "},model:C.multipleSelect},filter:{collectionAsync:this.http.fetch(dd),collectionSortBy:{property:"value",sortDesc:!0,fieldType:"number"},customStructure:{label:"label",value:"value",labelPrefix:"prefix"},collectionOptions:{separatorBetweenTextLabels:" "},model:v.multipleSelect,operator:"IN_CONTAINS"}}],this.gridOptions={autoEdit:this.isAutoEdit,autoCommitEdit:!1,autoResize:{container:"#demo-container",rightPadding:10},editable:!0,enableCellNavigation:!0,enableExcelCopyBuffer:!0,enableFiltering:!0,editCommandHandler:(e,i,n)=>{this._commandQueue.push(n),n.execute()},i18n:this.i18n}}addItem(){const e=this.dataset.length,i=this.mockData(1,e);setTimeout(()=>{const n=this.columnDefinitions.find(a=>a.id==="prerequisites");if(n){const a=n.editor.collection,r=n.filter.collection;Array.isArray(a)&&Array.isArray(r)&&(this.aureliaGrid.gridService.addItem(i[0],{highlightRow:!1}),a.push({value:e,label:e,prefix:"Task",suffix:"days"}),r.push({value:e,label:e,prefix:"Task",suffix:"days"}))}},250)}deleteItem(){const e=this.columnDefinitions.find(i=>i.id==="prerequisites");if(e){const i=e.editor.collection,n=e.filter.collection;if(Array.isArray(i)&&Array.isArray(n)){const a=this.sortCollectionDescending(i).pop();this.sortCollectionDescending(n).pop(),this.aureliaGrid.gridService.deleteItemById(a.value)}}}sortCollectionDescending(e){return e.sort((i,n)=>i.value-n.value)}mockData(e,i=0){const n=[];for(let a=i;a<i+e;a++){const r=2e3+this.randomBetween(4,15),l=new Date().getFullYear()-3+Math.floor(Math.random()*10),d=Math.floor(Math.random()*11),u=Math.floor(Math.random()*29),s=Math.round(Math.random()*100),m=new Date(l,d+1,u);n.push({id:a,title:"Task "+a,duration:Math.round(Math.random()*100)+"",percentComplete:s,percentCompleteNumber:s,start:new Date(r,d,u),finish:m<new Date?"":m,effortDriven:a%5===0,prerequisites:a%2===0&&a!==0&&a<12?[a,a-1]:[],countryOfOrigin:a%2?{code:"CA",name:"Canada"}:{code:"US",name:"United States"},countryOfOriginName:a%2?"Canada":"United States",cityOfOrigin:a%2?"Vancouver, BC, Canada":"Boston, MA, United States"})}return n}randomBetween(e,i){return Math.floor(Math.random()*(i-e+1)+e)}onCellChanged(e,i){console.log("onCellChange",i),this.updatedObject={...i.item}}onCellClicked(e,i){const n=this.aureliaGrid.gridService.getColumnFromEventArguments(i);console.log(n),n.columnDef.id==="edit"?(this.alertWarning=`open a modal window to edit: ${n.dataContext.title}`,this.aureliaGrid.gridService.highlightRow(i.row,1500)):n.columnDef.id==="delete"&&confirm("Are you sure?")&&(this.aureliaGrid.gridService.deleteItemById(n.dataContext.id),this.alertWarning=`Deleted: ${n.dataContext.title}`)}onCellValidationError(e,i){i.validationResults&&alert(i.validationResults.msg)}changeAutoCommit(){return this.gridOptions.autoCommitEdit=!this.gridOptions.autoCommitEdit,this.aureliaGrid.slickGrid.setOptions({autoCommitEdit:this.gridOptions.autoCommitEdit}),!0}dynamicallyAddTitleHeader(){const e={id:`title${this.duplicateTitleHeaderCount++}`,name:"Title",field:"title",editor:{model:C.text,required:!0,validator:Va},sortable:!0,minWidth:100,filterable:!0};this.columnDefinitions.push(e)}dynamicallyRemoveLastColumn(){this.columnDefinitions.pop()}setAutoEdit(e){return this.isAutoEdit=e,this.aureliaGrid.slickGrid.setOptions({autoEdit:e}),!0}undo(){const e=this._commandQueue.pop();e&&et.cancelCurrentEdit()&&(e.undo(),this.aureliaGrid.slickGrid.gotoCell(e.row,e.cell,!1))}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}Bo=zx();Li=Vx(Bo,0,"Example3",Fu,Li);jx(Bo,1,Li);const qx=Object.freeze(Object.defineProperty({__proto__:null,get Example3(){return Li}},Symbol.toStringTag,{value:"Module"})),Au="example4",nr=`<h2>
  Example 4: Client Side Sort/Filter
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example4.ts"
    >
      <span class="mdi mdi-link-variant"></span> code
    </a>
  </span>
  <button class="ms-2 btn btn-outline-secondary btn-sm btn-icon" type="button" data-test="toggle-subtitle" click.trigger="toggleSubTitle()">
    <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
  </button>
</h2>

<div class="subtitle">
  Sort/Filter on client side only using SlickGrid DataView (<a
    href="https://ghiscoding.gitbook.io/aurelia-slickgrid/column-functionalities/sorting"
    target="_blank"
    >Wiki docs</a
  >)
  <br />
  <ul class="small">
    <li>Support multi-sort (by default), hold "Shift" key and click on the next column to sort.</li>
    <li>All column types support the following operators: (>, >=, <, <=, <>, !=, =, ==, *)</li>
    <ul>
      <li>Example: >100 ... >=2001-01-01 ... >02/28/17</li>
      <li>
        <b>Note:</b> For filters to work properly (default is string), make sure to provide a FieldType (type is against the dataset, not
        the Formatter)
      </li>
    </ul>
    <li>Date Filters</li>
    <ul>
      <li>
        FieldType of dateUtc/date (from dataset) can use an extra option of "filterSearchType" to let user filter more easily. For example,
        in the "UTC Date" field below, you can type "&gt;02/28/2017", also when dealing with UTC you have to take the time difference in
        consideration.
      </li>
    </ul>
    <li>On String filters, (*) can be used as startsWith (Hello* => matches "Hello Word") ... endsWith (*Doe => matches: "John Doe")</li>
    <li>
      Custom Filter are now possible, "Description" column below, is a customized InputFilter with different placeholder. See
      <a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/column-functionalities/filters/custom-filter" target="_blank"
        >Wiki - Custom Filter</a
      >
    </li>
  </ul>
</div>

<br />
<span if.bind="metrics">
  <b>Metrics:</b> \${metrics.endTime | dateFormat: 'DD MMM, h:mm:ss a'} | \${metrics.itemCount} of \${metrics.totalItemCount} items
</span>

<div class="btn-group" role="group" aria-label="...">
  <button class="btn btn-sm btn-outline-secondary btn-icon" data-test="scroll-top-btn" click.trigger="scrollGridTop()">
    <i class="mdi mdi-arrow-down mdi-rotate-180 icon"></i>
  </button>
  <button class="btn btn-sm btn-outline-secondary btn-icon" data-test="scroll-bottom-btn" click.trigger="scrollGridBottom()">
    <i class="mdi mdi-arrow-down icon"></i>
  </button>
</div>

<button
  class="btn btn-outline-secondary btn-sm btn-icon"
  data-test="clear-filters"
  click.trigger="aureliaGrid.filterService.clearFilters()"
>
  Clear Filters
</button>
<button class="btn btn-outline-secondary btn-sm btn-icon" data-test="clear-sorting" click.trigger="aureliaGrid.sortService.clearSorting()">
  Clear Sorting
</button>
<button class="btn btn-outline-secondary btn-sm btn-icon" data-test="set-dynamic-filter" click.trigger="setFiltersDynamically()">
  Set Filters Dynamically
</button>
<button class="btn btn-outline-secondary btn-sm btn-icon" data-test="set-dynamic-sorting" click.trigger="setSortingDynamically()">
  Set Sorting Dynamically
</button>
<button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="logItems()">
  <span title="console.log all dataset items">Log Items</span>
</button>

<aurelia-slickgrid
  grid-id="grid4"
  columns.bind="columnDefinitions"
  options.bind="gridOptions"
  dataset.bind="dataset"
  on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
  on-grid-state-changed.trigger="gridStateChanged($event.detail)"
  on-row-count-changed.trigger="refreshMetrics($event.detail.eventData, $event.detail.args)"
>
</aurelia-slickgrid>
`,Ru=[],Lu={};let Ha;function Yx(t){Ha||(Ha=E.define({name:Au,template:nr,dependencies:Ru,bindables:Lu})),t.register(Ha)}const Kx=Object.freeze(Object.defineProperty({__proto__:null,bindables:Lu,default:nr,dependencies:Ru,name:Au,register:Yx,template:nr},Symbol.toStringTag,{value:"Module"})),Qx=""+new URL("collection_500_numbers-TrP4BMO1.json",import.meta.url).href;var Zx=Object.create,jo=Object.defineProperty,Jx=Object.getOwnPropertyDescriptor,Xx=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),zu=t=>{throw TypeError(t)},Nu=(t,e,i)=>e in t?jo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,e1=(t,e)=>jo(t,"name",{value:e,configurable:!0}),t1=t=>[,,,Zx(null)],i1=["class","method","getter","setter","accessor","field","value","get","set"],Wu=t=>t!==void 0&&typeof t!="function"?zu("Function expected"):t,a1=(t,e,i,n,a)=>({kind:i1[t],name:e,metadata:n,addInitializer:r=>i._?zu("Already initialized"):a.push(Wu(r||null))}),n1=(t,e)=>Nu(e,Xx("metadata"),t[3]),r1=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},o1=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&Jx(a,i));e1(a,i);for(var p=n.length-1;p>=0;p--)u=a1(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,Wu(l)&&(a=l);return n1(t,a),c&&jo(a,i,c),m?s^4?r:c:a},ot=(t,e,i)=>Nu(t,typeof e!="symbol"?e+"":e,i),Bu,Vo;function we(t,e){return Math.floor(Math.random()*(e-t+1)+t)}const l1=10500;Bu=[T(Kx)];class zi{constructor(e=O(_e(ye))){this.http=e,ot(this,"aureliaGrid"),ot(this,"columnDefinitions",[]),ot(this,"gridOptions"),ot(this,"dataset",[]),ot(this,"hideSubTitle",!1),ot(this,"metrics"),this.defineGrid()}attached(){this.dataset=this.mockData(l1)}detaching(){this.saveCurrentGridState()}aureliaGridReady(e){this.aureliaGrid=e}defineGrid(){this.columnDefinitions=[{id:"title",name:"Title",field:"title",filterable:!0,sortable:!0,minWidth:45,filter:{model:v.compoundInputText}},{id:"description",name:"Description",field:"description",filterable:!0,sortable:!0,minWidth:80,filter:{model:No,enableTrimWhiteSpace:!0}},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,type:"number",exportCsvForceToKeepAsString:!0,minWidth:55,filterable:!0,filter:{model:v.multipleSelect,collectionAsync:this.http.fetch(Qx),collectionFilterBy:[{property:"value",operator:"!=",value:360},{property:"value",operator:"!=",value:365}],collectionSortBy:{property:"value",sortDesc:!0,fieldType:"number"},customStructure:{value:"value",label:"label",optionLabel:"value",labelSuffix:"text"},collectionOptions:{separatorBetweenTextLabels:" ",filterResultAfterEachPass:"chain"},options:{maxHeight:250,width:175,useSelectOptionLabelToHtml:!0}}},{id:"complete",name:"% Complete",field:"percentComplete",formatter:f.percentCompleteBar,minWidth:70,type:"number",sortable:!0,filterable:!0,filter:{model:v.compoundInputNumber}},{id:"start",name:"Start",field:"start",formatter:f.dateIso,sortable:!0,minWidth:75,type:"date",filterable:!0,filter:{model:v.compoundDate}},{id:"usDateShort",name:"US Date Short",field:"usDateShort",sortable:!0,minWidth:70,width:70,type:"dateUsShort",filterable:!0,filter:{model:v.compoundDate}},{id:"utcDate",name:"UTC Date",field:"utcDate",formatter:f.dateTimeIsoAmPm,sortable:!0,minWidth:115,type:"dateUtc",outputType:"dateTimeIsoAmPm",filterable:!0,filter:{model:v.compoundDate,options:{displayDateMin:"today"}}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven.isEffort",minWidth:85,maxWidth:95,type:"boolean",sortable:!0,formatter:f.multiple,params:{formatters:[f.complexObject,f.checkmarkMaterial]},filterable:!0,filter:{collection:["","True","False"],model:v.singleSelect,options:{maxHeight:250}}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableExcelExport:!0,enableExcelCopyBuffer:!0,enableFiltering:!0,showCustomFooter:!0,presets:{filters:[{columnId:"duration",searchTerms:[10,98]},{columnId:"usDateShort",operator:"<",searchTerms:["4/20/25"]}],sorters:[{columnId:"duration",direction:"DESC"},{columnId:"complete",direction:"ASC"}]},externalResources:[new G],preParseDateColumns:"__"}}logItems(){console.log(this.aureliaGrid.dataView?.getItems())}mockData(e,i=0){const n=[];for(let a=i;a<i+e;a++){const r=Math.round(Math.random()*100),l=we(2e3,2035),d=we(10,35),u=we(1,12),s=u<10?`0${u}`:u,m=we(10,28),o=we(0,100),g=we(10,23),c=we(10,59),p=`${we(1,9)}${we(10,99)}`,_=a%3===0;n.push({id:a,title:"Task "+a,description:a%5?"desc "+a:null,duration:r,percentComplete:o,percentCompleteNumber:o,start:a%4?null:new Date(l,u,m),usDateShort:`${u}/${m}/${d}`,utcDate:`${l}-${s}-${m}T${g}:${c}:${c}.${p}Z`,effortDriven:{isEffort:_,label:_?"Effort":"NoEffort"}})}return n}gridStateChanged(e){console.log("Client sample, Grid State changed:: ",e.change)}saveCurrentGridState(){console.log("Client sample, current Grid State:: ",this.aureliaGrid.gridStateService.getCurrentGridState())}setFiltersDynamically(){this.aureliaGrid.filterService.updateFilters([{columnId:"duration",searchTerms:[2,25,48,50]},{columnId:"complete",searchTerms:[95],operator:"<"},{columnId:"effort-driven",searchTerms:[!0]},{columnId:"start",operator:">=",searchTerms:["2001-02-28"]}])}setSortingDynamically(){this.aureliaGrid.sortService.updateSorting([{columnId:"duration",direction:"ASC"},{columnId:"start",direction:"DESC"}])}refreshMetrics(e,i){i?.current>=0&&setTimeout(()=>{this.metrics={startTime:new Date,endTime:new Date,itemCount:i?.current||0,totalItemCount:this.dataset.length||0}})}scrollGridBottom(){this.aureliaGrid.slickGrid.navigateBottom()}scrollGridTop(){this.aureliaGrid.slickGrid.navigateTop()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}Vo=t1();zi=o1(Vo,0,"Example4",Bu,zi);r1(Vo,1,zi);const s1=Object.freeze(Object.defineProperty({__proto__:null,get Example4(){return zi}},Symbol.toStringTag,{value:"Module"})),ju="example5",rr=`<h2>
  Example 5: Grid with Backend OData Service
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example5.ts"
    >
      <span class="mdi mdi-link-variant"></span> code
    </a>
  </span>
  <button class="ms-2 btn btn-outline-secondary btn-sm btn-icon" type="button" data-test="toggle-subtitle" click.trigger="toggleSubTitle()">
    <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
  </button>
</h2>

<div class="row">
  <div class="col-sm-9">
    <div class="subtitle">
      Use it when you need to support Pagination with a OData endpoint (for simple JSON, use a regular grid)<br />
      Take a look at the (<a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/backend-services/odata" target="_blank"
        >Wiki documentation</a
      >)
      <br />
      <ul class="small">
        <li>Only "Name" field is sortable for the demo (because we use JSON files), however "multiColumnSort: true" is also supported</li>
        <li>This example also demos the Grid State feature, open the console log to see the changes</li>
        <li>String column also support operator (>, >=, <, <=, <>, !=, =, ==, *)</li>
        <ul>
          <li>The (*) can be used as startsWith (ex.: "abc*" => startsWith "abc") / endsWith (ex.: "*xyz" => endsWith "xyz")</li>
          <li>The other operators can be used on column type number for example: ">=100" (greater than or equal to 100)</li>
        </ul>
        <li>OData Service could be replaced by other Service type in the future (GraphQL or whichever you provide)</li>
        <li>
          You can also preload a grid with certain "presets" like Filters / Sorters / Pagination
          <a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/grid-state-preset" target="_blank"
            >Wiki - Grid Preset</a
          >
        </li>
        <li>
          <span class="text-danger">NOTE:</span> For demo purposes, the last column (filter & sort) will always throw an error and its only
          purpose is to demo what would happen when you encounter a backend server error (the UI should rollback to previous state before
          you did the action). Also changing Page Size to 50,000 will also throw which again is for demo purposes.
        </li>
      </ul>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="alert alert-danger" show.bind="errorStatus" data-test="error-status">
      <em><strong>Backend Error:</strong> <span innerhtml.bind="errorStatus"></span></em>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-sm-2">
    <div class.bind="status.class" role="alert" data-test="status">
      <strong>Status: </strong> \${status.text}
      <span hidden.bind="!processing">
        <i class="mdi mdi-sync mdi-spin"></i>
      </span>
    </div>
  </div>
  <div class="col-sm-10">
    <div class="alert alert-info" data-test="alert-odata-query">
      <strong>OData Query:</strong> <span data-test="odata-query-result">\${odataQuery}</span>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-sm-4">
    <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="set-dynamic-filter" click.trigger="setFiltersDynamically()">
      Set Filters Dynamically
    </button>
    <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="set-dynamic-sorting" click.trigger="setSortingDynamically()">
      Set Sorting Dynamically
    </button>
    <br />
    <span if.bind="metrics">
      <b>Metrics:</b> \${metrics.endTime | dateFormat: 'DD MMM, h:mm:ss a'} | \${metrics.executionTime}ms | \${metrics.totalItemCount} items
    </span>
  </div>

  <div class="col-sm-8">
    <label>OData Version: </label>
    <span data-test="radioVersion">
      <label class="radio-inline control-label" for="radio2">
        <input
          type="radio"
          name="inlineRadioOptions"
          data-test="version2"
          id="radio2"
          checked
          value.bind="2"
          click.trigger="setOdataVersion(2)"
        />
        2
      </label>
      <label class="radio-inline control-label" for="radio4">
        <input type="radio" name="inlineRadioOptions" data-test="version4" id="radio4" value.bind="4" click.trigger="setOdataVersion(4)" />
        4
      </label>
    </span>
    <label class="checkbox-inline control-label" for="enableCount" style="margin-left: 20px">
      <input
        type="checkbox"
        id="enableCount"
        data-test="enable-count"
        checked.bind="isCountEnabled"
        click.trigger="changeCountEnableFlag()"
      />
      <span style="font-weight: bold">Enable Count</span> (add to OData query)
    </label>
    <label class="checkbox-inline control-label" for="enableSelect" style="margin-left: 20px">
      <input
        type="checkbox"
        id="enableSelect"
        data-test="enable-select"
        checked.bind="isSelectEnabled"
        click.trigger="changeEnableSelectFlag()"
      />
      <span style="font-weight: bold">Enable Select</span> (add to OData query)
    </label>
    <label class="checkbox-inline control-label" for="enableExpand" style="margin-left: 20px">
      <input
        type="checkbox"
        id="enableExpand"
        data-test="enable-expand"
        checked.bind="isExpandEnabled"
        click.trigger="changeEnableExpandFlag()"
      />
      <span style="font-weight: bold">Enable Expand</span> (add to OData query)
    </label>
  </div>
</div>
<div class="row mt-2 mb-1">
  <div class="col-md-12">
    <button class="btn btn-outline-danger btn-sm btn-icon" data-test="throw-page-error-btn" click.trigger="throwPageChangeError()">
      <span>Throw Error Going to Last Page... </span>
      <i class="mdi mdi-page-last"></i>
    </button>

    <span class="ms-2">
      <label>Programmatically go to first/last page:</label>
      <div class="btn-group" role="group">
        <button class="btn btn-outline-secondary btn-xs btn-icon px-2" data-test="goto-first-page" click.trigger="goToFirstPage()">
          <i class="mdi mdi-page-first"></i>
        </button>
        <button class="btn btn-outline-secondary btn-xs btn-icon px-2" data-test="goto-last-page" click.trigger="goToLastPage()">
          <i class="mdi mdi-page-last"></i>
        </button>
      </div>
    </span>
  </div>
</div>

<aurelia-slickgrid
  grid-id="grid5"
  columns.bind="columnDefinitions"
  options.bind="gridOptions"
  dataset.bind="dataset"
  pagination-options.bind="paginationOptions"
  on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
  on-grid-state-changed.trigger="gridStateChanged($event.detail)"
  on-before-sort.trigger="handleOnBeforeSort($event)"
  on-before-search-change.trigger="handleOnBeforeSearchChange($event)"
  on-before-pagination-change.trigger="handleOnBeforePaginationChange($event)"
>
</aurelia-slickgrid>
`,Vu=[],Hu={};let Ua;function d1(t){Ua||(Ua=E.define({name:ju,template:rr,dependencies:Vu,bindables:Hu})),t.register(Ua)}const c1=Object.freeze(Object.defineProperty({__proto__:null,bindables:Hu,default:rr,dependencies:Vu,name:ju,register:d1,template:rr},Symbol.toStringTag,{value:"Module"})),ft=""+new URL("customers_100-Dk3XZUmV.json",import.meta.url).href;var u1=Object.create,Ho=Object.defineProperty,m1=Object.getOwnPropertyDescriptor,p1=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Uu=t=>{throw TypeError(t)},qu=(t,e,i)=>e in t?Ho(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,h1=(t,e)=>Ho(t,"name",{value:e,configurable:!0}),g1=t=>[,,,u1(null)],b1=["class","method","getter","setter","accessor","field","value","get","set"],Yu=t=>t!==void 0&&typeof t!="function"?Uu("Function expected"):t,f1=(t,e,i,n,a)=>({kind:b1[t],name:e,metadata:n,addInitializer:r=>i._?Uu("Already initialized"):a.push(Yu(r||null))}),v1=(t,e)=>qu(e,p1("metadata"),t[3]),_1=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},y1=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&m1(a,i));h1(a,i);for(var p=n.length-1;p>=0;p--)u=f1(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,Yu(l)&&(a=l);return v1(t,a),c&&Ho(a,i,c),m?s^4?r:c:a},L=(t,e,i)=>qu(t,typeof e!="symbol"?e+"":e,i),Ku,Uo;const S1=20,pd="%5E",C1="%25";Ku=[T(c1)];class Ni{constructor(e=O(_e(ye))){this.http=e,L(this,"aureliaGrid"),L(this,"columnDefinitions",[]),L(this,"gridOptions"),L(this,"dataset",[]),L(this,"hideSubTitle",!1),L(this,"metrics"),L(this,"paginationOptions"),L(this,"isCountEnabled",!0),L(this,"isSelectEnabled",!1),L(this,"isExpandEnabled",!1),L(this,"odataVersion",2),L(this,"odataQuery",""),L(this,"processing",!1),L(this,"errorStatus",""),L(this,"isPageErrorTest",!1),L(this,"status",{text:"",class:""}),this.defineGrid()}aureliaGridReady(e){this.aureliaGrid=e}defineGrid(){this.columnDefinitions=[{id:"name",name:"Name",field:"name",sortable:!0,filterable:!0,filter:{model:v.compoundInput,compoundOperatorList:[{operator:"",desc:"Contains"},{operator:"<>",desc:"Not Contains"},{operator:"=",desc:"Equals"},{operator:"!=",desc:"Not equal to"},{operator:"a*",desc:"Starts With"},{operator:"Custom",desc:"SQL Like"}]}},{id:"gender",name:"Gender",field:"gender",filterable:!0,sortable:!0,filter:{model:v.singleSelect,collection:[{value:"",label:""},{value:"male",label:"male"},{value:"female",label:"female"}]}},{id:"company",name:"Company",field:"company",filterable:!0,sortable:!0},{id:"category_name",name:"Category",field:"category/name",filterable:!0,sortable:!0}],this.gridOptions={enableAutoResize:!0,autoResize:{container:"#demo-container",rightPadding:10},checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},compoundOperatorAltTexts:{text:{Custom:{operatorAlt:"%%",descAlt:"SQL Like"}}},enableCellNavigation:!0,enableFiltering:!0,enableCheckboxSelector:!0,enableSelection:!0,enablePagination:!0,pagination:{pageSizes:[10,20,50,100,500,5e4],pageSize:S1,totalItems:0},presets:{filters:[{columnId:"gender",searchTerms:["male"],operator:"="}],sorters:[{columnId:"name",direction:"asc"}],pagination:{pageNumber:2,pageSize:20}},backendServiceApi:{service:new no,options:{enableCount:this.isCountEnabled,enableSelect:this.isSelectEnabled,enableExpand:this.isExpandEnabled,filterQueryOverride:({fieldName:e,columnDef:i,columnFilterOperator:n,searchValues:a})=>{if(n==="Custom"&&i?.id==="name"){let r=a[0].replace(/\*/g,".*");return r=r.slice(0,1)+pd+r.slice(1),r=r.slice(0,-1)+"$'",`matchesPattern(${e}, ${r})`}},version:this.odataVersion},onError:e=>{console.log("ERROR",e),this.errorStatus=e.message,this.displaySpinner(!1,!0)},preProcess:()=>{this.errorStatus="",this.displaySpinner(!0)},process:e=>this.getCustomerApiCall(e),postProcess:e=>{this.metrics=e.metrics,this.displaySpinner(!1),this.getCustomerCallback(e)}}}}displaySpinner(e,i){this.processing=e,i?this.status={text:"ERROR!!!",class:"alert alert-danger"}:this.status=e?{text:"loading",class:"alert alert-warning"}:{text:"finished",class:"alert alert-success"}}getCustomerCallback(e){let i=e.totalRecordCount;this.isCountEnabled&&(i=this.odataVersion===4?e["@odata.count"]:e.d.__count),this.metrics&&(this.metrics.totalItemCount=i),this.paginationOptions={...this.gridOptions.pagination,totalItems:i},this.dataset=this.odataVersion===4?e.value:e.d.results,this.odataQuery=e.query}getCustomerApiCall(e){return this.getCustomerDataApiMock(e)}getCustomerDataApiMock(e){return new Promise(i=>{const n=e.toLowerCase().split("&");let a,r=0,l="",d=100;const u={};if(this.isPageErrorTest)throw this.isPageErrorTest=!1,new Error("Server timed out trying to retrieve data for the last page");for(const s of n){if(s.includes("$top=")&&(a=+s.substring(5),a===5e4))throw new Error("Server timed out retrieving 50,000 rows");if(s.includes("$skip=")&&(r=+s.substring(6)),s.includes("$orderby=")&&(l=s.substring(9)),s.includes("$filter=")){const m=s.substring(8).replace("%20"," ");if(m.includes("matchespattern")){const o=new RegExp(`matchespattern\\(([a-zA-Z]+),\\s'${pd}(.*?)'\\)`,"i"),g=m.match(o),c=g[1].trim();u[c]={type:"matchespattern",term:"^"+g[2].trim()}}if(m.includes("contains")){const o=m.match(/contains\(([a-zA-Z/]+),\s?'(.*?)'/),g=o[1].trim();u[g]={type:"substring",term:o[2].trim()}}if(m.includes("substringof")){const o=m.match(/substringof\('(.*?)',\s([a-zA-Z/]+)/),g=o[2].trim();u[g]={type:"substring",term:o[1].trim()}}for(const o of["eq","ne","le","lt","gt","ge"])if(m.includes(o)){const c=new RegExp(`([a-zA-Z ]*) ${o} '(.*?)'`).exec(m);if(Array.isArray(c)){const p=c[1].trim();u[p]={type:o,term:c[2].trim()}}}if(m.includes("startswith")&&m.includes("endswith")){const o=m.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],g=m.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],c=o[1].trim();u[c]={type:"starts+ends",term:[o[2].trim(),g[2].trim()]}}else if(m.includes("startswith")){const o=m.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/),g=o[1].trim();u[g]={type:"starts",term:o[2].trim()}}else if(m.includes("endswith")){const o=m.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/),g=o[1].trim();u[g]={type:"ends",term:o[2].trim()}}if(m.includes("company"))throw new Error('Server could not filter using the field "Company"')}}if(l.includes("company"))throw new Error('Server could not sort using the field "Company"');this.http.fetch(ft).then(s=>s.json()).then(s=>{if(l?.length>0){const c=l.split(",");for(const p of c){const _=p.split(" "),w=_[0];let x=y=>y;for(const y of w.split("/")){const h=x;x=S=>h(S)[y]}switch((_[1]??"asc").toLocaleLowerCase()){case"asc":s=s.sort((y,h)=>x(y).localeCompare(x(h)));break;case"desc":s=s.sort((y,h)=>x(h).localeCompare(x(y)));break}}}let m=r,o=s;if(u){for(const c in u)u.hasOwnProperty(c)&&(o=o.filter(p=>{const _=u[c].type,w=u[c].term;let x=c;if(c?.indexOf(" ")!==-1){const h=c.split(" ");x=h[h.length-1]}let b,y=p;for(const h of x.split("/"))b=y[h],y=b;if(b){const[h,S]=Array.isArray(w)?w:[w];switch(_){case"eq":return b.toLowerCase()===h;case"ne":return b.toLowerCase()!==h;case"le":return b.toLowerCase()<=h;case"lt":return b.toLowerCase()<h;case"gt":return b.toLowerCase()>h;case"ge":return b.toLowerCase()>=h;case"ends":return b.toLowerCase().endsWith(h);case"starts":return b.toLowerCase().startsWith(h);case"starts+ends":return b.toLowerCase().startsWith(h)&&b.toLowerCase().endsWith(S);case"substring":return b.toLowerCase().includes(h);case"matchespattern":return new RegExp(h.replaceAll(C1,".*"),"i").test(b)}}}));d=o.length}m>o.length&&(e=e.replace(`$skip=${m}`,""),m=0);const g=o.slice(m,m+a);setTimeout(()=>{const c={query:e};this.isCountEnabled||(c.totalRecordCount=d),this.odataVersion===4?(c.value=g,this.isCountEnabled&&(c["@odata.count"]=d)):(c.d={results:g},this.isCountEnabled&&(c.d.__count=d)),i(c)},150)})})}goToFirstPage(){this.aureliaGrid.paginationService.goToFirstPage()}goToLastPage(){this.aureliaGrid.paginationService.goToLastPage()}gridStateChanged(e){console.log("Client sample, Grid State changed:: ",e.change)}setFiltersDynamically(){this.aureliaGrid.filterService.updateFilters([{columnId:"name",searchTerms:["A"],operator:"a*"}])}setSortingDynamically(){this.aureliaGrid.sortService.updateSorting([{columnId:"name",direction:"DESC"}])}throwPageChangeError(){this.isPageErrorTest=!0,this.aureliaGrid?.paginationService?.goToLastPage()}handleOnBeforeSort(){return!0}handleOnBeforeSearchChange(){return!0}handleOnBeforePaginationChange(){return!0}changeCountEnableFlag(){return this.isCountEnabled=!this.isCountEnabled,this.resetOptions({enableCount:this.isCountEnabled}),!0}changeEnableSelectFlag(){return this.isSelectEnabled=!this.isSelectEnabled,this.resetOptions({enableSelect:this.isSelectEnabled}),!0}changeEnableExpandFlag(){return this.isExpandEnabled=!this.isExpandEnabled,this.resetOptions({enableExpand:this.isExpandEnabled}),!0}setOdataVersion(e){return this.odataVersion=e,this.resetOptions({version:this.odataVersion}),!0}resetOptions(e){this.displaySpinner(!0);const i=this.gridOptions.backendServiceApi.service;i.updateOptions(e),i.clearFilters(),this.aureliaGrid?.filterService.clearFilters()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}Uo=g1();Ni=y1(Uo,0,"Example5",Ku,Ni);_1(Uo,1,Ni);const w1=Object.freeze(Object.defineProperty({__proto__:null,get Example5(){return Ni}},Symbol.toStringTag,{value:"Module"})),Qu="example6",or=`<h2>
  Example 6: Grid with Backend GraphQL Service
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example6.ts"
    >
      <span class="mdi mdi-link-variant"></span> code
    </a>
  </span>
  <button class="ms-2 btn btn-outline-secondary btn-sm btn-icon" type="button" data-test="toggle-subtitle" click.trigger="toggleSubTitle()">
    <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
  </button>
</h2>

<div class="subtitle">
  Use it when you need to support Pagination with a GraphQL endpoint (for simple JSON, use a regular grid).
  <br />Take a look at the (<a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/backend-services/graphql" target="_blank">Wiki docs</a
  >)
  <ul class="small">
    <li><span class="red bold">(*) NO DATA SHOWN</span> - just change filters &amp; page and look at the "GraphQL Query" changing</li>
    <li>Only "Name" field is sortable for the demo (because we use JSON files), however "multiColumnSort: true" is also supported</li>
    <li>String column also support operator (>, >=, <, <=, <>, !=, =, ==, *)</li>
    <ul>
      <li>The (*) can be used as startsWith (ex.: "abc*" => startsWith "abc") / endsWith (ex.: "*xyz" => endsWith "xyz")</li>
      <li>The other operators can be used on column type number for example: ">=100" (greater or equal than 100)</li>
    </ul>
    <li>
      You can also preload a grid with certain "presets" like Filters / Sorters / Pagination
      <a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/grid-state-preset" target="_blank"
        >Wiki - Grid Preset</a
      >
    </li>
    <li>
      Also note that the column Name has a filter with a custom %% operator that behaves like an SQL LIKE operator supporting % wildcards.
    </li>
    <li>
      Depending on your configuration, your GraphQL Server might already support regex querying (e.g. Hasura
      <a href="https://hasura.io/docs/latest/queries/postgres/filters/text-search-operators/#_regex" target="_blank">_regex</a>) or you
      could add your own implementation (e.g. see this SO <a href="https://stackoverflow.com/a/37981802/1212166">Question</a>).
    </li>
  </ul>
</div>

<div class="row">
  <div class="col-sm-5">
    <div class.bind="status.class" role="alert" data-test="status">
      <strong>Status: </strong> \${status.text}
      <span hidden.bind="!processing">
        <i class="mdi mdi-sync mdi-spin"></i>
      </span>
    </div>

    <div class="row">
      <div class="col-md-12">
        <button
          class="btn btn-outline-secondary btn-sm btn-icon"
          data-test="clear-filters-sorting"
          click.trigger="clearAllFiltersAndSorts()"
          title="Clear all Filters & Sorts"
        >
          <i class="mdi mdi-filter-remove-outline"></i>
          Clear all Filter & Sorts
        </button>
        <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="set-dynamic-filter" click.trigger="setFiltersDynamically()">
          Set Filters Dynamically
        </button>
        <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="set-dynamic-sorting" click.trigger="setSortingDynamically()">
          Set Sorting Dynamically
        </button>
        <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="reset-presets" click.trigger="resetToOriginalPresets()">
          Reset Original Presets
        </button>
        <label for="serverdelay" class="ml-4">Server Delay: </label>
        <input
          id="serverdelay"
          type="number"
          data-test="server-delay"
          style="width: 55px"
          value.bind="serverWaitDelay"
          title="input a fake timer delay to simulate slow server response"
        />
      </div>
    </div>

    <hr />

    <div class="row">
      <div class="col-md-12">
        <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="switchLanguage()" data-test="language-button">
          <i class="mdi mdi-translate"></i>
          Switch Language
        </button>
        <b>Locale:</b>
        <span style="font-style: italic" data-test="selected-locale"> \${selectedLanguage + '.json'} </span>
      </div>

      <span style="margin-left: 10px">
        <label>Pagination strategy: </label>
        <span data-test="radioStrategy">
          <label class="radio-inline control-label" for="radioOffset">
            <input
              type="radio"
              name="inlineRadioOptions"
              data-test="offset"
              id="radioOffset"
              checked
              value.bind="false"
              click.trigger="setIsWithCursor(false)"
            />
            Offset
          </label>
          <label class="radio-inline control-label" for="radioCursor">
            <input
              type="radio"
              name="inlineRadioOptions"
              data-test="cursor"
              id="radioCursor"
              value.bind="true"
              click.trigger="setIsWithCursor(true)"
            />
            Cursor
          </label>
        </span>
      </span>
    </div>
    <br />
    <div if.bind="metrics" style="margin: 10px 0px">
      <b>Metrics:</b> \${metrics.endTime | dateFormat: 'DD MMM, h:mm:ss a'} | \${metrics.executionTime}ms | \${metrics.totalItemCount} items
    </div>
    <div class="row" style="margin-bottom: 5px">
      <div class="col-md-12">
        <label>Programmatically go to first/last page:</label>
        <div class="btn-group" role="group">
          <button class="btn btn-outline-secondary btn-xs btn-icon px-2" data-test="goto-first-page" click.trigger="goToFirstPage()">
            <i class="mdi mdi-page-first"></i>
          </button>
          <button class="btn btn-outline-secondary btn-xs btn-icon px-2" data-test="goto-last-page" click.trigger="goToLastPage()">
            <i class="mdi mdi-page-last icon"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="col-sm-7">
    <div class="alert alert-info" data-test="alert-graphql-query">
      <strong>GraphQL Query:</strong> <span data-test="graphql-query-result">\${graphqlQuery}</span>
    </div>
  </div>
</div>

<hr />

<aurelia-slickgrid
  grid-id="grid6"
  columns.bind="columnDefinitions"
  options.bind="gridOptions"
  dataset.bind="dataset"
  on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
  on-grid-state-changed.trigger="gridStateChanged($event.detail)"
>
</aurelia-slickgrid>
`,Zu=[],Ju={};let qa;function x1(t){qa||(qa=E.define({name:Qu,template:or,dependencies:Zu,bindables:Ju})),t.register(qa)}const T1=Object.freeze(Object.defineProperty({__proto__:null,bindables:Ju,default:or,dependencies:Zu,name:Qu,register:x1,template:or},Symbol.toStringTag,{value:"Module"}));var E1=Object.create,qo=Object.defineProperty,$1=Object.getOwnPropertyDescriptor,k1=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Xu=t=>{throw TypeError(t)},em=(t,e,i)=>e in t?qo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,D1=(t,e)=>qo(t,"name",{value:e,configurable:!0}),O1=t=>[,,,E1(null)],M1=["class","method","getter","setter","accessor","field","value","get","set"],tm=t=>t!==void 0&&typeof t!="function"?Xu("Function expected"):t,P1=(t,e,i,n,a)=>({kind:M1[t],name:e,metadata:n,addInitializer:r=>i._?Xu("Already initialized"):a.push(tm(r||null))}),I1=(t,e)=>em(e,k1("metadata"),t[3]),G1=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},F1=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&$1(a,i));D1(a,i);for(var p=n.length-1;p>=0;p--)u=P1(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,tm(l)&&(a=l);return I1(t,a),c&&qo(a,i,c),m?s^4?r:c:a},j=(t,e,i)=>em(t,typeof e!="symbol"?e+"":e,i),im,Yo;const A1=20,Ya="users",R1=250;im=[T(T1)];class Wi{constructor(e=O(Se)){this.i18n=e,j(this,"isWithCursor",!1),j(this,"aureliaGrid"),j(this,"columnDefinitions",[]),j(this,"gridOptions"),j(this,"dataset",[]),j(this,"metrics"),j(this,"graphqlService",new ro),j(this,"graphqlQuery",""),j(this,"hideSubTitle",!1),j(this,"processing",!1),j(this,"selectedLanguage"),j(this,"status",{text:"",class:""}),j(this,"serverWaitDelay",R1),this.defineGrid();const i="en";this.i18n.setLocale(i),this.selectedLanguage=i}detaching(){this.saveCurrentGridState()}aureliaGridReady(e){this.aureliaGrid=e}defineGrid(){this.columnDefinitions=[{id:"name",field:"name",nameKey:"NAME",width:60,columnGroupKey:"CUSTOMER_INFORMATION",sortable:!0,filterable:!0,filter:{model:v.compoundInput,compoundOperatorList:[{operator:"",desc:"Contains"},{operator:"<>",desc:"Not Contains"},{operator:"=",desc:"Equals"},{operator:"!=",desc:"Not equal to"},{operator:"a*",desc:"Starts With"},{operator:"Custom",desc:"SQL Like"}]}},{id:"gender",field:"gender",nameKey:"GENDER",filterable:!0,sortable:!0,width:60,columnGroupKey:"CUSTOMER_INFORMATION",filter:{model:v.singleSelect,collection:[{value:"",label:""},{value:"male",label:"male",labelKey:"MALE"},{value:"female",label:"female",labelKey:"FEMALE"}]}},{id:"company",field:"company",nameKey:"COMPANY",width:60,columnGroupKey:"CUSTOMER_INFORMATION",sortable:!0,filterable:!0,filter:{model:v.multipleSelect,collection:[{value:"acme",label:"Acme"},{value:"abc",label:"Company ABC"},{value:"xyz",label:"Company XYZ"}],options:{filter:!0}}},{id:"billingAddressStreet",field:"billing.address.street",nameKey:"BILLING.ADDRESS.STREET",width:60,filterable:!0,sortable:!0,columnGroupKey:"BILLING.INFORMATION"},{id:"billingAddressZip",field:"billing.address.zip",nameKey:"BILLING.ADDRESS.ZIP",width:60,type:"number",columnGroupKey:"BILLING.INFORMATION",filterable:!0,sortable:!0,filter:{model:v.compoundInput},formatter:f.multiple,params:{formatters:[f.complexObject,f.translate]}},{id:"finish",field:"finish",name:"Date",formatter:f.dateIso,sortable:!0,minWidth:90,width:120,exportWithFormatter:!0,columnGroupKey:"BILLING.INFORMATION",type:"date",filterable:!0,filter:{model:v.dateRange,filterShortcuts:[{titleKey:"NEXT_20_DAYS",iconCssClass:"mdi mdi-calendar",searchTerms:[be(new Date,"YYYY-MM-DD"),be(Ft(new Date,20),"YYYY-MM-DD")]}]}}];const e=new Date().getFullYear(),i=`${e}-01-01`,n=`${e}-02-15`;this.gridOptions={enableFiltering:!0,enableCellNavigation:!0,enableTranslate:!0,createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:28,i18n:this.i18n,gridHeight:200,gridWidth:900,compoundOperatorAltTexts:{text:{Custom:{operatorAlt:"%%",descAlt:"SQL Like"}}},gridMenu:{resizeOnShowHeaderRow:!0},enablePagination:!0,pagination:{pageSizes:[10,15,20,25,30,40,50,75,100],pageSize:A1,totalItems:0},presets:{columns:[{columnId:"name",width:100},{columnId:"gender",width:55},{columnId:"company"},{columnId:"billingAddressZip"},{columnId:"billingAddressStreet",width:120},{columnId:"finish",width:130}],filters:[{columnId:"gender",searchTerms:["male"],operator:"="},{columnId:"name",searchTerms:["Joh*oe"],operator:"StartsWithEndsWith"},{columnId:"company",searchTerms:["xyz"],operator:"IN"},{columnId:"finish",searchTerms:[i,n],operator:"RangeInclusive"}],sorters:[{columnId:"name",direction:"asc"},{columnId:"company",direction:"DESC"}],pagination:{pageNumber:this.isWithCursor?1:2,pageSize:20}},backendServiceApi:{service:this.graphqlService,options:{datasetName:Ya,addLocaleIntoQuery:!0,extraQueryArguments:[{field:"userId",value:123}],filterQueryOverride:({fieldName:a,columnDef:r,columnFilterOperator:l,searchValues:d})=>{if(l==="Custom"&&r?.id==="name")return{field:a,operator:"Like",value:d[0]}},useCursor:this.isWithCursor,keepArgumentFieldDoubleQuotes:!0},preProcess:()=>this.displaySpinner(!0),process:a=>this.getCustomerApiCall(a),postProcess:a=>{this.metrics=a.metrics,this.displaySpinner(!1)}}}}clearAllFiltersAndSorts(){this.aureliaGrid&&this.aureliaGrid.gridService&&this.aureliaGrid.gridService.clearAllFiltersAndSorts()}displaySpinner(e){this.processing=e,this.status=e?{text:"processing...",class:"alert alert-danger"}:{text:"finished",class:"alert alert-success"}}getCustomerApiCall(e){let i;if(this.aureliaGrid?.paginationService){const{paginationService:a}=this.aureliaGrid,r=a._initialized?a.getCurrentPageNumber():1,l=String.fromCharCode(65+r-1),d=String.fromCharCode(l.charCodeAt(0)+1);i={hasPreviousPage:a.dataFrom===0,hasNextPage:a.dataTo===100,startCursor:l,endCursor:d}}else i={hasPreviousPage:!1,hasNextPage:!0,startCursor:"A",endCursor:"B"};const n={data:{[Ya]:{nodes:[],totalCount:100,pageInfo:i}}};return new Promise(a=>{setTimeout(()=>{this.graphqlQuery=this.graphqlService.buildQuery(),this.isWithCursor&&this.aureliaGrid?.paginationService?.setCursorPageInfo(n.data[Ya].pageInfo),a(n)},this.serverWaitDelay)})}goToFirstPage(){this.aureliaGrid.paginationService.goToFirstPage()}goToLastPage(){this.aureliaGrid.paginationService.goToLastPage()}gridStateChanged(e){console.log("GraphQL sample, Grid State changed:: ",e)}saveCurrentGridState(){console.log("GraphQL current grid state",this.aureliaGrid.gridStateService.getCurrentGridState())}setFiltersDynamically(){const e=new Date().getFullYear(),i=`${e}-01-01`,n=`${e}-02-15`;this.aureliaGrid.filterService.updateFilters([{columnId:"gender",searchTerms:["female"],operator:"="},{columnId:"name",searchTerms:["Jane"],operator:"StartsWith"},{columnId:"company",searchTerms:["acme"],operator:"IN"},{columnId:"billingAddressZip",searchTerms:["11"],operator:">="},{columnId:"finish",searchTerms:[i,n],operator:"RangeInclusive"}])}setSortingDynamically(){this.aureliaGrid.sortService.updateSorting([{columnId:"billingAddressZip",direction:"DESC"},{columnId:"company",direction:"ASC"}])}resetToOriginalPresets(){const e=new Date().getFullYear(),i=`${e}-01-01`,n=`${e}-02-15`;this.aureliaGrid.filterService.updateFilters([{columnId:"gender",searchTerms:["male"],operator:"="},{columnId:"name",searchTerms:["Joh*oe"],operator:"StartsWithEndsWith"},{columnId:"company",searchTerms:["xyz"],operator:"IN"},{columnId:"finish",searchTerms:[i,n],operator:"RangeInclusive"}]),this.aureliaGrid.sortService.updateSorting([{columnId:"name",direction:"asc"},{columnId:"company",direction:"DESC"}]),setTimeout(()=>{this.aureliaGrid.paginationService?.changeItemPerPage(20),this.aureliaGrid.paginationService?.goToPageNumber(2)})}setIsWithCursor(e){return this.isWithCursor=e,this.resetOptions({useCursor:this.isWithCursor}),!0}async switchLanguage(){const e=this.selectedLanguage==="en"?"fr":"en";await this.i18n.setLocale(e),this.selectedLanguage=e}resetOptions(e){this.displaySpinner(!0);const i=this.gridOptions.backendServiceApi.service;this.aureliaGrid.paginationService.setCursorBased(e.useCursor),i.updateOptions(e),this.gridOptions={...this.gridOptions},this.aureliaGrid.paginationService?.goToFirstPage()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}Yo=O1();Wi=F1(Yo,0,"Example6",im,Wi);G1(Yo,1,Wi);const L1=Object.freeze(Object.defineProperty({__proto__:null,get Example6(){return Wi}},Symbol.toStringTag,{value:"Module"})),am="example7",lr=`<h2>
  Example 7: Header Button Plugin
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example7.ts"
    >
      <span class="mdi mdi-link-variant"></span> code
    </a>
  </span>
  <button class="ms-2 btn btn-outline-secondary btn-sm btn-icon" type="button" data-test="toggle-subtitle" click.trigger="toggleSubTitle()">
    <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
  </button>
</h2>

<div class="subtitle">
  This example demonstrates using the <b>Slick.Plugins.HeaderButtons</b> plugin to easily add buttons to colum headers. These buttons can be
  specified directly in the column definition, and are very easy to configure and use. (<a
    href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/header-menu-header-buttons"
    target="_blank"
    >Wiki docs</a
  >)
  <ul>
    <li>Resize the 1st column to see all icon/command</li>
    <li>Mouse hover the 2nd column to see it's icon/command</li>
    <li>For all the other columns, click on top-right red circle icon to enable highlight of negative numbers.</li>
    <li>Use override callback functions to change the properties of show/hide, enable/disable the menu or certain item(s) from the list</li>
    <ol>
      <li>These callbacks are: "itemVisibilityOverride", "itemUsabilityOverride"</li>
      <li>for example the "Column E" does not show the header button via "itemVisibilityOverride"</li>
      <li>for example the "Column J" header button is displayed but it not usable via "itemUsabilityOverride"</li>
    </ol>
  </ul>
</div>

<h5>Grid 1</h5>
<aurelia-slickgrid
  grid-id="grid7-1"
  columns.bind="columnDefinitions1"
  options.bind="gridOptions1"
  dataset.bind="dataset1"
  on-aurelia-grid-created.trigger="aureliaGrid1Ready($event.detail)"
>
</aurelia-slickgrid>
<br />
<h5>Grid 2 - <span class="subtitle">with both Header Buttons & Menus</span></h5>
<aurelia-slickgrid
  grid-id="grid7-2"
  columns.bind="columnDefinitions2"
  options.bind="gridOptions2"
  dataset.bind="dataset2"
  on-aurelia-grid-created.trigger="aureliaGrid2Ready($event.detail)"
>
</aurelia-slickgrid>
`,nm=[],rm={};let Ka;function z1(t){Ka||(Ka=E.define({name:am,template:lr,dependencies:nm,bindables:rm})),t.register(Ka)}const N1=Object.freeze(Object.defineProperty({__proto__:null,bindables:rm,default:lr,dependencies:nm,name:am,register:z1,template:lr},Symbol.toStringTag,{value:"Module"}));var W1=Object.create,Ko=Object.defineProperty,B1=Object.getOwnPropertyDescriptor,j1=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),om=t=>{throw TypeError(t)},lm=(t,e,i)=>e in t?Ko(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,V1=(t,e)=>Ko(t,"name",{value:e,configurable:!0}),H1=t=>[,,,W1(null)],U1=["class","method","getter","setter","accessor","field","value","get","set"],sm=t=>t!==void 0&&typeof t!="function"?om("Function expected"):t,q1=(t,e,i,n,a)=>({kind:U1[t],name:e,metadata:n,addInitializer:r=>i._?om("Already initialized"):a.push(sm(r||null))}),Y1=(t,e)=>lm(e,j1("metadata"),t[3]),K1=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},Q1=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&B1(a,i));V1(a,i);for(var p=n.length-1;p>=0;p--)u=q1(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,sm(l)&&(a=l);return Y1(t,a),c&&Ko(a,i,c),m?s^4?r:c:a},xe=(t,e,i)=>lm(t,typeof e!="symbol"?e+"":e,i),dm,Qo;let Ti={},Ei={};dm=[T(N1)];class Bi{constructor(){xe(this,"columnDefinitions1",[]),xe(this,"columnDefinitions2",[]),xe(this,"gridOptions1"),xe(this,"gridOptions2"),xe(this,"dataset1",[]),xe(this,"dataset2",[]),xe(this,"aureliaGrid1"),xe(this,"aureliaGrid2"),xe(this,"hideSubTitle",!1),this.defineGrid(),Ti={},Ei={}}attached(){this.dataset1=this.loadData(200,1),this.dataset2=this.loadData(200,2)}aureliaGrid1Ready(e){this.aureliaGrid1=e}aureliaGrid2Ready(e){this.aureliaGrid2=e}defineGrid(){this.columnDefinitions1=[],this.columnDefinitions2=[],this.gridOptions1={enableAutoResize:!0,enableHeaderButton:!0,enableHeaderMenu:!1,autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:!1,enableExcelCopyBuffer:!0,excelCopyBufferOptions:{onCopyCells:(e,i)=>console.log("onCopyCells",e,i),onPasteCells:(e,i)=>console.log("onPasteCells",e,i),onCopyCancelled:(e,i)=>console.log("onCopyCancelled",e,i)},enableCellNavigation:!0,gridHeight:275,headerButton:{onCommand:(e,i)=>this.handleOnCommand(e,i,1)}},this.gridOptions2={...this.gridOptions1,enableHeaderMenu:!0,enableFiltering:!0,headerButton:{onCommand:(e,i)=>this.handleOnCommand(e,i,2)}}}handleOnCommand(e,i,n){const a=i.column,r=i.button;i.command==="toggle-highlight"&&(r.cssClass==="mdi mdi-lightbulb-on text-danger"?(n===1?delete Ti[a.id]:delete Ei[a.id],r.cssClass="mdi mdi-lightbulb-outline text-warning faded",r.tooltip="Highlight negative numbers."):(n===1?Ti[a.id]=!0:Ei[a.id]=!0,r.cssClass="mdi mdi-lightbulb-on text-danger",r.tooltip="Remove highlight."),this[`aureliaGrid${n}`].slickGrid.invalidate())}loadData(e,i){const n=[];for(let r=0;r<10;r++)n.push({id:r,name:"Column "+String.fromCharCode(65+r),field:r+"",width:r===0?70:100,filterable:!0,sortable:!0,formatter:(l,d,u,s)=>i===1&&Ti[s.id]&&u<0?`<div style="color:red; font-weight:bold;">${u}</div>`:i===2&&Ei[s.id]&&u<0?`<div style="color:red; font-weight:bold;">${u}</div>`:u,header:{buttons:[{cssClass:"mdi mdi-lightbulb-outline text-warning faded",command:"toggle-highlight",tooltip:"Highlight negative numbers.",itemVisibilityOverride:l=>l.column.name!=="Column E",itemUsabilityOverride:l=>l.column.name!=="Column J",action:(l,d)=>{console.log(`execute a callback action to "${d.command}" on ${d.column.name}`)}}]}});n[0].name="Resize me!",n[0].header={buttons:[{cssClass:"mdi mdi-message-text",handler:()=>{alert("Tag")}},{cssClass:"mdi mdi-forum-outline",handler:()=>{alert("Comment")}},{cssClass:"mdi mdi-information",handler:()=>{alert("Info")}},{cssClass:"mdi mdi-help-circle",handler:()=>{alert("Help")}}]},i===2&&n[0].header?.buttons?.reverse(),n[1].name="Hover me!",n[1].header={buttons:[{cssClass:"mdi mdi-help-circle",showOnHover:!0,tooltip:"This button only appears on hover.",handler:()=>{alert("Help")}}]};const a=[];for(let r=0;r<e;r++){const l=a[r]={};l.id=r;for(let d=0;d<n.length;d++)l[d]=Math.round(Math.random()*10)-5}return this[`columnDefinitions${i}`]=n,a}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid2.resizerService.resizeGrid(0)}}Qo=H1();Bi=Q1(Qo,0,"Example7",dm,Bi);K1(Qo,1,Bi);const Z1=Object.freeze(Object.defineProperty({__proto__:null,get Example7(){return Bi}},Symbol.toStringTag,{value:"Module"})),cm="example8",sr=`<h2>
  Example 8: Header Menu Plugin
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example8.ts"
    >
      <span class="mdi mdi-link-variant"></span> code
    </a>
  </span>
  <button class="ms-2 btn btn-outline-secondary btn-sm btn-icon" type="button" data-test="toggle-subtitle" click.trigger="toggleSubTitle()">
    <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
  </button>
</h2>

<div class="subtitle">
  This example demonstrates using the <b>Slick.Plugins.HeaderMenu</b> plugin to easily add menus to colum headers.<br />
  These menus can be specified directly in the column definition, and are very easy to configure and use. (<a
    href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/header-menu-header-buttonss"
    target="_blank"
    >Wiki docs</a
  >)
  <ul>
    <li>Now enabled by default in the Global Grid Options, it will add the default commands of (hide column, sort asc/desc)</li>
    <li>Hover over any column header to see an arrow showing up on the right</li>
    <li>Try Sorting (multi-sort) the 2 columns "Duration" and "% Complete" (the other ones are disabled)</li>
    <li>Try hiding any columns (you use the "Column Picker" plugin by doing a right+click on the header to show the column back)</li>
    <li>Note: The "Header Button" & "Header Menu" Plugins cannot be used at the same time</li>
    <li>You can change the menu icon via SASS variables as shown in this demo (check all SASS variables)</li>
    <li>Use override callback functions to change the properties of show/hide, enable/disable the menu or certain item(s) from the list</li>
    <ol>
      <li>These callbacks are: "itemVisibilityOverride", "itemUsabilityOverride"</li>
      <li>for example if we want to disable the "Help" command over the "Title" and "Completed" column</li>
      <li>for example don't show Help on column "% Complete"</li>
    </ol>
  </ul>
</div>

<button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="switchLanguage()">
  <i class="mdi mdi-translate"></i>
  Switch Language
</button>
<b>Locale:</b> <span style="font-style: italic" data-test="selected-locale">\${selectedLanguage + '.json'}</span>

<aurelia-slickgrid
  grid-id="grid8"
  columns.bind="columnDefinitions"
  options.bind="gridOptions"
  dataset.bind="dataset"
  on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
>
</aurelia-slickgrid>
`,um=[],mm={};let Qa;function J1(t){Qa||(Qa=E.define({name:cm,template:sr,dependencies:um,bindables:mm})),t.register(Qa)}const X1=Object.freeze(Object.defineProperty({__proto__:null,bindables:mm,default:sr,dependencies:um,name:cm,register:J1,template:sr},Symbol.toStringTag,{value:"Module"}));var eT=Object.create,Zo=Object.defineProperty,tT=Object.getOwnPropertyDescriptor,iT=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),pm=t=>{throw TypeError(t)},hm=(t,e,i)=>e in t?Zo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,aT=(t,e)=>Zo(t,"name",{value:e,configurable:!0}),nT=t=>[,,,eT(null)],rT=["class","method","getter","setter","accessor","field","value","get","set"],gm=t=>t!==void 0&&typeof t!="function"?pm("Function expected"):t,oT=(t,e,i,n,a)=>({kind:rT[t],name:e,metadata:n,addInitializer:r=>i._?pm("Already initialized"):a.push(gm(r||null))}),lT=(t,e)=>hm(e,iT("metadata"),t[3]),sT=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},dT=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&tT(a,i));aT(a,i);for(var p=n.length-1;p>=0;p--)u=oT(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,gm(l)&&(a=l);return lT(t,a),c&&Zo(a,i,c),m?s^4?r:c:a},He=(t,e,i)=>hm(t,typeof e!="symbol"?e+"":e,i),bm,Jo;bm=[T(X1)];class ji{constructor(e=O(Se)){this.i18n=e,He(this,"aureliaGrid"),He(this,"columnDefinitions",[]),He(this,"gridOptions"),He(this,"dataset",[]),He(this,"hideSubTitle",!1),He(this,"selectedLanguage"),He(this,"visibleColumns",[]),this.defineGrid();const i="en";this.i18n.setLocale(i),this.selectedLanguage=i}aureliaGridReady(e){this.aureliaGrid=e}attached(){this.getData()}defineGrid(){this.columnDefinitions=[{id:"title",name:"Title",field:"title",nameKey:"TITLE"},{id:"duration",name:"Duration",field:"duration",nameKey:"DURATION",sortable:!0},{id:"percentComplete",name:"% Complete",field:"percentComplete",nameKey:"PERCENT_COMPLETE",sortable:!0},{id:"start",name:"Start",field:"start",nameKey:"START"},{id:"finish",name:"Finish",field:"finish",nameKey:"FINISH"},{id:"completed",name:"Completed",field:"completed",nameKey:"COMPLETED",formatter:f.checkmarkMaterial}],this.columnDefinitions.forEach(e=>{e.header={menu:{commandItems:[{iconCssClass:"mdi mdi-help-circle",titleKey:"HELP",command:"help",tooltip:"Need assistance?",cssClass:"bold",textCssClass:e.id==="title"||e.id==="completed"?"":"blue",positionOrder:99,itemUsabilityOverride:i=>!(i.column.id==="title"||i.column.id==="completed"),itemVisibilityOverride:i=>i.column.id!=="percentComplete",action:(i,n)=>{console.log("execute an action on Help",n)}},{divider:!0,command:"",positionOrder:98},{command:"custom-actions",title:"Hello",positionOrder:99,commandItems:[{command:"hello-world",title:"Hello World"},{command:"hello-slickgrid",title:"Hello SlickGrid"},{command:"sub-menu",title:"Let's play",cssClass:"green",subMenuTitle:"choose your game",subMenuTitleCssClass:"text-italic salmon",commandItems:[{command:"sport-badminton",title:"Badminton"},{command:"sport-tennis",title:"Tennis"},{command:"sport-racquetball",title:"Racquetball"},{command:"sport-squash",title:"Squash"}]}]},{command:"feedback",title:"Feedback",positionOrder:100,commandItems:[{command:"request-update",title:"Request update from supplier",iconCssClass:"mdi mdi-star",tooltip:"this will automatically send an alert to the shipping team to contact the user for an update"},"divider",{command:"sub-menu",title:"Contact Us",iconCssClass:"mdi mdi-account",subMenuTitle:"contact us...",subMenuTitleCssClass:"italic",commandItems:[{command:"contact-email",title:"Email us",iconCssClass:"mdi mdi-pencil-outline"},{command:"contact-chat",title:"Chat with us",iconCssClass:"mdi mdi-message-text-outline"},{command:"contact-meeting",title:"Book an appointment",iconCssClass:"mdi mdi-coffee"}]}]}]}}}),this.gridOptions={enableAutoResize:!0,enableHeaderMenu:!0,autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:!1,enableCellNavigation:!0,headerMenu:{hideSortCommands:!1,hideColumnHideCommand:!1,subItemChevronClass:"mdi mdi-chevron-down mdi-rotate-270",onCommand:(e,i)=>{const n=i.item?.command;n.includes("hello-")?alert(i?.item.title):n.includes("sport-")?alert("Just do it, play "+i?.item?.title):n.includes("contact-")?alert("Command: "+i?.item?.command):i.command==="help"&&alert("Please help!!!")}},enableTranslate:!0,i18n:this.i18n}}getData(){const e=[];for(let i=0;i<1e3;i++)e[i]={id:i,title:"Task "+i,duration:Math.round(Math.random()*25)+" days",percentComplete:Math.round(Math.random()*100),start:"01/01/2009",finish:"01/05/2009",completed:i%5===0};this.dataset=e}async switchLanguage(){const e=this.selectedLanguage==="en"?"fr":"en";await this.i18n.setLocale(e),this.selectedLanguage=e}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}Jo=nT();ji=dT(Jo,0,"Example8",bm,ji);sT(Jo,1,ji);const cT=Object.freeze(Object.defineProperty({__proto__:null,get Example8(){return ji}},Symbol.toStringTag,{value:"Module"})),fm="example9",dr=`<h2>
  Example 9: Grid Menu Control
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example9.ts"
    >
      <span class="mdi mdi-link-variant"></span> code
    </a>
  </span>
  <button class="ms-2 btn btn-outline-secondary btn-sm btn-icon" type="button" data-test="toggle-subtitle" click.trigger="toggleSubTitle()">
    <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
  </button>
</h2>

<div class="subtitle">
  This example demonstrates using the <b>Slick.Controls.GridMenu</b> plugin to easily add a Grid Menu (aka hamburger menu) on the top right
  corner of the grid.<br />
  (<a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/grid-menu" target="_blank">Wiki docs</a>)
  <ul>
    <li>
      You can change the Grid Menu icon, for example "mdi-dots-vertical"&nbsp;&nbsp;<span class="mdi mdi-dots-vertical"></span
      >&nbsp;&nbsp;(which is shown in this example)
    </li>
    <li>By default the Grid Menu shows all columns which you can show/hide them</li>
    <li>You can configure multiple custom "commands" to show up in the Grid Menu and use the "onGridMenuCommand()" callback</li>
    <li>Doing a "right + click" over any column header will also provide a way to show/hide a column (via the Column Picker Plugin)</li>
    <li>You can change the icons of both picker via SASS variables as shown in this demo (check all SASS variables)</li>
    <li><i class="mdi mdi-arrow-down icon"></i> You can also show the Grid Menu anywhere on your page</li>
  </ul>
</div>

<button class="btn btn-outline-secondary btn-sm btn-icon" data-test="external-gridmenu" click.trigger="toggleGridMenu($event)">
  <i class="mdi mdi-menu"></i>
  Grid Menu
</button>
<button class="btn btn-outline-secondary btn-sm btn-icon" data-test="language" click.trigger="switchLanguage()">
  <i class="mdi mdi-translate"></i>
  Switch Language
</button>
<b>Locale:</b> <span style="font-style: italic" data-test="selected-locale">\${selectedLanguage + '.json'}</span>

<aurelia-slickgrid
  grid-id="grid9"
  columns.bind="columnDefinitions"
  dataset.bind="dataset"
  options.bind="gridOptions"
  on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
>
</aurelia-slickgrid>
`,vm=[],_m={};let Za;function uT(t){Za||(Za=E.define({name:fm,template:dr,dependencies:vm,bindables:_m})),t.register(Za)}const mT=Object.freeze(Object.defineProperty({__proto__:null,bindables:_m,default:dr,dependencies:vm,name:fm,register:uT,template:dr},Symbol.toStringTag,{value:"Module"}));var pT=Object.create,Xo=Object.defineProperty,hT=Object.getOwnPropertyDescriptor,gT=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),ym=t=>{throw TypeError(t)},Sm=(t,e,i)=>e in t?Xo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,bT=(t,e)=>Xo(t,"name",{value:e,configurable:!0}),fT=t=>[,,,pT(null)],vT=["class","method","getter","setter","accessor","field","value","get","set"],Cm=t=>t!==void 0&&typeof t!="function"?ym("Function expected"):t,_T=(t,e,i,n,a)=>({kind:vT[t],name:e,metadata:n,addInitializer:r=>i._?ym("Already initialized"):a.push(Cm(r||null))}),yT=(t,e)=>Sm(e,gT("metadata"),t[3]),ST=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},CT=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&hT(a,i));bT(a,i);for(var p=n.length-1;p>=0;p--)u=_T(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,Cm(l)&&(a=l);return yT(t,a),c&&Xo(a,i,c),m?s^4?r:c:a},ze=(t,e,i)=>Sm(t,typeof e!="symbol"?e+"":e,i),wm,el;wm=[T(mT)];class Vi{constructor(e=O(Se)){this.i18n=e,ze(this,"aureliaGrid"),ze(this,"columnDefinitions",[]),ze(this,"gridOptions"),ze(this,"dataset",[]),ze(this,"dataView"),ze(this,"gridObj"),ze(this,"hideSubTitle",!1),ze(this,"selectedLanguage"),this.defineGrid();const i="en";this.i18n.setLocale(i),this.selectedLanguage=i}attached(){this.getData()}aureliaGridReady(e){this.aureliaGrid=e,this.gridObj=e&&e.slickGrid,this.dataView=e&&e.dataView}defineGrid(){this.columnDefinitions=[{id:"title",name:"Title",field:"title",nameKey:"TITLE",filterable:!0},{id:"duration",name:"Duration",field:"duration",nameKey:"DURATION",sortable:!0,filterable:!0},{id:"percentComplete",name:"% Complete",field:"percentComplete",nameKey:"PERCENT_COMPLETE",sortable:!0,filterable:!0,type:"number",formatter:f.percentCompleteBar,filter:{model:v.compoundSlider,options:{hideSliderNumber:!1}}},{id:"start",name:"Start",field:"start",nameKey:"START",filterable:!0,type:"dateUs",filter:{model:v.compoundDate}},{id:"finish",name:"Finish",field:"finish",nameKey:"FINISH",filterable:!0,type:"dateUs",filter:{model:v.compoundDate}},{id:"completed",name:"Completed",field:"completed",nameKey:"COMPLETED",maxWidth:80,formatter:f.checkmarkMaterial,type:"boolean",minWidth:100,sortable:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"true"},{value:!1,label:"false"}],model:v.singleSelect}}],this.gridOptions={columnPicker:{hideForceFitButton:!0,hideSyncResizeButton:!0,onColumnsChanged:(e,i)=>{console.log("Column selection changed from Column Picker, visible columns: ",i.visibleColumns)}},enableAutoResize:!0,enableGridMenu:!0,autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:!0,enableCellNavigation:!0,gridMenu:{menuUsabilityOverride:()=>!0,commandTitleKey:"CUSTOM_COMMANDS",iconCssClass:"mdi mdi-dots-vertical",hideForceFitButton:!0,hideSyncResizeButton:!0,hideToggleFilterCommand:!1,menuWidth:17,resizeOnShowHeaderRow:!0,subItemChevronClass:"mdi mdi-chevron-down mdi-rotate-270",commandItems:[{iconCssClass:"mdi mdi-help-circle",titleKey:"HELP",disabled:!1,command:"help",positionOrder:90,cssClass:"bold",textCssClass:"blue"},{divider:!0,command:"",positionOrder:89},{title:"Command 1",command:"command1",positionOrder:91,cssClass:"orange",iconCssClass:"mdi mdi-alert",action:(e,i)=>alert(i.command),itemUsabilityOverride:e=>e&&Array.isArray(e.columns)?e.columns.length===e.visibleColumns.length:!0},{title:"Command 2",command:"command2",positionOrder:92,cssClass:"red",textCssClass:"italic",action:(e,i)=>alert(i.command),itemVisibilityOverride:()=>this.aureliaGrid?this.isObjectEmpty(this.aureliaGrid.filterService.getColumnFilters()):!0},{title:"Disabled command",disabled:!0,command:"disabled-command",positionOrder:98},{command:"",divider:!0,positionOrder:98},{command:"export",title:"Exports",positionOrder:99,commandItems:[{command:"exports-txt",title:"Text (tab delimited)"},{command:"sub-menu",title:"Excel",cssClass:"green",subMenuTitle:"available formats",subMenuTitleCssClass:"text-italic orange",commandItems:[{command:"exports-csv",title:"Excel (csv)"},{command:"exports-xlsx",title:"Excel (xlsx)"}]}]},{command:"feedback",title:"Feedback",positionOrder:100,commandItems:[{command:"request-update",title:"Request update from supplier",iconCssClass:"mdi mdi-star",tooltip:"this will automatically send an alert to the shipping team to contact the user for an update"},"divider",{command:"sub-menu",title:"Contact Us",iconCssClass:"mdi mdi-account",subMenuTitle:"contact us...",subMenuTitleCssClass:"italic",commandItems:[{command:"contact-email",title:"Email us",iconCssClass:"mdi mdi-pencil-outline"},{command:"contact-chat",title:"Chat with us",iconCssClass:"mdi mdi-message-text-outline"},{command:"contact-meeting",title:"Book an appointment",iconCssClass:"mdi mdi-coffee"}]}]}],onCommand:(e,i)=>{const n=i.item?.command;n.includes("exports-")?alert("Exporting as "+i?.item.title):n.includes("contact-")||n==="help"?alert("Command: "+i.command):console.log("onGridMenuCommand",i.command)},onColumnsChanged:(e,i)=>{console.log("Column selection changed from Grid Menu, visible columns: ",i.visibleColumns)}},enableTranslate:!0,i18n:this.i18n}}getData(){const e=[];for(let i=0;i<500;i++)e[i]={id:i,title:"Task "+i,phone:this.generatePhoneNumber(),duration:Math.round(Math.random()*25)+" days",percentComplete:Math.round(Math.random()*100),start:"01/01/2009",finish:"01/05/2009",completed:i%5===0};this.dataset=e}generatePhoneNumber(){let e="";for(let i=0;i<10;i++)e+=Math.round(Math.random()*9)+"";return e}async switchLanguage(){const e=this.selectedLanguage==="en"?"fr":"en";await this.i18n.setLocale(e),this.selectedLanguage=e}toggleGridMenu(e){this.aureliaGrid?.extensionService&&this.aureliaGrid.extensionService.getExtensionInstanceByName("gridMenu").showGridMenu(e,{dropSide:"right"})}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}isObjectEmpty(e){for(const i in e)if(e.hasOwnProperty(i)&&e[i]!=="")return!1;return!0}}el=fT();Vi=CT(el,0,"Example9",wm,Vi);ST(el,1,Vi);const wT=Object.freeze(Object.defineProperty({__proto__:null,get Example9(){return Vi}},Symbol.toStringTag,{value:"Module"})),xm="example10",cr=`<h2>
  Example 10: Multiple Grids with Row Selection
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example10.ts"
    >
      <span class="mdi mdi-link-variant"></span> code
    </a>
  </span>
  <button class="ms-2 btn btn-outline-secondary btn-sm btn-icon" type="button" data-test="toggle-subtitle" click.trigger="toggleSubTitle()">
    <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
  </button>
</h2>

<div class="subtitle">
  Row selection, single or multi-select (<a
    href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/row-selection"
    target="_blank"
    >Wiki docs</a
  >).
  <ul>
    <li>Single Select, you can click on any cell to make the row active</li>
    <li>Multiple Selections, you need to specifically click on the checkbox to make 1 or more selections</li>
    <li>
      NOTE: Any Row Selection(s) will be reset when using Pagination and changing Page (you will need to set it back manually if you want it
      back)
    </li>
  </ul>
</div>

<div class="row">
  <div class="col-sm-4" style="max-width: 205px">
    Pagination
    <div class="btn-group" role="group">
      <button class="btn btn-outline-secondary btn-xs btn-icon px-2" data-test="goto-first-page" click.trigger="goToGrid1FirstPage()">
        <i class="mdi mdi-page-first"></i>
      </button>
      <button class="btn btn-outline-secondary btn-xs btn-icon px-2" data-test="goto-last-page" click.trigger="goToGrid1LastPage()">
        <i class="mdi mdi-page-last icon"></i>
      </button>
    </div>
  </div>
  <div class="col-sm-8">
    <div class="alert alert-success">
      <strong>(single select) Selected Row:</strong>
      <span innerhtml.bind="selectedTitle" data-test="grid1-selections"></span>
    </div>
  </div>
</div>

<div class="overflow-hidden">
  <aurelia-slickgrid
    grid-id="grid1"
    columns.bind="columnDefinitions1"
    options.bind="gridOptions1"
    dataset.bind="dataset1"
    on-aurelia-grid-created.trigger="aureliaGrid1Ready($event.detail)"
    on-grid-state-changed.trigger="grid1StateChanged($event.detail)"
    on-selected-rows-changed.trigger="onGrid1SelectedRowsChanged($event.detail.eventData, $event.detail.args)"
  >
  </aurelia-slickgrid>
</div>

<hr class="col-md-6 offset-md-1" />

<div class="row">
  <div class="col-sm-4 col-md-3" style="max-width: 215px">
    <label for="enableGrid2Pagination">
      Pagination:
      <input type="checkbox" id="enableGrid2Pagination" checked.bind="isGrid2WithPagination" data-test="toggle-pagination-grid2" />
    </label>
    <span style="margin-left: 5px" if.bind="isGrid2WithPagination">
      <div class="btn-group" role="group">
        <button class="btn btn-outline-secondary btn-xs btn-icon px-2" data-test="goto-first-page" click.trigger="goToGrid2FirstPage()">
          <i class="mdi mdi-page-first"></i>
        </button>
        <button class="btn btn-outline-secondary btn-xs btn-icon px-2" data-test="goto-last-page" click.trigger="goToGrid2LastPage()">
          <i class="mdi mdi-page-last icon"></i>
        </button>
      </div>
    </span>
  </div>
  <div class="col-sm-8">
    <div class="alert alert-success">
      <strong>(multi-select) Selected Row(s):</strong>
      <span innerhtml.bind="selectedTitles" data-test="grid2-selections"></span>
    </div>
  </div>
</div>

<div class="overflow-hidden">
  <aurelia-slickgrid
    grid-id="grid2"
    columns.bind="columnDefinitions2"
    options.bind="gridOptions2"
    dataset.bind="dataset2"
    on-aurelia-grid-created.trigger="aureliaGrid2Ready($event.detail)"
    on-grid-state-changed.trigger="grid2StateChanged($event.detail)"
  >
  </aurelia-slickgrid>
</div>
`,Tm=[],Em={};let Ja;function xT(t){Ja||(Ja=E.define({name:xm,template:cr,dependencies:Tm,bindables:Em})),t.register(Ja)}const TT=Object.freeze(Object.defineProperty({__proto__:null,bindables:Em,default:cr,dependencies:Tm,name:xm,register:xT,template:cr},Symbol.toStringTag,{value:"Module"}));var ET=Object.create,tl=Object.defineProperty,$T=Object.getOwnPropertyDescriptor,kT=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),hi=t=>{throw TypeError(t)},$m=(t,e,i)=>e in t?tl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,hd=(t,e)=>tl(t,"name",{value:e,configurable:!0}),DT=t=>[,,,ET(null)],km=["class","method","getter","setter","accessor","field","value","get","set"],jt=t=>t!==void 0&&typeof t!="function"?hi("Function expected"):t,OT=(t,e,i,n,a)=>({kind:km[t],name:e,metadata:n,addInitializer:r=>i._?hi("Already initialized"):a.push(jt(r||null))}),MT=(t,e)=>$m(e,kT("metadata"),t[3]),ur=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)e&1?r[a].call(i):n=r[a].call(i,n);return n},Dm=(t,e,i,n,a,r)=>{var l,d,u,s,m,o=e&7,g=!!(e&8),c=!!(e&16),p=o>3?t.length+1:o?g?1:2:0,_=km[o+5],w=o>3&&(t[p-1]=[]),x=t[p]||(t[p]=[]),b=o&&(!c&&!g&&(a=a.prototype),o<5&&(o>3||!c)&&$T(o<4?a:{get[i](){return gd(this,r)},set[i](h){return bd(this,r,h)}},i));o?c&&o<4&&hd(r,(o>2?"set ":o>1?"get ":"")+i):hd(a,i);for(var y=n.length-1;y>=0;y--)s=OT(o,i,u={},t[3],x),o&&(s.static=g,s.private=c,m=s.access={has:c?h=>PT(a,h):h=>i in h},o^3&&(m.get=c?h=>(o^1?gd:IT)(h,a,o^4?r:b.get):h=>h[i]),o>2&&(m.set=c?(h,S)=>bd(h,a,S,o^4?r:b.set):(h,S)=>h[i]=S)),d=(0,n[y])(o?o<4?c?r:b[_]:o>4?void 0:{get:b.get,set:b.set}:a,s),u._=1,o^4||d===void 0?jt(d)&&(o>4?w.unshift(d):o?c?r=d:b[_]=d:a=d):typeof d!="object"||d===null?hi("Object expected"):(jt(l=d.get)&&(b.get=l),jt(l=d.set)&&(b.set=l),jt(l=d.init)&&w.unshift(l));return o||MT(t,a),b&&tl(a,i,b),c?o^4?r:b:a},V=(t,e,i)=>$m(t,typeof e!="symbol"?e+"":e,i),il=(t,e,i)=>e.has(t)||hi("Cannot "+i),PT=(t,e)=>Object(e)!==e?hi('Cannot use the "in" operator on this value'):t.has(e),gd=(t,e,i)=>(il(t,e,"read from private field"),i?i.call(t):e.get(t)),bd=(t,e,i,n)=>(il(t,e,"write to private field"),n?n.call(t,i):e.set(t,i),i),IT=(t,e,i)=>(il(t,e,"access private method"),i),Om,Mm,vt;Mm=[T(TT)],Om=[D()];class ti{constructor(){V(this,"isGrid2WithPagination",ur(vt,8,this,!0)),ur(vt,11,this),V(this,"aureliaGrid1"),V(this,"aureliaGrid2"),V(this,"columnDefinitions1",[]),V(this,"columnDefinitions2",[]),V(this,"gridOptions1"),V(this,"gridOptions2"),V(this,"dataset1",[]),V(this,"dataset2",[]),V(this,"hideSubTitle",!1),V(this,"selectedTitles",""),V(this,"selectedTitle",""),V(this,"selectedGrid2IDs",[]),this.defineGrids()}attached(){this.dataset1=this.prepareData(495),this.dataset2=this.prepareData(525)}aureliaGrid1Ready(e){this.aureliaGrid1=e}aureliaGrid2Ready(e){this.aureliaGrid2=e}defineGrids(){this.columnDefinitions1=[{id:"title",name:"Title",field:"title",sortable:!0,filterable:!0},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,type:"number",filterable:!0},{id:"complete",name:"% Complete",field:"percentComplete",formatter:f.percentCompleteBar,type:"number",filterable:!0,sortable:!0},{id:"start",name:"Start",field:"start",formatter:f.dateIso,exportWithFormatter:!0,type:"date",filterable:!0,sortable:!0,filter:{model:v.compoundDate}},{id:"finish",name:"Finish",field:"finish",formatter:f.dateIso,exportWithFormatter:!0,type:"date",filterable:!0,sortable:!0,filter:{model:v.compoundDate}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",formatter:f.checkmarkMaterial,type:"boolean",sortable:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"true"},{value:!1,label:"false"}],model:v.singleSelect}}],this.columnDefinitions2=[{id:"title",name:"Title",field:"title",sortable:!0,filterable:!0},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,type:"number",filterable:!0},{id:"complete",name:"% Complete",field:"percentComplete",formatter:f.percentCompleteBar,type:"number",filterable:!0,sortable:!0},{id:"start",name:"Start",field:"start",formatter:f.dateIso,exportWithFormatter:!0,type:"date",filterable:!0,sortable:!0,filter:{model:v.compoundDate}},{id:"finish",name:"Finish",field:"finish",formatter:f.dateIso,exportWithFormatter:!0,type:"date",filterable:!0,sortable:!0,filter:{model:v.compoundDate}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",formatter:f.checkmarkMaterial,type:"boolean",sortable:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"true"},{value:!1,label:"false"}],model:v.singleSelect}}],this.gridOptions1={enableAutoResize:!1,enableCellNavigation:!0,enableSelection:!0,enableCheckboxSelector:!0,enableFiltering:!0,checkboxSelector:{hideSelectAllCheckbox:!0},multiSelect:!1,selectionOptions:{selectActiveRow:!0},columnPicker:{hideForceFitButton:!0},gridMenu:{hideForceFitButton:!0},gridHeight:225,gridWidth:800,enablePagination:!0,pagination:{pageSizes:[5,10,15,20,25,50,75,100],pageSize:5},presets:{pagination:{pageNumber:2,pageSize:5}}},this.gridOptions2={enableAutoResize:!1,enableCellNavigation:!0,enableFiltering:!0,checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0,applySelectOnAllPages:!0},enableSelection:!0,selectionOptions:{selectActiveRow:!1},enableCheckboxSelector:!0,gridHeight:255,gridWidth:800,enablePagination:!0,pagination:{pageSizes:[5,10,15,20,25,50,75,100],pageSize:5},presets:{rowSelection:{dataContextIds:[3,12,13,522]}}}}prepareData(e){const i=[];for(let n=0;n<e;n++){const a=2e3+Math.floor(Math.random()*10),r=Math.floor(Math.random()*11),l=Math.floor(Math.random()*29),d=Math.round(Math.random()*100);i[n]={id:n,title:"Task "+n,duration:Math.round(Math.random()*100)+"",percentComplete:d,percentCompleteNumber:d,start:new Date(a,r,l),finish:new Date(a,r+1,l),effortDriven:n%5===0}}return i}goToGrid1FirstPage(){this.aureliaGrid1.paginationService.goToFirstPage()}goToGrid1LastPage(){this.aureliaGrid1.paginationService.goToLastPage()}goToGrid2FirstPage(){this.aureliaGrid2.paginationService.goToFirstPage()}goToGrid2LastPage(){this.aureliaGrid2.paginationService.goToLastPage()}grid1StateChanged(e){console.log("Grid State changed:: ",e),console.log("Grid State changed:: ",e.change)}grid2StateChanged(e){console.log("Grid State changed:: ",e),console.log("Grid State changed:: ",e.change),e.gridState.rowSelection&&(this.selectedGrid2IDs=e.gridState.rowSelection.filteredDataContextIds||[],this.selectedGrid2IDs=this.selectedGrid2IDs.sort((i,n)=>i-n),this.selectedTitles=this.selectedGrid2IDs.map(i=>`Task ${i}`).join(","),this.selectedTitles.length>293&&(this.selectedTitles=this.selectedTitles.substring(0,293)+"..."))}isGrid2WithPaginationChanged(){this.aureliaGrid2.paginationService.togglePaginationVisibility(this.isGrid2WithPagination)}onGrid1SelectedRowsChanged(e,i){const n=i?.grid;Array.isArray(i.rows)&&(this.selectedTitle=i.rows.map(a=>{const r=n.getDataItem(a);return r&&r.title||""}))}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid2.resizerService.resizeGrid(0)}}vt=DT();Dm(vt,5,"isGrid2WithPagination",Om,ti);ti=Dm(vt,0,"Example10",Mm,ti);ur(vt,1,ti);const GT=Object.freeze(Object.defineProperty({__proto__:null,get Example10(){return ti}},Symbol.toStringTag,{value:"Module"})),Pm="example11",mr=`<h2>
  Example 11: Add / Update / Highlight a Datagrid Item
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example11.ts"
    >
      <span class="mdi mdi-link-variant"></span> code
    </a>
  </span>
  <button class="ms-2 btn btn-outline-secondary btn-sm btn-icon" type="button" data-test="toggle-subtitle" click.trigger="toggleSubTitle()">
    <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
  </button>
</h2>

<div class="subtitle">
  Add / Update / Hightlight an Item from the Datagrid (<a
    href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/add-update-highlight"
    target="_blank"
    >Wiki docs</a
  >).
  <ul>
    <li><b>Note:</b> this demo is <b>only</b> on the datagrid (client) side, you still need to deal with the backend yourself</li>
    <li>Adding an item, will always be showing as the 1st item in the grid because that is the best visual place to add it</li>
    <li>Add/Update an item requires a valid Slickgrid Selection Model, you have 2 choices to deal with this:</li>
    <ul>
      <li>You can enable "enableCheckboxSelector" or "enableSelection" to True</li>
    </ul>
    <li>Click on any of the buttons below to test this out</li>
    <li>
      You can change the highlighted color &amp; animation by changing the
      <a href="https://github.com/ghiscoding/slickgrid-universal/blob/master/packages/common/src/styles/_variables.scss" target="_blank"
        >SASS Variables</a
      >
    </li>
    <ul>
      <li>"$row-highlight-background-color" or "$row-highlight-fade-animation"</li>
    </ul>
    <li>You can also add CSS class(es) on the fly (or on page load) on rows with certain criteria, (e.g. click on last button)</li>
    <li>
      <ul>
        <li>
          Example, click on button "Highlight Rows with Duration over 50" to see row styling changing.
          <a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/dynamic-item-metadata" target="_blank">Wiki doc</a>
        </li>
      </ul>
    </li>
  </ul>
</div>

<div class="col-sm-12">
  <span>
    <label>Scroll: </label>
    <div class="btn-group" role="group" aria-label="...">
      <button class="btn btn-sm btn-outline-secondary btn-icon" data-test="scroll-top-btn" click.trigger="scrollGridTop()">
        <i class="mdi mdi-arrow-down mdi-rotate-180 icon"></i>
      </button>
      <button class="btn btn-sm btn-outline-secondary btn-icon" data-test="scroll-bottom-btn" click.trigger="scrollGridBottom()">
        <i class="mdi mdi-arrow-down icon"></i>
      </button>
    </div>
    <button class="btn btn-sm btn-outline-secondary btn-icon" data-test="add-new-item-top-btn" click.trigger="addNewItem()">
      Add New Mocked Item (top)
    </button>
    <button class="btn btn-sm btn-outline-secondary btn-icon" data-test="add-new-item-bottom-btn" click.trigger="addNewItem('bottom')">
      Add New Mocked Item (bottom)
    </button>
    <button class="btn btn-sm btn-outline-secondary btn-icon" data-test="update-second-item-btn" click.trigger="updateSecondItem()">
      Update 2nd Row Item with Random Duration
    </button>
    <button class="btn btn-sm btn-outline-secondary btn-icon" data-test="highlight-row5-btn" click.trigger="highlighFifthRow()">
      Highlight 5th Row
    </button>
    <button
      class="btn btn-sm btn-outline-secondary btn-icon"
      data-test="highlight-duration40-btn"
      click.trigger="changeDurationBackgroundColor()"
    >
      Highlight Rows with Duration over 50
    </button>
  </span>
  <hr />
</div>

<aurelia-slickgrid
  grid-id="grid11"
  columns.bind="columnDefinitions"
  options.bind="gridOptions"
  dataset.bind="dataset"
  on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
>
</aurelia-slickgrid>
`,Im=[],Gm={};let Xa;function FT(t){Xa||(Xa=E.define({name:Pm,template:mr,dependencies:Im,bindables:Gm})),t.register(Xa)}const AT=Object.freeze(Object.defineProperty({__proto__:null,bindables:Gm,default:mr,dependencies:Im,name:Pm,register:FT,template:mr},Symbol.toStringTag,{value:"Module"}));var RT=Object.create,al=Object.defineProperty,LT=Object.getOwnPropertyDescriptor,zT=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Fm=t=>{throw TypeError(t)},Am=(t,e,i)=>e in t?al(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,NT=(t,e)=>al(t,"name",{value:e,configurable:!0}),WT=t=>[,,,RT(null)],BT=["class","method","getter","setter","accessor","field","value","get","set"],Rm=t=>t!==void 0&&typeof t!="function"?Fm("Function expected"):t,jT=(t,e,i,n,a)=>({kind:BT[t],name:e,metadata:n,addInitializer:r=>i._?Fm("Already initialized"):a.push(Rm(r||null))}),VT=(t,e)=>Am(e,zT("metadata"),t[3]),HT=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},UT=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&LT(a,i));NT(a,i);for(var p=n.length-1;p>=0;p--)u=jT(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,Rm(l)&&(a=l);return VT(t,a),c&&al(a,i,c),m?s^4?r:c:a},Ne=(t,e,i)=>Am(t,typeof e!="symbol"?e+"":e,i),Lm,nl;Lm=[T(AT)];class Hi{constructor(){Ne(this,"aureliaGrid"),Ne(this,"dataView"),Ne(this,"grid"),Ne(this,"gridService"),Ne(this,"columnDefinitions",[]),Ne(this,"gridOptions"),Ne(this,"dataset",[]),Ne(this,"hideSubTitle",!1),this.defineGrid(),this.mockData(1e3)}aureliaGridReady(e){this.aureliaGrid=e,this.dataView=e.dataView,this.grid=e.slickGrid,this.gridService=e.gridService}defineGrid(){this.columnDefinitions=[{id:"delete",field:"id",excludeFromHeaderMenu:!0,formatter:f.icon,params:{iconCssClass:"mdi mdi-trash-can pointer"},minWidth:30,maxWidth:30,onCellClick:(e,i)=>{console.log(i),confirm("Are you sure?")&&this.aureliaGrid.gridService.deleteItemById(i.dataContext.id)}},{id:"title",name:"Title",field:"title",sortable:!0,editor:{model:C.longText}},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,type:"number",editor:{model:C.text},onCellChange:(e,i)=>{alert("onCellChange directly attached to the column definition"),console.log(i)}},{id:"complete",name:"% Complete",field:"percentComplete",formatter:f.percentCompleteBar,type:"number",editor:{model:C.integer}},{id:"start",name:"Start",field:"start",formatter:f.dateIso,sortable:!0,type:"date"},{id:"finish",name:"Finish",field:"finish",formatter:f.dateIso,sortable:!0,type:"date"},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",formatter:f.checkmarkMaterial,type:"number",editor:{model:C.checkbox}}],this.gridOptions={asyncEditorLoading:!1,autoResize:{container:"#demo-container",rightPadding:10},editable:!0,enableColumnPicker:!0,enableCellNavigation:!0,enableSelection:!0}}mockData(e){const i=[];for(let n=0;n<e;n++){const a=2e3+Math.floor(Math.random()*10),r=Math.floor(Math.random()*11),l=Math.floor(Math.random()*29),d=Math.round(Math.random()*100);i[n]={id:n,title:"Task "+n,duration:Math.round(Math.random()*100)+"",percentComplete:d,percentCompleteNumber:d,start:new Date(a,r,l),finish:new Date(a,r+1,l),effortDriven:n%5===0}}this.dataset=i}addNewItem(e){const i=this.createNewItem(1);this.aureliaGrid.gridService.addItem(i,{position:e})}createNewItem(e=1){const i=this.aureliaGrid.dataView.getItems();let n=0;i.forEach(s=>{s.id>n&&(n=s.id)});const a=n+e,r=2e3+Math.floor(Math.random()*10),l=Math.floor(Math.random()*11),d=Math.floor(Math.random()*29),u=Math.round(Math.random()*100);return{id:a,title:"Task "+a,duration:Math.round(Math.random()*100)+"",percentComplete:u,percentCompleteNumber:u,start:new Date(r,l,d),finish:new Date(r,l+2,d),effortDriven:!0}}changeDurationBackgroundColor(){this.dataView.getItemMetadata=this.updateItemMetadataForDurationOver40(this.dataView.getItemMetadata),this.grid.invalidate()}highlighFifthRow(){this.scrollGridTop(),this.aureliaGrid.gridService.highlightRow(4,1500)}updateItemMetadataForDurationOver40(e){const i="duration-bg";return n=>{const a=this.dataView.getItem(n);let r={cssClasses:""};return typeof e=="object"&&(r=e(n)),r&&a&&a.duration&&+a.duration>40&&(r.cssClasses=(r.cssClasses||"")+" "+i),r}}updateSecondItem(){this.scrollGridTop();const e=this.aureliaGrid.gridService.getDataItemByRowNumber(1);e.duration=Math.round(Math.random()*100),this.aureliaGrid.gridService.updateItem(e)}scrollGridBottom(){this.aureliaGrid.slickGrid.navigateBottom()}scrollGridTop(){this.aureliaGrid.slickGrid.navigateTop()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}nl=WT();Hi=UT(nl,0,"Example11",Lm,Hi);HT(nl,1,Hi);const qT=Object.freeze(Object.defineProperty({__proto__:null,get Example11(){return Hi}},Symbol.toStringTag,{value:"Module"})),zm="example12",pr=`<h2>
  Example 12: Localization (i18n)
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example12.ts"
    >
      <span class="mdi mdi-link-variant"></span> code
    </a>
  </span>
  <button class="ms-2 btn btn-outline-secondary btn-sm btn-icon" type="button" data-test="toggle-subtitle" click.trigger="toggleSubTitle()">
    <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
  </button>
</h2>

<div class="subtitle">
  Support multiple locales with the i18next plugin, following these steps. Take a look at the (<a
    href="https://ghiscoding.gitbook.io/aurelia-slickgrid/localization/localization"
    target="_blank"
    >Wiki documentation</a
  >)
  <ol class="small">
    <li>You first need to "enableTranslate" in the Grid Options</li>
    <li>In the Column Definitions, you have following options</li>
    <ul>
      <li>To translate a header title, use "nameKey" with a translate key (nameKey: 'TITLE')</li>
      <li>For the cell values, you need to use a Formatter, there's 2 ways of doing it</li>
      <ul>
        <li>formatter: myCustomTranslateFormatter <b>&lt;= "Title" column uses it</b></li>
        <li>formatter: Formatters.translate <b>&lt;= "Completed" column uses it</b></li>
      </ul>
    </ul>
    <li>For date localization, you need to create your own custom formatter.</li>
    <ul>
      <li>You can easily implement logic to switch between Formatters "dateIso" or "dateUs", depending on current locale.</li>
    </ul>
    <li>For the Select (dropdown) filter, you can fill in the "labelKey" property, if found it will use it, else it will use "label"</li>
    <ul>
      <li>
        What if your select options have totally different value/label pair? In this case, you can use the
        <b>customStructure: { label: 'customLabel', value: 'customValue'}</b> to change the property name(s) to use.'
      </li>
      <li>What if you want to use "customStructure" and translation? Simply pass this flag <b>enableTranslateLabel: true</b></li>
      <li>
        More info on the Select Filter
        <a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/column-functionalities/filters/select-filter" target="_blank">Wiki page</a>
      </li>
    </ul>
    <li>
      For more info about "Download to File", read the
      <a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/export-to-excel" target="_blank">Wiki page</a>
    </li>
  </ol>
</div>

<hr />

<div class="row">
  <div class="col-sm-12">
    <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="language-button" click.trigger="switchLanguage()">
      <i class="mdi mdi-translate"></i>
      Switch Language
    </button>
    <label>Locale:</label>
    <span style="font-style: italic; width: 70px" data-test="selected-locale"> \${selectedLanguage + '.json'} </span>

    <span style="margin-left: 20px">
      <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="exportToFile('csv')">
        <i class="mdi mdi-download"></i>
        Download to CSV
      </button>
      <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="exportToFile('txt')">
        <i class="mdi mdi-download"></i>
        Download to Text
      </button>
      <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="exportToExcel()">
        <i class="mdi mdi-file-excel-outline text-success"></i>
        Download to Excel
      </button>
    </span>
    <span style="margin-left: 10px">
      <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="dynamicallyAddTitleHeader()">
        <i class="mdi mdi-shape-square-plus"></i>
        Dynamically Duplicate Title Column
      </button>
    </span>
  </div>
</div>

<aurelia-slickgrid
  grid-id="grid12"
  columns.bind="columnDefinitions"
  options.bind="gridOptions"
  dataset.bind="dataset"
  on-grid-state-changed.trigger="gridStateChanged($event.detail)"
  on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
>
</aurelia-slickgrid>
`,Nm=[],Wm={};let en;function YT(t){en||(en=E.define({name:zm,template:pr,dependencies:Nm,bindables:Wm})),t.register(en)}const KT=Object.freeze(Object.defineProperty({__proto__:null,bindables:Wm,default:pr,dependencies:Nm,name:zm,register:YT,template:pr},Symbol.toStringTag,{value:"Module"}));var QT=Object.create,rl=Object.defineProperty,ZT=Object.getOwnPropertyDescriptor,JT=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Bm=t=>{throw TypeError(t)},jm=(t,e,i)=>e in t?rl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,XT=(t,e)=>rl(t,"name",{value:e,configurable:!0}),eE=t=>[,,,QT(null)],tE=["class","method","getter","setter","accessor","field","value","get","set"],Vm=t=>t!==void 0&&typeof t!="function"?Bm("Function expected"):t,iE=(t,e,i,n,a)=>({kind:tE[t],name:e,metadata:n,addInitializer:r=>i._?Bm("Already initialized"):a.push(Vm(r||null))}),aE=(t,e)=>jm(e,JT("metadata"),t[3]),nE=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},rE=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&ZT(a,i));XT(a,i);for(var p=n.length-1;p>=0;p--)u=iE(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,Vm(l)&&(a=l);return aE(t,a),c&&rl(a,i,c),m?s^4?r:c:a},le=(t,e,i)=>jm(t,typeof e!="symbol"?e+"":e,i),Hm,ol;const oE=1500,fd=(t,e,i,n,a,r)=>r.getOptions().i18n?.tr("TASK_X",{x:i})??"";Hm=[T(KT)];class Ui{constructor(e=O(Se)){this.i18n=e,le(this,"aureliaGrid"),le(this,"gridOptions"),le(this,"columnDefinitions",[]),le(this,"dataset",[]),le(this,"selectedLanguage"),le(this,"duplicateTitleHeaderCount",1),le(this,"gridObj"),le(this,"hideSubTitle",!1),le(this,"excelExportService",new G),le(this,"textExportService",new $a),this.defineGrid();const i="en";this.i18n.setLocale(i),this.selectedLanguage=i}attached(){this.getData(oE)}aureliaGridReady(e){this.aureliaGrid=e,this.gridObj=e.slickGrid}defineGrid(){this.columnDefinitions=[{id:"title",name:"Title",field:"id",nameKey:"TITLE",minWidth:100,formatter:fd,sortable:!0,filterable:!0,params:{useFormatterOuputToFilter:!0}},{id:"description",name:"Description",field:"description",filterable:!0,sortable:!0,minWidth:80},{id:"duration",name:"Duration (days)",field:"duration",nameKey:"DURATION",sortable:!0,formatter:f.percentCompleteBar,minWidth:100,exportWithFormatter:!1,filterable:!0,type:"number",filter:{model:v.slider,options:{hideSliderNumber:!0}}},{id:"start",name:"Start",field:"start",nameKey:"START",formatter:f.dateIso,outputType:"dateIso",type:"date",minWidth:100,filterable:!0,filter:{model:v.compoundDate}},{id:"finish",name:"Finish",field:"finish",nameKey:"FINISH",formatter:f.dateIso,outputType:"dateIso",type:"date",minWidth:100,filterable:!0,filter:{model:v.compoundDate}},{id:"completedBool",name:"Completed",field:"completedBool",nameKey:"COMPLETED",minWidth:100,sortable:!0,formatter:f.checkmarkMaterial,exportCustomFormatter:f.translateBoolean,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,labelKey:"TRUE"},{value:!1,labelKey:"FALSE"}],model:v.singleSelect,enableTranslateLabel:!0}},{id:"completed",name:"Completed",field:"completed",nameKey:"COMPLETED",formatter:f.translate,sortable:!0,minWidth:100,exportWithFormatter:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:"TRUE",labelKey:"TRUE"},{value:"FALSE",labelKey:"FALSE"}],collectionSortBy:{property:"labelKey",sortDesc:!0},model:v.singleSelect,enableTranslateLabel:!0}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableAutoResize:!0,enableExcelCopyBuffer:!0,enableFiltering:!0,enableTranslate:!0,i18n:this.i18n,checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},enableCheckboxSelector:!0,enableSelection:!0,showCustomFooter:!0,customFooterOptions:{metricTexts:{itemsKey:"ITEMS",ofKey:"OF",lastUpdateKey:"LAST_UPDATE"},dateFormat:"YYYY-MM-DD hh:mm a",hideTotalItemCount:!1,hideLastUpdateTimestamp:!1},gridMenu:{hideExportCsvCommand:!1,hideExportTextDelimitedCommand:!1},enableExcelExport:!0,enableTextExport:!0,textExportOptions:{exportWithFormatter:!0,sanitizeDataExport:!0},excelExportOptions:{customExcelHeader:(e,i)=>{const n=this.i18n.getLocale()==="fr"?"Titre qui est suffisament long pour être coupé":"My header that is long enough to wrap",a=e.getStyleSheet(),r={font:{size:12,fontName:"Calibri",bold:!0,color:"FF0000FF"},alignment:{wrapText:!0}},l=a.createFormat(r);i.setRowInstructions(0,{height:30}),i.mergeCells("B1","D1");const d=[];d.push({value:""}),d.push({value:n,metadata:{style:l.id}}),i.data.push(d)},exportWithFormatter:!0,sanitizeDataExport:!0},externalResources:[this.excelExportService,this.textExportService]}}getData(e){const i=[];for(let n=0;n<e;n++){const a=2e3+Math.floor(Math.random()*10),r=Math.floor(Math.random()*11),l=Math.floor(Math.random()*29);i[n]={id:n,description:n%5?"desc "+n:"🚀🦄 español",duration:Math.round(Math.random()*100)+"",start:new Date(a,r,l),finish:new Date(a,r+1,l),completedBool:n%5===0,completed:n%5===0?"TRUE":"FALSE"}}this.dataset=i}dynamicallyAddTitleHeader(){const e={id:`title${this.duplicateTitleHeaderCount++}`,field:"id",nameKey:"TITLE",formatter:fd,sortable:!0,minWidth:100,filterable:!0,params:{useFormatterOuputToFilter:!0}};this.columnDefinitions.push(e),this.columnDefinitions=this.columnDefinitions.slice()}exportToExcel(){this.excelExportService.exportToExcel({filename:"Export",format:"xlsx"})}exportToFile(e="csv"){this.textExportService.exportToFile({delimiter:e==="csv"?",":"	",filename:"myExport",format:e==="csv"?"csv":"txt"})}gridStateChanged(e){console.log("Grid State changed:: ",e),console.log("Grid State changed:: ",e.change)}async switchLanguage(){const e=this.selectedLanguage==="en"?"fr":"en";await this.i18n.setLocale(e),this.selectedLanguage=e}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}ol=eE();Ui=rE(ol,0,"Example12",Hm,Ui);nE(ol,1,Ui);const lE=Object.freeze(Object.defineProperty({__proto__:null,get Example12(){return Ui}},Symbol.toStringTag,{value:"Module"})),Um="example13",hr=`<h2>
  Example 13: Grouping & Aggregators
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example13.ts"
    >
      <span class="mdi mdi-link-variant"></span> code
    </a>
  </span>
  <button class="ms-2 btn btn-outline-secondary btn-sm btn-icon" type="button" data-test="toggle-subtitle" click.trigger="toggleSubTitle()">
    <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
  </button>
</h2>

<div class="subtitle">
  <ul>
    <li>
      <a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/grouping-aggregators" target="_blank">Wiki docs</a>
    </li>
    <li>Fully dynamic and interactive multi-level grouping with filtering and aggregates over 50'000 items</li>
    <li>Each grouping level can have its own aggregates (over child rows, child groups, or all descendant rows)..</li>
    <li>Use "Aggregators" and "GroupTotalFormatters" directly from Aurelia-Slickgrid</li>
  </ul>
</div>

<div class="row">
  <div class="col-sm-12">
    <button class="btn btn-outline-secondary btn-xs btn-icon" data-test="add-5k-rows-btn" click.trigger="loadData(5000)">5K rows</button>
    <button class="btn btn-outline-secondary btn-xs btn-icon" data-test="add-50k-rows-btn" click.trigger="loadData(50000)">50K rows</button>
    <button class="btn btn-outline-secondary btn-xs btn-icon" data-test="clear-grouping-btn" click.trigger="clearGrouping()">
      <i class="mdi mdi-close"></i> Clear grouping
    </button>
    <button class="btn btn-outline-secondary btn-xs btn-icon" data-test="collapse-all-btn" click.trigger="collapseAllGroups()">
      <i class="mdi mdi-arrow-collapse"></i> Collapse all groups
    </button>
    <button class="btn btn-outline-secondary btn-xs btn-icon" data-test="expand-all-btn" click.trigger="expandAllGroups()">
      <i class="mdi mdi-arrow-expand"></i> Expand all groups
    </button>
    <button class="btn btn-outline-secondary btn-xs btn-icon" data-test="export-excel-btn" click.trigger="exportToExcel()">
      <i class="mdi mdi-file-excel-outline text-success"></i> Export to Excel
    </button>
    <button class="btn btn-outline-secondary btn-xs btn-icon" data-test="export-pdf-btn" click.trigger="exportToPdf()">
      <i class="mdi mdi-file-pdf-outline text-danger"></i> Export to PDF
    </button>
  </div>
</div>

<hr />

<div class="row">
  <div class="col-sm-12">
    <button class="btn btn-outline-secondary btn-xs btn-icon" data-test="group-duration-sort-value-btn" click.trigger="groupByDuration()">
      Group by Duration &amp; sort groups by value
    </button>
    <button
      class="btn btn-outline-secondary btn-xs btn-icon"
      data-test="group-duration-sort-count-btn"
      click.trigger="groupByDurationOrderByCount(false)"
    >
      Group by Duration &amp; sort groups by count
    </button>
  </div>
  <div class="row">
    <div class="col-sm-12">
      <button
        class="btn btn-outline-secondary btn-xs btn-icon"
        data-test="group-duration-sort-count-collapse-btn"
        click.trigger="groupByDurationOrderByCount(true)"
      >
        Group by Duration &amp; sort groups by count, aggregate collapsed
      </button>
      <button
        class="btn btn-outline-secondary btn-xs btn-icon"
        data-test="group-duration-effort-btn"
        click.trigger="groupByDurationEffortDriven()"
      >
        Group by Duration then Effort-Driven
      </button>
      <button
        class="btn btn-outline-secondary btn-xs btn-icon"
        data-test="group-duration-effort-percent-btn"
        click.trigger="groupByDurationEffortDrivenPercent()"
      >
        Group by Duration then Effort-Driven then Percent.
      </button>
      <span hidden.bind="!processing">
        <i class="mdi mdi-sync mdi-spin"></i>
      </span>
    </div>
  </div>
</div>

<aurelia-slickgrid
  grid-id="grid13"
  columns.bind="columnDefinitions"
  options.bind="gridOptions"
  dataset.bind="dataset"
  on-before-export-to-excel.trigger="processing = true"
  on-after-export-to-excel.trigger="processing = false"
  on-before-export-to-pdf.trigger="processing = true"
  on-after-export-to-pdf.trigger="processing = false"
  on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
>
</aurelia-slickgrid>
`,qm=[],Ym={};let tn;function sE(t){tn||(tn=E.define({name:Um,template:hr,dependencies:qm,bindables:Ym})),t.register(tn)}const dE=Object.freeze(Object.defineProperty({__proto__:null,bindables:Ym,default:hr,dependencies:qm,name:Um,register:sE,template:hr},Symbol.toStringTag,{value:"Module"}));var cE=Object.create,ll=Object.defineProperty,uE=Object.getOwnPropertyDescriptor,mE=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Km=t=>{throw TypeError(t)},Qm=(t,e,i)=>e in t?ll(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,pE=(t,e)=>ll(t,"name",{value:e,configurable:!0}),hE=t=>[,,,cE(null)],gE=["class","method","getter","setter","accessor","field","value","get","set"],Zm=t=>t!==void 0&&typeof t!="function"?Km("Function expected"):t,bE=(t,e,i,n,a)=>({kind:gE[t],name:e,metadata:n,addInitializer:r=>i._?Km("Already initialized"):a.push(Zm(r||null))}),fE=(t,e)=>Qm(e,mE("metadata"),t[3]),vE=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},_E=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&uE(a,i));pE(a,i);for(var p=n.length-1;p>=0;p--)u=bE(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,Zm(l)&&(a=l);return fE(t,a),c&&ll(a,i,c),m?s^4?r:c:a},X=(t,e,i)=>Qm(t,typeof e!="symbol"?e+"":e,i),Jm,sl;const yE=1e3;Jm=[T(dE)];class qi{constructor(){X(this,"aureliaGrid"),X(this,"columnDefinitions",[]),X(this,"gridOptions"),X(this,"dataset",[]),X(this,"dataviewObj"),X(this,"gridObj"),X(this,"hideSubTitle",!1),X(this,"processing",!1),X(this,"excelExportService",new G),X(this,"pdfExportService",new Oi),X(this,"textExportService",new $a),this.defineGrid()}attached(){this.loadData(yE)}aureliaGridReady(e){this.aureliaGrid=e,this.dataviewObj=e.dataView,this.gridObj=e.slickGrid,this.groupByDuration()}defineGrid(){const e=document.createElement("div"),i=document.createElement("button"),n=document.createElement("span");n.className="mdi mdi-help-circle no-padding",i.dataset.test="col1-hello-btn",i.className="btn btn-outline-secondary btn-xs btn-icon ms-1",i.textContent="Click me",i.title="simple column header test with a button click listener",i.addEventListener("click",()=>alert("Hello World")),i.appendChild(n),e.appendChild(document.createTextNode("Id ")),e.appendChild(i),this.columnDefinitions=[{id:"sel",name:e,field:"num",type:"number",columnPickerLabel:"Custom Label",width:140,maxWidth:150,excludeFromExport:!0,resizable:!0,filterable:!0,selectable:!1,focusable:!1},{id:"title",name:"Title",field:"title",width:50,minWidth:50,cssClass:"cell-title",filterable:!0,sortable:!0},{id:"duration",name:"Duration",field:"duration",minWidth:50,width:60,filterable:!0,filter:{model:v.slider,operator:">="},sortable:!0,type:"number",groupTotalsFormatter:B.sumTotals,params:{groupFormatterPrefix:"Total: "}},{id:"percentComplete",name:"% Complete",field:"percentComplete",minWidth:70,width:90,formatter:f.percentCompleteBar,filterable:!0,filter:{model:v.compoundSlider},sortable:!0,type:"number",groupTotalsFormatter:B.avgTotalsPercentage,params:{groupFormatterPrefix:"<i>Avg</i>: "}},{id:"start",name:"Start",field:"start",minWidth:60,maxWidth:130,filterable:!0,filter:{model:v.compoundDate},sortable:!0,type:"dateIso",formatter:f.dateIso,exportWithFormatter:!0},{id:"finish",name:"Finish",field:"finish",minWidth:60,maxWidth:130,filterable:!0,filter:{model:v.compoundDate},sortable:!0,type:"dateIso",formatter:f.dateIso,exportWithFormatter:!0},{id:"cost",name:"Cost",field:"cost",minWidth:70,width:80,sortable:!0,filterable:!0,filter:{model:v.compoundInputNumber},type:"number",formatter:f.currency,groupTotalsFormatter:B.sumTotalsCurrency,params:{displayNegativeNumberWithParentheses:!0,currencyPrefix:"€",groupFormatterCurrencyPrefix:"€",minDecimal:2,maxDecimal:4,groupFormatterPrefix:"<b>Total</b>: "},excelExportOptions:{style:{font:{outline:!0,italic:!0},format:"€0.00##;[Red](€0.00##)"},width:18},groupTotalsExcelExportOptions:{style:{alignment:{horizontal:"center"},font:{bold:!0,color:"FF005289",underline:"single",fontName:"Consolas",size:10},fill:{type:"pattern",patternType:"solid",fgColor:"FFE6F2F6"},border:{top:{color:"FFa500ff",style:"thick"},left:{color:"FFa500ff",style:"medium"},right:{color:"FFa500ff",style:"dotted"},bottom:{color:"FFa500ff",style:"double"}},format:'"Total: "€0.00##;[Red]"Total: "(€0.00##)'}}},{id:"effortDriven",name:"Effort Driven",minWidth:30,width:80,maxWidth:90,cssClass:"cell-effort-driven",field:"effortDriven",formatter:f.checkmarkMaterial,sortable:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:v.singleSelect}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:!0,enableGrouping:!0,enableExcelExport:!0,enableTextExport:!0,excelExportOptions:{sanitizeDataExport:!0},textExportOptions:{sanitizeDataExport:!0},externalResources:[this.excelExportService,this.pdfExportService,this.textExportService],showCustomFooter:!0,customFooterOptions:{hideMetrics:!1,hideTotalItemCount:!1,hideLastUpdateTimestamp:!1},enablePdfExport:!0,pdfExportOptions:{repeatHeadersOnEachPage:!1,sanitizeDataExport:!0,documentTitle:"Grouping Grid"}}}loadData(e){const i=[];for(let n=0;n<e;n++){const a=2e3+Math.floor(Math.random()*10),r=Math.floor(Math.random()*11),l=Math.floor(Math.random()*29),d=Math.round(Math.random()*100),u=n%33===0?null:Math.round(Math.random()*1e4)/100;i[n]={id:"id_"+n,num:n,title:"Task "+n,duration:Math.round(Math.random()*100)+"",percentComplete:d,percentCompleteNumber:d,start:new Date(a,r,l),finish:new Date(a,r+1,l),cost:n%3?u:u!==null?-u:null,effortDriven:n%5===0}}this.dataset=i}clearGrouping(){this.dataviewObj.setGrouping([])}collapseAllGroups(){this.dataviewObj.collapseAllGroups()}expandAllGroups(){this.dataviewObj.expandAllGroups()}exportToExcel(){this.excelExportService.exportToExcel({filename:"Export",format:"xlsx"})}exportToPdf(){this.pdfExportService.exportToPdf({filename:"Export"})}groupByDuration(){this.aureliaGrid.filterService.setSortColumnIcons([{columnId:"duration",sortAsc:!0}]),this.dataviewObj.setGrouping({getter:"duration",formatter:e=>`Duration: ${e.value} <span style="color:green">(${e.count} items)</span>`,comparer:(e,i)=>re.numeric(e.value,i.value,ri.asc),aggregators:[new k.Avg("percentComplete"),new k.Sum("cost")],aggregateCollapsed:!1,lazyTotalsCalculation:!0}),this.gridObj.invalidate()}groupByDurationOrderByCount(e){this.aureliaGrid.filterService.setSortColumnIcons([]),this.dataviewObj.setGrouping({getter:"duration",formatter:i=>`Duration: ${i.value} <span style="color:green">(${i.count} items)</span>`,comparer:(i,n)=>i.count-n.count,aggregators:[new k.Avg("percentComplete"),new k.Sum("cost")],aggregateCollapsed:e,lazyTotalsCalculation:!0}),this.gridObj.invalidate()}groupByDurationEffortDriven(){const e=[{columnId:"duration",sortAsc:!0},{columnId:"effortDriven",sortAsc:!0}];this.aureliaGrid.filterService.setSortColumnIcons(e),this.dataviewObj.setGrouping([{getter:"duration",formatter:i=>`Duration: ${i.value} <span style="color:green">(${i.count} items)</span>`,aggregators:[new k.Sum("duration"),new k.Sum("cost")],aggregateCollapsed:!0,lazyTotalsCalculation:!0},{getter:"effortDriven",formatter:i=>`Effort-Driven: ${i.value?"True":"False"} <span style="color:green">(${i.count} items)</span>`,aggregators:[new k.Avg("percentComplete"),new k.Sum("cost")],collapsed:!0,lazyTotalsCalculation:!0}]),this.gridObj.invalidate()}groupByDurationEffortDrivenPercent(){const e=[{columnId:"duration",sortAsc:!0},{columnId:"effortDriven",sortAsc:!0},{columnId:"percentComplete",sortAsc:!0}];this.aureliaGrid.filterService.setSortColumnIcons(e),this.dataviewObj.setGrouping([{getter:"duration",formatter:i=>`Duration: ${i.value} <span style="color:green">(${i.count} items)</span>`,aggregators:[new k.Sum("duration"),new k.Sum("cost")],aggregateCollapsed:!0,lazyTotalsCalculation:!0},{getter:"effortDriven",formatter:i=>`Effort-Driven: ${i.value?"True":"False"}  <span style="color:green">(${i.count} items)</span>`,aggregators:[new k.Sum("duration"),new k.Sum("cost")],lazyTotalsCalculation:!0},{getter:"percentComplete",formatter:i=>`% Complete: ${i.value}  <span style="color:green">(${i.count} items)</span>`,aggregators:[new k.Avg("percentComplete")],aggregateCollapsed:!0,collapsed:!0,lazyTotalsCalculation:!0}]),this.gridObj.invalidate()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}sl=hE();qi=_E(sl,0,"Example13",Jm,qi);vE(sl,1,qi);const SE=Object.freeze(Object.defineProperty({__proto__:null,get Example13(){return qi}},Symbol.toStringTag,{value:"Module"})),Xm="example14",gr=`<h2>
  Example 14: Column Span & Header Grouping
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example14.ts"
    >
      <span class="mdi mdi-link-variant"></span> code
    </a>
  </span>
  <button class="ms-2 btn btn-outline-secondary btn-sm btn-icon" type="button" data-test="toggle-subtitle" click.trigger="toggleSubTitle()">
    <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
  </button>
</h2>

<div class="subtitle">
  This example demonstrates how to easily span a row over multiple columns & how to group header titles.
  <ul>
    <li>
      Note that you can add Sort but remember that it will sort by the data which the row contains, even if the data is visually hidden by
      colspan it will still sort it
    </li>
  </ul>
</div>

<h3>
  Grid 1 <small>(with Header Grouping &amp; Colspan)</small>
  <button
    class="btn btn-outline-secondary btn-sm btn-icon ms-2"
    click.trigger="spreadColspan()"
    data-test="spread-colspan-button"
    title="Should we always spread the same visible column count with or without hidden columns?"
  >
    <span>Toggle Spreading of ColSpan with/without Hidden Columns</span>
  </button>
</h3>

<aurelia-slickgrid
  grid-id="grid1"
  columns.bind="columnDefinitions1"
  options.bind="gridOptions1"
  dataset.bind="dataset1"
  on-aurelia-grid-created.trigger="aureliaGridReady1($event.detail)"
>
</aurelia-slickgrid>

<hr />

<h3>Grid 2 <small>(with Header Grouping &amp; Frozen/Pinned Columns)</small></h3>

<div class="col-sm 12">
  <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="setFrozenColumns2(-1)" data-test="remove-frozen-column-button">
    <i class="mdi mdi-close"></i> Remove Frozen Columns
  </button>
  <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="setFrozenColumns2(2)" data-test="set-3frozen-columns">
    <i class="mdi mdi-pin-outline"></i> Set 3 Frozen Columns
  </button>
</div>

<aurelia-slickgrid
  grid-id="grid2"
  columns.bind="columnDefinitions2"
  options.bind="gridOptions2"
  dataset.bind="dataset2"
  on-aurelia-grid-created.trigger="aureliaGridReady2($event.detail)"
>
</aurelia-slickgrid>
`,ep=[],tp={};let an;function CE(t){an||(an=E.define({name:Xm,template:gr,dependencies:ep,bindables:tp})),t.register(an)}const wE=Object.freeze(Object.defineProperty({__proto__:null,bindables:tp,default:gr,dependencies:ep,name:Xm,register:CE,template:gr},Symbol.toStringTag,{value:"Module"}));var xE=Object.create,dl=Object.defineProperty,TE=Object.getOwnPropertyDescriptor,EE=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),ip=t=>{throw TypeError(t)},ap=(t,e,i)=>e in t?dl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,$E=(t,e)=>dl(t,"name",{value:e,configurable:!0}),kE=t=>[,,,xE(null)],DE=["class","method","getter","setter","accessor","field","value","get","set"],np=t=>t!==void 0&&typeof t!="function"?ip("Function expected"):t,OE=(t,e,i,n,a)=>({kind:DE[t],name:e,metadata:n,addInitializer:r=>i._?ip("Already initialized"):a.push(np(r||null))}),ME=(t,e)=>ap(e,EE("metadata"),t[3]),PE=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},IE=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&TE(a,i));$E(a,i);for(var p=n.length-1;p>=0;p--)u=OE(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,np(l)&&(a=l);return ME(t,a),c&&dl(a,i,c),m?s^4?r:c:a},ee=(t,e,i)=>ap(t,typeof e!="symbol"?e+"":e,i),rp,cl;rp=[T(wE)];class Yi{constructor(){ee(this,"aureliaGrid1"),ee(this,"aureliaGrid2"),ee(this,"gridObj2"),ee(this,"columnDefinitions1",[]),ee(this,"columnDefinitions2",[]),ee(this,"gridOptions1"),ee(this,"gridOptions2"),ee(this,"dataset1",[]),ee(this,"dataset2",[]),ee(this,"hideSubTitle",!1),ee(this,"isColspanSpreading",!1),this.definedGrid1(),this.definedGrid2()}attached(){this.dataset1=this.getData(500),this.dataset2=this.getData(500)}aureliaGridReady1(e){this.aureliaGrid1=e}aureliaGridReady2(e){this.aureliaGrid2=e,this.gridObj2=e.slickGrid}definedGrid1(){this.columnDefinitions1=[{id:"title",name:"Title",field:"title",sortable:!0,columnGroup:"Common Factor"},{id:"duration",name:"Duration",field:"duration",columnGroup:"Common Factor"},{id:"start",name:"Start",field:"start",columnGroup:"Period"},{id:"finish",name:"Finish",field:"finish",columnGroup:"Period"},{id:"%",name:"% Complete",field:"percentComplete",selectable:!1,columnGroup:"Analysis"},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",type:"boolean",columnGroup:"Analysis"}],this.gridOptions1={enableAutoResize:!1,enableCellNavigation:!0,enableColumnReorder:!1,enableSorting:!0,createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:28,gridHeight:275,gridWidth:800,enablePdfExport:!0,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!1},externalResources:[new G,new Oi],explicitInitialization:!0,dataView:{globalItemMetadataProvider:{getRowMetadata:(e,i)=>this.renderDifferentColspan(e,i)}},gridMenu:{iconButtonContainer:"preheader"},spreadHiddenColspan:this.isColspanSpreading}}definedGrid2(){this.columnDefinitions2=[{id:"sel",name:"#",field:"num",behavior:"select",cssClass:"cell-selection",width:40,resizable:!1,selectable:!1},{id:"title",name:"Title",field:"title",sortable:!0,columnGroup:"Common Factor"},{id:"duration",name:"Duration",field:"duration",columnGroup:"Common Factor"},{id:"start",name:"Start",field:"start",columnGroup:"Period"},{id:"finish",name:"Finish",field:"finish",columnGroup:"Period"},{id:"%",name:"% Complete",field:"percentComplete",selectable:!1,columnGroup:"Analysis"},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",type:"boolean",columnGroup:"Analysis"}],this.gridOptions2={enableCellNavigation:!0,enableColumnReorder:!1,createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:25,explicitInitialization:!0,gridHeight:275,gridWidth:800,frozenColumn:2,enablePdfExport:!0,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!1},externalResources:[new G,new Oi],gridMenu:{hideClearFrozenColumnsCommand:!1},headerMenu:{hideFreezeColumnsCommand:!1}}}getData(e){const i=[];for(let n=0;n<e;n++)i[n]={id:n,num:n,title:"Task "+n,duration:"5 days",percentComplete:Math.round(Math.random()*100),start:"01/01/2009",finish:"01/05/2009",effortDriven:n%5===0};return i}setFrozenColumns2(e){this.gridObj2.setOptions({frozenColumn:e}),this.gridOptions2=this.gridObj2.getOptions()}renderDifferentColspan(e,i){return e.id%2===1||i%2===1?{columns:{duration:{colspan:3}}}:{columns:{0:{colspan:"*"}}}}spreadColspan(){this.isColspanSpreading=!this.isColspanSpreading,this.aureliaGrid1.slickGrid?.setOptions({spreadHiddenColspan:this.isColspanSpreading}),this.aureliaGrid1.slickGrid?.resetActiveCell(),this.aureliaGrid1.slickGrid?.invalidate()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid2.resizerService.resizeGrid(0)}}cl=kE();Yi=IE(cl,0,"Example14",rp,Yi);PE(cl,1,Yi);const GE=Object.freeze(Object.defineProperty({__proto__:null,get Example14(){return Yi}},Symbol.toStringTag,{value:"Module"})),op="example15",br=`<h2>
  Example 15: Grid State & Presets using Local Storage
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example15.ts"
    >
      <span class="mdi mdi-link-variant"></span> code
    </a>
  </span>
  <button class="ms-2 btn btn-outline-secondary btn-sm btn-icon" type="button" data-test="toggle-subtitle" click.trigger="toggleSubTitle()">
    <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
  </button>
</h2>

<div class="subtitle">
  Grid State & Preset (<a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/grid-state-preset" target="_blank"
    >Wiki docs</a
  >)
  <br />
  <ul class="small">
    <li>Uses Local Storage to persist the Grid State and uses Grid Options "presets" to put the grid back to it's previous state</li>
    <ul>
      <li>
        to demo this, simply change any columns (position reorder, visibility, size, filter, sort), then refresh your browser with (F5)
      </li>
    </ul>
    <li>Local Storage is just one option, you can use whichever is more convenient for you (Local Storage, Session Storage, DB, ...)</li>
  </ul>
</div>

<button class="btn btn-outline-secondary btn-sm btn-icon" data-test="reset-button" click.trigger="clearGridStateFromLocalStorage()">
  <i class="mdi mdi-close"></i>
  Clear Grid State from Local Storage &amp; Reset Grid
</button>

<button class="btn btn-outline-secondary btn-sm btn-icon" data-test="language-button" click.trigger="switchLanguage()">
  <i class="mdi mdi-translate"></i>
  Switch Language
</button>
<strong>Locale:</strong>
<span style="font-style: italic" data-test="selected-locale"> \${selectedLanguage + '.json'} </span>

<aurelia-slickgrid
  grid-id="grid15"
  columns.bind="columnDefinitions"
  options.bind="gridOptions"
  dataset.bind="dataset"
  on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
  on-grid-state-changed.trigger="gridStateChanged($event.detail)"
>
</aurelia-slickgrid>
`,lp=[],sp={};let nn;function FE(t){nn||(nn=E.define({name:op,template:br,dependencies:lp,bindables:sp})),t.register(nn)}const AE=Object.freeze(Object.defineProperty({__proto__:null,bindables:sp,default:br,dependencies:lp,name:op,register:FE,template:br},Symbol.toStringTag,{value:"Module"}));var RE=Object.create,ul=Object.defineProperty,LE=Object.getOwnPropertyDescriptor,zE=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),dp=t=>{throw TypeError(t)},cp=(t,e,i)=>e in t?ul(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,NE=(t,e)=>ul(t,"name",{value:e,configurable:!0}),WE=t=>[,,,RE(null)],BE=["class","method","getter","setter","accessor","field","value","get","set"],up=t=>t!==void 0&&typeof t!="function"?dp("Function expected"):t,jE=(t,e,i,n,a)=>({kind:BE[t],name:e,metadata:n,addInitializer:r=>i._?dp("Already initialized"):a.push(up(r||null))}),VE=(t,e)=>cp(e,zE("metadata"),t[3]),HE=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},UE=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&LE(a,i));NE(a,i);for(var p=n.length-1;p>=0;p--)u=jE(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,up(l)&&(a=l);return VE(t,a),c&&ul(a,i,c),m?s^4?r:c:a},lt=(t,e,i)=>cp(t,typeof e!="symbol"?e+"":e,i),mp,ml;function Ue(t,e){return Math.floor(Math.random()*(e-t+1)+t)}const vd=25,$i="gridState",_d=500;mp=[T(AE)];class Ki{constructor(e=O(Se)){this.i18n=e,lt(this,"aureliaGrid"),lt(this,"columnDefinitions",[]),lt(this,"gridOptions"),lt(this,"dataset",[]),lt(this,"hideSubTitle",!1),lt(this,"selectedLanguage");const i=JSON.parse(localStorage[$i]||null);this.defineGrid(i);const n="en";this.i18n.setLocale(n),this.selectedLanguage=n}attached(){this.dataset=this.getData(_d)}detaching(){this.saveCurrentGridState()}aureliaGridReady(e){this.aureliaGrid=e}clearGridStateFromLocalStorage(){this.aureliaGrid.gridService.resetGrid(this.columnDefinitions),this.aureliaGrid.paginationService.changeItemPerPage(vd),setTimeout(()=>localStorage[$i]=null)}defineGrid(e){const i=[];for(let n=0;n<_d;n++)i.push({value:n,label:n});this.columnDefinitions=[{id:"title",name:"Title",field:"title",nameKey:"TITLE",filterable:!0,sortable:!0,minWidth:45,width:100,filter:{model:v.compoundInput}},{id:"description",name:"Description",field:"description",filterable:!0,sortable:!0,minWidth:80,width:100,filter:{model:v.input,filterShortcuts:[{titleKey:"BLANK_VALUES",searchTerms:["< A"],iconCssClass:"mdi mdi-filter-minus-outline"},{titleKey:"NON_BLANK_VALUES",searchTerms:["> A"],iconCssClass:"mdi mdi-filter-plus-outline"}]}},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,type:"number",exportCsvForceToKeepAsString:!0,minWidth:55,width:100,nameKey:"DURATION",filterable:!0,filter:{collection:i,model:v.multipleSelect,options:{maxHeight:250,width:175}}},{id:"complete",name:"% Complete",field:"percentComplete",nameKey:"PERCENT_COMPLETE",minWidth:70,type:"number",sortable:!0,width:100,formatter:f.percentCompleteBar,filterable:!0,filter:{model:v.slider,operator:">"}},{id:"start",name:"Start",field:"start",nameKey:"START",formatter:f.dateIso,sortable:!0,minWidth:75,exportWithFormatter:!0,width:100,type:"date",filterable:!0,filter:{model:v.compoundDate,filterShortcuts:[{titleKey:"PAST",searchTerms:[be(new Date,"YYYY-MM-DD")],operator:"<",iconCssClass:"mdi mdi-calendar"},{titleKey:"FUTURE",searchTerms:[be(new Date,"YYYY-MM-DD")],operator:">",iconCssClass:"mdi mdi-calendar-clock"}]}},{id:"completed",field:"completed",nameKey:"COMPLETED",minWidth:85,maxWidth:85,formatter:f.checkmarkMaterial,width:100,type:"boolean",sortable:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:v.singleSelect}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableCheckboxSelector:!0,enableFiltering:!0,enableTranslate:!0,i18n:this.i18n,columnPicker:{hideForceFitButton:!0},gridMenu:{hideForceFitButton:!0,hideClearFrozenColumnsCommand:!1},headerMenu:{hideFreezeColumnsCommand:!1},enablePagination:!0,pagination:{pageSizes:[5,10,15,20,25,30,40,50,75,100],pageSize:vd}},e&&(this.gridOptions.presets=e)}getData(e){const i=new Date().getFullYear(),n=[];for(let a=0;a<e;a++){const r=Math.round(Math.random()*100),l=Ue(i-15,i+8),d=Ue(10,25),u=Ue(1,12),s=u<10?`0${u}`:u,m=Ue(10,28),o=Ue(0,100),g=Ue(10,23),c=Ue(10,59);n[a]={id:a,title:"Task "+a,description:a%5?"desc "+a:null,duration:r,percentComplete:o,percentCompleteNumber:o,start:new Date(l,u,m),usDateShort:`${u}/${m}/${d}`,utcDate:`${l}-${s}-${m}T${g}:${c}:${c}Z`,completed:a%3===0}}return n}gridStateChanged(e){console.log("Client sample, Grid State changed:: ",e),localStorage[$i]=JSON.stringify(e.gridState)}saveCurrentGridState(){const e=this.aureliaGrid.gridStateService.getCurrentGridState();console.log("Client sample, current Grid State:: ",e),localStorage[$i]=JSON.stringify(e)}async switchLanguage(){const e=this.selectedLanguage==="en"?"fr":"en";await this.i18n.setLocale(e),this.selectedLanguage=e}useDefaultPresets(){return{columns:[{columnId:"description",width:170},{columnId:"title",width:55},{columnId:"duration"},{columnId:"complete"},{columnId:"start"},{columnId:"usDateShort"},{columnId:"utcDate"}],filters:[{columnId:"duration",searchTerms:[2,22,44]},{columnId:"usDateShort",operator:"<",searchTerms:["4/20/25"]}],sorters:[{columnId:"duration",direction:"DESC"},{columnId:"complete",direction:"ASC"}]}}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}ml=WE();Ki=UE(ml,0,"Example15",mp,Ki);HE(ml,1,Ki);const qE=Object.freeze(Object.defineProperty({__proto__:null,get Example15(){return Ki}},Symbol.toStringTag,{value:"Module"})),pp="example16",fr=`<h2>
  Example 16: Row Move & Checkbox Selector
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example16.ts"
    >
      <span class="mdi mdi-link-variant"></span> code
    </a>
  </span>
  <button class="ms-2 btn btn-outline-secondary btn-sm btn-icon" type="button" data-test="toggle-subtitle" click.trigger="toggleSubTitle()">
    <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
  </button>
</h2>

<div class="subtitle">
  This example demonstrates using the <b>Slick.Plugins.RowMoveManager</b> plugin to easily move a row in the grid.<br />
  <ul>
    <li>Click to select, Ctrl+Click to toggle selection, Shift+Click to select a range.</li>
    <li>Drag one or more rows by the handle (icon) to reorder</li>
    <li>If you plan to use Row Selection + Row Move, then use "singleRowMove: true" and "disableRowSelection: true"</li>
    <li>You can change "columnIndexPosition" to move the icon position of any extension (RowMove, RowDetail or RowSelector icon)</li>
    <ul>
      <li>You will also want to enable the DataView "syncGridSelection: true" to keep row selection even after a row move</li>
    </ul>
    <li>
      If you plan to use only Row Move, then you could keep default values (or omit them completely) of "singleRowMove: false" and
      "disableRowSelection: false"
    </li>
    <ul>
      <li>
        SingleRowMove has the name suggest will only move 1 row at a time, by default it will move any row(s) that are selected unless you
        disable the flag
      </li>
    </ul>
  </ul>
</div>

<div class="row">
  <div class="col-sm-12">
    <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="hide-duration-btn" click.trigger="hideDurationColumnDynamically()">
      <i class="mdi mdi-eye-off-outline"></i>
      Dynamically Hide "Duration"
    </button>
    <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="disable-filters-btn" click.trigger="disableFilters()">
      <i class="mdi mdi-close"></i>
      Disable Filters
    </button>
    <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="disable-sorting-btn" click.trigger="disableSorting()">
      <i class="mdi mdi-close"></i>
      Disable Sorting
    </button>
    <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="toggle-filtering-btn" click.trigger="toggleFilter()">
      <i class="mdi mdi-swap-vertical"></i>
      Toggle Filtering
    </button>
    <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="toggle-sorting-btn" click.trigger="toggleSorting()">
      <i class="mdi mdi-swap-vertical"></i>
      Toggle Sorting
    </button>
    <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="add-crud-columns-btn" click.trigger="addEditDeleteColumns()">
      <i class="mdi mdi-shape-square-plus"></i>
      Add Edit/Delete Columns
    </button>
  </div>
</div>

<br />

<aurelia-slickgrid
  grid-id="grid16"
  columns.bind="columnDefinitions"
  options.bind="gridOptions"
  dataset.bind="dataset"
  on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
>
</aurelia-slickgrid>
`,hp=[],gp={};let rn;function YE(t){rn||(rn=E.define({name:pp,template:fr,dependencies:hp,bindables:gp})),t.register(rn)}const KE=Object.freeze(Object.defineProperty({__proto__:null,bindables:gp,default:fr,dependencies:hp,name:pp,register:YE,template:fr},Symbol.toStringTag,{value:"Module"}));var QE=Object.create,pl=Object.defineProperty,ZE=Object.getOwnPropertyDescriptor,JE=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),bp=t=>{throw TypeError(t)},fp=(t,e,i)=>e in t?pl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,XE=(t,e)=>pl(t,"name",{value:e,configurable:!0}),e$=t=>[,,,QE(null)],t$=["class","method","getter","setter","accessor","field","value","get","set"],vp=t=>t!==void 0&&typeof t!="function"?bp("Function expected"):t,i$=(t,e,i,n,a)=>({kind:t$[t],name:e,metadata:n,addInitializer:r=>i._?bp("Already initialized"):a.push(vp(r||null))}),a$=(t,e)=>fp(e,JE("metadata"),t[3]),n$=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},r$=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&ZE(a,i));XE(a,i);for(var p=n.length-1;p>=0;p--)u=i$(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,vp(l)&&(a=l);return a$(t,a),c&&pl(a,i,c),m?s^4?r:c:a},Ot=(t,e,i)=>fp(t,typeof e!="symbol"?e+"":e,i),_p,hl;_p=[T(KE)];class Qi{constructor(){Ot(this,"aureliaGrid"),Ot(this,"columnDefinitions",[]),Ot(this,"gridOptions"),Ot(this,"dataset",[]),Ot(this,"hideSubTitle",!1),this.defineGrid()}aureliaGridReady(e){this.aureliaGrid=e}get rowMoveInstance(){return this.aureliaGrid?.extensionService.getExtensionInstanceByName("rowMoveManager")}attached(){this.getData()}defineGrid(){this.columnDefinitions=[{id:"title",name:"Title",field:"title",filterable:!0},{id:"duration",name:"Duration",field:"duration",filterable:!0,sortable:!0},{id:"%",name:"% Complete",field:"percentComplete",filterable:!0,sortable:!0},{id:"start",name:"Start",field:"start",filterable:!0,sortable:!0,filter:{model:v.compoundDate}},{id:"finish",name:"Finish",field:"finish",filterable:!0,sortable:!0,filter:{model:v.compoundDate}},{id:"effort-driven",name:"Completed",field:"effortDriven",formatter:f.checkmarkMaterial,filterable:!0,sortable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:v.singleSelect}}],this.gridOptions={enableAutoResize:!0,autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:!0,enableCheckboxSelector:!0,checkboxSelector:{hideSelectAllCheckbox:!1,columnIndexPosition:1,hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},enableSelection:!0,selectionOptions:{selectActiveRow:!1},dataView:{syncGridSelection:!0},enableRowMoveManager:!0,rowMoveManager:{columnIndexPosition:0,singleRowMove:!0,disableRowSelection:!0,cancelEditOnDrag:!0,hideRowMoveShadow:!1,width:30,onBeforeMoveRows:this.onBeforeMoveRow.bind(this),onMoveRows:this.onMoveRows.bind(this)},showCustomFooter:!0,presets:{rowSelection:{dataContextIds:[1,2,6,7]}}}}getData(){const e=[];for(let i=0;i<500;i++)e[i]={id:i,title:"Task "+i,duration:Math.round(Math.random()*25)+" days",percentComplete:Math.round(Math.random()*100),start:"01/01/2009",finish:"01/05/2009",effortDriven:i%5===0};this.dataset=e}onBeforeMoveRow(e,i){for(const n of i.rows)if(n===i.insertBefore||n===i.insertBefore-1&&i.insertBefore-1!==this.aureliaGrid.dataView.getItemCount())return e.preventDefault(),!1;return!0}onMoveRows(e,i){const n=i.rows,a=i.insertBefore,r=[];this.aureliaGrid.dataView.sort(void 0,!0);const l=this.aureliaGrid.dataView.getItems(),d=this.aureliaGrid.dataView.getFilteredItems(),u=this.aureliaGrid.dataView.getItem(a),s=u?this.aureliaGrid.dataView.getIdxById(u.id):this.aureliaGrid.dataView.getItemCount(),m=[];n.forEach(_=>m.push(d[_]));const o=m.map(_=>this.aureliaGrid.dataView.getIdxById(_.id)),g=l.slice(0,s),c=l.slice(s,l.length);n.sort((_,w)=>_-w);for(const _ of o)_&&r.push(l[_]);o.reverse();for(const _ of o)_!==void 0&&s!==void 0&&(_<s?g.splice(_,1):c.splice(_-s,1));const p=g.concat(r.concat(c));this.dataset=p}hideDurationColumnDynamically(){this.aureliaGrid.gridService.hideColumnById("duration")}disableFilters(){this.aureliaGrid.filterService.disableFilterFunctionality(!0)}disableSorting(){this.aureliaGrid.sortService.disableSortFunctionality(!0)}addEditDeleteColumns(){if(this.columnDefinitions[0].id!=="change-symbol"){const e=[{id:"change-symbol",field:"id",excludeFromColumnPicker:!0,excludeFromGridMenu:!0,excludeFromHeaderMenu:!0,formatter:f.icon,params:{iconCssClass:"mdi mdi-pencil pointer"},minWidth:30,maxWidth:30,onCellClick:(n,a)=>{alert(`Technically we should Edit "Task ${a.dataContext.id}"`)}},{id:"delete-symbol",field:"id",excludeFromColumnPicker:!0,excludeFromGridMenu:!0,excludeFromHeaderMenu:!0,formatter:f.icon,params:{iconCssClass:"mdi mdi-trash-can pointer"},minWidth:30,maxWidth:30,onCellClick:(n,a)=>{confirm("Are you sure?")&&this.aureliaGrid.gridService.deleteItemById(a.dataContext.id)}}],i=this.aureliaGrid.gridService.getAllColumnDefinitions();i.unshift(e[0],e[1]),this.columnDefinitions=[...i]}}toggleFilter(){this.aureliaGrid.filterService.toggleFilterFunctionality()}toggleSorting(){this.aureliaGrid.sortService.toggleSortFunctionality()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}hl=e$();Qi=r$(hl,0,"Example16",_p,Qi);n$(hl,1,Qi);const o$=Object.freeze(Object.defineProperty({__proto__:null,get Example16(){return Qi}},Symbol.toStringTag,{value:"Module"})),yp="example17",vr=`<div class="container-fluid">
  <h2>
    Example 17: Dynamically Create Grid from CSV / Excel import
    <span class="float-end">
      <a
        style="font-size: 18px"
        target="_blank"
        href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example17.ts"
      >
        <span class="mdi mdi-link-variant"></span> code
      </a>
    </span>
    <button
      class="ms-2 btn btn-outline-secondary btn-sm btn-icon"
      type="button"
      data-test="toggle-subtitle"
      click.trigger="toggleSubTitle()"
    >
      <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
    </button>
  </h2>

  <div class="subtitle">
    Allow creating a grid dynamically by importing an external CSV or Excel file. This script demo will read the CSV file and will consider
    the first row as the column header and create the column definitions accordingly, while the next few rows will be considered the
    dataset. Note that this example is demoing a CSV file import but in your application you could easily implemnt an Excel file uploading.
  </div>

  <div>A default CSV file can be download <a id="template-dl" href.bind="templateUrl">here</a>.</div>

  <div class="d-flex mt-5 align-items-end">
    <div class="file-upload">
      <label for="formFile" class="form-label">Choose a CSV file…</label>
      <input
        class="form-control"
        type="file"
        data-test="file-upload-input"
        value.bind="uploadFileRef"
        change.trigger="handleFileImport($event)"
      />
    </div>
    <span class="mx-3">or</span>
    <div>
      <button id="uploadBtn" data-test="static-data-btn" class="btn btn-outline-secondary" click.trigger="handleDefaultCsv">
        Use default CSV data
      </button>
      &nbsp;/
      <button class="btn btn-outline-danger btn-sm ms-2" click.trigger="destroyGrid()">Destroy Grid</button>
    </div>
  </div>

  <hr />

  <aurelia-slickgrid
    if="value.bind: gridCreated; cache: false"
    grid-id="grid17"
    columns.bind="columnDefinitions"
    options.bind="gridOptions"
    dataset.bind="dataset"
    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
  >
  </aurelia-slickgrid>
</div>
`,Sp=[],Cp={};let on;function l$(t){on||(on=E.define({name:yp,template:vr,dependencies:Sp,bindables:Cp})),t.register(on)}const s$=Object.freeze(Object.defineProperty({__proto__:null,bindables:Cp,default:vr,dependencies:Sp,name:yp,register:l$,template:vr},Symbol.toStringTag,{value:"Module"}));var d$=Object.create,gl=Object.defineProperty,c$=Object.getOwnPropertyDescriptor,u$=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),wp=t=>{throw TypeError(t)},xp=(t,e,i)=>e in t?gl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,m$=(t,e)=>gl(t,"name",{value:e,configurable:!0}),p$=t=>[,,,d$(null)],h$=["class","method","getter","setter","accessor","field","value","get","set"],Tp=t=>t!==void 0&&typeof t!="function"?wp("Function expected"):t,g$=(t,e,i,n,a)=>({kind:h$[t],name:e,metadata:n,addInitializer:r=>i._?wp("Already initialized"):a.push(Tp(r||null))}),b$=(t,e)=>xp(e,u$("metadata"),t[3]),f$=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},v$=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&c$(a,i));m$(a,i);for(var p=n.length-1;p>=0;p--)u=g$(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,Tp(l)&&(a=l);return b$(t,a),c&&gl(a,i,c),m?s^4?r:c:a},Te=(t,e,i)=>xp(t,typeof e!="symbol"?e+"":e,i),Ep,bl;const _$="assets/data";Ep=[T(s$)];class Zi{constructor(){Te(this,"aureliaGrid"),Te(this,"columnDefinitions",[]),Te(this,"gridOptions"),Te(this,"gridCreated",!1),Te(this,"hideSubTitle",!1),Te(this,"dataset",[]),Te(this,"paginationPosition","top"),Te(this,"templateUrl",`${_$}/users.csv`),Te(this,"uploadFileRef","")}aureliaGridReady(e){this.aureliaGrid=e}destroyGrid(){this.gridCreated=!1}handleFileImport(e){const i=e.target.files[0];if(i.name.endsWith(".csv")){const n=new FileReader;n.onload=a=>{const r=a.target.result;this.dynamicallyCreateGrid(r)},n.readAsText(i)}else alert("File must be a CSV file")}handleDefaultCsv(){this.dynamicallyCreateGrid(`First Name,Last Name,Age,Type
Bob,Smith,33,Teacher
John,Doe,20,Student
Jane,Doe,21,Student`),this.uploadFileRef=""}dynamicallyCreateGrid(e){this.gridCreated=!1;const i=e?.split(`
`),n=[],a=[];i.forEach((r,l)=>{const d=r.split(","),u={};if(l===0)for(const s of d){const m=Cv(s);n.push({id:m,name:s,field:m,filterable:!0,sortable:!0})}else d.forEach((s,m)=>{u[n[m].id]=s}),"id"in u?a.push(u):a.push({...u,id:l})}),this.gridOptions={gridHeight:300,gridWidth:800,enableFiltering:!0,enableExcelExport:!0,externalResources:[new G],headerRowHeight:35,rowHeight:33},this.dataset=a,this.columnDefinitions=n,console.log(this.columnDefinitions,this.dataset),this.gridCreated=!0}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}bl=p$();Zi=v$(bl,0,"Example17",Ep,Zi);f$(bl,1,Zi);const y$=Object.freeze(Object.defineProperty({__proto__:null,get Example17(){return Zi}},Symbol.toStringTag,{value:"Module"})),$p="example18",_r=`<h2>
  Example 18: Draggable Grouping & Aggregators
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example18.ts"
    >
      <span class="mdi mdi-link-variant"></span> code
    </a>
  </span>
  <button class="ms-2 btn btn-outline-secondary btn-sm btn-icon" type="button" data-test="toggle-subtitle" click.trigger="toggleSubTitle()">
    <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
  </button>
  <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="toggleDarkMode()" data-test="toggle-dark-mode">
    <span class="mdi mdi-theme-light-dark"></span>
    <span>Toggle Dark Mode</span>
  </button>
</h2>

<div class="subtitle">
  <ul>
    <li>
      <a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/grouping-aggregators" target="_blank">Wiki docs</a>
    </li>
    <li>This example shows 3 ways of grouping</li>
    <ol>
      <li>
        Drag any Column Header on the top placeholder to group by that column (support moti-columns grouping by adding more columns to the
        drop area).
      </li>
      <li>Use buttons and defined functions to group by whichever field you want</li>
      <li>Use the Select dropdown to group, the position of the Selects represent the grouping level</li>
    </ol>
    <li>Fully dynamic and interactive multi-level grouping with filtering and aggregates ovor 50'000 items</li>
    <li>Each grouping level can have its own aggregates (over child rows, child groups, or all descendant rows)..</li>
    <li>Use "Aggregators" and "GroupTotalFormatters" directly from Aurelia-Slickgrid</li>
  </ul>
</div>

<div class="form-inline">
  <div class="row">
    <div class="col-sm-12">
      <button class="btn btn-outline-secondary btn-xs btn-icon" data-test="add-5k-rows-btn" click.trigger="loadData(5000)">5K rows</button>
      <button class="btn btn-outline-secondary btn-xs btn-icon" data-test="add-50k-rows-btn" click.trigger="loadData(50000)">
        50K rows
      </button>
      <button class="btn btn-outline-secondary btn-xs btn-icon" data-test="clear-grouping-btn" click.trigger="clearGroupsAndSelects()">
        <i class="mdi mdi-close"></i> Clear grouping
      </button>
      <button class="btn btn-outline-secondary btn-xs btn-icon" data-test="collapse-all-btn" click.trigger="collapseAllGroups()">
        <i class="mdi mdi-arrow-collapse"></i> Collapse all groups
      </button>
      <button class="btn btn-outline-secondary btn-xs btn-icon" data-test="expand-all-btn" click.trigger="expandAllGroups()">
        <i class="mdi mdi-arrow-expand"></i> Expand all groups
      </button>
      <button
        class="btn btn-outline-secondary btn-xs btn-icon"
        data-test="toggle-draggable-grouping-row"
        click.trigger="toggleDraggableGroupingRow()"
      >
        Toggle Draggable Grouping Row
      </button>
      <button class="btn btn-outline-secondary btn-xs btn-icon" click.trigger="exportToExcel()">
        <i class="mdi mdi-file-excel-outline text-success"></i> Export to Excel
      </button>
      <button class="btn btn-outline-secondary btn-xs btn-icon" click.trigger="exportToPdf()">
        <i class="mdi mdi-file-pdf-outline text-danger"></i> Export to PDF
      </button>
    </div>
  </div>

  <div class="row">
    <div class="col-sm-12">
      <button
        class="btn btn-outline-secondary btn-xs btn-icon"
        data-test="group-duration-sort-value-btn"
        click.trigger="groupByDurationOrderByCount(false)"
      >
        Group by duration &amp; sort groups by value
      </button>
      <button
        class="btn btn-outline-secondary btn-xs btn-icon"
        data-test="group-duration-sort-count-btn"
        click.trigger="groupByDurationOrderByCount(true)"
      >
        Group by duration &amp; sort groups by count
      </button>
      <button
        class="btn btn-outline-secondary btn-xs btn-icon"
        data-test="group-duration-effort-btn"
        click.trigger="groupByDurationEffortDriven()"
      >
        Group by Duration then Effort-Driven
      </button>
      <button class="btn btn-outline-secondary btn-xs btn-icon" data-test="set-dynamic-filter" click.trigger="setFiltersDynamically()">
        <span class="mdi mdi-filter-outline"></span>
        <span> Set Filters Dynamically </span>
      </button>
      <button class="btn btn-outline-secondary btn-xs btn-icon" data-test="set-dynamic-sorting" click.trigger="setSortingDynamically()">
        <span class="mdi mdi-sort-ascending"></span>
        <span> Set Sorting Dynamically </span>
      </button>
    </div>
  </div>

  <div class="row mt-2">
    <div class="col-sm-12">
      <div class="form-row">
        <div class="row form-group">
          <label for="field1" class="col-sm-3 mb-2">Group by field(s)</label>
          <div class="form-group col-md-3 grouping-selects" repeat.for="groupField of selectedGroupingFields">
            <select class="form-select" change.trigger="groupByFieldName()" value.bind="groupField">
              <option model.bind="''">...</option>
              <option model.bind="column.id" repeat.for="column of columnDefinitions">\${column.name}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="row mt-1 mb-1">
  <hr />
</div>

<aurelia-slickgrid
  grid-id="grid18"
  columns.bind="columnDefinitions"
  options.bind="gridOptions"
  dataset.bind="dataset"
  on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
>
</aurelia-slickgrid>
`,kp=[],Dp={};let ln;function S$(t){ln||(ln=E.define({name:$p,template:_r,dependencies:kp,bindables:Dp})),t.register(ln)}const C$=Object.freeze(Object.defineProperty({__proto__:null,bindables:Dp,default:_r,dependencies:kp,name:$p,register:S$,template:_r},Symbol.toStringTag,{value:"Module"}));var w$=Object.create,fl=Object.defineProperty,x$=Object.getOwnPropertyDescriptor,T$=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Op=t=>{throw TypeError(t)},Mp=(t,e,i)=>e in t?fl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,E$=(t,e)=>fl(t,"name",{value:e,configurable:!0}),$$=t=>[,,,w$(null)],k$=["class","method","getter","setter","accessor","field","value","get","set"],Pp=t=>t!==void 0&&typeof t!="function"?Op("Function expected"):t,D$=(t,e,i,n,a)=>({kind:k$[t],name:e,metadata:n,addInitializer:r=>i._?Op("Already initialized"):a.push(Pp(r||null))}),O$=(t,e)=>Mp(e,T$("metadata"),t[3]),M$=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},P$=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&x$(a,i));E$(a,i);for(var p=n.length-1;p>=0;p--)u=D$(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,Pp(l)&&(a=l);return O$(t,a),c&&fl(a,i,c),m?s^4?r:c:a},z=(t,e,i)=>Mp(t,typeof e!="symbol"?e+"":e,i),Ip,vl;const I$=1e4;Ip=[T(C$)];class Ji{constructor(){z(this,"_darkMode",!1),z(this,"aureliaGrid"),z(this,"columnDefinitions",[]),z(this,"dataset",[]),z(this,"dataviewObj"),z(this,"draggableGroupingPlugin"),z(this,"durationOrderByCount",!1),z(this,"gridObj"),z(this,"gridOptions"),z(this,"hideSubTitle",!1),z(this,"processing",!1),z(this,"selectedGroupingFields",["","",""]),z(this,"excelExportService",new G),z(this,"pdfExportService",new Oi),z(this,"textExportService",new $a),this.loadData(I$),this.defineGrid()}aureliaGridReady(e){this.aureliaGrid=e,this.gridObj=e.slickGrid,this.dataviewObj=e.dataView}detaching(){document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light"}defineGrid(){this.columnDefinitions=[{id:"title",name:"Title",field:"title",columnGroup:"Common Factor",width:70,minWidth:50,cssClass:"cell-title",filterable:!0,sortable:!0,grouping:{getter:"title",formatter:e=>`Title: ${e.value}  <span class="text-primary">(${e.count} items)</span>`,aggregators:[new k.Sum("cost")],aggregateCollapsed:!1,collapsed:!1}},{id:"duration",name:"Duration",field:"duration",columnGroup:"Common Factor",width:70,sortable:!0,filterable:!0,filter:{model:v.slider,operator:">="},type:"number",groupTotalsFormatter:B.sumTotals,grouping:{getter:"duration",formatter:e=>`Duration: ${e.value} <span class="text-primary">(${e.count} items)</span>`,comparer:(e,i)=>this.durationOrderByCount?e.count-i.count:re.numeric(e.value,i.value,ri.asc),aggregators:[new k.Sum("cost")],aggregateCollapsed:!1,collapsed:!1}},{id:"start",name:"Start",field:"start",columnGroup:"Period",minWidth:60,sortable:!0,filterable:!0,filter:{model:v.compoundDate},formatter:f.dateIso,type:"dateUtc",outputType:"dateIso",exportWithFormatter:!0,grouping:{getter:"start",formatter:e=>`Start: ${e.value}  <span class="text-primary">(${e.count} items)</span>`,aggregators:[new k.Sum("cost")],aggregateCollapsed:!1,collapsed:!1}},{id:"finish",name:"Finish",field:"finish",columnGroup:"Period",minWidth:60,sortable:!0,filterable:!0,filter:{model:v.compoundDate},formatter:f.dateIso,type:"dateUtc",outputType:"dateIso",exportWithFormatter:!0,grouping:{getter:"finish",formatter:e=>`Finish: ${e.value} <span class="text-primary">(${e.count} items)</span>`,aggregators:[new k.Sum("cost")],aggregateCollapsed:!1,collapsed:!1}},{id:"cost",name:"Cost",field:"cost",columnGroup:"Analysis",width:90,sortable:!0,filterable:!0,filter:{model:v.compoundInput},formatter:f.dollar,exportWithFormatter:!0,groupTotalsFormatter:B.sumTotalsDollar,type:"number",grouping:{getter:"cost",formatter:e=>`Cost: ${e.value} <span class="text-primary">(${e.count} items)</span>`,aggregators:[new k.Sum("cost")],aggregateCollapsed:!0,collapsed:!0}},{id:"percentComplete",name:"% Complete",field:"percentComplete",columnGroup:"Analysis",minWidth:70,width:90,formatter:f.percentCompleteBar,type:"number",filterable:!0,filter:{model:v.compoundSlider},sortable:!0,groupTotalsFormatter:B.avgTotalsPercentage,grouping:{getter:"percentComplete",formatter:e=>`% Complete: ${e.value}  <span class="text-primary">(${e.count} items)</span>`,aggregators:[new k.Sum("cost")],aggregateCollapsed:!1,collapsed:!1},params:{groupFormatterPrefix:"<i>Avg</i>: "}},{id:"effortDriven",name:"Effort-Driven",field:"effortDriven",columnGroup:"Analysis",width:80,minWidth:20,maxWidth:100,cssClass:"cell-effort-driven",sortable:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:v.singleSelect},formatter:f.checkmarkMaterial,grouping:{getter:"effortDriven",formatter:e=>`Effort-Driven: ${e.value?"True":"False"} <span class="text-primary">(${e.count} items)</span>`,aggregators:[new k.Sum("cost")],collapsed:!1}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableDraggableGrouping:!0,createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:30,createTopHeaderPanel:!0,showTopHeaderPanel:!0,topHeaderPanelHeight:35,showCustomFooter:!0,enableFiltering:!0,enableSorting:!0,enableColumnReorder:!0,gridMenu:{onCommand:(e,i)=>{i.command==="toggle-preheader"&&this.clearGrouping()}},draggableGrouping:{dropPlaceHolderText:"Drop a column header here to group by the column",deleteIconCssClass:"mdi mdi-close color-danger",sortAscIconCssClass:"mdi mdi-arrow-up",sortDescIconCssClass:"mdi mdi-arrow-down",onGroupChanged:(e,i)=>this.onGroupChanged(i),onExtensionRegistered:e=>this.draggableGroupingPlugin=e,initialGroupBy:["duration"]},darkMode:this._darkMode,excelExportOptions:{sanitizeDataExport:!0},textExportOptions:{sanitizeDataExport:!0},externalResources:[this.excelExportService,this.pdfExportService,this.textExportService],pdfExportOptions:{repeatHeadersOnEachPage:!0,documentTitle:"Grouping Grid"}}}loadData(e){const i=[];for(let n=0;n<e;n++){const a=2e3+Math.floor(Math.random()*10),r=Math.floor(Math.random()*11),l=Math.floor(Math.random()*29),d=Math.round(Math.random()*100),u=Math.round(Math.random()*1e4)/100;i[n]={id:"id_"+n,num:n,title:"Task "+n,duration:Math.round(Math.random()*100)+"",percentComplete:d,percentCompleteNumber:d,start:new Date(a,r,l),finish:new Date(a,r+1,l),cost:n%33===0?-u:u,effortDriven:n%5===0}}this.dataset=i}clearGroupsAndSelects(){this.clearGroupingSelects(),this.clearGrouping()}clearGroupingSelects(){this.selectedGroupingFields.forEach((e,i)=>this.selectedGroupingFields[i]=""),this.selectedGroupingFields=[...this.selectedGroupingFields]}clearGrouping(e=!0){this.draggableGroupingPlugin?.clearDroppedGroups(),e&&this.gridObj?.invalidate()}collapseAllGroups(){this.dataviewObj.collapseAllGroups()}expandAllGroups(){this.dataviewObj.expandAllGroups()}exportToExcel(){this.excelExportService.exportToExcel({filename:"Export",format:"xlsx"})}exportToPdf(){this.pdfExportService.exportToPdf({filename:"Export"})}groupByDurationOrderByCount(e=!1){if(this.durationOrderByCount=e,this.clearGrouping(!1),this.draggableGroupingPlugin?.setDroppedGroups){this.showPreHeader(),this.draggableGroupingPlugin.setDroppedGroups("duration");const i=e?[]:[{columnId:"duration",sortAsc:!0}];this.gridObj?.setSortColumns(i),this.gridObj?.invalidate()}}groupByDurationEffortDriven(){this.clearGrouping(!1),this.draggableGroupingPlugin?.setDroppedGroups&&(this.showPreHeader(),this.draggableGroupingPlugin.setDroppedGroups(["duration","effortDriven"]),this.gridObj?.invalidate())}groupByFieldName(){if(this.clearGrouping(),this.draggableGroupingPlugin&&this.draggableGroupingPlugin.setDroppedGroups){this.showPreHeader();const e=this.selectedGroupingFields.filter(i=>i!=="");e.length===0?this.clearGrouping():this.draggableGroupingPlugin.setDroppedGroups(e),this.gridObj.invalidate()}}onGroupChanged(e){const i=e?.caller??[],n=e?.groupColumns??[];Array.isArray(this.selectedGroupingFields)&&Array.isArray(n)&&n.length>0?(this.selectedGroupingFields.forEach((a,r)=>this.selectedGroupingFields[r]=n[r]?.getter??""),this.selectedGroupingFields=[...this.selectedGroupingFields]):n.length===0&&i==="remove-group"&&this.clearGroupingSelects()}showPreHeader(){this.gridObj.setPreHeaderPanelVisibility(!0)}setFiltersDynamically(){this.aureliaGrid.filterService.updateFilters([{columnId:"percentComplete",operator:">=",searchTerms:["55"]},{columnId:"cost",operator:"<",searchTerms:["80"]}])}setSortingDynamically(){this.aureliaGrid.sortService.updateSorting([{columnId:"percentComplete",direction:"ASC"}])}toggleDraggableGroupingRow(){this.clearGroupsAndSelects(),this.gridObj.setTopHeaderPanelVisibility(!this.gridObj.getOptions().showTopHeaderPanel)}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.aureliaGrid.slickGrid?.setOptions({darkMode:this._darkMode})}toggleBodyBackground(){this._darkMode?(document.querySelector(".panel-wm-content").classList.add("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="dark"):(document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light")}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}vl=$$();Ji=P$(vl,0,"Example18",Ip,Ji);M$(vl,1,Ji);const G$=Object.freeze(Object.defineProperty({__proto__:null,get Example18(){return Ji}},Symbol.toStringTag,{value:"Module"})),Gp="example19",yr=`<h2>
  Example 19: Row Detail View
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example19.ts"
    >
      <span class="mdi mdi-link-variant"></span> code
    </a>
  </span>
  <button class="ms-2 btn btn-outline-secondary btn-sm btn-icon" type="button" data-test="toggle-subtitle" click.trigger="toggleSubTitle()">
    <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
  </button>
  <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="toggleDarkMode()" data-test="toggle-dark-mode">
    <span class="mdi mdi-theme-light-dark"></span>
    <span>Toggle Dark Mode</span>
  </button>
</h2>

<div class="subtitle">
  Add functionality to show extra information with a Row Detail View, (<a
    href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/row-detail"
    target="_blank"
    >Wiki docs</a
  >)
  <ul>
    <li>Click on the row "+" icon or anywhere on the row to open it (the latter can be changed via property "useRowClick: false")</li>
    <li>Pass a View/Model as a Template to the Row Detail</li>
    <li>
      You can use "expandableOverride()" callback to override logic to display expand icon on every row (for example only show it every 2nd
      row)
    </li>
  </ul>
</div>

<div class="row">
  <div class="col-sm-6">
    <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="changeEditableGrid()" data-test="editable-grid-btn">
      Make Grid Editable
    </button>
    <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="closeAllRowDetail()" data-test="collapse-all-btn">
      Close all Row Details
    </button>
    &nbsp;&nbsp;

    <span class="d-inline-flex gap-4px">
      <label for="detailViewRowCount">Detail View Rows Shown: </label>
      <input id="detailViewRowCount" type="number" value.bind="detailViewRowCount" style="height: 26px; width: 40px" />
      <button
        class="btn btn-outline-secondary btn-xs btn-icon"
        style="height: 26px"
        click.trigger="changeDetailViewRowCount()"
        data-test="set-count-btn"
      >
        Set
      </button>
      <label for="serverdelay" class="ms-2">Server Delay: </label>
      <input
        id="serverdelay"
        value.bind="serverWaitDelay"
        type="number"
        data-test="server-delay"
        style="height: 26px; width: 55px"
        title="input a fake timer delay to simulate slow server response"
      />
    </span>
  </div>
  <div class="alert alert-\${flashAlertType} col-sm-6" if.bind="message" data-test="flash-msg">\${message}</div>
</div>

<hr />

<aurelia-slickgrid
  grid-id="grid19"
  columns.bind="columnDefinitions"
  options.bind="gridOptions"
  dataset.bind="dataset"
  extensions.bind="extensions"
  instances.bind="aureliaGrid"
>
</aurelia-slickgrid>
`,Fp=[],Ap={};let sn;function F$(t){sn||(sn=E.define({name:Gp,template:yr,dependencies:Fp,bindables:Ap})),t.register(sn)}const A$=Object.freeze(Object.defineProperty({__proto__:null,bindables:Ap,default:yr,dependencies:Fp,name:Gp,register:F$,template:yr},Symbol.toStringTag,{value:"Module"}));var R$=Object.create,_l=Object.defineProperty,L$=Object.getOwnPropertyDescriptor,z$=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),gi=t=>{throw TypeError(t)},Rp=(t,e,i)=>e in t?_l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,yd=(t,e)=>_l(t,"name",{value:e,configurable:!0}),N$=t=>[,,,R$(null)],Lp=["class","method","getter","setter","accessor","field","value","get","set"],Vt=t=>t!==void 0&&typeof t!="function"?gi("Function expected"):t,W$=(t,e,i,n,a)=>({kind:Lp[t],name:e,metadata:n,addInitializer:r=>i._?gi("Already initialized"):a.push(Vt(r||null))}),B$=(t,e)=>Rp(e,z$("metadata"),t[3]),Ht=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)e&1?r[a].call(i):n=r[a].call(i,n);return n},yl=(t,e,i,n,a,r)=>{var l,d,u,s,m,o=e&7,g=!!(e&8),c=!!(e&16),p=o>3?t.length+1:o?g?1:2:0,_=Lp[o+5],w=o>3&&(t[p-1]=[]),x=t[p]||(t[p]=[]),b=o&&(!c&&!g&&(a=a.prototype),o<5&&(o>3||!c)&&L$(o<4?a:{get[i](){return Sd(this,r)},set[i](h){return Cd(this,r,h)}},i));o?c&&o<4&&yd(r,(o>2?"set ":o>1?"get ":"")+i):yd(a,i);for(var y=n.length-1;y>=0;y--)s=W$(o,i,u={},t[3],x),o&&(s.static=g,s.private=c,m=s.access={has:c?h=>j$(a,h):h=>i in h},o^3&&(m.get=c?h=>(o^1?Sd:V$)(h,a,o^4?r:b.get):h=>h[i]),o>2&&(m.set=c?(h,S)=>Cd(h,a,S,o^4?r:b.set):(h,S)=>h[i]=S)),d=(0,n[y])(o?o<4?c?r:b[_]:o>4?void 0:{get:b.get,set:b.set}:a,s),u._=1,o^4||d===void 0?Vt(d)&&(o>4?w.unshift(d):o?c?r=d:b[_]=d:a=d):typeof d!="object"||d===null?gi("Object expected"):(Vt(l=d.get)&&(b.get=l),Vt(l=d.set)&&(b.set=l),Vt(l=d.init)&&w.unshift(l));return o||B$(t,a),b&&_l(a,i,b),c?o^4?r:b:a},se=(t,e,i)=>Rp(t,typeof e!="symbol"?e+"":e,i),Sl=(t,e,i)=>e.has(t)||gi("Cannot "+i),j$=(t,e)=>Object(e)!==e?gi('Cannot use the "in" operator on this value'):t.has(e),Sd=(t,e,i)=>(Sl(t,e,"read from private field"),i?i.call(t):e.get(t)),Cd=(t,e,i,n)=>(Sl(t,e,"write to private field"),n?n.call(t,i):e.set(t,i),i),V$=(t,e,i)=>(Sl(t,e,"access private method"),i),zp,Np,Wp,Ie;const H$=250,U$=1e3;Wp=[T(A$)],Np=[D],zp=[D];class _t{constructor(){se(this,"_darkMode",!1),se(this,"detailViewRowCount",Ht(Ie,8,this,9)),Ht(Ie,11,this),se(this,"serverWaitDelay",Ht(Ie,12,this,H$)),Ht(Ie,15,this),se(this,"aureliaGrid"),se(this,"gridOptions"),se(this,"columnDefinitions",[]),se(this,"dataset",[]),se(this,"flashAlertType","info"),se(this,"hideSubTitle",!1),se(this,"message",""),this.defineGrid()}get rowDetailInstance(){return this.aureliaGrid?.extensionService.getExtensionInstanceByName("rowDetailView")}attached(){this.getData()}detaching(){document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light"}defineGrid(){this.columnDefinitions=[{id:"title",name:"Title",field:"title",sortable:!0,width:70,filterable:!0,editor:{model:C.text}},{id:"duration",name:"Duration (days)",field:"duration",formatter:f.decimal,params:{minDecimal:1,maxDecimal:2},sortable:!0,type:"number",minWidth:90,filterable:!0},{id:"percent2",name:"% Complete",field:"percentComplete2",editor:{model:C.slider},formatter:f.progressBar,type:"number",sortable:!0,minWidth:100,filterable:!0,filter:{model:v.slider,operator:">"}},{id:"start",name:"Start",field:"start",formatter:f.dateIso,sortable:!0,type:"date",minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:v.compoundDate}},{id:"finish",name:"Finish",field:"finish",formatter:f.dateIso,sortable:!0,type:"date",minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:v.compoundDate}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",minWidth:100,formatter:f.checkmarkMaterial,type:"boolean",filterable:!0,sortable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:v.singleSelect}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:!0,enableRowDetailView:!0,rowTopOffsetRenderType:"top",darkMode:this._darkMode,datasetIdPropertyName:"rowId",externalResources:[oo],rowDetailView:{process:e=>this.simulateServerAsyncCall(e),loadOnce:!0,singleRowExpand:!1,useRowClick:!0,panelRows:this.detailViewRowCount,preloadViewModel:mt,viewModel:fe,parentRef:this},selectionOptions:{selectActiveRow:!0}}}getData(){const e=[];for(let i=0;i<U$;i++){const n=2e3+Math.floor(Math.random()*10),a=Math.floor(Math.random()*11),r=Math.floor(Math.random()*29),l=Math.round(Math.random()*100);e[i]={rowId:i,title:"Task "+i,duration:Math.ceil(Math.random()*100),percentComplete:l,percentComplete2:l,percentCompleteNumber:l,start:new Date(n,a,r),finish:new Date(n,a+1,r),effortDriven:i%5===0}}this.dataset=e}changeDetailViewRowCount(){const e=this.rowDetailInstance.getOptions();e&&e.panelRows&&(e.panelRows=this.detailViewRowCount,this.rowDetailInstance.setOptions(e))}changeEditableGrid(){return this.rowDetailInstance.collapseAll(),this.rowDetailInstance.addonOptions.useRowClick=!1,this.gridOptions.autoCommitEdit=!this.gridOptions.autoCommitEdit,this.aureliaGrid?.slickGrid.setOptions({editable:!0,autoEdit:!0,enableCellNavigation:!0}),!0}closeAllRowDetail(){this.rowDetailInstance.collapseAll()}showFlashMessage(e,i="info"){this.message=e,this.flashAlertType=i}simulateServerAsyncCall(e){const i=["John Doe","Jane Doe","Chuck Norris","Bumblebee","Jackie Chan","Elvis Presley","Bob Marley","Mohammed Ali","Bruce Lee","Rocky Balboa"];return new Promise(n=>{setTimeout(()=>{const a=e;a.assignee=i[this.randomNumber(0,9)]||"",a.reporter=i[this.randomNumber(0,9)]||"",n(a)},this.serverWaitDelay)})}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.aureliaGrid.slickGrid?.setOptions({darkMode:this._darkMode}),this.closeAllRowDetail()}toggleBodyBackground(){this._darkMode?(document.querySelector(".panel-wm-content").classList.add("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="dark"):(document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light")}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}randomNumber(e,i){return Math.floor(Math.random()*(i-e+1)+e)}}Ie=N$();yl(Ie,5,"detailViewRowCount",Np,_t);yl(Ie,5,"serverWaitDelay",zp,_t);_t=yl(Ie,0,"Example19",Wp,_t);Ht(Ie,1,_t);const q$=Object.freeze(Object.defineProperty({__proto__:null,get Example19(){return _t}},Symbol.toStringTag,{value:"Module"})),Bp="example20",Sr=`<h2>
  Example 20: Pinned (frozen) Columns/Rows
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example20.ts"
    >
      <span class="mdi mdi-link-variant"></span> code
    </a>
  </span>
  <button class="ms-2 btn btn-outline-secondary btn-sm btn-icon" type="button" data-test="toggle-subtitle" click.trigger="toggleSubTitle()">
    <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
  </button>
</h2>

<div class="subtitle">
  This example demonstrates the use of Pinned (aka frozen) Columns and/or Rows (<a
    href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/frozen-columns-rows"
    target="_blank"
    >Wiki docs</a
  >)
  <ul>
    <li>Option to pin any number of columns (left only) or rows</li>
    <li>Option to pin the rows at the bottom instead of the top (default)</li>
    <li>You can also dynamically any of these options, through SlickGrid "setOptions()"</li>
    <li>Possibility to change the styling of the line border between pinned columns/rows</li>
  </ul>
</div>

<br />

<div class="row">
  <div class="col-sm-12">
    <span>
      <label for="">Pinned Rows: </label>
      <input type="number" value.bind="frozenRowCount" />
      <button class="btn btn-outline-secondary btn-xs btn-icon" click.trigger="changeFrozenRowCount()">Set</button>
    </span>
    <span style="margin-left: 10px">
      <label for="">Pinned Columns: </label>
      <input type="number" value.bind="frozenColumnCount" />
      <button class="btn btn-outline-secondary btn-xs btn-icon" click.trigger="changeFrozenColumnCount()">Set</button>
    </span>
  </div>
</div>

<div class="row mt-2">
  <div class="col-sm-12">
    <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="setFrozenColumns(-1)" data-test="remove-frozen-column-button">
      <i class="mdi mdi-close"></i> Remove Frozen Columns
    </button>
    <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="setFrozenColumns(2)" data-test="set-3frozen-columns">
      <i class="mdi mdi-pin-outline"></i> Set 3 Frozen Columns
    </button>
    <span style="margin-left: 15px">
      <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="toggleFrozenBottomRows()">
        <i class="mdi mdi-flip-vertical"></i> Toggle Pinned Rows
      </button>
      <span style="font-weight: bold">: \${ isFrozenBottom ? 'Bottom' : 'Top' }</span>
    </span>
  </div>
</div>

<div class="col-sm-12">
  <hr />
</div>

<aurelia-slickgrid
  grid-id="grid20"
  columns.bind="columnDefinitions"
  options.bind="gridOptions"
  dataset.bind="dataset"
  on-validation-error.trigger="onCellValidationError($event.detail.eventData, $event.detail.args)"
  on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
>
</aurelia-slickgrid>
`,jp=[],Vp={};let dn;function Y$(t){dn||(dn=E.define({name:Bp,template:Sr,dependencies:jp,bindables:Vp})),t.register(dn)}const K$=Object.freeze(Object.defineProperty({__proto__:null,bindables:Vp,default:Sr,dependencies:jp,name:Bp,register:Y$,template:Sr},Symbol.toStringTag,{value:"Module"}));var Q$=Object.create,Cl=Object.defineProperty,Z$=Object.getOwnPropertyDescriptor,J$=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Hp=t=>{throw TypeError(t)},Up=(t,e,i)=>e in t?Cl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,X$=(t,e)=>Cl(t,"name",{value:e,configurable:!0}),ek=t=>[,,,Q$(null)],tk=["class","method","getter","setter","accessor","field","value","get","set"],qp=t=>t!==void 0&&typeof t!="function"?Hp("Function expected"):t,ik=(t,e,i,n,a)=>({kind:tk[t],name:e,metadata:n,addInitializer:r=>i._?Hp("Already initialized"):a.push(qp(r||null))}),ak=(t,e)=>Up(e,J$("metadata"),t[3]),nk=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},rk=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&Z$(a,i));X$(a,i);for(var p=n.length-1;p>=0;p--)u=ik(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,qp(l)&&(a=l);return ak(t,a),c&&Cl(a,i,c),m?s^4?r:c:a},de=(t,e,i)=>Up(t,typeof e!="symbol"?e+"":e,i),Yp,wl;Yp=[T(K$)];class Xi{constructor(){de(this,"aureliaGrid"),de(this,"columnDefinitions",[]),de(this,"gridObj"),de(this,"gridOptions"),de(this,"frozenColumnCount",2),de(this,"frozenRowCount",3),de(this,"hideSubTitle",!1),de(this,"isFrozenBottom",!1),de(this,"dataset",[]),de(this,"slickEventHandler"),this.defineGrid(),this.slickEventHandler=new Vd}aureliaGridReady(e){this.aureliaGrid=e,this.gridObj=e&&e.slickGrid,this.slickEventHandler.subscribe(this.gridObj.onMouseEnter,i=>this.colorizeHoveringRow(i,!0)),this.slickEventHandler.subscribe(this.gridObj.onMouseLeave,i=>this.colorizeHoveringRow(i,!1))}colorizeHoveringRow(e,i){const n=this.gridObj.getCellFromEvent(e),a=i?[n?.row??0]:[];this.gridObj.setSelectedRows(a),e.preventDefault()}attached(){this.getData()}detaching(){this.slickEventHandler.unsubscribeAll()}defineGrid(){this.columnDefinitions=[{id:"sel",name:"#",field:"id",minWidth:40,width:40,maxWidth:40,cannotTriggerInsert:!0,resizable:!1,unselectable:!0},{id:"title",name:"Title",field:"title",minWidth:100,width:120,filterable:!0,sortable:!0},{id:"percentComplete",name:"% Complete",field:"percentComplete",resizable:!1,minWidth:130,width:140,formatter:f.percentCompleteBar,type:"number",filterable:!0,filter:{model:v.slider,operator:">="},sortable:!0},{id:"start",name:"Start",field:"start",minWidth:100,width:120,filterable:!0,sortable:!0,formatter:f.dateIso},{id:"finish",name:"Finish",field:"finish",minWidth:100,width:120,filterable:!0,sortable:!0,formatter:f.dateIso},{id:"cost",name:"Cost | Duration",field:"cost",formatter:this.costDurationFormatter.bind(this),minWidth:150,width:170,sortable:!0,filter:{model:v.compoundSlider},editor:{model:C.dualInput,params:{leftInput:{field:"cost",type:"float",decimal:2,minValue:0,maxValue:5e4,placeholder:"< 50K",errorMessage:"Cost must be positive and below $50K."},rightInput:{field:"duration",type:"float",minValue:0,maxValue:100,title:"make sure Duration is withing its range of 0 to 100",errorMessage:"Duration must be between 0 and 100."}}}},{id:"effortDriven",name:"Effort Driven",field:"effortDriven",minWidth:100,width:120,formatter:f.checkmarkMaterial,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:v.singleSelect},sortable:!0},{id:"title1",name:"Title 1",field:"title1",minWidth:100,width:120,filterable:!0,sortable:!0},{id:"title2",name:"Title 2",field:"title2",minWidth:100,width:120,filterable:!0,sortable:!0},{id:"title3",name:"Title 3",field:"title3",minWidth:100,width:120,filterable:!0,sortable:!0},{id:"title4",name:"Title 4",field:"title4",minWidth:100,width:120,filterable:!0,sortable:!0}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},gridWidth:920,enableCellNavigation:!0,editable:!0,autoEdit:!0,enableExcelCopyBuffer:!0,frozenColumn:this.frozenColumnCount,frozenRow:this.frozenRowCount,gridMenu:{hideClearFrozenColumnsCommand:!1},headerMenu:{hideFreezeColumnsCommand:!1}}}getData(){const e=[];for(let i=0;i<500;i++)e[i]={id:i,title:"Task "+i,cost:i%33===0?null:Math.random()*1e4,duration:i%8?Math.round(Math.random()*100)+"":null,percentComplete:Math.round(Math.random()*100),start:new Date(2009,0,1),finish:new Date(2009,4,5),effortDriven:i%5===0,title1:`Some Text ${Math.round(Math.random()*25)}`,title2:`Some Text ${Math.round(Math.random()*25)}`,title3:`Some Text ${Math.round(Math.random()*25)}`,title4:`Some Text ${Math.round(Math.random()*25)}`};this.dataset=e}changeFrozenColumnCount(){this.gridObj&&this.gridObj.setOptions&&this.gridObj.setOptions({frozenColumn:this.frozenColumnCount})}changeFrozenRowCount(){this.gridObj&&this.gridObj.setOptions&&this.gridObj.setOptions({frozenRow:this.frozenRowCount})}costDurationFormatter(e,i,n,a,r){const l=this.isNullUndefinedOrEmpty(r.cost)?"n/a":lo(r.cost,0,2,!1,"$","",".",",");let d="n/a";return!this.isNullUndefinedOrEmpty(r.duration)&&r.duration>=0&&(d=`${r.duration} ${r.duration>1?"days":"day"}`),`<b>${l}</b> | ${d}`}isNullUndefinedOrEmpty(e){return e===""||e===null||e===void 0}onCellValidationError(e,i){alert(i.validationResults.msg)}setFrozenColumns(e){this.gridObj.setOptions({frozenColumn:e}),this.gridOptions=this.gridObj.getOptions()}toggleFrozenBottomRows(){this.gridObj&&this.gridObj.setOptions&&(this.gridObj.setOptions({frozenBottom:!this.isFrozenBottom}),this.isFrozenBottom=!this.isFrozenBottom)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}wl=ek();Xi=rk(wl,0,"Example20",Yp,Xi);nk(wl,1,Xi);const ok=Object.freeze(Object.defineProperty({__proto__:null,get Example20(){return Xi}},Symbol.toStringTag,{value:"Module"})),Kp="example21",Cr=`<h2>
  Example 21: Grid AutoHeight
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example21.ts"
    >
      <span class="mdi mdi-link-variant"></span> code
    </a>
  </span>
  <button class="ms-2 btn btn-outline-secondary btn-sm btn-icon" type="button" data-test="toggle-subtitle" click.trigger="toggleSubTitle()">
    <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
  </button>
</h2>
<div class="subtitle">
  The SlickGrid option "autoHeight" can be used if you wish to keep the full height of the grid without any scrolling
  <ul>
    <li>You define a fixed grid width via "gridWidth" in the View</li>
    <li>You can still use the "autoResize" for the width to be resized automatically (the height will never change in this case)</li>
    <li>
      This dataset has 25 rows, if you scroll down the page you can see the entire set is shown without any grid scrolling (though you might
      have browser scrolling)
    </li>
  </ul>
</div>

<div class="row row-cols-lg-auto g-1 align-items-center">
  <div class="col">
    <label for="columnSelect">Single Search:</label>
  </div>
  <div class="col">
    <select class="form-select" data-test="search-column-list" name="selectedColumn" value.bind="selectedColumn" id="columnSelect">
      <option repeat.for="column of columnDefinitions" model.bind="column">\${column.name}</option>
    </select>
  </div>
  <div class="col">
    <select value.bind="selectedOperator" class="form-select" data-test="search-operator-list">
      <option repeat.for="operator of operatorList" model.bind="operator">\${operator}</option>
    </select>
  </div>

  <div class="col">
    <div class="input-group">
      <input type="text" class="form-control" placeholder="search value" data-test="search-value-input" value.bind="searchValue" />
      <button
        class="btn btn-outline-secondary d-flex align-items-center pl-2 pr-2"
        data-test="clear-search-value"
        click.trigger="clearGridSearchInput()"
      >
        <span class="mdi mdi-close"></span>
      </button>
    </div>
  </div>
</div>

<hr />

<aurelia-slickgrid
  grid-id="grid21"
  columns.bind="columnDefinitions"
  options.bind="gridOptions"
  dataset.bind="dataset"
  instances.bind="aureliaGrid"
>
</aurelia-slickgrid>
`,Qp=[],Zp={};let cn;function lk(t){cn||(cn=E.define({name:Kp,template:Cr,dependencies:Qp,bindables:Zp})),t.register(cn)}const sk=Object.freeze(Object.defineProperty({__proto__:null,bindables:Zp,default:Cr,dependencies:Qp,name:Kp,register:lk,template:Cr},Symbol.toStringTag,{value:"Module"}));var dk=Object.create,xl=Object.defineProperty,ck=Object.getOwnPropertyDescriptor,uk=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),bi=t=>{throw TypeError(t)},Jp=(t,e,i)=>e in t?xl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,wd=(t,e)=>xl(t,"name",{value:e,configurable:!0}),mk=t=>[,,,dk(null)],Xp=["class","method","getter","setter","accessor","field","value","get","set"],Ut=t=>t!==void 0&&typeof t!="function"?bi("Function expected"):t,pk=(t,e,i,n,a)=>({kind:Xp[t],name:e,metadata:n,addInitializer:r=>i._?bi("Already initialized"):a.push(Ut(r||null))}),hk=(t,e)=>Jp(e,uk("metadata"),t[3]),Xe=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)e&1?r[a].call(i):n=r[a].call(i,n);return n},Oa=(t,e,i,n,a,r)=>{var l,d,u,s,m,o=e&7,g=!!(e&8),c=!!(e&16),p=o>3?t.length+1:o?g?1:2:0,_=Xp[o+5],w=o>3&&(t[p-1]=[]),x=t[p]||(t[p]=[]),b=o&&(!c&&!g&&(a=a.prototype),o<5&&(o>3||!c)&&ck(o<4?a:{get[i](){return xd(this,r)},set[i](h){return Td(this,r,h)}},i));o?c&&o<4&&wd(r,(o>2?"set ":o>1?"get ":"")+i):wd(a,i);for(var y=n.length-1;y>=0;y--)s=pk(o,i,u={},t[3],x),o&&(s.static=g,s.private=c,m=s.access={has:c?h=>gk(a,h):h=>i in h},o^3&&(m.get=c?h=>(o^1?xd:bk)(h,a,o^4?r:b.get):h=>h[i]),o>2&&(m.set=c?(h,S)=>Td(h,a,S,o^4?r:b.set):(h,S)=>h[i]=S)),d=(0,n[y])(o?o<4?c?r:b[_]:o>4?void 0:{get:b.get,set:b.set}:a,s),u._=1,o^4||d===void 0?Ut(d)&&(o>4?w.unshift(d):o?c?r=d:b[_]=d:a=d):typeof d!="object"||d===null?bi("Object expected"):(Ut(l=d.get)&&(b.get=l),Ut(l=d.set)&&(b.set=l),Ut(l=d.init)&&w.unshift(l));return o||hk(t,a),b&&xl(a,i,b),c?o^4?r:b:a},Ee=(t,e,i)=>Jp(t,typeof e!="symbol"?e+"":e,i),Tl=(t,e,i)=>e.has(t)||bi("Cannot "+i),gk=(t,e)=>Object(e)!==e?bi('Cannot use the "in" operator on this value'):t.has(e),xd=(t,e,i)=>(Tl(t,e,"read from private field"),i?i.call(t):e.get(t)),Td=(t,e,i,n)=>(Tl(t,e,"write to private field"),n?n.call(t,i):e.set(t,i),i),bk=(t,e,i)=>(Tl(t,e,"access private method"),i),eh,th,ih,ah,J;ah=[T(sk)],ih=[D()],th=[D()],eh=[D()];class tt{constructor(){Ee(this,"selectedColumn",Xe(J,8,this)),Xe(J,11,this),Ee(this,"selectedOperator",Xe(J,12,this)),Xe(J,15,this),Ee(this,"searchValue",Xe(J,16,this,"")),Xe(J,19,this),Ee(this,"aureliaGrid"),Ee(this,"columnDefinitions",[]),Ee(this,"gridOptions"),Ee(this,"dataset",[]),Ee(this,"hideSubTitle",!1),Ee(this,"operatorList",["=","<","<=",">",">=","<>","StartsWith","EndsWith"]),this.defineGrid()}attached(){this.getData()}defineGrid(){this.columnDefinitions=[{id:"title",name:"Title",field:"title",width:100,sortable:!0},{id:"duration",name:"Duration (days)",field:"duration",width:100,sortable:!0,type:"number"},{id:"complete",name:"% Complete",field:"percentComplete",width:100,sortable:!0,formatter:f.percentCompleteBar,type:"number"},{id:"start",name:"Start",field:"start",width:100,sortable:!0,formatter:f.dateIso,type:"date"},{id:"finish",name:"Finish",field:"finish",width:100,sortable:!0,formatter:f.dateIso,type:"date"},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",width:100,sortable:!0,formatter:f.checkmarkMaterial,type:"number"}],this.gridOptions={autoHeight:!0,autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:!0,showHeaderRow:!1,alwaysShowVerticalScroll:!1,enableColumnPicker:!0,enableCellNavigation:!0,enableSelection:!0}}getData(){const e=[];for(let i=0;i<25;i++){const n=2e3+Math.floor(Math.random()*10),a=Math.floor(Math.random()*11),r=Math.floor(Math.random()*29),l=Math.round(Math.random()*100);e[i]={id:i,title:"Task "+i,duration:Math.round(Math.random()*100)+"",percentComplete:l,percentCompleteNumber:l,start:new Date(n,a,r),finish:new Date(n,a+1,r),effortDriven:i%5===0}}this.dataset=e}clearGridSearchInput(){this.searchValue="",this.updateFilter()}selectedOperatorChanged(){this.updateFilter()}selectedColumnChanged(){this.updateFilter()}searchValueChanged(){this.updateFilter()}updateFilter(){this.aureliaGrid?.filterService.updateSingleFilter({columnId:`${this.selectedColumn.id||""}`,operator:this.selectedOperator,searchTerms:[this.searchValue||""]})}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}J=mk();Oa(J,5,"selectedColumn",ih,tt);Oa(J,5,"selectedOperator",th,tt);Oa(J,5,"searchValue",eh,tt);tt=Oa(J,0,"Example21",ah,tt);Xe(J,1,tt);const fk=Object.freeze(Object.defineProperty({__proto__:null,get Example21(){return tt}},Symbol.toStringTag,{value:"Module"})),nh="example22",wr=`<h2>
  Example 22: Grids in Bootstrap Tabs
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example22.ts"
    >
      <span class="mdi mdi-link-variant"></span> code
    </a>
  </span>
  <button class="ms-2 btn btn-outline-secondary btn-sm btn-icon" type="button" data-test="toggle-subtitle" click.trigger="toggleSubTitle()">
    <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
  </button>
</h2>

<div class="subtitle">
  This example demonstrate the creation of multiple grids in Bootstrap Tabs
  <ol>
    <li>Regular mocked data with JavaScript</li>
    <li>Load dataset through Fetch-Client. Also note we need to call a "resizeGrid()" after focusing on this tab</li>
  </ol>
</div>

<div>
  <nav>
    <div class="nav nav-tabs" id="nav-tab" role="tablist">
      <button
        class="nav-link active"
        id="javascript-tab"
        data-bs-toggle="tab"
        data-bs-target="#javascript"
        type="button"
        role="tab"
        aria-controls="javascript"
        aria-selected="true"
      >
        JavaScript
      </button>
      <button
        class="nav-link"
        id="fetch-tab"
        data-bs-toggle="tab"
        data-bs-target="#fetch"
        type="button"
        role="tab"
        aria-controls="fetch"
        aria-selected="false"
        click.trigger="resizeGrid2()"
      >
        Fetch-Client
      </button>
    </div>
  </nav>
  <div class="tab-content" id="nav-tabContent">
    <div class="tab-pane fade show active" id="javascript" role="tabpanel" aria-labelledby="javascript-tab" tabindex="0">
      <h4>Grid 1 - Load Local Data</h4>
      <aurelia-slickgrid grid-id="grid1" columns.bind="columnDefinitions1" options.bind="gridOptions1" dataset.bind="dataset1">
      </aurelia-slickgrid>
    </div>
    <div class="tab-pane fade" id="fetch" role="tabpanel" aria-labelledby="fetch-tab" tabindex="0">
      <h4>Grid 2 - Load a JSON dataset through Fetch-Client</h4>
      <aurelia-slickgrid
        grid-id="grid2"
        columns.bind="columnDefinitions2"
        options.bind="gridOptions2"
        dataset.bind="dataset2"
        on-aurelia-grid-created.trigger="aureliaGrid2Ready($event.detail)"
      >
      </aurelia-slickgrid>
    </div>
  </div>
</div>
`,rh=[],oh={};let un;function vk(t){un||(un=E.define({name:nh,template:wr,dependencies:rh,bindables:oh})),t.register(un)}const _k=Object.freeze(Object.defineProperty({__proto__:null,bindables:oh,default:wr,dependencies:rh,name:nh,register:vk,template:wr},Symbol.toStringTag,{value:"Module"}));var yk=Object.create,El=Object.defineProperty,Sk=Object.getOwnPropertyDescriptor,Ck=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),lh=t=>{throw TypeError(t)},sh=(t,e,i)=>e in t?El(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,wk=(t,e)=>El(t,"name",{value:e,configurable:!0}),xk=t=>[,,,yk(null)],Tk=["class","method","getter","setter","accessor","field","value","get","set"],dh=t=>t!==void 0&&typeof t!="function"?lh("Function expected"):t,Ek=(t,e,i,n,a)=>({kind:Tk[t],name:e,metadata:n,addInitializer:r=>i._?lh("Already initialized"):a.push(dh(r||null))}),$k=(t,e)=>sh(e,Ck("metadata"),t[3]),kk=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},Dk=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&Sk(a,i));wk(a,i);for(var p=n.length-1;p>=0;p--)u=Ek(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,dh(l)&&(a=l);return $k(t,a),c&&El(a,i,c),m?s^4?r:c:a},We=(t,e,i)=>sh(t,typeof e!="symbol"?e+"":e,i),ch,$l;ch=[T(_k)];class ea{constructor(e=O(_e(ye))){this.http=e,We(this,"aureliaGrid2"),We(this,"gridOptions1"),We(this,"gridOptions2"),We(this,"columnDefinitions1",[]),We(this,"columnDefinitions2",[]),We(this,"dataset1",[]),We(this,"dataset2",[]),We(this,"hideSubTitle",!1),this.defineGrid1(),this.defineGrid2()}aureliaGrid2Ready(e){this.aureliaGrid2=e}async attached(){this.dataset1=this.mockData();const e=await fetch(ft);this.dataset2=await e.json()}defineGrid1(){this.columnDefinitions1=[{id:"title",name:"Title",field:"title",sortable:!0,minWidth:100},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,minWidth:100},{id:"%",name:"% Complete",field:"percentComplete",sortable:!0,minWidth:100},{id:"start",name:"Start",field:"start",minWidth:100},{id:"finish",name:"Finish",field:"finish",minWidth:100},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",sortable:!0,minWidth:100}],this.gridOptions1={enableAutoResize:!0,autoResize:{container:"#demo-container",rightPadding:10},enableSorting:!0}}defineGrid2(){this.columnDefinitions2=[{id:"name",name:"Name",field:"name",filterable:!0,sortable:!0},{id:"gender",name:"Gender",field:"gender",filterable:!0,sortable:!0,filter:{model:v.singleSelect,collection:[{value:"",label:""},{value:"male",label:"male"},{value:"female",label:"female"}]}},{id:"company",name:"Company",field:"company",filterable:!0,sortable:!0}],this.gridOptions2={enableAutoResize:!0,autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:!0,enableSorting:!0}}mockData(){const e=[];for(let i=0;i<1e3;i++){const n=2e3+Math.floor(Math.random()*10),a=Math.floor(Math.random()*11),r=Math.floor(Math.random()*29),l=Math.round(Math.random()*100);e[i]={id:i,title:"Task "+i,duration:Math.round(Math.random()*100)+"",percentComplete:l,start:`${a}/${r}/${n}`,finish:`${a}/${r}/${n}`,effortDriven:i%5===0}}return e}resizeGrid2(){this.aureliaGrid2.resizerService.resizeGrid(10)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid2.resizerService.resizeGrid(0)}}$l=xk();ea=Dk($l,0,"Example22",ch,ea);kk($l,1,ea);const Ok=Object.freeze(Object.defineProperty({__proto__:null,get Example22(){return ea}},Symbol.toStringTag,{value:"Module"})),uh="example23",xr=`<h2>
  Example 23: Filtering from Range of Search Values
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example23.ts"
    >
      <span class="mdi mdi-link-variant"></span> code
    </a>
  </span>
  <button class="ms-2 btn btn-outline-secondary btn-sm btn-icon" type="button" data-test="toggle-subtitle" click.trigger="toggleSubTitle()">
    <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
  </button>
</h2>

<div class="subtitle">
  This demo shows how to use Filters with Range of Search Values (<a
    href="https://ghiscoding.gitbook.io/aurelia-slickgrid/column-functionalities/filters/range-filters"
    target="_blank"
    >Wiki docs</a
  >)
  <br />
  <ul class="small">
    <li>All input filters support the following operators: (>, >=, <, <=, <>, !=, =, ==, *) and now also the (..) for an input range</li>
    <li>
      All filters (which support ranges) can be defined via the 2 dots (..) which represents a range, this also works for dates and slider
      in the "presets"
    </li>
    <ul>
      <li>For a numeric range defined in an input filter (must be of type text), you can use 2 dots (..) to represent a range</li>
      <li>example: typing "10..90" will filter values between 10 and 90 (but excluding the number 10 and 90)</li>
    </ul>
  </ul>
</div>

<br />

<span if.bind="metrics">
  <b>Metrics:</b>
  \${metrics.endTime | dateFormat: 'DD MMM, h:mm:ss a'} | \${metrics.itemCount} of \${metrics.totalItemCount} items
</span>

<div class="row row-cols-lg-auto g-1 align-items-center">
  <div class="col">
    <button
      class="btn btn-outline-secondary btn-sm btn-icon"
      data-test="clear-filters"
      click.trigger="aureliaGrid.filterService.clearFilters()"
    >
      Clear Filters
    </button>
  </div>
  <div class="col">
    <button
      class="btn btn-outline-secondary btn-sm btn-icon"
      data-test="clear-sorting"
      click.trigger="aureliaGrid.sortService.clearSorting()"
    >
      Clear Sorting
    </button>
  </div>
  <div class="col">
    <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="set-dynamic-filter" click.trigger="setFiltersDynamically()">
      Set Filters Dynamically
    </button>
  </div>
  <div class="col">
    <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="set-dynamic-sorting" click.trigger="setSortingDynamically()">
      Set Sorting Dynamically
    </button>
  </div>
  <div class="col">
    <label for="selectedFilter" style="margin-left: 10px">Predefined Filters</label>
  </div>
  <div class="col">
    <select
      name="selectedFilter"
      class="form-select"
      data-test="select-dynamic-filter"
      value.bind="selectedPredefinedFilter"
      change.trigger="predefinedFilterChanged(selectedPredefinedFilter)"
    >
      <option model.bind="filter.value" repeat.for="filter of filterList">\${filter.label}</option>
    </select>
  </div>
</div>

<div class="row mt-2">
  <div class="col">
    <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="language" click.trigger="switchLanguage()">
      <i class="mdi mdi-translate"></i>
      Switch Language
    </button>
    <b>Locale:</b> <span style="font-style: italic" data-test="selected-locale">\${selectedLanguage + '.json'}</span>
  </div>
</div>

<aurelia-slickgrid
  grid-id="grid23"
  columns.bind="columnDefinitions"
  options.bind="gridOptions"
  dataset.bind="dataset"
  instances.bind="aureliaGrid"
  on-grid-state-changed.trigger="gridStateChanged($event.detail)"
  on-row-count-changed.trigger="refreshMetrics($event.detail.eventData, $event.detail.args)"
>
</aurelia-slickgrid>
`,mh=[],ph={};let mn;function Mk(t){mn||(mn=E.define({name:uh,template:xr,dependencies:mh,bindables:ph})),t.register(mn)}const Pk=Object.freeze(Object.defineProperty({__proto__:null,bindables:ph,default:xr,dependencies:mh,name:uh,register:Mk,template:xr},Symbol.toStringTag,{value:"Module"}));var Ik=Object.create,kl=Object.defineProperty,Gk=Object.getOwnPropertyDescriptor,Fk=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),hh=t=>{throw TypeError(t)},gh=(t,e,i)=>e in t?kl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Ak=(t,e)=>kl(t,"name",{value:e,configurable:!0}),Rk=t=>[,,,Ik(null)],Lk=["class","method","getter","setter","accessor","field","value","get","set"],bh=t=>t!==void 0&&typeof t!="function"?hh("Function expected"):t,zk=(t,e,i,n,a)=>({kind:Lk[t],name:e,metadata:n,addInitializer:r=>i._?hh("Already initialized"):a.push(bh(r||null))}),Nk=(t,e)=>gh(e,Fk("metadata"),t[3]),Wk=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},Bk=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&Gk(a,i));Ak(a,i);for(var p=n.length-1;p>=0;p--)u=zk(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,bh(l)&&(a=l);return Nk(t,a),c&&kl(a,i,c),m?s^4?r:c:a},$e=(t,e,i)=>gh(t,typeof e!="symbol"?e+"":e,i),fh,Dl;const jk=1500;function Mt(t,e){return Math.floor(Math.random()*(e-t+1)+t)}const Vk=(t,e,i,n,a,r)=>r.getOptions().i18n?.tr("TASK_X",{x:i})??"";fh=[T(Pk)];class ta{constructor(e=O(Se)){this.i18n=e,$e(this,"aureliaGrid"),$e(this,"columnDefinitions",[]),$e(this,"gridOptions"),$e(this,"dataset",[]),$e(this,"hideSubTitle",!1),$e(this,"selectedLanguage"),$e(this,"metrics"),$e(this,"filterList",[{value:"",label:""},{value:"currentYearTasks",label:"Current Year Completed Tasks"},{value:"nextYearTasks",label:"Next Year Active Tasks"}]),$e(this,"selectedPredefinedFilter",""),this.defineGrid();const i="en";this.i18n.setLocale(i),this.selectedLanguage=i}attached(){this.dataset=this.mockData(jk)}detaching(){this.saveCurrentGridState()}defineGrid(){this.columnDefinitions=[{id:"title",name:"Title",field:"id",nameKey:"TITLE",minWidth:100,formatter:Vk,sortable:!0,filterable:!0,params:{useFormatterOuputToFilter:!0}},{id:"description",name:"Description",field:"description",filterable:!0,sortable:!0,minWidth:80,filter:{model:No,enableTrimWhiteSpace:!0}},{id:"percentComplete",name:"% Complete",field:"percentComplete",nameKey:"PERCENT_COMPLETE",minWidth:120,sortable:!0,customTooltip:{position:"center"},formatter:f.progressBar,type:"number",filterable:!0,filter:{model:v.sliderRange,maxValue:100,operator:"RangeInclusive",options:{hideSliderNumbers:!1,min:0,step:5}}},{id:"start",name:"Start",field:"start",nameKey:"START",formatter:f.dateIso,sortable:!0,minWidth:75,width:100,exportWithFormatter:!0,type:"date",filterable:!0,filter:{model:v.compoundDate}},{id:"finish",name:"Finish",field:"finish",nameKey:"FINISH",formatter:f.dateIso,sortable:!0,minWidth:75,width:120,exportWithFormatter:!0,type:"date",filterable:!0,filter:{model:v.dateRange}},{id:"duration",field:"duration",nameKey:"DURATION",maxWidth:90,type:"number",sortable:!0,filterable:!0,filter:{model:v.input,operator:"RangeExclusive"}},{id:"completed",name:"Completed",field:"completed",nameKey:"COMPLETED",minWidth:85,maxWidth:90,formatter:f.checkmarkMaterial,exportWithFormatter:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:v.singleSelect,options:{autoAdjustDropHeight:!0}}}];const e=be(Ft(new Date,-2),"YYYY-MM-DD"),i=be(Ft(new Date,25),"YYYY-MM-DD");this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableExcelCopyBuffer:!0,enableFiltering:!0,enableTranslate:!0,i18n:this.i18n,presets:{filters:[{columnId:"duration",searchTerms:["4..88"]},{columnId:"percentComplete",operator:"RangeInclusive",searchTerms:[5,80]},{columnId:"finish",operator:"RangeInclusive",searchTerms:[e,i]}],sorters:[{columnId:"percentComplete",direction:"DESC"},{columnId:"duration",direction:"ASC"}]},externalResources:[new oi,new G]}}mockData(e,i=0){const n=[];for(let a=i;a<i+e;a++){const r=Mt(0,365),l=Mt(new Date().getFullYear(),new Date().getFullYear()+1),d=Mt(0,12),u=Mt(10,28),s=Mt(0,100);n.push({id:a,title:"Task "+a,description:a%5?"desc "+a:null,duration:r,percentComplete:s,percentCompleteNumber:s,start:a%4?null:new Date(l,d,u),finish:new Date(l,d,u),completed:s===100})}return n}clearFilters(){this.selectedPredefinedFilter="",this.aureliaGrid.filterService.clearFilters()}gridStateChanged(e){console.log("Client sample, Grid State changed:: ",e)}saveCurrentGridState(){console.log("Client sample, current Grid State:: ",this.aureliaGrid.gridStateService.getCurrentGridState())}refreshMetrics(e,i){i?.current>=0&&setTimeout(()=>{this.metrics={startTime:new Date,itemCount:i?.current||0,totalItemCount:this.dataset.length||0}})}setFiltersDynamically(){const e=be(Ft(new Date,-5),"YYYY-MM-DD"),i=be(Ft(new Date,25),"YYYY-MM-DD");this.aureliaGrid.filterService.updateFilters([{columnId:"duration",searchTerms:["14..78"],operator:"RangeInclusive"},{columnId:"percentComplete",operator:"RangeExclusive",searchTerms:[15,85]},{columnId:"finish",operator:"RangeInclusive",searchTerms:[e,i]}])}setSortingDynamically(){this.aureliaGrid.sortService.updateSorting([{columnId:"finish",direction:"DESC"},{columnId:"percentComplete",direction:"ASC"}])}async switchLanguage(){const e=this.selectedLanguage==="en"?"fr":"en";await this.i18n.setLocale(e),this.selectedLanguage=e}predefinedFilterChanged(e){let i=[];const n=new Date().getFullYear();switch(e){case"currentYearTasks":i=[{columnId:"finish",operator:"RangeInclusive",searchTerms:[`${n}-01-01`,`${n}-12-31`]},{columnId:"completed",operator:"=",searchTerms:[!0]}];break;case"nextYearTasks":i=[{columnId:"start",operator:">=",searchTerms:[`${n+1}-01-01`]}];break}this.aureliaGrid.filterService.updateFilters(i)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}Dl=Rk();ta=Bk(Dl,0,"Example23",fh,ta);Wk(Dl,1,ta);const Hk=Object.freeze(Object.defineProperty({__proto__:null,get Example23(){return ta}},Symbol.toStringTag,{value:"Module"})),vh="example24",Tr=`<h2>
  Example 24: Cell Menu & Context Menu Plugins
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example24.ts"
    >
      <span class="mdi mdi-link-variant"></span> code
    </a>
  </span>
  <button class="ms-2 btn btn-outline-secondary btn-sm btn-icon" type="button" data-test="toggle-subtitle" click.trigger="toggleSubTitle()">
    <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
  </button>
  <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="toggleDarkMode()" data-test="toggle-dark-mode">
    <i class="mdi mdi-theme-light-dark"></i>
    <span>Toggle Dark Mode</span>
  </button>
</h2>

<div class="subtitle">
  Add Cell Menu and Context Menu
  <ul>
    <li>This example demonstrates 2 SlickGrid plugins</li>
    <ol>
      <li>
        Using the <b>Slick.Plugins.CellMenu</b> plugin, often used for an Action Menu(s), 1 or more per grid (<a
          href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/cell-menu"
          target="_blank"
          >Wiki docs</a
        >).
      </li>
      <li>
        Using the <b>Slick.Plugins.ContextMenu</b> plugin, shown after a mouse right+click, only 1 per grid. (<a
          href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/context-menu"
          target="_blank"
          >Wiki docs</a
        >).
      </li>
    </ol>
    <li>It will also "autoAdjustDrop" (bottom/top) and "autoAlignSide" (left/right) by default but could be turned off</li>
    <li>
      Both plugins have 2 sections, 1st section can have an array of Options (to change value of a field) and 2nd section an array of
      Commands (execute a command)
    </li>
    <li>There are 2 ways to execute a Command/Option</li>
    <ol>
      <li>via onCommand/onOptionSelected (use a switch/case to parse command/option and do something with it)</li>
      <li>via action callback (that can be defined on each command/option)</li>
    </ol>
    <li>Use override callback functions to change the properties of show/hide, enable/disable the menu or certain item(s) from the list</li>
    <ol>
      <li>These callbacks are: "menuUsabilityOverride", "itemVisibilityOverride", "itemUsabilityOverride"</li>
      <li>... e.g. in the demo, the "Action" Cell Menu is only available when Priority is set to "High" via "menuUsabilityOverride"</li>
      <li>... e.g. in the demo, the Context Menu is only available on the first 20 Tasks via "menuUsabilityOverride"</li>
    </ol>
  </ul>
</div>

<div class="row">
  <span class="context-menu">
    <strong>Context Menu:</strong>
    <button
      class="btn btn-outline-secondary btn-xs btn-icon"
      click.trigger="showContextCommandsAndOptions(false)"
      data-test="context-menu-priority-only-button"
    >
      Show Priority Options Only
    </button>
    <button
      class="btn btn-outline-secondary btn-xs btn-icon"
      click.trigger="showContextCommandsAndOptions(true)"
      data-test="context-menu-commands-and-priority-button"
    >
      Show Commands & Priority Options
    </button>
  </span>

  <span class="cell-menu">
    <strong>Cell Menu:</strong>
    <button
      class="btn btn-outline-secondary btn-xs btn-icon"
      click.trigger="showCellMenuCommandsAndOptions(false)"
      data-test="cell-menu-commands-and-options-false-button"
    >
      Show Action Commands Only
    </button>
    <button
      class="btn btn-outline-secondary btn-xs btn-icon"
      click.trigger="showCellMenuCommandsAndOptions(true)"
      data-test="cell-menu-commands-and-options-true-button"
    >
      Show Actions Commands & Completed Options
    </button>
  </span>
</div>

<div class="row locale">
  <div class="col-12">
    <button class="btn btn-outline-secondary btn-xs btn-icon" click.trigger="switchLanguage()" data-test="language-button">
      <i class="mdi mdi-translate"></i>
      Switch Language
    </button>
    <label>Locale:</label>
    <span style="font-style: italic" data-test="selected-locale"> \${selectedLanguage + '.json'} </span>
  </div>
</div>

<aurelia-slickgrid
  grid-id="grid24"
  columns.bind="columnDefinitions"
  options.bind="gridOptions"
  dataset.bind="dataset"
  instances.bind="aureliaGrid"
>
</aurelia-slickgrid>
`,_h=[],yh={};let pn;function Uk(t){pn||(pn=E.define({name:vh,template:Tr,dependencies:_h,bindables:yh})),t.register(pn)}const qk=Object.freeze(Object.defineProperty({__proto__:null,bindables:yh,default:Tr,dependencies:_h,name:vh,register:Uk,template:Tr},Symbol.toStringTag,{value:"Module"}));var Yk=Object.create,Ol=Object.defineProperty,Kk=Object.getOwnPropertyDescriptor,Qk=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Sh=t=>{throw TypeError(t)},Ch=(t,e,i)=>e in t?Ol(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Zk=(t,e)=>Ol(t,"name",{value:e,configurable:!0}),Jk=t=>[,,,Yk(null)],Xk=["class","method","getter","setter","accessor","field","value","get","set"],wh=t=>t!==void 0&&typeof t!="function"?Sh("Function expected"):t,eD=(t,e,i,n,a)=>({kind:Xk[t],name:e,metadata:n,addInitializer:r=>i._?Sh("Already initialized"):a.push(wh(r||null))}),tD=(t,e)=>Ch(e,Qk("metadata"),t[3]),iD=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},aD=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&Kk(a,i));Zk(a,i);for(var p=n.length-1;p>=0;p--)u=eD(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,wh(l)&&(a=l);return tD(t,a),c&&Ol(a,i,c),m?s^4?r:c:a},qe=(t,e,i)=>Ch(t,typeof e!="symbol"?e+"":e,i),xh,Ml;const nD=(t,e,i,n,a)=>a.priority===3?'<div class="cell-menu-dropdown-outline">Action<i class="mdi mdi-chevron-down"></i></div>':'<div class="cell-menu-dropdown-outline disabled">Action <i class="mdi mdi-chevron-down"></i></div>',rD=(t,e,i)=>{if(!i)return"";let n="";const a=+(i>=3?3:i),l=`<i class="mdi mdi-star ${a===3?"red":a===2?"orange":"yellow"}" aria-hidden="true"></i>`;for(let d=1;d<=a;d++)n+=l;return n},oD=(t,e,i,n,a,r)=>{if(!i)return"";const d=r.getOptions().i18n,u=+(i>=3?3:i),s=u===3?"HIGH":u===2?"MEDIUM":"LOW";return d?.tr(s)??""},lD=(t,e,i,n,a,r)=>r.getOptions().i18n?.tr("TASK_X",{x:i})??"";xh=[T(qk)];class ia{constructor(e=O(Se)){this.i18n=e,qe(this,"_darkModeGrid",!1),qe(this,"aureliaGrid"),qe(this,"gridOptions"),qe(this,"columnDefinitions",[]),qe(this,"dataset",[]),qe(this,"hideSubTitle",!1),qe(this,"selectedLanguage"),this.defineGrid();const i="en";this.i18n.setLocale(i),this.selectedLanguage=i}get cellMenuInstance(){return this.aureliaGrid?.extensionService.getExtensionInstanceByName("cellMenu")}get contextMenuInstance(){return this.aureliaGrid?.extensionService.getExtensionInstanceByName("contextMenu")}attached(){this.dataset=this.getData(1e3)}detaching(){document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light"}defineGrid(){this.columnDefinitions=[{id:"id",name:"#",field:"id",maxWidth:45,sortable:!0,filterable:!0},{id:"title",name:"Title",field:"id",nameKey:"TITLE",minWidth:100,formatter:lD,sortable:!0,filterable:!0,params:{useFormatterOuputToFilter:!0}},{id:"percentComplete",nameKey:"PERCENT_COMPLETE",field:"percentComplete",minWidth:100,exportWithFormatter:!1,sortable:!0,filterable:!0,filter:{model:v.slider,operator:">="},formatter:f.percentCompleteBar,type:"number"},{id:"start",name:"Start",field:"start",nameKey:"START",minWidth:100,formatter:f.dateIso,outputType:"dateIso",type:"date",filterable:!0,filter:{model:v.compoundDate}},{id:"finish",name:"Finish",field:"finish",nameKey:"FINISH",formatter:f.dateIso,outputType:"dateIso",type:"date",minWidth:100,filterable:!0,filter:{model:v.compoundDate}},{id:"priority",nameKey:"PRIORITY",field:"priority",exportCustomFormatter:oD,formatter:rD,sortable:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:1,labelKey:"LOW"},{value:2,labelKey:"MEDIUM"},{value:3,labelKey:"HIGH"}],model:v.singleSelect,enableTranslateLabel:!0}},{id:"completed",nameKey:"COMPLETED",field:"completed",exportCustomFormatter:f.translateBoolean,formatter:f.checkmarkMaterial,sortable:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,labelKey:"TRUE"},{value:!1,labelKey:"FALSE"}],model:v.singleSelect,enableTranslateLabel:!0}},{id:"action",name:"Action",field:"action",width:100,maxWidth:110,excludeFromExport:!0,formatter:nD,cellMenu:{hideCloseButton:!1,menuUsabilityOverride:e=>e.dataContext.priority===3,commandTitleKey:"COMMANDS",commandItems:[{command:"command2",title:"Command 2",positionOrder:62,action:(e,i)=>{console.log(i.dataContext,i.column)},itemUsabilityOverride:e=>!e.dataContext.completed},{command:"command1",title:"Command 1",cssClass:"orange",positionOrder:61},{command:"delete-row",titleKey:"DELETE_ROW",positionOrder:64,iconCssClass:"mdi mdi-close",cssClass:"red",textCssClass:"bold",itemVisibilityOverride:e=>!e.dataContext.completed},{divider:!0,command:"",positionOrder:63},{command:"help",titleKey:"HELP",iconCssClass:"mdi mdi-help-circle",positionOrder:66},{command:"something",titleKey:"DISABLED_COMMAND",disabled:!0,positionOrder:67},{command:"",divider:!0,positionOrder:98},{command:"export",title:"Exports",positionOrder:99,commandItems:[{command:"exports-txt",title:"Text (tab delimited)"},{command:"sub-menu",title:"Excel",cssClass:"green",subMenuTitle:"available formats",subMenuTitleCssClass:"text-italic orange",commandItems:[{command:"exports-csv",title:"Excel (csv)"},{command:"exports-xlsx",title:"Excel (xlsx)"}]}]},{command:"feedback",title:"Feedback",positionOrder:100,commandItems:[{command:"request-update",title:"Request update from supplier",iconCssClass:"mdi mdi-star",tooltip:"this will automatically send an alert to the shipping team to contact the user for an update"},"divider",{command:"sub-menu",title:"Contact Us",iconCssClass:"mdi mdi-account",subMenuTitle:"contact us...",subMenuTitleCssClass:"italic",commandItems:[{command:"contact-email",title:"Email us",iconCssClass:"mdi mdi-pencil-outline"},{command:"contact-chat",title:"Chat with us",iconCssClass:"mdi mdi-message-text-outline"},{command:"contact-meeting",title:"Book an appointment",iconCssClass:"mdi mdi-coffee"}]}]}],optionTitleKey:"CHANGE_COMPLETED_FLAG",optionItems:[{option:!0,titleKey:"TRUE",iconCssClass:"mdi mdi-check-box-outline"},{option:!1,titleKey:"FALSE",iconCssClass:"mdi mdi-checkbox-blank-outline"},{option:null,title:"null",cssClass:"italic",action:()=>{},itemUsabilityOverride:e=>e.dataContext.priority===3,itemVisibilityOverride:e=>!e.dataContext.completed}]}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},darkMode:this._darkModeGrid,enableCellNavigation:!0,enableFiltering:!0,enableSorting:!0,enableTranslate:!0,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!0,customColumnWidth:15,columnHeaderStyle:{font:{bold:!0,italic:!0}}},externalResources:[new G],i18n:this.i18n,enableContextMenu:!0,enableCellMenu:!0,cellMenu:{onCommand:(e,i)=>this.executeCommand(e,i),onOptionSelected:(e,i)=>{const n=i?.dataContext;n?.hasOwnProperty("completed")&&(n.completed=i.item.option,this.aureliaGrid.gridService.updateItem(n))},onBeforeMenuShow:(e,i)=>{console.log("Before the Cell Menu is shown",i)},onBeforeMenuClose:(e,i)=>console.log("Cell Menu is closing",i)},contextMenu:this.getContextMenuOptions()}}executeCommand(e,i){const n=i.command,a=i.dataContext;switch(n){case"contact-email":case"contact-chat":case"contact-meeting":alert("Command: "+i?.command);break;case"exports-csv":case"exports-txt":case"exports-xlsx":alert(`Exporting as ${i.item.title}`);break;case"command1":alert("Command 1");break;case"command2":alert("Command 2");break;case"help":alert("Please help!");break;case"delete-row":confirm(`Do you really want to delete row ${i.row+1} with ${this.i18n.tr("TASK_X",{x:a.id})}`)&&this.aureliaGrid.dataView.deleteItem(a.id);break}}getData(e){const i=[];for(let n=0;n<e;n++){const a=2e3+Math.floor(Math.random()*30),r=Math.floor(Math.random()*11),l=Math.floor(Math.random()*29);i[n]={id:n,duration:Math.floor(Math.random()*25)+" days",percentComplete:Math.floor(Math.random()*100),start:new Date(a,r,l),finish:new Date(a,r+1,l),priority:n%3?2:n%5?3:1,completed:n%4===0}}return i}getContextMenuOptions(){return{hideCloseButton:!1,menuUsabilityOverride:e=>(e?.dataContext).id<21,commandShownOverColumnIds:["id","title","percentComplete","start","finish","completed"],commandTitleKey:"COMMANDS",commandItems:[{divider:!0,command:"",positionOrder:61},{command:"delete-row",titleKey:"DELETE_ROW",iconCssClass:"mdi mdi-close",cssClass:"red",textCssClass:"bold",positionOrder:62},{divider:!0,command:"",positionOrder:63},{command:"help",titleKey:"HELP",iconCssClass:"mdi mdi-help-circle",positionOrder:64,action:()=>{},itemVisibilityOverride:e=>!(e?.dataContext).completed},{command:"something",titleKey:"DISABLED_COMMAND",disabled:!0,positionOrder:65},{command:"",divider:!0,positionOrder:98},{command:"export",title:"Exports",positionOrder:99,commandItems:[{command:"exports-txt",title:"Text (tab delimited)"},{command:"sub-menu",title:"Excel",cssClass:"green",subMenuTitle:"available formats",subMenuTitleCssClass:"text-italic orange",commandItems:[{command:"exports-csv",title:"Excel (csv)"},{command:"exports-xlsx",title:"Excel (xlsx)"}]}]},{command:"feedback",title:"Feedback",positionOrder:100,commandItems:[{command:"request-update",title:"Request update from supplier",iconCssClass:"mdi mdi-star",tooltip:"this will automatically send an alert to the shipping team to contact the user for an update"},"divider",{command:"sub-menu",title:"Contact Us",iconCssClass:"mdi mdi-account",subMenuTitle:"contact us...",subMenuTitleCssClass:"italic",commandItems:[{command:"contact-email",title:"Email us",iconCssClass:"mdi mdi-pencil-outline"},{command:"contact-chat",title:"Chat with us",iconCssClass:"mdi mdi-message-text-outline"},{command:"contact-meeting",title:"Book an appointment",iconCssClass:"mdi mdi-coffee"}]}]}],optionTitleKey:"CHANGE_PRIORITY",optionShownOverColumnIds:["priority"],optionItems:[{option:0,title:"n/a",textCssClass:"italic",itemUsabilityOverride:e=>!(e?.dataContext).completed,action:()=>{}},{option:1,iconCssClass:"mdi mdi-star-outline yellow",titleKey:"LOW"},{option:2,iconCssClass:"mdi mdi-star orange",titleKey:"MEDIUM"},{option:3,iconCssClass:"mdi mdi-star red",titleKey:"HIGH"},"divider",{option:4,title:"Extreme",iconCssClass:"mdi mdi-fire",disabled:!0,itemVisibilityOverride:e=>!(e?.dataContext).completed},{option:null,title:"Sub-Options (demo)",subMenuTitleKey:"CHANGE_PRIORITY",optionItems:[{option:1,iconCssClass:"mdi mdi-star-outline yellow",titleKey:"LOW"},{option:2,iconCssClass:"mdi mdi-star orange",titleKey:"MEDIUM"},{option:3,iconCssClass:"mdi mdi-star red",titleKey:"HIGH"}]}],onBeforeMenuShow:(e,i)=>{this.aureliaGrid.slickGrid.setActiveCell(i.row,i.cell,!1),console.log("Before the global Context Menu is shown",i)},onBeforeMenuClose:(e,i)=>console.log("Global Context Menu is closing",i),onCommand:(e,i)=>this.executeCommand(e,i),onOptionSelected:(e,i)=>{const n=i?.dataContext;n?.hasOwnProperty("priority")&&(n.priority=i.item.option,this.aureliaGrid.gridService.updateItem(n))}}}showContextCommandsAndOptions(e){const i=e?[]:["id","title","complete","start","finish","completed","action"];this.contextMenuInstance?.setOptions({commandShownOverColumnIds:i})}showCellMenuCommandsAndOptions(e){this.cellMenuInstance?.setOptions({hideOptionSection:!e})}async switchLanguage(){const e=this.selectedLanguage==="en"?"fr":"en";await this.i18n.setLocale(e),this.selectedLanguage=e}toggleDarkMode(){this._darkModeGrid=!this._darkModeGrid,this._darkModeGrid?(document.querySelector(".panel-wm-content").classList.add("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="dark"):(document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light"),this.aureliaGrid.slickGrid?.setOptions({darkMode:this._darkModeGrid})}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}Ml=Jk();ia=aD(Ml,0,"Example24",xh,ia);iD(Ml,1,ia);const sD=Object.freeze(Object.defineProperty({__proto__:null,get Example24(){return ia}},Symbol.toStringTag,{value:"Module"})),Th="example25",Er=`<h2>
  Example 25: GraphQL Basic API without Pagination
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example25.ts"
    >
      <span class="mdi mdi-link-variant"></span> code
    </a>
  </span>
  <button class="ms-2 btn btn-outline-secondary btn-sm btn-icon" type="button" data-test="toggle-subtitle" click.trigger="toggleSubTitle()">
    <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
  </button>
</h2>

<div class="subtitle">
  Use basic GraphQL query with any external public APIs (<a
    href="https://ghiscoding.gitbook.io/aurelia-slickgrid/backend-services/graphql"
    target="_blank"
    >Wiki docs</a
  >).
  <ul>
    <li>
      This Examples uses a Public GraphQL API that you can find at this link
      <a href="https://countries.trevorblades.com/" target="_blank">https://countries.trevorblades.com/</a>
    </li>
    <li>Compare to the regular and default GraphQL implementation, you will find the following differences</li>
    <ul>
      <li>
        There are no Pagination and we only use GraphQL <b>once</b> to load the data, then we use the grid as a regular local in-memory grid
      </li>
      <li>
        We enabled the following 2 flags "useLocalFiltering" and "useLocalSorting" to use regular (in memory) DataView filtering/sorting
      </li>
    </ul>
    <li>
      NOTE - This Example calls multiple GraphQL queries, this is <b>ONLY</b> for demo purposes, you would typically only call 1 query
      (which is what GraphQL is good at)
    </li>
    <li>
      This example is mainly to demo the use of GraphqlService to build the query and retrieve the data but also to demo how to mix that
      with local (in-memory) Filtering/Sorting strategies
    </li>
  </ul>
</div>

<div class="row">
  <div class="col-xs-6 col-sm-3">
    <div class.bind="status.class" role="alert" data-test="status">
      <strong>Status: </strong> \${status.text}
      <span hidden.bind="!processing">
        <i class="mdi mdi-sync mdi-spin"></i>
      </span>
    </div>
  </div>
</div>

<aurelia-slickgrid grid-id="grid25" columns.bind="columnDefinitions" options.bind="gridOptions" dataset.bind="dataset"> </aurelia-slickgrid>
`,Eh=[],$h={};let hn;function dD(t){hn||(hn=E.define({name:Th,template:Er,dependencies:Eh,bindables:$h})),t.register(hn)}const cD=Object.freeze(Object.defineProperty({__proto__:null,bindables:$h,default:Er,dependencies:Eh,name:Th,register:dD,template:Er},Symbol.toStringTag,{value:"Module"}));var uD=Object.create,Pl=Object.defineProperty,mD=Object.getOwnPropertyDescriptor,pD=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),kh=t=>{throw TypeError(t)},Dh=(t,e,i)=>e in t?Pl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,hD=(t,e)=>Pl(t,"name",{value:e,configurable:!0}),gD=t=>[,,,uD(null)],bD=["class","method","getter","setter","accessor","field","value","get","set"],Oh=t=>t!==void 0&&typeof t!="function"?kh("Function expected"):t,fD=(t,e,i,n,a)=>({kind:bD[t],name:e,metadata:n,addInitializer:r=>i._?kh("Already initialized"):a.push(Oh(r||null))}),vD=(t,e)=>Dh(e,pD("metadata"),t[3]),_D=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},yD=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&mD(a,i));hD(a,i);for(var p=n.length-1;p>=0;p--)u=fD(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,Oh(l)&&(a=l);return vD(t,a),c&&Pl(a,i,c),m?s^4?r:c:a},ke=(t,e,i)=>Dh(t,typeof e!="symbol"?e+"":e,i),Mh,Il;const gn="https://countries.trevorblades.com/";Mh=[T(cD)];class aa{constructor(e=O(_e(ye))){this.http=e,ke(this,"aureliaGrid"),ke(this,"columnDefinitions",[]),ke(this,"gridOptions"),ke(this,"dataset",[]),ke(this,"metrics"),ke(this,"graphqlQuery",""),ke(this,"hideSubTitle",!1),ke(this,"processing",!1),ke(this,"status",{text:"",class:""}),this.defineGrid()}defineGrid(){this.columnDefinitions=[{id:"countryCode",field:"code",name:"Code",maxWidth:90,sortable:!0,filterable:!0,columnGroup:"Country"},{id:"countryName",field:"name",name:"Name",width:60,sortable:!0,filterable:!0,columnGroup:"Country"},{id:"countryNative",field:"native",name:"Native",width:60,sortable:!0,filterable:!0,columnGroup:"Country"},{id:"countryPhone",field:"phone",name:"Phone Area Code",maxWidth:110,sortable:!0,filterable:!0,columnGroup:"Country"},{id:"countryCurrency",field:"currency",name:"Currency",maxWidth:90,sortable:!0,filterable:!0,columnGroup:"Country"},{id:"countryEmoji",field:"emoji",name:"Emoji",maxWidth:90,sortable:!0,columnGroup:"Country"},{id:"languageName",field:"languages.name",name:"Names",width:60,formatter:f.arrayObjectToCsv,columnGroup:"Language",params:{propertyNames:["name"],useFormatterOuputToFilter:!0},filterable:!0,filter:{model:v.multipleSelect,collectionAsync:this.getLanguages(),operator:"IN_CONTAINS",collectionOptions:{addBlankEntry:!0,collectionInsideObjectProperty:"data.languages"},collectionFilterBy:[{property:"name",value:"",operator:"NE"},{property:"name",value:null,operator:"NE"}],collectionSortBy:{property:"name"},customStructure:{value:"name",label:"name"},options:{filter:!0}}},{id:"languageNative",field:"languages.native",name:"Native",width:60,formatter:f.arrayObjectToCsv,params:{propertyNames:["native"],useFormatterOuputToFilter:!0},columnGroup:"Language",filterable:!0,filter:{model:v.multipleSelect,collectionAsync:this.getLanguages(),operator:"IN_CONTAINS",collectionOptions:{addBlankEntry:!0,collectionInsideObjectProperty:"data.languages"},collectionFilterBy:[{property:"native",value:"",operator:"NE"},{property:"native",value:null,operator:"NE"}],collectionSortBy:{property:"native"},customStructure:{value:"native",label:"native"},options:{filter:!0}}},{id:"languageCode",field:"languages.code",name:"Codes",maxWidth:100,formatter:f.arrayObjectToCsv,params:{propertyNames:["code"],useFormatterOuputToFilter:!0},columnGroup:"Language",filterable:!0},{id:"continentName",field:"continent.name",name:"Name",width:60,sortable:!0,filterable:!0,formatter:f.complexObject,columnGroup:"Continent"},{id:"continentCode",field:"continent.code",name:"Code",maxWidth:90,sortable:!0,filterable:!0,filter:{model:v.singleSelect,collectionAsync:this.getContinents(),collectionOptions:{collectionInsideObjectProperty:"data.continents",addBlankEntry:!0,separatorBetweenTextLabels:": "},customStructure:{value:"code",label:"code",labelSuffix:"name"}},formatter:f.complexObject,columnGroup:"Continent"}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:!0,enableCellNavigation:!0,enablePagination:!1,enableTranslate:!0,createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:28,datasetIdPropertyName:"code",showCustomFooter:!0,backendServiceApi:{service:new ro,useLocalFiltering:!0,useLocalSorting:!0,options:{datasetName:"countries"},preProcess:()=>this.displaySpinner(!0),process:e=>this.getCountries(e),postProcess:e=>{this.metrics=e.metrics,this.displaySpinner(!1)}}}}displaySpinner(e){this.processing=e,this.status=e?{text:"processing...",class:"alert alert-danger"}:{text:"finished",class:"alert alert-success"}}getCountries(e){return new Promise(i=>{this.http.fetch(gn,{method:"post",body:Ma({query:e})}).then(n=>i(n.json()))})}getContinents(){const e="query { continents { code, name  }}";return new Promise(i=>{this.http.fetch(gn,{method:"post",body:Ma({query:e})}).then(n=>i(n.json()))})}getLanguages(){const e="query { languages { code, name, native  }}";return new Promise(i=>{this.http.fetch(gn,{method:"post",body:Ma({query:e})}).then(n=>i(n.json()))})}setFiltersDynamically(){this.aureliaGrid.filterService.updateFilters([{columnId:"countryName",searchTerms:["G"],operator:"StartsWith"}])}setSortingDynamically(){this.aureliaGrid.sortService.updateSorting([{columnId:"billingAddressZip",direction:"DESC"},{columnId:"company",direction:"ASC"}])}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}Il=gD();aa=yD(Il,0,"Example25",Mh,aa);_D(Il,1,aa);const SD=Object.freeze(Object.defineProperty({__proto__:null,get Example25(){return aa}},Symbol.toStringTag,{value:"Module"})),Ph="example26",$r=`<h2>
  Example 26: Use of Aurelia Custom Elements
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example26.ts"
    >
      <span class="mdi mdi-link-variant"></span> code
    </a>
  </span>
  <button class="ms-2 btn btn-outline-secondary btn-sm btn-icon" type="button" data-test="toggle-subtitle" click.trigger="toggleSubTitle()">
    <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
  </button>
</h2>

<div class="subtitle">
  <h5>Filters, Editors, AsyncPostRender with Aurelia Custom Elements</h5>
  Grid with usage of Aurelia Custom Elements as Editor &amp; AsyncPostRender (similar to Formatter).
  <ul>
    <li>Support of Aurelia Custom Element as Custom Editor (click on any "Assignee" name cell)</li>
    <ul>
      <li>That column uses a simple select drodown wrapped in an Aurelia Custom Element</li>
      <li>Increased Grid Options "rowHeight" &amp; "headerRowHeight" to 45 so that the Custom Element fits in the cell.</li>
    </ul>
    <li>Support of Aurelia Custom Element as Custom Filter ("Assignee" columns), which also uses Custom Element</li>
    <li>The 2nd "Assignee" column (showing in bold text) uses "asyncPostRender" with an Aurelia Custom Element</li>
    <ul>
      <li>Why can't we use Aurelia Custom Element as Customer Formatter and why do I see a slight delay in loading the data?</li>
      <li>
        It's totally normal since SlickGrid Formatters only accept strings (synchronously), so we cannot use that (Aurelia requires at least
        1 full cycle to render the element), so we are left with SlickGrid "asyncPostRender" and it works but as the name suggest it's async
        users might see noticeable delay in loading the data
      </li>
    </ul>
  </ul>
</div>

<div class="row">
  <div class="col-sm-6">
    <label>autoEdit setting</label>
    <br />
    <span id="radioAutoEdit">
      <div class="row">
        <div class="col">
          <label class="radio-inline control-label" for="radioTrue">
            <input
              type="radio"
              name="inlineRadioOptions"
              id="radioTrue"
              checked
              value.bind="isAutoEdit"
              click.trigger="setAutoEdit(true)"
            />
            ON (single-click)
          </label>
          <label class="radio-inline control-label" for="radioFalse">
            <input type="radio" name="inlineRadioOptions" id="radioFalse" value.bind="isAutoEdit" click.trigger="setAutoEdit(false)" /> OFF
            (double-click)
          </label>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="undo()">
            <i class="mdi mdi-undo"></i>
            Undo last edit(s)
          </button>
          <label class="checkbox-inline control-label" for="autoCommitEdit">
            <input
              type="checkbox"
              id="autoCommitEdit"
              data-test="auto-edit-checkbox"
              value.bind="gridOptions.autoCommitEdit"
              click.trigger="changeAutoCommit()"
            />
            Auto Commit Edit
          </label>
        </div>
      </div>
    </span>
    <div class="row" style="margin-top: 5px">
      <div class="col">
        <button
          class="btn btn-outline-secondary btn-sm btn-icon"
          data-test="clear-filters"
          click.trigger="aureliaGrid.filterService.clearFilters()"
        >
          Clear Filters
        </button>
        <button
          class="btn btn-outline-secondary btn-sm btn-icon"
          data-test="clear-sorting"
          click.trigger="aureliaGrid.sortService.clearSorting()"
        >
          Clear Sorting
        </button>
      </div>
    </div>
  </div>

  <div class="col-sm-6">
    <div class="alert alert-info" show.bind="updatedObject"><strong>Updated Item:</strong> \${updatedObject | stringify}</div>
    <div class="alert alert-warning" show.bind="alertWarning">\${alertWarning}</div>
  </div>
</div>

<div id="grid-container" class="col-sm-12">
  <aurelia-slickgrid
    grid-id="grid26"
    columns.bind="columnDefinitions"
    options.bind="gridOptions"
    dataset.bind="dataset"
    instances.bind="aureliaGrid"
    on-cell-change.trigger="onCellChanged($event.detail.eventData, $event.detail.args)"
    on-click.trigger="onCellClicked($event.detail.eventData, $event.detail.args)"
  >
  </aurelia-slickgrid>
</div>
`,Ih=[],Gh={};let bn;function CD(t){bn||(bn=E.define({name:Ph,template:$r,dependencies:Ih,bindables:Gh})),t.register(bn)}const wD=Object.freeze(Object.defineProperty({__proto__:null,bindables:Gh,default:$r,dependencies:Ih,name:Ph,register:CD,template:$r},Symbol.toStringTag,{value:"Module"}));var xD=Object.defineProperty,TD=(t,e,i)=>e in t?xD(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Ye=(t,e,i)=>TD(t,typeof e!="symbol"?e+"":e,i);class ED{constructor(e){this.args=e,Ye(this,"aureliaViewModel"),Ye(this,"defaultId"),Ye(this,"defaultItem"),Ye(this,"selectedItem"),Ye(this,"grid"),Ye(this,"vm"),Ye(this,"elmBindingContext"),this.grid=e?.grid,this.init()}get aureliaUtilService(){let e=this.gridOptions?.params?.aureliaUtilService;return(!e||!(e instanceof so))&&(e=this.columnEditor?.params?.aureliaUtilService),e}get collection(){return this.columnDef?.editor?.collection??[]}get columnDef(){return this.args?.column??{}}get columnEditor(){return this.columnDef?.editor??{}}get gridOptions(){return this.grid?.getOptions()??{}}get hasAutoCommitEdit(){return this.args.grid.getOptions().autoCommitEdit}get validator(){return this.columnEditor.validator||this.columnDef.validator}async init(){if(!this.columnEditor?.params?.viewModel)throw new Error(`[Aurelia-Slickgrid] For the Editors.aureliaComponent to work properly, you need to fill in the "templateUrl" property of your Custom Element Editor.
      Example: this.columnDefs = [{ id: 'title', field: 'title', editor: { model: CustomEditor, collection: [...], param: { viewModel: MyVM } },`);if(this.columnEditor?.params?.viewModel){const e={grid:this.grid,model:{collection:this.collection}},i=this.columnEditor.params.viewModel;this.vm=await this.aureliaUtilService.createAureliaViewModelAddToSlot(i,e,this.args.container),this.elmBindingContext=this.vm?.controller?.children?.[0].scope.bindingContext}}save(){const e=this.validate();e&&e.valid&&(this.hasAutoCommitEdit?this.args.grid.getEditorLock().commitCurrentEdit():this.args.commitChanges())}cancel(){this.elmBindingContext&&(this.elmBindingContext.selectedItem=this.defaultItem),this.args?.cancelChanges&&this.args.cancelChanges()}destroy(){this.vm?.controller?.deactivate(this.vm.controller,null)}hide(){this.elmBindingContext?.hide()}show(){this.elmBindingContext?.focus()}focus(){this.elmBindingContext?.focus()}applyValue(e,i){e[this.columnDef.field]=i}getValue(){return this.elmBindingContext?.selectedItem.id}loadValue(e){const i=e?.[this.columnDef.field];this.selectedItem=i,this.defaultItem=i,setTimeout(()=>{this.focus(),this.elmBindingContext&&(this.elmBindingContext.selectedItem=i,this.elmBindingContext.selectedItemChanged=n=>{this.selectedItem=n,n!==i&&this.save()})},0)}serializeValue(){return this.selectedItem}isValueChanged(){return!(this.selectedItem.id===""&&(this.defaultId===null||this.defaultId===void 0))&&this.selectedItem.id!==this.defaultId}validate(){if(this.validator){const e=this.selectedItem.id;return this.validator(e,this.args)}return{valid:!0,msg:null}}}var $D=Object.defineProperty,kD=(t,e,i)=>e in t?$D(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,De=(t,e,i)=>kD(t,typeof e!="symbol"?e+"":e,i);class Ed{constructor(){De(this,"_shouldTriggerQuery",!0),De(this,"container"),De(this,"grid"),De(this,"searchTerms",[]),De(this,"columnDef"),De(this,"callback"),De(this,"operator","EQ"),De(this,"vm"),De(this,"elmBindingContext")}get aureliaUtilService(){let e=this.gridOptions?.params?.aureliaUtilService;return(!e||!(e instanceof so))&&(e=this.columnFilter?.params?.aureliaUtilService),e}get collection(){return this.columnFilter?.collection??[]}get columnFilter(){return this.columnDef?.filter??{}}get gridOptions(){return this.grid?.getOptions()??{}}async init(e){if(this.grid=e.grid,this.callback=e.callback,this.columnDef=e.columnDef,this.searchTerms=(e.hasOwnProperty("searchTerms")?e.searchTerms:[])||[],!this.columnFilter?.params?.viewModel)throw new Error(`[Aurelia-Slickgrid] For the Filters.aureliaComponent to work properly, you need to fill in the "viewModel" property of your Custom Element Filter.
      Example: this.columnDefs = [{ id: 'title', field: 'title', filter: { model: CustomFilter, collection: [...], param: { viewModel: MyVM } },`);if(this.columnFilter.params.viewModel){this.container=this.grid.getHeaderRowColumn(this.columnDef.id),Hn(this.container);const i={grid:this.grid,model:{collection:this.collection}},n=this.columnFilter.params.viewModel;this.vm=await this.aureliaUtilService.createAureliaViewModelAddToSlot(n,i,this.container),this.elmBindingContext=this.vm?.controller?.children?.[0].scope.bindingContext,this.elmBindingContext&&(this.elmBindingContext.selectedItemChanged=a=>{this.callback(void 0,{columnDef:this.columnDef,operator:this.operator,searchTerms:[a.id],shouldTriggerQuery:this._shouldTriggerQuery}),this._shouldTriggerQuery=!0})}}clear(e=!0){this._shouldTriggerQuery=e,this.elmBindingContext?.selectedItem&&(this.elmBindingContext.selectedItem={id:"",name:""})}destroy(){this.vm?.controller?.deactivate(this.vm.controller,null),this.container=this.grid.getHeaderRowColumn(this.columnDef.id),Hn(this.container)}setValues(e){this.elmBindingContext?.selectedItem&&(this.elmBindingContext.selectedItem=e)}}var DD=Object.create,Gl=Object.defineProperty,OD=Object.getOwnPropertyDescriptor,MD=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Fh=t=>{throw TypeError(t)},Ah=(t,e,i)=>e in t?Gl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,PD=(t,e)=>Gl(t,"name",{value:e,configurable:!0}),ID=t=>[,,,DD(null)],GD=["class","method","getter","setter","accessor","field","value","get","set"],Rh=t=>t!==void 0&&typeof t!="function"?Fh("Function expected"):t,FD=(t,e,i,n,a)=>({kind:GD[t],name:e,metadata:n,addInitializer:r=>i._?Fh("Already initialized"):a.push(Rh(r||null))}),AD=(t,e)=>Ah(e,MD("metadata"),t[3]),RD=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},LD=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&OD(a,i));PD(a,i);for(var p=n.length-1;p>=0;p--)u=FD(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,Rh(l)&&(a=l);return AD(t,a),c&&Gl(a,i,c),m?s^4?r:c:a},ce=(t,e,i)=>Ah(t,typeof e!="symbol"?e+"":e,i),Lh,Fl;const zD=100;Lh=[T(wD)];class na{constructor(e=O(so)){this.aureliaUtilService=e,ce(this,"_commandQueue",[]),ce(this,"aureliaGrid"),ce(this,"gridOptions"),ce(this,"columnDefinitions",[]),ce(this,"dataset",[]),ce(this,"updatedObject"),ce(this,"hideSubTitle",!1),ce(this,"isAutoEdit",!0),ce(this,"alertWarning"),ce(this,"assignees",[{id:"",name:""},{id:"1",name:"John"},{id:"2",name:"Pierre"},{id:"3",name:"Paul"}]),this.defineGrid()}attached(){this.dataset=this.mockData(zD)}defineGrid(){this.columnDefinitions=[{id:"title",name:"Title",field:"title",filterable:!0,sortable:!0,editor:{model:C.longText,minLength:5,maxLength:255},minWidth:100,onCellChange:(e,i)=>{console.log(i),this.alertWarning=`Updated Title: ${i.dataContext.title}`}},{id:"assignee",name:"Assignee",field:"assignee",minWidth:100,filterable:!0,sortable:!0,filter:{model:Ed,collection:this.assignees,params:{viewModel:Ae}},queryFieldFilter:"assignee.id",queryFieldSorter:"assignee.name",formatter:f.complexObject,params:{complexFieldLabel:"assignee.name"},exportWithFormatter:!0,editor:{model:ED,collection:this.assignees,params:{viewModel:Ve}},onCellChange:(e,i)=>{console.log(i),this.alertWarning=`Updated Title: ${i.dataContext.title}`}},{id:"assignee2",name:"Assignee with Aurelia Component",field:"assignee",minWidth:125,filterable:!0,sortable:!0,filter:{model:Ed,collection:this.assignees,params:{viewModel:Ae}},queryFieldFilter:"assignee.id",queryFieldSorter:"assignee.name",formatter:()=>"...",asyncPostRender:this.renderAureliaComponent.bind(this),params:{viewModel:ut,complexFieldLabel:"assignee.name"},exportCustomFormatter:f.complexObject},{id:"duration",name:"Duration (days)",field:"duration",filterable:!0,minWidth:100,sortable:!0,type:"number",filter:{model:v.slider,options:{hideSliderNumber:!1}},editor:{model:C.slider,minValue:0,maxValue:100}},{id:"complete",name:"% Complete",field:"percentComplete",filterable:!0,formatter:f.multiple,type:"number",editor:{enableRenderHtml:!0,collection:Array.from(Array(101).keys()).map(e=>({value:e,label:e,symbol:'<i class="mdi mdi-percent-outline" style="color:cadetblue"></i>'})),customStructure:{value:"value",label:"label",labelSuffix:"symbol"},collectionSortBy:{property:"label",sortDesc:!0},collectionFilterBy:{property:"value",value:0,operator:"!="},model:C.singleSelect},minWidth:100,params:{formatters:[f.collectionEditor,f.percentCompleteBar]}},{id:"start",name:"Start",field:"start",filterable:!0,filter:{model:v.compoundDate},formatter:f.dateIso,sortable:!0,minWidth:100,type:"date",editor:{model:C.date}},{id:"finish",name:"Finish",field:"finish",filterable:!0,filter:{model:v.compoundDate},formatter:f.dateIso,sortable:!0,minWidth:100,type:"date",editor:{model:C.date}}],this.gridOptions={asyncEditorLoading:!1,autoEdit:this.isAutoEdit,autoCommitEdit:!1,autoResize:{container:"#demo-container",rightPadding:10},rowHeight:45,editable:!0,enableCellNavigation:!0,enableColumnPicker:!0,enableExcelCopyBuffer:!0,enableFiltering:!0,enableAsyncPostRender:!0,asyncPostRenderDelay:0,editCommandHandler:(e,i,n)=>{this._commandQueue.push(n),n.execute()},params:{aureliaUtilService:this.aureliaUtilService}}}mockData(e,i=0){const n=[];for(let a=i;a<i+e;a++){const r=2e3+Math.floor(Math.random()*10),l=Math.floor(Math.random()*11),d=Math.floor(Math.random()*29),u=Math.round(Math.random()*100);n.push({id:a,title:"Task "+a,assignee:a%3?this.assignees[2]:a%2?this.assignees[1]:this.assignees[0],duration:Math.round(Math.random()*100)+"",percentComplete:u,percentCompleteNumber:u,start:new Date(r,l,d),finish:new Date(r,l+1,d),effortDriven:a%5===0})}return n}onCellChanged(e,i){console.log("onCellChange",i),this.updatedObject={...i.item}}onCellClicked(e,i){const n=this.aureliaGrid.gridService.getColumnFromEventArguments(i);console.log(n),n.columnDef.id==="edit"?(this.alertWarning=`open a modal window to edit: ${n.dataContext.title}`,this.aureliaGrid.gridService.highlightRow(i.row,1500)):n.columnDef.id==="delete"&&confirm("Are you sure?")&&(this.aureliaGrid.gridService.deleteItemById(n.dataContext.id),this.alertWarning=`Deleted: ${n.dataContext.title}`)}onCellValidation(e,i){alert(i.validationResults.msg)}changeAutoCommit(){return this.gridOptions.autoCommitEdit=!this.gridOptions.autoCommitEdit,this.aureliaGrid.slickGrid.setOptions({autoCommitEdit:this.gridOptions.autoCommitEdit}),!0}renderAureliaComponent(e,i,n,a){if(a.params.viewModel&&e){const r={model:n,grid:this.aureliaGrid.slickGrid};this.aureliaUtilService.createAureliaViewModelAddToSlot(a.params.viewModel,r,e)}}setAutoEdit(e){return this.isAutoEdit=e,this.aureliaGrid.slickGrid.setOptions({autoEdit:e}),!0}undo(){const e=this._commandQueue.pop();e&&et.cancelCurrentEdit()&&(e.undo(),this.aureliaGrid.slickGrid.gotoCell(e.row,e.cell,!1))}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}Fl=ID();na=LD(Fl,0,"Example26",Lh,na);RD(Fl,1,na);const ND=Object.freeze(Object.defineProperty({__proto__:null,get Example26(){return na}},Symbol.toStringTag,{value:"Module"})),zh="example27",kr=`<h2>
  <span>
    Example 27: Tree Data
    <small>
      <span class="mdi mdi-file-tree font-27px"></span> (from a flat dataset with <code>parentId</code> references -
      <a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/tree-data-grid" target="_blank">Wiki</a>)</small
    >
  </span>
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example27.ts"
    >
      <span class="mdi mdi-link mdi-v-align-sub"></span> code
    </a>
  </span>
  <button class="ms-2 btn btn-outline-secondary btn-sm btn-icon" type="button" data-test="toggle-subtitle" click.trigger="toggleSubTitle()">
    <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
  </button>
</h2>

<div class="subtitle">
  <ul>
    <li>It is assumed that your dataset will have Parent/Child references AND also Tree Level (indent) property.</li>
    <ul>
      <li>
        If you do not have the Tree Level (indent), you could call "convertParentChildArrayToHierarchicalView()" then call
        "convertHierarchicalViewToParentChildArray()"
      </li>
      <li>
        You could also pass the result of "convertParentChildArrayToHierarchicalView()" to "dataset-hierarchical.bind" as defined in the
        next Hierarchical Example
      </li>
    </ul>
  </ul>
</div>

<div class="row" style="margin-bottom: 4px">
  <div class="col-md-12">
    <button class="btn btn-outline-secondary btn-xs btn-icon" data-test="add-500-rows-btn" click.trigger="loadData(500)">500 rows</button>
    <button class="btn btn-outline-secondary btn-xs btn-icon" data-test="add-75k-rows-btn" click.trigger="loadData(75000)">75k rows</button>
    <button
      click.trigger="dynamicallyChangeFilter()"
      class="btn btn-outline-secondary btn-xs btn-icon"
      data-test="change-filter-dynamically"
    >
      <span class="mdi mdi-filter-outline"></span>
      <span>Dynamically Change Filter (% complete &lt; 40)</span>
    </button>
    <button
      click.trigger="collapseAllWithoutEvent()"
      class="btn btn-outline-secondary btn-xs btn-icon"
      data-test="collapse-all-noevent-btn"
    >
      <span class="mdi mdi-arrow-collapse"></span>
      <span>Collapse All (without triggering event)</span>
    </button>
    <button
      click.trigger="dynamicallyToggledFirstParent()"
      class="btn btn-outline-secondary btn-xs btn-icon"
      data-test="dynamically-toggle-first-parent-btn"
    >
      <span>Dynamically Toggle First Parent</span>
    </button>
    <button
      click.trigger="reapplyToggledItems()"
      data-test="reapply-toggled-items-btn"
      class="btn btn-outline-secondary btn-xs btn-icon"
      disabled.bind="hasNoExpandCollapseChanged"
    >
      <span class="mdi mdi-history"></span>
      <span>Reapply Previous Toggled Items</span>
    </button>
    <div class.bind="loadingClass"></div>
  </div>
</div>

<div class="row">
  <div class="col-md-12">
    <button click.trigger="addNewRow()" data-test="add-item-btn" class="btn btn-primary btn-xs btn-icon">
      <span class="mdi mdi-plus color-white"></span>
      <span>Add New Item to "Task 1" group</span>
    </button>
    <button click.trigger="updateFirstRow()" data-test="update-item-btn" class="btn btn-outline-secondary btn-xs btn-icon">
      <span class="icon mdi mdi-pencil"></span>
      <span>Update 1st Row Item</span>
    </button>
    <button click.trigger="collapseAll()" data-test="collapse-all-btn" class="btn btn-outline-secondary btn-xs btn-icon">
      <span class="mdi mdi-arrow-collapse"></span>
      <span>Collapse All</span>
    </button>
    <button click.trigger="expandAll()" data-test="expand-all-btn" class="btn btn-outline-secondary btn-xs btn-icon">
      <span class="mdi mdi-arrow-expand"></span>
      <span>Expand All</span>
    </button>
    <button click.trigger="logFlatStructure()" class="btn btn-outline-secondary btn-xs btn-icon" title="console.log of the Flat dataset">
      <span>Log Flat Structure</span>
    </button>
    <button
      click.trigger="logHierarchicalStructure()"
      class="btn btn-outline-secondary btn-xs btn-icon"
      title="console.log of the Hierarchical Tree dataset"
    >
      <span>Log Hierarchical Structure</span>
    </button>
  </div>
</div>

<br />

<div id="grid-container" class="col-sm-12">
  <aurelia-slickgrid
    grid-id="grid27"
    columns.bind="columnDefinitions"
    options.bind="gridOptions"
    dataset.bind="dataset"
    instances.bind="aureliaGrid"
    on-before-filter-change.trigger="showSpinner()"
    on-filter-changed.trigger="hideSpinner()"
    on-before-filter-clear.trigger="showSpinner()"
    on-filter-cleared.trigger="hideSpinner()"
    on-before-sort-change.trigger="showSpinner()"
    on-sort-changed.trigger="hideSpinner()"
    on-tree-full-toggle-start.trigger="showSpinner()"
    on-tree-full-toggle-end.trigger="handleOnTreeFullToggleEnd($event.detail)"
    on-tree-item-toggled.trigger="handleOnTreeItemToggled($event.detail)"
  >
  </aurelia-slickgrid>
</div>
`,Nh=[],Wh={};let fn;function WD(t){fn||(fn=E.define({name:zh,template:kr,dependencies:Nh,bindables:Wh})),t.register(fn)}const BD=Object.freeze(Object.defineProperty({__proto__:null,bindables:Wh,default:kr,dependencies:Nh,name:zh,register:WD,template:kr},Symbol.toStringTag,{value:"Module"}));var jD=Object.create,Al=Object.defineProperty,VD=Object.getOwnPropertyDescriptor,HD=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Bh=t=>{throw TypeError(t)},jh=(t,e,i)=>e in t?Al(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,UD=(t,e)=>Al(t,"name",{value:e,configurable:!0}),qD=t=>[,,,jD(null)],YD=["class","method","getter","setter","accessor","field","value","get","set"],Vh=t=>t!==void 0&&typeof t!="function"?Bh("Function expected"):t,KD=(t,e,i,n,a)=>({kind:YD[t],name:e,metadata:n,addInitializer:r=>i._?Bh("Already initialized"):a.push(Vh(r||null))}),QD=(t,e)=>jh(e,HD("metadata"),t[3]),ZD=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},JD=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&VD(a,i));UD(a,i);for(var p=n.length-1;p>=0;p--)u=KD(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,Vh(l)&&(a=l);return QD(t,a),c&&Al(a,i,c),m?s^4?r:c:a},ue=(t,e,i)=>jh(t,typeof e!="symbol"?e+"":e,i),Hh,Rl;const XD=500;Hh=[T(BD)];class ra{constructor(){ue(this,"aureliaGrid"),ue(this,"gridOptions"),ue(this,"columnDefinitions",[]),ue(this,"dataset",[]),ue(this,"datasetHierarchical",[]),ue(this,"loadingClass",""),ue(this,"hideSubTitle",!1),ue(this,"isLargeDataset",!1),ue(this,"hasNoExpandCollapseChanged",!0),ue(this,"treeToggleItems",[]),this.defineGrid()}attached(){this.dataset=this.loadData(XD)}defineGrid(){this.columnDefinitions=[{id:"title",name:"Title",field:"title",width:220,cssClass:"cell-title",filterable:!0,sortable:!0,exportWithFormatter:!1,queryFieldSorter:"id",formatter:f.tree,exportCustomFormatter:f.treeExport},{id:"duration",name:"Duration",field:"duration",minWidth:90,filterable:!0},{id:"percentComplete",name:"% Complete",field:"percentComplete",minWidth:120,maxWidth:200,exportWithFormatter:!1,sortable:!0,filterable:!0,filter:{model:v.compoundSlider,operator:">="},formatter:f.percentCompleteBarWithText,type:"number"},{id:"start",name:"Start",field:"start",minWidth:60,type:"dateIso",filterable:!0,sortable:!0,filter:{model:v.compoundDate},formatter:f.dateIso},{id:"finish",name:"Finish",field:"finish",minWidth:60,type:"dateIso",filterable:!0,sortable:!0,filter:{model:v.compoundDate},formatter:f.dateIso},{id:"effortDriven",name:"Effort Driven",width:80,minWidth:20,maxWidth:80,cssClass:"cell-effort-driven",field:"effortDriven",exportWithFormatter:!1,formatter:f.checkmarkMaterial,cannotTriggerInsert:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:v.singleSelect}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableAutoSizeColumns:!0,enableAutoResize:!0,enableFiltering:!0,enableTreeData:!0,treeDataOptions:{columnId:"title",parentPropName:"parentId",levelPropName:"treeLevel",indentMarginLeft:15,initiallyCollapsed:!0,titleFormatter:(e,i,n,a,r)=>{let l="";return r.treeLevel>0&&(l='<span class="mdi mdi-subdirectory-arrow-right mdi-v-align-sub color-se-secondary"></span>'),`${l}<span class="bold">${n}</span> <span style="font-size:11px; margin-left: 15px;">(parentId: ${r.parentId})</span>`}},multiColumnSort:!1,showCustomFooter:!0,headerRowHeight:45,rowHeight:40,presets:{filters:[{columnId:"percentComplete",searchTerms:[25],operator:">="}]},enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!0,sanitizeDataExport:!0},externalResources:[new G],contextMenu:{iconCollapseAllGroupsCommand:"mdi mdi-arrow-collapse",iconExpandAllGroupsCommand:"mdi mdi-arrow-expand",iconClearGroupingCommand:"mdi mdi-close",iconCopyCellValueCommand:"mdi mdi-content-copy",iconExportCsvCommand:"mdi mdi-download",iconExportExcelCommand:"mdi mdi-file-excel-outline",iconExportTextDelimitedCommand:"mdi mdi-download"},gridMenu:{iconCssClass:"mdi mdi-menu",iconClearAllFiltersCommand:"mdi mdi-filter-remove-outline",iconClearAllSortingCommand:"mdi mdi-swap-vertical",iconExportCsvCommand:"mdi mdi-download",iconExportExcelCommand:"mdi mdi-file-excel-outline",iconExportTextDelimitedCommand:"mdi mdi-download",iconRefreshDatasetCommand:"mdi mdi-sync",iconToggleFilterCommand:"mdi mdi-flip-vertical",iconTogglePreHeaderCommand:"mdi mdi-flip-vertical"},headerMenu:{iconClearFilterCommand:"mdi mdi mdi-filter-remove-outline",iconClearSortCommand:"mdi mdi-swap-vertical",iconSortAscCommand:"mdi mdi-sort-ascending",iconSortDescCommand:"mdi mdi-flip-v mdi-sort-descending",iconColumnHideCommand:"mdi mdi-close"}}}addNewRow(){const e=this.aureliaGrid.dataView.getItemCount(),i=this.aureliaGrid.dataView?.getItemById(1);if(i?.__hasChildren){const n={id:e,parentId:i.id,title:`Task ${e}`,duration:"1 day",percentComplete:99,start:new Date,finish:new Date,effortDriven:!1};this.aureliaGrid.gridService.addItem(n)}}updateFirstRow(){const e=this.aureliaGrid.dataView.getItemById(0);this.aureliaGrid.gridService.updateItem({...e,duration:"11 days",percentComplete:77,start:new Date,finish:new Date,effortDriven:!1})}collapseAll(){this.aureliaGrid.treeDataService.toggleTreeDataCollapse(!0)}collapseAllWithoutEvent(){this.aureliaGrid.treeDataService.toggleTreeDataCollapse(!0,!1)}expandAll(){this.aureliaGrid.treeDataService.toggleTreeDataCollapse(!1)}dynamicallyChangeFilter(){this.aureliaGrid.filterService.updateFilters([{columnId:"percentComplete",operator:"<",searchTerms:[40]}])}logHierarchicalStructure(){console.log("exploded array",this.aureliaGrid.treeDataService.datasetHierarchical)}logFlatStructure(){console.log("flat array",this.aureliaGrid.treeDataService.dataset)}hideSpinner(){setTimeout(()=>this.loadingClass="",200)}showSpinner(){this.isLargeDataset&&(this.loadingClass="mdi mdi-load mdi-spin-1s font-24px color-alt-success")}loadData(e){this.isLargeDataset=e>5e3;let i=0;const n=[],a=[];for(let r=0;r<e;r++){const l=2e3+Math.floor(Math.random()*10),d=Math.floor(Math.random()*11),u=Math.floor(Math.random()*29),s=a[r]={};let m;(r===1||r===0)&&(i=0,n.pop()),r===3?i=1:r===2||r===4||Math.random()>.8&&r>0&&i<3&&r-1!==0&&r-1!==2?(i++,n.push(r-1)):Math.random()<.3&&i>0&&(i--,n.pop()),n.length>0?m=n[n.length-1]:m=null,s.id=r,s.parentId=m,s.title=`Task ${r}`,s.duration="5 days",s.percentComplete=Math.round(Math.random()*100),s.start=new Date(l,d,u),s.finish=new Date(l,d+1,u),s.effortDriven=r%5===0}return this.dataset=a,a}handleOnTreeFullToggleEnd(e){console.log("Tree Data changes",e),this.hideSpinner()}handleOnTreeItemToggled(e){this.hasNoExpandCollapseChanged=!1,this.treeToggleItems=e.toggledItems,console.log("Tree Data changes",e)}handleOnGridStateChanged(e){this.hasNoExpandCollapseChanged=!1,e?.change?.type==="treeData"&&(console.log("Tree Data gridStateChange",e?.gridState?.treeData),this.treeToggleItems=e?.gridState?.treeData?.toggledItems)}logTreeDataToggledItems(){console.log(this.aureliaGrid.treeDataService.getToggledItems())}dynamicallyToggledFirstParent(){const e="parentId",i="treeLevel",a=this.dataset.find(l=>l[i]===1),r=this.aureliaGrid.dataView.getItemByIdx(a[e]);a&&r&&this.aureliaGrid.treeDataService.dynamicallyToggleItemState([{itemId:r.id,isCollapsed:!r.__collapsed}])}reapplyToggledItems(){this.aureliaGrid.treeDataService.applyToggledItemStateChanges(this.treeToggleItems)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}Rl=qD();ra=JD(Rl,0,"Example27",Hh,ra);ZD(Rl,1,ra);const eO=Object.freeze(Object.defineProperty({__proto__:null,get Example27(){return ra}},Symbol.toStringTag,{value:"Module"})),Uh="example28",Dr=`<h2>
  <span>
    Example 28: Tree Data with Aggregators
    <small>
      <span class="mdi mdi-file-tree font-27px"></span> (from a Hierarchical Dataset -
      <a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/tree-data-grid" target="_blank">Wiki</a>)</small
    >
  </span>
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example28.ts"
    >
      <span class="mdi mdi-link mdi-v-align-sub"></span> code
    </a>
  </span>
  <button class="ms-2 btn btn-outline-secondary btn-sm btn-icon" type="button" data-test="toggle-subtitle" click.trigger="toggleSubTitle()">
    <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
  </button>
</h2>

<div class="subtitle">
  <ul>
    <li>It is assumed that your dataset will have Parent/Child references AND also Tree Level (indent) property.</li>
    <ul>
      <li>
        If you do not have the Tree Level (indent), you could call "convertParentChildArrayToHierarchicalView()" then call
        "convertHierarchicalViewToParentChildArray()"
      </li>
      <li>
        You could also pass the result of "convertParentChildArrayToHierarchicalView()" to "dataset-hierarchical.bind" as defined in the
        next Hierarchical Example
      </li>
    </ul>
  </ul>
</div>

<div class="row">
  <div class="col-md-7">
    <button click.trigger="addNewFile()" data-test="add-item-btn" class="btn btn-xs btn-icon btn-primary">
      <span class="mdi mdi-plus color-white"></span>
      <span>Add New Pop Song</span>
    </button>
    <button
      click.trigger="deleteFile()"
      data-test="remove-item-btn"
      class="btn btn-outline-secondary btn-xs btn-icon"
      disabled.bind="isRemoveLastInsertedPopSongDisabled"
    >
      <span class="mdi mdi-minus"></span>
      <span>Remove Last Inserted Pop Song</span>
    </button>
    <button click.trigger="collapseAll()" data-test="collapse-all-btn" class="btn btn-outline-secondary btn-xs btn-icon">
      <span class="mdi mdi-arrow-collapse"></span>
      <span>Collapse All</span>
    </button>
    <button click.trigger="expandAll()" data-test="expand-all-btn" class="btn btn-outline-secondary btn-xs btn-icon">
      <span class="mdi mdi-arrow-expand"></span>
      <span>Expand All</span>
    </button>
    <button class="btn btn-outline-secondary btn-xs btn-icon" data-test="clear-filters-btn" click.trigger="clearFilters()">
      <span class="mdi mdi-close"></span>
      <span>Clear Filters</span>
    </button>
    <button click.trigger="logFlatStructure()" class="btn btn-outline-secondary btn-xs btn-icon" title="console.log of the Flat dataset">
      <span>Log Flat Structure</span>
    </button>
    <button
      click.trigger="logHierarchicalStructure()"
      class="btn btn-outline-secondary btn-xs btn-icon"
      title="console.log of the Hierarchical Tree dataset"
    >
      <span>Log Hierarchical Structure</span>
    </button>
  </div>

  <div class="col-md-5">
    <div class="input-group input-group-sm">
      <input
        type="text"
        class="form-control search-string"
        placeholder="search value"
        autocomplete="off"
        data-test="search-string"
        value.bind="searchString"
      />
      <button
        class="btn btn-sm btn-outline-secondary d-flex align-items-center"
        data-test="clear-search-string"
        click.trigger="clearSearch()"
      >
        <span class="icon mdi mdi-close-thick"></span>
      </button>
    </div>
  </div>
</div>

<div>
  <label class="checkbox-inline control-label" for="excludeChildWhenFiltering" style="margin-left: 20px">
    <input
      type="checkbox"
      id="excludeChildWhenFiltering"
      data-test="exclude-child-when-filtering"
      checked.bind="isExcludingChildWhenFiltering"
      click.trigger="changeExcludeChildWhenFiltering()"
    />
    <span
      title="for example if we filter the word 'pop' and we exclude children, then only the folder 'pop' will show up without any content unless we uncheck this flag"
    >
      Exclude Children when Filtering Tree
    </span>
  </label>
  <label class="checkbox-inline control-label" for="autoApproveParentItem" style="margin-left: 20px">
    <input
      type="checkbox"
      id="autoApproveParentItem"
      data-test="auto-approve-parent-item"
      checked.bind="isAutoApproveParentItemWhenTreeColumnIsValid"
      click.trigger="changeAutoApproveParentItem()"
    />
    <span
      title="for example in this demo if we filter with 'music' and size '> 70' nothing will show up unless we have this flag enabled
          because none of the files have both criteria at the same time, however the column with the tree 'file' does pass the filter criteria 'music'
          and with this flag we tell the lib to skip any other filter(s) as soon as the with the tree (file in this demo) passes its own filter criteria"
    >
      Skip Other Filter Criteria when Parent with Tree is valid
    </span>
  </label>
  <label class="checkbox-inline control-label" for="autoRecalcTotalsOnFilterChange" style="margin-left: 20px">
    <input
      type="checkbox"
      id="autoRecalcTotalsOnFilterChange"
      data-test="auto-recalc-totals"
      checked.bind="isAutoRecalcTotalsOnFilterChange"
      click.trigger="changeAutoRecalcTotalsOnFilterChange()"
    />
    <span
      title="Should we recalculate Tree Data Totals (when Aggregators are defined) while filtering? This feature is disabled by default."
    >
      auto-recalc Tree Data totals on filter changed
    </span>
  </label>
</div>

<br />

<div id="grid-container" class="col-sm-12">
  <aurelia-slickgrid
    grid-id="grid28"
    columns.bind="columnDefinitions"
    options.bind="gridOptions"
    dataset-hierarchical.bind="datasetHierarchical"
    instances.bind="aureliaGrid"
  >
  </aurelia-slickgrid>
</div>
`,qh=[],Yh={};let vn;function tO(t){vn||(vn=E.define({name:Uh,template:Dr,dependencies:qh,bindables:Yh})),t.register(vn)}const iO=Object.freeze(Object.defineProperty({__proto__:null,bindables:Yh,default:Dr,dependencies:qh,name:Uh,register:tO,template:Dr},Symbol.toStringTag,{value:"Module"}));var aO=Object.create,Ll=Object.defineProperty,nO=Object.getOwnPropertyDescriptor,rO=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),fi=t=>{throw TypeError(t)},Kh=(t,e,i)=>e in t?Ll(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,$d=(t,e)=>Ll(t,"name",{value:e,configurable:!0}),oO=t=>[,,,aO(null)],Qh=["class","method","getter","setter","accessor","field","value","get","set"],qt=t=>t!==void 0&&typeof t!="function"?fi("Function expected"):t,lO=(t,e,i,n,a)=>({kind:Qh[t],name:e,metadata:n,addInitializer:r=>i._?fi("Already initialized"):a.push(qt(r||null))}),sO=(t,e)=>Kh(e,rO("metadata"),t[3]),Or=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)e&1?r[a].call(i):n=r[a].call(i,n);return n},Zh=(t,e,i,n,a,r)=>{var l,d,u,s,m,o=e&7,g=!!(e&8),c=!!(e&16),p=o>3?t.length+1:o?g?1:2:0,_=Qh[o+5],w=o>3&&(t[p-1]=[]),x=t[p]||(t[p]=[]),b=o&&(!c&&!g&&(a=a.prototype),o<5&&(o>3||!c)&&nO(o<4?a:{get[i](){return kd(this,r)},set[i](h){return Dd(this,r,h)}},i));o?c&&o<4&&$d(r,(o>2?"set ":o>1?"get ":"")+i):$d(a,i);for(var y=n.length-1;y>=0;y--)s=lO(o,i,u={},t[3],x),o&&(s.static=g,s.private=c,m=s.access={has:c?h=>dO(a,h):h=>i in h},o^3&&(m.get=c?h=>(o^1?kd:cO)(h,a,o^4?r:b.get):h=>h[i]),o>2&&(m.set=c?(h,S)=>Dd(h,a,S,o^4?r:b.set):(h,S)=>h[i]=S)),d=(0,n[y])(o?o<4?c?r:b[_]:o>4?void 0:{get:b.get,set:b.set}:a,s),u._=1,o^4||d===void 0?qt(d)&&(o>4?w.unshift(d):o?c?r=d:b[_]=d:a=d):typeof d!="object"||d===null?fi("Object expected"):(qt(l=d.get)&&(b.get=l),qt(l=d.set)&&(b.set=l),qt(l=d.init)&&w.unshift(l));return o||sO(t,a),b&&Ll(a,i,b),c?o^4?r:b:a},q=(t,e,i)=>Kh(t,typeof e!="symbol"?e+"":e,i),zl=(t,e,i)=>e.has(t)||fi("Cannot "+i),dO=(t,e)=>Object(e)!==e?fi('Cannot use the "in" operator on this value'):t.has(e),kd=(t,e,i)=>(zl(t,e,"read from private field"),i?i.call(t):e.get(t)),Dd=(t,e,i,n)=>(zl(t,e,"write to private field"),n?n.call(t,i):e.set(t,i),i),cO=(t,e,i)=>(zl(t,e,"access private method"),i),Jh,Xh,yt;Xh=[T(iO)],Jh=[D()];class ii{constructor(){q(this,"aureliaGrid"),q(this,"gridOptions"),q(this,"columnDefinitions",[]),q(this,"datasetHierarchical",[]),q(this,"hideSubTitle",!1),q(this,"isExcludingChildWhenFiltering",!1),q(this,"isAutoApproveParentItemWhenTreeColumnIsValid",!0),q(this,"isAutoRecalcTotalsOnFilterChange",!1),q(this,"isRemoveLastInsertedPopSongDisabled",!0),q(this,"lastInsertedPopSongId"),q(this,"searchString",Or(yt,8,this,"")),Or(yt,11,this),q(this,"treeFormatter",(e,i,n,a,r,l)=>{const d=l.getOptions(),u=d.treeDataOptions&&d.treeDataOptions.levelPropName||"__treeLevel";if(n==null||r===void 0)return"";const s=l.getData(),m=s.getItems(),o=s.getIdPropertyName()||"id",g=s.getIdxById(r[o]),c=this.getFileIcon(n),p=r[u],_=".";n=n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");const w=`<span style="display:inline-block; width:${15*p}px;"></span>`,x=xv(5*p);if(m[g+1]?.[u]>m[g][u]||m[g].__hasChildren){const b=`<span class="mdi icon ${r.__collapsed?"mdi-folder":"mdi-folder-open"}"></span>`;return r.__collapsed?`<span class="hidden">${_}</span>${w}${x} <span class="slick-group-toggle collapsed" level="${p}"></span>${b} ${c} ${n}`:`<span class="hidden">${_}</span>${w}${x} <span class="slick-group-toggle expanded" level="${p}"></span>${b} ${c} ${n}`}else return`<span class="hidden">${_}</span>${w}${x} <span class="slick-group-toggle" level="${p}"></span>${c} ${n}`}),this.defineGrid()}attached(){this.datasetHierarchical=this.mockDataset()}defineGrid(){this.columnDefinitions=[{id:"file",name:"Files",field:"file",width:150,formatter:this.treeFormatter.bind(this),filterable:!0,sortable:!0},{id:"dateModified",name:"Date Modified",field:"dateModified",formatter:f.dateIso,type:"dateUtc",outputType:"dateIso",minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:v.compoundDate}},{id:"description",name:"Description",field:"description",minWidth:90,filterable:!0,sortable:!0},{id:"size",name:"Size",field:"size",minWidth:90,type:"number",exportWithFormatter:!0,excelExportOptions:{autoDetectCellFormat:!1},filterable:!0,filter:{model:v.compoundInputNumber},formatter:(e,i,n,a,r)=>{const l=a.field;if(r?.__treeTotals!==void 0){const d=r[this.gridOptions?.treeDataOptions?.levelPropName||"__treeLevel"],u=r?.__treeTotals?.sum[l],s=r?.__treeTotals?.avg[l];if(s!==void 0&&u!==void 0)return isNaN(u)?"":`<span class="text-primary bold">sum: ${Pa(u,0,2)} MB</span> / <span class="avg-total">avg: ${Pa(s,0,2)} MB</span> <span class="total-suffix">(${d===0?"total":"sub-total"})</span>`;if(u!==void 0)return isNaN(u)?"":`<span class="text-primary bold">sum: ${Pa(u,0,2)} MB</span> <span class="total-suffix">(${d===0?"total":"sub-total"})</span>`}return wv(n)?`${n} MB`:""}}],this.gridOptions={autoResize:{autoHeight:!1,container:"#demo-container",rightPadding:10},enableAutoSizeColumns:!0,enableAutoResize:!0,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!0,sanitizeDataExport:!0},externalResources:[new G],enableFiltering:!0,enableTreeData:!0,multiColumnSort:!1,treeDataOptions:{columnId:"file",childrenPropName:"files",excludeChildrenWhenFilteringTree:this.isExcludingChildWhenFiltering,autoApproveParentItemWhenTreeColumnIsValid:this.isAutoApproveParentItemWhenTreeColumnIsValid,aggregators:[new k.Avg("size"),new k.Sum("size")],autoRecalcTotalsOnFilterChange:this.isAutoRecalcTotalsOnFilterChange},headerRowHeight:35,rowHeight:33,showCustomFooter:!0,presets:{treeData:{toggledItems:[{itemId:4,isCollapsed:!0}]}}}}changeAutoApproveParentItem(){return this.isAutoApproveParentItemWhenTreeColumnIsValid=!this.isAutoApproveParentItemWhenTreeColumnIsValid,this.gridOptions.treeDataOptions.autoApproveParentItemWhenTreeColumnIsValid=this.isAutoApproveParentItemWhenTreeColumnIsValid,this.aureliaGrid.slickGrid.setOptions(this.gridOptions),this.aureliaGrid.filterService.refreshTreeDataFilters(),!0}changeAutoRecalcTotalsOnFilterChange(){return this.isAutoRecalcTotalsOnFilterChange=!this.isAutoRecalcTotalsOnFilterChange,this.gridOptions.treeDataOptions.autoRecalcTotalsOnFilterChange=this.isAutoRecalcTotalsOnFilterChange,this.aureliaGrid.slickGrid?.setOptions(this.gridOptions),this.aureliaGrid.filterService.clearFilters(),this.aureliaGrid.treeDataService.enableAutoRecalcTotalsFeature(),!0}changeExcludeChildWhenFiltering(){return this.isExcludingChildWhenFiltering=!this.isExcludingChildWhenFiltering,this.gridOptions.treeDataOptions.excludeChildrenWhenFilteringTree=this.isExcludingChildWhenFiltering,this.aureliaGrid.slickGrid.setOptions(this.gridOptions),this.aureliaGrid.filterService.refreshTreeDataFilters(),!0}clearSearch(){this.searchString=""}searchStringChanged(){this.updateFilter()}updateFilter(){this.aureliaGrid.filterService.updateFilters([{columnId:"file",searchTerms:[this.searchString]}],!0,!1,!0)}getFileIcon(e){let i="";return e.includes(".pdf")?i='<span class="mdi icon mdi-file-pdf-outline"></span>':e.includes(".txt")?i='<span class="mdi icon mdi-file-document-outline"></span>':e.includes(".xls")?i='<span class="mdi icon mdi-file-excel-outline"></span>':e.includes(".mp3")&&(i='<span class="mdi icon mdi-file-music-outline"></span>'),i}addNewFile(){const e=this.aureliaGrid.dataView.getLength()+50,i=[...this.datasetHierarchical],n=Ia(i,a=>a.file==="pop","files");n&&Array.isArray(n.files)&&(n.files.push({id:e,file:`pop-${e}.mp3`,dateModified:new Date,size:e+3}),this.lastInsertedPopSongId=e,this.isRemoveLastInsertedPopSongDisabled=!1,this.datasetHierarchical=i,setTimeout(()=>{const a=this.aureliaGrid.dataView.getRowById(n.id);this.aureliaGrid.slickGrid.scrollRowIntoView(a+3)},10))}deleteFile(){const e=[...this.datasetHierarchical],i=Ia(this.datasetHierarchical,a=>a.file==="pop","files"),n=Ia(this.datasetHierarchical,a=>a.id===this.lastInsertedPopSongId,"files");if(i&&n){const a=i.files.findIndex(r=>r.id===n.id);a>=0&&(i.files.splice(a,1),this.lastInsertedPopSongId=void 0,this.isRemoveLastInsertedPopSongDisabled=!0,this.datasetHierarchical=e)}}clearFilters(){this.aureliaGrid.filterService.clearFilters()}collapseAll(){this.aureliaGrid.treeDataService.toggleTreeDataCollapse(!0)}expandAll(){this.aureliaGrid.treeDataService.toggleTreeDataCollapse(!1)}logHierarchicalStructure(){console.log("exploded array",this.aureliaGrid.treeDataService.datasetHierarchical)}logFlatStructure(){console.log("flat array",this.aureliaGrid.treeDataService.dataset)}mockDataset(){return[{id:24,file:"bucket-list.txt",dateModified:"2012-03-05T12:44:00.123Z",size:.5},{id:18,file:"something.txt",dateModified:"2015-03-03T03:50:00.123Z",size:90},{id:21,file:"documents",files:[{id:2,file:"txt",files:[{id:3,file:"todo.txt",description:"things to do someday maybe",dateModified:"2015-05-12T14:50:00.123Z",size:.7}]},{id:4,file:"pdf",files:[{id:22,file:"map2.pdf",dateModified:"2015-07-21T08:22:00.123Z",size:2.9},{id:5,file:"map.pdf",dateModified:"2015-05-21T10:22:00.123Z",size:3.1},{id:6,file:"internet-bill.pdf",dateModified:"2015-05-12T14:50:00.123Z",size:1.3},{id:23,file:"phone-bill.pdf",dateModified:"2015-05-01T07:50:00.123Z",size:1.5}]},{id:9,file:"misc",files:[{id:10,file:"warranties.txt",dateModified:"2015-02-26T16:50:00.123Z",size:.4}]},{id:7,file:"xls",files:[{id:8,file:"compilation.xls",dateModified:"2014-10-02T14:50:00.123Z",size:2.3}]},{id:55,file:"unclassified.csv",dateModified:"2015-04-08T03:44:12.333Z",size:.25},{id:56,file:"unresolved.csv",dateModified:"2015-04-03T03:21:12.000Z",size:.79},{id:57,file:"zebra.dll",dateModified:"2016-12-08T13:22:12.432",size:1.22}]},{id:11,file:"music",files:[{id:12,file:"mp3",files:[{id:16,file:"rock",files:[{id:17,file:"soft.mp3",dateModified:"2015-05-13T13:50:00Z",size:98}]},{id:14,file:"pop",files:[{id:15,file:"theme.mp3",description:"Movie Theme Song",dateModified:"2015-03-01T17:05:00Z",size:47},{id:25,file:"song.mp3",description:"it is a song...",dateModified:"2016-10-04T06:33:44Z",size:6.3}]},{id:33,file:"other",files:[]}]}]},{id:26,file:"recipes",description:"Cake Recipes",dateModified:"2012-03-05T12:44:00.123Z",files:[{id:29,file:"cheesecake",description:"strawberry cheesecake",dateModified:"2012-04-04T13:52:00.123Z",size:.2},{id:30,file:"chocolate-cake",description:"tasty sweet chocolate cake",dateModified:"2012-05-05T09:22:00.123Z",size:.2},{id:31,file:"coffee-cake",description:"chocolate coffee cake",dateModified:"2012-01-01T08:08:48.123Z",size:.2}]}]}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}yt=oO();Zh(yt,5,"searchString",Jh,ii);ii=Zh(yt,0,"Example28",Xh,ii);Or(yt,1,ii);const uO=Object.freeze(Object.defineProperty({__proto__:null,get Example28(){return ii}},Symbol.toStringTag,{value:"Module"}));var mO=Object.create,Nl=Object.defineProperty,pO=Object.getOwnPropertyDescriptor,hO=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),eg=t=>{throw TypeError(t)},tg=(t,e,i)=>e in t?Nl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,gO=(t,e)=>Nl(t,"name",{value:e,configurable:!0}),bO=t=>[,,,mO(null)],fO=["class","method","getter","setter","accessor","field","value","get","set"],ig=t=>t!==void 0&&typeof t!="function"?eg("Function expected"):t,vO=(t,e,i,n,a)=>({kind:fO[t],name:e,metadata:n,addInitializer:r=>i._?eg("Already initialized"):a.push(ig(r||null))}),_O=(t,e)=>tg(e,hO("metadata"),t[3]),yO=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},SO=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&pO(a,i));gO(a,i);for(var p=n.length-1;p>=0;p--)u=vO(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,ig(l)&&(a=l);return _O(t,a),c&&Nl(a,i,c),m?s^4?r:c:a},CO=(t,e,i)=>tg(t,e+"",i),ag,Wl;ag=[T({name:"custom-footer",template:`<button click.trigger="clickMe()">I'm a button from an Aurelia custom element (click me)</button>
  <div if.bind="clickedTimes">You've clicked me \${clickedTimes} time(s)</div>`})];class oa{constructor(){CO(this,"clickedTimes",0)}clickMe(){this.clickedTimes++}}Wl=bO();oa=SO(Wl,0,"CustomFooter",ag,oa);yO(Wl,1,oa);const wO=Object.freeze(Object.defineProperty({__proto__:null,get CustomFooter(){return oa}},Symbol.toStringTag,{value:"Module"})),ng="example29",Mr=`
<h2>
  Example 29: Grid with Header and Footer slot
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example29.ts"
    >
      <span class="mdi mdi-link-variant"></span> code
    </a>
  </span>
  <button class="ms-2 btn btn-outline-secondary btn-sm btn-icon" type="button" data-test="toggle-subtitle" click.trigger="toggleSubTitle()">
    <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
  </button>
</h2>

<div class="subtitle">Simple Grids with a custom header and footer via named slots</div>

<aurelia-slickgrid grid-id="grid" columns.bind="columnDefinitions" options.bind="gridOptions" dataset.bind="dataset">
  <div au-slot="slickgrid-header" class="custom-header-slot">
    <h3>Grid with header and footer slot</h3>
  </div>
  <custom-footer class="custom-footer-slot" au-slot="slickgrid-footer"> </custom-footer>
</aurelia-slickgrid>
`,rg=[wO],og={};let _n;function xO(t){_n||(_n=E.define({name:ng,template:Mr,dependencies:rg,bindables:og})),t.register(_n)}const TO=Object.freeze(Object.defineProperty({__proto__:null,bindables:og,default:Mr,dependencies:rg,name:ng,register:xO,template:Mr},Symbol.toStringTag,{value:"Module"}));var EO=Object.create,Bl=Object.defineProperty,$O=Object.getOwnPropertyDescriptor,kO=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),lg=t=>{throw TypeError(t)},sg=(t,e,i)=>e in t?Bl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,DO=(t,e)=>Bl(t,"name",{value:e,configurable:!0}),OO=t=>[,,,EO(null)],MO=["class","method","getter","setter","accessor","field","value","get","set"],dg=t=>t!==void 0&&typeof t!="function"?lg("Function expected"):t,PO=(t,e,i,n,a)=>({kind:MO[t],name:e,metadata:n,addInitializer:r=>i._?lg("Already initialized"):a.push(dg(r||null))}),IO=(t,e)=>sg(e,kO("metadata"),t[3]),GO=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},FO=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&$O(a,i));DO(a,i);for(var p=n.length-1;p>=0;p--)u=PO(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,dg(l)&&(a=l);return IO(t,a),c&&Bl(a,i,c),m?s^4?r:c:a},ki=(t,e,i)=>sg(t,typeof e!="symbol"?e+"":e,i),cg,jl;const AO=995;cg=[T(TO)];class la{constructor(){ki(this,"gridOptions"),ki(this,"columnDefinitions",[]),ki(this,"dataset",[]),ki(this,"hideSubTitle",!1),this.defineGrids()}attached(){this.dataset=this.mockData(AO)}defineGrids(){this.columnDefinitions=[{id:"title",name:"Title",field:"title",sortable:!0,minWidth:100},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,minWidth:100},{id:"%",name:"% Complete",field:"percentComplete",sortable:!0,minWidth:100},{id:"start",name:"Start",field:"start",formatter:f.dateIso},{id:"finish",name:"Finish",field:"finish",formatter:f.dateIso},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",sortable:!0,minWidth:100}],this.gridOptions={enableAutoResize:!1,enableSorting:!0,gridHeight:225,gridWidth:800}}mockData(e){const i=[];for(let n=0;n<e;n++){const a=2e3+Math.floor(Math.random()*10),r=Math.floor(Math.random()*11),l=Math.floor(Math.random()*29),d=Math.round(Math.random()*100);i[n]={id:n,title:"Task "+n,duration:Math.round(Math.random()*100)+"",percentComplete:d,start:new Date(a,r+1,l),finish:new Date(a+1,r+1,l),effortDriven:n%5===0}}return i}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden")}}jl=OO();la=FO(jl,0,"Example29",cg,la);GO(jl,1,la);const RO=Object.freeze(Object.defineProperty({__proto__:null,get Example29(){return la}},Symbol.toStringTag,{value:"Module"})),ug="example30",Pr=`<h2>
  Example 30: Composite Editor Modal
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example30.ts"
    >
      <span class="mdi mdi-link-variant"></span> code
    </a>
  </span>
  <button class="ms-2 btn btn-outline-secondary btn-sm btn-icon" type="button" data-test="toggle-subtitle" click.trigger="toggleSubTitle()">
    <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
  </button>
  <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="toggleDarkMode()" data-test="toggle-dark-mode">
    <i class="mdi mdi-theme-light-dark"></i>
    <span>Toggle Dark Mode</span>
  </button>
</h2>

<div class="subtitle">
  Composite Editor allows you to Create, Clone, Edit, Mass Update & Mass Selection Changes inside a nice Modal Window.
  <br />The modal is simply populated by looping through your column definition list and also uses a lot of the same logic as inline editing
  (see
  <a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/composite-editor-modal" target="_blank"
    >Composite Editor - Wiki</a
  >.)
</div>

<div class="mb-2">
  <div class="btn-group btn-group-sm" role="group" aria-label="Basic Editing Commands">
    <button
      type="button"
      class="btn btn-outline-secondary btn-icon"
      data-test="toggle-readonly-btn"
      click.trigger="toggleGridEditReadonly()"
    >
      <i class="mdi mdi-table-edit"></i> Toggle Edit/Readonly Grid
    </button>
    <button type="button" class="btn btn-outline-secondary btn-icon" data-test="undo-last-edit-btn" click.trigger="undoLastEdit()">
      <i class="mdi mdi-undo"></i> Undo Last Edit
    </button>
    <button type="button" class="btn btn-outline-secondary btn-icon" data-test="undo-open-editor-btn" click.trigger="undoLastEdit(true)">
      <i class="mdi mdi-undo"></i> Undo Last Edit &amp; Open Editor
    </button>
    <button type="button" class="btn btn-outline-secondary btn-icon" data-test="undo-all-edits-btn" click.trigger="undoAllEdits()">
      <i class="mdi mdi-history"></i> Undo All Edits
    </button>
    <button type="button" class="btn btn-outline-secondary btn-icon" data-test="save-all-btn" click.trigger="saveAll()">
      <span>Save All</span>
    </button>
  </div>
</div>

<div class="mb-3">
  <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
    <button
      type="button"
      class="btn btn-outline-secondary btn-icon"
      data-test="open-modal-create-btn"
      click.trigger="openCompositeModal('create')"
      disabled.bind="isCompositeDisabled"
    >
      <i class="mdi mdi-shape-square-plus"></i> Item Create
    </button>
    <button
      type="button"
      class="btn btn-outline-secondary btn-icon"
      data-test="open-modal-clone-btn"
      click.trigger="openCompositeModal('clone')"
      disabled.bind="isCompositeDisabled"
    >
      <i class="mdi mdi-content-copy"></i> Item Clone
    </button>
    <button
      type="button"
      class="btn btn-outline-secondary btn-icon"
      data-test="open-modal-edit-btn"
      click.trigger="openCompositeModal('edit')"
      disabled.bind="isCompositeDisabled"
    >
      <i class="mdi mdi-pencil"></i> Item Edit
    </button>
    <button
      type="button"
      class="btn btn-outline-secondary btn-icon"
      data-test="open-modal-mass-update-btn"
      click.trigger="openCompositeModal('mass-update')"
      disabled.bind="isCompositeDisabled"
    >
      <i class="mdi mdi-pencil-box-multiple-outline"></i> Mass Update
    </button>
    <button
      type="button"
      class="btn btn-outline-secondary btn-icon"
      data-test="open-modal-mass-selection-btn"
      click.trigger="openCompositeModal('mass-selection')"
      disabled.bind="isMassSelectionDisabled"
    >
      <i class="mdi mdi-check-box-outline"></i> Update Selected
    </button>
  </div>
</div>

<aurelia-slickgrid
  grid-id="grid30"
  columns.bind="columnDefinitions"
  options.bind="gridOptions"
  dataset.bind="dataset"
  on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
  on-before-edit-cell.trigger="handleOnBeforeEditCell($event.detail.eventData, $event.detail.args)"
  on-cell-change.trigger="handleOnCellChange($event.detail.eventData, $event.detail.args)"
  on-click.trigger="handleOnCellClicked($event.detail.eventData, $event.detail.args)"
  on-composite-editor-change.trigger="handleOnCompositeEditorChange($event.detail.eventData, $event.detail.args)"
  on-items-deleted.trigger="handleItemDeleted($event.detail)"
  on-grid-state-changed.trigger="handleOnGridStateChanged($event.detail)"
  on-rows-or-count-changed.trigger="handleReRenderUnsavedStyling()"
  on-validation-error.trigger="handleValidationError($event.detail.eventData, $event.detail.args)"
>
</aurelia-slickgrid>
`,mg=[],pg={};let yn;function LO(t){yn||(yn=E.define({name:ug,template:Pr,dependencies:mg,bindables:pg})),t.register(yn)}const zO=Object.freeze(Object.defineProperty({__proto__:null,bindables:pg,default:Pr,dependencies:mg,name:ug,register:LO,template:Pr},Symbol.toStringTag,{value:"Module"}));var NO=Object.create,Vl=Object.defineProperty,WO=Object.getOwnPropertyDescriptor,BO=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),hg=t=>{throw TypeError(t)},gg=(t,e,i)=>e in t?Vl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,jO=(t,e)=>Vl(t,"name",{value:e,configurable:!0}),VO=t=>[,,,NO(null)],HO=["class","method","getter","setter","accessor","field","value","get","set"],bg=t=>t!==void 0&&typeof t!="function"?hg("Function expected"):t,UO=(t,e,i,n,a)=>({kind:HO[t],name:e,metadata:n,addInitializer:r=>i._?hg("Already initialized"):a.push(bg(r||null))}),qO=(t,e)=>gg(e,BO("metadata"),t[3]),YO=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},KO=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&WO(a,i));jO(a,i);for(var p=n.length-1;p>=0;p--)u=UO(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,bg(l)&&(a=l);return qO(t,a),c&&Vl(a,i,c),m?s^4?r:c:a},N=(t,e,i)=>gg(t,typeof e!="symbol"?e+"":e,i),fg,Hl;const QO=500;function ZO(t,e,i){const n=i?.getOptions(),a=e.editor;let l=!!(n.editable&&a);return t&&e&&n?.editable&&e.id==="finish"&&(l=!!t?.completed),l}const JO=(t,e,i,n,a,r)=>{const d=r.getOptions().editable&&n.editor;return i=i??"",d?{text:i,addClasses:"editable-field",toolTip:"Click to Edit"}:i},XO=(t,e)=>(t==null||!t.length)&&(e.compositeEditorOptions&&e.compositeEditorOptions.modalType==="create"||e.compositeEditorOptions.modalType==="edit")?{valid:!1,msg:"This is a required field."}:/^(task\s\d+)*$/i.test(t)?{valid:!0,msg:""}:{valid:!1,msg:'Your title is invalid, it must start with "Task" followed by a number.'};fg=[T(zO)];class sa{constructor(e=O(_e(ye))){this.http=e,N(this,"_darkMode",!1),N(this,"aureliaGrid"),N(this,"compositeEditorInstance"),N(this,"gridOptions"),N(this,"columnDefinitions",[]),N(this,"dataset",[]),N(this,"editQueue",[]),N(this,"editedItems",{}),N(this,"hideSubTitle",!1),N(this,"isGridEditable",!0),N(this,"isCompositeDisabled",!1),N(this,"isMassSelectionDisabled",!0),N(this,"cellCssStyleQueue",[]),N(this,"complexityLevelList",[{value:0,label:"Very Simple"},{value:1,label:"Simple"},{value:2,label:"Straightforward"},{value:3,label:"Complex"},{value:4,label:"Very Complex"}]),this.compositeEditorInstance=new Tv}created(){this.defineGrids()}attached(){this.dataset=this.loadData(QO)}detaching(){document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light"}defineGrids(){this.columnDefinitions=[{id:"title",name:'<span title="Task must always be followed by a number" class="text-warning mdi mdi-alert-outline"></span> Title <span title="Title is always rendered as UPPERCASE" class="mdi mdi-information-outline"></span>',field:"title",sortable:!0,minWidth:75,cssClass:"text-uppercase fw-bold",columnGroup:"Common Factor",filterable:!0,filter:{model:v.compoundInputText},editor:{model:C.longText,massUpdate:!1,compositeEditorFormOrder:0,required:!0,alwaysSaveOnEnterKey:!0,maxLength:12,options:{cols:45,rows:6,buttonTexts:{cancel:"Close",save:"Done"}},validator:XO}},{id:"duration",name:"Duration",field:"duration",sortable:!0,filterable:!0,minWidth:75,type:"number",columnGroup:"Common Factor",formatter:(e,i,n)=>n==null||n===""?"":n>1?`${n} days`:`${n} day`,editor:{model:C.float,compositeEditorFormOrder:2,massUpdate:!0,decimal:2,valueStep:1,minValue:0,maxValue:1e4,alwaysSaveOnEnterKey:!0,required:!0}},{id:"cost",name:"Cost",field:"cost",width:90,minWidth:70,sortable:!0,filterable:!0,type:"number",columnGroup:"Analysis",filter:{model:v.compoundInputNumber},formatter:f.dollar},{id:"percentComplete",name:"% Complete",field:"percentComplete",minWidth:100,type:"number",sortable:!0,filterable:!0,columnGroup:"Analysis",filter:{model:v.compoundSlider,operator:">="},editor:{model:C.slider,massUpdate:!0,compositeEditorFormOrder:1,minValue:0,maxValue:100},customTooltip:{position:"center"}},{id:"complexity",name:"Complexity",field:"complexity",minWidth:100,type:"number",sortable:!0,filterable:!0,columnGroup:"Analysis",formatter:(e,i,n)=>this.complexityLevelList[n]?.label,exportCustomFormatter:(e,i,n)=>this.complexityLevelList[n]?.label,filter:{model:v.multipleSelect,collection:this.complexityLevelList,options:{showClear:!0}},editor:{model:C.singleSelect,collection:this.complexityLevelList,massUpdate:!0}},{id:"start",name:"Start",field:"start",sortable:!0,minWidth:100,formatter:f.dateUs,columnGroup:"Period",exportCustomFormatter:f.dateUs,type:"date",outputType:"dateUs",saveOutputType:"dateUtc",filterable:!0,filter:{model:v.compoundDate},editor:{model:C.date,massUpdate:!0,options:{hideClearButton:!1}}},{id:"completed",name:"Completed",field:"completed",width:80,minWidth:75,maxWidth:100,sortable:!0,filterable:!0,columnGroup:"Period",cssClass:"text-center",formatter:f.checkmarkMaterial,exportWithFormatter:!1,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:v.singleSelect,options:{showClear:!0}},editor:{model:C.checkbox,massUpdate:!0}},{id:"finish",name:"Finish",field:"finish",sortable:!0,minWidth:100,formatter:f.dateUs,columnGroup:"Period",type:"date",outputType:"dateUs",saveOutputType:"dateUtc",filterable:!0,filter:{model:v.compoundDate},exportCustomFormatter:f.dateUs,editor:{model:C.date,options:{displayDateMin:"today"},massUpdate:!0,validator:(e,i)=>{const n=i?.item;return n&&n.completed&&!e?{valid:!1,msg:'You must provide a "Finish" date when "Completed" is checked.'}:{valid:!0,msg:""}}}},{id:"product",name:"Product",field:"product",filterable:!0,columnGroup:"Item",minWidth:100,exportWithFormatter:!0,dataKey:"id",labelKey:"itemName",formatter:f.complexObject,exportCustomFormatter:f.complex,type:"object",sortComparer:re.objectString,editor:{model:C.autocompleter,alwaysSaveOnEnterKey:!0,massUpdate:!0,options:{minLength:1,fetch:(e,i)=>{const n=this.mockProducts();i(n.filter(a=>a.itemName.toLowerCase().includes(e.toLowerCase())))},renderItem:{layout:"fourCorners",templateCallback:e=>this.renderItemCallbackWith4Corners(e)}}},filter:{model:v.inputText,type:"string",queryField:"product.itemName"}},{id:"origin",name:"Country of Origin",field:"origin",formatter:f.complexObject,columnGroup:"Item",exportCustomFormatter:f.complex,dataKey:"code",labelKey:"name",type:"object",sortComparer:re.objectString,filterable:!0,sortable:!0,minWidth:100,editor:{model:C.autocompleter,massUpdate:!0,customStructure:{label:"name",value:"code"},collectionAsync:this.http.fetch(Ri),options:{minLength:0}},filter:{model:v.inputText,type:"string",queryField:"origin.name"}},{id:"action",name:"Action",field:"action",width:70,minWidth:70,maxWidth:70,excludeFromExport:!0,formatter:()=>'<div class="button-style margin-auto" style="width: 35px;"><span class="mdi mdi-chevron-down text-primary"></span></div>',cellMenu:{hideCloseButton:!1,commandTitle:"Commands",commandItems:[{command:"edit",title:"Edit Row",iconCssClass:"mdi mdi-pencil",positionOrder:66,action:()=>this.openCompositeModal("edit")},{command:"clone",title:"Clone Row",iconCssClass:"mdi mdi-content-copy",positionOrder:66,action:()=>this.openCompositeModal("clone")},"divider",{command:"delete-row",title:"Delete Row",positionOrder:64,iconCssClass:"mdi mdi-close color-danger",cssClass:"red",textCssClass:"text-italic color-danger-light",itemVisibilityOverride:e=>!e.dataContext?.completed,action:(e,i)=>{const n=i.dataContext,a=i?.row??0;confirm(`Do you really want to delete row (${a+1}) with "${n.title}"`)&&this.aureliaGrid.gridService.deleteItemById(n.id)}}]}}],this.gridOptions={enableAddRow:!0,enableCellNavigation:!0,asyncEditorLoading:!1,autoEdit:!0,autoCommitEdit:!0,editable:!0,autoAddCustomEditorFormatter:JO,autoResize:{container:"#demo-container",rightPadding:10},darkMode:this._darkMode,enableAutoSizeColumns:!0,enableAutoResize:!0,showCustomFooter:!0,enablePagination:!0,pagination:{pageSize:10,pageSizes:[10,200,250,500,5e3]},enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!1},externalResources:[new G,new oi,this.compositeEditorInstance],enableFiltering:!0,selectionOptions:{selectActiveRow:!1},createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:28,enableCheckboxSelector:!0,enableSelection:!0,multiSelect:!1,checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},enableCompositeEditor:!0,editCommandHandler:(e,i,n)=>{const a=Array.isArray(n.prevSerializedValue)?n.prevSerializedValue:[n.prevSerializedValue],r=Array.isArray(n.serializedValue)?n.serializedValue:[n.serializedValue],l=this.columnDefinitions.filter(u=>u.editor!==void 0),d=[];a.forEach((u,s)=>{const m=a[s],o=r[s];if(m!==o||o===""){const g=Array.isArray(n.prevSerializedValue)?l[s]:i;this.editedItems[this.gridOptions.datasetIdPropertyName||"id"]=e,this.aureliaGrid.slickGrid.invalidate(),n.execute(),this.renderUnsavedCellStyling(e,g,n),d.push(g)}}),this.editQueue.push({item:e,columns:d,editCommand:n})},enableCellMenu:!0,cellMenu:{activateCellOnMenuClick:!0},gridMenu:{hideToggleDarkModeCommand:!1,onCommand:(e,i)=>{i.command==="toggle-dark-mode"&&(this._darkMode=!this._darkMode,this.toggleBodyBackground())}}}}loadData(e){const i=[];for(let n=0;n<e;n++){const a=Math.floor(Math.random()*this.mockProducts().length),r=2e3+Math.floor(Math.random()*10),l=new Date().getFullYear()+Math.floor(Math.random()*10),d=Math.floor(Math.random()*11),u=Math.floor(Math.random()*29),s=Math.floor(Math.random()*59),m=new Date(l,d+1,u,s,s,s),o=Math.floor(Math.random()*100)+15,g=o>100?n>5?100:88:o,c=g===100;i[n]={id:n,title:"Task "+n,duration:Math.floor(Math.random()*100)+10,percentComplete:g,analysis:{percentComplete:g},complexity:n%3?0:2,start:new Date(r,d,u,u,s,s,s),finish:c||n%3===0&&m>new Date&&n>3?c?new Date:m:"",cost:n%33===0?null:Math.round(Math.random()*1e4)/100,completed:c&&n>5||n%3===0&&m>new Date&&n>3,product:{id:this.mockProducts()[a]?.id,itemName:this.mockProducts()[a]?.itemName},origin:n%2?{code:"CA",name:"Canada"}:{code:"US",name:"United States"}},n%8||(delete i[n].finish,delete i[n].percentComplete)}return i}aureliaGridReady(e){this.aureliaGrid=e}handleValidationError(e,i){if(i.validationResults){let n=i.validationResults.msg||"";if(i.editor&&i.editor instanceof Ev){if(i.validationResults.errors){n+=`
`;for(const a of i.validationResults.errors){const r=a.editor.args.column.name;n+=`${r.toUpperCase()}: ${a.msg}`}}console.log(n)}}else alert(i.validationResults.msg);return e.preventDefault(),!1}handleItemDeleted(e){console.log("item deleted with ids:",e)}handleOnBeforeEditCell(e,i){const{column:n,item:a,grid:r}=i;return n&&a&&!ZO(a,n,r)?(e.preventDefault(),!1):!0}handleOnCellChange(e,i){const n=i?.item;n&&!n.completed&&(n.finish=null,this.aureliaGrid.gridService.updateItem(n))}handleOnCellClicked(e,i){console.log(e,i)}handleOnCompositeEditorChange(e,i){const n=i.column,a=i.formValues;n.id==="percentComplete"&&a.percentComplete===100&&(this.compositeEditorInstance.changeFormInputValue("completed",!0),this.compositeEditorInstance.changeFormInputValue("finish",new Date))}handleReRenderUnsavedStyling(){this.removeAllUnsavedStylingFromCell(),this.renderUnsavedStylingOnAllVisibleCells()}handleOnGridStateChanged(e){Array.isArray(e.gridState?.rowSelection?.dataContextIds)&&(this.isMassSelectionDisabled=e.gridState?.rowSelection?.dataContextIds.length===0)}openCompositeModal(e){let i="";switch(e){case"create":i="Inserting New Task";break;case"clone":i="Clone - {{title}}";break;case"edit":i='Editing - {{title}} (<span class="text-muted">id:</span> <span class="text-primary">{{id}}</span>)';break;case"mass-update":i="Mass Update All Records";break;case"mass-selection":i="Update Selected Records";break}this.compositeEditorInstance?.openDetails({headerTitle:i,modalType:e,insertOptions:{highlightRow:!1},showFormResetButton:!0,resetFormButtonIconCssClass:"mdi mdi-undo",onClose:()=>Promise.resolve(confirm("You have unsaved changes, are you sure you want to close this window?")),onError:n=>alert(n.message),onRendered:n=>{n.dataset.bsTheme=this._darkMode?"dark":"light"},onSave:(n,a,r)=>e==="mass-update"||e==="mass-selection"?new Promise((d,u)=>{setTimeout(()=>{n.percentComplete>=50?d(!0):u("Unfortunately we only accept a minimum of 50% Completion...")},50)}):(console.log(`${e} item data context`,r),new Promise(d=>setTimeout(()=>d(!0),50)))})}toggleGridEditReadonly(){this.undoAllEdits(),this.isGridEditable=!this.isGridEditable,this.isCompositeDisabled=!this.isGridEditable,this.isGridEditable||(this.isMassSelectionDisabled=!0),this.aureliaGrid.slickGrid.setOptions({editable:this.isGridEditable})}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.aureliaGrid.slickGrid?.setOptions({darkMode:this._darkMode})}toggleBodyBackground(){this._darkMode?(document.querySelector(".panel-wm-content").classList.add("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="dark"):(document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light")}removeUnsavedStylingFromCell(e,i,n){const a=`unsaved_highlight_${[i.id]}${n}`;this.aureliaGrid.slickGrid.removeCellCssStyles(a);const r=this.cellCssStyleQueue.findIndex(l=>l===a);r>=0&&this.cellCssStyleQueue.splice(r,1)}removeAllUnsavedStylingFromCell(){for(const e of this.cellCssStyleQueue)this.aureliaGrid.slickGrid.removeCellCssStyles(e);this.cellCssStyleQueue=[]}renderUnsavedStylingOnAllVisibleCells(){for(const e of this.editQueue)if(e){const{item:i,columns:n,editCommand:a}=e;Array.isArray(n)&&n.forEach(r=>{this.renderUnsavedCellStyling(i,r,a)})}}renderUnsavedCellStyling(e,i,n){if(n&&e&&i){const a=this.aureliaGrid.dataView.getRowByItem(e);if(a>=0){const r={[a]:{[i.id]:"unsaved-editable-field"}},l=`unsaved_highlight_${[i.id]}${a}`;this.aureliaGrid.slickGrid.setCellCssStyles(`unsaved_highlight_${[i.id]}${a}`,r),this.cellCssStyleQueue.push(l)}}}saveAll(){console.log(this.editQueue),console.log(this.editedItems),this.removeAllUnsavedStylingFromCell(),this.editQueue=[],this.editedItems={}}undoLastEdit(e=!1){const i=this.editQueue.pop(),n=i?.editCommand;if(i&&n&&et.cancelCurrentEdit()){n.undo();for(const a of i.columns)this.removeUnsavedStylingFromCell(i.item,a,n.row);this.aureliaGrid.slickGrid.invalidate(),e&&this.aureliaGrid.slickGrid.gotoCell(n.row,n.cell,!1)}}undoAllEdits(){for(const e of this.editQueue){const i=e?.editCommand;if(i&&et.cancelCurrentEdit()){i.undo();for(const n of e.columns)this.removeUnsavedStylingFromCell(e.item,n,i.row)}}this.aureliaGrid.slickGrid.invalidate(),this.editQueue=[]}mockProducts(){return[{id:0,itemName:"Sleek Metal Computer",itemNameTranslated:"some fantastic sleek metal computer description",listPrice:2100.23,itemTypeName:"I",image:"http://i.stack.imgur.com/pC1Tv.jpg",icon:this.getRandomIcon(0)},{id:1,itemName:"Tasty Granite Table",itemNameTranslated:"an extremely huge and heavy table",listPrice:3200.12,itemTypeName:"I",image:"https://i.imgur.com/Fnm7j6h.jpg",icon:this.getRandomIcon(1)},{id:2,itemName:"Awesome Wooden Mouse",itemNameTranslated:"super old mouse",listPrice:15,itemTypeName:"I",image:"https://i.imgur.com/RaVJuLr.jpg",icon:this.getRandomIcon(2)},{id:3,itemName:"Gorgeous Fresh Shirt",itemNameTranslated:"what a gorgeous shirt seriously",listPrice:25.76,itemTypeName:"I",image:"http://i.stack.imgur.com/pC1Tv.jpg",icon:this.getRandomIcon(3)},{id:4,itemName:"Refined Cotton Table",itemNameTranslated:"super light table that will fall apart amazingly fast",listPrice:13.35,itemTypeName:"I",image:"https://i.imgur.com/Fnm7j6h.jpg",icon:this.getRandomIcon(4)},{id:5,itemName:"Intelligent Wooden Pizza",itemNameTranslated:"wood not included",listPrice:23.33,itemTypeName:"I",image:"https://i.imgur.com/RaVJuLr.jpg",icon:this.getRandomIcon(5)},{id:6,itemName:"Licensed Cotton Chips",itemNameTranslated:"not sure what that is",listPrice:71.21,itemTypeName:"I",image:"http://i.stack.imgur.com/pC1Tv.jpg",icon:this.getRandomIcon(6)},{id:7,itemName:"Ergonomic Rubber Soap",itemNameTranslated:"so good you'll want to use it every night",listPrice:2.43,itemTypeName:"I",image:"https://i.imgur.com/Fnm7j6h.jpg",icon:this.getRandomIcon(7)},{id:8,itemName:"Handcrafted Steel Car",itemNameTranslated:"aka tesla truck",listPrice:31288.39,itemTypeName:"I",image:"https://i.imgur.com/RaVJuLr.jpg",icon:this.getRandomIcon(8)}]}getRandomIcon(e){const i=["mdi-arrow-collapse","mdi-arrow-expand","mdi-cancel","mdi-check","mdi-checkbox-blank-outline","mdi-check-box-outline","mdi-checkbox-marked","mdi-close","mdi-close-circle","mdi-close-circle-outline","mdi-close-thick","mdi-content-copy","mdi-database-refresh","mdi-download","mdi-file-document-outline","mdi-file-excel-outline","mdi-file-music-outline","mdi-file-pdf-outline","mdi-filter-remove-outline","mdi-flip-vertical","mdi-folder","mdi-folder-open","mdi-help-circle","mdi-help-circle-outline","mdi-history","mdi-information","mdi-information-outline","mdi-link","mdi-link-variant","mdi-menu","mdi-microsoft-excel","mdi-minus","mdi-page-first","mdi-page-last","mdi-paperclip","mdi-pin-off-outline","mdi-pin-outline","mdi-playlist-plus","mdi-playlist-remove","mdi-plus","mdi-redo","mdi-refresh","mdi-shape-square-plus","mdi-sort-ascending","mdi-sort-descending","mdi-swap-horizontal","mdi-swap-vertical","mdi-sync","mdi-table-edit","mdi-table-refresh","mdi-undo"],n=Math.floor(Math.random()*i.length-1);return i[e??n]}renderItemCallbackWith2Rows(e){return`<div class="autocomplete-container-list">
      <div class="autocomplete-left">
        <!--<img src="http://i.stack.imgur.com/pC1Tv.jpg" width="50" />-->
        <span class="mdi ${e.icon}"></span>
      </div>
      <div>
        <span class="autocomplete-top-left">
          <span class="mdi ${e.itemTypeName==="I"?"mdi-information-outline":"mdi-content-copy"}"></span>
          ${e.itemName}
        </span>
      <div>
      </div>
    <div>
    <div class="autocomplete-bottom-left">${e.itemNameTranslated}</div>
    </div>`}renderItemCallbackWith4Corners(e){return`<div class="autocomplete-container-list">
          <div class="autocomplete-left">
            <!--<img src="http://i.stack.imgur.com/pC1Tv.jpg" width="50" />-->
            <span class="mdi ${e.icon}"></span>
          </div>
          <div>
            <span class="autocomplete-top-left">
              <span class="mdi ${e.itemTypeName==="I"?"mdi-information-outline":"mdi-content-copy"}"></span>
              ${e.itemName}
            </span>
            <span class="autocomplete-top-right">${lo(e.listPrice,2,2,!1,"$")}</span>
          <div>
        </div>
        <div>
          <div class="autocomplete-bottom-left">${e.itemNameTranslated}</div>
          <span class="autocomplete-bottom-right">Type: <b>${e.itemTypeName==="I"?"Item":e.itemTypeName==="C"?"PdCat":"Cat"}</b></span>
        </div>`}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}Hl=VO();sa=KO(Hl,0,"Example30",fg,sa);YO(Hl,1,sa);const eM=Object.freeze(Object.defineProperty({__proto__:null,get Example30(){return sa}},Symbol.toStringTag,{value:"Module"})),vg="example31",Ir=`<h2>
  Example 31: Grid with OData Backend Service using RxJS Observables
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example31.ts"
    >
      <span class="mdi mdi-link-variant"></span> code
    </a>
  </span>
  <button class="ms-2 btn btn-outline-secondary btn-sm btn-icon" type="button" data-test="toggle-subtitle" click.trigger="toggleSubTitle()">
    <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
  </button>
</h2>

<div class="subtitle">Optionally use RxJS instead of Promises, you would typically use this with a Backend Service API (OData/GraphQL)</div>

<div class="row">
  <div class="col-md-12" aria-label="Basic Editing Commands">
    <button
      class="btn btn-outline-secondary btn-sm btn-icon"
      data-test="clear-filters-sorting"
      click.trigger="clearAllFiltersAndSorts()"
      title="Clear all Filters & Sorts"
    >
      <span class="mdi mdi-close"></span>
      <span>Clear all Filter & Sorts</span>
    </button>
    <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="set-dynamic-filter" click.trigger="setFiltersDynamically()">
      Set Filters Dynamically
    </button>
    <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="set-dynamic-sorting" click.trigger="setSortingDynamically()">
      Set Sorting Dynamically
    </button>
    <button
      class="btn btn-outline-secondary btn-sm btn-icon"
      style="margin-left: 10px"
      data-test="add-gender-button"
      click.trigger="addOtherGender()"
      disabled.bind="isOtherGenderAdded"
    >
      Add Other Gender via RxJS
    </button>
  </div>
</div>

<br />

<div>
  <span>
    <label>Programmatically go to first/last page:</label>
    <div class="btn-group" role="group">
      <button class="btn btn-outline-secondary btn-xs btn-icon px-2" data-test="goto-first-page" click.trigger="goToFirstPage()">
        <i class="mdi mdi-page-first"></i>
      </button>
      <button class="btn btn-outline-secondary btn-xs btn-icon px-2" data-test="goto-last-page" click.trigger="goToLastPage()">
        <i class="mdi mdi-page-last icon"></i>
      </button>
    </div>
  </span>

  <span style="margin-left: 10px">
    <label>OData Version: </label>
    <span data-test="radioVersion">
      <label class="radio-inline control-label" for="radio2">
        <input
          type="radio"
          name="inlineRadioOptions"
          data-test="version2"
          id="radio2"
          checked
          value.bind="2"
          click.trigger="setOdataVersion(2)"
        />
        2
      </label>
      <label class="radio-inline control-label" for="radio4">
        <input type="radio" name="inlineRadioOptions" data-test="version4" id="radio4" value.bind="4" click.trigger="setOdataVersion(4)" />
        4
      </label>
    </span>
    <label class="checkbox-inline control-label" for="enableCount" style="margin-left: 20px">
      <input
        type="checkbox"
        id="enableCount"
        data-test="enable-count"
        checked.bind="isCountEnabled"
        click.trigger="changeCountEnableFlag()"
      />
      <span style="font-weight: bold">Enable Count</span> (add to OData query)
    </label>
    <label class="checkbox-inline control-label" for="enableSelect" style="margin-left: 20px">
      <input
        type="checkbox"
        id="enableSelect"
        data-test="enable-select"
        checked.bind="isSelectEnabled"
        click.trigger="changeEnableSelectFlag()"
      />
      <span style="font-weight: bold">Enable Select</span> (add to OData query)
    </label>
    <label class="checkbox-inline control-label" for="enableExpand" style="margin-left: 20px">
      <input
        type="checkbox"
        id="enableExpand"
        data-test="enable-expand"
        checked.bind="isExpandEnabled"
        click.trigger="changeEnableExpandFlag()"
      />
      <span style="font-weight: bold">Enable Expand</span> (add to OData query)
    </label>
  </span>
</div>

<div class="row" style="margin-top: 5px">
  <div class="col-md-10">
    <div class="alert alert-info" data-test="alert-odata-query">
      <strong>OData Query:</strong> <span data-test="odata-query-result">\${odataQuery}</span>
    </div>
  </div>
  <div class.bind="status.class" role="alert" data-test="status"><strong>Status: </strong> \${status.text}</div>
</div>

<aurelia-slickgrid
  grid-id="grid31"
  columns.bind="columnDefinitions"
  options.bind="gridOptions"
  dataset.bind="dataset"
  pagination-options.bind="paginationOptions"
  on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
  on-grid-state-changed.trigger="gridStateChanged($event.detail)"
>
</aurelia-slickgrid>
`,_g=[],yg={};let Sn;function tM(t){Sn||(Sn=E.define({name:vg,template:Ir,dependencies:_g,bindables:yg})),t.register(Sn)}const iM=Object.freeze(Object.defineProperty({__proto__:null,bindables:yg,default:Ir,dependencies:_g,name:vg,register:tM,template:Ir},Symbol.toStringTag,{value:"Module"}));var aM=Object.create,Ul=Object.defineProperty,nM=Object.getOwnPropertyDescriptor,rM=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Sg=t=>{throw TypeError(t)},Cg=(t,e,i)=>e in t?Ul(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,oM=(t,e)=>Ul(t,"name",{value:e,configurable:!0}),lM=t=>[,,,aM(null)],sM=["class","method","getter","setter","accessor","field","value","get","set"],wg=t=>t!==void 0&&typeof t!="function"?Sg("Function expected"):t,dM=(t,e,i,n,a)=>({kind:sM[t],name:e,metadata:n,addInitializer:r=>i._?Sg("Already initialized"):a.push(wg(r||null))}),cM=(t,e)=>Cg(e,rM("metadata"),t[3]),uM=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},mM=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&nM(a,i));oM(a,i);for(var p=n.length-1;p>=0;p--)u=dM(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,wg(l)&&(a=l);return cM(t,a),c&&Ul(a,i,c),m?s^4?r:c:a},F=(t,e,i)=>Cg(t,typeof e!="symbol"?e+"":e,i),xg,ql;const pM=20;xg=[T(iM)];class da{constructor(e=O(_e(ye))){this.http=e,F(this,"aureliaGrid"),F(this,"columnDefinitions",[]),F(this,"gridOptions"),F(this,"dataset",[]),F(this,"metrics"),F(this,"paginationOptions"),F(this,"hideSubTitle",!1),F(this,"isCountEnabled",!0),F(this,"isSelectEnabled",!1),F(this,"isExpandEnabled",!1),F(this,"odataVersion",2),F(this,"odataQuery",""),F(this,"processing",!1),F(this,"errorStatus",""),F(this,"isPageErrorTest",!1),F(this,"status",{text:"",class:""}),F(this,"isOtherGenderAdded",!1),F(this,"genderCollection",[{value:"male",label:"male"},{value:"female",label:"female"}]),this.initializeGrid()}aureliaGridReady(e){this.aureliaGrid=e}initializeGrid(){this.columnDefinitions=[{id:"name",name:"Name",field:"name",sortable:!0,filterable:!0,filter:{model:v.compoundInput}},{id:"gender",name:"Gender",field:"gender",filterable:!0,editor:{model:C.singleSelect,collectionAsync:Ls(this.genderCollection)},filter:{model:v.singleSelect,collectionAsync:Ls(this.genderCollection),collectionOptions:{addBlankEntry:!0}}},{id:"company",name:"Company",field:"company",filterable:!0,sortable:!0},{id:"category_name",name:"Category",field:"category/name",filterable:!0,sortable:!0}],this.gridOptions={enableAutoResize:!0,autoResize:{container:"#demo-container",rightPadding:10},checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},editable:!0,autoEdit:!0,autoCommitEdit:!0,rowHeight:33,headerRowHeight:35,enableCellNavigation:!0,enableFiltering:!0,enableCheckboxSelector:!0,enableSelection:!0,enablePagination:!0,pagination:{pageSizes:[10,20,50,100,500],pageSize:pM},presets:{filters:[{columnId:"gender",searchTerms:["male"],operator:"="}],sorters:[{columnId:"name",direction:"asc"}],pagination:{pageNumber:2,pageSize:20}},backendServiceApi:{service:new no,options:{enableCount:this.isCountEnabled,enableSelect:this.isSelectEnabled,enableExpand:this.isExpandEnabled,version:this.odataVersion},preProcess:()=>this.displaySpinner(!0),process:e=>this.getCustomerApiCall(e),postProcess:e=>{this.metrics=e.metrics,this.displaySpinner(!1),this.getCustomerCallback(e)}},externalResources:[new $v]}}addOtherGender(){const e={value:"other",label:"other"},i=this.columnDefinitions.find(n=>n.id==="gender");if(i){let n=i.editor.collection;const a=i.filter.collectionAsync;Array.isArray(n)&&(i.editor.collection=[...this.genderCollection,e],n=i.editor.collection,a?.next&&(a.next(n),a.complete()))}this.isOtherGenderAdded=!0}displaySpinner(e){this.processing=e,this.status=e?{text:"loading...",class:"col-md-2 alert alert-warning"}:{text:"finished!!",class:"col-md-2 alert alert-success"}}getCustomerCallback(e){let i=e.totalRecordCount;this.isCountEnabled&&(i=this.odataVersion===4?e["@odata.count"]:e.d.__count),this.metrics&&(this.metrics.totalItemCount=i),this.paginationOptions={...this.gridOptions.pagination,totalItems:i},this.dataset=this.odataVersion===4?e.value:e.d.results,this.odataQuery=e.query}getCustomerApiCall(e){return this.getCustomerDataApiMock(e)}getCustomerDataApiMock(e){return new kv(i=>{const n=e.toLowerCase().split("&");let a,r=0,l="",d=100;const u={};for(const s of n)if(s.includes("$top=")&&(a=+s.substring(5)),s.includes("$skip=")&&(r=+s.substring(6)),s.includes("$orderby=")&&(l=s.substring(9)),s.includes("$filter=")){const m=s.substring(8).replace("%20"," ");if(m.includes("contains")){const o=m.match(/contains\(([a-zA-Z/]+),\s?'(.*?)'/),g=o[1].trim();u[g]={type:"substring",term:o[2].trim()}}if(m.includes("substringof")){const o=m.match(/substringof\('(.*?)',\s([a-zA-Z/]+)/),g=o[2].trim();u[g]={type:"substring",term:o[1].trim()}}if(m.includes("eq")){const o=m.match(/([a-zA-Z ]*) eq '(.*?)'/);if(Array.isArray(o)){const g=o[1].trim();u[g]={type:"equal",term:o[2].trim()}}}if(m.includes("startswith")){const o=m.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/),g=o[1].trim();u[g]={type:"starts",term:o[2].trim()}}if(m.includes("endswith")){const o=m.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/),g=o[1].trim();u[g]={type:"ends",term:o[2].trim()}}}this.http.fetch(ft).then(s=>s.json()).then(s=>{if(l?.length>0){const c=l.split(",");for(const p of c){const _=p.split(" "),w=_[0];let x=y=>y;for(const y of w.split("/")){const h=x;x=S=>h(S)[y]}switch((_[1]??"asc").toLocaleLowerCase()){case"asc":s=s.sort((y,h)=>x(y).localeCompare(x(h)));break;case"desc":s=s.sort((y,h)=>x(h).localeCompare(x(y)));break}}}let m=r,o=s;if(u){for(const c in u)u.hasOwnProperty(c)&&(o=o.filter(p=>{const _=u[c].type,w=u[c].term;let x=c;if(c&&c.indexOf(" ")!==-1){const h=c.split(" ");x=h[h.length-1]}let b,y=p;for(const h of x.split("/"))b=y[h],y=b;if(b)switch(_){case"equal":return b.toLowerCase()===w;case"ends":return b.toLowerCase().endsWith(w);case"starts":return b.toLowerCase().startsWith(w);case"substring":return b.toLowerCase().includes(w)}}));d=o.length}m>o.length&&(e=e.replace(`$skip=${m}`,""),m=0);const g=o.slice(m,m+a);setTimeout(()=>{const c={query:e};this.isCountEnabled||(c.totalRecordCount=d),this.odataVersion===4?(c.value=g,this.isCountEnabled&&(c["@odata.count"]=d)):(c.d={results:g},this.isCountEnabled&&(c.d.__count=d)),i.next(c),i.complete()},150)})})}clearAllFiltersAndSorts(){this.aureliaGrid?.gridService.clearAllFiltersAndSorts()}goToFirstPage(){this.aureliaGrid?.paginationService?.goToFirstPage()}goToLastPage(){this.aureliaGrid?.paginationService?.goToLastPage()}gridStateChanged(e){console.log("Client sample, Grid State changed:: ",e.change)}setFiltersDynamically(){this.aureliaGrid?.filterService.updateFilters([{columnId:"name",searchTerms:["A"],operator:"a*"}])}setSortingDynamically(){this.aureliaGrid?.sortService.updateSorting([{columnId:"name",direction:"DESC"}])}handleOnBeforeSort(e){return!0}handleOnBeforeSearchChange(e){return!0}handleOnBeforePaginationChange(e){return!0}changeCountEnableFlag(){return this.displaySpinner(!0),this.isCountEnabled=!this.isCountEnabled,this.resetOptions({enableCount:this.isCountEnabled}),!0}changeEnableSelectFlag(){return this.isSelectEnabled=!this.isSelectEnabled,this.resetOptions({enableSelect:this.isSelectEnabled}),!0}changeEnableExpandFlag(){return this.isExpandEnabled=!this.isExpandEnabled,this.resetOptions({enableExpand:this.isExpandEnabled}),!0}setOdataVersion(e){return this.displaySpinner(!0),this.odataVersion=e,this.resetOptions({version:this.odataVersion}),!0}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}resetOptions(e){this.displaySpinner(!0);const i=this.gridOptions.backendServiceApi.service;i.updateOptions(e),i.clearFilters(),this.aureliaGrid?.filterService.clearFilters()}}ql=lM();da=mM(ql,0,"Example31",xg,da);uM(ql,1,da);const hM=Object.freeze(Object.defineProperty({__proto__:null,get Example31(){return da}},Symbol.toStringTag,{value:"Module"})),Tg="example32",Gr=`<h2>
  Example 32: Columns Resize by Content
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example32.ts"
    >
      <span class="mdi mdi-link-variant"></span> code
    </a>
  </span>
  <button class="ms-2 btn btn-outline-secondary btn-sm btn-icon" type="button" data-test="toggle-subtitle" click.trigger="toggleSubTitle()">
    <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
  </button>
</h2>

<div class="subtitle">
  The grid below uses the optional resize by cell content (with a fixed 950px for demo purposes), you can click on the 2 buttons to see the
  difference. The "autosizeColumns" is really the default option used by SlickGrid-Universal, the resize by cell content is optional because
  it requires to read the first thousand rows and do extra width calculation.
</div>

<div class="row">
  <div class="ml-2 mb-2 mr-2">
    <div class="btn-group btn-group-toggle" data-bs-toggle="buttons">
      <label
        class="btn btn-sm btn-outline-secondary btn-icon"
        class.bind="isUsingDefaultResize ? 'active' : ''"
        data-test="autosize-columns-btn"
      >
        <input
          type="radio"
          class="btn-check"
          name="options"
          checked.bind="isUsingDefaultResize"
          click.trigger="handleDefaultResizeColumns()"
        />
        <i class="mdi mdi-arrow-expand"></i> (default resize) by "autosizeColumns"
      </label>
      <label
        class="btn btn-sm btn-outline-secondary btn-icon"
        class.bind="isUsingDefaultResize ? '' : 'active'"
        data-test="resize-by-content-btn"
      >
        <input
          type="radio"
          class="btn-check"
          name="options"
          checked.bind="!isUsingDefaultResize"
          click.trigger="handleNewResizeColumns()"
        />
        <i class="mdi mdi-arrow-expand"></i> Resize by Cell Content
      </label>
    </div>
    <span class="ms-3 h5">Container Width (950px)</span>
  </div>

  <div class="mb-2">
    <div class="btn-group btn-group-sm" role="group" aria-label="Basic Editing Commands">
      <button
        type="button"
        class="btn btn-outline-secondary btn-icon"
        click.trigger="setSelectedRowIds()"
        data-test="set-dynamic-rows-btn"
        title="Change Row Selection across multiple pages"
      >
        <span>Change Row Selection</span>
      </button>
      <button
        type="button"
        class="btn btn-outline-secondary btn-icon"
        data-test="toggle-readonly-btn"
        click.trigger="toggleGridEditReadonly()"
      >
        <i class="mdi mdi-table-edit"></i> Toggle Readonly
      </button>
      <button type="button" class="btn btn-outline-secondary btn-icon" data-test="undo-last-edit-btn" click.trigger="undoLastEdit()">
        <i class="mdi mdi-undo"></i> Undo Last Edit
      </button>
      <button type="button" class="btn btn-outline-secondary btn-icon" data-test="save-all-btn" click.trigger="saveAll()">
        <span>Save All</span>
      </button>
    </div>
    <span class="ms-2"><code>autoEdit</code></span>
    <div class="btn-group" role="group" aria-label="autoEdit">
      <button type="button" class="btn btn-outline-secondary btn-sm" data-test="auto-edit-on-btn" click.trigger="toggleAutoEdit(true)">
        ON
      </button>
      <button type="button" class="btn btn-outline-secondary btn-sm" data-test="auto-edit-off-btn" click.trigger="toggleAutoEdit(false)">
        OFF
      </button>
    </div>
    <span class="ms-2"><code>autoEditByKeypress</code></span>
    <div class="btn-group" role="group" aria-label="autoEditByKeypress">
      <button
        type="button"
        class="btn btn-outline-secondary btn-sm"
        data-test="auto-edit-key-on-btn"
        click.trigger="toggleAutoEditByKeypress(true)"
      >
        ON
      </button>
      <button
        type="button"
        class="btn btn-outline-secondary btn-sm"
        data-test="auto-edit-key-off-btn"
        click.trigger="toggleAutoEditByKeypress(false)"
      >
        OFF
      </button>
    </div>
  </div>
</div>

<div id="smaller-container" style="width: 950px">
  <aurelia-slickgrid
    grid-id="grid32"
    columns.bind="columnDefinitions"
    options.bind="gridOptions"
    dataset.bind="dataset"
    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
    on-selected-row-ids-changed.trigger="handleOnSelectedRowIdsChanged($event.detail.args)"
  >
  </aurelia-slickgrid>
</div>
`,Eg=[],$g={};let Cn;function gM(t){Cn||(Cn=E.define({name:Tg,template:Gr,dependencies:Eg,bindables:$g})),t.register(Cn)}const bM=Object.freeze(Object.defineProperty({__proto__:null,bindables:$g,default:Gr,dependencies:Eg,name:Tg,register:gM,template:Gr},Symbol.toStringTag,{value:"Module"}));var fM=Object.create,Yl=Object.defineProperty,vM=Object.getOwnPropertyDescriptor,_M=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),kg=t=>{throw TypeError(t)},Dg=(t,e,i)=>e in t?Yl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,yM=(t,e)=>Yl(t,"name",{value:e,configurable:!0}),SM=t=>[,,,fM(null)],CM=["class","method","getter","setter","accessor","field","value","get","set"],Og=t=>t!==void 0&&typeof t!="function"?kg("Function expected"):t,wM=(t,e,i,n,a)=>({kind:CM[t],name:e,metadata:n,addInitializer:r=>i._?kg("Already initialized"):a.push(Og(r||null))}),xM=(t,e)=>Dg(e,_M("metadata"),t[3]),TM=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},EM=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&vM(a,i));yM(a,i);for(var p=n.length-1;p>=0;p--)u=wM(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,Og(l)&&(a=l);return xM(t,a),c&&Yl(a,i,c),m?s^4?r:c:a},te=(t,e,i)=>Dg(t,typeof e!="symbol"?e+"":e,i),Mg,Kl;const $M=400,kM=(t,e,i,n,a,r)=>{const d=r.getOptions().editable&&n.editor;return i=i??"",d?{text:i,addClasses:"editable-field",toolTip:"Click to Edit"}:i},DM=t=>t==null||!t.length?{valid:!1,msg:"This is a required field."}:/^(task\s\d+)*$/i.test(t)?{valid:!0,msg:""}:{valid:!1,msg:'Your title is invalid, it must start with "Task" followed by a number.'};Mg=[T(bM)];class ca{constructor(e=O(_e(ye))){this.http=e,te(this,"aureliaGrid"),te(this,"gridOptions"),te(this,"columnDefinitions",[]),te(this,"dataset",[]),te(this,"editQueue",[]),te(this,"editedItems",{}),te(this,"hideSubTitle",!1),te(this,"isUsingDefaultResize",!1),te(this,"isGridEditable",!0),te(this,"isMassSelectionDisabled",!0),te(this,"complexityLevelList",[{value:0,label:"Very Simple"},{value:1,label:"Simple"},{value:2,label:"Straightforward"},{value:3,label:"Complex"},{value:4,label:"Very Complex"}]),this.initializeGrid()}attached(){this.dataset=this.loadData($M)}aureliaGridReady(e){this.aureliaGrid=e}initializeGrid(){this.columnDefinitions=[{id:"title",name:"Title",field:"title",sortable:!0,minWidth:65,resizeExtraWidthPadding:4,resizeCharWidthInPx:7.6,resizeCalcWidthRatio:1,resizeMaxWidthThreshold:200,columnGroup:"Common Factor",cssClass:"text-uppercase fw-bold",filterable:!0,filter:{model:v.inputText,filterPredicate:(e,i)=>{const n=i.parsedSearchTerms||[];if(n?.length){const a=i.columnId,r=n[0],l=e[a].toLowerCase(),d=r.matchAll(/^%([^%\r\n]+)[^%\r\n]*$|(.*)%(.+)%(.*)|(.+)%(.+)|([^%\r\n]+)%$/gi),u=Array.from(d),s=u.length?u[0]:[],[m,o,g,c,p,_,w,x]=s;return o?l.endsWith(o.toLowerCase()):g&&c?l.startsWith(g.toLowerCase())&&l.includes(c.toLowerCase()):c&&p?l.includes(c)&&l.endsWith(p.toLowerCase()):c&&!p?l.includes(c.toLowerCase()):_&&w?l.startsWith(_.toLowerCase())&&l.endsWith(w.toLowerCase()):x?l.startsWith(x.toLowerCase()):l.includes(r.toLowerCase())}return!0}},editor:{model:C.longText,required:!0,alwaysSaveOnEnterKey:!0,maxLength:12,options:{cols:45,rows:6,buttonTexts:{cancel:"Close",save:"Done"}},validator:DM}},{id:"duration",name:"Duration",field:"duration",sortable:!0,filterable:!0,minWidth:65,type:"number",columnGroup:"Common Factor",formatter:(e,i,n)=>n==null||n===""?"":n>1?`${n} days`:`${n} day`,editor:{model:C.float,decimal:2,valueStep:1,minValue:0,maxValue:1e4,alwaysSaveOnEnterKey:!0,required:!0}},{id:"cost",name:"Cost",field:"cost",minWidth:65,sortable:!0,filterable:!0,type:"number",columnGroup:"Analysis",filter:{model:v.compoundInputNumber},formatter:f.dollar},{id:"percentComplete",name:"% Complete",field:"percentComplete",minWidth:100,type:"number",sortable:!0,filterable:!0,columnGroup:"Analysis",filter:{model:v.compoundSlider,operator:">="},editor:{model:C.slider,minValue:0,maxValue:100}},{id:"complexity",name:"Complexity",field:"complexity",resizeCalcWidthRatio:.9,sortable:!0,filterable:!0,columnGroup:"Analysis",formatter:(e,i,n)=>this.complexityLevelList[n]?.label,exportCustomFormatter:(e,i,n)=>this.complexityLevelList[n]?.label,filter:{model:v.multipleSelect,collection:this.complexityLevelList},editor:{model:C.singleSelect,collection:this.complexityLevelList}},{id:"start",name:"Start",field:"start",sortable:!0,formatter:f.dateUs,columnGroup:"Period",exportCustomFormatter:f.dateUs,type:"date",outputType:"dateUs",saveOutputType:"dateUtc",filterable:!0,filter:{model:v.compoundDate},editor:{model:C.date,params:{hideClearButton:!1}}},{id:"completed",name:"Completed",field:"completed",width:80,minWidth:75,maxWidth:100,cssClass:"text-center",columnGroup:"Period",formatter:f.checkmarkMaterial,exportWithFormatter:!1,filterable:!0,sortable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:v.singleSelect},editor:{model:C.checkbox}},{id:"finish",name:"Finish",field:"finish",sortable:!0,formatter:f.dateUs,columnGroup:"Period",type:"date",outputType:"dateUs",saveOutputType:"dateUtc",filterable:!0,filter:{model:v.compoundDate},exportCustomFormatter:f.dateUs,editor:{model:C.date,options:{displayDateMin:"today"},validator:(e,i)=>{const n=i?.item;return n&&n.completed&&!e?{valid:!1,msg:'You must provide a "Finish" date when "Completed" is checked.'}:{valid:!0,msg:""}}}},{id:"product",name:"Product",field:"product",filterable:!0,columnGroup:"Item",minWidth:100,resizeCharWidthInPx:8,exportWithFormatter:!0,dataKey:"id",labelKey:"itemName",formatter:f.complexObject,exportCustomFormatter:f.complex,type:"object",sortComparer:re.objectString,editor:{model:C.autocompleter,alwaysSaveOnEnterKey:!0,massUpdate:!0,options:{minLength:1,fetch:(e,i)=>{const n=this.mockProducts();i(n.filter(a=>a.itemName.toLowerCase().includes(e.toLowerCase())))},renderItem:{layout:"fourCorners",templateCallback:e=>this.renderItemCallbackWith4Corners(e)}}},filter:{model:v.inputText,queryField:"product.itemName"}},{id:"origin",name:"Country of Origin",field:"origin",formatter:f.complexObject,columnGroup:"Item",exportCustomFormatter:f.complex,dataKey:"code",labelKey:"name",type:"object",sortComparer:re.objectString,filterable:!0,sortable:!0,minWidth:100,editor:{model:C.autocompleter,massUpdate:!0,customStructure:{label:"name",value:"code"},collectionAsync:this.http.fetch(Ri)},filter:{model:v.inputText,queryField:"origin.name"}},{id:"action",name:"Action",field:"action",width:70,minWidth:70,maxWidth:70,excludeFromExport:!0,formatter:()=>'<div class="button-style margin-auto" style="width: 35px;"><span class="mdi mdi-chevron-down text-primary"></span></div>',cellMenu:{hideCloseButton:!1,commandTitle:"Commands",commandItems:[{command:"help",title:"Help!",iconCssClass:"mdi mdi-help-circle",positionOrder:66,action:()=>alert("Please Help!")},"divider",{command:"delete-row",title:"Delete Row",positionOrder:64,iconCssClass:"mdi mdi-close color-danger",cssClass:"red",textCssClass:"text-italic color-danger-light",itemVisibilityOverride:e=>!e.dataContext?.completed,action:(e,i)=>{const n=i.dataContext,a=i?.row??0;confirm(`Do you really want to delete row (${a+1}) with "${n.title}"`)&&this.aureliaGrid.gridService.deleteItemById(n.id)}}]}}],this.columnDefinitions.forEach(e=>{e.header={menu:{commandItems:[{command:"",divider:!0,positionOrder:98},{command:"custom-actions",title:"Hello",positionOrder:99,commandItems:[{command:"hello-world",title:"Hello World"},{command:"hello-slickgrid",title:"Hello SlickGrid"},{command:"sub-menu",title:"Let's play",cssClass:"green",subMenuTitle:"choose your game",subMenuTitleCssClass:"text-italic salmon",commandItems:[{command:"sport-badminton",title:"Badminton"},{command:"sport-tennis",title:"Tennis"},{command:"sport-racquetball",title:"Racquetball"},{command:"sport-squash",title:"Squash"}]}]},{command:"feedback",title:"Feedback",positionOrder:100,commandItems:[{command:"request-update",title:"Request update from supplier",iconCssClass:"mdi mdi-star",tooltip:"this will automatically send an alert to the shipping team to contact the user for an update"},"divider",{command:"sub-menu",title:"Contact Us",iconCssClass:"mdi mdi-account",subMenuTitle:"contact us...",subMenuTitleCssClass:"italic",commandItems:[{command:"contact-email",title:"Email us",iconCssClass:"mdi mdi-pencil-outline"},{command:"contact-chat",title:"Chat with us",iconCssClass:"mdi mdi-message-text-outline"},{command:"contact-meeting",title:"Book an appointment",iconCssClass:"mdi mdi-coffee"}]}]}]}}}),this.gridOptions={editable:!0,autoAddCustomEditorFormatter:kM,enableCellNavigation:!0,autoEdit:!0,autoCommitEdit:!0,autoResize:{container:"#smaller-container",rightPadding:10},gridWidth:"100%",enableAutoResize:!0,enablePagination:!0,pagination:{pageSize:10,pageSizes:[10,200,500,5e3]},autoFitColumnsOnFirstLoad:!1,enableAutoSizeColumns:!1,autosizeColumnsByCellContentOnFirstLoad:!0,enableAutoResizeColumnsByCellContent:!0,resizeByContentOptions:{defaultRatioForStringType:.92,formatterPaddingWidthInPx:8},enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!1},externalResources:[new G],enableFiltering:!0,enableSelection:!0,enableCheckboxSelector:!0,checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},selectionOptions:{selectActiveRow:!1},createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:28,rowHeight:33,headerRowHeight:35,editCommandHandler:(e,i,n)=>{const a=Array.isArray(n.prevSerializedValue)?n.prevSerializedValue:[n.prevSerializedValue],r=Array.isArray(n.serializedValue)?n.serializedValue:[n.serializedValue],l=this.columnDefinitions.filter(u=>u.editor!==void 0),d=[];a.forEach((u,s)=>{const m=a[s],o=r[s];if(m!==o){const g=Array.isArray(n.prevSerializedValue)?l[s]:i;this.editedItems[this.gridOptions.datasetIdPropertyName||"id"]=e,this.aureliaGrid.slickGrid.invalidate(),n.execute(),this.renderUnsavedCellStyling(e,g,n),d.push(g)}}),this.editQueue.push({item:e,columns:d,editCommand:n})},enableCellMenu:!0}}loadData(e){const i=[];for(let n=0;n<e;n++){const a=Math.floor(Math.random()*this.mockProducts().length),r=2e3+Math.floor(Math.random()*10),l=new Date().getFullYear()+Math.floor(Math.random()*10),d=Math.floor(Math.random()*11),u=Math.floor(Math.random()*29),s=Math.floor(Math.random()*59),m=new Date(l,d+1,u,s,s,s),o=Math.floor(Math.random()*100)+15,g=o>100?n>5?100:88:o,c=g===100;i[n]={id:n,title:"Task "+n,duration:Math.floor(Math.random()*100)+10,percentComplete:g,analysis:{percentComplete:g},complexity:n%3?0:2,start:new Date(r,d,u,u,s,s,s),finish:c||n%3===0&&m>new Date&&n>3?c?new Date:m:"",cost:n%33===0?null:Math.round(Math.random()*1e4)/100,completed:c||n%3===0&&m>new Date&&n>3,product:{id:this.mockProducts()[a]?.id,itemName:this.mockProducts()[a]?.itemName},origin:n%2?{code:"CA",name:"Canada"}:{code:"US",name:"United States"}},n%8||(delete i[n].finish,delete i[n].percentComplete)}return i}handleDefaultResizeColumns(){this.aureliaGrid.slickGrid.getColumns().forEach(i=>i.width=i.originalWidth),this.aureliaGrid.slickGrid.updateColumns(),this.aureliaGrid.slickGrid.autosizeColumns(),this.isUsingDefaultResize=!0}handleNewResizeColumns(){this.aureliaGrid.resizerService.resizeColumnsByCellContent(!0),this.isUsingDefaultResize=!1}handleOnSelectedRowIdsChanged(e){console.log("Selected Ids:",e.selectedRowIds)}toggleGridEditReadonly(){this.undoAllEdits(),this.isGridEditable=!this.isGridEditable,this.isGridEditable||(this.isMassSelectionDisabled=!0),this.aureliaGrid.slickGrid.setOptions({editable:this.isGridEditable})}removeUnsavedStylingFromCell(e,i,n){this.aureliaGrid.slickGrid.removeCellCssStyles(`unsaved_highlight_${[i.id]}${n}`)}removeAllUnsavedStylingFromCell(){for(const e of this.editQueue){const i=e?.editCommand;if(i)for(const n of e.columns)this.removeUnsavedStylingFromCell(e.item,n,i.row)}}renderUnsavedStylingOnAllVisibleCells(){for(const e of this.editQueue)if(e){const{item:i,columns:n,editCommand:a}=e;Array.isArray(n)&&n.forEach(r=>{this.renderUnsavedCellStyling(i,r,a)})}}renderUnsavedCellStyling(e,i,n){if(n&&e&&i){const a=this.aureliaGrid.dataView.getRowByItem(e);if(a>=0){const r={[a]:{[i.id]:"unsaved-editable-field"}};this.aureliaGrid.slickGrid.setCellCssStyles(`unsaved_highlight_${[i.id]}${a}`,r)}}}setSelectedRowIds(){this.aureliaGrid.dataView?.setSelectedIds([3,4,11])}saveAll(){console.log(this.editQueue),console.log(this.editedItems),this.removeAllUnsavedStylingFromCell(),this.editQueue=[],this.editedItems={}}toggleAutoEdit(e){this.aureliaGrid.slickGrid?.setOptions({autoEdit:e})}toggleAutoEditByKeypress(e){this.aureliaGrid.slickGrid?.setOptions({autoEditByKeypress:e})}undoLastEdit(e=!1){const i=this.editQueue.pop(),n=i?.editCommand;if(i&&n&&et.cancelCurrentEdit()){n.undo();for(const a of i.columns)this.removeUnsavedStylingFromCell(i.item,a,n.row);this.aureliaGrid.slickGrid.invalidate(),e&&this.aureliaGrid?.slickGrid.gotoCell(n.row,n.cell,!1)}}undoAllEdits(){for(const e of this.editQueue){const i=e?.editCommand;if(i&&et.cancelCurrentEdit()){i.undo();for(const n of e.columns)this.removeUnsavedStylingFromCell(e.item,n,i.row)}}this.aureliaGrid.slickGrid.invalidate(),this.editQueue=[]}mockProducts(){return[{id:0,itemName:"Sleek Metal Computer",itemNameTranslated:"some fantastic sleek metal computer description",listPrice:2100.23,itemTypeName:"I",image:"http://i.stack.imgur.com/pC1Tv.jpg",icon:`mdi ${this.getRandomIcon(0)}`},{id:1,itemName:"Tasty Granite Table",itemNameTranslated:"an extremely huge and heavy table",listPrice:3200.12,itemTypeName:"I",image:"https://i.imgur.com/Fnm7j6h.jpg",icon:`mdi ${this.getRandomIcon(1)}`},{id:2,itemName:"Awesome Wooden Mouse",itemNameTranslated:"super old mouse",listPrice:15,itemTypeName:"I",image:"https://i.imgur.com/RaVJuLr.jpg",icon:`mdi ${this.getRandomIcon(2)}`},{id:3,itemName:"Gorgeous Fresh Shirt",itemNameTranslated:"what a gorgeous shirt seriously",listPrice:25.76,itemTypeName:"I",image:"http://i.stack.imgur.com/pC1Tv.jpg",icon:`mdi ${this.getRandomIcon(3)}`},{id:4,itemName:"Refined Cotton Table",itemNameTranslated:"super light table that will fall apart amazingly fast",listPrice:13.35,itemTypeName:"I",image:"https://i.imgur.com/Fnm7j6h.jpg",icon:`mdi ${this.getRandomIcon(4)}`},{id:5,itemName:"Intelligent Wooden Pizza",itemNameTranslated:"wood not included",listPrice:23.33,itemTypeName:"I",image:"https://i.imgur.com/RaVJuLr.jpg",icon:`mdi ${this.getRandomIcon(5)}`},{id:6,itemName:"Licensed Cotton Chips",itemNameTranslated:"not sure what that is",listPrice:71.21,itemTypeName:"I",image:"http://i.stack.imgur.com/pC1Tv.jpg",icon:`mdi ${this.getRandomIcon(6)}`},{id:7,itemName:"Ergonomic Rubber Soap",itemNameTranslated:"so good you'll want to use it every night",listPrice:2.43,itemTypeName:"I",image:"https://i.imgur.com/Fnm7j6h.jpg",icon:`mdi ${this.getRandomIcon(7)}`},{id:8,itemName:"Handcrafted Steel Car",itemNameTranslated:"aka tesla truck",listPrice:31288.39,itemTypeName:"I",image:"https://i.imgur.com/RaVJuLr.jpg",icon:`mdi ${this.getRandomIcon(8)}`}]}getRandomIcon(e){const i=["mdi-arrow-collapse","mdi-arrow-expand","mdi-cancel","mdi-check","mdi-checkbox-blank-outline","mdi-check-box-outline","mdi-checkbox-marked","mdi-close","mdi-close-circle","mdi-close-circle-outline","mdi-close-thick","mdi-content-copy","mdi-database-refresh","mdi-download","mdi-file-document-outline","mdi-file-excel-outline","mdi-file-music-outline","mdi-file-pdf-outline","mdi-filter-remove-outline","mdi-flip-vertical","mdi-folder","mdi-folder-open","mdi-help-circle","mdi-help-circle-outline","mdi-history","mdi-information","mdi-information-outline","mdi-link","mdi-link-variant","mdi-menu","mdi-microsoft-excel","mdi-minus","mdi-page-first","mdi-page-last","mdi-paperclip","mdi-pin-off-outline","mdi-pin-outline","mdi-playlist-plus","mdi-playlist-remove","mdi-plus","mdi-redo","mdi-refresh","mdi-shape-square-plus","mdi-sort-ascending","mdi-sort-descending","mdi-swap-horizontal","mdi-swap-vertical","mdi-sync","mdi-table-edit","mdi-table-refresh","mdi-undo"],n=Math.floor(Math.random()*i.length-1);return i[e??n]}renderItemCallbackWith2Rows(e){return`<div class="autocomplete-container-list">
      <div class="autocomplete-left">
        <!--<img src="http://i.stack.imgur.com/pC1Tv.jpg" width="50" />-->
        <span class="mdi ${e.icon}"></span>
      </div>
      <div>
        <span class="autocomplete-top-left">
          <span class="mdi ${e.itemTypeName==="I"?"mdi-information-outline":"mdi-content-copy"}"></span>
          ${e.itemName}
        </span>
      <div>
    </div>
    <div>
      <div class="autocomplete-bottom-left">${e.itemNameTranslated}</div>
    </div>`}renderItemCallbackWith4Corners(e){return`<div class="autocomplete-container-list">
          <div class="autocomplete-left">
            <!--<img src="http://i.stack.imgur.com/pC1Tv.jpg" width="50" />-->
            <span class="mdi ${e.icon}"></span>
          </div>
          <div>
            <span class="autocomplete-top-left">
              <span class="mdi ${e.itemTypeName==="I"?"mdi-information-outline":"mdi-content-copy"}"></span>
              ${e.itemName}
            </span>
            <span class="autocomplete-top-right">${lo(e.listPrice,2,2,!1,"$")}</span>
          <div>
        </div>
        <div>
          <div class="autocomplete-bottom-left">${e.itemNameTranslated}</div>
          <span class="autocomplete-bottom-right">Type: <b>${e.itemTypeName==="I"?"Item":e.itemTypeName==="C"?"PdCat":"Cat"}</b></span>
        </div>`}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}Kl=SM();ca=EM(Kl,0,"Example32",Mg,ca);TM(Kl,1,ca);const OM=Object.freeze(Object.defineProperty({__proto__:null,get Example32(){return ca}},Symbol.toStringTag,{value:"Module"})),Pg="example33",Fr=`<h2>
  Example 33: Regular & Custom Tooltips
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example33.ts"
    >
      <span class="mdi mdi-link-variant"></span> code
    </a>
  </span>
  <button class="ms-2 btn btn-outline-secondary btn-sm btn-icon" type="button" data-test="toggle-subtitle" click.trigger="toggleSubTitle()">
    <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
  </button>
</h2>

<div class="subtitle">
  This demo shows how to create Regular & Custom Tooltips (<a
    href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/custom-tooltip"
    target="_blank"
    >Wiki docs</a
  >)
  <br />
  <ul class="small">
    <li>optionally parse regular [title] attributes and transform them into tooltips</li>
    <li>create your own Custom Tooltip via a Custom Formatter</li>
    <li>create an Async Custom Tooltip (Promise/Observable) to allowing fetching data from an API</li>
    <li>optionally add Custom Tooltip on Column Header & Column Header-Row (filters)</li>
  </ul>
</div>

<div class="row">
  <div class="col" style="margin-bottom: 20px">
    <label for="pinned-rows">Simulated Server Delay (ms): </label>
    <input type="number" id="server-delay" data-test="server-delay" style="width: 60px" value.bind="serverApiDelay" />
    <button
      class="ms-2 btn btn-outline-secondary btn-icon btn-sm"
      data-test="filter-empty-desc"
      click.trigger="setFiltersDynamically('=')"
      title="Apply filter to show only empty descriptions"
    >
      <i class="mdi mdi-filter" title="icon tooltip for empty descriptions"></i>
      <span>Filters Empty Description</span>
    </button>
    <button
      class="ms-2 btn btn-outline-secondary btn-icon btn-sm"
      data-test="filter-non-empty-desc"
      click.trigger="setFiltersDynamically('!=')"
      title="Apply filter to show only non-empty descriptions"
    >
      <i class="mdi mdi-filter" title="icon tooltip for non-empty descriptions"></i>
      <span>Filters Non-Empty Description</span>
    </button>
  </div>
  <div class="alert alert-info is-narrow col" class.bind="{ invisible: !showLazyLoading }" data-test="alert-lazy">
    Lazy loading collection...
  </div>
</div>

<aurelia-slickgrid
  grid-id="grid33"
  columns.bind="columnDefinitions"
  options.bind="gridOptions"
  dataset.bind="dataset"
  instances.bind="aureliaGrid"
  on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
>
</aurelia-slickgrid>
`,Ig=[],Gg={};let wn;function MM(t){wn||(wn=E.define({name:Pg,template:Fr,dependencies:Ig,bindables:Gg})),t.register(wn)}const PM=Object.freeze(Object.defineProperty({__proto__:null,bindables:Gg,default:Fr,dependencies:Ig,name:Pg,register:MM,template:Fr},Symbol.toStringTag,{value:"Module"}));var IM=Object.create,Ql=Object.defineProperty,GM=Object.getOwnPropertyDescriptor,FM=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Fg=t=>{throw TypeError(t)},Ag=(t,e,i)=>e in t?Ql(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,AM=(t,e)=>Ql(t,"name",{value:e,configurable:!0}),RM=t=>[,,,IM(null)],LM=["class","method","getter","setter","accessor","field","value","get","set"],Rg=t=>t!==void 0&&typeof t!="function"?Fg("Function expected"):t,zM=(t,e,i,n,a)=>({kind:LM[t],name:e,metadata:n,addInitializer:r=>i._?Fg("Already initialized"):a.push(Rg(r||null))}),NM=(t,e)=>Ag(e,FM("metadata"),t[3]),WM=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},BM=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&GM(a,i));AM(a,i);for(var p=n.length-1;p>=0;p--)u=zM(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,Rg(l)&&(a=l);return NM(t,a),c&&Ql(a,i,c),m?s^4?r:c:a},Y=(t,e,i)=>Ag(t,typeof e!="symbol"?e+"":e,i),Lg,Zl;const jM=1e3;Lg=[T(PM)];class ua{constructor(){Y(this,"aureliaGrid"),Y(this,"columnDefinitions",[]),Y(this,"gridOptions"),Y(this,"editCommandQueue",[]),Y(this,"dataset",[]),Y(this,"hideSubTitle",!1),Y(this,"serverApiDelay",500),Y(this,"showLazyLoading",!1),Y(this,"headerFormatter",(e,i,n,a)=>`<div class="header-tooltip-title">Custom Tooltip - Header</div>
    <div class="tooltip-2cols-row"><div>Column:</div> <div>${a.name}</div></div>`),Y(this,"headerRowFormatter",(e,i,n,a)=>`<div class="headerrow-tooltip-title">Custom Tooltip - Header Row (filter)</div>
    <div class="tooltip-2cols-row"><div>Column:</div> <div>${a.field}</div></div>`),Y(this,"tooltipFormatter",(e,i,n,a,r,l)=>{const d="Custom Tooltip",u=f.checkmarkMaterial(e,i,r.effortDriven,a,r,l);return`<div class="header-tooltip-title">${d}</div>
    <div class="tooltip-2cols-row"><div>Id:</div> <div>${r.id}</div></div>
    <div class="tooltip-2cols-row"><div>Title:</div> <div>${r.title}</div></div>
    <div class="tooltip-2cols-row"><div>Effort Driven:</div> <div>${u.outerHTML||""}</div></div>
    <div class="tooltip-2cols-row"><div>Completion:</div> <div>${this.loadCompletionIcons(r.percentComplete)}</div></div>
    `}),Y(this,"tooltipTaskAsyncFormatter",(e,i,n,a,r,l)=>{const d=`Task ${r.id} - (async tooltip)`,u=f.percentCompleteBarWithText(e,i,r.percentComplete,a,r,l);return`<div class="color-sf-primary-dark header-tooltip-title">${d}</div>
      <div class="tooltip-2cols-row"><div>Completion:</div> <div>${u.outerHTML||""}</div></div>
      <div class="tooltip-2cols-row"><div>Lifespan:</div> <div>${r.__params.lifespan.toFixed(2)}</div></div>
      <div class="tooltip-2cols-row"><div>Ratio:</div> <div>${r.__params.ratio.toFixed(2)}</div></div>
    `}),this.defineGrid()}attached(){this.dataset=this.loadData(jM)}aureliaGridReady(e){this.aureliaGrid=e}defineGrid(){this.columnDefinitions=[{id:"title",name:"Title",field:"title",sortable:!0,editor:{model:C.longText,required:!0,alwaysSaveOnEnterKey:!0,minLength:5,maxLength:255},filterable:!0,customTooltip:{position:"right-align",formatter:()=>'<div><span class="mdi mdi-load mdi-spin"></span> loading...</div>',asyncProcess:()=>new Promise(e=>{setTimeout(()=>e({ratio:Math.random()*10/10,lifespan:Math.random()*100}),this.serverApiDelay)}),asyncPostFormatter:this.tooltipTaskAsyncFormatter}},{id:"duration",name:"Duration",field:"duration",sortable:!0,filterable:!0,editor:{model:C.float,decimal:2,valueStep:1,maxValue:1e4,alwaysSaveOnEnterKey:!0},formatter:(e,i,n)=>n>1?`${n} days`:`${n} day`,type:"number"},{id:"desc",name:"<span title='custom title tooltip text'>Description</span>",field:"description",width:100,filterable:!0,editor:{model:C.longText,required:!0,alwaysSaveOnEnterKey:!0,minLength:5,maxLength:255},formatter:(e,i,n,a,r)=>`<span title="regular tooltip (from title attribute)\r${r.title} cell value:\r${n||""}">${n||""}</span>`,customTooltip:{useRegularTooltip:!0,useRegularTooltipFromCellTextOnly:!0}},{id:"desc2",name:"<span title='custom title tooltip text'>Description 2</span>",field:"description",width:100,filterable:!0,editor:{model:C.longText,required:!0,alwaysSaveOnEnterKey:!0,minLength:5,maxLength:255},formatter:(e,i,n,a,r)=>`<span title="regular tooltip (from title attribute)\r${r.title} cell value:\r\r${n||""}">${n||""}</span>`,customTooltip:{useRegularTooltip:!0,useRegularTooltipFromFormatterOnly:!0}},{id:"button",name:"Button Tooltip",field:"title",width:100,minWidth:100,filterable:!0,excludeFromExport:!0,formatter:(e,i,n)=>{const a=I("button",{className:"btn btn-outline-secondary btn-icon btn-sm",title:"This is the button tooltip"}),r=I("i",{className:"mdi mdi-information",title:"icon tooltip"}),l=I("span",{textContent:"Hello Task"});return a.appendChild(r),a.appendChild(l),a.addEventListener("click",()=>alert(`Clicked button for ${n}`)),a},customTooltip:{useRegularTooltip:!0}},{id:"cost",name:'<span title="custom cost title tooltip text">Cost</span>',field:"cost",width:90,sortable:!0,filterable:!0,formatter:f.multiple,params:{formatters:[f.dollar,(e,i,n)=>`<span title="regular tooltip (from title attribute) -\rcell value:

${n||""}">${n||""}</span>`]},customTooltip:{useRegularTooltip:!0,useRegularTooltipFromFormatterOnly:!0},type:"number"},{id:"percentComplete",name:"% Complete",field:"percentComplete",type:"number",editor:{model:C.slider,minValue:0,maxValue:100},formatter:f.percentCompleteBar,sortable:!0,filterable:!0,filter:{model:v.slider,operator:">="},customTooltip:{position:"center",formatter:(e,i,n)=>typeof n=="string"&&n.includes("%")?n:`${n}%`,headerFormatter:void 0,headerRowFormatter:void 0}},{id:"start",name:"Start",field:"start",sortable:!0,type:"date",outputType:"dateIso",filterable:!0,filter:{model:v.compoundDate},formatter:f.dateIso,editor:{model:C.date},customTooltip:{formatter:()=>"",asyncProcess:()=>new Promise(e=>{setTimeout(()=>e({}),this.serverApiDelay)}),asyncPostFormatter:this.tooltipFormatter.bind(this)}},{id:"finish",name:"Finish",field:"finish",sortable:!0,editor:{model:C.date,options:{displayDateMin:"today"}},type:"date",outputType:"dateIso",formatter:f.dateIso,filterable:!0,filter:{model:v.dateRange},disableTooltip:!0},{id:"effortDriven",name:"Effort Driven",field:"effortDriven",width:80,minWidth:20,maxWidth:100,cssClass:"cell-effort-driven",sortable:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:v.singleSelect},exportWithFormatter:!1,formatter:f.checkmarkMaterial},{id:"prerequisites",name:"Prerequisites",field:"prerequisites",filterable:!0,formatter:(e,i,n)=>{if(n&&Array.isArray(n)){const a=n.map(r=>`Task ${r}`).join(", ");return`<span title="${a}">${a}</span>`}return""},customTooltip:{useRegularTooltip:!0,maxWidth:500},exportWithFormatter:!0,sanitizeDataExport:!0,minWidth:100,sortable:!0,editor:{collectionAsync:new Promise(e=>{setTimeout(()=>{e(Array.from(Array(this.dataset.length).keys()).map(i=>({value:i,label:i,prefix:"Task",suffix:"days"})))},500)}),customStructure:{label:"label",value:"value",labelPrefix:"prefix"},collectionOptions:{separatorBetweenTextLabels:" "},model:C.multipleSelect},filter:{collectionLazy:()=>(this.showLazyLoading=!0,new Promise(e=>{setTimeout(()=>{this.showLazyLoading=!1,e(Array.from(Array((this.dataset||[]).length).keys()).map(i=>({value:i,label:`Task ${i}`})))},this.serverApiDelay)})),customStructure:{label:"label",value:"value",labelPrefix:"prefix"},collectionOptions:{separatorBetweenTextLabels:" "},options:{minHeight:70},model:v.multipleSelect,operator:"IN_CONTAINS"}},{id:"action",name:"Action",field:"action",width:70,minWidth:70,maxWidth:70,formatter:()=>'<div class="button-style margin-auto" style="width: 35px;"><span class="mdi mdi-chevron-down text-primary"></span></div>',excludeFromExport:!0,cellMenu:{hideCloseButton:!1,commandTitle:"Commands",commandItems:[{command:"command2",title:"Command 2",positionOrder:62,action:(e,i)=>{console.log(i.dataContext,i.column)},itemUsabilityOverride:e=>!e.dataContext.completed},{command:"command1",title:"Command 1",cssClass:"orange",positionOrder:61},{command:"delete-row",title:"Delete Row",positionOrder:64,iconCssClass:"mdi mdi-close",cssClass:"red",textCssClass:"bold",itemVisibilityOverride:e=>!e.dataContext.completed},{divider:!0,command:"",positionOrder:63},{command:"help",title:"Help",iconCssClass:"mdi mdi-help-circle-outline",positionOrder:66},{command:"something",title:"Disabled Command",disabled:!0,positionOrder:67}]}}],this.gridOptions={autoEdit:!0,autoCommitEdit:!0,editable:!0,autoResize:{container:"#demo-container",rightPadding:10},enableAutoSizeColumns:!0,enableAutoResize:!0,enableCellNavigation:!0,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!0},externalResources:[new oi,new G],customTooltip:{formatter:this.tooltipFormatter.bind(this),headerFormatter:this.headerFormatter,headerRowFormatter:this.headerRowFormatter,usabilityOverride:e=>e.cell!==0&&e?.column?.id!=="action",observeAllTooltips:!0,observeTooltipContainer:"body"},presets:{filters:[{columnId:"prerequisites",searchTerms:[1,3,5,7,9,12,15,18,21,25,28,29,30,32,34]}]},rowHeight:38,enableFiltering:!0,selectionOptions:{selectActiveRow:!1},showCustomFooter:!0,enableCheckboxSelector:!0,enableSelection:!0,checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},editCommandHandler:(e,i,n)=>{this.editCommandQueue.push(n),n.execute()},enableCellMenu:!0,cellMenu:{onCommand:(e,i)=>this.executeCommand(e,i),onOptionSelected:(e,i)=>{const n=i?.dataContext;n&&n.hasOwnProperty("completed")&&(n.completed=i.item.option,this.aureliaGrid.gridService.updateItem(n))}}}}loadData(e){const i=[];for(let n=0;n<e;n++){const a=2e3+Math.floor(Math.random()*10),r=new Date().getFullYear()-3+Math.floor(Math.random()*10),l=Math.floor(Math.random()*11),d=Math.floor(Math.random()*29),u=new Date(r,l+1,d);i[n]={id:n,title:"Task "+n,duration:Math.round(Math.random()*100),description:n>500?null:`This is a sample task description.
It can be multiline\r\rAnother line...`,percentComplete:Math.floor(Math.random()*96+5),start:new Date(a,l,d),finish:u<new Date?"":u,cost:n%33===0?null:Math.round(Math.random()*1e4)/100,effortDriven:n%5===0,prerequisites:n%2===0&&n!==0&&n<50?[n,n-1]:[]}}return i}executeCommand(e,i){const n=i.command,a=i.dataContext;switch(n){case"command1":alert("Command 1");break;case"command2":alert("Command 2");break;case"help":alert("Please help!");break;case"delete-row":confirm(`Do you really want to delete row (${(i.row||0)+1}) with "${a.title}"`)&&this.aureliaGrid?.gridService.deleteItemById(a.id);break}}loadCompletionIcons(e){let i="",n=0;e>5&&e<25?n=1:e>=25&&e<50?n=2:e>=50&&e<75?n=3:e>=75&&e<100?n=4:e===100&&(n=5);for(let a=0;a<n;a++){const r=n===5?"text-success":n>=3?"text-warning":"text-secondary";i+=`<span class="mdi mdi-check-circle-outline ${r}"></span>`}return i}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}setFiltersDynamically(e){const i=e==="="?"=":"!=";this.aureliaGrid.filterService.updateFilters([{columnId:"desc",operator:i,searchTerms:[""]}],!0)}}Zl=RM();ua=BM(Zl,0,"Example33",Lg,ua);WM(Zl,1,ua);const VM=Object.freeze(Object.defineProperty({__proto__:null,get Example33(){return ua}},Symbol.toStringTag,{value:"Module"})),zg="example34",Ar=`<h2>
  Example 34: Real-Time Trading Platform
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example34.ts"
    >
      <span class="mdi mdi-link-variant"></span> code
    </a>
  </span>
  <button class="ms-2 btn btn-outline-secondary btn-sm btn-icon" type="button" data-test="toggle-subtitle" click.trigger="toggleSubTitle()">
    <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
  </button>
  <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="toggleDarkMode()" data-test="toggle-dark-mode">
    <span class="mdi mdi-theme-light-dark"></span>
    <span>Toggle Dark Mode</span>
  </button>
</h2>

<div class="subtitle">
  Simulate a stock trading platform with lot of price changes, it is strongly suggested to disable the
  <code>autoResize.autoHeight</code> grid option for this type of grid.
  <ul>
    <li>
      you can start/stop the simulation, you can see SlickGrid huge perf by setting: (1) lower Changes Rate, (2) increase both Changes per
      Cycle, and (3) lower Highlight Duration
    </li>
    <li>optionally change random numbers, between 0 and 10 symbols, per cycle (higher numbers means more changes)</li>
    <li>optionally change the simulation changes refresh rate in ms (lower number means more changes).</li>
    <li>you can Group by 1 of these columns: Currency, Market or Type</li>
  </ul>
</div>

<div class="trading-platform">
  <div class="row mb-4 simulation-form">
    <div class="col-sm-12 d-flex align-items-center">
      <div class="range">
        <label for="refreshRateRange" class="form-label me-1">Changes Rate(ms)</label>
        <input type="range" class="form-range" id="refreshRateRange" min="0" max="250" value.bind="refreshRate" />
        <span class="refresh-rate">
          <input type="number" value.bind="refreshRate" />
        </span>
      </div>
      <span class="ms-3 me-1">
        <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="start-btn" click.trigger="startSimulation()">
          <li class="mdi mdi-play-circle-outline"></li>
          Start Simulation
        </button>
      </span>
      <span class="me-3">
        <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="stop-btn" click.trigger="stopSimulation()">
          <li class="mdi mdi-stop-circle-outline"></li>
          Stop Simulation
        </button>
      </span>
      <span class="mx-1">
        <label for="change-per-cycle-input">Changes p/Cycle</label>
        <input type="number" id="change-per-cycle-input" value.bind="minChangePerCycle" max.bind="maxChangePerCycle" />
        to
        <input type="number" value.bind="maxChangePerCycle" min.bind="minChangePerCycle" />
      </span>
      <span class="ms-2">
        <label for="highlight-input">Highlight Duration(ms)</label>
        <input type="number" id="highlight-input" data-test="highlight-input" value.bind="highlightDuration" />
      </span>
      <div class="ms-auto">
        <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="toggleFullScreen()">
          <li class.bind="isFullScreen ? 'mdi mdi-arrow-collapse' : 'mdi mdi-arrow-expand'"></li>
          Toggle Full-Screen
        </button>
      </div>
    </div>
  </div>

  <aurelia-slickgrid
    grid-id="grid34"
    columns.bind="columnDefinitions"
    options.bind="gridOptions"
    dataset.bind="dataset"
    instances.bind="aureliaGrid"
  >
  </aurelia-slickgrid>
</div>
`,Ng=[],Wg={};let xn;function HM(t){xn||(xn=E.define({name:zg,template:Ar,dependencies:Ng,bindables:Wg})),t.register(xn)}const UM=Object.freeze(Object.defineProperty({__proto__:null,bindables:Wg,default:Ar,dependencies:Ng,name:zg,register:HM,template:Ar},Symbol.toStringTag,{value:"Module"}));var AF=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function RF(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var qM=Object.create,Jl=Object.defineProperty,YM=Object.getOwnPropertyDescriptor,KM=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Bg=t=>{throw TypeError(t)},jg=(t,e,i)=>e in t?Jl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,QM=(t,e)=>Jl(t,"name",{value:e,configurable:!0}),ZM=t=>[,,,qM(null)],JM=["class","method","getter","setter","accessor","field","value","get","set"],Vg=t=>t!==void 0&&typeof t!="function"?Bg("Function expected"):t,XM=(t,e,i,n,a)=>({kind:JM[t],name:e,metadata:n,addInitializer:r=>i._?Bg("Already initialized"):a.push(Vg(r||null))}),e2=(t,e)=>jg(e,KM("metadata"),t[3]),t2=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},i2=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&YM(a,i));QM(a,i);for(var p=n.length-1;p>=0;p--)u=XM(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,Vg(l)&&(a=l);return e2(t,a),c&&Jl(a,i,c),m?s^4?r:c:a},H=(t,e,i)=>jg(t,typeof e!="symbol"?e+"":e,i),Hg,Xl;const a2=200,n2=(t,e,i)=>`<img src="https://flags.fmcdn.net/data/flags/mini/${i.substring(0,2).toLowerCase()}.png" width="20"/> ${i}`,r2=(t,e,i,n,a)=>{const r=a.priceChange>=0?"up":"down",l=new DocumentFragment,d=document.createElement("div");d.className=`d-inline-flex align-items-center text-${r==="up"?"success":"danger"}`;const u=document.createElement("span");return u.className=`mdi mdi-arrow-${r}`,d.appendChild(u),l.appendChild(d),i instanceof HTMLElement?d.appendChild(i):d.appendChild(document.createTextNode(i)),l},o2=(t,e,i)=>`<div class="d-inline-flex align-items-center"><span class="me-1 mdi font-16px mdi-${i==="Buy"?"plus":"minus"}-circle ${i==="Buy"?"text-info":"text-warning"}"></span> ${i}</div>`,l2=(t,e,i,n,a)=>{if(a.historic.length<2)return"";const r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.setAttributeNS(null,"width","135"),r.setAttributeNS(null,"height","30"),r.setAttributeNS(null,"stroke-width","2"),r.classList.add("sparkline"),Ov(r,a.historic,{cursorwidth:2,onmousemove:(d,u)=>{const m=d.target.closest("svg")?.nextElementSibling;m&&(m.hidden=!1,m.textContent=`$${(u.value*100/100).toFixed(2)}`,m.style.top=`${d.offsetY}px`,m.style.left=`${d.offsetX+20}px`)},onmouseout:d=>{const s=d.target.closest("svg")?.nextElementSibling;s&&(s.hidden=!0)}});const l=document.createElement("div");return l.appendChild(r),l.appendChild(I("div",{className:"trading-tooltip",hidden:!0})),l};Hg=[T(UM)];class ma{constructor(){H(this,"_darkMode",!1),H(this,"aureliaGrid"),H(this,"gridOptions"),H(this,"columnDefinitions",[]),H(this,"dataset",[]),H(this,"hideSubTitle",!1),H(this,"isFullScreen",!1),H(this,"highlightDuration",150),H(this,"itemCount",200),H(this,"minChangePerCycle",0),H(this,"maxChangePerCycle",10),H(this,"refreshRate",75),H(this,"timer"),this.defineGrid()}attached(){this.getData(),setTimeout(()=>{this.startSimulation()},this.refreshRate)}detaching(){this.stopSimulation(),document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light"}defineGrid(){this.columnDefinitions=[{id:"currency",name:"Currency",field:"currency",filterable:!0,sortable:!0,minWidth:65,width:65,formatter:n2,filter:{model:v.singleSelect,collection:[{label:"",value:""},{label:"CAD",value:"CAD"},{label:"USD",value:"USD"}]},grouping:{getter:"currency",formatter:e=>`Currency: <span style="color: var(--slick-primary-color); font-weight: bold;">${e.value}</span>  <span style="color: #659bff;">(${e.count} items)</span>`,aggregators:[new k.Sum("amount")],aggregateCollapsed:!0,collapsed:!1}},{id:"symbol",name:"Symbol",field:"symbol",filterable:!0,sortable:!0,minWidth:65,width:65},{id:"market",name:"Market",field:"market",filterable:!0,sortable:!0,minWidth:75,width:75,grouping:{getter:"market",formatter:e=>`Market: <span style="color: var(--slick-primary-color); font-weight: bold;">${e.value}</span>  <span style="color: #659bff;">(${e.count} items)</span>`,aggregators:[new k.Sum("amount")],aggregateCollapsed:!0,collapsed:!1}},{id:"company",name:"Company",field:"company",filterable:!0,sortable:!0,minWidth:80,width:130},{id:"trsnType",name:"Type",field:"trsnType",filterable:!0,sortable:!0,minWidth:60,width:60,formatter:o2,filter:{model:v.singleSelect,collection:[{label:"",value:""},{label:"Buy",value:"Buy"},{label:"Sell",value:"Sell"}]},grouping:{getter:"trsnType",formatter:e=>`Type: <span style="color: var(--slick-primary-color); font-weight: bold;">${e.value}</span>  <span style="color: #659bff;">(${e.count} items)</span>`,aggregators:[new k.Sum("amount")],aggregateCollapsed:!0,collapsed:!1}},{id:"priceChange",name:"Change",field:"priceChange",filterable:!0,sortable:!0,minWidth:80,width:80,filter:{model:v.compoundInputNumber},type:"number",formatter:f.multiple,params:{formatters:[f.dollar,r2],maxDecimal:2}},{id:"price",name:"Price",field:"price",filterable:!0,sortable:!0,minWidth:70,width:70,filter:{model:v.compoundInputNumber},type:"number",formatter:f.dollar,params:{maxDecimal:2}},{id:"quantity",name:"Quantity",field:"quantity",filterable:!0,sortable:!0,minWidth:70,width:70,filter:{model:v.compoundInputNumber},type:"number"},{id:"amount",name:"Amount",field:"amount",filterable:!0,sortable:!0,minWidth:70,width:60,filter:{model:v.compoundInputNumber},type:"number",formatter:f.dollar,params:{maxDecimal:2},groupTotalsFormatter:B.sumTotalsDollarBold},{id:"historic",name:"Price History",field:"historic",minWidth:100,width:150,maxWidth:150,formatter:l2},{id:"execution",name:"Execution Timestamp",field:"execution",filterable:!0,sortable:!0,minWidth:125,formatter:f.dateTimeIsoAmPm,exportWithFormatter:!0,type:"dateTimeIsoAM_PM",filter:{model:v.compoundDate}}],this.gridOptions={autoResize:{container:".trading-platform",autoHeight:!1,rightPadding:0,bottomPadding:10},formatterOptions:{displayNegativeNumberWithParentheses:!0,thousandSeparator:","},draggableGrouping:{dropPlaceHolderText:"Drop a column header here to group by any of these available columns: Currency, Market or Type",deleteIconCssClass:"mdi mdi-close color-danger",sortAscIconCssClass:"mdi mdi-arrow-up",sortDescIconCssClass:"mdi mdi-arrow-down"},enableDraggableGrouping:!0,createPreHeaderPanel:!0,darkMode:this._darkMode,showPreHeaderPanel:!0,preHeaderPanelHeight:40,enableCellNavigation:!0,enableFiltering:!0,cellHighlightCssClass:"changed"}}getData(){const e=[];for(let i=0;i<a2;i++){const n=Math.round(Math.random()*100),a=this.randomNumber(1,50),r=this.randomNumber(125,255),l=this.randomNumber(-25,35,!1),d=this.randomNumber(l,300),u=d<5?r:a,s=d*u,m=new Date;m.setHours(9,30,0);const o=Math.floor(Math.random()*10)%2?"CAD":"USD",g=dt.company.name();e[i]={id:i,currency:o,trsnType:Math.round(Math.random()*100)%2?"Buy":"Sell",company:g,symbol:o==="CAD"?g.substr(0,3).toUpperCase()+".TO":g.substr(0,4).toUpperCase(),market:o==="CAD"?"TSX":d>200?"Nasdaq":"S&P 500",duration:i%33===0?null:Math.random()*100+"",percentCompleteNumber:n,priceChange:l,price:d,quantity:u,amount:s,execution:m,historic:[d]}}this.dataset=e}startSimulation(){const e={},i=this.randomNumber(this.minChangePerCycle,this.maxChangePerCycle);for(let n=0;n<i;n++){const a=this.randomNumber(1,50),r=this.randomNumber(125,255),l=Math.round(Math.random()*(this.dataset.length-1)),d=this.randomNumber(-25,25,!1),u=Dv(this.dataset[l]),s={...this.dataset[l]};s.priceChange=d,s.price=s.price+d<0?0:s.price+d,s.quantity=s.price<5?r:a,s.amount=s.price*s.quantity,s.trsnType=Math.round(Math.random()*100)%2?"Buy":"Sell",s.execution=new Date,s.historic.push(s.price),s.historic=s.historic.slice(-20),e[l]||(e[l]={}),e[l].id="changed",this.renderCellHighlighting(s,this.findColumnById("priceChange"),d),(u.priceChange<0&&s.priceChange>0||u.priceChange>0&&s.priceChange<0)&&this.renderCellHighlighting(s,this.findColumnById("price"),d),this.aureliaGrid.dataView.updateItem(s.id,s)}this.timer=setTimeout(this.startSimulation.bind(this),this.refreshRate||0)}stopSimulation(){clearTimeout(this.timer)}findColumnById(e){return this.columnDefinitions.find(i=>i?.field===e)}renderCellHighlighting(e,i,n){if(e&&i){const a=this.aureliaGrid.dataView.getRowByItem(e);if(a>=0){const r={[a]:{[i.id]:n>=0?"changed-gain":"changed-loss"}};this.aureliaGrid.slickGrid.setCellCssStyles(`highlight_${[i.id]}${a}`,r),setTimeout(()=>this.removeUnsavedStylingFromCell(e,i,a),this.highlightDuration)}}}removeUnsavedStylingFromCell(e,i,n){this.aureliaGrid.slickGrid.removeCellCssStyles(`highlight_${[i.id]}${n}`)}toggleFullScreen(){const e=document.querySelector(".trading-platform");e?.classList.contains("full-screen")?(e.classList.remove("full-screen"),this.isFullScreen=!1):e&&(e.classList.add("full-screen"),this.isFullScreen=!0),this.aureliaGrid.resizerService.resizeGrid()}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.aureliaGrid.slickGrid?.setOptions({darkMode:this._darkMode})}toggleBodyBackground(){this._darkMode?(document.querySelector(".panel-wm-content").classList.add("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="dark"):(document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light")}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}randomNumber(e,i,n=!0){const a=Math.random()*(i-e+1)+e;return n?Math.floor(a):a}}Xl=ZM();ma=i2(Xl,0,"Example34",Hg,ma);t2(Xl,1,ma);const s2=Object.freeze(Object.defineProperty({__proto__:null,get Example34(){return ma}},Symbol.toStringTag,{value:"Module"})),Ug="example35",Rr=`<h2>
  Example 35: Row Based Editing
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example35.ts"
    >
      <span class="mdi mdi-link-variant"></span> code
    </a>
  </span>
  <button class="ms-2 btn btn-outline-secondary btn-sm btn-icon" type="button" data-test="toggle-subtitle" click.trigger="toggleSubTitle()">
    <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
  </button>
</h2>

<div class="subtitle">
  <ul>
    <li>
      The Row Based Edit plugin allows you to edit either a single or multiple specific rows at a time, while disabling the rest of the grid
      rows.
    </li>
    <li>
      Editedable rows, as well as modified cells are highlighted with a different color, which you can customize using css variables (see
      <a
        target="_blank"
        href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example35.scss"
      >
        example35.scss </a
      >)
    </li>
    <li>Modifications are kept track of and if the cancel button is pressed, all modifications are rolled back.</li>
    <li>
      If the save button is pressed, a custom "onBeforeRowUpdated" callback is called, which you can use to save the data with your
      backend.<br />
      The callback needs to return a Promise&lt;boolean&gt; and if the promise resolves to true, then the row will be updated, otherwise it
      will be cancelled and stays in edit mode. You can try out the later by defining a Duration value <b>larger than 40</b>.
      <br />
      <small
        ><span class="has-text-danger">NOTE:</span> You can also combine this with e.g. Batch Editing like shown
        <a href="#/example30">in Example 30</a></small
      >
    </li>
    <li>
      This example additionally uses the ExcelCopyBuffer Plugin, which you can see also in Slickgrid-Universal
      <a href="https://ghiscoding.github.io/slickgrid-universal/#/example19">example 19</a>. The example defines a rule that pastes in the
      first column are prohibited. In combination with the Row Based Editing Plugin though, this rule gets enhanced with the fact that only
      the edited rows are allowed to be pasted into, while still respecting the original rule.
    </li>
  </ul>
</div>

<section>
  <div class="row mb-4">
    <div class="col-sm-8">
      <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="single-multi-toggle" click.trigger="toggleSingleMultiRowEdit()">
        Toggle Single/Multi Row Edit
      </button>
      <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="toggle-language" click.trigger="switchLanguage()">
        <i class="mdi mdi-translate"></i>
        Switch Language for Action column buttons
      </button>
      <label>Locale:</label>
      <span style="font-style: italic; width: 70px" data-test="selected-locale"> \${selectedLanguage + '.json'} </span>
    </div>

    <div class="col-sm-4" class.bind="statusClass">
      <strong>Status: </strong>
      <span data-test="fetch-result" textcontent.bind="fetchResult"></span>
    </div>
  </div>
</section>

<aurelia-slickgrid
  grid-id="grid35"
  columns.bind="columnDefinitions"
  options.bind="gridOptions"
  dataset.bind="dataset"
  instances.bind="aureliaGrid"
>
</aurelia-slickgrid>
`,qg=[],Yg={};let Tn;function d2(t){Tn||(Tn=E.define({name:Ug,template:Rr,dependencies:qg,bindables:Yg})),t.register(Tn)}const c2=Object.freeze(Object.defineProperty({__proto__:null,bindables:Yg,default:Rr,dependencies:qg,name:Ug,register:d2,template:Rr},Symbol.toStringTag,{value:"Module"}));var u2=Object.create,es=Object.defineProperty,m2=Object.getOwnPropertyDescriptor,p2=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Kg=t=>{throw TypeError(t)},Qg=(t,e,i)=>e in t?es(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,h2=(t,e)=>es(t,"name",{value:e,configurable:!0}),g2=t=>[,,,u2(null)],b2=["class","method","getter","setter","accessor","field","value","get","set"],Zg=t=>t!==void 0&&typeof t!="function"?Kg("Function expected"):t,f2=(t,e,i,n,a)=>({kind:b2[t],name:e,metadata:n,addInitializer:r=>i._?Kg("Already initialized"):a.push(Zg(r||null))}),v2=(t,e)=>Qg(e,p2("metadata"),t[3]),_2=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},y2=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&m2(a,i));h2(a,i);for(var p=n.length-1;p>=0;p--)u=f2(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,Zg(l)&&(a=l);return v2(t,a),c&&es(a,i,c),m?s^4?r:c:a},me=(t,e,i)=>Qg(t,typeof e!="symbol"?e+"":e,i),Jg,ts;const S2=20;Jg=[T(c2)];class pa{constructor(e=O(Se)){this.i18n=e,me(this,"aureliaGrid"),me(this,"gridOptions"),me(this,"columnDefinitions"),me(this,"dataset"),me(this,"fetchResult",""),me(this,"hideSubTitle",!1),me(this,"selectedLanguage"),me(this,"selectedLanguageFile"),me(this,"statusClass","alert alert-light"),me(this,"statusStyle","display: none"),this.defineGrid();const i="en";this.i18n.setLocale(i),this.selectedLanguage=i}attached(){this.dataset=this.getData(S2)}defineGrid(){this.columnDefinitions=[{id:"title",name:"Title",field:"title",sortable:!0,minWidth:100,filterable:!0,editor:{model:C.text}},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,minWidth:100,filterable:!0,type:"number",editor:{model:C.text}},{id:"%",name:"% Complete",field:"percentComplete",sortable:!0,minWidth:100,filterable:!0,type:"number",editor:{model:C.text}},{id:"start",name:"Start",field:"start",formatter:f.dateIso,exportWithFormatter:!0,filterable:!0,editor:{model:C.date}},{id:"finish",name:"Finish",field:"finish",formatter:f.dateIso,exportWithFormatter:!0,filterable:!0,editor:{model:C.date}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",sortable:!0,minWidth:100,filterable:!0,type:"boolean",editor:{model:C.checkbox}}],this.gridOptions={enableAutoResize:!1,gridHeight:350,gridWidth:800,rowHeight:33,enableExcelCopyBuffer:!0,excelCopyBufferOptions:{onBeforePasteCell:(e,i)=>i.cell>0},autoEdit:!1,editable:!0,enableCellNavigation:!0,enableRowBasedEdit:!0,enableTranslate:!0,i18n:this.i18n,rowBasedEditOptions:{allowMultipleRows:!1,onBeforeEditMode:()=>this.clearStatus(),onBeforeRowUpdated:e=>{const{effortDriven:i,percentComplete:n,finish:a,start:r,duration:l,title:d}=e.dataContext;return l>40?(alert("Sorry, 40 is the maximum allowed duration."),Promise.resolve(!1)):C2("your-backend-api/endpoint",{body:JSON.stringify({effortDriven:i,percentComplete:n,finish:a,start:r,duration:l,title:d})}).catch(u=>(console.error(u),!1)).then(u=>{if(u===!1)return this.statusClass="alert alert-danger",!1;if(typeof u=="object")return u.json()}).then(u=>(this.statusStyle="display: block",this.statusClass="alert alert-success",this.fetchResult=u.message,!0))},actionColumnConfig:{width:100,minWidth:100,maxWidth:100},actionButtons:{editButtonClassName:"button-style margin-auto btn-icon px-2 me-1",iconEditButtonClassName:"mdi mdi-pencil",cancelButtonClassName:"button-style btn-icon px-2",cancelButtonTitle:"Cancel row",cancelButtonTitleKey:"RBE_BTN_CANCEL",iconCancelButtonClassName:"mdi mdi-undo text-danger",cancelButtonPrompt:"Are you sure you want to cancel your changes?",updateButtonClassName:"button-style btn-icon px-2 me-1",updateButtonTitle:"Update row",updateButtonTitleKey:"RBE_BTN_UPDATE",iconUpdateButtonClassName:"mdi mdi-check text-success",updateButtonPrompt:"Save changes?",deleteButtonClassName:"button-style btn-icon px-2",deleteButtonTitle:"Delete row",iconDeleteButtonClassName:"mdi mdi-trash-can text-danger",deleteButtonPrompt:"Are you sure you want to delete this row?"}},externalResources:[new oi]}}getData(e){const i=[];for(let n=0;n<e;n++){const a=2e3+Math.floor(Math.random()*10),r=Math.floor(Math.random()*11),l=Math.floor(Math.random()*29),d=Math.round(Math.random()*100);i[n]={id:n,title:"Task "+n,duration:Math.round(Math.random()*40)+"",percentComplete:d,start:new Date(a,r+1,l),finish:new Date(a+1,r+1,l),effortDriven:n%5===0}}return i}clearStatus(){this.statusClass="alert alert-light",this.statusStyle="display: none",this.fetchResult=""}toggleSingleMultiRowEdit(){const e={...this.gridOptions,rowBasedEditOptions:{...this.gridOptions.rowBasedEditOptions,allowMultipleRows:!this.gridOptions.rowBasedEditOptions?.allowMultipleRows}};this.aureliaGrid.slickGrid.setOptions(e),this.gridOptions=this.aureliaGrid.slickGrid.getOptions()}async switchLanguage(){const e=this.selectedLanguage==="en"?"fr":"en";await this.i18n.setLocale(e),this.selectedLanguage=e}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}ts=g2();pa=y2(ts,0,"Example35",Jg,pa);_2(ts,1,pa);function C2(t,e){return new Promise(i=>{setTimeout(()=>{i(new Response(JSON.stringify({status:200,message:"success"})))},window.Cypress?10:500)})}const w2=Object.freeze(Object.defineProperty({__proto__:null,get Example35(){return pa}},Symbol.toStringTag,{value:"Module"})),Xg="example36",Lr=`<div id="demo-container" class="container-fluid">
  <h2>
    Example 36: Excel Export Formulas
    <span class="float-end">
      <a
        style="font-size: 18px"
        target="_blank"
        href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example36.ts"
      >
        <span class="mdi mdi-link-variant"></span> code
      </a>
    </span>
    <button
      class="ms-2 btn btn-outline-secondary btn-sm btn-icon"
      type="button"
      data-test="toggle-subtitle"
      click.trigger="toggleSubTitle()"
    >
      <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
    </button>
  </h2>

  <div class="subtitle">
    Grid with Excel Formulas (<a
      href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/export-to-excel#cell-value-parser"
      target="_blank"
      >Wiki docs</a
    >). Calculate Totals via Formatters in the UI, but use Excel Formula when exporting via
    <code>excelExportOptions.valueParserCallback</code> When Grouped we will also calculate the Group Totals in the UI via Group Formatter
    and we again use Excel Formula to calculate the Group Totals (sum) dynamically. For Grouping we need to use
    <code>groupTotalsExcelExportOptions.valueParserCallback</code> instead.
  </div>

  <section class="row mb-2">
    <div class="mb-1">
      <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="exportToExcel()" data-test="export-excel-btn">
        <span class="mdi mdi-file-excel-outline text-success"></span>
        <span>Export to Excel</span>
      </button>
      <span>
        <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="groupByTaxable()" data-test="group-by-btn">
          <span>Group by Taxable</span>
        </button>
        <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="clearGrouping()" data-test="clear-grouping-btn">
          <span>Clear grouping</span>
        </button>
      </span>
      <span class="ms-4 text-bold d-inline-flex align-items-center gap-4px">
        Tax Rate (%):
        <input type="number" value.bind="taxRate" class="narrow input" step="0.25" data-test="taxrate" />
        <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="updateTaxRate()" data-test="update-btn">Update</button>
      </span>
    </div>
  </section>

  <aurelia-slickgrid
    grid-id="grid36"
    columns.bind="columnDefinitions"
    options.bind="gridOptions"
    dataset.bind="dataset"
    instances.bind="aureliaGrid"
    on-cell-change.trigger="invalidateAll()"
  >
  </aurelia-slickgrid>
</div>
`,eb=[],tb={};let En;function x2(t){En||(En=E.define({name:Xg,template:Lr,dependencies:eb,bindables:tb})),t.register(En)}const T2=Object.freeze(Object.defineProperty({__proto__:null,bindables:tb,default:Lr,dependencies:eb,name:Xg,register:x2,template:Lr},Symbol.toStringTag,{value:"Module"}));var E2=Object.create,is=Object.defineProperty,$2=Object.getOwnPropertyDescriptor,k2=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),ib=t=>{throw TypeError(t)},ab=(t,e,i)=>e in t?is(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,D2=(t,e)=>is(t,"name",{value:e,configurable:!0}),O2=t=>[,,,E2(null)],M2=["class","method","getter","setter","accessor","field","value","get","set"],nb=t=>t!==void 0&&typeof t!="function"?ib("Function expected"):t,P2=(t,e,i,n,a)=>({kind:M2[t],name:e,metadata:n,addInitializer:r=>i._?ib("Already initialized"):a.push(nb(r||null))}),I2=(t,e)=>ab(e,k2("metadata"),t[3]),G2=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},F2=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&$2(a,i));D2(a,i);for(var p=n.length-1;p>=0;p--)u=P2(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,nb(l)&&(a=l);return I2(t,a),c&&is(a,i,c),m?s^4?r:c:a},ge=(t,e,i)=>ab(t,typeof e!="symbol"?e+"":e,i),rb,as;function A2(t,e,i){const n=i.getOptions(),a=e.editor;return n.editable&&a}const R2=(t,e,i,n,a,r)=>{const l=A2(a,n,r);i=i??"";const d=document.createElement("div");return d.className="editing-field",i instanceof HTMLElement?d.appendChild(i):d.textContent=i,l?d:i};class $n{constructor(e,i){this.field=e,this.taxRate=i,ge(this,"_sum",0),ge(this,"_type","sum")}get type(){return this._type}init(){this._sum=0}accumulate(e){if(this.field==="taxes"&&e.taxable&&(this._sum+=e.price*e.qty*(this.taxRate/100)),this.field==="subTotal"&&(this._sum+=e.price*e.qty),this.field==="total"){let i=0;e.taxable&&(i=e.price*e.qty*(this.taxRate/100)),this._sum+=e.price*e.qty+i}}storeResult(e){(!e||e[this._type]===void 0)&&(e[this._type]={}),e[this._type][this.field]=this._sum}}rb=[T(T2)];class ha{constructor(){ge(this,"columnDefinitions",[]),ge(this,"gridOptions"),ge(this,"dataset",[]),ge(this,"aureliaGrid"),ge(this,"excelExportService"),ge(this,"hideSubTitle",!1),ge(this,"isDataGrouped",!1),ge(this,"taxRate",7.5),this.excelExportService=new G,this.defineGrid()}attached(){this.dataset=this.getData()}defineGrid(){this.columnDefinitions=[{id:"sel",name:"#",field:"id",headerCssClass:"header-centered",cssClass:"cell-unselectable",excludeFromExport:!0,maxWidth:30},{id:"name",name:"Name",field:"name",sortable:!0,width:140,filterable:!0,excelExportOptions:{width:18}},{id:"price",name:"Price",field:"price",type:"number",editor:{model:C.float,decimal:2},sortable:!0,width:70,filterable:!0,formatter:f.dollar,groupTotalsFormatter:B.sumTotalsDollarBold,groupTotalsExcelExportOptions:{style:{font:{bold:!0,size:11.5},format:"$0.00",border:{top:{color:"FF747474",style:"thick"}}},valueParserCallback:this.excelGroupCellParser.bind(this)}},{id:"qty",name:"Quantity",field:"qty",type:"number",groupTotalsFormatter:B.sumTotalsBold,groupTotalsExcelExportOptions:{style:{font:{bold:!0,size:11.5},border:{top:{color:"FF747474",style:"thick"}}},valueParserCallback:this.excelGroupCellParser.bind(this)},params:{minDecimal:0,maxDecimal:0},editor:{model:C.integer},sortable:!0,width:60,filterable:!0},{id:"subTotal",name:"Sub-Total",field:"subTotal",cssClass:"text-sub-total",type:"number",sortable:!0,width:70,filterable:!0,exportWithFormatter:!1,formatter:f.multiple,groupTotalsFormatter:B.sumTotalsDollarBold,params:{formatters:[(e,i,n,a,r)=>r.price*r.qty,f.dollar]},excelExportOptions:{style:{font:{outline:!0,italic:!0,color:"FF215073"},format:"$0.00"},width:12,valueParserCallback:this.excelRegularCellParser.bind(this)},groupTotalsExcelExportOptions:{style:{font:{bold:!0,italic:!0,size:11.5},format:"$0.00",border:{top:{color:"FF747474",style:"thick"}}},valueParserCallback:this.excelGroupCellParser.bind(this)}},{id:"taxable",name:"Taxable",field:"taxable",cssClass:"text-center",sortable:!0,width:60,filterable:!0,formatter:f.checkmarkMaterial,exportCustomFormatter:(e,i,n)=>n?"✓":"",excelExportOptions:{style:{alignment:{horizontal:"center"}}}},{id:"taxes",name:"Taxes",field:"taxes",cssClass:"text-taxes",type:"number",sortable:!0,width:70,filterable:!0,formatter:f.multiple,groupTotalsFormatter:B.sumTotalsDollarBold,params:{formatters:[(e,i,n,a,r)=>r.taxable?r.price*r.qty*(this.taxRate/100):null,f.dollar]},excelExportOptions:{style:{font:{outline:!0,italic:!0,color:"FFC65911"},format:"$0.00"},width:12,valueParserCallback:this.excelRegularCellParser.bind(this)},groupTotalsExcelExportOptions:{style:{font:{bold:!0,italic:!0,color:"FFC65911",size:11.5},format:"$0.00",border:{top:{color:"FF747474",style:"thick"}}},valueParserCallback:this.excelGroupCellParser.bind(this)}},{id:"total",name:"Total",field:"total",type:"number",sortable:!0,width:70,filterable:!0,cssClass:"text-total",formatter:f.multiple,groupTotalsFormatter:B.sumTotalsDollarBold,params:{formatters:[(e,i,n,a,r)=>{let l=r.price*r.qty;return r.taxable&&(l+=l*(this.taxRate/100)),l},f.dollar]},excelExportOptions:{style:{font:{outline:!0,bold:!0,color:"FF005A9E"},format:"$0.00"},width:12,valueParserCallback:this.excelRegularCellParser.bind(this)},groupTotalsExcelExportOptions:{style:{font:{bold:!0,color:"FF005A9E",size:12},format:"$0.00",border:{top:{color:"FF747474",style:"thick"}}},valueParserCallback:this.excelGroupCellParser.bind(this)}}],this.gridOptions={autoAddCustomEditorFormatter:R2,gridHeight:410,gridWidth:750,enableCellNavigation:!0,autoEdit:!0,autoCommitEdit:!0,editable:!0,rowHeight:33,formatterOptions:{maxDecimal:2,minDecimal:2},enableGrouping:!0,externalResources:[this.excelExportService],enableExcelExport:!0,excelExportOptions:{filename:"grocery-list",sanitizeDataExport:!0,sheetName:"Grocery List",columnHeaderStyle:{font:{color:"FFFFFFFF"},fill:{type:"pattern",patternType:"solid",fgColor:"FF4a6c91"}},customExcelHeader:(e,i)=>{const n=e.getStyleSheet().createFormat({font:{size:18,fontName:"Calibri",bold:!0,color:"FFFFFFFF"},alignment:{wrapText:!0,horizontal:"center"},fill:{type:"pattern",patternType:"solid",fgColor:"FF203764"}});i.setRowInstructions(0,{height:40});const a="Grocery Shopping List",r=this.isDataGrouped?"H1":"G1";i.mergeCells("A1",r),i.data.push([{value:a,metadata:{style:n.id}}])}}}}invalidateAll(){this.aureliaGrid.dataView?.refresh(),this.aureliaGrid.slickGrid?.invalidate()}updateTaxRate(){this.isDataGrouped&&this.groupByTaxable(),this.invalidateAll()}exportToExcel(){this.excelExportService.exportToExcel()}excelGroupCellParser(e,{columnDef:i,excelFormatId:n,dataRowIdx:a}){const d=this.aureliaGrid.slickGrid?.getColumnIndex("price")||0,u=this.aureliaGrid.slickGrid?.getColumnIndex("qty")||0,s=this.aureliaGrid.slickGrid?.getColumnIndex("taxes")||0,m=this.aureliaGrid.slickGrid?.getColumnIndex("subTotal")||0,o=this.aureliaGrid.slickGrid?.getColumnIndex("total")||0,g=e?.group?.count||0,c=`${String.fromCharCode(65+d-0)}`,p=`${String.fromCharCode(65+u-0)}`,_=`${String.fromCharCode(65+m-0)}`,w=`${String.fromCharCode(65+s-0)}`,x=`${String.fromCharCode(65+o-0)}`;let b="";switch(i.id){case"price":b=c;break;case"qty":b=p;break;case"subTotal":b=_;break;case"taxes":b=w;break;case"total":b=x;break}return{value:`SUM(${b}${a+3-g}:${b}${a+3-1})`,metadata:{type:"formula",style:n}}}excelRegularCellParser(e,{columnDef:i,excelFormatId:n,dataRowIdx:a,dataContext:r}){const l=this.isDataGrouped?0:1,d=3,u=this.aureliaGrid.slickGrid?.getColumnIndex("price")||0,s=this.aureliaGrid.slickGrid?.getColumnIndex("qty")||0,m=this.aureliaGrid.slickGrid?.getColumnIndex("taxes")||0,o=`${String.fromCharCode(65+u-l)}${a+d}`,g=`${String.fromCharCode(65+s-l)}${a+d}`,c=`${String.fromCharCode(65+m-l)}${a+d}`;let p="";switch(i.id){case"subTotal":p=`${o}*${g}`;break;case"taxes":p=r.taxable?`${o}*${g}*${this.taxRate/100}`:"";break;case"total":p=`(${o}*${g})+${c}`;break}return{value:p,metadata:{type:"formula",style:n}}}getData(){let e=1;return[{id:e++,name:"Oranges",qty:4,taxable:!1,price:2.22},{id:e++,name:"Apples",qty:3,taxable:!1,price:1.55},{id:e++,name:"Honeycomb Cereals",qty:2,taxable:!0,price:4.55},{id:e++,name:"Raisins",qty:77,taxable:!1,price:.23},{id:e++,name:"Corn Flake Cereals",qty:1,taxable:!0,price:6.62},{id:e++,name:"Tomatoes",qty:3,taxable:!1,price:1.88},{id:e++,name:"Butter",qty:1,taxable:!1,price:3.33},{id:e++,name:"BBQ Chicken",qty:1,taxable:!1,price:12.33},{id:e++,name:"Chicken Wings",qty:12,taxable:!0,price:.53},{id:e++,name:"Drinkable Yogurt",qty:6,taxable:!0,price:1.22},{id:e++,name:"Milk",qty:3,taxable:!0,price:3.11}]}clearGrouping(){this.isDataGrouped=!1,this.aureliaGrid?.dataView?.setGrouping([])}groupByTaxable(){const e="mdi-check-box-outline",i="mdi-checkbox-blank-outline";this.isDataGrouped=!0,this.aureliaGrid?.dataView?.setGrouping({getter:"taxable",formatter:n=>`Taxable: <span class="mdi ${n.value?e:i} text-info"></span> <span class="text-primary">(${n.count} items)</span>`,comparer:(n,a)=>a.value-n.value,aggregators:[new k.Sum("price"),new k.Sum("qty"),new $n("subTotal",this.taxRate),new $n("taxes",this.taxRate),new $n("total",this.taxRate)],aggregateCollapsed:!1,lazyTotalsCalculation:!1}),this.aureliaGrid?.dataView?.refresh()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}as=O2();ha=F2(as,0,"Example36",rb,ha);G2(as,1,ha);const L2=Object.freeze(Object.defineProperty({__proto__:null,get Example36(){return ha}},Symbol.toStringTag,{value:"Module"})),ob="example37",zr=`<h2>
  Example 37: Footer Totals Row
  <button class="ms-2 btn btn-outline-secondary btn-sm btn-icon" type="button" data-test="toggle-subtitle" click.trigger="toggleSubTitle()">
    <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
  </button>
  <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="toggleDarkMode()" data-test="toggle-dark-mode">
    <i class="mdi mdi-theme-light-dark"></i>
    <span>Toggle Dark Mode</span>
  </button>
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example37.ts"
    >
      <span class="mdi mdi-link-variant"></span> code
    </a>
  </span>
</h2>

<div class="subtitle">Display a totals row at the end of the grid.</div>

<aurelia-slickgrid
  grid-id="grid37"
  columns.bind="columnDefinitions"
  options.bind="gridOptions"
  dataset.bind="dataset"
  instances.bind="aureliaGrid"
  on-cell-change.trigger="handleOnCellChange($event.detail.eventData, $event.detail.args)"
  on-columns-reordered.trigger="handleOnColumnsReordered()"
>
</aurelia-slickgrid>
`,lb=[],sb={};let kn;function z2(t){kn||(kn=E.define({name:ob,template:zr,dependencies:lb,bindables:sb})),t.register(kn)}const N2=Object.freeze(Object.defineProperty({__proto__:null,bindables:sb,default:zr,dependencies:lb,name:ob,register:z2,template:zr},Symbol.toStringTag,{value:"Module"}));var W2=Object.create,ns=Object.defineProperty,B2=Object.getOwnPropertyDescriptor,j2=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),db=t=>{throw TypeError(t)},cb=(t,e,i)=>e in t?ns(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,V2=(t,e)=>ns(t,"name",{value:e,configurable:!0}),H2=t=>[,,,W2(null)],U2=["class","method","getter","setter","accessor","field","value","get","set"],ub=t=>t!==void 0&&typeof t!="function"?db("Function expected"):t,q2=(t,e,i,n,a)=>({kind:U2[t],name:e,metadata:n,addInitializer:r=>i._?db("Already initialized"):a.push(ub(r||null))}),Y2=(t,e)=>cb(e,j2("metadata"),t[3]),K2=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},Q2=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&B2(a,i));V2(a,i);for(var p=n.length-1;p>=0;p--)u=q2(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,ub(l)&&(a=l);return Y2(t,a),c&&ns(a,i,c),m?s^4?r:c:a},Ke=(t,e,i)=>cb(t,typeof e!="symbol"?e+"":e,i),mb,rs;const Z2=100;mb=[T(N2)];class ga{constructor(){Ke(this,"_darkMode",!1),Ke(this,"aureliaGrid"),Ke(this,"gridOptions"),Ke(this,"columnDefinitions",[]),Ke(this,"dataset",[]),Ke(this,"hideSubTitle",!1),Ke(this,"resizerPaused",!1),this.defineGrid()}attached(){this.dataset=this.loadData(Z2),this.updateAllTotals()}detaching(){document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light"}defineGrid(){const e=[];for(let i=0;i<10;i++)e.push({id:i,name:String.fromCharCode(65+i),field:String(i),type:"number",width:58,editor:{model:C.integer}});this.columnDefinitions=e,this.gridOptions={autoEdit:!0,autoCommitEdit:!0,editable:!0,darkMode:this._darkMode,gridHeight:450,gridWidth:800,enableCellNavigation:!0,rowHeight:30,createFooterRow:!0,showFooterRow:!0,footerRowHeight:28}}loadData(e){const i=[];for(let n=0;n<e;n++){const a=i[n]={};a.id=n;for(let r=0;r<this.columnDefinitions.length;r++)a[r]=Math.round(Math.random()*10)}return i}handleOnCellChange(e,i){this.updateTotal(i.cell)}handleOnColumnsReordered(){this.updateAllTotals()}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.aureliaGrid.slickGrid?.setOptions({darkMode:this._darkMode}),this.updateAllTotals()}toggleBodyBackground(){this._darkMode?(document.querySelector(".panel-wm-content").classList.add("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="dark"):(document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light")}updateAllTotals(){let e=this.aureliaGrid.slickGrid?.getColumns().length||0;for(;e--;)this.updateTotal(e)}updateTotal(e){const i=this.aureliaGrid.slickGrid?.getColumns()[e].id;let n=0,a=this.dataset.length;for(;a--;)n+=parseInt(this.dataset[a][i],10)||0;const r=this.aureliaGrid.slickGrid?.getFooterRowColumn(i);r&&(r.textContent=`Sum: ${n}`)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}rs=H2();ga=Q2(rs,0,"Example37",mb,ga);K2(rs,1,ga);const J2=Object.freeze(Object.defineProperty({__proto__:null,get Example37(){return ga}},Symbol.toStringTag,{value:"Module"})),pb="example38",Nr=`<div class="demo38">
  <h2>
    Example 38: OData (v4) Backend Service with Infinite Scroll
    <span class="float-end">
      <a
        style="font-size: 18px"
        target="_blank"
        href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example38.ts"
      >
        <span class="mdi mdi-link-variant"></span> code
      </a>
    </span>
    <button
      class="ms-2 btn btn-outline-secondary btn-sm btn-icon"
      type="button"
      data-test="toggle-subtitle"
      click.trigger="toggleSubTitle()"
    >
      <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
    </button>
  </h2>

  <div class="subtitle">
    <ul>
      <li>
        Infinite scrolling allows the grid to lazy-load rows from the server when reaching the scroll bottom (end) position. In its simplest
        form, the more the user scrolls down, the more rows get loaded. If we reached the end of the dataset and there is no more data to
        load, then we'll assume to have the entire dataset loaded in memory. This contrast with the regular Pagination approach which will
        only hold a single page data at a time.
      </li>
      <li>NOTES</li>
      <ol>
        <li>
          <code>presets.pagination</code> is not supported with Infinite Scroll and will revert to the first page, simply because since we
          keep appending data, we always have to start from index zero (no offset).
        </li>
        <li>
          Pagination is not shown BUT in fact, that is what is being used behind the scene whenever reaching the scroll end (fetching next
          batch).
        </li>
        <li>Also note that whenever the user changes the Sort(s)/Filter(s) it will always reset and go back to zero index (first page).</li>
      </ol>
    </ul>
  </div>

  <div class="row">
    <div class="col-sm-3">
      <div class="alert alert-danger" show.bind="errorStatus" data-test="error-status">
        <em><strong>Backend Error:</strong> <span innerhtml.bind="errorStatus"></span></em>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-sm-2">
      <div class.bind="status.class" role="alert" data-test="status">
        <strong>Status: </strong> \${status.text}
        <span hidden.bind="!processing">
          <i class="mdi mdi-sync mdi-spin"></i>
        </span>
      </div>
    </div>
    <div class="col-sm-10">
      <div class="alert alert-info" data-test="alert-odata-query">
        <strong>OData Query:</strong> <span data-test="odata-query-result">\${odataQuery}</span>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-sm-12">
      <button
        class="btn btn-outline-secondary btn-sm btn-icon"
        data-test="clear-filters-sorting"
        click.trigger="clearAllFiltersAndSorts()"
        title="Clear all Filters & Sorts"
      >
        <i class="mdi mdi-filter-remove-outline"></i>
        Clear all Filter & Sorts
      </button>
      <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="set-dynamic-filter" click.trigger="setFiltersDynamically()">
        Set Filters Dynamically
      </button>
      <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="set-dynamic-sorting" click.trigger="setSortingDynamically()">
        Set Sorting Dynamically
      </button>
      <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="group-by-gender" click.trigger="groupByGender()">
        Group by Gender
      </button>

      <div show.bind="metrics" class="mt-2" style="margin: 10px 0px">
        <b>Metrics:</b>
        <span>
          <span>\${metrics.endTime | dateFormat: 'DD MMM, h:mm:ss a'}</span> —
          <span data-test="itemCount">\${metrics.itemCount}</span>
          of
          <span data-test="totalItemCount">\${metrics.totalItemCount}</span>
          items
        </span>
        <span class="badge rounded-pill text-bg-primary" class.bind="tagDataClass" data-test="data-loaded-tag">All Data Loaded!!!</span>
      </div>
    </div>
  </div>

  <aurelia-slickgrid
    grid-id="grid38"
    columns.bind="columnDefinitions"
    options.bind="gridOptions"
    dataset.bind="dataset"
    instances.bind="aureliaGrid"
    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
    on-row-count-changed.trigger="refreshMetrics($event.detail.args)"
  >
  </aurelia-slickgrid>
</div>
`,hb=[],gb={};let Dn;function X2(t){Dn||(Dn=E.define({name:pb,template:Nr,dependencies:hb,bindables:gb})),t.register(Dn)}const eP=Object.freeze(Object.defineProperty({__proto__:null,bindables:gb,default:Nr,dependencies:hb,name:pb,register:X2,template:Nr},Symbol.toStringTag,{value:"Module"}));var tP=Object.create,os=Object.defineProperty,iP=Object.getOwnPropertyDescriptor,aP=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),bb=t=>{throw TypeError(t)},fb=(t,e,i)=>e in t?os(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,nP=(t,e)=>os(t,"name",{value:e,configurable:!0}),rP=t=>[,,,tP(null)],oP=["class","method","getter","setter","accessor","field","value","get","set"],vb=t=>t!==void 0&&typeof t!="function"?bb("Function expected"):t,lP=(t,e,i,n,a)=>({kind:oP[t],name:e,metadata:n,addInitializer:r=>i._?bb("Already initialized"):a.push(vb(r||null))}),sP=(t,e)=>fb(e,aP("metadata"),t[3]),dP=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},cP=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&iP(a,i));nP(a,i);for(var p=n.length-1;p>=0;p--)u=lP(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,vb(l)&&(a=l);return sP(t,a),c&&os(a,i,c),m?s^4?r:c:a},W=(t,e,i)=>fb(t,typeof e!="symbol"?e+"":e,i),_b,ls;const uP="%5E",mP="%25";_b=[T(eP)];class ba{constructor(e=O(_e(ye))){this.http=e,W(this,"aureliaGrid"),W(this,"backendService"),W(this,"columnDefinitions"),W(this,"gridOptions"),W(this,"dataset",[]),W(this,"isPageErrorTest",!1),W(this,"metrics"),W(this,"tagDataClass",""),W(this,"odataQuery",""),W(this,"hideSubTitle",!1),W(this,"processing",!1),W(this,"errorStatus",""),W(this,"errorStatusClass","hidden"),W(this,"status",{text:"processing...",class:"alert alert-danger"}),this.backendService=new no,this.initializeGrid()}aureliaGridReady(e){this.aureliaGrid=e}initializeGrid(){this.columnDefinitions=[{id:"name",name:"Name",field:"name",sortable:!0,filterable:!0,filter:{model:v.compoundInput}},{id:"gender",name:"Gender",field:"gender",filterable:!0,sortable:!0,filter:{model:v.singleSelect,collection:[{value:"",label:""},{value:"male",label:"male"},{value:"female",label:"female"}]}},{id:"company",name:"Company",field:"company",filterable:!0,sortable:!0},{id:"category_name",name:"Category",field:"category/name",filterable:!0,sortable:!0,formatter:(e,i,n,a,r)=>r.category?.name||""}],this.gridOptions={enableAutoResize:!0,autoResize:{container:"#demo-container",rightPadding:10},checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},enableCellNavigation:!0,enableFiltering:!0,enableCheckboxSelector:!0,enableSelection:!0,enableGrouping:!0,headerMenu:{hideFreezeColumnsCommand:!1},presets:{},backendServiceApi:{service:this.backendService,options:{infiniteScroll:{fetchSize:30},enableCount:!0,version:4},onError:e=>{this.errorStatus=e.message,this.errorStatusClass="visible notification is-light is-danger is-small is-narrow",this.displaySpinner(!1,!0)},preProcess:()=>{this.errorStatus="",this.errorStatusClass="hidden",this.displaySpinner(!0)},process:e=>this.getCustomerApiCall(e),postProcess:e=>{this.metrics=e.metrics,this.displaySpinner(!1),this.getCustomerCallback(e)}}}}displaySpinner(e,i){this.processing=e,i?this.status={text:"ERROR!!!",class:"alert alert-danger"}:this.status=e?{text:"loading",class:"alert alert-warning"}:{text:"finished",class:"alert alert-success"}}getCustomerCallback(e){const i=e["@odata.count"];this.metrics.totalItemCount=i,e.infiniteScrollBottomHit?this.aureliaGrid.dataView?.addItems(e.value):(this.aureliaGrid.slickGrid?.scrollTo(0),this.dataset=e.value,this.metrics.itemCount=e.value.length),this.odataQuery=e.query}getCustomerApiCall(e){return this.getCustomerDataApiMock(e)}getCustomerDataApiMock(e){return this.errorStatusClass="hidden",new Promise(i=>{const n=e.toLowerCase().split("&");let a=0,r=0,l="",d=100;const u={};if(this.isPageErrorTest)throw this.isPageErrorTest=!1,new Error("Server timed out trying to retrieve data for the last page");for(const s of n){if(s.includes("$top=")&&(a=+s.substring(5),a===5e4))throw new Error("Server timed out retrieving 50,000 rows");if(s.includes("$skip=")&&(r=+s.substring(6)),s.includes("$orderby=")&&(l=s.substring(9)),s.includes("$filter=")){const m=s.substring(8).replace("%20"," ");if(m.includes("matchespattern")){const o=new RegExp(`matchespattern\\(([a-zA-Z]+),\\s'${uP}(.*?)'\\)`,"i"),g=m.match(o)||[],c=g[1].trim();u[c]={type:"matchespattern",term:"^"+g[2].trim()}}if(m.includes("contains")){const o=m.match(/contains\(([a-zA-Z/]+),\s?'(.*?)'/)||[],g=o[1].trim();u[g]={type:"substring",term:o[2].trim()}}if(m.includes("substringof")){const o=m.match(/substringof\('(.*?)',\s([a-zA-Z/]+)/)||[],g=o[2].trim();u[g]={type:"substring",term:o[1].trim()}}for(const o of["eq","ne","le","lt","gt","ge"])if(m.includes(o)){const c=new RegExp(`([a-zA-Z ]*) ${o} '(.*?)'`).exec(m);if(Array.isArray(c)){const p=c[1].trim();u[p]={type:o,term:c[2].trim()}}}if(m.includes("startswith")&&m.includes("endswith")){const o=m.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],g=m.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],c=o[1].trim();u[c]={type:"starts+ends",term:[o[2].trim(),g[2].trim()]}}else if(m.includes("startswith")){const o=m.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],g=o[1].trim();u[g]={type:"starts",term:o[2].trim()}}else if(m.includes("endswith")){const o=m.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],g=o[1].trim();u[g]={type:"ends",term:o[2].trim()}}if(m.includes("company"))throw new Error('Server could not filter using the field "Company"')}}if(l.includes("company"))throw new Error('Server could not sort using the field "Company"');this.http.fetch(ft).then(s=>s.json()).then(s=>{if(l?.length>0){const c=l.split(",");for(const p of c){const _=p.split(" "),w=_[0];let x=y=>y;for(const y of w.split("/")){const h=x;x=S=>h(S)[y]}switch((_[1]??"asc").toLocaleLowerCase()){case"asc":s=s.sort((y,h)=>x(y).localeCompare(x(h)));break;case"desc":s=s.sort((y,h)=>x(h).localeCompare(x(y)));break}}}let m=r,o=s;if(u){for(const c in u)u.hasOwnProperty(c)&&(o=o.filter(p=>{const _=u[c].type,w=u[c].term;let x=c;if(c?.indexOf(" ")!==-1){const h=c.split(" ");x=h[h.length-1]}let b,y=p;for(const h of x.split("/"))b=y[h],y=b;if(b){const[h,S]=Array.isArray(w)?w:[w];switch(_){case"eq":return b.toLowerCase()===h;case"ne":return b.toLowerCase()!==h;case"le":return b.toLowerCase()<=h;case"lt":return b.toLowerCase()<h;case"gt":return b.toLowerCase()>h;case"ge":return b.toLowerCase()>=h;case"ends":return b.toLowerCase().endsWith(h);case"starts":return b.toLowerCase().startsWith(h);case"starts+ends":return b.toLowerCase().startsWith(h)&&b.toLowerCase().endsWith(S);case"substring":return b.toLowerCase().includes(h);case"matchespattern":return new RegExp(h.replaceAll(mP,".*"),"i").test(b)}}}));d=o.length}m>o.length&&(e=e.replace(`$skip=${m}`,""),m=0);const g=o.slice(m,m+a);setTimeout(()=>{const c={query:e};c.value=g,c["@odata.count"]=d,i(c)},100)})})}groupByGender(){this.aureliaGrid?.dataView?.setGrouping({getter:"gender",formatter:e=>`Gender: ${e.value} <span class="text-green">(${e.count} items)</span>`,comparer:(e,i)=>re.string(e.value,i.value),aggregators:[new k.Sum("gemder")],aggregateCollapsed:!1,lazyTotalsCalculation:!0}),this.aureliaGrid?.slickGrid.setSortColumns([{columnId:"duration",sortAsc:!0}]),this.aureliaGrid?.slickGrid.invalidate()}clearAllFiltersAndSorts(){this.aureliaGrid?.gridService&&this.aureliaGrid.gridService.clearAllFiltersAndSorts()}setFiltersDynamically(){this.aureliaGrid?.filterService.updateFilters([{columnId:"gender",searchTerms:["female"]}])}refreshMetrics(e){e?.current>=0&&(this.metrics.itemCount=this.aureliaGrid.dataView?.getFilteredItemCount()||0,this.tagDataClass=this.metrics.itemCount===this.metrics.totalItemCount?"fully-loaded":"partial-load")}setSortingDynamically(){this.aureliaGrid?.sortService.updateSorting([{columnId:"name",direction:"DESC"}])}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}ls=rP();ba=cP(ls,0,"Example38",_b,ba);dP(ls,1,ba);const pP=Object.freeze(Object.defineProperty({__proto__:null,get Example38(){return ba}},Symbol.toStringTag,{value:"Module"})),yb="example39",Wr=`<div class="demo39">
  <h2>
    Example 39: GraphQL Backend Service with Infinite Scroll
    <span class="float-end">
      <a
        style="font-size: 18px"
        target="_blank"
        href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example39.ts"
      >
        <span class="mdi mdi-link-variant"></span> code
      </a>
    </span>
    <button
      class="ms-2 btn btn-outline-secondary btn-sm btn-icon"
      type="button"
      data-test="toggle-subtitle"
      click.trigger="toggleSubTitle()"
    >
      <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
    </button>
  </h2>

  <div class="subtitle">
    <ul>
      <li>
        Infinite scrolling allows the grid to lazy-load rows from the server when reaching the scroll bottom (end) position. In its simplest
        form, the more the user scrolls down, the more rows get loaded. If we reached the end of the dataset and there is no more data to
        load, then we'll assume to have the entire dataset loaded in memory. This contrast with the regular Pagination approach which will
        only hold a single page data at a time.
      </li>
      <li>NOTES</li>
      <ol>
        <li>
          <code>presets.pagination</code> is not supported with Infinite Scroll and will revert to the first page, simply because since we
          keep appending data, we always have to start from index zero (no offset).
        </li>
        <li>
          Pagination is not shown BUT in fact, that is what is being used behind the scene whenever reaching the scroll end (fetching next
          batch).
        </li>
        <li>Also note that whenever the user changes the Sort(s)/Filter(s) it will always reset and go back to zero index (first page).</li>
      </ol>
    </ul>
  </div>

  <div class="row">
    <div class="col-sm-5">
      <div class.bind="status.class" role="alert" data-test="status">
        <strong>Status: </strong> \${status.text}
        <span hidden.bind="!processing">
          <i class="mdi mdi-sync mdi-spin-1s"></i>
        </span>
      </div>

      <div class="row">
        <div class="col-md-12">
          <button
            class="btn btn-outline-secondary btn-sm btn-icon"
            data-test="clear-filters-sorting"
            click.trigger="clearAllFiltersAndSorts()"
            title="Clear all Filters & Sorts"
          >
            <i class="mdi mdi-filter-remove-outline"></i>
            Clear all Filter & Sorts
          </button>
          <label for="serverdelay" class="ml-4">Server Delay: </label>
          <input
            id="serverdelay"
            type="number"
            data-test="server-delay"
            style="width: 55px"
            value.bind="serverWaitDelay"
            title="input a fake timer delay to simulate slow server response"
          />
        </div>
      </div>
      <div class="row mt-1">
        <div class="col-md-12">
          <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="language-button" click.trigger="switchLanguage()">
            <i class="mdi mdi-translate"></i>
            Switch Language
          </button>
          <strong>Locale:</strong>
          <span style="font-style: italic" data-test="selected-locale"> \${selectedLanguage + '.json'} </span>
        </div>
      </div>
      <br />
      <div show.bind="metrics" style="margin: 10px 0px">
        <b>Metrics:</b>
        <span>
          <span>\${metrics.endTime | dateFormat: 'DD MMM, h:mm:ss a'}</span> —
          <span data-test="itemCount">\${metrics.itemCount}</span>
          of
          <span data-test="totalItemCount">\${metrics.totalItemCount}</span>
          items
        </span>
        <span class="badge rounded-pill text-bg-primary" class.bind="tagDataClass" data-test="data-loaded-tag">All Data Loaded!!!</span>
      </div>
    </div>

    <div class="col-sm-7">
      <div class="alert alert-info" data-test="alert-graphql-query">
        <strong>GraphQL Query:</strong>
        <div innerhtml.bind="graphqlQuery" data-test="graphql-query-result"></div>
      </div>
    </div>
  </div>

  <aurelia-slickgrid
    grid-id="grid39"
    columns.bind="columnDefinitions"
    options.bind="gridOptions"
    dataset.bind="dataset"
    instances.bind="aureliaGrid"
    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
    on-row-count-changed.trigger="refreshMetrics($event.detail.args)"
  >
  </aurelia-slickgrid>
</div>
`,Sb=[],Cb={};let On;function hP(t){On||(On=E.define({name:yb,template:Wr,dependencies:Sb,bindables:Cb})),t.register(On)}const gP=Object.freeze(Object.defineProperty({__proto__:null,bindables:Cb,default:Wr,dependencies:Sb,name:yb,register:hP,template:Wr},Symbol.toStringTag,{value:"Module"}));var bP=Object.create,ss=Object.defineProperty,fP=Object.getOwnPropertyDescriptor,vP=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),wb=t=>{throw TypeError(t)},xb=(t,e,i)=>e in t?ss(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,_P=(t,e)=>ss(t,"name",{value:e,configurable:!0}),yP=t=>[,,,bP(null)],SP=["class","method","getter","setter","accessor","field","value","get","set"],Tb=t=>t!==void 0&&typeof t!="function"?wb("Function expected"):t,CP=(t,e,i,n,a)=>({kind:SP[t],name:e,metadata:n,addInitializer:r=>i._?wb("Already initialized"):a.push(Tb(r||null))}),wP=(t,e)=>xb(e,vP("metadata"),t[3]),xP=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},TP=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&fP(a,i));_P(a,i);for(var p=n.length-1;p>=0;p--)u=CP(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,Tb(l)&&(a=l);return wP(t,a),c&&ss(a,i,c),m?s^4?r:c:a},U=(t,e,i)=>xb(t,typeof e!="symbol"?e+"":e,i),Eb,ds;const Di="users",EP=250;function Mn(t){return t.replace(/^"/,"").replace(/"$/,"").toLowerCase()}Eb=[T(gP)];class fa{constructor(e=O(_e(ye)),i=O(Se)){this.http=e,this.i18n=i,U(this,"aureliaGrid"),U(this,"backendService"),U(this,"columnDefinitions"),U(this,"gridOptions"),U(this,"dataset",[]),U(this,"metrics"),U(this,"tagDataClass",""),U(this,"graphqlQuery","..."),U(this,"hideSubTitle",!1),U(this,"processing",!1),U(this,"selectedLanguage"),U(this,"status",{text:"processing...",class:"alert alert-danger"}),U(this,"serverWaitDelay",EP),this.backendService=new ro;const n="en";this.i18n.setLocale(n),this.selectedLanguage=n,this.initializeGrid()}aureliaGridReady(e){this.aureliaGrid=e}initializeGrid(){this.columnDefinitions=[{id:"name",field:"name",nameKey:"NAME",width:60,sortable:!0,filterable:!0,filter:{model:v.compoundInput}},{id:"gender",field:"gender",nameKey:"GENDER",filterable:!0,sortable:!0,width:60,filter:{model:v.singleSelect,collection:[{value:"",label:""},{value:"male",labelKey:"MALE"},{value:"female",labelKey:"FEMALE"}]}},{id:"company",field:"company",nameKey:"COMPANY",width:60,sortable:!0,filterable:!0,filter:{model:v.multipleSelect,customStructure:{label:"company",value:"company"},collectionSortBy:{property:"company",sortDesc:!1},collectionAsync:this.http.fetch(ft).then(e=>e.json()),options:{filter:!0}}}],this.gridOptions={enableAutoResize:!0,autoResize:{container:"#demo-container",rightPadding:10},enableAutoTooltip:!0,autoTooltipOptions:{enableForHeaderCells:!0},enableTranslate:!0,i18n:this.i18n,enableFiltering:!0,enableCellNavigation:!0,multiColumnSort:!1,gridMenu:{resizeOnShowHeaderRow:!0},backendServiceApi:{disableInternalPostProcess:!0,service:this.backendService,options:{datasetName:Di,addLocaleIntoQuery:!0,extraQueryArguments:[{field:"userId",value:123}],infiniteScroll:{fetchSize:30}},preProcess:()=>this.displaySpinner(!0),process:e=>this.getCustomerApiCall(e),postProcess:e=>{this.metrics={endTime:new Date,totalItemCount:e.data[Di].totalCount||0},this.displaySpinner(!1),this.getCustomerCallback(e)}}}}clearAllFiltersAndSorts(){this.aureliaGrid?.gridService&&this.aureliaGrid.gridService.clearAllFiltersAndSorts()}displaySpinner(e){this.processing=e,this.status=e?{text:"processing...",class:"alert alert-danger"}:{text:"finished",class:"alert alert-success"}}getCustomerCallback(e){const{nodes:i,totalCount:n}=e.data[Di];this.aureliaGrid&&(this.metrics.totalItemCount=n,e.infiniteScrollBottomHit?this.aureliaGrid.dataView?.addItems(i):(this.aureliaGrid.slickGrid?.scrollTo(0),this.dataset=i,this.metrics.itemCount=i.length))}getCustomerApiCall(e){return this.getCustomerDataApiMock(e)}getCustomerDataApiMock(e){return new Promise(i=>{let n=0,a=0,r="",l="";this.http.fetch(ft).then(d=>d.json()).then(d=>{let u=d;if(e.includes("first:")&&(n=+(e.match(/first:([0-9]+),/)||[])[1]),e.includes("offset:")&&(a=+(e.match(/offset:([0-9]+),/)||[])[1]),e.includes("orderBy:")){const[c,p,_]=/orderBy:\[{field:([a-zA-Z/]+),direction:(ASC|DESC)}\]/gi.exec(e)||[];r=p||"",l=_||""}if(e.includes("orderBy:")){const[c,p,_]=/orderBy:\[{field:([a-zA-Z/]+),direction:(ASC|DESC)}\]/gi.exec(e)||[];r=p||"",l=_||""}if(e.includes("filterBy:")){const c=/{field:(\w+),operator:(\w+),value:([0-9a-z',"\s]*)}/gi;let p;for(;(p=c.exec(e))!==null;){const _=p[1]||"",w=p[2]||"",x=p[3]||"";let[b,y]=x.split(",");_&&w&&x!==""&&(u=u.filter(h=>{const S=h[_];switch(b=Mn(b),y=Mn(y||""),w){case"EQ":return S.toLowerCase()===b;case"NE":return S.toLowerCase()!==b;case"LE":return S.toLowerCase()<=b;case"LT":return S.toLowerCase()<b;case"GT":return S.toLowerCase()>b;case"GE":return S.toLowerCase()>=b;case"EndsWith":return S.toLowerCase().endsWith(b);case"StartsWith":return S.toLowerCase().startsWith(b);case"Starts+Ends":return S.toLowerCase().startsWith(b)&&S.toLowerCase().endsWith(y);case"Contains":return S.toLowerCase().includes(b);case"Not_Contains":return!S.toLowerCase().includes(b);case"IN":const hv=x.toLocaleLowerCase().split(",");for(const gv of hv)if(S.toLocaleLowerCase()===Mn(gv))return!0;break}}))}}let s=a;s>u.length&&(e=e.replace(`offset:${s}`,""),s=0);const m=c=>r?c[r]:c;switch(l.toUpperCase()){case"ASC":u=u.sort((c,p)=>m(c).localeCompare(m(p)));break;case"DESC":u=u.sort((c,p)=>m(p).localeCompare(m(c)));break}const o=u.slice(s,s+n),g={data:{[Di]:{nodes:o,totalCount:u.length}}};setTimeout(()=>{this.graphqlQuery=this.gridOptions.backendServiceApi.service.buildQuery(),i(g)},this.serverWaitDelay)})})}refreshMetrics(e){e?.current>=0&&(this.metrics.itemCount=this.aureliaGrid.dataView?.getFilteredItemCount()||0,this.tagDataClass=this.metrics.itemCount===this.metrics.totalItemCount?"fully-loaded":"partial-load")}async switchLanguage(){const e=this.selectedLanguage==="en"?"fr":"en";await this.i18n.setLocale(e),this.selectedLanguage=e}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}ds=yP();fa=TP(ds,0,"Example39",Eb,fa);xP(ds,1,fa);const $P=Object.freeze(Object.defineProperty({__proto__:null,get Example39(){return fa}},Symbol.toStringTag,{value:"Module"})),$b="example40",Br=`<div class="demo40">
  <h2>
    Example 40: Infinite Scroll from JSON data
    <span class="float-end">
      <a
        style="font-size: 18px"
        target="_blank"
        href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example40.ts"
      >
        <span class="mdi mdi-link-variant"></span> code
      </a>
    </span>
    <button
      class="ms-2 btn btn-outline-secondary btn-sm btn-icon"
      type="button"
      data-test="toggle-subtitle"
      click.trigger="toggleSubTitle()"
    >
      <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
    </button>
  </h2>

  <div class="subtitle">
    <ul>
      <li>
        Infinite scrolling allows the grid to lazy-load rows from the server when reaching the scroll bottom (end) position. In its simplest
        form, the more the user scrolls down, the more rows get loaded.
      </li>
      <li>
        NOTES: <code>presets.pagination</code> is not supported with Infinite Scroll and will revert to the first page, simply because since
        we keep appending data, we always have to start from index zero (no offset).
      </li>
    </ul>
  </div>

  <div class="row">
    <div class="col-sm-12">
      <button
        class="btn btn-outline-secondary btn-sm btn-icon"
        data-test="clear-filters-sorting"
        click.trigger="clearAllFiltersAndSorts()"
        title="Clear all Filters & Sorts"
      >
        <span class="mdi mdi-close"></span>
        <span>Clear all Filter & Sorts</span>
      </button>
      <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="set-dynamic-filter" click.trigger="setFiltersDynamically()">
        Set Filters Dynamically
      </button>
      <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="set-dynamic-sorting" click.trigger="setSortingDynamically()">
        Set Sorting Dynamically
      </button>
      <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="group-by-duration" click.trigger="groupByDuration()">
        Group by Duration
      </button>

      <label class="ml-4">Reset Dataset <code>onSort</code>:</label>
      <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="onsort-on" click.trigger="onSortReset(true)">ON</button>
      <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="onsort-off" click.trigger="onSortReset(false)">OFF</button>
    </div>
  </div>

  <div show.bind="metrics" class="mt-2" style="margin: 10px 0px">
    <b>Metrics:</b>
    <span>
      <span>\${metrics.endTime | dateFormat: 'DD MMM, h:mm:ss a'}</span> —
      <span data-test="totalItemCount">\${metrics.totalItemCount}</span>
      items
    </span>
  </div>

  <aurelia-slickgrid
    grid-id="grid40"
    columns.bind="columnDefinitions"
    options.bind="gridOptions"
    dataset.bind="dataset"
    instances.bind="aureliaGrid"
    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
    on-row-count-changed.trigger="handleOnRowCountChanged($event.detail.args)"
    on-sort.trigger="handleOnSort()"
    on-scroll.trigger="handleOnScroll($event.detail.args)"
  >
  </aurelia-slickgrid>
</div>
`,kb=[],Db={};let Pn;function kP(t){Pn||(Pn=E.define({name:$b,template:Br,dependencies:kb,bindables:Db})),t.register(Pn)}const DP=Object.freeze(Object.defineProperty({__proto__:null,bindables:Db,default:Br,dependencies:kb,name:$b,register:kP,template:Br},Symbol.toStringTag,{value:"Module"}));var OP=Object.create,cs=Object.defineProperty,MP=Object.getOwnPropertyDescriptor,PP=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Ob=t=>{throw TypeError(t)},Mb=(t,e,i)=>e in t?cs(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,IP=(t,e)=>cs(t,"name",{value:e,configurable:!0}),GP=t=>[,,,OP(null)],FP=["class","method","getter","setter","accessor","field","value","get","set"],Pb=t=>t!==void 0&&typeof t!="function"?Ob("Function expected"):t,AP=(t,e,i,n,a)=>({kind:FP[t],name:e,metadata:n,addInitializer:r=>i._?Ob("Already initialized"):a.push(Pb(r||null))}),RP=(t,e)=>Mb(e,PP("metadata"),t[3]),LP=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},zP=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&MP(a,i));IP(a,i);for(var p=n.length-1;p>=0;p--)u=AP(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,Pb(l)&&(a=l);return RP(t,a),c&&cs(a,i,c),m?s^4?r:c:a},Qe=(t,e,i)=>Mb(t,typeof e!="symbol"?e+"":e,i),Ib,us;const Pt=50;Ib=[T(DP)];class va{constructor(){Qe(this,"aureliaGrid"),Qe(this,"columnDefinitions"),Qe(this,"dataset",[]),Qe(this,"gridOptions"),Qe(this,"metrics"),Qe(this,"hideSubTitle",!1),Qe(this,"shouldResetOnSort",!1),this.defineGrid(),this.dataset=this.loadData(0,Pt),this.metrics={itemCount:Pt,totalItemCount:Pt}}aureliaGridReady(e){this.aureliaGrid=e}defineGrid(){this.columnDefinitions=[{id:"title",name:"Title",field:"title",sortable:!0,minWidth:100,filterable:!0},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,minWidth:100,filterable:!0,type:"number"},{id:"percentComplete",name:"% Complete",field:"percentComplete",sortable:!0,minWidth:100,filterable:!0,type:"number"},{id:"start",name:"Start",field:"start",type:"date",outputType:"dateIso",formatter:f.date,exportWithFormatter:!0,params:{dateFormat:"MMM DD, YYYY"},sortable:!0,filterable:!0,filter:{model:v.compoundDate}},{id:"finish",name:"Finish",field:"finish",type:"date",outputType:"dateIso",formatter:f.date,exportWithFormatter:!0,params:{dateFormat:"MMM DD, YYYY"},sortable:!0,filterable:!0,filter:{model:v.compoundDate}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",sortable:!0,minWidth:100,filterable:!0,formatter:f.checkmarkMaterial}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableAutoResize:!0,enableFiltering:!0,enableGrouping:!0,editable:!1,rowHeight:33,enableExcelExport:!0,externalResources:[new G]}}handleOnScroll(e){const i=e.grid.getViewportNode();if(["mousewheel","scroll"].includes(e.triggeredBy||"")&&i.scrollTop>0&&Math.ceil(i.offsetHeight+e.scrollTop)>=e.scrollHeight){console.log("onScroll end reached, add more items");const n=this.aureliaGrid.dataView?.getItemCount()||0,a=this.loadData(n,Pt);this.aureliaGrid.dataView?.addItems(a)}}handleOnSort(){if(this.shouldResetOnSort){const e=this.loadData(0,Pt);this.aureliaGrid.slickGrid?.scrollTo(0),this.aureliaGrid.dataView?.setItems(e),this.aureliaGrid.dataView?.reSort()}}groupByDuration(){this.aureliaGrid?.dataView?.setGrouping({getter:"duration",formatter:e=>`Duration: ${e.value} <span class="text-green">(${e.count} items)</span>`,comparer:(e,i)=>re.numeric(e.value,i.value,ri.asc),aggregators:[new k.Avg("percentComplete"),new k.Sum("cost")],aggregateCollapsed:!1,lazyTotalsCalculation:!0}),this.aureliaGrid?.slickGrid?.setSortColumns([{columnId:"duration",sortAsc:!0}]),this.aureliaGrid?.slickGrid?.invalidate()}loadData(e,i){const n=[];for(let a=e;a<e+i;a++)n.push(this.newItem(a));return n}newItem(e){return{id:e,title:"Task "+e,duration:Math.round(Math.random()*100)+"",percentComplete:kt(1,12),start:new Date(2020,kt(1,11),kt(1,28)),finish:new Date(2022,kt(1,11),kt(1,28)),effortDriven:e%5===0}}onSortReset(e){this.shouldResetOnSort=e}clearAllFiltersAndSorts(){this.aureliaGrid?.gridService&&this.aureliaGrid.gridService.clearAllFiltersAndSorts()}setFiltersDynamically(){this.aureliaGrid?.filterService.updateFilters([{columnId:"start",searchTerms:["2020-08-25"],operator:"<="}])}handleOnRowCountChanged(e){this.aureliaGrid&&e?.current>=0&&(this.aureliaGrid.dataView?.reSort(),this.metrics.itemCount=this.aureliaGrid.dataView?.getFilteredItemCount()||0,this.metrics.totalItemCount=e.itemCount||0)}setSortingDynamically(){this.aureliaGrid?.sortService.updateSorting([{columnId:"title",direction:"DESC"}])}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}us=GP();va=zP(us,0,"Example40",Ib,va);LP(us,1,va);const NP=Object.freeze(Object.defineProperty({__proto__:null,get Example40(){return va}},Symbol.toStringTag,{value:"Module"})),Gb="example41",jr=`<div class="container-fluid">
  <h2>
    Example 41: Drag & Drop
    <span class="float-end">
      <a
        style="font-size: 18px"
        target="_blank"
        href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example41.ts"
      >
        <span class="mdi mdi-link-variant"></span> code
      </a>
    </span>
    <button
      class="ms-2 btn btn-outline-secondary btn-sm btn-icon"
      type="button"
      data-test="toggle-subtitle"
      click.trigger="toggleSubTitle()"
    >
      <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
    </button>
  </h2>

  <div class="subtitle">
    <ul>
      <li>Click to select, Ctrl-click to toggle selection(s).</li>
      <li>Drag one or more rows by the handle icon (1st column) to reorder.</li>
      <li>Drag one or more rows by selection (2nd or 3rd column) and drag to the recycle bin to delete.</li>
    </ul>
  </div>

  <div class="row">
    <div class="col">
      <aurelia-slickgrid
        grid-id="grid41"
        columns.bind="columnDefinitions"
        options.bind="gridOptions"
        dataset.bind="dataset"
        on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
        on-drag-init.trigger="handleOnDragInit($event.detail.eventData)"
        on-drag-start.trigger="handleOnDragStart($event.detail.eventData)"
        on-drag.trigger="handleOnDrag($event.detail.eventData, $event.detail.args)"
        on-drag-end.trigger="handleOnDragEnd($event.detail.eventData, $event.detail.args)"
      >
        <div au-slot="slickgrid-header" class="grid-header">
          <label>Santa's TODO list:</label>
        </div>
      </aurelia-slickgrid>
    </div>
    <div class="col">
      <div id="dropzone" class="recycle-bin mt-4">Recycle Bin</div>
    </div>
  </div>
</div>
`,Fb=[],Ab={};let In;function WP(t){In||(In=E.define({name:Gb,template:jr,dependencies:Fb,bindables:Ab})),t.register(In)}const BP=Object.freeze(Object.defineProperty({__proto__:null,bindables:Ab,default:jr,dependencies:Fb,name:Gb,register:WP,template:jr},Symbol.toStringTag,{value:"Module"}));var jP=Object.create,ms=Object.defineProperty,VP=Object.getOwnPropertyDescriptor,HP=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Rb=t=>{throw TypeError(t)},Lb=(t,e,i)=>e in t?ms(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,UP=(t,e)=>ms(t,"name",{value:e,configurable:!0}),qP=t=>[,,,jP(null)],YP=["class","method","getter","setter","accessor","field","value","get","set"],zb=t=>t!==void 0&&typeof t!="function"?Rb("Function expected"):t,KP=(t,e,i,n,a)=>({kind:YP[t],name:e,metadata:n,addInitializer:r=>i._?Rb("Already initialized"):a.push(zb(r||null))}),QP=(t,e)=>Lb(e,HP("metadata"),t[3]),ZP=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},JP=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&VP(a,i));UP(a,i);for(var p=n.length-1;p>=0;p--)u=KP(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,zb(l)&&(a=l);return QP(t,a),c&&ms(a,i,c),m?s^4?r:c:a},Be=(t,e,i)=>Lb(t,typeof e!="symbol"?e+"":e,i),Nb,ps;Nb=[T(BP)];class _a{constructor(){Be(this,"aureliaGrid"),Be(this,"gridOptions"),Be(this,"columnDefinitions"),Be(this,"dataset",[]),Be(this,"dragHelper"),Be(this,"dragRows",[]),Be(this,"dragMode",""),Be(this,"hideSubTitle",!1),this.defineGrid(),this.dataset=this.mockData()}aureliaGridReady(e){this.aureliaGrid=e}defineGrid(){this.columnDefinitions=[{id:"name",name:"Name",field:"name",width:300,cssClass:"cell-title"},{id:"complete",name:"Complete",width:60,cssClass:"cell-effort-driven",field:"complete",cannotTriggerInsert:!0,formatter:f.checkmarkMaterial}],this.gridOptions={enableAutoResize:!1,gridHeight:225,gridWidth:800,rowHeight:33,enableCellNavigation:!0,enableSelection:!0,enableRowMoveManager:!0,selectionOptions:{selectActiveRow:!1,selectionType:"row"},rowMoveManager:{columnIndexPosition:0,cancelEditOnDrag:!0,disableRowSelection:!0,hideRowMoveShadow:!1,onBeforeMoveRows:this.onBeforeMoveRows.bind(this),onMoveRows:this.onMoveRows.bind(this)}}}mockData(){return[{id:0,name:"Make a list",complete:!0},{id:1,name:"Check it twice",complete:!1},{id:2,name:"Find out who's naughty",complete:!1},{id:3,name:"Find out who's nice",complete:!1}]}onBeforeMoveRows(e,i){for(const n of i.rows)if(n===i.insertBefore||n===i.insertBefore-1)return e.stopPropagation(),!1;return!0}onMoveRows(e,i){const n=[],a=i.rows,r=i.insertBefore,l=this.dataset.slice(0,r),d=this.dataset.slice(r,this.dataset.length);a.sort((s,m)=>s-m);for(const s of a)n.push(this.dataset[s]);a.reverse();for(const s of a)s<r?l.splice(s,1):d.splice(s-r,1);this.dataset=l.concat(n.concat(d));const u=[];for(let s=0;s<a.length;s++)u.push(l.length+s);this.aureliaGrid.slickGrid?.resetActiveCell(),this.aureliaGrid.slickGrid?.invalidate()}handleOnDragInit(e){e.stopImmediatePropagation()}handleOnDragStart(e){const i=this.aureliaGrid.slickGrid?.getCellFromEvent(e);if(!i||i.cell===0){this.dragMode="";return}const n=i.row;if(!this.dataset[n]||et.isActive())return;e.stopImmediatePropagation(),this.dragMode="recycle";let a=this.aureliaGrid.slickGrid?.getSelectedRows()||[];(!a.length||a.findIndex(d=>d===d)===-1)&&(a=[n],this.aureliaGrid.slickGrid?.setSelectedRows(a)),this.dragRows=a;const r=a.length,l=document.createElement("span");return l.className="drag-message",l.textContent=`Drag to Recycle Bin to delete ${r} selected row(s)`,this.dragHelper=l,document.body.appendChild(l),document.querySelector("#dropzone")?.classList.add("drag-dropzone"),l}handleOnDrag(e,i){if(this.dragMode!=="recycle")return;this.dragHelper instanceof HTMLElement&&(this.dragHelper.style.top=`${e.pageY+5}px`,this.dragHelper.style.left=`${e.pageX+5}px`);const n=document.querySelector("#dropzone");i.target instanceof HTMLElement&&(i.target.id==="dropzone"||i.target===n)?n.classList.add("drag-hover"):n.classList.remove("drag-hover")}handleOnDragEnd(e,i){if(this.dragMode!=="recycle"||(this.dragHelper?.remove(),document.querySelector("#dropzone")?.classList.remove("drag-dropzone","drag-hover"),this.dragMode!=="recycle"||i.target.id!=="dropzone"))return;const n=this.dragRows.sort().reverse();for(const a of n)this.dataset.splice(a,1);this.aureliaGrid.slickGrid?.invalidate(),this.aureliaGrid.slickGrid?.setSelectedRows([]),this.dataset=[...this.dataset]}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}ps=qP();_a=JP(ps,0,"Example41",Nb,_a);ZP(ps,1,_a);const XP=Object.freeze(Object.defineProperty({__proto__:null,get Example41(){return _a}},Symbol.toStringTag,{value:"Module"})),Wb="example42",Vr=`<div class="container-fluid">
  <h2>
    Example 42: Custom Pagination
    <span class="float-end">
      <a
        style="font-size: 18px"
        target="_blank"
        href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example42.ts"
      >
        <span class="mdi mdi-link-variant"></span> code
      </a>
    </span>
    <button
      class="ms-2 btn btn-outline-secondary btn-sm btn-icon"
      type="button"
      data-test="toggle-subtitle"
      click.trigger="toggleSubTitle()"
    >
      <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
    </button>
  </h2>

  <div class="subtitle">
    You can create a Custom Pagination by passing an Aurelia Custom Element and it must <code>implements BasePaginationComponent</code>. Any
    of the pagination controls could be moved anywhere on the page (for example we purposely moved the page size away from the rest of the
    pagination elements).
  </div>

  <div>
    <button class="btn btn-outline-secondary btn-icon" click.trigger="togglePaginationPosition()" data-text="toggle-pagination-btn">
      <span class="mdi mdi-swap-vertical"></span>
      <span>Toggle Pagination Position</span>
    </button>

    <span class="margin-15px">
      Page Size
      <input type="text" class="input is-small is-narrow" data-test="page-size-input" value.bind="pageSize" style="width: 55px" />
    </span>
  </div>

  <aurelia-slickgrid
    grid-id="grid42"
    columns.bind="columnDefinitions"
    options.bind="gridOptions"
    dataset.bind="dataset"
    instances.bind="aureliaGrid"
    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
  >
  </aurelia-slickgrid>
</div>
`,Bb=[],jb={};let Gn;function eI(t){Gn||(Gn=E.define({name:Wb,template:Vr,dependencies:Bb,bindables:jb})),t.register(Gn)}const tI=Object.freeze(Object.defineProperty({__proto__:null,bindables:jb,default:Vr,dependencies:Bb,name:Wb,register:eI,template:Vr},Symbol.toStringTag,{value:"Module"}));var iI=Object.create,hs=Object.defineProperty,aI=Object.getOwnPropertyDescriptor,nI=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),vi=t=>{throw TypeError(t)},Vb=(t,e,i)=>e in t?hs(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Od=(t,e)=>hs(t,"name",{value:e,configurable:!0}),rI=t=>[,,,iI(null)],Hb=["class","method","getter","setter","accessor","field","value","get","set"],Yt=t=>t!==void 0&&typeof t!="function"?vi("Function expected"):t,oI=(t,e,i,n,a)=>({kind:Hb[t],name:e,metadata:n,addInitializer:r=>i._?vi("Already initialized"):a.push(Yt(r||null))}),lI=(t,e)=>Vb(e,nI("metadata"),t[3]),Hr=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)e&1?r[a].call(i):n=r[a].call(i,n);return n},Ub=(t,e,i,n,a,r)=>{var l,d,u,s,m,o=e&7,g=!!(e&8),c=!!(e&16),p=o>3?t.length+1:o?g?1:2:0,_=Hb[o+5],w=o>3&&(t[p-1]=[]),x=t[p]||(t[p]=[]),b=o&&(!c&&!g&&(a=a.prototype),o<5&&(o>3||!c)&&aI(o<4?a:{get[i](){return Md(this,r)},set[i](h){return Pd(this,r,h)}},i));o?c&&o<4&&Od(r,(o>2?"set ":o>1?"get ":"")+i):Od(a,i);for(var y=n.length-1;y>=0;y--)s=oI(o,i,u={},t[3],x),o&&(s.static=g,s.private=c,m=s.access={has:c?h=>sI(a,h):h=>i in h},o^3&&(m.get=c?h=>(o^1?Md:dI)(h,a,o^4?r:b.get):h=>h[i]),o>2&&(m.set=c?(h,S)=>Pd(h,a,S,o^4?r:b.set):(h,S)=>h[i]=S)),d=(0,n[y])(o?o<4?c?r:b[_]:o>4?void 0:{get:b.get,set:b.set}:a,s),u._=1,o^4||d===void 0?Yt(d)&&(o>4?w.unshift(d):o?c?r=d:b[_]=d:a=d):typeof d!="object"||d===null?vi("Object expected"):(Yt(l=d.get)&&(b.get=l),Yt(l=d.set)&&(b.set=l),Yt(l=d.init)&&w.unshift(l));return o||lI(t,a),b&&hs(a,i,b),c?o^4?r:b:a},Oe=(t,e,i)=>Vb(t,typeof e!="symbol"?e+"":e,i),gs=(t,e,i)=>e.has(t)||vi("Cannot "+i),sI=(t,e)=>Object(e)!==e?vi('Cannot use the "in" operator on this value'):t.has(e),Md=(t,e,i)=>(gs(t,e,"read from private field"),i?i.call(t):e.get(t)),Pd=(t,e,i,n)=>(gs(t,e,"write to private field"),n?n.call(t,i):e.set(t,i),i),dI=(t,e,i)=>(gs(t,e,"access private method"),i),qb,Yb,St;const cI=5e3;function It(t,e){return Math.floor(Math.random()*(e-t+1)+t)}Yb=[T(tI)],qb=[D()];class ai{constructor(){Oe(this,"pageSize",Hr(St,8,this,50)),Hr(St,11,this),Oe(this,"columnDefinitions",[]),Oe(this,"gridContainerElm"),Oe(this,"gridOptions"),Oe(this,"dataset",[]),Oe(this,"paginationPosition","top"),Oe(this,"aureliaGrid"),Oe(this,"hideSubTitle",!1),Oe(this,"paginationOptions"),this.defineGrid()}attached(){this.dataset=this.loadData(cI)}aureliaGridReady(e){this.aureliaGrid=e}defineGrid(){this.columnDefinitions=[{id:"title",name:"Title",field:"id",minWidth:100,sortable:!0,filterable:!0,formatter:(e,i,n)=>`Task ${n}`,params:{useFormatterOuputToFilter:!0}},{id:"description",name:"Description",field:"description",filterable:!0,sortable:!0,minWidth:80},{id:"percentComplete",name:"% Complete",field:"percentComplete",minWidth:120,sortable:!0,customTooltip:{position:"center"},formatter:f.progressBar,type:"number",filterable:!0,filter:{model:v.sliderRange,maxValue:100,operator:"RangeInclusive",options:{hideSliderNumbers:!1,min:0,step:5}}},{id:"start",name:"Start",field:"start",formatter:f.dateIso,sortable:!0,minWidth:75,width:100,exportWithFormatter:!0,type:"date",filterable:!0,filter:{model:v.compoundDate}},{id:"finish",name:"Finish",field:"finish",formatter:f.dateIso,sortable:!0,minWidth:75,width:120,exportWithFormatter:!0,type:"date",filterable:!0,filter:{model:v.dateRange}},{id:"duration",field:"duration",name:"Duration",maxWidth:90,type:"number",sortable:!0,filterable:!0,filter:{model:v.input,operator:"RangeExclusive"}},{id:"completed",name:"Completed",field:"completed",minWidth:85,maxWidth:90,formatter:f.checkmarkMaterial,exportWithFormatter:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:v.singleSelect,options:{autoAdjustDropHeight:!0}}}],this.gridOptions={autoResize:{container:"#demo-container",bottomPadding:this.paginationPosition==="top"?-1:38},enableExcelCopyBuffer:!0,enableFiltering:!0,customPaginationComponent:ht,enablePagination:!0,pagination:{pageSize:this.pageSize},rowHeight:40}}loadData(e){const i=[];for(let n=0,a=e;n<a;n++){const r=It(0,365),l=It(new Date().getFullYear(),new Date().getFullYear()+1),d=It(0,12),u=It(10,28),s=It(0,100);i.push({id:n,title:"Task "+n,description:n%5?"desc "+n:null,duration:r,percentComplete:s,percentCompleteNumber:s,start:n%4?null:new Date(l,d,u),finish:new Date(l,d,u),completed:s===100})}return i}pageSizeChanged(e){this.aureliaGrid.paginationService?.changeItemPerPage(e)}togglePaginationPosition(){const e=document.querySelector(`#${this.aureliaGrid.slickGrid.getOptions().gridContainerId||""}`);this.paginationPosition=this.paginationPosition==="top"?"bottom":"top",this.aureliaGrid.paginationComponent?.disposeElement(),this.aureliaGrid.paginationComponent?.renderPagination(e,this.paginationPosition)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}St=rI();Ub(St,5,"pageSize",qb,ai);ai=Ub(St,0,"Example42",Yb,ai);Hr(St,1,ai);const uI=Object.freeze(Object.defineProperty({__proto__:null,get Example42(){return ai}},Symbol.toStringTag,{value:"Module"})),Kb="example43",Ur=`<h2>
  Example 43: colspan/rowspan - Employees Timesheets
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example43.ts"
    >
      <span class="mdi mdi-link-variant"></span> code
    </a>
  </span>
  <button class="ms-2 btn btn-outline-secondary btn-sm btn-icon" type="button" data-test="toggle-subtitle" click.trigger="toggleSubTitle()">
    <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
  </button>
</h2>

<div class="subtitle">
  <p class="italic example-details">
    <b>NOTES</b>: <code>rowspan</code> is an opt-in feature, because of its small perf hit (it needs to loop through all row metadatas to
    map all rowspan), and requires the <code>enableCellRowSpan</code> grid option to be enabled to work properly. The
    <code>colspan</code>/<code>rowspan</code> are both using DataView item metadata and are both based on row indexes and will
    <b>not</b> keep the row in sync with the data. It is really up to you the user to update the metadata logic of how and where the cells
    should span when a side effect kicks in. (i.e: Filtering/Sorting/Paging/Column Reorder... will <b>not</b> change/update the spanning in
    the grid by itself and that is why they these features are all disabled in this example). Also, column/row freezing (pinning) are also
    not supported, or at least not recommended unless you know exactly what you're doing (like in this demo here because we know our pinning
    doesn't intersect)! Any freezing column/row that could intersect with a <code>colspan</code>/<code>rowspan</code>
    <b>will cause problems</b>.
  </p>
</div>

<button
  class="ms-1 btn btn-outline-secondary btn-sm btn-icon"
  data-test="goto-up"
  click.trigger="navigateUp()"
  title="from an active cell, navigate to cell above"
>
  <span class="mdi mdi-chevron-down mdi-rotate-180"></span>
  Navigate Up Cell
</button>
<button
  class="ms-1 btn btn-outline-secondary btn-sm btn-icon"
  data-test="goto-down"
  click.trigger="navigateDown()"
  title="from an active cell, navigate to cell below"
>
  <span class="mdi mdi-chevron-down"></span>
  Navigate Down Cell
</button>
<button
  class="ms-1 btn btn-outline-secondary btn-sm btn-icon"
  data-test="goto-prev"
  click.trigger="navigatePrev()"
  title="from an active cell, navigate to previous left cell"
>
  <span class="mdi mdi-chevron-down mdi-rotate-90"></span>
  Navigate to Left Cell
</button>
<button
  class="ms-1 btn btn-outline-secondary btn-sm btn-icon"
  data-test="goto-next"
  click.trigger="navigateNext()"
  title="from an active cell, navigate to next right cell"
>
  <span class="mdi mdi-chevron-down mdi-rotate-270"></span>
  Navigate to Right Cell
</button>
<button
  class="ms-2 btn btn-outline-secondary btn-sm btn-icon mx-1"
  data-test="toggle-employee-id"
  click.trigger="toggleEmployeeIdVisibility()"
>
  Show/Hide EmployeeID
</button>
<button class="ms-1 btn btn-outline-secondary btn-sm btn-icon mx-1" click.trigger="toggleEditing()" data-test="toggle-editing">
  <span class="mdi mdi-pencil-outline"></span>
  <span>Toggle Editing: <span id="isEditable" class="text-italic">\${ isEditable }</span></span>
</button>
<button class="btn btn-outline-secondary btn-sm btn-icon mx-1" data-test="export-excel-btn" click.trigger="exportToExcel()">
  <i class="mdi mdi-file-excel-outline text-success"></i> Export to Excel
</button>

<aurelia-slickgrid
  grid-id="grid43"
  columns.bind="columnDefinitions"
  options.bind="gridOptions"
  dataset.bind="dataset"
  instances.bind="aureliaGrid"
>
</aurelia-slickgrid>
`,Qb=[],Zb={};let Fn;function mI(t){Fn||(Fn=E.define({name:Kb,template:Ur,dependencies:Qb,bindables:Zb})),t.register(Fn)}const pI=Object.freeze(Object.defineProperty({__proto__:null,bindables:Zb,default:Ur,dependencies:Qb,name:Kb,register:mI,template:Ur},Symbol.toStringTag,{value:"Module"}));var hI=Object.create,bs=Object.defineProperty,gI=Object.getOwnPropertyDescriptor,bI=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Jb=t=>{throw TypeError(t)},Xb=(t,e,i)=>e in t?bs(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,fI=(t,e)=>bs(t,"name",{value:e,configurable:!0}),vI=t=>[,,,hI(null)],_I=["class","method","getter","setter","accessor","field","value","get","set"],ef=t=>t!==void 0&&typeof t!="function"?Jb("Function expected"):t,yI=(t,e,i,n,a)=>({kind:_I[t],name:e,metadata:n,addInitializer:r=>i._?Jb("Already initialized"):a.push(ef(r||null))}),SI=(t,e)=>Xb(e,bI("metadata"),t[3]),CI=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},wI=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&gI(a,i));fI(a,i);for(var p=n.length-1;p>=0;p--)u=yI(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,ef(l)&&(a=l);return SI(t,a),c&&bs(a,i,c),m?s^4?r:c:a},Me=(t,e,i)=>Xb(t,typeof e!="symbol"?e+"":e,i),tf,fs;tf=[T(pI)];class ya{constructor(){Me(this,"aureliaGrid"),Me(this,"gridOptions"),Me(this,"columnDefinitions",[]),Me(this,"dataset",[]),Me(this,"isEditable",!1),Me(this,"hideSubTitle",!1),Me(this,"showEmployeeId",!0),Me(this,"excelExportService",new G),Me(this,"metadata",{0:{columns:{1:{rowspan:2},2:{colspan:2},6:{colspan:3},10:{colspan:3,rowspan:10},13:{colspan:2},17:{colspan:2,rowspan:2}}},1:{columns:{3:{colspan:3},6:{colspan:4},13:{colspan:2,rowspan:5},15:{colspan:2}}},2:{columns:{2:{colspan:3,rowspan:2},5:{colspan:2},7:{colspan:3},15:{colspan:2},17:{colspan:2}}},3:{columns:{6:{colspan:4},16:{colspan:2}}},4:{columns:{2:{colspan:4},7:{colspan:3},15:{colspan:2,rowspan:2},17:{colspan:2}}},5:{columns:{2:{colspan:2},4:{colspan:3},7:{colspan:3},17:{colspan:2}}},6:{columns:{2:{colspan:2},5:{colspan:2},7:{colspan:3},14:{colspan:2},16:{colspan:3}}},7:{columns:{2:{colspan:3},5:{colspan:3},13:{colspan:3,rowspan:2},16:{colspan:2}}},8:{columns:{2:{colspan:3},7:{colspan:3,rowspan:2},17:{colspan:2}}},9:{columns:{2:{colspan:3},5:{colspan:2},13:{colspan:3},16:{colspan:3}}}}),this.defineGrid()}attached(){this.dataset=this.loadData()}defineGrid(){this.columnDefinitions=[{id:"employeeID",name:"Employee ID",field:"employeeID",minWidth:100},{id:"employeeName",name:"Employee Name",field:"employeeName",editor:{model:C.text},minWidth:120},{id:"9:00",name:"9:00 AM",field:"9:00",editor:{model:C.text},minWidth:120},{id:"9:30",name:"9:30 AM",field:"9:30",editor:{model:C.text},minWidth:120},{id:"10:00",name:"10:00 AM",field:"10:00",editor:{model:C.text},minWidth:120},{id:"10:30",name:"10:30 AM",field:"10:30",editor:{model:C.text},minWidth:120},{id:"11:00",name:"11:00 AM",field:"11:00",editor:{model:C.text},minWidth:120},{id:"11:30",name:"11:30 AM",field:"11:30",editor:{model:C.text},minWidth:120},{id:"12:00",name:"12:00 PM",field:"12:00",editor:{model:C.text},minWidth:120},{id:"12:30",name:"12:30 PM",field:"12:30",editor:{model:C.text},minWidth:120},{id:"1:00",name:"1:00 PM",field:"1:00",editor:{model:C.text},minWidth:120},{id:"1:30",name:"1:30 PM",field:"1:30",editor:{model:C.text},minWidth:120},{id:"2:00",name:"2:00 PM",field:"2:00",editor:{model:C.text},minWidth:120},{id:"2:30",name:"2:30 PM",field:"2:30",editor:{model:C.text},minWidth:120},{id:"3:00",name:"3:00 PM",field:"3:00",editor:{model:C.text},minWidth:120},{id:"3:30",name:"3:30 PM",field:"3:30",editor:{model:C.text},minWidth:120},{id:"4:00",name:"4:00 PM",field:"4:00",editor:{model:C.text},minWidth:120},{id:"4:30",name:"4:30 PM",field:"4:30",editor:{model:C.text},minWidth:120},{id:"5:00",name:"5:00 PM",field:"5:00",editor:{model:C.text},minWidth:120}],this.gridOptions={autoResize:{bottomPadding:30,rightPadding:50},enableCellNavigation:!0,enableColumnReorder:!0,enableCellRowSpan:!0,enableHeaderMenu:!1,enableExcelExport:!0,externalResources:[this.excelExportService],enableExcelCopyBuffer:!0,autoEdit:!0,editable:!1,datasetIdPropertyName:"employeeID",frozenColumn:0,gridHeight:348,rowHeight:30,dataView:{globalItemMetadataProvider:{getRowMetadata:(e,i)=>this.metadata[i]}},rowTopOffsetRenderType:"top"}}exportToExcel(){this.excelExportService.exportToExcel({filename:"export",format:"xlsx"})}navigateDown(){this.aureliaGrid?.slickGrid?.navigateDown()}navigateUp(){this.aureliaGrid?.slickGrid?.navigateUp()}navigateNext(){this.aureliaGrid?.slickGrid?.navigateNext()}navigatePrev(){this.aureliaGrid?.slickGrid?.navigatePrev()}toggleEditing(){this.isEditable=!this.isEditable,this.aureliaGrid.slickGrid.setOptions({editable:this.isEditable})}loadData(){return[{employeeID:10001,employeeName:"Davolio","9:00":"Analysis Tasks","9:30":"Analysis Tasks","10:00":"Team Meeting","10:30":"Testing","11:00":"Development","11:30":"Development","12:00":"Development","12:30":"Support","1:00":"Lunch Break","1:30":"Lunch Break","2:00":"Lunch Break","2:30":"Testing","3:00":"Testing","3:30":"Development","4:00":"Conference","4:30":"Team Meeting","5:00":"Team Meeting"},{employeeID:10002,employeeName:"Buchanan","9:00":"Task Assign","9:30":"Support","10:00":"Support","10:30":"Support","11:00":"Testing","11:30":"Testing","12:00":"Testing","12:30":"Testing","1:00":"Lunch Break","1:30":"Lunch Break","2:00":"Lunch Break","2:30":"Development","3:00":"Development","3:30":"Check Mail","4:00":"Check Mail","4:30":"Team Meeting","5:00":"Team Meeting"},{employeeID:10003,employeeName:"Fuller","9:00":"Check Mail","9:30":"Check Mail","10:00":"Check Mail","10:30":"Analysis Tasks","11:00":"Analysis Tasks","11:30":"Support","12:00":"Support","12:30":"Support","1:00":"Lunch Break","1:30":"Lunch Break","2:00":"Lunch Break","2:30":"Development","3:00":"Development","3:30":"Team Meeting","4:00":"Team Meeting","4:30":"Development","5:00":"Development"},{employeeID:10004,employeeName:"Leverling","9:00":"Testing","9:30":"Check Mail","10:00":"Check Mail","10:30":"Support","11:00":"Testing","11:30":"Testing","12:00":"Testing","12:30":"Testing","1:00":"Lunch Break","1:30":"Lunch Break","2:00":"Lunch Break","2:30":"Development","3:00":"Development","3:30":"Check Mail","4:00":"Conference","4:30":"Conference","5:00":"Team Meeting"},{employeeID:10005,employeeName:"Peacock","9:00":"Task Assign","9:30":"Task Assign","10:00":"Task Assign","10:30":"Task Assign","11:00":"Check Mail","11:30":"Support","12:00":"Support","12:30":"Support","1:00":"Lunch Break","1:30":"Lunch Break","2:00":"Lunch Break","2:30":"Development","3:00":"Development","3:30":"Team Meeting","4:00":"Team Meeting","4:30":"Testing","5:00":"Testing"},{employeeID:10006,employeeName:"Janet","9:00":"Testing","9:30":"Testing","10:00":"Support","10:30":"Support","11:00":"Support","11:30":"Team Meeting","12:00":"Team Meeting","12:30":"Team Meeting","1:00":"Lunch Break","1:30":"Lunch Break","2:00":"Lunch Break","2:30":"Development","3:00":"Development","3:30":"Team Meeting","4:00":"Team Meeting","4:30":"Development","5:00":"Development"},{employeeID:10007,employeeName:"Suyama","9:00":"Analysis Tasks","9:30":"Analysis Tasks","10:00":"Testing","10:30":"Development","11:00":"Development","11:30":"Testing","12:00":"Testing","12:30":"Testing","1:00":"Lunch Break","1:30":"Lunch Break","2:00":"Lunch Break","2:30":"Support","3:00":"Build","3:30":"Build","4:00":"Check Mail","4:30":"Check Mail","5:00":"Check Mail"},{employeeID:10008,employeeName:"Robert","9:00":"Task Assign","9:30":"Task Assign","10:00":"Task Assign","10:30":"Development","11:00":"Development","11:30":"Development","12:00":"Testing","12:30":"Support","1:00":"Lunch Break","1:30":"Lunch Break","2:00":"Lunch Break","2:30":"Check Mail","3:00":"Check Mail","3:30":"Check Mail","4:00":"Team Meeting","4:30":"Team Meeting","5:00":"Build"},{employeeID:10009,employeeName:"Andrew","9:00":"Check Mail","9:30":"Team Meeting","10:00":"Team Meeting","10:30":"Support","11:00":"Testing","11:30":"Development","12:00":"Development","12:30":"Development","1:00":"Lunch Break","1:30":"Lunch Break","2:00":"Lunch Break","2:30":"Check Mail","3:00":"Check Mail","3:30":"Check Mail","4:00":"Team Meeting","4:30":"Development","5:00":"Development"},{employeeID:10010,employeeName:"Michael","9:00":"Task Assign","9:30":"Task Assign","10:00":"Task Assign","10:30":"Analysis Tasks","11:00":"Analysis Tasks","11:30":"Development","12:00":"Development","12:30":"Development","1:00":"Lunch Break","1:30":"Lunch Break","2:00":"Lunch Break","2:30":"Testing","3:00":"Testing","3:30":"Testing","4:00":"Build","4:30":"Build","5:00":"Build"}]}toggleEmployeeIdVisibility(){const e={};this.showEmployeeId=!this.showEmployeeId;const i=this.showEmployeeId?1:-1;for(const n of Object.keys(this.metadata)){e[n]={columns:{}};for(const a of Object.keys(this.metadata[n].columns))e[n].columns[Number(a)+i]=this.metadata[n].columns[a]}this.showEmployeeId?this.columnDefinitions.unshift({id:"employeeID",name:"Employee ID",field:"employeeID",width:100}):this.columnDefinitions.splice(0,1),this.aureliaGrid.slickGrid.setColumns(this.columnDefinitions),this.metadata=e,this.aureliaGrid.slickGrid.remapAllColumnsRowSpan(),this.aureliaGrid.slickGrid.invalidate()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}fs=vI();ya=wI(fs,0,"Example43",tf,ya);CI(fs,1,ya);const xI=Object.freeze(Object.defineProperty({__proto__:null,get Example43(){return ya}},Symbol.toStringTag,{value:"Module"})),af="example44",qr=`<h2>
  Example 44: colspan/rowspan with large dataset
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example44.ts"
    >
      <span class="mdi mdi-link-variant"></span> code
    </a>
  </span>
  <button class="ms-2 btn btn-outline-secondary btn-sm btn-icon" type="button" data-test="toggle-subtitle" click.trigger="toggleSubTitle()">
    <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
  </button>
</h2>

<div class="subtitle">
  <p class="italic example-details">
    This page demonstrates <code>colspan</code> & <code>rowspan</code> using DataView with item metadata. <b>Note</b>:
    <code>colspan</code> & <code>rowspan</code> are rendered via row/cell indexes, any operations that could change these indexes (i.e.
    Filtering/Sorting/Paging/Column Reorder) will require you to implement proper logic to recalculate these indexes (it becomes your
    responsability). This demo does not show this because it is up to you to decide what to do when the span changes shape (i.e. you default
    to 3 rowspan but you filter a row in the middle, how do you want to proceed?).
  </p>
</div>

<section class="row mb-2">
  <div class="d-flex">
    <button class="ms-1 btn btn-outline-secondary btn-sm" data-test="add-500-rows-btn" click.trigger="loadData(500)">500 rows</button>
    <button class="ms-1 btn btn-outline-secondary btn-sm" data-test="add-5k-rows-btn" click.trigger="loadData(5000)">5k rows</button>
    <button class="ms-1 btn btn-outline-secondary btn-sm" data-test="add-50k-rows-btn" click.trigger="loadData(50000)">50k rows</button>
    <button class="mx-1 btn btn-outline-secondary btn-sm" data-test="add-50k-rows-btn" click.trigger="loadData(500000)">500k rows</button>
    <div class="mx-2"><label>data length: </label><span id="dataLn">\${dataLn}</span></div>
    <button
      id="toggleSpans"
      class="ms-1 btn btn-outline-secondary btn-sm btn-icon mx-1"
      click.trigger="handleToggleSpans()"
      data-test="toggleSpans"
    >
      <span class="mdi mdi-flip-vertical"></span>
      <span>Toggle blue cell colspan &amp; rowspan</span>
    </button>
    <button id="scrollTo" class="ms-1 btn btn-outline-secondary btn-sm btn-icon" click.trigger="handleScrollTo()" data-test="scrollToBtn">
      <span class="mdi mdi-arrow-down"></span>
      <span>Scroll To Row</span>
    </button>
    <div class="input-group input-group-sm ms-1" style="width: 100px">
      <input
        value.bind="scrollToRow"
        id="nRow"
        type="text"
        data-test="nbrows"
        class="form-control search-string"
        placeholder="search value"
        autocomplete="off"
      />
      <button class="btn btn-sm btn-outline-secondary d-flex align-items-center" data-test="clearScrollTo" click.trigger="clearScrollTo()">
        <span class="icon mdi mdi-close-thick"></span>
      </button>
    </div>
  </div>
</section>

<aurelia-slickgrid
  grid-id="grid44"
  columns.bind="columnDefinitions"
  options.bind="gridOptions"
  dataset.bind="dataset"
  instances.bind="aureliaGrid"
>
</aurelia-slickgrid>
`,nf=[],rf={};let An;function TI(t){An||(An=E.define({name:af,template:qr,dependencies:nf,bindables:rf})),t.register(An)}const EI=Object.freeze(Object.defineProperty({__proto__:null,bindables:rf,default:qr,dependencies:nf,name:af,register:TI,template:qr},Symbol.toStringTag,{value:"Module"}));var $I=Object.create,vs=Object.defineProperty,kI=Object.getOwnPropertyDescriptor,DI=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),of=t=>{throw TypeError(t)},lf=(t,e,i)=>e in t?vs(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,OI=(t,e)=>vs(t,"name",{value:e,configurable:!0}),MI=t=>[,,,$I(null)],PI=["class","method","getter","setter","accessor","field","value","get","set"],sf=t=>t!==void 0&&typeof t!="function"?of("Function expected"):t,II=(t,e,i,n,a)=>({kind:PI[t],name:e,metadata:n,addInitializer:r=>i._?of("Already initialized"):a.push(sf(r||null))}),GI=(t,e)=>lf(e,DI("metadata"),t[3]),FI=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},AI=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&kI(a,i));OI(a,i);for(var p=n.length-1;p>=0;p--)u=II(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,sf(l)&&(a=l);return GI(t,a),c&&vs(a,i,c),m?s^4?r:c:a},je=(t,e,i)=>lf(t,typeof e!="symbol"?e+"":e,i),df,_s;const M=(t,e,i)=>`<div class="cellValue">${i.toFixed(2)}</div><div class="valueComment">${t}.${e}</div>`,P=(t,e,i)=>i.toFixed(2);df=[T(EI)];class Sa{constructor(){je(this,"aureliaGrid"),je(this,"gridOptions"),je(this,"columnDefinitions",[]),je(this,"dataLn","loading..."),je(this,"dataset",[]),je(this,"hideSubTitle",!1),je(this,"scrollToRow",100),je(this,"metadata",{0:{columns:{1:{rowspan:3}}},2:{columns:{0:{rowspan:3},3:{colspan:3}}},3:{columns:{1:{rowspan:5,colspan:1,cssClass:"cell-var-span"},3:{rowspan:3,colspan:5}}},8:{columns:{1:{rowspan:80},3:{rowspan:1999,colspan:2,cssClass:"cell-very-high"}}},12:{columns:{11:{rowspan:3}}},15:{columns:{18:{colspan:4,rowspan:3}}},85:{columns:{5:{rowspan:20}}}}),this.defineGrid()}attached(){this.loadData(500)}defineGrid(){this.columnDefinitions=[{id:"title",name:"Title",field:"title",minWidth:80},{id:"revenueGrowth",name:"Revenue Growth",field:"revenueGrowth",exportCustomFormatter:P,formatter:M,type:"number",minWidth:120},{id:"pricingPolicy",name:"Pricing Policy",field:"pricingPolicy",minWidth:110,sortable:!0,exportCustomFormatter:P,formatter:M,type:"number"},{id:"policyIndex",name:"Policy Index",field:"policyIndex",minWidth:100,exportCustomFormatter:P,formatter:M,type:"number"},{id:"expenseControl",name:"Expense Control",field:"expenseControl",minWidth:110,exportCustomFormatter:P,formatter:M,type:"number"},{id:"excessCash",name:"Excess Cash",field:"excessCash",minWidth:100,exportCustomFormatter:P,formatter:M,type:"number"},{id:"netTradeCycle",name:"Net Trade Cycle",field:"netTradeCycle",minWidth:110,exportCustomFormatter:P,formatter:M,type:"number"},{id:"costCapital",name:"Cost of Capital",field:"costCapital",minWidth:100,exportCustomFormatter:P,formatter:M,type:"number"},{id:"revenueGrowth2",name:"Revenue Growth",field:"revenueGrowth2",exportCustomFormatter:P,formatter:M,type:"number",minWidth:120},{id:"pricingPolicy2",name:"Pricing Policy",field:"pricingPolicy2",minWidth:110,sortable:!0,exportCustomFormatter:P,formatter:M,type:"number"},{id:"policyIndex2",name:"Policy Index",field:"policyIndex2",minWidth:100,exportCustomFormatter:P,formatter:M,type:"number"},{id:"expenseControl2",name:"Expense Control",field:"expenseControl2",minWidth:110,exportCustomFormatter:P,formatter:M,type:"number"},{id:"excessCash2",name:"Excess Cash",field:"excessCash2",minWidth:100,exportCustomFormatter:P,formatter:M,type:"number"},{id:"netTradeCycle2",name:"Net Trade Cycle",field:"netTradeCycle2",minWidth:110,exportCustomFormatter:P,formatter:M,type:"number"},{id:"costCapital2",name:"Cost of Capital",field:"costCapital2",minWidth:100,exportCustomFormatter:P,formatter:M,type:"number"},{id:"revenueGrowth3",name:"Revenue Growth",field:"revenueGrowth3",exportCustomFormatter:P,formatter:M,type:"number",minWidth:120},{id:"pricingPolicy3",name:"Pricing Policy",field:"pricingPolicy3",minWidth:110,sortable:!0,exportCustomFormatter:P,formatter:M,type:"number"},{id:"policyIndex3",name:"Policy Index",field:"policyIndex3",minWidth:100,exportCustomFormatter:P,formatter:M,type:"number"},{id:"expenseControl3",name:"Expense Control",field:"expenseControl3",minWidth:110,exportCustomFormatter:P,formatter:M,type:"number"},{id:"excessCash3",name:"Excess Cash",field:"excessCash3",minWidth:100,exportCustomFormatter:P,formatter:M,type:"number"},{id:"netTradeCycle3",name:"Net Trade Cycle",field:"netTradeCycle3",minWidth:110,exportCustomFormatter:P,formatter:M,type:"number"},{id:"costCapital3",name:"Cost of Capital",field:"costCapital3",minWidth:100,exportCustomFormatter:P,formatter:M,type:"number"}],this.gridOptions={enableCellNavigation:!0,enableColumnReorder:!0,enableCellRowSpan:!0,enableHeaderMenu:!1,gridHeight:600,gridWidth:900,rowHeight:30,dataView:{globalItemMetadataProvider:{getRowMetadata:(e,i)=>this.renderDifferentColspan(e,i)}},enableExcelExport:!0,externalResources:[new G],rowTopOffsetRenderType:"top"}}clearScrollTo(){this.scrollToRow=0,document.querySelector("#nRow")?.focus()}loadData(e){this.dataLn="loading...",setTimeout(()=>{const i=[];for(let n=0;n<e;n++)i[n]={id:n,title:"Task "+n,revenueGrowth:Math.random()*Math.pow(10,Math.random()*3),pricingPolicy:Math.random()*Math.pow(10,Math.random()*3),policyIndex:Math.random()*Math.pow(10,Math.random()*3),expenseControl:Math.random()*Math.pow(10,Math.random()*3),excessCash:Math.random()*Math.pow(10,Math.random()*3),netTradeCycle:Math.random()*Math.pow(10,Math.random()*3),costCapital:Math.random()*Math.pow(10,Math.random()*3),revenueGrowth2:Math.random()*Math.pow(10,Math.random()*3),pricingPolicy2:Math.random()*Math.pow(10,Math.random()*3),policyIndex2:Math.random()*Math.pow(10,Math.random()*3),expenseControl2:Math.random()*Math.pow(10,Math.random()*3),excessCash2:Math.random()*Math.pow(10,Math.random()*3),netTradeCycle2:Math.random()*Math.pow(10,Math.random()*3),costCapital2:Math.random()*Math.pow(10,Math.random()*3),revenueGrowth3:Math.random()*Math.pow(10,Math.random()*3),pricingPolicy3:Math.random()*Math.pow(10,Math.random()*3),policyIndex3:Math.random()*Math.pow(10,Math.random()*3),expenseControl3:Math.random()*Math.pow(10,Math.random()*3),excessCash3:Math.random()*Math.pow(10,Math.random()*3),netTradeCycle3:Math.random()*Math.pow(10,Math.random()*3),costCapital3:Math.random()*Math.pow(10,Math.random()*3)};this.metadata[8].columns[3].rowspan=i.length-8,this.aureliaGrid?.dataView?.beginUpdate(),this.aureliaGrid?.dataView?.setItems(i),this.aureliaGrid?.dataView?.endUpdate(),this.dataLn=e},20)}renderDifferentColspan(e,i){return this.metadata[i]?.attributes?this.metadata[i]:this.metadata[i]={attributes:{"data-row":i},...this.metadata[i]}}handleToggleSpans(){const e=this.metadata[3].columns[1];e.colspan===1?(e.rowspan=3,e.colspan=2):(e.rowspan=5,e.colspan=1),this.aureliaGrid.slickGrid?.invalidateRows([3,4,5,6,7]),this.aureliaGrid.slickGrid?.render()}handleScrollTo(){return this.aureliaGrid.slickGrid?.scrollRowToTop(this.scrollToRow),!1}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}_s=MI();Sa=AI(_s,0,"Example44",df,Sa);FI(_s,1,Sa);const RI=Object.freeze(Object.defineProperty({__proto__:null,get Example44(){return Sa}},Symbol.toStringTag,{value:"Module"})),cf="example45",Yr=`<div id="demo-container" class="container-fluid">
  <h2>
    Example 45: Row Detail with inner Grid
    <span class="float-end">
      <a
        style="font-size: 18px"
        target="_blank"
        href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example44.ts"
      >
        <span class="mdi mdi-link-variant"></span> code
      </a>
    </span>
    <button
      class="ms-2 btn btn-outline-secondary btn-sm btn-icon"
      type="button"
      data-test="toggle-subtitle"
      click.trigger="toggleSubTitle()"
    >
      <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
    </button>
    <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="toggleDarkMode()" data-test="toggle-dark-mode">
      <span class="mdi mdi-theme-light-dark"></span>
      <span>Toggle Dark Mode</span>
    </button>
  </h2>

  <div class="subtitle">
    Add functionality to show extra information with a Row Detail View, (<a
      href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/row-detail"
      target="_blank"
      >Wiki docs</a
    >), we'll use an inner grid inside our Row Detail Component. Note that because SlickGrid uses Virtual Scroll, the rows and row details
    are often be re-rendered (when row is out of viewport range) and this means unmounting Row Detail Component which indirectly mean that
    all component states (dynamic elements, forms, ...) will be disposed as well, however you can use Grid State/Presets to reapply previous
    state whenever the row detail gets re-rendered when back to viewport.
  </div>

  <div class="row">
    <div class="col-sm-10">
      <button class="btn btn-outline-secondary btn-sm btn-icon ms-1" data-test="collapse-all-btn" click.trigger="closeAllRowDetail()">
        Close all Row Details
      </button>
      <button class="btn btn-outline-secondary btn-sm btn-icon mx-1" data-test="redraw-all-btn" click.trigger="redrawAllRowDetail()">
        Force redraw all Row Details
      </button>

      <span class="d-inline-flex gap-4px">
        <label for="detailViewRowCount">Detail View Rows Shown: </label>
        <input
          id="detailViewRowCount"
          data-test="detail-view-row-count"
          type="number"
          style="height: 26px; width: 40px"
          value.bind="detailViewRowCount"
        />
        <button
          class="btn btn-outline-secondary btn-xs btn-icon"
          style="height: 26px"
          data-test="set-count-btn"
          click.trigger="changeDetailViewRowCount()"
        >
          Set
        </button>
        <label for="serverdelay" class="ms-2">Server Delay: </label>
        <input
          id="serverdelay"
          value.bind="serverWaitDelay"
          type="number"
          data-test="server-delay"
          style="height: 26px; width: 55px"
          title="input a fake timer delay to simulate slow server response"
        />
        <label class="checkbox-inline control-label ms-2" for="useInnerGridStatePresets">
          <input
            type="checkbox"
            id="useInnerGridStatePresets"
            data-test="use-inner-grid-state-presets"
            checked.bind="isUsingInnerGridStatePresets"
            click.trigger="changeUsingInnerGridStatePresets()"
          />
          <span
            title="should we use Grid State/Presets to keep the inner grid state whenever Row Details are out and back to viewport and re-rendered"
          >
            Use Inner Grid State/Presets
          </span>
        </label>

        <label class="checkbox-inline control-label ms-2" for="useResizeAutoHeight">
          <input
            type="checkbox"
            id="useResizeAutoHeight"
            data-test="use-auto-height"
            checked.bind="isUsingAutoHeight"
            click.trigger="changeUsingResizerAutoHeight()"
          />
          Use <code>autoResize.autoHeight</code>
        </label>
      </span>
    </div>
  </div>

  <aurelia-slickgrid
    grid-id="grid45"
    columns.bind="columnDefinitions"
    options.bind="gridOptions"
    dataset.bind="dataset"
    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
  >
  </aurelia-slickgrid>
</div>
`,uf=[],mf={};let Rn;function LI(t){Rn||(Rn=E.define({name:cf,template:Yr,dependencies:uf,bindables:mf})),t.register(Rn)}const zI=Object.freeze(Object.defineProperty({__proto__:null,bindables:mf,default:Yr,dependencies:uf,name:cf,register:LI,template:Yr},Symbol.toStringTag,{value:"Module"}));var NI=Object.create,ys=Object.defineProperty,WI=Object.getOwnPropertyDescriptor,BI=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),_i=t=>{throw TypeError(t)},pf=(t,e,i)=>e in t?ys(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Id=(t,e)=>ys(t,"name",{value:e,configurable:!0}),jI=t=>[,,,NI(null)],hf=["class","method","getter","setter","accessor","field","value","get","set"],Kt=t=>t!==void 0&&typeof t!="function"?_i("Function expected"):t,VI=(t,e,i,n,a)=>({kind:hf[t],name:e,metadata:n,addInitializer:r=>i._?_i("Already initialized"):a.push(Kt(r||null))}),HI=(t,e)=>pf(e,BI("metadata"),t[3]),Qt=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)e&1?r[a].call(i):n=r[a].call(i,n);return n},Ss=(t,e,i,n,a,r)=>{var l,d,u,s,m,o=e&7,g=!!(e&8),c=!!(e&16),p=o>3?t.length+1:o?g?1:2:0,_=hf[o+5],w=o>3&&(t[p-1]=[]),x=t[p]||(t[p]=[]),b=o&&(!c&&!g&&(a=a.prototype),o<5&&(o>3||!c)&&WI(o<4?a:{get[i](){return Gd(this,r)},set[i](h){return Fd(this,r,h)}},i));o?c&&o<4&&Id(r,(o>2?"set ":o>1?"get ":"")+i):Id(a,i);for(var y=n.length-1;y>=0;y--)s=VI(o,i,u={},t[3],x),o&&(s.static=g,s.private=c,m=s.access={has:c?h=>UI(a,h):h=>i in h},o^3&&(m.get=c?h=>(o^1?Gd:qI)(h,a,o^4?r:b.get):h=>h[i]),o>2&&(m.set=c?(h,S)=>Fd(h,a,S,o^4?r:b.set):(h,S)=>h[i]=S)),d=(0,n[y])(o?o<4?c?r:b[_]:o>4?void 0:{get:b.get,set:b.set}:a,s),u._=1,o^4||d===void 0?Kt(d)&&(o>4?w.unshift(d):o?c?r=d:b[_]=d:a=d):typeof d!="object"||d===null?_i("Object expected"):(Kt(l=d.get)&&(b.get=l),Kt(l=d.set)&&(b.set=l),Kt(l=d.init)&&w.unshift(l));return o||HI(t,a),b&&ys(a,i,b),c?o^4?r:b:a},pe=(t,e,i)=>pf(t,typeof e!="symbol"?e+"":e,i),Cs=(t,e,i)=>e.has(t)||_i("Cannot "+i),UI=(t,e)=>Object(e)!==e?_i('Cannot use the "in" operator on this value'):t.has(e),Gd=(t,e,i)=>(Cs(t,e,"read from private field"),i?i.call(t):e.get(t)),Fd=(t,e,i,n)=>(Cs(t,e,"write to private field"),n?n.call(t,i):e.set(t,i),i),qI=(t,e,i)=>(Cs(t,e,"access private method"),i),gf,bf,ff,Ge;const YI=250,KI=995;ff=[T(zI)],bf=[D],gf=[D];class Ct{constructor(){pe(this,"_darkMode",!1),pe(this,"detailViewRowCount",Qt(Ge,8,this,9)),Qt(Ge,11,this),pe(this,"serverWaitDelay",Qt(Ge,12,this,YI)),Qt(Ge,15,this),pe(this,"columnDefinitions",[]),pe(this,"gridOptions"),pe(this,"aureliaGrid"),pe(this,"dataset",[]),pe(this,"isUsingAutoHeight",!1),pe(this,"isUsingInnerGridStatePresets",!1),pe(this,"hideSubTitle",!1),this.defineGrid()}get rowDetailInstance(){return this.aureliaGrid?.extensionService.getExtensionInstanceByName("rowDetailView")}aureliaGridReady(e){this.aureliaGrid=e}attached(){this.dataset=this.getData(KI)}defineGrid(){this.columnDefinitions=[{id:"companyId",name:"ID",field:"companyId",cssClass:"text-end",minWidth:50,maxWidth:50,filterable:!0,sortable:!0,type:"number"},{id:"companyName",name:"Company Name",field:"companyName",width:90,filterable:!0,sortable:!0},{id:"streetAddress",name:"Street Address",field:"streetAddress",minWidth:120,filterable:!0},{id:"city",name:"City",field:"city",minWidth:120,filterable:!0},{id:"zipCode",name:"Zip Code",field:"zipCode",minWidth:120,filterable:!0},{id:"country",name:"Country",field:"country",minWidth:120,filterable:!0}],this.gridOptions={autoResize:{container:"#demo-container",autoHeight:this.isUsingAutoHeight,rightPadding:20,bottomPadding:20},enableFiltering:!0,enableRowDetailView:!0,rowTopOffsetRenderType:"top",darkMode:this._darkMode,rowHeight:33,externalResources:[oo],rowDetailView:{process:e=>this.simulateServerAsyncCall(e),loadOnce:!1,useRowClick:!1,panelRows:this.detailViewRowCount,parentRef:this,preloadViewModel:ei,viewModel:bt}}}getData(e){const i=[];for(let n=0;n<e;n++)i[n]={id:n,companyId:n,companyName:dt.company.name(),city:dt.location.city(),streetAddress:dt.location.streetAddress(),zipCode:dt.location.zipCode("######"),country:dt.location.country(),orderData:[],isUsingInnerGridStatePresets:!1};return i}changeDetailViewRowCount(){if(this.aureliaGrid?.extensionService){const e=this.rowDetailInstance.getOptions();e?.panelRows&&(e.panelRows=this.detailViewRowCount,this.rowDetailInstance.setOptions(e))}}changeUsingInnerGridStatePresets(){return this.isUsingInnerGridStatePresets=!this.isUsingInnerGridStatePresets,this.closeAllRowDetail(),!0}changeUsingResizerAutoHeight(){return this.isUsingAutoHeight=!this.isUsingAutoHeight,this.aureliaGrid.slickGrid?.setOptions({autoResize:{...this.gridOptions.autoResize,autoHeight:this.isUsingAutoHeight}}),this.aureliaGrid.resizerService.resizeGrid(),!0}closeAllRowDetail(){this.rowDetailInstance?.collapseAll()}redrawAllRowDetail(){this.rowDetailInstance?.redrawAllViewSlots(!0)}simulateServerAsyncCall(e){let i=[];return e.id%3?i=[{orderId:"10261",shipCity:"Rio de Janeiro",freight:3.05,shipName:"Que Delícia"},{orderId:"10267",shipCity:"München",freight:208.58,shipName:"Frankenversand"},{orderId:"10281",shipCity:"Madrid",freight:2.94,shipName:"Romero y tomillo"}]:e.id%4?i=[{orderId:"10251",shipCity:"Lyon",freight:41.34,shipName:"Victuailles en stock"},{orderId:"10253",shipCity:"Rio de Janeiro",freight:58.17,shipName:"Hanari Carnes"},{orderId:"10256",shipCity:"Resende",freight:13.97,shipName:"Wellington Importadora"}]:e.id%5?i=[{orderId:"10265",shipCity:"Strasbourg",freight:55.28,shipName:"Blondel père et fils"},{orderId:"10277",shipCity:"Leipzig",freight:125.77,shipName:"Morgenstern Gesundkost"},{orderId:"10280",shipCity:"Luleå",freight:8.98,shipName:"Berglunds snabbköp"},{orderId:"10295",shipCity:"Reims",freight:1.15,shipName:"Vins et alcools Chevalier"}]:e.id%2?i=[{orderId:"10258",shipCity:"Graz",freight:140.51,shipName:"Ernst Handel"},{orderId:"10270",shipCity:"Oulu",freight:136.54,shipName:"Wartian Herkku"}]:i=[{orderId:"10255",shipCity:"Genève",freight:148.33,shipName:"Richter Supermarkt"}],new Promise(n=>{setTimeout(()=>{const a=e;a.orderData=i,a.isUsingInnerGridStatePresets=this.isUsingInnerGridStatePresets,n(a)},this.serverWaitDelay)})}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.aureliaGrid.slickGrid?.setOptions({darkMode:this._darkMode}),this.closeAllRowDetail()}toggleBodyBackground(){this._darkMode?(document.querySelector(".panel-wm-content").classList.add("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="dark"):(document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light")}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}Ge=jI();Ss(Ge,5,"detailViewRowCount",bf,Ct);Ss(Ge,5,"serverWaitDelay",gf,Ct);Ct=Ss(Ge,0,"Example45",ff,Ct);Qt(Ge,1,Ct);const QI=Object.freeze(Object.defineProperty({__proto__:null,get Example45(){return Ct}},Symbol.toStringTag,{value:"Module"})),vf="example46",Kr=`<h2>
  <span>
    Example 46: Tree Data with Lazy Loading
    <small>
      <span class="mdi mdi-file-tree font-27px"></span> (from a Hierarchical Dataset -
      <a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/tree-data-grid" target="_blank">Wiki</a>)</small
    >
  </span>
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example46.ts"
    >
      <span class="mdi mdi-link mdi-v-align-sub"></span> code
    </a>
  </span>
  <button class="ms-2 btn btn-outline-secondary btn-sm btn-icon" type="button" data-test="toggle-subtitle" click.trigger="toggleSubTitle()">
    <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
  </button>
</h2>

<div class="subtitle">
  <ul>
    <li>
      Lazy Loading only works with Hierarchical Tree Data, also when creating a Lazy Tree Data grid, you would typically assign the
      <code>data</code> as the root collection but with empty children items.
    </li>
    <li>
      However please note that Parents do require the children arrays to be defined but can be left as empty arrays (e.g.
      <code>chapters: []</code> in our example). Parents without empty children arrays defined <b>will not</b> be detected as parents.
    </li>
    <li>
      Calling the "Expand All" command will <b>only</b> expand the nodes that were already lazily loaded (the other ones will remain as
      collapsed). Aggregators will also be lazily calculated and aggregate only the data that it currently has loaded.
    </li>
    <li>In the example below, clicking on the last <b>"Chapter X"</b> will demo an API call failure</li>
  </ul>
</div>

<div class="row">
  <div class="col-md-7">
    <button class="btn btn-outline-secondary btn-xs btn-icon" data-test="clear-filters-btn" click.trigger="clearFilters()">
      <span class="mdi mdi-close"></span>
      <span>Clear Filters</span>
    </button>
    <button click.trigger="collapseAll()" data-test="collapse-all-btn" class="btn btn-outline-secondary btn-xs btn-icon">
      <span class="mdi mdi-arrow-collapse"></span>
      <span>Collapse All</span>
    </button>
    <button click.trigger="expandAll()" data-test="expand-all-btn" class="btn btn-outline-secondary btn-xs btn-icon">
      <span class="mdi mdi-arrow-expand"></span>
      <span>Expand All</span>
    </button>
    <span class="ml-2">
      <label for="pinned-rows">Simulated Server Delay (ms): </label>
      <input type="number" id="server-delay" data-test="server-delay" style="width: 60px" value.bind="serverApiDelay" />
    </span>
  </div>

  <div class="col-md-5">
    <div class="input-group input-group-sm">
      <input
        type="text"
        class="form-control search-string"
        placeholder="search value"
        autocomplete="off"
        data-test="search-string"
        value.bind="searchString"
      />
      <button
        class="btn btn-sm btn-outline-secondary d-flex align-items-center"
        data-test="clear-search-string"
        click.trigger="clearSearch()"
      >
        <span class="icon mdi mdi-close-thick"></span>
      </button>
    </div>
  </div>
</div>

<br />

<div id="grid-container" class="col-sm-12">
  <aurelia-slickgrid
    grid-id="grid46"
    columns.bind="columnDefinitions"
    options.bind="gridOptions"
    dataset-hierarchical.bind="datasetHierarchical"
    instances.bind="aureliaGrid"
  >
  </aurelia-slickgrid>
</div>
`,_f=[],yf={};let Ln;function ZI(t){Ln||(Ln=E.define({name:vf,template:Kr,dependencies:_f,bindables:yf})),t.register(Ln)}const JI=Object.freeze(Object.defineProperty({__proto__:null,bindables:yf,default:Kr,dependencies:_f,name:vf,register:ZI,template:Kr},Symbol.toStringTag,{value:"Module"}));var XI=Object.create,ws=Object.defineProperty,eG=Object.getOwnPropertyDescriptor,tG=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),yi=t=>{throw TypeError(t)},Sf=(t,e,i)=>e in t?ws(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Ad=(t,e)=>ws(t,"name",{value:e,configurable:!0}),iG=t=>[,,,XI(null)],Cf=["class","method","getter","setter","accessor","field","value","get","set"],Zt=t=>t!==void 0&&typeof t!="function"?yi("Function expected"):t,aG=(t,e,i,n,a)=>({kind:Cf[t],name:e,metadata:n,addInitializer:r=>i._?yi("Already initialized"):a.push(Zt(r||null))}),nG=(t,e)=>Sf(e,tG("metadata"),t[3]),Qr=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)e&1?r[a].call(i):n=r[a].call(i,n);return n},wf=(t,e,i,n,a,r)=>{var l,d,u,s,m,o=e&7,g=!!(e&8),c=!!(e&16),p=o>3?t.length+1:o?g?1:2:0,_=Cf[o+5],w=o>3&&(t[p-1]=[]),x=t[p]||(t[p]=[]),b=o&&(!c&&!g&&(a=a.prototype),o<5&&(o>3||!c)&&eG(o<4?a:{get[i](){return Rd(this,r)},set[i](h){return Ld(this,r,h)}},i));o?c&&o<4&&Ad(r,(o>2?"set ":o>1?"get ":"")+i):Ad(a,i);for(var y=n.length-1;y>=0;y--)s=aG(o,i,u={},t[3],x),o&&(s.static=g,s.private=c,m=s.access={has:c?h=>rG(a,h):h=>i in h},o^3&&(m.get=c?h=>(o^1?Rd:oG)(h,a,o^4?r:b.get):h=>h[i]),o>2&&(m.set=c?(h,S)=>Ld(h,a,S,o^4?r:b.set):(h,S)=>h[i]=S)),d=(0,n[y])(o?o<4?c?r:b[_]:o>4?void 0:{get:b.get,set:b.set}:a,s),u._=1,o^4||d===void 0?Zt(d)&&(o>4?w.unshift(d):o?c?r=d:b[_]=d:a=d):typeof d!="object"||d===null?yi("Object expected"):(Zt(l=d.get)&&(b.get=l),Zt(l=d.set)&&(b.set=l),Zt(l=d.init)&&w.unshift(l));return o||nG(t,a),b&&ws(a,i,b),c?o^4?r:b:a},K=(t,e,i)=>Sf(t,typeof e!="symbol"?e+"":e,i),xs=(t,e,i)=>e.has(t)||yi("Cannot "+i),rG=(t,e)=>Object(e)!==e?yi('Cannot use the "in" operator on this value'):t.has(e),Rd=(t,e,i)=>(xs(t,e,"read from private field"),i?i.call(t):e.get(t)),Ld=(t,e,i,n)=>(xs(t,e,"write to private field"),n?n.call(t,i):e.set(t,i),i),oG=(t,e,i)=>(xs(t,e,"access private method"),i),xf,Tf,wt;Tf=[T(JI)],xf=[D()];class ni{constructor(){K(this,"aureliaGrid"),K(this,"gridOptions"),K(this,"columnDefinitions",[]),K(this,"datasetHierarchical",[]),K(this,"hideSubTitle",!1),K(this,"isExcludingChildWhenFiltering",!1),K(this,"isAutoApproveParentItemWhenTreeColumnIsValid",!0),K(this,"isAutoRecalcTotalsOnFilterChange",!1),K(this,"isRemoveLastInsertedPopSongDisabled",!0),K(this,"lastInsertedPopSongId"),K(this,"serverApiDelay",1e3),K(this,"searchString",Qr(wt,8,this,"")),Qr(wt,11,this),this.defineGrid()}attached(){this.datasetHierarchical=this.mockDataset()}defineGrid(){this.columnDefinitions=[{id:"chapterName",name:"Chapter",field:"chapterName",width:150,formatter:f.tree,filterable:!0,sortable:!0},{id:"label",name:"Label",field:"label",minWidth:90,formatter:this.coloredTextFormatter,filterable:!0,sortable:!0},{id:"description",name:"Description",field:"description",minWidth:90,formatter:this.coloredTextFormatter,filterable:!0,sortable:!0},{id:"pageNumber",name:"Page Number",field:"pageNumber",minWidth:90,type:"number",exportWithFormatter:!0,excelExportOptions:{autoDetectCellFormat:!1},filterable:!0,filter:{model:v.compoundInputNumber}},{id:"dateModified",name:"Last Date Modified",field:"dateModified",formatter:f.date,params:{dateFormat:"MMM DD, YYYY, h:mm:ss a"},type:"dateUtc",outputType:"dateTimeIso",minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:v.compoundDate}}],this.gridOptions={autoResize:{autoHeight:!1,container:"#demo-container",rightPadding:10},enableAutoSizeColumns:!0,enableAutoResize:!0,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!0,sanitizeDataExport:!0},enableTextExport:!0,textExportOptions:{exportWithFormatter:!0,sanitizeDataExport:!0},enableCheckboxSelector:!0,enableSelection:!0,multiSelect:!1,checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0,onRowToggleStart:(e,i)=>console.log("onBeforeRowToggle",i),onSelectAllToggleStart:()=>this.aureliaGrid.treeDataService.toggleTreeDataCollapse(!1,!1)},externalResources:[new G,new $a],enableFiltering:!0,enableTreeData:!0,multiColumnSort:!1,rowHeight:35,showCustomFooter:!0,treeDataOptions:{columnId:"chapterName",childrenPropName:"chapters",initiallyCollapsed:!0,lazy:!0,onLazyLoad:(e,i,n)=>{setTimeout(()=>{e.label==="lazy fetch will FAIL"?(n(),Xn("Lazy fetching failed","danger")):i(this.getChaptersByParentNode(e))},this.serverApiDelay)}}}}clearSearch(){this.searchString=""}searchStringChanged(){this.updateFilter()}updateFilter(){this.aureliaGrid.filterService.updateFilters([{columnId:"label",searchTerms:[this.searchString]}],!0,!1,!0)}clearFilters(){this.clearSearch(),this.aureliaGrid.filterService.clearFilters()}collapseAll(){this.aureliaGrid.treeDataService.toggleTreeDataCollapse(!0)}expandAll(){this.aureliaGrid.treeDataService.toggleTreeDataCollapse(!1)}mockDataset(){return[{id:this.generateGUID(),chapterName:"Chapter 1",label:"The intro",chapters:[],description:"it's all about the introduction",pageNumber:2,dateModified:"2024-03-05T12:44:00.123Z"},{id:this.generateGUID(),chapterName:"Chapter 2",label:"Where it all started",chapters:[],description:"hometown to the big city",pageNumber:50,dateModified:"2024-04-23T08:33:00.123Z"},{id:this.generateGUID(),chapterName:"Chapter 3",label:"Here I come...",chapters:[],description:"here comes a wall",pageNumber:78,dateModified:"2024-05-05T12:22:00.123Z"},{id:this.generateGUID(),chapterName:"Chapter 4",label:"Are we there yet?",chapters:[],description:"soon...",pageNumber:120,dateModified:"2024-04-29T10:24:00.123Z"},{id:this.generateGUID(),chapterName:"Chapter 5",label:"The finale",chapters:[],description:"the end is near!",pageNumber:155,dateModified:"2024-06-21T07:22:00.123Z"},{id:this.generateGUID(),chapterName:"Chapter 6",label:"End",pageNumber:156,dateModified:"2024-06-22T07:22:00.123Z"},{id:this.generateGUID(),chapterName:"Chapter X",label:"lazy fetch will FAIL",chapters:[],description:"...demo an API call error!!!",pageNumber:999,dateModified:"2024-09-28T00:22:00.123Z",textColor:"color-danger"}]}getChaptersByParentNode(e){const i=this.prefixDots(e.chapterName.length-6);return[{id:this.generateGUID(),chapterName:`${e.chapterName}.1`,label:`${i}${e.chapterName?.toLowerCase()}.1`,chapters:[],pageNumber:e.pageNumber+1},{id:this.generateGUID(),chapterName:`${e.chapterName}.2`,label:`${i}${e.chapterName?.toLowerCase()}.2`,chapters:[],pageNumber:e.pageNumber+2},{id:this.generateGUID(),chapterName:`${e.chapterName}.3`,label:`${i}${e.chapterName?.toLowerCase()}.3`,pageNumber:e.pageNumber+3}]}coloredTextFormatter(e,i,n,a,r){if(r.textColor){const l=document.createElement("span");return l.className=r.textColor,l.textContent=n,l}return n}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}generateGUID(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const i=Math.random()*16|0;return(e==="x"?i:i&3|8).toString(16)})}prefixDots(e){let i="";for(let n=0;n<e;n++)i+=".";return i}}wt=iG();wf(wt,5,"searchString",xf,ni);ni=wf(wt,0,"Example46",Tf,ni);Qr(wt,1,ni);const lG=Object.freeze(Object.defineProperty({__proto__:null,get Example46(){return ni}},Symbol.toStringTag,{value:"Module"})),Ef="example47",Zr=`<h2>
  Example 47: Row Detail View + Grouping
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example47.ts"
    >
      <span class="mdi mdi-link-variant"></span> code
    </a>
  </span>
  <button class="ms-2 btn btn-outline-secondary btn-sm btn-icon" type="button" data-test="toggle-subtitle" click.trigger="toggleSubTitle()">
    <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
  </button>
  <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="toggleDarkMode()" data-test="toggle-dark-mode">
    <span class="mdi mdi-theme-light-dark"></span>
    <span>Toggle Dark Mode</span>
  </button>
</h2>

<div class="subtitle">
  Provide ability for Row Detail to work with Grouping, see (<a
    href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/row-detail"
    target="_blank"
    >Wiki docs</a
  >)
</div>

<div class="row">
  <div class="col-sm-12 d-flex gap-4px">
    <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="closeAllRowDetail()" data-test="collapse-all-rowdetail-btn">
      Close all Row Details
    </button>
    <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="clear-grouping-btn" click.trigger="clearGrouping()">
      <i class="mdi mdi-close"></i> Clear grouping
    </button>
    <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="collapse-all-groups-btn" click.trigger="collapseAllGroups()">
      <i class="mdi mdi-arrow-collapse"></i> Collapse all groups
    </button>
    <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="expand-all-groups-btn" click.trigger="expandAllGroups()">
      <i class="mdi mdi-arrow-expand"></i> Expand all groups
    </button>

    <label for="detailViewRowCount">Detail View Rows Shown: </label>
    <input id="detailViewRowCount" type="number" value.bind="detailViewRowCount" style="height: 26px; width: 40px" />
    <button
      class="btn btn-outline-secondary btn-sm btn-icon"
      style="height: 26px"
      click.trigger="changeDetailViewRowCount()"
      data-test="set-count-btn"
    >
      Set
    </button>
    <label for="serverdelay" class="ms-2">Server Delay: </label>
    <input
      id="serverdelay"
      value.bind="serverWaitDelay"
      type="number"
      data-test="server-delay"
      style="height: 26px; width: 55px"
      title="input a fake timer delay to simulate slow server response"
    />
  </div>

  <div class="row">
    <div class="col-sm-12">
      <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="group-duration-sort-value-btn" click.trigger="groupByDuration()">
        Group by Duration
      </button>
      <button
        class="btn btn-outline-secondary btn-sm btn-icon"
        data-test="group-duration-effort-btn"
        click.trigger="groupByDurationEffortDriven()"
      >
        Group by Duration then Effort-Driven
      </button>
    </div>
  </div>

  <hr />

  <aurelia-slickgrid
    grid-id="grid47"
    columns.bind="columnDefinitions"
    options.bind="gridOptions"
    dataset.bind="dataset"
    extensions.bind="extensions"
    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
  >
  </aurelia-slickgrid>
</div>
`,$f=[],kf={};let zn;function sG(t){zn||(zn=E.define({name:Ef,template:Zr,dependencies:$f,bindables:kf})),t.register(zn)}const dG=Object.freeze(Object.defineProperty({__proto__:null,bindables:kf,default:Zr,dependencies:$f,name:Ef,register:sG,template:Zr},Symbol.toStringTag,{value:"Module"}));var cG=Object.create,Ts=Object.defineProperty,uG=Object.getOwnPropertyDescriptor,mG=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Si=t=>{throw TypeError(t)},Df=(t,e,i)=>e in t?Ts(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,zd=(t,e)=>Ts(t,"name",{value:e,configurable:!0}),pG=t=>[,,,cG(null)],Of=["class","method","getter","setter","accessor","field","value","get","set"],Jt=t=>t!==void 0&&typeof t!="function"?Si("Function expected"):t,hG=(t,e,i,n,a)=>({kind:Of[t],name:e,metadata:n,addInitializer:r=>i._?Si("Already initialized"):a.push(Jt(r||null))}),gG=(t,e)=>Df(e,mG("metadata"),t[3]),Xt=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)e&1?r[a].call(i):n=r[a].call(i,n);return n},Es=(t,e,i,n,a,r)=>{var l,d,u,s,m,o=e&7,g=!!(e&8),c=!!(e&16),p=o>3?t.length+1:o?g?1:2:0,_=Of[o+5],w=o>3&&(t[p-1]=[]),x=t[p]||(t[p]=[]),b=o&&(!c&&!g&&(a=a.prototype),o<5&&(o>3||!c)&&uG(o<4?a:{get[i](){return Nd(this,r)},set[i](h){return Wd(this,r,h)}},i));o?c&&o<4&&zd(r,(o>2?"set ":o>1?"get ":"")+i):zd(a,i);for(var y=n.length-1;y>=0;y--)s=hG(o,i,u={},t[3],x),o&&(s.static=g,s.private=c,m=s.access={has:c?h=>bG(a,h):h=>i in h},o^3&&(m.get=c?h=>(o^1?Nd:fG)(h,a,o^4?r:b.get):h=>h[i]),o>2&&(m.set=c?(h,S)=>Wd(h,a,S,o^4?r:b.set):(h,S)=>h[i]=S)),d=(0,n[y])(o?o<4?c?r:b[_]:o>4?void 0:{get:b.get,set:b.set}:a,s),u._=1,o^4||d===void 0?Jt(d)&&(o>4?w.unshift(d):o?c?r=d:b[_]=d:a=d):typeof d!="object"||d===null?Si("Object expected"):(Jt(l=d.get)&&(b.get=l),Jt(l=d.set)&&(b.set=l),Jt(l=d.init)&&w.unshift(l));return o||gG(t,a),b&&Ts(a,i,b),c?o^4?r:b:a},ie=(t,e,i)=>Df(t,typeof e!="symbol"?e+"":e,i),$s=(t,e,i)=>e.has(t)||Si("Cannot "+i),bG=(t,e)=>Object(e)!==e?Si('Cannot use the "in" operator on this value'):t.has(e),Nd=(t,e,i)=>($s(t,e,"read from private field"),i?i.call(t):e.get(t)),Wd=(t,e,i,n)=>($s(t,e,"write to private field"),n?n.call(t,i):e.set(t,i),i),fG=(t,e,i)=>($s(t,e,"access private method"),i),Mf,Pf,If,Fe;const vG=250,_G=1200;If=[T(dG)],Pf=[D],Mf=[D];class xt{constructor(){ie(this,"_darkMode",!1),ie(this,"detailViewRowCount",Xt(Fe,8,this,9)),Xt(Fe,11,this),ie(this,"serverWaitDelay",Xt(Fe,12,this,vG)),Xt(Fe,15,this),ie(this,"aureliaGrid"),ie(this,"dataviewObj"),ie(this,"gridObj"),ie(this,"gridOptions"),ie(this,"columnDefinitions",[]),ie(this,"dataset",[]),ie(this,"hideSubTitle",!1),ie(this,"message",""),this.defineGrid()}get rowDetailInstance(){return this.aureliaGrid?.extensionService.getExtensionInstanceByName(Mv.rowDetailView)}attached(){this.getData()}detaching(){document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light"}aureliaGridReady(e){this.aureliaGrid=e,this.dataviewObj=e.dataView,this.gridObj=e.slickGrid,this.groupByDuration()}defineGrid(){this.columnDefinitions=[{id:"title",name:"Title",field:"title",sortable:!0,width:70,filterable:!0,editor:{model:C.text}},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,type:"number",minWidth:90,filterable:!0},{id:"%",name:"% Complete",field:"percentComplete",minWidth:200,width:250,resizable:!1,filterable:!0,sortable:!0,type:"number",formatter:f.percentCompleteBar,groupTotalsFormatter:B.avgTotalsPercentage,params:{groupFormatterPrefix:"<i>Avg</i>: "}},{id:"start",name:"Start",field:"start",formatter:f.dateIso,sortable:!0,type:"date",minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:v.compoundDate}},{id:"finish",name:"Finish",field:"finish",formatter:f.dateIso,sortable:!0,type:"date",minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:v.compoundDate}},{id:"cost",name:"Cost",field:"cost",minWidth:70,width:80,sortable:!0,filterable:!0,filter:{model:v.compoundInputNumber},type:"number",formatter:f.dollar,groupTotalsFormatter:B.sumTotalsDollarBold},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",minWidth:100,formatter:f.checkmarkMaterial,type:"boolean",filterable:!0,sortable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:v.singleSelect}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:!0,enableGrouping:!0,enableRowDetailView:!0,rowTopOffsetRenderType:"top",darkMode:this._darkMode,externalResources:[oo],rowDetailView:{process:e=>this.simulateServerAsyncCall(e),loadOnce:!0,singleRowExpand:!1,panelRows:this.detailViewRowCount,preloadViewModel:mt,viewModel:ve,parentRef:this},selectionOptions:{selectActiveRow:!0}}}getData(){const e=[];for(let i=0;i<_G;i++){const n=2e3+Math.floor(Math.random()*10),a=Math.floor(Math.random()*11),r=Math.floor(Math.random()*29),l=Math.round(Math.random()*100),d=Math.round(Math.random()*1e4)/100;e[i]={id:i,title:"Task "+i,duration:Math.floor(Math.random()*100),percentComplete:l,start:new Date(n,a,r),finish:new Date(n,a+1,r),cost:i%3?d:-d,effortDriven:i%5===0}}this.dataset=e}changeDetailViewRowCount(){const e=this.rowDetailInstance.getOptions();e&&e.panelRows&&(e.panelRows=this.detailViewRowCount,this.rowDetailInstance.setOptions(e))}closeAllRowDetail(){this.rowDetailInstance.collapseAll()}clearGrouping(){this.dataviewObj.setGrouping([])}collapseAllGroups(){this.dataviewObj.collapseAllGroups()}expandAllGroups(){this.dataviewObj.expandAllGroups()}groupByDuration(){this.aureliaGrid.filterService.setSortColumnIcons([{columnId:"duration",sortAsc:!0}]),this.dataviewObj.setGrouping({getter:"duration",formatter:e=>`Duration: ${e.value} <span style="color:green">(${e.count} items)</span>`,comparer:(e,i)=>re.numeric(e.value,i.value,ri.asc),aggregators:[new k.Avg("percentComplete"),new k.Sum("cost")],aggregateCollapsed:!1,lazyTotalsCalculation:!0}),this.gridObj.invalidate()}groupByDurationEffortDriven(){const e=[{columnId:"duration",sortAsc:!0},{columnId:"effortDriven",sortAsc:!0}];this.aureliaGrid.filterService.setSortColumnIcons(e),this.dataviewObj.setGrouping([{getter:"duration",formatter:i=>`Duration: ${i.value} <span style="color:green">(${i.count} items)</span>`,aggregators:[new k.Sum("duration"),new k.Sum("cost")],aggregateCollapsed:!0,lazyTotalsCalculation:!0},{getter:"effortDriven",formatter:i=>`Effort-Driven: ${i.value?"True":"False"} <span style="color:green">(${i.count} items)</span>`,aggregators:[new k.Avg("percentComplete"),new k.Sum("cost")],collapsed:!0,lazyTotalsCalculation:!0}]),this.gridObj.invalidate()}simulateServerAsyncCall(e){const i=["John Doe","Jane Doe","Chuck Norris","Bumblebee","Jackie Chan","Elvis Presley","Bob Marley","Mohammed Ali","Bruce Lee","Rocky Balboa"];return new Promise(n=>{setTimeout(()=>{const a=e;a.assignee=i[this.randomNumber(0,9)]||"",a.reporter=i[this.randomNumber(0,9)]||"",n(a)},this.serverWaitDelay)})}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.aureliaGrid.slickGrid?.setOptions({darkMode:this._darkMode}),this.closeAllRowDetail()}toggleBodyBackground(){this._darkMode?(document.querySelector(".panel-wm-content").classList.add("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="dark"):(document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light")}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}randomNumber(e,i){return Math.floor(Math.random()*(i-e+1)+e)}}Fe=pG();Es(Fe,5,"detailViewRowCount",Pf,xt);Es(Fe,5,"serverWaitDelay",Mf,xt);xt=Es(Fe,0,"Example47",If,xt);Xt(Fe,1,xt);const yG=Object.freeze(Object.defineProperty({__proto__:null,get Example47(){return xt}},Symbol.toStringTag,{value:"Module"})),Gf="example48",Jr=`<h2>
  Example 48: Hybrid Selection Model
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example48.ts"
    >
      <span class="mdi mdi-link-variant"></span> code
    </a>
  </span>
  <button class="ms-2 btn btn-outline-secondary btn-sm btn-icon" type="button" data-test="toggle-subtitle" click.trigger="toggleSubTitle()">
    <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
  </button>
</h2>

<div class="subtitle">
  <code>SlickHybridSelectionModel</code> This Selection Model is an hybrid approach that uses a combination of the row or cell selections
  depending on certain conditions.
  <ul>
    <li>
      1. clicking on the first column (<code>id</code>) will use <code>RowSelectionModel</code> because of our configuration of
      <code>rowSelectColumnIds: ['id']</code> as the columns that will trigger row selection.
    </li>
    <li>2. clicking on the any other columns will use <code>CellSelectionModel</code> by default</li>
  </ul>
</div>

<h3>
  Grid 1
  <small class="subtitle ms-3 text-italic">
    <label>Range Selection</label>
    <span id="selectionRange1"></span>
  </small>
</h3>

<div class="grid-container1">
  <aurelia-slickgrid
    grid-id="grid48-1"
    columns.bind="columnDefinitions1"
    options.bind="gridOptions1"
    dataset.bind="dataset1"
    on-aurelia-grid-created.trigger="aureliaGridReady1($event.detail)"
  >
  </aurelia-slickgrid>
</div>

<hr />

<h3>
  Grid 2
  <small class="subtitle ms-3 text-italic">
    <label>Range Selection</label>
    <span id="selectionRange2"></span>
  </small>
</h3>

<aurelia-slickgrid
  grid-id="grid48-2"
  columns.bind="columnDefinitions2"
  options.bind="gridOptions2"
  dataset.bind="dataset2"
  on-aurelia-grid-created.trigger="aureliaGridReady2($event.detail)"
>
</aurelia-slickgrid>
`,Ff=[],Af={};let Nn;function SG(t){Nn||(Nn=E.define({name:Gf,template:Jr,dependencies:Ff,bindables:Af})),t.register(Nn)}const CG=Object.freeze(Object.defineProperty({__proto__:null,bindables:Af,default:Jr,dependencies:Ff,name:Gf,register:SG,template:Jr},Symbol.toStringTag,{value:"Module"}));var wG=Object.create,ks=Object.defineProperty,xG=Object.getOwnPropertyDescriptor,TG=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Rf=t=>{throw TypeError(t)},Lf=(t,e,i)=>e in t?ks(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,EG=(t,e)=>ks(t,"name",{value:e,configurable:!0}),$G=t=>[,,,wG(null)],kG=["class","method","getter","setter","accessor","field","value","get","set"],zf=t=>t!==void 0&&typeof t!="function"?Rf("Function expected"):t,DG=(t,e,i,n,a)=>({kind:kG[t],name:e,metadata:n,addInitializer:r=>i._?Rf("Already initialized"):a.push(zf(r||null))}),OG=(t,e)=>Lf(e,TG("metadata"),t[3]),MG=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},PG=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&xG(a,i));EG(a,i);for(var p=n.length-1;p>=0;p--)u=DG(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,zf(l)&&(a=l);return OG(t,a),c&&ks(a,i,c),m?s^4?r:c:a},he=(t,e,i)=>Lf(t,typeof e!="symbol"?e+"":e,i),Nf,Ds;const Bd=995;Nf=[T(CG)];class Ca{constructor(){he(this,"_eventHandler"),he(this,"aureliaGrid1"),he(this,"aureliaGrid2"),he(this,"columnDefinitions1",[]),he(this,"columnDefinitions2",[]),he(this,"gridOptions1"),he(this,"gridOptions2"),he(this,"dataset1"),he(this,"dataset2"),he(this,"hideSubTitle",!1),this._eventHandler=new Vd,this.defineGrids()}attached(){this.dataset1=this.mockData(Bd),this.dataset2=this.mockData(Bd)}aureliaGridReady1(e){this.aureliaGrid1=e;const i=e.slickGrid.getSelectionModel();this._eventHandler.subscribe(i.onSelectedRangesChanged,(n,a)=>{const r=document.querySelector("#selectionRange1");if(r){r.textContent="";for(const l of a)r.textContent+=JSON.stringify(l)}})}aureliaGridReady2(e){this.aureliaGrid2=e;const i=e.slickGrid.getSelectionModel();this._eventHandler.subscribe(i.onSelectedRangesChanged,(n,a)=>{const r=document.querySelector("#selectionRange2");if(r){r.textContent="";for(const l of a)r.textContent+=JSON.stringify(l)}})}defineGrids(){this.columnDefinitions1=[{id:"id",name:"#",field:"id",width:32,maxWidth:40,excludeFromHeaderMenu:!0},{id:"title",name:"Title",field:"title",width:90,cssClass:"cell-title"},{id:"complete",name:"% Complete",field:"percentComplete",sortable:!0,width:90},{id:"start",name:"Start",field:"start",type:"date",sortable:!0,formatter:f.dateUs},{id:"finish",name:"Finish",field:"finish",type:"date",sortable:!0,formatter:f.dateUs},{id:"priority",name:"Priority",field:"priority",width:80,resizable:!1,sortable:!0,type:"number",sortComparer:(e,i,n)=>(n??0)*(e===i?0:e>i?1:-1),formatter:(e,i,n)=>{if(!n)return"";const a=+(n>=3?3:n);return a===3?"High":a===2?"Medium":"Low"}},{id:"effortDriven",name:"Effort Driven",field:"effortDriven",cssClass:"text-center",width:95,maxWidth:120,type:"boolean",sortable:!0,exportCustomFormatter:(e,i,n)=>n?"Yes":"No",formatter:f.checkmarkMaterial}],this.columnDefinitions2=[...this.columnDefinitions1],this.gridOptions1={autoResize:{container:".demo-container"},gridHeight:250,gridWidth:800,enableCellNavigation:!0,autoEdit:!0,editable:!0,headerRowHeight:35,rowHeight:35,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!0},externalResources:[new G],enableSelection:!0,selectionOptions:{rowSelectColumnIds:["id"],selectionType:"mixed"},enableExcelCopyBuffer:!0,excelCopyBufferOptions:{copyActiveEditorCell:!0,removeDoubleQuotesOnPaste:!0,replaceNewlinesWith:" "}},this.gridOptions2={...this.gridOptions1,enableCheckboxSelector:!0,enableSelection:!0,selectionOptions:{selectActiveRow:!1,selectionType:"row",dragToSelect:!0}}}mockData(e){const i=[];for(let n=0;n<e;n++){const a=2e3+Math.floor(Math.random()*10),r=Math.floor(Math.random()*11),l=Math.floor(Math.random()*29),d=a+Math.floor(Math.random()*10),u=new Date(d,r+1,l);i[n]={id:n,title:"Task "+n,duration:Math.floor(Math.random()*25)+" days",percentComplete:Math.floor(Math.random()*100),start:new Date(a,r,l,l),finish:u,priority:n%3?2:n%5?3:1,effortDriven:n%4===0}}return i}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden")}}Ds=$G();Ca=PG(Ds,0,"Example48",Nf,Ca);MG(Ds,1,Ca);const IG=Object.freeze(Object.defineProperty({__proto__:null,get Example48(){return Ca}},Symbol.toStringTag,{value:"Module"})),Wf="example49",Xr=`<div class="demo49">
  <h2>
    <span>Example 49: Spreadsheet Drag-Fill</span>
    <span class="float-end">
      <a
        style="font-size: 18px"
        target="_blank"
        href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example49.ts"
      >
        <span class="mdi mdi-link mdi-v-align-sub"></span> code
      </a>
    </span>
    <button
      class="ms-2 btn btn-outline-secondary btn-sm btn-icon"
      type="button"
      data-test="toggle-subtitle"
      click.trigger="toggleSubTitle()"
    >
      <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
    </button>
    <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="toggleDarkMode()" data-test="toggle-dark-mode">
      <span class="mdi mdi-theme-light-dark"></span>
      <span>Toggle Dark Mode</span>
    </button>
  </h2>

  <div class="subtitle">
    Spreadsheet with drag-fill, hybrid selection model. Type a few values in the grid and then select those cells and use the bottom right
    drag handle spread the selection and auto-fill the values to other cells. Use <code>onDragReplaceCells</code> event to customize the
    drag-fill behavior. Use <code>&#123; enableSelection: true, selectionOptions: &#123; selectionType: 'mixed' &#125;&#125;</code>
    grid option to enable the new Hybrid Selection Model.
  </div>

  <div id="grid-container" class="col-sm-12">
    <aurelia-slickgrid
      grid-id="grid49"
      columns.bind="columnDefinitions"
      options.bind="gridOptions"
      dataset.bind="dataset"
      on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
      on-drag-replace-cells.trigger="copyDraggedCellRange($event.detail.args)"
    >
    </aurelia-slickgrid>
  </div>
</div>
`,Bf=[],jf={};let Wn;function GG(t){Wn||(Wn=E.define({name:Wf,template:Xr,dependencies:Bf,bindables:jf})),t.register(Wn)}const FG=Object.freeze(Object.defineProperty({__proto__:null,bindables:jf,default:Xr,dependencies:Bf,name:Wf,register:GG,template:Xr},Symbol.toStringTag,{value:"Module"}));var AG=Object.create,Os=Object.defineProperty,RG=Object.getOwnPropertyDescriptor,LG=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Vf=t=>{throw TypeError(t)},Hf=(t,e,i)=>e in t?Os(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,zG=(t,e)=>Os(t,"name",{value:e,configurable:!0}),NG=t=>[,,,AG(null)],WG=["class","method","getter","setter","accessor","field","value","get","set"],Uf=t=>t!==void 0&&typeof t!="function"?Vf("Function expected"):t,BG=(t,e,i,n,a)=>({kind:WG[t],name:e,metadata:n,addInitializer:r=>i._?Vf("Already initialized"):a.push(Uf(r||null))}),jG=(t,e)=>Hf(e,LG("metadata"),t[3]),VG=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},HG=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&RG(a,i));zG(a,i);for(var p=n.length-1;p>=0;p--)u=BG(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,Uf(l)&&(a=l);return jG(t,a),c&&Os(a,i,c),m?s^4?r:c:a},st=(t,e,i)=>Hf(t,typeof e!="symbol"?e+"":e,i),qf,Ms;const jd=100;qf=[T(FG)];class wa{constructor(){st(this,"_darkMode",!1),st(this,"aureliaGrid"),st(this,"columnDefinitions",[]),st(this,"gridOptions"),st(this,"dataset"),st(this,"hideSubTitle",!1),this.defineGrid()}attached(){this.dataset=this.getData(jd)}detaching(){document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light"}aureliaGridReady(e){this.aureliaGrid=e}defineGrid(){this.columnDefinitions=[{id:"selector",name:"",field:"num",width:30}];for(let e=0;e<jd;e++)this.columnDefinitions.push({id:e,name:e<26?String.fromCharCode(65+e%26):String.fromCharCode(65+Math.floor(e/26)-1)+String.fromCharCode(65+e%26),field:String(e),minWidth:60,width:60,editor:{model:C.text}});this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableCellNavigation:!0,autoEdit:!0,autoCommitEdit:!0,darkMode:this._darkMode,editable:!0,headerRowHeight:35,editorNavigateOnArrows:!0,enableSelection:!0,selectionOptions:{rowSelectColumnIds:["selector"],selectActiveRow:!0,selectionType:"mixed"},enableExcelCopyBuffer:!0,excelCopyBufferOptions:{copyActiveEditorCell:!0,removeDoubleQuotesOnPaste:!0,replaceNewlinesWith:" "}}}copyDraggedCellRange(e){const i=it.verticalTargetRange(e.prevSelectedRange,e.selectedRange),n=it.horizontalTargetRange(e.prevSelectedRange,e.selectedRange),a=it.cornerTargetRange(e.prevSelectedRange,e.selectedRange);i&&it.copyCellsToTargetRange(e.prevSelectedRange,i,e.grid),n&&it.copyCellsToTargetRange(e.prevSelectedRange,n,e.grid),a&&it.copyCellsToTargetRange(e.prevSelectedRange,a,e.grid)}getData(e){const i=[];for(let n=0;n<e;n++){const a=i[n]={};a.id=n,a.num=n}return i}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.aureliaGrid.slickGrid?.setOptions({darkMode:this._darkMode})}toggleBodyBackground(){this._darkMode?(document.querySelector(".panel-wm-content").classList.add("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="dark"):(document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light")}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}Ms=NG();wa=HG(Ms,0,"Example49",qf,wa);VG(Ms,1,wa);const UG=Object.freeze(Object.defineProperty({__proto__:null,get Example49(){return wa}},Symbol.toStringTag,{value:"Module"})),Yf="example50",eo=`<h2>
  Example 50: Master/Detail Grids
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example50.ts"
    >
      <span class="mdi mdi-link-variant"></span> code
    </a>
  </span>
  <button class="ms-2 btn btn-outline-secondary btn-sm btn-icon" type="button" data-test="toggle-subtitle" click.trigger="toggleSubTitle()">
    <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
  </button>
</h2>

<h5>Master Grid</h5>
<div class="grid-container1">
  <aurelia-slickgrid
    grid-id="grid50-1"
    columns.bind="columnDefinitions1"
    options.bind="gridOptions1"
    dataset.bind="dataset1"
    on-aurelia-grid-created.trigger="aureliaGridReady1($event.detail)"
    on-click.trigger="handleOnCellClicked($event.detail.args)"
  >
  </aurelia-slickgrid>
</div>

<hr />

<h5>
  <span>Detail Grid - Orders for:</span>
  <span class="fst-italic text-secondary customer-detail">\${ selectedName }</span>
</h5>
<aurelia-slickgrid grid-id="grid50-2" columns.bind="columnDefinitions2" options.bind="gridOptions2" dataset.bind="dataset2">
</aurelia-slickgrid>
`,Kf=[],Qf={};let Bn;function qG(t){Bn||(Bn=E.define({name:Yf,template:eo,dependencies:Kf,bindables:Qf})),t.register(Bn)}const YG=Object.freeze(Object.defineProperty({__proto__:null,bindables:Qf,default:eo,dependencies:Kf,name:Yf,register:qG,template:eo},Symbol.toStringTag,{value:"Module"}));var KG=Object.create,Ps=Object.defineProperty,QG=Object.getOwnPropertyDescriptor,ZG=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Zf=t=>{throw TypeError(t)},Jf=(t,e,i)=>e in t?Ps(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,JG=(t,e)=>Ps(t,"name",{value:e,configurable:!0}),XG=t=>[,,,KG(null)],eF=["class","method","getter","setter","accessor","field","value","get","set"],Xf=t=>t!==void 0&&typeof t!="function"?Zf("Function expected"):t,tF=(t,e,i,n,a)=>({kind:eF[t],name:e,metadata:n,addInitializer:r=>i._?Zf("Already initialized"):a.push(Xf(r||null))}),iF=(t,e)=>Jf(e,ZG("metadata"),t[3]),aF=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},nF=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&QG(a,i));JG(a,i);for(var p=n.length-1;p>=0;p--)u=tF(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,Xf(l)&&(a=l);return iF(t,a),c&&Ps(a,i,c),m?s^4?r:c:a},Pe=(t,e,i)=>Jf(t,typeof e!="symbol"?e+"":e,i),ev,Is;ev=[T(YG)];class xa{constructor(){Pe(this,"aureliaGrid1"),Pe(this,"gridOptions1"),Pe(this,"gridOptions2"),Pe(this,"columnDefinitions1",[]),Pe(this,"columnDefinitions2",[]),Pe(this,"dataset1",[]),Pe(this,"dataset2",[]),Pe(this,"hideSubTitle",!1),Pe(this,"selectedName",""),this.defineGrids()}attached(){this.dataset1=this.mockMasterData(),this.aureliaGrid1.slickGrid?.setSelectedRows([0]),this.selectedName=`${this.dataset1[0].name} - ${this.dataset1[0].company}`,this.dataset2=this.mockDetailData(this.dataset1[0])}aureliaGridReady1(e){this.aureliaGrid1=e}defineGrids(){this.columnDefinitions1=[{id:"name",name:"Customer Name",field:"name",sortable:!0,minWidth:100,filterable:!0},{id:"company",name:"Company Name",field:"company",minWidth:100,sortable:!0},{id:"address",name:"Address",field:"address",sortable:!0,minWidth:100},{id:"country",name:"Country",field:"country",sortable:!0}],this.gridOptions1={enableAutoResize:!1,gridHeight:225,gridWidth:800,rowHeight:33,enableSelection:!0,selectionOptions:{selectionType:"row"}},this.columnDefinitions2=[{id:"orderId",field:"orderId",name:"Order ID",sortable:!0,width:50},{id:"freight",field:"freight",name:"Freight",sortable:!0,width:50,type:"number",formatter:f.dollar},{id:"name",field:"name",name:"Ship Company",sortable:!0},{id:"city",field:"city",name:"Ship City",sortable:!0,width:60},{id:"country",field:"country",name:"Ship Country",sortable:!0,width:60},{id:"address",field:"address",name:"Ship Address",sortable:!0}],this.gridOptions2={gridWidth:950,autoResize:{container:".demo-container",autoHeight:!0,minHeight:150},enableSorting:!0,rowHeight:38,enableCellNavigation:!0,datasetIdPropertyName:"orderId"}}handleOnCellClicked(e){const i=this.aureliaGrid1?.slickGrid?.getDataItem(e.row);i&&(this.aureliaGrid1?.slickGrid?.setSelectedRows([e.row]),this.dataset2=this.mockDetailData(i),this.selectedName=`${i.name} - ${i.company}`)}mockMasterData(){return[{id:0,name:"Jerome Aufderhar",company:"Morissette Inc",address:"1808 Koss Road",country:"Switzerland"},{id:1,name:"Angeline Gislason",company:"Moen, Dooley and Champlin",address:"6093 Mante Shoals",country:"Denmark"},{id:2,name:"Dean Gibson",company:"Champlin - Schoen & Co",address:"601 Beach Road",country:"United Kingdom"},{id:3,name:"Sherwood Collins",company:"Watsica, Smitham and Willms",address:"213 Whitney Land",country:"Australia"},{id:4,name:"Colleen Gutmann",company:"Ledner, Schiller and Leuschke",address:"19263 Church Close",country:"Germany"}]}mockDetailData(e){let i=[];return e.id===0?i=[{orderId:10355,freight:41.95,name:e.company,city:"Zurich",country:e.country,address:"31152 Elfrieda Rapid"},{orderId:10383,freight:32.39,name:e.company,city:"Winterthur",country:e.country,address:"3436 Durgan Spur"},{orderId:10452,freight:28.98,name:e.company,city:"Zurich",country:e.country,address:"655 Joseph Cape"},{orderId:10662,freight:21.35,name:e.company,city:"Genève",country:e.country,address:"51019 Airport Road"}]:e.id===1?i=[{orderId:10278,freight:37.62,name:e.company,city:"Copenhagen",country:e.country,address:"436 Hills Spring"},{orderId:10280,freight:50.95,name:e.company,city:"Copenhagen",country:e.country,address:"8730 Nikki Highway"},{orderId:10384,freight:13.39,name:e.company,city:"Aalborg",country:e.country,address:"5277 Kings Highway"},{orderId:10444,freight:58.8,name:e.company,city:"Odense",country:e.country,address:"413 Hilpert Union"},{orderId:10445,freight:23.33,name:e.company,city:"Aarhus",country:e.country,address:"85836 Osinski Mountains"}]:e.id===2?i=[{orderId:10265,freight:55.75,name:e.company,city:"London",country:e.country,address:"28077 Paolo Shoal"},{orderId:10297,freight:88.92,name:e.company,city:"Cambridge",country:e.country,address:"309 Nolan Islands"},{orderId:10449,freight:79.1,name:e.company,city:"Manchester",country:e.country,address:"992 Jeromy Inlet"}]:e.id===3?i=[{orderId:10254,freight:94.22,name:e.company,city:"Perth",country:e.country,address:"261 Kaia Parks"},{orderId:10370,freight:90.52,name:e.company,city:"Sydney",country:e.country,address:"62373 Mina Bridge"},{orderId:10519,freight:77.95,name:e.company,city:"Gold Coast",country:e.country,address:"863 Alysson Rest"},{orderId:10731,freight:94.89,name:e.company,city:"Brisbane",country:e.country,address:"2322 Pines Drive"},{orderId:10746,freight:51.44,name:e.company,city:"Melbourne",country:e.country,address:"9764 Oak Street"}]:e.id===4&&(i=[{orderId:10258,freight:47.04,name:e.company,city:"Hamburg",country:e.country,address:"4600 Kirlin Oval"},{orderId:10263,freight:62.95,name:e.company,city:"Berlin",country:e.country,address:"592 Parkway Drive"},{orderId:10368,freight:59.47,name:e.company,city:"Munich",country:e.country,address:"785 Memorial Blvd."},{orderId:10382,freight:65.19,name:e.company,city:"Frankfurt",country:e.country,address:"9839 Warren"}]),i}}Is=XG();xa=nF(Is,0,"Example50",ev,xa);aF(Is,1,xa);const rF=Object.freeze(Object.defineProperty({__proto__:null,get Example50(){return xa}},Symbol.toStringTag,{value:"Module"})),tv="example51",to=`<div class="demo51">
  <h2>
    <span>Example 51: Menus with Slots</span>
    <span class="float-end">
      <a
        style="font-size: 18px"
        target="_blank"
        href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example51.ts"
      >
        <span class="mdi mdi-link mdi-v-align-sub"></span> code
      </a>
    </span>
    <button
      class="ms-2 btn btn-outline-secondary btn-sm btn-icon"
      type="button"
      data-test="toggle-subtitle"
      click.trigger="toggleSubTitle()"
    >
      <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>
    </button>
    <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="toggleDarkMode()" data-test="toggle-dark-mode">
      <span class="mdi mdi-theme-light-dark"></span>
      <span>Toggle Dark Mode</span>
    </button>
  </h2>

  <div class="subtitle alert alert-light">
    <h5 class="mb-2">
      <span class="mdi mdi-information-outline"></span>
      <strong>Menu Slots Demo with Custom Renderer</strong>
    </h5>
    <p class="mb-2">
      Click on the menu buttons to see the new <strong>single slot functionality</strong> working across all menu types (Header Menu, Cell
      Menu, Context Menu, Grid Menu):
    </p>
    <p class="mt-2">
      <small
        ><strong>Note:</strong> The demo focuses on the custom rendering capability via <code>slotRenderer</code> and
        <code>defaultMenuItemRenderer</code>, which work across all menu plugins (SlickHeaderMenu, SlickCellMenu, SlickContextMenu,
        SlickGridMenu). Also note that the keyboard shortcuts displayed in the menus (e.g., <code>Alt+↑</code>, <code>F5</code>) are for
        demo purposes only and do not actually trigger any actions.
      </small>
    </p>
  </div>

  <section class="row mb-2">
    <div class="mb-1">
      <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="clear-grouping-btn" click.trigger="clearGrouping()">
        <span>Clear grouping</span>
      </button>
      <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="collapse-all-btn" click.trigger="collapseAllGroups()">
        <span class="mdi mdi-arrow-collapse"></span>
        <span>Collapse all groups</span>
      </button>
      <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="expand-all-btn" click.trigger="expandAllGroups()">
        <span class="mdi mdi-arrow-expand"></span>
        <span>Expand all groups</span>
      </button>
      <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="group-duration-sort-value-btn" click.trigger="groupByDuration()">
        Group by Duration
      </button>
    </div>
  </section>

  <div id="grid-container" class="col-sm-12">
    <aurelia-slickgrid
      grid-id="grid51"
      columns.bind="columnDefinitions"
      options.bind="gridOptions"
      dataset.bind="dataset"
      on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
    >
    </aurelia-slickgrid>
  </div>
</div>
`,iv=[],av={};let jn;function oF(t){jn||(jn=E.define({name:tv,template:to,dependencies:iv,bindables:av})),t.register(jn)}const lF=Object.freeze(Object.defineProperty({__proto__:null,bindables:av,default:to,dependencies:iv,name:tv,register:oF,template:to},Symbol.toStringTag,{value:"Module"}));var sF=Object.create,Gs=Object.defineProperty,dF=Object.getOwnPropertyDescriptor,cF=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),nv=t=>{throw TypeError(t)},rv=(t,e,i)=>e in t?Gs(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,uF=(t,e)=>Gs(t,"name",{value:e,configurable:!0}),mF=t=>[,,,sF(null)],pF=["class","method","getter","setter","accessor","field","value","get","set"],ov=t=>t!==void 0&&typeof t!="function"?nv("Function expected"):t,hF=(t,e,i,n,a)=>({kind:pF[t],name:e,metadata:n,addInitializer:r=>i._?nv("Already initialized"):a.push(ov(r||null))}),gF=(t,e)=>rv(e,cF("metadata"),t[3]),bF=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},fF=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&dF(a,i));uF(a,i);for(var p=n.length-1;p>=0;p--)u=hF(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,ov(l)&&(a=l);return gF(t,a),c&&Gs(a,i,c),m?s^4?r:c:a},Gt=(t,e,i)=>rv(t,typeof e!="symbol"?e+"":e,i),lv,Fs;const vF=2e3;lv=[T(lF)];class Ta{constructor(){Gt(this,"aureliaGrid"),Gt(this,"columnDefinitions",[]),Gt(this,"gridOptions"),Gt(this,"dataset"),Gt(this,"hideSubTitle",!1),this.defineGrid()}attached(){this.dataset=this.loadData(vF)}aureliaGridReady(e){this.aureliaGrid=e}defineGrid(){this.columnDefinitions=[{id:"title",name:"Title",field:"title",sortable:!0,filterable:!0,minWidth:100,header:{menu:{commandItems:[{command:"sort-asc",title:"Sort Ascending",positionOrder:50,slotRenderer:e=>`
                  <div class="menu-item">
                    <i class="mdi mdi-sort-ascending menu-item-icon"></i>
                    <span class="menu-item-label">${e.title}</span>
                    <kbd class="key-hint">Alt+↑</kbd>
                  </div>
                `},{command:"sort-desc",title:"Sort Descending",positionOrder:51,slotRenderer:()=>{const e=I("div",{className:"menu-item"}),i=I("i",{className:"mdi mdi-sort-descending menu-item-icon"}),n=I("span",{className:"menu-item-label",textContent:"Sort Descending"}),a=I("kbd",{className:"key-hint",textContent:"Alt+↓"});return e.appendChild(i),e.appendChild(n),e.appendChild(a),e}}]}}},{id:"duration",name:"Duration",field:"duration",sortable:!0,filterable:!0,minWidth:100,header:{menu:{commandItems:[{command:"column-resize-by-content",title:"Resize by Content",positionOrder:47,slotRenderer:()=>`
                  <div class="menu-item">
                    <i class="mdi mdi-arrow-expand-horizontal menu-item-icon"></i>
                    <span class="menu-item-label">Resize by Content</span>
                    <span class="key-hint danger">NEW</span>
                  </div>
                `},{divider:!0,command:"",positionOrder:48},{command:"sort-asc",title:"Sort Ascending",iconCssClass:"mdi mdi-sort-ascending",positionOrder:50},{command:"sort-desc",title:"Sort Descending",iconCssClass:"mdi mdi-sort-descending",positionOrder:51},{divider:!0,command:"",positionOrder:52},{command:"clear-sort",title:"Remove Sort",positionOrder:58,slotRenderer:()=>`
                  <div class="menu-item">
                    <i class="mdi mdi-sort-variant-off menu-item-icon"></i>
                    <span class="menu-item-label">Remove Sort</span>
                    <span class="round-tag"></span>
                  </div>
                `}]}}},{id:"start",name:"Start",field:"start",sortable:!0,formatter:f.dateIso,filterable:!0,filter:{model:v.compoundDate},minWidth:100},{id:"finish",name:"Finish",field:"finish",sortable:!0,formatter:f.dateIso,filterable:!0,filter:{model:v.dateRange},minWidth:100},{id:"cost",name:"Cost",field:"cost",width:90,sortable:!0,filterable:!0,formatter:f.dollar,header:{menu:{commandItems:[{command:"custom-action",title:"Advanced Export",slotRenderer:e=>{const i=I("div",{className:"menu-item"}),n=I("div",{className:"advanced-export-icon",textContent:"📊"}),a=I("span",{textContent:e.title||"",style:{flex:"1"}}),r=I("kbd",{className:"key-hint",textContent:"Ctrl+E"});return i.appendChild(n),i.appendChild(a),i.appendChild(r),i.addEventListener("mouseover",()=>{n.style.transform="scale(1.15)",n.style.background="linear-gradient(135deg, #d8dcef 0%, #ffffff 100%)",i.parentElement.style.backgroundColor="#854685",i.parentElement.title=`📈 Export timestamp: ${be(new Date,"YYYY-MM-DD hh:mm:ss a")}`,i.style.color="white",i.querySelector(".key-hint").style.color="black"}),i.addEventListener("mouseout",()=>{n.style.transform="scale(1)",n.style.background="linear-gradient(135deg, #667eea 0%, #764ba2 100%)",i.parentElement.style.backgroundColor="white",i.style.color="black",document.querySelector(".export-timestamp")?.remove()}),i},action:()=>{alert("Custom export action triggered!")}},{divider:!0,command:""},{command:"filter-column",title:"Filter Column",slotRenderer:()=>`
                  <div class="menu-item">
                    <i class="mdi mdi-filter menu-item-icon"></i>
                    <span class="menu-item-label">Filter Column</span>
                    <span class="key-hint beta">BETA</span>
                  </div>
                `}]}}},{id:"percentComplete",name:"% Complete",field:"percentComplete",sortable:!0,filterable:!0,type:"number",filter:{model:v.slider,operator:">="},header:{menu:{commandItems:[{command:"recalc",title:"Recalculate",iconCssClass:"mdi mdi-refresh",slotRenderer:()=>`
                  <div class="menu-item">
                    <div class="recalc-icon">%</div>
                    <span class="menu-item-label">Recalculate</span>
                  </div>
                `}]}}},{id:"action",name:"Action",field:"action",width:70,minWidth:70,maxWidth:70,cssClass:"justify-center flex",formatter:()=>'<div class="button-style margin-auto" style="width: 35px;"><span class="mdi mdi-chevron-down text-primary"></span></div>',excludeFromExport:!0,cellMenu:{hideCloseButton:!1,commandTitle:"Cell Actions",defaultMenuItemRenderer:e=>`
              <div class="menu-item">
                ${e.iconCssClass?`<i class="${e.iconCssClass}" style="margin-right: 10px; font-size: 18px;"></i>`:'<span style="width: 18px; margin-right: 10px;">◦</span>'}
                <span class="menu-item-label">${e.title}</span>
              </div>
            `,commandItems:[{command:"copy-cell",title:"Copy Cell Value",iconCssClass:"mdi mdi-content-copy",action:(e,i)=>{console.log("Copy cell value:",i.dataContext[i.column.field]),alert(`Copied: ${i.dataContext[i.column.field]}`)}},"divider",{command:"export-row",title:"Export Row",iconCssClass:"mdi mdi-download",action:(e,i)=>{console.log("Export row:",i.dataContext),alert(`Export row #${i.dataContext.id}`)}},{command:"export",title:"Export",iconCssClass:"mdi mdi-download",commandItems:[{command:"export-excel",title:"Export as Excel",iconCssClass:"mdi mdi-file-excel-outline text-success",action:(e,i)=>{alert(`Export row #${i.dataContext.id} to Excel`)}},{command:"export-csv",title:"Export as CSV",iconCssClass:"mdi mdi-file-document-outline",action:(e,i)=>{alert(`Export row #${i.dataContext.id} to CSV`)}},{command:"export-pdf",title:"Export as PDF",iconCssClass:"mdi mdi-file-pdf-outline text-red",action:(e,i)=>{alert(`Export row #${i.dataContext.id} to PDF`)}}]},{divider:!0,command:""},{command:"edit-row",title:"Edit Row",slotRenderer:(e,i)=>`
                <div class="menu-item">
                    <div class="edit-cell-icon">✎</div>
                    <span class="menu-item-label">Edit Row #${i.dataContext.id}</span>
                </div>
              `,action:(e,i)=>{console.log("Edit row:",i.dataContext),alert(`Edit row #${i.dataContext.id}`)}},{command:"delete-row",title:"Delete Row",iconCssClass:"mdi mdi-delete text-danger",action:(e,i)=>{const n=i.dataContext;confirm(`Do you really want to delete row (${i.row+1}) with "${n.title}"`)&&this.aureliaGrid?.gridService.deleteItemById(n.id)}}]}}],this.gridOptions={autoResize:{container:"#demo-container"},enableAutoResize:!0,enableCellNavigation:!0,enableFiltering:!0,enableSorting:!0,enableGrouping:!0,enableHeaderMenu:!0,headerMenu:{defaultMenuItemRenderer:e=>`
            <div class="menu-item">
              ${e.iconCssClass?`<i class="${e.iconCssClass} menu-item-icon"></i>`:""}
              <span class="menu-item-label">${e.title}</span>
            </div>
          `},enableCellMenu:!0,enableContextMenu:!0,contextMenu:{commandListBuilder:e=>[{command:"edit-cell",title:"Edit Cell",slotRenderer:i=>{const n=I("div",{className:"menu-item"}),a=I("div",{className:"edit-cell-icon",textContent:"✎"}),r=I("span",{textContent:i.title||"",style:{flex:"1"}}),l=I("kbd",{className:"edit-cell",textContent:"F2"});return n.appendChild(a),n.appendChild(r),n.appendChild(l),n.addEventListener("mouseover",()=>{a.style.transform="rotate(15deg) scale(1.1)",a.style.boxShadow="0 2px 8px rgba(0,200,83,0.4)"}),n.addEventListener("mouseout",()=>{a.style.transform="rotate(0deg) scale(1)",a.style.boxShadow="none"}),n},action:()=>alert("Edit cell")},...e,{divider:!0,command:""},{command:"export",title:"Export",iconCssClass:"mdi mdi-download",commandItems:[{command:"export-excel",title:"Export as Excel",iconCssClass:"mdi mdi-file-excel-outline text-success",action:()=>alert("Export to Excel")},{command:"export-csv",title:"Export as CSV",iconCssClass:"mdi mdi-file-document-outline",action:()=>alert("Export to CSV")},{command:"export-pdf",title:"Export as PDF",iconCssClass:"mdi mdi-file-pdf-outline text-danger",action:()=>alert("Export to PDF")}]},{divider:!0,command:""},{command:"delete-row",title:"Delete Row",iconCssClass:"mdi mdi-delete text-danger",action:()=>alert("Delete row")}],defaultMenuItemRenderer:e=>`
            <div class="menu-item">
              ${e.iconCssClass?`<i class="${e.iconCssClass} menu-item-icon"></i>`:""}
              <span class="menu-item-label">${e.title}</span>
            </div>
          `},enableGridMenu:!0,gridMenu:{defaultMenuItemRenderer:e=>`
            <div class="menu-item">
              ${e.iconCssClass?`<i class="${e.iconCssClass} menu-item-icon"></i>`:""}
              <span class="menu-item-label">${e.title}</span>
            </div>
          `,commandListBuilder:e=>[...e,{divider:!0,command:""},{command:"export-excel",title:"Export to Excel",iconCssClass:"mdi mdi-file-excel-outline",action:()=>alert("Export to Excel")},{command:"export-csv",title:"Export to CSV",iconCssClass:"mdi mdi-download",slotRenderer:i=>`
              <div class="menu-item">
                <i class="${i.iconCssClass} menu-item-icon warn"></i>
                <span class="menu-item-label warn">${i.title}</span>
                <span class="key-hint warn">CUSTOM</span>
              </div>
            `,action:()=>alert("Export to CSV")},{command:"refresh-data",title:"Refresh Data",iconCssClass:"mdi mdi-refresh",slotRenderer:i=>{const n=I("div",{className:"menu-item"}),a=I("i",{className:`${i.iconCssClass} menu-item-icon`}),r=I("span",{className:"menu-item-label",textContent:i.title||""}),l=I("kbd",{className:"key-hint",textContent:"F5"});return n.appendChild(a),n.appendChild(r),n.appendChild(l),n},action:()=>alert("Refresh data")}]},externalResources:[new oi],customTooltip:{observeAllTooltips:!0}}}clearGrouping(){this.aureliaGrid?.dataView?.setGrouping([])}collapseAllGroups(){this.aureliaGrid?.dataView?.collapseAllGroups()}expandAllGroups(){this.aureliaGrid?.dataView?.expandAllGroups()}groupByDuration(){this.aureliaGrid?.slickGrid?.setSortColumns([{columnId:"duration",sortAsc:!0}]),this.aureliaGrid?.dataView?.setGrouping({getter:"duration",formatter:e=>`Duration: ${e.value} <span class="text-green">(${e.count} items)</span>`,comparer:(e,i)=>re.numeric(e.value,i.value,ri.asc),aggregators:[new k.Avg("percentComplete"),new k.Sum("cost")],aggregateCollapsed:!1,lazyTotalsCalculation:!0}),this.aureliaGrid?.slickGrid?.invalidate()}loadData(e){const i=[];for(let n=0;n<e;n++){const a=Math.round(Math.random()*100),r=2e3+Math.floor(Math.random()*10),l=Math.floor(Math.random()*11),d=Math.floor(Math.random()*29),u=Math.round(Math.random()*100);i[n]={id:n,title:"Task "+n,duration:a,cost:Math.round(Math.random()*1e4)/100,percentComplete:u,start:new Date(r,l,d),finish:new Date(r,l+1,d)}}return i}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}Fs=mF();Ta=fF(Fs,0,"Example51",lv,Ta);bF(Fs,1,Ta);const _F=Object.freeze(Object.defineProperty({__proto__:null,get Example51(){return Ta}},Symbol.toStringTag,{value:"Module"})),sv="home-page",io=`<div class="container">
  <h2>Aurelia-Slickgrid - Demo Site</h2>
  <div class="subtitle">This site is to demo multiple usage of Aurelia-Slickgrid, choose an example from the left side menu</div>

  <hr />

  <h4>Quick intro</h4>
  <p>
    One of the best JavaScript datagrid
    <a href="https://github.com/mleibman/SlickGrid" target="_blank">SlickGrid</a> which was originally developed by &#64;mleibman is now
    available to Aurelia. I have tried, and used, a few datagrids and SlickGrid beats most of them in terms of functionalities and
    performance (it can easily handle a million row).
  </p>
  <h4>Documentation</h4>
  <p>
    The documentation is powered by GitBook and can be found at this link
    <a href="https://ghiscoding.gitbook.io/aurelia-slickgrid" target="_blank">Aurelia-Slickgrid - Documentation</a>, so be sure to consult
    it before opening any new issue.
    <br />
    The
    <a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/getting-started/quick-start" target="_blank">HOWTO - Quick Start</a>
    is the best starting point to get going with this library.
  </p>

  <hr />
  Like my work? You can support me with caffeine :)

  <br /><br />

  <a href="https://ko-fi.com/ghiscoding" target="_blank">
    <img
      height="36"
      width="140"
      style="border: 0px; height: 36px"
      src="https://storage.ko-fi.com/cdn/kofi3.png?v=6"
      border="0"
      alt="Buy Me a Coffee at ko-fi.com"
    />
  </a>
</div>
`,dv=[],cv={};let Vn;function yF(t){Vn||(Vn=E.define({name:sv,template:io,dependencies:dv,bindables:cv})),t.register(Vn)}const SF=Object.freeze(Object.defineProperty({__proto__:null,bindables:cv,default:io,dependencies:dv,name:sv,register:yF,template:io},Symbol.toStringTag,{value:"Module"}));var CF=Object.create,As=Object.defineProperty,wF=Object.getOwnPropertyDescriptor,xF=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),uv=t=>{throw TypeError(t)},TF=(t,e,i)=>e in t?As(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,EF=(t,e)=>As(t,"name",{value:e,configurable:!0}),$F=t=>[,,,CF(null)],kF=["class","method","getter","setter","accessor","field","value","get","set"],mv=t=>t!==void 0&&typeof t!="function"?uv("Function expected"):t,DF=(t,e,i,n,a)=>({kind:kF[t],name:e,metadata:n,addInitializer:r=>i._?uv("Already initialized"):a.push(mv(r||null))}),OF=(t,e)=>TF(e,xF("metadata"),t[3]),MF=(t,e,i,n)=>{for(var a=0,r=t[e>>1],l=r&&r.length;a<l;a++)r[a].call(i);return n},PF=(t,e,i,n,a,r)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&wF(a,i));EF(a,i);for(var p=n.length-1;p>=0;p--)u=DF(s,i,d={},t[3],g),l=(0,n[p])(a,u),d._=1,mv(l)&&(a=l);return OF(t,a),c&&As(a,i,c),m?s^4?r:c:a},pv,Rs;pv=[T(SF)];class Ea{constructor(e=O(Pv)){this.aurelia=e,console.log(e)}}Rs=$F();Ea=PF(Rs,0,"HomePage",pv,Ea);MF(Rs,1,Ea);const IF=Object.freeze(Object.defineProperty({__proto__:null,get HomePage(){return Ea}},Symbol.toStringTag,{value:"Module"}));export{$ as _,AF as c,RF as g};
