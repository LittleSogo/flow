import{_ as e}from"./TableImg.796610fd.js";import"./BasicForm.adb2a199.js";import"./index.57ea88fd.js";import{c as i,d as a,j as o}from"./data.85b6d390.js";import{P as t}from"./index.c1dc3b6b.js";import{j as d,K as s,o as r,m as n,Q as m,n as c,Y as p}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.40c52001.js";import"./index.04486bdf.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./index.13a30da8.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.979115a3.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.a84c0e16.js";/* empty css              *//* empty css              *//* empty css              */import"./download.45a835c8.js";import"./base64Conver.bb012c73.js";import"./index.9702aa73.js";import"./useContentViewHeight.c5b829cb.js";/* empty css              *//* empty css              */var j=d({components:{BasicTable:e,PageWrapper:t},setup:()=>({defaultHeader:function(){o({data:a,filename:"使用key作为默认头部.xlsx"})},customHeader:function(){o({data:a,header:{id:"ID",name:"姓名",age:"年龄",no:"编号",address:"地址",beginTime:"开始时间",endTime:"结束时间"},filename:"自定义头部.xlsx",json2sheetOpts:{header:["name","id"]}})},columns:i,data:a})});const f=p(" 导出：默认头部 "),b=p(" 导出：自定义头部 ");j.render=function(e,i,a,o,t,d){const p=s("a-button"),j=s("BasicTable"),u=s("PageWrapper");return r(),n(u,{title:"导出示例",content:"根据JSON格式的数据进行导出"},{default:m((()=>[c(j,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:m((()=>[c(p,{onClick:e.defaultHeader},{default:m((()=>[f])),_:1},8,["onClick"]),c(p,{onClick:e.customHeader},{default:m((()=>[b])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])),_:1})};export default j;