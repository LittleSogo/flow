import{_ as e}from"./TableImg.5efff65a.js";import"./BasicForm.950a284a.js";import{u as i}from"./useTable.84e8a1c5.js";import{getBasicColumns as o}from"./tableData.3f3da3f1.js";import{d as a}from"./table.ac37ea5d.js";import{z as r,Z as t,D as s,F as d,w as n,a3 as m,a9 as p}from"./vendor.11d66826.js";/* empty css              *//* empty css              */import"./useForm.7635a38a.js";import"./index.1bc1d740.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.9fecf134.js";import"./index.037585c2.js";import"./onMountedOrActivated.17f3c81d.js";/* empty css              */import"./useSortable.072b7c77.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.c48a0e31.js";/* empty css              *//* empty css              *//* empty css              */import"./download.aa9819c7.js";import"./base64Conver.bb012c73.js";import"./index.a66557fe.js";var c=r({components:{BasicTable:e},setup(){const[e,{reload:r}]=i({title:"远程加载示例",api:a,columns:o()});return{registerTable:e,handleReloadCurrent:function(){r()},handleReload:function(){r({page:1})}}}});const f={class:"p-4"},j=p(" 刷新当前页 "),l=p(" 刷新并返回第一页 ");c.render=function(e,i,o,a,r,p){const c=t("a-button"),b=t("BasicTable");return s(),d("div",f,[n(b,{onRegister:e.registerTable},{toolbar:m((()=>[n(c,{type:"primary",onClick:e.handleReloadCurrent},{default:m((()=>[j])),_:1},8,["onClick"]),n(c,{type:"primary",onClick:e.handleReload},{default:m((()=>[l])),_:1},8,["onClick"])])),_:1},8,["onRegister"])])};export default c;