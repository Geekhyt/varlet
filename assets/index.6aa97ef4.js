import{t as p,e as S}from"./shared.506a394a.js";import{d as y,h as C,b as $,c as N}from"./components.2481c71b.js";import{a as O,b as v}from"./index.a6fbbbc0.js";import{t as z}from"./elements.92736b4e.js";import{_ as P}from"./elevation.229458c1.js";import{d as h,r as j,b as c,y as k,o as w,c as R,G as U,p as B,n as E}from"./vendor.49f89f0d.js";const L={span:{type:[String,Number],default:24},offset:{type:[String,Number],default:0},onClick:{type:Function},xs:{type:[Object,Number,String]},sm:{type:[Object,Number,String]},md:{type:[Object,Number,String]},lg:{type:[Object,Number,String]},xl:{type:[Object,Number,String]}};function I(){const{parentProvider:e,bindParent:n}=y(O),{index:s}=C(v);return(!e||!n||!s)&&console.warn("col must in row"),{index:s,row:e,bindRow:n}}const{n:i,classes:K}=N("col"),W=h({name:"VarCol",props:L,setup(e){const n=j({left:0,right:0}),s=c(()=>p(e.span)),m=c(()=>p(e.offset)),{row:a,bindRow:d}=I(),l={setPadding(t){n.value=t}},b=(t,r)=>{const o=[];if(!r)return o;if(S(r)){const{span:u,offset:g}=r;u&&o.push(i(`--span-${t}-${u}`)),g&&o.push(i(`--offset-${t}-${g}`))}else o.push(i(`--span-${t}-${r}`));return o};return k([()=>e.span,()=>e.offset],()=>{a==null||a.computePadding()}),$(d,l),{n:i,classes:K,padding:n,toNumber:p,toSizeUnit:z,getSize:b,span:s,offset:m}}});function Y(e,n,s,m,a,d){return w(),R("div",{class:B(e.classes(e.n(),"var--box",[e.span,e.n(`--span-${e.span}`)],[e.offset,e.n(`--offset-${e.offset}`)],...e.getSize("xs",e.xs),...e.getSize("sm",e.sm),...e.getSize("md",e.md),...e.getSize("lg",e.lg),...e.getSize("xl",e.xl))),style:E({paddingLeft:e.toSizeUnit(e.padding.left),paddingRight:e.toSizeUnit(e.padding.right)}),onClick:n[0]||(n[0]=(...l)=>e.onClick&&e.onClick(...l))},[U(e.$slots,"default")],6)}var f=P(W,[["render",Y]]);f.install=function(e){e.component(f.name,f)};export{f as C};
