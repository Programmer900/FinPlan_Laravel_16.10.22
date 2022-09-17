import{v as u}from"./main.50abc935.js";const m=(n,e,o=!1)=>{var r;const t=((r=u.getCurrentInstance())==null?void 0:r.proxy)||"";if(!t)throw new Error("vm is null");return u.computed({get(){return n[e]},set(s){o?t.$emit(`update:${e}`,Number(s)):t.$emit(`update:${e}`,s)}})};export{m as u};
//# sourceMappingURL=useVModel.13ad703e.js.map
