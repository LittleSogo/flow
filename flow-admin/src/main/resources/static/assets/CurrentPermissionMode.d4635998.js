import{a as m,u as p,h as c,dy as d,fA as l,az as _,aB as i,o as F,i as f,C as o,p as s,B as r,t as C}from"./index.741c5d36.js";import{D as A}from"./index.d23d5e7f.js";const M=m({name:"CurrentPermissionMode",components:{Divider:A},setup(){const e=p(),t=c(()=>e.getProjectConfig.permissionMode),{togglePermissionMode:n}=d();return{permissionMode:t,PermissionModeEnum:l,togglePermissionMode:n}}}),D={class:"mt-2"};function P(e,t,n,g,v,k){const u=i("a-button"),a=i("Divider");return F(),f("div",D,[o(" \u5F53\u524D\u6743\u9650\u6A21\u5F0F\uFF1A "),s(u,{type:"link"},{default:r(()=>[o(C(e.permissionMode===e.PermissionModeEnum.BACK?"\u540E\u53F0\u6743\u9650\u6A21\u5F0F":"\u524D\u7AEF\u89D2\u8272\u6743\u9650\u6A21\u5F0F"),1)]),_:1}),s(u,{class:"ml-4",onClick:e.togglePermissionMode,type:"primary"},{default:r(()=>[o(" \u5207\u6362\u6743\u9650\u6A21\u5F0F ")]),_:1},8,["onClick"]),s(a)])}var E=_(M,[["render",P]]);export{E as default};