import{R as g}from"./index.7205fcb6.js";import{p as P,P as $}from"./index.37101d88.js";import{I as b}from"./index.5b68f2a3.js";import{p as R,c as B,e as u,m as U}from"./components.cddaf618.js";import{d as V}from"./shared.2f160c30.js";import{p as z}from"./index.6238f624.js";import{d as A,a as I,w as N,_ as D,p as y,ai as F,f as i,i as h,S as T,M as v,O as C,m as f,N as c,Q as k,h as w,ak as j,D as E,R as L,j as M,F as Q,aA as q,r as G,n as H}from"./vue-router.esm-bundler.b2f96f29.js";const J={show:{type:Boolean,default:!1},actions:{type:Array,default:()=>[]},title:{type:String},closeOnClickAction:{type:Boolean,default:!0},onSelect:{type:Function},"onUpdate:show":{type:Function},...R(P,["overlay","overlayClass","overlayStyle","lockScroll","closeOnClickOverlay","teleport","onOpen","onClose","onOpened","onClosed","onClickOverlay","onRouteChange"])},{n:K,classes:W}=B("action-sheet"),X=A({name:"VarActionSheet",directives:{Ripple:g},components:{VarPopup:$,VarIcon:b},inheritAttrs:!1,props:J,setup(e){const t=I(!1),o=n=>{if(n.disabled)return;const{closeOnClickAction:p,onSelect:m}=e;u(m,n),p&&u(e["onUpdate:show"],!1)},r=n=>u(e["onUpdate:show"],n);return N(()=>e.show,n=>{t.value=n},{immediate:!0}),{n:K,classes:W,handlePopupUpdateShow:r,popupShow:t,pack:z,dt:V,handleSelect:o}}});const Y=["onClick"];function Z(e,t,o,r,n,p){const m=y("var-icon"),S=y("var-popup"),O=F("ripple");return i(),h(S,f({class:e.n("popup-radius"),position:"bottom",overlay:e.overlay,"overlay-class":e.overlayClass,"overlay-style":e.overlayStyle,"lock-scroll":e.lockScroll,"close-on-click-overlay":e.closeOnClickOverlay,teleport:e.teleport,show:e.popupShow},{"onUpdate:show":e.handlePopupUpdateShow},{onOpen:e.onOpen,onClose:e.onClose,onClosed:e.onClosed,onOpened:e.onOpened,onRouteChange:e.onRouteChange}),{default:T(()=>[v("div",f({class:e.classes(e.n(),"var--box")},e.$attrs),[C(e.$slots,"title",{},()=>[v("div",{class:c(e.n("title"))},k(e.dt(e.title,e.pack.actionSheetTitle)),3)]),C(e.$slots,"actions",{},()=>[(i(!0),w(Q,null,j(e.actions,s=>E((i(),w("div",{class:c(e.classes(e.n("action-item"),s.className,[s.disabled,e.n("--disabled")])),key:s.name,style:L({color:s.color}),onClick:_=>e.handleSelect(s)},[s.icon?(i(),h(m,{key:0,class:c(e.n("action-icon")),"var-action-sheet-cover":"",name:s.icon,size:s.iconSize},null,8,["class","name","size"])):M("v-if",!0),v("div",{class:c(e.n("action-name"))},k(s.name),3)],14,Y)),[[O,{disabled:s.disabled}]])),128))])],16)]),_:3},16,["class","overlay","overlay-class","overlay-style","lock-scroll","close-on-click-overlay","teleport","show","onOpen","onClose","onClosed","onOpened","onRouteChange"])}const a=D(X,[["render",Z]]);let l;function d(e){return q()?new Promise(t=>{d.close();const o=G(e);o.teleport="body",l=o;const{unmountInstance:r}=U(a,o,{onSelect:n=>{var p;(p=o.onSelect)==null||p.call(o,n),t(n)},onClose:()=>{var n;(n=o.onClose)==null||n.call(o),t("close")},onClosed:()=>{var n;(n=o.onClosed)==null||n.call(o),r(),l===o&&(l=null)},onRouteChange:()=>{r(),l===o&&(l=null)},"onUpdate:show":n=>{o.show=n}});o.show=!0}):Promise.resolve()}d.Component=a;a.install=function(e){e.component(a.name,a)};d.close=()=>{if(l!=null){const e=l;l=null,H().then(()=>{e.show=!1})}};d.install=function(e){e.component(a.name,a)};export{d as A};
