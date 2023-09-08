var _=(e,b,p)=>new Promise((f,y)=>{var T=n=>{try{r(p.next(n))}catch(s){y(s)}},u=n=>{try{r(p.throw(n))}catch(s){y(s)}},r=n=>n.done?f(n.value):Promise.resolve(n.value).then(T,u);r((p=p.apply(e,b)).next())});import{B as W}from"./TableImg.7ea72800.js";import{l as N}from"./BasicForm.35bf3188.js";import{u as H}from"./useTable.02d43016.js";import{g as q,c as G,s as J,a as Q,b as X,d as Y,p as Z,e as ee,f as te}from"./listener.data.ff554ff3.js";import{az as oe,a as ne,w as g,O as ie,j as C,aB as m,o as c,k as P,B as l,p as k,C as L,l as h,i as D,F as A,t as R}from"./index.741c5d36.js";import{T as re}from"./index.abe396df.js";import{P as ae}from"./index.ffcec715.js";import se from"./ListenerModal.8ebbcc30.js";import le from"./ListenerPropertiesModal.949e190b.js";import{b as O}from"./index.ef1baeca.js";import"./index.d4ff1276.js";import"./Checkbox.2841bc84.js";import"./index.5fb5b3b2.js";import"./index.4960ebac.js";import"./eagerComputed.1e0895dc.js";import"./useForm.8dec0b63.js";import"./index.73bb7fa2.js";import"./index.5fd79f94.js";import"./uuid.2b29000c.js";import"./index.46c568bc.js";import"./_baseIteratee.9655ef6b.js";import"./get.9f08d1a5.js";import"./DeleteOutlined.d4d5ebae.js";import"./index.0f0cf900.js";import"./useRefs.31b824e4.js";import"./Form.41e509ff.js";import"./Col.ba611277.js";import"./useFlexGapSupport.28e961f9.js";import"./useSize.aa4022ca.js";import"./useWindowSizeFn.54947215.js";import"./index.d23d5e7f.js";import"./sortable.esm.c081a59d.js";import"./RedoOutlined.d982c887.js";import"./FullscreenOutlined.d8f1076a.js";import"./index.ae783029.js";import"./fromPairs.daf93cb7.js";import"./scrollTo.a7aa9d8e.js";import"./index.11816690.js";/* empty css              *//* empty css               */import"./index.249616b7.js";import"./transButton.76f8f88c.js";import"./index.7b2c1cea.js";import"./index.847bc6c1.js";import"./download.102dd35e.js";import"./base64Conver.08b9f4ec.js";import"./index.2f746864.js";import"./index.196769f5.js";import"./uniqBy.c3dbbda0.js";import"./index.6c70cdbc.js";import"./index.f51813a8.js";import"./useContentViewHeight.1814e20c.js";import"./ArrowLeftOutlined.20c8fc9b.js";import"./index.0934399d.js";const pe=ne({name:"FlowListener",components:{PageWrapper:ae,Tag:re,BasicTable:W,TableAction:N,ListenerModal:se,ListenerPropertiesModal:le},setup(){const[e,{openModal:b,setModalProps:p}]=O(),f=g({}),y=g({}),T=g({}),u=g(!1),r=g([]),n=g({}),[s,{openModal:F,setModalProps:v}]=O(),[M,{reload:a,getForm:i,setProps:B}]=H({title:"\u5217\u8868",api:q,columns:G,formConfig:{labelWidth:80,schemas:J,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},expandedRowKeys:r,expandRowByClick:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!0,showTableSetting:!1,rowKey:"id",canResize:!0,onExpand:(t,o)=>{t?(r.value=[o.id],n.value=o,S(o.id)):r.value=[]},actionColumn:{width:150,title:"\u64CD\u4F5C",dataIndex:"action"}});function S(t){u.value=!0,Q({listenerId:t}).then(o=>{o&&o.length>0?f.value[t]=o:f.value[t]=[]}).finally(()=>{u.value=!1})}function w(){return _(this,null,function*(){const{validate:t}=i(),o=yield t();b(!0,{isUpdate:!1,record:{listenerType:o.listenerType||"taskListener"}}),p({title:"\u65B0\u589E\u76D1\u542C"})})}ie(()=>{X().then(o=>{o.forEach(d=>{C(y)[d.value]=d.label})});const{updateSchema:t}=i();Y().then(o=>{o.forEach(d=>{C(T)[d.value]=d.label}),t([{field:"listenerType",componentProps:{options:o,onChange:ft=>_(this,[ft],function*({target:d}){const{setFieldsValue:V}=i();yield V({name:""}),B({searchInfo:{listenerType:d.value}}),a()})}}])})});function E(t,o){o.stopPropagation(),n.value=t,F(!0,{isUpdate:!1,record:{listenerId:t.id,type:"string"}}),v({title:`\u6DFB\u52A0\u3010${t.name}\u3011\u7684\u5C5E\u6027`})}function j(t){F(!0,{isUpdate:!0,record:t}),v({title:`\u4FEE\u6539\u3010${t.name}\u3011\u7684\u5C5E\u6027`})}function I(t,o){o.stopPropagation(),b(!0,{record:t,isUpdate:!0})}function U(t,o){o.stopPropagation(),ee(t.id).then(()=>{a()})}function $(){setTimeout(()=>{a()},200)}function x(){return setTimeout(()=>{a()},200),Promise.resolve(!0)}function K(t){te(t.id).then(()=>{S(C(n).id)}).finally(()=>{})}function z(){S(C(n).id),r.value=[C(n).id]}return{registerTable:M,registerModal:e,registerPropertiesModal:s,expressionTypeObj:y,listenerTypeObj:T,propertiesColumns:Z,listenerPropertiesData:f,propertiesTableLoading:u,handleDeleteProperty:K,handleCloseFunc:x,handleCreate:w,handleEditProperties:j,handleAddProperties:E,handleEdit:I,handleDelete:U,handleSuccess:$,handleUpdateSecretKeySuccess:z}}});function ue(e,b,p,f,y,T){const u=m("a-button"),r=m("TableAction"),n=m("Tag"),s=m("BasicTable"),F=m("ListenerModal"),v=m("ListenerPropertiesModal"),M=m("PageWrapper");return c(),P(M,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:l(()=>[k(s,{onRegister:e.registerTable,class:"custom-listener-table"},{toolbar:l(()=>[k(u,{type:"primary",onClick:e.handleCreate},{default:l(()=>[L(" \u65B0\u589E ")]),_:1},8,["onClick"])]),bodyCell:l(({column:a,record:i})=>[a.key==="action"?(c(),P(r,{key:0,actions:[{icon:"ant-design:plus-outlined",tooltip:"\u6DFB\u52A0\u53C2\u6570",onClick:e.handleAddProperties.bind(null,i)},{tooltip:"\u4FEE\u6539",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,i)},{tooltip:"\u5220\u9664",icon:"ant-design:delete-outlined",color:"error",onClick:B=>{B.stopPropagation()},popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:e.handleDelete.bind(null,i),placement:"left"}}]},null,8,["actions"])):h("",!0),a.key==="listenerType"?(c(),D(A,{key:1},[i.listenerType==="taskListener"?(c(),P(n,{key:0,color:"default"},{default:l(()=>[L(R(e.listenerTypeObj[i.listenerType]),1)]),_:2},1024)):h("",!0),i.listenerType==="executionListener"?(c(),P(n,{key:1,color:"processing"},{default:l(()=>[L(R(e.listenerTypeObj[i.listenerType]),1)]),_:2},1024)):h("",!0)],64)):h("",!0),a.key==="type"?(c(),D(A,{key:2},[L(R(e.expressionTypeObj[i.type]),1)],64)):h("",!0)]),expandedRowRender:l(({record:a,index:i,indent:B,expanded:S})=>[k(s,{title:"",size:"small",columns:e.propertiesColumns,useSearchForm:!1,immediate:!1,showIndexColumn:!0,showTableSetting:!1,bordered:!0,pagination:!1,emptyDataIsShowTable:!1,inset:!0,rowKey:"id",canResize:!1,loading:e.propertiesTableLoading,dataSource:e.listenerPropertiesData[a.id]},{bodyCell:l(({column:w,record:E})=>[w.key==="option"?(c(),P(r,{key:0,actions:[{icon:"clarity:note-edit-line",title:"\u7F16\u8F91",onClick:e.handleEditProperties.bind(null,E)},{icon:"ant-design:delete-outlined",color:"error",title:"\u5220\u9664",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:e.handleDeleteProperty.bind(null,E),placement:"left"}}]},null,8,["actions"])):h("",!0)]),_:2},1032,["columns","loading","dataSource"])]),_:1},8,["onRegister"]),k(F,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"]),k(v,{onRegister:e.registerPropertiesModal,onSuccess:e.handleUpdateSecretKeySuccess,closeFunc:e.handleCloseFunc},null,8,["onRegister","onSuccess","closeFunc"])]),_:1})}var mt=oe(pe,[["render",ue]]);export{mt as default};