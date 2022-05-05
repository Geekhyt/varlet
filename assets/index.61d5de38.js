import{F as P,u as U}from"./provide.244c2612.js";import{j as J,l as L,d as z,a as t,c as E,h as Q,m as X}from"./components.8d69e83c.js";import{d as w,e as j,w as I,_ as W,l as B,f as T,h as F,D as M,G as C,E as u,n as A,W as K,a as N,aa as Z,B as x,H as ee,m as ae}from"./vue-router.esm-bundler.e4f2b974.js";import{I as oe}from"./index.ae2fa579.js";import{R as ne}from"./index.8f83d7e2.js";function re(e){return["horizontal","vertical"].includes(e)}const se={modelValue:{type:[String,Number,Boolean,Object,Array],default:void 0},direction:{type:String,default:"horizontal",validator:re},validateTrigger:{type:Array,default:()=>["onChange"]},rules:{type:Array},onChange:{type:Function},"onUpdate:modelValue":{type:Function}},Y=Symbol("RADIO_GROUP_BIND_RADIO_KEY"),_=Symbol("RADIO_GROUP_COUNT_RADIO_KEY");function le(){const{bindChildren:e,childProviders:o}=J(Y),{length:s}=L(_);return{length:s,radios:o,bindRadios:e}}const{n:ie,classes:te}=E("radio-group"),de=w({name:"VarRadioGroup",components:{VarFormDetails:P},props:se,setup(e){const{length:o,radios:s,bindRadios:m}=le(),{bindForm:l}=U(),{errorMessage:v,validateWithTrigger:a,validate:h,resetValidation:c}=z(),p=j(()=>v.value),D=d=>{K(()=>{const{validateTrigger:b,rules:O,modelValue:V}=e;a(b,d,O,V)})},g=()=>s.forEach(({sync:d})=>d(e.modelValue)),$=d=>{t(e["onUpdate:modelValue"],d),t(e.onChange,d),D("onChange")},f=()=>h(e.rules,e.modelValue),y=()=>{t(e["onUpdate:modelValue"],void 0),c()};I(()=>e.modelValue,g),I(()=>o.value,g);const k={onToggle:$,validate:f,reset:y,resetValidation:c,errorMessage:p};return t(l,k),m(k),{errorMessage:v,n:ie,classes:te,reset:y,validate:f,resetValidation:c}}});function ce(e,o,s,m,l,v){const a=B("var-form-details");return T(),F("div",{class:u(e.n("wrap"))},[M("div",{class:u(e.classes(e.n(),e.n(`--${e.direction}`)))},[C(e.$slots,"default")],2),A(a,{"error-message":e.errorMessage},null,8,["error-message"])],2)}var S=W(de,[["render",ce]]);S.install=function(e){e.component(S.name,S)};const ue={modelValue:{type:[String,Number,Boolean,Object,Array],default:!1},checkedValue:{type:[String,Number,Boolean,Object,Array],default:!0},uncheckedValue:{type:[String,Number,Boolean,Object,Array],default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},checkedColor:{type:String},uncheckedColor:{type:String},iconSize:{type:[String,Number]},ripple:{type:Boolean,default:!0},validateTrigger:{type:Array,default:()=>["onChange"]},rules:{type:Array},onClick:{type:Function},onChange:{type:Function},"onUpdate:modelValue":{type:Function}};function me(){const{bindParent:e,parentProvider:o}=Q(Y),{index:s}=X(_);return{index:s,radioGroup:o,bindRadioGroup:e}}const{n:ve,classes:ge}=E("radio"),he=w({name:"VarRadio",directives:{Ripple:ne},components:{VarIcon:oe,VarFormDetails:P},inheritAttrs:!1,props:ue,setup(e){const o=N(!1),s=j(()=>o.value===e.checkedValue),m=N(!1),{radioGroup:l,bindRadioGroup:v}=me(),{form:a,bindForm:h}=U(),{errorMessage:c,validateWithTrigger:p,validate:D,resetValidation:g}=z(),$=n=>{K(()=>{const{validateTrigger:r,rules:i,modelValue:R}=e;p(r,n,i,R)})},f=n=>{const{checkedValue:r,onChange:i}=e;l&&o.value===r||(o.value=n,t(e["onUpdate:modelValue"],o.value),t(i,o.value),l==null||l.onToggle(r),$("onChange"))},y=n=>{const{disabled:r,readonly:i,uncheckedValue:R,checkedValue:H,onClick:q}=e;(a==null?void 0:a.disabled.value)||r||(t(q,n),!((a==null?void 0:a.readonly.value)||i)&&(m.value=!0,f(s.value?R:H)))},k=n=>{const{checkedValue:r,uncheckedValue:i}=e;o.value=n===r?r:i},d=()=>{t(e["onUpdate:modelValue"],e.uncheckedValue),g()},b=()=>D(e.rules,e.modelValue),O=n=>{const{uncheckedValue:r,checkedValue:i}=e;![r,i].includes(n)&&(n=s.value?r:i),f(n)};I(()=>e.modelValue,n=>{o.value=n},{immediate:!0});const V={sync:k,validate:b,resetValidation:g,reset:d};return t(v,V),t(h,V),{withAnimation:m,checked:s,errorMessage:c,radioGroupErrorMessage:l==null?void 0:l.errorMessage,formDisabled:a==null?void 0:a.disabled,formReadonly:a==null?void 0:a.readonly,n:ve,classes:ge,handleClick:y,toggle:O,reset:d,validate:b,resetValidation:g}}});function pe(e,o,s,m,l,v){const a=B("var-icon"),h=B("var-form-details"),c=Z("ripple");return T(),F("div",{class:u(e.n("wrap"))},[M("div",ae({class:e.n(),onClick:o[0]||(o[0]=(...p)=>e.handleClick&&e.handleClick(...p))},e.$attrs),[x((T(),F("div",{class:u(e.classes(e.n("action"),[e.checked,e.n("--checked"),e.n("--unchecked")],[e.errorMessage||e.radioGroupErrorMessage,e.n("--error")],[e.formDisabled||e.disabled,e.n("--disabled")])),style:ee({color:e.checked?e.checkedColor:e.uncheckedColor})},[e.checked?C(e.$slots,"checked-icon",{key:0},()=>[A(a,{class:u(e.classes(e.n("icon"),[e.withAnimation,e.n("--with-animation")])),"var-radio-cover":"",name:"radio-marked",size:e.iconSize},null,8,["class","size"])]):C(e.$slots,"unchecked-icon",{key:1},()=>[A(a,{class:u(e.classes(e.n("icon"),[e.withAnimation,e.n("--with-animation")])),"var-radio-cover":"",name:"radio-blank",size:e.iconSize},null,8,["class","size"])])],6)),[[c,{disabled:e.formReadonly||e.readonly||e.formDisabled||e.disabled||!e.ripple}]]),M("div",{class:u(e.classes(e.n("text"),[e.errorMessage||e.radioGroupErrorMessage,e.n("--error")],[e.formDisabled||e.disabled,e.n("--disabled")]))},[C(e.$slots,"default")],2)],16),A(h,{"error-message":e.errorMessage},null,8,["error-message"])],2)}var G=W(he,[["render",pe]]);G.install=function(e){e.component(G.name,G)};export{G as R,S as a};
