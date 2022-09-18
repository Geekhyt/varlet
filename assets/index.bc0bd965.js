import{M as ee}from"./index.5b7269e6.js";import{R as ae}from"./index.7205fcb6.js";import{I as le}from"./index.5b68f2a3.js";import{C as ie}from"./index.23f9c132.js";import{I as se}from"./index.41abbaed.js";import{d as ne,a as k,Z as u,b as N,w as L,X as F,_ as oe,p as $,ai as te,f as v,h as f,D as I,N as r,O as Q,q as y,aO as R,M as w,P as B,Q as b,F as j,ak as A,S as q,i as ue,j as H}from"./vue-router.esm-bundler.b2f96f29.js";import{p as re}from"./index.6238f624.js";import{c as de}from"./components.cddaf618.js";const ve={current:{type:[Number,String]},size:{type:[Number,String],default:10},total:{type:[Number,String],default:0},maxPagerCount:{type:Number,default:3},disabled:{type:Boolean,default:!1},simple:{type:Boolean,default:!0},showSizeChanger:{type:Boolean,default:!0},showQuickJumper:{type:Boolean,default:!1},sizeOption:{type:Array,default:()=>[10,20,50,100]},showTotal:{type:Function},onChange:{type:Function},"onUpdate:current":{type:Function},"onUpdate:size":{type:Function}},{n:me,classes:pe}=de("pagination"),fe=ne({name:"VarPagination",components:{VarMenu:ee,VarIcon:le,VarCell:ie,VarInput:se},directives:{Ripple:ae},props:ve,setup(e){const i=k(!1),S=k(""),h=k("1"),c=k(!1),P=k(!1),s=k(u(e.current)||1),m=k(u(e.size)||10),z=k([]),C=N(()=>Math.ceil(e.maxPagerCount/2)),n=N(()=>Math.ceil(u(e.total)/u(m.value))),l=N(()=>{const a=m.value*(s.value-1)+1,t=Math.min(m.value*s.value,u(e.total));return[a,t]}),g=N(()=>e.showTotal?e.showTotal(u(e.total),l.value):""),T=(a,t)=>F(a)?!1:t===1?c.value:P.value,X=(a,t)=>F(a)?"basic":t===1?"head":"tail",Z=(a,t)=>{a===s.value||e.disabled||(F(a)?s.value=a:a==="prev"?s.value>1&&(s.value-=1):a==="next"?s.value<n.value&&(s.value+=1):a==="..."&&(t===1?s.value=Math.max(s.value-e.maxPagerCount,1):s.value=Math.min(s.value+e.maxPagerCount,n.value)))},G=()=>{e.disabled||(i.value=!0)},W=a=>{m.value=a,i.value=!1},O=a=>/^[1-9][0-9]*$/.test(a),Y=(a,t,M)=>{if(M.target.blur(),O(t)){let V=u(t);V>n.value&&(V=n.value,h.value=`${V}`),V!==s.value&&(s.value=V)}a==="quick"&&(S.value=""),a==="simple"&&!O(t)&&(h.value=`${s.value}`)};return L([()=>e.current,()=>e.size],([a,t])=>{s.value=u(a)||1,m.value=u(t||10)}),L([s,m],([a,t],[M,V])=>{var J,K;if(a>n.value){s.value=n.value;return}let d=[];const{maxPagerCount:p,total:x,onChange:U}=e,_=Math.ceil(u(x)/u(V)),E=n.value-(p-C.value)-1;if(h.value=`${a}`,n.value-2>p){if(M===void 0||n.value!==_)for(let o=2;o<p+2;o++)d.push(o);if(a<=p&&a<E){d=[];for(let o=1;o<p+1;o++)d.push(o+1);c.value=!0,P.value=!1}if(a>p&&a<E){d=[];for(let o=1;o<p+1;o++)d.push(a+o-C.value);c.value=a===2&&p===1,P.value=!1}if(a>=E){d=[];for(let o=1;o<p+1;o++)d.push(n.value-(p-o)-1);c.value=!1,P.value=!0}d=[1,"...",...d,"...",n.value]}else for(let o=1;o<=n.value;o++)d.push(o);z.value=d,M!==void 0&&n.value>0&&(U==null||U(a,t)),(J=e["onUpdate:current"])==null||J.call(e,a),(K=e["onUpdate:size"])==null||K.call(e,t)},{immediate:!0}),{n:me,classes:pe,pack:re,current:s,menuVisible:i,size:m,pageCount:n,pageList:z,inputValue:S,simpleValue:h,totalText:g,getMode:X,isHideEllipsis:T,clickItem:Z,showMenu:G,clickSize:W,setPage:Y,toNumber:u}}});const be=["item-mode","onClick"];function ge(e,i,S,h,c,P){const s=$("var-icon"),m=$("var-input"),z=$("var-cell"),C=$("var-menu"),n=te("ripple");return v(),f("ul",{class:r(e.n())},[I((v(),f("li",{class:r(e.classes(e.n("item"),e.n("prev"),[e.current<=1||e.disabled,e.n("item--disabled")],[e.simple,e.n("item--hover"),"var-elevation--2"])),onClick:i[0]||(i[0]=l=>e.clickItem("prev"))},[Q(e.$slots,"prev",{},()=>[y(s,{name:"chevron-left"})])],2)),[[n,{disabled:e.current<=1||e.disabled}]]),e.simple?(v(),f("li",{key:0,class:r(e.classes(e.n("simple"),[e.disabled,e.n("item--disabled")]))},[y(m,{modelValue:e.simpleValue,"onUpdate:modelValue":i[1]||(i[1]=l=>e.simpleValue=l),disabled:e.disabled,"var-pagination-cover":"",onBlur:i[2]||(i[2]=l=>e.setPage("simple",e.simpleValue,l)),onKeydown:i[3]||(i[3]=R(l=>e.setPage("simple",e.simpleValue,l),["enter"]))},null,8,["modelValue","disabled"]),w("span",null,[B(" / "+b(e.pageCount)+" ",1),w("div",{class:r(e.n("simple-line"))},null,2)])],2)):(v(!0),f(j,{key:1},A(e.pageList,(l,g)=>I((v(),f("li",{key:e.toNumber(l)+g,"item-mode":e.getMode(l,g),class:r(e.classes(e.n("item"),"var-elevation--2",[l===e.current&&!e.disabled,e.n("item--active")],[e.isHideEllipsis(l,g),e.n("item--hide")],[e.disabled,e.n("item--disabled")],[l===e.current&&e.disabled,e.n("item--disabled--active")])),onClick:T=>e.clickItem(l,g)},[B(b(l),1)],10,be)),[[n,{disabled:e.disabled}]])),128)),I((v(),f("li",{class:r(e.classes(e.n("item"),e.n("next"),[e.current>=e.pageCount||e.disabled,e.n("item--disabled")],[e.simple,e.n("item--hover"),"var-elevation--2"])),onClick:i[4]||(i[4]=l=>e.clickItem("next"))},[Q(e.$slots,"next",{},()=>[y(s,{name:"chevron-right"})])],2)),[[n,{disabled:e.current>=e.pageCount||e.disabled}]]),e.showSizeChanger?(v(),f("li",{key:2,class:r(e.classes(e.n("size"),[e.disabled,e.n("item--disabled")]))},[y(C,{show:e.menuVisible,"onUpdate:show":i[6]||(i[6]=l=>e.menuVisible=l),"offset-x":-4},{menu:q(()=>[(v(!0),f(j,null,A(e.sizeOption,(l,g)=>I((v(),ue(z,{class:r(e.classes(e.n("list"),[e.size===l,e.n("list--active")])),key:g,onClick:T=>e.clickSize(l)},{default:q(()=>[B(b(l)+b(e.pack.paginationItem)+" / "+b(e.pack.paginationPage),1)]),_:2},1032,["class","onClick"])),[[n]])),128))]),default:q(()=>[w("div",{class:r(e.classes(e.n("size--open"),[e.current<=1||e.disabled,e.n("size--open--disabled")])),onClick:i[5]||(i[5]=(...l)=>e.showMenu&&e.showMenu(...l))},[w("span",null,b(e.size)+b(e.pack.paginationItem)+" / "+b(e.pack.paginationPage),1),y(s,{class:r(e.n("size--open-icon")),"var-pagination-cover":"",name:"menu-down"},null,8,["class"])],2)]),_:1},8,["show"])],2)):H("v-if",!0),e.showQuickJumper&&!e.simple?(v(),f("li",{key:3,class:r(e.classes(e.n("quickly"),[e.disabled,"item--disabled"]))},[B(b(e.pack.paginationJump)+" ",1),y(m,{modelValue:e.inputValue,"onUpdate:modelValue":i[7]||(i[7]=l=>e.inputValue=l),disabled:e.disabled,"var-pagination-cover":"",onBlur:i[8]||(i[8]=l=>e.setPage("quick",e.inputValue,l)),onKeydown:i[9]||(i[9]=R(l=>e.setPage("quick",e.inputValue,l),["enter"]))},null,8,["modelValue","disabled"])],2)):H("v-if",!0),e.totalText?(v(),f("li",{key:4,class:r(e.n("total"))},b(e.totalText),3)):H("v-if",!0)],2)}const D=oe(fe,[["render",ge]]);D.install=function(e){e.component(D.name,D)};export{D as P};
