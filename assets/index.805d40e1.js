import{F as E,u as W}from"./provide.0a49c908.js";import{h as w,e as n,c as z}from"./components.cddaf618.js";import{u as B}from"./index.a3683201.js";import{d as S,b as l,w as b,aJ as y,n as q,_ as D,p as J,f as O,h as P,M as j,O as H,N as _,q as I}from"./vue-router.esm-bundler.b2f96f29.js";function K(e){return["horizontal","vertical"].includes(e)}const L={modelValue:{type:Array,default:()=>[]},max:{type:[String,Number]},direction:{type:String,default:"horizontal",validator:K},validateTrigger:{type:Array,default:["onChange"]},rules:{type:Array},onChange:{type:Function},"onUpdate:modelValue":{type:Function}},{n:Q,classes:R}=z("checkbox-group"),X=S({name:"VarCheckboxGroup",components:{VarFormDetails:E},props:L,setup(e){const d=l(()=>e.max),u=l(()=>e.modelValue.length),{length:m,checkboxes:s,bindCheckboxes:h}=B(),{bindForm:r}=W(),{errorMessage:f,validateWithTrigger:x,validate:A,resetValidation:c}=w(),F=l(()=>f.value),M=a=>{q(()=>{const{validateTrigger:o,rules:t,modelValue:T}=e;x(o,a,t,T)})},g=a=>{n(e["onUpdate:modelValue"],a),n(e.onChange,a),M("onChange")},U=a=>{const{modelValue:o}=e;o.includes(a)||g([...o,a])},$=a=>{const{modelValue:o}=e;!o.includes(a)||g(o.filter(t=>t!==a))},v=()=>s.forEach(({sync:a})=>a(e.modelValue)),V=()=>{s.forEach(a=>a.resetWithAnimation())},G=()=>{const a=s.map(({checkedValue:t})=>t.value),o=y(a);return V(),n(e["onUpdate:modelValue"],o),o},N=()=>{const a=s.filter(({checked:t})=>!t.value).map(({checkedValue:t})=>t.value),o=y(a);return V(),n(e["onUpdate:modelValue"],o),o},k=()=>{n(e["onUpdate:modelValue"],[]),c()},p=()=>A(e.rules,e.modelValue);b(()=>e.modelValue,v,{deep:!0}),b(()=>m.value,v);const C={max:d,checkedCount:u,onChecked:U,onUnchecked:$,validate:p,resetValidation:c,reset:k,errorMessage:F};return h(C),n(r,C),{errorMessage:f,n:Q,classes:R,checkAll:G,inverseAll:N,reset:k,validate:p,resetValidation:c}}});function Y(e,d,u,m,s,h){const r=J("var-form-details");return O(),P("div",{class:_(e.n("wrap"))},[j("div",{class:_(e.classes(e.n(),e.n(`--${e.direction}`)))},[H(e.$slots,"default")],2),I(r,{"error-message":e.errorMessage},null,8,["error-message"])],2)}const i=D(X,[["render",Y]]);i.install=function(e){e.component(i.name,i)};export{i as C};
