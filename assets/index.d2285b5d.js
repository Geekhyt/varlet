import{d as A,a as u,t as S,c as R}from"./components.8d69e83c.js";import{F as W,u as L}from"./provide.244c2612.js";import{L as M}from"./index.840580d4.js";import{R as T}from"./index.8f83d7e2.js";import{d as U,e as E,_ as H,W as P,l as D,aa as j,f as C,h as F,D as b,H as g,E as c,B as q,p as G,i as I,n as J}from"./vue-router.esm-bundler.e4f2b974.js";const K={modelValue:{default:!1},activeValue:{default:!0},inactiveValue:{default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},color:{type:String},loadingColor:{type:String},closeColor:{type:String},size:{type:[String,Number],default:20},rules:{type:Array},ripple:{type:Boolean,default:!0},onClick:{type:Function},onChange:{type:Function},"onUpdate:modelValue":{type:Function}};const{n:O,classes:Q}=R("switch"),X=U({name:"VarSwitch",components:{VarLoading:M,VarFormDetails:W},directives:{Ripple:T},props:K,setup(e){const{bindForm:p,form:a}=L(),{errorMessage:i,validateWithTrigger:k,validate:$,resetValidation:m}=A(),y=()=>$(e.rules,e.modelValue),f=()=>P(()=>k(["onChange"],"onChange",e.rules,e.modelValue)),V=E(()=>{const{size:n,modelValue:o,color:r,closeColor:d,loadingColor:v,activeValue:s}=e,l=S(n),t=l*2,h=l*1.2;return{handle:{width:`${n}px`,height:`${n}px`,backgroundColor:o===s?r||"":d||"",color:v&&v},ripple:{left:o===s?`${l/2}px`:`-${l/2}px`,color:o===s?r||"":d||"#999",width:`${l*2}px`,height:`${l*2}px`},track:{height:`${h*.6}px`,width:`${t-2}px`,borderRadius:`${t/3}px`,filter:o===s||(i==null?void 0:i.value)?"opacity(.6)":"brightness(.6)",backgroundColor:o===s?r||"":d||""},switch:{height:`${h}px`,width:`${t}px`}}}),N=n=>{const{onClick:o,onChange:r,disabled:d,loading:v,readonly:s,modelValue:l,activeValue:t,inactiveValue:h,"onUpdate:modelValue":z}=e;if(u(o,n),d||v||s||(a==null?void 0:a.disabled.value)||(a==null?void 0:a.readonly.value))return;const B=l===t?h:t;u(r,B),u(z,B),f()};return u(p,{reset:()=>{u(e["onUpdate:modelValue"],e.inactiveValue),m()},validate:y,resetValidation:m}),{n:O,classes:Q,switchActive:N,toNumber:S,styleComputed:V,errorMessage:i,formDisabled:a==null?void 0:a.disabled,formReadonly:a==null?void 0:a.readonly}}});function Y(e,p,a,i,k,$){const m=D("var-loading"),y=D("var-form-details"),f=j("ripple");return C(),F("div",{class:c(e.n())},[b("div",{class:c(e.classes(e.n("block"),[e.disabled||e.formDisabled,e.n("--disable")])),onClick:p[0]||(p[0]=(...V)=>e.switchActive&&e.switchActive(...V)),style:g(e.styleComputed.switch)},[b("div",{style:g(e.styleComputed.track),class:c(e.classes(e.n("track"),[e.modelValue===e.activeValue,e.n("track-active")],[e.errorMessage,e.n("track-error")]))},null,6),q((C(),F("div",{class:c(e.n("ripple")),style:g(e.styleComputed.ripple)},[b("div",{style:g(e.styleComputed.handle),class:c(e.classes(e.n("handle"),"var-elevation--2",[e.modelValue===e.activeValue,e.n("handle-active")],[e.errorMessage,e.n("handle-error")]))},[e.loading?(C(),G(m,{key:0,radius:e.toNumber(e.size)/2-2},null,8,["radius"])):I("v-if",!0)],6)],6)),[[f,{disabled:!e.ripple||e.disabled||e.loading||e.formDisabled}]])],6),J(y,{"error-message":e.errorMessage},null,8,["error-message"])],2)}var w=H(X,[["render",Y]]);w.install=function(e){e.component(w.name,w)};export{w as S};
