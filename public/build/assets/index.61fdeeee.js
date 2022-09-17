var O=Object.defineProperty,K=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var k=(t,o,n)=>o in t?O(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,$=(t,o)=>{for(var n in o||(o={}))z.call(o,n)&&k(t,n,o[n]);if(g)for(var n of g(o))x.call(o,n)&&k(t,n,o[n]);return t},C=(t,o)=>K(t,j(o));var y=(t,o,n)=>new Promise((c,i)=>{var l=r=>{try{s(n.next(r))}catch(d){i(d)}},a=r=>{try{s(n.throw(r))}catch(d){i(d)}},s=r=>r.done?c(r.value):Promise.resolve(r.value).then(l,a);s((n=n.apply(t,o)).next())});import{v as e,_ as u,L as h}from"./main.50abc935.js";import{T as Y}from"./index.358e587e.js";import{u as f}from"./useVModel.13ad703e.js";import{I as Z,a as G}from"./index.b790783c.js";import{r as _}from"./index.ea6da743.js";import{L as E}from"./index.5defaede.js";import{I as J}from"./index.de0fdd57.js";import{S}from"./index.ca99a427.js";const B=[{title:"\u0413\u043E\u0434\u043E\u0432\u0430\u044F",value:"16,52%"},{title:"\u041E\u0431\u0449\u0430\u044F",value:"76,08%"},{title:"\u041F\u043E \u043E\u0444\u0435\u0440\u0442\u0435",value:"7,1%"}],L=[{title:"\u041E\u0431\u0449\u0438\u0439",value:"15.05.2021"},{title:"\u041F\u043E \u043E\u0444\u0435\u0440\u0442\u0435",value:"28.05.2021"}],A=[{title:"\u041E\u0431\u0449\u0438\u0439",value:"1843,68 \u20BD"},{title:"\u0421 \u043A\u0443\u043F\u043E\u043D\u0430\u043C\u0438",value:"1093,74 \u20BD"}],Q=e.defineComponent({name:"ListItemViewMaxRadarPortfolio",components:{TechnicalAnalysisPageCompanyStat:Y,InputNumber:Z},props:{active:{type:Object,required:!0,default:()=>{}}},setup(t){const o=_(),n=e.ref(1);return{activeModel:f(t,"active"),quantityModel:n,getCurrentStatTitles:o.getCurrentStatTitles,getCurrentStatValueTitles:o.getCurrentStatValueTitles,getCurrentStatValueActiveKeys:o.getCurrentStatValueActiveKeys}}});const W=t=>(e.pushScopeId("data-v-89b6ac1f"),t=t(),e.popScopeId(),t),X={class:"asset"},ee={class:"asset__header"},te={class:"asset__title"},oe={class:"asset__subtitle"},ne={class:"asset__body"},se={class:"asset__footer"},ae={class:"asset__price"},re=e.createTextVNode(" \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043E\u0431\u043B\u0438\u0433\u0430\u0446\u0438\u0438: "),ce={class:"asset__quantity"},ie=W(()=>e.createElementVNode("span",null,"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E:",-1)),le={class:"asset__wrapBtnAdd"},ue={class:"asset__sum"};function de(t,o,n,c,i,l){const a=e.resolveComponent("TechnicalAnalysisPageCompanyStat"),s=e.resolveComponent("InputNumber");return e.openBlock(),e.createElementBlock("div",X,[e.createElementVNode("div",ee,[e.createElementVNode("div",te,e.toDisplayString(t.active.NAME),1),e.createElementVNode("div",oe,e.toDisplayString(t.active.COMPANY.NAME),1)]),e.createElementVNode("div",ne,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.getCurrentStatTitles,(r,d)=>(e.openBlock(),e.createBlock(a,{key:d,active:t.active,title:r,titles:t.getCurrentStatValueTitles[d],"value-keys":t.getCurrentStatValueActiveKeys[d]},null,8,["active","title","titles","value-keys"]))),128))]),e.createElementVNode("div",se,[e.createElementVNode("div",ae,[re,e.createElementVNode("span",null,e.toDisplayString(t.active.ID)+" \u20BD",1)]),e.createElementVNode("div",ce,[ie,e.createVNode(s,{value:t.activeModel.count,"onUpdate:value":o[0]||(o[0]=r=>t.activeModel.count=r),class:"asset__quantityInput"},null,8,["value"])]),e.createElementVNode("div",le,[e.createElementVNode("div",ue,"\u0421\u0443\u043C\u043C\u0430: "+e.toDisplayString(t.active.ID)+" \u20BD",1),t.activeModel.isSelected?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("button",{key:0,class:"asset__btnAdd",onClick:o[1]||(o[1]=r=>t.activeModel.isSelected=!0)}," \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C ")),t.activeModel.isSelected?(e.openBlock(),e.createElementBlock("button",{key:1,class:"asset__btnAdd asset__btnAdd--remove",onClick:o[2]||(o[2]=r=>t.activeModel.isSelected=!1)}," \u0423\u0431\u0440\u0430\u0442\u044C ")):e.createCommentVNode("",!0)])])])}const N=u(Q,[["render",de],["__scopeId","data-v-89b6ac1f"]]),_e=e.defineComponent({name:"ListItemViewMinStatRadarPortfolio",props:{title:{type:String,default:""},titles:{type:Array,required:!0,default:()=>[]},valueKeys:{type:Array,required:!0,default:()=>[]},active:{type:Object,required:!0,default:void 0}},setup(){const t=_();return{activeStatValueFormatter:(o,n)=>t.activeStatValueFormatter(o,n)}}});const pe={class:"stat"},me={key:0,class:"stat__title"},ve={class:"stat__fields"},fe={class:"stat__value"},$e={class:"stat__subtitle"};function Ve(t,o,n,c,i,l){return e.openBlock(),e.createElementBlock("div",pe,[t.title?(e.openBlock(),e.createElementBlock("div",me,e.toDisplayString(t.title),1)):e.createCommentVNode("",!0),e.createElementVNode("div",ve,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.titles,(a,s)=>(e.openBlock(),e.createElementBlock("div",{key:s,class:"stat__field"},[e.createElementVNode("div",fe,e.toDisplayString(t.activeStatValueFormatter(t.active,t.valueKeys[s])),1),e.createElementVNode("div",$e,e.toDisplayString(a),1)]))),128))])])}const w=u(_e,[["render",Ve],["__scopeId","data-v-940b103a"]]),Ce=e.defineComponent({name:"ListItemViewMinCountRadarPortfolio",emits:["update:count"],props:{count:{type:Number,default:0}},setup(t){_();const o=f(t,"count",!0);return{countModel:o,onClick:c=>{c==="minus"&&Number(o.value)!==0?o.value-=1:c==="plus"&&(o.value+=1)}}}});const he={class:"counter"},ge={class:"counter__value"};function ke(t,o,n,c,i,l){return e.openBlock(),e.createElementBlock("div",he,[e.createElementVNode("button",{class:"counter__btn counter__btn--minus",onClick:o[0]||(o[0]=a=>t.onClick("minus"))}),e.createElementVNode("div",ge,e.toDisplayString(t.countModel),1),e.createElementVNode("button",{class:"counter__btn counter__btn--plus",onClick:o[1]||(o[1]=a=>t.onClick("plus"))})])}const b=u(Ce,[["render",ke],["__scopeId","data-v-3423c787"]]),ye=e.defineComponent({name:"ListItemViewMinRadarPortfolio",components:{ListItemViewMinCountRadarPortfolio:b,ListItemViewMinStatRadarPortfolio:w},props:{active:{type:Object,required:!0,default:()=>{}}},setup(t){const o=_();e.ref(!1);const n=f(t,"active");return{activeModel:n,onClickActive:()=>{n.value.isSelected=!n.value.isSelected},getCurrentStatTitles:o.getCurrentStatTitles,getCurrentStatValueTitles:o.getCurrentStatValueTitles,getCurrentStatValueActiveKeys:o.getCurrentStatValueActiveKeys}}});const I=t=>(e.pushScopeId("data-v-961e3c34"),t=t(),e.popScopeId(),t),Ee={class:"asset"},Se={class:"asset__header"},Be={class:"asset__title"},Le={class:"asset__bodyMobile"},Ae={class:"asset__footer"},Ne={class:"asset__count"},we=I(()=>e.createElementVNode("span",null,"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E:",-1)),be={class:"asset__sum"},Ie=I(()=>e.createElementVNode("div",{class:"asset__line"},null,-1));function Te(t,o,n,c,i,l){const a=e.resolveComponent("ListItemViewMinStatRadarPortfolio"),s=e.resolveComponent("ListItemViewMinCountRadarPortfolio");return e.openBlock(),e.createElementBlock("div",Ee,[e.createElementVNode("div",Se,[e.createElementVNode("div",Be,[e.createElementVNode("span",{class:e.normalizeClass(["asset__toggle",{"asset__toggle--active":t.activeModel.isSelected}]),onClick:o[0]||(o[0]=(...r)=>t.onClickActive&&t.onClickActive(...r))},null,2),e.createTextVNode(e.toDisplayString(t.active.NAME),1)])]),e.createElementVNode("div",Le,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.getCurrentStatValueTitles,(r,d)=>(e.openBlock(),e.createBlock(a,{key:d,active:t.active,titles:r,"value-keys":t.getCurrentStatValueActiveKeys[d]},null,8,["active","titles","value-keys"]))),128))]),e.createElementVNode("div",Ae,[e.createElementVNode("div",Ne,[we,e.createVNode(s,{count:t.activeModel.count,"onUpdate:count":o[1]||(o[1]=r=>t.activeModel.count=r)},null,8,["count"])]),e.createElementVNode("div",be,"\u0421\u0443\u043C\u043C\u0430: "+e.toDisplayString(t.active.ID)+" \u20BD",1)]),Ie])}const T=u(ye,[["render",Te],["__scopeId","data-v-961e3c34"]]),Re=e.defineComponent({name:"ListItemRadarPortfolio",components:{ListItemViewMinRadarPortfolio:T,ListItemViewMaxRadarPortfolio:N},props:{currentView:{type:String,required:!0}},setup(){return{quantity:e.ref(0),profitStats:B,cancellationPeriodStats:L,repaymentPriceStats:A}}});function Pe(t,o,n,c,i,l){const a=e.resolveComponent("ListItemViewMaxRadarPortfolio"),s=e.resolveComponent("ListItemViewMinRadarPortfolio");return e.openBlock(),e.createElementBlock(e.Fragment,null,[t.currentView==="max"?(e.openBlock(),e.createBlock(a,{key:0,price:"1 047,05",quantity:t.quantity,"profit-stats":t.profitStats,"repayment-price-stats":t.repaymentPriceStats,"cancellation-period-stats":t.cancellationPeriodStats},null,8,["quantity","profit-stats","repayment-price-stats","cancellation-period-stats"])):e.createCommentVNode("",!0),t.currentView==="min"?(e.openBlock(),e.createBlock(s,{key:1,price:"1 047,05",quantity:t.quantity,"profit-stats":t.profitStats,"repayment-price-stats":t.repaymentPriceStats,"cancellation-period-stats":t.cancellationPeriodStats},null,8,["quantity","profit-stats","repayment-price-stats","cancellation-period-stats"])):e.createCommentVNode("",!0)],64)}const De=u(Re,[["render",Pe]]),Me=e.defineComponent({name:"ListHeaderChangeView",props:{currentView:String}});const V=t=>(e.pushScopeId("data-v-f5c40fcc"),t=t(),e.popScopeId(),t),He={class:"changeView"},Fe=V(()=>e.createElementVNode("span",null,null,-1)),qe=V(()=>e.createElementVNode("span",null,null,-1)),Ue=V(()=>e.createElementVNode("span",null,null,-1)),Oe=[Fe,qe,Ue],Ke=V(()=>e.createElementVNode("span",null,null,-1)),je=V(()=>e.createElementVNode("span",null,null,-1)),ze=[Ke,je];function xe(t,o,n,c,i,l){return e.openBlock(),e.createElementBlock("div",He,[e.createElementVNode("div",{onClick:o[0]||(o[0]=a=>t.$emit("update:currentView","min")),class:e.normalizeClass(["changeView__item","changeView__item--mini",{"changeView__item--active":t.currentView==="min"}])},Oe,2),e.createElementVNode("div",{onClick:o[1]||(o[1]=a=>t.$emit("update:currentView","max")),class:e.normalizeClass(["changeView__item","changeView__item--max",{"changeView__item--active":t.currentView==="max"}])},ze,2)])}const R=u(Me,[["render",xe],["__scopeId","data-v-f5c40fcc"]]),Ye=e.defineComponent({name:"ListHeaderSelectedCount",props:{min:{type:[String,Number],required:!0},max:{type:[String,Number],required:!0}}});const Ze={class:"selectedCount"};function Ge(t,o,n,c,i,l){return e.openBlock(),e.createElementBlock("div",Ze,"\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E "+e.toDisplayString(t.min)+" \u0438\u0437 "+e.toDisplayString(t.max),1)}const P=u(Ye,[["render",Ge],["__scopeId","data-v-37f4656a"]]),Je=e.defineComponent({name:"ListHeaderSelectAll"});const Qe={class:"selectAll"},We=e.createStaticVNode('<span class="selectAll__icon" data-v-75250293><svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-75250293><rect y="3" width="6" height="2" fill="#FEC006" data-v-75250293></rect><path d="M8 4L4.25 7.4641L4.25 0.535898L8 4Z" fill="#FEC006" data-v-75250293></path></svg></span><span class="selectAll__text" data-v-75250293>\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0435</span>',2),Xe=[We];function et(t,o,n,c,i,l){return e.openBlock(),e.createElementBlock("div",Qe,Xe)}const D=u(Je,[["render",et],["__scopeId","data-v-75250293"]]),tt=e.defineComponent({name:"ListHeaderResetAll"});const ot=t=>(e.pushScopeId("data-v-0327584f"),t=t(),e.popScopeId(),t),nt={class:"resetAll"},st=e.createTextVNode("\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0432\u0441\u0435 "),at=ot(()=>e.createElementVNode("span",{class:"resetAll__icon"},null,-1)),rt=[st,at];function ct(t,o,n,c,i,l){return e.openBlock(),e.createElementBlock("div",nt,rt)}const M=u(tt,[["render",ct],["__scopeId","data-v-0327584f"]]),it="/109.68.213.103/build/assets/search-2.6285022a.svg",lt="/109.68.213.103/build/assets/search-2--active.7f9c5a17.svg",ut=e.defineComponent({name:"ListHeaderSearch",setup(){return{iconSearch:it,iconSearchActive:lt}}});const dt=t=>(e.pushScopeId("data-v-7c5eccb4"),t=t(),e.popScopeId(),t),_t={class:"listSearch"},pt=dt(()=>e.createElementVNode("input",{placeholder:"\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044E",required:"",type:"text"},null,-1)),mt={class:"listSearch__btn"},vt=["src"],ft=["src"];function $t(t,o,n,c,i,l){return e.openBlock(),e.createElementBlock("div",_t,[e.createElementVNode("form",{onSubmit:o[0]||(o[0]=e.withModifiers(()=>{},["prevent"]))},[pt,e.createElementVNode("button",mt,[e.createElementVNode("img",{alt:"icon",class:"listSearch__icon",src:t.iconSearch},null,8,vt),e.createElementVNode("img",{alt:"icon",class:"listSearch__icon--focus",src:t.iconSearchActive},null,8,ft)])],32)])}const H=u(ut,[["render",$t],["__scopeId","data-v-7c5eccb4"]]),Vt="/109.68.213.103/build/assets/settings.7002f2dc.svg",Ct="/109.68.213.103/build/assets/settings--active.a0397719.svg",ht=e.defineComponent({name:"ListHeaderOptions",components:{InputCheckbox:G},setup(){const t=e.ref(!1),o=e.reactive({profitability:!0,cancellationPeriod:!0,repaymentPrice:!0,cost:!1}),n=()=>{t.value=!t.value};return C($({iconOptions:Vt,iconOptionsActive:Ct,isShowDialog:t},e.toRefs(o)),{onToggleDialogShow:n})}});const gt=t=>(e.pushScopeId("data-v-6ca80829"),t=t(),e.popScopeId(),t),kt={class:"options"},yt={class:"options__icon"},Et=["src"],St={class:"options__icon--active"},Bt=["src"],Lt={class:"options__dialogList"},At=gt(()=>e.createElementVNode("button",{class:"options__show"},"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C",-1));function Nt(t,o,n,c,i,l){const a=e.resolveComponent("InputCheckbox");return e.openBlock(),e.createElementBlock("div",kt,[e.createElementVNode("div",yt,[e.createElementVNode("img",{alt:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",src:t.iconOptions,onClick:o[0]||(o[0]=(...s)=>t.onToggleDialogShow&&t.onToggleDialogShow(...s))},null,8,Et)]),e.createElementVNode("div",St,[e.createElementVNode("img",{alt:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",src:t.iconOptionsActive,onClick:o[1]||(o[1]=(...s)=>t.onToggleDialogShow&&t.onToggleDialogShow(...s))},null,8,Bt)]),e.createElementVNode("div",{class:e.normalizeClass(["options__dialog",{"options__dialog--open":t.isShowDialog}])},[e.createElementVNode("span",{class:"options__close",onClick:o[2]||(o[2]=(...s)=>t.onToggleDialogShow&&t.onToggleDialogShow(...s))}),e.createElementVNode("div",Lt,[e.createVNode(a,{selected:t.profitability,"onUpdate:selected":o[3]||(o[3]=s=>t.profitability=s),class:"options__dialogCheckbox","is-left-checkmark":!0,title:"\u0414\u043E\u0445\u043E\u0434\u043D\u043E\u0441\u0442\u044C"},null,8,["selected"]),e.createVNode(a,{selected:t.cancellationPeriod,"onUpdate:selected":o[4]||(o[4]=s=>t.cancellationPeriod=s),class:"options__dialogCheckbox","is-left-checkmark":!0,title:"\u0421\u0440\u043E\u043A \u0433\u0430\u0448\u0435\u043D\u0438\u044F"},null,8,["selected"]),e.createVNode(a,{selected:t.repaymentPrice,"onUpdate:selected":o[5]||(o[5]=s=>t.repaymentPrice=s),class:"options__dialogCheckbox","is-left-checkmark":!0,title:"\u0426\u0435\u043D\u0430 \u043F\u043E\u0433\u0430\u0448\u0435\u043D\u0438\u044F"},null,8,["selected"]),e.createVNode(a,{selected:t.cost,"onUpdate:selected":o[6]||(o[6]=s=>t.cost=s),class:"options__dialogCheckbox","is-left-checkmark":!0,title:"\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C"},null,8,["selected"]),At])],2)])}const F=u(ht,[["render",Nt],["__scopeId","data-v-6ca80829"]]),wt=e.defineComponent({name:"ListHeaderPortfolioDefault",components:{ListHeaderOptions:F,ListHeaderSearch:H,ListHeaderResetAll:M,ListHeaderSelectAll:D,ListHeaderSelectedCount:P,ListHeaderChangeView:R,ListHeaderTopTitle:E},props:{currentView:{type:String}},setup(t){const o=_();return{getTotalActives:e.computed(()=>o.getCurrentActivesTotalItems),getShownActives:e.computed(()=>o.getCurrentActivesShownItems),currentViewModel:f(t,"currentView")}}});const bt={class:"headerRadar"},It={class:"headerRadar__wrap"},Tt={class:"headerRadar__inner"},Rt={class:"headerRadar__inner headerRadar__inner--between"},Pt={class:"headerRadar__inner headerRadar__inner--between"};function Dt(t,o,n,c,i,l){const a=e.resolveComponent("ListHeaderTopTitle"),s=e.resolveComponent("ListHeaderChangeView"),r=e.resolveComponent("ListHeaderSelectedCount"),d=e.resolveComponent("ListHeaderSelectAll"),m=e.resolveComponent("ListHeaderResetAll"),v=e.resolveComponent("ListHeaderSearch"),p=e.resolveComponent("ListHeaderOptions");return e.openBlock(),e.createElementBlock("div",bt,[e.createVNode(a,{count:t.getTotalActives,title:"\u0421\u043F\u0438\u0441\u043E\u043A \u0430\u043A\u0442\u0438\u0432\u043E\u0432"},null,8,["count"]),e.createElementVNode("div",It,[e.createElementVNode("div",Tt,[e.createVNode(s,{"current-view":t.currentViewModel,"onUpdate:current-view":o[0]||(o[0]=U=>t.currentViewModel=U)},null,8,["current-view"]),e.createVNode(r,{class:"headerRadar__selectedCount",max:t.getTotalActives,min:t.getShownActives},null,8,["max","min"])]),e.createElementVNode("div",Rt,[e.createVNode(d),e.createVNode(m)]),e.createElementVNode("div",Pt,[e.createVNode(v,{class:"headerRadar__search"}),e.createVNode(p)])])])}const Mt=u(wt,[["render",Dt],["__scopeId","data-v-7f01b7db"]]),Ht=e.defineComponent({name:"ListHeaderActivesTypesItem",props:{title:{type:String,required:!0},isSelected:{type:Boolean,default:!1},showIcon:{type:Boolean,default:!1},count:{type:[Number,String],default:0}}});const Ft={class:"typeItem__text"},qt={key:0},Ut={key:0,class:"typeItem__icon"};function Ot(t,o,n,c,i,l){return e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["typeItem",{"typeItem--selected":t.isSelected}])},[e.createElementVNode("div",Ft,[e.createTextVNode(e.toDisplayString(t.title)+" ",1),t.count?(e.openBlock(),e.createElementBlock("span",qt,"("+e.toDisplayString(t.count)+")",1)):e.createCommentVNode("",!0)]),t.showIcon?(e.openBlock(),e.createElementBlock("div",Ut)):e.createCommentVNode("",!0)],2)}const Kt=u(Ht,[["render",Ot],["__scopeId","data-v-be83a9bb"]]),jt=e.defineComponent({name:"ListHeaderActivesTypes",components:{ListHeaderActivesTypesItem:Kt}});const zt={class:"activesTypes"},xt={class:"activesTypes__grid"};function Yt(t,o,n,c,i,l){const a=e.resolveComponent("ListHeaderActivesTypesItem");return e.openBlock(),e.createElementBlock("div",zt,[e.createElementVNode("div",xt,[e.createVNode(a,{title:"\u0412\u0441\u0435 \u0430\u043A\u0442\u0438\u0432\u044B","is-selected":!0}),e.createVNode(a,{title:"\u0410\u043A\u0446\u0438\u0438",count:"9","show-icon":!0}),e.createVNode(a,{title:"ETF",count:"0"}),e.createVNode(a,{title:"\u041E\u0431\u043B\u0438\u0433\u0430\u0446\u0438\u0438",count:"0"})])])}const Zt=u(jt,[["render",Yt],["__scopeId","data-v-9c5c76e4"]]),Gt=e.defineComponent({name:"ListHeaderAddNewAsset"});const q=t=>(e.pushScopeId("data-v-1927eca0"),t=t(),e.popScopeId(),t),Jt={class:"add"},Qt=q(()=>e.createElementVNode("div",{class:"add__icon"},null,-1)),Wt=q(()=>e.createElementVNode("div",{class:"add__text"},"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0430\u043A\u0442\u0438\u0432",-1)),Xt=[Qt,Wt];function eo(t,o,n,c,i,l){return e.openBlock(),e.createElementBlock("div",Jt,Xt)}const to=u(Gt,[["render",eo],["__scopeId","data-v-1927eca0"]]),oo=e.defineComponent({name:"ListHeaderCompareParams",components:{InputDropdown:J},setup(){const t=e.reactive({benchmark:{value:null},profile:{value:null}});return $({dropdownItems:[{id:0,label:"\u041A\u0440\u0443\u0442\u043E\u0439 \u0432\u044B\u0431\u043E\u0440"},{id:1,label:"\u0421\u0443\u043F\u0435\u0440\u0441\u043A\u0438\u0439 \u0432\u044B\u0431\u043E\u0440"},{id:2,label:"\u041E\u0431\u0430\u043B\u0434\u0435\u043D\u043D\u044B\u0439 \u0432\u044B\u0431\u043E\u0440"}]},e.toRefs(t))}});const no={class:"params"};function so(t,o,n,c,i,l){const a=e.resolveComponent("InputDropdown");return e.openBlock(),e.createElementBlock("div",no,[e.createVNode(a,{items:t.dropdownItems,selected:t.benchmark.value,"onUpdate:selected":o[0]||(o[0]=s=>t.benchmark.value=s),placeholder:"\u0420\u0430\u0441\u0442\u0443\u0449\u0438\u0439 \u043C\u0438\u043B\u043B\u0438\u043E\u043D",title:"\u0411\u0435\u043D\u0447\u043C\u0430\u0440\u043A:"},null,8,["items","selected"]),e.createVNode(a,{items:t.dropdownItems,selected:t.profile.value,"onUpdate:selected":o[1]||(o[1]=s=>t.profile.value=s),placeholder:"\u0420\u0430\u0441\u0442\u0443\u0449\u0438\u0439 \u043C\u0438\u043B\u043B\u0438\u043E\u043D",title:"\u0412\u0430\u0448 \u043F\u043E\u0440\u0442\u0444\u0435\u043B\u044C:"},null,8,["items","selected"])])}const ao=u(oo,[["render",so],["__scopeId","data-v-e4cbfcd5"]]),ro=e.defineComponent({name:"ListHeaderPortfolioDefault",components:{ListHeaderCompareParams:ao,ListHeaderAddNewAsset:to,ListHeaderActivesTypes:Zt,ListHeaderOptions:F,ListHeaderSearch:H,ListHeaderResetAll:M,ListHeaderSelectAll:D,ListHeaderSelectedCount:P,ListHeaderChangeView:R,ListHeaderTopTitle:E},props:{currentView:{type:String}},setup(t){return{currentViewModel:f(t,"currentView")}}});const co={class:"headerActives"},io={class:"headerActives__wrap"},lo={class:"headerActives__gridSearchAdd"};function uo(t,o,n,c,i,l){const a=e.resolveComponent("ListHeaderTopTitle"),s=e.resolveComponent("ListHeaderCompareParams"),r=e.resolveComponent("ListHeaderChangeView"),d=e.resolveComponent("ListHeaderActivesTypes"),m=e.resolveComponent("ListHeaderSearch"),v=e.resolveComponent("ListHeaderAddNewAsset");return e.openBlock(),e.createElementBlock("div",co,[e.createVNode(a,{title:"\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0434\u043B\u044F \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u044F"}),e.createVNode(s,{class:"headerActives__params"}),e.createElementVNode("div",io,[e.createVNode(r,{class:"headerActives__item","current-view":t.currentViewModel,"onUpdate:current-view":o[0]||(o[0]=p=>t.currentViewModel=p)},null,8,["current-view"]),e.createVNode(d,{class:"headerActives__item"}),e.createElementVNode("div",lo,[e.createVNode(m,{class:"headerActives__search"}),e.createVNode(v,{class:"headerActives__addNewAsset"})])])])}const _o=u(ro,[["render",uo],["__scopeId","data-v-bd906039"]]),po=e.defineComponent({name:"ListHeaderRadarPortfolio",components:{ListHeaderPortfolioDefault:_o,ListHeaderRadar:Mt},props:{headerType:{type:String,required:!0},currentView:{type:String}},setup(t){return{currentViewModel:f(t,"currentView")}}});const mo={class:"listHeader"};function vo(t,o,n,c,i,l){const a=e.resolveComponent("ListHeaderRadar"),s=e.resolveComponent("ListHeaderPortfolioDefault");return e.openBlock(),e.createElementBlock("div",mo,[t.headerType==="radar"?(e.openBlock(),e.createBlock(a,{key:0,"current-view":t.currentViewModel,"onUpdate:current-view":o[0]||(o[0]=r=>t.currentViewModel=r)},null,8,["current-view"])):e.createCommentVNode("",!0),t.headerType==="portfolio-default"?(e.openBlock(),e.createBlock(s,{key:1,"current-view":t.currentViewModel,"onUpdate:current-view":o[1]||(o[1]=r=>t.currentViewModel=r)},null,8,["current-view"])):e.createCommentVNode("",!0)])}const fo=u(po,[["render",vo],["__scopeId","data-v-19054c86"]]),$o={class:"cellTitle"},Vo={class:"cellTitle__name"},Co=e.defineComponent({name:"TableLeftCellTitle"}),ho=e.defineComponent(C($({},Co),{props:{active:{type:Object,required:!0,default:()=>{}}},setup(t){const o=t;_(),e.ref(!1);const n=f(o,"active"),c=()=>{n.value.isSelected=!n.value.isSelected};return(i,l)=>(e.openBlock(),e.createElementBlock("td",$o,[e.createElementVNode("span",{class:e.normalizeClass(["cellTitle__toggle",{"cellTitle__toggle--active":e.unref(n).isSelected}]),onClick:c},null,2),e.createElementVNode("span",Vo,e.toDisplayString(e.unref(n).NAME),1)]))}}));const go=u(ho,[["__scopeId","data-v-b990d3f8"]]),ko=e.defineComponent({name:"ListActivesRadarPortfolioTableLeft",components:{TableLeftCellTitle:go},setup(){const t=_();return{getCurrentActives:e.computed(()=>t.getCurrentActives)}}});const yo=t=>(e.pushScopeId("data-v-bf988a60"),t=t(),e.popScopeId(),t),Eo={class:"tableLeft"},So=yo(()=>e.createElementVNode("tr",null,[e.createElementVNode("th",null,"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")],-1));function Bo(t,o,n,c,i,l){const a=e.resolveComponent("TableLeftCellTitle");return e.openBlock(),e.createElementBlock("div",Eo,[e.createElementVNode("table",null,[So,(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.getCurrentActives,s=>(e.openBlock(),e.createElementBlock("tr",{key:s.ID},[e.createVNode(a,{active:s},null,8,["active"])]))),128))])])}const Lo=u(ko,[["render",Bo],["__scopeId","data-v-bf988a60"]]),Ao=e.defineComponent({name:"ListActivesRadarPortfolioTableRight",components:{ScrollArea:S,ListItemViewMinCountRadarPortfolio:b},setup(){const t=_();return{getCurrentActives:e.computed(()=>t.getCurrentActives)}}});const No=t=>(e.pushScopeId("data-v-5af43ab1"),t=t(),e.popScopeId(),t),wo={class:"tableRight"},bo=No(()=>e.createElementVNode("tr",null,[e.createElementVNode("th",null,[e.createElementVNode("div",null,"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E")]),e.createElementVNode("th",null,[e.createElementVNode("div",null,"\u0421\u0443\u043C\u043C\u0430")])],-1)),Io={style:{"max-width":"250px","vertical-align":"top"}},To={style:{"max-width":"250px","vertical-align":"top"}},Ro={class:"tableRight__sum"};function Po(t,o,n,c,i,l){const a=e.resolveComponent("ListItemViewMinCountRadarPortfolio"),s=e.resolveComponent("ScrollArea");return e.openBlock(),e.createElementBlock("div",wo,[e.createElementVNode("table",null,[bo,(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.getCurrentActives,(r,d)=>(e.openBlock(),e.createElementBlock("tr",{key:r.ID},[e.createElementVNode("td",Io,[e.createVNode(a,{count:r.count,"onUpdate:count":m=>r.count=m,style:{"min-width":"max-content","overflow-x":"auto"}},null,8,["count","onUpdate:count"])]),e.createElementVNode("td",To,[e.createVNode(s,null,{default:e.withCtx(()=>[e.createElementVNode("div",Ro,e.toDisplayString(r.ID)+" \u20BD",1)]),_:2},1024)])]))),128))])])}const Do=u(Ao,[["render",Po],["__scopeId","data-v-5af43ab1"]]),Mo=e.defineComponent({name:"ListActivesRadarPortfolioTableCenter",components:{ListItemViewMinStatRadarPortfolio:w,ScrollArea:S},setup(){const t=_();return{getCurrentActives:e.computed(()=>t.getCurrentActives),getCurrentStatTitles:e.computed(()=>t.getCurrentStatTitles),getCurrentStatValueTitles:e.computed(()=>t.getCurrentStatValueTitles),getCurrentStatValueActiveKeys:e.computed(()=>t.getCurrentStatValueActiveKeys)}}});function Ho(t,o,n,c,i,l){const a=e.resolveComponent("ListItemViewMinStatRadarPortfolio"),s=e.resolveComponent("ScrollArea");return e.openBlock(),e.createBlock(s,{class:"tableCenter"},{default:e.withCtx(()=>[e.createElementVNode("table",null,[e.createElementVNode("tr",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.getCurrentStatTitles,(r,d)=>(e.openBlock(),e.createElementBlock("th",{key:d},[e.createElementVNode("div",null,e.toDisplayString(r),1)]))),128))]),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.getCurrentActives,(r,d)=>(e.openBlock(),e.createElementBlock("tr",{key:r.ID},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.getCurrentStatValueTitles,(m,v)=>(e.openBlock(),e.createElementBlock("td",{key:v},[e.createVNode(a,{active:r,titles:m,"value-keys":t.getCurrentStatValueActiveKeys[v]},null,8,["active","titles","value-keys"])]))),128))]))),128))])]),_:1})}const Fo=u(Mo,[["render",Ho],["__scopeId","data-v-d3f8c731"]]),qo=e.defineComponent({name:"ListActivesRadarPortfolioTable",components:{ListActivesRadarPortfolioTableCenter:Fo,ListActivesRadarPortfolioTableRight:Do,ListActivesRadarPortfolioTableLeft:Lo},setup(){const t=_();return{numEl:e.ref(10),getActives:e.computed(()=>t.actives[t.currentTab])}}});const Uo={class:"assetsTable"};function Oo(t,o,n,c,i,l){const a=e.resolveComponent("ListActivesRadarPortfolioTableLeft"),s=e.resolveComponent("ListActivesRadarPortfolioTableCenter"),r=e.resolveComponent("ListActivesRadarPortfolioTableRight");return e.openBlock(),e.createElementBlock("div",Uo,[e.createVNode(a),e.createVNode(s),e.createVNode(r)])}const Ko=u(qo,[["render",Oo],["__scopeId","data-v-be4858ca"]]),jo={key:0,class:"load-more"},zo=e.defineComponent({name:"RadarActivesListLoadMore",components:{Loader:h}}),xo=e.defineComponent(C($({},zo),{setup(t){const o=_(),n=e.computed(()=>o.getCurrentEqualItemsCount),c=e.computed(()=>o.processes.updateActives),i=()=>y(this,null,function*(){yield o.updateActives()});return(l,a)=>e.unref(n)?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("div",jo,[e.unref(c)?(e.openBlock(),e.createBlock(h,{key:1})):(e.openBlock(),e.createElementBlock("button",{key:0,class:"load-more__btn",onClick:i},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0435\u0449\u0435"))]))}}));const Yo=u(xo,[["__scopeId","data-v-f1bc2687"]]),Zo=e.defineComponent({name:"ListActivesRadarPortfolio",components:{RadarActivesListLoadMore:Yo,Loader:h,ListItemViewMinRadarPortfolio:T,ListItemViewMaxRadarPortfolio:N,ListActivesRadarPortfolioTable:Ko,ListHeaderRadarPortfolio:fo,ListItemRadarPortfolio:De},props:{headerType:{type:String,required:!0}},setup(){const t=_(),o=e.ref(t.activesViewMode);return e.watch(()=>o.value,()=>{t.$patch({activesViewMode:o.value})}),{currentView:o,profitStats:B,cancellationPeriodStats:L,repaymentPriceStats:A,getActivesList:e.computed(()=>t.actives[t.currentTab]),getRadarInit:e.computed(()=>t.isInit),getUpdateFilters:e.computed(()=>t.processes.updateFilters)}}});const Go={class:"listActives"},Jo={class:"listActives__container"},Qo={key:1};function Wo(t,o,n,c,i,l){const a=e.resolveComponent("ListHeaderRadarPortfolio"),s=e.resolveComponent("Loader"),r=e.resolveComponent("ListItemViewMaxRadarPortfolio"),d=e.resolveComponent("ListItemViewMinRadarPortfolio"),m=e.resolveComponent("ListActivesRadarPortfolioTable"),v=e.resolveComponent("RadarActivesListLoadMore");return e.openBlock(),e.createElementBlock("div",Go,[e.createElementVNode("div",Jo,[e.createVNode(a,{currentView:t.currentView,"onUpdate:currentView":o[0]||(o[0]=p=>t.currentView=p),"header-type":t.headerType},null,8,["currentView","header-type"]),!t.getRadarInit||t.getUpdateFilters?(e.openBlock(),e.createBlock(s,{key:0})):(e.openBlock(),e.createElementBlock(e.Fragment,{key:1},[t.getActivesList.length>0?(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[t.currentView==="max"?(e.openBlock(!0),e.createElementBlock(e.Fragment,{key:0},e.renderList(t.getActivesList,p=>(e.openBlock(),e.createBlock(r,{key:p.ID,active:p},null,8,["active"]))),128)):e.createCommentVNode("",!0),t.currentView==="min"?(e.openBlock(!0),e.createElementBlock(e.Fragment,{key:1},e.renderList(t.getActivesList,p=>(e.openBlock(),e.createBlock(d,{key:p.ID,active:p},null,8,["active"]))),128)):e.createCommentVNode("",!0),t.currentView==="min"?(e.openBlock(),e.createBlock(m,{key:2})):e.createCommentVNode("",!0),e.createVNode(v)],64)):(e.openBlock(),e.createElementBlock("h1",Qo,"\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E"))],64))])])}const Xo=u(Zo,[["render",Wo],["__scopeId","data-v-0e727964"]]),en=e.defineComponent({name:"PageRadarActivesList",components:{ListActivesRadarPortfolio:Xo},props:{headerType:{type:String,default:"radar"}}});function tn(t,o,n,c,i,l){const a=e.resolveComponent("ListActivesRadarPortfolio");return e.openBlock(),e.createBlock(a,{"header-type":t.headerType},null,8,["header-type"])}const _n=u(en,[["render",tn]]);export{_n as P};
//# sourceMappingURL=index.61fdeeee.js.map
