import{J as e,p as o,c as t,f as s,e as a,o as r}from"./index.04486bdf.js";import{j as n,aw as i,ax as l,i as c,K as d,o as m,m as p,n as u,Q as f,X as g,q as k,V as x}from"./vendor.686fd1d4.js";import{D as h}from"./siteSetting.136c2269.js";import{c as _,u as j}from"./index.632f4a8c.js";import{b as w}from"./index.13a30da8.js";import{h as b}from"./header.d801b988.js";import"./index.1a64133a.js";import"./useWindowSizeFn.d82e06bf.js";import"./useFrameKeepAlive.7d9b9537.js";import"./useContentViewHeight.c5b829cb.js";/* empty css              *//* empty css              */import"./useSortable.979115a3.js";import"./lock.f1d58193.js";var C=n({name:"UserDropdown",components:{Dropdown:i,Menu:l,MenuItem:_((()=>e((()=>import("./DropMenuItem.c0de6c45.js")),["/assets/DropMenuItem.c0de6c45.js","/assets/vendor.686fd1d4.js","/assets/vendor.caa95c00.css","/assets/index.04486bdf.js","/assets/index.b89ee803.css"]))),MenuDivider:l.Divider,LockAction:_((()=>e((()=>import("./LockModal.d7e93bf7.js")),["/assets/LockModal.d7e93bf7.js","/assets/LockModal.8fa08283.css","/assets/index.fa262950.css","/assets/index.0edc9df2.css","/assets/index.8f1364b3.css","/assets/index.1028f51b.css","/assets/index.80c4f864.css","/assets/index.2558ae94.css","/assets/index.5dcbaae4.css","/assets/index.cc3997a0.css","/assets/index.29c0da9f.css","/assets/index.d060b1b4.css","/assets/index.6d85b653.css","/assets/index.13a891d2.css","/assets/index.04486bdf.js","/assets/index.b89ee803.css","/assets/vendor.686fd1d4.js","/assets/vendor.caa95c00.css","/assets/index.13a30da8.js","/assets/index.6379c5f3.css","/assets/useWindowSizeFn.d82e06bf.js","/assets/BasicForm.adb2a199.js","/assets/BasicForm.c64f5389.css","/assets/index.a84c0e16.js","/assets/index.07759353.css","/assets/uuid.2b29000c.js","/assets/download.45a835c8.js","/assets/base64Conver.bb012c73.js","/assets/index.9702aa73.js","/assets/index.eeabf1c4.css","/assets/useForm.40c52001.js","/assets/lock.f1d58193.js","/assets/header.d801b988.js"])))},props:{theme:o.oneOf(["dark","light"])},setup(){const{prefixCls:e}=t("header-user-dropdown"),{t:o}=a(),{getShowDoc:n,getUseLockPage:i}=j(),l=s(),d=c((()=>{const{realName:e="",image:o,desc:t}=l.getUserInfo||{};return{realName:e,avatar:o||b,desc:t}})),[m,{openModal:p}]=w();return{prefixCls:e,t:o,getUserInfo:d,handleMenuClick:function(e){switch(e.key){case"logout":l.confirmLoginOut();break;case"doc":r(h);break;case"lock":p(!0)}},getShowDoc:n,register:m,getUseLockPage:i}}});C.render=function(e,o,t,s,a,r){const n=d("MenuItem"),i=d("MenuDivider"),l=d("Menu"),c=d("Dropdown"),h=d("LockAction");return m(),p(x,null,[u(c,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:f((()=>[u(l,{onClick:e.handleMenuClick},{default:f((()=>[e.getShowDoc?(m(),p(n,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):g("",!0),e.getShowDoc?(m(),p(i,{key:1})):g("",!0),e.getUseLockPage?(m(),p(n,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):g("",!0),u(n,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])])),_:1},8,["onClick"])])),default:f((()=>[u("span",{class:[[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"]},[u("img",{class:`${e.prefixCls}__header`,src:e.getUserInfo.avatar},null,10,["src"]),u("span",{class:`${e.prefixCls}__info hidden md:block`},[u("span",{class:[`${e.prefixCls}__name  `,"truncate"]},k(e.getUserInfo.realName),3)],2)],2)])),_:1},8,["overlayClassName"]),u(h,{onRegister:e.register},null,8,["onRegister"])],64)};export default C;