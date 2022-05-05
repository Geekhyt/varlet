import{A as p}from"./AppType.7d77db61.js";import{C as o}from"./index.4e4e3c96.js";import{I as C}from"./index.ae2fa579.js";import{S as n}from"./index.99e81e4d.js";import{d as y}from"./index.5d153c96.js";import{u as S,a as E,_ as F,b as A,c as D}from"./en-US.010614a9.js";import{a as k,b as v}from"./utils.0fcef4b9.js";import{a as d,f as h,h as z,n as l,ag as u,N as e,F as N,J as a,K as i,p as m,i as _}from"./vue-router.esm-bundler.e4f2b974.js";import"./components.8d69e83c.js";import"./elements.9e22c80f.js";/* empty css               */var w={chipType:"\u7EB8\u7247\u7C7B\u578B",defaultChip:"\u9ED8\u8BA4\u7EB8\u7247",primaryChip:"\u4E3B\u8981\u7EB8\u7247",infoChip:"\u4FE1\u606F\u7EB8\u7247",successChip:"\u6210\u529F\u7EB8\u7247",warningChip:"\u8B66\u544A\u7EB8\u7247",dangerChip:"\u5371\u9669\u7EB8\u7247",simpleChip:"\u7B80\u5355\u7EB8\u7247",nonRoundChip:"\u975E\u5706\u89D2\u7EB8\u7247",chipSize:"\u7EB8\u7247\u5C3A\u5BF8",largeChip:"\u5927\u578B\u7EB8\u7247",normalChip:"\u5E38\u89C4\u7EB8\u7247",smallChip:"\u5C0F\u578B\u7EB8\u7247",miniChip:"\u8FF7\u4F60\u7EB8\u7247",blockChip:"\u5757\u7EA7\u7EB8\u7247",canCloseChip:"\u53EF\u5173\u95ED\u7EB8\u7247",customCloseIcon:"\u81EA\u5B9A\u4E49\u5173\u95ED\u56FE\u6807",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",chip:"\u7EB8\u7247",addSlot:"\u6DFB\u52A0\u63D2\u69FD",leftSlot:"\u5DE6\u4FA7\u63D2\u69FD",rightSlot:"\u53F3\u4FA7\u63D2\u69FD",leftAndRightSlot:"\u5DE6\u53F3\u4E24\u4FA7\u63D2\u69FD"},R={chipType:"Chip Type",defaultChip:"Default Chip",primaryChip:"Primary Chip",infoChip:"Info Chip",successChip:"Success Chip",warningChip:"Warning Chip",dangerChip:"Danger Chip",simpleChip:"Simple Chip",nonRoundChip:"Non Round Chip",chipSize:"Chip Size",largeChip:"Large Chip",normalChip:"Normal Chip",smallChip:"Small Chip",miniChip:"Mini Chip",blockChip:"Block Chip",canCloseChip:"Can Close Chip",customCloseIcon:"Custom Close Icon",customColor:"Custom Color",chip:"Chip",addSlot:"Add Slot",leftSlot:"Left Slot",rightSlot:"Right Slot",leftAndRightSlot:"Left And Right Slot"};const{add:B,use:b,pack:t,packs:q,merge:G}=S(),x=s=>{D(s),b(s)};E("zh-CN",F);E("en-US",A);B("zh-CN",w);B("en-US",R);const H={setup(s){const c=d(!0),f=d(!0);return k(x),v(y),(I,r)=>(h(),z(N,null,[l(u(p),null,{default:e(()=>[a(i(u(t).chipType),1)]),_:1}),l(u(n),null,{default:e(()=>[l(u(o),null,{default:e(()=>[a(i(u(t).defaultChip),1)]),_:1}),l(u(o),{type:"primary"},{default:e(()=>[a(i(u(t).primaryChip),1)]),_:1}),l(u(o),{type:"success"},{default:e(()=>[a(i(u(t).successChip),1)]),_:1}),l(u(o),{type:"danger"},{default:e(()=>[a(i(u(t).dangerChip),1)]),_:1}),l(u(o),{type:"warning"},{default:e(()=>[a(i(u(t).warningChip),1)]),_:1}),l(u(o),{type:"info"},{default:e(()=>[a(i(u(t).infoChip),1)]),_:1})]),_:1}),l(u(p),null,{default:e(()=>[a(i(u(t).simpleChip),1)]),_:1}),l(u(o),{plain:"",type:"primary"},{default:e(()=>[a(i(u(t).simpleChip),1)]),_:1}),l(u(p),null,{default:e(()=>[a(i(u(t).nonRoundChip),1)]),_:1}),l(u(o),{round:!1,type:"primary"},{default:e(()=>[a(i(u(t).nonRoundChip),1)]),_:1}),l(u(p),null,{default:e(()=>[a(i(u(t).chipSize),1)]),_:1}),l(u(n),{align:"center"},{default:e(()=>[l(u(o),{type:"primary"},{default:e(()=>[a(i(u(t).normalChip),1)]),_:1}),l(u(o),{type:"success",size:"small"},{default:e(()=>[a(i(u(t).smallChip),1)]),_:1}),l(u(o),{type:"warning",size:"mini"},{default:e(()=>[a(i(u(t).miniChip),1)]),_:1}),l(u(o),{type:"danger",size:"large"},{default:e(()=>[a(i(u(t).largeChip),1)]),_:1})]),_:1}),l(u(p),null,{default:e(()=>[a(i(u(t).blockChip),1)]),_:1}),l(u(o),{type:"primary",block:""},{default:e(()=>[a(i(u(t).blockChip),1)]),_:1}),l(u(p),null,{default:e(()=>[a(i(u(t).canCloseChip),1)]),_:1}),l(u(n),null,{default:e(()=>[c.value?(h(),m(u(o),{key:0,closable:"",onClose:r[0]||(r[0]=g=>c.value=!1)},{default:e(()=>[a(i(u(t).canCloseChip),1)]),_:1})):_("v-if",!0),f.value?(h(),m(u(o),{key:1,closable:"","icon-name":"delete",onClose:r[1]||(r[1]=g=>f.value=!1)},{default:e(()=>[a(i(u(t).customCloseIcon),1)]),_:1})):_("v-if",!0)]),_:1}),l(u(p),null,{default:e(()=>[a(i(u(t).customColor),1)]),_:1}),l(u(n),null,{default:e(()=>[l(u(o),{color:"#009688","text-color":"#fff"},{default:e(()=>[a(i(u(t).chip),1)]),_:1}),l(u(o),{color:"#009688",plain:""},{default:e(()=>[a(i(u(t).chip),1)]),_:1}),l(u(o),{color:"#faecd8","text-color":"#e6a23c",plain:""},{default:e(()=>[a(i(u(t).chip),1)]),_:1}),l(u(o),{color:"#faecd8","text-color":"#e6a23c"},{default:e(()=>[a(i(u(t).chip),1)]),_:1})]),_:1}),l(u(p),null,{default:e(()=>[a(i(u(t).addSlot),1)]),_:1}),l(u(n),null,{default:e(()=>[l(u(o),null,{left:e(()=>[l(u(C),{name:"star"})]),default:e(()=>[a(i(u(t).leftSlot)+" ",1)]),_:1}),l(u(o),null,{right:e(()=>[l(u(C),{name:"fire"})]),default:e(()=>[a(i(u(t).rightSlot)+" ",1)]),_:1}),l(u(o),null,{left:e(()=>[l(u(C),{name:"account-circle"})]),right:e(()=>[l(u(C),{name:"cake-variant"})]),default:e(()=>[a(i(u(t).leftAndRightSlot)+" ",1)]),_:1})]),_:1})],64))}};export{H as default};
