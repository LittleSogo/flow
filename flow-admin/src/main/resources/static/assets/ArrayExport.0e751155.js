import{_ as e}from"./TableImg.fd7646bb.js";import"./BasicForm.5fbfb734.js";import"./index.6f817243.js";import{c as o,d as i,a,b as t,e as s}from"./data.5e129ae4.js";import{P as d}from"./index.e083521e.js";import{j as r,K as n,o as m,m as p,Q as c,n as j,Y as f}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.1ee1a774.js";import"./index.eb9d6ed9.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./index.2bb7e54d.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.28b3aabe.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.2aa1bf44.js";/* empty css              *//* empty css              *//* empty css              */import"./download.6cc0299c.js";import"./base64Conver.bb012c73.js";import"./index.cab36059.js";import"./useContentViewHeight.2141a994.js";/* empty css              *//* empty css              */var b=r({components:{BasicTable:e,PageWrapper:d},setup:()=>({aoaToExcel:function(){a({data:t,header:s,filename:"二维数组方式导出excel.xlsx"})},columns:o,data:i})});const x=f(" 导出 ");b.render=function(e,o,i,a,t,s){const d=n("a-button"),r=n("BasicTable"),f=n("PageWrapper");return m(),p(f,{title:"导出示例",content:"根据数组格式的数据进行导出"},{default:c((()=>[j(r,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:c((()=>[j(d,{onClick:e.aoaToExcel},{default:c((()=>[x])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])),_:1})};export default b;