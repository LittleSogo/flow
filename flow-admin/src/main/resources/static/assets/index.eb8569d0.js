var f=(e,p,r)=>new Promise((c,i)=>{var d=t=>{try{o(r.next(t))}catch(a){i(a)}},s=t=>{try{o(r.throw(t))}catch(a){i(a)}},o=t=>t.done?c(t.value):Promise.resolve(t.value).then(d,s);o((r=r.apply(e,p)).next())});import{B as E}from"./BasicForm.6afa01de.js";import{u as b}from"./useForm.1fd322f5.js";import P from"./PersonTable.4fefb810.js";import{P as x}from"./index.77f474a0.js";import{A as F,bb as _,r as A,a0 as l,B as g,a1 as C,a6 as n,w as u,ae as v}from"./vendor.7bee64cc.js";/* empty css               *//* empty css               *//* empty css               */import{_ as D}from"./index.9eb02b52.js";/* empty css               *//* empty css               *//* empty css                *//* empty css              *//* empty css               *//* empty css                *//* empty css                */import"./index.1445cecb.js";/* empty css                *//* empty css                *//* empty css                */import"./index.30115123.js";import"./useWindowSizeFn.30e15ddc.js";/* empty css                */import"./uuid.2b29000c.js";import"./download.78bd314d.js";import"./base64Conver.bb012c73.js";import"./index.83641cbd.js";import"./TableImg.73863b69.js";import"./useSortable.dd731734.js";/* empty css                */import"./useTable.7c1e4a10.js";/* empty css                *//* empty css                */import"./useContentViewHeight.52836077.js";const m=[{label:"\u4ED8\u6653\u6653",value:"1"},{label:"\u5468\u6BDB\u6BDB",value:"2"}],j=[{label:"\u79C1\u5BC6",value:"1"},{label:"\u516C\u5F00",value:"2"}],h=[{field:"f1",component:"Input",label:"\u4ED3\u5E93\u540D",required:!0},{field:"f2",component:"Input",label:"\u4ED3\u5E93\u57DF\u540D",required:!0,componentProps:{addonBefore:"http://",addonAfter:"com"},colProps:{offset:2}},{field:"f3",component:"Select",label:"\u4ED3\u5E93\u7BA1\u7406\u5458",componentProps:{options:m},required:!0,colProps:{offset:2}},{field:"f4",component:"Select",label:"\u5BA1\u6279\u4EBA",componentProps:{options:m},required:!0},{field:"f5",component:"RangePicker",label:"\u751F\u6548\u65E5\u671F",required:!0,colProps:{offset:2}},{field:"f6",component:"Select",label:"\u4ED3\u5E93\u7C7B\u578B",componentProps:{options:j},required:!0,colProps:{offset:2}}],q=[{field:"t1",component:"Input",label:"\u4EFB\u52A1\u540D",required:!0},{field:"t2",component:"Input",label:"\u4EFB\u52A1\u63CF\u8FF0",required:!0,colProps:{offset:2}},{field:"t3",component:"Select",label:"\u6267\u884C\u4EBA",componentProps:{options:m},required:!0,colProps:{offset:2}},{field:"t4",component:"Select",label:"\u8D23\u4EFB\u4EBA",componentProps:{options:m},required:!0},{field:"t5",component:"TimePicker",label:"\u751F\u6548\u65E5\u671F",required:!0,componentProps:{style:{width:"100%"}},colProps:{offset:2}},{field:"t6",component:"Select",label:"\u4EFB\u52A1\u7C7B\u578B",componentProps:{options:j},required:!0,colProps:{offset:2}}];const T=F({name:"FormHightPage",components:{BasicForm:E,PersonTable:P,PageWrapper:x,[_.name]:_},setup(){const e=A(null),[p,{validate:r}]=b({baseColProps:{span:6},schemas:h,showActionButtonGroup:!1}),[c,{validate:i}]=b({baseColProps:{span:6},schemas:q,showActionButtonGroup:!1});function d(){return f(this,null,function*(){try{e.value&&console.log("table data:",e.value.getDataSource());const[s,o]=yield Promise.all([r(),i()]);console.log("form data:",s,o)}catch(s){}})}return{register:p,registerTask:c,submitAll:d,tableRef:e}}}),k=v(" \u63D0\u4EA4 ");function S(e,p,r,c,i,d){const s=l("BasicForm"),o=l("a-card"),t=l("PersonTable"),a=l("a-button"),B=l("PageWrapper");return g(),C(B,{class:"high-form",title:"\u9AD8\u7EA7\u8868\u5355",content:" \u9AD8\u7EA7\u8868\u5355\u5E38\u89C1\u4E8E\u4E00\u6B21\u6027\u8F93\u5165\u548C\u63D0\u4EA4\u5927\u6279\u91CF\u6570\u636E\u7684\u573A\u666F\u3002"},{rightFooter:n(()=>[u(a,{type:"primary",onClick:e.submitAll},{default:n(()=>[k]),_:1},8,["onClick"])]),default:n(()=>[u(o,{title:"\u4ED3\u5E93\u7BA1\u7406",bordered:!1},{default:n(()=>[u(s,{onRegister:e.register},null,8,["onRegister"])]),_:1}),u(o,{title:"\u4EFB\u52A1\u7BA1\u7406",bordered:!1,class:"!mt-5"},{default:n(()=>[u(s,{onRegister:e.registerTask},null,8,["onRegister"])]),_:1}),u(o,{title:"\u6210\u5458\u7BA1\u7406",bordered:!1},{default:n(()=>[u(t,{ref:"tableRef"},null,512)]),_:1})]),_:1})}var fe=D(T,[["render",S],["__scopeId","data-v-63cb25a8"]]);export{fe as default};