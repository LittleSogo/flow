import{_ as e}from"./TableImg.796610fd.js";import{f as o}from"./BasicForm.adb2a199.js";import{u as i}from"./useTable.82511bdc.js";import{c as t}from"./system.e7733661.js";import{u as n}from"./index.4aea3684.js";import{_ as r,c as s,s as a}from"./RoleDrawer.cf1cb66d.js";import{j as d,K as c,o as m,m as l,n as p,Q as f,Y as u}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.40c52001.js";import"./index.04486bdf.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./index.13a30da8.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.979115a3.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.a84c0e16.js";/* empty css              *//* empty css              *//* empty css              */import"./download.45a835c8.js";import"./base64Conver.bb012c73.js";import"./index.9702aa73.js";/* empty css              */import"./Tree.vue_vue&type=style&index=0&lang.93f19dfa.js";import"./useContextMenu.1f0fede2.js";var j=d({name:"RoleManagement",components:{BasicTable:e,RoleDrawer:r,TableAction:o},setup(){const[e,{openDrawer:o}]=n(),[r,{reload:d}]=i({title:"角色列表",api:t,columns:s,formConfig:{labelWidth:120,schemas:a},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});return{registerTable:r,registerDrawer:e,handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){},handleSuccess:function(){d()}}}});const b=u(" 新增角色 ");j.render=function(e,o,i,t,n,r){const s=c("a-button"),a=c("TableAction"),d=c("BasicTable"),u=c("RoleDrawer");return m(),l("div",null,[p(d,{onRegister:e.registerTable},{toolbar:f((()=>[p(s,{type:"primary",onClick:e.handleCreate},{default:f((()=>[b])),_:1},8,["onClick"])])),action:f((({record:o})=>[p(a,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),p(u,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default j;