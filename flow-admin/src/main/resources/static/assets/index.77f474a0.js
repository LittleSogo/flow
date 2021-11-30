var te=Object.defineProperty,oe=Object.defineProperties;var ne=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;var M=(e,t,n)=>t in e?te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,E=(e,t)=>{for(var n in t||(t={}))ae.call(t,n)&&M(e,n,t[n]);if(I)for(var n of I(t))re.call(t,n)&&M(e,n,t[n]);return e},K=(e,t)=>oe(e,ne(t));var X=(e,t,n)=>new Promise((C,f)=>{var b=r=>{try{l(n.next(r))}catch(h){f(h)}},p=r=>{try{l(n.throw(r))}catch(h){f(h)}},l=r=>r.done?C(r.value):Promise.resolve(r.value).then(b,p);l((n=n.apply(e,t)).next())});import{a as J,x as se,_ as L,ae as ie,j as le,k as ce,p as d,w as U}from"./index.9eb02b52.js";import{A as Z,B as j,D,H as N,a7 as F,K as W,X as q,_ as ue,$ as T,bu as ge,r as R,u as H,bv as fe,S as x,bw as de,R as pe,j as v,o as G,a0 as O,a1 as Q,aD as he,ap as me,a6 as z,ab as He,ae as Ce,J as be,a4 as $e,ad as Y,aC as Fe,aS as ve}from"./vendor.7bee64cc.js";/* empty css                *//* empty css                */import{u as ye}from"./useWindowSizeFn.30e15ddc.js";import{a as Pe}from"./useContentViewHeight.52836077.js";const Se=Z({name:"PageFooter",inheritAttrs:!1,setup(){const{prefixCls:e}=J("page-footer"),{getCalcContentWidth:t}=se();return{prefixCls:e,getCalcContentWidth:t}}});function _e(e,t,n,C,f,b){return j(),D("div",{class:W(e.prefixCls),style:q({width:e.getCalcContentWidth})},[N("div",{class:W(`${e.prefixCls}__left`)},[F(e.$slots,"left",{},void 0,!0)],2),F(e.$slots,"default",{},void 0,!0),N("div",{class:W(`${e.prefixCls}__right`)},[F(e.$slots,"right",{},void 0,!0)],2)],6)}var ee=L(Se,[["render",_e],["__scopeId","data-v-7984b8f2"]]);function we(e){let t;ue(()=>{e(),T(()=>{t=!0})}),ge(()=>{t&&e()})}function Re(e,t,n,C,f=0,b=R(0)){const p=R(null),{footerHeightRef:l}=Pe();let r={useLayoutFooter:!0};const h=a=>{r=a};function A(){T(()=>{_()})}function y(a,w="all"){var g,P,$,B;function m(o){return Number(o.replace(/[^\d]/g,""))}let u=0;const s="0px";if(a){const o=getComputedStyle(a),c=m((g=o==null?void 0:o.marginTop)!=null?g:s),i=m((P=o==null?void 0:o.marginBottom)!=null?P:s),k=m(($=o==null?void 0:o.paddingTop)!=null?$:s),V=m((B=o==null?void 0:o.paddingBottom)!=null?B:s);w==="all"?(u+=c,u+=i,u+=k,u+=V):w==="top"?(u+=c,u+=k):(u+=i,u+=V)}return u}function S(a){return a==null?null:a instanceof HTMLDivElement?a:a.$el}function _(){return X(this,null,function*(){var B;if(!e.value)return;yield T();const a=S(H(t));if(!a)return;const{bottomIncludeBody:w}=ie(a);let m=0;n.forEach(o=>{var c,i;m+=(i=(c=S(H(o)))==null?void 0:c.offsetHeight)!=null?i:0});let u=(B=y(a))!=null?B:0;C.forEach(o=>{u+=y(S(H(o)))});let s=0;function g(o,c){if(o&&c){const i=o.parentElement;i&&(le(c)?i.classList.contains(c)?s+=y(i,"bottom"):(s+=y(i,"bottom"),g(i,c)):ce(c)&&c>0&&(s+=y(i,"bottom"),g(i,--c)))}}fe(f)?g(a,H(f)):g(a,f);let P=w-H(l)-H(b)-m-u-s;const $=()=>{var o;(o=r.elements)==null||o.forEach(c=>{var i,k;P+=(k=(i=S(H(c)))==null?void 0:i.offsetHeight)!=null?k:0})};r.useLayoutFooter&&H(l)>0,$(),p.value=P})}return we(()=>{T(()=>{_()})}),ye(()=>{_()},50,{immediate:!0}),x(()=>[l.value],()=>{_()},{flush:"post",immediate:!0}),{redoHeight:A,setCompensation:h,contentHeight:p}}const Be=Z({name:"PageWrapper",components:{PageFooter:ee,PageHeader:de},inheritAttrs:!1,props:{title:d.string,dense:d.bool,ghost:d.bool,content:d.string,contentStyle:{type:Object},contentBackground:d.bool,contentFullHeight:d.bool,contentClass:d.string,fixedHeight:d.bool,upwardSpace:d.oneOfType([d.number,d.string]).def(0)},setup(e,{slots:t,attrs:n}){const C=R(null),f=R(null),b=R(null),p=R(null),{prefixCls:l}=J("page-wrapper");pe(We,v(()=>e.fixedHeight));const r=v(()=>e.contentFullHeight),h=v(()=>e.upwardSpace),{redoHeight:A,setCompensation:y,contentHeight:S}=Re(r,C,[f,p],[b],h);y({useLayoutFooter:!0,elements:[p]});const _=v(()=>{var s;return[l,{[`${l}--dense`]:e.dense},(s=n.class)!=null?s:{}]}),a=v(()=>(t==null?void 0:t.leftFooter)||(t==null?void 0:t.rightFooter)),w=v(()=>Object.keys(G(t,"default","leftFooter","rightFooter","headerContent"))),m=v(()=>{const{contentFullHeight:s,contentStyle:g,fixedHeight:P}=e;if(!s)return E({},g);const $=`${H(S)}px`;return E(K(E({},g),{minHeight:$}),P?{height:$}:{})}),u=v(()=>{const{contentBackground:s,contentClass:g}=e;return[`${l}-content`,g,{[`${l}-content-bg`]:s}]});return x(()=>[a.value],()=>{A()},{flush:"post",immediate:!0}),{getContentStyle:m,wrapperRef:C,headerRef:f,contentRef:b,footerRef:p,getClass:_,getHeaderSlots:w,prefixCls:l,getShowFooter:a,omit:G,getContentClass:u}}});function ke(e,t,n,C,f,b){const p=O("PageHeader"),l=O("PageFooter");return j(),D("div",{class:W(e.getClass),ref:"wrapperRef"},[e.content||e.$slots.headerContent||e.title||e.getHeaderSlots.length?(j(),Q(p,$e({key:0,ghost:e.ghost,title:e.title},e.omit(e.$attrs,"class"),{ref:"headerRef"}),he({default:z(()=>[e.content?(j(),D(He,{key:0},[Ce(be(e.content),1)],64)):F(e.$slots,"headerContent",{key:1})]),_:2},[me(e.getHeaderSlots,r=>({name:r,fn:z(h=>[F(e.$slots,r,Fe(ve(h||{})))])}))]),1040,["ghost","title"])):Y("",!0),N("div",{class:W(["overflow-hidden",e.getContentClass]),style:q(e.getContentStyle),ref:"contentRef"},[F(e.$slots,"default")],6),e.getShowFooter?(j(),Q(l,{key:1,ref:"footerRef"},{left:z(()=>[F(e.$slots,"leftFooter")]),right:z(()=>[F(e.$slots,"rightFooter")]),_:3},512)):Y("",!0)],2)}var je=L(Be,[["render",ke]]);U(ee);const Ie=U(je),We="PageWrapperFixedHeight";export{Ie as P,We as a,we as o};