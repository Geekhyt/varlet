import{B as y}from"./index.8fd82cb1.js";import{I as h}from"./index.5b68f2a3.js";import{d as S,a as u,o as _,e as B,aE as T,W as C,aF as N,_ as E,p as b,f as p,i as V,M as w,O as $,m as j,aj as F,T as I,q as c,S as v,h as g,F as L,ak as M,an as k,P as O,Q as P}from"./vue-router.esm-bundler.b2f96f29.js";import{e as U}from"./shared.2f160c30.js";import{g as z,a as q,b as A,c as D,e as H,t as Q}from"./elements.33cd14f4.js";import{c as W,e as G}from"./components.cddaf618.js";import{C as J}from"./index.23f9c132.js";import{d as K}from"./index.8b4f1b33.js";import{b as R}from"./utils.cb2600d0.js";import"./index.7205fcb6.js";import"./index.ee1e71c4.js";/* empty css               */import"./index.229c6558.js";const X={visibilityHeight:{type:[Number,String],default:200},duration:{type:Number,default:300},right:{type:[Number,String]},bottom:{type:[Number,String]},target:{type:[String,Object]},onClick:{type:Function}},{n:Y,classes:Z}=W("back-top"),x=S({name:"VarBackTop",components:{VarButton:y,VarIcon:h},inheritAttrs:!1,props:X,setup(t){const o=u(!1),a=u(null),n=u(!0);let e;const d=r=>{G(t.onClick,r);const i=A(e);D(e,{left:i,duration:t.duration,animation:U})},s=T(()=>{o.value=H(e)>=Q(t.visibilityHeight)},200),m=()=>{const{target:r}=t;if(C(r)){const i=document.querySelector(t.target);if(!i)throw Error("[Varlet] BackTop: target element cannot found");return i}if(N(r))return r;throw Error('[Varlet] BackTop: type of prop "target" should be a selector or an element object')};return _(()=>{e=t.target?m():z(a.value),e.addEventListener("scroll",s),n.value=!1}),B(()=>{e.removeEventListener("scroll",s)}),{disabled:n,show:o,backTopEl:a,toSizeUnit:q,n:Y,classes:Z,click:d}}});function tt(t,o,a,n,e,d){const f=b("var-icon"),s=b("var-button");return p(),V(I,{to:"body",disabled:t.disabled},[w("div",j({class:t.classes(t.n(),[t.show,t.n("--active")]),ref:"backTopEl",style:{right:t.toSizeUnit(t.right),bottom:t.toSizeUnit(t.bottom)}},t.$attrs,{onClick:o[0]||(o[0]=F((...m)=>t.click&&t.click(...m),["stop"]))}),[$(t.$slots,"default",{},()=>[c(s,{type:"primary",round:"","var-back-top-cover":""},{default:v(()=>[c(f,{name:"chevron-up"})]),_:1})])],16)],8,["disabled"])}const l=E(x,[["render",tt]]);l.install=function(t){t.component(l.name,l)};const ft={setup(t){const o=[...Array(100).keys()];return R(K),(a,n)=>(p(),g("div",null,[(p(),g(L,null,M(o,e=>c(k(J),{key:e},{default:v(()=>[O("Scroll to bottom "+P(e),1)]),_:2},1024)),64)),c(k(l),{duration:300})]))}};export{ft as default};
