import{A as d,bP as r,j as c,a0 as l,B as p,D as m,H as u,J as h,w as f,a4 as j,K as C}from"./vendor.5879c5ca.js";/* empty css                */import{_ as b,a as g,b as _}from"./index.e84e956c.js";import{b as v}from"./index.fb63d7f0.js";import"./index.b78cb146.js";/* empty css               *//* empty css               */import"./index.26d10332.js";import"./index.96c912c6.js";import"./useWindowSizeFn.6a6adedd.js";import"./useContentViewHeight.ccc8749b.js";import"./useFrameKeepAlive.6cc008f1.js";/* empty css               */import"./useSortable.a10c06e7.js";import"./lock.cd1c3bea.js";const w=d({name:"SwitchItem",components:{Switch:r},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=g("setting-switch-item"),{t:n}=_(),s=c(()=>e.def?{checked:e.def}:{});function i(a){e.event&&v(e.event,a)}return{prefixCls:t,t:n,handleChange:i,getBindValue:s}}});function S(e,t,n,s,i,a){const o=l("Switch");return p(),m("div",{class:C(e.prefixCls)},[u("span",null,h(e.title),1),f(o,j(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}var E=b(w,[["render",S],["__scopeId","data-v-fd7354e2"]]);export{E as default};