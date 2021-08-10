var e=Object.defineProperty,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,a=(t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,i=(e,t,o)=>new Promise(((r,a)=>{var i=e=>{try{l(o.next(e))}catch(t){a(t)}},n=e=>{try{l(o.throw(e))}catch(t){a(t)}},l=e=>e.done?r(e.value):Promise.resolve(e.value).then(i,n);l((o=o.apply(e,t)).next())}));import{B as n,a as l}from"./index.08cdb95c.js";import{_ as s}from"./BasicForm.99631a91.js";import{u as d}from"./useForm.29bf2c0c.js";import{a1 as c,b2 as m,j as p,r as u,u as f,i as g,K as h,o as b,m as y,Q as w,n as x,N as I}from"./vendor.686fd1d4.js";/* empty css              */import{c as v,s as P}from"./category.b261e403.js";import{g as j}from"./company.e946a487.js";const S=[{title:"名称",dataIndex:"name",align:"left"},{title:"编码",dataIndex:"code",width:100,align:"left"},{title:"简称",dataIndex:"shortName",width:100,align:"left"},{title:"所属公司",dataIndex:"cName",width:100,align:"left"},{title:"前台显示",dataIndex:"frontShow",width:80,customRender:({record:e})=>{const t=1==~~e.frontShow,o=t?"显示":"隐藏";return c(m,{color:t?"green":"red"},(()=>o))}},{title:"排序",dataIndex:"orderNo",width:80},{title:"创建时间",dataIndex:"createTime",width:180},{title:"描述",dataIndex:"note",align:"left"}],N=[{field:"keyword",label:"关键字",component:"Input",componentProps:{placeholder:"请输入名称/编码"},labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}}],q=[{field:"id",label:"ID",component:"Input",show:!1},{field:"pid",label:"pid",required:!1,component:"Input",show:!1},{field:"name",label:"名称",required:!0,component:"Input",rules:[{required:!0,whitespace:!0,message:"名称不能为空！"},{max:200,message:"字符长度不能大于200！"}]},{field:"code",label:"编码",required:!0,component:"Input"},{field:"shortName",label:"简称",required:!1,component:"Input",rules:[{whitespace:!0,message:"编码不能为空！"},{max:200,message:"字符长度不能大于200！"}]},{field:"companyId",label:"所属公司",component:"TreeSelect",componentProps:{treeNodeFilterProp:"cname",replaceFields:{title:"cname",key:"id",value:"id"},getPopupContainer:()=>document.body},required:!0},{field:"orderNo",label:"排序号",required:!1,component:"InputNumber"},{field:"frontShow",label:"状态",required:!1,component:"Switch",defaultValue:!0,componentProps:{checkedChildren:"显示",unCheckedChildren:"隐藏"}},{field:"note",label:"描述",required:!1,component:"InputTextArea",rules:[{max:400,message:"字符长度不能大于400！"}]}];var F=p({name:"CategoryModal",components:{BasicModal:n,BasicForm:s},emits:["success","register"],setup(e,{emit:n}){const s=u(!0),[c,{resetFields:m,updateSchema:p,setFieldsValue:h,validate:b}]=d({labelWidth:100,schemas:q,showActionButtonGroup:!1}),[y,{setModalProps:w,closeModal:x}]=l((e=>i(this,null,(function*(){yield m(),w({confirmLoading:!1}),s.value=!!(null==e?void 0:e.isUpdate);const i=yield j();p([{field:"companyId",componentProps:{treeData:i}}]);let n=e.record;yield p([{field:"code",dynamicRules:()=>{return[{required:!0,whitespace:!0,message:"编码不能为空！"},{pattern:new RegExp("^[a-zA-Z_]{1,}[0-9a-zA-Z_]{1,}$"),type:"string",message:"请输入英文或数字且以英文或下划线开头！"},{max:30,message:"字符长度不能大于30！"},...(e={id:f(s)&&n&&n.id||"",field:"code",fieldValue:"",fieldName:"编码"},[{trigger:"blur",validator:(t,o)=>o?v({id:e.id,field:e.field,fieldValue:o,fieldName:e.fieldName}).then((t=>t?Promise.resolve():Promise.reject(e.fieldName+"已存在，请修改！"))).catch((e=>Promise.reject(e))):Promise.resolve()}])];var e}}]),f(s)&&h(((e,i)=>{for(var n in i||(i={}))o.call(i,n)&&a(e,n,i[n]);if(t)for(var n of t(i))r.call(i,n)&&a(e,n,i[n]);return e})({},e.record))}))));return{registerModal:y,registerForm:c,getTitle:g((()=>f(s)?"修改":"新增")),handleSubmit:function(){return i(this,null,(function*(){try{w({confirmLoading:!0});const e=yield b();e.frontShow=e.frontShow?1:0,yield P(e),x(),n("success")}finally{w({confirmLoading:!1})}}))}}}});F.render=function(e,t,o,r,a,i){const n=h("BasicForm"),l=h("BasicModal");return b(),y(l,I(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:w((()=>[x(n,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};var O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:F});export{O as C,F as _,S as c,N as s};