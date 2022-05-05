import{R as U}from"./index.8f83d7e2.js";import{L as N}from"./index.8957616c.js";import{t as R}from"./elements.9e22c80f.js";import{c as B,a as f}from"./components.8d69e83c.js";import{d as $,_ as C,aa as b,B as F,f as y,h as _,E as j,H as L,n as t,ag as a,N as n,F as D,J as d,K as c,D as o,ah as I,ai as A}from"./vue-router.esm-bundler.e4f2b974.js";import{A as u}from"./AppType.7d77db61.js";import{R as w}from"./index.0f9c5d3c.js";import{a as V}from"./utils.0fcef4b9.js";import{u as x,a as k,_ as M,b as T,c as H}from"./en-US.010614a9.js";import"./index.9aa5f002.js";/* empty css               */function J(e){return["fill","contain","cover","none","scale-down"].includes(e)}const K={src:{type:String},fit:{type:String,validator:J,default:"fill"},alt:{type:String},width:{type:[String,Number]},height:{type:[String,Number]},radius:{type:[String,Number],default:0},loading:{type:String},error:{type:String},lazy:{type:Boolean,default:!1},ripple:{type:Boolean,default:!1},block:{type:Boolean,default:!0},onClick:{type:Function},onLoad:{type:Function},onError:{type:Function}};const{n:q,classes:G}=B("image"),O=$({name:"VarImage",directives:{Lazy:N,Ripple:U},props:K,setup(e){return{n:q,classes:G,toSizeUnit:R,handleLoad:l=>{const p=l.currentTarget,{lazy:v,onLoad:h,onError:z}=e;v?(p._lazy.state==="success"&&f(h,l),p._lazy.state==="error"&&f(z,l)):f(h,l)},handleError:l=>{const{lazy:p,onError:v}=e;!p&&f(v,l)}}}}),P=["alt","lazy-error","lazy-loading"],Q=["alt","src"];function W(e,s,S,l,p,v){const h=b("lazy"),z=b("ripple");return F((y(),_("div",{class:j(e.classes(e.n(),"var--box",[!e.block,"var--inline-block"])),style:L({width:e.toSizeUnit(e.width),height:e.toSizeUnit(e.height),"border-radius":e.toSizeUnit(e.radius)})},[e.lazy?F((y(),_("img",{key:0,class:j(e.n("image")),alt:e.alt,"lazy-error":e.error,"lazy-loading":e.loading,style:L({objectFit:e.fit}),onLoad:s[0]||(s[0]=(...i)=>e.handleLoad&&e.handleLoad(...i)),onError:s[1]||(s[1]=(...i)=>e.handleError&&e.handleError(...i)),onClick:s[2]||(s[2]=(...i)=>e.onClick&&e.onClick(...i))},null,46,P)),[[h,e.src]]):(y(),_("img",{key:1,class:j(e.n("image")),alt:e.alt,style:L({objectFit:e.fit}),src:e.src,onLoad:s[3]||(s[3]=(...i)=>e.handleLoad&&e.handleLoad(...i)),onError:s[4]||(s[4]=(...i)=>e.handleError&&e.handleError(...i)),onClick:s[5]||(s[5]=(...i)=>e.onClick&&e.onClick(...i))},null,46,Q))],6)),[[z,{disabled:!e.ripple}]])}var r=C(O,[["render",W]]);r.install=function(e){e.component(r.name,r)};var X={basicUsage:"\u57FA\u672C\u4F7F\u7528",fitMode:"\u586B\u5145\u6A21\u5F0F",setRadius:"\u8BBE\u7F6E\u5706\u89D2",useRipple:"\u5F00\u542F\u6C34\u6CE2",useLazyLoad:"\u5F00\u542F\u61D2\u52A0\u8F7D"},Y={basicUsage:"Basic Usage",fitMode:"Fit Mode",setRadius:"Set Radius",useRipple:"Use Ripple",useLazyLoad:"Use LazyLoad"};const{add:E,use:Z,pack:m,packs:Se,merge:be}=x(),ee=e=>{H(e),Z(e)};k("zh-CN",M);k("en-US",T);E("zh-CN",X);E("en-US",Y);const g=e=>(I("data-v-358a3a56"),e=e(),A(),e),ae={class:"image-example-fit-item"},te=g(()=>o("div",{class:"image-example-margin-bottom"},"fill",-1)),se={class:"image-example-fit-item"},re=g(()=>o("div",{class:"image-example-margin-bottom"},"cover",-1)),ie={class:"image-example-fit-item"},oe=g(()=>o("div",{class:"image-example-margin-bottom"},"contain",-1)),le={class:"image-example-fit-item"},ne=g(()=>o("div",{class:"image-example-margin-bottom"},"none",-1)),pe={class:"image-example-fit-item"},de=g(()=>o("div",{class:"image-example-margin-bottom"},"scale-down",-1)),ce={setup(e){return V(ee),(s,S)=>(y(),_(D,null,[t(a(u),null,{default:n(()=>[d(c(a(m).basicUsage),1)]),_:1}),t(a(r),{src:"https://varlet-varletjs.vercel.app/cat.jpg"}),t(a(u),null,{default:n(()=>[d(c(a(m).fitMode),1)]),_:1}),t(a(w),null,{default:n(()=>[o("div",ae,[t(a(r),{width:"85px",height:"85px",src:"https://varlet-varletjs.vercel.app/cat.jpg"}),te]),o("div",se,[t(a(r),{width:"85px",height:"85px",fit:"cover",src:"https://varlet-varletjs.vercel.app/cat.jpg"}),re]),o("div",ie,[t(a(r),{width:"85px",height:"85px",fit:"contain",src:"https://varlet-varletjs.vercel.app/cat.jpg"}),oe]),o("div",le,[t(a(r),{width:"85px",height:"85px",fit:"none",src:"https://varlet-varletjs.vercel.app/cat.jpg"}),ne]),o("div",pe,[t(a(r),{width:"85px",height:"85px",fit:"scale-down",src:"https://varlet-varletjs.vercel.app/cat.jpg"}),de])]),_:1}),t(a(u),null,{default:n(()=>[d(c(a(m).setRadius),1)]),_:1}),t(a(w),null,{default:n(()=>[t(a(r),{width:"85px",height:"85px",fit:"cover",radius:10,src:"https://varlet-varletjs.vercel.app/cat.jpg",style:{"margin-right":"10px"}}),t(a(r),{width:"85px",height:"85px",fit:"cover",radius:"50%",src:"https://varlet-varletjs.vercel.app/cat.jpg"})]),_:1}),t(a(u),null,{default:n(()=>[d(c(a(m).useRipple),1)]),_:1}),t(a(r),{ripple:"",src:"https://varlet-varletjs.vercel.app/cat.jpg"}),t(a(u),null,{default:n(()=>[d(c(a(m).useLazyLoad),1)]),_:1}),t(a(r),{lazy:"",src:"https://varlet-varletjs.vercel.app/cat.jpg"})],64))}};var Fe=C(ce,[["__scopeId","data-v-358a3a56"]]);export{Fe as default};
