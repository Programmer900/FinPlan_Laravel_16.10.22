var m=(t,a,s)=>new Promise((r,c)=>{var u=o=>{try{l(s.next(o))}catch(n){c(n)}},i=o=>{try{l(s.throw(o))}catch(n){c(n)}},l=o=>o.done?r(o.value):Promise.resolve(o.value).then(u,i);l((s=s.apply(t,a)).next())});import{v as e,n as I,_ as C,u as _,l as D}from"./main.50abc935.js";import{D as b,a as f,b as v,c as w,d as V}from"./index.18d4bb87.js";import"./alert-circle.4df9b043.js";import"./useEmitter.cb46a42f.js";import"./check-svgrepo-com.3d930d88.js";import"./arrow-right.c9e4ddf7.js";import"./index.de0fdd57.js";import"./useVModel.13ad703e.js";import"./popper.esm.d8371509.js";const y=e.defineComponent({name:"DocumentIndicatorsTable",emits:["onChangeParam","onChangeChartDataView"],components:{DocumentIndicatorsTableHeader:b,DocumentIndicatorsTableRow:f,DocumentIndicatorsTableUtils:v,DocumentIndicatorsTableProps:w,DocumentIndicatorsTableAlert:V},props:{namespace:{type:String,default:""},isInit:{type:Boolean,required:!0},data:{type:Object,required:!0},categories:{type:Object,required:!0},quarters:{type:Array,default:[]},isReportPage:{type:Boolean,default:!1},isUtils:{type:Boolean,default:!1}},setup(t,{emit:a}){const s=e.ref(!1),r=e.ref(t.namespace),c=e.ref(t.isUtils),u=n=>{a("onChangeParam",n)},i=n=>{a("onChangeChartDataView",n)},l=e.computed(n=>n),o=e.computed(()=>Object.keys(t.data));return{onChangeParam:u,onChangeChartDataView:i,getDataKeys:o,hold:s,showMiddleProfit:l,isShowUtils:c,namespace:r,i18n:I}}});const T={key:0,class:"tableIndicators __custom"},P={class:"greyBg"},B={class:"flexWrapperColumn wrapperUtils"},S=e.createElementVNode("h2",null,"\u0414\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u0434\u0435\u043D\u0435\u0436\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432",-1),N={class:"table"},k={class:"tableProps flexRowBetween"},E={class:"greyBg"},O={class:"flexWrapperColumn"};function $(t,a,s,r,c,u){const i=e.resolveComponent("DocumentIndicatorsTableAlert"),l=e.resolveComponent("DocumentIndicatorsTableProps"),o=e.resolveComponent("DocumentIndicatorsTableUtils"),n=e.resolveComponent("DocumentIndicatorsTableHeader"),p=e.resolveComponent("DocumentIndicatorsTableRow");return t.isInit?(e.openBlock(),e.createElementBlock("div",T,[e.createElementVNode("div",P,[e.createElementVNode("div",B,[S,e.createElementVNode("div",N,[e.createVNode(i),e.createElementVNode("div",k,[e.createVNode(l,{onOnChangeParam:t.onChangeParam},null,8,["onOnChangeParam"]),e.createVNode(o,{onChangeSwitch:t.showMiddleProfit,isUtils:t.isShowUtils},null,8,["onChangeSwitch","isUtils"])])])])]),e.createElementVNode("div",{class:"tableIndicatorsScroller",onMousedown:a[0]||(a[0]=d=>t.hold=!0),onMouseup:a[1]||(a[1]=d=>t.hold=!1)},[e.createElementVNode("div",E,[e.createElementVNode("div",O,[e.createVNode(n,{categories:t.categories,data:t.data,quarters:t.quarters,namespaceWrapper:t.namespace},null,8,["categories","data","quarters","namespaceWrapper"]),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.getDataKeys,d=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:d},[t.data[d].hideInTable?e.createCommentVNode("",!0):(e.openBlock(),e.createBlock(p,{key:0,id:d,"is-report-page":t.isReportPage,item:t.data[d],annotation:t.i18n.global.messages[t.i18n.global.locale].companyIndicators.indicatorsDescription[d],onOnChangeChartDataView:t.onChangeChartDataView},null,8,["id","is-report-page","item","annotation","onOnChangeChartDataView"]))],64))),128))])])],32)])):e.createCommentVNode("",!0)}const U=C(y,[["render",$]]),R=e.defineComponent({name:"DocumentReportCashFlow",components:{DocumentIndicatorsTable:U},setup(){const t=_(),a=D(),s=e.ref(!1),r=e.ref(!1),c=()=>m(this,null,function*(){s.value=yield a.dispatch("documentStore/initIndicatorsChart")}),u=e.computed(()=>a.getters["documentStore/getIndicatorsChartCategoriesReport"].reverse()),i=e.computed(()=>a.getters["documentStore/getIndicatorsReportCashFlowChart"]),l=g=>m(this,null,function*(){r.value=!1,a.commit("documentStore/resetIndicatorsChart"),yield c()}),o=g=>{r.value=!0,a.getters["documentStore/getIndicatorsChart"][g].visible=!a.getters["documentStore/getIndicatorsChart"][g].visible},n=e.computed(()=>Object.keys(a.getters["documentStore/getIndicatorsChart"])),p=e.computed(()=>Object.values(a.getters["documentStore/getIndicatorsChart"])),d=e.computed(()=>a.getters["documentStore/getIndicatorsQuarter"]),h=()=>{s.value=!1,r.value=!1,a.commit("documentStore/resetIndicatorsChart"),a.commit("documentStore/resetTableProp")};return e.onMounted(()=>m(this,null,function*(){yield c()})),e.onUnmounted(()=>{h()}),e.watch(()=>t.params.name,()=>{h()}),{isInit:s,getChartCategories:u,getIndicators:i,getChartDataKeys:n,getChartDataValues:p,getQuarters:d,onChangeParam:l,onChangeChartDataView:o,hasBeenChanged:r}}});const q={class:"__cash-flow"};function j(t,a,s,r,c,u){const i=e.resolveComponent("DocumentIndicatorsTable");return e.openBlock(),e.createElementBlock("div",q,[e.createVNode(i,{isInit:t.isInit,data:t.getIndicators,categories:t.getChartCategories,namespace:"balance",onOnChangeParam:t.onChangeParam,onOnChangeChartDataView:t.onChangeChartDataView},null,8,["isInit","data","categories","onOnChangeParam","onOnChangeChartDataView"])])}const X=C(R,[["render",j],["__scopeId","data-v-4e6e704a"]]);export{X as default};
//# sourceMappingURL=index.8f0a68f7.js.map