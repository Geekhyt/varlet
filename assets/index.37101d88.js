import{d as S,w as g,q as a,T as O,C as b,D as x,E as F,G as d,m as k}from"./vue-router.esm-bundler.b2f96f29.js";import{u as P}from"./lock.972ac93b.js";import{u as I}from"./zIndex.510c1ad8.js";import{f as j,g as z,c as B}from"./components.cddaf618.js";/* empty css               */function T(e){return["top","bottom","right","left","center"].includes(e)}const V={show:{type:Boolean,default:!1},position:{type:String,default:"center",validator:T},transition:{type:String},overlay:{type:Boolean,default:!0},overlayClass:{type:String},overlayStyle:{type:Object},lockScroll:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0},teleport:{type:String},onOpen:{type:Function},onOpened:{type:Function},onClose:{type:Function},onClosed:{type:Function},onClickOverlay:{type:Function},onRouteChange:{type:Function},"onUpdate:show":{type:Function}};function A(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!b(e)}const{n:l,classes:s}=B("popup"),c=S({name:"VarPopup",inheritAttrs:!1,props:V,setup(e,{slots:r,attrs:y}){const{zIndex:i}=I(()=>e.show,3),{disabled:f}=j(),v=()=>{var o;const{closeOnClickOverlay:t,onClickOverlay:n}=e;n==null||n(),t&&((o=e["onUpdate:show"])==null||o.call(e,!1))};P(()=>e.show,()=>e.lockScroll),g(()=>e.show,t=>{const{onOpen:n,onClose:o}=e;t?n==null||n():o==null||o()}),z(()=>{var t;return(t=e.onRouteChange)==null?void 0:t.call(e)});const p=()=>{const{overlayClass:t="",overlayStyle:n}=e;return a("div",{class:s(l("overlay"),t),style:{zIndex:i.value-1,...n},onClick:v},null)},m=()=>{var t;return a("div",k({class:s(l("content"),"var-elevation--3",l(`--${e.position}`)),style:{zIndex:i.value}},y),[(t=r.default)==null?void 0:t.call(r)])},u=()=>{const{onOpened:t,onClosed:n,show:o,overlay:h,transition:C,position:w}=e;return a(d,{name:"var-fade",onAfterEnter:t,onAfterLeave:n},{default:()=>[x(a("div",{class:s("var--box",l()),style:{zIndex:i.value-2}},[h&&p(),a(d,{name:C||`var-pop-${w}`},{default:()=>[o&&m()]})]),[[F,o]])]})};return()=>{const{teleport:t}=e;if(t){let n;return a(O,{to:t,disabled:f.value},A(n=u())?n:{default:()=>[n]})}return u()}}});c.install=function(e){e.component(c.name,c)};export{c as P,V as p};
