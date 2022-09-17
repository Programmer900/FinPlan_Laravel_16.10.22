var u=(t,o,s)=>new Promise((r,c)=>{var m=a=>{try{l(s.next(a))}catch(n){c(n)}},i=a=>{try{l(s.throw(a))}catch(n){c(n)}},l=a=>a.done?r(a.value):Promise.resolve(a.value).then(m,i);l((s=s.apply(t,o)).next())});import{v as e,n as I,_ as C,u as f,l as _}from"./main.50abc935.js";import{D,a as b,b as v,c as w,d as V}from"./index.18d4bb87.js";import"./alert-circle.4df9b043.js";import"./useEmitter.cb46a42f.js";import"./check-svgrepo-com.3d930d88.js";import"./arrow-right.c9e4ddf7.js";import"./index.de0fdd57.js";import"./useVModel.13ad703e.js";import"./popper.esm.d8371509.js";const y=e.defineComponent({name:"DocumentIndicatorsTable",emits:["onChangeParam","onChangeChartDataView"],components:{DocumentIndicatorsTableHeader:D,DocumentIndicatorsTableRow:b,DocumentIndicatorsTableUtils:v,DocumentIndicatorsTableProps:w,DocumentIndicatorsTableAlert:V},props:{namespace:{type:String,default:""},isInit:{type:Boolean,required:!0},data:{type:Object,required:!0},categories:{type:Object,required:!0},quarters:{type:Array,default:[]},isReportPage:{type:Boolean,default:!1},isUtils:{type:Boolean,default:!1}},setup(t,{emit:o}){const s=e.ref(!1),r=e.ref(t.namespace),c=e.ref(t.isUtils),m=n=>{o("onChangeParam",n)},i=n=>{o("onChangeChartDataView",n)},l=e.computed(n=>n),a=e.computed(()=>Object.keys(t.data));return{onChangeParam:m,onChangeChartDataView:i,getDataKeys:a,hold:s,showMiddleProfit:l,isShowUtils:c,namespace:r,i18n:I}}});const P={key:0,class:"tableIndicators __custom"},T={class:"greyBg"},B={class:"flexWrapperColumn wrapperUtils"},S=e.createElementVNode("h2",null,"\u041F\u0440\u043E\u0444\u0438\u0442 \u0438 \u0443\u0431\u044B\u0442\u043A\u0438",-1),N={class:"table"},k={class:"tableProps flexRowBetween"},E={class:"greyBg"},O={class:"flexWrapperColumn"};function $(t,o,s,r,c,m){const i=e.resolveComponent("DocumentIndicatorsTableAlert"),l=e.resolveComponent("DocumentIndicatorsTableProps"),a=e.resolveComponent("DocumentIndicatorsTableUtils"),n=e.resolveComponent("DocumentIndicatorsTableHeader"),p=e.resolveComponent("DocumentIndicatorsTableRow");return t.isInit?(e.openBlock(),e.createElementBlock("div",P,[e.createElementVNode("div",T,[e.createElementVNode("div",B,[S,e.createElementVNode("div",N,[e.createVNode(i),e.createElementVNode("div",k,[e.createVNode(l,{onOnChangeParam:t.onChangeParam},null,8,["onOnChangeParam"]),e.createVNode(a,{onChangeSwitch:t.showMiddleProfit,isUtils:t.isShowUtils},null,8,["onChangeSwitch","isUtils"])])])])]),e.createElementVNode("div",{class:"tableIndicatorsScroller",onMousedown:o[0]||(o[0]=d=>t.hold=!0),onMouseup:o[1]||(o[1]=d=>t.hold=!1)},[e.createElementVNode("div",E,[e.createElementVNode("div",O,[e.createVNode(n,{categories:t.categories,data:t.data,quarters:t.quarters,namespaceWrapper:t.namespace},null,8,["categories","data","quarters","namespaceWrapper"]),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.getDataKeys,d=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:d},[t.data[d].hideInTable?e.createCommentVNode("",!0):(e.openBlock(),e.createBlock(p,{key:0,id:d,"is-report-page":t.isReportPage,item:t.data[d],annotation:t.i18n.global.messages[t.i18n.global.locale].companyIndicators.indicatorsDescription[d],onOnChangeChartDataView:t.onChangeChartDataView},null,8,["id","is-report-page","item","annotation","onOnChangeChartDataView"]))],64))),128))])])],32)])):e.createCommentVNode("",!0)}const U=C(y,[["render",$]]),R=e.defineComponent({name:"DocumentReportProfitLoss",components:{DocumentIndicatorsTable:U},setup(){const t=f(),o=_(),s=e.ref(!1),r=e.ref(!1),c=()=>u(this,null,function*(){s.value=yield o.dispatch("documentStore/initIndicatorsChart")}),m=e.computed(()=>o.getters["documentStore/getIndicatorsChartCategoriesReport"].reverse()),i=e.computed(()=>o.getters["documentStore/getIndicatorsReportProfitLossChart"]),l=g=>u(this,null,function*(){r.value=!1,o.commit("documentStore/resetIndicatorsChart"),yield c()}),a=g=>{r.value=!0,o.getters["documentStore/getIndicatorsChart"][g].visible=!o.getters["documentStore/getIndicatorsChart"][g].visible},n=e.computed(()=>Object.keys(o.getters["documentStore/getIndicatorsChart"])),p=e.computed(()=>Object.values(o.getters["documentStore/getIndicatorsChart"])),d=e.computed(()=>o.getters["documentStore/getIndicatorsQuarter"]),h=()=>{s.value=!1,r.value=!1,o.commit("documentStore/resetIndicatorsChart"),o.commit("documentStore/resetTableProp")};return e.onMounted(()=>u(this,null,function*(){yield c()})),e.onUnmounted(()=>{h()}),e.watch(()=>t.params.name,()=>{h()}),{isInit:s,getChartCategories:m,getIndicators:i,getChartDataKeys:n,getChartDataValues:p,getQuarters:d,onChangeParam:l,onChangeChartDataView:a,hasBeenChanged:r}}});const q={class:"__profit-loss"};function j(t,o,s,r,c,m){const i=e.resolveComponent("DocumentIndicatorsTable");return e.openBlock(),e.createElementBlock("div",q,[e.createVNode(i,{isInit:t.isInit,data:t.getIndicators,categories:t.getChartCategories,namespace:"profit-loss",onOnChangeParam:t.onChangeParam,onOnChangeChartDataView:t.onChangeChartDataView},null,8,["isInit","data","categories","onOnChangeParam","onOnChangeChartDataView"])])}const X=C(R,[["render",j],["__scopeId","data-v-43e7f57a"]]);export{X as default};
//# sourceMappingURL=index.ba4dea2a.js.map