var o=(o,t,e)=>new Promise(((n,r)=>{var s=o=>{try{a(e.next(o))}catch(t){r(t)}},c=o=>{try{a(e.throw(o))}catch(t){r(t)}},a=o=>o.done?n(o.value):Promise.resolve(o.value).then(s,c);a((e=e.apply(o,t)).next())}));import{f as t}from"./vendor.880b4c6c.js";import{ab as e,ac as n,f as r}from"./index.8c1d7da4.js";const s=t({id:"app-lock",state:()=>({lockInfo:e.getLocal(n)}),getters:{getLockInfo(){return this.lockInfo}},actions:{setLockInfo(o){this.lockInfo=Object.assign({},this.lockInfo,o),e.setLocal(n,this.lockInfo,!0)},resetLockInfo(){e.removeLocal(n,!0),this.lockInfo=null},unLock(t){return o(this,null,(function*(){var e;const n=r();if((null==(e=this.lockInfo)?void 0:e.pwd)===t)return this.resetLockInfo(),!0;return yield(()=>o(this,null,(function*(){var o;try{const e=null==(o=n.getUserInfo)?void 0:o.username,r=yield n.login({username:e,password:t,goHome:!1,mode:"none"});return r&&this.resetLockInfo(),r}catch(e){return!1}})))()}))}}});export{s as u};