import e from"./CurrentPermissionMode.3e294455.js";import{al as s,f as t,X as o,b6 as n,b7 as a}from"./index.4926e6da.js";import{P as i}from"./index.0aed0d9d.js";import{y as r,bE as d,j as c,z as m,A as u,Z as l,B as f,F as p,v as b,K as k,a9 as j}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./onMountedOrActivated.8f899bfb.js";import"./useWindowSizeFn.564cf32e.js";import"./useContentViewHeight.dbded6ea.js";var v=r({components:{Alert:d,CurrentPermissionMode:e,PageWrapper:i},setup(){const{refreshMenu:e}=s(),i=t(),r=o(),d=c((()=>r.getProjectConfig.permissionMode===a.BACK));return{RoleEnum:n,refreshMenu:e,switchToken:function(s){return t=this,o=null,n=function*(){const t="fakeToken"+s;i.setToken(t),i.getUserInfoAction(),e()},new Promise(((e,s)=>{var a=e=>{try{r(n.next(e))}catch(t){s(t)}},i=e=>{try{r(n.throw(e))}catch(t){s(t)}},r=s=>s.done?e(s.value):Promise.resolve(s.value).then(a,i);r((n=n.apply(t,o)).next())}));var t,o,n},isBackPremissionMode:d}}});const h=k("data-v-45cf91b6");m("data-v-45cf91b6");const P={class:"mt-4"},M=j(" 权限切换(请先切换权限模式为后台权限模式): "),g=j(" 获取用户id为1的菜单 "),x=j(" 获取用户id为2的菜单 ");u();const C=h(((e,s,t,o,n,a)=>{const i=l("CurrentPermissionMode"),r=l("Alert"),d=l("a-button"),c=l("a-button-group"),m=l("PageWrapper");return f(),p(m,{title:"后台权限示例",contentBackground:"",contentClass:"p-4",content:"目前mock了两组数据， id为1 和 2 具体返回的菜单可以在mock/sys/menu.ts内查看"},{default:h((()=>[b(i),b(r,{class:"mt-4",type:"info",message:"点击后请查看左侧菜单变化","show-icon":""}),b("div",P,[M,b(c,null,{default:h((()=>[b(d,{onClick:s[1]||(s[1]=s=>e.switchToken(1)),disabled:!e.isBackPremissionMode},{default:h((()=>[g])),_:1},8,["disabled"]),b(d,{onClick:s[2]||(s[2]=s=>e.switchToken(2)),disabled:!e.isBackPremissionMode},{default:h((()=>[x])),_:1},8,["disabled"])])),_:1})])])),_:1})}));v.render=C,v.__scopeId="data-v-45cf91b6";export default v;