import{a as k,aJ as Q,c as Z,h as w,aK as ee,az as B,aB as _,i as C,j as M,q as o,C as S,aF as te,G as ne,aE as oe,l as T,aG as ae,aC as R,aD as se,s as re,y as ie,x as O,N as le,k as f,ca as ce,D as X,dd as ue,de as me,fa as de,fb as ge}from"./index.ef013507.js";import{I as W}from"./index.27c2d820.js";import{P as fe}from"./index.4dfdb4ab.js";import"./index.1eabbb9a.js";import"./index.0210df95.js";import"./useSize.55446702.js";import"./eagerComputed.487f958f.js";import"./useWindowSizeFn.37be93ea.js";import"./useContentViewHeight.d02bb685.js";import"./ArrowLeftOutlined.5616a4a1.js";import"./index.412dcca9.js";import"./transButton.750f7635.js";const pe=k({name:"ImagePreview",components:{Image:W,PreviewGroup:W.PreviewGroup},props:{functional:Q.bool,imageList:{type:Array}},setup(n){const{prefixCls:u}=Z("image-preview"),l=w(()=>{const{imageList:r}=n;return r?r.map(t=>ee(t)?{src:t,placeholder:!1}:t):[]});return{prefixCls:u,getImageList:l}}});function ve(n,u,l,r,t,h){const d=_("Image"),p=_("PreviewGroup");return C(),M("div",{class:re(n.prefixCls)},[o(p,null,{default:S(()=>[!n.imageList||n.$slots.default?te(n.$slots,"default",{key:0}):(C(!0),M(ne,{key:1},oe(n.getImageList,c=>(C(),T(d,ae(R({key:c.src},c)),se({_:2},[c.placeholder?{name:"placeholder",fn:S(()=>[o(d,R(c,{src:c.placeholder,preview:!1}),null,16,["src"])]),key:"0"}:void 0]),1040))),128))]),_:3})],2)}var _e=B(pe,[["render",ve]]),he="/assets/resume.6e209205.svg",Ie="/assets/p-rotate.1d232189.svg",Le="/assets/scale.8d8ebde4.svg",we="/assets/unscale.99ad049c.svg",Ce="/assets/unrotate.f9dd5a27.svg",g;(function(n){n[n.LOADING=0]="LOADING",n[n.DONE=1]="DONE",n[n.FAIL=2]="FAIL"})(g||(g={}));const Se={show:{type:Boolean,default:!1},imageList:{type:[Array],default:null},index:{type:Number,default:0},scaleStep:{type:Number},defaultWidth:{type:Number},maskClosable:{type:Boolean},rememberState:{type:Boolean}},s="img-preview";var $e=k({name:"ImagePreview",props:Se,emits:["img-load","img-error"],setup(n,{expose:u,emit:l}){const r=new Map,t=ie({currentUrl:"",imgScale:1,imgRotate:0,imgTop:0,imgLeft:0,status:g.LOADING,currentIndex:0,moveX:0,moveY:0,show:n.show}),h=O(null),d=O(null);function p(){Y();const{index:e,imageList:a}=n;if(!a||!a.length)throw new Error("imageList is undefined");t.currentIndex=e,P(a[e])}function c(){t.imgScale=1,t.imgRotate=0,t.imgTop=0,t.imgLeft=0}function Y(){const e=f(h);!e||(e.onmousewheel=$,document.body.addEventListener("DOMMouseScroll",$),document.ondragstart=function(){return!1})}const I=w(()=>{var a;const e=(a=n==null?void 0:n.scaleStep)!=null?a:0;return(e!=null?e:0>0)?e/100:t.imgScale/10});function $(e){e=e||window.event,e.delta=e.wheelDelta||-e.detail,e.preventDefault(),e.delta>0&&L(I.value),e.delta<0&&L(-I.value)}function L(e){t.imgScale<=.2&&e<0||(t.imgScale+=e*.1,t.imgScale<0&&(t.imgScale=.02))}function F(e){t.imgRotate+=e}function U(){const e=f(d);!e||(e.onmousemove=null)}function P(e){t.status=g.LOADING;const a=new Image;a.src=e,a.onload=i=>{if(t.currentUrl!==e){const m=i.composedPath();if(n.rememberState){r.set(t.currentUrl,{scale:t.imgScale,top:t.imgTop,left:t.imgLeft,rotate:t.imgRotate});const v=r.get(e);v?(t.imgScale=v.scale,t.imgTop=v.top,t.imgRotate=v.rotate,t.imgLeft=v.left):(c(),n.defaultWidth&&(t.imgScale=n.defaultWidth/m[0].naturalWidth))}else n.defaultWidth&&(t.imgScale=n.defaultWidth/m[0].naturalWidth);m&&l("img-load",{index:t.currentIndex,dom:m[0],url:e})}t.currentUrl=e,t.status=g.DONE},a.onerror=i=>{const m=i.composedPath();m&&l("img-error",{index:t.currentIndex,dom:m[0],url:e}),t.status=g.FAIL}}function b(e){e&&e.stopPropagation(),A()}function A(){t.show=!1,document.body.removeEventListener("DOMMouseScroll",$),document.ondragstart=null}function D(){c()}u({resume:D,close:A,prev:x.bind(null,"left"),next:x.bind(null,"right"),setScale:e=>{e>0&&e<=10&&(t.imgScale=e)},setRotate:e=>{t.imgRotate=e}});function x(e){const{currentIndex:a}=t,{imageList:i}=n;e==="left"&&(t.currentIndex--,a<=0&&(t.currentIndex=i.length-1)),e==="right"&&(t.currentIndex++,a>=i.length-1&&(t.currentIndex=0)),P(i[t.currentIndex])}function z(e){e=e||window.event,t.moveX=e.clientX,t.moveY=e.clientY;const a=f(d);a&&(a.onmousemove=j)}function j(e){e=e||window.event,e.preventDefault();const a=e.clientX-t.moveX,i=e.clientY-t.moveY;t.imgLeft+=a,t.imgTop+=i,t.moveX=e.clientX,t.moveY=e.clientY}const V=w(()=>{const{imgScale:e,imgRotate:a,imgTop:i,imgLeft:m}=t;return{transform:`scale(${e}) rotate(${a}deg)`,marginTop:`${i}px`,marginLeft:`${m}px`,maxWidth:n.defaultWidth?"unset":"100%"}}),E=w(()=>{const{imageList:e}=n;return e.length>1});le(()=>{n.show&&p(),n.imageList&&c()});const q=e=>{n.maskClosable&&e.target&&e.target.classList.contains(`${s}-content`)&&b(e)},J=()=>o("div",{class:`${s}__close`,onClick:b},[o(ce,{class:`${s}__close-icon`},null)]),K=()=>{if(!f(E))return null;const{currentIndex:e}=t,{imageList:a}=n;return o("div",{class:`${s}__index`},[e+1,X(" / "),a.length])},H=()=>o("div",{class:`${s}__controller`},[o("div",{class:`${s}__controller-item`,onClick:()=>L(-I.value)},[o("img",{src:we},null)]),o("div",{class:`${s}__controller-item`,onClick:()=>L(I.value)},[o("img",{src:Le},null)]),o("div",{class:`${s}__controller-item`,onClick:D},[o("img",{src:he},null)]),o("div",{class:`${s}__controller-item`,onClick:()=>F(-90)},[o("img",{src:Ce},null)]),o("div",{class:`${s}__controller-item`,onClick:()=>F(90)},[o("img",{src:Ie},null)])]),N=e=>f(E)?o("div",{class:[`${s}__arrow`,e],onClick:()=>x(e)},[e==="left"?o(ue,null,null):o(me,null,null)]):null;return()=>t.show&&o("div",{class:s,ref:h,onMouseup:U,onClick:q},[o("div",{class:`${s}-content`},[o("img",{style:f(V),class:[`${s}-image`,t.status===g.DONE?"":"hidden"],ref:d,src:t.currentUrl,onMousedown:z},null),J(),K(),H(),N("left"),N("right")])])}});let y=null;function xe(n){var r;if(!de)return;const u={},l=document.createElement("div");return Object.assign(u,{show:!0,index:0,scaleStep:100},n),y=o($e,u),ge(y,l),document.body.appendChild(l),(r=y.component)==null?void 0:r.exposed}const G=["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216","https://picsum.photos/id/68/346/216"],ye=k({components:{PageWrapper:fe,ImagePreview:_e},setup(){function n(){xe({imageList:G,defaultWidth:700,rememberState:!0,onImgLoad:({index:l,url:r,dom:t})=>{l+1,`${r}`}})}return{imgList:G,openImg:n}}});function ke(n,u,l,r,t,h){const d=_("ImagePreview"),p=_("a-button"),c=_("PageWrapper");return C(),T(c,{title:"\u56FE\u7247\u9884\u89C8\u793A\u4F8B"},{default:S(()=>[o(d,{imageList:n.imgList},null,8,["imageList"]),o(p,{onClick:n.openImg,type:"primary"},{default:S(()=>[X("\u65E0\u9884\u89C8\u56FE")]),_:1},8,["onClick"])]),_:1})}var Be=B(ye,[["render",ke]]);export{Be as default};