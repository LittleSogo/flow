import{_ as e}from"./TableImg.215d3df0.js";import{f as t}from"./BasicForm.df85bae6.js";import{u as o}from"./useTable.110df86b.js";import{a as n,d as i}from"./dept.2aae0914.js";import{_ as a}from"./PageWrapper.acc8d12f.js";import r from"./CompanyTree.cd179e72.js";import{g as s}from"./index.3f4b0a4c.js";import{b as d}from"./useModal.fc795c66.js";import{_ as l,c,s as p}from"./DeptModal.60b4188d.js";import{k as m,r as f,u,K as b,o as j,n as g,Q as h,q as x,Y as C}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              */import"./useForm.a42bd52f.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.03f0b134.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.07d1a2fc.js";/* empty css              *//* empty css              */import"./download.42909391.js";import"./StrengthMeter.7f6a4ce0.js";import"./usePageContext.18bdf57b.js";/* empty css              *//* empty css              */import"./Tree.vue_vue&type=style&index=0&lang.2b29f8be.js";import"./useContextMenu.8ef0a43f.js";import"./company.4f562047.js";import"./index.4e5700ac.js";import"./personal.0c461b5f.js";import"./OrgTree.ac4e8d4e.js";const{createMessage:S}=s();var w=m({name:"DeptManagement",components:{BasicTable:e,PageWrapper:a,CompanyTree:r,DeptModal:l,TableAction:t},setup(){const[e,{openModal:t,setModalProps:a}]=d(),r=f({}),[s,{reload:l}]=o({title:"列表",api:n,columns:c,formConfig:{labelWidth:120,schemas:p,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},expandRowByClick:!0,useSearchForm:!0,showIndexColumn:!1,bordered:!0,pagination:!1,actionColumn:{width:150,title:"操作",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:s,registerModal:e,handleCreate:function(){var e;a({title:"新增部门"}),t(!0,{record:{companyId:null==(e=u(r))?void 0:e.id},isUpdate:!1})},handleEdit:function(e,o){o.stopPropagation(),a({title:"修改部门"}),t(!0,{record:e,isUpdate:!0})},handleCreateChild:function(e,o){o.stopPropagation(),a({title:"新增【"+e.name+"】的子部门"}),e={pid:e.id},t(!0,{record:e,isUpdate:!0})},handleDelete:function(e){e.children&&e.children.length>0?S.warning("有子节点，不能删除！"):i([e.id]).then((e=>{l()}))},handleSuccess:function(){l()},handleSelect:function(e){r.value=e,l({searchInfo:{companyId:e?e.id:""}})},doSearch:function(){l()}}}});const M=C("新增");w.render=function(e,t,o,n,i,a){const r=b("CompanyTree"),s=b("a-button"),d=b("TableAction"),l=b("BasicTable"),c=b("DeptModal"),p=b("PageWrapper");return j(),g(p,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:h((()=>[x(r,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),x(l,{onRegister:e.registerTable,class:"w-3/4 xl:w-4/5"},{toolbar:h((()=>[x(s,{type:"primary",onClick:e.handleCreate},{default:h((()=>[M])),_:1},8,["onClick"])])),action:h((({record:t})=>[x(d,{actions:[{title:"添加子部门",icon:"ant-design:plus-outlined",onClick:e.handleCreateChild.bind(null,t)},{title:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,t)},{title:"删除",icon:"ant-design:delete-outlined",color:"error",onClick:e=>{e.stopPropagation()},popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),x(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1})};export default w;