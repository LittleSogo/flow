import{_ as e}from"./BasicForm.2ed1f7b7.js";import{ag as i,h as t}from"./index.5dab9bd2.js";import{T as s}from"./index.230dd036.js";import{P as o}from"./index.e2991800.js";import{j as a,a1 as d,K as n,o as r,m,Q as p,n as l}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.98a0466e.js";/* empty css              *//* empty css              *//* empty css              */import"./index.d939de4e.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.37bc3259.js";import"./base64Conver.bb012c73.js";import"./index.f0f47cc5.js";import"./onMountedOrActivated.172ad1ec.js";import"./useContentViewHeight.e8047e09.js";/* empty css              *//* empty css              */const c=[{field:"title",component:"Input",label:"title",defaultValue:"defaultValue",rules:[{required:!0}]},{field:"tinymce",component:"Input",label:"tinymce",defaultValue:"defaultValue",rules:[{required:!0}],render:({model:e,field:i})=>d(s,{value:e[i],onChange:t=>{e[i]=t}})}];var f=a({components:{BasicForm:e,CollapseContainer:i,PageWrapper:o},setup(){const{createMessage:e}=t();return{schemas:c,handleSubmit:i=>{e.success("click search,values:"+JSON.stringify(i))}}}});f.render=function(e,i,t,s,o,a){const d=n("BasicForm"),c=n("CollapseContainer"),f=n("PageWrapper");return r(),m(f,{title:"富文本嵌入表单示例"},{default:p((()=>[l(c,{title:"富文本表单"},{default:p((()=>[l(d,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export default f;