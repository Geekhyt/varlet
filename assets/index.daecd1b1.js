import{I as Qe}from"./index.6428d33d.js";import{F as je,u as _e}from"./provide.914447fc.js";import{R as xe}from"./index.6e927d89.js";import{d as en,r as nn,b as qe,y as tn,e as Ve,f as rn,o as sn,c as on,a as Le,w as Ce,i as Se,p as le,n as be,a2 as un,H as ln,z as fn}from"./vendor.49f89f0d.js";import{b as an,d as W,t as k,c as cn}from"./components.57927f97.js";import{t as dn}from"./elements.600984cd.js";import{_ as hn}from"./elevation.229458c1.js";var ie=9e15,K=1e9,ke="0123456789abcdef",ae="2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",ce="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",Me={precision:20,rounding:4,modulo:1,toExpNeg:-7,toExpPos:21,minE:-ie,maxE:ie,crypto:!1},Re,y,N=!0,he="[DecimalError] ",Y=he+"Invalid argument: ",Ze=he+"Precision limit exceeded",He=he+"crypto unavailable",$e="[object Decimal]",q=Math.floor,D=Math.pow,mn=/^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,pn=/^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,gn=/^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,We=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,Z=1e7,w=7,wn=9007199254740991,vn=ae.length-1,Ie=ce.length-1,h={toStringTag:$e};h.absoluteValue=h.abs=function(){var e=new this.constructor(this);return e.s<0&&(e.s=1),g(e)};h.ceil=function(){return g(new this.constructor(this),this.e+1,2)};h.clampedTo=h.clamp=function(e,n){var i,t=this,r=t.constructor;if(e=new r(e),n=new r(n),!e.s||!n.s)return new r(NaN);if(e.gt(n))throw Error(Y+n);return i=t.cmp(e),i<0?e:t.cmp(n)>0?n:new r(t)};h.comparedTo=h.cmp=function(e){var n,i,t,r,s=this,o=s.d,u=(e=new s.constructor(e)).d,f=s.s,l=e.s;if(!o||!u)return!f||!l?NaN:f!==l?f:o===u?0:!o^f<0?1:-1;if(!o[0]||!u[0])return o[0]?f:u[0]?-l:0;if(f!==l)return f;if(s.e!==e.e)return s.e>e.e^f<0?1:-1;for(t=o.length,r=u.length,n=0,i=t<r?t:r;n<i;++n)if(o[n]!==u[n])return o[n]>u[n]^f<0?1:-1;return t===r?0:t>r^f<0?1:-1};h.cosine=h.cos=function(){var e,n,i=this,t=i.constructor;return i.d?i.d[0]?(e=t.precision,n=t.rounding,t.precision=e+Math.max(i.e,i.sd())+w,t.rounding=1,i=Nn(t,Ye(t,i)),t.precision=e,t.rounding=n,g(y==2||y==3?i.neg():i,e,n,!0)):new t(1):new t(NaN)};h.cubeRoot=h.cbrt=function(){var e,n,i,t,r,s,o,u,f,l,a=this,c=a.constructor;if(!a.isFinite()||a.isZero())return new c(a);for(N=!1,s=a.s*D(a.s*a,1/3),!s||Math.abs(s)==1/0?(i=F(a.d),e=a.e,(s=(e-i.length+1)%3)&&(i+=s==1||s==-2?"0":"00"),s=D(i,1/3),e=q((e+1)/3)-(e%3==(e<0?-1:2)),s==1/0?i="5e"+e:(i=s.toExponential(),i=i.slice(0,i.indexOf("e")+1)+e),t=new c(i),t.s=a.s):t=new c(s.toString()),o=(e=c.precision)+3;;)if(u=t,f=u.times(u).times(u),l=f.plus(a),t=S(l.plus(a).times(u),l.plus(f),o+2,1),F(u.d).slice(0,o)===(i=F(t.d)).slice(0,o))if(i=i.slice(o-3,o+1),i=="9999"||!r&&i=="4999"){if(!r&&(g(u,e+1,0),u.times(u).times(u).eq(a))){t=u;break}o+=4,r=1}else{(!+i||!+i.slice(1)&&i.charAt(0)=="5")&&(g(t,e+1,1),n=!t.times(t).times(t).eq(a));break}return N=!0,g(t,e,c.rounding,n)};h.decimalPlaces=h.dp=function(){var e,n=this.d,i=NaN;if(n){if(e=n.length-1,i=(e-q(this.e/w))*w,e=n[e],e)for(;e%10==0;e/=10)i--;i<0&&(i=0)}return i};h.dividedBy=h.div=function(e){return S(this,new this.constructor(e))};h.dividedToIntegerBy=h.divToInt=function(e){var n=this,i=n.constructor;return g(S(n,new i(e),0,1,1),i.precision,i.rounding)};h.equals=h.eq=function(e){return this.cmp(e)===0};h.floor=function(){return g(new this.constructor(this),this.e+1,3)};h.greaterThan=h.gt=function(e){return this.cmp(e)>0};h.greaterThanOrEqualTo=h.gte=function(e){var n=this.cmp(e);return n==1||n===0};h.hyperbolicCosine=h.cosh=function(){var e,n,i,t,r,s=this,o=s.constructor,u=new o(1);if(!s.isFinite())return new o(s.s?1/0:NaN);if(s.isZero())return u;i=o.precision,t=o.rounding,o.precision=i+Math.max(s.e,s.sd())+4,o.rounding=1,r=s.d.length,r<32?(e=Math.ceil(r/3),n=(1/pe(4,e)).toString()):(e=16,n="2.3283064365386962890625e-10"),s=te(o,1,s.times(n),new o(1),!0);for(var f,l=e,a=new o(8);l--;)f=s.times(s),s=u.minus(f.times(a.minus(f.times(a))));return g(s,o.precision=i,o.rounding=t,!0)};h.hyperbolicSine=h.sinh=function(){var e,n,i,t,r=this,s=r.constructor;if(!r.isFinite()||r.isZero())return new s(r);if(n=s.precision,i=s.rounding,s.precision=n+Math.max(r.e,r.sd())+4,s.rounding=1,t=r.d.length,t<3)r=te(s,2,r,r,!0);else{e=1.4*Math.sqrt(t),e=e>16?16:e|0,r=r.times(1/pe(5,e)),r=te(s,2,r,r,!0);for(var o,u=new s(5),f=new s(16),l=new s(20);e--;)o=r.times(r),r=r.times(u.plus(o.times(f.times(o).plus(l))))}return s.precision=n,s.rounding=i,g(r,n,i,!0)};h.hyperbolicTangent=h.tanh=function(){var e,n,i=this,t=i.constructor;return i.isFinite()?i.isZero()?new t(i):(e=t.precision,n=t.rounding,t.precision=e+7,t.rounding=1,S(i.sinh(),i.cosh(),t.precision=e,t.rounding=n)):new t(i.s)};h.inverseCosine=h.acos=function(){var e,n=this,i=n.constructor,t=n.abs().cmp(1),r=i.precision,s=i.rounding;return t!==-1?t===0?n.isNeg()?R(i,r,s):new i(0):new i(NaN):n.isZero()?R(i,r+4,s).times(.5):(i.precision=r+6,i.rounding=1,n=n.asin(),e=R(i,r+4,s).times(.5),i.precision=r,i.rounding=s,e.minus(n))};h.inverseHyperbolicCosine=h.acosh=function(){var e,n,i=this,t=i.constructor;return i.lte(1)?new t(i.eq(1)?0:NaN):i.isFinite()?(e=t.precision,n=t.rounding,t.precision=e+Math.max(Math.abs(i.e),i.sd())+4,t.rounding=1,N=!1,i=i.times(i).minus(1).sqrt().plus(i),N=!0,t.precision=e,t.rounding=n,i.ln()):new t(i)};h.inverseHyperbolicSine=h.asinh=function(){var e,n,i=this,t=i.constructor;return!i.isFinite()||i.isZero()?new t(i):(e=t.precision,n=t.rounding,t.precision=e+2*Math.max(Math.abs(i.e),i.sd())+6,t.rounding=1,N=!1,i=i.times(i).plus(1).sqrt().plus(i),N=!0,t.precision=e,t.rounding=n,i.ln())};h.inverseHyperbolicTangent=h.atanh=function(){var e,n,i,t,r=this,s=r.constructor;return r.isFinite()?r.e>=0?new s(r.abs().eq(1)?r.s/0:r.isZero()?r:NaN):(e=s.precision,n=s.rounding,t=r.sd(),Math.max(t,e)<2*-r.e-1?g(new s(r),e,n,!0):(s.precision=i=t-r.e,r=S(r.plus(1),new s(1).minus(r),i+e,1),s.precision=e+4,s.rounding=1,r=r.ln(),s.precision=e,s.rounding=n,r.times(.5))):new s(NaN)};h.inverseSine=h.asin=function(){var e,n,i,t,r=this,s=r.constructor;return r.isZero()?new s(r):(n=r.abs().cmp(1),i=s.precision,t=s.rounding,n!==-1?n===0?(e=R(s,i+4,t).times(.5),e.s=r.s,e):new s(NaN):(s.precision=i+6,s.rounding=1,r=r.div(new s(1).minus(r.times(r)).sqrt().plus(1)).atan(),s.precision=i,s.rounding=t,r.times(2)))};h.inverseTangent=h.atan=function(){var e,n,i,t,r,s,o,u,f,l=this,a=l.constructor,c=a.precision,d=a.rounding;if(l.isFinite()){if(l.isZero())return new a(l);if(l.abs().eq(1)&&c+4<=Ie)return o=R(a,c+4,d).times(.25),o.s=l.s,o}else{if(!l.s)return new a(NaN);if(c+4<=Ie)return o=R(a,c+4,d).times(.5),o.s=l.s,o}for(a.precision=u=c+10,a.rounding=1,i=Math.min(28,u/w+2|0),e=i;e;--e)l=l.div(l.times(l).plus(1).sqrt().plus(1));for(N=!1,n=Math.ceil(u/w),t=1,f=l.times(l),o=new a(l),r=l;e!==-1;)if(r=r.times(f),s=o.minus(r.div(t+=2)),r=r.times(f),o=s.plus(r.div(t+=2)),o.d[n]!==void 0)for(e=n;o.d[e]===s.d[e]&&e--;);return i&&(o=o.times(2<<i-1)),N=!0,g(o,a.precision=c,a.rounding=d,!0)};h.isFinite=function(){return!!this.d};h.isInteger=h.isInt=function(){return!!this.d&&q(this.e/w)>this.d.length-2};h.isNaN=function(){return!this.s};h.isNegative=h.isNeg=function(){return this.s<0};h.isPositive=h.isPos=function(){return this.s>0};h.isZero=function(){return!!this.d&&this.d[0]===0};h.lessThan=h.lt=function(e){return this.cmp(e)<0};h.lessThanOrEqualTo=h.lte=function(e){return this.cmp(e)<1};h.logarithm=h.log=function(e){var n,i,t,r,s,o,u,f,l=this,a=l.constructor,c=a.precision,d=a.rounding,m=5;if(e==null)e=new a(10),n=!0;else{if(e=new a(e),i=e.d,e.s<0||!i||!i[0]||e.eq(1))return new a(NaN);n=e.eq(10)}if(i=l.d,l.s<0||!i||!i[0]||l.eq(1))return new a(i&&!i[0]?-1/0:l.s!=1?NaN:i?0:1/0);if(n)if(i.length>1)s=!0;else{for(r=i[0];r%10===0;)r/=10;s=r!==1}if(N=!1,u=c+m,o=X(l,u),t=n?de(a,u+10):X(e,u),f=S(o,t,u,1),ue(f.d,r=c,d))do if(u+=10,o=X(l,u),t=n?de(a,u+10):X(e,u),f=S(o,t,u,1),!s){+F(f.d).slice(r+1,r+15)+1==1e14&&(f=g(f,c+1,0));break}while(ue(f.d,r+=10,d));return N=!0,g(f,c,d)};h.minus=h.sub=function(e){var n,i,t,r,s,o,u,f,l,a,c,d,m=this,E=m.constructor;if(e=new E(e),!m.d||!e.d)return!m.s||!e.s?e=new E(NaN):m.d?e.s=-e.s:e=new E(e.d||m.s!==e.s?m:NaN),e;if(m.s!=e.s)return e.s=-e.s,m.plus(e);if(l=m.d,d=e.d,u=E.precision,f=E.rounding,!l[0]||!d[0]){if(d[0])e.s=-e.s;else if(l[0])e=new E(m);else return new E(f===3?-0:0);return N?g(e,u,f):e}if(i=q(e.e/w),a=q(m.e/w),l=l.slice(),s=a-i,s){for(c=s<0,c?(n=l,s=-s,o=d.length):(n=d,i=a,o=l.length),t=Math.max(Math.ceil(u/w),o)+2,s>t&&(s=t,n.length=1),n.reverse(),t=s;t--;)n.push(0);n.reverse()}else{for(t=l.length,o=d.length,c=t<o,c&&(o=t),t=0;t<o;t++)if(l[t]!=d[t]){c=l[t]<d[t];break}s=0}for(c&&(n=l,l=d,d=n,e.s=-e.s),o=l.length,t=d.length-o;t>0;--t)l[o++]=0;for(t=d.length;t>s;){if(l[--t]<d[t]){for(r=t;r&&l[--r]===0;)l[r]=Z-1;--l[r],l[t]+=Z}l[t]-=d[t]}for(;l[--o]===0;)l.pop();for(;l[0]===0;l.shift())--i;return l[0]?(e.d=l,e.e=me(l,i),N?g(e,u,f):e):new E(f===3?-0:0)};h.modulo=h.mod=function(e){var n,i=this,t=i.constructor;return e=new t(e),!i.d||!e.s||e.d&&!e.d[0]?new t(NaN):!e.d||i.d&&!i.d[0]?g(new t(i),t.precision,t.rounding):(N=!1,t.modulo==9?(n=S(i,e.abs(),0,3,1),n.s*=e.s):n=S(i,e,0,t.modulo,1),n=n.times(e),N=!0,i.minus(n))};h.naturalExponential=h.exp=function(){return De(this)};h.naturalLogarithm=h.ln=function(){return X(this)};h.negated=h.neg=function(){var e=new this.constructor(this);return e.s=-e.s,g(e)};h.plus=h.add=function(e){var n,i,t,r,s,o,u,f,l,a,c=this,d=c.constructor;if(e=new d(e),!c.d||!e.d)return!c.s||!e.s?e=new d(NaN):c.d||(e=new d(e.d||c.s===e.s?c:NaN)),e;if(c.s!=e.s)return e.s=-e.s,c.minus(e);if(l=c.d,a=e.d,u=d.precision,f=d.rounding,!l[0]||!a[0])return a[0]||(e=new d(c)),N?g(e,u,f):e;if(s=q(c.e/w),t=q(e.e/w),l=l.slice(),r=s-t,r){for(r<0?(i=l,r=-r,o=a.length):(i=a,t=s,o=l.length),s=Math.ceil(u/w),o=s>o?s+1:o+1,r>o&&(r=o,i.length=1),i.reverse();r--;)i.push(0);i.reverse()}for(o=l.length,r=a.length,o-r<0&&(r=o,i=a,a=l,l=i),n=0;r;)n=(l[--r]=l[r]+a[r]+n)/Z|0,l[r]%=Z;for(n&&(l.unshift(n),++t),o=l.length;l[--o]==0;)l.pop();return e.d=l,e.e=me(l,t),N?g(e,u,f):e};h.precision=h.sd=function(e){var n,i=this;if(e!==void 0&&e!==!!e&&e!==1&&e!==0)throw Error(Y+e);return i.d?(n=ye(i.d),e&&i.e+1>n&&(n=i.e+1)):n=NaN,n};h.round=function(){var e=this,n=e.constructor;return g(new n(e),e.e+1,n.rounding)};h.sine=h.sin=function(){var e,n,i=this,t=i.constructor;return i.isFinite()?i.isZero()?new t(i):(e=t.precision,n=t.rounding,t.precision=e+Math.max(i.e,i.sd())+w,t.rounding=1,i=Cn(t,Ye(t,i)),t.precision=e,t.rounding=n,g(y>2?i.neg():i,e,n,!0)):new t(NaN)};h.squareRoot=h.sqrt=function(){var e,n,i,t,r,s,o=this,u=o.d,f=o.e,l=o.s,a=o.constructor;if(l!==1||!u||!u[0])return new a(!l||l<0&&(!u||u[0])?NaN:u?o:1/0);for(N=!1,l=Math.sqrt(+o),l==0||l==1/0?(n=F(u),(n.length+f)%2==0&&(n+="0"),l=Math.sqrt(n),f=q((f+1)/2)-(f<0||f%2),l==1/0?n="5e"+f:(n=l.toExponential(),n=n.slice(0,n.indexOf("e")+1)+f),t=new a(n)):t=new a(l.toString()),i=(f=a.precision)+3;;)if(s=t,t=s.plus(S(o,s,i+2,1)).times(.5),F(s.d).slice(0,i)===(n=F(t.d)).slice(0,i))if(n=n.slice(i-3,i+1),n=="9999"||!r&&n=="4999"){if(!r&&(g(s,f+1,0),s.times(s).eq(o))){t=s;break}i+=4,r=1}else{(!+n||!+n.slice(1)&&n.charAt(0)=="5")&&(g(t,f+1,1),e=!t.times(t).eq(o));break}return N=!0,g(t,f,a.rounding,e)};h.tangent=h.tan=function(){var e,n,i=this,t=i.constructor;return i.isFinite()?i.isZero()?new t(i):(e=t.precision,n=t.rounding,t.precision=e+10,t.rounding=1,i=i.sin(),i.s=1,i=S(i,new t(1).minus(i.times(i)).sqrt(),e+10,0),t.precision=e,t.rounding=n,g(y==2||y==4?i.neg():i,e,n,!0)):new t(NaN)};h.times=h.mul=function(e){var n,i,t,r,s,o,u,f,l,a=this,c=a.constructor,d=a.d,m=(e=new c(e)).d;if(e.s*=a.s,!d||!d[0]||!m||!m[0])return new c(!e.s||d&&!d[0]&&!m||m&&!m[0]&&!d?NaN:!d||!m?e.s/0:e.s*0);for(i=q(a.e/w)+q(e.e/w),f=d.length,l=m.length,f<l&&(s=d,d=m,m=s,o=f,f=l,l=o),s=[],o=f+l,t=o;t--;)s.push(0);for(t=l;--t>=0;){for(n=0,r=f+t;r>t;)u=s[r]+m[t]*d[r-t-1]+n,s[r--]=u%Z|0,n=u/Z|0;s[r]=(s[r]+n)%Z|0}for(;!s[--o];)s.pop();return n?++i:s.shift(),e.d=s,e.e=me(s,i),N?g(e,c.precision,c.rounding):e};h.toBinary=function(e,n){return Fe(this,2,e,n)};h.toDecimalPlaces=h.toDP=function(e,n){var i=this,t=i.constructor;return i=new t(i),e===void 0?i:(L(e,0,K),n===void 0?n=t.rounding:L(n,0,8),g(i,e+i.e+1,n))};h.toExponential=function(e,n){var i,t=this,r=t.constructor;return e===void 0?i=$(t,!0):(L(e,0,K),n===void 0?n=r.rounding:L(n,0,8),t=g(new r(t),e+1,n),i=$(t,!0,e+1)),t.isNeg()&&!t.isZero()?"-"+i:i};h.toFixed=function(e,n){var i,t,r=this,s=r.constructor;return e===void 0?i=$(r):(L(e,0,K),n===void 0?n=s.rounding:L(n,0,8),t=g(new s(r),e+r.e+1,n),i=$(t,!1,e+t.e+1)),r.isNeg()&&!r.isZero()?"-"+i:i};h.toFraction=function(e){var n,i,t,r,s,o,u,f,l,a,c,d,m=this,E=m.d,v=m.constructor;if(!E)return new v(m);if(l=i=new v(1),t=f=new v(0),n=new v(t),s=n.e=ye(E)-m.e-1,o=s%w,n.d[0]=D(10,o<0?w+o:o),e==null)e=s>0?n:l;else{if(u=new v(e),!u.isInt()||u.lt(l))throw Error(Y+u);e=u.gt(n)?s>0?n:l:u}for(N=!1,u=new v(F(E)),a=v.precision,v.precision=s=E.length*w*2;c=S(u,n,0,1,1),r=i.plus(c.times(t)),r.cmp(e)!=1;)i=t,t=r,r=l,l=f.plus(c.times(r)),f=r,r=n,n=u.minus(c.times(r)),u=r;return r=S(e.minus(i),t,0,1,1),f=f.plus(r.times(l)),i=i.plus(r.times(t)),f.s=l.s=m.s,d=S(l,t,s,1).minus(m).abs().cmp(S(f,i,s,1).minus(m).abs())<1?[l,t]:[f,i],v.precision=a,N=!0,d};h.toHexadecimal=h.toHex=function(e,n){return Fe(this,16,e,n)};h.toNearest=function(e,n){var i=this,t=i.constructor;if(i=new t(i),e==null){if(!i.d)return i;e=new t(1),n=t.rounding}else{if(e=new t(e),n===void 0?n=t.rounding:L(n,0,8),!i.d)return e.s?i:e;if(!e.d)return e.s&&(e.s=i.s),e}return e.d[0]?(N=!1,i=S(i,e,0,n,1).times(e),N=!0,g(i)):(e.s=i.s,i=e),i};h.toNumber=function(){return+this};h.toOctal=function(e,n){return Fe(this,8,e,n)};h.toPower=h.pow=function(e){var n,i,t,r,s,o,u=this,f=u.constructor,l=+(e=new f(e));if(!u.d||!e.d||!u.d[0]||!e.d[0])return new f(D(+u,l));if(u=new f(u),u.eq(1))return u;if(t=f.precision,s=f.rounding,e.eq(1))return g(u,t,s);if(n=q(e.e/w),n>=e.d.length-1&&(i=l<0?-l:l)<=wn)return r=Ge(f,u,i,t),e.s<0?new f(1).div(r):g(r,t,s);if(o=u.s,o<0){if(n<e.d.length-1)return new f(NaN);if((e.d[n]&1)==0&&(o=1),u.e==0&&u.d[0]==1&&u.d.length==1)return u.s=o,u}return i=D(+u,l),n=i==0||!isFinite(i)?q(l*(Math.log("0."+F(u.d))/Math.LN10+u.e+1)):new f(i+"").e,n>f.maxE+1||n<f.minE-1?new f(n>0?o/0:0):(N=!1,f.rounding=u.s=1,i=Math.min(12,(n+"").length),r=De(e.times(X(u,t+i)),t),r.d&&(r=g(r,t+5,1),ue(r.d,t,s)&&(n=t+10,r=g(De(e.times(X(u,n+i)),n),n+5,1),+F(r.d).slice(t+1,t+15)+1==1e14&&(r=g(r,t+1,0)))),r.s=o,N=!0,f.rounding=s,g(r,t,s))};h.toPrecision=function(e,n){var i,t=this,r=t.constructor;return e===void 0?i=$(t,t.e<=r.toExpNeg||t.e>=r.toExpPos):(L(e,1,K),n===void 0?n=r.rounding:L(n,0,8),t=g(new r(t),e,n),i=$(t,e<=t.e||t.e<=r.toExpNeg,e)),t.isNeg()&&!t.isZero()?"-"+i:i};h.toSignificantDigits=h.toSD=function(e,n){var i=this,t=i.constructor;return e===void 0?(e=t.precision,n=t.rounding):(L(e,1,K),n===void 0?n=t.rounding:L(n,0,8)),g(new t(i),e,n)};h.toString=function(){var e=this,n=e.constructor,i=$(e,e.e<=n.toExpNeg||e.e>=n.toExpPos);return e.isNeg()&&!e.isZero()?"-"+i:i};h.truncated=h.trunc=function(){return g(new this.constructor(this),this.e+1,1)};h.valueOf=h.toJSON=function(){var e=this,n=e.constructor,i=$(e,e.e<=n.toExpNeg||e.e>=n.toExpPos);return e.isNeg()?"-"+i:i};function F(e){var n,i,t,r=e.length-1,s="",o=e[0];if(r>0){for(s+=o,n=1;n<r;n++)t=e[n]+"",i=w-t.length,i&&(s+=G(i)),s+=t;o=e[n],t=o+"",i=w-t.length,i&&(s+=G(i))}else if(o===0)return"0";for(;o%10===0;)o/=10;return s+o}function L(e,n,i){if(e!==~~e||e<n||e>i)throw Error(Y+e)}function ue(e,n,i,t){var r,s,o,u;for(s=e[0];s>=10;s/=10)--n;return--n<0?(n+=w,r=0):(r=Math.ceil((n+1)/w),n%=w),s=D(10,w-n),u=e[r]%s|0,t==null?n<3?(n==0?u=u/100|0:n==1&&(u=u/10|0),o=i<4&&u==99999||i>3&&u==49999||u==5e4||u==0):o=(i<4&&u+1==s||i>3&&u+1==s/2)&&(e[r+1]/s/100|0)==D(10,n-2)-1||(u==s/2||u==0)&&(e[r+1]/s/100|0)==0:n<4?(n==0?u=u/1e3|0:n==1?u=u/100|0:n==2&&(u=u/10|0),o=(t||i<4)&&u==9999||!t&&i>3&&u==4999):o=((t||i<4)&&u+1==s||!t&&i>3&&u+1==s/2)&&(e[r+1]/s/1e3|0)==D(10,n-3)-1,o}function fe(e,n,i){for(var t,r=[0],s,o=0,u=e.length;o<u;){for(s=r.length;s--;)r[s]*=n;for(r[0]+=ke.indexOf(e.charAt(o++)),t=0;t<r.length;t++)r[t]>i-1&&(r[t+1]===void 0&&(r[t+1]=0),r[t+1]+=r[t]/i|0,r[t]%=i)}return r.reverse()}function Nn(e,n){var i,t,r;if(n.isZero())return n;t=n.d.length,t<32?(i=Math.ceil(t/3),r=(1/pe(4,i)).toString()):(i=16,r="2.3283064365386962890625e-10"),e.precision+=i,n=te(e,1,n.times(r),new e(1));for(var s=i;s--;){var o=n.times(n);n=o.times(o).minus(o).times(8).plus(1)}return e.precision-=i,n}var S=function(){function e(t,r,s){var o,u=0,f=t.length;for(t=t.slice();f--;)o=t[f]*r+u,t[f]=o%s|0,u=o/s|0;return u&&t.unshift(u),t}function n(t,r,s,o){var u,f;if(s!=o)f=s>o?1:-1;else for(u=f=0;u<s;u++)if(t[u]!=r[u]){f=t[u]>r[u]?1:-1;break}return f}function i(t,r,s,o){for(var u=0;s--;)t[s]-=u,u=t[s]<r[s]?1:0,t[s]=u*o+t[s]-r[s];for(;!t[0]&&t.length>1;)t.shift()}return function(t,r,s,o,u,f){var l,a,c,d,m,E,v,B,b,V,C,T,x,U,ee,ne,Q,re,P,j,_=t.constructor,H=t.s==r.s?1:-1,M=t.d,p=r.d;if(!M||!M[0]||!p||!p[0])return new _(!t.s||!r.s||(M?p&&M[0]==p[0]:!p)?NaN:M&&M[0]==0||!p?H*0:H/0);for(f?(m=1,a=t.e-r.e):(f=Z,m=w,a=q(t.e/m)-q(r.e/m)),P=p.length,Q=M.length,b=new _(H),V=b.d=[],c=0;p[c]==(M[c]||0);c++);if(p[c]>(M[c]||0)&&a--,s==null?(U=s=_.precision,o=_.rounding):u?U=s+(t.e-r.e)+1:U=s,U<0)V.push(1),E=!0;else{if(U=U/m+2|0,c=0,P==1){for(d=0,p=p[0],U++;(c<Q||d)&&U--;c++)ee=d*f+(M[c]||0),V[c]=ee/p|0,d=ee%p|0;E=d||c<Q}else{for(d=f/(p[0]+1)|0,d>1&&(p=e(p,d,f),M=e(M,d,f),P=p.length,Q=M.length),ne=P,C=M.slice(0,P),T=C.length;T<P;)C[T++]=0;j=p.slice(),j.unshift(0),re=p[0],p[1]>=f/2&&++re;do d=0,l=n(p,C,P,T),l<0?(x=C[0],P!=T&&(x=x*f+(C[1]||0)),d=x/re|0,d>1?(d>=f&&(d=f-1),v=e(p,d,f),B=v.length,T=C.length,l=n(v,C,B,T),l==1&&(d--,i(v,P<B?j:p,B,f))):(d==0&&(l=d=1),v=p.slice()),B=v.length,B<T&&v.unshift(0),i(C,v,T,f),l==-1&&(T=C.length,l=n(p,C,P,T),l<1&&(d++,i(C,P<T?j:p,T,f))),T=C.length):l===0&&(d++,C=[0]),V[c++]=d,l&&C[0]?C[T++]=M[ne]||0:(C=[M[ne]],T=1);while((ne++<Q||C[0]!==void 0)&&U--);E=C[0]!==void 0}V[0]||V.shift()}if(m==1)b.e=a,Re=E;else{for(c=1,d=V[0];d>=10;d/=10)c++;b.e=c+a*m-1,g(b,u?s+b.e+1:s,o,E)}return b}}();function g(e,n,i,t){var r,s,o,u,f,l,a,c,d,m=e.constructor;e:if(n!=null){if(c=e.d,!c)return e;for(r=1,u=c[0];u>=10;u/=10)r++;if(s=n-r,s<0)s+=w,o=n,a=c[d=0],f=a/D(10,r-o-1)%10|0;else if(d=Math.ceil((s+1)/w),u=c.length,d>=u)if(t){for(;u++<=d;)c.push(0);a=f=0,r=1,s%=w,o=s-w+1}else break e;else{for(a=u=c[d],r=1;u>=10;u/=10)r++;s%=w,o=s-w+r,f=o<0?0:a/D(10,r-o-1)%10|0}if(t=t||n<0||c[d+1]!==void 0||(o<0?a:a%D(10,r-o-1)),l=i<4?(f||t)&&(i==0||i==(e.s<0?3:2)):f>5||f==5&&(i==4||t||i==6&&(s>0?o>0?a/D(10,r-o):0:c[d-1])%10&1||i==(e.s<0?8:7)),n<1||!c[0])return c.length=0,l?(n-=e.e+1,c[0]=D(10,(w-n%w)%w),e.e=-n||0):c[0]=e.e=0,e;if(s==0?(c.length=d,u=1,d--):(c.length=d+1,u=D(10,w-s),c[d]=o>0?(a/D(10,r-o)%D(10,o)|0)*u:0),l)for(;;)if(d==0){for(s=1,o=c[0];o>=10;o/=10)s++;for(o=c[0]+=u,u=1;o>=10;o/=10)u++;s!=u&&(e.e++,c[0]==Z&&(c[0]=1));break}else{if(c[d]+=u,c[d]!=Z)break;c[d--]=0,u=1}for(s=c.length;c[--s]===0;)c.pop()}return N&&(e.e>m.maxE?(e.d=null,e.e=NaN):e.e<m.minE&&(e.e=0,e.d=[0])),e}function $(e,n,i){if(!e.isFinite())return Je(e);var t,r=e.e,s=F(e.d),o=s.length;return n?(i&&(t=i-o)>0?s=s.charAt(0)+"."+s.slice(1)+G(t):o>1&&(s=s.charAt(0)+"."+s.slice(1)),s=s+(e.e<0?"e":"e+")+e.e):r<0?(s="0."+G(-r-1)+s,i&&(t=i-o)>0&&(s+=G(t))):r>=o?(s+=G(r+1-o),i&&(t=i-r-1)>0&&(s=s+"."+G(t))):((t=r+1)<o&&(s=s.slice(0,t)+"."+s.slice(t)),i&&(t=i-o)>0&&(r+1===o&&(s+="."),s+=G(t))),s}function me(e,n){var i=e[0];for(n*=w;i>=10;i/=10)n++;return n}function de(e,n,i){if(n>vn)throw N=!0,i&&(e.precision=i),Error(Ze);return g(new e(ae),n,1,!0)}function R(e,n,i){if(n>Ie)throw Error(Ze);return g(new e(ce),n,i,!0)}function ye(e){var n=e.length-1,i=n*w+1;if(n=e[n],n){for(;n%10==0;n/=10)i--;for(n=e[0];n>=10;n/=10)i++}return i}function G(e){for(var n="";e--;)n+="0";return n}function Ge(e,n,i,t){var r,s=new e(1),o=Math.ceil(t/w+4);for(N=!1;;){if(i%2&&(s=s.times(n),Ae(s.d,o)&&(r=!0)),i=q(i/2),i===0){i=s.d.length-1,r&&s.d[i]===0&&++s.d[i];break}n=n.times(n),Ae(n.d,o)}return N=!0,s}function Pe(e){return e.d[e.d.length-1]&1}function Xe(e,n,i){for(var t,r=new e(n[0]),s=0;++s<n.length;)if(t=new e(n[s]),t.s)r[i](t)&&(r=t);else{r=t;break}return r}function De(e,n){var i,t,r,s,o,u,f,l=0,a=0,c=0,d=e.constructor,m=d.rounding,E=d.precision;if(!e.d||!e.d[0]||e.e>17)return new d(e.d?e.d[0]?e.s<0?0:1/0:1:e.s?e.s<0?0:e:0/0);for(n==null?(N=!1,f=E):f=n,u=new d(.03125);e.e>-2;)e=e.times(u),c+=5;for(t=Math.log(D(2,c))/Math.LN10*2+5|0,f+=t,i=s=o=new d(1),d.precision=f;;){if(s=g(s.times(e),f,1),i=i.times(++a),u=o.plus(S(s,i,f,1)),F(u.d).slice(0,f)===F(o.d).slice(0,f)){for(r=c;r--;)o=g(o.times(o),f,1);if(n==null)if(l<3&&ue(o.d,f-t,m,l))d.precision=f+=10,i=s=u=new d(1),a=0,l++;else return g(o,d.precision=E,m,N=!0);else return d.precision=E,o}o=u}}function X(e,n){var i,t,r,s,o,u,f,l,a,c,d,m=1,E=10,v=e,B=v.d,b=v.constructor,V=b.rounding,C=b.precision;if(v.s<0||!B||!B[0]||!v.e&&B[0]==1&&B.length==1)return new b(B&&!B[0]?-1/0:v.s!=1?NaN:B?0:v);if(n==null?(N=!1,a=C):a=n,b.precision=a+=E,i=F(B),t=i.charAt(0),Math.abs(s=v.e)<15e14){for(;t<7&&t!=1||t==1&&i.charAt(1)>3;)v=v.times(e),i=F(v.d),t=i.charAt(0),m++;s=v.e,t>1?(v=new b("0."+i),s++):v=new b(t+"."+i.slice(1))}else return l=de(b,a+2,C).times(s+""),v=X(new b(t+"."+i.slice(1)),a-E).plus(l),b.precision=C,n==null?g(v,C,V,N=!0):v;for(c=v,f=o=v=S(v.minus(1),v.plus(1),a,1),d=g(v.times(v),a,1),r=3;;){if(o=g(o.times(d),a,1),l=f.plus(S(o,new b(r),a,1)),F(l.d).slice(0,a)===F(f.d).slice(0,a))if(f=f.times(2),s!==0&&(f=f.plus(de(b,a+2,C).times(s+""))),f=S(f,new b(m),a,1),n==null)if(ue(f.d,a-E,V,u))b.precision=a+=E,l=o=v=S(c.minus(1),c.plus(1),a,1),d=g(v.times(v),a,1),r=u=1;else return g(f,b.precision=C,V,N=!0);else return b.precision=C,f;f=l,r+=2}}function Je(e){return String(e.s*e.s/0)}function Be(e,n){var i,t,r;for((i=n.indexOf("."))>-1&&(n=n.replace(".","")),(t=n.search(/e/i))>0?(i<0&&(i=t),i+=+n.slice(t+1),n=n.substring(0,t)):i<0&&(i=n.length),t=0;n.charCodeAt(t)===48;t++);for(r=n.length;n.charCodeAt(r-1)===48;--r);if(n=n.slice(t,r),n){if(r-=t,e.e=i=i-t-1,e.d=[],t=(i+1)%w,i<0&&(t+=w),t<r){for(t&&e.d.push(+n.slice(0,t)),r-=w;t<r;)e.d.push(+n.slice(t,t+=w));n=n.slice(t),t=w-n.length}else t-=r;for(;t--;)n+="0";e.d.push(+n),N&&(e.e>e.constructor.maxE?(e.d=null,e.e=NaN):e.e<e.constructor.minE&&(e.e=0,e.d=[0]))}else e.e=0,e.d=[0];return e}function En(e,n){var i,t,r,s,o,u,f,l,a;if(n.indexOf("_")>-1){if(n=n.replace(/(\d)_(?=\d)/g,"$1"),We.test(n))return Be(e,n)}else if(n==="Infinity"||n==="NaN")return+n||(e.s=NaN),e.e=NaN,e.d=null,e;if(pn.test(n))i=16,n=n.toLowerCase();else if(mn.test(n))i=2;else if(gn.test(n))i=8;else throw Error(Y+n);for(s=n.search(/p/i),s>0?(f=+n.slice(s+1),n=n.substring(2,s)):n=n.slice(2),s=n.indexOf("."),o=s>=0,t=e.constructor,o&&(n=n.replace(".",""),u=n.length,s=u-s,r=Ge(t,new t(i),s,s*2)),l=fe(n,i,Z),a=l.length-1,s=a;l[s]===0;--s)l.pop();return s<0?new t(e.s*0):(e.e=me(l,a),e.d=l,N=!1,o&&(e=S(e,r,u*4)),f&&(e=e.times(Math.abs(f)<54?D(2,f):J.pow(2,f))),N=!0,e)}function Cn(e,n){var i,t=n.d.length;if(t<3)return n.isZero()?n:te(e,2,n,n);i=1.4*Math.sqrt(t),i=i>16?16:i|0,n=n.times(1/pe(5,i)),n=te(e,2,n,n);for(var r,s=new e(5),o=new e(16),u=new e(20);i--;)r=n.times(n),n=n.times(s.plus(r.times(o.times(r).minus(u))));return n}function te(e,n,i,t,r){var s,o,u,f,l=e.precision,a=Math.ceil(l/w);for(N=!1,f=i.times(i),u=new e(t);;){if(o=S(u.times(f),new e(n++*n++),l,1),u=r?t.plus(o):t.minus(o),t=S(o.times(f),new e(n++*n++),l,1),o=u.plus(t),o.d[a]!==void 0){for(s=a;o.d[s]===u.d[s]&&s--;);if(s==-1)break}s=u,u=t,t=o,o=s}return N=!0,o.d.length=a+1,o}function pe(e,n){for(var i=e;--n;)i*=e;return i}function Ye(e,n){var i,t=n.s<0,r=R(e,e.precision,1),s=r.times(.5);if(n=n.abs(),n.lte(s))return y=t?4:1,n;if(i=n.divToInt(r),i.isZero())y=t?3:2;else{if(n=n.minus(i.times(r)),n.lte(s))return y=Pe(i)?t?2:3:t?4:1,n;y=Pe(i)?t?1:4:t?3:2}return n.minus(r).abs()}function Fe(e,n,i,t){var r,s,o,u,f,l,a,c,d,m=e.constructor,E=i!==void 0;if(E?(L(i,1,K),t===void 0?t=m.rounding:L(t,0,8)):(i=m.precision,t=m.rounding),!e.isFinite())a=Je(e);else{for(a=$(e),o=a.indexOf("."),E?(r=2,n==16?i=i*4-3:n==8&&(i=i*3-2)):r=n,o>=0&&(a=a.replace(".",""),d=new m(1),d.e=a.length-o,d.d=fe($(d),10,r),d.e=d.d.length),c=fe(a,10,r),s=f=c.length;c[--f]==0;)c.pop();if(!c[0])a=E?"0p+0":"0";else{if(o<0?s--:(e=new m(e),e.d=c,e.e=s,e=S(e,d,i,t,0,r),c=e.d,s=e.e,l=Re),o=c[i],u=r/2,l=l||c[i+1]!==void 0,l=t<4?(o!==void 0||l)&&(t===0||t===(e.s<0?3:2)):o>u||o===u&&(t===4||l||t===6&&c[i-1]&1||t===(e.s<0?8:7)),c.length=i,l)for(;++c[--i]>r-1;)c[i]=0,i||(++s,c.unshift(1));for(f=c.length;!c[f-1];--f);for(o=0,a="";o<f;o++)a+=ke.charAt(c[o]);if(E){if(f>1)if(n==16||n==8){for(o=n==16?4:3,--f;f%o;f++)a+="0";for(c=fe(a,r,n),f=c.length;!c[f-1];--f);for(o=1,a="1.";o<f;o++)a+=ke.charAt(c[o])}else a=a.charAt(0)+"."+a.slice(1);a=a+(s<0?"p":"p+")+s}else if(s<0){for(;++s;)a="0"+a;a="0."+a}else if(++s>f)for(s-=f;s--;)a+="0";else s<f&&(a=a.slice(0,s)+"."+a.slice(s))}a=(n==16?"0x":n==2?"0b":n==8?"0o":"")+a}return e.s<0?"-"+a:a}function Ae(e,n){if(e.length>n)return e.length=n,!0}function Sn(e){return new this(e).abs()}function bn(e){return new this(e).acos()}function Tn(e){return new this(e).acosh()}function kn(e,n){return new this(e).plus(n)}function Mn(e){return new this(e).asin()}function In(e){return new this(e).asinh()}function Dn(e){return new this(e).atan()}function Bn(e){return new this(e).atanh()}function Fn(e,n){e=new this(e),n=new this(n);var i,t=this.precision,r=this.rounding,s=t+4;return!e.s||!n.s?i=new this(NaN):!e.d&&!n.d?(i=R(this,s,1).times(n.s>0?.25:.75),i.s=e.s):!n.d||e.isZero()?(i=n.s<0?R(this,t,r):new this(0),i.s=e.s):!e.d||n.isZero()?(i=R(this,s,1).times(.5),i.s=e.s):n.s<0?(this.precision=s,this.rounding=1,i=this.atan(S(e,n,s,1)),n=R(this,s,1),this.precision=t,this.rounding=r,i=e.s<0?i.minus(n):i.plus(n)):i=this.atan(S(e,n,s,1)),i}function qn(e){return new this(e).cbrt()}function Vn(e){return g(e=new this(e),e.e+1,2)}function Ln(e,n,i){return new this(e).clamp(n,i)}function Pn(e){if(!e||typeof e!="object")throw Error(he+"Object expected");var n,i,t,r=e.defaults===!0,s=["precision",1,K,"rounding",0,8,"toExpNeg",-ie,0,"toExpPos",0,ie,"maxE",0,ie,"minE",-ie,0,"modulo",0,9];for(n=0;n<s.length;n+=3)if(i=s[n],r&&(this[i]=Me[i]),(t=e[i])!==void 0)if(q(t)===t&&t>=s[n+1]&&t<=s[n+2])this[i]=t;else throw Error(Y+i+": "+t);if(i="crypto",r&&(this[i]=Me[i]),(t=e[i])!==void 0)if(t===!0||t===!1||t===0||t===1)if(t)if(typeof crypto!="undefined"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))this[i]=!0;else throw Error(He);else this[i]=!1;else throw Error(Y+i+": "+t);return this}function An(e){return new this(e).cos()}function Un(e){return new this(e).cosh()}function Ke(e){var n,i,t;function r(s){var o,u,f,l=this;if(!(l instanceof r))return new r(s);if(l.constructor=r,Ue(s)){l.s=s.s,N?!s.d||s.e>r.maxE?(l.e=NaN,l.d=null):s.e<r.minE?(l.e=0,l.d=[0]):(l.e=s.e,l.d=s.d.slice()):(l.e=s.e,l.d=s.d?s.d.slice():s.d);return}if(f=typeof s,f==="number"){if(s===0){l.s=1/s<0?-1:1,l.e=0,l.d=[0];return}if(s<0?(s=-s,l.s=-1):l.s=1,s===~~s&&s<1e7){for(o=0,u=s;u>=10;u/=10)o++;N?o>r.maxE?(l.e=NaN,l.d=null):o<r.minE?(l.e=0,l.d=[0]):(l.e=o,l.d=[s]):(l.e=o,l.d=[s]);return}else if(s*0!==0){s||(l.s=NaN),l.e=NaN,l.d=null;return}return Be(l,s.toString())}else if(f!=="string")throw Error(Y+s);return(u=s.charCodeAt(0))===45?(s=s.slice(1),l.s=-1):(u===43&&(s=s.slice(1)),l.s=1),We.test(s)?Be(l,s):En(l,s)}if(r.prototype=h,r.ROUND_UP=0,r.ROUND_DOWN=1,r.ROUND_CEIL=2,r.ROUND_FLOOR=3,r.ROUND_HALF_UP=4,r.ROUND_HALF_DOWN=5,r.ROUND_HALF_EVEN=6,r.ROUND_HALF_CEIL=7,r.ROUND_HALF_FLOOR=8,r.EUCLID=9,r.config=r.set=Pn,r.clone=Ke,r.isDecimal=Ue,r.abs=Sn,r.acos=bn,r.acosh=Tn,r.add=kn,r.asin=Mn,r.asinh=In,r.atan=Dn,r.atanh=Bn,r.atan2=Fn,r.cbrt=qn,r.ceil=Vn,r.clamp=Ln,r.cos=An,r.cosh=Un,r.div=zn,r.exp=On,r.floor=Rn,r.hypot=Zn,r.ln=Hn,r.log=$n,r.log10=yn,r.log2=Wn,r.max=Gn,r.min=Xn,r.mod=Jn,r.mul=Yn,r.pow=Kn,r.random=Qn,r.round=jn,r.sign=_n,r.sin=xn,r.sinh=ei,r.sqrt=ni,r.sub=ii,r.sum=ti,r.tan=ri,r.tanh=si,r.trunc=oi,e===void 0&&(e={}),e&&e.defaults!==!0)for(t=["precision","rounding","toExpNeg","toExpPos","maxE","minE","modulo","crypto"],n=0;n<t.length;)e.hasOwnProperty(i=t[n++])||(e[i]=this[i]);return r.config(e),r}function zn(e,n){return new this(e).div(n)}function On(e){return new this(e).exp()}function Rn(e){return g(e=new this(e),e.e+1,3)}function Zn(){var e,n,i=new this(0);for(N=!1,e=0;e<arguments.length;)if(n=new this(arguments[e++]),n.d)i.d&&(i=i.plus(n.times(n)));else{if(n.s)return N=!0,new this(1/0);i=n}return N=!0,i.sqrt()}function Ue(e){return e instanceof J||e&&e.toStringTag===$e||!1}function Hn(e){return new this(e).ln()}function $n(e,n){return new this(e).log(n)}function Wn(e){return new this(e).log(2)}function yn(e){return new this(e).log(10)}function Gn(){return Xe(this,arguments,"lt")}function Xn(){return Xe(this,arguments,"gt")}function Jn(e,n){return new this(e).mod(n)}function Yn(e,n){return new this(e).mul(n)}function Kn(e,n){return new this(e).pow(n)}function Qn(e){var n,i,t,r,s=0,o=new this(1),u=[];if(e===void 0?e=this.precision:L(e,1,K),t=Math.ceil(e/w),this.crypto)if(crypto.getRandomValues)for(n=crypto.getRandomValues(new Uint32Array(t));s<t;)r=n[s],r>=429e7?n[s]=crypto.getRandomValues(new Uint32Array(1))[0]:u[s++]=r%1e7;else if(crypto.randomBytes){for(n=crypto.randomBytes(t*=4);s<t;)r=n[s]+(n[s+1]<<8)+(n[s+2]<<16)+((n[s+3]&127)<<24),r>=214e7?crypto.randomBytes(4).copy(n,s):(u.push(r%1e7),s+=4);s=t/4}else throw Error(He);else for(;s<t;)u[s++]=Math.random()*1e7|0;for(t=u[--s],e%=w,t&&e&&(r=D(10,w-e),u[s]=(t/r|0)*r);u[s]===0;s--)u.pop();if(s<0)i=0,u=[0];else{for(i=-1;u[0]===0;i-=w)u.shift();for(t=1,r=u[0];r>=10;r/=10)t++;t<w&&(i-=w-t)}return o.e=i,o.d=u,o}function jn(e){return g(e=new this(e),e.e+1,this.rounding)}function _n(e){return e=new this(e),e.d?e.d[0]?e.s:0*e.s:e.s||NaN}function xn(e){return new this(e).sin()}function ei(e){return new this(e).sinh()}function ni(e){return new this(e).sqrt()}function ii(e,n){return new this(e).sub(n)}function ti(){var e=0,n=arguments,i=new this(n[e]);for(N=!1;i.s&&++e<n.length;)i=i.plus(n[e]);return N=!0,g(i,this.precision,this.rounding)}function ri(e){return new this(e).tan()}function si(e){return new this(e).tanh()}function oi(e){return g(e=new this(e),e.e+1,1)}h[Symbol.for("nodejs.util.inspect.custom")]=h.toString;h[Symbol.toStringTag]="Decimal";var J=h.constructor=Ke(Me);ae=new J(ae);ce=new J(ce);const ui={modelValue:{type:[String,Number],default:0},min:{type:[String,Number]},max:{type:[String,Number]},step:{type:[String,Number],default:1},color:{type:String},inputWidth:{type:[String,Number]},inputTextSize:{type:[String,Number]},buttonSize:{type:[String,Number]},decimalLength:{type:[String,Number]},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},disableIncrement:{type:Boolean,default:!1},disableDecrement:{type:Boolean,default:!1},disableInput:{type:Boolean,default:!1},lazyChange:{type:Boolean,default:!1},incrementButton:{type:Boolean,default:!0},decrementButton:{type:Boolean,default:!0},press:{type:Boolean,default:!0},ripple:{type:Boolean,default:!0},validateTrigger:{type:Array,default:()=>["onInputChange","onLazyChange","onIncrement","onDecrement"]},rules:{type:Array},onBeforeChange:{type:Function},onChange:{type:Function},onIncrement:{type:Function},onDecrement:{type:Function},"onUpdate:modelValue":{type:Function}};const{n:li,classes:fi}=cn("counter"),ze=100,Oe=600,ai=en({name:"VarCounter",components:{VarIcon:Qe,VarFormDetails:je},directives:{Ripple:xe},inheritAttrs:!1,props:ui,setup(e){const n=nn("");let i,t,r,s;const{bindForm:o,form:u}=_e(),{errorMessage:f,validateWithTrigger:l,validate:a,resetValidation:c}=an(),{readonly:d,disabled:m}=u!=null?u:{},E=()=>a(e.rules,e.modelValue),v=p=>{fn(()=>{const{validateTrigger:I,rules:z,modelValue:O}=e;l(I,p,z,O)})},B=()=>{const{min:p}=e;W(e["onUpdate:modelValue"],p!=null?k(p):0),c()},b={reset:B,validate:E,resetValidation:c},V=qe(()=>{const{max:p,modelValue:I}=e;return p!=null&&k(I)>=k(p)}),C=qe(()=>{const{min:p,modelValue:I}=e;return p!=null&&k(I)<=k(p)}),T=p=>{const{decimalLength:I,max:z,min:O}=e;let A=k(p);return z!=null&&A>k(z)&&(A=k(z)),O!=null&&A<k(O)&&(A=k(O)),p=String(A),I!=null&&(p=A.toFixed(k(I))),p},x=p=>{const{lazyChange:I,onBeforeChange:z}=e,{value:O}=p.target,A=T(O);I?W(z,k(A),M):H(A),v("onInputChange")},U=()=>{const{disabled:p,readonly:I,disableDecrement:z,decrementButton:O,lazyChange:A,step:ge,modelValue:we,onDecrement:ve,onBeforeChange:Ne}=e;if((m==null?void 0:m.value)||(d==null?void 0:d.value)||p||I||z||!O||C.value)return;const Ee=new J(k(we)).minus(new J(k(ge))).toString(),se=T(Ee),oe=k(se);W(ve,oe),A?W(Ne,oe,M):(H(se),v("onDecrement"))},ee=()=>{const{disabled:p,readonly:I,disableIncrement:z,incrementButton:O,lazyChange:A,step:ge,modelValue:we,onIncrement:ve,onBeforeChange:Ne}=e;if((m==null?void 0:m.value)||(d==null?void 0:d.value)||p||I||z||!O||V.value)return;const Ee=new J(k(we)).plus(new J(k(ge))).toString(),se=T(Ee),oe=k(se);W(ve,oe),A?W(Ne,oe,M):(H(se),v("onIncrement"))},ne=()=>{const{press:p,lazyChange:I}=e;!p||I||(s=window.setTimeout(()=>{_()},Oe))},Q=()=>{const{press:p,lazyChange:I}=e;!p||I||(r=window.setTimeout(()=>{j()},Oe))},re=()=>{t&&clearTimeout(t),s&&clearTimeout(s)},P=()=>{i&&clearTimeout(i),r&&clearTimeout(r)},j=()=>{i=window.setTimeout(()=>{ee(),j()},ze)},_=()=>{t=window.setTimeout(()=>{U(),_()},ze)},H=p=>{n.value=p;const I=k(p);W(e["onUpdate:modelValue"],I)},M=p=>{H(T(String(p))),v("onLazyChange")};return W(o,b),tn(()=>e.modelValue,p=>{H(T(String(p))),W(e.onChange,k(p))}),H(T(String(e.modelValue))),{n:li,classes:fi,inputValue:n,errorMessage:f,formDisabled:m,formReadonly:d,isMax:V,isMin:C,validate:E,reset:B,resetValidation:c,handleChange:x,decrement:U,increment:ee,pressDecrement:ne,pressIncrement:Q,releaseDecrement:re,releaseIncrement:P,toSizeUnit:dn,toNumber:k}}}),ci=["inputmode","readonly","disabled"];function di(e,n,i,t,r,s){const o=Ve("var-icon"),u=Ve("var-form-details"),f=rn("ripple");return sn(),on("div",{class:le(e.classes(e.n(),"var--box"))},[Le("div",ln({class:e.classes(e.n("controller"),"var-elevation--2",[e.disabled||e.formDisabled,e.n("--disabled")],[e.errorMessage,e.n("--error")]),style:{background:e.color?e.color:void 0}},e.$attrs),[Ce(Se(o,{"var-counter-cover":"",name:"minus",class:le(e.classes(e.n("decrement-button"),[!e.decrementButton,e.n("--hidden")])),style:be({width:e.toSizeUnit(e.buttonSize),height:e.toSizeUnit(e.buttonSize)}),onClick:e.decrement,onTouchstart:e.pressDecrement,onTouchend:e.releaseDecrement,onTouchcancel:e.releaseDecrement},null,8,["class","style","onClick","onTouchstart","onTouchend","onTouchcancel"]),[[f,{disabled:!e.ripple||e.disabled||e.readonly||e.disableDecrement||!e.decrementButton||e.isMin}]]),Ce(Le("input",{class:le(e.n("input")),style:be({width:e.toSizeUnit(e.inputWidth),fontSize:e.toSizeUnit(e.inputTextSize)}),inputmode:e.toNumber(e.decimalLength)===0?"numeric":"decimal",readonly:e.readonly||e.formReadonly,disabled:e.disabled||e.formDisabled||e.disableInput,"onUpdate:modelValue":n[0]||(n[0]=l=>e.inputValue=l),onChange:n[1]||(n[1]=(...l)=>e.handleChange&&e.handleChange(...l))},null,46,ci),[[un,e.inputValue]]),Ce(Se(o,{"var-counter-cover":"",name:"plus",class:le(e.classes(e.n("increment-button"),[!e.incrementButton,e.n("--hidden")])),style:be({width:e.toSizeUnit(e.buttonSize),height:e.toSizeUnit(e.buttonSize)}),onClick:e.increment,onTouchstart:e.pressIncrement,onTouchend:e.releaseIncrement,onTouchcancel:e.releaseIncrement},null,8,["class","style","onClick","onTouchstart","onTouchend","onTouchcancel"]),[[f,{disabled:!e.ripple||e.disabled||e.readonly||e.disableIncrement||!e.incrementButton||e.isMax}]])],16),Se(u,{"error-message":e.errorMessage},null,8,["error-message"])],2)}var Te=hn(ai,[["render",di]]);Te.install=function(e){e.component(Te.name,Te)};export{Te as C};
