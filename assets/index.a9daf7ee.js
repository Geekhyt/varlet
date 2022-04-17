import{a as T}from"./provide.4b9efbeb.js";import{c as P}from"./components.5cba9644.js";import{_ as C}from"./elevation.c9ea9f5a.js";import{d as R,b as y,o as F,c as M,G as z,p as G,q as O,r as V,e as n,i as r,j as t,F as L,Z as j,_ as q,m as s,t as u,a as E}from"./vendor.49f89f0d.js";import{I as Y}from"./index.f3db583b.js";import{S as Z}from"./index.260936f7.js";import{O as H}from"./index.b42e118c.js";import{C as J}from"./index.7f65cb1b.js";import{C as K}from"./index.ccee992d.js";import{R as Q,a as W}from"./index.9eec592e.js";import{B as X}from"./index.584c5eac.js";import{S as $}from"./index.a2fcbac4.js";import{S as ee}from"./index.de8f4ac3.js";import{U as ae}from"./index.44d5d605.js";import{C as oe}from"./index.e0c8f538.js";import{R as re}from"./index.92a2a973.js";import{A as le}from"./AppType.d4c1c6c3.js";import{d as te}from"./index.079ade67.js";import{w as ne,a as se}from"./utils.3a4595f4.js";import{u as ue,a as D,_ as me,b as de,c as pe}from"./en-US.628e0d34.js";import"./index.07bfe65b.js";import"./elements.b75de382.js";import"./index.44744767.js";import"./zIndex.8c13fd4c.js";import"./index.48ee5316.js";import"./index.c3ac679f.js";import"./index.54307cbc.js";import"./index.18e6ea71.js";import"./index.43dd9647.js";import"./lock.c5636ec8.js";import"./index.a2a0d768.js";import"./index.ecfaac6b.js";import"./provide.b2a36e46.js";import"./index.f1624422.js";const ce={disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}};const{n:ie}=P("form"),fe=R({name:"VarForm",props:ce,setup(l){const o=y(()=>l.disabled),i=y(()=>l.readonly),{formItems:e,bindFormItems:f}=T(),p=async()=>(await Promise.all(e.map(({validate:c})=>c()))).every(c=>c===!0),k=()=>e.forEach(({reset:d})=>d()),_=()=>e.forEach(({resetValidation:d})=>d());return f({disabled:o,readonly:i}),{n:ie,validate:p,reset:k,resetValidation:_}}});function ge(l,o,i,e,f,p){return F(),M("div",{class:G(l.n())},[z(l.$slots,"default")],2)}var v=C(fe,[["render",ge]]);v.install=function(l){l.component(v.name,v)};var ke={example:"\u8868\u5355\u793A\u4F8B",username:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",usernameMessage:"\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A",password:"\u8BF7\u8F93\u5165\u5BC6\u7801",passwordMessage:"\u8BF7\u8F93\u5165\u5BC6\u7801",department:"\u8BF7\u9009\u62E9\u90E8\u95E8",departmentMessage:"\u5FC5\u987B\u9009\u4E00\u4E2A\u90E8\u95E8",eat:"\u5403\u996D",sleep:"\u7761\u89C9",play:"\u6253\u6E38\u620F",departmentUnit:"\u90E8",group:"\u8BF7\u9009\u62E9\u7EC4\u7EC7",groupMessage:"\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u7EC4\u7EC7",groupUnit:"\u7EC4",genderMessage:"\u5FC5\u987B\u9009\u62E9\u4E00\u4E2A\u6027\u522B",male:"\u7537",female:"\u5973",rateMessage:"\u5FC5\u987B\u5927\u4E8E2",likeMessage:"\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u7231\u597D",licenseMessage:"\u60A8\u5FC5\u987B\u5F00\u542F",countMessage:"\u5FC5\u987B\u5927\u4E8E10",rangeMessage:"\u5FC5\u987B\u5927\u4E8E10",filesMessage:"\u81F3\u5C11\u4E0A\u4F20\u4E00\u5F20\u56FE\u7247",controller:"\u8868\u5355\u63A7\u5236",reset:"\u6E05\u7A7A\u8868\u5355",resetValidation:"\u6E05\u7A7A\u9A8C\u8BC1",validate:"\u89E6\u53D1\u9A8C\u8BC1",disabled:"\u8868\u5355\u7981\u7528",readonly:"\u8868\u5355\u53EA\u8BFB"},_e={example:"Form Example",username:"Please input username",usernameMessage:"The username cannot be empty",password:"Please input password",passwordMessage:"The password cannot be empty",department:"Please select department",departmentMessage:"The select cannot be empty",eat:"Eat",sleep:"Sleep",play:"Play game",departmentUnit:" department",group:"Please select group",groupMessage:"The select cannot be empty",groupUnit:" group",genderMessage:"The gender cannot be empty",male:"Male",female:"Female",rateMessage:"It has to be greater than 2",likeMessage:"The select cannot be empty",licenseMessage:"You must turn on",countMessage:"It has to be greater than 10",rangeMessage:"It has to be greater than 10",filesMessage:"Upload at least one picture",controller:"Form control",reset:"Empty form",resetValidation:"Empty the validation",validate:"Trigger validation",disabled:"Form disabled",readonly:"Form readonly"};const{add:U,use:ve,pack:be,packs:sa,merge:ua}=ue(),Ve=l=>{pe(l),ve(l)};D("zh-CN",me);D("en-US",de);U("zh-CN",ke);U("en-US",_e);const Ee={name:"FormExample",components:{VarForm:v,VarInput:Y,VarSelect:Z,VarCheckboxGroup:J,VarCheckbox:K,VarRadioGroup:Q,VarRadio:W,VarOption:H,VarButton:X,VarSlider:ee,VarSwitch:$,VarUploader:ae,VarCounter:oe,VarRate:re,AppType:le},setup(){const l=O({username:"",password:"",department:"",gender:void 0,license:!1,range:0,count:0,group:[],score:0,like:[],files:[]}),o=V(null),i=V(!1),e=V(!1);return ne(f=>{var p;Ve(f),(p=o.value)==null||p.reset()}),se(te),{pack:be,form:o,formData:l,disabled:i,readonly:e}}},ye=l=>(j("data-v-42b55013"),l=l(),q(),l),Ce={class:"row mb"},Fe={class:"row mb"},Me=ye(()=>E("div",{class:"space"},null,-1));function De(l,o,i,e,f,p){const k=n("app-type"),_=n("var-input"),m=n("var-option"),d=n("var-select"),c=n("var-radio"),B=n("var-radio-group"),b=n("var-checkbox"),h=n("var-checkbox-group"),w=n("var-rate"),x=n("var-switch"),A=n("var-counter"),S=n("var-slider"),I=n("var-uploader"),N=n("var-form"),g=n("var-button");return F(),M(L,null,[r(k,null,{default:t(()=>[s(u(e.pack.example),1)]),_:1}),r(N,{ref:"form",disabled:e.disabled,readonly:e.readonly},{default:t(()=>[r(_,{class:"mb",placeholder:e.pack.username,rules:[a=>!!a||e.pack.usernameMessage],modelValue:e.formData.username,"onUpdate:modelValue":o[0]||(o[0]=a=>e.formData.username=a)},null,8,["placeholder","rules","modelValue"]),r(_,{class:"mb",type:"password",placeholder:e.pack.password,rules:[a=>!!a||e.pack.passwordMessage],modelValue:e.formData.password,"onUpdate:modelValue":o[1]||(o[1]=a=>e.formData.password=a)},null,8,["placeholder","rules","modelValue"]),r(d,{class:"mb",placeholder:e.pack.department,rules:[a=>!!a||e.pack.departmentMessage],modelValue:e.formData.department,"onUpdate:modelValue":o[2]||(o[2]=a=>e.formData.department=a)},{default:t(()=>[r(m,{label:`${e.pack.eat}${e.pack.departmentUnit}`},null,8,["label"]),r(m,{label:`${e.pack.sleep}${e.pack.departmentUnit}`},null,8,["label"]),r(m,{label:`${e.pack.play}${e.pack.departmentUnit}`},null,8,["label"])]),_:1},8,["placeholder","rules","modelValue"]),r(d,{class:"mb",multiple:"",placeholder:e.pack.group,rules:[a=>a.length>=1||e.pack.groupMessage],modelValue:e.formData.group,"onUpdate:modelValue":o[3]||(o[3]=a=>e.formData.group=a)},{default:t(()=>[r(m,{label:`${e.pack.eat}${e.pack.groupUnit}`},null,8,["label"]),r(m,{label:`${e.pack.sleep}${e.pack.groupUnit}`},null,8,["label"]),r(m,{label:`${e.pack.play}${e.pack.groupUnit}`},null,8,["label"])]),_:1},8,["placeholder","rules","modelValue"]),r(B,{class:"mb",rules:[a=>!!a||e.pack.genderMessage],modelValue:e.formData.gender,"onUpdate:modelValue":o[4]||(o[4]=a=>e.formData.gender=a)},{default:t(()=>[r(c,{"checked-value":1},{default:t(()=>[s(u(e.pack.male),1)]),_:1}),r(c,{"checked-value":2},{default:t(()=>[s(u(e.pack.female),1)]),_:1})]),_:1},8,["rules","modelValue"]),r(h,{class:"mb",rules:[a=>a.length>0||e.pack.likeMessage],modelValue:e.formData.like,"onUpdate:modelValue":o[5]||(o[5]=a=>e.formData.like=a)},{default:t(()=>[r(b,{"checked-value":1},{default:t(()=>[s(u(e.pack.eat),1)]),_:1}),r(b,{"checked-value":2},{default:t(()=>[s(u(e.pack.sleep),1)]),_:1}),r(b,{"checked-value":3},{default:t(()=>[s(u(e.pack.play),1)]),_:1})]),_:1},8,["rules","modelValue"]),r(w,{class:"mb",rules:[a=>a>=3||e.pack.rateMessage],modelValue:e.formData.score,"onUpdate:modelValue":o[6]||(o[6]=a=>e.formData.score=a)},null,8,["rules","modelValue"]),E("div",Ce,[r(x,{rules:[a=>!!a||e.pack.licenseMessage],modelValue:e.formData.license,"onUpdate:modelValue":o[7]||(o[7]=a=>e.formData.license=a)},null,8,["rules","modelValue"])]),E("div",Fe,[r(A,{rules:[a=>a>10||e.pack.countMessage],modelValue:e.formData.count,"onUpdate:modelValue":o[8]||(o[8]=a=>e.formData.count=a)},null,8,["rules","modelValue"])]),r(S,{class:"mb",rules:[a=>a>10||e.pack.rangeMessage],modelValue:e.formData.range,"onUpdate:modelValue":o[9]||(o[9]=a=>e.formData.range=a)},null,8,["rules","modelValue"]),r(I,{class:"mb",rules:[a=>a.length>=1||e.pack.filesMessage],modelValue:e.formData.files,"onUpdate:modelValue":o[10]||(o[10]=a=>e.formData.files=a)},null,8,["rules","modelValue"])]),_:1},8,["disabled","readonly"]),r(k,null,{default:t(()=>[s(u(e.pack.controller),1)]),_:1}),r(g,{class:"mt",block:"",type:"danger",onClick:o[11]||(o[11]=a=>e.form.reset())},{default:t(()=>[s(u(e.pack.reset),1)]),_:1}),r(g,{class:"mt",block:"",type:"warning",onClick:o[12]||(o[12]=a=>e.form.resetValidation())},{default:t(()=>[s(u(e.pack.resetValidation),1)]),_:1}),r(g,{class:"mt",block:"",type:"success",onClick:o[13]||(o[13]=a=>e.form.validate())},{default:t(()=>[s(u(e.pack.validate),1)]),_:1}),r(g,{class:"mt",block:"",type:"info",onClick:o[14]||(o[14]=a=>e.disabled=!e.disabled)},{default:t(()=>[s(u(e.pack.disabled),1)]),_:1}),r(g,{class:"mt",block:"",type:"primary",onClick:o[15]||(o[15]=a=>e.readonly=!e.readonly)},{default:t(()=>[s(u(e.pack.readonly),1)]),_:1}),Me],64)}var ma=C(Ee,[["render",De],["__scopeId","data-v-42b55013"]]);export{ma as default};
