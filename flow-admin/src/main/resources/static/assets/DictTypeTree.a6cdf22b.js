import{_ as e}from"./Tree.vue_vue&type=style&index=0&lang.ab3c02da.js";import{g as t}from"./dicType.898a2092.js";import{j as a,r,I as n,K as o,o as s,m as c,n as i}from"./vendor.686fd1d4.js";import"./index.521cc965.js";import"./useContextMenu.7355e9cb.js";/* empty css              */var l=a({name:"DictTypeTree",components:{BasicTree:e},emits:["select"],setup(e,{emit:a}){const o=r([]);function s(){return e=this,a=null,r=function*(){o.value=yield t()},new Promise(((t,n)=>{var o=e=>{try{c(r.next(e))}catch(t){n(t)}},s=e=>{try{c(r.throw(e))}catch(t){n(t)}},c=e=>e.done?t(e.value):Promise.resolve(e.value).then(o,s);c((r=r.apply(e,a)).next())}));var e,a,r}return n((()=>{s()})),{treeData:o,handleSelect:function(e,t){a("select",e[0])}}}});const d={class:"bg-white m-4 mr-0 overflow-hidden"};l.render=function(e,t,a,r,n,l){const m=o("BasicTree");return s(),c("div",d,[i(m,{title:"数据分类",toolbar:"",search:"",clickRowToExpand:!1,treeData:e.treeData,replaceFields:{key:"id",title:"name"},onSelect:e.handleSelect},null,8,["treeData","onSelect"])])};export default l;