var u=(o,l,s)=>new Promise((d,r)=>{var m=e=>{try{t(s.next(e))}catch(a){r(a)}},i=e=>{try{t(s.throw(e))}catch(a){r(a)}},t=e=>e.done?d(e.value):Promise.resolve(e.value).then(m,i);t((s=s.apply(o,l)).next())});import{B as _,a as h}from"./index.c505e96f.js";import{B as w}from"./TableImg.513742d5.js";import{B,T}from"./BasicForm.0ba2e15f.js";import{u as y}from"./useTable.6e5baa13.js";import{g as C}from"./role.50d962e5.js";import{P as S}from"./index.ea14bdae.js";import I from"./CompanyTree.1a3efee0.js";import{_ as R}from"./index.e84e956c.js";import{A as v,j as M,a0 as c,B as F,a1 as P,a6 as f,w as p,a4 as W}from"./vendor.5879c5ca.js";import"./useWindowSizeFn.6a6adedd.js";/* empty css                *//* empty css              */import"./useForm.696aa965.js";/* empty css                *//* empty css                *//* empty css               */import"./uuid.2b29000c.js";/* empty css               */import"./useSortable.a10c06e7.js";/* empty css                *//* empty css                *//* empty css               *//* empty css               */import"./index.8b70aabd.js";/* empty css                *//* empty css                *//* empty css                */import"./download.e6dbd100.js";import"./base64Conver.bb012c73.js";import"./index.e83a4b09.js";/* empty css                *//* empty css                */import"./useContentViewHeight.ccc8749b.js";import"./Tree.vue_vue_type_style_index_0_lang.128b82eb.js";import"./useContextMenu.44cd9a61.js";import"./company.54be1035.js";const k=[{title:"\u540D\u79F0",dataIndex:"name",width:150,align:"left"},{title:"\u6807\u8BC6",dataIndex:"sn",width:120,align:"left"},{title:"\u516C\u53F8",dataIndex:"companyName",width:120,align:"left"}],$=[{field:"keyword",label:"\u5173\u952E\u5B57",component:"Input",labelWidth:60,colProps:{span:12,lg:{span:12,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}}];const N=v({name:"RoleSelector",components:{BasicModal:_,BasicForm:B,BasicTable:w,PageWrapper:S,CompanyTree:I,TableAction:T},setup(o,{emit:l}){let s="";const[d,{setModalProps:r,closeModal:m}]=h(n=>u(this,null,function*(){r({wrapClassName:"selector-content"}),s=n.personalId,t({searchInfo:{personalId:s}})})),[i,{reload:t,getSelectRows:e}]=y({title:"",api:C,immediate:!1,columns:k,rowSelection:{type:"checkbox",columnWidth:30},formConfig:{labelWidth:60,schemas:$,showResetButton:!1,showAdvancedButton:!1,autoSubmitOnEnter:!0},size:"small",canResize:!1,useSearchForm:!0,showTableSetting:!1,showIndexColumn:!1,bordered:!0,scroll:{y:300}}),a=M(()=>"\u9009\u62E9\u89D2\u8272");function j(){t()}function b(){const n=e();l("success",n),m()}function x(n){let g={companyId:n?n.id:"",personalId:s};t({searchInfo:g})}return{registerTable:i,registerModal:d,getTitle:a,handleSubmit:b,handleSuccess:j,handleSelect:x}}});function z(o,l,s,d,r,m){const i=c("CompanyTree"),t=c("BasicTable"),e=c("PageWrapper"),a=c("BasicModal");return F(),P(a,W({wrapClassName:"selector-body"},o.$attrs,{onRegister:o.registerModal,title:o.getTitle,onOk:o.handleSubmit}),{default:f(()=>[p(e,{dense:"",contentClass:"flex"},{default:f(()=>[p(i,{class:"w-1/4 xl:w-3/10",onSelect:o.handleSelect},null,8,["onSelect"]),p(t,{onRegister:o.registerTable,class:"w-3/4 xl:w-7/10"},null,8,["onRegister"])]),_:1})]),_:1},16,["onRegister","title","onOk"])}var we=R(N,[["render",z]]);export{we as default};