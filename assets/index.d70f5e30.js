import{A as w}from"./AppType.7d77db61.js";import{h as L,r as O}from"./elements.9e22c80f.js";import{c as j,t as T,a as $,A as q}from"./components.8d69e83c.js";import{d as G,a as i,w as J,_ as b,f as M,h as U,G as K,av as Y,aw as Q,E as W,J as r,K as a,n as o,ag as e,N as n,F as X,D as C,ah as Z,ai as ee}from"./vue-router.esm-bundler.e4f2b974.js";import{S as te}from"./index.2f47a6f2.js";import{B as x}from"./index.e812fe0a.js";import{R as oe}from"./index.0f9c5d3c.js";import{d as ae}from"./index.5d153c96.js";import{u as se,a as H,_ as ne,b as ue,c as re}from"./en-US.010614a9.js";import{a as le,b as ce}from"./utils.0fcef4b9.js";import"./index.840580d4.js";import"./index.ae2fa579.js";import"./zIndex.f2cb7fab.js";import"./index.9aa5f002.js";import"./lock.b1713bdb.js";import"./index.8f83d7e2.js";/* empty css               */const me={time:{type:[String,Number],default:0},format:{type:String,default:"HH : mm : ss"},autoStart:{type:Boolean,default:!0},onEnd:{type:Function},onChange:{type:Function}};const{n:ie}=j("countdown"),D=1e3,k=60*D,A=60*k,B=24*A,de=G({name:"VarCountdown",props:me,setup(t){const l=i(0),c=i(!1),v=i(""),h=i(0),p=i(0),s=i({days:0,hours:0,minutes:0,seconds:0,milliseconds:0}),m=f=>{const g=Math.floor(f/B),F=Math.floor(f%B/A),S=Math.floor(f%A/k),_=Math.floor(f%k/D),P=Math.floor(f%D),N={days:g,hours:F,minutes:S,seconds:_,milliseconds:P};s.value=N,$(t.onChange,s.value),v.value=q(t.format,N)},y=()=>{const{time:f,onEnd:g,autoStart:F}=t,S=Date.now();l.value||(l.value=S+T(f));let _=l.value-S;if(_<0&&(_=0),p.value=_,m(_),_===0){$(g);return}(F||c.value)&&(h.value=O(y))},R=()=>{c.value||(c.value=!0,l.value=Date.now()+(p.value||T(t.time)),y())},V=()=>{c.value=!1},E=()=>{l.value=0,c.value=!1,L(h.value),y()};return J(()=>t.time,()=>E(),{immediate:!0}),{showTime:v,timeData:s,n:ie,start:R,pause:V,reset:E}}});function pe(t,l,c,v,h,p){return M(),U("div",{class:W(t.n())},[K(t.$slots,"default",Y(Q(t.timeData)),()=>[r(a(t.showTime),1)])],2)}var d=b(de,[["render",pe]]);d.install=function(t){t.component(d.name,d)};var fe={basicUsage:"\u57FA\u672C\u4F7F\u7528",customFormat:"\u81EA\u5B9A\u4E49\u683C\u5F0F",showMillisecond:"\u663E\u793A\u6BEB\u79D2",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",manualControl:"\u624B\u52A8\u63A7\u5236",format:"DD \u5929 HH \u65F6 mm \u5206 ss \u79D2",startText:"\u5F00\u59CB",pauseText:"\u6682\u505C",resetText:"\u91CD\u7F6E"},_e={basicUsage:"Basic Usage",customFormat:"Custom Format",showMillisecond:"Show Millisecond",customStyle:"Custom Style",manualControl:"Manual Control",format:"DD Day, HH:mm:ss",startText:"Start",pauseText:"Pause",resetText:"Reset"};const{add:z,use:ve,pack:u,packs:Pe,merge:Le}=se(),he=t=>{re(t),ve(t)};H("zh-CN",ne);H("en-US",ue);z("zh-CN",fe);z("en-US",_e);const I=t=>(Z("data-v-2f9e72f6"),t=t(),ee(),t),we={class:"countdown-example-block"},Ce=I(()=>C("span",{class:"countdown-example-colon"},":",-1)),Se={class:"countdown-example-block"},ye=I(()=>C("span",{class:"countdown-example-colon"},":",-1)),ge={class:"countdown-example-block"},Fe={setup(t){const l=i(null),c=i(3e3),v=()=>{te.info("end!")},h=()=>{console.log("change")};return le(he),ce(ae),(p,s)=>(M(),U(X,null,[o(e(w),null,{default:n(()=>[r(a(e(u).basicUsage),1)]),_:1}),o(e(d),{time:"108000000"}),o(e(w),null,{default:n(()=>[r(a(e(u).customFormat),1)]),_:1}),o(e(d),{time:"108000000",format:e(u).format},null,8,["format"]),o(e(w),null,{default:n(()=>[r(a(e(u).showMillisecond),1)]),_:1}),o(e(d),{time:"108000000",format:"HH : mm : ss : SS"}),o(e(w),null,{default:n(()=>[r(a(e(u).customStyle),1)]),_:1}),o(e(d),{time:"108000000"},{default:n(m=>[C("span",we,a(m.hours),1),Ce,C("span",Se,a(m.minutes),1),ye,C("span",ge,a(m.seconds),1)]),_:1}),o(e(w),null,{default:n(()=>[r(a(e(u).manualControl),1)]),_:1}),o(e(d),{time:c.value,ref_key:"countdown",ref:l,"auto-start":!1,format:"ss : SSS",onEnd:v,onChange:h},null,8,["time"]),o(e(oe),{justify:"space-between",align:"center",style:{"margin-top":"10px"}},{default:n(()=>[o(e(x),{type:"primary",onClick:s[0]||(s[0]=m=>p.$refs.countdown.start())},{default:n(()=>[r(a(e(u).startText),1)]),_:1}),o(e(x),{onClick:s[1]||(s[1]=m=>p.$refs.countdown.pause())},{default:n(()=>[r(a(e(u).pauseText),1)]),_:1}),o(e(x),{onClick:s[2]||(s[2]=m=>p.$refs.countdown.reset())},{default:n(()=>[r(a(e(u).resetText),1)]),_:1})]),_:1})],64))}};var Oe=b(Fe,[["__scopeId","data-v-2f9e72f6"]]);export{Oe as default};
