import{B as C}from"./TableImg.56f74f95.js";import{T as g}from"./BasicForm.bfb70ce4.js";import{u as x}from"./useTable.df715f1a.js";import{g as B,d as y}from"./app.19f09dd6.js";import{c as M,s as E}from"./app.data.1e80cc44.js";import A from"./AppModal.ef129309.js";import T from"./SecretKeyModal.52c9d308.js";import{b}from"./index.309f7e13.js";import{_}from"./index.aeb7d9f7.js";import{A as F,a0 as s,B as K,D as w,w as i,a6 as u,ae as k}from"./vendor.5879c5ca.js";/* empty css                *//* empty css              */import"./useForm.9d0149a6.js";import"./index.37a89528.js";/* empty css                *//* empty css                */import"./useWindowSizeFn.6a6adedd.js";import"./useContentViewHeight.6345b5e8.js";/* empty css                *//* empty css                *//* empty css               */import"./uuid.2b29000c.js";/* empty css               */import"./useSortable.514a2720.js";/* empty css                *//* empty css                *//* empty css               *//* empty css               */import"./index.661e65ad.js";/* empty css                *//* empty css                *//* empty css                */import"./download.6c7231a4.js";import"./base64Conver.bb012c73.js";import"./index.77bdba74.js";import"./constantEnum.82824ec7.js";/* empty css                */const R=F({name:"App",components:{BasicTable:C,TableAction:g,AppModal:A,SecretKeyModal:T},setup(){const[e,{openModal:a}]=b(),[p,{openModal:m,setModalProps:f}]=b(),[j,{reload:o}]=x({title:"\u5217\u8868",api:B,columns:M,formConfig:{labelWidth:100,schemas:E,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!0,actionColumn:{width:140,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"}}});function r(){a(!0,{isUpdate:!1})}function d(t){m(!0,{record:t,isUpdate:!0}),f({title:`\u4FEE\u6539\u3010${t.name}\u3011\u7684\u5BC6\u94A5`,showOkBtn:!1,cancelText:"\u5173\u95ED"})}function l(t){a(!0,{record:t,isUpdate:!0})}function c(t){y([t.id]).then(()=>{o()})}function n(){o()}function h(){return o(),Promise.resolve(!0)}function S(){o()}return{registerTable:j,registerModal:e,registerSecretKeyModal:p,handleCloseFunc:h,handleCreate:r,handleEditSecretKey:d,handleEdit:l,handleDelete:c,handleSuccess:n,handleUpdateSecretKeySuccess:S}}}),v=k(" \u65B0\u589E ");function D(e,a,p,m,f,j){const o=s("a-button"),r=s("TableAction"),d=s("BasicTable"),l=s("AppModal"),c=s("SecretKeyModal");return K(),w("div",null,[i(d,{onRegister:e.registerTable},{toolbar:u(()=>[i(o,{type:"primary",onClick:e.handleCreate},{default:u(()=>[v]),_:1},8,["onClick"])]),action:u(({record:n})=>[i(r,{actions:[{tooltip:"\u67E5\u770B\u5BC6\u94A5",icon:"ant-design:key-outlined",onClick:e.handleEditSecretKey.bind(null,n)},{tooltip:"\u4FEE\u6539",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,n)},{tooltip:"\u5220\u9664",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:e.handleDelete.bind(null,n)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),i(l,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"]),i(c,{onRegister:e.registerSecretKeyModal,onSuccess:e.handleUpdateSecretKeySuccess,closeFunc:e.handleCloseFunc},null,8,["onRegister","onSuccess","closeFunc"])])}var Ce=_(R,[["render",D]]);export{Ce as default};