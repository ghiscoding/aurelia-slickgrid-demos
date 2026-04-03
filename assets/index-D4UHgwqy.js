import{f as _e,v as lo,b as O,c as T,C as E,r as M,a as Dv,A as Mv,R as Pv,I as Iv,d as Gv,p as Fv,F as f,e as qr,n as Ce,g as we,h as xe,E as C,i as v,S as ue,j as rt,k as G,G as so,l as Lt,m as co,T as Da,o as V,q as k,s as si,P as Pi,t as Av,u as uo,w as Qd,x as mo,y as di,z as Ga,B as po,D as Fa,H as Rv,J as Aa,K as Lv,L as zv,M as Nv,N as Vs,O as Wv,Q as Bv,U as D,V as ct,W as jv,X as Vv,Y as Hv,Z as ot,_ as Uv,$ as qv}from"./vendor-DRKreqcT.js";import"./index-D4UHgwqy.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function i(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(a){if(a.ep)return;a.ep=!0;const n=i(a);fetch(a.href,n)}})();const Yv="All Selected",Kv="All {{x}} records selected",Qv="Apply Mass Update",Zv="Update Selection",Jv="Cancel",Xv="Clear all Filters",e_="Clear all Grouping",t_="Clear all Sorting",i_="Unfreeze Columns/Rows",a_="Clone",r_="Collapse all Groups",n_="Columns",o_="Resize by Content",l_="Commands",s_="Contains",d_="Copy",c_="No data to display.",u_="Ends With",m_="Equals",p_="Equal to",h_="Expand all Groups",g_="Export in CSV format",b_="Export to Excel",f_="Export to PDF",v_="Export in Text format (Tab delimited)",__="Export in Text format",y_="Filter Shortcuts",S_="{{from}}-{{to}} of {{totalItems}} items",C_="Force fit columns",w_="Freeze Columns",x_="The number must be valid and have a maximum of {{maxDecimal}} decimals.",T_="Greater than",E_="Greater than or equal to",$_="Group by",k_="Hide Column",O_="Search items in a collection, must be separated by a comma (a,b)",D_="items",M_="items per page",P_="items selected",I_="No elements found",G_="Last Update",F_="Less than",A_="Less than or equal to",R_="Loading...",L_="Not contains",z_="Not equal to",N_="Search items not in a collection, must be separated by a comma (a,b)",W_="of",B_="OK",j_="Page",V_="page {{x}} of {{y}}",H_="Refresh Dataset",U_="Remove Filter",q_="Remove Sort",Y_="Reset Input Value",K_="Reset Form",Q_="Save",Z_="Select All",J_="Sort Ascending",X_="Sort Descending",ey="Starts With",ty="Synchronous resize",iy="Toggle Filter Row",ay="Toggle Pre-Header Row",ry="Unfreeze Columns",ny="# of % selected",oy="{{x}} of {{y}} selected",ly={ADDRESS:{STREET:"Billing Address Street",ZIP:"Billing Address Zip"},INFORMATION:"Billing Information"},sy="Blank Values",dy="Non-Blank Values",cy="Custom Commands",uy="Duration",my="Company",py="Completed",hy="Change Completed Flag",gy="Change Priority",by="Customer Information",fy="Delete Row",vy="Disabled Command",_y="False",yy="Female",Sy="Finish",Cy="Future",wy="Gender",xy="Help",Ty="High",Ey="Low",$y="Medium",ky="Male",Oy="Name",Dy="Next 20 days",My="None",Py="Past",Iy="% Complete",Gy="Priority",Fy="Start",Ay="Task {{x}}",Ry="Title",Ly="Today",zy="True",Ny="{{x}} day{{plural}}",Wy="Update the current row",By="Cancel changes of the current row",jy={ALL_SELECTED:Yv,ALL_X_RECORDS_SELECTED:Kv,APPLY_MASS_UPDATE:Qv,APPLY_TO_SELECTION:Zv,CANCEL:Jv,CLEAR_ALL_FILTERS:Xv,CLEAR_ALL_GROUPING:e_,CLEAR_ALL_SORTING:t_,CLEAR_PINNING:i_,CLONE:a_,COLLAPSE_ALL_GROUPS:r_,COLUMNS:n_,COLUMN_RESIZE_BY_CONTENT:o_,COMMANDS:l_,CONTAINS:s_,COPY:d_,EMPTY_DATA_WARNING_MESSAGE:c_,ENDS_WITH:u_,EQUALS:m_,EQUAL_TO:p_,EXPAND_ALL_GROUPS:h_,EXPORT_TO_CSV:g_,EXPORT_TO_EXCEL:b_,EXPORT_TO_PDF:f_,EXPORT_TO_TAB_DELIMITED:v_,EXPORT_TO_TEXT_FORMAT:__,FILTER_SHORTCUTS:y_,FROM_TO_OF_TOTAL_ITEMS:S_,FORCE_FIT_COLUMNS:C_,FREEZE_COLUMNS:w_,INVALID_FLOAT:x_,GREATER_THAN:T_,GREATER_THAN_OR_EQUAL_TO:E_,GROUP_BY:$_,HIDE_COLUMN:k_,IN_COLLECTION_SEPERATED_BY_COMMA:O_,ITEMS:D_,ITEMS_PER_PAGE:M_,ITEMS_SELECTED:P_,NO_ELEMENTS_FOUND:I_,LAST_UPDATE:G_,LESS_THAN:F_,LESS_THAN_OR_EQUAL_TO:A_,LOADING:R_,NOT_CONTAINS:L_,NOT_EQUAL_TO:z_,NOT_IN_COLLECTION_SEPERATED_BY_COMMA:N_,OF:W_,OK:B_,PAGE:j_,PAGE_X_OF_Y:V_,REFRESH_DATASET:H_,REMOVE_FILTER:U_,REMOVE_SORT:q_,RESET_INPUT_VALUE:Y_,RESET_FORM:K_,SAVE:Q_,SELECT_ALL:Z_,SORT_ASCENDING:J_,SORT_DESCENDING:X_,STARTS_WITH:ey,SYNCHRONOUS_RESIZE:ty,TOGGLE_FILTER_ROW:iy,TOGGLE_PRE_HEADER_ROW:ay,UNFREEZE_COLUMNS:ry,X_OF_Y_SELECTED:ny,X_OF_Y_MASS_SELECTED:oy,BILLING:ly,BLANK_VALUES:sy,NON_BLANK_VALUES:dy,CUSTOM_COMMANDS:cy,DURATION:uy,COMPANY:my,COMPLETED:py,CHANGE_COMPLETED_FLAG:hy,CHANGE_PRIORITY:gy,CUSTOMER_INFORMATION:by,DELETE_ROW:fy,DISABLED_COMMAND:vy,FALSE:_y,FEMALE:yy,FINISH:Sy,FUTURE:Cy,GENDER:wy,HELP:xy,HIGH:Ty,LOW:Ey,MEDIUM:$y,MALE:ky,NAME:Oy,NEXT_20_DAYS:Dy,NONE:My,PAST:Py,PERCENT_COMPLETE:Iy,PRIORITY:Gy,START:Fy,TASK_X:Ay,TITLE:Ry,TODAY:Ly,TRUE:zy,X_DAY_PLURAL:Ny,RBE_BTN_UPDATE:Wy,RBE_BTN_CANCEL:By},Vy="Tout sélectionnés",Hy="Sur tous les {{x}} éléments",Uy="Mettre à jour en masse",qy="Mettre à jour la sélection",Yy="Annuler",Ky="Supprimer tous les filtres",Qy="Supprimer tous les groupes",Zy="Supprimer tous les tris",Jy="Dégeler les colonnes/rangées",Xy="Cloner",eS="Réduire tous les groupes",tS="Colonnes",iS="Redimensionner par contenu",aS="Commandes",rS="Contient",nS="Copier",oS="Aucune donnée à afficher.",lS="Se termine par",sS="Égale",dS="Égal à",cS="Étendre tous les groupes",uS="Exporter en format CSV",mS="Exporter vers Excel",pS="Exporter vers PDF",hS="Exporter en format texte (délimité par tabulation)",gS="Exporter en format texte",bS="Raccourcis de filtre",fS="{{from}}-{{to}} de {{totalItems}} éléments",vS="Ajustement forcé des colonnes",_S="Geler les colonnes",yS="Plus grand que",SS="Plus grand ou égal à",CS="Grouper par",wS="Cacher la colonne",xS="Recherche incluant certain éléments d'une collection, doit être séparé par une virgule (a,b)",TS="Le nombre doit être valide et avoir un maximum de {{maxDecimal}} décimales.",ES="éléments",$S="éléments par page",kS="éléments sélectionnés",OS="Dernière mise à jour",DS="Plus petit que",MS="Plus petit ou égal à",PS="Chargement...",IS="Aucun élément trouvé",GS="Ne contient pas",FS="Non égal à",AS="Recherche excluant certain éléments d'une collection, doit être séparé par une virgule (a,b)",RS="de",LS="Terminé",zS="Page",NS="page {{x}} de {{y}}",WS="Rafraîchir les données",BS="Supprimer le filtre",jS="Supprimer le tri",VS="Réinitialiser la valeur",HS="Réinitialiser le formulaire",US="Sauvegarder",qS="Sélectionner tout",YS="Trier par ordre croissant",KS="Trier par ordre décroissant",QS="Commence par",ZS="Redimension synchrone",JS="Basculer la ligne des filtres",XS="Basculer la ligne de pré-en-tête",e0="Dégeler les colonnes",t0="# de % sélectionnés",i0="{{x}} de {{y}} sélectionnés",a0={ADDRESS:{STREET:"Adresse de facturation",ZIP:"Code zip de facturation"},INFORMATION:"Information de Facturation"},r0="Valeurs nulles",n0="Valeurs non-nulles",o0="Durée",l0="Compagnie",s0="Terminé",d0="Changer l'indicateur terminé",c0="Changer la priorité",u0="Commandes Personnalisées",m0="Information Client",p0="Supprimer la ligne",h0="Commande désactivée",g0="Faux",b0="Féminin",f0="Fin",v0="Future",_0="Sexe",y0="Aide",S0="Haut",C0="Bas",w0="Moyen",x0="Masculin",T0="Nom",E0="20 prochain jours",$0="Aucun",k0="Passé",O0="% Achevée",D0="Priorité",M0="Début",P0="Tâche {{x}}",I0="Titre",G0="Aujourd'hui",F0="Vrai",A0="{{x}} journée{{plural}}",R0="Mettre à jour la ligne actuelle",L0="Annuler la ligne actuelle",z0={ALL_SELECTED:Vy,ALL_X_RECORDS_SELECTED:Hy,APPLY_MASS_UPDATE:Uy,APPLY_TO_SELECTION:qy,CANCEL:Yy,CLEAR_ALL_FILTERS:Ky,CLEAR_ALL_GROUPING:Qy,CLEAR_ALL_SORTING:Zy,CLEAR_PINNING:Jy,CLONE:Xy,COLLAPSE_ALL_GROUPS:eS,COLUMNS:tS,COLUMN_RESIZE_BY_CONTENT:iS,COMMANDS:aS,CONTAINS:rS,COPY:nS,EMPTY_DATA_WARNING_MESSAGE:oS,ENDS_WITH:lS,EQUALS:sS,EQUAL_TO:dS,EXPAND_ALL_GROUPS:cS,EXPORT_TO_CSV:uS,EXPORT_TO_EXCEL:mS,EXPORT_TO_PDF:pS,EXPORT_TO_TAB_DELIMITED:hS,EXPORT_TO_TEXT_FORMAT:gS,FILTER_SHORTCUTS:bS,FROM_TO_OF_TOTAL_ITEMS:fS,FORCE_FIT_COLUMNS:vS,FREEZE_COLUMNS:_S,GREATER_THAN:yS,GREATER_THAN_OR_EQUAL_TO:SS,GROUP_BY:CS,HIDE_COLUMN:wS,IN_COLLECTION_SEPERATED_BY_COMMA:xS,INVALID_FLOAT:TS,ITEMS:ES,ITEMS_PER_PAGE:$S,ITEMS_SELECTED:kS,LAST_UPDATE:OS,LESS_THAN:DS,LESS_THAN_OR_EQUAL_TO:MS,LOADING:PS,NO_ELEMENTS_FOUND:IS,NOT_CONTAINS:GS,NOT_EQUAL_TO:FS,NOT_IN_COLLECTION_SEPERATED_BY_COMMA:AS,OF:RS,OK:LS,PAGE:zS,PAGE_X_OF_Y:NS,REFRESH_DATASET:WS,REMOVE_FILTER:BS,REMOVE_SORT:jS,RESET_INPUT_VALUE:VS,RESET_FORM:HS,SAVE:US,SELECT_ALL:qS,SORT_ASCENDING:YS,SORT_DESCENDING:KS,STARTS_WITH:QS,SYNCHRONOUS_RESIZE:ZS,TOGGLE_FILTER_ROW:JS,TOGGLE_PRE_HEADER_ROW:XS,UNFREEZE_COLUMNS:e0,X_OF_Y_SELECTED:t0,X_OF_Y_MASS_SELECTED:i0,BILLING:a0,BLANK_VALUES:r0,NON_BLANK_VALUES:n0,DURATION:o0,COMPANY:l0,COMPLETED:s0,CHANGE_COMPLETED_FLAG:d0,CHANGE_PRIORITY:c0,CUSTOM_COMMANDS:u0,CUSTOMER_INFORMATION:m0,DELETE_ROW:p0,DISABLED_COMMAND:h0,FALSE:g0,FEMALE:b0,FINISH:f0,FUTURE:v0,GENDER:_0,HELP:y0,HIGH:S0,LOW:C0,MEDIUM:w0,MALE:x0,NAME:T0,NEXT_20_DAYS:E0,NONE:$0,PAST:k0,PERCENT_COMPLETE:O0,PRIORITY:D0,START:M0,TASK_X:P0,TITLE:I0,"TITLE.NAME":"Nom du Titre",TODAY:G0,TRUE:F0,X_DAY_PLURAL:A0,RBE_BTN_UPDATE:R0,RBE_BTN_CANCEL:L0};var N0=Object.create,ho=Object.defineProperty,W0=Object.getOwnPropertyDescriptor,B0=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Zd=t=>{throw TypeError(t)},j0=(t,e,i)=>e in t?ho(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,V0=(t,e)=>ho(t,"name",{value:e,configurable:!0}),H0=t=>[,,,N0(null)],U0=["class","method","getter","setter","accessor","field","value","get","set"],Jd=t=>t!==void 0&&typeof t!="function"?Zd("Function expected"):t,q0=(t,e,i,r,a)=>({kind:U0[t],name:e,metadata:r,addInitializer:n=>i._?Zd("Already initialized"):a.push(Jd(n||null))}),Y0=(t,e)=>j0(e,B0("metadata"),t[3]),K0=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},Q0=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&W0(a,i));V0(a,i);for(var p=r.length-1;p>=0;p--)u=q0(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,Jd(l)&&(a=l);return Y0(t,a),c&&ho(a,i,c),m?s^4?n:c:a},Xd,go;Xd=[lo("dateFormat")];class Ii{toView(e,i){return _e(e,i)}}go=H0();Ii=Q0(go,0,"DateFormatValueConverter",Xd,Ii);K0(go,1,Ii);var Z0=Object.create,bo=Object.defineProperty,J0=Object.getOwnPropertyDescriptor,X0=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),ec=t=>{throw TypeError(t)},eC=(t,e,i)=>e in t?bo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,tC=(t,e)=>bo(t,"name",{value:e,configurable:!0}),iC=t=>[,,,Z0(null)],aC=["class","method","getter","setter","accessor","field","value","get","set"],tc=t=>t!==void 0&&typeof t!="function"?ec("Function expected"):t,rC=(t,e,i,r,a)=>({kind:aC[t],name:e,metadata:r,addInitializer:n=>i._?ec("Already initialized"):a.push(tc(n||null))}),nC=(t,e)=>eC(e,X0("metadata"),t[3]),oC=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},lC=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&J0(a,i));tC(a,i);for(var p=r.length-1;p>=0;p--)u=rC(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,tc(l)&&(a=l);return nC(t,a),c&&bo(a,i,c),m?s^4?n:c:a},ic,fo;ic=[lo("decimal")];class Gi{toView(e,i){const r=typeof i=="string"?parseInt(i,10):2,a=typeof e<"u"?parseFloat(e).toFixed(r):e;return e&&`${a}`}}fo=iC();Gi=lC(fo,0,"DecimalValueConverter",ic,Gi);oC(fo,1,Gi);var sC=Object.create,vo=Object.defineProperty,dC=Object.getOwnPropertyDescriptor,cC=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),ac=t=>{throw TypeError(t)},uC=(t,e,i)=>e in t?vo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,mC=(t,e)=>vo(t,"name",{value:e,configurable:!0}),pC=t=>[,,,sC(null)],hC=["class","method","getter","setter","accessor","field","value","get","set"],rc=t=>t!==void 0&&typeof t!="function"?ac("Function expected"):t,gC=(t,e,i,r,a)=>({kind:hC[t],name:e,metadata:r,addInitializer:n=>i._?ac("Already initialized"):a.push(rc(n||null))}),bC=(t,e)=>uC(e,cC("metadata"),t[3]),fC=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},vC=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&dC(a,i));mC(a,i);for(var p=r.length-1;p>=0;p--)u=gC(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,rc(l)&&(a=l);return bC(t,a),c&&vo(a,i,c),m?s^4?n:c:a},nc,_o;nc=[lo("stringify")];class Fi{toView(e){return JSON.stringify(e,null,4)}}_o=pC();Fi=vC(_o,0,"StringifyValueConverter",nc,Fi);fC(_o,1,Fi);var _C=Object.create,yo=Object.defineProperty,yC=Object.getOwnPropertyDescriptor,SC=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),ci=t=>{throw TypeError(t)},oc=(t,e,i)=>e in t?yo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Hs=(t,e)=>yo(t,"name",{value:e,configurable:!0}),CC=t=>[,,,_C(null)],lc=["class","method","getter","setter","accessor","field","value","get","set"],zt=t=>t!==void 0&&typeof t!="function"?ci("Function expected"):t,wC=(t,e,i,r,a)=>({kind:lc[t],name:e,metadata:r,addInitializer:n=>i._?ci("Already initialized"):a.push(zt(n||null))}),xC=(t,e)=>oc(e,SC("metadata"),t[3]),Yr=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)e&1?n[a].call(i):r=n[a].call(i,r);return r},sc=(t,e,i,r,a,n)=>{var l,d,u,s,m,o=e&7,g=!!(e&8),c=!!(e&16),p=o>3?t.length+1:o?g?1:2:0,_=lc[o+5],w=o>3&&(t[p-1]=[]),x=t[p]||(t[p]=[]),b=o&&(!c&&!g&&(a=a.prototype),o<5&&(o>3||!c)&&yC(o<4?a:{get[i](){return Us(this,n)},set[i](h){return qs(this,n,h)}},i));o?c&&o<4&&Hs(n,(o>2?"set ":o>1?"get ":"")+i):Hs(a,i);for(var y=r.length-1;y>=0;y--)s=wC(o,i,u={},t[3],x),o&&(s.static=g,s.private=c,m=s.access={has:c?h=>EC(a,h):h=>i in h},o^3&&(m.get=c?h=>(o^1?Us:$C)(h,a,o^4?n:b.get):h=>h[i]),o>2&&(m.set=c?(h,S)=>qs(h,a,S,o^4?n:b.set):(h,S)=>h[i]=S)),d=(0,r[y])(o?o<4?c?n:b[_]:o>4?void 0:{get:b.get,set:b.set}:a,s),u._=1,o^4||d===void 0?zt(d)&&(o>4?w.unshift(d):o?c?n=d:b[_]=d:a=d):typeof d!="object"||d===null?ci("Object expected"):(zt(l=d.get)&&(b.get=l),zt(l=d.set)&&(b.set=l),zt(l=d.init)&&w.unshift(l));return o||xC(t,a),b&&yo(a,i,b),c?o^4?n:b:a},TC=(t,e,i)=>oc(t,e+"",i),So=(t,e,i)=>e.has(t)||ci("Cannot "+i),EC=(t,e)=>Object(e)!==e?ci('Cannot use the "in" operator on this value'):t.has(e),Us=(t,e,i)=>(So(t,e,"read from private field"),i?i.call(t):e.get(t)),qs=(t,e,i,r)=>(So(t,e,"write to private field"),r?r.call(t,i):e.set(t,i),i),$C=(t,e,i)=>(So(t,e,"access private method"),i),dc,cc,ut;cc=[T({name:"custom-title-formatter",template:'<span style="font-weight: bold" innerhtml.bind="model.assignee.name"></span></template>'})],dc=[O()];class mt{constructor(){TC(this,"model",Yr(ut,8,this)),Yr(ut,11,this)}}ut=CC();sc(ut,5,"model",dc,mt);mt=sc(ut,0,"CustomTitleFormatter",cc,mt);Yr(ut,1,mt);const uc="editor-select",Kr=`<div>
  <span if.bind="model.collection">
    <select class="form-control form-select" value.bind="selectedItem" matcher.bind="itemMatcher">
      <option repeat.for="item of model.collection" model.bind="item">\${item.name}</option>
    </select>
  </span>
</div>
`,mc=[],pc={};let Ra;function kC(t){Ra||(Ra=E.define({name:uc,template:Kr,dependencies:mc,bindables:pc})),t.register(Ra)}const OC=Object.freeze(Object.defineProperty({__proto__:null,bindables:pc,default:Kr,dependencies:mc,name:uc,register:kC,template:Kr},Symbol.toStringTag,{value:"Module"}));var DC=Object.create,Co=Object.defineProperty,MC=Object.getOwnPropertyDescriptor,PC=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),ui=t=>{throw TypeError(t)},hc=(t,e,i)=>e in t?Co(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Ys=(t,e)=>Co(t,"name",{value:e,configurable:!0}),IC=t=>[,,,DC(null)],gc=["class","method","getter","setter","accessor","field","value","get","set"],Nt=t=>t!==void 0&&typeof t!="function"?ui("Function expected"):t,GC=(t,e,i,r,a)=>({kind:gc[t],name:e,metadata:r,addInitializer:n=>i._?ui("Already initialized"):a.push(Nt(n||null))}),FC=(t,e)=>hc(e,PC("metadata"),t[3]),tt=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)e&1?n[a].call(i):r=n[a].call(i,r);return r},Ma=(t,e,i,r,a,n)=>{var l,d,u,s,m,o=e&7,g=!!(e&8),c=!!(e&16),p=o>3?t.length+1:o?g?1:2:0,_=gc[o+5],w=o>3&&(t[p-1]=[]),x=t[p]||(t[p]=[]),b=o&&(!c&&!g&&(a=a.prototype),o<5&&(o>3||!c)&&MC(o<4?a:{get[i](){return Ks(this,n)},set[i](h){return Qs(this,n,h)}},i));o?c&&o<4&&Ys(n,(o>2?"set ":o>1?"get ":"")+i):Ys(a,i);for(var y=r.length-1;y>=0;y--)s=GC(o,i,u={},t[3],x),o&&(s.static=g,s.private=c,m=s.access={has:c?h=>AC(a,h):h=>i in h},o^3&&(m.get=c?h=>(o^1?Ks:RC)(h,a,o^4?n:b.get):h=>h[i]),o>2&&(m.set=c?(h,S)=>Qs(h,a,S,o^4?n:b.set):(h,S)=>h[i]=S)),d=(0,r[y])(o?o<4?c?n:b[_]:o>4?void 0:{get:b.get,set:b.set}:a,s),u._=1,o^4||d===void 0?Nt(d)&&(o>4?w.unshift(d):o?c?n=d:b[_]=d:a=d):typeof d!="object"||d===null?ui("Object expected"):(Nt(l=d.get)&&(b.get=l),Nt(l=d.set)&&(b.set=l),Nt(l=d.init)&&w.unshift(l));return o||FC(t,a),b&&Co(a,i,b),c?o^4?n:b:a},kt=(t,e,i)=>hc(t,typeof e!="symbol"?e+"":e,i),wo=(t,e,i)=>e.has(t)||ui("Cannot "+i),AC=(t,e)=>Object(e)!==e?ui('Cannot use the "in" operator on this value'):t.has(e),Ks=(t,e,i)=>(wo(t,e,"read from private field"),i?i.call(t):e.get(t)),Qs=(t,e,i,r)=>(wo(t,e,"write to private field"),r?r.call(t,i):e.set(t,i),i),RC=(t,e,i)=>(wo(t,e,"access private method"),i),bc,fc,vc,_c,X;_c=[T(OC)],vc=[O()],fc=[O()],bc=[O];class Ye{constructor(e=M(HTMLElement)){kt(this,"elm",e),kt(this,"model",tt(X,8,this)),tt(X,11,this),kt(this,"grid",tt(X,12,this)),tt(X,15,this),kt(this,"selectedItem",tt(X,16,this)),tt(X,19,this),kt(this,"itemMatcher",(i,r)=>i&&r&&i.id===r.id)}focus(){this.elm.querySelector("select")?.focus()}hide(){this.elm.style.display="none"}show(){this.elm.style.display="block"}selectedItemChanged(){}}X=IC();Ma(X,5,"model",vc,Ye);Ma(X,5,"grid",fc,Ye);Ma(X,5,"selectedItem",bc,Ye);Ye=Ma(X,0,"EditorSelect",_c,Ye);tt(X,1,Ye);var LC=Object.create,xo=Object.defineProperty,zC=Object.getOwnPropertyDescriptor,NC=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),yc=t=>{throw TypeError(t)},WC=(t,e,i)=>e in t?xo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,BC=(t,e)=>xo(t,"name",{value:e,configurable:!0}),jC=t=>[,,,LC(null)],VC=["class","method","getter","setter","accessor","field","value","get","set"],Sc=t=>t!==void 0&&typeof t!="function"?yc("Function expected"):t,HC=(t,e,i,r,a)=>({kind:VC[t],name:e,metadata:r,addInitializer:n=>i._?yc("Already initialized"):a.push(Sc(n||null))}),UC=(t,e)=>WC(e,NC("metadata"),t[3]),qC=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},YC=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&zC(a,i));BC(a,i);for(var p=r.length-1;p>=0;p--)u=HC(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,Sc(l)&&(a=l);return UC(t,a),c&&xo(a,i,c),m?s^4?n:c:a},Cc,To;Cc=[T({name:"example-detail-preload",template:`<div class="container-fluid d-flex align-items-center" style="margin-top: 10px">
    <i class="mdi mdi-sync mdi-spin font-50px"></i>
    <h4>Loading...</h4>
  </div>`})];class pt{dispose(){console.log("preload detaching")}}To=jC();pt=YC(To,0,"ExampleDetailPreload",Cc,pt);qC(To,1,pt);const wc="example19-detail-view",Qr=`<div class="container-fluid" style="margin-top: 10px">
  <h3>\${model.title}</h3>
  <div class="row">
    <div class="col-3 detail-label"><label>Assignee:</label> <input class="form-control" value.bind="model.assignee" /></div>
    <div class="col-3 detail-label"><label>Reporter:</label> <span>\${model.reporter}</span></div>
    <div class="col-3 detail-label"><label>Duration:</label> <span>\${model.duration}</span></div>
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
`,xc=[],Tc={};let La;function KC(t){La||(La=E.define({name:wc,template:Qr,dependencies:xc,bindables:Tc})),t.register(La)}const QC=Object.freeze(Object.defineProperty({__proto__:null,bindables:Tc,default:Qr,dependencies:xc,name:wc,register:KC,template:Qr},Symbol.toStringTag,{value:"Module"}));var ZC=Object.create,Eo=Object.defineProperty,JC=Object.getOwnPropertyDescriptor,XC=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),mi=t=>{throw TypeError(t)},Ec=(t,e,i)=>e in t?Eo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Zs=(t,e)=>Eo(t,"name",{value:e,configurable:!0}),ew=t=>[,,,ZC(null)],$c=["class","method","getter","setter","accessor","field","value","get","set"],Wt=t=>t!==void 0&&typeof t!="function"?mi("Function expected"):t,tw=(t,e,i,r,a)=>({kind:$c[t],name:e,metadata:r,addInitializer:n=>i._?mi("Already initialized"):a.push(Wt(n||null))}),iw=(t,e)=>Ec(e,XC("metadata"),t[3]),de=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)e&1?n[a].call(i):r=n[a].call(i,r);return r},Et=(t,e,i,r,a,n)=>{var l,d,u,s,m,o=e&7,g=!!(e&8),c=!!(e&16),p=o>3?t.length+1:o?g?1:2:0,_=$c[o+5],w=o>3&&(t[p-1]=[]),x=t[p]||(t[p]=[]),b=o&&(!c&&!g&&(a=a.prototype),o<5&&(o>3||!c)&&JC(o<4?a:{get[i](){return Js(this,n)},set[i](h){return Xs(this,n,h)}},i));o?c&&o<4&&Zs(n,(o>2?"set ":o>1?"get ":"")+i):Zs(a,i);for(var y=r.length-1;y>=0;y--)s=tw(o,i,u={},t[3],x),o&&(s.static=g,s.private=c,m=s.access={has:c?h=>aw(a,h):h=>i in h},o^3&&(m.get=c?h=>(o^1?Js:rw)(h,a,o^4?n:b.get):h=>h[i]),o>2&&(m.set=c?(h,S)=>Xs(h,a,S,o^4?n:b.set):(h,S)=>h[i]=S)),d=(0,r[y])(o?o<4?c?n:b[_]:o>4?void 0:{get:b.get,set:b.set}:a,s),u._=1,o^4||d===void 0?Wt(d)&&(o>4?w.unshift(d):o?c?n=d:b[_]=d:a=d):typeof d!="object"||d===null?mi("Object expected"):(Wt(l=d.get)&&(b.get=l),Wt(l=d.set)&&(b.set=l),Wt(l=d.init)&&w.unshift(l));return o||iw(t,a),b&&Eo(a,i,b),c?o^4?n:b:a},Ot=(t,e,i)=>Ec(t,typeof e!="symbol"?e+"":e,i),$o=(t,e,i)=>e.has(t)||mi("Cannot "+i),aw=(t,e)=>Object(e)!==e?mi('Cannot use the "in" operator on this value'):t.has(e),Js=(t,e,i)=>($o(t,e,"read from private field"),i?i.call(t):e.get(t)),Xs=(t,e,i,r)=>($o(t,e,"write to private field"),r?r.call(t,i):e.set(t,i),i),rw=(t,e,i)=>($o(t,e,"access private method"),i),kc,Oc,Dc,Mc,Pc,Ic,A;Ic=[T(QC)],Pc=[O()],Mc=[O()],Dc=[O()],Oc=[O()],kc=[O()];class ye{constructor(){Ot(this,"model",de(A,8,this)),de(A,11,this),Ot(this,"addon",de(A,12,this)),de(A,15,this),Ot(this,"grid",de(A,16,this)),de(A,19,this),Ot(this,"dataView",de(A,20,this)),de(A,23,this),Ot(this,"parentRef",de(A,24,this)),de(A,27,this)}alertAssignee(e){alert(typeof e=="string"?`Assignee on this task is: ${e.toUpperCase()}`:"No one is assigned to this task.")}deleteRow(e){confirm(`Are you sure that you want to delete ${e.title}?`)&&(this.addon.collapseAll(),this.dataView.deleteItem(e.rowId),this.parentRef.showFlashMessage(`Deleted row with ${e.title}`,"danger"))}callParentMethod(e){this.parentRef.showFlashMessage(`We just called Parent Method from the Row Detail Child Component on ${e.title}`)}}A=ew();Et(A,5,"model",Pc,ye);Et(A,5,"addon",Mc,ye);Et(A,5,"grid",Dc,ye);Et(A,5,"dataView",Oc,ye);Et(A,5,"parentRef",kc,ye);ye=Et(A,0,"Example19DetailView",Ic,ye);de(A,1,ye);var nw=Object.create,ko=Object.defineProperty,ow=Object.getOwnPropertyDescriptor,lw=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),pi=t=>{throw TypeError(t)},Gc=(t,e,i)=>e in t?ko(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,ed=(t,e)=>ko(t,"name",{value:e,configurable:!0}),sw=t=>[,,,nw(null)],Fc=["class","method","getter","setter","accessor","field","value","get","set"],Bt=t=>t!==void 0&&typeof t!="function"?pi("Function expected"):t,dw=(t,e,i,r,a)=>({kind:Fc[t],name:e,metadata:r,addInitializer:n=>i._?pi("Already initialized"):a.push(Bt(n||null))}),cw=(t,e)=>Gc(e,lw("metadata"),t[3]),Zr=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)e&1?n[a].call(i):r=n[a].call(i,r);return r},Ac=(t,e,i,r,a,n)=>{var l,d,u,s,m,o=e&7,g=!!(e&8),c=!!(e&16),p=o>3?t.length+1:o?g?1:2:0,_=Fc[o+5],w=o>3&&(t[p-1]=[]),x=t[p]||(t[p]=[]),b=o&&(!c&&!g&&(a=a.prototype),o<5&&(o>3||!c)&&ow(o<4?a:{get[i](){return td(this,n)},set[i](h){return id(this,n,h)}},i));o?c&&o<4&&ed(n,(o>2?"set ":o>1?"get ":"")+i):ed(a,i);for(var y=r.length-1;y>=0;y--)s=dw(o,i,u={},t[3],x),o&&(s.static=g,s.private=c,m=s.access={has:c?h=>uw(a,h):h=>i in h},o^3&&(m.get=c?h=>(o^1?td:mw)(h,a,o^4?n:b.get):h=>h[i]),o>2&&(m.set=c?(h,S)=>id(h,a,S,o^4?n:b.set):(h,S)=>h[i]=S)),d=(0,r[y])(o?o<4?c?n:b[_]:o>4?void 0:{get:b.get,set:b.set}:a,s),u._=1,o^4||d===void 0?Bt(d)&&(o>4?w.unshift(d):o?c?n=d:b[_]=d:a=d):typeof d!="object"||d===null?pi("Object expected"):(Bt(l=d.get)&&(b.get=l),Bt(l=d.set)&&(b.set=l),Bt(l=d.init)&&w.unshift(l));return o||cw(t,a),b&&ko(a,i,b),c?o^4?n:b:a},Ke=(t,e,i)=>Gc(t,typeof e!="symbol"?e+"":e,i),Oo=(t,e,i)=>e.has(t)||pi("Cannot "+i),uw=(t,e)=>Object(e)!==e?pi('Cannot use the "in" operator on this value'):t.has(e),td=(t,e,i)=>(Oo(t,e,"read from private field"),i?i.call(t):e.get(t)),id=(t,e,i,r)=>(Oo(t,e,"write to private field"),r?r.call(t,i):e.set(t,i),i),mw=(t,e,i)=>(Oo(t,e,"access private method"),i),Rc,Lc,ht;Lc=[T({name:"custom-pager",template:`<div class="custom-pagination">
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
</div>`})],Rc=[O()];class gt{constructor(e=M(HTMLElement)){Ke(this,"elm",e),Ke(this,"_paginationElement"),Ke(this,"_subscriptions",[]),Ke(this,"_grid"),Ke(this,"_paginationService"),Ke(this,"_pubSubService"),Ke(this,"currentPagination",Zr(ht,8,this,{})),Zr(ht,11,this)}get isLeftPaginationDisabled(){return this.currentPagination.pageNumber===1||this.currentPagination.totalItems===0}get isRightPaginationDisabled(){return this.currentPagination.pageNumber===this.currentPagination.pageCount||this.currentPagination.totalItems===0}init(e,i,r){this._grid=e,this._paginationService=i,this._pubSubService=r,this.currentPagination=this._paginationService.getFullPagination(),this._subscriptions.push(this._pubSubService.subscribe("onPaginationRefreshed",a=>{this.currentPagination.dataFrom=a.dataFrom,this.currentPagination.dataTo=a.dataTo,this.currentPagination.pageCount=a.pageCount,this.currentPagination.pageNumber=a.pageNumber,this.currentPagination.pageSize=a.pageSize,this.currentPagination.pageSizes=a.pageSizes,this.currentPagination.totalItems=a.totalItems}))}dispose(){this._pubSubService.unsubscribeAll(this._subscriptions),this.disposeElement()}disposeElement(){this._paginationElement?.remove()}renderPagination(e,i="top"){this._paginationElement=this.elm,this._paginationElement.id="pager",this._paginationElement.className=`pagination-container pager ${this._grid.getUID()}`,this._paginationElement.style.width="100%",i==="top"?(this._paginationElement.classList.add("top"),e.prepend(this._paginationElement)):(this._paginationElement.classList.add("bottom"),e.appendChild(this._paginationElement))}onFirstPageClicked(e){this.isLeftPaginationDisabled||this._paginationService.goToFirstPage(e)}onLastPageClicked(e){this.isRightPaginationDisabled||this._paginationService.goToLastPage(e)}onNextPageClicked(e){this.isRightPaginationDisabled||this._paginationService.goToNextPage(e)}onPreviousPageClicked(e){this.isLeftPaginationDisabled||this._paginationService.goToPreviousPage(e)}}ht=sw();Ac(ht,5,"currentPagination",Rc,gt);gt=Ac(ht,0,"CustomPagerComponent",Lc,gt);Zr(ht,1,gt);const zc="example45-detail-view",Jr=`<div class.bind="innerGridClass">
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
`,Nc=[],Wc={};let za;function pw(t){za||(za=E.define({name:zc,template:Jr,dependencies:Nc,bindables:Wc})),t.register(za)}const hw=Object.freeze(Object.defineProperty({__proto__:null,bindables:Wc,default:Jr,dependencies:Nc,name:zc,register:pw,template:Jr},Symbol.toStringTag,{value:"Module"}));var gw=Object.create,Do=Object.defineProperty,bw=Object.getOwnPropertyDescriptor,fw=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),hi=t=>{throw TypeError(t)},Bc=(t,e,i)=>e in t?Do(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,ad=(t,e)=>Do(t,"name",{value:e,configurable:!0}),vw=t=>[,,,gw(null)],jc=["class","method","getter","setter","accessor","field","value","get","set"],jt=t=>t!==void 0&&typeof t!="function"?hi("Function expected"):t,_w=(t,e,i,r,a)=>({kind:jc[t],name:e,metadata:r,addInitializer:n=>i._?hi("Already initialized"):a.push(jt(n||null))}),yw=(t,e)=>Bc(e,fw("metadata"),t[3]),Xr=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)e&1?n[a].call(i):r=n[a].call(i,r);return r},Vc=(t,e,i,r,a,n)=>{var l,d,u,s,m,o=e&7,g=!!(e&8),c=!!(e&16),p=o>3?t.length+1:o?g?1:2:0,_=jc[o+5],w=o>3&&(t[p-1]=[]),x=t[p]||(t[p]=[]),b=o&&(!c&&!g&&(a=a.prototype),o<5&&(o>3||!c)&&bw(o<4?a:{get[i](){return rd(this,n)},set[i](h){return nd(this,n,h)}},i));o?c&&o<4&&ad(n,(o>2?"set ":o>1?"get ":"")+i):ad(a,i);for(var y=r.length-1;y>=0;y--)s=_w(o,i,u={},t[3],x),o&&(s.static=g,s.private=c,m=s.access={has:c?h=>Sw(a,h):h=>i in h},o^3&&(m.get=c?h=>(o^1?rd:Cw)(h,a,o^4?n:b.get):h=>h[i]),o>2&&(m.set=c?(h,S)=>nd(h,a,S,o^4?n:b.set):(h,S)=>h[i]=S)),d=(0,r[y])(o?o<4?c?n:b[_]:o>4?void 0:{get:b.get,set:b.set}:a,s),u._=1,o^4||d===void 0?jt(d)&&(o>4?w.unshift(d):o?c?n=d:b[_]=d:a=d):typeof d!="object"||d===null?hi("Object expected"):(jt(l=d.get)&&(b.get=l),jt(l=d.set)&&(b.set=l),jt(l=d.init)&&w.unshift(l));return o||yw(t,a),b&&Do(a,i,b),c?o^4?n:b:a},Ne=(t,e,i)=>Bc(t,typeof e!="symbol"?e+"":e,i),Mo=(t,e,i)=>e.has(t)||hi("Cannot "+i),Sw=(t,e)=>Object(e)!==e?hi('Cannot use the "in" operator on this value'):t.has(e),rd=(t,e,i)=>(Mo(t,e,"read from private field"),i?i.call(t):e.get(t)),nd=(t,e,i,r)=>(Mo(t,e,"write to private field"),r?r.call(t,i):e.set(t,i),i),Cw=(t,e,i)=>(Mo(t,e,"access private method"),i),Hc,Uc,bt;Uc=[T(hw)],Hc=[O()];class ft{constructor(){Ne(this,"model",Xr(bt,8,this)),Xr(bt,11,this),Ne(this,"innerColDefs",[]),Ne(this,"innerGridOptions"),Ne(this,"aureliaGrid"),Ne(this,"innerDataset",[]),Ne(this,"showGrid",!1),Ne(this,"gridId",""),Ne(this,"innerGridClass","")}attached(){this.gridId=`innergrid-${this.model.id}`,this.innerGridClass=`row-detail-${this.model.id}`,this.defineGrid(),this.innerDataset=[...this.model.orderData],this.showGrid=!0}aureliaGridReady(e){this.aureliaGrid=e}defineGrid(){let e;if(this.model.isUsingInnerGridStatePresets){const i=sessionStorage.getItem(`gridstate_${this.innerGridClass}`);i&&(e=JSON.parse(i))}this.innerColDefs=[{id:"orderId",field:"orderId",name:"Order ID",filterable:!0,sortable:!0},{id:"shipCity",field:"shipCity",name:"Ship City",filterable:!0,sortable:!0},{id:"freight",field:"freight",name:"Freight",filterable:!0,sortable:!0,type:"number"},{id:"shipName",field:"shipName",name:"Ship Name",filterable:!0,sortable:!0}],this.innerGridOptions={autoResize:{container:`.${this.innerGridClass}`,rightPadding:30,minHeight:200},enableFiltering:!0,enableSorting:!0,rowHeight:33,enableCellNavigation:!0,datasetIdPropertyName:"orderId",presets:e,rowTopOffsetRenderType:"top"}}handleBeforeGridDestroy(){if(console.log("handleBeforeGridDestroy",this.model),this.model.isUsingInnerGridStatePresets){const e=this.aureliaGrid.gridStateService.getCurrentGridState();sessionStorage.setItem(`gridstate_${this.innerGridClass}`,JSON.stringify(e))}}}bt=vw();Vc(bt,5,"model",Hc,ft);ft=Vc(bt,0,"Example45DetailView",Uc,ft);Xr(bt,1,ft);var ww=Object.create,Po=Object.defineProperty,xw=Object.getOwnPropertyDescriptor,Tw=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),qc=t=>{throw TypeError(t)},Ew=(t,e,i)=>e in t?Po(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,$w=(t,e)=>Po(t,"name",{value:e,configurable:!0}),kw=t=>[,,,ww(null)],Ow=["class","method","getter","setter","accessor","field","value","get","set"],Yc=t=>t!==void 0&&typeof t!="function"?qc("Function expected"):t,Dw=(t,e,i,r,a)=>({kind:Ow[t],name:e,metadata:r,addInitializer:n=>i._?qc("Already initialized"):a.push(Yc(n||null))}),Mw=(t,e)=>Ew(e,Tw("metadata"),t[3]),Pw=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},Iw=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&xw(a,i));$w(a,i);for(var p=r.length-1;p>=0;p--)u=Dw(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,Yc(l)&&(a=l);return Mw(t,a),c&&Po(a,i,c),m?s^4?n:c:a},Kc,Io;Kc=[T({name:"example45-preload",template:`<div class="container-fluid d-flex align-items-center" style="margin-top: 10px">
    <i class="mdi mdi-sync mdi-spin font-50px"></i>
    <h4>Loading...</h4>
  </div>`})];class ai{dispose(){console.log("preload detaching")}}Io=kw();ai=Iw(Io,0,"Example45Preload",Kc,ai);Pw(Io,1,ai);const Qc="example47-detail-view",en=`<div class="container-fluid" style="margin-top: 10px">
  <h3>\${model.title}</h3>
  <div class="row">
    <div class="col-3 detail-label"><label>Assignee:</label> <input class="form-control assignee" value.bind="model.assignee" /></div>
    <div class="col-3 detail-label"><label>Reporter:</label> <span>\${model.reporter}</span></div>
    <div class="col-3 detail-label"><label>Duration:</label> <span>\${model.duration}</span></div>
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
`,Zc=[],Jc={};let Na;function Gw(t){Na||(Na=E.define({name:Qc,template:en,dependencies:Zc,bindables:Jc})),t.register(Na)}const Fw=Object.freeze(Object.defineProperty({__proto__:null,bindables:Jc,default:en,dependencies:Zc,name:Qc,register:Gw,template:en},Symbol.toStringTag,{value:"Module"}));function Dt(t,e,i=!0){const r=Math.random()*(e-t+1)+t;return i?Math.floor(r):r}function tn(t,e,i=2e3){const r=document.createElement("div");r.setAttribute("popover",""),r.className=`toast align-items-center text-bg-${e} border-0`,r.style.position="absolute",r.style.zIndex="9999";const a=document.createElement("div");if(a.className="toast-body",a.textContent=t,r.appendChild(a),document.body.appendChild(r),typeof r.showPopover=="function"){r.style.display="block",r.style.margin="0 auto",r.style.marginTop="20px",r.style.borderWidth="0px",r.showPopover(),setTimeout(()=>{r.hidePopover(),r.remove()},i);return}}function lt(t){const e=parseInt(t,10);return e<10?`0${e}`:e}var Aw=Object.create,Go=Object.defineProperty,Rw=Object.getOwnPropertyDescriptor,Lw=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),gi=t=>{throw TypeError(t)},Xc=(t,e,i)=>e in t?Go(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,od=(t,e)=>Go(t,"name",{value:e,configurable:!0}),zw=t=>[,,,Aw(null)],eu=["class","method","getter","setter","accessor","field","value","get","set"],Vt=t=>t!==void 0&&typeof t!="function"?gi("Function expected"):t,Nw=(t,e,i,r,a)=>({kind:eu[t],name:e,metadata:r,addInitializer:n=>i._?gi("Already initialized"):a.push(Vt(n||null))}),Ww=(t,e)=>Xc(e,Lw("metadata"),t[3]),ce=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)e&1?n[a].call(i):r=n[a].call(i,r);return r},$t=(t,e,i,r,a,n)=>{var l,d,u,s,m,o=e&7,g=!!(e&8),c=!!(e&16),p=o>3?t.length+1:o?g?1:2:0,_=eu[o+5],w=o>3&&(t[p-1]=[]),x=t[p]||(t[p]=[]),b=o&&(!c&&!g&&(a=a.prototype),o<5&&(o>3||!c)&&Rw(o<4?a:{get[i](){return ld(this,n)},set[i](h){return sd(this,n,h)}},i));o?c&&o<4&&od(n,(o>2?"set ":o>1?"get ":"")+i):od(a,i);for(var y=r.length-1;y>=0;y--)s=Nw(o,i,u={},t[3],x),o&&(s.static=g,s.private=c,m=s.access={has:c?h=>Bw(a,h):h=>i in h},o^3&&(m.get=c?h=>(o^1?ld:jw)(h,a,o^4?n:b.get):h=>h[i]),o>2&&(m.set=c?(h,S)=>sd(h,a,S,o^4?n:b.set):(h,S)=>h[i]=S)),d=(0,r[y])(o?o<4?c?n:b[_]:o>4?void 0:{get:b.get,set:b.set}:a,s),u._=1,o^4||d===void 0?Vt(d)&&(o>4?w.unshift(d):o?c?n=d:b[_]=d:a=d):typeof d!="object"||d===null?gi("Object expected"):(Vt(l=d.get)&&(b.get=l),Vt(l=d.set)&&(b.set=l),Vt(l=d.init)&&w.unshift(l));return o||Ww(t,a),b&&Go(a,i,b),c?o^4?n:b:a},Mt=(t,e,i)=>Xc(t,typeof e!="symbol"?e+"":e,i),Fo=(t,e,i)=>e.has(t)||gi("Cannot "+i),Bw=(t,e)=>Object(e)!==e?gi('Cannot use the "in" operator on this value'):t.has(e),ld=(t,e,i)=>(Fo(t,e,"read from private field"),i?i.call(t):e.get(t)),sd=(t,e,i,r)=>(Fo(t,e,"write to private field"),r?r.call(t,i):e.set(t,i),i),jw=(t,e,i)=>(Fo(t,e,"access private method"),i),tu,iu,au,ru,nu,ou,R;ou=[T(Fw)],nu=[O()],ru=[O()],au=[O()],iu=[O()],tu=[O()];class Se{constructor(){Mt(this,"model",ce(R,8,this)),ce(R,11,this),Mt(this,"addon",ce(R,12,this)),ce(R,15,this),Mt(this,"grid",ce(R,16,this)),ce(R,19,this),Mt(this,"dataView",ce(R,20,this)),ce(R,23,this),Mt(this,"parentRef",ce(R,24,this)),ce(R,27,this)}alertAssignee(e){alert(typeof e=="string"?`Assignee on this task is: ${e.toUpperCase()}`:"No one is assigned to this task.")}deleteRow(e){confirm(`Are you sure that you want to delete ${e.title}?`)&&(this.addon.collapseAll(),this.dataView.deleteItem(e.id),tn(`Deleted row with ${e.title}`,"danger"))}showNotification(e){tn(`We just called Parent Method from the Row Detail Child Component on ${e.title}`,"info")}}R=zw();$t(R,5,"model",nu,Se);$t(R,5,"addon",ru,Se);$t(R,5,"grid",au,Se);$t(R,5,"dataView",iu,Se);$t(R,5,"parentRef",tu,Se);Se=$t(R,0,"Example47DetailView",ou,Se);ce(R,1,Se);const lu="filter-select",an=`<div>
  <span if.bind="model.collection">
    <select class="form-control form-select" value.bind="selectedItem" matcher.bind="itemMatcher">
      <option repeat.for="item of model.collection" model.bind="item">\${item.name}</option>
    </select>
  </span>
</div>
`,su=[],du={};let Wa;function Vw(t){Wa||(Wa=E.define({name:lu,template:an,dependencies:su,bindables:du})),t.register(Wa)}const Hw=Object.freeze(Object.defineProperty({__proto__:null,bindables:du,default:an,dependencies:su,name:lu,register:Vw,template:an},Symbol.toStringTag,{value:"Module"}));var Uw=Object.create,Ao=Object.defineProperty,qw=Object.getOwnPropertyDescriptor,Yw=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),bi=t=>{throw TypeError(t)},cu=(t,e,i)=>e in t?Ao(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,dd=(t,e)=>Ao(t,"name",{value:e,configurable:!0}),Kw=t=>[,,,Uw(null)],uu=["class","method","getter","setter","accessor","field","value","get","set"],Ht=t=>t!==void 0&&typeof t!="function"?bi("Function expected"):t,Qw=(t,e,i,r,a)=>({kind:uu[t],name:e,metadata:r,addInitializer:n=>i._?bi("Already initialized"):a.push(Ht(n||null))}),Zw=(t,e)=>cu(e,Yw("metadata"),t[3]),it=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)e&1?n[a].call(i):r=n[a].call(i,r);return r},Pa=(t,e,i,r,a,n)=>{var l,d,u,s,m,o=e&7,g=!!(e&8),c=!!(e&16),p=o>3?t.length+1:o?g?1:2:0,_=uu[o+5],w=o>3&&(t[p-1]=[]),x=t[p]||(t[p]=[]),b=o&&(!c&&!g&&(a=a.prototype),o<5&&(o>3||!c)&&qw(o<4?a:{get[i](){return cd(this,n)},set[i](h){return ud(this,n,h)}},i));o?c&&o<4&&dd(n,(o>2?"set ":o>1?"get ":"")+i):dd(a,i);for(var y=r.length-1;y>=0;y--)s=Qw(o,i,u={},t[3],x),o&&(s.static=g,s.private=c,m=s.access={has:c?h=>Jw(a,h):h=>i in h},o^3&&(m.get=c?h=>(o^1?cd:Xw)(h,a,o^4?n:b.get):h=>h[i]),o>2&&(m.set=c?(h,S)=>ud(h,a,S,o^4?n:b.set):(h,S)=>h[i]=S)),d=(0,r[y])(o?o<4?c?n:b[_]:o>4?void 0:{get:b.get,set:b.set}:a,s),u._=1,o^4||d===void 0?Ht(d)&&(o>4?w.unshift(d):o?c?n=d:b[_]=d:a=d):typeof d!="object"||d===null?bi("Object expected"):(Ht(l=d.get)&&(b.get=l),Ht(l=d.set)&&(b.set=l),Ht(l=d.init)&&w.unshift(l));return o||Zw(t,a),b&&Ao(a,i,b),c?o^4?n:b:a},Pt=(t,e,i)=>cu(t,typeof e!="symbol"?e+"":e,i),Ro=(t,e,i)=>e.has(t)||bi("Cannot "+i),Jw=(t,e)=>Object(e)!==e?bi('Cannot use the "in" operator on this value'):t.has(e),cd=(t,e,i)=>(Ro(t,e,"read from private field"),i?i.call(t):e.get(t)),ud=(t,e,i,r)=>(Ro(t,e,"write to private field"),r?r.call(t,i):e.set(t,i),i),Xw=(t,e,i)=>(Ro(t,e,"access private method"),i),mu,pu,hu,gu,ee;gu=[T(Hw)],hu=[O()],pu=[O()],mu=[O];class ze{constructor(e=M(HTMLElement)){Pt(this,"elm",e),Pt(this,"model",it(ee,8,this)),it(ee,11,this),Pt(this,"grid",it(ee,12,this)),it(ee,15,this),Pt(this,"selectedItem",it(ee,16,this)),it(ee,19,this),Pt(this,"itemMatcher",(i,r)=>i&&r&&i.id===r.id)}focus(){this.elm.querySelector("select")?.focus()}selectedItemChanged(){}}ee=Kw();Pa(ee,5,"model",hu,ze);Pa(ee,5,"grid",pu,ze);Pa(ee,5,"selectedItem",mu,ze);ze=Pa(ee,0,"FilterSelect",gu,ze);it(ee,1,ze);const ex="modulepreload",tx=function(t,e){return new URL(t,e).href},md={},$=function(e,i,r){let a=Promise.resolve();if(i&&i.length>0){let s=function(m){return Promise.all(m.map(o=>Promise.resolve(o).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};const l=document.getElementsByTagName("link"),d=document.querySelector("meta[property=csp-nonce]"),u=d?.nonce||d?.getAttribute("nonce");a=s(i.map(m=>{if(m=tx(m,r),m in md)return;md[m]=!0;const o=m.endsWith(".css"),g=o?'[rel="stylesheet"]':"";if(r)for(let p=l.length-1;p>=0;p--){const _=l[p];if(_.href===m&&(!o||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${m}"]${g}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":ex,o||(c.as="script"),c.crossOrigin="",c.href=m,u&&c.setAttribute("nonce",u),document.head.appendChild(c),o)return new Promise((p,_)=>{c.addEventListener("load",p),c.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${m}`)))})}))}function n(l){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=l,window.dispatchEvent(d),!d.defaultPrevented)throw l}return a.then(l=>{for(const d of l||[])d.status==="rejected"&&n(d.reason);return e().catch(n)})},ix=""+new URL("aurelia-logo-9YSzF-gF.png",import.meta.url).href,ax=`<div>
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
`;var rx=Object.create,Lo=Object.defineProperty,nx=Object.getOwnPropertyDescriptor,ox=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),bu=t=>{throw TypeError(t)},fu=(t,e,i)=>e in t?Lo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,lx=(t,e)=>Lo(t,"name",{value:e,configurable:!0}),sx=t=>[,,,rx(null)],dx=["class","method","getter","setter","accessor","field","value","get","set"],vu=t=>t!==void 0&&typeof t!="function"?bu("Function expected"):t,cx=(t,e,i,r,a)=>({kind:dx[t],name:e,metadata:r,addInitializer:n=>i._?bu("Already initialized"):a.push(vu(n||null))}),ux=(t,e)=>fu(e,ox("metadata"),t[3]),mx=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},px=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&nx(a,i));lx(a,i);for(var p=r.length-1;p>=0;p--)u=cx(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,vu(l)&&(a=l);return ux(t,a),c&&Lo(a,i,c),m?s^4?n:c:a},pd=(t,e,i)=>fu(t,typeof e!="symbol"?e+"":e,i),_u,zo;const yu=[{path:"",redirectTo:"example01"},{path:"example01",component:()=>$(()=>Promise.resolve().then(()=>Ex),void 0,import.meta.url),title:"1- Basic Grid / 2 Grids"},{path:"example02",component:()=>$(()=>Promise.resolve().then(()=>Wx),void 0,import.meta.url),title:"2- Formatters"},{path:"example03",component:()=>$(()=>Promise.resolve().then(()=>s1),void 0,import.meta.url),title:"3- Editors / Delete"},{path:"example04",component:()=>$(()=>Promise.resolve().then(()=>w1),void 0,import.meta.url),title:"4- Client Side Sort/Filter"},{path:"example05",component:()=>$(()=>Promise.resolve().then(()=>L1),void 0,import.meta.url),title:"5- Backend OData Service"},{path:"example06",component:()=>$(()=>Promise.resolve().then(()=>X1),void 0,import.meta.url),title:"6- Backend GraphQL Service"},{path:"example07",component:()=>$(()=>Promise.resolve().then(()=>mT),void 0,import.meta.url),title:"7- Header Button Plugin"},{path:"example08",component:()=>$(()=>Promise.resolve().then(()=>TT),void 0,import.meta.url),title:"8- Header Menu Plugin"},{path:"example09",component:()=>$(()=>Promise.resolve().then(()=>LT),void 0,import.meta.url),title:"9- Grid Menu Control"},{path:"example10",component:()=>$(()=>Promise.resolve().then(()=>KT),void 0,import.meta.url),title:"10- Row Selection / 2 Grids"},{path:"example11",component:()=>$(()=>Promise.resolve().then(()=>sE),void 0,import.meta.url),title:"11- Add/Update Grid Item"},{path:"example12",component:()=>$(()=>Promise.resolve().then(()=>CE),void 0,import.meta.url),title:"12- Localization (i18n)"},{path:"example13",component:()=>$(()=>Promise.resolve().then(()=>AE),void 0,import.meta.url),title:"13- Grouping & Aggregators"},{path:"example14",component:()=>$(()=>Promise.resolve().then(()=>KE),void 0,import.meta.url),title:"14- Column Span & Header Grouping"},{path:"example15",component:()=>$(()=>Promise.resolve().then(()=>s$),void 0,import.meta.url),title:"15- Grid State & Local Storage"},{path:"example16",component:()=>$(()=>Promise.resolve().then(()=>S$),void 0,import.meta.url),title:"16- Row Move Plugin"},{path:"example17",component:()=>$(()=>Promise.resolve().then(()=>F$),void 0,import.meta.url),title:"17- Grid from CSV"},{path:"example18",component:()=>$(()=>Promise.resolve().then(()=>K$),void 0,import.meta.url),title:"18- Draggable Grouping"},{path:"example19",component:()=>$(()=>Promise.resolve().then(()=>sk),void 0,import.meta.url),title:"19- Row Detail View"},{path:"example20",component:()=>$(()=>Promise.resolve().then(()=>Sk),void 0,import.meta.url),title:"20- Pinned Columns/Rows"},{path:"example21",component:()=>$(()=>Promise.resolve().then(()=>Pk),void 0,import.meta.url),title:"21- Grid AutoHeight (full height)"},{path:"example22",component:()=>$(()=>Promise.resolve().then(()=>Hk),void 0,import.meta.url),title:"22- with Bootstrap Tabs"},{path:"example23",component:()=>$(()=>Promise.resolve().then(()=>oO),void 0,import.meta.url),title:"23- Filter by Range of Values"},{path:"example24",component:()=>$(()=>Promise.resolve().then(()=>wO),void 0,import.meta.url),title:"24- Cell & Context Menu"},{path:"example25",component:()=>$(()=>Promise.resolve().then(()=>AO),void 0,import.meta.url),title:"25- GraphQL without Pagination"},{path:"example26",component:()=>$(()=>Promise.resolve().then(()=>tD),void 0,import.meta.url),title:"26- Use of Aurelia Components"},{path:"example27",component:()=>$(()=>Promise.resolve().then(()=>gD),void 0,import.meta.url),title:"27- Tree Data (Parent/Child)"},{path:"example28",component:()=>$(()=>Promise.resolve().then(()=>ED),void 0,import.meta.url),title:"28- Tree Data (Hierarchical set)"},{path:"example29",component:()=>$(()=>Promise.resolve().then(()=>JD),void 0,import.meta.url),title:"29- Grid with header and footer slots"},{path:"example30",component:()=>$(()=>Promise.resolve().then(()=>g2),void 0,import.meta.url),title:"30- Composite Editor Modal"},{path:"example31",component:()=>$(()=>Promise.resolve().then(()=>O2),void 0,import.meta.url),title:"31- Backend OData with RxJS"},{path:"example32",component:()=>$(()=>Promise.resolve().then(()=>H2),void 0,import.meta.url),title:"32- Columns Resize by Content"},{path:"example33",component:()=>$(()=>Promise.resolve().then(()=>nM),void 0,import.meta.url),title:"33- Regular & Custom Tooltip"},{path:"example34",component:()=>$(()=>Promise.resolve().then(()=>wM),void 0,import.meta.url),title:"34- Real-Time Trading Platform"},{path:"example35",component:()=>$(()=>Promise.resolve().then(()=>LM),void 0,import.meta.url),title:"35- Row Based Editing"},{path:"example36",component:()=>$(()=>Promise.resolve().then(()=>XM),void 0,import.meta.url),title:"36- Excel Export Formulas"},{path:"example37",component:()=>$(()=>Promise.resolve().then(()=>pP),void 0,import.meta.url),title:"37- Footer Totals Row"},{path:"example38",component:()=>$(()=>Promise.resolve().then(()=>kP),void 0,import.meta.url),title:"38- Infinite Scroll with OData"},{path:"example39",component:()=>$(()=>Promise.resolve().then(()=>BP),void 0,import.meta.url),title:"39- Infinite Scroll with GraphQL"},{path:"example40",component:()=>$(()=>Promise.resolve().then(()=>tI),void 0,import.meta.url),title:"40- Infinite Scroll from JSON data"},{path:"example41",component:()=>$(()=>Promise.resolve().then(()=>hI),void 0,import.meta.url),title:"41- Drag & Drop"},{path:"example42",component:()=>$(()=>Promise.resolve().then(()=>EI),void 0,import.meta.url),title:"42- Custom Pagination"},{path:"example43",component:()=>$(()=>Promise.resolve().then(()=>zI),void 0,import.meta.url),title:"43- Colspan/Rowspan (timesheets)"},{path:"example44",component:()=>$(()=>Promise.resolve().then(()=>JI),void 0,import.meta.url),title:"44- Colspan/Rowspan (large data)"},{path:"example45",component:()=>$(()=>Promise.resolve().then(()=>uG),void 0,import.meta.url),title:"45- Row Detail with inner Grid"},{path:"example46",component:()=>$(()=>Promise.resolve().then(()=>CG),void 0,import.meta.url),title:"46- Tree Data with Lazy Loading"},{path:"example47",component:()=>$(()=>Promise.resolve().then(()=>FG),void 0,import.meta.url),title:"47- Row Detail + Grouping"},{path:"example48",component:()=>$(()=>Promise.resolve().then(()=>YG),void 0,import.meta.url),title:"48- Hybrid Selection Model"},{path:"example49",component:()=>$(()=>Promise.resolve().then(()=>lF),void 0,import.meta.url),title:"49- Spreadsheet Drag-Fill"},{path:"example50",component:()=>$(()=>Promise.resolve().then(()=>yF),void 0,import.meta.url),title:"50- Master/Detail Grids"},{path:"example51",component:()=>$(()=>Promise.resolve().then(()=>GF),void 0,import.meta.url),title:"51- Menus with Slots"},{path:"example52",component:()=>$(()=>Promise.resolve().then(()=>QF),void 0,import.meta.url),title:"52- SQL Backend Service"},{path:"home",component:()=>$(()=>Promise.resolve().then(()=>cA),void 0,import.meta.url),title:"Home"}];_u=[Dv({routes:yu,fallback:"example01"}),T({name:"my-app",template:ax})];class Ai{constructor(){pd(this,"aureliaLogo",ix),pd(this,"routes",yu)}attached(){this.addGitHubStarsLogo(),setTimeout(()=>{document.querySelector(".nav-link.active")?.scrollIntoView({block:"nearest"})},45)}addGitHubStarsLogo(){if(decodeURIComponent(document.cookie)!=="serve-mode=cypress"){const i=document.createElement("a");i.href="https://github.com/ghiscoding/slickgrid-universal/tree/master/frameworks/aurelia-slickgrid";const r=document.createElement("img");r.src="https://img.shields.io/github/stars/ghiscoding/slickgrid-universal?style=social";const a=document.querySelector(".github-button-container");a&&!a.querySelector("a")&&(i.appendChild(r),a.appendChild(i))}}}zo=sx();Ai=px(zo,0,"MyApp",_u,Ai);mx(zo,1,Ai);Mv.register(Pv.customize({activeClass:"active",useUrlFragmentHash:!0,useHref:!0}),mt,gt,ye,ft,ai,Se,pt,Ye,ze).register(Iv.customize(t=>{t.translationAttributeAliases=["i18n","tr"],t.initOptions={resources:{en:{translation:jy},fr:{translation:z0}},lng:"en",fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1}}})).register(Gv.customize(t=>{t.options.gridMenu.iconCssClass="mdi mdi-menu",t.options.sanitizer=e=>Fv.sanitize(e,{ADD_ATTR:["level"],RETURN_TRUSTED_TYPE:!0})})).register(Gi,Fi,Ii).app(Ai).start();const Su="example01",rn=`<h2>
  Example 1: Basic Grids
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example01.ts"
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
    <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="resetGrid1()" data-test="reset-grid1">
      <span class="mdi mdi-alert-rhombus-outline"></span>
      <span>Reset Grid (display all columns)</span>
    </button>
  </div>
</h3>

<div class="grid-container1">
  <aurelia-slickgrid
    grid-id="grid1-1"
    columns.bind="columns1"
    options.bind="gridOptions1"
    dataset.bind="dataset1"
    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
  >
  </aurelia-slickgrid>
</div>

<hr />

<h3>Grid 2 <small>(with local Pagination)</small></h3>
<aurelia-slickgrid grid-id="grid1-2" columns.bind="columns2" options.bind="gridOptions2" dataset.bind="dataset2"> </aurelia-slickgrid>
`,Cu=[],wu={};let Ba;function hx(t){Ba||(Ba=E.define({name:Su,template:rn,dependencies:Cu,bindables:wu})),t.register(Ba)}const gx=Object.freeze(Object.defineProperty({__proto__:null,bindables:wu,default:rn,dependencies:Cu,name:Su,register:hx,template:rn},Symbol.toStringTag,{value:"Module"}));var bx=Object.create,No=Object.defineProperty,fx=Object.getOwnPropertyDescriptor,vx=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),xu=t=>{throw TypeError(t)},Tu=(t,e,i)=>e in t?No(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,_x=(t,e)=>No(t,"name",{value:e,configurable:!0}),yx=t=>[,,,bx(null)],Sx=["class","method","getter","setter","accessor","field","value","get","set"],Eu=t=>t!==void 0&&typeof t!="function"?xu("Function expected"):t,Cx=(t,e,i,r,a)=>({kind:Sx[t],name:e,metadata:r,addInitializer:n=>i._?xu("Already initialized"):a.push(Eu(n||null))}),wx=(t,e)=>Tu(e,vx("metadata"),t[3]),xx=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},Tx=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&fx(a,i));_x(a,i);for(var p=r.length-1;p>=0;p--)u=Cx(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,Eu(l)&&(a=l);return wx(t,a),c&&No(a,i,c),m?s^4?n:c:a},Te=(t,e,i)=>Tu(t,typeof e!="symbol"?e+"":e,i),$u,Wo;const hd=995;$u=[T(gx)];class Ri{constructor(){Te(this,"_darkModeGrid1",!1),Te(this,"aureliaGrid1"),Te(this,"gridOptions1"),Te(this,"gridOptions2"),Te(this,"columns1",[]),Te(this,"columns2",[]),Te(this,"dataset1",[]),Te(this,"dataset2",[]),Te(this,"hideSubTitle",!1),this.defineGrids()}attached(){this.dataset1=this.mockData(hd),this.dataset2=this.mockData(hd)}aureliaGridReady(e){this.aureliaGrid1=e}isBrowserDarkModeEnabled(){return window.matchMedia?.("(prefers-color-scheme: dark)").matches??!1}detaching(){document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light"}defineGrids(){this.columns1=[{id:"title",name:"Title",field:"title",sortable:!0,minWidth:100},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,minWidth:100},{id:"%",name:"% Complete",field:"percentComplete",sortable:!0,minWidth:100},{id:"start",name:"Start",field:"start",formatter:f.dateIso},{id:"finish",name:"Finish",field:"finish",formatter:f.dateIso},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",sortable:!0,minWidth:100}],this._darkModeGrid1=this.isBrowserDarkModeEnabled(),this.gridOptions1={darkMode:this._darkModeGrid1,gridHeight:225,gridWidth:800,enableAutoResize:!1,enableSorting:!0},this.columns2=this.columns1,this.gridOptions2={...this.gridOptions1,darkMode:!1,enablePagination:!0,pagination:{pageSizes:[5,10,20,25,50],pageSize:5}}}mockData(e){const i=[];for(let r=0;r<e;r++){const a=2e3+Math.floor(Math.random()*10),n=Math.floor(Math.random()*11),l=Math.floor(Math.random()*29),d=Math.round(Math.random()*100);i[r]={id:r,title:"Task "+r,duration:Math.round(Math.random()*100)+"",percentComplete:d,start:`${lt(a)}-${lt(n+1)}-${lt(l)}`,finish:`${lt(a+1)}-${lt(n+1)}-${lt(l)}`,effortDriven:r%5===0}}return i}resetGrid1(){const e=this.columns1.slice();e.forEach(i=>i.hidden=!1),this.aureliaGrid1.slickGrid?.setColumns(e),this.aureliaGrid1.slickGrid?.autosizeColumns()}toggleDarkModeGrid1(){this._darkModeGrid1=!this._darkModeGrid1,this._darkModeGrid1?document.querySelector(".grid-container1")?.classList.add("dark-mode"):document.querySelector(".grid-container1")?.classList.remove("dark-mode"),this.aureliaGrid1.slickGrid?.setOptions({darkMode:this._darkModeGrid1})}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden")}}Wo=yx();Ri=Tx(Wo,0,"Example01",$u,Ri);xx(Wo,1,Ri);const Ex=Object.freeze(Object.defineProperty({__proto__:null,get Example01(){return Ri}},Symbol.toStringTag,{value:"Module"})),ku="example02",nn=`<h2>
  Example 2: Grid with Formatters
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example02.ts"
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
<button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="disposeGrid()">Dispose Grid</button>

<aurelia-slickgrid grid-id="grid2" columns.bind="columns" options.bind="gridOptions" dataset.bind="dataset" instances.bind="aureliaGrid">
</aurelia-slickgrid>
`,Ou=[],Du={};let ja;function $x(t){ja||(ja=E.define({name:ku,template:nn,dependencies:Ou,bindables:Du})),t.register(ja)}const kx=Object.freeze(Object.defineProperty({__proto__:null,bindables:Du,default:nn,dependencies:Ou,name:ku,register:$x,template:nn},Symbol.toStringTag,{value:"Module"}));var Ox=Object.create,Bo=Object.defineProperty,Dx=Object.getOwnPropertyDescriptor,Mx=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Mu=t=>{throw TypeError(t)},Pu=(t,e,i)=>e in t?Bo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Px=(t,e)=>Bo(t,"name",{value:e,configurable:!0}),Ix=t=>[,,,Ox(null)],Gx=["class","method","getter","setter","accessor","field","value","get","set"],Iu=t=>t!==void 0&&typeof t!="function"?Mu("Function expected"):t,Fx=(t,e,i,r,a)=>({kind:Gx[t],name:e,metadata:r,addInitializer:n=>i._?Mu("Already initialized"):a.push(Iu(n||null))}),Ax=(t,e)=>Pu(e,Mx("metadata"),t[3]),Rx=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},Lx=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&Dx(a,i));Px(a,i);for(var p=r.length-1;p>=0;p--)u=Fx(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,Iu(l)&&(a=l);return Ax(t,a),c&&Bo(a,i,c),m?s^4?n:c:a},st=(t,e,i)=>Pu(t,typeof e!="symbol"?e+"":e,i),Gu,jo;const zx=(t,e,i)=>i?'<i class="mdi mdi-fire red" aria-hidden="true"></i>':{text:'<i class="mdi mdi-snowflake" aria-hidden="true"></i>',addClasses:"lightblue",toolTip:"Freezing"},Nx=(t,e,i)=>`<span style="margin-left: 5px">
      <button class="btn btn-xs btn-default btn-icon">
        <i class="mdi ${i?"mdi-check-circle":"mdi-circle"}" style="color: ${i?"black":"lavender"}"></i>
      </button>
    </span>`;Gu=[T(kx)];class Li{constructor(){st(this,"aureliaGrid"),st(this,"gridOptions"),st(this,"columns",[]),st(this,"dataset",[]),st(this,"hideSubTitle",!1),st(this,"resizerPaused",!1),this.defineGrid()}attached(){this.getData()}defineGrid(){this.columns=[{id:"title",name:"Title",field:"title",sortable:!0,width:70},{id:"phone",name:"Phone Number using mask",field:"phone",sortable:!0,type:"number",minWidth:100,formatter:f.mask,params:{mask:"(000) 000-0000"}},{id:"duration",name:"Duration (days)",field:"duration",formatter:f.decimal,params:{minDecimal:1,maxDecimal:2},sortable:!0,type:"number",minWidth:90,exportWithFormatter:!0},{id:"complete",name:"% Complete",field:"percentComplete",formatter:f.percentCompleteBar,type:"number",sortable:!0,minWidth:100},{id:"percent2",name:"% Complete",field:"percentComplete2",formatter:f.progressBar,type:"number",sortable:!0,minWidth:100},{id:"start",name:"Start",field:"start",formatter:f.dateIso,sortable:!0,type:"date",minWidth:90,exportWithFormatter:!0},{id:"finish",name:"Finish",field:"finish",formatter:f.dateIso,sortable:!0,type:"date",minWidth:90,exportWithFormatter:!0},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",formatter:zx,type:"number",sortable:!0,minWidth:100},{id:"completed",name:"Completed",field:"completed",type:"number",sortable:!0,minWidth:100,formatter:Nx,onCellClick:(e,i)=>{this.toggleCompletedProperty(i?.dataContext)}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableCellNavigation:!0,showCustomFooter:!0,customFooterOptions:{leftFooterText:"custom footer text",hideTotalItemCount:!0,hideLastUpdateTimestamp:!0},enableExcelCopyBuffer:!0}}disposeGrid(){this.aureliaGrid.dispose()}getData(){const e=[];for(let i=0;i<500;i++){const r=2e3+Math.floor(Math.random()*10),a=Math.floor(Math.random()*11),n=Math.floor(Math.random()*29),l=Math.round(Math.random()*100);e[i]={id:i,title:"Task "+i,phone:this.generatePhoneNumber(),duration:i%33===0?null:Math.random()*100+"",percentComplete:l,percentComplete2:l,percentCompleteNumber:l,start:new Date(r,a,n),finish:new Date(r,a+1,n),effortDriven:i%5===0}}this.dataset=e}generatePhoneNumber(){let e="";for(let i=0;i<10;i++)e+=Math.round(Math.random()*9)+"";return e}togglePauseResizer(){this.resizerPaused=!this.resizerPaused,this.aureliaGrid.resizerService.pauseResizer(this.resizerPaused)}toggleCompletedProperty(e){typeof e=="object"&&(e.completed=!e.completed,setTimeout(()=>{this.aureliaGrid.gridService.updateItemById(e.id,e,{highlightRow:!1})},250))}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}jo=Ix();Li=Lx(jo,0,"Example02",Gu,Li);Rx(jo,1,Li);const Wx=Object.freeze(Object.defineProperty({__proto__:null,get Example02(){return Li}},Symbol.toStringTag,{value:"Module"})),Fu="example03",on=`<h2>
  Example 3: Editors / Delete
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example03.ts"
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
    columns.bind="columns"
    options.bind="gridOptions"
    dataset.bind="dataset"
    instances.bind="aureliaGrid"
    on-cell-change.trigger="onCellChanged($event.detail.eventData, $event.detail.args)"
    on-click.trigger="onCellClicked($event.detail.eventData, $event.detail.args)"
    on-validation-error.trigger="onCellValidationError($event.detail.eventData, $event.detail.args)"
  >
  </aurelia-slickgrid>
</div>
`,Au=[],Ru={};let Va;function Bx(t){Va||(Va=E.define({name:Fu,template:on,dependencies:Au,bindables:Ru})),t.register(Va)}const jx=Object.freeze(Object.defineProperty({__proto__:null,bindables:Ru,default:on,dependencies:Au,name:Fu,register:Bx,template:on},Symbol.toStringTag,{value:"Module"}));var Vx=Object.defineProperty,Hx=(t,e,i)=>e in t?Vx(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Ti=(t,e,i)=>Hx(t,typeof e!="symbol"?e+"":e,i);class Ux{constructor(e){Ti(this,"args",e),Ti(this,"_lastInputEvent"),Ti(this,"inputElm"),Ti(this,"defaultValue"),this.init()}get columnDef(){return this.args?.column??{}}get columnEditor(){return this.columnDef?.editor??{}}get validator(){return this.columnEditor?.validator||this.columnDef?.validator}init(){const e=this.columnEditor?.placeholder||"";this.inputElm=document.createElement("input"),this.inputElm.className="editor-text",this.inputElm.placeholder=e,this.args.container.appendChild(this.inputElm),this.inputElm.addEventListener("keydown",this.handleKeydown.bind(this)),setTimeout(()=>{this.inputElm.focus(),this.inputElm.select()},50)}handleKeydown(e){this._lastInputEvent=e,(e.key==="ArrowLeft"||e.key==="ArrowRight")&&e.stopImmediatePropagation()}destroy(){this.inputElm.removeEventListener("keydown",this.handleKeydown.bind(this)),this.inputElm.remove()}focus(){this.inputElm.focus()}getValue(){return this.inputElm.value}setValue(e){this.inputElm.value=e}loadValue(e){this.defaultValue=e[this.args.column.field]||"",this.inputElm.value=this.defaultValue,this.inputElm.defaultValue=this.defaultValue,this.inputElm.select()}serializeValue(){return this.inputElm.value}applyValue(e,i){const r=this.validate(i);e[this.args.column.field]=r&&r.valid?i:""}isValueChanged(){const e=this._lastInputEvent?.key;return this.columnEditor?.alwaysSaveOnEnterKey&&e==="Enter"?!0:!(this.inputElm.value===""&&this.defaultValue===null)&&this.inputElm.value!==this.defaultValue}validate(e){if(this.validator){const i=e!==void 0?e:this.inputElm?.value;return this.validator(i,this.args)}return{valid:!0,msg:null}}}var qx=Object.defineProperty,Yx=(t,e,i)=>e in t?qx(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,We=(t,e,i)=>Yx(t,typeof e!="symbol"?e+"":e,i);class Vo{constructor(){We(this,"_clearFilterTriggered",!1),We(this,"_shouldTriggerQuery",!0),We(this,"filterElm"),We(this,"grid"),We(this,"searchTerms",[]),We(this,"columnDef"),We(this,"callback"),We(this,"operator","EQ")}get columnFilter(){return this.columnDef?.filter??{}}get gridOptions(){return this.grid?.getOptions()??{}}init(e){this.grid=e.grid,this.callback=e.callback,this.columnDef=e.columnDef,this.searchTerms=(e.hasOwnProperty("searchTerms")?e.searchTerms:[])||[];const i=Array.isArray(this.searchTerms)&&this.searchTerms.length>0?this.searchTerms[0]:"";this.filterElm=this.createDomElement(i),this.filterElm.addEventListener("keyup",this.handleKeyup.bind(this))}handleKeyup(e){let i=e.target?.value??"";const r=this.gridOptions.enableFilterTrimWhiteSpace||this.columnFilter.enableTrimWhiteSpace;typeof i=="string"&&r&&(i=i.trim()),this._clearFilterTriggered?(this.callback(e,{columnDef:this.columnDef,clearFilterTriggered:this._clearFilterTriggered,shouldTriggerQuery:this._shouldTriggerQuery}),this.filterElm.classList.remove("filled")):(i===""?this.filterElm.classList.remove("filled"):this.filterElm.classList.add("filled"),this.callback(e,{columnDef:this.columnDef,searchTerms:[i],shouldTriggerQuery:this._shouldTriggerQuery})),this._clearFilterTriggered=!1,this._shouldTriggerQuery=!0}clear(e=!0){this.filterElm&&(this._clearFilterTriggered=!0,this._shouldTriggerQuery=e,this.filterElm.value="",this.filterElm.dispatchEvent(new Event("keyup")))}destroy(){this.filterElm&&(this.filterElm.removeEventListener("keyup",this.handleKeyup),this.filterElm.remove())}setValues(e){e&&(this.filterElm.value=e)}createDomElement(e){const i=this.grid.getHeaderRowColumn(this.columnDef.id);qr(i);let r=this.gridOptions?.defaultFilterPlaceholder??"";this.columnFilter?.placeholder&&(r=this.columnFilter.placeholder);const a=document.createElement("input");a.className="form-control search-filter",a.placeholder=r;const n=e;return a.value=n,a.dataset.columnid=`${this.columnDef.id}`,i&&i.appendChild(a),a}}const gd=""+new URL("collection_100_numbers-DqRiakum.json",import.meta.url).href,zi=""+new URL("countries-DKOfcFpR.json",import.meta.url).href,bd=""+new URL("country_names-BQhs2ynd.json",import.meta.url).href,fd={timeout:5e3,jsonpCallback:"callback"},Kx=()=>`jsonp_${Date.now()}_${Math.ceil(Math.random()*1e5)}`,Ei=t=>delete window[t],Ha=t=>{const e=document.getElementById(t);e&&document.getElementsByTagName("head")[0].removeChild(e)};function vd(t,e={}){let i=t;const r=e.timeout||fd.timeout,a=e.jsonpCallback||fd.jsonpCallback;let n;return new Promise((l,d)=>{const u=e.jsonpCallbackFunction||Kx(),s=`${a}_${u}`;window[u]=o=>{l({ok:!0,json:()=>Promise.resolve(o)}),n&&clearTimeout(n),Ha(s),Ei(u)},i+=i.indexOf("?")===-1?"?":"&";const m=document.createElement("script");m.setAttribute("src",`${i}${a}=${u}`),e.charset&&m.setAttribute("charset",e.charset),e.nonce&&m.setAttribute("nonce",e.nonce),e.referrerPolicy&&m.setAttribute("referrerPolicy",e.referrerPolicy),e.crossorigin&&m.setAttribute("crossorigin","true"),m.id=s,document.getElementsByTagName("head")[0].appendChild(m),n=setTimeout(()=>{d(new Error(`JSONP request to ${t} timed out`)),Ei(u),Ha(s),window[u]=()=>{Ei(u)}},r),m.onerror=()=>{d(new Error(`JSONP request to ${t} failed`)),Ei(u),Ha(s),n&&clearTimeout(n)}})}var Qx=Object.create,Ho=Object.defineProperty,Zx=Object.getOwnPropertyDescriptor,Jx=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Lu=t=>{throw TypeError(t)},zu=(t,e,i)=>e in t?Ho(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Xx=(t,e)=>Ho(t,"name",{value:e,configurable:!0}),e1=t=>[,,,Qx(null)],t1=["class","method","getter","setter","accessor","field","value","get","set"],Nu=t=>t!==void 0&&typeof t!="function"?Lu("Function expected"):t,i1=(t,e,i,r,a)=>({kind:t1[t],name:e,metadata:r,addInitializer:n=>i._?Lu("Already initialized"):a.push(Nu(n||null))}),a1=(t,e)=>zu(e,Jx("metadata"),t[3]),r1=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},n1=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&Zx(a,i));Xx(a,i);for(var p=r.length-1;p>=0;p--)u=i1(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,Nu(l)&&(a=l);return a1(t,a),c&&Ho(a,i,c),m?s^4?n:c:a},q=(t,e,i)=>zu(t,typeof e!="symbol"?e+"":e,i),Wu,Uo;const o1=100,Ua=t=>t==null||!t.length?{valid:!1,msg:"This is a required field"}:/^Task\s\d+$/.test(t)?{valid:!0,msg:""}:{valid:!1,msg:'Your title is invalid, it must start with "Task" followed by a number'},l1=(t,e,i)=>{if(i&&Array.isArray(i)){const a=i.map(n=>`Task ${n}`).join(", ");return`<span title="${a}">${a}</span>`}return""};Wu=[T(jx)];class Ni{constructor(e=M(Ce(we)),i=M(xe)){q(this,"http",e),q(this,"i18n",i),q(this,"_commandQueue",[]),q(this,"aureliaGrid"),q(this,"gridOptions"),q(this,"columns",[]),q(this,"dataset",[]),q(this,"updatedObject"),q(this,"hideSubTitle",!1),q(this,"isAutoEdit",!0),q(this,"alertWarning"),q(this,"duplicateTitleHeaderCount",1),this.defineGrid()}attached(){this.dataset=this.mockData(o1)}defineGrid(){this.columns=[{id:"edit",field:"id",excludeFromColumnPicker:!0,excludeFromGridMenu:!0,excludeFromHeaderMenu:!0,formatter:f.icon,params:{iconCssClass:"mdi mdi-pencil pointer"},minWidth:30,maxWidth:30,onCellClick:(e,i)=>{console.log(i),this.alertWarning=`Editing: ${i.dataContext.title}`,this.aureliaGrid.gridService.highlightRow(i.row,1500),this.aureliaGrid.gridService.setSelectedRow(i.row)}},{id:"delete",field:"id",excludeFromColumnPicker:!0,excludeFromGridMenu:!0,excludeFromHeaderMenu:!0,formatter:f.icon,params:{iconCssClass:"mdi mdi-trash-can pointer"},minWidth:30,maxWidth:30},{id:"title",name:"Title",field:"title",filterable:!0,sortable:!0,editor:{model:C.longText,placeholder:"something",title:"some title",validator:Ua},minWidth:100,onCellChange:(e,i)=>{console.log(i),this.alertWarning=`Updated Title: ${i.dataContext.title}`}},{id:"title2",name:"Title, Custom Editor",field:"title",filterable:!0,sortable:!0,editor:{model:Ux,placeholder:"custom",validator:Ua},filter:{model:Vo,placeholder:"🔎︎ custom"},minWidth:70},{id:"duration",name:"Duration (days)",field:"duration",filterable:!0,minWidth:100,sortable:!0,type:"number",filter:{model:v.slider,options:{hideSliderNumber:!1}},editor:{model:C.slider,minValue:0,maxValue:100}},{id:"complete",name:"% Complete",field:"percentComplete",filterable:!0,formatter:f.multiple,type:"number",editor:{enableRenderHtml:!0,collection:Array.from(Array(101).keys()).map(e=>({value:e,label:e,symbol:'<i class="mdi mdi-percent-outline" style="color:cadetblue"></i>'})),customStructure:{value:"value",label:"label",labelSuffix:"symbol"},collectionSortBy:{property:"label",sortDesc:!0},collectionFilterBy:{property:"value",value:0,operator:"NE"},model:C.singleSelect},minWidth:100,params:{formatters:[f.collectionEditor,f.percentCompleteBar]}},{id:"start",name:"Start",field:"start",filterable:!0,filter:{model:v.compoundDate},formatter:f.dateIso,sortable:!0,minWidth:100,type:"date",editor:{model:C.date}},{id:"finish",name:"Finish",field:"finish",filterable:!0,filter:{model:v.compoundDate},formatter:f.dateIso,sortable:!0,minWidth:100,type:"date",saveOutputType:"dateUtc",editor:{model:C.date,options:{displayDateMin:"today"}}},{id:"cityOfOrigin",name:"City of Origin",field:"cityOfOrigin",filterable:!0,sortable:!0,minWidth:100,editor:{model:C.autocompleter,placeholder:"🔎︎ search city",options:{minLength:3,forceUserInput:!0,fetch:(e,i)=>{vd(`http://gd.geobytes.com/AutoCompleteCity?q=${e}`).then(r=>r.json()).then(r=>i(r)).catch(r=>console.log("invalid JSONP response",r))}}},filter:{model:v.autocompleter,options:{minLength:3,fetch:(e,i)=>{vd(`http://gd.geobytes.com/AutoCompleteCity?q=${e}`).then(r=>r.json()).then(r=>i(r)).catch(r=>console.log("invalid JSONP response",r))}}}},{id:"countryOfOrigin",name:"Country of Origin",field:"countryOfOrigin",formatter:f.complexObject,dataKey:"code",labelKey:"name",type:"object",sortComparer:ue.objectString,filterable:!0,sortable:!0,minWidth:100,editor:{model:C.autocompleter,customStructure:{label:"name",value:"code"},collectionAsync:this.http.fetch(zi)},filter:{model:v.autocompleter,customStructure:{label:"name",value:"code"},collectionAsync:this.http.fetch(zi)}},{id:"countryOfOriginName",name:"Country of Origin Name",field:"countryOfOriginName",filterable:!0,sortable:!0,minWidth:100,editor:{model:C.autocompleter,collectionAsync:this.http.fetch(bd)},filter:{model:v.autocompleter,collectionAsync:this.http.fetch(bd)}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",filterable:!0,type:"boolean",filter:{model:v.singleSelect,collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}]},formatter:f.checkmarkMaterial,editor:{model:C.checkbox},minWidth:70},{id:"prerequisites",name:"Prerequisites",field:"prerequisites",filterable:!0,formatter:l1,exportWithFormatter:!0,sanitizeDataExport:!0,minWidth:100,sortable:!0,editor:{collectionAsync:this.http.fetch(gd),collectionSortBy:{property:"value",sortDesc:!0,fieldType:"number"},customStructure:{label:"label",value:"value",labelPrefix:"prefix"},collectionOptions:{separatorBetweenTextLabels:" "},model:C.multipleSelect},filter:{collectionAsync:this.http.fetch(gd),collectionSortBy:{property:"value",sortDesc:!0,fieldType:"number"},customStructure:{label:"label",value:"value",labelPrefix:"prefix"},collectionOptions:{separatorBetweenTextLabels:" "},model:v.multipleSelect,operator:"IN_CONTAINS"}}],this.gridOptions={autoEdit:this.isAutoEdit,autoCommitEdit:!1,autoResize:{container:"#demo-container",rightPadding:10},editable:!0,enableCellNavigation:!0,enableExcelCopyBuffer:!0,enableFiltering:!0,editCommandHandler:(e,i,r)=>{this._commandQueue.push(r),r.execute()},i18n:this.i18n}}addItem(){const e=this.dataset.length,i=this.mockData(1,e);setTimeout(()=>{const r=this.columns.find(a=>a.id==="prerequisites");if(r){const a=r.editor.collection,n=r.filter.collection;Array.isArray(a)&&Array.isArray(n)&&(this.aureliaGrid.gridService.addItem(i[0],{highlightRow:!1}),a.push({value:e,label:e,prefix:"Task",suffix:"days"}),n.push({value:e,label:e,prefix:"Task",suffix:"days"}))}},250)}deleteItem(){const e=this.columns.find(i=>i.id==="prerequisites");if(e){const i=e.editor.collection,r=e.filter.collection;if(Array.isArray(i)&&Array.isArray(r)){const a=this.sortCollectionDescending(i).pop();this.sortCollectionDescending(r).pop(),this.aureliaGrid.gridService.deleteItemById(a.value)}}}sortCollectionDescending(e){return e.sort((i,r)=>i.value-r.value)}mockData(e,i=0){const r=[];for(let a=i;a<i+e;a++){const n=2e3+this.randomBetween(4,15),l=new Date().getFullYear()-3+Math.floor(Math.random()*10),d=Math.floor(Math.random()*11),u=Math.floor(Math.random()*29),s=Math.round(Math.random()*100),m=new Date(l,d+1,u);r.push({id:a,title:"Task "+a,duration:Math.round(Math.random()*100)+"",percentComplete:s,percentCompleteNumber:s,start:new Date(n,d,u),finish:m<new Date?"":m,effortDriven:a%5===0,prerequisites:a%2===0&&a!==0&&a<12?[a,a-1]:[],countryOfOrigin:a%2?{code:"CA",name:"Canada"}:{code:"US",name:"United States"},countryOfOriginName:a%2?"Canada":"United States",cityOfOrigin:a%2?"Vancouver, BC, Canada":"Boston, MA, United States"})}return r}randomBetween(e,i){return Math.floor(Math.random()*(i-e+1)+e)}onCellChanged(e,i){console.log("onCellChange",i),this.updatedObject={...i.item}}onCellClicked(e,i){const r=this.aureliaGrid.gridService.getColumnFromEventArguments(i);console.log(r),r.columnDef.id==="edit"?(this.alertWarning=`open a modal window to edit: ${r.dataContext.title}`,this.aureliaGrid.gridService.highlightRow(i.row,1500)):r.columnDef.id==="delete"&&confirm("Are you sure?")&&(this.aureliaGrid.gridService.deleteItemById(r.dataContext.id),this.alertWarning=`Deleted: ${r.dataContext.title}`)}onCellValidationError(e,i){i.validationResults&&alert(i.validationResults.msg)}changeAutoCommit(){return this.gridOptions.autoCommitEdit=!this.gridOptions.autoCommitEdit,this.aureliaGrid.slickGrid.setOptions({autoCommitEdit:this.gridOptions.autoCommitEdit}),!0}dynamicallyAddTitleHeader(){const e={id:`title${this.duplicateTitleHeaderCount++}`,name:"Title",field:"title",editor:{model:C.text,required:!0,validator:Ua},sortable:!0,minWidth:100,filterable:!0};this.columns.push(e)}dynamicallyRemoveLastColumn(){this.columns.pop()}setAutoEdit(e){return this.isAutoEdit=e,this.aureliaGrid.slickGrid.setOptions({autoEdit:e}),!0}undo(){const e=this._commandQueue.pop();e&&rt.cancelCurrentEdit()&&(e.undo(),this.aureliaGrid.slickGrid.gotoCell(e.row,e.cell,!1))}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}Uo=e1();Ni=n1(Uo,0,"Example03",Wu,Ni);r1(Uo,1,Ni);const s1=Object.freeze(Object.defineProperty({__proto__:null,get Example03(){return Ni}},Symbol.toStringTag,{value:"Module"})),Bu="example04",ln=`<h2>
  Example 4: Client Side Sort/Filter
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example04.ts"
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
  columns.bind="columns"
  options.bind="gridOptions"
  dataset.bind="dataset"
  on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
  on-grid-state-changed.trigger="gridStateChanged($event.detail)"
  on-row-count-changed.trigger="refreshMetrics($event.detail.eventData, $event.detail.args)"
>
</aurelia-slickgrid>
`,ju=[],Vu={};let qa;function d1(t){qa||(qa=E.define({name:Bu,template:ln,dependencies:ju,bindables:Vu})),t.register(qa)}const c1=Object.freeze(Object.defineProperty({__proto__:null,bindables:Vu,default:ln,dependencies:ju,name:Bu,register:d1,template:ln},Symbol.toStringTag,{value:"Module"})),u1=""+new URL("collection_500_numbers-TrP4BMO1.json",import.meta.url).href;var m1=Object.create,qo=Object.defineProperty,p1=Object.getOwnPropertyDescriptor,h1=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Hu=t=>{throw TypeError(t)},Uu=(t,e,i)=>e in t?qo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,g1=(t,e)=>qo(t,"name",{value:e,configurable:!0}),b1=t=>[,,,m1(null)],f1=["class","method","getter","setter","accessor","field","value","get","set"],qu=t=>t!==void 0&&typeof t!="function"?Hu("Function expected"):t,v1=(t,e,i,r,a)=>({kind:f1[t],name:e,metadata:r,addInitializer:n=>i._?Hu("Already initialized"):a.push(qu(n||null))}),_1=(t,e)=>Uu(e,h1("metadata"),t[3]),y1=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},S1=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&p1(a,i));g1(a,i);for(var p=r.length-1;p>=0;p--)u=v1(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,qu(l)&&(a=l);return _1(t,a),c&&qo(a,i,c),m?s^4?n:c:a},Qe=(t,e,i)=>Uu(t,typeof e!="symbol"?e+"":e,i),Yu,Yo;function Ee(t,e){return Math.floor(Math.random()*(e-t+1)+t)}const C1=10500;Yu=[T(c1)];class Wi{constructor(e=M(Ce(we))){Qe(this,"http",e),Qe(this,"aureliaGrid"),Qe(this,"columns",[]),Qe(this,"gridOptions"),Qe(this,"dataset",[]),Qe(this,"hideSubTitle",!1),Qe(this,"metrics"),this.defineGrid()}attached(){this.dataset=this.mockData(C1)}detaching(){this.saveCurrentGridState()}aureliaGridReady(e){this.aureliaGrid=e}defineGrid(){this.columns=[{id:"title",name:"Title",field:"title",filterable:!0,sortable:!0,minWidth:45,filter:{model:v.compoundInputText}},{id:"description",name:"Description",field:"description",filterable:!0,sortable:!0,minWidth:80,filter:{model:Vo,enableTrimWhiteSpace:!0}},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,type:"number",exportCsvForceToKeepAsString:!0,minWidth:55,filterable:!0,filter:{model:v.multipleSelect,collectionAsync:this.http.fetch(u1),collectionFilterBy:[{property:"value",operator:"!=",value:360},{property:"value",operator:"!=",value:365}],collectionSortBy:{property:"value",sortDesc:!0,fieldType:"number"},customStructure:{value:"value",label:"label",optionLabel:"value",labelSuffix:"text"},collectionOptions:{separatorBetweenTextLabels:" ",filterResultAfterEachPass:"chain"},options:{maxHeight:250,width:175,useSelectOptionLabelToHtml:!0}}},{id:"complete",name:"% Complete",field:"percentComplete",formatter:f.percentCompleteBar,minWidth:70,type:"number",sortable:!0,filterable:!0,filter:{model:v.compoundInputNumber}},{id:"start",name:"Start",field:"start",formatter:f.dateIso,sortable:!0,minWidth:75,type:"date",filterable:!0,filter:{model:v.compoundDate}},{id:"usDateShort",name:"US Date Short",field:"usDateShort",sortable:!0,minWidth:70,width:70,type:"dateUsShort",filterable:!0,filter:{model:v.compoundDate}},{id:"utcDate",name:"UTC Date",field:"utcDate",formatter:f.dateTimeIsoAmPm,sortable:!0,minWidth:115,type:"dateUtc",outputType:"dateTimeIsoAmPm",filterable:!0,filter:{model:v.compoundDate,options:{displayDateMin:"today"}}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven.isEffort",minWidth:85,maxWidth:95,type:"boolean",sortable:!0,formatter:f.multiple,params:{formatters:[f.complexObject,f.checkmarkMaterial]},filterable:!0,filter:{collection:["","True","False"],model:v.singleSelect,options:{maxHeight:250}}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableExcelExport:!0,enableExcelCopyBuffer:!0,enableFiltering:!0,showCustomFooter:!0,presets:{filters:[{columnId:"duration",searchTerms:[10,98]},{columnId:"usDateShort",operator:"<",searchTerms:["4/20/25"]}],sorters:[{columnId:"duration",direction:"DESC"},{columnId:"complete",direction:"ASC"}]},externalResources:[new G],preParseDateColumns:"__"}}logItems(){console.log(this.aureliaGrid.dataView?.getItems())}mockData(e,i=0){const r=[];for(let a=i;a<i+e;a++){const n=Math.round(Math.random()*100),l=Ee(2e3,2035),d=Ee(10,35),u=Ee(1,12),s=u<10?`0${u}`:u,m=Ee(10,28),o=Ee(0,100),g=Ee(10,23),c=Ee(10,59),p=`${Ee(1,9)}${Ee(10,99)}`,_=a%3===0;r.push({id:a,title:"Task "+a,description:a%5?"desc "+a:null,duration:n,percentComplete:o,percentCompleteNumber:o,start:a%4?null:new Date(l,u,m),usDateShort:`${u}/${m}/${d}`,utcDate:`${l}-${s}-${m}T${g}:${c}:${c}.${p}Z`,effortDriven:{isEffort:_,label:_?"Effort":"NoEffort"}})}return r}gridStateChanged(e){console.log("Client sample, Grid State changed:: ",e.change)}saveCurrentGridState(){console.log("Client sample, current Grid State:: ",this.aureliaGrid.gridStateService.getCurrentGridState())}setFiltersDynamically(){this.aureliaGrid.filterService.updateFilters([{columnId:"duration",searchTerms:[2,25,48,50]},{columnId:"complete",searchTerms:[95],operator:"<"},{columnId:"effort-driven",searchTerms:[!0]},{columnId:"start",operator:">=",searchTerms:["2001-02-28"]}])}setSortingDynamically(){this.aureliaGrid.sortService.updateSorting([{columnId:"duration",direction:"ASC"},{columnId:"start",direction:"DESC"}])}refreshMetrics(e,i){i?.current>=0&&setTimeout(()=>{this.metrics={startTime:new Date,endTime:new Date,itemCount:i?.current||0,totalItemCount:this.dataset.length||0}})}scrollGridBottom(){this.aureliaGrid.slickGrid.navigateBottom()}scrollGridTop(){this.aureliaGrid.slickGrid.navigateTop()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}Yo=b1();Wi=S1(Yo,0,"Example04",Yu,Wi);y1(Yo,1,Wi);const w1=Object.freeze(Object.defineProperty({__proto__:null,get Example04(){return Wi}},Symbol.toStringTag,{value:"Module"})),Ku="example05",sn=`<h2>
  Example 5: Grid with Backend OData Service
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example05.ts"
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
  columns.bind="columns"
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
`,Qu=[],Zu={};let Ya;function x1(t){Ya||(Ya=E.define({name:Ku,template:sn,dependencies:Qu,bindables:Zu})),t.register(Ya)}const T1=Object.freeze(Object.defineProperty({__proto__:null,bindables:Zu,default:sn,dependencies:Qu,name:Ku,register:x1,template:sn},Symbol.toStringTag,{value:"Module"})),vt=""+new URL("customers_100-Dk3XZUmV.json",import.meta.url).href;var E1=Object.create,Ko=Object.defineProperty,$1=Object.getOwnPropertyDescriptor,k1=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Ju=t=>{throw TypeError(t)},Xu=(t,e,i)=>e in t?Ko(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,O1=(t,e)=>Ko(t,"name",{value:e,configurable:!0}),D1=t=>[,,,E1(null)],M1=["class","method","getter","setter","accessor","field","value","get","set"],em=t=>t!==void 0&&typeof t!="function"?Ju("Function expected"):t,P1=(t,e,i,r,a)=>({kind:M1[t],name:e,metadata:r,addInitializer:n=>i._?Ju("Already initialized"):a.push(em(n||null))}),I1=(t,e)=>Xu(e,k1("metadata"),t[3]),G1=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},F1=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&$1(a,i));O1(a,i);for(var p=r.length-1;p>=0;p--)u=P1(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,em(l)&&(a=l);return I1(t,a),c&&Ko(a,i,c),m?s^4?n:c:a},L=(t,e,i)=>Xu(t,typeof e!="symbol"?e+"":e,i),tm,Qo;const A1=20,_d="%5E",R1="%25";tm=[T(T1)];class Bi{constructor(e=M(Ce(we))){L(this,"http",e),L(this,"aureliaGrid"),L(this,"columns",[]),L(this,"gridOptions"),L(this,"dataset",[]),L(this,"hideSubTitle",!1),L(this,"metrics"),L(this,"paginationOptions"),L(this,"isCountEnabled",!0),L(this,"isSelectEnabled",!1),L(this,"isExpandEnabled",!1),L(this,"odataVersion",2),L(this,"odataQuery",""),L(this,"processing",!1),L(this,"errorStatus",""),L(this,"isPageErrorTest",!1),L(this,"status",{text:"",class:""}),this.defineGrid()}aureliaGridReady(e){this.aureliaGrid=e}defineGrid(){this.columns=[{id:"name",name:"Name",field:"name",sortable:!0,filterable:!0,filter:{model:v.compoundInput,compoundOperatorList:[{operator:"",desc:"Contains"},{operator:"<>",desc:"Not Contains"},{operator:"=",desc:"Equals"},{operator:"!=",desc:"Not equal to"},{operator:"a*",desc:"Starts With"},{operator:"Custom",desc:"SQL Like"}]}},{id:"gender",name:"Gender",field:"gender",filterable:!0,sortable:!0,filter:{model:v.singleSelect,collection:[{value:"",label:""},{value:"male",label:"male"},{value:"female",label:"female"}]}},{id:"company",name:"Company",field:"company",filterable:!0,sortable:!0},{id:"category_name",name:"Category",field:"category/name",filterable:!0,sortable:!0}],this.gridOptions={enableAutoResize:!0,autoResize:{container:"#demo-container",rightPadding:10},checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},compoundOperatorAltTexts:{text:{Custom:{operatorAlt:"%%",descAlt:"SQL Like"}}},enableCellNavigation:!0,enableFiltering:!0,enableCheckboxSelector:!0,enableSelection:!0,enablePagination:!0,pagination:{pageSizes:[10,20,50,100,500,5e4],pageSize:A1,totalItems:0},presets:{filters:[{columnId:"gender",searchTerms:["male"],operator:"="}],sorters:[{columnId:"name",direction:"asc"}],pagination:{pageNumber:2,pageSize:20}},backendServiceApi:{service:new so,options:{enableCount:this.isCountEnabled,enableSelect:this.isSelectEnabled,enableExpand:this.isExpandEnabled,filterQueryOverride:({fieldName:e,columnDef:i,columnFilterOperator:r,searchValues:a})=>{if(r==="Custom"&&i?.id==="name"){let n=a[0].replace(/\*/g,".*");return n=n.slice(0,1)+_d+n.slice(1),n=n.slice(0,-1)+"$'",`matchesPattern(${e}, ${n})`}},version:this.odataVersion},onError:e=>{console.log("ERROR",e),this.errorStatus=e.message,this.displaySpinner(!1,!0)},preProcess:()=>{this.errorStatus="",this.displaySpinner(!0)},process:e=>this.getCustomerApiCall(e),postProcess:e=>{this.metrics=e.metrics,this.displaySpinner(!1),this.getCustomerCallback(e)}}}}displaySpinner(e,i){this.processing=e,i?this.status={text:"ERROR!!!",class:"alert alert-danger"}:this.status=e?{text:"loading",class:"alert alert-warning"}:{text:"finished",class:"alert alert-success"}}getCustomerCallback(e){let i=e.totalRecordCount;this.isCountEnabled&&(i=this.odataVersion===4?e["@odata.count"]:e.d.__count),this.metrics&&(this.metrics.totalItemCount=i),this.paginationOptions={...this.gridOptions.pagination,totalItems:i},this.dataset=this.odataVersion===4?e.value:e.d.results,this.odataQuery=e.query}getCustomerApiCall(e){return this.getCustomerDataApiMock(e)}getCustomerDataApiMock(e){return new Promise(i=>{const r=e.toLowerCase().split("&");let a,n=0,l="",d=100;const u={};if(this.isPageErrorTest)throw this.isPageErrorTest=!1,new Error("Server timed out trying to retrieve data for the last page");for(const s of r){if(s.includes("$top=")&&(a=+s.substring(5),a===5e4))throw new Error("Server timed out retrieving 50,000 rows");if(s.includes("$skip=")&&(n=+s.substring(6)),s.includes("$orderby=")&&(l=s.substring(9)),s.includes("$filter=")){const m=s.substring(8).replace("%20"," ");if(m.includes("matchespattern")){const o=new RegExp(`matchespattern\\(([a-zA-Z]+),\\s'${_d}(.*?)'\\)`,"i"),g=m.match(o)||[],c=g[1].trim();u[c]={type:"matchespattern",term:"^"+g[2].trim()}}if(m.includes("contains")){const o=m.match(/contains\(([a-zA-Z/]+),\s?'(.*?)'/),g=o[1].trim();u[g]={type:"substring",term:o[2].trim()}}if(m.includes("substringof")){const o=m.match(/substringof\('(.*?)',\s([a-zA-Z/]+)/),g=o[2].trim();u[g]={type:"substring",term:o[1].trim()}}for(const o of["eq","ne","le","lt","gt","ge"])if(m.includes(o)){const c=new RegExp(`([a-zA-Z ]*) ${o} '(.*?)'`).exec(m);if(Array.isArray(c)){const p=c[1].trim();u[p]={type:o,term:c[2].trim()}}}if(m.includes("startswith")&&m.includes("endswith")){const o=m.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],g=m.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],c=o[1].trim();u[c]={type:"starts+ends",term:[o[2].trim(),g[2].trim()]}}else if(m.includes("startswith")){const o=m.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/),g=o[1].trim();u[g]={type:"starts",term:o[2].trim()}}else if(m.includes("endswith")){const o=m.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/),g=o[1].trim();u[g]={type:"ends",term:o[2].trim()}}if(m.includes("company"))throw new Error('Server could not filter using the field "Company"')}}if(l.includes("company"))throw new Error('Server could not sort using the field "Company"');this.http.fetch(vt).then(s=>s.json()).then(s=>{if(l?.length>0){const c=l.split(",");for(const p of c){const _=p.split(" "),w=_[0];let x=y=>y;for(const y of w.split("/")){const h=x;x=S=>h(S)[y]}switch((_[1]??"asc").toLocaleLowerCase()){case"asc":s=s.sort((y,h)=>x(y).localeCompare(x(h)));break;case"desc":s=s.sort((y,h)=>x(h).localeCompare(x(y)));break}}}let m=n,o=s;if(u){for(const c in u)u.hasOwnProperty(c)&&(o=o.filter(p=>{const _=u[c].type,w=u[c].term;let x=c;if(c?.indexOf(" ")!==-1){const h=c.split(" ");x=h[h.length-1]}let b,y=p;for(const h of x.split("/"))b=y[h],y=b;if(b){const[h,S]=Array.isArray(w)?w:[w];switch(_){case"eq":return b.toLowerCase()===h;case"ne":return b.toLowerCase()!==h;case"le":return b.toLowerCase()<=h;case"lt":return b.toLowerCase()<h;case"gt":return b.toLowerCase()>h;case"ge":return b.toLowerCase()>=h;case"ends":return b.toLowerCase().endsWith(h);case"starts":return b.toLowerCase().startsWith(h);case"starts+ends":return b.toLowerCase().startsWith(h)&&b.toLowerCase().endsWith(S);case"substring":return b.toLowerCase().includes(h);case"matchespattern":return new RegExp(h.replaceAll(R1,".*"),"i").test(b)}}}));d=o.length}m>o.length&&(e=e.replace(`$skip=${m}`,""),m=0);const g=o.slice(m,m+a);setTimeout(()=>{const c={query:e};this.isCountEnabled||(c.totalRecordCount=d),this.odataVersion===4?(c.value=g,this.isCountEnabled&&(c["@odata.count"]=d)):(c.d={results:g},this.isCountEnabled&&(c.d.__count=d)),i(c)},150)})})}goToFirstPage(){this.aureliaGrid.paginationService.goToFirstPage()}goToLastPage(){this.aureliaGrid.paginationService.goToLastPage()}gridStateChanged(e){console.log("Client sample, Grid State changed:: ",e.change)}setFiltersDynamically(){this.aureliaGrid.filterService.updateFilters([{columnId:"name",searchTerms:["A"],operator:"a*"}])}setSortingDynamically(){this.aureliaGrid.sortService.updateSorting([{columnId:"name",direction:"DESC"}])}throwPageChangeError(){this.isPageErrorTest=!0,this.aureliaGrid?.paginationService?.goToLastPage()}handleOnBeforeSort(){return!0}handleOnBeforeSearchChange(){return!0}handleOnBeforePaginationChange(){return!0}changeCountEnableFlag(){return this.isCountEnabled=!this.isCountEnabled,this.resetOptions({enableCount:this.isCountEnabled}),!0}changeEnableSelectFlag(){return this.isSelectEnabled=!this.isSelectEnabled,this.resetOptions({enableSelect:this.isSelectEnabled}),!0}changeEnableExpandFlag(){return this.isExpandEnabled=!this.isExpandEnabled,this.resetOptions({enableExpand:this.isExpandEnabled}),!0}setOdataVersion(e){return this.odataVersion=e,this.resetOptions({version:this.odataVersion}),!0}resetOptions(e){this.displaySpinner(!0);const i=this.gridOptions.backendServiceApi.service;i.updateOptions(e),i.clearFilters(),this.aureliaGrid?.filterService.clearFilters()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}Qo=D1();Bi=F1(Qo,0,"Example05",tm,Bi);G1(Qo,1,Bi);const L1=Object.freeze(Object.defineProperty({__proto__:null,get Example05(){return Bi}},Symbol.toStringTag,{value:"Module"})),im="example06",dn=`<h2>
  Example 6: Grid with Backend GraphQL Service
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example06.ts"
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
  columns.bind="columns"
  options.bind="gridOptions"
  dataset.bind="dataset"
  on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
  on-grid-state-changed.trigger="gridStateChanged($event.detail)"
>
</aurelia-slickgrid>
`,am=[],rm={};let Ka;function z1(t){Ka||(Ka=E.define({name:im,template:dn,dependencies:am,bindables:rm})),t.register(Ka)}const N1=Object.freeze(Object.defineProperty({__proto__:null,bindables:rm,default:dn,dependencies:am,name:im,register:z1,template:dn},Symbol.toStringTag,{value:"Module"}));var W1=Object.create,Zo=Object.defineProperty,B1=Object.getOwnPropertyDescriptor,j1=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),nm=t=>{throw TypeError(t)},om=(t,e,i)=>e in t?Zo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,V1=(t,e)=>Zo(t,"name",{value:e,configurable:!0}),H1=t=>[,,,W1(null)],U1=["class","method","getter","setter","accessor","field","value","get","set"],lm=t=>t!==void 0&&typeof t!="function"?nm("Function expected"):t,q1=(t,e,i,r,a)=>({kind:U1[t],name:e,metadata:r,addInitializer:n=>i._?nm("Already initialized"):a.push(lm(n||null))}),Y1=(t,e)=>om(e,j1("metadata"),t[3]),K1=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},Q1=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&B1(a,i));V1(a,i);for(var p=r.length-1;p>=0;p--)u=q1(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,lm(l)&&(a=l);return Y1(t,a),c&&Zo(a,i,c),m?s^4?n:c:a},j=(t,e,i)=>om(t,typeof e!="symbol"?e+"":e,i),sm,Jo;const Z1=20,Qa="users",J1=250;sm=[T(N1)];class ji{constructor(e=M(xe)){j(this,"i18n",e),j(this,"isWithCursor",!1),j(this,"aureliaGrid"),j(this,"columns",[]),j(this,"gridOptions"),j(this,"dataset",[]),j(this,"metrics"),j(this,"graphqlService",new co),j(this,"graphqlQuery",""),j(this,"hideSubTitle",!1),j(this,"processing",!1),j(this,"selectedLanguage",""),j(this,"status",{text:"",class:""}),j(this,"serverWaitDelay",J1),this.defineGrid();const i="en";this.i18n.setLocale(i),this.selectedLanguage=i}detaching(){this.saveCurrentGridState()}aureliaGridReady(e){this.aureliaGrid=e}defineGrid(){this.columns=[{id:"name",field:"name",nameKey:"NAME",width:60,columnGroupKey:"CUSTOMER_INFORMATION",sortable:!0,filterable:!0,filter:{model:v.compoundInput,compoundOperatorList:[{operator:"",desc:"Contains"},{operator:"<>",desc:"Not Contains"},{operator:"=",desc:"Equals"},{operator:"!=",desc:"Not equal to"},{operator:"a*",desc:"Starts With"},{operator:"Custom",desc:"SQL Like"}]}},{id:"gender",field:"gender",nameKey:"GENDER",filterable:!0,sortable:!0,width:60,columnGroupKey:"CUSTOMER_INFORMATION",filter:{model:v.singleSelect,collection:[{value:"",label:""},{value:"male",label:"male",labelKey:"MALE"},{value:"female",label:"female",labelKey:"FEMALE"}]}},{id:"company",field:"company",nameKey:"COMPANY",width:60,columnGroupKey:"CUSTOMER_INFORMATION",sortable:!0,filterable:!0,filter:{model:v.multipleSelect,collection:[{value:"acme",label:"Acme"},{value:"abc",label:"Company ABC"},{value:"xyz",label:"Company XYZ"}],options:{filter:!0}}},{id:"billingAddressStreet",field:"billing.address.street",nameKey:"BILLING.ADDRESS.STREET",width:60,filterable:!0,sortable:!0,columnGroupKey:"BILLING.INFORMATION"},{id:"billingAddressZip",field:"billing.address.zip",nameKey:"BILLING.ADDRESS.ZIP",width:60,type:"number",columnGroupKey:"BILLING.INFORMATION",filterable:!0,sortable:!0,filter:{model:v.compoundInput},formatter:f.multiple,params:{formatters:[f.complexObject,f.translate]}},{id:"finish",field:"finish",name:"Date",formatter:f.dateIso,sortable:!0,minWidth:90,width:120,exportWithFormatter:!0,columnGroupKey:"BILLING.INFORMATION",type:"date",filterable:!0,filter:{model:v.dateRange,filterShortcuts:[{titleKey:"NEXT_20_DAYS",iconCssClass:"mdi mdi-calendar",searchTerms:[_e(new Date,"YYYY-MM-DD"),_e(Lt(new Date,20),"YYYY-MM-DD")]}]}}];const e=new Date().getFullYear(),i=`${e}-01-01`,r=`${e}-02-15`;this.gridOptions={enableFiltering:!0,enableCellNavigation:!0,enableTranslate:!0,createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:28,i18n:this.i18n,gridHeight:200,gridWidth:900,compoundOperatorAltTexts:{text:{Custom:{operatorAlt:"%%",descAlt:"SQL Like"}}},gridMenu:{resizeOnShowHeaderRow:!0},enablePagination:!0,pagination:{pageSizes:[10,15,20,25,30,40,50,75,100],pageSize:Z1,totalItems:0},presets:{columns:[{columnId:"name",width:100},{columnId:"gender",width:55},{columnId:"company"},{columnId:"billingAddressZip"},{columnId:"billingAddressStreet",width:120},{columnId:"finish",width:130}],filters:[{columnId:"gender",searchTerms:["male"],operator:"="},{columnId:"name",searchTerms:["Joh*oe"],operator:"StartsWithEndsWith"},{columnId:"company",searchTerms:["xyz"],operator:"IN"},{columnId:"finish",searchTerms:[i,r],operator:"RangeInclusive"}],sorters:[{columnId:"name",direction:"asc"},{columnId:"company",direction:"DESC"}],pagination:{pageNumber:this.isWithCursor?1:2,pageSize:20}},backendServiceApi:{service:this.graphqlService,options:{datasetName:Qa,addLocaleIntoQuery:!0,extraQueryArguments:[{field:"userId",value:123}],filterQueryOverride:({fieldName:a,columnDef:n,columnFilterOperator:l,searchValues:d})=>{if(l==="Custom"&&n?.id==="name")return{field:a,operator:"Like",value:d[0]}},useCursor:this.isWithCursor,keepArgumentFieldDoubleQuotes:!0},preProcess:()=>this.displaySpinner(!0),process:a=>this.getCustomerApiCall(a),postProcess:a=>{this.metrics=a.metrics,this.displaySpinner(!1)}}}}clearAllFiltersAndSorts(){this.aureliaGrid&&this.aureliaGrid.gridService&&this.aureliaGrid.gridService.clearAllFiltersAndSorts()}displaySpinner(e){this.processing=e,this.status=e?{text:"processing...",class:"alert alert-danger"}:{text:"finished",class:"alert alert-success"}}getCustomerApiCall(e){let i;if(this.aureliaGrid?.paginationService){const{paginationService:a}=this.aureliaGrid,n=a._initialized?a.getCurrentPageNumber():1,l=String.fromCharCode(65+n-1),d=String.fromCharCode(l.charCodeAt(0)+1);i={hasPreviousPage:a.dataFrom===0,hasNextPage:a.dataTo===100,startCursor:l,endCursor:d}}else i={hasPreviousPage:!1,hasNextPage:!0,startCursor:"A",endCursor:"B"};const r={data:{[Qa]:{nodes:[],totalCount:100,pageInfo:i}}};return new Promise(a=>{setTimeout(()=>{this.graphqlQuery=this.graphqlService.buildQuery(),this.isWithCursor&&this.aureliaGrid?.paginationService?.setCursorPageInfo(r.data[Qa].pageInfo),a(r)},this.serverWaitDelay)})}goToFirstPage(){this.aureliaGrid.paginationService.goToFirstPage()}goToLastPage(){this.aureliaGrid.paginationService.goToLastPage()}gridStateChanged(e){console.log("GraphQL sample, Grid State changed:: ",e)}saveCurrentGridState(){console.log("GraphQL current grid state",this.aureliaGrid.gridStateService.getCurrentGridState())}setFiltersDynamically(){const e=new Date().getFullYear(),i=`${e}-01-01`,r=`${e}-02-15`;this.aureliaGrid.filterService.updateFilters([{columnId:"gender",searchTerms:["female"],operator:"="},{columnId:"name",searchTerms:["Jane"],operator:"StartsWith"},{columnId:"company",searchTerms:["acme"],operator:"IN"},{columnId:"billingAddressZip",searchTerms:["11"],operator:">="},{columnId:"finish",searchTerms:[i,r],operator:"RangeInclusive"}])}setSortingDynamically(){this.aureliaGrid.sortService.updateSorting([{columnId:"billingAddressZip",direction:"DESC"},{columnId:"company",direction:"ASC"}])}resetToOriginalPresets(){const e=new Date().getFullYear(),i=`${e}-01-01`,r=`${e}-02-15`;this.aureliaGrid.filterService.updateFilters([{columnId:"gender",searchTerms:["male"],operator:"="},{columnId:"name",searchTerms:["Joh*oe"],operator:"StartsWithEndsWith"},{columnId:"company",searchTerms:["xyz"],operator:"IN"},{columnId:"finish",searchTerms:[i,r],operator:"RangeInclusive"}]),this.aureliaGrid.sortService.updateSorting([{columnId:"name",direction:"asc"},{columnId:"company",direction:"DESC"}]),setTimeout(()=>{this.aureliaGrid.paginationService?.changeItemPerPage(20),this.aureliaGrid.paginationService?.goToPageNumber(2)})}setIsWithCursor(e){return this.isWithCursor=e,this.resetOptions({useCursor:this.isWithCursor}),!0}async switchLanguage(){const e=this.selectedLanguage==="en"?"fr":"en";await this.i18n.setLocale(e),this.selectedLanguage=e}resetOptions(e){this.displaySpinner(!0);const i=this.gridOptions.backendServiceApi.service;this.aureliaGrid.paginationService.setCursorBased(e.useCursor),i.updateOptions(e),this.gridOptions={...this.gridOptions},this.aureliaGrid.paginationService?.goToFirstPage()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}Jo=H1();ji=Q1(Jo,0,"Example06",sm,ji);K1(Jo,1,ji);const X1=Object.freeze(Object.defineProperty({__proto__:null,get Example06(){return ji}},Symbol.toStringTag,{value:"Module"})),dm="example07",cn=`<h2>
  Example 7: Header Button Plugin
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example07.ts"
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
  columns.bind="columns1"
  options.bind="gridOptions1"
  dataset.bind="dataset1"
  on-aurelia-grid-created.trigger="aureliaGrid1Ready($event.detail)"
>
</aurelia-slickgrid>
<br />
<h5>Grid 2 - <span class="subtitle">with both Header Buttons & Menus</span></h5>
<aurelia-slickgrid
  grid-id="grid7-2"
  columns.bind="columns2"
  options.bind="gridOptions2"
  dataset.bind="dataset2"
  on-aurelia-grid-created.trigger="aureliaGrid2Ready($event.detail)"
>
</aurelia-slickgrid>
`,cm=[],um={};let Za;function eT(t){Za||(Za=E.define({name:dm,template:cn,dependencies:cm,bindables:um})),t.register(Za)}const tT=Object.freeze(Object.defineProperty({__proto__:null,bindables:um,default:cn,dependencies:cm,name:dm,register:eT,template:cn},Symbol.toStringTag,{value:"Module"}));var iT=Object.create,Xo=Object.defineProperty,aT=Object.getOwnPropertyDescriptor,rT=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),mm=t=>{throw TypeError(t)},pm=(t,e,i)=>e in t?Xo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,nT=(t,e)=>Xo(t,"name",{value:e,configurable:!0}),oT=t=>[,,,iT(null)],lT=["class","method","getter","setter","accessor","field","value","get","set"],hm=t=>t!==void 0&&typeof t!="function"?mm("Function expected"):t,sT=(t,e,i,r,a)=>({kind:lT[t],name:e,metadata:r,addInitializer:n=>i._?mm("Already initialized"):a.push(hm(n||null))}),dT=(t,e)=>pm(e,rT("metadata"),t[3]),cT=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},uT=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&aT(a,i));nT(a,i);for(var p=r.length-1;p>=0;p--)u=sT(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,hm(l)&&(a=l);return dT(t,a),c&&Xo(a,i,c),m?s^4?n:c:a},$e=(t,e,i)=>pm(t,typeof e!="symbol"?e+"":e,i),gm,el;let $i={},ki={};gm=[T(tT)];class Vi{constructor(){$e(this,"columns1",[]),$e(this,"columns2",[]),$e(this,"gridOptions1"),$e(this,"gridOptions2"),$e(this,"dataset1",[]),$e(this,"dataset2",[]),$e(this,"aureliaGrid1"),$e(this,"aureliaGrid2"),$e(this,"hideSubTitle",!1),this.defineGrid(),$i={},ki={}}attached(){this.dataset1=this.loadData(200,1),this.dataset2=this.loadData(200,2)}aureliaGrid1Ready(e){this.aureliaGrid1=e}aureliaGrid2Ready(e){this.aureliaGrid2=e}defineGrid(){this.columns1=[],this.columns2=[],this.gridOptions1={enableAutoResize:!0,enableHeaderButton:!0,enableHeaderMenu:!1,autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:!1,enableExcelCopyBuffer:!0,excelCopyBufferOptions:{onCopyCells:(e,i)=>console.log("onCopyCells",e,i),onPasteCells:(e,i)=>console.log("onPasteCells",e,i),onCopyCancelled:(e,i)=>console.log("onCopyCancelled",e,i)},enableCellNavigation:!0,gridHeight:275,headerButton:{onCommand:(e,i)=>this.handleOnCommand(e,i,1)}},this.gridOptions2={...this.gridOptions1,enableHeaderMenu:!0,enableFiltering:!0,headerButton:{onCommand:(e,i)=>this.handleOnCommand(e,i,2)}}}handleOnCommand(e,i,r){const a=i.column,n=i.button;i.command==="toggle-highlight"&&(n.cssClass==="mdi mdi-lightbulb-on text-danger"?(r===1?delete $i[a.id]:delete ki[a.id],n.cssClass="mdi mdi-lightbulb-outline text-warning faded",n.tooltip="Highlight negative numbers."):(r===1?$i[a.id]=!0:ki[a.id]=!0,n.cssClass="mdi mdi-lightbulb-on text-danger",n.tooltip="Remove highlight."),this[`aureliaGrid${r}`].slickGrid.invalidate())}loadData(e,i){const r=[];for(let n=0;n<10;n++)r.push({id:n,name:"Column "+String.fromCharCode(65+n),field:n+"",width:n===0?70:100,filterable:!0,sortable:!0,formatter:(l,d,u,s)=>i===1&&$i[s.id]&&u<0?`<div style="color:red; font-weight:bold;">${u}</div>`:i===2&&ki[s.id]&&u<0?`<div style="color:red; font-weight:bold;">${u}</div>`:u,header:{buttons:[{cssClass:"mdi mdi-lightbulb-outline text-warning faded",command:"toggle-highlight",tooltip:"Highlight negative numbers.",itemVisibilityOverride:l=>l.column.name!=="Column E",itemUsabilityOverride:l=>l.column.name!=="Column J",action:(l,d)=>{console.log(`execute a callback action to "${d.command}" on ${d.column.name}`)}}]}});r[0].name="Resize me!",r[0].header={buttons:[{cssClass:"mdi mdi-message-text",handler:()=>{alert("Tag")}},{cssClass:"mdi mdi-forum-outline",handler:()=>{alert("Comment")}},{cssClass:"mdi mdi-information",handler:()=>{alert("Info")}},{cssClass:"mdi mdi-help-circle",handler:()=>{alert("Help")}}]},i===2&&r[0].header?.buttons?.reverse(),r[1].name="Hover me!",r[1].header={buttons:[{cssClass:"mdi mdi-help-circle",showOnHover:!0,tooltip:"This button only appears on hover.",handler:()=>{alert("Help")}}]};const a=[];for(let n=0;n<e;n++){const l=a[n]={};l.id=n;for(let d=0;d<r.length;d++)l[d]=Math.round(Math.random()*10)-5}return this[`columns${i}`]=r,a}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid2.resizerService.resizeGrid(0)}}el=oT();Vi=uT(el,0,"Example07",gm,Vi);cT(el,1,Vi);const mT=Object.freeze(Object.defineProperty({__proto__:null,get Example07(){return Vi}},Symbol.toStringTag,{value:"Module"})),bm="example08",un=`<div class="grid8">
  <h2>
    Example 8: Header Menu Plugin
    <span class="float-end">
      <a
        style="font-size: 18px"
        target="_blank"
        href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example08.ts"
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
      <li>
        Use override callback functions to change the properties of show/hide, enable/disable the menu or certain item(s) from the list
      </li>
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
    columns.bind="columns"
    options.bind="gridOptions"
    dataset.bind="dataset"
    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
  >
  </aurelia-slickgrid>
</div>
`,fm=[],vm={};let Ja;function pT(t){Ja||(Ja=E.define({name:bm,template:un,dependencies:fm,bindables:vm})),t.register(Ja)}const hT=Object.freeze(Object.defineProperty({__proto__:null,bindables:vm,default:un,dependencies:fm,name:bm,register:pT,template:un},Symbol.toStringTag,{value:"Module"}));var gT=Object.create,tl=Object.defineProperty,bT=Object.getOwnPropertyDescriptor,fT=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),_m=t=>{throw TypeError(t)},ym=(t,e,i)=>e in t?tl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,vT=(t,e)=>tl(t,"name",{value:e,configurable:!0}),_T=t=>[,,,gT(null)],yT=["class","method","getter","setter","accessor","field","value","get","set"],Sm=t=>t!==void 0&&typeof t!="function"?_m("Function expected"):t,ST=(t,e,i,r,a)=>({kind:yT[t],name:e,metadata:r,addInitializer:n=>i._?_m("Already initialized"):a.push(Sm(n||null))}),CT=(t,e)=>ym(e,fT("metadata"),t[3]),wT=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},xT=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&bT(a,i));vT(a,i);for(var p=r.length-1;p>=0;p--)u=ST(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,Sm(l)&&(a=l);return CT(t,a),c&&tl(a,i,c),m?s^4?n:c:a},Be=(t,e,i)=>ym(t,typeof e!="symbol"?e+"":e,i),Cm,il;Cm=[T(hT)];class Hi{constructor(e=M(xe)){Be(this,"i18n",e),Be(this,"aureliaGrid"),Be(this,"columns",[]),Be(this,"gridOptions"),Be(this,"dataset",[]),Be(this,"hideSubTitle",!1),Be(this,"selectedLanguage",""),Be(this,"visibleColumns",[]),this.defineGrid();const i="en";this.i18n.setLocale(i),this.selectedLanguage=i}aureliaGridReady(e){this.aureliaGrid=e}attached(){this.getData()}defineGrid(){this.columns=[{id:"title",name:"Title",field:"title",nameKey:"TITLE"},{id:"duration",name:"Duration",field:"duration",nameKey:"DURATION",sortable:!0},{id:"percentComplete",name:"% Complete",field:"percentComplete",nameKey:"PERCENT_COMPLETE",sortable:!0},{id:"start",name:"Start",field:"start",nameKey:"START"},{id:"finish",name:"Finish",field:"finish",nameKey:"FINISH"},{id:"completed",name:"Completed",field:"completed",nameKey:"COMPLETED",formatter:f.checkmarkMaterial}],this.columns.forEach(e=>{e.header={menu:{commandItems:[{iconCssClass:"mdi mdi-help-circle",titleKey:"HELP",command:"help",tooltip:"Need assistance?",cssClass:"bold",textCssClass:e.id==="title"||e.id==="completed"?"":"blue",positionOrder:99,itemUsabilityOverride:i=>!(i.column.id==="title"||i.column.id==="completed"),itemVisibilityOverride:i=>i.column.id!=="percentComplete",action:(i,r)=>{console.log("execute an action on Help",r)}},{divider:!0,command:"",positionOrder:98},{command:"custom-actions",title:"Hello",positionOrder:99,commandItems:[{command:"hello-world",title:"Hello World"},{command:"hello-slickgrid",title:"Hello SlickGrid"},{command:"sub-menu",title:"Let's play",cssClass:"green",subMenuTitle:"choose your game",subMenuTitleCssClass:"text-italic salmon",commandItems:[{command:"sport-badminton",title:"Badminton"},{command:"sport-tennis",title:"Tennis"},{command:"sport-racquetball",title:"Racquetball"},{command:"sport-squash",title:"Squash"}]}]},{command:"feedback",title:"Feedback",positionOrder:100,commandItems:[{command:"request-update",title:"Request update from supplier",iconCssClass:"mdi mdi-star",tooltip:"this will automatically send an alert to the shipping team to contact the user for an update"},"divider",{command:"sub-menu",title:"Contact Us",iconCssClass:"mdi mdi-account",subMenuTitle:"contact us...",subMenuTitleCssClass:"italic",commandItems:[{command:"contact-email",title:"Email us",iconCssClass:"mdi mdi-pencil-outline"},{command:"contact-chat",title:"Chat with us",iconCssClass:"mdi mdi-message-text-outline"},{command:"contact-meeting",title:"Book an appointment",iconCssClass:"mdi mdi-coffee"}]}]}]}}}),this.gridOptions={enableAutoResize:!0,enableHeaderMenu:!0,autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:!1,enableCellNavigation:!0,headerMenu:{hideSortCommands:!1,hideColumnHideCommand:!1,subItemChevronClass:"mdi mdi-chevron-down mdi-rotate-270",onCommand:(e,i)=>{const r=i.item?.command;r.includes("hello-")?alert(i?.item.title):r.includes("sport-")?alert("Just do it, play "+i?.item?.title):r.includes("contact-")?alert("Command: "+i?.item?.command):i.command==="help"&&alert("Please help!!!")}},enableTranslate:!0,i18n:this.i18n}}getData(){const e=[];for(let i=0;i<1e3;i++)e[i]={id:i,title:"Task "+i,duration:Math.round(Math.random()*25)+" days",percentComplete:Math.round(Math.random()*100),start:"01/01/2009",finish:"01/05/2009",completed:i%5===0};this.dataset=e}async switchLanguage(){const e=this.selectedLanguage==="en"?"fr":"en";await this.i18n.setLocale(e),this.selectedLanguage=e}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}il=_T();Hi=xT(il,0,"Example08",Cm,Hi);wT(il,1,Hi);const TT=Object.freeze(Object.defineProperty({__proto__:null,get Example08(){return Hi}},Symbol.toStringTag,{value:"Module"})),wm="example09",mn=`<h2>
  Example 9: Grid Menu Control
  <span class="float-end">
    <a
      style="font-size: 18px"
      target="_blank"
      href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example09.ts"
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
  columns.bind="columns"
  dataset.bind="dataset"
  options.bind="gridOptions"
  on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
>
</aurelia-slickgrid>
`,xm=[],Tm={};let Xa;function ET(t){Xa||(Xa=E.define({name:wm,template:mn,dependencies:xm,bindables:Tm})),t.register(Xa)}const $T=Object.freeze(Object.defineProperty({__proto__:null,bindables:Tm,default:mn,dependencies:xm,name:wm,register:ET,template:mn},Symbol.toStringTag,{value:"Module"}));var kT=Object.create,al=Object.defineProperty,OT=Object.getOwnPropertyDescriptor,DT=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Em=t=>{throw TypeError(t)},$m=(t,e,i)=>e in t?al(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,MT=(t,e)=>al(t,"name",{value:e,configurable:!0}),PT=t=>[,,,kT(null)],IT=["class","method","getter","setter","accessor","field","value","get","set"],km=t=>t!==void 0&&typeof t!="function"?Em("Function expected"):t,GT=(t,e,i,r,a)=>({kind:IT[t],name:e,metadata:r,addInitializer:n=>i._?Em("Already initialized"):a.push(km(n||null))}),FT=(t,e)=>$m(e,DT("metadata"),t[3]),AT=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},RT=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&OT(a,i));MT(a,i);for(var p=r.length-1;p>=0;p--)u=GT(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,km(l)&&(a=l);return FT(t,a),c&&al(a,i,c),m?s^4?n:c:a},ke=(t,e,i)=>$m(t,typeof e!="symbol"?e+"":e,i),Om,rl;Om=[T($T)];class Ui{constructor(e=M(xe)){ke(this,"i18n",e),ke(this,"aureliaGrid"),ke(this,"columns",[]),ke(this,"gridOptions"),ke(this,"dataset",[]),ke(this,"dataView"),ke(this,"gridObj"),ke(this,"hideSubTitle",!1),ke(this,"selectedLanguage",""),this.defineGrid();const i="en";this.i18n.setLocale(i),this.selectedLanguage=i}attached(){this.getData()}aureliaGridReady(e){this.aureliaGrid=e,this.gridObj=e&&e.slickGrid,this.dataView=e&&e.dataView}defineGrid(){this.columns=[{id:"title",name:"Title",field:"title",nameKey:"TITLE",filterable:!0},{id:"duration",name:"Duration",field:"duration",nameKey:"DURATION",sortable:!0,filterable:!0},{id:"percentComplete",name:"% Complete",field:"percentComplete",nameKey:"PERCENT_COMPLETE",sortable:!0,filterable:!0,type:"number",formatter:f.percentCompleteBar,filter:{model:v.compoundSlider,options:{hideSliderNumber:!1}}},{id:"start",name:"Start",field:"start",nameKey:"START",filterable:!0,type:"dateUs",filter:{model:v.compoundDate}},{id:"finish",name:"Finish",field:"finish",nameKey:"FINISH",filterable:!0,type:"dateUs",filter:{model:v.compoundDate}},{id:"completed",name:"Completed",field:"completed",nameKey:"COMPLETED",maxWidth:80,formatter:f.checkmarkMaterial,type:"boolean",minWidth:100,sortable:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"true"},{value:!1,label:"false"}],model:v.singleSelect}}],this.gridOptions={columnPicker:{hideForceFitButton:!0,hideSyncResizeButton:!0,onColumnsChanged:(e,i)=>{console.log("Column selection changed from Column Picker, visible columns: ",i.visibleColumns)}},enableAutoResize:!0,enableGridMenu:!0,autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:!0,enableCellNavigation:!0,gridMenu:{menuUsabilityOverride:()=>!0,commandTitleKey:"CUSTOM_COMMANDS",iconCssClass:"mdi mdi-dots-vertical",hideForceFitButton:!0,hideSyncResizeButton:!0,hideToggleFilterCommand:!1,menuWidth:17,resizeOnShowHeaderRow:!0,subItemChevronClass:"mdi mdi-chevron-down mdi-rotate-270",commandItems:[{iconCssClass:"mdi mdi-help-circle",titleKey:"HELP",disabled:!1,command:"help",positionOrder:90,cssClass:"bold",textCssClass:"blue"},{divider:!0,command:"",positionOrder:89},{title:"Command 1",command:"command1",positionOrder:91,cssClass:"orange",iconCssClass:"mdi mdi-alert",action:(e,i)=>alert(i.command),itemUsabilityOverride:e=>e&&Array.isArray(e.columns)?e.columns.length===e.visibleColumns.length:!0},{title:"Command 2",command:"command2",positionOrder:92,cssClass:"red",textCssClass:"italic",action:(e,i)=>alert(i.command),itemVisibilityOverride:()=>this.aureliaGrid?this.isObjectEmpty(this.aureliaGrid.filterService.getColumnFilters()):!0},{title:"Disabled command",disabled:!0,command:"disabled-command",positionOrder:98},{command:"",divider:!0,positionOrder:98},{command:"export",title:"Exports",positionOrder:99,commandItems:[{command:"exports-txt",title:"Text (tab delimited)"},{command:"sub-menu",title:"Excel",cssClass:"green",subMenuTitle:"available formats",subMenuTitleCssClass:"text-italic orange",commandItems:[{command:"exports-csv",title:"Excel (csv)"},{command:"exports-xlsx",title:"Excel (xlsx)"}]}]},{command:"feedback",title:"Feedback",positionOrder:100,commandItems:[{command:"request-update",title:"Request update from supplier",iconCssClass:"mdi mdi-star",tooltip:"this will automatically send an alert to the shipping team to contact the user for an update"},"divider",{command:"sub-menu",title:"Contact Us",iconCssClass:"mdi mdi-account",subMenuTitle:"contact us...",subMenuTitleCssClass:"italic",commandItems:[{command:"contact-email",title:"Email us",iconCssClass:"mdi mdi-pencil-outline"},{command:"contact-chat",title:"Chat with us",iconCssClass:"mdi mdi-message-text-outline"},{command:"contact-meeting",title:"Book an appointment",iconCssClass:"mdi mdi-coffee"}]}]}],onCommand:(e,i)=>{const r=i.item?.command;r.includes("exports-")?alert("Exporting as "+i?.item.title):r.includes("contact-")||r==="help"?alert("Command: "+i.command):console.log("onGridMenuCommand",i.command)},onColumnsChanged:(e,i)=>{console.log("Column selection changed from Grid Menu, visible columns: ",i.visibleColumns)}},enableTranslate:!0,i18n:this.i18n}}getData(){const e=[];for(let i=0;i<500;i++)e[i]={id:i,title:"Task "+i,phone:this.generatePhoneNumber(),duration:Math.round(Math.random()*25)+" days",percentComplete:Math.round(Math.random()*100),start:"01/01/2009",finish:"01/05/2009",completed:i%5===0};this.dataset=e}generatePhoneNumber(){let e="";for(let i=0;i<10;i++)e+=Math.round(Math.random()*9)+"";return e}async switchLanguage(){const e=this.selectedLanguage==="en"?"fr":"en";await this.i18n.setLocale(e),this.selectedLanguage=e}toggleGridMenu(e){this.aureliaGrid?.extensionService&&this.aureliaGrid.extensionService.getExtensionInstanceByName("gridMenu").showGridMenu(e,{dropSide:"right"})}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}isObjectEmpty(e){for(const i in e)if(e.hasOwnProperty(i)&&e[i]!=="")return!1;return!0}}rl=PT();Ui=RT(rl,0,"Example09",Om,Ui);AT(rl,1,Ui);const LT=Object.freeze(Object.defineProperty({__proto__:null,get Example09(){return Ui}},Symbol.toStringTag,{value:"Module"})),Dm="example10",pn=`<h2>
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
    columns.bind="columns1"
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
    columns.bind="columns2"
    options.bind="gridOptions2"
    dataset.bind="dataset2"
    on-aurelia-grid-created.trigger="aureliaGrid2Ready($event.detail)"
    on-grid-state-changed.trigger="grid2StateChanged($event.detail)"
  >
  </aurelia-slickgrid>
</div>
`,Mm=[],Pm={};let er;function zT(t){er||(er=E.define({name:Dm,template:pn,dependencies:Mm,bindables:Pm})),t.register(er)}const NT=Object.freeze(Object.defineProperty({__proto__:null,bindables:Pm,default:pn,dependencies:Mm,name:Dm,register:zT,template:pn},Symbol.toStringTag,{value:"Module"}));var WT=Object.create,nl=Object.defineProperty,BT=Object.getOwnPropertyDescriptor,jT=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),fi=t=>{throw TypeError(t)},Im=(t,e,i)=>e in t?nl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,yd=(t,e)=>nl(t,"name",{value:e,configurable:!0}),VT=t=>[,,,WT(null)],Gm=["class","method","getter","setter","accessor","field","value","get","set"],Ut=t=>t!==void 0&&typeof t!="function"?fi("Function expected"):t,HT=(t,e,i,r,a)=>({kind:Gm[t],name:e,metadata:r,addInitializer:n=>i._?fi("Already initialized"):a.push(Ut(n||null))}),UT=(t,e)=>Im(e,jT("metadata"),t[3]),hn=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)e&1?n[a].call(i):r=n[a].call(i,r);return r},Fm=(t,e,i,r,a,n)=>{var l,d,u,s,m,o=e&7,g=!!(e&8),c=!!(e&16),p=o>3?t.length+1:o?g?1:2:0,_=Gm[o+5],w=o>3&&(t[p-1]=[]),x=t[p]||(t[p]=[]),b=o&&(!c&&!g&&(a=a.prototype),o<5&&(o>3||!c)&&BT(o<4?a:{get[i](){return Sd(this,n)},set[i](h){return Cd(this,n,h)}},i));o?c&&o<4&&yd(n,(o>2?"set ":o>1?"get ":"")+i):yd(a,i);for(var y=r.length-1;y>=0;y--)s=HT(o,i,u={},t[3],x),o&&(s.static=g,s.private=c,m=s.access={has:c?h=>qT(a,h):h=>i in h},o^3&&(m.get=c?h=>(o^1?Sd:YT)(h,a,o^4?n:b.get):h=>h[i]),o>2&&(m.set=c?(h,S)=>Cd(h,a,S,o^4?n:b.set):(h,S)=>h[i]=S)),d=(0,r[y])(o?o<4?c?n:b[_]:o>4?void 0:{get:b.get,set:b.set}:a,s),u._=1,o^4||d===void 0?Ut(d)&&(o>4?w.unshift(d):o?c?n=d:b[_]=d:a=d):typeof d!="object"||d===null?fi("Object expected"):(Ut(l=d.get)&&(b.get=l),Ut(l=d.set)&&(b.set=l),Ut(l=d.init)&&w.unshift(l));return o||UT(t,a),b&&nl(a,i,b),c?o^4?n:b:a},H=(t,e,i)=>Im(t,typeof e!="symbol"?e+"":e,i),ol=(t,e,i)=>e.has(t)||fi("Cannot "+i),qT=(t,e)=>Object(e)!==e?fi('Cannot use the "in" operator on this value'):t.has(e),Sd=(t,e,i)=>(ol(t,e,"read from private field"),i?i.call(t):e.get(t)),Cd=(t,e,i,r)=>(ol(t,e,"write to private field"),r?r.call(t,i):e.set(t,i),i),YT=(t,e,i)=>(ol(t,e,"access private method"),i),Am,Rm,_t;Rm=[T(NT)],Am=[O()];class ri{constructor(){H(this,"isGrid2WithPagination",hn(_t,8,this,!0)),hn(_t,11,this),H(this,"aureliaGrid1"),H(this,"aureliaGrid2"),H(this,"columns1",[]),H(this,"columns2",[]),H(this,"gridOptions1"),H(this,"gridOptions2"),H(this,"dataset1",[]),H(this,"dataset2",[]),H(this,"hideSubTitle",!1),H(this,"selectedTitles",""),H(this,"selectedTitle",""),H(this,"selectedGrid2IDs",[]),this.defineGrids()}attached(){this.dataset1=this.prepareData(495),this.dataset2=this.prepareData(525)}aureliaGrid1Ready(e){this.aureliaGrid1=e}aureliaGrid2Ready(e){this.aureliaGrid2=e}defineGrids(){this.columns1=[{id:"title",name:"Title",field:"title",sortable:!0,filterable:!0},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,type:"number",filterable:!0},{id:"complete",name:"% Complete",field:"percentComplete",formatter:f.percentCompleteBar,type:"number",filterable:!0,sortable:!0},{id:"start",name:"Start",field:"start",formatter:f.dateIso,exportWithFormatter:!0,type:"date",filterable:!0,sortable:!0,filter:{model:v.compoundDate}},{id:"finish",name:"Finish",field:"finish",formatter:f.dateIso,exportWithFormatter:!0,type:"date",filterable:!0,sortable:!0,filter:{model:v.compoundDate}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",formatter:f.checkmarkMaterial,type:"boolean",sortable:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"true"},{value:!1,label:"false"}],model:v.singleSelect}}],this.columns2=[{id:"title",name:"Title",field:"title",sortable:!0,filterable:!0},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,type:"number",filterable:!0},{id:"complete",name:"% Complete",field:"percentComplete",formatter:f.percentCompleteBar,type:"number",filterable:!0,sortable:!0},{id:"start",name:"Start",field:"start",formatter:f.dateIso,exportWithFormatter:!0,type:"date",filterable:!0,sortable:!0,filter:{model:v.compoundDate}},{id:"finish",name:"Finish",field:"finish",formatter:f.dateIso,exportWithFormatter:!0,type:"date",filterable:!0,sortable:!0,filter:{model:v.compoundDate}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",formatter:f.checkmarkMaterial,type:"boolean",sortable:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"true"},{value:!1,label:"false"}],model:v.singleSelect}}],this.gridOptions1={enableAutoResize:!1,enableCellNavigation:!0,enableSelection:!0,enableCheckboxSelector:!0,enableFiltering:!0,checkboxSelector:{hideSelectAllCheckbox:!0},multiSelect:!1,selectionOptions:{selectActiveRow:!0},columnPicker:{hideForceFitButton:!0},gridMenu:{hideForceFitButton:!0},gridHeight:225,gridWidth:800,enablePagination:!0,pagination:{pageSizes:[5,10,15,20,25,50,75,100],pageSize:5},presets:{pagination:{pageNumber:2,pageSize:5}}},this.gridOptions2={enableAutoResize:!1,enableCellNavigation:!0,enableFiltering:!0,checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0,applySelectOnAllPages:!0},enableSelection:!0,selectionOptions:{selectActiveRow:!1},enableCheckboxSelector:!0,gridHeight:255,gridWidth:800,enablePagination:!0,pagination:{pageSizes:[5,10,15,20,25,50,75,100],pageSize:5},presets:{rowSelection:{dataContextIds:[3,12,13,522]}}}}prepareData(e){const i=[];for(let r=0;r<e;r++){const a=2e3+Math.floor(Math.random()*10),n=Math.floor(Math.random()*11),l=Math.floor(Math.random()*29),d=Math.round(Math.random()*100);i[r]={id:r,title:"Task "+r,duration:Math.round(Math.random()*100)+"",percentComplete:d,percentCompleteNumber:d,start:new Date(a,n,l),finish:new Date(a,n+1,l),effortDriven:r%5===0}}return i}goToGrid1FirstPage(){this.aureliaGrid1.paginationService.goToFirstPage()}goToGrid1LastPage(){this.aureliaGrid1.paginationService.goToLastPage()}goToGrid2FirstPage(){this.aureliaGrid2.paginationService.goToFirstPage()}goToGrid2LastPage(){this.aureliaGrid2.paginationService.goToLastPage()}grid1StateChanged(e){console.log("Grid State changed:: ",e),console.log("Grid State changed:: ",e.change)}grid2StateChanged(e){console.log("Grid State changed:: ",e),console.log("Grid State changed:: ",e.change),e.gridState.rowSelection&&(this.selectedGrid2IDs=e.gridState.rowSelection.filteredDataContextIds||[],this.selectedGrid2IDs=this.selectedGrid2IDs.sort((i,r)=>i-r),this.selectedTitles=this.selectedGrid2IDs.map(i=>`Task ${i}`).join(","),this.selectedTitles.length>293&&(this.selectedTitles=this.selectedTitles.substring(0,293)+"..."))}isGrid2WithPaginationChanged(){this.aureliaGrid2.paginationService.togglePaginationVisibility(this.isGrid2WithPagination)}onGrid1SelectedRowsChanged(e,i){const r=i?.grid;Array.isArray(i.rows)&&(this.selectedTitle=i.rows.map(a=>{const n=r.getDataItem(a);return n&&n.title||""}))}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid2.resizerService.resizeGrid(0)}}_t=VT();Fm(_t,5,"isGrid2WithPagination",Am,ri);ri=Fm(_t,0,"Example10",Rm,ri);hn(_t,1,ri);const KT=Object.freeze(Object.defineProperty({__proto__:null,get Example10(){return ri}},Symbol.toStringTag,{value:"Module"})),Lm="example11",gn=`<h2>
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
  columns.bind="columns"
  options.bind="gridOptions"
  dataset.bind="dataset"
  on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
>
</aurelia-slickgrid>
`,zm=[],Nm={};let tr;function QT(t){tr||(tr=E.define({name:Lm,template:gn,dependencies:zm,bindables:Nm})),t.register(tr)}const ZT=Object.freeze(Object.defineProperty({__proto__:null,bindables:Nm,default:gn,dependencies:zm,name:Lm,register:QT,template:gn},Symbol.toStringTag,{value:"Module"}));var JT=Object.create,ll=Object.defineProperty,XT=Object.getOwnPropertyDescriptor,eE=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Wm=t=>{throw TypeError(t)},Bm=(t,e,i)=>e in t?ll(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,tE=(t,e)=>ll(t,"name",{value:e,configurable:!0}),iE=t=>[,,,JT(null)],aE=["class","method","getter","setter","accessor","field","value","get","set"],jm=t=>t!==void 0&&typeof t!="function"?Wm("Function expected"):t,rE=(t,e,i,r,a)=>({kind:aE[t],name:e,metadata:r,addInitializer:n=>i._?Wm("Already initialized"):a.push(jm(n||null))}),nE=(t,e)=>Bm(e,eE("metadata"),t[3]),oE=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},lE=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&XT(a,i));tE(a,i);for(var p=r.length-1;p>=0;p--)u=rE(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,jm(l)&&(a=l);return nE(t,a),c&&ll(a,i,c),m?s^4?n:c:a},je=(t,e,i)=>Bm(t,typeof e!="symbol"?e+"":e,i),Vm,sl;Vm=[T(ZT)];class qi{constructor(){je(this,"aureliaGrid"),je(this,"dataView"),je(this,"grid"),je(this,"gridService"),je(this,"columns",[]),je(this,"gridOptions"),je(this,"dataset",[]),je(this,"hideSubTitle",!1),this.defineGrid(),this.mockData(1e3)}aureliaGridReady(e){this.aureliaGrid=e,this.dataView=e.dataView,this.grid=e.slickGrid,this.gridService=e.gridService}defineGrid(){this.columns=[{id:"delete",field:"id",excludeFromHeaderMenu:!0,formatter:f.icon,params:{iconCssClass:"mdi mdi-trash-can pointer"},minWidth:30,maxWidth:30,onCellClick:(e,i)=>{console.log(i),confirm("Are you sure?")&&this.aureliaGrid.gridService.deleteItemById(i.dataContext.id)}},{id:"title",name:"Title",field:"title",sortable:!0,editor:{model:C.longText}},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,type:"number",editor:{model:C.text},onCellChange:(e,i)=>{alert("onCellChange directly attached to the column definition"),console.log(i)}},{id:"complete",name:"% Complete",field:"percentComplete",formatter:f.percentCompleteBar,type:"number",editor:{model:C.integer}},{id:"start",name:"Start",field:"start",formatter:f.dateIso,sortable:!0,type:"date"},{id:"finish",name:"Finish",field:"finish",formatter:f.dateIso,sortable:!0,type:"date"},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",formatter:f.checkmarkMaterial,type:"number",editor:{model:C.checkbox}}],this.gridOptions={asyncEditorLoading:!1,autoResize:{container:"#demo-container",rightPadding:10},editable:!0,enableColumnPicker:!0,enableCellNavigation:!0,enableSelection:!0}}mockData(e){const i=[];for(let r=0;r<e;r++){const a=2e3+Math.floor(Math.random()*10),n=Math.floor(Math.random()*11),l=Math.floor(Math.random()*29),d=Math.round(Math.random()*100);i[r]={id:r,title:"Task "+r,duration:Math.round(Math.random()*100)+"",percentComplete:d,percentCompleteNumber:d,start:new Date(a,n,l),finish:new Date(a,n+1,l),effortDriven:r%5===0}}this.dataset=i}addNewItem(e){const i=this.createNewItem(1);this.aureliaGrid.gridService.addItem(i,{position:e})}createNewItem(e=1){const i=this.aureliaGrid.dataView.getItems();let r=0;i.forEach(s=>{s.id>r&&(r=s.id)});const a=r+e,n=2e3+Math.floor(Math.random()*10),l=Math.floor(Math.random()*11),d=Math.floor(Math.random()*29),u=Math.round(Math.random()*100);return{id:a,title:"Task "+a,duration:Math.round(Math.random()*100)+"",percentComplete:u,percentCompleteNumber:u,start:new Date(n,l,d),finish:new Date(n,l+2,d),effortDriven:!0}}changeDurationBackgroundColor(){this.dataView.getItemMetadata=this.updateItemMetadataForDurationOver40(this.dataView.getItemMetadata),this.grid.invalidate()}highlighFifthRow(){this.scrollGridTop(),this.aureliaGrid.gridService.highlightRow(4,1500)}updateItemMetadataForDurationOver40(e){const i="duration-bg";return r=>{const a=this.dataView.getItem(r);let n={cssClasses:""};return typeof e=="object"&&(n=e(r)),n&&a&&a.duration&&+a.duration>40&&(n.cssClasses=(n.cssClasses||"")+" "+i),n}}updateSecondItem(){this.scrollGridTop();const e=this.aureliaGrid.gridService.getDataItemByRowNumber(1);e.duration=Math.round(Math.random()*100),this.aureliaGrid.gridService.updateItem(e)}scrollGridBottom(){this.aureliaGrid.slickGrid.navigateBottom()}scrollGridTop(){this.aureliaGrid.slickGrid.navigateTop()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}sl=iE();qi=lE(sl,0,"Example11",Vm,qi);oE(sl,1,qi);const sE=Object.freeze(Object.defineProperty({__proto__:null,get Example11(){return qi}},Symbol.toStringTag,{value:"Module"})),Hm="example12",bn=`<h2>
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
  columns.bind="columns"
  options.bind="gridOptions"
  dataset.bind="dataset"
  on-grid-state-changed.trigger="gridStateChanged($event.detail)"
  on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
>
</aurelia-slickgrid>
`,Um=[],qm={};let ir;function dE(t){ir||(ir=E.define({name:Hm,template:bn,dependencies:Um,bindables:qm})),t.register(ir)}const cE=Object.freeze(Object.defineProperty({__proto__:null,bindables:qm,default:bn,dependencies:Um,name:Hm,register:dE,template:bn},Symbol.toStringTag,{value:"Module"}));var uE=Object.create,dl=Object.defineProperty,mE=Object.getOwnPropertyDescriptor,pE=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Ym=t=>{throw TypeError(t)},Km=(t,e,i)=>e in t?dl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,hE=(t,e)=>dl(t,"name",{value:e,configurable:!0}),gE=t=>[,,,uE(null)],bE=["class","method","getter","setter","accessor","field","value","get","set"],Qm=t=>t!==void 0&&typeof t!="function"?Ym("Function expected"):t,fE=(t,e,i,r,a)=>({kind:bE[t],name:e,metadata:r,addInitializer:n=>i._?Ym("Already initialized"):a.push(Qm(n||null))}),vE=(t,e)=>Km(e,pE("metadata"),t[3]),_E=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},yE=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&mE(a,i));hE(a,i);for(var p=r.length-1;p>=0;p--)u=fE(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,Qm(l)&&(a=l);return vE(t,a),c&&dl(a,i,c),m?s^4?n:c:a},ie=(t,e,i)=>Km(t,typeof e!="symbol"?e+"":e,i),Zm,cl;const SE=1500,wd=(t,e,i,r,a,n)=>n.getOptions().i18n?.tr("TASK_X",{x:i})??"";Zm=[T(cE)];class Yi{constructor(e=M(xe)){ie(this,"i18n",e),ie(this,"aureliaGrid"),ie(this,"gridOptions"),ie(this,"columns",[]),ie(this,"dataset",[]),ie(this,"selectedLanguage",""),ie(this,"duplicateTitleHeaderCount",1),ie(this,"gridObj"),ie(this,"hideSubTitle",!1),ie(this,"excelExportService",new G),ie(this,"textExportService",new Da),this.defineGrid();const i="en";this.i18n.setLocale(i),this.selectedLanguage=i}attached(){this.getData(SE)}aureliaGridReady(e){this.aureliaGrid=e,this.gridObj=e.slickGrid}defineGrid(){this.columns=[{id:"title",name:"Title",field:"id",nameKey:"TITLE",minWidth:100,formatter:wd,sortable:!0,filterable:!0,params:{useFormatterOuputToFilter:!0}},{id:"description",name:"Description",field:"description",filterable:!0,sortable:!0,minWidth:80},{id:"duration",name:"Duration (days)",field:"duration",nameKey:"DURATION",sortable:!0,formatter:f.percentCompleteBar,minWidth:100,exportWithFormatter:!1,filterable:!0,type:"number",filter:{model:v.slider,options:{hideSliderNumber:!0}}},{id:"start",name:"Start",field:"start",nameKey:"START",formatter:f.dateIso,outputType:"dateIso",type:"date",minWidth:100,filterable:!0,filter:{model:v.compoundDate}},{id:"finish",name:"Finish",field:"finish",nameKey:"FINISH",formatter:f.dateIso,outputType:"dateIso",type:"date",minWidth:100,filterable:!0,filter:{model:v.compoundDate}},{id:"completedBool",name:"Completed",field:"completedBool",nameKey:"COMPLETED",minWidth:100,sortable:!0,formatter:f.checkmarkMaterial,exportCustomFormatter:f.translateBoolean,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,labelKey:"TRUE"},{value:!1,labelKey:"FALSE"}],model:v.singleSelect,enableTranslateLabel:!0}},{id:"completed",name:"Completed",field:"completed",nameKey:"COMPLETED",formatter:f.translate,sortable:!0,minWidth:100,exportWithFormatter:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:"TRUE",labelKey:"TRUE"},{value:"FALSE",labelKey:"FALSE"}],collectionSortBy:{property:"labelKey",sortDesc:!0},model:v.singleSelect,enableTranslateLabel:!0}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableAutoResize:!0,enableExcelCopyBuffer:!0,enableFiltering:!0,enableTranslate:!0,i18n:this.i18n,checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},enableCheckboxSelector:!0,enableSelection:!0,showCustomFooter:!0,customFooterOptions:{metricTexts:{itemsKey:"ITEMS",ofKey:"OF",lastUpdateKey:"LAST_UPDATE"},dateFormat:"YYYY-MM-DD, hh:mm a",hideTotalItemCount:!1,hideLastUpdateTimestamp:!1},gridMenu:{hideExportCsvCommand:!1,hideExportTextDelimitedCommand:!1},enableExcelExport:!0,enableTextExport:!0,textExportOptions:{exportWithFormatter:!0,sanitizeDataExport:!0},excelExportOptions:{customExcelHeader:(e,i)=>{const r=this.i18n.getLocale()==="fr"?"Titre qui est suffisament long pour être coupé":"My header that is long enough to wrap",a=e.getStyleSheet(),n={font:{size:12,fontName:"Calibri",bold:!0,color:"FF0000FF"},alignment:{wrapText:!0}},l=a.createFormat(n);i.setRowInstructions(0,{height:30}),i.mergeCells("B1","D1");const d=[];d.push({value:""}),d.push({value:r,metadata:{style:l.id}}),i.data.push(d)},exportWithFormatter:!0,sanitizeDataExport:!0},externalResources:[this.excelExportService,this.textExportService]}}getData(e){const i=[];for(let r=0;r<e;r++){const a=2e3+Math.floor(Math.random()*10),n=Math.floor(Math.random()*11),l=Math.floor(Math.random()*29);i[r]={id:r,description:r%5?"desc "+r:"🚀🦄 español",duration:Math.round(Math.random()*100)+"",start:new Date(a,n,l),finish:new Date(a,n+1,l),completedBool:r%5===0,completed:r%5===0?"TRUE":"FALSE"}}this.dataset=i}dynamicallyAddTitleHeader(){const e={id:`title${this.duplicateTitleHeaderCount++}`,field:"id",nameKey:"TITLE",formatter:wd,sortable:!0,minWidth:100,filterable:!0,params:{useFormatterOuputToFilter:!0}};this.columns.push(e),this.columns=this.columns.slice()}exportToExcel(){this.excelExportService.exportToExcel({filename:"Export",format:"xlsx"})}exportToFile(e="csv"){this.textExportService.exportToFile({delimiter:e==="csv"?",":"	",filename:"myExport",format:e==="csv"?"csv":"txt"})}gridStateChanged(e){console.log("Grid State changed:: ",e),console.log("Grid State changed:: ",e.change)}async switchLanguage(){const e=this.selectedLanguage==="en"?"fr":"en";await this.i18n.setLocale(e),this.selectedLanguage=e}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}cl=gE();Yi=yE(cl,0,"Example12",Zm,Yi);_E(cl,1,Yi);const CE=Object.freeze(Object.defineProperty({__proto__:null,get Example12(){return Yi}},Symbol.toStringTag,{value:"Module"})),Jm="example13",fn=`<h2>
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
      <i class="mdi mdi-close"></i> Clear Grouping
    </button>
    <button class="btn btn-outline-secondary btn-xs btn-icon" data-test="clear-filter-btn" click.trigger="clearFilters()">
      <i class="mdi mdi-close"></i> Clear Filters
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
  columns.bind="columns"
  options.bind="gridOptions"
  dataset.bind="dataset"
  on-before-export-to-excel.trigger="processing = true"
  on-after-export-to-excel.trigger="processing = false"
  on-before-export-to-pdf.trigger="processing = true"
  on-after-export-to-pdf.trigger="processing = false"
  on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
>
</aurelia-slickgrid>
`,Xm=[],ep={};let ar;function wE(t){ar||(ar=E.define({name:Jm,template:fn,dependencies:Xm,bindables:ep})),t.register(ar)}const xE=Object.freeze(Object.defineProperty({__proto__:null,bindables:ep,default:fn,dependencies:Xm,name:Jm,register:wE,template:fn},Symbol.toStringTag,{value:"Module"}));var TE=Object.create,ul=Object.defineProperty,EE=Object.getOwnPropertyDescriptor,$E=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),tp=t=>{throw TypeError(t)},ip=(t,e,i)=>e in t?ul(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,kE=(t,e)=>ul(t,"name",{value:e,configurable:!0}),OE=t=>[,,,TE(null)],DE=["class","method","getter","setter","accessor","field","value","get","set"],ap=t=>t!==void 0&&typeof t!="function"?tp("Function expected"):t,ME=(t,e,i,r,a)=>({kind:DE[t],name:e,metadata:r,addInitializer:n=>i._?tp("Already initialized"):a.push(ap(n||null))}),PE=(t,e)=>ip(e,$E("metadata"),t[3]),IE=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},GE=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&EE(a,i));kE(a,i);for(var p=r.length-1;p>=0;p--)u=ME(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,ap(l)&&(a=l);return PE(t,a),c&&ul(a,i,c),m?s^4?n:c:a},ae=(t,e,i)=>ip(t,typeof e!="symbol"?e+"":e,i),rp,ml;const FE=1e3;rp=[T(xE)];class Ki{constructor(){ae(this,"aureliaGrid"),ae(this,"columns",[]),ae(this,"gridOptions"),ae(this,"dataset",[]),ae(this,"dataviewObj"),ae(this,"gridObj"),ae(this,"hideSubTitle",!1),ae(this,"processing",!1),ae(this,"excelExportService",new G),ae(this,"pdfExportService",new Pi),ae(this,"textExportService",new Da),this.defineGrid()}attached(){this.loadData(FE)}aureliaGridReady(e){this.aureliaGrid=e,this.dataviewObj=e.dataView,this.gridObj=e.slickGrid,this.groupByDuration()}defineGrid(){const e=document.createElement("div"),i=document.createElement("button"),r=document.createElement("span");r.className="mdi mdi-help-circle no-padding",i.dataset.test="col1-hello-btn",i.className="btn btn-outline-secondary btn-xs btn-icon ms-1",i.textContent="Click me",i.title="simple column header test with a button click listener",i.addEventListener("click",()=>alert("Hello World")),i.appendChild(r),e.appendChild(document.createTextNode("Id ")),e.appendChild(i),this.columns=[{id:"num",name:e,field:"num",type:"number",columnPickerLabel:"Custom Label",width:140,maxWidth:150,excludeFromExport:!0,resizable:!0,filterable:!0,selectable:!1},{id:"title",name:"Title",field:"title",width:50,minWidth:50,cssClass:"cell-title",filterable:!0,sortable:!0},{id:"duration",name:"Duration",field:"duration",minWidth:50,width:60,filterable:!0,filter:{model:v.slider,operator:">="},sortable:!0,type:"number",groupTotalsFormatter:V.sumTotals,params:{groupFormatterPrefix:"Total: "}},{id:"percentComplete",name:"% Complete",field:"percentComplete",minWidth:70,width:90,formatter:f.percentCompleteBar,filterable:!0,filter:{model:v.compoundSlider},sortable:!0,type:"number",groupTotalsFormatter:V.avgTotalsPercentage,params:{groupFormatterPrefix:"<i>Avg</i>: "}},{id:"start",name:"Start",field:"start",minWidth:60,maxWidth:130,filterable:!0,filter:{model:v.compoundDate},sortable:!0,type:"dateIso",formatter:f.dateIso,exportWithFormatter:!0},{id:"finish",name:"Finish",field:"finish",minWidth:60,maxWidth:130,filterable:!0,filter:{model:v.compoundDate},sortable:!0,type:"dateIso",formatter:f.dateIso,exportWithFormatter:!0},{id:"cost",name:"Cost",field:"cost",minWidth:70,width:80,sortable:!0,filterable:!0,filter:{model:v.compoundInputNumber},type:"number",formatter:f.currency,groupTotalsFormatter:V.sumTotalsCurrency,params:{displayNegativeNumberWithParentheses:!0,currencyPrefix:"€",groupFormatterCurrencyPrefix:"€",minDecimal:2,maxDecimal:4,groupFormatterPrefix:"<b>Total</b>: "},excelExportOptions:{style:{font:{outline:!0,italic:!0},format:"€0.00##;[Red](€0.00##)"},width:18},groupTotalsExcelExportOptions:{style:{alignment:{horizontal:"center"},font:{bold:!0,color:"FF005289",underline:"single",fontName:"Consolas",size:10},fill:{type:"pattern",patternType:"solid",fgColor:"FFE6F2F6"},border:{top:{color:"FFa500ff",style:"thick"},left:{color:"FFa500ff",style:"medium"},right:{color:"FFa500ff",style:"dotted"},bottom:{color:"FFa500ff",style:"double"}},format:'"Total: "€0.00##;[Red]"Total: "(€0.00##)'}}},{id:"effortDriven",name:"Effort Driven",minWidth:30,width:80,maxWidth:90,cssClass:"cell-effort-driven",field:"effortDriven",formatter:f.checkmarkMaterial,sortable:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:v.singleSelect}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:!0,enableGrouping:!0,enableExcelExport:!0,enableTextExport:!0,excelExportOptions:{sanitizeDataExport:!0},textExportOptions:{sanitizeDataExport:!0},externalResources:[this.excelExportService,this.pdfExportService,this.textExportService],showCustomFooter:!0,customFooterOptions:{hideMetrics:!1,hideTotalItemCount:!1,hideLastUpdateTimestamp:!1},enablePdfExport:!0,pdfExportOptions:{repeatHeadersOnEachPage:!1,sanitizeDataExport:!0,documentTitle:"Grouping Grid"}}}loadData(e){const i=[];for(let r=0;r<e;r++){const a=2e3+Math.floor(Math.random()*10),n=Math.floor(Math.random()*11),l=Math.floor(Math.random()*29),d=Math.round(Math.random()*100),u=r%33===0?null:Math.round(Math.random()*1e4)/100;i[r]={id:"id_"+r,num:r,title:"Task "+r,duration:Math.round(Math.random()*100)+"",percentComplete:d,percentCompleteNumber:d,start:new Date(a,n,l),finish:new Date(a,n+1,l),cost:r%3?u:u!==null?-u:null,effortDriven:r%5===0}}this.dataset=i}clearGrouping(){this.dataviewObj.setGrouping([])}clearFilters(){this.aureliaGrid.filterService.clearFilters()}collapseAllGroups(){this.dataviewObj.collapseAllGroups()}expandAllGroups(){this.dataviewObj.expandAllGroups()}exportToExcel(){this.excelExportService.exportToExcel({filename:"Export",format:"xlsx"})}exportToPdf(){this.pdfExportService.exportToPdf({filename:"Export"})}groupByDuration(){this.aureliaGrid.filterService.setSortColumnIcons([{columnId:"duration",sortAsc:!0}]),this.dataviewObj.setGrouping({getter:"duration",formatter:e=>`Duration: ${e.value} <span style="color:green">(${e.count} items)</span>`,comparer:(e,i)=>ue.numeric(e.value,i.value,si.asc),aggregators:[new k.Avg("percentComplete"),new k.Sum("cost")],aggregateCollapsed:!1,lazyTotalsCalculation:!0}),this.gridObj.invalidate()}groupByDurationOrderByCount(e){this.aureliaGrid.filterService.setSortColumnIcons([]),this.dataviewObj.setGrouping({getter:"duration",formatter:i=>`Duration: ${i.value} <span style="color:green">(${i.count} items)</span>`,comparer:(i,r)=>i.count-r.count,aggregators:[new k.Avg("percentComplete"),new k.Sum("cost")],aggregateCollapsed:e,lazyTotalsCalculation:!0}),this.gridObj.invalidate()}groupByDurationEffortDriven(){const e=[{columnId:"duration",sortAsc:!0},{columnId:"effortDriven",sortAsc:!0}];this.aureliaGrid.filterService.setSortColumnIcons(e),this.dataviewObj.setGrouping([{getter:"duration",formatter:i=>`Duration: ${i.value} <span style="color:green">(${i.count} items)</span>`,aggregators:[new k.Sum("duration"),new k.Sum("cost")],aggregateCollapsed:!0,lazyTotalsCalculation:!0},{getter:"effortDriven",formatter:i=>`Effort-Driven: ${i.value?"True":"False"} <span style="color:green">(${i.count} items)</span>`,aggregators:[new k.Avg("percentComplete"),new k.Sum("cost")],collapsed:!0,lazyTotalsCalculation:!0}]),this.gridObj.invalidate()}groupByDurationEffortDrivenPercent(){const e=[{columnId:"duration",sortAsc:!0},{columnId:"effortDriven",sortAsc:!0},{columnId:"percentComplete",sortAsc:!0}];this.aureliaGrid.filterService.setSortColumnIcons(e),this.dataviewObj.setGrouping([{getter:"duration",formatter:i=>`Duration: ${i.value} <span style="color:green">(${i.count} items)</span>`,aggregators:[new k.Sum("duration"),new k.Sum("cost")],aggregateCollapsed:!0,lazyTotalsCalculation:!0},{getter:"effortDriven",formatter:i=>`Effort-Driven: ${i.value?"True":"False"}  <span style="color:green">(${i.count} items)</span>`,aggregators:[new k.Sum("duration"),new k.Sum("cost")],lazyTotalsCalculation:!0},{getter:"percentComplete",formatter:i=>`% Complete: ${i.value}  <span style="color:green">(${i.count} items)</span>`,aggregators:[new k.Avg("percentComplete")],aggregateCollapsed:!0,collapsed:!0,lazyTotalsCalculation:!0}]),this.gridObj.invalidate()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}ml=OE();Ki=GE(ml,0,"Example13",rp,Ki);IE(ml,1,Ki);const AE=Object.freeze(Object.defineProperty({__proto__:null,get Example13(){return Ki}},Symbol.toStringTag,{value:"Module"})),np="example14",vn=`<h2>
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
  columns.bind="columns1"
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
  columns.bind="columns2"
  options.bind="gridOptions2"
  dataset.bind="dataset2"
  on-aurelia-grid-created.trigger="aureliaGridReady2($event.detail)"
>
</aurelia-slickgrid>
`,op=[],lp={};let rr;function RE(t){rr||(rr=E.define({name:np,template:vn,dependencies:op,bindables:lp})),t.register(rr)}const LE=Object.freeze(Object.defineProperty({__proto__:null,bindables:lp,default:vn,dependencies:op,name:np,register:RE,template:vn},Symbol.toStringTag,{value:"Module"}));var zE=Object.create,pl=Object.defineProperty,NE=Object.getOwnPropertyDescriptor,WE=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),sp=t=>{throw TypeError(t)},dp=(t,e,i)=>e in t?pl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,BE=(t,e)=>pl(t,"name",{value:e,configurable:!0}),jE=t=>[,,,zE(null)],VE=["class","method","getter","setter","accessor","field","value","get","set"],cp=t=>t!==void 0&&typeof t!="function"?sp("Function expected"):t,HE=(t,e,i,r,a)=>({kind:VE[t],name:e,metadata:r,addInitializer:n=>i._?sp("Already initialized"):a.push(cp(n||null))}),UE=(t,e)=>dp(e,WE("metadata"),t[3]),qE=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},YE=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&NE(a,i));BE(a,i);for(var p=r.length-1;p>=0;p--)u=HE(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,cp(l)&&(a=l);return UE(t,a),c&&pl(a,i,c),m?s^4?n:c:a},re=(t,e,i)=>dp(t,typeof e!="symbol"?e+"":e,i),up,hl;up=[T(LE)];class Qi{constructor(){re(this,"aureliaGrid1"),re(this,"aureliaGrid2"),re(this,"gridObj2"),re(this,"columns1",[]),re(this,"columns2",[]),re(this,"gridOptions1"),re(this,"gridOptions2"),re(this,"dataset1",[]),re(this,"dataset2",[]),re(this,"hideSubTitle",!1),re(this,"isColspanSpreading",!1),this.definedGrid1(),this.definedGrid2()}attached(){this.dataset1=this.getData(500),this.dataset2=this.getData(500)}aureliaGridReady1(e){this.aureliaGrid1=e}aureliaGridReady2(e){this.aureliaGrid2=e,this.gridObj2=e.slickGrid}definedGrid1(){this.columns1=[{id:"title",name:"Title",field:"title",sortable:!0,columnGroup:"Common Factor"},{id:"duration",name:"Duration",field:"duration",columnGroup:"Common Factor"},{id:"start",name:"Start",field:"start",columnGroup:"Period"},{id:"finish",name:"Finish",field:"finish",columnGroup:"Period"},{id:"%",name:"% Complete",field:"percentComplete",selectable:!1,columnGroup:"Analysis"},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",type:"boolean",columnGroup:"Analysis"}],this.gridOptions1={enableAutoResize:!1,enableCellNavigation:!0,enableColumnReorder:!1,enableSorting:!0,createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:28,gridHeight:275,gridWidth:800,enablePdfExport:!0,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!1},externalResources:[new G,new Pi],explicitInitialization:!0,dataView:{globalItemMetadataProvider:{getRowMetadata:(e,i)=>this.renderDifferentColspan(e,i)}},gridMenu:{iconButtonContainer:"preheader"},spreadHiddenColspan:this.isColspanSpreading}}definedGrid2(){this.columns2=[{id:"sel",name:"#",field:"num",behavior:"select",cssClass:"cell-selection",width:40,resizable:!1,selectable:!1},{id:"title",name:"Title",field:"title",sortable:!0,columnGroup:"Common Factor"},{id:"duration",name:"Duration",field:"duration",columnGroup:"Common Factor"},{id:"start",name:"Start",field:"start",columnGroup:"Period"},{id:"finish",name:"Finish",field:"finish",columnGroup:"Period"},{id:"%",name:"% Complete",field:"percentComplete",selectable:!1,columnGroup:"Analysis"},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",type:"boolean",columnGroup:"Analysis"}],this.gridOptions2={enableCellNavigation:!0,enableColumnReorder:!1,createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:25,explicitInitialization:!0,gridHeight:275,gridWidth:800,frozenColumn:2,enablePdfExport:!0,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!1},externalResources:[new G,new Pi],gridMenu:{hideClearFrozenColumnsCommand:!1},headerMenu:{hideFreezeColumnsCommand:!1}}}getData(e){const i=[];for(let r=0;r<e;r++)i[r]={id:r,num:r,title:"Task "+r,duration:"5 days",percentComplete:Math.round(Math.random()*100),start:"01/01/2009",finish:"01/05/2009",effortDriven:r%5===0};return i}setFrozenColumns2(e){this.gridObj2.setOptions({frozenColumn:e}),this.gridOptions2=this.gridObj2.getOptions()}renderDifferentColspan(e,i){return e.id%2===1||i%2===1?{columns:{duration:{colspan:3}}}:{columns:{0:{colspan:"*"}}}}spreadColspan(){this.isColspanSpreading=!this.isColspanSpreading,this.aureliaGrid1.slickGrid?.setOptions({spreadHiddenColspan:this.isColspanSpreading}),this.aureliaGrid1.slickGrid?.resetActiveCell(),this.aureliaGrid1.slickGrid?.invalidate()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid2.resizerService.resizeGrid(0)}}hl=jE();Qi=YE(hl,0,"Example14",up,Qi);qE(hl,1,Qi);const KE=Object.freeze(Object.defineProperty({__proto__:null,get Example14(){return Qi}},Symbol.toStringTag,{value:"Module"})),mp="example15",_n=`<h2>
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
  columns.bind="columns"
  options.bind="gridOptions"
  dataset.bind="dataset"
  on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
  on-grid-state-changed.trigger="gridStateChanged($event.detail)"
>
</aurelia-slickgrid>
`,pp=[],hp={};let nr;function QE(t){nr||(nr=E.define({name:mp,template:_n,dependencies:pp,bindables:hp})),t.register(nr)}const ZE=Object.freeze(Object.defineProperty({__proto__:null,bindables:hp,default:_n,dependencies:pp,name:mp,register:QE,template:_n},Symbol.toStringTag,{value:"Module"}));var JE=Object.create,gl=Object.defineProperty,XE=Object.getOwnPropertyDescriptor,e$=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),gp=t=>{throw TypeError(t)},bp=(t,e,i)=>e in t?gl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,t$=(t,e)=>gl(t,"name",{value:e,configurable:!0}),i$=t=>[,,,JE(null)],a$=["class","method","getter","setter","accessor","field","value","get","set"],fp=t=>t!==void 0&&typeof t!="function"?gp("Function expected"):t,r$=(t,e,i,r,a)=>({kind:a$[t],name:e,metadata:r,addInitializer:n=>i._?gp("Already initialized"):a.push(fp(n||null))}),n$=(t,e)=>bp(e,e$("metadata"),t[3]),o$=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},l$=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&XE(a,i));t$(a,i);for(var p=r.length-1;p>=0;p--)u=r$(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,fp(l)&&(a=l);return n$(t,a),c&&gl(a,i,c),m?s^4?n:c:a},Ze=(t,e,i)=>bp(t,typeof e!="symbol"?e+"":e,i),vp,bl;function Je(t,e){return Math.floor(Math.random()*(e-t+1)+t)}const xd=25,Oi="gridState",Td=500;vp=[T(ZE)];class Zi{constructor(e=M(xe)){Ze(this,"i18n",e),Ze(this,"aureliaGrid"),Ze(this,"columns",[]),Ze(this,"gridOptions"),Ze(this,"dataset",[]),Ze(this,"hideSubTitle",!1),Ze(this,"selectedLanguage","");const i=JSON.parse(localStorage[Oi]||null);this.defineGrid(i);const r="en";this.i18n.setLocale(r),this.selectedLanguage=r}attached(){this.dataset=this.getData(Td)}detaching(){this.saveCurrentGridState()}aureliaGridReady(e){this.aureliaGrid=e}clearGridStateFromLocalStorage(){this.aureliaGrid.gridService.resetGrid(this.columns),this.aureliaGrid.paginationService.changeItemPerPage(xd),setTimeout(()=>localStorage[Oi]=null)}defineGrid(e){const i=[];for(let r=0;r<Td;r++)i.push({value:r,label:r});this.columns=[{id:"title",name:"Title",field:"title",nameKey:"TITLE",filterable:!0,sortable:!0,minWidth:45,width:100,filter:{model:v.compoundInput}},{id:"description",name:"Description",field:"description",filterable:!0,sortable:!0,minWidth:80,width:100,filter:{model:v.input,filterShortcuts:[{titleKey:"BLANK_VALUES",searchTerms:["< A"],iconCssClass:"mdi mdi-filter-minus-outline"},{titleKey:"NON_BLANK_VALUES",searchTerms:["> A"],iconCssClass:"mdi mdi-filter-plus-outline"}]}},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,type:"number",exportCsvForceToKeepAsString:!0,minWidth:55,width:100,nameKey:"DURATION",filterable:!0,filter:{collection:i,model:v.multipleSelect,options:{maxHeight:250,width:175}}},{id:"complete",name:"% Complete",field:"percentComplete",nameKey:"PERCENT_COMPLETE",minWidth:70,type:"number",sortable:!0,width:100,formatter:f.percentCompleteBar,filterable:!0,filter:{model:v.slider,operator:">"}},{id:"start",name:"Start",field:"start",nameKey:"START",formatter:f.dateIso,sortable:!0,minWidth:75,exportWithFormatter:!0,width:100,type:"date",filterable:!0,filter:{model:v.compoundDate,filterShortcuts:[{titleKey:"PAST",searchTerms:[_e(new Date,"YYYY-MM-DD")],operator:"<",iconCssClass:"mdi mdi-calendar"},{titleKey:"FUTURE",searchTerms:[_e(new Date,"YYYY-MM-DD")],operator:">",iconCssClass:"mdi mdi-calendar-clock"}]}},{id:"completed",field:"completed",nameKey:"COMPLETED",minWidth:85,maxWidth:85,formatter:f.checkmarkMaterial,width:100,type:"boolean",sortable:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:v.singleSelect}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableCheckboxSelector:!0,enableFiltering:!0,enableTranslate:!0,i18n:this.i18n,columnPicker:{hideForceFitButton:!0},gridMenu:{hideForceFitButton:!0,hideClearFrozenColumnsCommand:!1},headerMenu:{hideFreezeColumnsCommand:!1},enablePagination:!0,pagination:{pageSizes:[5,10,15,20,25,30,40,50,75,100],pageSize:xd}},e&&(this.gridOptions.presets=e)}getData(e){const i=new Date().getFullYear(),r=[];for(let a=0;a<e;a++){const n=Math.round(Math.random()*100),l=Je(i-15,i+8),d=Je(10,25),u=Je(1,12),s=u<10?`0${u}`:u,m=Je(10,28),o=Je(0,100),g=Je(10,23),c=Je(10,59);r[a]={id:a,title:"Task "+a,description:a%5?"desc "+a:null,duration:n,percentComplete:o,percentCompleteNumber:o,start:new Date(l,u,m),usDateShort:`${u}/${m}/${d}`,utcDate:`${l}-${s}-${m}T${g}:${c}:${c}Z`,completed:a%3===0}}return r}gridStateChanged(e){console.log("Client sample, Grid State changed:: ",e),localStorage[Oi]=JSON.stringify(e.gridState)}saveCurrentGridState(){const e=this.aureliaGrid.gridStateService.getCurrentGridState();console.log("Client sample, current Grid State:: ",e),localStorage[Oi]=JSON.stringify(e)}async switchLanguage(){const e=this.selectedLanguage==="en"?"fr":"en";await this.i18n.setLocale(e),this.selectedLanguage=e}useDefaultPresets(){return{columns:[{columnId:"description",width:170},{columnId:"title",width:55},{columnId:"duration"},{columnId:"complete"},{columnId:"start"},{columnId:"usDateShort"},{columnId:"utcDate"}],filters:[{columnId:"duration",searchTerms:[2,22,44]},{columnId:"usDateShort",operator:"<",searchTerms:["4/20/25"]}],sorters:[{columnId:"duration",direction:"DESC"},{columnId:"complete",direction:"ASC"}]}}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}bl=i$();Zi=l$(bl,0,"Example15",vp,Zi);o$(bl,1,Zi);const s$=Object.freeze(Object.defineProperty({__proto__:null,get Example15(){return Zi}},Symbol.toStringTag,{value:"Module"})),_p="example16",yn=`<h2>
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
  columns.bind="columns"
  options.bind="gridOptions"
  dataset.bind="dataset"
  on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
>
</aurelia-slickgrid>
`,yp=[],Sp={};let or;function d$(t){or||(or=E.define({name:_p,template:yn,dependencies:yp,bindables:Sp})),t.register(or)}const c$=Object.freeze(Object.defineProperty({__proto__:null,bindables:Sp,default:yn,dependencies:yp,name:_p,register:d$,template:yn},Symbol.toStringTag,{value:"Module"}));var u$=Object.create,fl=Object.defineProperty,m$=Object.getOwnPropertyDescriptor,p$=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Cp=t=>{throw TypeError(t)},wp=(t,e,i)=>e in t?fl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,h$=(t,e)=>fl(t,"name",{value:e,configurable:!0}),g$=t=>[,,,u$(null)],b$=["class","method","getter","setter","accessor","field","value","get","set"],xp=t=>t!==void 0&&typeof t!="function"?Cp("Function expected"):t,f$=(t,e,i,r,a)=>({kind:b$[t],name:e,metadata:r,addInitializer:n=>i._?Cp("Already initialized"):a.push(xp(n||null))}),v$=(t,e)=>wp(e,p$("metadata"),t[3]),_$=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},y$=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&m$(a,i));h$(a,i);for(var p=r.length-1;p>=0;p--)u=f$(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,xp(l)&&(a=l);return v$(t,a),c&&fl(a,i,c),m?s^4?n:c:a},It=(t,e,i)=>wp(t,typeof e!="symbol"?e+"":e,i),Tp,vl;Tp=[T(c$)];class Ji{constructor(){It(this,"aureliaGrid"),It(this,"columns",[]),It(this,"gridOptions"),It(this,"dataset",[]),It(this,"hideSubTitle",!1),this.defineGrid()}aureliaGridReady(e){this.aureliaGrid=e}get rowMoveInstance(){return this.aureliaGrid?.extensionService.getExtensionInstanceByName("rowMoveManager")}attached(){this.getData()}defineGrid(){this.columns=[{id:"title",name:"Title",field:"title",filterable:!0},{id:"duration",name:"Duration",field:"duration",filterable:!0,sortable:!0},{id:"%",name:"% Complete",field:"percentComplete",filterable:!0,sortable:!0},{id:"start",name:"Start",field:"start",filterable:!0,sortable:!0,filter:{model:v.compoundDate}},{id:"finish",name:"Finish",field:"finish",filterable:!0,sortable:!0,filter:{model:v.compoundDate}},{id:"effort-driven",name:"Completed",field:"effortDriven",formatter:f.checkmarkMaterial,filterable:!0,sortable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:v.singleSelect}}],this.gridOptions={enableAutoResize:!0,autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:!0,enableCheckboxSelector:!0,checkboxSelector:{hideSelectAllCheckbox:!1,columnIndexPosition:1,hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},enableSelection:!0,selectionOptions:{selectActiveRow:!1},dataView:{syncGridSelection:!0},enableRowMoveManager:!0,rowMoveManager:{columnIndexPosition:0,singleRowMove:!0,disableRowSelection:!0,cancelEditOnDrag:!0,hideRowMoveShadow:!1,width:30,onBeforeMoveRows:this.onBeforeMoveRow.bind(this),onMoveRows:this.onMoveRows.bind(this)},showCustomFooter:!0,presets:{rowSelection:{dataContextIds:[1,2,6,7]}}}}getData(){const e=[];for(let i=0;i<500;i++)e[i]={id:i,title:"Task "+i,duration:Math.round(Math.random()*25)+" days",percentComplete:Math.round(Math.random()*100),start:"01/01/2009",finish:"01/05/2009",effortDriven:i%5===0};this.dataset=e}onBeforeMoveRow(e,i){for(const r of i.rows)if(r===i.insertBefore||r===i.insertBefore-1&&i.insertBefore-1!==this.aureliaGrid.dataView.getItemCount())return e.preventDefault(),!1;return!0}onMoveRows(e,i){const r=i.rows,a=i.insertBefore,n=[];this.aureliaGrid.dataView.sort(void 0,!0);const l=this.aureliaGrid.dataView.getItems(),d=this.aureliaGrid.dataView.getFilteredItems(),u=this.aureliaGrid.dataView.getItem(a),s=u?this.aureliaGrid.dataView.getIdxById(u.id):this.aureliaGrid.dataView.getItemCount(),m=[];r.forEach(_=>m.push(d[_]));const o=m.map(_=>this.aureliaGrid.dataView.getIdxById(_.id)),g=l.slice(0,s),c=l.slice(s,l.length);r.sort((_,w)=>_-w);for(const _ of o)_&&n.push(l[_]);o.reverse();for(const _ of o)_!==void 0&&s!==void 0&&(_<s?g.splice(_,1):c.splice(_-s,1));const p=g.concat(n.concat(c));this.dataset=p}hideDurationColumnDynamically(){this.aureliaGrid.gridService.hideColumnById("duration")}disableFilters(){this.aureliaGrid.filterService.disableFilterFunctionality(!0)}disableSorting(){this.aureliaGrid.sortService.disableSortFunctionality(!0)}addEditDeleteColumns(){if(this.columns[0].id!=="change-symbol"){const e=[{id:"change-symbol",field:"id",excludeFromColumnPicker:!0,excludeFromGridMenu:!0,excludeFromHeaderMenu:!0,formatter:f.icon,params:{iconCssClass:"mdi mdi-pencil pointer"},minWidth:30,maxWidth:30,onCellClick:(r,a)=>{alert(`Technically we should Edit "Task ${a.dataContext.id}"`)}},{id:"delete-symbol",field:"id",excludeFromColumnPicker:!0,excludeFromGridMenu:!0,excludeFromHeaderMenu:!0,formatter:f.icon,params:{iconCssClass:"mdi mdi-trash-can pointer"},minWidth:30,maxWidth:30,onCellClick:(r,a)=>{confirm("Are you sure?")&&this.aureliaGrid.gridService.deleteItemById(a.dataContext.id)}}],i=this.aureliaGrid.gridService.getAllColumnDefinitions();i.unshift(e[0],e[1]),this.columns=[...i]}}toggleFilter(){this.aureliaGrid.filterService.toggleFilterFunctionality()}toggleSorting(){this.aureliaGrid.sortService.toggleSortFunctionality()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}vl=g$();Ji=y$(vl,0,"Example16",Tp,Ji);_$(vl,1,Ji);const S$=Object.freeze(Object.defineProperty({__proto__:null,get Example16(){return Ji}},Symbol.toStringTag,{value:"Module"})),Ep="example17",Sn=`<div class="container-fluid">
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
    columns.bind="columns"
    options.bind="gridOptions"
    dataset.bind="dataset"
    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
  >
  </aurelia-slickgrid>
</div>
`,$p=[],kp={};let lr;function C$(t){lr||(lr=E.define({name:Ep,template:Sn,dependencies:$p,bindables:kp})),t.register(lr)}const w$=Object.freeze(Object.defineProperty({__proto__:null,bindables:kp,default:Sn,dependencies:$p,name:Ep,register:C$,template:Sn},Symbol.toStringTag,{value:"Module"}));var x$=Object.create,_l=Object.defineProperty,T$=Object.getOwnPropertyDescriptor,E$=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Op=t=>{throw TypeError(t)},Dp=(t,e,i)=>e in t?_l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,$$=(t,e)=>_l(t,"name",{value:e,configurable:!0}),k$=t=>[,,,x$(null)],O$=["class","method","getter","setter","accessor","field","value","get","set"],Mp=t=>t!==void 0&&typeof t!="function"?Op("Function expected"):t,D$=(t,e,i,r,a)=>({kind:O$[t],name:e,metadata:r,addInitializer:n=>i._?Op("Already initialized"):a.push(Mp(n||null))}),M$=(t,e)=>Dp(e,E$("metadata"),t[3]),P$=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},I$=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&T$(a,i));$$(a,i);for(var p=r.length-1;p>=0;p--)u=D$(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,Mp(l)&&(a=l);return M$(t,a),c&&_l(a,i,c),m?s^4?n:c:a},Oe=(t,e,i)=>Dp(t,typeof e!="symbol"?e+"":e,i),Pp,yl;const G$="assets/data";Pp=[T(w$)];class Xi{constructor(){Oe(this,"aureliaGrid"),Oe(this,"columns",[]),Oe(this,"gridOptions"),Oe(this,"gridCreated",!1),Oe(this,"hideSubTitle",!1),Oe(this,"dataset",[]),Oe(this,"paginationPosition","top"),Oe(this,"templateUrl",`${G$}/users.csv`),Oe(this,"uploadFileRef","")}aureliaGridReady(e){this.aureliaGrid=e}destroyGrid(){this.gridCreated=!1}handleFileImport(e){const i=e.target.files[0];if(i.name.endsWith(".csv")){const r=new FileReader;r.onload=a=>{const n=a.target.result;this.dynamicallyCreateGrid(n)},r.readAsText(i)}else alert("File must be a CSV file")}handleDefaultCsv(){this.dynamicallyCreateGrid(`First Name,Last Name,Age,Type
Bob,Smith,33,Teacher
John,Doe,20,Student
Jane,Doe,21,Student`),this.uploadFileRef=""}dynamicallyCreateGrid(e){this.gridCreated=!1;const i=e?.split(`
`),r=[],a=[];i.forEach((n,l)=>{const d=n.split(","),u={};if(l===0)for(const s of d){const m=Av(s);r.push({id:m,name:s,field:m,filterable:!0,sortable:!0})}else d.forEach((s,m)=>{u[r[m].id]=s}),"id"in u?a.push(u):a.push({...u,id:l})}),this.gridOptions={gridHeight:300,gridWidth:800,enableFiltering:!0,enableExcelExport:!0,externalResources:[new G],headerRowHeight:35,rowHeight:33},this.dataset=a,this.columns=r,console.log(this.columns,this.dataset),this.gridCreated=!0}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}yl=k$();Xi=I$(yl,0,"Example17",Pp,Xi);P$(yl,1,Xi);const F$=Object.freeze(Object.defineProperty({__proto__:null,get Example17(){return Xi}},Symbol.toStringTag,{value:"Module"})),Ip="example18",Cn=`<h2>
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
              <option model.bind="column.id" repeat.for="column of columns">\${column.name}</option>
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
  columns.bind="columns"
  options.bind="gridOptions"
  dataset.bind="dataset"
  on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
>
</aurelia-slickgrid>
`,Gp=[],Fp={};let sr;function A$(t){sr||(sr=E.define({name:Ip,template:Cn,dependencies:Gp,bindables:Fp})),t.register(sr)}const R$=Object.freeze(Object.defineProperty({__proto__:null,bindables:Fp,default:Cn,dependencies:Gp,name:Ip,register:A$,template:Cn},Symbol.toStringTag,{value:"Module"}));var L$=Object.create,Sl=Object.defineProperty,z$=Object.getOwnPropertyDescriptor,N$=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Ap=t=>{throw TypeError(t)},Rp=(t,e,i)=>e in t?Sl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,W$=(t,e)=>Sl(t,"name",{value:e,configurable:!0}),B$=t=>[,,,L$(null)],j$=["class","method","getter","setter","accessor","field","value","get","set"],Lp=t=>t!==void 0&&typeof t!="function"?Ap("Function expected"):t,V$=(t,e,i,r,a)=>({kind:j$[t],name:e,metadata:r,addInitializer:n=>i._?Ap("Already initialized"):a.push(Lp(n||null))}),H$=(t,e)=>Rp(e,N$("metadata"),t[3]),U$=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},q$=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&z$(a,i));W$(a,i);for(var p=r.length-1;p>=0;p--)u=V$(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,Lp(l)&&(a=l);return H$(t,a),c&&Sl(a,i,c),m?s^4?n:c:a},z=(t,e,i)=>Rp(t,typeof e!="symbol"?e+"":e,i),zp,Cl;const Y$=1e4;zp=[T(R$)];class ea{constructor(){z(this,"_darkMode",!1),z(this,"aureliaGrid"),z(this,"columns",[]),z(this,"dataset",[]),z(this,"dataviewObj"),z(this,"draggableGroupingPlugin"),z(this,"durationOrderByCount",!1),z(this,"gridObj"),z(this,"gridOptions"),z(this,"hideSubTitle",!1),z(this,"processing",!1),z(this,"selectedGroupingFields",["","",""]),z(this,"excelExportService",new G),z(this,"pdfExportService",new Pi),z(this,"textExportService",new Da),this.loadData(Y$),this.defineGrid()}aureliaGridReady(e){this.aureliaGrid=e,this.gridObj=e.slickGrid,this.dataviewObj=e.dataView}detaching(){document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light"}defineGrid(){this.columns=[{id:"title",name:"Title",field:"title",columnGroup:"Common Factor",width:70,minWidth:50,cssClass:"cell-title",filterable:!0,sortable:!0,grouping:{getter:"title",formatter:e=>`Title: ${e.value}  <span class="text-primary">(${e.count} items)</span>`,aggregators:[new k.Sum("cost")],aggregateCollapsed:!1,collapsed:!1}},{id:"duration",name:"Duration",field:"duration",columnGroup:"Common Factor",width:70,sortable:!0,filterable:!0,filter:{model:v.slider,operator:">="},type:"number",groupTotalsFormatter:V.sumTotals,grouping:{getter:"duration",formatter:e=>`Duration: ${e.value} <span class="text-primary">(${e.count} items)</span>`,comparer:(e,i)=>this.durationOrderByCount?e.count-i.count:ue.numeric(e.value,i.value,si.asc),aggregators:[new k.Sum("cost")],aggregateCollapsed:!1,collapsed:!1}},{id:"start",name:"Start",field:"start",columnGroup:"Period",minWidth:60,sortable:!0,filterable:!0,filter:{model:v.compoundDate},formatter:f.dateIso,type:"dateUtc",outputType:"dateIso",exportWithFormatter:!0,grouping:{getter:"start",formatter:e=>`Start: ${e.value}  <span class="text-primary">(${e.count} items)</span>`,aggregators:[new k.Sum("cost")],aggregateCollapsed:!1,collapsed:!1}},{id:"finish",name:"Finish",field:"finish",columnGroup:"Period",minWidth:60,sortable:!0,filterable:!0,filter:{model:v.compoundDate},formatter:f.dateIso,type:"dateUtc",outputType:"dateIso",exportWithFormatter:!0,grouping:{getter:"finish",formatter:e=>`Finish: ${e.value} <span class="text-primary">(${e.count} items)</span>`,aggregators:[new k.Sum("cost")],aggregateCollapsed:!1,collapsed:!1}},{id:"cost",name:"Cost",field:"cost",columnGroup:"Analysis",width:90,sortable:!0,filterable:!0,filter:{model:v.compoundInput},formatter:f.dollar,exportWithFormatter:!0,groupTotalsFormatter:V.sumTotalsDollar,type:"number",grouping:{getter:"cost",formatter:e=>`Cost: ${e.value} <span class="text-primary">(${e.count} items)</span>`,aggregators:[new k.Sum("cost")],aggregateCollapsed:!0,collapsed:!0}},{id:"percentComplete",name:"% Complete",field:"percentComplete",columnGroup:"Analysis",minWidth:70,width:90,formatter:f.percentCompleteBar,type:"number",filterable:!0,filter:{model:v.compoundSlider},sortable:!0,groupTotalsFormatter:V.avgTotalsPercentage,grouping:{getter:"percentComplete",formatter:e=>`% Complete: ${e.value}  <span class="text-primary">(${e.count} items)</span>`,aggregators:[new k.Sum("cost")],aggregateCollapsed:!1,collapsed:!1},params:{groupFormatterPrefix:"<i>Avg</i>: "}},{id:"effortDriven",name:"Effort-Driven",field:"effortDriven",columnGroup:"Analysis",width:80,minWidth:20,maxWidth:100,cssClass:"cell-effort-driven",sortable:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:v.singleSelect},formatter:f.checkmarkMaterial,grouping:{getter:"effortDriven",formatter:e=>`Effort-Driven: ${e.value?"True":"False"} <span class="text-primary">(${e.count} items)</span>`,aggregators:[new k.Sum("cost")],collapsed:!1}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableDraggableGrouping:!0,createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:30,createTopHeaderPanel:!0,showTopHeaderPanel:!0,topHeaderPanelHeight:35,showCustomFooter:!0,enableFiltering:!0,enableSorting:!0,enableColumnReorder:!0,gridMenu:{onCommand:(e,i)=>{i.command==="toggle-preheader"&&this.clearGrouping()}},draggableGrouping:{dropPlaceHolderText:"Drop a column header here to group by the column",deleteIconCssClass:"mdi mdi-close color-danger",sortAscIconCssClass:"mdi mdi-arrow-up",sortDescIconCssClass:"mdi mdi-arrow-down",onGroupChanged:(e,i)=>this.onGroupChanged(i),onExtensionRegistered:e=>this.draggableGroupingPlugin=e,initialGroupBy:["duration"]},darkMode:this._darkMode,excelExportOptions:{sanitizeDataExport:!0},textExportOptions:{sanitizeDataExport:!0},externalResources:[this.excelExportService,this.pdfExportService,this.textExportService],pdfExportOptions:{repeatHeadersOnEachPage:!0,documentTitle:"Grouping Grid"}}}loadData(e){const i=[];for(let r=0;r<e;r++){const a=2e3+Math.floor(Math.random()*10),n=Math.floor(Math.random()*11),l=Math.floor(Math.random()*29),d=Math.round(Math.random()*100),u=Math.round(Math.random()*1e4)/100;i[r]={id:"id_"+r,num:r,title:"Task "+r,duration:Math.round(Math.random()*100)+"",percentComplete:d,percentCompleteNumber:d,start:new Date(a,n,l),finish:new Date(a,n+1,l),cost:r%33===0?-u:u,effortDriven:r%5===0}}this.dataset=i}clearGroupsAndSelects(){this.clearGroupingSelects(),this.clearGrouping()}clearGroupingSelects(){this.selectedGroupingFields.forEach((e,i)=>this.selectedGroupingFields[i]=""),this.selectedGroupingFields=[...this.selectedGroupingFields]}clearGrouping(e=!0){this.draggableGroupingPlugin?.clearDroppedGroups(),e&&this.gridObj?.invalidate()}collapseAllGroups(){this.dataviewObj.collapseAllGroups()}expandAllGroups(){this.dataviewObj.expandAllGroups()}exportToExcel(){this.excelExportService.exportToExcel({filename:"Export",format:"xlsx"})}exportToPdf(){this.pdfExportService.exportToPdf({filename:"Export"})}groupByDurationOrderByCount(e=!1){if(this.durationOrderByCount=e,this.clearGrouping(!1),this.draggableGroupingPlugin?.setDroppedGroups){this.showPreHeader(),this.draggableGroupingPlugin.setDroppedGroups("duration");const i=e?[]:[{columnId:"duration",sortAsc:!0}];this.gridObj?.setSortColumns(i),this.gridObj?.invalidate()}}groupByDurationEffortDriven(){this.clearGrouping(!1),this.draggableGroupingPlugin?.setDroppedGroups&&(this.showPreHeader(),this.draggableGroupingPlugin.setDroppedGroups(["duration","effortDriven"]),this.gridObj?.invalidate())}groupByFieldName(){if(this.clearGrouping(),this.draggableGroupingPlugin&&this.draggableGroupingPlugin.setDroppedGroups){this.showPreHeader();const e=this.selectedGroupingFields.filter(i=>i!=="");e.length===0?this.clearGrouping():this.draggableGroupingPlugin.setDroppedGroups(e),this.gridObj.invalidate()}}onGroupChanged(e){const i=e?.caller??[],r=e?.groupColumns??[];Array.isArray(this.selectedGroupingFields)&&Array.isArray(r)&&r.length>0?(this.selectedGroupingFields.forEach((a,n)=>this.selectedGroupingFields[n]=r[n]?.getter??""),this.selectedGroupingFields=[...this.selectedGroupingFields]):r.length===0&&i==="remove-group"&&this.clearGroupingSelects()}showPreHeader(){this.gridObj.setPreHeaderPanelVisibility(!0)}setFiltersDynamically(){this.aureliaGrid.filterService.updateFilters([{columnId:"percentComplete",operator:">=",searchTerms:["55"]},{columnId:"cost",operator:"<",searchTerms:["80"]}])}setSortingDynamically(){this.aureliaGrid.sortService.updateSorting([{columnId:"percentComplete",direction:"ASC"}])}toggleDraggableGroupingRow(){this.clearGroupsAndSelects(),this.gridObj.setTopHeaderPanelVisibility(!this.gridObj.getOptions().showTopHeaderPanel)}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.aureliaGrid.slickGrid?.setOptions({darkMode:this._darkMode})}toggleBodyBackground(){this._darkMode?(document.querySelector(".panel-wm-content").classList.add("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="dark"):(document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light")}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}Cl=B$();ea=q$(Cl,0,"Example18",zp,ea);U$(Cl,1,ea);const K$=Object.freeze(Object.defineProperty({__proto__:null,get Example18(){return ea}},Symbol.toStringTag,{value:"Module"})),Np="example19",wn=`<h2>
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
  columns.bind="columns"
  options.bind="gridOptions"
  dataset.bind="dataset"
  extensions.bind="extensions"
  instances.bind="aureliaGrid"
>
</aurelia-slickgrid>
`,Wp=[],Bp={};let dr;function Q$(t){dr||(dr=E.define({name:Np,template:wn,dependencies:Wp,bindables:Bp})),t.register(dr)}const Z$=Object.freeze(Object.defineProperty({__proto__:null,bindables:Bp,default:wn,dependencies:Wp,name:Np,register:Q$,template:wn},Symbol.toStringTag,{value:"Module"}));var J$=Object.create,wl=Object.defineProperty,X$=Object.getOwnPropertyDescriptor,ek=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),vi=t=>{throw TypeError(t)},jp=(t,e,i)=>e in t?wl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Ed=(t,e)=>wl(t,"name",{value:e,configurable:!0}),tk=t=>[,,,J$(null)],Vp=["class","method","getter","setter","accessor","field","value","get","set"],qt=t=>t!==void 0&&typeof t!="function"?vi("Function expected"):t,ik=(t,e,i,r,a)=>({kind:Vp[t],name:e,metadata:r,addInitializer:n=>i._?vi("Already initialized"):a.push(qt(n||null))}),ak=(t,e)=>jp(e,ek("metadata"),t[3]),Yt=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)e&1?n[a].call(i):r=n[a].call(i,r);return r},xl=(t,e,i,r,a,n)=>{var l,d,u,s,m,o=e&7,g=!!(e&8),c=!!(e&16),p=o>3?t.length+1:o?g?1:2:0,_=Vp[o+5],w=o>3&&(t[p-1]=[]),x=t[p]||(t[p]=[]),b=o&&(!c&&!g&&(a=a.prototype),o<5&&(o>3||!c)&&X$(o<4?a:{get[i](){return $d(this,n)},set[i](h){return kd(this,n,h)}},i));o?c&&o<4&&Ed(n,(o>2?"set ":o>1?"get ":"")+i):Ed(a,i);for(var y=r.length-1;y>=0;y--)s=ik(o,i,u={},t[3],x),o&&(s.static=g,s.private=c,m=s.access={has:c?h=>rk(a,h):h=>i in h},o^3&&(m.get=c?h=>(o^1?$d:nk)(h,a,o^4?n:b.get):h=>h[i]),o>2&&(m.set=c?(h,S)=>kd(h,a,S,o^4?n:b.set):(h,S)=>h[i]=S)),d=(0,r[y])(o?o<4?c?n:b[_]:o>4?void 0:{get:b.get,set:b.set}:a,s),u._=1,o^4||d===void 0?qt(d)&&(o>4?w.unshift(d):o?c?n=d:b[_]=d:a=d):typeof d!="object"||d===null?vi("Object expected"):(qt(l=d.get)&&(b.get=l),qt(l=d.set)&&(b.set=l),qt(l=d.init)&&w.unshift(l));return o||ak(t,a),b&&wl(a,i,b),c?o^4?n:b:a},me=(t,e,i)=>jp(t,typeof e!="symbol"?e+"":e,i),Tl=(t,e,i)=>e.has(t)||vi("Cannot "+i),rk=(t,e)=>Object(e)!==e?vi('Cannot use the "in" operator on this value'):t.has(e),$d=(t,e,i)=>(Tl(t,e,"read from private field"),i?i.call(t):e.get(t)),kd=(t,e,i,r)=>(Tl(t,e,"write to private field"),r?r.call(t,i):e.set(t,i),i),nk=(t,e,i)=>(Tl(t,e,"access private method"),i),Hp,Up,qp,Ae;const ok=250,lk=1e3;qp=[T(Z$)],Up=[O],Hp=[O];class yt{constructor(){me(this,"_darkMode",!1),me(this,"detailViewRowCount",Yt(Ae,8,this,9)),Yt(Ae,11,this),me(this,"serverWaitDelay",Yt(Ae,12,this,ok)),Yt(Ae,15,this),me(this,"aureliaGrid"),me(this,"gridOptions"),me(this,"columns",[]),me(this,"dataset",[]),me(this,"flashAlertType","info"),me(this,"hideSubTitle",!1),me(this,"message",""),this.defineGrid()}get rowDetailInstance(){return this.aureliaGrid?.extensionService.getExtensionInstanceByName("rowDetailView")}attached(){this.getData()}detaching(){document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light"}defineGrid(){this.columns=[{id:"title",name:"Title",field:"title",sortable:!0,width:70,filterable:!0,editor:{model:C.text}},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,type:"number",minWidth:90,filterable:!0},{id:"percent2",name:"% Complete",field:"percentComplete2",editor:{model:C.slider},formatter:f.progressBar,type:"number",sortable:!0,minWidth:100,filterable:!0,filter:{model:v.slider,operator:">"}},{id:"start",name:"Start",field:"start",formatter:f.dateIso,sortable:!0,type:"date",minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:v.compoundDate}},{id:"finish",name:"Finish",field:"finish",formatter:f.dateIso,sortable:!0,type:"date",minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:v.compoundDate}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",minWidth:100,formatter:f.checkmarkMaterial,type:"boolean",filterable:!0,sortable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:v.singleSelect}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:!0,enableRowDetailView:!0,rowTopOffsetRenderType:"top",darkMode:this._darkMode,datasetIdPropertyName:"rowId",externalResources:[uo],rowDetailView:{process:e=>this.simulateServerAsyncCall(e),loadOnce:!0,singleRowExpand:!1,useRowClick:!0,panelRows:this.detailViewRowCount,preloadViewModel:pt,viewModel:ye,parentRef:this},selectionOptions:{selectActiveRow:!0}}}getData(){const e=[];for(let i=0;i<lk;i++){const r=2e3+Math.floor(Math.random()*10),a=Math.floor(Math.random()*11),n=Math.floor(Math.random()*29),l=Math.round(Math.random()*100);e[i]={rowId:i,title:"Task "+i,duration:i%33===0?null:Math.floor(Math.random()*100)+1,percentComplete:l,percentComplete2:l,percentCompleteNumber:l,start:new Date(r,a,n),finish:new Date(r,a+1,n),effortDriven:i%5===0}}this.dataset=e}changeDetailViewRowCount(){const e=this.rowDetailInstance.getOptions();e&&e.panelRows&&(e.panelRows=this.detailViewRowCount,this.rowDetailInstance.setOptions(e))}changeEditableGrid(){return this.rowDetailInstance.collapseAll(),this.rowDetailInstance.addonOptions.useRowClick=!1,this.gridOptions.autoCommitEdit=!this.gridOptions.autoCommitEdit,this.aureliaGrid?.slickGrid.setOptions({editable:!0,autoEdit:!0,enableCellNavigation:!0}),!0}closeAllRowDetail(){this.rowDetailInstance.collapseAll()}showFlashMessage(e,i="info"){this.message=e,this.flashAlertType=i}simulateServerAsyncCall(e){const i=["John Doe","Jane Doe","Chuck Norris","Bumblebee","Jackie Chan","Elvis Presley","Bob Marley","Mohammed Ali","Bruce Lee","Rocky Balboa"];return new Promise(r=>{setTimeout(()=>{const a=e;a.assignee=i[this.randomNumber(0,9)]||"",a.reporter=i[this.randomNumber(0,9)]||"",r(a)},this.serverWaitDelay)})}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.aureliaGrid.slickGrid?.setOptions({darkMode:this._darkMode}),this.closeAllRowDetail()}toggleBodyBackground(){this._darkMode?(document.querySelector(".panel-wm-content").classList.add("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="dark"):(document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light")}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}randomNumber(e,i){return Math.floor(Math.random()*(i-e+1)+e)}}Ae=tk();xl(Ae,5,"detailViewRowCount",Up,yt);xl(Ae,5,"serverWaitDelay",Hp,yt);yt=xl(Ae,0,"Example19",qp,yt);Yt(Ae,1,yt);const sk=Object.freeze(Object.defineProperty({__proto__:null,get Example19(){return yt}},Symbol.toStringTag,{value:"Module"})),Yp="example20",xn=`<h2>
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
  columns.bind="columns"
  options.bind="gridOptions"
  dataset.bind="dataset"
  on-validation-error.trigger="onCellValidationError($event.detail.eventData, $event.detail.args)"
  on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
>
</aurelia-slickgrid>
`,Kp=[],Qp={};let cr;function dk(t){cr||(cr=E.define({name:Yp,template:xn,dependencies:Kp,bindables:Qp})),t.register(cr)}const ck=Object.freeze(Object.defineProperty({__proto__:null,bindables:Qp,default:xn,dependencies:Kp,name:Yp,register:dk,template:xn},Symbol.toStringTag,{value:"Module"}));var uk=Object.create,El=Object.defineProperty,mk=Object.getOwnPropertyDescriptor,pk=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Zp=t=>{throw TypeError(t)},Jp=(t,e,i)=>e in t?El(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,hk=(t,e)=>El(t,"name",{value:e,configurable:!0}),gk=t=>[,,,uk(null)],bk=["class","method","getter","setter","accessor","field","value","get","set"],Xp=t=>t!==void 0&&typeof t!="function"?Zp("Function expected"):t,fk=(t,e,i,r,a)=>({kind:bk[t],name:e,metadata:r,addInitializer:n=>i._?Zp("Already initialized"):a.push(Xp(n||null))}),vk=(t,e)=>Jp(e,pk("metadata"),t[3]),_k=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},yk=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&mk(a,i));hk(a,i);for(var p=r.length-1;p>=0;p--)u=fk(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,Xp(l)&&(a=l);return vk(t,a),c&&El(a,i,c),m?s^4?n:c:a},pe=(t,e,i)=>Jp(t,typeof e!="symbol"?e+"":e,i),eh,$l;eh=[T(ck)];class ta{constructor(){pe(this,"aureliaGrid"),pe(this,"columns",[]),pe(this,"gridObj"),pe(this,"gridOptions"),pe(this,"frozenColumnCount",2),pe(this,"frozenRowCount",3),pe(this,"hideSubTitle",!1),pe(this,"isFrozenBottom",!1),pe(this,"dataset",[]),pe(this,"slickEventHandler"),this.defineGrid(),this.slickEventHandler=new Qd}aureliaGridReady(e){this.aureliaGrid=e,this.gridObj=e&&e.slickGrid,this.slickEventHandler.subscribe(this.gridObj.onMouseEnter,i=>this.colorizeHoveringRow(i,!0)),this.slickEventHandler.subscribe(this.gridObj.onMouseLeave,i=>this.colorizeHoveringRow(i,!1))}colorizeHoveringRow(e,i){const r=this.gridObj.getCellFromEvent(e),a=i?[r?.row??0]:[];this.gridObj.setSelectedRows(a),e.preventDefault()}attached(){this.getData()}detaching(){this.slickEventHandler.unsubscribeAll()}defineGrid(){this.columns=[{id:"sel",name:"#",field:"id",minWidth:40,width:40,maxWidth:40,cannotTriggerInsert:!0,resizable:!1,unselectable:!0},{id:"title",name:"Title",field:"title",minWidth:100,width:120,filterable:!0,sortable:!0},{id:"percentComplete",name:"% Complete",field:"percentComplete",resizable:!1,minWidth:130,width:140,formatter:f.percentCompleteBar,type:"number",filterable:!0,filter:{model:v.slider,operator:">="},sortable:!0},{id:"start",name:"Start",field:"start",minWidth:100,width:120,filterable:!0,sortable:!0,formatter:f.dateIso},{id:"finish",name:"Finish",field:"finish",minWidth:100,width:120,filterable:!0,sortable:!0,formatter:f.dateIso},{id:"cost",name:"Cost | Duration",field:"cost",formatter:this.costDurationFormatter.bind(this),minWidth:150,width:170,sortable:!0,filter:{model:v.compoundSlider},editor:{model:C.dualInput,params:{leftInput:{field:"cost",type:"float",decimal:2,minValue:0,maxValue:5e4,placeholder:"< 50K",errorMessage:"Cost must be positive and below $50K."},rightInput:{field:"duration",type:"float",minValue:0,maxValue:100,title:"make sure Duration is withing its range of 0 to 100",errorMessage:"Duration must be between 0 and 100."}}}},{id:"effortDriven",name:"Effort Driven",field:"effortDriven",minWidth:100,width:120,formatter:f.checkmarkMaterial,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:v.singleSelect},sortable:!0},{id:"title1",name:"Title 1",field:"title1",minWidth:100,width:120,filterable:!0,sortable:!0},{id:"title2",name:"Title 2",field:"title2",minWidth:100,width:120,filterable:!0,sortable:!0},{id:"title3",name:"Title 3",field:"title3",minWidth:100,width:120,filterable:!0,sortable:!0},{id:"title4",name:"Title 4",field:"title4",minWidth:100,width:120,filterable:!0,sortable:!0}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},gridWidth:920,enableCellNavigation:!0,editable:!0,autoEdit:!0,enableExcelCopyBuffer:!0,frozenColumn:this.frozenColumnCount,frozenRow:this.frozenRowCount,gridMenu:{hideClearFrozenColumnsCommand:!1},headerMenu:{hideFreezeColumnsCommand:!1}}}getData(){const e=[];for(let i=0;i<500;i++)e[i]={id:i,title:"Task "+i,cost:i%33===0?null:Math.random()*1e4,duration:i%8?Math.round(Math.random()*100)+"":null,percentComplete:Math.round(Math.random()*100),start:new Date(2009,0,1),finish:new Date(2009,4,5),effortDriven:i%5===0,title1:`Some Text ${Math.round(Math.random()*25)}`,title2:`Some Text ${Math.round(Math.random()*25)}`,title3:`Some Text ${Math.round(Math.random()*25)}`,title4:`Some Text ${Math.round(Math.random()*25)}`};this.dataset=e}changeFrozenColumnCount(){this.gridObj&&this.gridObj.setOptions&&this.gridObj.setOptions({frozenColumn:this.frozenColumnCount})}changeFrozenRowCount(){this.gridObj&&this.gridObj.setOptions&&this.gridObj.setOptions({frozenRow:this.frozenRowCount})}costDurationFormatter(e,i,r,a,n){const l=this.isNullUndefinedOrEmpty(n.cost)?"n/a":mo(n.cost,0,2,!1,"$","",".",",");let d="n/a";return!this.isNullUndefinedOrEmpty(n.duration)&&n.duration>=0&&(d=`${n.duration} ${n.duration>1?"days":"day"}`),`<b>${l}</b> | ${d}`}isNullUndefinedOrEmpty(e){return e===""||e===null||e===void 0}onCellValidationError(e,i){alert(i.validationResults.msg)}setFrozenColumns(e){this.gridObj.setOptions({frozenColumn:e}),this.gridOptions=this.gridObj.getOptions()}toggleFrozenBottomRows(){this.gridObj&&this.gridObj.setOptions&&(this.gridObj.setOptions({frozenBottom:!this.isFrozenBottom}),this.isFrozenBottom=!this.isFrozenBottom)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}$l=gk();ta=yk($l,0,"Example20",eh,ta);_k($l,1,ta);const Sk=Object.freeze(Object.defineProperty({__proto__:null,get Example20(){return ta}},Symbol.toStringTag,{value:"Module"})),th="example21",Tn=`<h2>
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
      <option repeat.for="column of columns" model.bind="column">\${column.name}</option>
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

<aurelia-slickgrid grid-id="grid21" columns.bind="columns" options.bind="gridOptions" dataset.bind="dataset" instances.bind="aureliaGrid">
</aurelia-slickgrid>
`,ih=[],ah={};let ur;function Ck(t){ur||(ur=E.define({name:th,template:Tn,dependencies:ih,bindables:ah})),t.register(ur)}const wk=Object.freeze(Object.defineProperty({__proto__:null,bindables:ah,default:Tn,dependencies:ih,name:th,register:Ck,template:Tn},Symbol.toStringTag,{value:"Module"}));var xk=Object.create,kl=Object.defineProperty,Tk=Object.getOwnPropertyDescriptor,Ek=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),_i=t=>{throw TypeError(t)},rh=(t,e,i)=>e in t?kl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Od=(t,e)=>kl(t,"name",{value:e,configurable:!0}),$k=t=>[,,,xk(null)],nh=["class","method","getter","setter","accessor","field","value","get","set"],Kt=t=>t!==void 0&&typeof t!="function"?_i("Function expected"):t,kk=(t,e,i,r,a)=>({kind:nh[t],name:e,metadata:r,addInitializer:n=>i._?_i("Already initialized"):a.push(Kt(n||null))}),Ok=(t,e)=>rh(e,Ek("metadata"),t[3]),at=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)e&1?n[a].call(i):r=n[a].call(i,r);return r},Ia=(t,e,i,r,a,n)=>{var l,d,u,s,m,o=e&7,g=!!(e&8),c=!!(e&16),p=o>3?t.length+1:o?g?1:2:0,_=nh[o+5],w=o>3&&(t[p-1]=[]),x=t[p]||(t[p]=[]),b=o&&(!c&&!g&&(a=a.prototype),o<5&&(o>3||!c)&&Tk(o<4?a:{get[i](){return Dd(this,n)},set[i](h){return Md(this,n,h)}},i));o?c&&o<4&&Od(n,(o>2?"set ":o>1?"get ":"")+i):Od(a,i);for(var y=r.length-1;y>=0;y--)s=kk(o,i,u={},t[3],x),o&&(s.static=g,s.private=c,m=s.access={has:c?h=>Dk(a,h):h=>i in h},o^3&&(m.get=c?h=>(o^1?Dd:Mk)(h,a,o^4?n:b.get):h=>h[i]),o>2&&(m.set=c?(h,S)=>Md(h,a,S,o^4?n:b.set):(h,S)=>h[i]=S)),d=(0,r[y])(o?o<4?c?n:b[_]:o>4?void 0:{get:b.get,set:b.set}:a,s),u._=1,o^4||d===void 0?Kt(d)&&(o>4?w.unshift(d):o?c?n=d:b[_]=d:a=d):typeof d!="object"||d===null?_i("Object expected"):(Kt(l=d.get)&&(b.get=l),Kt(l=d.set)&&(b.set=l),Kt(l=d.init)&&w.unshift(l));return o||Ok(t,a),b&&kl(a,i,b),c?o^4?n:b:a},De=(t,e,i)=>rh(t,typeof e!="symbol"?e+"":e,i),Ol=(t,e,i)=>e.has(t)||_i("Cannot "+i),Dk=(t,e)=>Object(e)!==e?_i('Cannot use the "in" operator on this value'):t.has(e),Dd=(t,e,i)=>(Ol(t,e,"read from private field"),i?i.call(t):e.get(t)),Md=(t,e,i,r)=>(Ol(t,e,"write to private field"),r?r.call(t,i):e.set(t,i),i),Mk=(t,e,i)=>(Ol(t,e,"access private method"),i),oh,lh,sh,dh,te;dh=[T(wk)],sh=[O()],lh=[O()],oh=[O()];class nt{constructor(){De(this,"selectedColumn",at(te,8,this)),at(te,11,this),De(this,"selectedOperator",at(te,12,this)),at(te,15,this),De(this,"searchValue",at(te,16,this,"")),at(te,19,this),De(this,"aureliaGrid"),De(this,"columns",[]),De(this,"gridOptions"),De(this,"dataset",[]),De(this,"hideSubTitle",!1),De(this,"operatorList",["=","<","<=",">",">=","<>","StartsWith","EndsWith"]),this.defineGrid()}attached(){this.getData()}defineGrid(){this.columns=[{id:"title",name:"Title",field:"title",width:100,sortable:!0},{id:"duration",name:"Duration (days)",field:"duration",width:100,sortable:!0,type:"number"},{id:"complete",name:"% Complete",field:"percentComplete",width:100,sortable:!0,formatter:f.percentCompleteBar,type:"number"},{id:"start",name:"Start",field:"start",width:100,sortable:!0,formatter:f.dateIso,type:"date"},{id:"finish",name:"Finish",field:"finish",width:100,sortable:!0,formatter:f.dateIso,type:"date"},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",width:100,sortable:!0,formatter:f.checkmarkMaterial,type:"number"}],this.gridOptions={autoHeight:!0,autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:!0,showHeaderRow:!1,alwaysShowVerticalScroll:!1,enableColumnPicker:!0,enableCellNavigation:!0,enableSelection:!0}}getData(){const e=[];for(let i=0;i<25;i++){const r=2e3+Math.floor(Math.random()*10),a=Math.floor(Math.random()*11),n=Math.floor(Math.random()*29),l=Math.round(Math.random()*100);e[i]={id:i,title:"Task "+i,duration:Math.round(Math.random()*100)+"",percentComplete:l,percentCompleteNumber:l,start:new Date(r,a,n),finish:new Date(r,a+1,n),effortDriven:i%5===0}}this.dataset=e}clearGridSearchInput(){this.searchValue="",this.updateFilter()}selectedOperatorChanged(){this.updateFilter()}selectedColumnChanged(){this.updateFilter()}searchValueChanged(){this.updateFilter()}updateFilter(){this.aureliaGrid?.filterService.updateSingleFilter({columnId:`${this.selectedColumn.id||""}`,operator:this.selectedOperator,searchTerms:[this.searchValue||""]})}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}te=$k();Ia(te,5,"selectedColumn",sh,nt);Ia(te,5,"selectedOperator",lh,nt);Ia(te,5,"searchValue",oh,nt);nt=Ia(te,0,"Example21",dh,nt);at(te,1,nt);const Pk=Object.freeze(Object.defineProperty({__proto__:null,get Example21(){return nt}},Symbol.toStringTag,{value:"Module"})),ch="example22",En=`<h2>
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
      <aurelia-slickgrid grid-id="grid1" columns.bind="columns1" options.bind="gridOptions1" dataset.bind="dataset1"> </aurelia-slickgrid>
    </div>
    <div class="tab-pane fade" id="fetch" role="tabpanel" aria-labelledby="fetch-tab" tabindex="0">
      <h4>Grid 2 - Load a JSON dataset through Fetch-Client</h4>
      <aurelia-slickgrid
        grid-id="grid2"
        columns.bind="columns2"
        options.bind="gridOptions2"
        dataset.bind="dataset2"
        on-aurelia-grid-created.trigger="aureliaGrid2Ready($event.detail)"
      >
      </aurelia-slickgrid>
    </div>
  </div>
</div>
`,uh=[],mh={};let mr;function Ik(t){mr||(mr=E.define({name:ch,template:En,dependencies:uh,bindables:mh})),t.register(mr)}const Gk=Object.freeze(Object.defineProperty({__proto__:null,bindables:mh,default:En,dependencies:uh,name:ch,register:Ik,template:En},Symbol.toStringTag,{value:"Module"}));var Fk=Object.create,Dl=Object.defineProperty,Ak=Object.getOwnPropertyDescriptor,Rk=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),ph=t=>{throw TypeError(t)},hh=(t,e,i)=>e in t?Dl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Lk=(t,e)=>Dl(t,"name",{value:e,configurable:!0}),zk=t=>[,,,Fk(null)],Nk=["class","method","getter","setter","accessor","field","value","get","set"],gh=t=>t!==void 0&&typeof t!="function"?ph("Function expected"):t,Wk=(t,e,i,r,a)=>({kind:Nk[t],name:e,metadata:r,addInitializer:n=>i._?ph("Already initialized"):a.push(gh(n||null))}),Bk=(t,e)=>hh(e,Rk("metadata"),t[3]),jk=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},Vk=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&Ak(a,i));Lk(a,i);for(var p=r.length-1;p>=0;p--)u=Wk(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,gh(l)&&(a=l);return Bk(t,a),c&&Dl(a,i,c),m?s^4?n:c:a},Me=(t,e,i)=>hh(t,typeof e!="symbol"?e+"":e,i),bh,Ml;bh=[T(Gk)];class ia{constructor(e=M(Ce(we))){Me(this,"http",e),Me(this,"aureliaGrid2"),Me(this,"gridOptions1"),Me(this,"gridOptions2"),Me(this,"columns1",[]),Me(this,"columns2",[]),Me(this,"dataset1",[]),Me(this,"dataset2",[]),Me(this,"hideSubTitle",!1),this.defineGrid1(),this.defineGrid2()}aureliaGrid2Ready(e){this.aureliaGrid2=e}async attached(){this.dataset1=this.mockData();const e=await fetch(vt);this.dataset2=await e.json()}defineGrid1(){this.columns1=[{id:"title",name:"Title",field:"title",sortable:!0,minWidth:100},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,minWidth:100},{id:"%",name:"% Complete",field:"percentComplete",sortable:!0,minWidth:100},{id:"start",name:"Start",field:"start",minWidth:100},{id:"finish",name:"Finish",field:"finish",minWidth:100},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",sortable:!0,minWidth:100}],this.gridOptions1={enableAutoResize:!0,autoResize:{container:"#demo-container",rightPadding:10},enableSorting:!0}}defineGrid2(){this.columns2=[{id:"name",name:"Name",field:"name",filterable:!0,sortable:!0},{id:"gender",name:"Gender",field:"gender",filterable:!0,sortable:!0,filter:{model:v.singleSelect,collection:[{value:"",label:""},{value:"male",label:"male"},{value:"female",label:"female"}]}},{id:"company",name:"Company",field:"company",filterable:!0,sortable:!0}],this.gridOptions2={enableAutoResize:!0,autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:!0,enableSorting:!0}}mockData(){const e=[];for(let i=0;i<1e3;i++){const r=2e3+Math.floor(Math.random()*10),a=Math.floor(Math.random()*11),n=Math.floor(Math.random()*29),l=Math.round(Math.random()*100);e[i]={id:i,title:"Task "+i,duration:Math.round(Math.random()*100)+"",percentComplete:l,start:`${a}/${n}/${r}`,finish:`${a}/${n}/${r}`,effortDriven:i%5===0}}return e}resizeGrid2(){this.aureliaGrid2.resizerService.resizeGrid(10)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid2.resizerService.resizeGrid(0)}}Ml=zk();ia=Vk(Ml,0,"Example22",bh,ia);jk(Ml,1,ia);const Hk=Object.freeze(Object.defineProperty({__proto__:null,get Example22(){return ia}},Symbol.toStringTag,{value:"Module"})),fh="example23",$n=`<h2>
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
  columns.bind="columns"
  options.bind="gridOptions"
  dataset.bind="dataset"
  instances.bind="aureliaGrid"
  on-grid-state-changed.trigger="gridStateChanged($event.detail)"
  on-row-count-changed.trigger="refreshMetrics($event.detail.eventData, $event.detail.args)"
>
</aurelia-slickgrid>
`,vh=[],_h={};let pr;function Uk(t){pr||(pr=E.define({name:fh,template:$n,dependencies:vh,bindables:_h})),t.register(pr)}const qk=Object.freeze(Object.defineProperty({__proto__:null,bindables:_h,default:$n,dependencies:vh,name:fh,register:Uk,template:$n},Symbol.toStringTag,{value:"Module"}));var Yk=Object.create,Pl=Object.defineProperty,Kk=Object.getOwnPropertyDescriptor,Qk=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),yh=t=>{throw TypeError(t)},Sh=(t,e,i)=>e in t?Pl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Zk=(t,e)=>Pl(t,"name",{value:e,configurable:!0}),Jk=t=>[,,,Yk(null)],Xk=["class","method","getter","setter","accessor","field","value","get","set"],Ch=t=>t!==void 0&&typeof t!="function"?yh("Function expected"):t,eO=(t,e,i,r,a)=>({kind:Xk[t],name:e,metadata:r,addInitializer:n=>i._?yh("Already initialized"):a.push(Ch(n||null))}),tO=(t,e)=>Sh(e,Qk("metadata"),t[3]),iO=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},aO=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&Kk(a,i));Zk(a,i);for(var p=r.length-1;p>=0;p--)u=eO(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,Ch(l)&&(a=l);return tO(t,a),c&&Pl(a,i,c),m?s^4?n:c:a},he=(t,e,i)=>Sh(t,typeof e!="symbol"?e+"":e,i),wh,Il;const rO=1500;function Gt(t,e){return Math.floor(Math.random()*(e-t+1)+t)}const nO=(t,e,i,r,a,n)=>n.getOptions().i18n?.tr("TASK_X",{x:i})??"";wh=[T(qk)];class aa{constructor(e=M(xe)){he(this,"i18n",e),he(this,"aureliaGrid"),he(this,"columns",[]),he(this,"gridOptions"),he(this,"dataset",[]),he(this,"hideSubTitle",!1),he(this,"selectedLanguage",""),he(this,"metrics"),he(this,"filterList",[{value:"",label:""},{value:"currentYearTasks",label:"Current Year Completed Tasks"},{value:"nextYearTasks",label:"Next Year Active Tasks"}]),he(this,"selectedPredefinedFilter",""),this.defineGrid();const i="en";this.i18n.setLocale(i),this.selectedLanguage=i}attached(){this.dataset=this.mockData(rO)}detaching(){this.saveCurrentGridState()}defineGrid(){this.columns=[{id:"title",name:"Title",field:"id",nameKey:"TITLE",minWidth:100,formatter:nO,sortable:!0,filterable:!0,params:{useFormatterOuputToFilter:!0}},{id:"description",name:"Description",field:"description",filterable:!0,sortable:!0,minWidth:80,filter:{model:Vo,enableTrimWhiteSpace:!0}},{id:"percentComplete",name:"% Complete",field:"percentComplete",nameKey:"PERCENT_COMPLETE",minWidth:120,sortable:!0,customTooltip:{position:"center"},formatter:f.progressBar,type:"number",filterable:!0,filter:{model:v.sliderRange,maxValue:100,operator:"RangeInclusive",options:{hideSliderNumbers:!1,min:0,step:5}}},{id:"start",name:"Start",field:"start",nameKey:"START",formatter:f.dateIso,sortable:!0,minWidth:75,width:100,exportWithFormatter:!0,type:"date",filterable:!0,filter:{model:v.compoundDate}},{id:"finish",name:"Finish",field:"finish",nameKey:"FINISH",formatter:f.dateIso,sortable:!0,minWidth:75,width:120,exportWithFormatter:!0,type:"date",filterable:!0,filter:{model:v.dateRange}},{id:"duration",field:"duration",nameKey:"DURATION",maxWidth:90,type:"number",sortable:!0,filterable:!0,filter:{model:v.input,operator:"RangeExclusive"}},{id:"completed",name:"Completed",field:"completed",nameKey:"COMPLETED",minWidth:85,maxWidth:90,formatter:f.checkmarkMaterial,exportWithFormatter:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:v.singleSelect,options:{autoAdjustDropHeight:!0}}}];const e=_e(Lt(new Date,-2),"YYYY-MM-DD"),i=_e(Lt(new Date,25),"YYYY-MM-DD");this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableExcelCopyBuffer:!0,enableFiltering:!0,enableTranslate:!0,i18n:this.i18n,presets:{filters:[{columnId:"duration",searchTerms:["4..88"]},{columnId:"percentComplete",operator:"RangeInclusive",searchTerms:[5,80]},{columnId:"finish",operator:"RangeInclusive",searchTerms:[e,i]}],sorters:[{columnId:"percentComplete",direction:"DESC"},{columnId:"duration",direction:"ASC"}]},externalResources:[new di,new G]}}mockData(e,i=0){const r=[];for(let a=i;a<i+e;a++){const n=Gt(0,365),l=Gt(new Date().getFullYear(),new Date().getFullYear()+1),d=Gt(0,12),u=Gt(10,28),s=Gt(0,100);r.push({id:a,title:"Task "+a,description:a%5?"desc "+a:null,duration:n,percentComplete:s,percentCompleteNumber:s,start:a%4?null:new Date(l,d,u),finish:new Date(l,d,u),completed:s===100})}return r}clearFilters(){this.selectedPredefinedFilter="",this.aureliaGrid.filterService.clearFilters()}gridStateChanged(e){console.log("Client sample, Grid State changed:: ",e)}saveCurrentGridState(){console.log("Client sample, current Grid State:: ",this.aureliaGrid.gridStateService.getCurrentGridState())}refreshMetrics(e,i){i?.current>=0&&setTimeout(()=>{this.metrics={startTime:new Date,itemCount:i?.current||0,totalItemCount:this.dataset.length||0}})}setFiltersDynamically(){const e=_e(Lt(new Date,-5),"YYYY-MM-DD"),i=_e(Lt(new Date,25),"YYYY-MM-DD");this.aureliaGrid.filterService.updateFilters([{columnId:"duration",searchTerms:["14..78"],operator:"RangeInclusive"},{columnId:"percentComplete",operator:"RangeExclusive",searchTerms:[15,85]},{columnId:"finish",operator:"RangeInclusive",searchTerms:[e,i]}])}setSortingDynamically(){this.aureliaGrid.sortService.updateSorting([{columnId:"finish",direction:"DESC"},{columnId:"percentComplete",direction:"ASC"}])}async switchLanguage(){const e=this.selectedLanguage==="en"?"fr":"en";await this.i18n.setLocale(e),this.selectedLanguage=e}predefinedFilterChanged(e){let i=[];const r=new Date().getFullYear();switch(e){case"currentYearTasks":i=[{columnId:"finish",operator:"RangeInclusive",searchTerms:[`${r}-01-01`,`${r}-12-31`]},{columnId:"completed",operator:"=",searchTerms:[!0]}];break;case"nextYearTasks":i=[{columnId:"start",operator:">=",searchTerms:[`${r+1}-01-01`]}];break}this.aureliaGrid.filterService.updateFilters(i)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}Il=Jk();aa=aO(Il,0,"Example23",wh,aa);iO(Il,1,aa);const oO=Object.freeze(Object.defineProperty({__proto__:null,get Example23(){return aa}},Symbol.toStringTag,{value:"Module"})),xh="example24",kn=`<h2>
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

<aurelia-slickgrid grid-id="grid24" columns.bind="columns" options.bind="gridOptions" dataset.bind="dataset" instances.bind="aureliaGrid">
</aurelia-slickgrid>
`,Th=[],Eh={};let hr;function lO(t){hr||(hr=E.define({name:xh,template:kn,dependencies:Th,bindables:Eh})),t.register(hr)}const sO=Object.freeze(Object.defineProperty({__proto__:null,bindables:Eh,default:kn,dependencies:Th,name:xh,register:lO,template:kn},Symbol.toStringTag,{value:"Module"}));var dO=Object.create,Gl=Object.defineProperty,cO=Object.getOwnPropertyDescriptor,uO=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),$h=t=>{throw TypeError(t)},kh=(t,e,i)=>e in t?Gl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,mO=(t,e)=>Gl(t,"name",{value:e,configurable:!0}),pO=t=>[,,,dO(null)],hO=["class","method","getter","setter","accessor","field","value","get","set"],Oh=t=>t!==void 0&&typeof t!="function"?$h("Function expected"):t,gO=(t,e,i,r,a)=>({kind:hO[t],name:e,metadata:r,addInitializer:n=>i._?$h("Already initialized"):a.push(Oh(n||null))}),bO=(t,e)=>kh(e,uO("metadata"),t[3]),fO=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},vO=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&cO(a,i));mO(a,i);for(var p=r.length-1;p>=0;p--)u=gO(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,Oh(l)&&(a=l);return bO(t,a),c&&Gl(a,i,c),m?s^4?n:c:a},Ve=(t,e,i)=>kh(t,typeof e!="symbol"?e+"":e,i),Dh,Fl;const _O=(t,e,i,r,a)=>a.priority===3?'<div class="cell-menu-dropdown-outline">Action<i class="mdi mdi-chevron-down"></i></div>':'<div class="cell-menu-dropdown-outline disabled">Action <i class="mdi mdi-chevron-down"></i></div>',yO=(t,e,i)=>{if(!i)return"";let r="";const a=+(i>=3?3:i),l=`<i class="mdi mdi-star ${a===3?"red":a===2?"orange":"yellow"}" aria-hidden="true"></i>`;for(let d=1;d<=a;d++)r+=l;return r},SO=(t,e,i,r,a,n)=>{if(!i)return"";const d=n.getOptions().i18n,u=+(i>=3?3:i),s=u===3?"HIGH":u===2?"MEDIUM":"LOW";return d?.tr(s)??""},CO=(t,e,i,r,a,n)=>n.getOptions().i18n?.tr("TASK_X",{x:i})??"";Dh=[T(sO)];class ra{constructor(e=M(xe)){Ve(this,"i18n",e),Ve(this,"_darkModeGrid",!1),Ve(this,"aureliaGrid"),Ve(this,"gridOptions"),Ve(this,"columns",[]),Ve(this,"dataset",[]),Ve(this,"hideSubTitle",!1),Ve(this,"selectedLanguage",""),this.defineGrid();const i="en";this.i18n.setLocale(i),this.selectedLanguage=i}get cellMenuInstance(){return this.aureliaGrid?.extensionService.getExtensionInstanceByName("cellMenu")}get contextMenuInstance(){return this.aureliaGrid?.extensionService.getExtensionInstanceByName("contextMenu")}attached(){this.dataset=this.getData(1e3)}detaching(){document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light"}defineGrid(){this.columns=[{id:"id",name:"#",field:"id",maxWidth:45,sortable:!0,filterable:!0},{id:"title",name:"Title",field:"id",nameKey:"TITLE",minWidth:100,formatter:CO,sortable:!0,filterable:!0,params:{useFormatterOuputToFilter:!0}},{id:"percentComplete",nameKey:"PERCENT_COMPLETE",field:"percentComplete",minWidth:100,exportWithFormatter:!1,sortable:!0,filterable:!0,filter:{model:v.slider,operator:">="},formatter:f.percentCompleteBar,type:"number"},{id:"start",name:"Start",field:"start",nameKey:"START",minWidth:100,formatter:f.dateIso,outputType:"dateIso",type:"date",filterable:!0,filter:{model:v.compoundDate}},{id:"finish",name:"Finish",field:"finish",nameKey:"FINISH",formatter:f.dateIso,outputType:"dateIso",type:"date",minWidth:100,filterable:!0,filter:{model:v.compoundDate}},{id:"priority",nameKey:"PRIORITY",field:"priority",exportCustomFormatter:SO,formatter:yO,sortable:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:1,labelKey:"LOW"},{value:2,labelKey:"MEDIUM"},{value:3,labelKey:"HIGH"}],model:v.singleSelect,enableTranslateLabel:!0}},{id:"completed",nameKey:"COMPLETED",field:"completed",exportCustomFormatter:f.translateBoolean,formatter:f.checkmarkMaterial,sortable:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,labelKey:"TRUE"},{value:!1,labelKey:"FALSE"}],model:v.singleSelect,enableTranslateLabel:!0}},{id:"action",name:"Action",field:"action",width:100,maxWidth:110,excludeFromExport:!0,formatter:_O,cellMenu:{hideCloseButton:!1,menuUsabilityOverride:e=>e.dataContext.priority===3,commandTitleKey:"COMMANDS",commandItems:[{command:"command2",title:"Command 2",positionOrder:62,action:(e,i)=>{console.log(i.dataContext,i.column)},itemUsabilityOverride:e=>!e.dataContext.completed},{command:"command1",title:"Command 1",cssClass:"orange",positionOrder:61},{command:"delete-row",titleKey:"DELETE_ROW",positionOrder:64,iconCssClass:"mdi mdi-close",cssClass:"red",textCssClass:"bold",itemVisibilityOverride:e=>!e.dataContext.completed},{divider:!0,command:"",positionOrder:63},{command:"help",titleKey:"HELP",iconCssClass:"mdi mdi-help-circle",positionOrder:66},{command:"something",titleKey:"DISABLED_COMMAND",disabled:!0,positionOrder:67},{command:"",divider:!0,positionOrder:98},{command:"export",title:"Exports",positionOrder:99,commandItems:[{command:"exports-txt",title:"Text (tab delimited)"},{command:"sub-menu",title:"Excel",cssClass:"green",subMenuTitle:"available formats",subMenuTitleCssClass:"text-italic orange",commandItems:[{command:"exports-csv",title:"Excel (csv)"},{command:"exports-xlsx",title:"Excel (xlsx)"}]}]},{command:"feedback",title:"Feedback",positionOrder:100,commandItems:[{command:"request-update",title:"Request update from supplier",iconCssClass:"mdi mdi-star",tooltip:"this will automatically send an alert to the shipping team to contact the user for an update"},"divider",{command:"sub-menu",title:"Contact Us",iconCssClass:"mdi mdi-account",subMenuTitle:"contact us...",subMenuTitleCssClass:"italic",commandItems:[{command:"contact-email",title:"Email us",iconCssClass:"mdi mdi-pencil-outline"},{command:"contact-chat",title:"Chat with us",iconCssClass:"mdi mdi-message-text-outline"},{command:"contact-meeting",title:"Book an appointment",iconCssClass:"mdi mdi-coffee"}]}]}],optionTitleKey:"CHANGE_COMPLETED_FLAG",optionItems:[{option:!0,titleKey:"TRUE",iconCssClass:"mdi mdi-check-box-outline"},{option:!1,titleKey:"FALSE",iconCssClass:"mdi mdi-checkbox-blank-outline"},{option:null,title:"null",cssClass:"italic",action:()=>{},itemUsabilityOverride:e=>e.dataContext.priority===3,itemVisibilityOverride:e=>!e.dataContext.completed}]}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},darkMode:this._darkModeGrid,enableCellNavigation:!0,enableFiltering:!0,enableSorting:!0,enableTranslate:!0,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!0,customColumnWidth:15,columnHeaderStyle:{font:{bold:!0,italic:!0}}},externalResources:[new G],i18n:this.i18n,enableContextMenu:!0,enableCellMenu:!0,cellMenu:{onCommand:(e,i)=>this.executeCommand(e,i),onOptionSelected:(e,i)=>{const r=i?.dataContext;r?.hasOwnProperty("completed")&&(r.completed=i.item.option,this.aureliaGrid.gridService.updateItem(r))},onBeforeMenuShow:(e,i)=>{console.log("Before the Cell Menu is shown",i)},onBeforeMenuClose:(e,i)=>console.log("Cell Menu is closing",i)},contextMenu:this.getContextMenuOptions()}}executeCommand(e,i){const r=i.command,a=i.dataContext;switch(r){case"contact-email":case"contact-chat":case"contact-meeting":alert("Command: "+i?.command);break;case"exports-csv":case"exports-txt":case"exports-xlsx":alert(`Exporting as ${i.item.title}`);break;case"command1":alert("Command 1");break;case"command2":alert("Command 2");break;case"help":alert("Please help!");break;case"delete-row":confirm(`Do you really want to delete row ${i.row+1} with ${this.i18n.tr("TASK_X",{x:a.id})}`)&&this.aureliaGrid.dataView.deleteItem(a.id);break}}getData(e){const i=[];for(let r=0;r<e;r++){const a=2e3+Math.floor(Math.random()*30),n=Math.floor(Math.random()*11),l=Math.floor(Math.random()*29);i[r]={id:r,duration:Math.floor(Math.random()*25)+" days",percentComplete:Math.floor(Math.random()*100),start:new Date(a,n,l),finish:new Date(a,n+1,l),priority:r%3?2:r%5?3:1,completed:r%4===0}}return i}getContextMenuOptions(){return{hideCloseButton:!1,menuUsabilityOverride:e=>(e?.dataContext).id<21,commandShownOverColumnIds:["id","title","percentComplete","start","finish","completed"],commandTitleKey:"COMMANDS",commandItems:[{divider:!0,command:"",positionOrder:61},{command:"delete-row",titleKey:"DELETE_ROW",iconCssClass:"mdi mdi-close",cssClass:"red",textCssClass:"bold",positionOrder:62},{divider:!0,command:"",positionOrder:63},{command:"help",titleKey:"HELP",iconCssClass:"mdi mdi-help-circle",positionOrder:64,action:()=>{},itemVisibilityOverride:e=>!(e?.dataContext).completed},{command:"something",titleKey:"DISABLED_COMMAND",disabled:!0,positionOrder:65},{command:"",divider:!0,positionOrder:98},{command:"export",title:"Exports",positionOrder:99,commandItems:[{command:"exports-txt",title:"Text (tab delimited)"},{command:"sub-menu",title:"Excel",cssClass:"green",subMenuTitle:"available formats",subMenuTitleCssClass:"text-italic orange",commandItems:[{command:"exports-csv",title:"Excel (csv)"},{command:"exports-xlsx",title:"Excel (xlsx)"}]}]},{command:"feedback",title:"Feedback",positionOrder:100,commandItems:[{command:"request-update",title:"Request update from supplier",iconCssClass:"mdi mdi-star",tooltip:"this will automatically send an alert to the shipping team to contact the user for an update"},"divider",{command:"sub-menu",title:"Contact Us",iconCssClass:"mdi mdi-account",subMenuTitle:"contact us...",subMenuTitleCssClass:"italic",commandItems:[{command:"contact-email",title:"Email us",iconCssClass:"mdi mdi-pencil-outline"},{command:"contact-chat",title:"Chat with us",iconCssClass:"mdi mdi-message-text-outline"},{command:"contact-meeting",title:"Book an appointment",iconCssClass:"mdi mdi-coffee"}]}]}],optionTitleKey:"CHANGE_PRIORITY",optionShownOverColumnIds:["priority"],optionItems:[{option:0,title:"n/a",textCssClass:"italic",itemUsabilityOverride:e=>!(e?.dataContext).completed,action:()=>{}},{option:1,iconCssClass:"mdi mdi-star-outline yellow",titleKey:"LOW"},{option:2,iconCssClass:"mdi mdi-star orange",titleKey:"MEDIUM"},{option:3,iconCssClass:"mdi mdi-star red",titleKey:"HIGH"},"divider",{option:4,title:"Extreme",iconCssClass:"mdi mdi-fire",disabled:!0,itemVisibilityOverride:e=>!(e?.dataContext).completed},{option:null,title:"Sub-Options (demo)",subMenuTitleKey:"CHANGE_PRIORITY",optionItems:[{option:1,iconCssClass:"mdi mdi-star-outline yellow",titleKey:"LOW"},{option:2,iconCssClass:"mdi mdi-star orange",titleKey:"MEDIUM"},{option:3,iconCssClass:"mdi mdi-star red",titleKey:"HIGH"}]}],onBeforeMenuShow:(e,i)=>{this.aureliaGrid.slickGrid.setActiveCell(i.row,i.cell,!1),console.log("Before the global Context Menu is shown",i)},onBeforeMenuClose:(e,i)=>console.log("Global Context Menu is closing",i),onCommand:(e,i)=>this.executeCommand(e,i),onOptionSelected:(e,i)=>{const r=i?.dataContext;r?.hasOwnProperty("priority")&&(r.priority=i.item.option,this.aureliaGrid.gridService.updateItem(r))}}}showContextCommandsAndOptions(e){const i=e?[]:["id","title","complete","start","finish","completed","action"];this.contextMenuInstance?.setOptions({commandShownOverColumnIds:i})}showCellMenuCommandsAndOptions(e){this.cellMenuInstance?.setOptions({hideOptionSection:!e})}async switchLanguage(){const e=this.selectedLanguage==="en"?"fr":"en";await this.i18n.setLocale(e),this.selectedLanguage=e}toggleDarkMode(){this._darkModeGrid=!this._darkModeGrid,this._darkModeGrid?(document.querySelector(".panel-wm-content").classList.add("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="dark"):(document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light"),this.aureliaGrid.slickGrid?.setOptions({darkMode:this._darkModeGrid})}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}Fl=pO();ra=vO(Fl,0,"Example24",Dh,ra);fO(Fl,1,ra);const wO=Object.freeze(Object.defineProperty({__proto__:null,get Example24(){return ra}},Symbol.toStringTag,{value:"Module"})),Mh="example25",On=`<h2>
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

<aurelia-slickgrid grid-id="grid25" columns.bind="columns" options.bind="gridOptions" dataset.bind="dataset"> </aurelia-slickgrid>
`,Ph=[],Ih={};let gr;function xO(t){gr||(gr=E.define({name:Mh,template:On,dependencies:Ph,bindables:Ih})),t.register(gr)}const TO=Object.freeze(Object.defineProperty({__proto__:null,bindables:Ih,default:On,dependencies:Ph,name:Mh,register:xO,template:On},Symbol.toStringTag,{value:"Module"}));var EO=Object.create,Al=Object.defineProperty,$O=Object.getOwnPropertyDescriptor,kO=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Gh=t=>{throw TypeError(t)},Fh=(t,e,i)=>e in t?Al(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,OO=(t,e)=>Al(t,"name",{value:e,configurable:!0}),DO=t=>[,,,EO(null)],MO=["class","method","getter","setter","accessor","field","value","get","set"],Ah=t=>t!==void 0&&typeof t!="function"?Gh("Function expected"):t,PO=(t,e,i,r,a)=>({kind:MO[t],name:e,metadata:r,addInitializer:n=>i._?Gh("Already initialized"):a.push(Ah(n||null))}),IO=(t,e)=>Fh(e,kO("metadata"),t[3]),GO=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},FO=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&$O(a,i));OO(a,i);for(var p=r.length-1;p>=0;p--)u=PO(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,Ah(l)&&(a=l);return IO(t,a),c&&Al(a,i,c),m?s^4?n:c:a},ge=(t,e,i)=>Fh(t,typeof e!="symbol"?e+"":e,i),Rh,Rl;const br="https://countries.trevorblades.com/";Rh=[T(TO)];class na{constructor(e=M(Ce(we))){ge(this,"http",e),ge(this,"aureliaGrid"),ge(this,"columns",[]),ge(this,"gridOptions"),ge(this,"dataset",[]),ge(this,"metrics"),ge(this,"graphqlQuery",""),ge(this,"hideSubTitle",!1),ge(this,"processing",!1),ge(this,"status",{text:"",class:""}),this.defineGrid()}defineGrid(){this.columns=[{id:"countryCode",field:"code",name:"Code",maxWidth:90,sortable:!0,filterable:!0,columnGroup:"Country"},{id:"countryName",field:"name",name:"Name",width:60,sortable:!0,filterable:!0,columnGroup:"Country"},{id:"countryNative",field:"native",name:"Native",width:60,sortable:!0,filterable:!0,columnGroup:"Country"},{id:"countryPhone",field:"phone",name:"Phone Area Code",maxWidth:110,sortable:!0,filterable:!0,columnGroup:"Country"},{id:"countryCurrency",field:"currency",name:"Currency",maxWidth:90,sortable:!0,filterable:!0,columnGroup:"Country"},{id:"countryEmoji",field:"emoji",name:"Emoji",maxWidth:90,sortable:!0,columnGroup:"Country"},{id:"languageName",field:"languages.name",name:"Names",width:60,formatter:f.arrayObjectToCsv,columnGroup:"Language",params:{propertyNames:["name"],useFormatterOuputToFilter:!0},filterable:!0,filter:{model:v.multipleSelect,collectionAsync:this.getLanguages(),operator:"IN_CONTAINS",collectionOptions:{addBlankEntry:!0,collectionInsideObjectProperty:"data.languages"},collectionFilterBy:[{property:"name",value:"",operator:"NE"},{property:"name",value:null,operator:"NE"}],collectionSortBy:{property:"name"},customStructure:{value:"name",label:"name"},options:{filter:!0}}},{id:"languageNative",field:"languages.native",name:"Native",width:60,formatter:f.arrayObjectToCsv,params:{propertyNames:["native"],useFormatterOuputToFilter:!0},columnGroup:"Language",filterable:!0,filter:{model:v.multipleSelect,collectionAsync:this.getLanguages(),operator:"IN_CONTAINS",collectionOptions:{addBlankEntry:!0,collectionInsideObjectProperty:"data.languages"},collectionFilterBy:[{property:"native",value:"",operator:"NE"},{property:"native",value:null,operator:"NE"}],collectionSortBy:{property:"native"},customStructure:{value:"native",label:"native"},options:{filter:!0}}},{id:"languageCode",field:"languages.code",name:"Codes",maxWidth:100,formatter:f.arrayObjectToCsv,params:{propertyNames:["code"],useFormatterOuputToFilter:!0},columnGroup:"Language",filterable:!0},{id:"continentName",field:"continent.name",name:"Name",width:60,sortable:!0,filterable:!0,formatter:f.complexObject,columnGroup:"Continent"},{id:"continentCode",field:"continent.code",name:"Code",maxWidth:90,sortable:!0,filterable:!0,filter:{model:v.singleSelect,collectionAsync:this.getContinents(),collectionOptions:{collectionInsideObjectProperty:"data.continents",addBlankEntry:!0,separatorBetweenTextLabels:": "},customStructure:{value:"code",label:"code",labelSuffix:"name"}},formatter:f.complexObject,columnGroup:"Continent"}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:!0,enableCellNavigation:!0,enablePagination:!1,enableTranslate:!0,createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:28,datasetIdPropertyName:"code",showCustomFooter:!0,backendServiceApi:{service:new co,useLocalFiltering:!0,useLocalSorting:!0,options:{datasetName:"countries"},preProcess:()=>this.displaySpinner(!0),process:e=>this.getCountries(e),postProcess:e=>{this.metrics=e.metrics,this.displaySpinner(!1)}}}}displaySpinner(e){this.processing=e,this.status=e?{text:"processing...",class:"alert alert-danger"}:{text:"finished",class:"alert alert-success"}}getCountries(e){return new Promise(i=>{this.http.fetch(br,{method:"post",body:Ga({query:e})}).then(r=>i(r.json()))})}getContinents(){const e="query { continents { code, name  }}";return new Promise(i=>{this.http.fetch(br,{method:"post",body:Ga({query:e})}).then(r=>i(r.json()))})}getLanguages(){const e="query { languages { code, name, native  }}";return new Promise(i=>{this.http.fetch(br,{method:"post",body:Ga({query:e})}).then(r=>i(r.json()))})}setFiltersDynamically(){this.aureliaGrid.filterService.updateFilters([{columnId:"countryName",searchTerms:["G"],operator:"StartsWith"}])}setSortingDynamically(){this.aureliaGrid.sortService.updateSorting([{columnId:"billingAddressZip",direction:"DESC"},{columnId:"company",direction:"ASC"}])}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}Rl=DO();na=FO(Rl,0,"Example25",Rh,na);GO(Rl,1,na);const AO=Object.freeze(Object.defineProperty({__proto__:null,get Example25(){return na}},Symbol.toStringTag,{value:"Module"})),Lh="example26",Dn=`<h2>
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
    columns.bind="columns"
    options.bind="gridOptions"
    dataset.bind="dataset"
    instances.bind="aureliaGrid"
    on-cell-change.trigger="onCellChanged($event.detail.eventData, $event.detail.args)"
    on-click.trigger="onCellClicked($event.detail.eventData, $event.detail.args)"
  >
  </aurelia-slickgrid>
</div>
`,zh=[],Nh={};let fr;function RO(t){fr||(fr=E.define({name:Lh,template:Dn,dependencies:zh,bindables:Nh})),t.register(fr)}const LO=Object.freeze(Object.defineProperty({__proto__:null,bindables:Nh,default:Dn,dependencies:zh,name:Lh,register:RO,template:Dn},Symbol.toStringTag,{value:"Module"}));var zO=Object.defineProperty,NO=(t,e,i)=>e in t?zO(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,He=(t,e,i)=>NO(t,typeof e!="symbol"?e+"":e,i);class WO{constructor(e){He(this,"args",e),He(this,"aureliaViewModel"),He(this,"defaultId"),He(this,"defaultItem"),He(this,"selectedItem"),He(this,"grid"),He(this,"vm"),He(this,"elmBindingContext"),this.grid=e?.grid,this.init()}get aureliaUtilService(){let e=this.gridOptions?.params?.aureliaUtilService;return(!e||!(e instanceof po))&&(e=this.columnEditor?.params?.aureliaUtilService),e}get collection(){return this.columnDef?.editor?.collection??[]}get columnDef(){return this.args?.column??{}}get columnEditor(){return this.columnDef?.editor??{}}get gridOptions(){return this.grid?.getOptions()??{}}get hasAutoCommitEdit(){return this.args.grid.getOptions().autoCommitEdit}get validator(){return this.columnEditor.validator||this.columnDef.validator}async init(){if(!this.columnEditor?.params?.viewModel)throw new Error(`[Aurelia-Slickgrid] For the Editors.aureliaComponent to work properly, you need to fill in the "templateUrl" property of your Custom Element Editor.
      Example: this.columnDefs = [{ id: 'title', field: 'title', editor: { model: CustomEditor, collection: [...], param: { viewModel: MyVM } },`);if(this.columnEditor?.params?.viewModel){const e={grid:this.grid,model:{collection:this.collection}},i=this.columnEditor.params.viewModel;this.vm=await this.aureliaUtilService.createAureliaViewModelAddToSlot(i,e,this.args.container),this.elmBindingContext=this.vm?.controller?.children?.[0].scope.bindingContext}}save(){const e=this.validate();e&&e.valid&&(this.hasAutoCommitEdit?this.args.grid.getEditorLock().commitCurrentEdit():this.args.commitChanges())}cancel(){this.elmBindingContext&&(this.elmBindingContext.selectedItem=this.defaultItem),this.args?.cancelChanges&&this.args.cancelChanges()}destroy(){this.vm?.controller?.deactivate(this.vm.controller,null)}hide(){this.elmBindingContext?.hide()}show(){this.elmBindingContext?.focus()}focus(){this.elmBindingContext?.focus()}applyValue(e,i){e[this.columnDef.field]=i}getValue(){return this.elmBindingContext?.selectedItem.id}loadValue(e){const i=e?.[this.columnDef.field];this.selectedItem=i,this.defaultItem=i,setTimeout(()=>{this.focus(),this.elmBindingContext&&(this.elmBindingContext.selectedItem=i,this.elmBindingContext.selectedItemChanged=r=>{this.selectedItem=r,r!==i&&this.save()})},0)}serializeValue(){return this.selectedItem}isValueChanged(){return!(this.selectedItem.id===""&&(this.defaultId===null||this.defaultId===void 0))&&this.selectedItem.id!==this.defaultId}validate(){if(this.validator){const e=this.selectedItem.id;return this.validator(e,this.args)}return{valid:!0,msg:null}}}var BO=Object.defineProperty,jO=(t,e,i)=>e in t?BO(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Pe=(t,e,i)=>jO(t,typeof e!="symbol"?e+"":e,i);class Pd{constructor(){Pe(this,"_shouldTriggerQuery",!0),Pe(this,"container"),Pe(this,"grid"),Pe(this,"searchTerms",[]),Pe(this,"columnDef"),Pe(this,"callback"),Pe(this,"operator","EQ"),Pe(this,"vm"),Pe(this,"elmBindingContext")}get aureliaUtilService(){let e=this.gridOptions?.params?.aureliaUtilService;return(!e||!(e instanceof po))&&(e=this.columnFilter?.params?.aureliaUtilService),e}get collection(){return this.columnFilter?.collection??[]}get columnFilter(){return this.columnDef?.filter??{}}get gridOptions(){return this.grid?.getOptions()??{}}async init(e){if(this.grid=e.grid,this.callback=e.callback,this.columnDef=e.columnDef,this.searchTerms=(e.hasOwnProperty("searchTerms")?e.searchTerms:[])||[],!this.columnFilter?.params?.viewModel)throw new Error(`[Aurelia-Slickgrid] For the Filters.aureliaComponent to work properly, you need to fill in the "viewModel" property of your Custom Element Filter.
      Example: this.columnDefs = [{ id: 'title', field: 'title', filter: { model: CustomFilter, collection: [...], param: { viewModel: MyVM } },`);if(this.columnFilter.params.viewModel){this.container=this.grid.getHeaderRowColumn(this.columnDef.id),qr(this.container);const i={grid:this.grid,model:{collection:this.collection}},r=this.columnFilter.params.viewModel;this.vm=await this.aureliaUtilService.createAureliaViewModelAddToSlot(r,i,this.container),this.elmBindingContext=this.vm?.controller?.children?.[0].scope.bindingContext,this.elmBindingContext&&(this.elmBindingContext.selectedItemChanged=a=>{this.callback(void 0,{columnDef:this.columnDef,operator:this.operator,searchTerms:[a.id],shouldTriggerQuery:this._shouldTriggerQuery}),this._shouldTriggerQuery=!0})}}clear(e=!0){this._shouldTriggerQuery=e,this.elmBindingContext?.selectedItem&&(this.elmBindingContext.selectedItem={id:"",name:""})}destroy(){this.vm?.controller?.deactivate(this.vm.controller,null),this.container=this.grid.getHeaderRowColumn(this.columnDef.id),qr(this.container)}setValues(e){this.elmBindingContext?.selectedItem&&(this.elmBindingContext.selectedItem=e)}}var VO=Object.create,Ll=Object.defineProperty,HO=Object.getOwnPropertyDescriptor,UO=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Wh=t=>{throw TypeError(t)},Bh=(t,e,i)=>e in t?Ll(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,qO=(t,e)=>Ll(t,"name",{value:e,configurable:!0}),YO=t=>[,,,VO(null)],KO=["class","method","getter","setter","accessor","field","value","get","set"],jh=t=>t!==void 0&&typeof t!="function"?Wh("Function expected"):t,QO=(t,e,i,r,a)=>({kind:KO[t],name:e,metadata:r,addInitializer:n=>i._?Wh("Already initialized"):a.push(jh(n||null))}),ZO=(t,e)=>Bh(e,UO("metadata"),t[3]),JO=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},XO=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&HO(a,i));qO(a,i);for(var p=r.length-1;p>=0;p--)u=QO(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,jh(l)&&(a=l);return ZO(t,a),c&&Ll(a,i,c),m?s^4?n:c:a},ne=(t,e,i)=>Bh(t,typeof e!="symbol"?e+"":e,i),Vh,zl;const eD=100;Vh=[T(LO)];class oa{constructor(e=M(po)){ne(this,"aureliaUtilService",e),ne(this,"_commandQueue",[]),ne(this,"aureliaGrid"),ne(this,"gridOptions"),ne(this,"columns",[]),ne(this,"dataset",[]),ne(this,"updatedObject"),ne(this,"hideSubTitle",!1),ne(this,"isAutoEdit",!0),ne(this,"alertWarning"),ne(this,"assignees",[{id:"",name:""},{id:"1",name:"John"},{id:"2",name:"Pierre"},{id:"3",name:"Paul"}]),this.defineGrid()}attached(){this.dataset=this.mockData(eD)}defineGrid(){this.columns=[{id:"title",name:"Title",field:"title",filterable:!0,sortable:!0,editor:{model:C.longText,minLength:5,maxLength:255},minWidth:100,onCellChange:(e,i)=>{console.log(i),this.alertWarning=`Updated Title: ${i.dataContext.title}`}},{id:"assignee",name:"Assignee",field:"assignee",minWidth:100,filterable:!0,sortable:!0,filter:{model:Pd,collection:this.assignees,params:{viewModel:ze}},queryFieldFilter:"assignee.id",queryFieldSorter:"assignee.name",formatter:f.complexObject,params:{complexFieldLabel:"assignee.name"},exportWithFormatter:!0,editor:{model:WO,collection:this.assignees,params:{viewModel:Ye}},onCellChange:(e,i)=>{console.log(i),this.alertWarning=`Updated Title: ${i.dataContext.title}`}},{id:"assignee2",name:"Assignee with Aurelia Component",field:"assignee",minWidth:125,filterable:!0,sortable:!0,filter:{model:Pd,collection:this.assignees,params:{viewModel:ze}},queryFieldFilter:"assignee.id",queryFieldSorter:"assignee.name",formatter:()=>"...",asyncPostRender:this.renderAureliaComponent.bind(this),params:{viewModel:mt,complexFieldLabel:"assignee.name"},exportCustomFormatter:f.complexObject},{id:"duration",name:"Duration (days)",field:"duration",filterable:!0,minWidth:100,sortable:!0,type:"number",filter:{model:v.slider,options:{hideSliderNumber:!1}},editor:{model:C.slider,minValue:0,maxValue:100}},{id:"complete",name:"% Complete",field:"percentComplete",filterable:!0,formatter:f.multiple,type:"number",editor:{enableRenderHtml:!0,collection:Array.from(Array(101).keys()).map(e=>({value:e,label:e,symbol:'<i class="mdi mdi-percent-outline" style="color:cadetblue"></i>'})),customStructure:{value:"value",label:"label",labelSuffix:"symbol"},collectionSortBy:{property:"label",sortDesc:!0},collectionFilterBy:{property:"value",value:0,operator:"!="},model:C.singleSelect},minWidth:100,params:{formatters:[f.collectionEditor,f.percentCompleteBar]}},{id:"start",name:"Start",field:"start",filterable:!0,filter:{model:v.compoundDate},formatter:f.dateIso,sortable:!0,minWidth:100,type:"date",editor:{model:C.date}},{id:"finish",name:"Finish",field:"finish",filterable:!0,filter:{model:v.compoundDate},formatter:f.dateIso,sortable:!0,minWidth:100,type:"date",editor:{model:C.date}}],this.gridOptions={asyncEditorLoading:!1,autoEdit:this.isAutoEdit,autoCommitEdit:!1,autoResize:{container:"#demo-container",rightPadding:10},rowHeight:45,editable:!0,enableCellNavigation:!0,enableColumnPicker:!0,enableExcelCopyBuffer:!0,enableFiltering:!0,enableAsyncPostRender:!0,asyncPostRenderDelay:0,editCommandHandler:(e,i,r)=>{this._commandQueue.push(r),r.execute()},params:{aureliaUtilService:this.aureliaUtilService}}}mockData(e,i=0){const r=[];for(let a=i;a<i+e;a++){const n=2e3+Math.floor(Math.random()*10),l=Math.floor(Math.random()*11),d=Math.floor(Math.random()*29),u=Math.round(Math.random()*100);r.push({id:a,title:"Task "+a,assignee:a%3?this.assignees[2]:a%2?this.assignees[1]:this.assignees[0],duration:Math.round(Math.random()*100)+"",percentComplete:u,percentCompleteNumber:u,start:new Date(n,l,d),finish:new Date(n,l+1,d),effortDriven:a%5===0})}return r}onCellChanged(e,i){console.log("onCellChange",i),this.updatedObject={...i.item}}onCellClicked(e,i){const r=this.aureliaGrid.gridService.getColumnFromEventArguments(i);console.log(r),r.columnDef.id==="edit"?(this.alertWarning=`open a modal window to edit: ${r.dataContext.title}`,this.aureliaGrid.gridService.highlightRow(i.row,1500)):r.columnDef.id==="delete"&&confirm("Are you sure?")&&(this.aureliaGrid.gridService.deleteItemById(r.dataContext.id),this.alertWarning=`Deleted: ${r.dataContext.title}`)}onCellValidation(e,i){alert(i.validationResults.msg)}changeAutoCommit(){return this.gridOptions.autoCommitEdit=!this.gridOptions.autoCommitEdit,this.aureliaGrid.slickGrid.setOptions({autoCommitEdit:this.gridOptions.autoCommitEdit}),!0}renderAureliaComponent(e,i,r,a){if(a.params.viewModel&&e){const n={model:r,grid:this.aureliaGrid.slickGrid};this.aureliaUtilService.createAureliaViewModelAddToSlot(a.params.viewModel,n,e)}}setAutoEdit(e){return this.isAutoEdit=e,this.aureliaGrid.slickGrid.setOptions({autoEdit:e}),!0}undo(){const e=this._commandQueue.pop();e&&rt.cancelCurrentEdit()&&(e.undo(),this.aureliaGrid.slickGrid.gotoCell(e.row,e.cell,!1))}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}zl=YO();oa=XO(zl,0,"Example26",Vh,oa);JO(zl,1,oa);const tD=Object.freeze(Object.defineProperty({__proto__:null,get Example26(){return oa}},Symbol.toStringTag,{value:"Module"})),Hh="example27",Mn=`<h2>
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
    columns.bind="columns"
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
`,Uh=[],qh={};let vr;function iD(t){vr||(vr=E.define({name:Hh,template:Mn,dependencies:Uh,bindables:qh})),t.register(vr)}const aD=Object.freeze(Object.defineProperty({__proto__:null,bindables:qh,default:Mn,dependencies:Uh,name:Hh,register:iD,template:Mn},Symbol.toStringTag,{value:"Module"}));var rD=Object.create,Nl=Object.defineProperty,nD=Object.getOwnPropertyDescriptor,oD=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Yh=t=>{throw TypeError(t)},Kh=(t,e,i)=>e in t?Nl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,lD=(t,e)=>Nl(t,"name",{value:e,configurable:!0}),sD=t=>[,,,rD(null)],dD=["class","method","getter","setter","accessor","field","value","get","set"],Qh=t=>t!==void 0&&typeof t!="function"?Yh("Function expected"):t,cD=(t,e,i,r,a)=>({kind:dD[t],name:e,metadata:r,addInitializer:n=>i._?Yh("Already initialized"):a.push(Qh(n||null))}),uD=(t,e)=>Kh(e,oD("metadata"),t[3]),mD=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},pD=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&nD(a,i));lD(a,i);for(var p=r.length-1;p>=0;p--)u=cD(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,Qh(l)&&(a=l);return uD(t,a),c&&Nl(a,i,c),m?s^4?n:c:a},be=(t,e,i)=>Kh(t,typeof e!="symbol"?e+"":e,i),Zh,Wl;const hD=500;Zh=[T(aD)];class la{constructor(){be(this,"aureliaGrid"),be(this,"gridOptions"),be(this,"columns",[]),be(this,"dataset",[]),be(this,"datasetHierarchical",[]),be(this,"loadingClass",""),be(this,"hideSubTitle",!1),be(this,"isLargeDataset",!1),be(this,"hasNoExpandCollapseChanged",!0),be(this,"treeToggleItems",[]),this.defineGrid()}attached(){this.dataset=this.loadData(hD)}defineGrid(){this.columns=[{id:"title",name:"Title",field:"title",width:220,cssClass:"cell-title",filterable:!0,sortable:!0,exportWithFormatter:!1,queryFieldSorter:"id",formatter:f.tree,exportCustomFormatter:f.treeExport},{id:"duration",name:"Duration",field:"duration",minWidth:90,filterable:!0},{id:"percentComplete",name:"% Complete",field:"percentComplete",minWidth:120,maxWidth:200,exportWithFormatter:!1,sortable:!0,filterable:!0,filter:{model:v.compoundSlider,operator:">="},formatter:f.percentCompleteBarWithText,type:"number"},{id:"start",name:"Start",field:"start",minWidth:60,type:"dateIso",filterable:!0,sortable:!0,filter:{model:v.compoundDate},formatter:f.dateIso},{id:"finish",name:"Finish",field:"finish",minWidth:60,type:"dateIso",filterable:!0,sortable:!0,filter:{model:v.compoundDate},formatter:f.dateIso},{id:"effortDriven",name:"Effort Driven",width:80,minWidth:20,maxWidth:80,cssClass:"cell-effort-driven",field:"effortDriven",exportWithFormatter:!1,formatter:f.checkmarkMaterial,cannotTriggerInsert:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:v.singleSelect}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableAutoSizeColumns:!0,enableAutoResize:!0,enableCellNavigation:!0,enableFiltering:!0,enableTreeData:!0,treeDataOptions:{columnId:"title",parentPropName:"parentId",levelPropName:"treeLevel",indentMarginLeft:15,initiallyCollapsed:!0,titleFormatter:(e,i,r,a,n)=>{let l="";return n.treeLevel>0&&(l='<span class="mdi mdi-subdirectory-arrow-right mdi-v-align-sub color-se-secondary"></span>'),`${l}<span class="bold">${r}</span> <span style="font-size:11px; margin-left: 15px;">(parentId: ${n.parentId})</span>`}},multiColumnSort:!1,showCustomFooter:!0,headerRowHeight:45,rowHeight:40,presets:{filters:[{columnId:"percentComplete",searchTerms:[25],operator:">="}]},enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!0,sanitizeDataExport:!0},externalResources:[new G],contextMenu:{iconCollapseAllGroupsCommand:"mdi mdi-arrow-collapse",iconExpandAllGroupsCommand:"mdi mdi-arrow-expand",iconClearGroupingCommand:"mdi mdi-close",iconCopyCellValueCommand:"mdi mdi-content-copy",iconExportCsvCommand:"mdi mdi-file-document-outline",iconExportExcelCommand:"mdi mdi-file-excel-outline",iconExportTextDelimitedCommand:"mdi mdi-file-document-outline"},gridMenu:{iconCssClass:"mdi mdi-menu",iconClearAllFiltersCommand:"mdi mdi-filter-remove-outline",iconClearAllSortingCommand:"mdi mdi-swap-vertical",iconExportCsvCommand:"mdi mdi-file-document-outline",iconExportExcelCommand:"mdi mdi-file-excel-outline",iconExportTextDelimitedCommand:"mdi mdi-file-document-outline",iconRefreshDatasetCommand:"mdi mdi-sync",iconToggleFilterCommand:"mdi mdi-flip-vertical",iconTogglePreHeaderCommand:"mdi mdi-flip-vertical"},headerMenu:{iconClearFilterCommand:"mdi mdi mdi-filter-remove-outline",iconClearSortCommand:"mdi mdi-swap-vertical",iconSortAscCommand:"mdi mdi-sort-ascending",iconSortDescCommand:"mdi mdi-flip-v mdi-sort-descending",iconColumnHideCommand:"mdi mdi-close"}}}addNewRow(){const e=this.aureliaGrid.dataView.getItemCount(),i=this.aureliaGrid.dataView?.getItemById(1);if(i?.__hasChildren){const r={id:e,parentId:i.id,title:`Task ${e}`,duration:"1 day",percentComplete:99,start:new Date,finish:new Date,effortDriven:!1};this.aureliaGrid.gridService.addItem(r)}}updateFirstRow(){const e=this.aureliaGrid.dataView.getItemById(0);this.aureliaGrid.gridService.updateItem({...e,duration:"11 days",percentComplete:77,start:new Date,finish:new Date,effortDriven:!1})}collapseAll(){this.aureliaGrid.treeDataService.toggleTreeDataCollapse(!0)}collapseAllWithoutEvent(){this.aureliaGrid.treeDataService.toggleTreeDataCollapse(!0,!1)}expandAll(){this.aureliaGrid.treeDataService.toggleTreeDataCollapse(!1)}dynamicallyChangeFilter(){this.aureliaGrid.filterService.updateFilters([{columnId:"percentComplete",operator:"<",searchTerms:[40]}])}logHierarchicalStructure(){console.log("exploded array",this.aureliaGrid.treeDataService.datasetHierarchical)}logFlatStructure(){console.log("flat array",this.aureliaGrid.treeDataService.dataset)}hideSpinner(){setTimeout(()=>this.loadingClass="",200)}showSpinner(){this.isLargeDataset&&(this.loadingClass="mdi mdi-load mdi-spin-1s font-24px color-alt-success")}loadData(e){this.isLargeDataset=e>5e3;let i=0;const r=[],a=[];for(let n=0;n<e;n++){const l=2e3+Math.floor(Math.random()*10),d=Math.floor(Math.random()*11),u=Math.floor(Math.random()*29),s=a[n]={};let m;(n===1||n===0)&&(i=0,r.pop()),n===3?i=1:n===2||n===4||Math.random()>.8&&n>0&&i<3&&n-1!==0&&n-1!==2?(i++,r.push(n-1)):Math.random()<.3&&i>0&&(i--,r.pop()),r.length>0?m=r[r.length-1]:m=null,s.id=n,s.parentId=m,s.title=`Task ${n}`,s.duration="5 days",s.percentComplete=Math.round(Math.random()*100),s.start=new Date(l,d,u),s.finish=new Date(l,d+1,u),s.effortDriven=n%5===0}return this.dataset=a,a}handleOnTreeFullToggleEnd(e){console.log("Tree Data changes",e),this.hideSpinner()}handleOnTreeItemToggled(e){this.hasNoExpandCollapseChanged=!1,this.treeToggleItems=e.toggledItems,console.log("Tree Data changes",e)}handleOnGridStateChanged(e){this.hasNoExpandCollapseChanged=!1,e?.change?.type==="treeData"&&(console.log("Tree Data gridStateChange",e?.gridState?.treeData),this.treeToggleItems=e?.gridState?.treeData?.toggledItems)}logTreeDataToggledItems(){console.log(this.aureliaGrid.treeDataService.getToggledItems())}dynamicallyToggledFirstParent(){const e="parentId",i="treeLevel",a=this.dataset.find(l=>l[i]===1),n=this.aureliaGrid.dataView.getItemByIdx(a[e]);a&&n&&this.aureliaGrid.treeDataService.dynamicallyToggleItemState([{itemId:n.id,isCollapsed:!n.__collapsed}])}reapplyToggledItems(){this.aureliaGrid.treeDataService.applyToggledItemStateChanges(this.treeToggleItems)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}Wl=sD();la=pD(Wl,0,"Example27",Zh,la);mD(Wl,1,la);const gD=Object.freeze(Object.defineProperty({__proto__:null,get Example27(){return la}},Symbol.toStringTag,{value:"Module"})),Jh="example28",Pn=`<h2>
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
    columns.bind="columns"
    options.bind="gridOptions"
    dataset-hierarchical.bind="datasetHierarchical"
    instances.bind="aureliaGrid"
  >
  </aurelia-slickgrid>
</div>
`,Xh=[],eg={};let _r;function bD(t){_r||(_r=E.define({name:Jh,template:Pn,dependencies:Xh,bindables:eg})),t.register(_r)}const fD=Object.freeze(Object.defineProperty({__proto__:null,bindables:eg,default:Pn,dependencies:Xh,name:Jh,register:bD,template:Pn},Symbol.toStringTag,{value:"Module"}));var vD=Object.create,Bl=Object.defineProperty,_D=Object.getOwnPropertyDescriptor,yD=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),yi=t=>{throw TypeError(t)},tg=(t,e,i)=>e in t?Bl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Id=(t,e)=>Bl(t,"name",{value:e,configurable:!0}),SD=t=>[,,,vD(null)],ig=["class","method","getter","setter","accessor","field","value","get","set"],Qt=t=>t!==void 0&&typeof t!="function"?yi("Function expected"):t,CD=(t,e,i,r,a)=>({kind:ig[t],name:e,metadata:r,addInitializer:n=>i._?yi("Already initialized"):a.push(Qt(n||null))}),wD=(t,e)=>tg(e,yD("metadata"),t[3]),In=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)e&1?n[a].call(i):r=n[a].call(i,r);return r},ag=(t,e,i,r,a,n)=>{var l,d,u,s,m,o=e&7,g=!!(e&8),c=!!(e&16),p=o>3?t.length+1:o?g?1:2:0,_=ig[o+5],w=o>3&&(t[p-1]=[]),x=t[p]||(t[p]=[]),b=o&&(!c&&!g&&(a=a.prototype),o<5&&(o>3||!c)&&_D(o<4?a:{get[i](){return Gd(this,n)},set[i](h){return Fd(this,n,h)}},i));o?c&&o<4&&Id(n,(o>2?"set ":o>1?"get ":"")+i):Id(a,i);for(var y=r.length-1;y>=0;y--)s=CD(o,i,u={},t[3],x),o&&(s.static=g,s.private=c,m=s.access={has:c?h=>xD(a,h):h=>i in h},o^3&&(m.get=c?h=>(o^1?Gd:TD)(h,a,o^4?n:b.get):h=>h[i]),o>2&&(m.set=c?(h,S)=>Fd(h,a,S,o^4?n:b.set):(h,S)=>h[i]=S)),d=(0,r[y])(o?o<4?c?n:b[_]:o>4?void 0:{get:b.get,set:b.set}:a,s),u._=1,o^4||d===void 0?Qt(d)&&(o>4?w.unshift(d):o?c?n=d:b[_]=d:a=d):typeof d!="object"||d===null?yi("Object expected"):(Qt(l=d.get)&&(b.get=l),Qt(l=d.set)&&(b.set=l),Qt(l=d.init)&&w.unshift(l));return o||wD(t,a),b&&Bl(a,i,b),c?o^4?n:b:a},Y=(t,e,i)=>tg(t,typeof e!="symbol"?e+"":e,i),jl=(t,e,i)=>e.has(t)||yi("Cannot "+i),xD=(t,e)=>Object(e)!==e?yi('Cannot use the "in" operator on this value'):t.has(e),Gd=(t,e,i)=>(jl(t,e,"read from private field"),i?i.call(t):e.get(t)),Fd=(t,e,i,r)=>(jl(t,e,"write to private field"),r?r.call(t,i):e.set(t,i),i),TD=(t,e,i)=>(jl(t,e,"access private method"),i),rg,ng,St;ng=[T(fD)],rg=[O()];class ni{constructor(){Y(this,"aureliaGrid"),Y(this,"gridOptions"),Y(this,"columns",[]),Y(this,"datasetHierarchical",[]),Y(this,"hideSubTitle",!1),Y(this,"isExcludingChildWhenFiltering",!1),Y(this,"isAutoApproveParentItemWhenTreeColumnIsValid",!0),Y(this,"isAutoRecalcTotalsOnFilterChange",!1),Y(this,"isRemoveLastInsertedPopSongDisabled",!0),Y(this,"lastInsertedPopSongId"),Y(this,"searchString",In(St,8,this,"")),In(St,11,this),Y(this,"treeFormatter",(e,i,r,a,n,l)=>{const d=l.getOptions(),u=d.treeDataOptions&&d.treeDataOptions.levelPropName||"__treeLevel";if(r==null||n===void 0)return"";const s=l.getData(),m=s.getItems(),o=s.getIdPropertyName()||"id",g=s.getIdxById(n[o]),c=this.getFileIcon(r),p=n[u],_=".";r=r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");const w=`<span style="display:inline-block; width:${15*p}px;"></span>`,x=Lv(5*p);if(m[g+1]?.[u]>m[g][u]||m[g].__hasChildren){const b=`<span class="mdi icon ${n.__collapsed?"mdi-folder":"mdi-folder-open"}"></span>`;return n.__collapsed?`<span class="hidden">${_}</span>${w}${x} <span class="slick-group-toggle collapsed" level="${p}"></span>${b} ${c} ${r}`:`<span class="hidden">${_}</span>${w}${x} <span class="slick-group-toggle expanded" level="${p}"></span>${b} ${c} ${r}`}else return`<span class="hidden">${_}</span>${w}${x} <span class="slick-group-toggle" level="${p}"></span>${c} ${r}`}),this.defineGrid()}attached(){this.datasetHierarchical=this.mockDataset()}defineGrid(){this.columns=[{id:"file",name:"Files",field:"file",width:150,formatter:this.treeFormatter.bind(this),filterable:!0,sortable:!0},{id:"dateModified",name:"Date Modified",field:"dateModified",formatter:f.dateIso,type:"dateUtc",outputType:"dateIso",minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:v.compoundDate}},{id:"description",name:"Description",field:"description",minWidth:90,filterable:!0,sortable:!0},{id:"size",name:"Size",field:"size",minWidth:90,type:"number",exportWithFormatter:!0,excelExportOptions:{autoDetectCellFormat:!1},filterable:!0,filter:{model:v.compoundInputNumber},formatter:(e,i,r,a,n)=>{const l=a.field;if(n?.__treeTotals!==void 0){const d=n[this.gridOptions?.treeDataOptions?.levelPropName||"__treeLevel"],u=n?.__treeTotals?.sum[l],s=n?.__treeTotals?.avg[l];if(s!==void 0&&u!==void 0)return isNaN(u)?"":`<span class="text-primary bold">sum: ${Fa(u,0,2)} MB</span> / <span class="avg-total">avg: ${Fa(s,0,2)} MB</span> <span class="total-suffix">(${d===0?"total":"sub-total"})</span>`;if(u!==void 0)return isNaN(u)?"":`<span class="text-primary bold">sum: ${Fa(u,0,2)} MB</span> <span class="total-suffix">(${d===0?"total":"sub-total"})</span>`}return Rv(r)?`${r} MB`:""}}],this.gridOptions={autoResize:{autoHeight:!1,container:"#demo-container",rightPadding:10},enableAutoSizeColumns:!0,enableAutoResize:!0,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!0,sanitizeDataExport:!0},externalResources:[new G],enableCellNavigation:!0,enableFiltering:!0,enableTreeData:!0,multiColumnSort:!1,treeDataOptions:{columnId:"file",childrenPropName:"files",excludeChildrenWhenFilteringTree:this.isExcludingChildWhenFiltering,autoApproveParentItemWhenTreeColumnIsValid:this.isAutoApproveParentItemWhenTreeColumnIsValid,aggregators:[new k.Avg("size"),new k.Sum("size")],autoRecalcTotalsOnFilterChange:this.isAutoRecalcTotalsOnFilterChange},headerRowHeight:35,rowHeight:33,showCustomFooter:!0,presets:{treeData:{toggledItems:[{itemId:4,isCollapsed:!0}]}}}}changeAutoApproveParentItem(){return this.isAutoApproveParentItemWhenTreeColumnIsValid=!this.isAutoApproveParentItemWhenTreeColumnIsValid,this.gridOptions.treeDataOptions.autoApproveParentItemWhenTreeColumnIsValid=this.isAutoApproveParentItemWhenTreeColumnIsValid,this.aureliaGrid.slickGrid.setOptions(this.gridOptions),this.aureliaGrid.filterService.refreshTreeDataFilters(),!0}changeAutoRecalcTotalsOnFilterChange(){return this.isAutoRecalcTotalsOnFilterChange=!this.isAutoRecalcTotalsOnFilterChange,this.gridOptions.treeDataOptions.autoRecalcTotalsOnFilterChange=this.isAutoRecalcTotalsOnFilterChange,this.aureliaGrid.slickGrid?.setOptions(this.gridOptions),this.aureliaGrid.filterService.clearFilters(),this.aureliaGrid.treeDataService.enableAutoRecalcTotalsFeature(),!0}changeExcludeChildWhenFiltering(){return this.isExcludingChildWhenFiltering=!this.isExcludingChildWhenFiltering,this.gridOptions.treeDataOptions.excludeChildrenWhenFilteringTree=this.isExcludingChildWhenFiltering,this.aureliaGrid.slickGrid.setOptions(this.gridOptions),this.aureliaGrid.filterService.refreshTreeDataFilters(),!0}clearSearch(){this.searchString=""}searchStringChanged(){this.updateFilter()}updateFilter(){this.aureliaGrid.filterService.updateFilters([{columnId:"file",searchTerms:[this.searchString]}],!0,!1,!0)}getFileIcon(e){let i="";return e.includes(".pdf")?i='<span class="mdi icon mdi-file-pdf-outline"></span>':e.includes(".txt")?i='<span class="mdi icon mdi-file-document-outline"></span>':e.includes(".xls")?i='<span class="mdi icon mdi-file-excel-outline"></span>':e.includes(".mp3")&&(i='<span class="mdi icon mdi-file-music-outline"></span>'),i}addNewFile(){const e=this.aureliaGrid.dataView.getLength()+50,i=[...this.datasetHierarchical],r=Aa(i,a=>a.file==="pop","files");r&&Array.isArray(r.files)&&(r.files.push({id:e,file:`pop-${e}.mp3`,dateModified:new Date,size:e+3}),this.lastInsertedPopSongId=e,this.isRemoveLastInsertedPopSongDisabled=!1,this.datasetHierarchical=i,setTimeout(()=>{const a=this.aureliaGrid.dataView.getRowById(r.id);this.aureliaGrid.slickGrid.scrollRowIntoView(a+3)},10))}deleteFile(){const e=[...this.datasetHierarchical],i=Aa(this.datasetHierarchical,a=>a.file==="pop","files"),r=Aa(this.datasetHierarchical,a=>a.id===this.lastInsertedPopSongId,"files");if(i&&r){const a=i.files.findIndex(n=>n.id===r.id);a>=0&&(i.files.splice(a,1),this.lastInsertedPopSongId=void 0,this.isRemoveLastInsertedPopSongDisabled=!0,this.datasetHierarchical=e)}}clearFilters(){this.aureliaGrid.filterService.clearFilters()}collapseAll(){this.aureliaGrid.treeDataService.toggleTreeDataCollapse(!0)}expandAll(){this.aureliaGrid.treeDataService.toggleTreeDataCollapse(!1)}logHierarchicalStructure(){console.log("exploded array",this.aureliaGrid.treeDataService.datasetHierarchical)}logFlatStructure(){console.log("flat array",this.aureliaGrid.treeDataService.dataset)}mockDataset(){return[{id:24,file:"bucket-list.txt",dateModified:"2012-03-05T12:44:00.123Z",size:.5},{id:18,file:"something.txt",dateModified:"2015-03-03T03:50:00.123Z",size:90},{id:21,file:"documents",files:[{id:2,file:"txt",files:[{id:3,file:"todo.txt",description:"things to do someday maybe",dateModified:"2015-05-12T14:50:00.123Z",size:.7}]},{id:4,file:"pdf",files:[{id:22,file:"map2.pdf",dateModified:"2015-07-21T08:22:00.123Z",size:2.9},{id:5,file:"map.pdf",dateModified:"2015-05-21T10:22:00.123Z",size:3.1},{id:6,file:"internet-bill.pdf",dateModified:"2015-05-12T14:50:00.123Z",size:1.3},{id:23,file:"phone-bill.pdf",dateModified:"2015-05-01T07:50:00.123Z",size:1.5}]},{id:9,file:"misc",files:[{id:10,file:"warranties.txt",dateModified:"2015-02-26T16:50:00.123Z",size:.4}]},{id:7,file:"xls",files:[{id:8,file:"compilation.xls",dateModified:"2014-10-02T14:50:00.123Z",size:2.3}]},{id:55,file:"unclassified.csv",dateModified:"2015-04-08T03:44:12.333Z",size:.25},{id:56,file:"unresolved.csv",dateModified:"2015-04-03T03:21:12.000Z",size:.79},{id:57,file:"zebra.dll",dateModified:"2016-12-08T13:22:12.432",size:1.22}]},{id:11,file:"music",files:[{id:12,file:"mp3",files:[{id:16,file:"rock",files:[{id:17,file:"soft.mp3",dateModified:"2015-05-13T13:50:00Z",size:98}]},{id:14,file:"pop",files:[{id:15,file:"theme.mp3",description:"Movie Theme Song",dateModified:"2015-03-01T17:05:00Z",size:47},{id:25,file:"song.mp3",description:"it is a song...",dateModified:"2016-10-04T06:33:44Z",size:6.3}]},{id:33,file:"other",files:[]}]}]},{id:26,file:"recipes",description:"Cake Recipes",dateModified:"2012-03-05T12:44:00.123Z",files:[{id:29,file:"cheesecake",description:"strawberry cheesecake",dateModified:"2012-04-04T13:52:00.123Z",size:.2},{id:30,file:"chocolate-cake",description:"tasty sweet chocolate cake",dateModified:"2012-05-05T09:22:00.123Z",size:.2},{id:31,file:"coffee-cake",description:"chocolate coffee cake",dateModified:"2012-01-01T08:08:48.123Z",size:.2}]}]}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}St=SD();ag(St,5,"searchString",rg,ni);ni=ag(St,0,"Example28",ng,ni);In(St,1,ni);const ED=Object.freeze(Object.defineProperty({__proto__:null,get Example28(){return ni}},Symbol.toStringTag,{value:"Module"}));var $D=Object.create,Vl=Object.defineProperty,kD=Object.getOwnPropertyDescriptor,OD=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),og=t=>{throw TypeError(t)},lg=(t,e,i)=>e in t?Vl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,DD=(t,e)=>Vl(t,"name",{value:e,configurable:!0}),MD=t=>[,,,$D(null)],PD=["class","method","getter","setter","accessor","field","value","get","set"],sg=t=>t!==void 0&&typeof t!="function"?og("Function expected"):t,ID=(t,e,i,r,a)=>({kind:PD[t],name:e,metadata:r,addInitializer:n=>i._?og("Already initialized"):a.push(sg(n||null))}),GD=(t,e)=>lg(e,OD("metadata"),t[3]),FD=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},AD=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&kD(a,i));DD(a,i);for(var p=r.length-1;p>=0;p--)u=ID(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,sg(l)&&(a=l);return GD(t,a),c&&Vl(a,i,c),m?s^4?n:c:a},RD=(t,e,i)=>lg(t,e+"",i),dg,Hl;dg=[T({name:"custom-footer",template:`<button click.trigger="clickMe()">I'm a button from an Aurelia custom element (click me)</button>
  <div if.bind="clickedTimes">You've clicked me \${clickedTimes} time(s)</div>`})];class sa{constructor(){RD(this,"clickedTimes",0)}clickMe(){this.clickedTimes++}}Hl=MD();sa=AD(Hl,0,"CustomFooter",dg,sa);FD(Hl,1,sa);const LD=Object.freeze(Object.defineProperty({__proto__:null,get CustomFooter(){return sa}},Symbol.toStringTag,{value:"Module"})),cg="example29",Gn=`
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

<aurelia-slickgrid grid-id="grid" columns.bind="columns" options.bind="gridOptions" dataset.bind="dataset">
  <div au-slot="slickgrid-header" class="custom-header-slot">
    <h3>Grid with header and footer slot</h3>
  </div>
  <custom-footer class="custom-footer-slot" au-slot="slickgrid-footer"> </custom-footer>
</aurelia-slickgrid>
`,ug=[LD],mg={};let yr;function zD(t){yr||(yr=E.define({name:cg,template:Gn,dependencies:ug,bindables:mg})),t.register(yr)}const ND=Object.freeze(Object.defineProperty({__proto__:null,bindables:mg,default:Gn,dependencies:ug,name:cg,register:zD,template:Gn},Symbol.toStringTag,{value:"Module"}));var WD=Object.create,Ul=Object.defineProperty,BD=Object.getOwnPropertyDescriptor,jD=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),pg=t=>{throw TypeError(t)},hg=(t,e,i)=>e in t?Ul(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,VD=(t,e)=>Ul(t,"name",{value:e,configurable:!0}),HD=t=>[,,,WD(null)],UD=["class","method","getter","setter","accessor","field","value","get","set"],gg=t=>t!==void 0&&typeof t!="function"?pg("Function expected"):t,qD=(t,e,i,r,a)=>({kind:UD[t],name:e,metadata:r,addInitializer:n=>i._?pg("Already initialized"):a.push(gg(n||null))}),YD=(t,e)=>hg(e,jD("metadata"),t[3]),KD=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},QD=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&BD(a,i));VD(a,i);for(var p=r.length-1;p>=0;p--)u=qD(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,gg(l)&&(a=l);return YD(t,a),c&&Ul(a,i,c),m?s^4?n:c:a},Di=(t,e,i)=>hg(t,typeof e!="symbol"?e+"":e,i),bg,ql;const ZD=995;bg=[T(ND)];class da{constructor(){Di(this,"gridOptions"),Di(this,"columns",[]),Di(this,"dataset",[]),Di(this,"hideSubTitle",!1),this.defineGrids()}attached(){this.dataset=this.mockData(ZD)}defineGrids(){this.columns=[{id:"title",name:"Title",field:"title",sortable:!0,minWidth:100},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,minWidth:100},{id:"%",name:"% Complete",field:"percentComplete",sortable:!0,minWidth:100},{id:"start",name:"Start",field:"start",formatter:f.dateIso},{id:"finish",name:"Finish",field:"finish",formatter:f.dateIso},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",sortable:!0,minWidth:100}],this.gridOptions={enableAutoResize:!1,enableSorting:!0,gridHeight:225,gridWidth:800}}mockData(e){const i=[];for(let r=0;r<e;r++){const a=2e3+Math.floor(Math.random()*10),n=Math.floor(Math.random()*11),l=Math.floor(Math.random()*29),d=Math.round(Math.random()*100);i[r]={id:r,title:"Task "+r,duration:Math.round(Math.random()*100)+"",percentComplete:d,start:new Date(a,n+1,l),finish:new Date(a+1,n+1,l),effortDriven:r%5===0}}return i}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden")}}ql=HD();da=QD(ql,0,"Example29",bg,da);KD(ql,1,da);const JD=Object.freeze(Object.defineProperty({__proto__:null,get Example29(){return da}},Symbol.toStringTag,{value:"Module"})),fg="example30",Fn=`<h2>
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
  columns.bind="columns"
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
`,vg=[],_g={};let Sr;function XD(t){Sr||(Sr=E.define({name:fg,template:Fn,dependencies:vg,bindables:_g})),t.register(Sr)}const e2=Object.freeze(Object.defineProperty({__proto__:null,bindables:_g,default:Fn,dependencies:vg,name:fg,register:XD,template:Fn},Symbol.toStringTag,{value:"Module"}));var t2=Object.create,Yl=Object.defineProperty,i2=Object.getOwnPropertyDescriptor,a2=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),yg=t=>{throw TypeError(t)},Sg=(t,e,i)=>e in t?Yl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,r2=(t,e)=>Yl(t,"name",{value:e,configurable:!0}),n2=t=>[,,,t2(null)],o2=["class","method","getter","setter","accessor","field","value","get","set"],Cg=t=>t!==void 0&&typeof t!="function"?yg("Function expected"):t,l2=(t,e,i,r,a)=>({kind:o2[t],name:e,metadata:r,addInitializer:n=>i._?yg("Already initialized"):a.push(Cg(n||null))}),s2=(t,e)=>Sg(e,a2("metadata"),t[3]),d2=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},c2=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&i2(a,i));r2(a,i);for(var p=r.length-1;p>=0;p--)u=l2(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,Cg(l)&&(a=l);return s2(t,a),c&&Yl(a,i,c),m?s^4?n:c:a},N=(t,e,i)=>Sg(t,typeof e!="symbol"?e+"":e,i),wg,Kl;const u2=500;function m2(t,e,i){const r=i?.getOptions(),a=e.editor;let l=!!(r.editable&&a);return t&&e&&r?.editable&&e.id==="finish"&&(l=!!t?.completed),l}const p2=(t,e,i,r,a,n)=>{const d=n.getOptions().editable&&r.editor;return i=i??"",d?{text:i,addClasses:"editable-field",toolTip:"Click to Edit"}:i},h2=(t,e)=>(t==null||!t.length)&&(e.compositeEditorOptions&&e.compositeEditorOptions.modalType==="create"||e.compositeEditorOptions.modalType==="edit")?{valid:!1,msg:"This is a required field."}:/^(task\s\d+)*$/i.test(t)?{valid:!0,msg:""}:{valid:!1,msg:'Your title is invalid, it must start with "Task" followed by a number.'};wg=[T(e2)];class ca{constructor(e=M(Ce(we))){N(this,"http",e),N(this,"_darkMode",!1),N(this,"aureliaGrid"),N(this,"compositeEditorInstance"),N(this,"gridOptions"),N(this,"columns",[]),N(this,"dataset",[]),N(this,"editQueue",[]),N(this,"editedItems",{}),N(this,"hideSubTitle",!1),N(this,"isGridEditable",!0),N(this,"isCompositeDisabled",!1),N(this,"isMassSelectionDisabled",!0),N(this,"cellCssStyleQueue",[]),N(this,"complexityLevelList",[{value:0,label:"Very Simple"},{value:1,label:"Simple"},{value:2,label:"Straightforward"},{value:3,label:"Complex"},{value:4,label:"Very Complex"}]),this.compositeEditorInstance=new zv}created(){this.defineGrids()}attached(){this.dataset=this.loadData(u2)}detaching(){document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light"}defineGrids(){this.columns=[{id:"title",name:'<span title="Task must always be followed by a number" class="text-warning mdi mdi-alert-outline"></span> Title <span title="Title is always rendered as UPPERCASE" class="mdi mdi-information-outline"></span>',field:"title",sortable:!0,minWidth:75,cssClass:"text-uppercase fw-bold",columnGroup:"Common Factor",filterable:!0,filter:{model:v.compoundInputText},editor:{model:C.longText,massUpdate:!1,compositeEditorFormOrder:0,required:!0,alwaysSaveOnEnterKey:!0,maxLength:12,options:{cols:45,rows:6,buttonTexts:{cancel:"Close",save:"Done"}},validator:h2}},{id:"duration",name:"Duration",field:"duration",sortable:!0,filterable:!0,minWidth:75,type:"number",columnGroup:"Common Factor",formatter:(e,i,r)=>r==null||r===""?"":r>1?`${r} days`:`${r} day`,editor:{model:C.float,compositeEditorFormOrder:2,massUpdate:!0,decimal:2,valueStep:1,minValue:0,maxValue:1e4,alwaysSaveOnEnterKey:!0,required:!0}},{id:"cost",name:"Cost",field:"cost",width:90,minWidth:70,sortable:!0,filterable:!0,type:"number",columnGroup:"Analysis",filter:{model:v.compoundInputNumber},formatter:f.dollar},{id:"percentComplete",name:"% Complete",field:"percentComplete",minWidth:100,type:"number",sortable:!0,filterable:!0,columnGroup:"Analysis",filter:{model:v.compoundSlider,operator:">="},editor:{model:C.slider,massUpdate:!0,compositeEditorFormOrder:1,minValue:0,maxValue:100},customTooltip:{position:"center"}},{id:"complexity",name:"Complexity",field:"complexity",minWidth:100,type:"number",sortable:!0,filterable:!0,columnGroup:"Analysis",formatter:(e,i,r)=>this.complexityLevelList[r]?.label,exportCustomFormatter:(e,i,r)=>this.complexityLevelList[r]?.label,filter:{model:v.multipleSelect,collection:this.complexityLevelList,options:{showClear:!0}},editor:{model:C.singleSelect,collection:this.complexityLevelList,massUpdate:!0}},{id:"start",name:"Start",field:"start",sortable:!0,minWidth:100,formatter:f.dateUs,columnGroup:"Period",exportCustomFormatter:f.dateUs,type:"date",outputType:"dateUs",saveOutputType:"dateUtc",filterable:!0,filter:{model:v.compoundDate},editor:{model:C.date,massUpdate:!0,options:{hideClearButton:!1}}},{id:"completed",name:"Completed",field:"completed",width:80,minWidth:75,maxWidth:100,sortable:!0,filterable:!0,columnGroup:"Period",cssClass:"text-center",formatter:f.checkmarkMaterial,exportWithFormatter:!1,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:v.singleSelect,options:{showClear:!0}},editor:{model:C.checkbox,massUpdate:!0}},{id:"finish",name:"Finish",field:"finish",sortable:!0,minWidth:100,formatter:f.dateUs,columnGroup:"Period",type:"date",outputType:"dateUs",saveOutputType:"dateUtc",filterable:!0,filter:{model:v.compoundDate},exportCustomFormatter:f.dateUs,editor:{model:C.date,options:{displayDateMin:"today"},massUpdate:!0,validator:(e,i)=>{const r=i?.item;return r&&r.completed&&!e?{valid:!1,msg:'You must provide a "Finish" date when "Completed" is checked.'}:{valid:!0,msg:""}}}},{id:"product",name:"Product",field:"product",filterable:!0,columnGroup:"Item",minWidth:100,exportWithFormatter:!0,dataKey:"id",labelKey:"itemName",formatter:f.complexObject,exportCustomFormatter:f.complex,type:"object",sortComparer:ue.objectString,editor:{model:C.autocompleter,alwaysSaveOnEnterKey:!0,massUpdate:!0,options:{minLength:1,fetch:(e,i)=>{const r=this.mockProducts();i(r.filter(a=>a.itemName.toLowerCase().includes(e.toLowerCase())))},renderItem:{layout:"fourCorners",templateCallback:e=>this.renderItemCallbackWith4Corners(e)}}},filter:{model:v.inputText,type:"string",queryField:"product.itemName"}},{id:"origin",name:"Country of Origin",field:"origin",formatter:f.complexObject,columnGroup:"Item",exportCustomFormatter:f.complex,dataKey:"code",labelKey:"name",type:"object",sortComparer:ue.objectString,filterable:!0,sortable:!0,minWidth:100,editor:{model:C.autocompleter,massUpdate:!0,customStructure:{label:"name",value:"code"},collectionAsync:this.http.fetch(zi),options:{minLength:0}},filter:{model:v.inputText,type:"string",queryField:"origin.name"}},{id:"action",name:"Action",field:"action",width:70,minWidth:70,maxWidth:70,excludeFromExport:!0,formatter:()=>'<div class="button-style margin-auto" style="width: 35px;"><span class="mdi mdi-chevron-down text-primary"></span></div>',cellMenu:{hideCloseButton:!1,commandTitle:"Commands",commandItems:[{command:"edit",title:"Edit Row",iconCssClass:"mdi mdi-pencil",positionOrder:66,action:()=>this.openCompositeModal("edit")},{command:"clone",title:"Clone Row",iconCssClass:"mdi mdi-content-copy",positionOrder:66,action:()=>this.openCompositeModal("clone")},"divider",{command:"delete-row",title:"Delete Row",positionOrder:64,iconCssClass:"mdi mdi-close color-danger",cssClass:"red",textCssClass:"text-italic color-danger-light",itemVisibilityOverride:e=>!e.dataContext?.completed,action:(e,i)=>{const r=i.dataContext,a=i?.row??0;confirm(`Do you really want to delete row (${a+1}) with "${r.title}"`)&&this.aureliaGrid.gridService.deleteItemById(r.id)}}]}}],this.gridOptions={enableAddRow:!0,enableCellNavigation:!0,asyncEditorLoading:!1,autoEdit:!0,autoCommitEdit:!0,editable:!0,autoAddCustomEditorFormatter:p2,autoResize:{container:"#demo-container",rightPadding:10},darkMode:this._darkMode,enableAutoSizeColumns:!0,enableAutoResize:!0,showCustomFooter:!0,enablePagination:!0,pagination:{pageSize:10,pageSizes:[10,200,250,500,5e3]},enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!1},externalResources:[new G,new di,this.compositeEditorInstance],enableFiltering:!0,selectionOptions:{selectActiveRow:!1},createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:28,enableCheckboxSelector:!0,enableSelection:!0,multiSelect:!1,checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},enableCompositeEditor:!0,editCommandHandler:(e,i,r)=>{const a=Array.isArray(r.prevSerializedValue)?r.prevSerializedValue:[r.prevSerializedValue],n=Array.isArray(r.serializedValue)?r.serializedValue:[r.serializedValue],l=this.columns.filter(u=>u.editor!==void 0),d=[];a.forEach((u,s)=>{const m=a[s],o=n[s];if(m!==o||o===""){const g=Array.isArray(r.prevSerializedValue)?l[s]:i;this.editedItems[this.gridOptions.datasetIdPropertyName||"id"]=e,this.aureliaGrid.slickGrid.invalidate(),r.execute(),this.renderUnsavedCellStyling(e,g,r),d.push(g)}}),this.editQueue.push({item:e,columns:d,editCommand:r})},enableCellMenu:!0,cellMenu:{activateCellOnMenuClick:!0},gridMenu:{hideToggleDarkModeCommand:!1,onCommand:(e,i)=>{i.command==="toggle-dark-mode"&&(this._darkMode=!this._darkMode,this.toggleBodyBackground())}}}}loadData(e){const i=[];for(let r=0;r<e;r++){const a=Math.floor(Math.random()*this.mockProducts().length),n=2e3+Math.floor(Math.random()*10),l=new Date().getFullYear()+Math.floor(Math.random()*10),d=Math.floor(Math.random()*11),u=Math.floor(Math.random()*29),s=Math.floor(Math.random()*59),m=new Date(l,d+1,u,s,s,s),o=Math.floor(Math.random()*100)+15,g=o>100?r>5?100:88:o,c=g===100;i[r]={id:r,title:"Task "+r,duration:Math.floor(Math.random()*100)+10,percentComplete:g,analysis:{percentComplete:g},complexity:r%3?0:2,start:new Date(n,d,u,u,s,s,s),finish:c||r%3===0&&m>new Date&&r>3?c?new Date:m:"",cost:r%33===0?null:Math.round(Math.random()*1e4)/100,completed:c&&r>5||r%3===0&&m>new Date&&r>3,product:{id:this.mockProducts()[a]?.id,itemName:this.mockProducts()[a]?.itemName},origin:r%2?{code:"CA",name:"Canada"}:{code:"US",name:"United States"}},r%8||(delete i[r].finish,delete i[r].percentComplete)}return i}aureliaGridReady(e){this.aureliaGrid=e}handleValidationError(e,i){if(i.validationResults){let r=i.validationResults.msg||"";if(i.editor&&i.editor instanceof Nv){if(i.validationResults.errors){r+=`
`;for(const a of i.validationResults.errors){const n=a.editor.args.column.name;r+=`${n.toUpperCase()}: ${a.msg}`}}console.log(r)}}else alert(i.validationResults.msg);return e.preventDefault(),!1}handleItemDeleted(e){console.log("item deleted with ids:",e)}handleOnBeforeEditCell(e,i){const{column:r,item:a,grid:n}=i;return r&&a&&!m2(a,r,n)?(e.preventDefault(),!1):!0}handleOnCellChange(e,i){const r=i?.item;r&&!r.completed&&(r.finish=null,this.aureliaGrid.gridService.updateItem(r))}handleOnCellClicked(e,i){console.log(e,i)}handleOnCompositeEditorChange(e,i){const r=i.column,a=i.formValues;r.id==="percentComplete"&&a.percentComplete===100&&(this.compositeEditorInstance.changeFormInputValue("completed",!0),this.compositeEditorInstance.changeFormInputValue("finish",new Date))}handleReRenderUnsavedStyling(){this.removeAllUnsavedStylingFromCell(),this.renderUnsavedStylingOnAllVisibleCells()}handleOnGridStateChanged(e){Array.isArray(e.gridState?.rowSelection?.dataContextIds)&&(this.isMassSelectionDisabled=e.gridState?.rowSelection?.dataContextIds.length===0)}openCompositeModal(e){let i="";switch(e){case"create":i="Inserting New Task";break;case"clone":i="Clone - {{title}}";break;case"edit":i='Editing - {{title}} (<span class="text-muted">id:</span> <span class="text-primary">{{id}}</span>)';break;case"mass-update":i="Mass Update All Records";break;case"mass-selection":i="Update Selected Records";break}this.compositeEditorInstance?.openDetails({headerTitle:i,modalType:e,insertOptions:{highlightRow:!1},showFormResetButton:!0,resetFormButtonIconCssClass:"mdi mdi-undo",onClose:()=>Promise.resolve(confirm("You have unsaved changes, are you sure you want to close this window?")),onError:r=>alert(r.message),onRendered:r=>{r.dataset.bsTheme=this._darkMode?"dark":"light"},onSave:(r,a,n)=>e==="mass-update"||e==="mass-selection"?new Promise((d,u)=>{setTimeout(()=>{r.percentComplete>=50?d(!0):u("Unfortunately we only accept a minimum of 50% Completion...")},50)}):(console.log(`${e} item data context`,n),new Promise(d=>setTimeout(()=>d(!0),50)))})}toggleGridEditReadonly(){this.undoAllEdits(),this.isGridEditable=!this.isGridEditable,this.isCompositeDisabled=!this.isGridEditable,this.isGridEditable||(this.isMassSelectionDisabled=!0),this.aureliaGrid.slickGrid.setOptions({editable:this.isGridEditable})}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.aureliaGrid.slickGrid?.setOptions({darkMode:this._darkMode})}toggleBodyBackground(){this._darkMode?(document.querySelector(".panel-wm-content").classList.add("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="dark"):(document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light")}removeUnsavedStylingFromCell(e,i,r){const a=`unsaved_highlight_${[i.id]}${r}`;this.aureliaGrid.slickGrid.removeCellCssStyles(a);const n=this.cellCssStyleQueue.findIndex(l=>l===a);n>=0&&this.cellCssStyleQueue.splice(n,1)}removeAllUnsavedStylingFromCell(){for(const e of this.cellCssStyleQueue)this.aureliaGrid.slickGrid.removeCellCssStyles(e);this.cellCssStyleQueue=[]}renderUnsavedStylingOnAllVisibleCells(){for(const e of this.editQueue)if(e){const{item:i,columns:r,editCommand:a}=e;Array.isArray(r)&&r.forEach(n=>{this.renderUnsavedCellStyling(i,n,a)})}}renderUnsavedCellStyling(e,i,r){if(r&&e&&i){const a=this.aureliaGrid.dataView.getRowByItem(e);if(a>=0){const n={[a]:{[i.id]:"unsaved-editable-field"}},l=`unsaved_highlight_${[i.id]}${a}`;this.aureliaGrid.slickGrid.setCellCssStyles(`unsaved_highlight_${[i.id]}${a}`,n),this.cellCssStyleQueue.push(l)}}}saveAll(){console.log(this.editQueue),console.log(this.editedItems),this.removeAllUnsavedStylingFromCell(),this.editQueue=[],this.editedItems={}}undoLastEdit(e=!1){const i=this.editQueue.pop(),r=i?.editCommand;if(i&&r&&rt.cancelCurrentEdit()){r.undo();for(const a of i.columns)this.removeUnsavedStylingFromCell(i.item,a,r.row);this.aureliaGrid.slickGrid.invalidate(),e&&this.aureliaGrid.slickGrid.gotoCell(r.row,r.cell,!1)}}undoAllEdits(){for(const e of this.editQueue){const i=e?.editCommand;if(i&&rt.cancelCurrentEdit()){i.undo();for(const r of e.columns)this.removeUnsavedStylingFromCell(e.item,r,i.row)}}this.aureliaGrid.slickGrid.invalidate(),this.editQueue=[]}mockProducts(){return[{id:0,itemName:"Sleek Metal Computer",itemNameTranslated:"some fantastic sleek metal computer description",listPrice:2100.23,itemTypeName:"I",image:"http://i.stack.imgur.com/pC1Tv.jpg",icon:this.getRandomIcon(0)},{id:1,itemName:"Tasty Granite Table",itemNameTranslated:"an extremely huge and heavy table",listPrice:3200.12,itemTypeName:"I",image:"https://i.imgur.com/Fnm7j6h.jpg",icon:this.getRandomIcon(1)},{id:2,itemName:"Awesome Wooden Mouse",itemNameTranslated:"super old mouse",listPrice:15,itemTypeName:"I",image:"https://i.imgur.com/RaVJuLr.jpg",icon:this.getRandomIcon(2)},{id:3,itemName:"Gorgeous Fresh Shirt",itemNameTranslated:"what a gorgeous shirt seriously",listPrice:25.76,itemTypeName:"I",image:"http://i.stack.imgur.com/pC1Tv.jpg",icon:this.getRandomIcon(3)},{id:4,itemName:"Refined Cotton Table",itemNameTranslated:"super light table that will fall apart amazingly fast",listPrice:13.35,itemTypeName:"I",image:"https://i.imgur.com/Fnm7j6h.jpg",icon:this.getRandomIcon(4)},{id:5,itemName:"Intelligent Wooden Pizza",itemNameTranslated:"wood not included",listPrice:23.33,itemTypeName:"I",image:"https://i.imgur.com/RaVJuLr.jpg",icon:this.getRandomIcon(5)},{id:6,itemName:"Licensed Cotton Chips",itemNameTranslated:"not sure what that is",listPrice:71.21,itemTypeName:"I",image:"http://i.stack.imgur.com/pC1Tv.jpg",icon:this.getRandomIcon(6)},{id:7,itemName:"Ergonomic Rubber Soap",itemNameTranslated:"so good you'll want to use it every night",listPrice:2.43,itemTypeName:"I",image:"https://i.imgur.com/Fnm7j6h.jpg",icon:this.getRandomIcon(7)},{id:8,itemName:"Handcrafted Steel Car",itemNameTranslated:"aka tesla truck",listPrice:31288.39,itemTypeName:"I",image:"https://i.imgur.com/RaVJuLr.jpg",icon:this.getRandomIcon(8)}]}getRandomIcon(e){const i=["mdi-arrow-collapse","mdi-arrow-expand","mdi-cancel","mdi-check","mdi-checkbox-blank-outline","mdi-check-box-outline","mdi-checkbox-marked","mdi-close","mdi-close-circle","mdi-close-circle-outline","mdi-close-thick","mdi-content-copy","mdi-database-refresh","mdi-download","mdi-file-document-outline","mdi-file-excel-outline","mdi-file-music-outline","mdi-file-pdf-outline","mdi-filter-remove-outline","mdi-flip-vertical","mdi-folder","mdi-folder-open","mdi-help-circle","mdi-help-circle-outline","mdi-history","mdi-information","mdi-information-outline","mdi-link","mdi-link-variant","mdi-menu","mdi-microsoft-excel","mdi-minus","mdi-page-first","mdi-page-last","mdi-paperclip","mdi-pin-off-outline","mdi-pin-outline","mdi-playlist-plus","mdi-playlist-remove","mdi-plus","mdi-redo","mdi-refresh","mdi-shape-square-plus","mdi-sort-ascending","mdi-sort-descending","mdi-swap-horizontal","mdi-swap-vertical","mdi-sync","mdi-table-edit","mdi-table-refresh","mdi-undo"],r=Math.floor(Math.random()*i.length-1);return i[e??r]}renderItemCallbackWith2Rows(e){return`<div class="autocomplete-container-list">
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
            <span class="autocomplete-top-right">${mo(e.listPrice,2,2,!1,"$")}</span>
          <div>
        </div>
        <div>
          <div class="autocomplete-bottom-left">${e.itemNameTranslated}</div>
          <span class="autocomplete-bottom-right">Type: <b>${e.itemTypeName==="I"?"Item":e.itemTypeName==="C"?"PdCat":"Cat"}</b></span>
        </div>`}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}Kl=n2();ca=c2(Kl,0,"Example30",wg,ca);d2(Kl,1,ca);const g2=Object.freeze(Object.defineProperty({__proto__:null,get Example30(){return ca}},Symbol.toStringTag,{value:"Module"})),xg="example31",An=`<h2>
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
  columns.bind="columns"
  options.bind="gridOptions"
  dataset.bind="dataset"
  pagination-options.bind="paginationOptions"
  on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
  on-grid-state-changed.trigger="gridStateChanged($event.detail)"
>
</aurelia-slickgrid>
`,Tg=[],Eg={};let Cr;function b2(t){Cr||(Cr=E.define({name:xg,template:An,dependencies:Tg,bindables:Eg})),t.register(Cr)}const f2=Object.freeze(Object.defineProperty({__proto__:null,bindables:Eg,default:An,dependencies:Tg,name:xg,register:b2,template:An},Symbol.toStringTag,{value:"Module"}));var v2=Object.create,Ql=Object.defineProperty,_2=Object.getOwnPropertyDescriptor,y2=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),$g=t=>{throw TypeError(t)},kg=(t,e,i)=>e in t?Ql(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,S2=(t,e)=>Ql(t,"name",{value:e,configurable:!0}),C2=t=>[,,,v2(null)],w2=["class","method","getter","setter","accessor","field","value","get","set"],Og=t=>t!==void 0&&typeof t!="function"?$g("Function expected"):t,x2=(t,e,i,r,a)=>({kind:w2[t],name:e,metadata:r,addInitializer:n=>i._?$g("Already initialized"):a.push(Og(n||null))}),T2=(t,e)=>kg(e,y2("metadata"),t[3]),E2=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},$2=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&_2(a,i));S2(a,i);for(var p=r.length-1;p>=0;p--)u=x2(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,Og(l)&&(a=l);return T2(t,a),c&&Ql(a,i,c),m?s^4?n:c:a},F=(t,e,i)=>kg(t,typeof e!="symbol"?e+"":e,i),Dg,Zl;const k2=20;Dg=[T(f2)];class ua{constructor(e=M(Ce(we))){F(this,"http",e),F(this,"aureliaGrid"),F(this,"columns",[]),F(this,"gridOptions"),F(this,"dataset",[]),F(this,"metrics"),F(this,"paginationOptions"),F(this,"hideSubTitle",!1),F(this,"isCountEnabled",!0),F(this,"isSelectEnabled",!1),F(this,"isExpandEnabled",!1),F(this,"odataVersion",2),F(this,"odataQuery",""),F(this,"processing",!1),F(this,"errorStatus",""),F(this,"isPageErrorTest",!1),F(this,"status",{text:"",class:""}),F(this,"isOtherGenderAdded",!1),F(this,"genderCollection",[{value:"male",label:"male"},{value:"female",label:"female"}]),this.initializeGrid()}aureliaGridReady(e){this.aureliaGrid=e}initializeGrid(){this.columns=[{id:"name",name:"Name",field:"name",sortable:!0,filterable:!0,filter:{model:v.compoundInput}},{id:"gender",name:"Gender",field:"gender",filterable:!0,editor:{model:C.singleSelect,collectionAsync:Vs(this.genderCollection)},filter:{model:v.singleSelect,collectionAsync:Vs(this.genderCollection),collectionOptions:{addBlankEntry:!0}}},{id:"company",name:"Company",field:"company",filterable:!0,sortable:!0},{id:"category_name",name:"Category",field:"category/name",filterable:!0,sortable:!0}],this.gridOptions={enableAutoResize:!0,autoResize:{container:"#demo-container",rightPadding:10},checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},editable:!0,autoEdit:!0,autoCommitEdit:!0,rowHeight:33,headerRowHeight:35,enableCellNavigation:!0,enableFiltering:!0,enableCheckboxSelector:!0,enableSelection:!0,enablePagination:!0,pagination:{pageSizes:[10,20,50,100,500],pageSize:k2},presets:{filters:[{columnId:"gender",searchTerms:["male"],operator:"="}],sorters:[{columnId:"name",direction:"asc"}],pagination:{pageNumber:2,pageSize:20}},backendServiceApi:{service:new so,options:{enableCount:this.isCountEnabled,enableSelect:this.isSelectEnabled,enableExpand:this.isExpandEnabled,version:this.odataVersion},preProcess:()=>this.displaySpinner(!0),process:e=>this.getCustomerApiCall(e),postProcess:e=>{this.metrics=e.metrics,this.displaySpinner(!1),this.getCustomerCallback(e)}},externalResources:[new Wv]}}addOtherGender(){const e={value:"other",label:"other"},i=this.columns.find(r=>r.id==="gender");if(i){let r=i.editor.collection;const a=i.filter.collectionAsync;Array.isArray(r)&&(i.editor.collection=[...this.genderCollection,e],r=i.editor.collection,a?.next&&(a.next(r),a.complete()))}this.isOtherGenderAdded=!0}displaySpinner(e){this.processing=e,this.status=e?{text:"loading...",class:"col-md-2 alert alert-warning"}:{text:"finished!!",class:"col-md-2 alert alert-success"}}getCustomerCallback(e){let i=e.totalRecordCount;this.isCountEnabled&&(i=this.odataVersion===4?e["@odata.count"]:e.d.__count),this.metrics&&(this.metrics.totalItemCount=i),this.paginationOptions={...this.gridOptions.pagination,totalItems:i},this.dataset=this.odataVersion===4?e.value:e.d.results,this.odataQuery=e.query}getCustomerApiCall(e){return this.getCustomerDataApiMock(e)}getCustomerDataApiMock(e){return new Bv(i=>{const r=e.toLowerCase().split("&");let a,n=0,l="",d=100;const u={};for(const s of r)if(s.includes("$top=")&&(a=+s.substring(5)),s.includes("$skip=")&&(n=+s.substring(6)),s.includes("$orderby=")&&(l=s.substring(9)),s.includes("$filter=")){const m=s.substring(8).replace("%20"," ");if(m.includes("contains")){const o=m.match(/contains\(([a-zA-Z/]+),\s?'(.*?)'/),g=o[1].trim();u[g]={type:"substring",term:o[2].trim()}}if(m.includes("substringof")){const o=m.match(/substringof\('(.*?)',\s([a-zA-Z/]+)/),g=o[2].trim();u[g]={type:"substring",term:o[1].trim()}}if(m.includes("eq")){const o=m.match(/([a-zA-Z ]*) eq '(.*?)'/);if(Array.isArray(o)){const g=o[1].trim();u[g]={type:"equal",term:o[2].trim()}}}if(m.includes("startswith")){const o=m.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/),g=o[1].trim();u[g]={type:"starts",term:o[2].trim()}}if(m.includes("endswith")){const o=m.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/),g=o[1].trim();u[g]={type:"ends",term:o[2].trim()}}}this.http.fetch(vt).then(s=>s.json()).then(s=>{if(l?.length>0){const c=l.split(",");for(const p of c){const _=p.split(" "),w=_[0];let x=y=>y;for(const y of w.split("/")){const h=x;x=S=>h(S)[y]}switch((_[1]??"asc").toLocaleLowerCase()){case"asc":s=s.sort((y,h)=>x(y).localeCompare(x(h)));break;case"desc":s=s.sort((y,h)=>x(h).localeCompare(x(y)));break}}}let m=n,o=s;if(u){for(const c in u)u.hasOwnProperty(c)&&(o=o.filter(p=>{const _=u[c].type,w=u[c].term;let x=c;if(c&&c.indexOf(" ")!==-1){const h=c.split(" ");x=h[h.length-1]}let b,y=p;for(const h of x.split("/"))b=y[h],y=b;if(b)switch(_){case"equal":return b.toLowerCase()===w;case"ends":return b.toLowerCase().endsWith(w);case"starts":return b.toLowerCase().startsWith(w);case"substring":return b.toLowerCase().includes(w)}}));d=o.length}m>o.length&&(e=e.replace(`$skip=${m}`,""),m=0);const g=o.slice(m,m+a);setTimeout(()=>{const c={query:e};this.isCountEnabled||(c.totalRecordCount=d),this.odataVersion===4?(c.value=g,this.isCountEnabled&&(c["@odata.count"]=d)):(c.d={results:g},this.isCountEnabled&&(c.d.__count=d)),i.next(c),i.complete()},150)})})}clearAllFiltersAndSorts(){this.aureliaGrid?.gridService.clearAllFiltersAndSorts()}goToFirstPage(){this.aureliaGrid?.paginationService?.goToFirstPage()}goToLastPage(){this.aureliaGrid?.paginationService?.goToLastPage()}gridStateChanged(e){console.log("Client sample, Grid State changed:: ",e.change)}setFiltersDynamically(){this.aureliaGrid?.filterService.updateFilters([{columnId:"name",searchTerms:["A"],operator:"a*"}])}setSortingDynamically(){this.aureliaGrid?.sortService.updateSorting([{columnId:"name",direction:"DESC"}])}handleOnBeforeSort(e){return!0}handleOnBeforeSearchChange(e){return!0}handleOnBeforePaginationChange(e){return!0}changeCountEnableFlag(){return this.displaySpinner(!0),this.isCountEnabled=!this.isCountEnabled,this.resetOptions({enableCount:this.isCountEnabled}),!0}changeEnableSelectFlag(){return this.isSelectEnabled=!this.isSelectEnabled,this.resetOptions({enableSelect:this.isSelectEnabled}),!0}changeEnableExpandFlag(){return this.isExpandEnabled=!this.isExpandEnabled,this.resetOptions({enableExpand:this.isExpandEnabled}),!0}setOdataVersion(e){return this.displaySpinner(!0),this.odataVersion=e,this.resetOptions({version:this.odataVersion}),!0}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}resetOptions(e){this.displaySpinner(!0);const i=this.gridOptions.backendServiceApi.service;i.updateOptions(e),i.clearFilters(),this.aureliaGrid?.filterService.clearFilters()}}Zl=C2();ua=$2(Zl,0,"Example31",Dg,ua);E2(Zl,1,ua);const O2=Object.freeze(Object.defineProperty({__proto__:null,get Example31(){return ua}},Symbol.toStringTag,{value:"Module"})),Mg="example32",Rn=`<h2>
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
    columns.bind="columns"
    options.bind="gridOptions"
    dataset.bind="dataset"
    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
    on-selected-row-ids-changed.trigger="handleOnSelectedRowIdsChanged($event.detail.args)"
  >
  </aurelia-slickgrid>
</div>
`,Pg=[],Ig={};let wr;function D2(t){wr||(wr=E.define({name:Mg,template:Rn,dependencies:Pg,bindables:Ig})),t.register(wr)}const M2=Object.freeze(Object.defineProperty({__proto__:null,bindables:Ig,default:Rn,dependencies:Pg,name:Mg,register:D2,template:Rn},Symbol.toStringTag,{value:"Module"}));var P2=Object.create,Jl=Object.defineProperty,I2=Object.getOwnPropertyDescriptor,G2=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Gg=t=>{throw TypeError(t)},Fg=(t,e,i)=>e in t?Jl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,F2=(t,e)=>Jl(t,"name",{value:e,configurable:!0}),A2=t=>[,,,P2(null)],R2=["class","method","getter","setter","accessor","field","value","get","set"],Ag=t=>t!==void 0&&typeof t!="function"?Gg("Function expected"):t,L2=(t,e,i,r,a)=>({kind:R2[t],name:e,metadata:r,addInitializer:n=>i._?Gg("Already initialized"):a.push(Ag(n||null))}),z2=(t,e)=>Fg(e,G2("metadata"),t[3]),N2=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},W2=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&I2(a,i));F2(a,i);for(var p=r.length-1;p>=0;p--)u=L2(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,Ag(l)&&(a=l);return z2(t,a),c&&Jl(a,i,c),m?s^4?n:c:a},K=(t,e,i)=>Fg(t,typeof e!="symbol"?e+"":e,i),Rg,Xl;const B2=400,j2=(t,e,i,r,a,n)=>{const d=n.getOptions().editable&&r.editor;return i=i??"",d?{text:i,addClasses:"editable-field",toolTip:"Click to Edit"}:i},V2=t=>t==null||!t.length?{valid:!1,msg:"This is a required field."}:/^(task\s\d+)*$/i.test(t)?{valid:!0,msg:""}:{valid:!1,msg:'Your title is invalid, it must start with "Task" followed by a number.'};Rg=[T(M2)];class ma{constructor(e=M(Ce(we))){K(this,"http",e),K(this,"aureliaGrid"),K(this,"gridOptions"),K(this,"columns",[]),K(this,"dataset",[]),K(this,"editQueue",[]),K(this,"editedItems",{}),K(this,"hideSubTitle",!1),K(this,"isUsingDefaultResize",!1),K(this,"isGridEditable",!0),K(this,"isMassSelectionDisabled",!0),K(this,"complexityLevelList",[{value:0,label:"Very Simple"},{value:1,label:"Simple"},{value:2,label:"Straightforward"},{value:3,label:"Complex"},{value:4,label:"Very Complex"}]),this.initializeGrid()}attached(){this.dataset=this.loadData(B2)}aureliaGridReady(e){this.aureliaGrid=e}initializeGrid(){this.columns=[{id:"title",name:"Title",field:"title",sortable:!0,minWidth:65,resizeExtraWidthPadding:4,resizeCharWidthInPx:7.6,resizeCalcWidthRatio:1,resizeMaxWidthThreshold:200,columnGroup:"Common Factor",cssClass:"text-uppercase fw-bold",filterable:!0,filter:{model:v.inputText,filterPredicate:(e,i)=>{const r=i.parsedSearchTerms||[];if(r?.length){const a=i.columnId,n=r[0],l=e[a].toLowerCase(),d=n.matchAll(/^%([^%\r\n]+)[^%\r\n]*$|(.*)%(.+)%(.*)|(.+)%(.+)|([^%\r\n]+)%$/gi),u=Array.from(d),s=u.length?u[0]:[],[m,o,g,c,p,_,w,x]=s;return o?l.endsWith(o.toLowerCase()):g&&c?l.startsWith(g.toLowerCase())&&l.includes(c.toLowerCase()):c&&p?l.includes(c)&&l.endsWith(p.toLowerCase()):c&&!p?l.includes(c.toLowerCase()):_&&w?l.startsWith(_.toLowerCase())&&l.endsWith(w.toLowerCase()):x?l.startsWith(x.toLowerCase()):l.includes(n.toLowerCase())}return!0}},editor:{model:C.longText,required:!0,alwaysSaveOnEnterKey:!0,maxLength:12,options:{cols:45,rows:6,buttonTexts:{cancel:"Close",save:"Done"}},validator:V2}},{id:"duration",name:"Duration",field:"duration",sortable:!0,filterable:!0,minWidth:65,type:"number",columnGroup:"Common Factor",formatter:(e,i,r)=>r==null||r===""?"":r>1?`${r} days`:`${r} day`,editor:{model:C.float,decimal:2,valueStep:1,minValue:0,maxValue:1e4,alwaysSaveOnEnterKey:!0,required:!0}},{id:"cost",name:"Cost",field:"cost",minWidth:65,sortable:!0,filterable:!0,type:"number",columnGroup:"Analysis",filter:{model:v.compoundInputNumber},formatter:f.dollar},{id:"percentComplete",name:"% Complete",field:"percentComplete",minWidth:100,type:"number",sortable:!0,filterable:!0,columnGroup:"Analysis",filter:{model:v.compoundSlider,operator:">="},editor:{model:C.slider,minValue:0,maxValue:100}},{id:"complexity",name:"Complexity",field:"complexity",resizeCalcWidthRatio:.9,sortable:!0,filterable:!0,columnGroup:"Analysis",formatter:(e,i,r)=>this.complexityLevelList[r]?.label,exportCustomFormatter:(e,i,r)=>this.complexityLevelList[r]?.label,filter:{model:v.multipleSelect,collection:this.complexityLevelList},editor:{model:C.singleSelect,collection:this.complexityLevelList}},{id:"start",name:"Start",field:"start",sortable:!0,formatter:f.dateUs,columnGroup:"Period",exportCustomFormatter:f.dateUs,type:"date",outputType:"dateUs",saveOutputType:"dateUtc",filterable:!0,filter:{model:v.compoundDate},editor:{model:C.date,params:{hideClearButton:!1}}},{id:"completed",name:"Completed",field:"completed",width:80,minWidth:75,maxWidth:100,cssClass:"text-center",columnGroup:"Period",formatter:f.checkmarkMaterial,exportWithFormatter:!1,filterable:!0,sortable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:v.singleSelect},editor:{model:C.checkbox}},{id:"finish",name:"Finish",field:"finish",sortable:!0,formatter:f.dateUs,columnGroup:"Period",type:"date",outputType:"dateUs",saveOutputType:"dateUtc",filterable:!0,filter:{model:v.compoundDate},exportCustomFormatter:f.dateUs,editor:{model:C.date,options:{displayDateMin:"today"},validator:(e,i)=>{const r=i?.item;return r&&r.completed&&!e?{valid:!1,msg:'You must provide a "Finish" date when "Completed" is checked.'}:{valid:!0,msg:""}}}},{id:"product",name:"Product",field:"product",filterable:!0,columnGroup:"Item",minWidth:100,resizeCharWidthInPx:8,exportWithFormatter:!0,dataKey:"id",labelKey:"itemName",formatter:f.complexObject,exportCustomFormatter:f.complex,type:"object",sortComparer:ue.objectString,editor:{model:C.autocompleter,alwaysSaveOnEnterKey:!0,massUpdate:!0,options:{minLength:1,fetch:(e,i)=>{const r=this.mockProducts();i(r.filter(a=>a.itemName.toLowerCase().includes(e.toLowerCase())))},renderItem:{layout:"fourCorners",templateCallback:e=>this.renderItemCallbackWith4Corners(e)}}},filter:{model:v.inputText,queryField:"product.itemName"}},{id:"origin",name:"Country of Origin",field:"origin",formatter:f.complexObject,columnGroup:"Item",exportCustomFormatter:f.complex,dataKey:"code",labelKey:"name",type:"object",sortComparer:ue.objectString,filterable:!0,sortable:!0,minWidth:100,editor:{model:C.autocompleter,massUpdate:!0,customStructure:{label:"name",value:"code"},collectionAsync:this.http.fetch(zi)},filter:{model:v.inputText,queryField:"origin.name"}},{id:"action",name:"Action",field:"action",width:70,minWidth:70,maxWidth:70,excludeFromExport:!0,formatter:()=>'<div class="button-style margin-auto" style="width: 35px;"><span class="mdi mdi-chevron-down text-primary"></span></div>',cellMenu:{hideCloseButton:!1,commandTitle:"Commands",commandItems:[{command:"help",title:"Help!",iconCssClass:"mdi mdi-help-circle",positionOrder:66,action:()=>alert("Please Help!")},"divider",{command:"delete-row",title:"Delete Row",positionOrder:64,iconCssClass:"mdi mdi-close color-danger",cssClass:"red",textCssClass:"text-italic color-danger-light",itemVisibilityOverride:e=>!e.dataContext?.completed,action:(e,i)=>{const r=i.dataContext,a=i?.row??0;confirm(`Do you really want to delete row (${a+1}) with "${r.title}"`)&&this.aureliaGrid.gridService.deleteItemById(r.id)}}]}}],this.columns.forEach(e=>{e.header={menu:{commandItems:[{command:"",divider:!0,positionOrder:98},{command:"custom-actions",title:"Hello",positionOrder:99,commandItems:[{command:"hello-world",title:"Hello World"},{command:"hello-slickgrid",title:"Hello SlickGrid"},{command:"sub-menu",title:"Let's play",cssClass:"green",subMenuTitle:"choose your game",subMenuTitleCssClass:"text-italic salmon",commandItems:[{command:"sport-badminton",title:"Badminton"},{command:"sport-tennis",title:"Tennis"},{command:"sport-racquetball",title:"Racquetball"},{command:"sport-squash",title:"Squash"}]}]},{command:"feedback",title:"Feedback",positionOrder:100,commandItems:[{command:"request-update",title:"Request update from supplier",iconCssClass:"mdi mdi-star",tooltip:"this will automatically send an alert to the shipping team to contact the user for an update"},"divider",{command:"sub-menu",title:"Contact Us",iconCssClass:"mdi mdi-account",subMenuTitle:"contact us...",subMenuTitleCssClass:"italic",commandItems:[{command:"contact-email",title:"Email us",iconCssClass:"mdi mdi-pencil-outline"},{command:"contact-chat",title:"Chat with us",iconCssClass:"mdi mdi-message-text-outline"},{command:"contact-meeting",title:"Book an appointment",iconCssClass:"mdi mdi-coffee"}]}]}]}}}),this.gridOptions={editable:!0,autoAddCustomEditorFormatter:j2,enableCellNavigation:!0,autoEdit:!0,autoCommitEdit:!0,autoResize:{container:"#smaller-container",rightPadding:10},gridWidth:"100%",enableAutoResize:!0,enablePagination:!0,pagination:{pageSize:10,pageSizes:[10,200,500,5e3]},autoFitColumnsOnFirstLoad:!1,enableAutoSizeColumns:!1,autosizeColumnsByCellContentOnFirstLoad:!0,enableAutoResizeColumnsByCellContent:!0,resizeByContentOptions:{defaultRatioForStringType:.92,formatterPaddingWidthInPx:8},enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!1},externalResources:[new G],enableFiltering:!0,enableSelection:!0,enableCheckboxSelector:!0,checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},selectionOptions:{selectActiveRow:!1},createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:28,rowHeight:33,headerRowHeight:35,editCommandHandler:(e,i,r)=>{const a=Array.isArray(r.prevSerializedValue)?r.prevSerializedValue:[r.prevSerializedValue],n=Array.isArray(r.serializedValue)?r.serializedValue:[r.serializedValue],l=this.columns.filter(u=>u.editor!==void 0),d=[];a.forEach((u,s)=>{const m=a[s],o=n[s];if(m!==o){const g=Array.isArray(r.prevSerializedValue)?l[s]:i;this.editedItems[this.gridOptions.datasetIdPropertyName||"id"]=e,this.aureliaGrid.slickGrid.invalidate(),r.execute(),this.renderUnsavedCellStyling(e,g,r),d.push(g)}}),this.editQueue.push({item:e,columns:d,editCommand:r})},enableCellMenu:!0}}loadData(e){const i=[];for(let r=0;r<e;r++){const a=Math.floor(Math.random()*this.mockProducts().length),n=2e3+Math.floor(Math.random()*10),l=new Date().getFullYear()+Math.floor(Math.random()*10),d=Math.floor(Math.random()*11),u=Math.floor(Math.random()*29),s=Math.floor(Math.random()*59),m=new Date(l,d+1,u,s,s,s),o=Math.floor(Math.random()*100)+15,g=o>100?r>5?100:88:o,c=g===100;i[r]={id:r,title:"Task "+r,duration:Math.floor(Math.random()*100)+10,percentComplete:g,analysis:{percentComplete:g},complexity:r%3?0:2,start:new Date(n,d,u,u,s,s,s),finish:c||r%3===0&&m>new Date&&r>3?c?new Date:m:"",cost:r%33===0?null:Math.round(Math.random()*1e4)/100,completed:c||r%3===0&&m>new Date&&r>3,product:{id:this.mockProducts()[a]?.id,itemName:this.mockProducts()[a]?.itemName},origin:r%2?{code:"CA",name:"Canada"}:{code:"US",name:"United States"}},r%8||(delete i[r].finish,delete i[r].percentComplete)}return i}handleDefaultResizeColumns(){this.aureliaGrid.slickGrid.getColumns().forEach(i=>i.width=i.originalWidth),this.aureliaGrid.slickGrid.updateColumns(),this.aureliaGrid.slickGrid.autosizeColumns(),this.isUsingDefaultResize=!0}handleNewResizeColumns(){this.aureliaGrid.resizerService.resizeColumnsByCellContent(!0),this.isUsingDefaultResize=!1}handleOnSelectedRowIdsChanged(e){console.log("Selected Ids:",e.selectedRowIds)}toggleGridEditReadonly(){this.undoAllEdits(),this.isGridEditable=!this.isGridEditable,this.isGridEditable||(this.isMassSelectionDisabled=!0),this.aureliaGrid.slickGrid.setOptions({editable:this.isGridEditable})}removeUnsavedStylingFromCell(e,i,r){this.aureliaGrid.slickGrid.removeCellCssStyles(`unsaved_highlight_${[i.id]}${r}`)}removeAllUnsavedStylingFromCell(){for(const e of this.editQueue){const i=e?.editCommand;if(i)for(const r of e.columns)this.removeUnsavedStylingFromCell(e.item,r,i.row)}}renderUnsavedStylingOnAllVisibleCells(){for(const e of this.editQueue)if(e){const{item:i,columns:r,editCommand:a}=e;Array.isArray(r)&&r.forEach(n=>{this.renderUnsavedCellStyling(i,n,a)})}}renderUnsavedCellStyling(e,i,r){if(r&&e&&i){const a=this.aureliaGrid.dataView.getRowByItem(e);if(a>=0){const n={[a]:{[i.id]:"unsaved-editable-field"}};this.aureliaGrid.slickGrid.setCellCssStyles(`unsaved_highlight_${[i.id]}${a}`,n)}}}setSelectedRowIds(){this.aureliaGrid.dataView?.setSelectedIds([3,4,11])}saveAll(){console.log(this.editQueue),console.log(this.editedItems),this.removeAllUnsavedStylingFromCell(),this.editQueue=[],this.editedItems={}}toggleAutoEdit(e){this.aureliaGrid.slickGrid?.setOptions({autoEdit:e})}toggleAutoEditByKeypress(e){this.aureliaGrid.slickGrid?.setOptions({autoEditByKeypress:e})}undoLastEdit(e=!1){const i=this.editQueue.pop(),r=i?.editCommand;if(i&&r&&rt.cancelCurrentEdit()){r.undo();for(const a of i.columns)this.removeUnsavedStylingFromCell(i.item,a,r.row);this.aureliaGrid.slickGrid.invalidate(),e&&this.aureliaGrid?.slickGrid.gotoCell(r.row,r.cell,!1)}}undoAllEdits(){for(const e of this.editQueue){const i=e?.editCommand;if(i&&rt.cancelCurrentEdit()){i.undo();for(const r of e.columns)this.removeUnsavedStylingFromCell(e.item,r,i.row)}}this.aureliaGrid.slickGrid.invalidate(),this.editQueue=[]}mockProducts(){return[{id:0,itemName:"Sleek Metal Computer",itemNameTranslated:"some fantastic sleek metal computer description",listPrice:2100.23,itemTypeName:"I",image:"http://i.stack.imgur.com/pC1Tv.jpg",icon:`mdi ${this.getRandomIcon(0)}`},{id:1,itemName:"Tasty Granite Table",itemNameTranslated:"an extremely huge and heavy table",listPrice:3200.12,itemTypeName:"I",image:"https://i.imgur.com/Fnm7j6h.jpg",icon:`mdi ${this.getRandomIcon(1)}`},{id:2,itemName:"Awesome Wooden Mouse",itemNameTranslated:"super old mouse",listPrice:15,itemTypeName:"I",image:"https://i.imgur.com/RaVJuLr.jpg",icon:`mdi ${this.getRandomIcon(2)}`},{id:3,itemName:"Gorgeous Fresh Shirt",itemNameTranslated:"what a gorgeous shirt seriously",listPrice:25.76,itemTypeName:"I",image:"http://i.stack.imgur.com/pC1Tv.jpg",icon:`mdi ${this.getRandomIcon(3)}`},{id:4,itemName:"Refined Cotton Table",itemNameTranslated:"super light table that will fall apart amazingly fast",listPrice:13.35,itemTypeName:"I",image:"https://i.imgur.com/Fnm7j6h.jpg",icon:`mdi ${this.getRandomIcon(4)}`},{id:5,itemName:"Intelligent Wooden Pizza",itemNameTranslated:"wood not included",listPrice:23.33,itemTypeName:"I",image:"https://i.imgur.com/RaVJuLr.jpg",icon:`mdi ${this.getRandomIcon(5)}`},{id:6,itemName:"Licensed Cotton Chips",itemNameTranslated:"not sure what that is",listPrice:71.21,itemTypeName:"I",image:"http://i.stack.imgur.com/pC1Tv.jpg",icon:`mdi ${this.getRandomIcon(6)}`},{id:7,itemName:"Ergonomic Rubber Soap",itemNameTranslated:"so good you'll want to use it every night",listPrice:2.43,itemTypeName:"I",image:"https://i.imgur.com/Fnm7j6h.jpg",icon:`mdi ${this.getRandomIcon(7)}`},{id:8,itemName:"Handcrafted Steel Car",itemNameTranslated:"aka tesla truck",listPrice:31288.39,itemTypeName:"I",image:"https://i.imgur.com/RaVJuLr.jpg",icon:`mdi ${this.getRandomIcon(8)}`}]}getRandomIcon(e){const i=["mdi-arrow-collapse","mdi-arrow-expand","mdi-cancel","mdi-check","mdi-checkbox-blank-outline","mdi-check-box-outline","mdi-checkbox-marked","mdi-close","mdi-close-circle","mdi-close-circle-outline","mdi-close-thick","mdi-content-copy","mdi-database-refresh","mdi-download","mdi-file-document-outline","mdi-file-excel-outline","mdi-file-music-outline","mdi-file-pdf-outline","mdi-filter-remove-outline","mdi-flip-vertical","mdi-folder","mdi-folder-open","mdi-help-circle","mdi-help-circle-outline","mdi-history","mdi-information","mdi-information-outline","mdi-link","mdi-link-variant","mdi-menu","mdi-microsoft-excel","mdi-minus","mdi-page-first","mdi-page-last","mdi-paperclip","mdi-pin-off-outline","mdi-pin-outline","mdi-playlist-plus","mdi-playlist-remove","mdi-plus","mdi-redo","mdi-refresh","mdi-shape-square-plus","mdi-sort-ascending","mdi-sort-descending","mdi-swap-horizontal","mdi-swap-vertical","mdi-sync","mdi-table-edit","mdi-table-refresh","mdi-undo"],r=Math.floor(Math.random()*i.length-1);return i[e??r]}renderItemCallbackWith2Rows(e){return`<div class="autocomplete-container-list">
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
            <span class="autocomplete-top-right">${mo(e.listPrice,2,2,!1,"$")}</span>
          <div>
        </div>
        <div>
          <div class="autocomplete-bottom-left">${e.itemNameTranslated}</div>
          <span class="autocomplete-bottom-right">Type: <b>${e.itemTypeName==="I"?"Item":e.itemTypeName==="C"?"PdCat":"Cat"}</b></span>
        </div>`}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}Xl=A2();ma=W2(Xl,0,"Example32",Rg,ma);N2(Xl,1,ma);const H2=Object.freeze(Object.defineProperty({__proto__:null,get Example32(){return ma}},Symbol.toStringTag,{value:"Module"})),Lg="example33",Ln=`<h2>
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
  columns.bind="columns"
  options.bind="gridOptions"
  dataset.bind="dataset"
  instances.bind="aureliaGrid"
  on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
>
</aurelia-slickgrid>
`,zg=[],Ng={};let xr;function U2(t){xr||(xr=E.define({name:Lg,template:Ln,dependencies:zg,bindables:Ng})),t.register(xr)}const q2=Object.freeze(Object.defineProperty({__proto__:null,bindables:Ng,default:Ln,dependencies:zg,name:Lg,register:U2,template:Ln},Symbol.toStringTag,{value:"Module"}));var Y2=Object.create,es=Object.defineProperty,K2=Object.getOwnPropertyDescriptor,Q2=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Wg=t=>{throw TypeError(t)},Bg=(t,e,i)=>e in t?es(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Z2=(t,e)=>es(t,"name",{value:e,configurable:!0}),J2=t=>[,,,Y2(null)],X2=["class","method","getter","setter","accessor","field","value","get","set"],jg=t=>t!==void 0&&typeof t!="function"?Wg("Function expected"):t,eM=(t,e,i,r,a)=>({kind:X2[t],name:e,metadata:r,addInitializer:n=>i._?Wg("Already initialized"):a.push(jg(n||null))}),tM=(t,e)=>Bg(e,Q2("metadata"),t[3]),iM=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},aM=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&K2(a,i));Z2(a,i);for(var p=r.length-1;p>=0;p--)u=eM(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,jg(l)&&(a=l);return tM(t,a),c&&es(a,i,c),m?s^4?n:c:a},Q=(t,e,i)=>Bg(t,typeof e!="symbol"?e+"":e,i),Vg,ts;const rM=1e3;Vg=[T(q2)];class pa{constructor(){Q(this,"aureliaGrid"),Q(this,"columns",[]),Q(this,"gridOptions"),Q(this,"editCommandQueue",[]),Q(this,"dataset",[]),Q(this,"hideSubTitle",!1),Q(this,"serverApiDelay",500),Q(this,"showLazyLoading",!1),Q(this,"headerFormatter",(e,i,r,a)=>`<div class="header-tooltip-title">Custom Tooltip - Header</div>
    <div class="tooltip-2cols-row"><div>Column:</div> <div>${a.name}</div></div>`),Q(this,"headerRowFormatter",(e,i,r,a)=>`<div class="headerrow-tooltip-title">Custom Tooltip - Header Row (filter)</div>
    <div class="tooltip-2cols-row"><div>Column:</div> <div>${a.field}</div></div>`),Q(this,"tooltipFormatter",(e,i,r,a,n,l)=>{const d="Custom Tooltip",u=f.checkmarkMaterial(e,i,n.effortDriven,a,n,l);return`<div class="header-tooltip-title">${d}</div>
    <div class="tooltip-2cols-row"><div>Id:</div> <div>${n.id}</div></div>
    <div class="tooltip-2cols-row"><div>Title:</div> <div>${n.title}</div></div>
    <div class="tooltip-2cols-row"><div>Effort Driven:</div> <div>${u.outerHTML||""}</div></div>
    <div class="tooltip-2cols-row"><div>Completion:</div> <div>${this.loadCompletionIcons(n.percentComplete)}</div></div>
    `}),Q(this,"tooltipTaskAsyncFormatter",(e,i,r,a,n,l)=>{const d=`Task ${n.id} - (async tooltip)`,u=f.percentCompleteBarWithText(e,i,n.percentComplete,a,n,l);return`<div class="color-sf-primary-dark header-tooltip-title">${d}</div>
      <div class="tooltip-2cols-row"><div>Completion:</div> <div>${u.outerHTML||""}</div></div>
      <div class="tooltip-2cols-row"><div>Lifespan:</div> <div>${n.__params.lifespan.toFixed(2)}</div></div>
      <div class="tooltip-2cols-row"><div>Ratio:</div> <div>${n.__params.ratio.toFixed(2)}</div></div>
    `}),this.defineGrid()}attached(){this.dataset=this.loadData(rM)}aureliaGridReady(e){this.aureliaGrid=e}defineGrid(){this.columns=[{id:"title",name:"Title",field:"title",sortable:!0,editor:{model:C.longText,required:!0,alwaysSaveOnEnterKey:!0,minLength:5,maxLength:255},filterable:!0,customTooltip:{position:"right-align",formatter:()=>'<div><span class="mdi mdi-load mdi-spin"></span> loading...</div>',asyncProcess:()=>new Promise(e=>{setTimeout(()=>e({ratio:Math.random()*10/10,lifespan:Math.random()*100}),this.serverApiDelay)}),asyncPostFormatter:this.tooltipTaskAsyncFormatter}},{id:"duration",name:"Duration",field:"duration",sortable:!0,filterable:!0,editor:{model:C.float,decimal:2,valueStep:1,maxValue:1e4,alwaysSaveOnEnterKey:!0},formatter:(e,i,r)=>r>1?`${r} days`:`${r} day`,type:"number"},{id:"desc",name:"<span title='custom title tooltip text'>Description</span>",field:"description",width:100,filterable:!0,editor:{model:C.longText,required:!0,alwaysSaveOnEnterKey:!0,minLength:5,maxLength:255},formatter:(e,i,r,a,n)=>`<span title="regular tooltip (from title attribute)\r${n.title} cell value:\r${r||""}">${r||""}</span>`,customTooltip:{useRegularTooltip:!0,useRegularTooltipFromCellTextOnly:!0}},{id:"desc2",name:"<span title='custom title tooltip text'>Description 2</span>",field:"description",width:100,filterable:!0,editor:{model:C.longText,required:!0,alwaysSaveOnEnterKey:!0,minLength:5,maxLength:255},formatter:(e,i,r,a,n)=>`<span title="regular tooltip (from title attribute)\r${n.title} cell value:\r\r${r||""}">${r||""}</span>`,customTooltip:{useRegularTooltip:!0,useRegularTooltipFromFormatterOnly:!0}},{id:"button",name:"Button Tooltip",field:"title",width:100,minWidth:100,filterable:!0,excludeFromExport:!0,formatter:(e,i,r)=>{const a=D("button",{className:"btn btn-outline-secondary btn-icon btn-sm",title:"This is the button tooltip"}),n=D("i",{className:"mdi mdi-information",title:"icon tooltip"}),l=D("span",{textContent:"Hello Task"});return a.appendChild(n),a.appendChild(l),a.addEventListener("click",()=>alert(`Clicked button for ${r}`)),a},customTooltip:{useRegularTooltip:!0}},{id:"cost",name:'<span title="custom cost title tooltip text">Cost</span>',field:"cost",width:90,sortable:!0,filterable:!0,formatter:f.multiple,params:{formatters:[f.dollar,(e,i,r)=>`<span title="regular tooltip (from title attribute) -\rcell value:

${r||""}">${r||""}</span>`]},customTooltip:{useRegularTooltip:!0,useRegularTooltipFromFormatterOnly:!0},type:"number"},{id:"percentComplete",name:"% Complete",field:"percentComplete",type:"number",editor:{model:C.slider,minValue:0,maxValue:100},formatter:f.percentCompleteBar,sortable:!0,filterable:!0,filter:{model:v.slider,operator:">="},customTooltip:{position:"center",formatter:(e,i,r)=>typeof r=="string"&&r.includes("%")?r:`${r}%`,headerFormatter:void 0,headerRowFormatter:void 0}},{id:"start",name:"Start",field:"start",sortable:!0,type:"date",outputType:"dateIso",filterable:!0,filter:{model:v.compoundDate},formatter:f.dateIso,editor:{model:C.date},customTooltip:{formatter:()=>"",asyncProcess:()=>new Promise(e=>{setTimeout(()=>e({}),this.serverApiDelay)}),asyncPostFormatter:this.tooltipFormatter.bind(this)}},{id:"finish",name:"Finish",field:"finish",sortable:!0,editor:{model:C.date,options:{displayDateMin:"today"}},type:"date",outputType:"dateIso",formatter:f.dateIso,filterable:!0,filter:{model:v.dateRange},disableTooltip:!0},{id:"effortDriven",name:"Effort Driven",field:"effortDriven",width:80,minWidth:20,maxWidth:100,cssClass:"cell-effort-driven",sortable:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:v.singleSelect},exportWithFormatter:!1,formatter:f.checkmarkMaterial},{id:"prerequisites",name:"Prerequisites",field:"prerequisites",filterable:!0,formatter:(e,i,r)=>{if(r&&Array.isArray(r)){const a=r.map(n=>`Task ${n}`).join(", ");return`<span title="${a}">${a}</span>`}return""},customTooltip:{useRegularTooltip:!0,maxWidth:500},exportWithFormatter:!0,sanitizeDataExport:!0,minWidth:100,sortable:!0,editor:{collectionAsync:new Promise(e=>{setTimeout(()=>{e(Array.from(Array(this.dataset.length).keys()).map(i=>({value:i,label:i,prefix:"Task",suffix:"days"})))},500)}),customStructure:{label:"label",value:"value",labelPrefix:"prefix"},collectionOptions:{separatorBetweenTextLabels:" "},model:C.multipleSelect},filter:{collectionLazy:()=>(this.showLazyLoading=!0,new Promise(e=>{setTimeout(()=>{this.showLazyLoading=!1,e(Array.from(Array((this.dataset||[]).length).keys()).map(i=>({value:i,label:`Task ${i}`})))},this.serverApiDelay)})),customStructure:{label:"label",value:"value",labelPrefix:"prefix"},collectionOptions:{separatorBetweenTextLabels:" "},options:{minHeight:70},model:v.multipleSelect,operator:"IN_CONTAINS"}},{id:"action",name:"Action",field:"action",width:70,minWidth:70,maxWidth:70,formatter:()=>'<div class="button-style margin-auto" style="width: 35px;"><span class="mdi mdi-chevron-down text-primary"></span></div>',excludeFromExport:!0,cellMenu:{hideCloseButton:!1,commandTitle:"Commands",commandItems:[{command:"command2",title:"Command 2",positionOrder:62,action:(e,i)=>{console.log(i.dataContext,i.column)},itemUsabilityOverride:e=>!e.dataContext.completed},{command:"command1",title:"Command 1",cssClass:"orange",positionOrder:61},{command:"delete-row",title:"Delete Row",positionOrder:64,iconCssClass:"mdi mdi-close",cssClass:"red",textCssClass:"bold",itemVisibilityOverride:e=>!e.dataContext.completed},{divider:!0,command:"",positionOrder:63},{command:"help",title:"Help",iconCssClass:"mdi mdi-help-circle-outline",positionOrder:66},{command:"something",title:"Disabled Command",disabled:!0,positionOrder:67}]}}],this.gridOptions={autoEdit:!0,autoCommitEdit:!0,editable:!0,autoResize:{container:"#demo-container",rightPadding:10},enableAutoSizeColumns:!0,enableAutoResize:!0,enableCellNavigation:!0,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!0},externalResources:[new di,new G],customTooltip:{formatter:this.tooltipFormatter.bind(this),headerFormatter:this.headerFormatter,headerRowFormatter:this.headerRowFormatter,usabilityOverride:e=>e.cell!==0&&e?.column?.id!=="action",observeAllTooltips:!0,observeTooltipContainer:"body"},presets:{filters:[{columnId:"prerequisites",searchTerms:[1,3,5,7,9,12,15,18,21,25,28,29,30,32,34]}]},rowHeight:38,enableFiltering:!0,selectionOptions:{selectActiveRow:!1},showCustomFooter:!0,enableCheckboxSelector:!0,enableSelection:!0,checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},editCommandHandler:(e,i,r)=>{this.editCommandQueue.push(r),r.execute()},enableCellMenu:!0,cellMenu:{onCommand:(e,i)=>this.executeCommand(e,i),onOptionSelected:(e,i)=>{const r=i?.dataContext;r&&r.hasOwnProperty("completed")&&(r.completed=i.item.option,this.aureliaGrid.gridService.updateItem(r))}}}}loadData(e){const i=[];for(let r=0;r<e;r++){const a=2e3+Math.floor(Math.random()*10),n=new Date().getFullYear()-3+Math.floor(Math.random()*10),l=Math.floor(Math.random()*11),d=Math.floor(Math.random()*29),u=new Date(n,l+1,d);i[r]={id:r,title:"Task "+r,duration:Math.round(Math.random()*100),description:r>500?null:`This is a sample task description.
It can be multiline\r\rAnother line...`,percentComplete:Math.floor(Math.random()*96+5),start:new Date(a,l,d),finish:u<new Date?"":u,cost:r%33===0?null:Math.round(Math.random()*1e4)/100,effortDriven:r%5===0,prerequisites:r%2===0&&r!==0&&r<50?[r,r-1]:[]}}return i}executeCommand(e,i){const r=i.command,a=i.dataContext;switch(r){case"command1":alert("Command 1");break;case"command2":alert("Command 2");break;case"help":alert("Please help!");break;case"delete-row":confirm(`Do you really want to delete row (${(i.row||0)+1}) with "${a.title}"`)&&this.aureliaGrid?.gridService.deleteItemById(a.id);break}}loadCompletionIcons(e){let i="",r=0;e>5&&e<25?r=1:e>=25&&e<50?r=2:e>=50&&e<75?r=3:e>=75&&e<100?r=4:e===100&&(r=5);for(let a=0;a<r;a++){const n=r===5?"text-success":r>=3?"text-warning":"text-secondary";i+=`<span class="mdi mdi-check-circle-outline ${n}"></span>`}return i}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}setFiltersDynamically(e){const i=e==="="?"=":"!=";this.aureliaGrid.filterService.updateFilters([{columnId:"desc",operator:i,searchTerms:[""]}],!0)}}ts=J2();pa=aM(ts,0,"Example33",Vg,pa);iM(ts,1,pa);const nM=Object.freeze(Object.defineProperty({__proto__:null,get Example33(){return pa}},Symbol.toStringTag,{value:"Module"})),Hg="example34",zn=`<h2>
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

  <aurelia-slickgrid grid-id="grid34" columns.bind="columns" options.bind="gridOptions" dataset.bind="dataset" instances.bind="aureliaGrid">
  </aurelia-slickgrid>
</div>
`,Ug=[],qg={};let Tr;function oM(t){Tr||(Tr=E.define({name:Hg,template:zn,dependencies:Ug,bindables:qg})),t.register(Tr)}const lM=Object.freeze(Object.defineProperty({__proto__:null,bindables:qg,default:zn,dependencies:Ug,name:Hg,register:oM,template:zn},Symbol.toStringTag,{value:"Module"}));var pA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function hA(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var sM=Object.create,is=Object.defineProperty,dM=Object.getOwnPropertyDescriptor,cM=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Yg=t=>{throw TypeError(t)},Kg=(t,e,i)=>e in t?is(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,uM=(t,e)=>is(t,"name",{value:e,configurable:!0}),mM=t=>[,,,sM(null)],pM=["class","method","getter","setter","accessor","field","value","get","set"],Qg=t=>t!==void 0&&typeof t!="function"?Yg("Function expected"):t,hM=(t,e,i,r,a)=>({kind:pM[t],name:e,metadata:r,addInitializer:n=>i._?Yg("Already initialized"):a.push(Qg(n||null))}),gM=(t,e)=>Kg(e,cM("metadata"),t[3]),bM=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},fM=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&dM(a,i));uM(a,i);for(var p=r.length-1;p>=0;p--)u=hM(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,Qg(l)&&(a=l);return gM(t,a),c&&is(a,i,c),m?s^4?n:c:a},U=(t,e,i)=>Kg(t,typeof e!="symbol"?e+"":e,i),Zg,as;const vM=200,_M=(t,e,i)=>`<img src="https://flags.fmcdn.net/data/flags/mini/${i.substring(0,2).toLowerCase()}.png" width="20"/> ${i}`,yM=(t,e,i,r,a)=>{const n=a.priceChange>=0?"up":"down",l=new DocumentFragment,d=document.createElement("div");d.className=`d-inline-flex align-items-center text-${n==="up"?"success":"danger"}`;const u=document.createElement("span");return u.className=`mdi mdi-arrow-${n}`,d.appendChild(u),l.appendChild(d),i instanceof HTMLElement?d.appendChild(i):d.appendChild(document.createTextNode(i)),l},SM=(t,e,i)=>`<div class="d-inline-flex align-items-center"><span class="me-1 mdi font-16px mdi-${i==="Buy"?"plus":"minus"}-circle ${i==="Buy"?"text-info":"text-warning"}"></span> ${i}</div>`,CM=(t,e,i,r,a)=>{if(a.historic.length<2)return"";const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.setAttributeNS(null,"width","135"),n.setAttributeNS(null,"height","30"),n.setAttributeNS(null,"stroke-width","2"),n.classList.add("sparkline"),Vv.sparkline(n,a.historic,{cursorwidth:2,onmousemove:(d,u)=>{const m=d.target.closest("svg")?.nextElementSibling;m&&(m.hidden=!1,m.textContent=`$${(u.value*100/100).toFixed(2)}`,m.style.top=`${d.offsetY}px`,m.style.left=`${d.offsetX+20}px`)},onmouseout:d=>{const s=d.target.closest("svg")?.nextElementSibling;s&&(s.hidden=!0)}});const l=document.createElement("div");return l.appendChild(n),l.appendChild(D("div",{className:"trading-tooltip",hidden:!0})),l};Zg=[T(lM)];class ha{constructor(){U(this,"_darkMode",!1),U(this,"aureliaGrid"),U(this,"gridOptions"),U(this,"columns",[]),U(this,"dataset",[]),U(this,"hideSubTitle",!1),U(this,"isFullScreen",!1),U(this,"highlightDuration",150),U(this,"itemCount",200),U(this,"minChangePerCycle",0),U(this,"maxChangePerCycle",10),U(this,"refreshRate",75),U(this,"timer"),this.defineGrid()}attached(){this.getData(),setTimeout(()=>{this.startSimulation()},this.refreshRate)}detaching(){this.stopSimulation(),document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light"}defineGrid(){this.columns=[{id:"currency",name:"Currency",field:"currency",filterable:!0,sortable:!0,minWidth:65,width:65,formatter:_M,filter:{model:v.singleSelect,collection:[{label:"",value:""},{label:"CAD",value:"CAD"},{label:"USD",value:"USD"}]},grouping:{getter:"currency",formatter:e=>`Currency: <span style="color: var(--slick-primary-color); font-weight: bold;">${e.value}</span>  <span style="color: #659bff;">(${e.count} items)</span>`,aggregators:[new k.Sum("amount")],aggregateCollapsed:!0,collapsed:!1}},{id:"symbol",name:"Symbol",field:"symbol",filterable:!0,sortable:!0,minWidth:65,width:65},{id:"market",name:"Market",field:"market",filterable:!0,sortable:!0,minWidth:75,width:75,grouping:{getter:"market",formatter:e=>`Market: <span style="color: var(--slick-primary-color); font-weight: bold;">${e.value}</span>  <span style="color: #659bff;">(${e.count} items)</span>`,aggregators:[new k.Sum("amount")],aggregateCollapsed:!0,collapsed:!1}},{id:"company",name:"Company",field:"company",filterable:!0,sortable:!0,minWidth:80,width:130},{id:"trsnType",name:"Type",field:"trsnType",filterable:!0,sortable:!0,minWidth:60,width:60,formatter:SM,filter:{model:v.singleSelect,collection:[{label:"",value:""},{label:"Buy",value:"Buy"},{label:"Sell",value:"Sell"}]},grouping:{getter:"trsnType",formatter:e=>`Type: <span style="color: var(--slick-primary-color); font-weight: bold;">${e.value}</span>  <span style="color: #659bff;">(${e.count} items)</span>`,aggregators:[new k.Sum("amount")],aggregateCollapsed:!0,collapsed:!1}},{id:"priceChange",name:"Change",field:"priceChange",filterable:!0,sortable:!0,minWidth:80,width:80,filter:{model:v.compoundInputNumber},type:"number",formatter:f.multiple,params:{formatters:[f.dollar,yM],maxDecimal:2}},{id:"price",name:"Price",field:"price",filterable:!0,sortable:!0,minWidth:70,width:70,filter:{model:v.compoundInputNumber},type:"number",formatter:f.dollar,params:{maxDecimal:2}},{id:"quantity",name:"Quantity",field:"quantity",filterable:!0,sortable:!0,minWidth:70,width:70,filter:{model:v.compoundInputNumber},type:"number"},{id:"amount",name:"Amount",field:"amount",filterable:!0,sortable:!0,minWidth:70,width:60,filter:{model:v.compoundInputNumber},type:"number",formatter:f.dollar,params:{maxDecimal:2},groupTotalsFormatter:V.sumTotalsDollarBold},{id:"historic",name:"Price History",field:"historic",minWidth:100,width:150,maxWidth:150,formatter:CM},{id:"execution",name:"Execution Timestamp",field:"execution",filterable:!0,sortable:!0,minWidth:125,formatter:f.dateTimeIsoAmPm,exportWithFormatter:!0,type:"dateTimeIsoAM_PM",filter:{model:v.compoundDate}}],this.gridOptions={autoResize:{container:".trading-platform",autoHeight:!1,rightPadding:0,bottomPadding:10},formatterOptions:{displayNegativeNumberWithParentheses:!0,thousandSeparator:","},draggableGrouping:{dropPlaceHolderText:"Drop a column header here to group by any of these available columns: Currency, Market or Type",deleteIconCssClass:"mdi mdi-close color-danger",sortAscIconCssClass:"mdi mdi-arrow-up",sortDescIconCssClass:"mdi mdi-arrow-down"},enableDraggableGrouping:!0,createPreHeaderPanel:!0,darkMode:this._darkMode,showPreHeaderPanel:!0,preHeaderPanelHeight:40,enableCellNavigation:!0,enableFiltering:!0,cellHighlightCssClass:"changed"}}getData(){const e=[];for(let i=0;i<vM;i++){const r=Math.round(Math.random()*100),a=this.randomNumber(1,50),n=this.randomNumber(125,255),l=this.randomNumber(-25,35,!1),d=this.randomNumber(l,300),u=d<5?n:a,s=d*u,m=new Date;m.setHours(9,30,0);const o=Math.floor(Math.random()*10)%2?"CAD":"USD",g=ct.company.name();e[i]={id:i,currency:o,trsnType:Math.round(Math.random()*100)%2?"Buy":"Sell",company:g,symbol:o==="CAD"?g.substr(0,3).toUpperCase()+".TO":g.substr(0,4).toUpperCase(),market:o==="CAD"?"TSX":d>200?"Nasdaq":"S&P 500",duration:i%33===0?null:Math.random()*100+"",percentCompleteNumber:r,priceChange:l,price:d,quantity:u,amount:s,execution:m,historic:[d]}}this.dataset=e}startSimulation(){const e={},i=this.randomNumber(this.minChangePerCycle,this.maxChangePerCycle);for(let r=0;r<i;r++){const a=this.randomNumber(1,50),n=this.randomNumber(125,255),l=Math.round(Math.random()*(this.dataset.length-1)),d=this.randomNumber(-25,25,!1),u=jv(this.dataset[l]),s={...this.dataset[l]};s.priceChange=d,s.price=s.price+d<0?0:s.price+d,s.quantity=s.price<5?n:a,s.amount=s.price*s.quantity,s.trsnType=Math.round(Math.random()*100)%2?"Buy":"Sell",s.execution=new Date,s.historic.push(s.price),s.historic=s.historic.slice(-20),e[l]||(e[l]={}),e[l].id="changed",this.renderCellHighlighting(s,this.findColumnById("priceChange"),d),(u.priceChange<0&&s.priceChange>0||u.priceChange>0&&s.priceChange<0)&&this.renderCellHighlighting(s,this.findColumnById("price"),d),this.aureliaGrid.dataView.updateItem(s.id,s)}this.timer=setTimeout(this.startSimulation.bind(this),this.refreshRate||0)}stopSimulation(){clearTimeout(this.timer)}findColumnById(e){return this.columns.find(i=>i?.field===e)}renderCellHighlighting(e,i,r){if(e&&i){const a=this.aureliaGrid.dataView.getRowByItem(e);if(a>=0){const n={[a]:{[i.id]:r>=0?"changed-gain":"changed-loss"}};this.aureliaGrid.slickGrid.setCellCssStyles(`highlight_${[i.id]}${a}`,n),setTimeout(()=>this.removeUnsavedStylingFromCell(e,i,a),this.highlightDuration)}}}removeUnsavedStylingFromCell(e,i,r){this.aureliaGrid.slickGrid.removeCellCssStyles(`highlight_${[i.id]}${r}`)}toggleFullScreen(){const e=document.querySelector(".trading-platform");e?.classList.contains("full-screen")?(e.classList.remove("full-screen"),this.isFullScreen=!1):e&&(e.classList.add("full-screen"),this.isFullScreen=!0),this.aureliaGrid.resizerService.resizeGrid()}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.aureliaGrid.slickGrid?.setOptions({darkMode:this._darkMode})}toggleBodyBackground(){this._darkMode?(document.querySelector(".panel-wm-content").classList.add("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="dark"):(document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light")}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}randomNumber(e,i,r=!0){const a=Math.random()*(i-e+1)+e;return r?Math.floor(a):a}}as=mM();ha=fM(as,0,"Example34",Zg,ha);bM(as,1,ha);const wM=Object.freeze(Object.defineProperty({__proto__:null,get Example34(){return ha}},Symbol.toStringTag,{value:"Module"})),Jg="example35",Nn=`<h2>
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

<aurelia-slickgrid grid-id="grid35" columns.bind="columns" options.bind="gridOptions" dataset.bind="dataset" instances.bind="aureliaGrid">
</aurelia-slickgrid>
`,Xg=[],eb={};let Er;function xM(t){Er||(Er=E.define({name:Jg,template:Nn,dependencies:Xg,bindables:eb})),t.register(Er)}const TM=Object.freeze(Object.defineProperty({__proto__:null,bindables:eb,default:Nn,dependencies:Xg,name:Jg,register:xM,template:Nn},Symbol.toStringTag,{value:"Module"}));var EM=Object.create,rs=Object.defineProperty,$M=Object.getOwnPropertyDescriptor,kM=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),tb=t=>{throw TypeError(t)},ib=(t,e,i)=>e in t?rs(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,OM=(t,e)=>rs(t,"name",{value:e,configurable:!0}),DM=t=>[,,,EM(null)],MM=["class","method","getter","setter","accessor","field","value","get","set"],ab=t=>t!==void 0&&typeof t!="function"?tb("Function expected"):t,PM=(t,e,i,r,a)=>({kind:MM[t],name:e,metadata:r,addInitializer:n=>i._?tb("Already initialized"):a.push(ab(n||null))}),IM=(t,e)=>ib(e,kM("metadata"),t[3]),GM=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},FM=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&$M(a,i));OM(a,i);for(var p=r.length-1;p>=0;p--)u=PM(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,ab(l)&&(a=l);return IM(t,a),c&&rs(a,i,c),m?s^4?n:c:a},oe=(t,e,i)=>ib(t,typeof e!="symbol"?e+"":e,i),rb,ns;const AM=20;rb=[T(TM)];class ga{constructor(e=M(xe)){oe(this,"i18n",e),oe(this,"aureliaGrid"),oe(this,"gridOptions"),oe(this,"columns"),oe(this,"dataset"),oe(this,"fetchResult",""),oe(this,"hideSubTitle",!1),oe(this,"selectedLanguage",""),oe(this,"selectedLanguageFile",""),oe(this,"statusClass","alert alert-light"),oe(this,"statusStyle","display: none"),this.defineGrid();const i="en";this.i18n.setLocale(i),this.selectedLanguage=i}attached(){this.dataset=this.getData(AM)}defineGrid(){this.columns=[{id:"title",name:"Title",field:"title",sortable:!0,minWidth:100,filterable:!0,editor:{model:C.text}},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,minWidth:100,filterable:!0,type:"number",editor:{model:C.text}},{id:"%",name:"% Complete",field:"percentComplete",sortable:!0,minWidth:100,filterable:!0,type:"number",editor:{model:C.text}},{id:"start",name:"Start",field:"start",formatter:f.dateIso,exportWithFormatter:!0,filterable:!0,editor:{model:C.date}},{id:"finish",name:"Finish",field:"finish",formatter:f.dateIso,exportWithFormatter:!0,filterable:!0,editor:{model:C.date}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",sortable:!0,minWidth:100,filterable:!0,type:"boolean",editor:{model:C.checkbox}}],this.gridOptions={enableAutoResize:!1,gridHeight:350,gridWidth:800,rowHeight:33,enableExcelCopyBuffer:!0,excelCopyBufferOptions:{onBeforePasteCell:(e,i)=>i.cell>0},autoEdit:!1,editable:!0,enableCellNavigation:!0,enableRowBasedEdit:!0,enableTranslate:!0,i18n:this.i18n,rowBasedEditOptions:{allowMultipleRows:!1,onBeforeEditMode:()=>this.clearStatus(),onBeforeRowUpdated:e=>{const{effortDriven:i,percentComplete:r,finish:a,start:n,duration:l,title:d}=e.dataContext;return l>40?(alert("Sorry, 40 is the maximum allowed duration."),Promise.resolve(!1)):RM("your-backend-api/endpoint",{body:JSON.stringify({effortDriven:i,percentComplete:r,finish:a,start:n,duration:l,title:d})}).catch(u=>(console.error(u),!1)).then(u=>{if(u===!1)return this.statusClass="alert alert-danger",!1;if(typeof u=="object")return u.json()}).then(u=>(this.statusStyle="display: block",this.statusClass="alert alert-success",this.fetchResult=u.message,!0))},actionColumnConfig:{width:100,minWidth:100,maxWidth:100},actionButtons:{editButtonClassName:"button-style margin-auto btn-icon px-2 me-1",iconEditButtonClassName:"mdi mdi-pencil",cancelButtonClassName:"button-style btn-icon px-2",cancelButtonTitle:"Cancel row",cancelButtonTitleKey:"RBE_BTN_CANCEL",iconCancelButtonClassName:"mdi mdi-undo text-danger",cancelButtonPrompt:"Are you sure you want to cancel your changes?",updateButtonClassName:"button-style btn-icon px-2 me-1",updateButtonTitle:"Update row",updateButtonTitleKey:"RBE_BTN_UPDATE",iconUpdateButtonClassName:"mdi mdi-check text-success",updateButtonPrompt:"Save changes?",deleteButtonClassName:"button-style btn-icon px-2",deleteButtonTitle:"Delete row",iconDeleteButtonClassName:"mdi mdi-trash-can text-danger",deleteButtonPrompt:"Are you sure you want to delete this row?"}},externalResources:[new di]}}getData(e){const i=[];for(let r=0;r<e;r++){const a=2e3+Math.floor(Math.random()*10),n=Math.floor(Math.random()*11),l=Math.floor(Math.random()*29),d=Math.round(Math.random()*100);i[r]={id:r,title:"Task "+r,duration:Math.round(Math.random()*40)+"",percentComplete:d,start:new Date(a,n+1,l),finish:new Date(a+1,n+1,l),effortDriven:r%5===0}}return i}clearStatus(){this.statusClass="alert alert-light",this.statusStyle="display: none",this.fetchResult=""}toggleSingleMultiRowEdit(){const e={...this.gridOptions,rowBasedEditOptions:{...this.gridOptions.rowBasedEditOptions,allowMultipleRows:!this.gridOptions.rowBasedEditOptions?.allowMultipleRows}};this.aureliaGrid.slickGrid.setOptions(e),this.gridOptions=this.aureliaGrid.slickGrid.getOptions()}async switchLanguage(){const e=this.selectedLanguage==="en"?"fr":"en";await this.i18n.setLocale(e),this.selectedLanguage=e}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}ns=DM();ga=FM(ns,0,"Example35",rb,ga);GM(ns,1,ga);function RM(t,e){return new Promise(i=>{setTimeout(()=>{i(new Response(JSON.stringify({status:200,message:"success"})))},window.Cypress?10:500)})}const LM=Object.freeze(Object.defineProperty({__proto__:null,get Example35(){return ga}},Symbol.toStringTag,{value:"Module"})),nb="example36",Wn=`<div id="demo-container" class="container-fluid">
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
    columns.bind="columns"
    options.bind="gridOptions"
    dataset.bind="dataset"
    instances.bind="aureliaGrid"
    on-cell-change.trigger="invalidateAll()"
  >
  </aurelia-slickgrid>
</div>
`,ob=[],lb={};let $r;function zM(t){$r||($r=E.define({name:nb,template:Wn,dependencies:ob,bindables:lb})),t.register($r)}const NM=Object.freeze(Object.defineProperty({__proto__:null,bindables:lb,default:Wn,dependencies:ob,name:nb,register:zM,template:Wn},Symbol.toStringTag,{value:"Module"}));var WM=Object.create,os=Object.defineProperty,BM=Object.getOwnPropertyDescriptor,jM=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),sb=t=>{throw TypeError(t)},db=(t,e,i)=>e in t?os(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,VM=(t,e)=>os(t,"name",{value:e,configurable:!0}),HM=t=>[,,,WM(null)],UM=["class","method","getter","setter","accessor","field","value","get","set"],cb=t=>t!==void 0&&typeof t!="function"?sb("Function expected"):t,qM=(t,e,i,r,a)=>({kind:UM[t],name:e,metadata:r,addInitializer:n=>i._?sb("Already initialized"):a.push(cb(n||null))}),YM=(t,e)=>db(e,jM("metadata"),t[3]),KM=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},QM=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&BM(a,i));VM(a,i);for(var p=r.length-1;p>=0;p--)u=qM(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,cb(l)&&(a=l);return YM(t,a),c&&os(a,i,c),m?s^4?n:c:a},J=(t,e,i)=>db(t,typeof e!="symbol"?e+"":e,i),ub,ls;function ZM(t,e,i){const r=i.getOptions(),a=e.editor;return r.editable&&a}const JM=(t,e,i,r,a,n)=>{const l=ZM(a,r,n);i=i??"";const d=document.createElement("div");return d.className="editing-field",i instanceof HTMLElement?d.appendChild(i):d.textContent=i,l?d:i};class kr{constructor(e,i){J(this,"field",e),J(this,"taxRate",i),J(this,"_sum",0),J(this,"_type","sum")}get type(){return this._type}init(){this._sum=0}accumulate(e){if(this.field==="taxes"&&e.taxable&&(this._sum+=e.price*e.qty*(this.taxRate/100)),this.field==="subTotal"&&(this._sum+=e.price*e.qty),this.field==="total"){let i=0;e.taxable&&(i=e.price*e.qty*(this.taxRate/100)),this._sum+=e.price*e.qty+i}}storeResult(e){(!e||e[this._type]===void 0)&&(e[this._type]={}),e[this._type][this.field]=this._sum}}ub=[T(NM)];class ba{constructor(){J(this,"columns",[]),J(this,"gridOptions"),J(this,"dataset",[]),J(this,"aureliaGrid"),J(this,"excelExportService"),J(this,"hideSubTitle",!1),J(this,"isDataGrouped",!1),J(this,"taxRate",7.5),this.excelExportService=new G,this.defineGrid()}attached(){this.dataset=this.getData()}defineGrid(){this.columns=[{id:"sel",name:"#",field:"id",headerCssClass:"header-centered",cssClass:"cell-unselectable",excludeFromExport:!0,maxWidth:30},{id:"name",name:"Name",field:"name",sortable:!0,width:140,filterable:!0,excelExportOptions:{width:18}},{id:"price",name:"Price",field:"price",type:"number",editor:{model:C.float,decimal:2},sortable:!0,width:70,filterable:!0,formatter:f.dollar,groupTotalsFormatter:V.sumTotalsDollarBold,groupTotalsExcelExportOptions:{style:{font:{bold:!0,size:11.5},format:"$0.00",border:{top:{color:"FF747474",style:"thick"}}},valueParserCallback:this.excelGroupCellParser.bind(this)}},{id:"qty",name:"Quantity",field:"qty",type:"number",groupTotalsFormatter:V.sumTotalsBold,groupTotalsExcelExportOptions:{style:{font:{bold:!0,size:11.5},border:{top:{color:"FF747474",style:"thick"}}},valueParserCallback:this.excelGroupCellParser.bind(this)},params:{minDecimal:0,maxDecimal:0},editor:{model:C.integer},sortable:!0,width:60,filterable:!0},{id:"subTotal",name:"Sub-Total",field:"subTotal",cssClass:"text-sub-total",type:"number",sortable:!0,width:70,filterable:!0,exportWithFormatter:!1,formatter:f.multiple,groupTotalsFormatter:V.sumTotalsDollarBold,params:{formatters:[(e,i,r,a,n)=>n.price*n.qty,f.dollar]},excelExportOptions:{style:{font:{outline:!0,italic:!0,color:"FF215073"},format:"$0.00"},width:12,valueParserCallback:this.excelRegularCellParser.bind(this)},groupTotalsExcelExportOptions:{style:{font:{bold:!0,italic:!0,size:11.5},format:"$0.00",border:{top:{color:"FF747474",style:"thick"}}},valueParserCallback:this.excelGroupCellParser.bind(this)}},{id:"taxable",name:"Taxable",field:"taxable",cssClass:"text-center",sortable:!0,width:60,filterable:!0,formatter:f.checkmarkMaterial,exportCustomFormatter:(e,i,r)=>r?"✓":"",excelExportOptions:{style:{alignment:{horizontal:"center"}}}},{id:"taxes",name:"Taxes",field:"taxes",cssClass:"text-taxes",type:"number",sortable:!0,width:70,filterable:!0,formatter:f.multiple,groupTotalsFormatter:V.sumTotalsDollarBold,params:{formatters:[(e,i,r,a,n)=>n.taxable?n.price*n.qty*(this.taxRate/100):null,f.dollar]},excelExportOptions:{style:{font:{outline:!0,italic:!0,color:"FFC65911"},format:"$0.00"},width:12,valueParserCallback:this.excelRegularCellParser.bind(this)},groupTotalsExcelExportOptions:{style:{font:{bold:!0,italic:!0,color:"FFC65911",size:11.5},format:"$0.00",border:{top:{color:"FF747474",style:"thick"}}},valueParserCallback:this.excelGroupCellParser.bind(this)}},{id:"total",name:"Total",field:"total",type:"number",sortable:!0,width:70,filterable:!0,cssClass:"text-total",formatter:f.multiple,groupTotalsFormatter:V.sumTotalsDollarBold,params:{formatters:[(e,i,r,a,n)=>{let l=n.price*n.qty;return n.taxable&&(l+=l*(this.taxRate/100)),l},f.dollar]},excelExportOptions:{style:{font:{outline:!0,bold:!0,color:"FF005A9E"},format:"$0.00"},width:12,valueParserCallback:this.excelRegularCellParser.bind(this)},groupTotalsExcelExportOptions:{style:{font:{bold:!0,color:"FF005A9E",size:12},format:"$0.00",border:{top:{color:"FF747474",style:"thick"}}},valueParserCallback:this.excelGroupCellParser.bind(this)}}],this.gridOptions={autoAddCustomEditorFormatter:JM,gridHeight:410,gridWidth:750,enableCellNavigation:!0,autoEdit:!0,autoCommitEdit:!0,editable:!0,rowHeight:33,formatterOptions:{maxDecimal:2,minDecimal:2},enableGrouping:!0,externalResources:[this.excelExportService],enableExcelExport:!0,excelExportOptions:{filename:"grocery-list",sanitizeDataExport:!0,sheetName:"Grocery List",columnHeaderStyle:{font:{color:"FFFFFFFF"},fill:{type:"pattern",patternType:"solid",fgColor:"FF4a6c91"}},customExcelHeader:(e,i)=>{const r=e.getStyleSheet().createFormat({font:{size:18,fontName:"Calibri",bold:!0,color:"FFFFFFFF"},alignment:{wrapText:!0,horizontal:"center"},fill:{type:"pattern",patternType:"solid",fgColor:"FF203764"}});i.setRowInstructions(0,{height:40});const a="Grocery Shopping List",n=this.isDataGrouped?"H1":"G1";i.mergeCells("A1",n),i.data.push([{value:a,metadata:{style:r.id}}])}}}}invalidateAll(){this.aureliaGrid.dataView?.refresh(),this.aureliaGrid.slickGrid?.invalidate()}updateTaxRate(){this.isDataGrouped&&this.groupByTaxable(),this.invalidateAll()}exportToExcel(){this.excelExportService.exportToExcel()}excelGroupCellParser(e,{columnDef:i,excelFormatId:r,dataRowIdx:a}){const d=this.aureliaGrid.slickGrid?.getColumnIndex("price")||0,u=this.aureliaGrid.slickGrid?.getColumnIndex("qty")||0,s=this.aureliaGrid.slickGrid?.getColumnIndex("taxes")||0,m=this.aureliaGrid.slickGrid?.getColumnIndex("subTotal")||0,o=this.aureliaGrid.slickGrid?.getColumnIndex("total")||0,g=e?.group?.count||0,c=`${String.fromCharCode(65+d-0)}`,p=`${String.fromCharCode(65+u-0)}`,_=`${String.fromCharCode(65+m-0)}`,w=`${String.fromCharCode(65+s-0)}`,x=`${String.fromCharCode(65+o-0)}`;let b="";switch(i.id){case"price":b=c;break;case"qty":b=p;break;case"subTotal":b=_;break;case"taxes":b=w;break;case"total":b=x;break}return{value:`SUM(${b}${a+3-g}:${b}${a+3-1})`,metadata:{type:"formula",style:r}}}excelRegularCellParser(e,{columnDef:i,excelFormatId:r,dataRowIdx:a,dataContext:n}){const l=this.isDataGrouped?0:1,d=3,u=this.aureliaGrid.slickGrid?.getColumnIndex("price")||0,s=this.aureliaGrid.slickGrid?.getColumnIndex("qty")||0,m=this.aureliaGrid.slickGrid?.getColumnIndex("taxes")||0,o=`${String.fromCharCode(65+u-l)}${a+d}`,g=`${String.fromCharCode(65+s-l)}${a+d}`,c=`${String.fromCharCode(65+m-l)}${a+d}`;let p="";switch(i.id){case"subTotal":p=`${o}*${g}`;break;case"taxes":p=n.taxable?`${o}*${g}*${this.taxRate/100}`:"";break;case"total":p=`(${o}*${g})+${c}`;break}return{value:p,metadata:{type:"formula",style:r}}}getData(){let e=1;return[{id:e++,name:"Oranges",qty:4,taxable:!1,price:2.22},{id:e++,name:"Apples",qty:3,taxable:!1,price:1.55},{id:e++,name:"Honeycomb Cereals",qty:2,taxable:!0,price:4.55},{id:e++,name:"Raisins",qty:77,taxable:!1,price:.23},{id:e++,name:"Corn Flake Cereals",qty:1,taxable:!0,price:6.62},{id:e++,name:"Tomatoes",qty:3,taxable:!1,price:1.88},{id:e++,name:"Butter",qty:1,taxable:!1,price:3.33},{id:e++,name:"BBQ Chicken",qty:1,taxable:!1,price:12.33},{id:e++,name:"Chicken Wings",qty:12,taxable:!0,price:.53},{id:e++,name:"Drinkable Yogurt",qty:6,taxable:!0,price:1.22},{id:e++,name:"Milk",qty:3,taxable:!0,price:3.11}]}clearGrouping(){this.isDataGrouped=!1,this.aureliaGrid?.dataView?.setGrouping([])}groupByTaxable(){const e="mdi-check-box-outline",i="mdi-checkbox-blank-outline";this.isDataGrouped=!0,this.aureliaGrid?.dataView?.setGrouping({getter:"taxable",formatter:r=>`Taxable: <span class="mdi ${r.value?e:i} text-info"></span> <span class="text-primary">(${r.count} items)</span>`,comparer:(r,a)=>a.value-r.value,aggregators:[new k.Sum("price"),new k.Sum("qty"),new kr("subTotal",this.taxRate),new kr("taxes",this.taxRate),new kr("total",this.taxRate)],aggregateCollapsed:!1,lazyTotalsCalculation:!1}),this.aureliaGrid?.dataView?.refresh()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}ls=HM();ba=QM(ls,0,"Example36",ub,ba);KM(ls,1,ba);const XM=Object.freeze(Object.defineProperty({__proto__:null,get Example36(){return ba}},Symbol.toStringTag,{value:"Module"})),mb="example37",Bn=`<h2>
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
  columns.bind="columns"
  options.bind="gridOptions"
  dataset.bind="dataset"
  instances.bind="aureliaGrid"
  on-cell-change.trigger="handleOnCellChange($event.detail.eventData, $event.detail.args)"
  on-columns-reordered.trigger="handleOnColumnsReordered()"
>
</aurelia-slickgrid>
`,pb=[],hb={};let Or;function eP(t){Or||(Or=E.define({name:mb,template:Bn,dependencies:pb,bindables:hb})),t.register(Or)}const tP=Object.freeze(Object.defineProperty({__proto__:null,bindables:hb,default:Bn,dependencies:pb,name:mb,register:eP,template:Bn},Symbol.toStringTag,{value:"Module"}));var iP=Object.create,ss=Object.defineProperty,aP=Object.getOwnPropertyDescriptor,rP=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),gb=t=>{throw TypeError(t)},bb=(t,e,i)=>e in t?ss(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,nP=(t,e)=>ss(t,"name",{value:e,configurable:!0}),oP=t=>[,,,iP(null)],lP=["class","method","getter","setter","accessor","field","value","get","set"],fb=t=>t!==void 0&&typeof t!="function"?gb("Function expected"):t,sP=(t,e,i,r,a)=>({kind:lP[t],name:e,metadata:r,addInitializer:n=>i._?gb("Already initialized"):a.push(fb(n||null))}),dP=(t,e)=>bb(e,rP("metadata"),t[3]),cP=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},uP=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&aP(a,i));nP(a,i);for(var p=r.length-1;p>=0;p--)u=sP(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,fb(l)&&(a=l);return dP(t,a),c&&ss(a,i,c),m?s^4?n:c:a},Xe=(t,e,i)=>bb(t,typeof e!="symbol"?e+"":e,i),vb,ds;const mP=100;vb=[T(tP)];class fa{constructor(){Xe(this,"_darkMode",!1),Xe(this,"aureliaGrid"),Xe(this,"gridOptions"),Xe(this,"columns",[]),Xe(this,"dataset",[]),Xe(this,"hideSubTitle",!1),Xe(this,"resizerPaused",!1),this.defineGrid()}attached(){this.dataset=this.loadData(mP),this.updateAllTotals()}detaching(){document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light"}defineGrid(){const e=[];for(let i=0;i<10;i++)e.push({id:i,name:String.fromCharCode(65+i),field:String(i),type:"number",width:58,editor:{model:C.integer}});this.columns=e,this.gridOptions={autoEdit:!0,autoCommitEdit:!0,editable:!0,darkMode:this._darkMode,gridHeight:450,gridWidth:800,enableCellNavigation:!0,rowHeight:30,createFooterRow:!0,showFooterRow:!0,footerRowHeight:28}}loadData(e){const i=[];for(let r=0;r<e;r++){const a=i[r]={};a.id=r;for(let n=0;n<this.columns.length;n++)a[n]=Math.round(Math.random()*10)}return i}handleOnCellChange(e,i){this.updateTotal(i.cell)}handleOnColumnsReordered(){this.updateAllTotals()}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.aureliaGrid.slickGrid?.setOptions({darkMode:this._darkMode}),this.updateAllTotals()}toggleBodyBackground(){this._darkMode?(document.querySelector(".panel-wm-content").classList.add("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="dark"):(document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light")}updateAllTotals(){let e=this.aureliaGrid.slickGrid?.getColumns().length||0;for(;e--;)this.updateTotal(e)}updateTotal(e){const i=this.aureliaGrid.slickGrid?.getColumns()[e].id;let r=0,a=this.dataset.length;for(;a--;)r+=parseInt(this.dataset[a][i],10)||0;const n=this.aureliaGrid.slickGrid?.getFooterRowColumn(i);n&&(n.textContent=`Sum: ${r}`)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}ds=oP();fa=uP(ds,0,"Example37",vb,fa);cP(ds,1,fa);const pP=Object.freeze(Object.defineProperty({__proto__:null,get Example37(){return fa}},Symbol.toStringTag,{value:"Module"})),_b="example38",jn=`<div class="demo38">
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
    columns.bind="columns"
    options.bind="gridOptions"
    dataset.bind="dataset"
    instances.bind="aureliaGrid"
    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
    on-row-count-changed.trigger="refreshMetrics($event.detail.args)"
  >
  </aurelia-slickgrid>
</div>
`,yb=[],Sb={};let Dr;function hP(t){Dr||(Dr=E.define({name:_b,template:jn,dependencies:yb,bindables:Sb})),t.register(Dr)}const gP=Object.freeze(Object.defineProperty({__proto__:null,bindables:Sb,default:jn,dependencies:yb,name:_b,register:hP,template:jn},Symbol.toStringTag,{value:"Module"}));var bP=Object.create,cs=Object.defineProperty,fP=Object.getOwnPropertyDescriptor,vP=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Cb=t=>{throw TypeError(t)},wb=(t,e,i)=>e in t?cs(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,_P=(t,e)=>cs(t,"name",{value:e,configurable:!0}),yP=t=>[,,,bP(null)],SP=["class","method","getter","setter","accessor","field","value","get","set"],xb=t=>t!==void 0&&typeof t!="function"?Cb("Function expected"):t,CP=(t,e,i,r,a)=>({kind:SP[t],name:e,metadata:r,addInitializer:n=>i._?Cb("Already initialized"):a.push(xb(n||null))}),wP=(t,e)=>wb(e,vP("metadata"),t[3]),xP=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},TP=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&fP(a,i));_P(a,i);for(var p=r.length-1;p>=0;p--)u=CP(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,xb(l)&&(a=l);return wP(t,a),c&&cs(a,i,c),m?s^4?n:c:a},W=(t,e,i)=>wb(t,typeof e!="symbol"?e+"":e,i),Tb,us;const EP="%5E",$P="%25";Tb=[T(gP)];class va{constructor(e=M(Ce(we))){W(this,"http",e),W(this,"aureliaGrid"),W(this,"backendService"),W(this,"columns"),W(this,"gridOptions"),W(this,"dataset",[]),W(this,"isPageErrorTest",!1),W(this,"metrics"),W(this,"tagDataClass",""),W(this,"odataQuery",""),W(this,"hideSubTitle",!1),W(this,"processing",!1),W(this,"errorStatus",""),W(this,"errorStatusClass","hidden"),W(this,"status",{text:"processing...",class:"alert alert-danger"}),this.backendService=new so,this.initializeGrid()}aureliaGridReady(e){this.aureliaGrid=e}initializeGrid(){this.columns=[{id:"name",name:"Name",field:"name",sortable:!0,filterable:!0,filter:{model:v.compoundInput}},{id:"gender",name:"Gender",field:"gender",filterable:!0,sortable:!0,filter:{model:v.singleSelect,collection:[{value:"",label:""},{value:"male",label:"male"},{value:"female",label:"female"}]}},{id:"company",name:"Company",field:"company",filterable:!0,sortable:!0},{id:"category_name",name:"Category",field:"category/name",filterable:!0,sortable:!0,formatter:(e,i,r,a,n)=>n.category?.name||""}],this.gridOptions={enableAutoResize:!0,autoResize:{container:"#demo-container",rightPadding:10},checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},enableCellNavigation:!0,enableFiltering:!0,enableCheckboxSelector:!0,enableSelection:!0,enableGrouping:!0,headerMenu:{hideFreezeColumnsCommand:!1},presets:{},backendServiceApi:{service:this.backendService,options:{infiniteScroll:{fetchSize:30},enableCount:!0,version:4},onError:e=>{this.errorStatus=e.message,this.errorStatusClass="visible notification is-light is-danger is-small is-narrow",this.displaySpinner(!1,!0)},preProcess:()=>{this.errorStatus="",this.errorStatusClass="hidden",this.displaySpinner(!0)},process:e=>this.getCustomerApiCall(e),postProcess:e=>{this.metrics=e.metrics,this.displaySpinner(!1),this.getCustomerCallback(e)}}}}displaySpinner(e,i){this.processing=e,i?this.status={text:"ERROR!!!",class:"alert alert-danger"}:this.status=e?{text:"loading",class:"alert alert-warning"}:{text:"finished",class:"alert alert-success"}}getCustomerCallback(e){const i=e["@odata.count"];this.metrics.totalItemCount=i,e.infiniteScrollBottomHit?this.aureliaGrid.dataView?.addItems(e.value):(this.aureliaGrid.slickGrid?.scrollTo(0),this.dataset=e.value,this.metrics.itemCount=e.value.length),this.odataQuery=e.query}getCustomerApiCall(e){return this.getCustomerDataApiMock(e)}getCustomerDataApiMock(e){return this.errorStatusClass="hidden",new Promise(i=>{const r=e.toLowerCase().split("&");let a=0,n=0,l="",d=100;const u={};if(this.isPageErrorTest)throw this.isPageErrorTest=!1,new Error("Server timed out trying to retrieve data for the last page");for(const s of r){if(s.includes("$top=")&&(a=+s.substring(5),a===5e4))throw new Error("Server timed out retrieving 50,000 rows");if(s.includes("$skip=")&&(n=+s.substring(6)),s.includes("$orderby=")&&(l=s.substring(9)),s.includes("$filter=")){const m=s.substring(8).replace("%20"," ");if(m.includes("matchespattern")){const o=new RegExp(`matchespattern\\(([a-zA-Z]+),\\s'${EP}(.*?)'\\)`,"i"),g=m.match(o)||[],c=g[1].trim();u[c]={type:"matchespattern",term:"^"+g[2].trim()}}if(m.includes("contains")){const o=m.match(/contains\(([a-zA-Z/]+),\s?'(.*?)'/)||[],g=o[1].trim();u[g]={type:"substring",term:o[2].trim()}}if(m.includes("substringof")){const o=m.match(/substringof\('(.*?)',\s([a-zA-Z/]+)/)||[],g=o[2].trim();u[g]={type:"substring",term:o[1].trim()}}for(const o of["eq","ne","le","lt","gt","ge"])if(m.includes(o)){const c=new RegExp(`([a-zA-Z ]*) ${o} '(.*?)'`).exec(m);if(Array.isArray(c)){const p=c[1].trim();u[p]={type:o,term:c[2].trim()}}}if(m.includes("startswith")&&m.includes("endswith")){const o=m.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],g=m.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],c=o[1].trim();u[c]={type:"starts+ends",term:[o[2].trim(),g[2].trim()]}}else if(m.includes("startswith")){const o=m.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],g=o[1].trim();u[g]={type:"starts",term:o[2].trim()}}else if(m.includes("endswith")){const o=m.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],g=o[1].trim();u[g]={type:"ends",term:o[2].trim()}}if(m.includes("company"))throw new Error('Server could not filter using the field "Company"')}}if(l.includes("company"))throw new Error('Server could not sort using the field "Company"');this.http.fetch(vt).then(s=>s.json()).then(s=>{if(l?.length>0){const c=l.split(",");for(const p of c){const _=p.split(" "),w=_[0];let x=y=>y;for(const y of w.split("/")){const h=x;x=S=>h(S)[y]}switch((_[1]??"asc").toLocaleLowerCase()){case"asc":s=s.sort((y,h)=>x(y).localeCompare(x(h)));break;case"desc":s=s.sort((y,h)=>x(h).localeCompare(x(y)));break}}}let m=n,o=s;if(u){for(const c in u)u.hasOwnProperty(c)&&(o=o.filter(p=>{const _=u[c].type,w=u[c].term;let x=c;if(c?.indexOf(" ")!==-1){const h=c.split(" ");x=h[h.length-1]}let b,y=p;for(const h of x.split("/"))b=y[h],y=b;if(b){const[h,S]=Array.isArray(w)?w:[w];switch(_){case"eq":return b.toLowerCase()===h;case"ne":return b.toLowerCase()!==h;case"le":return b.toLowerCase()<=h;case"lt":return b.toLowerCase()<h;case"gt":return b.toLowerCase()>h;case"ge":return b.toLowerCase()>=h;case"ends":return b.toLowerCase().endsWith(h);case"starts":return b.toLowerCase().startsWith(h);case"starts+ends":return b.toLowerCase().startsWith(h)&&b.toLowerCase().endsWith(S);case"substring":return b.toLowerCase().includes(h);case"matchespattern":return new RegExp(h.replaceAll($P,".*"),"i").test(b)}}}));d=o.length}m>o.length&&(e=e.replace(`$skip=${m}`,""),m=0);const g=o.slice(m,m+a);setTimeout(()=>{const c={query:e};c.value=g,c["@odata.count"]=d,i(c)},100)})})}groupByGender(){this.aureliaGrid?.dataView?.setGrouping({getter:"gender",formatter:e=>`Gender: ${e.value} <span class="text-green">(${e.count} items)</span>`,comparer:(e,i)=>ue.string(e.value,i.value),aggregators:[new k.Sum("gemder")],aggregateCollapsed:!1,lazyTotalsCalculation:!0}),this.aureliaGrid?.slickGrid.setSortColumns([{columnId:"duration",sortAsc:!0}]),this.aureliaGrid?.slickGrid.invalidate()}clearAllFiltersAndSorts(){this.aureliaGrid?.gridService&&this.aureliaGrid.gridService.clearAllFiltersAndSorts()}setFiltersDynamically(){this.aureliaGrid?.filterService.updateFilters([{columnId:"gender",searchTerms:["female"]}])}refreshMetrics(e){e?.current>=0&&(this.metrics.itemCount=this.aureliaGrid.dataView?.getFilteredItemCount()||0,this.tagDataClass=this.metrics.itemCount===this.metrics.totalItemCount?"fully-loaded":"partial-load")}setSortingDynamically(){this.aureliaGrid?.sortService.updateSorting([{columnId:"name",direction:"DESC"}])}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}us=yP();va=TP(us,0,"Example38",Tb,va);xP(us,1,va);const kP=Object.freeze(Object.defineProperty({__proto__:null,get Example38(){return va}},Symbol.toStringTag,{value:"Module"})),Eb="example39",Vn=`<div class="demo39">
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
    columns.bind="columns"
    options.bind="gridOptions"
    dataset.bind="dataset"
    instances.bind="aureliaGrid"
    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
    on-row-count-changed.trigger="refreshMetrics($event.detail.args)"
  >
  </aurelia-slickgrid>
</div>
`,$b=[],kb={};let Mr;function OP(t){Mr||(Mr=E.define({name:Eb,template:Vn,dependencies:$b,bindables:kb})),t.register(Mr)}const DP=Object.freeze(Object.defineProperty({__proto__:null,bindables:kb,default:Vn,dependencies:$b,name:Eb,register:OP,template:Vn},Symbol.toStringTag,{value:"Module"}));var MP=Object.create,ms=Object.defineProperty,PP=Object.getOwnPropertyDescriptor,IP=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Ob=t=>{throw TypeError(t)},Db=(t,e,i)=>e in t?ms(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,GP=(t,e)=>ms(t,"name",{value:e,configurable:!0}),FP=t=>[,,,MP(null)],AP=["class","method","getter","setter","accessor","field","value","get","set"],Mb=t=>t!==void 0&&typeof t!="function"?Ob("Function expected"):t,RP=(t,e,i,r,a)=>({kind:AP[t],name:e,metadata:r,addInitializer:n=>i._?Ob("Already initialized"):a.push(Mb(n||null))}),LP=(t,e)=>Db(e,IP("metadata"),t[3]),zP=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},NP=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&PP(a,i));GP(a,i);for(var p=r.length-1;p>=0;p--)u=RP(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,Mb(l)&&(a=l);return LP(t,a),c&&ms(a,i,c),m?s^4?n:c:a},B=(t,e,i)=>Db(t,typeof e!="symbol"?e+"":e,i),Pb,ps;const Mi="users",WP=250;function Pr(t){return t.replace(/^"/,"").replace(/"$/,"").toLowerCase()}Pb=[T(DP)];class _a{constructor(e=M(Ce(we)),i=M(xe)){B(this,"http",e),B(this,"i18n",i),B(this,"aureliaGrid"),B(this,"backendService"),B(this,"columns"),B(this,"gridOptions"),B(this,"dataset",[]),B(this,"metrics"),B(this,"tagDataClass",""),B(this,"graphqlQuery","..."),B(this,"hideSubTitle",!1),B(this,"processing",!1),B(this,"selectedLanguage",""),B(this,"status",{text:"processing...",class:"alert alert-danger"}),B(this,"serverWaitDelay",WP),this.backendService=new co;const r="en";this.i18n.setLocale(r),this.selectedLanguage=r,this.initializeGrid()}aureliaGridReady(e){this.aureliaGrid=e}initializeGrid(){this.columns=[{id:"name",field:"name",nameKey:"NAME",width:60,sortable:!0,filterable:!0,filter:{model:v.compoundInput}},{id:"gender",field:"gender",nameKey:"GENDER",filterable:!0,sortable:!0,width:60,filter:{model:v.singleSelect,collection:[{value:"",label:""},{value:"male",labelKey:"MALE"},{value:"female",labelKey:"FEMALE"}]}},{id:"company",field:"company",nameKey:"COMPANY",width:60,sortable:!0,filterable:!0,filter:{model:v.multipleSelect,customStructure:{label:"company",value:"company"},collectionSortBy:{property:"company",sortDesc:!1},collectionAsync:this.http.fetch(vt).then(e=>e.json()),options:{filter:!0}}}],this.gridOptions={enableAutoResize:!0,autoResize:{container:"#demo-container",rightPadding:10},enableAutoTooltip:!0,autoTooltipOptions:{enableForHeaderCells:!0},enableTranslate:!0,i18n:this.i18n,enableFiltering:!0,enableCellNavigation:!0,multiColumnSort:!1,gridMenu:{resizeOnShowHeaderRow:!0},backendServiceApi:{disableInternalPostProcess:!0,service:this.backendService,options:{datasetName:Mi,addLocaleIntoQuery:!0,extraQueryArguments:[{field:"userId",value:123}],infiniteScroll:{fetchSize:30}},preProcess:()=>this.displaySpinner(!0),process:e=>this.getCustomerApiCall(e),postProcess:e=>{this.metrics={endTime:new Date,totalItemCount:e.data[Mi].totalCount||0},this.displaySpinner(!1),this.getCustomerCallback(e)}}}}clearAllFiltersAndSorts(){this.aureliaGrid?.gridService&&this.aureliaGrid.gridService.clearAllFiltersAndSorts()}displaySpinner(e){this.processing=e,this.status=e?{text:"processing...",class:"alert alert-danger"}:{text:"finished",class:"alert alert-success"}}getCustomerCallback(e){const{nodes:i,totalCount:r}=e.data[Mi];this.aureliaGrid&&(this.metrics.totalItemCount=r,e.infiniteScrollBottomHit?this.aureliaGrid.dataView?.addItems(i):(this.aureliaGrid.slickGrid?.scrollTo(0),this.dataset=i,this.metrics.itemCount=i.length))}getCustomerApiCall(e){return this.getCustomerDataApiMock(e)}getCustomerDataApiMock(e){return new Promise(i=>{let r=0,a=0,n="",l="";this.http.fetch(vt).then(d=>d.json()).then(d=>{let u=d;if(e.includes("first:")&&(r=+(e.match(/first:([0-9]+),/)||[])[1]),e.includes("offset:")&&(a=+(e.match(/offset:([0-9]+),/)||[])[1]),e.includes("orderBy:")){const[c,p,_]=/orderBy:\[{field:([a-zA-Z/]+),direction:(ASC|DESC)}\]/gi.exec(e)||[];n=p||"",l=_||""}if(e.includes("orderBy:")){const[c,p,_]=/orderBy:\[{field:([a-zA-Z/]+),direction:(ASC|DESC)}\]/gi.exec(e)||[];n=p||"",l=_||""}if(e.includes("filterBy:")){const c=/{field:(\w+),operator:(\w+),value:([0-9a-z',"\s]*)}/gi;let p;for(;(p=c.exec(e))!==null;){const _=p[1]||"",w=p[2]||"",x=p[3]||"";let[b,y]=x.split(",");_&&w&&x!==""&&(u=u.filter(h=>{const S=h[_];switch(b=Pr(b),y=Pr(y||""),w){case"EQ":return S.toLowerCase()===b;case"NE":return S.toLowerCase()!==b;case"LE":return S.toLowerCase()<=b;case"LT":return S.toLowerCase()<b;case"GT":return S.toLowerCase()>b;case"GE":return S.toLowerCase()>=b;case"EndsWith":return S.toLowerCase().endsWith(b);case"StartsWith":return S.toLowerCase().startsWith(b);case"Starts+Ends":return S.toLowerCase().startsWith(b)&&S.toLowerCase().endsWith(y);case"Contains":return S.toLowerCase().includes(b);case"Not_Contains":return!S.toLowerCase().includes(b);case"IN":const kv=x.toLocaleLowerCase().split(",");for(const Ov of kv)if(S.toLocaleLowerCase()===Pr(Ov))return!0;break}}))}}let s=a;s>u.length&&(e=e.replace(`offset:${s}`,""),s=0);const m=c=>n?c[n]:c;switch(l.toUpperCase()){case"ASC":u=u.sort((c,p)=>m(c).localeCompare(m(p)));break;case"DESC":u=u.sort((c,p)=>m(p).localeCompare(m(c)));break}const o=u.slice(s,s+r),g={data:{[Mi]:{nodes:o,totalCount:u.length}}};setTimeout(()=>{this.graphqlQuery=this.gridOptions.backendServiceApi.service.buildQuery(),i(g)},this.serverWaitDelay)})})}refreshMetrics(e){e?.current>=0&&(this.metrics.itemCount=this.aureliaGrid.dataView?.getFilteredItemCount()||0,this.tagDataClass=this.metrics.itemCount===this.metrics.totalItemCount?"fully-loaded":"partial-load")}async switchLanguage(){const e=this.selectedLanguage==="en"?"fr":"en";await this.i18n.setLocale(e),this.selectedLanguage=e}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}ps=FP();_a=NP(ps,0,"Example39",Pb,_a);zP(ps,1,_a);const BP=Object.freeze(Object.defineProperty({__proto__:null,get Example39(){return _a}},Symbol.toStringTag,{value:"Module"})),Ib="example40",Hn=`<div class="demo40">
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
    columns.bind="columns"
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
`,Gb=[],Fb={};let Ir;function jP(t){Ir||(Ir=E.define({name:Ib,template:Hn,dependencies:Gb,bindables:Fb})),t.register(Ir)}const VP=Object.freeze(Object.defineProperty({__proto__:null,bindables:Fb,default:Hn,dependencies:Gb,name:Ib,register:jP,template:Hn},Symbol.toStringTag,{value:"Module"}));var HP=Object.create,hs=Object.defineProperty,UP=Object.getOwnPropertyDescriptor,qP=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Ab=t=>{throw TypeError(t)},Rb=(t,e,i)=>e in t?hs(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,YP=(t,e)=>hs(t,"name",{value:e,configurable:!0}),KP=t=>[,,,HP(null)],QP=["class","method","getter","setter","accessor","field","value","get","set"],Lb=t=>t!==void 0&&typeof t!="function"?Ab("Function expected"):t,ZP=(t,e,i,r,a)=>({kind:QP[t],name:e,metadata:r,addInitializer:n=>i._?Ab("Already initialized"):a.push(Lb(n||null))}),JP=(t,e)=>Rb(e,qP("metadata"),t[3]),XP=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},eI=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&UP(a,i));YP(a,i);for(var p=r.length-1;p>=0;p--)u=ZP(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,Lb(l)&&(a=l);return JP(t,a),c&&hs(a,i,c),m?s^4?n:c:a},et=(t,e,i)=>Rb(t,typeof e!="symbol"?e+"":e,i),zb,gs;const Ft=50;zb=[T(VP)];class ya{constructor(){et(this,"aureliaGrid"),et(this,"columns"),et(this,"dataset",[]),et(this,"gridOptions"),et(this,"metrics"),et(this,"hideSubTitle",!1),et(this,"shouldResetOnSort",!1),this.defineGrid(),this.dataset=this.loadData(0,Ft),this.metrics={itemCount:Ft,totalItemCount:Ft}}aureliaGridReady(e){this.aureliaGrid=e}defineGrid(){this.columns=[{id:"title",name:"Title",field:"title",sortable:!0,minWidth:100,filterable:!0},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,minWidth:100,filterable:!0,type:"number"},{id:"percentComplete",name:"% Complete",field:"percentComplete",sortable:!0,minWidth:100,filterable:!0,type:"number"},{id:"start",name:"Start",field:"start",type:"date",outputType:"dateIso",formatter:f.date,exportWithFormatter:!0,params:{dateFormat:"MMM DD, YYYY"},sortable:!0,filterable:!0,filter:{model:v.compoundDate}},{id:"finish",name:"Finish",field:"finish",type:"date",outputType:"dateIso",formatter:f.date,exportWithFormatter:!0,params:{dateFormat:"MMM DD, YYYY"},sortable:!0,filterable:!0,filter:{model:v.compoundDate}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",sortable:!0,minWidth:100,filterable:!0,formatter:f.checkmarkMaterial}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableAutoResize:!0,enableFiltering:!0,enableGrouping:!0,editable:!1,rowHeight:33,enableExcelExport:!0,externalResources:[new G]}}handleOnScroll(e){const i=e.grid.getViewportNode();if(["mousewheel","scroll"].includes(e.triggeredBy||"")&&i.scrollTop>0&&Math.ceil(i.offsetHeight+e.scrollTop)>=e.scrollHeight){console.log("onScroll end reached, add more items");const r=this.aureliaGrid.dataView?.getItemCount()||0,a=this.loadData(r,Ft);this.aureliaGrid.dataView?.addItems(a)}}handleOnSort(){if(this.shouldResetOnSort){const e=this.loadData(0,Ft);this.aureliaGrid.slickGrid?.scrollTo(0),this.aureliaGrid.dataView?.setItems(e),this.aureliaGrid.dataView?.reSort()}}groupByDuration(){this.aureliaGrid?.dataView?.setGrouping({getter:"duration",formatter:e=>`Duration: ${e.value} <span class="text-green">(${e.count} items)</span>`,comparer:(e,i)=>ue.numeric(e.value,i.value,si.asc),aggregators:[new k.Avg("percentComplete"),new k.Sum("cost")],aggregateCollapsed:!1,lazyTotalsCalculation:!0}),this.aureliaGrid?.slickGrid?.setSortColumns([{columnId:"duration",sortAsc:!0}]),this.aureliaGrid?.slickGrid?.invalidate()}loadData(e,i){const r=[];for(let a=e;a<e+i;a++)r.push(this.newItem(a));return r}newItem(e){return{id:e,title:"Task "+e,duration:Math.round(Math.random()*100)+"",percentComplete:Dt(1,12),start:new Date(2020,Dt(1,11),Dt(1,28)),finish:new Date(2022,Dt(1,11),Dt(1,28)),effortDriven:e%5===0}}onSortReset(e){this.shouldResetOnSort=e}clearAllFiltersAndSorts(){this.aureliaGrid?.gridService&&this.aureliaGrid.gridService.clearAllFiltersAndSorts()}setFiltersDynamically(){this.aureliaGrid?.filterService.updateFilters([{columnId:"start",searchTerms:["2020-08-25"],operator:"<="}])}handleOnRowCountChanged(e){this.aureliaGrid&&e?.current>=0&&(this.aureliaGrid.dataView?.reSort(),this.metrics.itemCount=this.aureliaGrid.dataView?.getFilteredItemCount()||0,this.metrics.totalItemCount=e.itemCount||0)}setSortingDynamically(){this.aureliaGrid?.sortService.updateSorting([{columnId:"title",direction:"DESC"}])}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}gs=KP();ya=eI(gs,0,"Example40",zb,ya);XP(gs,1,ya);const tI=Object.freeze(Object.defineProperty({__proto__:null,get Example40(){return ya}},Symbol.toStringTag,{value:"Module"})),Nb="example41",Un=`<div class="container-fluid">
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
        columns.bind="columns"
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
`,Wb=[],Bb={};let Gr;function iI(t){Gr||(Gr=E.define({name:Nb,template:Un,dependencies:Wb,bindables:Bb})),t.register(Gr)}const aI=Object.freeze(Object.defineProperty({__proto__:null,bindables:Bb,default:Un,dependencies:Wb,name:Nb,register:iI,template:Un},Symbol.toStringTag,{value:"Module"}));var rI=Object.create,bs=Object.defineProperty,nI=Object.getOwnPropertyDescriptor,oI=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),jb=t=>{throw TypeError(t)},Vb=(t,e,i)=>e in t?bs(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,lI=(t,e)=>bs(t,"name",{value:e,configurable:!0}),sI=t=>[,,,rI(null)],dI=["class","method","getter","setter","accessor","field","value","get","set"],Hb=t=>t!==void 0&&typeof t!="function"?jb("Function expected"):t,cI=(t,e,i,r,a)=>({kind:dI[t],name:e,metadata:r,addInitializer:n=>i._?jb("Already initialized"):a.push(Hb(n||null))}),uI=(t,e)=>Vb(e,oI("metadata"),t[3]),mI=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},pI=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&nI(a,i));lI(a,i);for(var p=r.length-1;p>=0;p--)u=cI(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,Hb(l)&&(a=l);return uI(t,a),c&&bs(a,i,c),m?s^4?n:c:a},Ue=(t,e,i)=>Vb(t,typeof e!="symbol"?e+"":e,i),Ub,fs;Ub=[T(aI)];class Sa{constructor(){Ue(this,"aureliaGrid"),Ue(this,"gridOptions"),Ue(this,"columns"),Ue(this,"dataset",[]),Ue(this,"dragHelper"),Ue(this,"dragRows",[]),Ue(this,"dragMode",""),Ue(this,"hideSubTitle",!1),this.defineGrid(),this.dataset=this.mockData()}aureliaGridReady(e){this.aureliaGrid=e}defineGrid(){this.columns=[{id:"name",name:"Name",field:"name",width:300,cssClass:"cell-title"},{id:"complete",name:"Complete",width:60,cssClass:"cell-effort-driven",field:"complete",cannotTriggerInsert:!0,formatter:f.checkmarkMaterial}],this.gridOptions={enableAutoResize:!1,gridHeight:225,gridWidth:800,rowHeight:33,enableCellNavigation:!0,enableSelection:!0,enableRowMoveManager:!0,selectionOptions:{selectActiveRow:!1,selectionType:"row"},rowMoveManager:{columnIndexPosition:0,cancelEditOnDrag:!0,disableRowSelection:!0,hideRowMoveShadow:!1,onBeforeMoveRows:this.onBeforeMoveRows.bind(this),onMoveRows:this.onMoveRows.bind(this)}}}mockData(){return[{id:0,name:"Make a list",complete:!0},{id:1,name:"Check it twice",complete:!1},{id:2,name:"Find out who's naughty",complete:!1},{id:3,name:"Find out who's nice",complete:!1}]}onBeforeMoveRows(e,i){for(const r of i.rows)if(r===i.insertBefore||r===i.insertBefore-1)return e.stopPropagation(),!1;return!0}onMoveRows(e,i){const r=[],a=i.rows,n=i.insertBefore,l=this.dataset.slice(0,n),d=this.dataset.slice(n,this.dataset.length);a.sort((s,m)=>s-m);for(const s of a)r.push(this.dataset[s]);a.reverse();for(const s of a)s<n?l.splice(s,1):d.splice(s-n,1);this.dataset=l.concat(r.concat(d));const u=[];for(let s=0;s<a.length;s++)u.push(l.length+s);this.aureliaGrid.slickGrid?.resetActiveCell(),this.aureliaGrid.slickGrid?.invalidate()}handleOnDragInit(e){e.stopImmediatePropagation()}handleOnDragStart(e){const i=this.aureliaGrid.slickGrid?.getCellFromEvent(e);if(!i||i.cell===0){this.dragMode="";return}const r=i.row;if(!this.dataset[r]||rt.isActive())return;e.stopImmediatePropagation(),this.dragMode="recycle";let a=this.aureliaGrid.slickGrid?.getSelectedRows()||[];(!a.length||a.findIndex(d=>d===d)===-1)&&(a=[r],this.aureliaGrid.slickGrid?.setSelectedRows(a)),this.dragRows=a;const n=a.length,l=document.createElement("span");return l.className="drag-message",l.textContent=`Drag to Recycle Bin to delete ${n} selected row(s)`,this.dragHelper=l,document.body.appendChild(l),document.querySelector("#dropzone")?.classList.add("drag-dropzone"),l}handleOnDrag(e,i){if(this.dragMode!=="recycle")return;this.dragHelper instanceof HTMLElement&&(this.dragHelper.style.top=`${e.pageY+5}px`,this.dragHelper.style.left=`${e.pageX+5}px`);const r=document.querySelector("#dropzone");i.target instanceof HTMLElement&&(i.target.id==="dropzone"||i.target===r)?r.classList.add("drag-hover"):r.classList.remove("drag-hover")}handleOnDragEnd(e,i){if(this.dragMode!=="recycle"||(this.dragHelper?.remove(),document.querySelector("#dropzone")?.classList.remove("drag-dropzone","drag-hover"),this.dragMode!=="recycle"||i.target.id!=="dropzone"))return;const r=this.dragRows.sort().reverse();for(const a of r)this.dataset.splice(a,1);this.aureliaGrid.slickGrid?.invalidate(),this.aureliaGrid.slickGrid?.setSelectedRows([]),this.dataset=[...this.dataset]}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}fs=sI();Sa=pI(fs,0,"Example41",Ub,Sa);mI(fs,1,Sa);const hI=Object.freeze(Object.defineProperty({__proto__:null,get Example41(){return Sa}},Symbol.toStringTag,{value:"Module"})),qb="example42",qn=`<div class="container-fluid">
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
    columns.bind="columns"
    options.bind="gridOptions"
    dataset.bind="dataset"
    instances.bind="aureliaGrid"
    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
  >
  </aurelia-slickgrid>
</div>
`,Yb=[],Kb={};let Fr;function gI(t){Fr||(Fr=E.define({name:qb,template:qn,dependencies:Yb,bindables:Kb})),t.register(Fr)}const bI=Object.freeze(Object.defineProperty({__proto__:null,bindables:Kb,default:qn,dependencies:Yb,name:qb,register:gI,template:qn},Symbol.toStringTag,{value:"Module"}));var fI=Object.create,vs=Object.defineProperty,vI=Object.getOwnPropertyDescriptor,_I=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Si=t=>{throw TypeError(t)},Qb=(t,e,i)=>e in t?vs(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Ad=(t,e)=>vs(t,"name",{value:e,configurable:!0}),yI=t=>[,,,fI(null)],Zb=["class","method","getter","setter","accessor","field","value","get","set"],Zt=t=>t!==void 0&&typeof t!="function"?Si("Function expected"):t,SI=(t,e,i,r,a)=>({kind:Zb[t],name:e,metadata:r,addInitializer:n=>i._?Si("Already initialized"):a.push(Zt(n||null))}),CI=(t,e)=>Qb(e,_I("metadata"),t[3]),Yn=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)e&1?n[a].call(i):r=n[a].call(i,r);return r},Jb=(t,e,i,r,a,n)=>{var l,d,u,s,m,o=e&7,g=!!(e&8),c=!!(e&16),p=o>3?t.length+1:o?g?1:2:0,_=Zb[o+5],w=o>3&&(t[p-1]=[]),x=t[p]||(t[p]=[]),b=o&&(!c&&!g&&(a=a.prototype),o<5&&(o>3||!c)&&vI(o<4?a:{get[i](){return Rd(this,n)},set[i](h){return Ld(this,n,h)}},i));o?c&&o<4&&Ad(n,(o>2?"set ":o>1?"get ":"")+i):Ad(a,i);for(var y=r.length-1;y>=0;y--)s=SI(o,i,u={},t[3],x),o&&(s.static=g,s.private=c,m=s.access={has:c?h=>wI(a,h):h=>i in h},o^3&&(m.get=c?h=>(o^1?Rd:xI)(h,a,o^4?n:b.get):h=>h[i]),o>2&&(m.set=c?(h,S)=>Ld(h,a,S,o^4?n:b.set):(h,S)=>h[i]=S)),d=(0,r[y])(o?o<4?c?n:b[_]:o>4?void 0:{get:b.get,set:b.set}:a,s),u._=1,o^4||d===void 0?Zt(d)&&(o>4?w.unshift(d):o?c?n=d:b[_]=d:a=d):typeof d!="object"||d===null?Si("Object expected"):(Zt(l=d.get)&&(b.get=l),Zt(l=d.set)&&(b.set=l),Zt(l=d.init)&&w.unshift(l));return o||CI(t,a),b&&vs(a,i,b),c?o^4?n:b:a},Ie=(t,e,i)=>Qb(t,typeof e!="symbol"?e+"":e,i),_s=(t,e,i)=>e.has(t)||Si("Cannot "+i),wI=(t,e)=>Object(e)!==e?Si('Cannot use the "in" operator on this value'):t.has(e),Rd=(t,e,i)=>(_s(t,e,"read from private field"),i?i.call(t):e.get(t)),Ld=(t,e,i,r)=>(_s(t,e,"write to private field"),r?r.call(t,i):e.set(t,i),i),xI=(t,e,i)=>(_s(t,e,"access private method"),i),Xb,ef,Ct;const TI=5e3;function At(t,e){return Math.floor(Math.random()*(e-t+1)+t)}ef=[T(bI)],Xb=[O()];class oi{constructor(){Ie(this,"pageSize",Yn(Ct,8,this,50)),Yn(Ct,11,this),Ie(this,"aureliaGrid"),Ie(this,"columns",[]),Ie(this,"gridContainerElm"),Ie(this,"gridOptions"),Ie(this,"dataset",[]),Ie(this,"paginationPosition","top"),Ie(this,"hideSubTitle",!1),Ie(this,"paginationOptions"),this.defineGrid()}attached(){this.dataset=this.loadData(TI)}aureliaGridReady(e){this.aureliaGrid=e}defineGrid(){this.columns=[{id:"title",name:"Title",field:"id",minWidth:100,sortable:!0,filterable:!0,formatter:(e,i,r)=>`Task ${r}`,params:{useFormatterOuputToFilter:!0}},{id:"description",name:"Description",field:"description",filterable:!0,sortable:!0,minWidth:80},{id:"percentComplete",name:"% Complete",field:"percentComplete",minWidth:120,sortable:!0,customTooltip:{position:"center"},formatter:f.progressBar,type:"number",filterable:!0,filter:{model:v.sliderRange,maxValue:100,operator:"RangeInclusive",options:{hideSliderNumbers:!1,min:0,step:5}}},{id:"start",name:"Start",field:"start",formatter:f.dateIso,sortable:!0,minWidth:75,width:100,exportWithFormatter:!0,type:"date",filterable:!0,filter:{model:v.compoundDate}},{id:"finish",name:"Finish",field:"finish",formatter:f.dateIso,sortable:!0,minWidth:75,width:120,exportWithFormatter:!0,type:"date",filterable:!0,filter:{model:v.dateRange}},{id:"duration",field:"duration",name:"Duration",maxWidth:90,type:"number",sortable:!0,filterable:!0,filter:{model:v.input,operator:"RangeExclusive"}},{id:"completed",name:"Completed",field:"completed",minWidth:85,maxWidth:90,formatter:f.checkmarkMaterial,exportWithFormatter:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:v.singleSelect,options:{autoAdjustDropHeight:!0}}}],this.gridOptions={autoResize:{container:"#demo-container",bottomPadding:this.paginationPosition==="top"?-1:38},enableExcelCopyBuffer:!0,enableFiltering:!0,customPaginationComponent:gt,enablePagination:!0,pagination:{pageSize:this.pageSize},rowHeight:40}}loadData(e){const i=[];for(let r=0,a=e;r<a;r++){const n=At(0,365),l=At(new Date().getFullYear(),new Date().getFullYear()+1),d=At(0,12),u=At(10,28),s=At(0,100);i.push({id:r,title:"Task "+r,description:r%5?"desc "+r:null,duration:n,percentComplete:s,percentCompleteNumber:s,start:r%4?null:new Date(l,d,u),finish:new Date(l,d,u),completed:s===100})}return i}pageSizeChanged(e){this.aureliaGrid.paginationService?.changeItemPerPage(e)}togglePaginationPosition(){const e=document.querySelector(`#${this.aureliaGrid.slickGrid.getOptions().gridContainerId||""}`);this.paginationPosition=this.paginationPosition==="top"?"bottom":"top",this.aureliaGrid.paginationComponent?.disposeElement(),this.aureliaGrid.paginationComponent?.renderPagination(e,this.paginationPosition)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}Ct=yI();Jb(Ct,5,"pageSize",Xb,oi);oi=Jb(Ct,0,"Example42",ef,oi);Yn(Ct,1,oi);const EI=Object.freeze(Object.defineProperty({__proto__:null,get Example42(){return oi}},Symbol.toStringTag,{value:"Module"})),tf="example43",Kn=`<h2>
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

<aurelia-slickgrid grid-id="grid43" columns.bind="columns" options.bind="gridOptions" dataset.bind="dataset" instances.bind="aureliaGrid">
</aurelia-slickgrid>
`,af=[],rf={};let Ar;function $I(t){Ar||(Ar=E.define({name:tf,template:Kn,dependencies:af,bindables:rf})),t.register(Ar)}const kI=Object.freeze(Object.defineProperty({__proto__:null,bindables:rf,default:Kn,dependencies:af,name:tf,register:$I,template:Kn},Symbol.toStringTag,{value:"Module"}));var OI=Object.create,ys=Object.defineProperty,DI=Object.getOwnPropertyDescriptor,MI=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),nf=t=>{throw TypeError(t)},of=(t,e,i)=>e in t?ys(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,PI=(t,e)=>ys(t,"name",{value:e,configurable:!0}),II=t=>[,,,OI(null)],GI=["class","method","getter","setter","accessor","field","value","get","set"],lf=t=>t!==void 0&&typeof t!="function"?nf("Function expected"):t,FI=(t,e,i,r,a)=>({kind:GI[t],name:e,metadata:r,addInitializer:n=>i._?nf("Already initialized"):a.push(lf(n||null))}),AI=(t,e)=>of(e,MI("metadata"),t[3]),RI=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},LI=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&DI(a,i));PI(a,i);for(var p=r.length-1;p>=0;p--)u=FI(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,lf(l)&&(a=l);return AI(t,a),c&&ys(a,i,c),m?s^4?n:c:a},Ge=(t,e,i)=>of(t,typeof e!="symbol"?e+"":e,i),sf,Ss;sf=[T(kI)];class Ca{constructor(){Ge(this,"aureliaGrid"),Ge(this,"gridOptions"),Ge(this,"columns",[]),Ge(this,"dataset",[]),Ge(this,"isEditable",!1),Ge(this,"hideSubTitle",!1),Ge(this,"showEmployeeId",!0),Ge(this,"excelExportService",new G),Ge(this,"metadata",{0:{columns:{1:{rowspan:2},2:{colspan:2},6:{colspan:3},10:{colspan:3,rowspan:10},13:{colspan:2},17:{colspan:2,rowspan:2}}},1:{columns:{3:{colspan:3},6:{colspan:4},13:{colspan:2,rowspan:5},15:{colspan:2}}},2:{columns:{2:{colspan:3,rowspan:2},5:{colspan:2},7:{colspan:3},15:{colspan:2},17:{colspan:2}}},3:{columns:{6:{colspan:4},16:{colspan:2}}},4:{columns:{2:{colspan:4},7:{colspan:3},15:{colspan:2,rowspan:2},17:{colspan:2}}},5:{columns:{2:{colspan:2},4:{colspan:3},7:{colspan:3},17:{colspan:2}}},6:{columns:{2:{colspan:2},5:{colspan:2},7:{colspan:3},14:{colspan:2},16:{colspan:3}}},7:{columns:{2:{colspan:3},5:{colspan:3},13:{colspan:3,rowspan:2},16:{colspan:2}}},8:{columns:{2:{colspan:3},7:{colspan:3,rowspan:2},17:{colspan:2}}},9:{columns:{2:{colspan:3},5:{colspan:2},13:{colspan:3},16:{colspan:3}}}}),this.defineGrid()}attached(){this.dataset=this.loadData()}defineGrid(){this.columns=[{id:"employeeID",name:"Employee ID",field:"employeeID",minWidth:100},{id:"employeeName",name:"Employee Name",field:"employeeName",editor:{model:C.text},minWidth:120},{id:"9:00",name:"9:00 AM",field:"9:00",editor:{model:C.text},minWidth:120},{id:"9:30",name:"9:30 AM",field:"9:30",editor:{model:C.text},minWidth:120},{id:"10:00",name:"10:00 AM",field:"10:00",editor:{model:C.text},minWidth:120},{id:"10:30",name:"10:30 AM",field:"10:30",editor:{model:C.text},minWidth:120},{id:"11:00",name:"11:00 AM",field:"11:00",editor:{model:C.text},minWidth:120},{id:"11:30",name:"11:30 AM",field:"11:30",editor:{model:C.text},minWidth:120},{id:"12:00",name:"12:00 PM",field:"12:00",editor:{model:C.text},minWidth:120},{id:"12:30",name:"12:30 PM",field:"12:30",editor:{model:C.text},minWidth:120},{id:"1:00",name:"1:00 PM",field:"1:00",editor:{model:C.text},minWidth:120},{id:"1:30",name:"1:30 PM",field:"1:30",editor:{model:C.text},minWidth:120},{id:"2:00",name:"2:00 PM",field:"2:00",editor:{model:C.text},minWidth:120},{id:"2:30",name:"2:30 PM",field:"2:30",editor:{model:C.text},minWidth:120},{id:"3:00",name:"3:00 PM",field:"3:00",editor:{model:C.text},minWidth:120},{id:"3:30",name:"3:30 PM",field:"3:30",editor:{model:C.text},minWidth:120},{id:"4:00",name:"4:00 PM",field:"4:00",editor:{model:C.text},minWidth:120},{id:"4:30",name:"4:30 PM",field:"4:30",editor:{model:C.text},minWidth:120},{id:"5:00",name:"5:00 PM",field:"5:00",editor:{model:C.text},minWidth:120}],this.gridOptions={autoResize:{container:"#demo-container",bottomPadding:30,rightPadding:50},enableCellNavigation:!0,enableColumnReorder:!0,enableCellRowSpan:!0,enableHeaderMenu:!1,enableExcelExport:!0,externalResources:[this.excelExportService],enableExcelCopyBuffer:!0,autoEdit:!0,editable:!1,datasetIdPropertyName:"employeeID",frozenColumn:0,gridHeight:348,rowHeight:30,dataView:{globalItemMetadataProvider:{getRowMetadata:(e,i)=>this.metadata[i]}},gridMenu:{hideColumnPickerSection:!0},rowTopOffsetRenderType:"top"}}exportToExcel(){this.excelExportService.exportToExcel({filename:"export",format:"xlsx"})}navigateDown(){this.aureliaGrid?.slickGrid?.navigateDown()}navigateUp(){this.aureliaGrid?.slickGrid?.navigateUp()}navigateNext(){this.aureliaGrid?.slickGrid?.navigateNext()}navigatePrev(){this.aureliaGrid?.slickGrid?.navigatePrev()}toggleEditing(){this.isEditable=!this.isEditable,this.aureliaGrid.slickGrid.setOptions({editable:this.isEditable})}loadData(){return[{employeeID:10001,employeeName:"Davolio","9:00":"Analysis Tasks","9:30":"Analysis Tasks","10:00":"Team Meeting","10:30":"Testing","11:00":"Development","11:30":"Development","12:00":"Development","12:30":"Support","1:00":"Lunch Break","1:30":"Lunch Break","2:00":"Lunch Break","2:30":"Testing","3:00":"Testing","3:30":"Development","4:00":"Conference","4:30":"Team Meeting","5:00":"Team Meeting"},{employeeID:10002,employeeName:"Buchanan","9:00":"Task Assign","9:30":"Support","10:00":"Support","10:30":"Support","11:00":"Testing","11:30":"Testing","12:00":"Testing","12:30":"Testing","1:00":"Lunch Break","1:30":"Lunch Break","2:00":"Lunch Break","2:30":"Development","3:00":"Development","3:30":"Check Mail","4:00":"Check Mail","4:30":"Team Meeting","5:00":"Team Meeting"},{employeeID:10003,employeeName:"Fuller","9:00":"Check Mail","9:30":"Check Mail","10:00":"Check Mail","10:30":"Analysis Tasks","11:00":"Analysis Tasks","11:30":"Support","12:00":"Support","12:30":"Support","1:00":"Lunch Break","1:30":"Lunch Break","2:00":"Lunch Break","2:30":"Development","3:00":"Development","3:30":"Team Meeting","4:00":"Team Meeting","4:30":"Development","5:00":"Development"},{employeeID:10004,employeeName:"Leverling","9:00":"Testing","9:30":"Check Mail","10:00":"Check Mail","10:30":"Support","11:00":"Testing","11:30":"Testing","12:00":"Testing","12:30":"Testing","1:00":"Lunch Break","1:30":"Lunch Break","2:00":"Lunch Break","2:30":"Development","3:00":"Development","3:30":"Check Mail","4:00":"Conference","4:30":"Conference","5:00":"Team Meeting"},{employeeID:10005,employeeName:"Peacock","9:00":"Task Assign","9:30":"Task Assign","10:00":"Task Assign","10:30":"Task Assign","11:00":"Check Mail","11:30":"Support","12:00":"Support","12:30":"Support","1:00":"Lunch Break","1:30":"Lunch Break","2:00":"Lunch Break","2:30":"Development","3:00":"Development","3:30":"Team Meeting","4:00":"Team Meeting","4:30":"Testing","5:00":"Testing"},{employeeID:10006,employeeName:"Janet","9:00":"Testing","9:30":"Testing","10:00":"Support","10:30":"Support","11:00":"Support","11:30":"Team Meeting","12:00":"Team Meeting","12:30":"Team Meeting","1:00":"Lunch Break","1:30":"Lunch Break","2:00":"Lunch Break","2:30":"Development","3:00":"Development","3:30":"Team Meeting","4:00":"Team Meeting","4:30":"Development","5:00":"Development"},{employeeID:10007,employeeName:"Suyama","9:00":"Analysis Tasks","9:30":"Analysis Tasks","10:00":"Testing","10:30":"Development","11:00":"Development","11:30":"Testing","12:00":"Testing","12:30":"Testing","1:00":"Lunch Break","1:30":"Lunch Break","2:00":"Lunch Break","2:30":"Support","3:00":"Build","3:30":"Build","4:00":"Check Mail","4:30":"Check Mail","5:00":"Check Mail"},{employeeID:10008,employeeName:"Robert","9:00":"Task Assign","9:30":"Task Assign","10:00":"Task Assign","10:30":"Development","11:00":"Development","11:30":"Development","12:00":"Testing","12:30":"Support","1:00":"Lunch Break","1:30":"Lunch Break","2:00":"Lunch Break","2:30":"Check Mail","3:00":"Check Mail","3:30":"Check Mail","4:00":"Team Meeting","4:30":"Team Meeting","5:00":"Build"},{employeeID:10009,employeeName:"Andrew","9:00":"Check Mail","9:30":"Team Meeting","10:00":"Team Meeting","10:30":"Support","11:00":"Testing","11:30":"Development","12:00":"Development","12:30":"Development","1:00":"Lunch Break","1:30":"Lunch Break","2:00":"Lunch Break","2:30":"Check Mail","3:00":"Check Mail","3:30":"Check Mail","4:00":"Team Meeting","4:30":"Development","5:00":"Development"},{employeeID:10010,employeeName:"Michael","9:00":"Task Assign","9:30":"Task Assign","10:00":"Task Assign","10:30":"Analysis Tasks","11:00":"Analysis Tasks","11:30":"Development","12:00":"Development","12:30":"Development","1:00":"Lunch Break","1:30":"Lunch Break","2:00":"Lunch Break","2:30":"Testing","3:00":"Testing","3:30":"Testing","4:00":"Build","4:30":"Build","5:00":"Build"}]}toggleEmployeeIdVisibility(){const e={};this.showEmployeeId=!this.showEmployeeId;const i=this.showEmployeeId?1:-1;for(const r of Object.keys(this.metadata)){e[r]={columns:{}};for(const a of Object.keys(this.metadata[r].columns))e[r].columns[Number(a)+i]=this.metadata[r].columns[a]}this.showEmployeeId?this.columns.unshift({id:"employeeID",name:"Employee ID",field:"employeeID",width:100}):this.columns.splice(0,1),this.aureliaGrid.slickGrid.setColumns(this.columns),this.metadata=e,this.aureliaGrid.slickGrid.remapAllColumnsRowSpan(),this.aureliaGrid.slickGrid.invalidate()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}Ss=II();Ca=LI(Ss,0,"Example43",sf,Ca);RI(Ss,1,Ca);const zI=Object.freeze(Object.defineProperty({__proto__:null,get Example43(){return Ca}},Symbol.toStringTag,{value:"Module"})),df="example44",Qn=`<h2>
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

<aurelia-slickgrid grid-id="grid44" columns.bind="columns" options.bind="gridOptions" dataset.bind="dataset" instances.bind="aureliaGrid">
</aurelia-slickgrid>
`,cf=[],uf={};let Rr;function NI(t){Rr||(Rr=E.define({name:df,template:Qn,dependencies:cf,bindables:uf})),t.register(Rr)}const WI=Object.freeze(Object.defineProperty({__proto__:null,bindables:uf,default:Qn,dependencies:cf,name:df,register:NI,template:Qn},Symbol.toStringTag,{value:"Module"}));var BI=Object.create,Cs=Object.defineProperty,jI=Object.getOwnPropertyDescriptor,VI=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),mf=t=>{throw TypeError(t)},pf=(t,e,i)=>e in t?Cs(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,HI=(t,e)=>Cs(t,"name",{value:e,configurable:!0}),UI=t=>[,,,BI(null)],qI=["class","method","getter","setter","accessor","field","value","get","set"],hf=t=>t!==void 0&&typeof t!="function"?mf("Function expected"):t,YI=(t,e,i,r,a)=>({kind:qI[t],name:e,metadata:r,addInitializer:n=>i._?mf("Already initialized"):a.push(hf(n||null))}),KI=(t,e)=>pf(e,VI("metadata"),t[3]),QI=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},ZI=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&jI(a,i));HI(a,i);for(var p=r.length-1;p>=0;p--)u=YI(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,hf(l)&&(a=l);return KI(t,a),c&&Cs(a,i,c),m?s^4?n:c:a},qe=(t,e,i)=>pf(t,typeof e!="symbol"?e+"":e,i),gf,ws;const P=(t,e,i)=>`<div class="cellValue">${i.toFixed(2)}</div><div class="valueComment">${t}.${e}</div>`,I=(t,e,i)=>i.toFixed(2);gf=[T(WI)];class wa{constructor(){qe(this,"aureliaGrid"),qe(this,"gridOptions"),qe(this,"columns",[]),qe(this,"dataLn","loading..."),qe(this,"dataset",[]),qe(this,"hideSubTitle",!1),qe(this,"scrollToRow",100),qe(this,"metadata",{0:{columns:{1:{rowspan:3}}},2:{columns:{0:{rowspan:3},3:{colspan:3}}},3:{columns:{1:{rowspan:5,colspan:1,cssClass:"cell-var-span"},3:{rowspan:3,colspan:5}}},8:{columns:{1:{rowspan:80},3:{rowspan:1999,colspan:2,cssClass:"cell-very-high"}}},12:{columns:{11:{rowspan:3}}},15:{columns:{18:{colspan:4,rowspan:3}}},85:{columns:{5:{rowspan:20}}}}),this.defineGrid()}attached(){this.loadData(500)}defineGrid(){this.columns=[{id:"title",name:"Title",field:"title",minWidth:80},{id:"revenueGrowth",name:"Revenue Growth",field:"revenueGrowth",exportCustomFormatter:I,formatter:P,type:"number",minWidth:120},{id:"pricingPolicy",name:"Pricing Policy",field:"pricingPolicy",minWidth:110,sortable:!0,exportCustomFormatter:I,formatter:P,type:"number"},{id:"policyIndex",name:"Policy Index",field:"policyIndex",minWidth:100,exportCustomFormatter:I,formatter:P,type:"number"},{id:"expenseControl",name:"Expense Control",field:"expenseControl",minWidth:110,exportCustomFormatter:I,formatter:P,type:"number"},{id:"excessCash",name:"Excess Cash",field:"excessCash",minWidth:100,exportCustomFormatter:I,formatter:P,type:"number"},{id:"netTradeCycle",name:"Net Trade Cycle",field:"netTradeCycle",minWidth:110,exportCustomFormatter:I,formatter:P,type:"number"},{id:"costCapital",name:"Cost of Capital",field:"costCapital",minWidth:100,exportCustomFormatter:I,formatter:P,type:"number"},{id:"revenueGrowth2",name:"Revenue Growth",field:"revenueGrowth2",exportCustomFormatter:I,formatter:P,type:"number",minWidth:120},{id:"pricingPolicy2",name:"Pricing Policy",field:"pricingPolicy2",minWidth:110,sortable:!0,exportCustomFormatter:I,formatter:P,type:"number"},{id:"policyIndex2",name:"Policy Index",field:"policyIndex2",minWidth:100,exportCustomFormatter:I,formatter:P,type:"number"},{id:"expenseControl2",name:"Expense Control",field:"expenseControl2",minWidth:110,exportCustomFormatter:I,formatter:P,type:"number"},{id:"excessCash2",name:"Excess Cash",field:"excessCash2",minWidth:100,exportCustomFormatter:I,formatter:P,type:"number"},{id:"netTradeCycle2",name:"Net Trade Cycle",field:"netTradeCycle2",minWidth:110,exportCustomFormatter:I,formatter:P,type:"number"},{id:"costCapital2",name:"Cost of Capital",field:"costCapital2",minWidth:100,exportCustomFormatter:I,formatter:P,type:"number"},{id:"revenueGrowth3",name:"Revenue Growth",field:"revenueGrowth3",exportCustomFormatter:I,formatter:P,type:"number",minWidth:120},{id:"pricingPolicy3",name:"Pricing Policy",field:"pricingPolicy3",minWidth:110,sortable:!0,exportCustomFormatter:I,formatter:P,type:"number"},{id:"policyIndex3",name:"Policy Index",field:"policyIndex3",minWidth:100,exportCustomFormatter:I,formatter:P,type:"number"},{id:"expenseControl3",name:"Expense Control",field:"expenseControl3",minWidth:110,exportCustomFormatter:I,formatter:P,type:"number"},{id:"excessCash3",name:"Excess Cash",field:"excessCash3",minWidth:100,exportCustomFormatter:I,formatter:P,type:"number"},{id:"netTradeCycle3",name:"Net Trade Cycle",field:"netTradeCycle3",minWidth:110,exportCustomFormatter:I,formatter:P,type:"number"},{id:"costCapital3",name:"Cost of Capital",field:"costCapital3",minWidth:100,exportCustomFormatter:I,formatter:P,type:"number"}],this.gridOptions={enableCellNavigation:!0,enableColumnReorder:!0,enableCellRowSpan:!0,enableHeaderMenu:!1,gridHeight:600,gridWidth:900,rowHeight:30,dataView:{globalItemMetadataProvider:{getRowMetadata:(e,i)=>this.renderDifferentColspan(e,i)}},enableExcelExport:!0,externalResources:[new G],rowTopOffsetRenderType:"top"}}clearScrollTo(){this.scrollToRow=0,document.querySelector("#nRow")?.focus()}loadData(e){this.dataLn="loading...",setTimeout(()=>{const i=[];for(let r=0;r<e;r++)i[r]={id:r,title:"Task "+r,revenueGrowth:Math.random()*Math.pow(10,Math.random()*3),pricingPolicy:Math.random()*Math.pow(10,Math.random()*3),policyIndex:Math.random()*Math.pow(10,Math.random()*3),expenseControl:Math.random()*Math.pow(10,Math.random()*3),excessCash:Math.random()*Math.pow(10,Math.random()*3),netTradeCycle:Math.random()*Math.pow(10,Math.random()*3),costCapital:Math.random()*Math.pow(10,Math.random()*3),revenueGrowth2:Math.random()*Math.pow(10,Math.random()*3),pricingPolicy2:Math.random()*Math.pow(10,Math.random()*3),policyIndex2:Math.random()*Math.pow(10,Math.random()*3),expenseControl2:Math.random()*Math.pow(10,Math.random()*3),excessCash2:Math.random()*Math.pow(10,Math.random()*3),netTradeCycle2:Math.random()*Math.pow(10,Math.random()*3),costCapital2:Math.random()*Math.pow(10,Math.random()*3),revenueGrowth3:Math.random()*Math.pow(10,Math.random()*3),pricingPolicy3:Math.random()*Math.pow(10,Math.random()*3),policyIndex3:Math.random()*Math.pow(10,Math.random()*3),expenseControl3:Math.random()*Math.pow(10,Math.random()*3),excessCash3:Math.random()*Math.pow(10,Math.random()*3),netTradeCycle3:Math.random()*Math.pow(10,Math.random()*3),costCapital3:Math.random()*Math.pow(10,Math.random()*3)};this.metadata[8].columns[3].rowspan=i.length-8,this.aureliaGrid?.dataView?.beginUpdate(),this.aureliaGrid?.dataView?.setItems(i),this.aureliaGrid?.dataView?.endUpdate(),this.dataLn=e},20)}renderDifferentColspan(e,i){return this.metadata[i]?.attributes?this.metadata[i]:this.metadata[i]={attributes:{"data-row":i},...this.metadata[i]}}handleToggleSpans(){const e=this.metadata[3].columns[1];e.colspan===1?(e.rowspan=3,e.colspan=2):(e.rowspan=5,e.colspan=1),this.aureliaGrid.slickGrid?.invalidateRows([3,4,5,6,7]),this.aureliaGrid.slickGrid?.render()}handleScrollTo(){return this.aureliaGrid.slickGrid?.scrollRowToTop(this.scrollToRow),!1}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}ws=UI();wa=ZI(ws,0,"Example44",gf,wa);QI(ws,1,wa);const JI=Object.freeze(Object.defineProperty({__proto__:null,get Example44(){return wa}},Symbol.toStringTag,{value:"Module"})),bf="example45",Zn=`<div id="demo-container" class="container-fluid">
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
    columns.bind="columns"
    options.bind="gridOptions"
    dataset.bind="dataset"
    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
  >
  </aurelia-slickgrid>
</div>
`,ff=[],vf={};let Lr;function XI(t){Lr||(Lr=E.define({name:bf,template:Zn,dependencies:ff,bindables:vf})),t.register(Lr)}const eG=Object.freeze(Object.defineProperty({__proto__:null,bindables:vf,default:Zn,dependencies:ff,name:bf,register:XI,template:Zn},Symbol.toStringTag,{value:"Module"}));var tG=Object.create,xs=Object.defineProperty,iG=Object.getOwnPropertyDescriptor,aG=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Ci=t=>{throw TypeError(t)},_f=(t,e,i)=>e in t?xs(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,zd=(t,e)=>xs(t,"name",{value:e,configurable:!0}),rG=t=>[,,,tG(null)],yf=["class","method","getter","setter","accessor","field","value","get","set"],Jt=t=>t!==void 0&&typeof t!="function"?Ci("Function expected"):t,nG=(t,e,i,r,a)=>({kind:yf[t],name:e,metadata:r,addInitializer:n=>i._?Ci("Already initialized"):a.push(Jt(n||null))}),oG=(t,e)=>_f(e,aG("metadata"),t[3]),Xt=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)e&1?n[a].call(i):r=n[a].call(i,r);return r},Ts=(t,e,i,r,a,n)=>{var l,d,u,s,m,o=e&7,g=!!(e&8),c=!!(e&16),p=o>3?t.length+1:o?g?1:2:0,_=yf[o+5],w=o>3&&(t[p-1]=[]),x=t[p]||(t[p]=[]),b=o&&(!c&&!g&&(a=a.prototype),o<5&&(o>3||!c)&&iG(o<4?a:{get[i](){return Nd(this,n)},set[i](h){return Wd(this,n,h)}},i));o?c&&o<4&&zd(n,(o>2?"set ":o>1?"get ":"")+i):zd(a,i);for(var y=r.length-1;y>=0;y--)s=nG(o,i,u={},t[3],x),o&&(s.static=g,s.private=c,m=s.access={has:c?h=>lG(a,h):h=>i in h},o^3&&(m.get=c?h=>(o^1?Nd:sG)(h,a,o^4?n:b.get):h=>h[i]),o>2&&(m.set=c?(h,S)=>Wd(h,a,S,o^4?n:b.set):(h,S)=>h[i]=S)),d=(0,r[y])(o?o<4?c?n:b[_]:o>4?void 0:{get:b.get,set:b.set}:a,s),u._=1,o^4||d===void 0?Jt(d)&&(o>4?w.unshift(d):o?c?n=d:b[_]=d:a=d):typeof d!="object"||d===null?Ci("Object expected"):(Jt(l=d.get)&&(b.get=l),Jt(l=d.set)&&(b.set=l),Jt(l=d.init)&&w.unshift(l));return o||oG(t,a),b&&xs(a,i,b),c?o^4?n:b:a},fe=(t,e,i)=>_f(t,typeof e!="symbol"?e+"":e,i),Es=(t,e,i)=>e.has(t)||Ci("Cannot "+i),lG=(t,e)=>Object(e)!==e?Ci('Cannot use the "in" operator on this value'):t.has(e),Nd=(t,e,i)=>(Es(t,e,"read from private field"),i?i.call(t):e.get(t)),Wd=(t,e,i,r)=>(Es(t,e,"write to private field"),r?r.call(t,i):e.set(t,i),i),sG=(t,e,i)=>(Es(t,e,"access private method"),i),Sf,Cf,wf,Re;const dG=250,cG=995;wf=[T(eG)],Cf=[O],Sf=[O];class wt{constructor(){fe(this,"_darkMode",!1),fe(this,"detailViewRowCount",Xt(Re,8,this,9)),Xt(Re,11,this),fe(this,"serverWaitDelay",Xt(Re,12,this,dG)),Xt(Re,15,this),fe(this,"columns",[]),fe(this,"gridOptions"),fe(this,"aureliaGrid"),fe(this,"dataset",[]),fe(this,"isUsingAutoHeight",!1),fe(this,"isUsingInnerGridStatePresets",!1),fe(this,"hideSubTitle",!1),this.defineGrid()}get rowDetailInstance(){return this.aureliaGrid?.extensionService.getExtensionInstanceByName("rowDetailView")}aureliaGridReady(e){this.aureliaGrid=e}attached(){this.dataset=this.getData(cG)}defineGrid(){this.columns=[{id:"companyId",name:"ID",field:"companyId",cssClass:"text-end",minWidth:50,maxWidth:50,filterable:!0,sortable:!0,type:"number"},{id:"companyName",name:"Company Name",field:"companyName",width:90,filterable:!0,sortable:!0},{id:"streetAddress",name:"Street Address",field:"streetAddress",minWidth:120,filterable:!0},{id:"city",name:"City",field:"city",minWidth:120,filterable:!0},{id:"zipCode",name:"Zip Code",field:"zipCode",minWidth:120,filterable:!0},{id:"country",name:"Country",field:"country",minWidth:120,filterable:!0}],this.gridOptions={autoResize:{container:"#demo-container",autoHeight:this.isUsingAutoHeight,rightPadding:20,bottomPadding:20},enableFiltering:!0,enableRowDetailView:!0,rowTopOffsetRenderType:"top",darkMode:this._darkMode,rowHeight:33,externalResources:[uo],rowDetailView:{process:e=>this.simulateServerAsyncCall(e),loadOnce:!1,useRowClick:!1,panelRows:this.detailViewRowCount,parentRef:this,preloadViewModel:ai,viewModel:ft}}}getData(e){const i=[];for(let r=0;r<e;r++)i[r]={id:r,companyId:r,companyName:ct.company.name(),city:ct.location.city(),streetAddress:ct.location.streetAddress(),zipCode:ct.location.zipCode("######"),country:ct.location.country(),orderData:[],isUsingInnerGridStatePresets:!1};return i}changeDetailViewRowCount(){if(this.aureliaGrid?.extensionService){const e=this.rowDetailInstance.getOptions();e?.panelRows&&(e.panelRows=this.detailViewRowCount,this.rowDetailInstance.setOptions(e))}}changeUsingInnerGridStatePresets(){return this.isUsingInnerGridStatePresets=!this.isUsingInnerGridStatePresets,this.closeAllRowDetail(),!0}changeUsingResizerAutoHeight(){return this.isUsingAutoHeight=!this.isUsingAutoHeight,this.aureliaGrid.slickGrid?.setOptions({autoResize:{...this.gridOptions.autoResize,autoHeight:this.isUsingAutoHeight}}),this.aureliaGrid.resizerService.resizeGrid(),!0}closeAllRowDetail(){this.rowDetailInstance?.collapseAll()}redrawAllRowDetail(){this.rowDetailInstance?.redrawAllViewSlots(!0)}simulateServerAsyncCall(e){let i=[];return e.id%3?i=[{orderId:"10261",shipCity:"Rio de Janeiro",freight:3.05,shipName:"Que Delícia"},{orderId:"10267",shipCity:"München",freight:208.58,shipName:"Frankenversand"},{orderId:"10281",shipCity:"Madrid",freight:2.94,shipName:"Romero y tomillo"}]:e.id%4?i=[{orderId:"10251",shipCity:"Lyon",freight:41.34,shipName:"Victuailles en stock"},{orderId:"10253",shipCity:"Rio de Janeiro",freight:58.17,shipName:"Hanari Carnes"},{orderId:"10256",shipCity:"Resende",freight:13.97,shipName:"Wellington Importadora"}]:e.id%5?i=[{orderId:"10265",shipCity:"Strasbourg",freight:55.28,shipName:"Blondel père et fils"},{orderId:"10277",shipCity:"Leipzig",freight:125.77,shipName:"Morgenstern Gesundkost"},{orderId:"10280",shipCity:"Luleå",freight:8.98,shipName:"Berglunds snabbköp"},{orderId:"10295",shipCity:"Reims",freight:1.15,shipName:"Vins et alcools Chevalier"}]:e.id%2?i=[{orderId:"10258",shipCity:"Graz",freight:140.51,shipName:"Ernst Handel"},{orderId:"10270",shipCity:"Oulu",freight:136.54,shipName:"Wartian Herkku"}]:i=[{orderId:"10255",shipCity:"Genève",freight:148.33,shipName:"Richter Supermarkt"}],new Promise(r=>{setTimeout(()=>{const a=e;a.orderData=i,a.isUsingInnerGridStatePresets=this.isUsingInnerGridStatePresets,r(a)},this.serverWaitDelay)})}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.aureliaGrid.slickGrid?.setOptions({darkMode:this._darkMode}),this.closeAllRowDetail()}toggleBodyBackground(){this._darkMode?(document.querySelector(".panel-wm-content").classList.add("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="dark"):(document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light")}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}Re=rG();Ts(Re,5,"detailViewRowCount",Cf,wt);Ts(Re,5,"serverWaitDelay",Sf,wt);wt=Ts(Re,0,"Example45",wf,wt);Xt(Re,1,wt);const uG=Object.freeze(Object.defineProperty({__proto__:null,get Example45(){return wt}},Symbol.toStringTag,{value:"Module"})),xf="example46",Jn=`<h2>
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
    columns.bind="columns"
    options.bind="gridOptions"
    dataset-hierarchical.bind="datasetHierarchical"
    instances.bind="aureliaGrid"
  >
  </aurelia-slickgrid>
</div>
`,Tf=[],Ef={};let zr;function mG(t){zr||(zr=E.define({name:xf,template:Jn,dependencies:Tf,bindables:Ef})),t.register(zr)}const pG=Object.freeze(Object.defineProperty({__proto__:null,bindables:Ef,default:Jn,dependencies:Tf,name:xf,register:mG,template:Jn},Symbol.toStringTag,{value:"Module"}));var hG=Object.create,$s=Object.defineProperty,gG=Object.getOwnPropertyDescriptor,bG=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),wi=t=>{throw TypeError(t)},$f=(t,e,i)=>e in t?$s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Bd=(t,e)=>$s(t,"name",{value:e,configurable:!0}),fG=t=>[,,,hG(null)],kf=["class","method","getter","setter","accessor","field","value","get","set"],ei=t=>t!==void 0&&typeof t!="function"?wi("Function expected"):t,vG=(t,e,i,r,a)=>({kind:kf[t],name:e,metadata:r,addInitializer:n=>i._?wi("Already initialized"):a.push(ei(n||null))}),_G=(t,e)=>$f(e,bG("metadata"),t[3]),Xn=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)e&1?n[a].call(i):r=n[a].call(i,r);return r},Of=(t,e,i,r,a,n)=>{var l,d,u,s,m,o=e&7,g=!!(e&8),c=!!(e&16),p=o>3?t.length+1:o?g?1:2:0,_=kf[o+5],w=o>3&&(t[p-1]=[]),x=t[p]||(t[p]=[]),b=o&&(!c&&!g&&(a=a.prototype),o<5&&(o>3||!c)&&gG(o<4?a:{get[i](){return jd(this,n)},set[i](h){return Vd(this,n,h)}},i));o?c&&o<4&&Bd(n,(o>2?"set ":o>1?"get ":"")+i):Bd(a,i);for(var y=r.length-1;y>=0;y--)s=vG(o,i,u={},t[3],x),o&&(s.static=g,s.private=c,m=s.access={has:c?h=>yG(a,h):h=>i in h},o^3&&(m.get=c?h=>(o^1?jd:SG)(h,a,o^4?n:b.get):h=>h[i]),o>2&&(m.set=c?(h,S)=>Vd(h,a,S,o^4?n:b.set):(h,S)=>h[i]=S)),d=(0,r[y])(o?o<4?c?n:b[_]:o>4?void 0:{get:b.get,set:b.set}:a,s),u._=1,o^4||d===void 0?ei(d)&&(o>4?w.unshift(d):o?c?n=d:b[_]=d:a=d):typeof d!="object"||d===null?wi("Object expected"):(ei(l=d.get)&&(b.get=l),ei(l=d.set)&&(b.set=l),ei(l=d.init)&&w.unshift(l));return o||_G(t,a),b&&$s(a,i,b),c?o^4?n:b:a},Z=(t,e,i)=>$f(t,typeof e!="symbol"?e+"":e,i),ks=(t,e,i)=>e.has(t)||wi("Cannot "+i),yG=(t,e)=>Object(e)!==e?wi('Cannot use the "in" operator on this value'):t.has(e),jd=(t,e,i)=>(ks(t,e,"read from private field"),i?i.call(t):e.get(t)),Vd=(t,e,i,r)=>(ks(t,e,"write to private field"),r?r.call(t,i):e.set(t,i),i),SG=(t,e,i)=>(ks(t,e,"access private method"),i),Df,Mf,xt;Mf=[T(pG)],Df=[O()];class li{constructor(){Z(this,"aureliaGrid"),Z(this,"gridOptions"),Z(this,"columns",[]),Z(this,"datasetHierarchical",[]),Z(this,"hideSubTitle",!1),Z(this,"isExcludingChildWhenFiltering",!1),Z(this,"isAutoApproveParentItemWhenTreeColumnIsValid",!0),Z(this,"isAutoRecalcTotalsOnFilterChange",!1),Z(this,"isRemoveLastInsertedPopSongDisabled",!0),Z(this,"lastInsertedPopSongId"),Z(this,"serverApiDelay",1e3),Z(this,"searchString",Xn(xt,8,this,"")),Xn(xt,11,this),this.defineGrid()}attached(){this.datasetHierarchical=this.mockDataset()}defineGrid(){this.columns=[{id:"chapterName",name:"Chapter",field:"chapterName",width:150,formatter:f.tree,filterable:!0,sortable:!0},{id:"label",name:"Label",field:"label",minWidth:90,formatter:this.coloredTextFormatter,filterable:!0,sortable:!0},{id:"description",name:"Description",field:"description",minWidth:90,formatter:this.coloredTextFormatter,filterable:!0,sortable:!0},{id:"pageNumber",name:"Page Number",field:"pageNumber",minWidth:90,type:"number",exportWithFormatter:!0,excelExportOptions:{autoDetectCellFormat:!1},filterable:!0,filter:{model:v.compoundInputNumber}},{id:"dateModified",name:"Last Date Modified",field:"dateModified",formatter:f.date,params:{dateFormat:"MMM DD, YYYY, h:mm:ss a"},type:"dateUtc",outputType:"dateTimeIso",minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:v.compoundDate}}],this.gridOptions={autoResize:{autoHeight:!1,container:"#demo-container",rightPadding:10},enableAutoSizeColumns:!0,enableAutoResize:!0,enableCellNavigation:!0,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!0,sanitizeDataExport:!0},enableTextExport:!0,textExportOptions:{exportWithFormatter:!0,sanitizeDataExport:!0},enableCheckboxSelector:!0,enableSelection:!0,multiSelect:!1,checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0,onRowToggleStart:(e,i)=>console.log("onBeforeRowToggle",i),onSelectAllToggleStart:()=>this.aureliaGrid.treeDataService.toggleTreeDataCollapse(!1,!1)},selectionOptions:{selectActiveRow:!1},externalResources:[new G,new Da],enableFiltering:!0,enableTreeData:!0,multiColumnSort:!1,rowHeight:35,showCustomFooter:!0,treeDataOptions:{columnId:"chapterName",childrenPropName:"chapters",initiallyCollapsed:!0,lazy:!0,onLazyLoad:(e,i,r)=>{setTimeout(()=>{e.label==="lazy fetch will FAIL"?(r(),tn("Lazy fetching failed","danger")):i(this.getChaptersByParentNode(e))},this.serverApiDelay)}}}}clearSearch(){this.searchString=""}searchStringChanged(){this.updateFilter()}updateFilter(){this.aureliaGrid.filterService.updateFilters([{columnId:"label",searchTerms:[this.searchString]}],!0,!1,!0)}clearFilters(){this.clearSearch(),this.aureliaGrid.filterService.clearFilters()}collapseAll(){this.aureliaGrid.treeDataService.toggleTreeDataCollapse(!0)}expandAll(){this.aureliaGrid.treeDataService.toggleTreeDataCollapse(!1)}mockDataset(){return[{id:this.generateGUID(),chapterName:"Chapter 1",label:"The intro",chapters:[],description:"it's all about the introduction",pageNumber:2,dateModified:"2024-03-05T12:44:00.123Z"},{id:this.generateGUID(),chapterName:"Chapter 2",label:"Where it all started",chapters:[],description:"hometown to the big city",pageNumber:50,dateModified:"2024-04-23T08:33:00.123Z"},{id:this.generateGUID(),chapterName:"Chapter 3",label:"Here I come...",chapters:[],description:"here comes a wall",pageNumber:78,dateModified:"2024-05-05T12:22:00.123Z"},{id:this.generateGUID(),chapterName:"Chapter 4",label:"Are we there yet?",chapters:[],description:"soon...",pageNumber:120,dateModified:"2024-04-29T10:24:00.123Z"},{id:this.generateGUID(),chapterName:"Chapter 5",label:"The finale",chapters:[],description:"the end is near!",pageNumber:155,dateModified:"2024-06-21T07:22:00.123Z"},{id:this.generateGUID(),chapterName:"Chapter 6",label:"End",pageNumber:156,dateModified:"2024-06-22T07:22:00.123Z"},{id:this.generateGUID(),chapterName:"Chapter X",label:"lazy fetch will FAIL",chapters:[],description:"...demo an API call error!!!",pageNumber:999,dateModified:"2024-09-28T00:22:00.123Z",textColor:"color-danger"}]}getChaptersByParentNode(e){const i=this.prefixDots(e.chapterName.length-6);return[{id:this.generateGUID(),chapterName:`${e.chapterName}.1`,label:`${i}${e.chapterName?.toLowerCase()}.1`,chapters:[],pageNumber:e.pageNumber+1},{id:this.generateGUID(),chapterName:`${e.chapterName}.2`,label:`${i}${e.chapterName?.toLowerCase()}.2`,chapters:[],pageNumber:e.pageNumber+2},{id:this.generateGUID(),chapterName:`${e.chapterName}.3`,label:`${i}${e.chapterName?.toLowerCase()}.3`,pageNumber:e.pageNumber+3}]}coloredTextFormatter(e,i,r,a,n){if(n.textColor){const l=document.createElement("span");return l.className=n.textColor,l.textContent=r,l}return r}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}generateGUID(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const i=Math.random()*16|0;return(e==="x"?i:i&3|8).toString(16)})}prefixDots(e){let i="";for(let r=0;r<e;r++)i+=".";return i}}xt=fG();Of(xt,5,"searchString",Df,li);li=Of(xt,0,"Example46",Mf,li);Xn(xt,1,li);const CG=Object.freeze(Object.defineProperty({__proto__:null,get Example46(){return li}},Symbol.toStringTag,{value:"Module"})),Pf="example47",eo=`<h2>
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
    columns.bind="columns"
    options.bind="gridOptions"
    dataset.bind="dataset"
    extensions.bind="extensions"
    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
  >
  </aurelia-slickgrid>
</div>
`,If=[],Gf={};let Nr;function wG(t){Nr||(Nr=E.define({name:Pf,template:eo,dependencies:If,bindables:Gf})),t.register(Nr)}const xG=Object.freeze(Object.defineProperty({__proto__:null,bindables:Gf,default:eo,dependencies:If,name:Pf,register:wG,template:eo},Symbol.toStringTag,{value:"Module"}));var TG=Object.create,Os=Object.defineProperty,EG=Object.getOwnPropertyDescriptor,$G=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),xi=t=>{throw TypeError(t)},Ff=(t,e,i)=>e in t?Os(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Hd=(t,e)=>Os(t,"name",{value:e,configurable:!0}),kG=t=>[,,,TG(null)],Af=["class","method","getter","setter","accessor","field","value","get","set"],ti=t=>t!==void 0&&typeof t!="function"?xi("Function expected"):t,OG=(t,e,i,r,a)=>({kind:Af[t],name:e,metadata:r,addInitializer:n=>i._?xi("Already initialized"):a.push(ti(n||null))}),DG=(t,e)=>Ff(e,$G("metadata"),t[3]),ii=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)e&1?n[a].call(i):r=n[a].call(i,r);return r},Ds=(t,e,i,r,a,n)=>{var l,d,u,s,m,o=e&7,g=!!(e&8),c=!!(e&16),p=o>3?t.length+1:o?g?1:2:0,_=Af[o+5],w=o>3&&(t[p-1]=[]),x=t[p]||(t[p]=[]),b=o&&(!c&&!g&&(a=a.prototype),o<5&&(o>3||!c)&&EG(o<4?a:{get[i](){return Ud(this,n)},set[i](h){return qd(this,n,h)}},i));o?c&&o<4&&Hd(n,(o>2?"set ":o>1?"get ":"")+i):Hd(a,i);for(var y=r.length-1;y>=0;y--)s=OG(o,i,u={},t[3],x),o&&(s.static=g,s.private=c,m=s.access={has:c?h=>MG(a,h):h=>i in h},o^3&&(m.get=c?h=>(o^1?Ud:PG)(h,a,o^4?n:b.get):h=>h[i]),o>2&&(m.set=c?(h,S)=>qd(h,a,S,o^4?n:b.set):(h,S)=>h[i]=S)),d=(0,r[y])(o?o<4?c?n:b[_]:o>4?void 0:{get:b.get,set:b.set}:a,s),u._=1,o^4||d===void 0?ti(d)&&(o>4?w.unshift(d):o?c?n=d:b[_]=d:a=d):typeof d!="object"||d===null?xi("Object expected"):(ti(l=d.get)&&(b.get=l),ti(l=d.set)&&(b.set=l),ti(l=d.init)&&w.unshift(l));return o||DG(t,a),b&&Os(a,i,b),c?o^4?n:b:a},le=(t,e,i)=>Ff(t,typeof e!="symbol"?e+"":e,i),Ms=(t,e,i)=>e.has(t)||xi("Cannot "+i),MG=(t,e)=>Object(e)!==e?xi('Cannot use the "in" operator on this value'):t.has(e),Ud=(t,e,i)=>(Ms(t,e,"read from private field"),i?i.call(t):e.get(t)),qd=(t,e,i,r)=>(Ms(t,e,"write to private field"),r?r.call(t,i):e.set(t,i),i),PG=(t,e,i)=>(Ms(t,e,"access private method"),i),Rf,Lf,zf,Le;const IG=250,GG=1200;zf=[T(xG)],Lf=[O],Rf=[O];class Tt{constructor(){le(this,"_darkMode",!1),le(this,"detailViewRowCount",ii(Le,8,this,9)),ii(Le,11,this),le(this,"serverWaitDelay",ii(Le,12,this,IG)),ii(Le,15,this),le(this,"aureliaGrid"),le(this,"dataviewObj"),le(this,"gridObj"),le(this,"gridOptions"),le(this,"columns",[]),le(this,"dataset",[]),le(this,"hideSubTitle",!1),le(this,"message",""),this.defineGrid()}get rowDetailInstance(){return this.aureliaGrid?.extensionService.getExtensionInstanceByName(Hv.rowDetailView)}attached(){this.getData()}detaching(){document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light"}aureliaGridReady(e){this.aureliaGrid=e,this.dataviewObj=e.dataView,this.gridObj=e.slickGrid,this.groupByDuration()}defineGrid(){this.columns=[{id:"title",name:"Title",field:"title",sortable:!0,width:70,filterable:!0,editor:{model:C.text}},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,type:"number",minWidth:90,filterable:!0},{id:"%",name:"% Complete",field:"percentComplete",minWidth:200,width:250,resizable:!1,filterable:!0,sortable:!0,type:"number",formatter:f.percentCompleteBar,groupTotalsFormatter:V.avgTotalsPercentage,params:{groupFormatterPrefix:"<i>Avg</i>: "}},{id:"start",name:"Start",field:"start",formatter:f.dateIso,sortable:!0,type:"date",minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:v.compoundDate}},{id:"finish",name:"Finish",field:"finish",formatter:f.dateIso,sortable:!0,type:"date",minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:v.compoundDate}},{id:"cost",name:"Cost",field:"cost",minWidth:70,width:80,sortable:!0,filterable:!0,filter:{model:v.compoundInputNumber},type:"number",formatter:f.dollar,groupTotalsFormatter:V.sumTotalsDollarBold},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",minWidth:100,formatter:f.checkmarkMaterial,type:"boolean",filterable:!0,sortable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:v.singleSelect}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:!0,enableGrouping:!0,enableRowDetailView:!0,rowTopOffsetRenderType:"top",darkMode:this._darkMode,externalResources:[uo],rowDetailView:{process:e=>this.simulateServerAsyncCall(e),loadOnce:!0,singleRowExpand:!1,panelRows:this.detailViewRowCount,preloadViewModel:pt,viewModel:Se,parentRef:this},selectionOptions:{selectActiveRow:!0}}}getData(){const e=[];for(let i=0;i<GG;i++){const r=2e3+Math.floor(Math.random()*10),a=Math.floor(Math.random()*11),n=Math.floor(Math.random()*29),l=Math.round(Math.random()*100),d=Math.round(Math.random()*1e4)/100;e[i]={id:i,title:"Task "+i,duration:Math.floor(Math.random()*100),percentComplete:l,start:new Date(r,a,n),finish:new Date(r,a+1,n),cost:i%3?d:-d,effortDriven:i%5===0}}this.dataset=e}changeDetailViewRowCount(){const e=this.rowDetailInstance.getOptions();e&&e.panelRows&&(e.panelRows=this.detailViewRowCount,this.rowDetailInstance.setOptions(e))}closeAllRowDetail(){this.rowDetailInstance.collapseAll()}clearGrouping(){this.dataviewObj.setGrouping([])}collapseAllGroups(){this.dataviewObj.collapseAllGroups()}expandAllGroups(){this.dataviewObj.expandAllGroups()}groupByDuration(){this.aureliaGrid.filterService.setSortColumnIcons([{columnId:"duration",sortAsc:!0}]),this.dataviewObj.setGrouping({getter:"duration",formatter:e=>`Duration: ${e.value} <span style="color:green">(${e.count} items)</span>`,comparer:(e,i)=>ue.numeric(e.value,i.value,si.asc),aggregators:[new k.Avg("percentComplete"),new k.Sum("cost")],aggregateCollapsed:!1,lazyTotalsCalculation:!0}),this.gridObj.invalidate()}groupByDurationEffortDriven(){const e=[{columnId:"duration",sortAsc:!0},{columnId:"effortDriven",sortAsc:!0}];this.aureliaGrid.filterService.setSortColumnIcons(e),this.dataviewObj.setGrouping([{getter:"duration",formatter:i=>`Duration: ${i.value} <span style="color:green">(${i.count} items)</span>`,aggregators:[new k.Sum("duration"),new k.Sum("cost")],aggregateCollapsed:!0,lazyTotalsCalculation:!0},{getter:"effortDriven",formatter:i=>`Effort-Driven: ${i.value?"True":"False"} <span style="color:green">(${i.count} items)</span>`,aggregators:[new k.Avg("percentComplete"),new k.Sum("cost")],collapsed:!0,lazyTotalsCalculation:!0}]),this.gridObj.invalidate()}simulateServerAsyncCall(e){const i=["John Doe","Jane Doe","Chuck Norris","Bumblebee","Jackie Chan","Elvis Presley","Bob Marley","Mohammed Ali","Bruce Lee","Rocky Balboa"];return new Promise(r=>{setTimeout(()=>{const a=e;a.assignee=i[this.randomNumber(0,9)]||"",a.reporter=i[this.randomNumber(0,9)]||"",r(a)},this.serverWaitDelay)})}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.aureliaGrid.slickGrid?.setOptions({darkMode:this._darkMode}),this.closeAllRowDetail()}toggleBodyBackground(){this._darkMode?(document.querySelector(".panel-wm-content").classList.add("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="dark"):(document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light")}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}randomNumber(e,i){return Math.floor(Math.random()*(i-e+1)+e)}}Le=kG();Ds(Le,5,"detailViewRowCount",Lf,Tt);Ds(Le,5,"serverWaitDelay",Rf,Tt);Tt=Ds(Le,0,"Example47",zf,Tt);ii(Le,1,Tt);const FG=Object.freeze(Object.defineProperty({__proto__:null,get Example47(){return Tt}},Symbol.toStringTag,{value:"Module"})),Nf="example48",to=`<h2>
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
    columns.bind="columns1"
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
  columns.bind="columns2"
  options.bind="gridOptions2"
  dataset.bind="dataset2"
  on-aurelia-grid-created.trigger="aureliaGridReady2($event.detail)"
>
</aurelia-slickgrid>
`,Wf=[],Bf={};let Wr;function AG(t){Wr||(Wr=E.define({name:Nf,template:to,dependencies:Wf,bindables:Bf})),t.register(Wr)}const RG=Object.freeze(Object.defineProperty({__proto__:null,bindables:Bf,default:to,dependencies:Wf,name:Nf,register:AG,template:to},Symbol.toStringTag,{value:"Module"}));var LG=Object.create,Ps=Object.defineProperty,zG=Object.getOwnPropertyDescriptor,NG=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),jf=t=>{throw TypeError(t)},Vf=(t,e,i)=>e in t?Ps(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,WG=(t,e)=>Ps(t,"name",{value:e,configurable:!0}),BG=t=>[,,,LG(null)],jG=["class","method","getter","setter","accessor","field","value","get","set"],Hf=t=>t!==void 0&&typeof t!="function"?jf("Function expected"):t,VG=(t,e,i,r,a)=>({kind:jG[t],name:e,metadata:r,addInitializer:n=>i._?jf("Already initialized"):a.push(Hf(n||null))}),HG=(t,e)=>Vf(e,NG("metadata"),t[3]),UG=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},qG=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&zG(a,i));WG(a,i);for(var p=r.length-1;p>=0;p--)u=VG(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,Hf(l)&&(a=l);return HG(t,a),c&&Ps(a,i,c),m?s^4?n:c:a},ve=(t,e,i)=>Vf(t,typeof e!="symbol"?e+"":e,i),Uf,Is;const Yd=995;Uf=[T(RG)];class xa{constructor(){ve(this,"_eventHandler"),ve(this,"aureliaGrid1"),ve(this,"aureliaGrid2"),ve(this,"columns1",[]),ve(this,"columns2",[]),ve(this,"gridOptions1"),ve(this,"gridOptions2"),ve(this,"dataset1"),ve(this,"dataset2"),ve(this,"hideSubTitle",!1),this._eventHandler=new Qd,this.defineGrids()}attached(){this.dataset1=this.mockData(Yd),this.dataset2=this.mockData(Yd)}aureliaGridReady1(e){this.aureliaGrid1=e;const i=e.slickGrid.getSelectionModel();this._eventHandler.subscribe(i.onSelectedRangesChanged,(r,a)=>{const n=document.querySelector("#selectionRange1");if(n){n.textContent="";for(const l of a)n.textContent+=JSON.stringify(l)}})}aureliaGridReady2(e){this.aureliaGrid2=e;const i=e.slickGrid.getSelectionModel();this._eventHandler.subscribe(i.onSelectedRangesChanged,(r,a)=>{const n=document.querySelector("#selectionRange2");if(n){n.textContent="";for(const l of a)n.textContent+=JSON.stringify(l)}})}defineGrids(){this.columns1=[{id:"id",name:"#",field:"id",width:32,maxWidth:40,excludeFromHeaderMenu:!0},{id:"title",name:"Title",field:"title",width:90,cssClass:"cell-title"},{id:"complete",name:"% Complete",field:"percentComplete",sortable:!0,width:90},{id:"start",name:"Start",field:"start",type:"date",sortable:!0,formatter:f.dateUs},{id:"finish",name:"Finish",field:"finish",type:"date",sortable:!0,formatter:f.dateUs},{id:"priority",name:"Priority",field:"priority",width:80,resizable:!1,sortable:!0,type:"number",sortComparer:(e,i,r)=>(r??0)*(e===i?0:e>i?1:-1),formatter:(e,i,r)=>{if(!r)return"";const a=+(r>=3?3:r);return a===3?"High":a===2?"Medium":"Low"}},{id:"effortDriven",name:"Effort Driven",field:"effortDriven",cssClass:"text-center",width:95,maxWidth:120,type:"boolean",sortable:!0,exportCustomFormatter:(e,i,r)=>r?"Yes":"No",formatter:f.checkmarkMaterial}],this.columns2=[...this.columns1],this.gridOptions1={autoResize:{container:".demo-container"},gridHeight:250,gridWidth:800,enableCellNavigation:!0,autoEdit:!0,editable:!0,headerRowHeight:35,rowHeight:35,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!0},externalResources:[new G],enableSelection:!0,selectionOptions:{rowSelectColumnIds:["id"],selectionType:"mixed"},enableExcelCopyBuffer:!0,excelCopyBufferOptions:{copyActiveEditorCell:!0,removeDoubleQuotesOnPaste:!0,replaceNewlinesWith:" "}},this.gridOptions2={...this.gridOptions1,enableCheckboxSelector:!0,enableSelection:!0,selectionOptions:{selectActiveRow:!1,selectionType:"row",dragToSelect:!0}}}mockData(e){const i=[];for(let r=0;r<e;r++){const a=2e3+Math.floor(Math.random()*10),n=Math.floor(Math.random()*11),l=Math.floor(Math.random()*29),d=a+Math.floor(Math.random()*10),u=new Date(d,n+1,l);i[r]={id:r,title:"Task "+r,duration:Math.floor(Math.random()*25)+" days",percentComplete:Math.floor(Math.random()*100),start:new Date(a,n,l,l),finish:u,priority:r%3?2:r%5?3:1,effortDriven:r%4===0}}return i}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden")}}Is=BG();xa=qG(Is,0,"Example48",Uf,xa);UG(Is,1,xa);const YG=Object.freeze(Object.defineProperty({__proto__:null,get Example48(){return xa}},Symbol.toStringTag,{value:"Module"})),qf="example49",io=`<div class="demo49">
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
      columns.bind="columns"
      options.bind="gridOptions"
      dataset.bind="dataset"
      on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
      on-drag-replace-cells.trigger="copyDraggedCellRange($event.detail.args)"
    >
    </aurelia-slickgrid>
  </div>
</div>
`,Yf=[],Kf={};let Br;function KG(t){Br||(Br=E.define({name:qf,template:io,dependencies:Yf,bindables:Kf})),t.register(Br)}const QG=Object.freeze(Object.defineProperty({__proto__:null,bindables:Kf,default:io,dependencies:Yf,name:qf,register:KG,template:io},Symbol.toStringTag,{value:"Module"}));var ZG=Object.create,Gs=Object.defineProperty,JG=Object.getOwnPropertyDescriptor,XG=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Qf=t=>{throw TypeError(t)},Zf=(t,e,i)=>e in t?Gs(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,eF=(t,e)=>Gs(t,"name",{value:e,configurable:!0}),tF=t=>[,,,ZG(null)],iF=["class","method","getter","setter","accessor","field","value","get","set"],Jf=t=>t!==void 0&&typeof t!="function"?Qf("Function expected"):t,aF=(t,e,i,r,a)=>({kind:iF[t],name:e,metadata:r,addInitializer:n=>i._?Qf("Already initialized"):a.push(Jf(n||null))}),rF=(t,e)=>Zf(e,XG("metadata"),t[3]),nF=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},oF=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&JG(a,i));eF(a,i);for(var p=r.length-1;p>=0;p--)u=aF(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,Jf(l)&&(a=l);return rF(t,a),c&&Gs(a,i,c),m?s^4?n:c:a},dt=(t,e,i)=>Zf(t,typeof e!="symbol"?e+"":e,i),Xf,Fs;const Kd=100;Xf=[T(QG)];class Ta{constructor(){dt(this,"_darkMode",!1),dt(this,"aureliaGrid"),dt(this,"columns",[]),dt(this,"gridOptions"),dt(this,"dataset"),dt(this,"hideSubTitle",!1),this.defineGrid()}attached(){this.dataset=this.getData(Kd)}detaching(){document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light"}aureliaGridReady(e){this.aureliaGrid=e}defineGrid(){this.columns=[{id:"selector",name:"",field:"num",width:30}];for(let e=0;e<Kd;e++)this.columns.push({id:e,name:e<26?String.fromCharCode(65+e%26):String.fromCharCode(65+Math.floor(e/26)-1)+String.fromCharCode(65+e%26),field:String(e),minWidth:60,width:60,editor:{model:C.text}});this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableCellNavigation:!0,autoEdit:!0,autoCommitEdit:!0,darkMode:this._darkMode,editable:!0,headerRowHeight:35,editorNavigateOnArrows:!0,enableSelection:!0,selectionOptions:{rowSelectColumnIds:["selector"],selectActiveRow:!0,selectionType:"mixed"},enableExcelCopyBuffer:!0,excelCopyBufferOptions:{copyActiveEditorCell:!0,removeDoubleQuotesOnPaste:!0,replaceNewlinesWith:" "}}}copyDraggedCellRange(e){const i=ot.verticalTargetRange(e.prevSelectedRange,e.selectedRange),r=ot.horizontalTargetRange(e.prevSelectedRange,e.selectedRange),a=ot.cornerTargetRange(e.prevSelectedRange,e.selectedRange);i&&ot.copyCellsToTargetRange(e.prevSelectedRange,i,e.grid),r&&ot.copyCellsToTargetRange(e.prevSelectedRange,r,e.grid),a&&ot.copyCellsToTargetRange(e.prevSelectedRange,a,e.grid)}getData(e){const i=[];for(let r=0;r<e;r++){const a=i[r]={};a.id=r,a.num=r}return i}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.aureliaGrid.slickGrid?.setOptions({darkMode:this._darkMode})}toggleBodyBackground(){this._darkMode?(document.querySelector(".panel-wm-content").classList.add("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="dark"):(document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light")}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}Fs=tF();Ta=oF(Fs,0,"Example49",Xf,Ta);nF(Fs,1,Ta);const lF=Object.freeze(Object.defineProperty({__proto__:null,get Example49(){return Ta}},Symbol.toStringTag,{value:"Module"})),ev="example50",ao=`<h2>
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
    columns.bind="columns1"
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
<aurelia-slickgrid grid-id="grid50-2" columns.bind="columns2" options.bind="gridOptions2" dataset.bind="dataset2"> </aurelia-slickgrid>
`,tv=[],iv={};let jr;function sF(t){jr||(jr=E.define({name:ev,template:ao,dependencies:tv,bindables:iv})),t.register(jr)}const dF=Object.freeze(Object.defineProperty({__proto__:null,bindables:iv,default:ao,dependencies:tv,name:ev,register:sF,template:ao},Symbol.toStringTag,{value:"Module"}));var cF=Object.create,As=Object.defineProperty,uF=Object.getOwnPropertyDescriptor,mF=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),av=t=>{throw TypeError(t)},rv=(t,e,i)=>e in t?As(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,pF=(t,e)=>As(t,"name",{value:e,configurable:!0}),hF=t=>[,,,cF(null)],gF=["class","method","getter","setter","accessor","field","value","get","set"],nv=t=>t!==void 0&&typeof t!="function"?av("Function expected"):t,bF=(t,e,i,r,a)=>({kind:gF[t],name:e,metadata:r,addInitializer:n=>i._?av("Already initialized"):a.push(nv(n||null))}),fF=(t,e)=>rv(e,mF("metadata"),t[3]),vF=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},_F=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&uF(a,i));pF(a,i);for(var p=r.length-1;p>=0;p--)u=bF(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,nv(l)&&(a=l);return fF(t,a),c&&As(a,i,c),m?s^4?n:c:a},Fe=(t,e,i)=>rv(t,typeof e!="symbol"?e+"":e,i),ov,Rs;ov=[T(dF)];class Ea{constructor(){Fe(this,"aureliaGrid1"),Fe(this,"gridOptions1"),Fe(this,"gridOptions2"),Fe(this,"columns1",[]),Fe(this,"columns2",[]),Fe(this,"dataset1",[]),Fe(this,"dataset2",[]),Fe(this,"hideSubTitle",!1),Fe(this,"selectedName",""),this.defineGrids()}attached(){this.dataset1=this.mockMasterData(),this.aureliaGrid1.slickGrid?.setSelectedRows([0]),this.selectedName=`${this.dataset1[0].name} - ${this.dataset1[0].company}`,this.dataset2=this.mockDetailData(this.dataset1[0])}aureliaGridReady1(e){this.aureliaGrid1=e}defineGrids(){this.columns1=[{id:"name",name:"Customer Name",field:"name",sortable:!0,minWidth:100,filterable:!0},{id:"company",name:"Company Name",field:"company",minWidth:100,sortable:!0},{id:"address",name:"Address",field:"address",sortable:!0,minWidth:100},{id:"country",name:"Country",field:"country",sortable:!0}],this.gridOptions1={enableAutoResize:!1,gridHeight:225,gridWidth:800,rowHeight:33,enableSelection:!0,selectionOptions:{selectionType:"row"}},this.columns2=[{id:"orderId",field:"orderId",name:"Order ID",sortable:!0,width:50},{id:"freight",field:"freight",name:"Freight",sortable:!0,width:50,type:"number",formatter:f.dollar},{id:"name",field:"name",name:"Ship Company",sortable:!0},{id:"city",field:"city",name:"Ship City",sortable:!0,width:60},{id:"country",field:"country",name:"Ship Country",sortable:!0,width:60},{id:"address",field:"address",name:"Ship Address",sortable:!0}],this.gridOptions2={gridWidth:950,autoResize:{container:".demo-container",autoHeight:!0,minHeight:150},enableSorting:!0,rowHeight:38,enableCellNavigation:!0,datasetIdPropertyName:"orderId"}}handleOnCellClicked(e){const i=this.aureliaGrid1?.slickGrid?.getDataItem(e.row);i&&(this.aureliaGrid1?.slickGrid?.setSelectedRows([e.row]),this.dataset2=this.mockDetailData(i),this.selectedName=`${i.name} - ${i.company}`)}mockMasterData(){return[{id:0,name:"Jerome Aufderhar",company:"Morissette Inc",address:"1808 Koss Road",country:"Switzerland"},{id:1,name:"Angeline Gislason",company:"Moen, Dooley and Champlin",address:"6093 Mante Shoals",country:"Denmark"},{id:2,name:"Dean Gibson",company:"Champlin - Schoen & Co",address:"601 Beach Road",country:"United Kingdom"},{id:3,name:"Sherwood Collins",company:"Watsica, Smitham and Willms",address:"213 Whitney Land",country:"Australia"},{id:4,name:"Colleen Gutmann",company:"Ledner, Schiller and Leuschke",address:"19263 Church Close",country:"Germany"}]}mockDetailData(e){let i=[];return e.id===0?i=[{orderId:10355,freight:41.95,name:e.company,city:"Zurich",country:e.country,address:"31152 Elfrieda Rapid"},{orderId:10383,freight:32.39,name:e.company,city:"Winterthur",country:e.country,address:"3436 Durgan Spur"},{orderId:10452,freight:28.98,name:e.company,city:"Zurich",country:e.country,address:"655 Joseph Cape"},{orderId:10662,freight:21.35,name:e.company,city:"Genève",country:e.country,address:"51019 Airport Road"}]:e.id===1?i=[{orderId:10278,freight:37.62,name:e.company,city:"Copenhagen",country:e.country,address:"436 Hills Spring"},{orderId:10280,freight:50.95,name:e.company,city:"Copenhagen",country:e.country,address:"8730 Nikki Highway"},{orderId:10384,freight:13.39,name:e.company,city:"Aalborg",country:e.country,address:"5277 Kings Highway"},{orderId:10444,freight:58.8,name:e.company,city:"Odense",country:e.country,address:"413 Hilpert Union"},{orderId:10445,freight:23.33,name:e.company,city:"Aarhus",country:e.country,address:"85836 Osinski Mountains"}]:e.id===2?i=[{orderId:10265,freight:55.75,name:e.company,city:"London",country:e.country,address:"28077 Paolo Shoal"},{orderId:10297,freight:88.92,name:e.company,city:"Cambridge",country:e.country,address:"309 Nolan Islands"},{orderId:10449,freight:79.1,name:e.company,city:"Manchester",country:e.country,address:"992 Jeromy Inlet"}]:e.id===3?i=[{orderId:10254,freight:94.22,name:e.company,city:"Perth",country:e.country,address:"261 Kaia Parks"},{orderId:10370,freight:90.52,name:e.company,city:"Sydney",country:e.country,address:"62373 Mina Bridge"},{orderId:10519,freight:77.95,name:e.company,city:"Gold Coast",country:e.country,address:"863 Alysson Rest"},{orderId:10731,freight:94.89,name:e.company,city:"Brisbane",country:e.country,address:"2322 Pines Drive"},{orderId:10746,freight:51.44,name:e.company,city:"Melbourne",country:e.country,address:"9764 Oak Street"}]:e.id===4&&(i=[{orderId:10258,freight:47.04,name:e.company,city:"Hamburg",country:e.country,address:"4600 Kirlin Oval"},{orderId:10263,freight:62.95,name:e.company,city:"Berlin",country:e.country,address:"592 Parkway Drive"},{orderId:10368,freight:59.47,name:e.company,city:"Munich",country:e.country,address:"785 Memorial Blvd."},{orderId:10382,freight:65.19,name:e.company,city:"Frankfurt",country:e.country,address:"9839 Warren"}]),i}}Rs=hF();Ea=_F(Rs,0,"Example50",ov,Ea);vF(Rs,1,Ea);const yF=Object.freeze(Object.defineProperty({__proto__:null,get Example50(){return Ea}},Symbol.toStringTag,{value:"Module"})),lv="example51",ro=`<div class="grid51-container">
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
      columns.bind="columns"
      options.bind="gridOptions"
      dataset.bind="dataset"
      on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
    >
    </aurelia-slickgrid>
  </div>
</div>
`,sv=[],dv={};let Vr;function SF(t){Vr||(Vr=E.define({name:lv,template:ro,dependencies:sv,bindables:dv})),t.register(Vr)}const CF=Object.freeze(Object.defineProperty({__proto__:null,bindables:dv,default:ro,dependencies:sv,name:lv,register:SF,template:ro},Symbol.toStringTag,{value:"Module"}));var wF=Object.create,Ls=Object.defineProperty,xF=Object.getOwnPropertyDescriptor,TF=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),cv=t=>{throw TypeError(t)},uv=(t,e,i)=>e in t?Ls(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,EF=(t,e)=>Ls(t,"name",{value:e,configurable:!0}),$F=t=>[,,,wF(null)],kF=["class","method","getter","setter","accessor","field","value","get","set"],mv=t=>t!==void 0&&typeof t!="function"?cv("Function expected"):t,OF=(t,e,i,r,a)=>({kind:kF[t],name:e,metadata:r,addInitializer:n=>i._?cv("Already initialized"):a.push(mv(n||null))}),DF=(t,e)=>uv(e,TF("metadata"),t[3]),MF=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},PF=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&xF(a,i));EF(a,i);for(var p=r.length-1;p>=0;p--)u=OF(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,mv(l)&&(a=l);return DF(t,a),c&&Ls(a,i,c),m?s^4?n:c:a},Rt=(t,e,i)=>uv(t,typeof e!="symbol"?e+"":e,i),pv,zs;const IF=4e3;pv=[T(CF)];class $a{constructor(){Rt(this,"aureliaGrid"),Rt(this,"columns",[]),Rt(this,"gridOptions"),Rt(this,"dataset"),Rt(this,"hideSubTitle",!1),this.defineGrid()}attached(){this.dataset=this.loadData(IF)}aureliaGridReady(e){this.aureliaGrid=e}defineGrid(){this.columns=[{id:"title",name:"Title",field:"title",sortable:!0,filterable:!0,minWidth:100,header:{menu:{commandItems:[{command:"sort-asc",title:"Sort Ascending",positionOrder:50,slotRenderer:e=>`
                  <div class="menu-item">
                    <i class="mdi mdi-sort-ascending menu-item-icon"></i>
                    <span class="menu-item-label">${e.title}</span>
                    <kbd class="key-hint">Alt+↑</kbd>
                  </div>
                `},{command:"sort-desc",title:"Sort Descending",positionOrder:51,slotRenderer:()=>{const e=D("div",{className:"menu-item"}),i=D("i",{className:"mdi mdi-sort-descending menu-item-icon"}),r=D("span",{className:"menu-item-label",textContent:"Sort Descending"}),a=D("kbd",{className:"key-hint",textContent:"Alt+↓"});return e.appendChild(i),e.appendChild(r),e.appendChild(a),e}}]}}},{id:"duration",name:"Duration",field:"duration",sortable:!0,filterable:!0,minWidth:100,header:{menu:{commandItems:[{command:"column-resize-by-content",title:"Resize by Content",positionOrder:47,slotRenderer:()=>`
                  <div class="menu-item">
                    <i class="mdi mdi-arrow-expand-horizontal menu-item-icon"></i>
                    <span class="menu-item-label">Resize by Content</span>
                    <span class="key-hint danger">NEW</span>
                  </div>
                `},{divider:!0,command:"",positionOrder:48},{command:"sort-asc",title:"Sort Ascending",iconCssClass:"mdi mdi-sort-ascending",positionOrder:50},{command:"sort-desc",title:"Sort Descending",iconCssClass:"mdi mdi-sort-descending",positionOrder:51},{divider:!0,command:"",positionOrder:52},{command:"clear-filter",iconCssClass:"mdi mdi-filter-remove-outline",title:"Remove Filter"},{command:"clear-sort",title:"Remove Sort",positionOrder:58,slotRenderer:()=>`
                  <div class="menu-item">
                    <i class="mdi mdi-sort-variant-off menu-item-icon"></i>
                    <span class="menu-item-label">Remove Sort</span>
                    <span class="round-tag"></span>
                  </div>
                `},{command:"hide-column",iconCssClass:"mdi mdi-close",title:"Hide Column"},"divider",{command:"footer-buttons",title:"Footer Buttons",cssClass:"slot-menu-container",slotRenderer:()=>{const e=D("div",{className:"footer-buttons-container"}),i=D("button",{className:"footer-btn who-btn btn btn-outline-secondary btn-sm",textContent:"Who am I?"}),r=D("button",{className:"footer-btn update-btn btn btn-outline-secondary btn-sm",textContent:"Request Update"});return e.appendChild(i),e.appendChild(r),e},action:(e,i)=>{e.target.classList.contains("who-btn")?alert(`I am the "${i.column.name}" column`):e.target.classList.contains("update-btn")&&alert("is it done yet?"),e.preventDefault()}}]}}},{id:"start",name:"Start",field:"start",sortable:!0,formatter:f.dateIso,filterable:!0,filter:{model:v.compoundDate},minWidth:100},{id:"finish",name:"Finish",field:"finish",sortable:!0,formatter:f.dateIso,filterable:!0,filter:{model:v.dateRange},minWidth:100},{id:"cost",name:"Cost",field:"cost",width:90,sortable:!0,filterable:!0,formatter:f.dollar,header:{menu:{commandItems:[{command:"custom-action",title:"Advanced Export",slotRenderer:e=>{const i=D("div",{className:"menu-item"}),r=D("div",{className:"advanced-export-icon",textContent:"📊"}),a=D("span",{textContent:e.title||"",style:{flex:"1"}}),n=D("kbd",{className:"key-hint",textContent:"Ctrl+E"});return i.appendChild(r),i.appendChild(a),i.appendChild(n),i.addEventListener("mouseover",()=>{r.style.transform="scale(1.15)",r.style.background="linear-gradient(135deg, #d8dcef 0%, #ffffff 100%)",i.parentElement.style.backgroundColor="#854685",i.parentElement.title=`📈 Export timestamp: ${_e(new Date,"YYYY-MM-DD hh:mm:ss a")}`,i.style.color="white",i.querySelector(".key-hint").style.color="black"}),i.addEventListener("mouseout",()=>{r.style.transform="scale(1)",r.style.background="linear-gradient(135deg, #667eea 0%, #764ba2 100%)",i.parentElement.style.backgroundColor="white",i.style.color="black",document.querySelector(".export-timestamp")?.remove()}),i},action:()=>{alert("Custom export action triggered!")}},{divider:!0,command:""},{command:"filter-column",title:"Filter Column",slotRenderer:()=>`
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
                `}]}}},{id:"action",name:"Action",field:"action",width:70,minWidth:70,maxWidth:70,cssClass:"justify-center flex",formatter:()=>'<div class="button-style action-btn"><span class="mdi mdi-chevron-down font-22px color-primary"></span></div>',excludeFromExport:!0,cellMenu:{hideCloseButton:!1,commandTitle:"Cell Actions",defaultMenuItemRenderer:e=>`
              <div class="menu-item">
                ${e.iconCssClass?`<i class="${e.iconCssClass}" style="margin-right: 10px; font-size: 18px;"></i>`:'<span style="width: 18px; margin-right: 10px;">◦</span>'}
                <span class="menu-item-label">${e.title}</span>
              </div>
            `,commandItems:[{command:"copy-cell",title:"Copy Cell Value",iconCssClass:"mdi mdi-content-copy",action:(e,i)=>{console.log("Copy cell value:",i.dataContext[i.column.field]),alert(`Copied: ${i.dataContext[i.column.field]}`)}},"divider",{command:"export-row",title:"Export Row",iconCssClass:"mdi mdi-download",action:(e,i)=>{console.log("Export row:",i.dataContext),alert(`Export row #${i.dataContext.id}`)}},{command:"export",title:"Export",iconCssClass:"mdi mdi-download",commandItems:[{command:"export-excel",title:"Export as Excel",iconCssClass:"mdi mdi-file-excel-outline text-success",action:(e,i)=>{alert(`Export row #${i.dataContext.id} to Excel`)}},{command:"export-csv",title:"Export as CSV",iconCssClass:"mdi mdi-file-document-outline",action:(e,i)=>{alert(`Export row #${i.dataContext.id} to CSV`)}},{command:"export-pdf",title:"Export as PDF",iconCssClass:"mdi mdi-file-pdf-outline text-red",action:(e,i)=>{alert(`Export row #${i.dataContext.id} to PDF`)}}]},{divider:!0,command:""},{command:"edit-row",title:"Edit Row",slotRenderer:(e,i)=>`
                <div class="menu-item">
                    <div class="edit-cell-icon">✎</div>
                    <span class="menu-item-label">Edit Row #${i.dataContext.id}</span>
                </div>
              `,action:(e,i)=>{console.log("Edit row:",i.dataContext),alert(`Edit row #${i.dataContext.id}`)}},{command:"delete-row",title:"Delete Row",iconCssClass:"mdi mdi-delete text-danger",action:(e,i)=>{const r=i.dataContext;confirm(`Do you really want to delete row (${i.row+1}) with "${r.title}"`)&&this.aureliaGrid?.gridService.deleteItemById(r.id)}}]}}],this.gridOptions={autoResize:{container:"#demo-container"},enableAutoResize:!0,enableCellNavigation:!0,enableFiltering:!0,enableSorting:!0,enableGrouping:!0,enableHeaderMenu:!0,headerMenu:{defaultMenuItemRenderer:e=>`
            <div class="menu-item">
              ${e.iconCssClass?`<i class="${e.iconCssClass} menu-item-icon"></i>`:""}
              <span class="menu-item-label">${e.title}</span>
            </div>
          `},enableCellMenu:!0,enableContextMenu:!0,contextMenu:{commandListBuilder:e=>[{command:"edit-cell",title:"Edit Cell",slotRenderer:i=>{const r=D("div",{className:"menu-item"}),a=D("div",{className:"edit-cell-icon",textContent:"✎"}),n=D("span",{textContent:i.title||"",style:{flex:"1"}}),l=D("kbd",{className:"edit-cell",textContent:"F2"});return r.appendChild(a),r.appendChild(n),r.appendChild(l),r.addEventListener("mouseover",()=>{a.style.transform="rotate(15deg) scale(1.1)",a.style.boxShadow="0 2px 8px rgba(0,200,83,0.4)"}),r.addEventListener("mouseout",()=>{a.style.transform="rotate(0deg) scale(1)",a.style.boxShadow="none"}),r},action:()=>alert("Edit cell")},...e,{divider:!0,command:""},{command:"export",title:"Export",iconCssClass:"mdi mdi-download",commandItems:[{command:"export-excel",title:"Export as Excel",iconCssClass:"mdi mdi-file-excel-outline text-success",action:()=>alert("Export to Excel")},{command:"export-csv",title:"Export as CSV",iconCssClass:"mdi mdi-file-document-outline",action:()=>alert("Export to CSV")},{command:"export-pdf",title:"Export as PDF",iconCssClass:"mdi mdi-file-pdf-outline text-danger",action:()=>alert("Export to PDF")}]},{divider:!0,command:""},{command:"delete-row",title:"Delete Row",iconCssClass:"mdi mdi-delete text-danger",action:()=>alert("Delete row")},"divider",{command:"footer-buttons",title:"Footer Buttons",cssClass:"slot-menu-container",slotRenderer:(i,r)=>{const a=D("div",{className:"footer-buttons-container"}),n=D("button",{className:"footer-btn edit-btn btn btn-outline-secondary btn-sm",textContent:"Edit"}),l=D("button",{className:"footer-btn delete-btn btn btn-outline-secondary btn-sm",textContent:"Delete"});return n.addEventListener("click",d=>{d.stopPropagation(),alert(`Edit action for row #${r.dataContext.id}`)}),l.addEventListener("click",d=>{d.stopPropagation(),alert(`Delete action for row #${r.dataContext.id}`)}),a.appendChild(n),a.appendChild(l),a}}],defaultMenuItemRenderer:e=>`
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
            `,action:()=>alert("Export to CSV")},{command:"refresh-data",title:"Refresh Data",iconCssClass:"mdi mdi-refresh",slotRenderer:i=>{const r=D("div",{className:"menu-item"}),a=D("i",{className:`${i.iconCssClass} menu-item-icon`}),n=D("span",{className:"menu-item-label",textContent:i.title||""}),l=D("kbd",{className:"key-hint",textContent:"F5"});return r.appendChild(a),r.appendChild(n),r.appendChild(l),r},action:()=>alert("Refresh data")}]},externalResources:[new di],customTooltip:{observeAllTooltips:!0}}}clearGrouping(){this.aureliaGrid?.dataView?.setGrouping([])}collapseAllGroups(){this.aureliaGrid?.dataView?.collapseAllGroups()}expandAllGroups(){this.aureliaGrid?.dataView?.expandAllGroups()}groupByDuration(){this.aureliaGrid?.slickGrid?.setSortColumns([{columnId:"duration",sortAsc:!0}]),this.aureliaGrid?.dataView?.setGrouping({getter:"duration",formatter:e=>`Duration: ${e.value} <span class="text-green">(${e.count} items)</span>`,comparer:(e,i)=>ue.numeric(e.value,i.value,si.asc),aggregators:[new k.Avg("percentComplete"),new k.Sum("cost")],aggregateCollapsed:!1,lazyTotalsCalculation:!0}),this.aureliaGrid?.slickGrid?.invalidate()}loadData(e){const i=[];for(let r=0;r<e;r++){const a=Math.round(Math.random()*100),n=2e3+Math.floor(Math.random()*10),l=Math.floor(Math.random()*11),d=Math.floor(Math.random()*29),u=Math.round(Math.random()*100);i[r]={id:r,title:"Task "+r,duration:a,cost:Math.round(Math.random()*1e4)/100,percentComplete:u,start:new Date(n,l,d),finish:new Date(n,l+1,d)}}return i}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}zs=$F();$a=PF(zs,0,"Example51",pv,$a);MF(zs,1,$a);const GF=Object.freeze(Object.defineProperty({__proto__:null,get Example51(){return $a}},Symbol.toStringTag,{value:"Module"})),hv="example52",no=`<div class="grid51-container">
  <h2>
    Example 52: Grid with SQL Backend Service
    <span class="float-end">
      <a
        style="font-size: 18px"
        target="_blank"
        href="https://github.com/ghiscoding/slickgrid-universal/blob/master/demos/aurelia/src/examples/slickgrid/example52.ts"
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
  </h2>

  <div class="subtitle">
    <ul class="small">
      <li><span class="red">(*) NO DATA SHOWN</span> - just change Filters/Sorting/Pages and look at the "SQL Query" changing.</li>
      <li>This example uses the SQL Backend Service.</li>
      <li>You can also preload a grid with certain "presets" like Filters / Sorters / Pagination.</li>
    </ul>
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
      <div class="alert alert-info" data-test="alert-sql-query">
        <strong>SQL Query:</strong> <span data-test="sql-query-result">\${ sqlQuery }</span>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-md-12">
      <button
        class="btn btn-outline-secondary btn-sm btn-icon"
        data-test="clear-filters-sorting"
        title="Clear all Filters & Sorts"
        click.trigger="clearAllFiltersAndSorts()"
      >
        <i class="mdi mdi-filter-remove-outline"></i>
        Clear all Filter & Sorts
      </button>
      <button class="btn btn-outline-secondary btn-sm btn-icon mx-1" data-test="set-dynamic-filter" click.trigger="setFiltersDynamically()">
        Set Filters Dynamically
      </button>
      <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="set-dynamic-sorting" click.trigger="setSortingDynamically()">
        Set Sorting Dynamically
      </button>
      <button class="btn btn-outline-secondary btn-sm btn-icon mx-1" data-test="reset-presets" click.trigger="resetToOriginalPresets()">
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

  <div class="row my-2">
    <div class="col-12">
      <span if.bind="metrics" style="margin: 10px 0px">
        <b>Metrics:</b> \${metrics.endTime | dateFormat: 'DD MMM, h:mm:ss a'} | \${metrics.executionTime}ms | \${metrics.totalItemCount} items
      </span>
      <span class="mx-1"> — </span>
      <label>Programmatically go to first/last page:</label>
      <div class="btn-group ms-1" role="group">
        <button class="btn btn-outline-secondary btn-xs btn-icon px-2" data-test="goto-first-page" click.trigger="goToFirstPage()">
          <i class="mdi mdi-page-first"></i>
        </button>
        <button class="btn btn-outline-secondary btn-xs btn-icon px-2" data-test="goto-last-page" click.trigger="goToLastPage()">
          <i class="mdi mdi-page-last icon"></i>
        </button>
      </div>
    </div>
  </div>

  <aurelia-slickgrid
    grid-id="grid52"
    columns.bind="columns"
    options.bind="gridOptions"
    dataset.bind="dataset"
    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"
  >
  </aurelia-slickgrid>
</div>
`,gv=[],bv={};let Hr;function FF(t){Hr||(Hr=E.define({name:hv,template:no,dependencies:gv,bindables:bv})),t.register(Hr)}const AF=Object.freeze(Object.defineProperty({__proto__:null,bindables:bv,default:no,dependencies:gv,name:hv,register:FF,template:no},Symbol.toStringTag,{value:"Module"}));var RF=Object.create,Ns=Object.defineProperty,LF=Object.getOwnPropertyDescriptor,zF=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),fv=t=>{throw TypeError(t)},vv=(t,e,i)=>e in t?Ns(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,NF=(t,e)=>Ns(t,"name",{value:e,configurable:!0}),WF=t=>[,,,RF(null)],BF=["class","method","getter","setter","accessor","field","value","get","set"],_v=t=>t!==void 0&&typeof t!="function"?fv("Function expected"):t,jF=(t,e,i,r,a)=>({kind:BF[t],name:e,metadata:r,addInitializer:n=>i._?fv("Already initialized"):a.push(_v(n||null))}),VF=(t,e)=>vv(e,zF("metadata"),t[3]),HF=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},UF=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&LF(a,i));NF(a,i);for(var p=r.length-1;p>=0;p--)u=jF(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,_v(l)&&(a=l);return VF(t,a),c&&Ns(a,i,c),m?s^4?n:c:a},se=(t,e,i)=>vv(t,typeof e!="symbol"?e+"":e,i),yv,Ws;const qF=20,YF="users",KF=250;yv=[T(AF)];class ka{constructor(){se(this,"aureliaGrid"),se(this,"columns",[]),se(this,"gridOptions"),se(this,"dataset",[]),se(this,"hideSubTitle",!1),se(this,"metrics"),se(this,"processing",!1),se(this,"status",{text:"",class:""}),se(this,"serverWaitDelay",KF),se(this,"sqlQuery",""),se(this,"sqlService",new Uv),this.defineGrid()}aureliaGridReady(e){this.aureliaGrid=e}dispose(){this.aureliaGrid&&this.aureliaGrid?.dispose()}defineGrid(){this.columns=[{id:"name",field:"name",name:"Name",width:60,sortable:!0,filterable:!0,filter:{model:v.compoundInput}},{id:"gender",field:"gender",name:"Gender",filterable:!0,sortable:!0,width:60,filter:{model:v.singleSelect,collection:[{value:"",label:""},{value:"male",label:"Male"},{value:"female",label:"Female"}]}},{id:"company",field:"company",name:"Company",width:60,sortable:!0,filterable:!0,filter:{model:v.multipleSelect,collection:[{value:"acme",label:"Acme"},{value:"abc",label:"Company ABC"},{value:"xyz",label:"Company XYZ"}]}},{id:"billingAddressStreet",field:"billingAddressStreet",name:"Billing Street",formatter:f.complexObject,width:60,filterable:!0,sortable:!0},{id:"billingAddressZip",field:"billingAddressZip",name:"Billing Zip",width:60,type:"number",filterable:!0,sortable:!0,filter:{model:v.compoundInput},formatter:f.multiple,params:{formatters:[f.complexObject]}},{id:"finish",field:"finish",name:"Date",formatter:f.dateIso,sortable:!0,minWidth:90,width:120,exportWithFormatter:!0,type:"date",filterable:!0,filter:{model:v.dateRange}}],this.gridOptions={gridHeight:200,gridWidth:900,enableFiltering:!0,enableCellNavigation:!0,gridMenu:{resizeOnShowHeaderRow:!0},enablePagination:!0,pagination:{pageSizes:[10,15,20,25,30,40,50,75,100],pageSize:qF,totalItems:100},presets:{columns:[{columnId:"name",width:100},{columnId:"gender",width:55},{columnId:"company"},{columnId:"billingAddressZip"},{columnId:"billingAddressStreet",width:120},{columnId:"finish",width:130}],filters:[{columnId:"gender",searchTerms:["male"],operator:"EQ"},{columnId:"name",searchTerms:["Joh*oe"],operator:"StartsWithEndsWith"},{columnId:"company",searchTerms:["xyz"],operator:"IN"},{columnId:"finish",searchTerms:["2026-01-01","2026-02-15"],operator:"RangeInclusive"}],sorters:[{columnId:"name",direction:"asc"},{columnId:"company",direction:"DESC"}],pagination:{pageNumber:2,pageSize:20}},backendServiceApi:{service:this.sqlService,options:{tableName:YF},preProcess:()=>this.displaySpinner(!0),process:e=>this.getCustomerApiCall(e),postProcess:e=>{this.metrics=e.metrics,this.dataset=e.data,this.gridOptions.pagination&&(this.gridOptions.pagination.totalItems=e.metrics?.totalItemCount??0),this.aureliaGrid.slickGrid?.invalidate(),this.displaySpinner(!1),this.updateSqlQuery()}}}}displaySpinner(e){this.processing=e,this.status=e?{text:"processing...",class:"alert alert-danger"}:{text:"finished",class:"alert alert-success"}}getCustomerApiCall(e){const r=new Date,a={data:[],metrics:{startTime:r,endTime:r,executionTime:0,itemCount:0,totalItemCount:100}};return new Promise(n=>{setTimeout(()=>{n(a)},this.serverWaitDelay)})}goToFirstPage(){this.aureliaGrid.paginationService.goToFirstPage()}goToLastPage(){this.aureliaGrid.paginationService.goToLastPage()}clearAllFiltersAndSorts(){this.aureliaGrid?.gridService&&this.aureliaGrid.gridService.clearAllFiltersAndSorts()}saveCurrentGridState(){console.log("GraphQL current grid state",this.aureliaGrid.gridStateService.getCurrentGridState())}setFiltersDynamically(){const e=new Date().getFullYear(),i=`${e}-01-01`,r=`${e}-02-15`;this.aureliaGrid.filterService.updateFilters([{columnId:"gender",searchTerms:["female"],operator:"="},{columnId:"name",searchTerms:["Jane"],operator:"StartsWith"},{columnId:"company",searchTerms:["acme"],operator:"IN"},{columnId:"billingAddressZip",searchTerms:["11"],operator:">="},{columnId:"finish",searchTerms:[i,r],operator:"RangeInclusive"}])}setSortingDynamically(){this.aureliaGrid.sortService.updateSorting([{columnId:"billingAddressZip",direction:"DESC"},{columnId:"company",direction:"ASC"}])}resetToOriginalPresets(){const e=new Date().getFullYear(),i=`${e}-01-01`,r=`${e}-02-15`;this.aureliaGrid.filterService.updateFilters([{columnId:"gender",searchTerms:["male"],operator:"="},{columnId:"name",searchTerms:["Joh*oe"],operator:"StartsWithEndsWith"},{columnId:"company",searchTerms:["xyz"],operator:"IN"},{columnId:"finish",searchTerms:[i,r],operator:"RangeInclusive"}]),this.aureliaGrid.sortService.updateSorting([{columnId:"name",direction:"asc"},{columnId:"company",direction:"DESC"}]),setTimeout(()=>{this.aureliaGrid.paginationService?.changeItemPerPage(20),this.aureliaGrid.paginationService?.goToPageNumber(2)})}updateSqlQuery(){this.sqlService&&(this.sqlQuery=this.sqlService.buildQuery())}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;const e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.aureliaGrid.resizerService.resizeGrid(0)}}Ws=WF();ka=UF(Ws,0,"Example52",yv,ka);HF(Ws,1,ka);const QF=Object.freeze(Object.defineProperty({__proto__:null,default:ka},Symbol.toStringTag,{value:"Module"})),Sv="home-page",oo=`<div class="container">
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
`,Cv=[],wv={};let Ur;function ZF(t){Ur||(Ur=E.define({name:Sv,template:oo,dependencies:Cv,bindables:wv})),t.register(Ur)}const JF=Object.freeze(Object.defineProperty({__proto__:null,bindables:wv,default:oo,dependencies:Cv,name:Sv,register:ZF,template:oo},Symbol.toStringTag,{value:"Module"}));var XF=Object.create,Bs=Object.defineProperty,eA=Object.getOwnPropertyDescriptor,tA=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),xv=t=>{throw TypeError(t)},Tv=(t,e,i)=>e in t?Bs(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,iA=(t,e)=>Bs(t,"name",{value:e,configurable:!0}),aA=t=>[,,,XF(null)],rA=["class","method","getter","setter","accessor","field","value","get","set"],Ev=t=>t!==void 0&&typeof t!="function"?xv("Function expected"):t,nA=(t,e,i,r,a)=>({kind:rA[t],name:e,metadata:r,addInitializer:n=>i._?xv("Already initialized"):a.push(Ev(n||null))}),oA=(t,e)=>Tv(e,tA("metadata"),t[3]),lA=(t,e,i,r)=>{for(var a=0,n=t[e>>1],l=n&&n.length;a<l;a++)n[a].call(i);return r},sA=(t,e,i,r,a,n)=>{var l,d,u,s=e&7,m=!1,o=0,g=t[o]||(t[o]=[]),c=s&&(a=a.prototype,s<5&&(s>3||!m)&&eA(a,i));iA(a,i);for(var p=r.length-1;p>=0;p--)u=nA(s,i,d={},t[3],g),l=(0,r[p])(a,u),d._=1,Ev(l)&&(a=l);return oA(t,a),c&&Bs(a,i,c),m?s^4?n:c:a},dA=(t,e,i)=>Tv(t,e+"",i),$v,js;$v=[T(JF)];class Oa{constructor(e=M(qv)){dA(this,"aurelia",e),console.log(e)}}js=aA();Oa=sA(js,0,"HomePage",$v,Oa);lA(js,1,Oa);const cA=Object.freeze(Object.defineProperty({__proto__:null,get HomePage(){return Oa}},Symbol.toStringTag,{value:"Module"}));export{$ as _,pA as c,hA as g};
