import{a as f,o as h,b as g,u as w,c as y,e as v,f as k,h as S,i as l,j as b,k as e,l as m,A as T,m as c,n as L,p as t,q as s,r as p,t as x,s as _}from"./index.e61ad282.js";import $ from"./LoginForm.343c59db.js";import B from"./ForgetPasswordForm.ff2797ca.js";import A from"./RegisterForm.7f3238b8.js";import C from"./MobileForm.142cb6b9.js";import D from"./QrCodeForm.752e92ad.js";import"./index.99ef178c.js";import"./Checkbox.bb68ead3.js";/* empty css              *//* empty css               */import"./index.9f50e000.js";import"./LoginFormTitle.f4b99114.js";import"./Form.8b25370b.js";import"./Col.f72eb8d0.js";import"./useFlexGapSupport.ed2a5fc1.js";import"./_baseIteratee.7ece590b.js";import"./get.bca7403a.js";import"./useSize.5a37866d.js";import"./GithubFilled.1884a686.js";import"./WechatFilled.04f8305a.js";import"./index.6d7de824.js";import"./index.9233793b.js";import"./index.ebd81f61.js";import"./index.c152bd22.js";import"./download.810571da.js";import"./base64Conver.08b9f4ec.js";var I="/assets/login-box-bg.9027741f.svg";const N={class:"-enter-x xl:hidden"},V={class:"container relative h-full py-2 mx-auto sm:px-10"},M={class:"flex h-full"},P={class:"hidden min-h-full pl-4 mr-4 xl:flex xl:flex-col xl:w-6/12"},j={class:"my-auto"},q=["alt"],z={class:"mt-10 font-medium text-white -enter-x"},E={class:"inline-block mt-4 text-3xl"},G={class:"mt-5 font-normal text-white text-md dark:text-gray-500 -enter-x"},F={class:"flex w-full h-full py-5 xl:h-auto xl:py-0 xl:my-0 xl:w-6/12"},ht=f({__name:"Login",props:{sessionTimeout:{type:Boolean}},setup(a){h(()=>{g().then(o=>{})});const i=w(),{prefixCls:n}=y("login"),{t:r}=v(),d=k().getShowPicker,u=S(()=>{var o;return(o=i==null?void 0:i.title)!=null?o:""});return(o,J)=>(l(),b("div",{class:_([e(n),"relative w-full h-full px-4"])},[!a.sessionTimeout&&e(d)?(l(),m(e(T),{key:0,class:"absolute text-white top-4 right-4 enter-x xl:text-gray-600",showText:!1})):c("",!0),a.sessionTimeout?c("",!0):(l(),m(e(L),{key:1,class:"absolute top-3 right-7 enter-x"})),t("span",N,[s(e(p),{alwaysShowTitle:!0})]),t("div",V,[t("div",M,[t("div",P,[s(e(p),{class:"-enter-x"}),t("div",j,[t("img",{alt:e(u),src:I,class:"w-1/2 -mt-16 -enter-x"},null,8,q),t("div",z,[t("span",E,x(e(r)("sys.login.signInTitle")),1)]),t("div",G,x(e(r)("sys.login.signInDesc")),1)])]),t("div",F,[t("div",{class:_([`${e(n)}-form`,"relative w-full px-5 py-8 mx-auto my-auto rounded-md shadow-md xl:ml-16 xl:bg-transparent sm:px-8 xl:p-4 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto enter-x"])},[s($),s(B),s(A),s(C),s(D)],2)])])])],2))}});export{ht as default};