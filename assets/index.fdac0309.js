import{a as b}from"./elements.33cd14f4.js";import{d as z,Z as D,_ as B,f as u,h as r,N as l,O as U,j as f,R as m,M as c,F as S,ak as M,a as h,q as t,S as s,an as a,P as n,Q as i}from"./vue-router.esm-bundler.b2f96f29.js";import{c as E}from"./components.cddaf618.js";import{B as T}from"./index.8fd82cb1.js";import{A as g}from"./AppType.356df9a1.js";import{d as $}from"./index.8b4f1b33.js";import{a as H,b as L}from"./utils.cb2600d0.js";import{u as R,a as w,_ as V,b as W,c as I}from"./index.6238f624.js";import"./index.7205fcb6.js";import"./index.ee1e71c4.js";/* empty css               */import"./index.229c6558.js";const Z={loading:{type:Boolean,default:!0},title:{type:Boolean,default:!1},card:{type:Boolean,default:!1},avatar:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},fullscreenZIndex:{type:[Number,String],default:100},titleWidth:{type:[Number,String]},cardHeight:{type:[Number,String]},avatarSize:{type:[Number,String]},rows:{type:[Number,String],default:3},rowsWidth:{type:Array,default:()=>[]}},{n:j,classes:q}=E("skeleton"),O=z({name:"VarSkeleton",props:Z,setup(){return{n:j,classes:q,toSizeUnit:b,toNumber:D}}});function P(e,p,v,y,N,C){return u(),r("div",{class:l(e.classes("var--box",e.n()))},[e.loading?f("v-if",!0):(u(),r("div",{key:0,class:l(e.n("data"))},[U(e.$slots,"default")],2)),e.loading&&!e.fullscreen?(u(),r("div",{key:1,class:l(e.n("content"))},[e.card?(u(),r("div",{key:0,class:l(e.n("card")),style:m({height:e.toSizeUnit(e.cardHeight)})},[c("div",{class:l(e.n("--animation"))},null,2)],6)):f("v-if",!0),e.avatar||e.title||e.toNumber(e.rows)>0?(u(),r("div",{key:1,class:l(e.n("article"))},[e.avatar?(u(),r("div",{key:0,class:l(e.n("avatar")),style:m({width:e.toSizeUnit(e.avatarSize),height:e.toSizeUnit(e.avatarSize)})},[c("div",{class:l(e.n("--animation"))},null,2)],6)):f("v-if",!0),e.title||e.toNumber(e.rows)>0?(u(),r("div",{key:1,class:l(e.n("section"))},[e.title?(u(),r("div",{key:0,class:l(e.n("title")),style:m({width:e.toSizeUnit(e.titleWidth)})},[c("div",{class:l(e.n("--animation"))},null,2)],6)):f("v-if",!0),(u(!0),r(S,null,M(e.toNumber(e.rows),(A,F)=>(u(),r("div",{class:l(e.n("row")),key:A,style:m({width:e.toSizeUnit(e.rowsWidth[F])})},[c("div",{class:l(e.n("--animation"))},null,2)],6))),128))],2)):f("v-if",!0)],2)):f("v-if",!0)],2)):f("v-if",!0),e.loading&&e.fullscreen?(u(),r("div",{key:2,class:l(e.n("fullscreen")),style:m({zIndex:e.toNumber(e.fullscreenZIndex)})},[c("div",{class:l(e.n("--animation"))},null,2)],6)):f("v-if",!0)],2)}const d=B(O,[["render",P]]);d.install=function(e){e.component(d.name,d)};const Q={basicUsage:"\u57FA\u672C\u4F7F\u7528",displayTitle:"\u663E\u793A\u6807\u9898",customRowsHeight:"\u81EA\u5B9A\u4E49\u6BB5\u843D\u9AD8\u5EA6",displayAvatar:"\u663E\u793A\u5934\u50CF",displayCard:"\u663E\u793A\u5361\u7247",fullscreenMode:"\u5168\u5C4F\u6A21\u5F0F",toggleFullscreenMode:"\u5207\u6362\u5168\u5C4F\u6A21\u5F0F",loadingData:"\u52A0\u8F7D\u7684\u6570\u636E"},G={basicUsage:"Basic Usage",displayTitle:"Display Title",customRowsHeight:"Custom Row Heights",displayAvatar:"Display Avatar",displayCard:"Display Card",fullscreenMode:"Fullscreen Mode",toggleFullscreenMode:"Toggle Fullscreen Mode",loadingData:"Loading Data"},{add:k,use:J,pack:o,packs:ue,merge:re}=R(),K=e=>{I(e),J(e)};w("zh-CN",V);w("en-US",W);k("zh-CN",Q);k("en-US",G);const de={setup(e){const p=h(!0),v=h(!1),y=()=>{v.value=!0,setTimeout(()=>{v.value=!1},2e3)};return H(K),L($),(N,C)=>(u(),r(S,null,[t(a(g),null,{default:s(()=>[n(i(a(o).basicUsage),1)]),_:1}),t(a(d),{loading:p.value},{default:s(()=>[n(i(a(o).loadingData),1)]),_:1},8,["loading"]),t(a(g),null,{default:s(()=>[n(i(a(o).displayTitle),1)]),_:1}),t(a(d),{title:"",loading:p.value},{default:s(()=>[n(i(a(o).loadingData),1)]),_:1},8,["loading"]),t(a(g),null,{default:s(()=>[n(i(a(o).customRowsHeight),1)]),_:1}),t(a(d),{title:"",rows:3,loading:p.value,"rows-width":["200px","100px","50px"]},{default:s(()=>[n(i(a(o).loadingData),1)]),_:1},8,["loading"]),t(a(g),null,{default:s(()=>[n(i(a(o).displayAvatar),1)]),_:1}),t(a(d),{title:"",avatar:"",rows:3,loading:p.value},{default:s(()=>[n(i(a(o).loadingData),1)]),_:1},8,["loading"]),t(a(g),null,{default:s(()=>[n(i(a(o).displayCard),1)]),_:1}),t(a(d),{title:"",avatar:"",card:"",rows:3,loading:p.value},{default:s(()=>[n(i(a(o).loadingData),1)]),_:1},8,["loading"]),t(a(g),null,{default:s(()=>[n(i(a(o).fullscreenMode),1)]),_:1}),t(a(T),{type:"danger",class:"button",onClick:y},{default:s(()=>[n(i(a(o).toggleFullscreenMode),1)]),_:1}),t(a(d),{fullscreen:"",loading:v.value},null,8,["loading"])],64))}};export{de as default};
