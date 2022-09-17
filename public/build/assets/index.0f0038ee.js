var R=Object.defineProperty,x=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var v=(t,o,n)=>o in t?R(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,C=(t,o)=>{for(var n in o||(o={}))q.call(o,n)&&v(t,n,o[n]);if(y)for(var n of y(o))z.call(o,n)&&v(t,n,o[n]);return t},f=(t,o)=>x(t,O(o));var h=(t,o,n)=>new Promise((l,r)=>{var u=i=>{try{s(n.next(i))}catch(c){r(c)}},a=i=>{try{s(n.throw(i))}catch(c){r(c)}},s=i=>i.done?l(i.value):Promise.resolve(i.value).then(u,a);s((n=n.apply(t,o)).next())});import{k as M,p as G,A as W,v as e,_ as m,L as b,u as S}from"./main.50abc935.js";import{L as Y,a as Q}from"./index.a00d62cf.js";import{a as H}from"./arrow-right.c9e4ddf7.js";import{S as w}from"./index.ca99a427.js";import{h as U}from"./highcharts.e06d80e4.js";import{S as j}from"./stock.2a7d0cca.js";import"./arrow-red.96a4c42e.js";import"./useSSR.5ef275e1.js";const k=["\u041E\u0431\u043E\u0440\u043E\u0442\u043D\u044B\u0435 \u0430\u043A\u0442\u0438\u0432\u044B","\u0410\u043A\u0442\u0438\u0432\u044B","\u0421\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u043A\u0430\u043F\u0438\u0442\u0430\u043B","\u041F\u0440\u043E\u0448\u043B\u0430\u044F \u043A\u0430\u043F\u0438\u0442\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F","\u0414\u043E\u043B\u044F \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u043A\u0430\u043F\u0438\u0442\u0430\u043B\u0430 \u0432 \u0430\u043A\u0442\u0438\u0432\u0430\u0445","\u0422\u0435\u043C\u043F \u0440\u043E\u0441\u0442\u0430 \u0430\u043A\u0442\u0438\u0432\u043E\u0432","\u0412\u044B\u0440\u0443\u0447\u043A\u0430 \u0437\u0430 \u0433\u043E\u0434 (\u0441\u043A\u043E\u043B\u044C\u0437\u044F\u0449\u0430\u044F)","\u041F\u0440\u0438\u0431\u044B\u043B\u044C \u0437\u0430 \u0433\u043E\u0434 (\u0441\u043A\u043E\u043B\u044C\u0437\u044F\u0449\u0430\u044F)","\u0420\u0435\u043D\u0442\u0430\u0431\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u043A\u0430\u043F\u0438\u0442\u0430\u043B\u0430","P/E","P/B","P/Equity","P/Sale","\u0422\u0435\u043C\u043F \u0440\u043E\u0441\u0442\u0430 \u043F\u0440\u0438\u0431\u044B\u043B\u0438","\u0422\u0435\u043C\u043F \u043F\u0440\u0438\u0440\u043E\u0441\u0442\u0430 \u0432\u044B\u0440\u0443\u0447\u043A\u0438","\u0422\u0435\u043C\u043F \u043F\u0440\u0438\u0440\u043E\u0441\u0442\u0430 \u043A\u0430\u043F\u0438\u0442\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u0441 \u043D\u0430\u0447\u0430\u043B\u0430 \u0433\u043E\u0434\u0430"],g=M("industries",{state:()=>({items:[],tableRows:[],sumInd:[],sumIndCategories:[],tableColTitles:[],accessRegions:["usa","rus"],currentCountry:"",type:""}),getters:{getIndNames:t=>{try{const o=[];return Array.isArray(t.items)?(t.items.forEach(n=>{o.push(n.NAME||"")}),o):[]}catch(o){return console.error("getIndNames pinia"),console.error(o),[]}},getCapGrowthLastQuart:t=>{try{const o=[];return Array.isArray(t.items)?(t.items.forEach(n=>{o.push(n.FIN_DATA[0].capitalizationGrowthRateFromLastQuart||0)}),o):[]}catch(o){return console.error("getCapGrowthLastQuart pinia"),console.error(o),[]}},getCapGrowthBeginYear:t=>{try{const o=[];return Array.isArray(t.items)?(t.items.forEach(n=>{o.push(n.FIN_DATA[0].capitalizationGrowthRateFromBeginYear||0)}),o):[]}catch(o){return console.error("getCapGrowthBeginYear pinia"),console.error(o),[]}},getPe:t=>{try{const o=[];return Array.isArray(t.items)?(t.items.forEach(n=>{o.push(n.FIN_DATA[0].PE)}),o):[]}catch(o){return console.error("getPe pinia"),console.error(o),[]}}},actions:{resetState(){this.$reset()},setIndustries(t){return h(this,null,function*(){if(this.items.length)return!0;const o=G();let n;if(this.currentCountry=t.country,this.currentCountry==="rus"&&(this.type="industries"),this.currentCountry==="usa"&&(this.type="sectors"),this.currentCountry==="usa"&&(n=yield o.getSectorsList(t.pageNumber,t.pageSize)),this.currentCountry==="rus"&&(n=yield o.getIndustriesList(t.pageNumber,t.pageSize)),n.status===W.success)try{return this.items=[...n.data.ITEMS],!0}catch(l){return console.error(l),!1}return!1})},setTableRows(){this.tableRows.length||this.items.forEach(t=>{try{const o=t.FIN_DATA[0];this.tableRows.push({title:t.NAME,id:t.ID,code:t.CODE,values:[Number(o.currentAssets),Number(o.actives),Number(o.equity),Number(o.capitalization),Number(o.shareOfEquityInAssets),Number(o.assetGrowthRate),Number(o.yearSlidingRevenue),Number(o.yearSlidingProfit),Number(o.returnOnEquity),Number(o.PE),Number(o.PB),Number(o.PEquity),Number(o.PSale),Number(o.profitGrowRate),Number(o.revenueGrowRate),Number(o.capitalizationGrowthRateFromBeginYear)],link:{name:"ListsWrapAbout",params:{locale:"ru",type:this.type,region:this.currentCountry,id:t.CODE}}})}catch(o){console.error(o)}})},setTableColTitles(){this.tableColTitles.length||k.forEach(t=>{this.tableColTitles.push(t)})},updateIndicator(t){this.sumInd[t].picked=!this.sumInd[t].picked},initSumInd(t){try{const o=new Date,n=o.getFullYear(),l=Math.floor((o.getMonth()+3)/3),r=[...this.sumInd];this.sumInd=[],this.sumIndCategories=[],k.forEach((u,a)=>{let s=!1;r.length>0?r[a].picked&&(s=!0):a<=2&&(s=!0),this.sumInd.push({title:u,id:a,code:a,values:[],picked:s})});for(const u of Object.values(this.items[0].FIN_DATA_FULL_PERIODS))if(this.sumInd&&u){const a=Number(u.periodYear),s=Number(u.periodVal);if(s===0||a<=2015)continue;if(t==="year"){if(Number(u.periodVal)!==4)continue;this.sumIndCategories.push(`${a}`)}else this.sumIndCategories.push(`${s}\u043A\u0432. ${a}`);const{currentAssets:i,actives:c,capitalization:p,equity:_,shareOfEquityInAssets:d,capitalizationGrowthRateFromBeginYear:E,assetGrowthRate:I,yearSlidingRevenue:N,yearSlidingProfit:$,returnOnEquity:T,PE:A,PB:V,PEquity:F,PSale:L,profitGrowRate:P,revenueGrowRate:D}=u;this.sumInd[0].values.push(Number(i)),this.sumInd[1].values.push(Number(c)),this.sumInd[2].values.push(Number(_)),this.sumInd[3].values.push(Number(p)),this.sumInd[4].values.push(Number(d)),this.sumInd[5].values.push(Number(I)),this.sumInd[6].values.push(Number(N)),this.sumInd[7].values.push(Number($)),this.sumInd[8].values.push(Number(T)),this.sumInd[9].values.push(Number(A)),this.sumInd[10].values.push(Number(V)),this.sumInd[11].values.push(Number(F)),this.sumInd[12].values.push(Number(L)),this.sumInd[13].values.push(Number(P)),this.sumInd[14].values.push(Number(D)),this.sumInd[15].values.push(Number(E))}}catch(o){console.error("initSumInd"),console.error(o)}}}}),K=e.defineComponent({name:"TableCommonRow",props:{rowTitle:{type:String,required:!0},values:{type:Array,required:!0},currentTableScroll:{type:Number,required:!0}}}),J={class:"tableRow flexRowCenter"},X={class:"rowIndex flexRowCenter tableValue tableRowName",style:{"max-width":"220px"}},Z={style:{width:"220px"}};function ee(t,o,n,l,r,u){return e.openBlock(),e.createElementBlock("div",J,[e.createElementVNode("div",X,[e.createElementVNode("p",Z,e.toDisplayString(t.rowTitle),1)]),e.createElementVNode("div",{class:"rowValue flexRowCenter tableValue",style:e.normalizeStyle([{position:"relative"},`left: ${t.currentTableScroll}px`])},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.values,(a,s)=>(e.openBlock(),e.createElementBlock("p",{key:s,class:"tableValueItem"},e.toDisplayString(a),1))),128))],4)])}const te=m(K,[["render",ee]]),oe=()=>({isMobile:()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}),ne=e.defineComponent({name:"TableCommonPagination",emits:["onScrollTable"],setup(t,{emit:o}){const n=e.ref(!1),l=r=>{o("onScrollTable",r)};return e.onMounted(()=>{n.value=!0}),{arrow:H,onScrollTableTo:l,isShow:n,useDevice:oe}}}),se={key:0,class:"table-pagination"},re=["src"],ae=["src"];function ue(t,o,n,l,r,u){return t.isShow?(e.openBlock(),e.createElementBlock("div",se,[t.useDevice().isMobile()?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[e.createElementVNode("img",{class:"table-pagination__arrow",alt:"< scroll to left",src:t.arrow,onClick:o[0]||(o[0]=a=>t.onScrollTableTo("left"))},null,8,re),e.createElementVNode("img",{class:"table-pagination__arrow table-pagination__arrow--right",alt:"scroll to right >",src:t.arrow,onClick:o[1]||(o[1]=a=>t.onScrollTableTo("right"))},null,8,ae)],64))])):e.createCommentVNode("",!0)}const le=m(ne,[["render",ue],["__scopeId","data-v-35329a06"]]),ie=e.defineComponent({name:"TableCommonColTitles",props:{colTitles:{type:Array,required:!0},currentTableScroll:{type:Number,required:!0},indexTitle:{type:String,default:""}}});const ce={class:"tableRow flexRowCenter tableRowHeader"},de={class:"rowIndex flexRowCenter tableValue tableRowName",style:{"max-width":"220px"}},me={style:{width:"220px"}};function pe(t,o,n,l,r,u){return e.openBlock(),e.createElementBlock("div",ce,[e.createElementVNode("div",de,[e.createElementVNode("p",me,e.toDisplayString(t.indexTitle),1)]),e.createElementVNode("div",{class:"rowValue flexRowCenter tableValue",style:e.normalizeStyle([{position:"relative"},`left: ${t.currentTableScroll}px`])},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.colTitles,(a,s)=>(e.openBlock(),e.createElementBlock("p",{key:s,class:"tableValueItem"},e.toDisplayString(a),1))),128))],4)])}const he=m(ie,[["render",pe],["__scopeId","data-v-36a3872c"]]),_e=e.defineComponent({name:"TableCommon",components:{ScrollArea:w,TableCommonColTitles:he,TableCommonPagination:le,TableCommonRow:te},emits:["clickRow","onChangeParam","onChangeChartDataView"],props:{allowPick:{type:Boolean,default:!1},showPagination:{type:Boolean,default:!0},colTitles:{type:Array,required:!0},rows:{type:Array,required:!0},tabs:{type:Array,default:()=>[]},alertText:{type:String,default:""},indexTitle:{type:String,default:""}},setup(t,{emit:o}){const n=e.ref(0);return{onScrollTable:s=>{switch(s){case"left":{n.value!==0&&(n.value+=100);break}case"right":{n.value-=100;break}default:{console.warn("\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0441\u043A\u0440\u043E\u043B\u0430");break}}},onChangeParam:s=>{n.value=0,o("onChangeParam",s)},onChangeChartDataView:s=>{o("onChangeChartDataView",s)},onClickRow:s=>{o("clickRow",s)},currentTableScroll:n}}}),Ce={class:"table-common"},fe={class:"table-common__helpers"},be={class:"table-common__table"},ge={class:"table-common__thead"},ye={class:"table-common__tr"},ve={class:"table-common__th table-common__fixed table-common__fixed--th"},ke={class:"table-common__tbody"},Se=["onClick"],we={class:"table-common__td table-common__fixed table-common__row-title"},Be={key:1};function Ee(t,o,n,l,r,u){const a=e.resolveComponent("TableCommonPagination"),s=e.resolveComponent("router-link"),i=e.resolveComponent("ScrollArea");return e.openBlock(),e.createElementBlock("div",Ce,[e.createElementVNode("div",fe,[e.createVNode(a,{onOnScrollTable:t.onScrollTable},null,8,["onOnScrollTable"])]),e.createVNode(i,{class:"table-common__scroll-area","disable-desktop":!0},{default:e.withCtx(()=>[e.createElementVNode("table",be,[e.createElementVNode("thead",ge,[e.createElementVNode("tr",ye,[e.createElementVNode("th",ve,e.toDisplayString(t.indexTitle),1),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.colTitles,(c,p)=>(e.openBlock(),e.createElementBlock("th",{class:"table-common__th",key:p,style:e.normalizeStyle(`left: ${t.currentTableScroll}px`)},e.toDisplayString(c),5))),128))])]),e.createElementVNode("tbody",ke,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.rows,(c,p)=>(e.openBlock(),e.createElementBlock("tr",{class:e.normalizeClass(["table-common__tr table-common__tr--item",[{"table-common__tr--selected":c.picked||!1}]]),key:p,onClick:_=>t.onClickRow(c.id||p)},[e.createElementVNode("td",we,[c.link?(e.openBlock(),e.createBlock(s,{key:0,to:c.link},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(c.title),1)]),_:2},1032,["to"])):(e.openBlock(),e.createElementBlock("span",Be,e.toDisplayString(c.title),1))]),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(c.values,(_,d)=>(e.openBlock(),e.createElementBlock("td",{class:"table-common__td table-common__values",key:d,style:e.normalizeStyle(`left: ${t.currentTableScroll}px`)},e.toDisplayString(Number(_).toFixed(2)),5))),128))],10,Se))),128))])])]),_:1})])}const B=m(_e,[["render",Ee]]),Ie=e.defineComponent({name:"ListsWrapChartSwitcher",components:{ScrollArea:w},emits:["onChangeChart"],setup(t,{emit:o}){const n=e.ref([{id:1,title:"\u041F\u0440\u0438\u0440-\u0441\u0442 \u043A\u0430\u043F\u0438\u0442., %",selected:!0},{id:2,title:"\u0421\u0440\u0435\u0434\u043D\u0438\u0439 P/E \u043F\u043E \u043E\u0442\u0440\u0430\u0441\u043B\u044F\u043C",selected:!1}]);return{onChangeChart:r=>{n.value.forEach(u=>{u.selected===!0&&(u.selected=!1),u.id===r.id&&(u.selected=!0)}),o("onChangeChart",r.id)},chartLinks:n}}});const Ne={class:"chartSwitcher"},$e=["onClick"];function Te(t,o,n,l,r,u){const a=e.resolveComponent("ScrollArea");return e.openBlock(),e.createElementBlock("div",Ne,[e.createVNode(a,null,{default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.chartLinks,s=>(e.openBlock(),e.createElementBlock("div",{key:s.id,class:e.normalizeClass(["chartSwitcher__item",{chartSwitcher__selected:s.selected}]),onClick:i=>t.onChangeChart(s)},e.toDisplayString(s.title),11,$e))),128))]),_:1})])}const Ae=m(Ie,[["render",Te],["__scopeId","data-v-2a4e0685"]]),Ve={chart:{type:"column",backgroundColor:""},title:{text:""},legend:{enabled:!1,verticalAlign:"top",itemStyle:{fontSize:"16px",fontFamily:"Montserrat"}},credits:{enabled:!1},yAxis:[{gridLineColor:"#c2c2c2",title:{text:""},labels:{style:{fontSize:"16px",color:"#838383",fontFamily:"Montserrat"}}},{opposite:!0,gridLineColor:"#c2c2c2",title:{text:""},labels:{style:{fontSize:"16px",color:"#838383",fontFamily:"Montserrat"}}}]},Fe=()=>{const t=e.ref({}),o=(r,u)=>{t.value=f(C({},Ve),{series:[...r],xAxis:{categories:[...u]}})},n=r=>{t.value.series=r},l=r=>{};return{getChartOptions:e.computed(()=>t.value),init:o,updateSeries:n,updateCategories:l}},Le=e.defineComponent({name:"ListsChartSwitch",components:{Loader:b,ListsWrapChartSwitcher:Ae},setup(){const t=Fe(),o=g(),n=e.ref(!1),l=e.ref(1),r=e.ref("quart"),u=(i=-1)=>{i!==-1&&(l.value=i),l.value===1?r.value==="quart"?t.updateSeries([{data:o.getCapGrowthLastQuart}]):r.value==="year"&&t.updateSeries([{data:o.getCapGrowthBeginYear}]):l.value===2&&t.updateSeries([{data:o.getPe}])},a=i=>{r.value=i,u()},s=()=>h(this,null,function*(){yield t.init([{name:"",data:o.getCapGrowthLastQuart}],o.getIndNames),n.value=!0});return e.onMounted(()=>h(this,null,function*(){yield s()})),{getChartUpDownOptions:t.getChartOptions,onChangeChart:u,onClickPeriod:a,isInit:n,selectedId:l,selectedPeriod:r}}}),Pe={class:"chartSwitch"},De={key:0,class:"chartSwitch__container"},Re={key:0,class:"chartSwitch__periods"};function xe(t,o,n,l,r,u){const a=e.resolveComponent("ListsWrapChartSwitcher"),s=e.resolveComponent("highcharts"),i=e.resolveComponent("Loader");return e.openBlock(),e.createElementBlock("div",Pe,[t.isInit?(e.openBlock(),e.createElementBlock("div",De,[e.createVNode(a,{class:"chartSwitch__switcher",onOnChangeChart:t.onChangeChart},null,8,["onOnChangeChart"]),t.selectedId===1?(e.openBlock(),e.createElementBlock("div",Re,[e.createElementVNode("div",{class:e.normalizeClass(["chartSwitch__period",[{"chartSwitch__period--active":t.selectedPeriod==="quart"}]]),onClick:o[0]||(o[0]=c=>t.onClickPeriod("quart"))},"\u041F\u043E \u043A\u0432\u0430\u0440\u0442\u0430\u043B\u0430\u043C",2),e.createElementVNode("div",{class:e.normalizeClass(["chartSwitch__period",[{"chartSwitch__period--active":t.selectedPeriod==="year"}]]),onClick:o[1]||(o[1]=c=>t.onClickPeriod("year"))},"\u041F\u043E \u0433\u043E\u0434\u0430\u043C",2)])):e.createCommentVNode("",!0),e.createVNode(s,{class:"chartSwitch__chart",options:t.getChartUpDownOptions},null,8,["options"])])):(e.openBlock(),e.createBlock(i,{key:1}))])}const Oe=m(Le,[["render",xe],["__scopeId","data-v-c34244c9"]]),qe={chart:{type:"column",backgroundColor:"",zoomType:"x"},title:{text:""},legend:{enabled:!1,verticalAlign:"top",itemStyle:{fontSize:"16px",fontFamily:"Montserrat"}},credits:{enabled:!1},rangeSelector:{enabled:!1},yAxis:[{endOnTick:!1,opposite:!0,lineColor:"#c2c2c2",gridLineColor:"#c2c2c2",lineWidth:1,title:{text:""},labels:{align:"left",x:10,style:{fontSize:"18px",color:"#838383",fontFamily:"Montserrat"}}}]},ze=()=>{const t=e.ref({}),o=(r,u)=>{t.value=f(C({},qe),{series:[...r],xAxis:{categories:[...u]}})},n=r=>{t.value.series=[],t.value.series=[...r]},l=r=>{t.value.xAxis.categories=r};return{getChartOptions:e.computed(()=>t.value),init:o,updateSeries:n,updateCategories:l}},Me=e.defineComponent({name:"ListsSumIndicators",components:{Loader:b,TableCommon:B},setup(){const t=ze(),o=g(),n=S(),l=e.ref("quart"),r=e.ref(!1),u=e.ref(!1),a=e.ref([]),s=()=>{a.value=[],o.sumInd.forEach(d=>{d.picked===!0&&a.value.push({name:d.title,data:d.values})})},i=()=>{if(r.value=!1,String(n.params.type)!=="industries"){r.value=!0,u.value=!0;return}j(U),o.initSumInd(l.value),s(),t.init(a.value,o.sumIndCategories),r.value=!0},c=()=>{o.initSumInd(l.value),s(),t.updateSeries(a.value),t.updateCategories(o.sumIndCategories)},p=d=>{l.value=d,c()},_=d=>{o.updateIndicator(d),s(),t.updateSeries(a.value)};return e.onServerPrefetch(()=>{i()}),e.onMounted(()=>{r.value||i()}),{onClickPeriod:p,onSelectIndicator:_,getTableColTitles:e.computed(()=>o.sumIndCategories),getTableRows:e.computed(()=>o.sumInd),getChartColumnOptions:t.getChartOptions,isInit:r,notFound:u,selectedPeriod:l}}}),Ge=t=>(e.pushScopeId("data-v-2596eb90"),t=t(),e.popScopeId(),t),We={class:"sumInd"},Ye={class:"sumInd__container"},Qe=Ge(()=>e.createElementVNode("h1",{class:"sumInd__title"},"\u0421\u0443\u043C\u043C\u0430\u0440\u043D\u044B\u0435 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438",-1)),He={class:"sumInd__periods"},Ue={key:2};function je(t,o,n,l,r,u){const a=e.resolveComponent("highcharts"),s=e.resolveComponent("TableCommon"),i=e.resolveComponent("Loader");return e.openBlock(),e.createElementBlock("div",We,[e.createElementVNode("div",Ye,[Qe,t.isInit&&!t.notFound?(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[e.createVNode(a,{class:"sumInd__chart",options:t.getChartColumnOptions},null,8,["options"]),e.createElementVNode("div",He,[e.createElementVNode("div",{class:e.normalizeClass(["sumInd__period",[{"sumInd__period--active":t.selectedPeriod==="quart"}]]),onClick:o[0]||(o[0]=c=>t.onClickPeriod("quart"))},"\u041F\u043E \u043A\u0432\u0430\u0440\u0442\u0430\u043B\u0430\u043C",2),e.createElementVNode("div",{class:e.normalizeClass(["sumInd__period",[{"sumInd__period--active":t.selectedPeriod==="year"}]]),onClick:o[1]||(o[1]=c=>t.onClickPeriod("year"))},"\u041F\u043E \u0433\u043E\u0434\u0430\u043C",2)]),e.createVNode(s,{class:"sumInd__table","col-titles":t.getTableColTitles,"index-title":"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C",rows:t.getTableRows,onClickRow:t.onSelectIndicator},null,8,["col-titles","rows","onClickRow"])],64)):e.createCommentVNode("",!0),t.isInit?e.createCommentVNode("",!0):(e.openBlock(),e.createBlock(i,{key:1})),t.notFound?(e.openBlock(),e.createElementBlock("h3",Ue,"\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430")):e.createCommentVNode("",!0)])])}const Ke=m(Me,[["render",je],["__scopeId","data-v-2596eb90"]]),Je=e.defineComponent({name:"ListWrapAllBody",components:{ListsSumIndicators:Ke,ListsChartSwitch:Oe,Loader:b,TableCommon:B},setup(){const t=S(),o=g(),n=e.ref(!1),l=e.ref(null),r=e.computed(()=>o.items),u=()=>h(this,null,function*(){const i=String(t.params.region);!n.value&&o.accessRegions.indexOf(i)!==-1&&(l.value=yield o.setIndustries({country:i,pageNumber:1}),o.setTableRows(),o.setTableColTitles(),n.value=!0)});e.onServerPrefetch(()=>h(this,null,function*(){yield u()})),e.onMounted(()=>h(this,null,function*(){yield u()})),e.onBeforeUnmount(()=>{o.resetState()});const a=e.computed(()=>o.tableRows),s=e.computed(()=>o.tableColTitles);return{isInit:n,isSuccess:l,getIndustriesItems:r,getTableRows:a,getTableColTitles:s}}});const Xe={key:0,class:"lists-body"};function Ze(t,o,n,l,r,u){const a=e.resolveComponent("ListsChartSwitch"),s=e.resolveComponent("TableCommon"),i=e.resolveComponent("ListsSumIndicators"),c=e.resolveComponent("Loader");return t.isInit?(e.openBlock(),e.createElementBlock("div",Xe,[e.createVNode(a),t.isInit&&t.isSuccess?(e.openBlock(),e.createBlock(s,{key:0,class:"lists-body__table","col-titles":t.getTableColTitles,"index-title":"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043E\u0442\u0440\u0430\u0441\u043B\u0438",rows:t.getTableRows},null,8,["col-titles","rows"])):e.createCommentVNode("",!0),e.createVNode(i)])):(e.openBlock(),e.createBlock(c,{key:1}))}const et=m(Je,[["render",Ze],["__scopeId","data-v-51f18c06"]]),tt=e.defineComponent({name:"ListsWrapAll",components:{ListWrapAllBody:et,ListsWrapBody:Y,ListsWrapHeader:Q}});function ot(t,o,n,l,r,u){const a=e.resolveComponent("ListsWrapHeader"),s=e.resolveComponent("ListWrapAllBody"),i=e.resolveComponent("ListsWrapBody");return e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createVNode(a),e.createVNode(i,null,{default:e.withCtx(()=>[e.createVNode(s)]),_:1})],64)}const pt=m(tt,[["render",ot]]);export{pt as default};
//# sourceMappingURL=index.0f0038ee.js.map