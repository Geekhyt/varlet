var N=Object.defineProperty;var u=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var p=(n,t,e)=>t in n?N(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,d=(n,t)=>{for(var e in t||(t={}))m.call(t,e)&&p(n,e,t[e]);if(u)for(var e of u(t))h.call(t,e)&&p(n,e,t[e]);return n};var w=(n,t)=>{var e={};for(var r in n)m.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(n!=null&&u)for(var r of u(n))t.indexOf(r)<0&&h.call(n,r)&&(e[r]=n[r]);return e};import{a as g,o as f,D as v,E as O,G as I,B as l,r as L,am as A,b as P,an as x,n as y,a3 as B,e as $,ao as V,U as M}from"./elevation.e55d3ca3.js";const S=n=>typeof n=="string",U=n=>typeof n=="boolean",k=n=>typeof n=="number",z=n=>Object.prototype.toString.call(n)==="[object Object]",F=n=>typeof n=="object"&&n!==null,C=n=>Array.isArray(n),G=n=>n?/^(http)|(\.*\/)/.test(n):!1,H=n=>n==null||n===""||Array.isArray(n)&&!n.length,R=n=>n==null?0:S(n)?(n=parseFloat(n),n=Number.isNaN(n)?0:n,n):U(n)?Number(n):n,j=(n,t)=>{if(n.length){const e=n.indexOf(t);if(e>-1)return n.splice(e,1)}},Z=(n,t=200)=>{let e,r=0;return function o(...s){const i=Date.now(),a=i-r;r||(r=i),e&&window.clearTimeout(e),a>=t?(n.apply(this,s),r=i):e=window.setTimeout(()=>{o.apply(this,s)},t-a)}},J=()=>typeof window!="undefined",Q=n=>[...new Set(n)],X=n=>n.replace(/([A-Z])/g," $1").trim().split(" ").join("-").toLowerCase();function Y(n,t){return Array.isArray(t)?t.reduce((e,r)=>(e[r]=n[r],e),{}):n[t]}function W(n){const t=B(n),e=document.createElement("div");return document.body.appendChild(e),{instance:t.mount(e),unmount(){t.unmount(),document.body.removeChild(e)}}}function K(n,t={},e={}){const r={setup(){return()=>V(n,d(d({},t),e))}},{unmount:o}=W(r);return{unmountInstance:o}}function q(n){const t=[],e=r=>{if(r!=null&&r.component){e(r==null?void 0:r.component.subTree);return}Array.isArray(r==null?void 0:r.children)&&r.children.forEach(o=>{M(o)&&(t.push(o),e(o))})};return e(n),t}function T(n){const t=L([]),e=l(),r=()=>{const a=q(e.subTree);t.sort((c,b)=>a.indexOf(c.vnode)-a.indexOf(b.vnode))};return A(n,{collect:a=>{t.push(a),r()},clear:a=>{j(t,a)},instances:t}),{length:P(()=>t.length)}}function nn(n){if(!E(n))return{index:null};const t=x(n),{collect:e,clear:r,instances:o}=t,s=l();return f(()=>{y().then(()=>e(s))}),v(()=>{y().then(()=>r(s))}),{index:P(()=>o.indexOf(s))}}function tn(n){const t=[],e=s=>{t.push(s)},r=s=>{j(t,s)};return{childProviders:t,bindChildren:s=>{A(n,d({collect:e,clear:r},s))}}}function en(n){if(!E(n))return{parentProvider:null,bindParent:null};const i=x(n),{collect:e,clear:r}=i;return{parentProvider:w(i,["collect","clear"]),bindParent:a=>{f(()=>e(a)),$(()=>r(a))}}}function E(n){const t=l();return n in t.provides}function rn(){const n=g(""),t=async(o,s,i)=>!C(o)||!o.length?!0:!(await Promise.all(o.map(c=>c(s,i)))).some(c=>c!==!0?(n.value=String(c),!0):!1);return{errorMessage:n,validate:t,resetValidation:()=>{n.value=""},validateWithTrigger:async(o,s,i,a,c)=>{o.includes(s)&&await t(i,a,c)&&(n.value="")}}}function on(n){f(()=>{window.addEventListener("hashchange",n),window.addEventListener("popstate",n)}),v(()=>{window.removeEventListener("hashchange",n),window.removeEventListener("popstate",n)})}function sn(){const n=g(!1);return O(()=>{n.value=!1}),I(()=>{n.value=!0}),{disabled:n}}function an(n){const t=l();t&&Object.assign(t.proxy,n)}function cn(n){const t=`var-${n}`;return{n:o=>o?o.startsWith("--")?`${t}${o}`:`${t}__${o}`:t,classes:(...o)=>o.map(s=>{if(C(s)){const[i,a,c=null]=s;return i?a:c}return s})}}function un(n,...t){if(n)return n(...t)}export{T as a,en as b,cn as c,nn as d,un as e,k as f,S as g,J as h,z as i,C as j,X as k,sn as l,K as m,on as n,G as o,Y as p,an as q,Z as r,F as s,R as t,tn as u,U as v,rn as w,Q as x,H as y,j as z};
