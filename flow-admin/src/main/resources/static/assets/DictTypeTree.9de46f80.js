var p=(o,r,e)=>new Promise((c,a)=>{var n=t=>{try{i(e.next(t))}catch(l){a(l)}},s=t=>{try{i(e.throw(t))}catch(l){a(l)}},i=t=>t.done?c(t.value):Promise.resolve(t.value).then(n,s);i((e=e.apply(o,r)).next())});import{_ as d}from"./Tree.vue_vue&type=style&index=0&lang.43e63f89.js";import{g as m}from"./dicType.4fa424d6.js";import{_ as f}from"./index.9eb02b52.js";import{A as u,r as _,_ as T,a0 as h,B as v,D,w as y}from"./vendor.7bee64cc.js";import"./useContextMenu.e899090d.js";/* empty css               */const B=u({name:"DictTypeTree",components:{BasicTree:d},emits:["select"],setup(o,{emit:r}){const e=_([]);function c(){return p(this,null,function*(){e.value=yield m()})}function a(n,s){r("select",n[0]),console.log(n,s)}return T(()=>{c()}),{treeData:e,handleSelect:a}}}),j={class:"bg-white m-4 mr-0 overflow-hidden"};function x(o,r,e,c,a,n){const s=h("BasicTree");return v(),D("div",j,[y(s,{title:"\u6570\u636E\u5206\u7C7B",toolbar:"",search:"",clickRowToExpand:!1,treeData:o.treeData,replaceFields:{key:"id",title:"name"},onSelect:o.handleSelect},null,8,["treeData","onSelect"])])}var E=f(B,[["render",x]]);export{E as default};