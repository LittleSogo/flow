import{_ as e}from"./TableImg.507e398b.js";import{f as i}from"./BasicForm.a98eb535.js";import{u as o}from"./useTable.54605782.js";import{g as t,d as n}from"./appPrivilegeValue.ec09be5a.js";import{P as r}from"./perEnum.9a5ef72f.js";import{_ as a,c as s}from"./AppPrivilegeValueModal.f55dde43.js";import{b as d}from"./index.f287750a.js";import{A as l}from"./index.c736d6b2.js";import{j as m,K as c,o as p,m as f,n as u,Q as j,Y as b}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.7ff3fa79.js";import"./index.7fecfddd.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.dc62f82e.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.099c2235.js";/* empty css              *//* empty css              *//* empty css              */import"./download.c870abce.js";import"./base64Conver.bb012c73.js";import"./index.d2ff26f2.js";var x=m({name:"AppPrivilegeValue",components:{BasicTable:e,TableAction:i,AppModal:a,Authority:l},setup(){const[e,{openModal:i}]=d(),[a,{reload:l}]=o({title:"列表",api:t,columns:s,canColDrag:!0,useSearchForm:!1,pagination:!1,bordered:!0,showIndexColumn:!0,actionColumn:{width:100,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{PerEnum:r,registerTable:a,registerModal:e,handleCreate:function(){i(!0,{isUpdate:!1})},handleEdit:function(e){i(!0,{record:e,isUpdate:!0})},handleDelete:function(e){n([e.id]).then((e=>{l()}))},handleSuccess:function(){l()}}}});const h=b(" 新增 ");x.render=function(e,i,o,t,n,r){const a=c("a-button"),s=c("Authority"),d=c("TableAction"),l=c("BasicTable"),m=c("AppModal");return p(),f("div",null,[u(l,{onRegister:e.registerTable},{toolbar:j((()=>[u(s,{value:this.$options.name+":"+e.PerEnum.ADD},{default:j((()=>[u(a,{type:"primary",onClick:e.handleCreate},{default:j((()=>[h])),_:1},8,["onClick"])])),_:1},8,["value"])])),action:j((({record:i})=>[u(d,{actions:[{auth:this.$options.name+":"+e.PerEnum.UPDATE,title:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,i)},{auth:this.$options.name+":"+e.PerEnum.DELETE,title:"删除",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,i)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),u(m,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default x;