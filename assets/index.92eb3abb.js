import{I as h}from"./index.b099984f.js";import{c as B,t as $}from"./components.42e8d1e1.js";import{d as b,b as u,_ as C,s as S,f as a,h as p,t as _,P as V,j as N,v as k,l as w,i as I,N as P,m as z,Q as D,J as j,H as A}from"./elevation.e55d3ca3.js";function E(t){return["default","primary","info","success","warning","danger"].includes(t)}function H(t){return["right-top","right-bottom","left-top","left-bottom"].includes(t)}const J={type:{type:String,default:"default",validator:E},hidden:{type:Boolean,default:!1},dot:{type:Boolean,default:!1},value:{type:[String,Number],default:0},maxValue:{type:[String,Number]},color:{type:String},position:{type:String,default:"right-top",validator:H},icon:{type:String}};const{n:o,classes:Q}=B("badge"),T=b({name:"VarBadge",components:{VarIcon:h},inheritAttrs:!1,props:J,setup(t,{slots:r}){const l=u(()=>{const{type:n,position:e,dot:s,icon:f}=t,m=r.default&&`${o("position")} ${o(`--${e}`)}`,g=s?o("dot"):null,v=d(),y=f?o("icon"):null;return[o(`--${n}`),m,g,v,y]}),c=u(()=>{const{dot:n,value:e,maxValue:s}=t;return n?"":e!==void 0&&s!==void 0&&$(e)>s?`${s}+`:e}),d=()=>{const{position:n,dot:e}=t;if(e&&n.includes("right"))return o("dot--right");if(e&&n.includes("left"))return o("dot--left")};return{n:o,classes:Q,values:c,contentClass:l}}}),q={key:1};function F(t,r,l,c,d,n){const e=S("var-icon");return a(),p("div",{class:A(t.classes(t.n(),"var--box"))},[_(D,{name:"var-badge-fade"},{default:V(()=>[N(w("span",z(t.$attrs,{class:t.classes(t.n("content"),...t.contentClass),style:{background:t.color}}),[t.icon&&!t.dot?(a(),I(e,{key:0,name:t.icon,size:"10px"},null,8,["name"])):(a(),p("span",q,P(t.values),1))],16),[[k,!t.hidden]])]),_:1}),j(t.$slots,"default")],2)}var i=C(T,[["render",F]]);i.install=function(t){t.component(i.name,i)};export{i as B};
