import{d as z,a as o,e as L,w as c,o as E,y as F,n as i,O as M,T as N,B as U,C as $,R as j,W as A}from"./vue-router.esm-bundler.e4f2b974.js";import{g,a as I,t as h}from"./elements.9e22c80f.js";import{u as V}from"./zIndex.f2cb7fab.js";import{u as B,e as X,a,c as Y}from"./components.8d69e83c.js";/* empty css               */function _(e){return["top","bottom"].includes(e)}const D={show:{type:Boolean,default:!1},alignment:{type:String,default:"top",validator:_},offsetX:{type:[Number,String],default:0},offsetY:{type:[Number,String],default:0},teleport:{type:String,default:"body"},onOpen:{type:Function},onOpened:{type:Function},onClose:{type:Function},onClosed:{type:Function},"onUpdate:show":{type:Function}};function H(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!j(e)}const{n:r,classes:P}=Y("menu");var d=z({name:"VarMenu",props:D,setup(e,{slots:f}){const l=o(null),m=o(null),s=o(),v=o(0),p=o(0),{zIndex:C}=V(()=>e.show,1),{disabled:S}=B();let u=!1;const b=t=>t==="top"?g(l.value):g(l.value)-m.value.offsetHeight,x=()=>{u=!0},y=()=>{if(u){u=!1;return}!e.show||a(e["onUpdate:show"],!1)},n=()=>{v.value=b(e.alignment),p.value=I(l.value)},T=L(()=>({top:`calc(${v.value}px + ${h(e.offsetY)})`,left:`calc(${p.value}px + ${h(e.offsetX)})`,zIndex:C.value})),w=()=>i(N,{name:r(),onAfterEnter:e.onOpened,onAfterLeave:e.onClosed},{default:()=>[U(i("div",{class:P(r("menu"),"var-elevation--3"),ref:m,style:T.value,onClick:t=>{t.stopPropagation()}},[a(f.menu)]),[[$,e.show]])]});return c(()=>e.alignment,n),c(()=>e.show,async t=>{const{onOpen:k,onClose:O}=e;t&&(await A(),n()),t?a(k):a(O)}),c(()=>e.teleport,t=>{s.value=t}),E(()=>{s.value=e.teleport,n(),document.addEventListener("click",y),window.addEventListener("resize",n)}),F(()=>{document.removeEventListener("click",y),window.removeEventListener("resize",n)}),X({resize:n}),()=>{let t;return i("div",{class:r(),ref:l,onClick:x},[a(f.default),s.value?i(M,{to:s.value,disabled:S.value},H(t=w())?t:{default:()=>[t]}):w()])}}});d.install=function(e){e.component(d.name,d)};export{d as M};
