import{r as n}from"./index.f77a0916.js";import{y as t,Z as a,B as o,F as r,a1 as s,a8 as e}from"./vendor.3dc066e5.js";var c=t({name:"LaunchButton",components:{},setup(){const t=n();return{toLaunch:function(){t("/process/launch")}}}});const u=e(" 发起流程 ");c.render=function(n,t,e,c,i,p){const f=a("a-button");return o(),r(f,{type:"primary",onClick:n.toLaunch},{default:s((()=>[u])),_:1},8,["onClick"])};export default c;