var o=(r,t,a)=>new Promise((v,i)=>{var f=e=>{try{s(a.next(e))}catch(n){i(n)}},S=e=>{try{s(a.throw(e))}catch(n){i(n)}},s=e=>e.done?v(e.value):Promise.resolve(e.value).then(f,S);s((a=a.apply(r,t)).next())});import{v as u}from"./main.50abc935.js";const l=r=>{const t=u.ref(!1);return u.onMounted(()=>o(void 0,null,function*(){t.value||(yield r())})),u.onServerPrefetch(()=>o(void 0,null,function*(){yield r(),t.value=!0})),t.value};export{l as u};
//# sourceMappingURL=useSSR.5ef275e1.js.map