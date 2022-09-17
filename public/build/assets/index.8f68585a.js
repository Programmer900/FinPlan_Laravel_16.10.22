var p=(o,i,c)=>new Promise((s,u)=>{var a=t=>{try{r(c.next(t))}catch(n){u(n)}},l=t=>{try{r(c.throw(t))}catch(n){u(n)}},r=t=>t.done?s(t.value):Promise.resolve(t.value).then(a,l);r((c=c.apply(o,i)).next())});import{v as e,L as m,l as B,u as f,p as E,_}from"./main.50abc935.js";const k=e.defineComponent({name:"DocumentBondsPage",components:{Loader:m},setup(){const o=B(),i=f(),c=E(),s=e.reactive({price:[],profit:[]}),u=function(){return p(this,null,function*(){const a=o.getters["documentStore/getEmitentData"].OBLIGATIONS,l=[],r=[],t=[];a==null||a.forEach(n=>{l.push(n.CODE)});try{for(const n of l){const d=yield c.getBond("RUS",n);r.push(d.data.RADAR_DATA.PROPS.LASTPRICE),t.push(d.data.RADAR_DATA.DYNAM["\u0414\u043E\u0445\u043E\u0434\u043D\u043E\u0441\u0442\u044C \u043E\u0431\u0449\u0430\u044F"]||"-")}}catch(n){console.log(n)}finally{s.price.length===0&&(s.price=r),s.profit.length===0&&(s.profit=t)}})};return e.onMounted(()=>p(this,null,function*(){yield u()})),{bonds:o.getters["documentStore/getEmitentData"].OBLIGATIONS,route:i,priceAndProfitBond:s}}});const g={key:1,class:"greyBg"},y={key:0,class:"flexWrapperColumn"},D={class:"bond tableValue flexRowBetween"},A={key:0},h={key:1,class:"loading"},S={key:0},N={key:1,class:"loading"},P={key:1,class:"flexWrapperColumn"};function b(o,i,c,s,u,a){const l=e.resolveComponent("Loader"),r=e.resolveComponent("router-link");return!o.priceAndProfitBond.price.length&&o.priceAndProfitBond.price.length!==0?(e.openBlock(),e.createBlock(l,{key:0})):(e.openBlock(),e.createElementBlock("div",g,[o.bonds?(e.openBlock(),e.createElementBlock("div",y,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(o.bonds,(t,n)=>(e.openBlock(),e.createElementBlock("div",{key:t.NAME,class:"wrapper"},[e.createVNode(r,{exact:"",to:{name:"DocumentInfo",params:{locale:o.route.params.locale,type:"bond",id:t.CODE,company:t.NAME}},class:"bond tableValue flexRowBetween"},{default:e.withCtx(()=>[e.createElementVNode("div",D,[e.createElementVNode("p",null,e.toDisplayString(t.NAME),1),e.createElementVNode("p",null,e.toDisplayString(o.$t("bonds.isin"))+" "+e.toDisplayString(t.CODE),1),e.createElementVNode("p",null,[e.createTextVNode(e.toDisplayString(o.$t("bonds.currentPrice"))+" ",1),o.priceAndProfitBond.price[n]?(e.openBlock(),e.createElementBlock("span",A,e.toDisplayString(o.priceAndProfitBond.price[n]),1)):(e.openBlock(),e.createElementBlock("span",h,"..."))]),e.createElementVNode("p",null,[e.createTextVNode(e.toDisplayString(o.$t("bonds.totalValue"))+" ",1),o.priceAndProfitBond.profit[n]?(e.openBlock(),e.createElementBlock("span",S,e.toDisplayString(o.priceAndProfitBond.profit[n]),1)):(e.openBlock(),e.createElementBlock("span",N,"..."))])])]),_:2},1032,["to"])]))),128))])):(e.openBlock(),e.createElementBlock("h1",P,"\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E\u0431 \u043E\u0431\u043B\u0438\u0433\u0430\u0446\u0438\u044F\u0445 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430"))]))}const L=_(k,[["render",b],["__scopeId","data-v-00e0ba97"]]);export{L as default};
//# sourceMappingURL=index.8f68585a.js.map