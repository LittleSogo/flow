import{L as I,a as $,cP as U,bf as D,c2 as v,aM as b,b as N,q as O,s as P,e as S,aF as t,o as n,f as A,m as r,z as d,i as f,j as _,l as s,p as a,t as x,F as E,aP as R}from"./index.d7db7941.js";import{D as V}from"./siteSetting.b6bf29aa.js";import{c as y,u as B}from"./index.46293212.js";import{b as F}from"./index.0922b999.js";import{h as T}from"./header.d801b988.js";import"./FullscreenOutlined.7a29164d.js";import"./index.723dea8e.js";import"./useWindowSizeFn.fa340538.js";import"./uniqBy.f8925807.js";import"./_baseIteratee.89f1a18c.js";import"./get.558ce533.js";import"./useContentViewHeight.0228a7d7.js";import"./index.30c2ac05.js";import"./useRefs.60c405ca.js";import"./PlusOutlined.10edf23b.js";import"./RedoOutlined.be0605f1.js";import"./index.687174df.js";import"./lock.5e943e8f.js";const z=$({name:"UserDropdown",components:{Dropdown:U,Menu:D,MenuItem:y(()=>v(()=>import("./DropMenuItem.a0abe404.js"),["assets/DropMenuItem.a0abe404.js","assets/index.d7db7941.js","assets/index.376ee235.css"])),MenuDivider:D.Divider,LockAction:y(()=>v(()=>import("./LockModal.fc09354b.js"),["assets/LockModal.fc09354b.js","assets/LockModal.0068f88c.css","assets/index.d7db7941.js","assets/index.376ee235.css","assets/index.0922b999.js","assets/index.cea505c1.css","assets/useWindowSizeFn.fa340538.js","assets/FullscreenOutlined.7a29164d.js","assets/useForm.35e640d7.js","assets/useForm.9fe0ab02.css","assets/index.9d45aba3.js","assets/index.85b409f6.css","assets/index.b9d775df.js","assets/index.a18cc309.css","assets/useFlexGapSupport.0c54ffc5.js","assets/_baseIteratee.89f1a18c.js","assets/get.558ce533.js","assets/useSize.03a1e437.js","assets/index.cf18845b.js","assets/index.3a3c1369.css","assets/index.c7a70ca5.js","assets/index.d0e0ddc5.css","assets/index.d0854049.js","assets/index.509096c8.css","assets/index.85385254.js","assets/index.9cc25cf1.css","assets/index.a10f91ac.js","assets/index.fd6807f6.css","assets/index.7dc62294.js","assets/index.7b8b5e30.css","assets/eagerComputed.032ae1e2.js","assets/transButton.6ad260fa.js","assets/index.04fcf6e8.js","assets/index.cd256673.css","assets/useRefs.60c405ca.js","assets/download.f78a3e1c.js","assets/index.bf2dcf62.js","assets/index.88b1d373.css","assets/ClockCircleOutlined.87ccf2be.js","assets/index.3c9af19b.js","assets/uniqBy.f8925807.js","assets/lock.5e943e8f.js","assets/header.d801b988.js"]))},props:{theme:b.oneOf(["dark","light"])},setup(){const{prefixCls:e}=N("header-user-dropdown"),{t:g}=O(),{getShowDoc:k,getUseLockPage:h}=B(),i=P(),C=S(()=>{const{realName:u="",image:L,desc:M}=i.getUserInfo||{};return{realName:u,avatar:L||T,desc:M}}),[o,{openModal:l}]=F();function c(){l(!0)}function p(){i.confirmLoginOut()}function m(){R(V)}function w(u){switch(u.key){case"logout":p();break;case"doc":m();break;case"lock":c();break}}return{prefixCls:e,t:g,getUserInfo:C,handleMenuClick:w,getShowDoc:k,register:o,getUseLockPage:h}}}),j=["src"];function q(e,g,k,h,i,C){const o=t("MenuItem"),l=t("MenuDivider"),c=t("Menu"),p=t("Dropdown"),m=t("LockAction");return n(),A(E,null,[r(p,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:d(()=>[r(c,{onClick:e.handleMenuClick},{default:d(()=>[e.getShowDoc?(n(),f(o,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):_("",!0),e.getShowDoc?(n(),f(l,{key:1})):_("",!0),e.getUseLockPage?(n(),f(o,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):_("",!0),r(o,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:d(()=>[s("span",{class:a([[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"])},[s("img",{class:a(`${e.prefixCls}__header`),src:e.getUserInfo.avatar},null,10,j),s("span",{class:a(`${e.prefixCls}__info hidden md:block`)},[s("span",{class:a([`${e.prefixCls}__name  `,"truncate"])},x(e.getUserInfo.realName),3)],2)],2)]),_:1},8,["overlayClassName"]),r(m,{onRegister:e.register},null,8,["onRegister"])],64)}var ce=I(z,[["render",q]]);export{ce as default};