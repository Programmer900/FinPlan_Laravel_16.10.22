import{v as e,_ as a}from"./main.50abc935.js";const n=e.defineComponent({name:"PageRadarField",props:{title:{type:String,required:!0},subtitle:{type:String,default:""},link:{type:String,default:""},linkText:{type:String,default:""},isActive:Boolean},setup(t,{emit:i}){return{onToggleActive:()=>{i("update:isActive",!t.isActive)}}}});const r={class:"radarField"},s={class:"radarField__container"},d={class:"radarField__wrap"},c={class:"radarField__title"},_={key:0,class:"radarField__subtitle"},p=["href"];function u(t,i,o,g,v,m){return e.openBlock(),e.createElementBlock("div",r,[e.createElementVNode("div",s,[e.createElementVNode("div",d,[e.createElementVNode("div",c,e.toDisplayString(t.title),1),t.subtitle?(e.openBlock(),e.createElementBlock("div",_,e.toDisplayString(t.subtitle),1)):e.createCommentVNode("",!0),t.link?(e.openBlock(),e.createElementBlock("a",{key:1,class:"radarField__link",href:t.link},e.toDisplayString(t.linkText||t.link),9,p)):e.createCommentVNode("",!0)]),e.renderSlot(t.$slots,"default",{},void 0,!0)]),e.createElementVNode("span",{class:e.normalizeClass(["radarField__toggle",{"radarField__toggle--active":t.isActive}]),onClick:i[0]||(i[0]=(...l)=>t.onToggleActive&&t.onToggleActive(...l))},null,2)])}const f=a(n,[["render",u],["__scopeId","data-v-138ec8d1"]]);export{f as P};
//# sourceMappingURL=index.858bfd21.js.map