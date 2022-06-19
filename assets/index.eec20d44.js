import{S as se}from"./index.fc63e63f.js";import{d as H,a as l,b as _,Q as te,_ as V,f as p,i as X,P as b,l as U,J as F,M as T,N as u,m as oe,ar as ae,w as re,o as K,e as le,h as C,F as Y,ad as j,H as w,K as P,ag as m,t as D}from"./elevation.e55d3ca3.js";import{u as ie,a as ce,b as de,d as ue,c as q,e as z,t as L,i as fe}from"./components.42e8d1e1.js";import{e as ve}from"./shared.45a6c8e0.js";import{h as M,c as pe,t as he,f as me,d as ye,e as _e,n as be,r as Ce}from"./elements.b65d83ab.js";import{C as R}from"./index.3c4a9882.js";import{d as ge}from"./index.5d153c96.js";import{u as ke,a as J,_ as Ie,b as Te,c as xe}from"./en-US.267b60da.js";import{a as Ne,b as Be}from"./utils.55f195a2.js";import"./index.b099984f.js";const Q=Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY"),G=Symbol("INDEX_BAR_COUNT_INDEX_ANCHOR_KEY");function Ae(){const{bindChildren:e,childProviders:r}=ie(Q),{length:s}=ce(G);return{length:s,indexAnchors:r,bindIndexAnchors:e}}function Ee(){const{parentProvider:e,bindParent:r}=de(Q),{index:s}=ue(G);if(!e||!r)throw Error('[Varlet] IndexAnchor: You should use this component in "IndexBar"');return{index:s,indexBar:e,bindIndexBar:r}}const $e={index:{type:[Number,String]}};const{n:Se,classes:we}=q("index-anchor"),De=H({name:"VarIndexAnchor",components:{VarSticky:se},inheritAttrs:!1,props:$e,setup(e){const{index:r,indexBar:s,bindIndexBar:d}=Ee(),i=l(0),n=l(!1),a=_(()=>e.index),o=l(null),{active:f,sticky:N,cssMode:B,stickyOffsetTop:y,zIndex:g}=s;return d({index:r,name:a,ownTop:i,setOwnTop:()=>{!o.value||(i.value=o.value.$el?o.value.$el.offsetTop:o.value.offsetTop)},setDisabled:k=>{n.value=k}}),{n:Se,classes:we,name:a,anchorEl:o,active:f,sticky:N,zIndex:g,disabled:n,cssMode:B,stickyOffsetTop:y,Transition:te}}});function ze(e,r,s,d,i,n){return p(),X(ae(e.sticky?"var-sticky":e.Transition),{"offset-top":e.sticky?e.stickyOffsetTop:null,"z-index":e.sticky?e.zIndex:null,disabled:e.disabled&&!e.cssMode,"css-mode":e.cssMode,ref:"anchorEl"},{default:b(()=>[U("div",oe({class:e.n()},e.$attrs),[F(e.$slots,"default",{},()=>[T(u(e.name),1)])],16)]),_:3},8,["offset-top","z-index","disabled","css-mode"])}var Oe=V(De,[["render",ze]]);const Pe={sticky:{type:Boolean,default:!0},stickyOffsetTop:{type:[String,Number],default:0},cssMode:{type:Boolean,default:!1},hideList:{type:Boolean,default:!1},zIndex:{type:[Number,String],default:1},highlightColor:{type:String},duration:{type:[Number,String],default:0},onClick:{type:Function},onChange:{type:Function}};const{n:Le,classes:Me}=q("index-bar"),Re=H({name:"VarIndexBar",props:Pe,setup(e){const{length:r,indexAnchors:s,bindIndexAnchors:d}=Ae(),i=l(""),n=l(null),a=l(null),o=l([]),f=l(),N=_(()=>e.sticky),B=_(()=>e.cssMode),y=_(()=>he(e.stickyOffsetTop)),g=_(()=>e.zIndex);d({active:f,sticky:N,cssMode:B,stickyOffsetTop:y,zIndex:g});const A=t=>{const c=fe(t)?t.name.value:t;c===f.value||c===void 0||(f.value=c,z(e.onChange,c))},E=()=>{const t=me(n.value),c=n.value===window?document.body.scrollHeight:n.value.scrollHeight,{offsetTop:$}=a.value;s.forEach((v,h)=>{const S=v.ownTop.value,I=t-S+y.value-$,ne=h===s.length-1?c:s[h+1].ownTop.value-v.ownTop.value;I>=0&&I<ne&&!i.value&&(h&&!e.cssMode&&s[h-1].setDisabled(!0),v.setDisabled(!1),A(v))})},k=async(t,c)=>{const{offsetTop:$}=a.value;if(c&&z(e.onClick,t),t===f.value)return;const v=s.find(({name:I})=>t===I.value);if(!v)return;const h=v.ownTop.value-y.value+$,S=ye(n.value);i.value=t,A(t),await _e(n.value,{left:S,top:h,animation:ve,duration:L(e.duration)}),be(()=>{i.value=""})},ee=t=>{Ce(()=>k(t))};return re(()=>r.value,async()=>{await M(),s.forEach(({name:t,setOwnTop:c})=>{t.value&&o.value.push(t.value),c()})}),K(async()=>{await M(),n.value=pe(a.value),n.value.addEventListener("scroll",E)}),le(()=>{z(n.value.removeEventListener,"scroll",E)}),{n:Le,classes:Me,barEl:a,active:f,zIndex:g,anchorNameList:o,toNumber:L,scrollTo:ee,anchorClick:k}}}),He=["onClick"];function Ve(e,r,s,d,i,n){return p(),C("div",{class:w(e.n()),ref:"barEl"},[F(e.$slots,"default"),U("ul",{class:w(e.n("anchor-list")),style:P({zIndex:e.toNumber(e.zIndex)+2,display:e.hideList?"none":"block"})},[(p(!0),C(Y,null,j(e.anchorNameList,a=>(p(),C("li",{key:a,class:w(e.classes(e.n("anchor-item"),[e.active===a,e.n("anchor-item--active")])),style:P({color:e.active===a&&e.highlightColor?e.highlightColor:""}),onClick:o=>e.anchorClick(a,!0)},u(a),15,He))),128))],6)],2)}var x=V(Re,[["render",Ve]]);x.install=function(e){e.component(x.name,x)};var Xe={title:"\u6807\u9898",text:"\u6587\u672C"},Ue={title:"Title",text:"Text"};const{add:W,use:Fe,pack:O,packs:sn,merge:tn}=ke(),Ke=e=>{xe(e),Fe(e)};J("zh-CN",Ie);J("en-US",Te);W("zh-CN",Xe);W("en-US",Ue);const on={setup(e){const r=l([]),s=l("#e7edf7"),d=l("#2e67ba");K(()=>{for(let n=0;n<26;n++)r.value.push(String.fromCharCode(65+n))});const i=n=>{console.log(n)};return Ne(Ke),Be(ge,n=>{s.value=n==="darkThemes"?"rgb(41, 42, 45)":"#e7edf7",d.value=n==="darkThemes"?"#3980e8":"#2e67ba"}),(n,a)=>(p(),X(m(x),{onChange:i,duration:"300","sticky-offset-top":"14.4vw"},{default:b(()=>[(p(!0),C(Y,null,j(r.value,o=>(p(),C("div",{key:o},[D(Oe,{index:o,class:"var-index-anchor__example",style:P({background:s.value,color:d.value})},{default:b(()=>[T(u(m(O).title)+" "+u(o),1)]),_:2},1032,["index","style"]),D(m(R),null,{default:b(()=>[T(u(o)+" "+u(m(O).text),1)]),_:2},1024),D(m(R),null,{default:b(()=>[T(u(o)+" "+u(m(O).text),1)]),_:2},1024)]))),128))]),_:1}))}};export{on as default};
