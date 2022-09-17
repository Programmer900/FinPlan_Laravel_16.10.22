var y=Object.defineProperty;var m=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var p=(u,t,s)=>t in u?y(u,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):u[t]=s,_=(u,t)=>{for(var s in t||(t={}))V.call(t,s)&&p(u,s,t[s]);if(m)for(var s of m(t))N.call(t,s)&&p(u,s,t[s]);return u};import{v as e,_ as a}from"./main.50abc935.js";import{P as B}from"./index.b790783c.js";import{P as g,d as D}from"./index.5ad73987.js";import{I as P}from"./index.de0fdd57.js";import{P as F}from"./index.61fdeeee.js";import"./index.ea6da743.js";import"./highcharts.e06d80e4.js";import"./useVModel.13ad703e.js";import"./index.358e587e.js";import"./index.5defaede.js";import"./index.ca99a427.js";const b="/109.68.213.103/build/assets/about.6162b394.svg",h=e.defineComponent({name:"PagePortfolioCoefficientsItem",props:{title:{type:String,required:!0},value:{type:Number,default:0},valueType:{type:String,required:!0},valueSymbol:{type:String,default:""},valueCompression:{type:Array,default:()=>[]},about:{type:String,default:"\u041A\u0430\u043A\u043E\u0435-\u0442\u043E \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"}},setup(){return{getValueClass:t=>{const s=Number(t);return s>0?"coefficient__value--more":s===0?"coefficient__value--equal":s<0?"coefficient__value--less":""},iconAbout:b}}});const A={class:"coefficient"},$={class:"coefficient__wrap"},k={class:"coefficient__title"},I=["src"],S={key:1,class:"coefficient__valueCompression"},T={key:0,class:"coefficient__iconMore"};function w(u,t,s,n,i,r){return e.openBlock(),e.createElementBlock("div",A,[e.createElementVNode("div",$,[e.createElementVNode("div",k,e.toDisplayString(u.title),1),u.about?(e.openBlock(),e.createElementBlock("img",{key:0,alt:"about",class:"coefficient__iconAbout",src:u.iconAbout},null,8,I)):e.createCommentVNode("",!0)]),u.valueType==="common"?(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass(["coefficient__value",u.getValueClass(u.value)])},[e.createTextVNode(e.toDisplayString(u.value)+" ",1),e.createElementVNode("span",null,e.toDisplayString(u.valueSymbol),1)],2)):e.createCommentVNode("",!0),u.valueType==="compression"?(e.openBlock(),e.createElementBlock("div",S,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(u.valueCompression,(o,l)=>(e.openBlock(),e.createElementBlock("span",{key:l,class:e.normalizeClass(["coefficient__value",u.getValueClass(o)])},[e.createTextVNode(e.toDisplayString(o)+" ",1),l!==u.valueCompression.length-1?(e.openBlock(),e.createElementBlock("span",T,"> ")):e.createCommentVNode("",!0)],2))),128))])):e.createCommentVNode("",!0)])}const R=a(h,[["render",w],["__scopeId","data-v-696ff88f"]]),L=e.defineComponent({name:"PagePortfolioCoefficients",components:{PagePortfolioCoefficientsItem:R},setup(){return{valueCompression:e.ref([.0698,.0423,0])}}});const d=u=>(e.pushScopeId("data-v-7ea5c458"),u=u(),e.popScopeId(),u),q={class:"coefficients"},z=d(()=>e.createElementVNode("div",{class:"coefficients__title"},"\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043F\u043E \u043A\u043E\u044D\u0444\u0444\u0438\u0446\u0438\u0435\u043D\u0442\u0430\u043C",-1)),M={class:"coefficients__grid"},U={class:"coefficients__containerItems"},j={class:"coefficients__containerItems"},G=d(()=>e.createElementVNode("div",{class:"coefficients__recalculate"},"\u041F\u0435\u0440\u0435\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u043A\u043E\u044D\u0444\u0444\u0438\u0446\u0438\u0435\u043D\u0442\u044B",-1));function H(u,t,s,n,i,r){const o=e.resolveComponent("PagePortfolioCoefficientsItem");return e.openBlock(),e.createElementBlock("div",q,[z,e.createElementVNode("div",M,[e.createElementVNode("div",U,[e.createVNode(o,{class:"coefficients__item",title:"\u041F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B \u043F\u043E\u0440\u0442\u0444\u0435\u043B\u044F:",value:14.52,"value-type":"common","value-symbol":"%"},null,8,["value"]),e.createVNode(o,{class:"coefficients__item",title:"\u041F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0438\u0441\u043A \u043F\u043E \u0430\u043A\u0446\u0438\u044F\u043C:",value:-45.52,"value-type":"common","value-symbol":"%"},null,8,["value"]),e.createVNode(o,{class:"coefficients__item",title:"\u041E\u0431\u0449\u0438\u0439 \u0440\u0438\u0441\u043A \u043F\u043E\u0440\u0442\u0444\u0435\u043B\u044F:",value:-14.52,"value-type":"common","value-symbol":"%"},null,8,["value"]),e.createVNode(o,{class:"coefficients__item",title:"\u0414\u043E\u043B\u044F \u0430\u043A\u0446\u0438\u0438 \u0420\u0424:",value:20.52,"value-type":"common","value-symbol":"%"},null,8,["value"]),e.createVNode(o,{class:"coefficients__item",title:"\u0414\u043E\u043B\u044F \u0430\u043A\u0446\u0438\u0438 \u0421\u0428\u0410:",value:14.52,"value-type":"common","value-symbol":"%"},null,8,["value"]),e.createVNode(o,{class:"coefficients__item",title:"\u0414\u043E\u043B\u044F \u043E\u0431\u043B\u0438\u0433\u0430\u0446\u0438\u0439:",value:44.52,"value-type":"common","value-symbol":"%"},null,8,["value"]),e.createVNode(o,{class:"coefficients__item",title:"\u0414\u043E\u043B\u044F ETF:",value:0,"value-type":"common","value-symbol":"%"},null,8,["value"]),e.createVNode(o,{class:"coefficients__item",title:"\u0421\u0440\u0435\u0434\u043D\u044F\u044F P/E \u043F\u043E\u0440\u0442\u0444\u0435\u043B\u044F \u0430\u043A\u0446\u0438\u0439:",value:10.9,"value-type":"common","value-symbol":"%"},null,8,["value"]),e.createVNode(o,{class:"coefficients__item",title:"\u041A\u0435\u0448:",value:0,"value-type":"common","value-symbol":"%"},null,8,["value"])]),e.createElementVNode("div",j,[e.createVNode(o,{class:"coefficients__item",title:"\u0421\u0440\u0435\u0434\u043D\u044F\u044F \u0411\u0435\u0442\u0430 \u0430\u043A\u0446\u0438\u0439 \u0420\u0424:",value:.97,"value-type":"common","value-symbol":"%"},null,8,["value"]),e.createVNode(o,{class:"coefficients__item",title:"\u0421\u0440\u0435\u0434\u043D\u044F\u044F \u0411\u0435\u0442\u0430 \u0430\u043A\u0446\u0438\u0439 \u0421\u0428\u0410:",value:1.97,"value-type":"common","value-symbol":"%"},null,8,["value"]),e.createVNode(o,{class:"coefficients__item",title:"\u0428\u0430\u0440\u043F (\u0420\u0424):","value-compression":u.valueCompression,"value-type":"compression"},null,8,["value-compression"]),e.createVNode(o,{class:"coefficients__item",title:"\u0428\u0430\u0440\u043F (\u0421\u0428\u0410):","value-compression":u.valueCompression,"value-type":"compression"},null,8,["value-compression"]),e.createVNode(o,{class:"coefficients__item",title:"\u0422\u0440\u0435\u0439\u043D\u043E\u0440 (\u0420\u0424):","value-compression":u.valueCompression,"value-type":"compression"},null,8,["value-compression"]),e.createVNode(o,{class:"coefficients__item",title:"\u0422\u0440\u0435\u0439\u043D\u043E\u0440 (\u0421\u0428\u0410):","value-compression":u.valueCompression,"value-type":"compression"},null,8,["value-compression"]),e.createVNode(o,{class:"coefficients__item",title:"\u0421\u043E\u0440\u0442\u0438\u043D\u043E (\u0420\u0424):","value-compression":u.valueCompression,"value-type":"compression"},null,8,["value-compression"]),e.createVNode(o,{class:"coefficients__item",title:"\u0421\u043E\u0440\u0442\u0438\u043D\u043E (\u0421\u0428\u0410):","value-compression":u.valueCompression,"value-type":"compression"},null,8,["value-compression"])])]),G])}const J=a(L,[["render",H],["__scopeId","data-v-7ea5c458"]]),K=e.defineComponent({name:"PagePortfolioTabPortfolio",components:{PagePortfolioCoefficients:J,PageRadarActivesList:F,PagePortfolioActions:g,InputDropdown:P,PageRadarChart:B},setup(){const u=e.reactive({portfolio:{isActive:!0,value:null}});return _({dropdownItems:D},e.toRefs(u))}});const c=u=>(e.pushScopeId("data-v-7825c215"),u=u(),e.popScopeId(),u),O={class:"portfolioTab"},Q={class:"portfolioTab__container"},W=c(()=>e.createElementVNode("div",{class:"portfolioTab__text"}," \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0446\u0435\u043D\u0438\u0442\u044C \u043E\u0434\u0438\u043D \u0438\u0437 \u0432\u0430\u0448\u0438\u0445 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043D\u044B\u0445 \u043F\u043E\u0440\u0442\u0444\u0435\u043B\u0435\u0439 \u0438\u043B\u0438 \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A \u043E\u0446\u0435\u043D\u043A\u0435 \u043D\u043E\u0432\u044B\u0439 ",-1)),X={class:"portfolioTab__wrapSelect"},Y=c(()=>e.createElementVNode("div",{class:"portfolioTab__selectTitle"},"\u0412\u0430\u0448 \u043F\u043E\u0440\u0442\u0444\u0435\u043B\u044C:",-1)),Z=c(()=>e.createElementVNode("div",{class:"portfolioTab__text"}," \u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0438\u0442\u044C \u0432\u0432\u043E\u0434 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F \u043F\u043E \u0448\u0438\u0440\u0438\u043D\u0435 \u0438 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0443 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432. \u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E \u0442\u0430\u043F\u0443 \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u044C ",-1));function x(u,t,s,n,i,r){const o=e.resolveComponent("InputDropdown"),l=e.resolveComponent("PagePortfolioActions"),f=e.resolveComponent("PagePortfolioCoefficients"),v=e.resolveComponent("PageRadarChart"),E=e.resolveComponent("PageRadarActivesList");return e.openBlock(),e.createElementBlock("div",O,[e.createElementVNode("div",Q,[W,e.createElementVNode("div",X,[Y,e.createVNode(o,{class:"radarBonds__fieldSlot",items:u.dropdownItems,placeholder:"\u0420\u0430\u0441\u0442\u0443\u0449\u0438\u0439 \u043C\u0438\u043B\u043B\u0438\u043E\u043D",selected:u.portfolio.value,"onUpdate:selected":t[0]||(t[0]=C=>u.portfolio.value=C)},null,8,["items","selected"])]),Z,e.createVNode(l),e.createVNode(f)]),e.createVNode(v,{"chart-type":"portfolio"}),e.createVNode(E,{"header-type":"portfolio-default"})])}const pe=a(K,[["render",x],["__scopeId","data-v-7825c215"]]);export{pe as default};
//# sourceMappingURL=index.eba63355.js.map
