import{_ as t}from"./useModal.4686da24.js";import{_ as e,u as s}from"./useDescription.cc5622df.js";import{d as o}from"./index.ae3055f9.js";import{getDescSchema as r}from"./data.7e73f262.js";import{k as a,K as i,o as n,n as d,P as c,q as f,N as m}from"./vendor.59fe1062.js";import"./useWindowSizeFn.cd99a382.js";/* empty css              *//* empty css              */var p=a({name:"ErrorLogDetailModal",components:{BasicModal:t,Description:e},props:{info:{type:Object,default:null}},setup(){const{t:t}=o(),[e]=s({column:2,schema:r()});return{register:e,useI18n:o,t:t}}});p.render=function(t,e,s,o,r,a){const p=i("Description"),l=i("BasicModal");return n(),d(l,m({width:800,title:t.t("sys.errorLog.tableActionDesc")},t.$attrs),{default:c((()=>[f(p,{data:t.info,onRegister:t.register},null,8,["data","onRegister"])])),_:1},16,["title"])};export default p;