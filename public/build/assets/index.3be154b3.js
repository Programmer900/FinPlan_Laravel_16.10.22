var i=(t,l,o)=>new Promise((s,a)=>{var d=n=>{try{u(o.next(n))}catch(c){a(c)}},r=n=>{try{u(o.throw(n))}catch(c){a(c)}},u=n=>n.done?s(n.value):Promise.resolve(n.value).then(d,r);u((o=o.apply(t,l)).next())});import{v as e,L as m,p as g,l as B,n as _,_ as k}from"./main.50abc935.js";const y=e.defineComponent({name:"DocumentDividendsPage",components:{Loader:m},setup(){const t=g(),l=B(),o=e.ref(null),s=e.ref(!1),a=e.ref(!1),d=()=>_.global.messages.ru.dividends.tableHeaders.length,r=()=>i(this,null,function*(){const p=yield t.getDividends(l.getters["documentStore/getRegion"],l.getters["documentStore/getSecId"]);o.value=p.data.DIVIDENDS,(!o.value||!o.value.length)&&(s.value=!0),a.value=!0}),u=()=>{o.value=null,a.value=!1,s.value=!1},n=e.computed(()=>l.getters["documentStore/getCalcMethod"]),c=e.computed(()=>l.getters["documentStore/getName"]);return e.onServerPrefetch(()=>i(this,null,function*(){yield r()})),e.onMounted(()=>i(this,null,function*(){a.value||(yield r())})),e.onUnmounted(()=>{u()}),{isInit:a,isNotFound:s,dividends:o,getCalcMethods:n,getNameCompany:c,getTranslationTableHeaderLength:d}}});const h=t=>(e.pushScopeId("data-v-92d660ea"),t=t(),e.popScopeId(),t),D={class:"greyBg"},f={class:"flexWrapperColumn"},E={key:0,class:"methodology defaultBlack27px defaultGrey20px"},v={key:1,class:"table"},N={class:"tableHeader flexRowBetween"},S={key:0},V=e.createTextVNode(" / "),F=h(()=>e.createElementVNode("span",{class:"success-color"},"\u0442\u0435\u043A\u0443\u0449\u0430\u044F \u0446\u0435\u043D\u0430",-1)),C=[V,F],w={key:1};function b(t,l,o,s,a,d){const r=e.resolveComponent("Loader");return e.openBlock(),e.createElementBlock("div",D,[e.createElementVNode("div",f,[t.isNotFound?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("div",E,[e.createElementVNode("h1",null,e.toDisplayString(t.$t("dividends.methodLabel")),1),e.createElementVNode("p",null,e.toDisplayString(t.getCalcMethods),1)])),t.isInit?(e.openBlock(),e.createElementBlock("div",v,[t.isNotFound?(e.openBlock(),e.createElementBlock("h1",w,"\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F "+e.toDisplayString(t.getNameCompany)+" \u043D\u0435 \u0432\u044B\u043F\u043B\u0430\u0447\u0438\u0432\u0430\u0435\u0442 \u0434\u0438\u0432\u0438\u0434\u0435\u043D\u0434\u044B \u0437\u0430 \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u0433\u043E\u0434",1)):(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[e.createElementVNode("div",N,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.getTranslationTableHeaderLength(),u=>(e.openBlock(),e.createElementBlock("p",{key:u},[e.createTextVNode(e.toDisplayString(t.$t(`dividends.tableHeaders.${u-1}`))+" ",1),u===3?(e.openBlock(),e.createElementBlock("span",S,C)):e.createCommentVNode("",!0)]))),128))]),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.dividends,u=>(e.openBlock(),e.createElementBlock("div",{key:u.currentPrice,class:e.normalizeClass(["tableRows tableValue flexRowBetween",{["success-color"]:new Date(...u["\u0414\u0430\u0442\u0430 \u0437\u0430\u043A\u0440\u044B\u0442\u0438\u044F \u0440\u0435\u0435\u0441\u0442\u0440\u0430"].split(".").reverse())>new Date,current:u.currentPrice,default:!u.currentPrice}])},[e.createElementVNode("p",null,e.toDisplayString(u["\u0414\u0430\u0442\u0430 \u0437\u0430\u043A\u0440\u044B\u0442\u0438\u044F \u0440\u0435\u0435\u0441\u0442\u0440\u0430"]),1),e.createElementVNode("p",null,e.toDisplayString(u["\u0414\u0430\u0442\u0430 \u0437\u0430\u043A\u0440\u044B\u0442\u0438\u044F \u0440\u0435\u0435\u0441\u0442\u0440\u0430 (T-2)"]),1),e.createElementVNode("p",null,e.toDisplayString(u["\u0426\u0435\u043D\u0430 \u043D\u0430 \u0434\u0430\u0442\u0443 \u0437\u0430\u043A\u0440\u044B\u0442\u0438\u044F"].toLocaleString()),1),e.createElementVNode("p",null,e.toDisplayString(u.\u0414\u0438\u0432\u0438\u0434\u0435\u043D\u0434\u044B),1),e.createElementVNode("p",null,e.toDisplayString(u["\u0414\u0438\u0432\u0438\u0434\u0435\u043D\u0434\u044B, \u0432 %"]),1)],2))),128))],64))])):(e.openBlock(),e.createBlock(r,{key:2}))])])}const A=k(y,[["render",b],["__scopeId","data-v-92d660ea"]]);export{A as default};
//# sourceMappingURL=index.3be154b3.js.map