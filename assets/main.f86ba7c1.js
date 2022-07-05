var Ce=Object.defineProperty;var pe=Object.getOwnPropertySymbols;var be=Object.prototype.hasOwnProperty,ke=Object.prototype.propertyIsEnumerable;var le=(e,o,n)=>o in e?Ce(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,b=(e,o)=>{for(var n in o||(o={}))be.call(o,n)&&le(e,n,o[n]);if(pe)for(var n of pe(o))ke.call(o,n)&&le(e,n,o[n]);return e};import{r as H,a as m,d as U,_ as B,g as h,c as E,w as N,b as S,u as Se,o as ee,e as ze,n as fe,f as l,h as d,i as D,j as oe,v as ne,m as V,k as v,T as ge,l as P,F as Te,p as Pe,q as $e,s as y,t as I,x as t,y as R,z as ce,A as ue,B as Ne,C as we,D as Ue,E as Be,G as Me,L as Fe,I as Z,H as Q,J as C,K as T,M as X,N as x,O as je,P as z,Q as He,R as Ie,S as Oe,U as qe,V as We,W as k,X as de,Y as me,Z as Ge,$ as Ae,a0 as Ke,a1 as Ye,a2 as Je,a3 as Ze,a4 as Qe,a5 as Xe}from"./elevation.4b142704.js";import{C as xe}from"./clipboard.4312f935.js";const et=H({}),ve=m(),tt=m();const ot=U({name:"LogoAnimation",setup(){const e=h(E,"logo"),o=m(),n=m(!1);N(tt,async p=>{p&&(o.value=p)});const i=S(()=>{var p,c,A,u;return{width:`${(p=o.value)==null?void 0:p.width}px`,height:`${(c=o.value)==null?void 0:c.height}px`,top:`${(A=o.value)==null?void 0:A.top}px`,left:`${(u=o.value)==null?void 0:u.left}px`}});Se().beforeEach(async(p,c)=>{!n.value&&c.path!=="/"&&(n.value=!0)}),ee(()=>{window.addEventListener("resize",_,!1)}),ze(()=>{a&&clearTimeout(a),window.removeEventListener("resize",_)});const s=()=>{n.value=!1};let a;const _=async()=>{var c;n.value&&(n.value=!1,await fe()),clearTimeout(a);const p=(c=ve.value)==null?void 0:c.getBoundingClientRect();p&&(a=window.setTimeout(()=>{o.value=p},200))};return{logo:e,animationBoxData:et,styles:i,animationEl:ve,floatingState:n,land:s}}}),nt=["src"],it=["src"];function rt(e,o,n,i,r,s){return l(),d(Te,null,[(l(),D(ge,{to:e.animationEl||"body"},[e.logo&&e.animationEl?oe((l(),d("img",V({key:0},e.animationBoxData.attrs,{style:e.styles,src:e.logo,alt:"logo",class:["varlet-cli-logo-animation",{"varlet-cli-logo-position":!e.animationEl}]}),null,16,nt)),[[ne,!e.floatingState]]):v("v-if",!0)],8,["to"])),oe(P("div",null,[e.logo&&e.animationEl?(l(),d("img",V({key:0,onTransitionend:o[0]||(o[0]=(...a)=>e.land&&e.land(...a))},e.animationBoxData.attrs,{style:e.styles,src:e.logo,alt:"logo",class:"varlet-cli-logo-animation varlet-cli-logo-position varlet-cli-logo-transition"}),null,16,it)):v("v-if",!0)],512),[[ne,e.floatingState]])],64)}var at=B(ot,[["render",rt]]);const _t=U({components:{LogoAnimation:at},setup(){const e=m(h(E,"useMobile")),o=h(E,"defaultLanguage");ee(()=>{const{language:i,menuName:r}=Pe();if($e()&&e.value){window.location.href=`./mobile.html#/${r}?language=${i||o}&platform=mobile`;return}})}});function st(e,o,n,i,r,s){const a=y("router-view"),_=y("logo-animation");return l(),d(Te,null,[I(a),I(_)],64)}var pt=B(_t,[["render",st]]),Le=[,{path:"/layout",component:()=>t(()=>import("./Layout.b71a9131.js"),["assets/Layout.b71a9131.js","assets/Layout.f8493308.css","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css","assets/clipboard.4312f935.js"]),children:[{path:"/en-US/action-sheet",component:()=>t(()=>import("./en-US.9fa79979.js"),["assets/en-US.9fa79979.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/action-sheet",component:()=>t(()=>import("./zh-CN.147c5fff.js"),["assets/zh-CN.147c5fff.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/app-bar",component:()=>t(()=>import("./en-US.f788075a.js"),["assets/en-US.f788075a.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/app-bar",component:()=>t(()=>import("./zh-CN.e35b3bfc.js"),["assets/zh-CN.e35b3bfc.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/back-top",component:()=>t(()=>import("./en-US.8269fc82.js"),["assets/en-US.8269fc82.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/back-top",component:()=>t(()=>import("./zh-CN.3470139c.js"),["assets/zh-CN.3470139c.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/badge",component:()=>t(()=>import("./en-US.04f6b214.js"),["assets/en-US.04f6b214.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/badge",component:()=>t(()=>import("./zh-CN.28323923.js"),["assets/zh-CN.28323923.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/bottom-navigation-item",component:()=>t(()=>import("./zh-CN.f1cdb333.js"),["assets/zh-CN.f1cdb333.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/bottom-navigation",component:()=>t(()=>import("./en-US.cb0307f9.js"),["assets/en-US.cb0307f9.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/bottom-navigation",component:()=>t(()=>import("./zh-CN.50535a21.js"),["assets/zh-CN.50535a21.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/button",component:()=>t(()=>import("./en-US.1951855c.js"),["assets/en-US.1951855c.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/button",component:()=>t(()=>import("./zh-CN.eb3c0a23.js"),["assets/zh-CN.eb3c0a23.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/card",component:()=>t(()=>import("./en-US.601ef0b0.js"),["assets/en-US.601ef0b0.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/card",component:()=>t(()=>import("./zh-CN.6eac6a5f.js"),["assets/zh-CN.6eac6a5f.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/cell",component:()=>t(()=>import("./en-US.61e96f6c.js"),["assets/en-US.61e96f6c.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/cell",component:()=>t(()=>import("./zh-CN.6d389d04.js"),["assets/zh-CN.6d389d04.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/checkbox-group",component:()=>t(()=>import("./en-US.06f98f09.js"),["assets/en-US.06f98f09.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/checkbox-group",component:()=>t(()=>import("./zh-CN.7dbbb4fe.js"),["assets/zh-CN.7dbbb4fe.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/checkbox",component:()=>t(()=>import("./zh-CN.01c1411d.js"),["assets/zh-CN.01c1411d.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/chip",component:()=>t(()=>import("./en-US.37d59e2f.js"),["assets/en-US.37d59e2f.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/chip",component:()=>t(()=>import("./zh-CN.964dff21.js"),["assets/zh-CN.964dff21.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/col",component:()=>t(()=>import("./zh-CN.a81b7a7f.js"),["assets/zh-CN.a81b7a7f.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/collapse-item",component:()=>t(()=>import("./zh-CN.ad9be866.js"),["assets/zh-CN.ad9be866.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/collapse",component:()=>t(()=>import("./en-US.59c96033.js"),["assets/en-US.59c96033.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/collapse",component:()=>t(()=>import("./zh-CN.010dac06.js"),["assets/zh-CN.010dac06.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/countdown",component:()=>t(()=>import("./en-US.b676830c.js"),["assets/en-US.b676830c.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/countdown",component:()=>t(()=>import("./zh-CN.89e102e4.js"),["assets/zh-CN.89e102e4.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/counter",component:()=>t(()=>import("./en-US.0e7eefdb.js"),["assets/en-US.0e7eefdb.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/counter",component:()=>t(()=>import("./zh-CN.713a9ea2.js"),["assets/zh-CN.713a9ea2.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/date-picker",component:()=>t(()=>import("./en-US.4063f12a.js"),["assets/en-US.4063f12a.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/date-picker",component:()=>t(()=>import("./zh-CN.ddf69ff6.js"),["assets/zh-CN.ddf69ff6.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/dialog",component:()=>t(()=>import("./en-US.eec4ae80.js"),["assets/en-US.eec4ae80.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/dialog",component:()=>t(()=>import("./zh-CN.79dad5a6.js"),["assets/zh-CN.79dad5a6.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/divider",component:()=>t(()=>import("./en-US.137bd6f1.js"),["assets/en-US.137bd6f1.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/divider",component:()=>t(()=>import("./zh-CN.fa366f53.js"),["assets/zh-CN.fa366f53.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/form-details",component:()=>t(()=>import("./en-US.7a799130.js"),["assets/en-US.7a799130.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/form-details",component:()=>t(()=>import("./zh-CN.a9c7adf1.js"),["assets/zh-CN.a9c7adf1.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/form",component:()=>t(()=>import("./en-US.0b271e46.js"),["assets/en-US.0b271e46.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/form",component:()=>t(()=>import("./zh-CN.199f8c87.js"),["assets/zh-CN.199f8c87.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/icon",component:()=>t(()=>import("./en-US.844c95f5.js"),["assets/en-US.844c95f5.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/icon",component:()=>t(()=>import("./zh-CN.b09b6a45.js"),["assets/zh-CN.b09b6a45.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/image-preview",component:()=>t(()=>import("./en-US.3431e472.js"),["assets/en-US.3431e472.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/image-preview",component:()=>t(()=>import("./zh-CN.6e5ed3f0.js"),["assets/zh-CN.6e5ed3f0.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/image",component:()=>t(()=>import("./en-US.8b7a3aa0.js"),["assets/en-US.8b7a3aa0.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/image",component:()=>t(()=>import("./zh-CN.000f715d.js"),["assets/zh-CN.000f715d.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/index-anchor",component:()=>t(()=>import("./zh-CN.e9425fca.js"),["assets/zh-CN.e9425fca.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/index-bar",component:()=>t(()=>import("./en-US.6686852d.js"),["assets/en-US.6686852d.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/index-bar",component:()=>t(()=>import("./zh-CN.c5405928.js"),["assets/zh-CN.c5405928.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/input",component:()=>t(()=>import("./en-US.0a8de942.js"),["assets/en-US.0a8de942.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/input",component:()=>t(()=>import("./zh-CN.c88c0add.js"),["assets/zh-CN.c88c0add.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/lazy",component:()=>t(()=>import("./en-US.31cb1099.js"),["assets/en-US.31cb1099.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/lazy",component:()=>t(()=>import("./zh-CN.be44bd41.js"),["assets/zh-CN.be44bd41.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/list",component:()=>t(()=>import("./en-US.31fd558b.js"),["assets/en-US.31fd558b.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/list",component:()=>t(()=>import("./zh-CN.89886149.js"),["assets/zh-CN.89886149.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/loading",component:()=>t(()=>import("./en-US.c7d647d0.js"),["assets/en-US.c7d647d0.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/loading",component:()=>t(()=>import("./zh-CN.54185c9e.js"),["assets/zh-CN.54185c9e.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/locale",component:()=>t(()=>import("./en-US.00fcbffd.js"),["assets/en-US.00fcbffd.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/locale",component:()=>t(()=>import("./zh-CN.30dad639.js"),["assets/zh-CN.30dad639.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/menu",component:()=>t(()=>import("./en-US.e7145a60.js"),["assets/en-US.e7145a60.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/menu",component:()=>t(()=>import("./zh-CN.80951077.js"),["assets/zh-CN.80951077.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/option",component:()=>t(()=>import("./zh-CN.0f481223.js"),["assets/zh-CN.0f481223.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/pagination",component:()=>t(()=>import("./en-US.6918c25a.js"),["assets/en-US.6918c25a.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/pagination",component:()=>t(()=>import("./zh-CN.68891e39.js"),["assets/zh-CN.68891e39.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/picker",component:()=>t(()=>import("./en-US.00104403.js"),["assets/en-US.00104403.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/picker",component:()=>t(()=>import("./zh-CN.e8c044fc.js"),["assets/zh-CN.e8c044fc.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/popup",component:()=>t(()=>import("./en-US.066aecfa.js"),["assets/en-US.066aecfa.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/popup",component:()=>t(()=>import("./zh-CN.2f250890.js"),["assets/zh-CN.2f250890.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/progress",component:()=>t(()=>import("./en-US.04be4ff1.js"),["assets/en-US.04be4ff1.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/progress",component:()=>t(()=>import("./zh-CN.efe53971.js"),["assets/zh-CN.efe53971.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/pull-refresh",component:()=>t(()=>import("./en-US.cc4f2edb.js"),["assets/en-US.cc4f2edb.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/pull-refresh",component:()=>t(()=>import("./zh-CN.0b3a93e8.js"),["assets/zh-CN.0b3a93e8.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/radio-group",component:()=>t(()=>import("./en-US.7c370cbb.js"),["assets/en-US.7c370cbb.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/radio-group",component:()=>t(()=>import("./zh-CN.c47a94c5.js"),["assets/zh-CN.c47a94c5.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/radio",component:()=>t(()=>import("./zh-CN.457d8b3d.js"),["assets/zh-CN.457d8b3d.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/rate",component:()=>t(()=>import("./en-US.81e43cc4.js"),["assets/en-US.81e43cc4.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/rate",component:()=>t(()=>import("./zh-CN.a19f61a8.js"),["assets/zh-CN.a19f61a8.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/ripple",component:()=>t(()=>import("./en-US.721b58b4.js"),["assets/en-US.721b58b4.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/ripple",component:()=>t(()=>import("./zh-CN.e1fe1160.js"),["assets/zh-CN.e1fe1160.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/row",component:()=>t(()=>import("./en-US.954a75f2.js"),["assets/en-US.954a75f2.js","assets/ResponsiveObject.bd554dc9.js","assets/ResponsiveObject.784f6134.css","assets/index.6f7c7145.js","assets/index.df546aa1.css","assets/components.b93432fa.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css","assets/elements.0a57d846.js","assets/index.ce16a04f.js","assets/index.76dece8a.css"])},{path:"/zh-CN/row",component:()=>t(()=>import("./zh-CN.08906c4b.js"),["assets/zh-CN.08906c4b.js","assets/ResponsiveObject.bd554dc9.js","assets/ResponsiveObject.784f6134.css","assets/index.6f7c7145.js","assets/index.df546aa1.css","assets/components.b93432fa.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css","assets/elements.0a57d846.js","assets/index.ce16a04f.js","assets/index.76dece8a.css"])},{path:"/en-US/select",component:()=>t(()=>import("./en-US.45e71fb1.js"),["assets/en-US.45e71fb1.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/select",component:()=>t(()=>import("./zh-CN.629f53bb.js"),["assets/zh-CN.629f53bb.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/skeleton",component:()=>t(()=>import("./en-US.e2f65c08.js"),["assets/en-US.e2f65c08.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/skeleton",component:()=>t(()=>import("./zh-CN.3b187a95.js"),["assets/zh-CN.3b187a95.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/slider",component:()=>t(()=>import("./en-US.37fd4ebc.js"),["assets/en-US.37fd4ebc.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/slider",component:()=>t(()=>import("./zh-CN.aba5a0c8.js"),["assets/zh-CN.aba5a0c8.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/snackbar",component:()=>t(()=>import("./en-US.3ad90424.js"),["assets/en-US.3ad90424.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/snackbar",component:()=>t(()=>import("./zh-CN.82c701b6.js"),["assets/zh-CN.82c701b6.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/space",component:()=>t(()=>import("./en-US.592dec12.js"),["assets/en-US.592dec12.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/space",component:()=>t(()=>import("./zh-CN.37f09a74.js"),["assets/zh-CN.37f09a74.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/step",component:()=>t(()=>import("./zh-CN.143dc6ac.js"),["assets/zh-CN.143dc6ac.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/steps",component:()=>t(()=>import("./en-US.8c56c21d.js"),["assets/en-US.8c56c21d.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/steps",component:()=>t(()=>import("./zh-CN.1f226b8f.js"),["assets/zh-CN.1f226b8f.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/sticky",component:()=>t(()=>import("./en-US.711b605d.js"),["assets/en-US.711b605d.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/sticky",component:()=>t(()=>import("./zh-CN.a4e06114.js"),["assets/zh-CN.a4e06114.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/style-provider",component:()=>t(()=>import("./en-US.b1890aaf.js"),["assets/en-US.b1890aaf.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/style-provider",component:()=>t(()=>import("./zh-CN.e61adeb4.js"),["assets/zh-CN.e61adeb4.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/styles",component:()=>t(()=>import("./en-US.fa77fbc2.js"),["assets/en-US.fa77fbc2.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/styles",component:()=>t(()=>import("./zh-CN.5ec7fe1b.js"),["assets/zh-CN.5ec7fe1b.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/swipe-item",component:()=>t(()=>import("./zh-CN.caa3f124.js"),["assets/zh-CN.caa3f124.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/swipe",component:()=>t(()=>import("./en-US.cb9f63b3.js"),["assets/en-US.cb9f63b3.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/swipe",component:()=>t(()=>import("./zh-CN.afd15cc4.js"),["assets/zh-CN.afd15cc4.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/switch",component:()=>t(()=>import("./en-US.5aaad0bb.js"),["assets/en-US.5aaad0bb.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/switch",component:()=>t(()=>import("./zh-CN.1e0ff656.js"),["assets/zh-CN.1e0ff656.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/tab-item",component:()=>t(()=>import("./zh-CN.f8d4561e.js"),["assets/zh-CN.f8d4561e.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/tab",component:()=>t(()=>import("./zh-CN.0b2a4c87.js"),["assets/zh-CN.0b2a4c87.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/table",component:()=>t(()=>import("./en-US.94da6120.js"),["assets/en-US.94da6120.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/table",component:()=>t(()=>import("./zh-CN.9261aa3c.js"),["assets/zh-CN.9261aa3c.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/tabs-items",component:()=>t(()=>import("./zh-CN.06ac3da1.js"),["assets/zh-CN.06ac3da1.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/tabs",component:()=>t(()=>import("./en-US.495303dd.js"),["assets/en-US.495303dd.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/tabs",component:()=>t(()=>import("./zh-CN.614af30e.js"),["assets/zh-CN.614af30e.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/themes",component:()=>t(()=>import("./en-US.f83f1e92.js"),["assets/en-US.f83f1e92.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/themes",component:()=>t(()=>import("./zh-CN.e7684657.js"),["assets/zh-CN.e7684657.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/time-picker",component:()=>t(()=>import("./en-US.3f5a01f9.js"),["assets/en-US.3f5a01f9.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/time-picker",component:()=>t(()=>import("./zh-CN.4daae5ff.js"),["assets/zh-CN.4daae5ff.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/uploader",component:()=>t(()=>import("./en-US.f2939ce7.js"),["assets/en-US.f2939ce7.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/uploader",component:()=>t(()=>import("./zh-CN.ea882ae2.js"),["assets/zh-CN.ea882ae2.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/browserAdaptation",component:()=>t(()=>import("./browserAdaptation.en-US.2ed7ffcd.js"),["assets/browserAdaptation.en-US.2ed7ffcd.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/browserAdaptation",component:()=>t(()=>import("./browserAdaptation.zh-CN.59e83dfe.js"),["assets/browserAdaptation.zh-CN.59e83dfe.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/cli",component:()=>t(()=>import("./cli.en-US.0438028c.js"),["assets/cli.en-US.0438028c.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/cli",component:()=>t(()=>import("./cli.zh-CN.6add490d.js"),["assets/cli.zh-CN.6add490d.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/customTheme",component:()=>t(()=>import("./customTheme.en-US.0bf2405d.js"),["assets/customTheme.en-US.0bf2405d.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/customTheme",component:()=>t(()=>import("./customTheme.zh-CN.b517d0a5.js"),["assets/customTheme.zh-CN.b517d0a5.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/home",component:()=>t(()=>import("./home.en-US.7f172ca5.js"),["assets/home.en-US.7f172ca5.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/home",component:()=>t(()=>import("./home.zh-CN.1d524894.js"),["assets/home.zh-CN.1d524894.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/ide",component:()=>t(()=>import("./ide.en-US.5ecaeb7d.js"),["assets/ide.en-US.5ecaeb7d.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/ide",component:()=>t(()=>import("./ide.zh-CN.643e3e21.js"),["assets/ide.zh-CN.643e3e21.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/importOnDemand",component:()=>t(()=>import("./importOnDemand.en-US.9bffbc65.js"),["assets/importOnDemand.en-US.9bffbc65.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/importOnDemand",component:()=>t(()=>import("./importOnDemand.zh-CN.fc34799a.js"),["assets/importOnDemand.zh-CN.fc34799a.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/openSourceGuide",component:()=>t(()=>import("./openSourceGuide.en-US.658159b7.js"),["assets/openSourceGuide.en-US.658159b7.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/openSourceGuide",component:()=>t(()=>import("./openSourceGuide.zh-CN.c8da0a03.js"),["assets/openSourceGuide.zh-CN.c8da0a03.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/quickstart",component:()=>t(()=>import("./quickstart.en-US.57cb013a.js"),["assets/quickstart.en-US.57cb013a.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/quickstart",component:()=>t(()=>import("./quickstart.zh-CN.f60fd154.js"),["assets/quickstart.zh-CN.f60fd154.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/en-US/serverSideRendering",component:()=>t(()=>import("./serverSideRendering.en-US.0c286992.js"),["assets/serverSideRendering.en-US.0c286992.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])},{path:"/zh-CN/serverSideRendering",component:()=>t(()=>import("./serverSideRendering.zh-CN.4d6968ab.js"),["assets/serverSideRendering.zh-CN.4d6968ab.js","assets/elevation.4b142704.js","assets/elevation.19b9d36e.css"])}]}];function lt(e,o){const n=m(R.zIndex);return N(e,i=>{i&&(R.zIndex+=o,n.value=R.zIndex)},{immediate:!0}),{zIndex:n}}function ct(e){return["top","center","bottom"].includes(e)}function ut(e){return ae.includes(e)}const Ve={type:{type:String,validator:ut},position:{type:String,default:"top",validator:ct},content:{type:String},contentClass:{type:String},duration:{type:Number,default:3e3},vertical:{type:Boolean,default:!1},loadingType:ce(ue,"type"),loadingSize:ce(ue,"size"),lockScroll:{type:Boolean,default:!1},show:{type:Boolean,default:!1},teleport:{type:String,default:"body"},forbidClick:{type:Boolean,default:!1},onOpen:{type:Function,default:()=>{}},onOpened:{type:Function,default:()=>{}},onClose:{type:Function,default:()=>{}},onClosed:{type:Function,default:()=>{}},"onUpdate:show":{type:Function},_update:{type:String}};function De(){Object.keys(R.locks).length<=0?document.body.classList.remove("var-site--lock"):document.body.classList.add("var-site--lock")}function q(e){R.locks[e]=1,De()}function W(e){delete R.locks[e],De()}function dt(e,o,n){const{uid:i}=Ne();n&&N(()=>e[n],r=>{r===!1?W(i):r===!0&&e[o]===!0&&q(i)}),N(()=>e[o],r=>{n&&e[n]===!1||(r===!0?q(i):W(i))}),we(()=>{n&&e[n]===!1||e[o]===!0&&q(i)}),Ue(()=>{n&&e[n]===!1||e[o]===!0&&W(i)}),Be(()=>{n&&e[n]===!1||e[o]===!0&&q(i)}),Me(()=>{n&&e[n]===!1||e[o]===!0&&W(i)})}const mt={success:"checkbox-marked-circle",warning:"warning",info:"information",error:"error",loading:""},vt=U({name:"VarSiteSnackbarCore",components:{VarSiteLoading:Fe,VarSiteIcon:Z},props:Ve,setup(e){const o=m(null),{zIndex:n}=lt(()=>e.show,1);dt(e,"show","lockScroll");const i=S(()=>{const{position:_,vertical:p,type:c}=e,A=`var-site-snackbar__wrapper var-site-snackbar__wrapper-${_} var-site-elevation--4`,u=p?" var-site-snackbar__vertical":"",g=c&&ae.includes(c)?` var-site-snackbar__wrapper-${c}`:"";return`${A}${u}${g}`}),r=S(()=>e.type==="loading"||e.forbidClick),s=S(()=>e.type?mt[e.type]:""),a=()=>{o.value=setTimeout(()=>{var _;e.type!=="loading"&&((_=e["onUpdate:show"])==null||_.call(e,!1))},e.duration)};return N(()=>e.show,_=>{var p,c;_?((p=e.onOpen)==null||p.call(e),a()):_===!1&&(clearTimeout(o.value),(c=e.onClose)==null||c.call(e))}),N(()=>e._update,()=>{clearTimeout(o.value),a()}),ee(()=>{var _;e.show&&((_=e.onOpen)==null||_.call(e),a())}),{zIndex:n,snackbarClass:i,iconName:s,isForbidClick:r}}}),ht={class:"var-site-snackbar__action"};function Et(e,o,n,i,r,s){const a=y("var-site-icon"),_=y("var-site-loading");return oe((l(),d("div",{class:"var-site-snackbar",style:T({pointerEvents:e.isForbidClick?"auto":"none",zIndex:e.zIndex})},[P("div",{class:Q(e.snackbarClass),style:T({zIndex:e.zIndex})},[P("div",{class:Q(["var-site-snackbar__content",[e.contentClass]])},[C(e.$slots,"default",{},()=>[X(x(e.content),1)])],2),P("div",ht,[e.iconName?(l(),D(a,{key:0,name:e.iconName},null,8,["name"])):v("v-if",!0),e.type==="loading"?(l(),D(_,{key:1,type:e.loadingType,size:e.loadingSize},null,8,["type","size"])):v("v-if",!0),C(e.$slots,"action")])],6)],4)),[[ne,e.show]])}var Re=B(vt,[["render",Et]]);const ft=U({name:"VarSiteSnackbar",components:{VarSiteSnackbarCore:Re},props:Ve,setup(){const{disabled:e}=je();return{disabled:e}}});function gt(e,o,n,i,r,s){const a=y("var-site-snackbar-core");return l(),D(ge,{to:e.teleport,disabled:e.disabled},[I(He,{name:"var-site-snackbar-fade",onAfterEnter:e.onOpened,onAfterLeave:e.onClosed},{default:z(()=>[I(a,V(e.$props,{class:"var-site-snackbar-transition"}),{action:z(()=>[C(e.$slots,"action")]),default:z(()=>[C(e.$slots,"default",{},()=>[X(x(e.content),1)])]),_:3},16)]),_:3},8,["onAfterEnter","onAfterLeave"])],8,["to","disabled"])}var $=B(ft,[["render",gt]]);function Tt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!qe(e)}const ae=["loading","success","warning","info","error"];let he=0,ie=!1,K,w=!1,f=H([]);const Pt={type:void 0,content:"",position:"top",duration:3e3,vertical:!1,contentClass:void 0,loadingType:"circle",loadingSize:"normal",lockScroll:!1,teleport:"body",forbidClick:!1,onOpen:()=>{},onOpened:()=>{},onClose:()=>{},onClosed:()=>{}},It={name:"var-site-snackbar-fade",tag:"div",class:"var-site-transition-group"},Ot={setup:function(){return()=>{const e=f.map(({id:n,reactiveSnackOptions:i,_update:r})=>{const s=document.querySelector(".var-site-transition-group");i.forbidClick||i.type==="loading"?s.classList.add("var-site-pointer-auto"):s.classList.remove("var-site-pointer-auto"),w&&(i.position="top");const _=b({position:w?"relative":"absolute"},Rt(i.position));return I(Re,V(i,{key:n,style:_,"data-id":n,_update:r,show:i.show,"onUpdate:show":p=>i.show=p}),null)}),o=R.zIndex;return I(We,V(It,{style:{zIndex:o},onAfterEnter:At,onAfterLeave:Lt}),Tt(e)?e:{default:()=>[e]})}}},O=function(e){const o=Ie(e)?e:{content:e},n=H(b(b({},Pt),o));n.show=!0,ie||(ie=!0,K=Oe(Ot).unmountInstance);const{length:i}=f,r={id:he++,reactiveSnackOptions:n};if(i===0||w)Vt(r);else{const s=`update-${he}`;Dt(n,s)}return{clear(){!w&&f.length?f[0].reactiveSnackOptions.show=!1:n.show=!1}}};ae.forEach(e=>{O[e]=o=>(Ie(o)?o.type=e:o={content:o,type:e},O(o))});O.install=function(e){e.component($.name,$)};O.allowMultiple=function(e=!1){e!==w&&(f.forEach(o=>{o.reactiveSnackOptions.show=!1}),w=e)};O.clear=function(){f.forEach(e=>{e.reactiveSnackOptions.show=!1})};O.Component=$;function At(e){var i,r;const o=e.getAttribute("data-id"),n=f.find(s=>s.id===k(o));n&&((r=(i=n.reactiveSnackOptions).onOpened)==null||r.call(i))}function Lt(e){var r,s;e.parentElement&&e.parentElement.classList.remove("var-site-pointer-auto");const o=e.getAttribute("data-id"),n=f.find(a=>a.id===k(o));n&&(n.animationEnd=!0,(s=(r=n.reactiveSnackOptions).onClosed)==null||s.call(r)),f.every(a=>a.animationEnd)&&(K==null||K(),f=H([]),ie=!1)}function Vt(e){f.push(e)}function Dt(e,o){const[n]=f;n.reactiveSnackOptions=b(b({},n.reactiveSnackOptions),e),n._update=o}function Rt(e="top"){return e==="bottom"?{[e]:"5%"}:{top:e==="top"?"5%":"45%"}}$.install=function(e){e.component($.name,$)};let yt=0;const Ct=10,bt=U({name:"VarSiteCodeExample",components:{[de.name]:de,[Z.name]:Z},props:{playgroundIgnore:{type:Boolean,default:!1}},setup(e){const o=m(null),n=m(yt++),i=m(h(E,"pc.fold")),r=m(!1),s=m(h(E,"pc.clipboard",{})),a=m(-1),_=m(e.playgroundIgnore?void 0:h(E,"pc.header.playground"));let p=null;const c=async()=>{const u=i.value.foldHeight;if(a.value===u){a.value=-1,await fe();const{offsetHeight:g}=o.value;a.value=u,await me(),a.value=g,p=setTimeout(()=>{a.value=-1},250)}else{clearTimeout(p);const{offsetHeight:g}=o.value;a.value=g,await me(),a.value=u}},A=()=>{var _e,se;const u=`<script setup>
`,g="<\/script>",M=`import { installVarletUI } from './varlet-repl-plugin.js'
`,F=`
installVarletUI()
`;let L=(se=(_e=o.value)==null?void 0:_e.innerText)!=null?se:"";L.includes(u)?(L=L.replace(u,`${u}${M}`),L=L.replace(g,`${F}${g}`)):L=`${u}${M}${F}<\/script>

${L}`;const ye={"App.vue":L};window.open(`${_.value}/#${Ge(JSON.stringify(ye))}`)};return ee(()=>{var M,F;new xe(`#clip-trigger-${n.value}`).on("success",()=>{O.success(s.value[Pe().language])});const{offsetHeight:g}=o.value;r.value=g-i.value.foldHeight<Ct,a.value=(M=i.value)!=null&&M.defaultFold?(F=i.value)==null?void 0:F.foldHeight:-1}),{code:o,height:a,cid:n,fold:i,disabledFold:r,clipboard:s,playground:_,toggle:c,toPlayground:A}}}),kt={class:"var-site-code-example"},St={class:"var-site-code-example__toolbar"},zt=["id"];function $t(e,o,n,i,r,s){const a=y("var-site-icon"),_=y("var-site-button");return l(),d("div",kt,[P("div",St,[e.fold&&!e.disabledFold?(l(),D(_,{key:0,text:"",round:"",onClick:e.toggle},{default:z(()=>[I(a,{name:"xml",size:"18"})]),_:1},8,["onClick"])):v("v-if",!0),e.clipboard?(l(),D(_,{key:1,id:`clip-trigger-${e.cid}`,"data-clipboard-target":`#clip-target-${e.cid}`,text:"",round:""},{default:z(()=>[I(a,{name:"content-copy",size:"18"})]),_:1},8,["id","data-clipboard-target"])):v("v-if",!0),e.playground?(l(),D(_,{key:2,text:"",round:"",onClick:e.toPlayground},{default:z(()=>[I(a,{name:"code-json",size:"18"})]),_:1},8,["onClick"])):v("v-if",!0)]),P("div",{id:`clip-target-${e.cid}`,class:Q(["var-site-code-example__code",[e.disabledFold?"var-site-code-example--scroller":null]]),ref:"code",style:T({height:e.height>=0?`${e.height}px`:void 0})},[C(e.$slots,"default")],14,zt)])}var Y=B(bt,[["render",$t]]);Y.install=function(e){e.component(Y.name,Y)};function Nt(e){return["linear","circle"].includes(e)}const wt={mode:{type:String,default:"linear",validator:Nt},lineWidth:{type:[Number,String],default:4},color:{type:String},trackColor:{type:String},ripple:{type:Boolean,default:!1},value:{type:[Number,String],default:0},label:{type:Boolean,default:!1},size:{type:Number,default:40},rotate:{type:Number,default:0},track:{type:Boolean,default:!0}};const Ut=U({name:"VarSiteProgress",inheritAttrs:!1,props:wt,setup(e){const o=S(()=>{const i=k(e.value),r=i>100?100:i,s=i>100?100:Math.round(i);return{width:`${r}%`,roundValue:`${s}%`}}),n=S(()=>{const{size:i,lineWidth:r,value:s}=e,a=`0 0 ${i} ${i}`,_=k(s)>100?100:Math.round(k(s)),p=(i-k(r))/2,c=2*Math.PI*p,A=`${_/100*c}, ${c}`;return{viewBox:a,radius:p,strokeDasharray:A,perimeter:c,roundValue:`${_}%`}});return{linearProps:o,circleProps:n}}}),Bt={class:"var-site-progress"},Mt={key:0,class:"var-site-progress-linear"},Ft=["viewBox"],jt=["cx","cy","r","stroke-width"],Ht=["cx","cy","r","stroke-width"];function qt(e,o,n,i,r,s){return l(),d("div",Bt,[e.mode==="linear"?(l(),d("div",Mt,[P("div",V({class:"var-site-progress-linear__block",style:{height:`${e.lineWidth}px`}},e.$attrs),[e.track?(l(),d("div",{key:0,class:"var-site-progress-linear__background",style:T({background:e.trackColor})},null,4)):v("v-if",!0),P("div",{class:Q(`var-site-progress-linear__certain${e.ripple?" var-site-progress-linear__ripple":""}`),style:T({background:e.color,width:e.linearProps.width})},null,6)],16),e.label?(l(),d("div",V({key:0,class:"var-site-progress-linear__label"},e.$attrs),[C(e.$slots,"default",{},()=>[X(x(e.linearProps.roundValue),1)])],16)):v("v-if",!0)])):v("v-if",!0),e.mode==="circle"?(l(),d("div",{key:1,class:"var-site-progress-circle",style:T({width:`${e.size}px`,height:`${e.size}px`})},[(l(),d("svg",{class:"var-site-progress-circle__svg",style:T({transform:`rotate(${e.rotate-90}deg)`}),viewBox:e.circleProps.viewBox},[e.track?(l(),d("circle",{key:0,class:"var-site-progress-circle__background",cx:e.size/2,cy:e.size/2,r:e.circleProps.radius,fill:"transparent","stroke-width":e.lineWidth,style:T({strokeDasharray:e.circleProps.perimeter,stroke:e.trackColor})},null,12,jt)):v("v-if",!0),P("circle",{class:"var-site-progress-circle__certain",cx:e.size/2,cy:e.size/2,r:e.circleProps.radius,fill:"transparent","stroke-width":e.lineWidth,style:T({strokeDasharray:e.circleProps.strokeDasharray,stroke:e.color})},null,12,Ht)],12,Ft)),e.label?(l(),d("div",V({key:0,class:"var-site-progress-circle__label"},e.$attrs),[C(e.$slots,"default",{},()=>[X(x(e.circleProps.roundValue),1)])],16)):v("v-if",!0)],4)):v("v-if",!0)])}var J=B(Ut,[["render",qt]]);J.install=function(e){e.component(J.name,J)};function te(e){const o=h(E,"themesKey");return h(E,`${e!=null?e:Ae(o)}.color-progress`)}function G(e){const o=h(E,"themesKey");return h(E,`${e!=null?e:Ae(o)}.color-progress-track`)}function Wt(){let e,o;const n=G(),i=te(),r=H({style:{position:"fixed",width:"100%",left:0,top:0,zIndex:10086},trackColor:n,color:i,lineWidth:3,value:0});Ke(p=>{o=p,r.trackColor=G(p),r.color=r.value===100?G(p):te(p)},!1);const s=()=>{e=window.setTimeout(()=>{if(r.value>=95)return;let p=Math.random();r.value<70&&(p=Math.round(5*Math.random())),r.value+=p,s()},200)},a=()=>{r.value=0,setTimeout(()=>r.color=te(o),200),s()},_=()=>{r.value=100,setTimeout(()=>r.color=G(o),300),window.clearTimeout(e)};return Oe(J,r),{start:a,end:_}}const Gt=h(E,"defaultLanguage"),Ee=h(E,"pc.redirect"),Kt=h(E,"mobile.redirect");O.allowMultiple(!0);Ee&&Le.push({path:"/:pathMatch(.*)*",redirect:`/${Gt}${Ee}`});const j=Ye({history:Je(),scrollBehavior:()=>({top:0}),routes:Le});let re=!0;const{start:Yt,end:Jt}=Wt();j.beforeEach((e,o)=>{if(e.path===o.path)return!1;re=!1,setTimeout(()=>!re&&Yt(),200),window._hmt&&e.path&&window._hmt.push(["_trackPageview",`/#${e.fullPath}`])});j.afterEach(()=>{re=!0,Jt()});Object.defineProperty(window,"onMobileRouteChange",{value:(e,o,n)=>{if(e===Kt){j.replace(`/${o}/${n}`);return}j.replace(`/${o}${e}`)}});Object.defineProperty(window,"scrollToMenu",{value:e=>{setTimeout(()=>{const o=document.getElementById(e),n=o.parentNode;n.scrollTo({top:o.offsetTop-n.offsetHeight/2})})}});Ze(pt).use(j).use(Qe).use(Xe).use(Z).use(Y).use(O).mount("#app");export{et as a,ve as b,tt as c};
