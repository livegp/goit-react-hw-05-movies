import{s as $,j as g,G as Ue,N as Ft,g as Mt,r as l,u as Rt,c as Pt,L as Lt,O as kt}from"./index-ff5f554b.js";import{A as Dt,I as Nt}from"./index.esm-68c5318b.js";import Vt from"./Loader-e1f0dc84.js";import{Q as Ut}from"./react-toastify.esm-446be29a.js";const Bt=$.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100%;
`,Ur=$.div`
  max-width: 1160px;
  padding: 25px 10px;
  margin: 0 auto;
`,Ht=$.footer`
  color: rgba(var(--text-primary), 1);
  background-color: rgba(var(--accent), 1);
  transition: var(--trans);

  a {
    color: #dfe3ee;
    transition: var(--trans);

    &:hover {
      color: #f7f7f7;
    }
  }
`;function zt(){return g.jsx(Ht,{children:g.jsx(Ur,{children:g.jsxs("p",{children:[" ","© 2023 Movies App. All rights reserved. Designed and Developed by"," ",g.jsx("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/oleksandr-pishta",children:"Oleksandr Pishta"})]})})})}function Gt(e){return Ue({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 20H20V22H12C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.2512 21.2561 16.3287 20.0007 18H17.2916C18.9525 16.5341 20 14.3894 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8C14 9.10457 13.1046 10 12 10ZM8 14C6.89543 14 6 13.1046 6 12C6 10.8954 6.89543 10 8 10C9.10457 10 10 10.8954 10 12C10 13.1046 9.10457 14 8 14ZM16 14C14.8954 14 14 13.1046 14 12C14 10.8954 14.8954 10 16 10C17.1046 10 18 10.8954 18 12C18 13.1046 17.1046 14 16 14ZM12 18C10.8954 18 10 17.1046 10 16C10 14.8954 10.8954 14 12 14C13.1046 14 14 14.8954 14 16C14 17.1046 13.1046 18 12 18Z"}}]})(e)}const Kt=$.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: rgba(var(--accent), 1);
  transition: var(--trans);

  .header .menu-btn:checked ~ .nav {
    position: absolute;
    top: -50%;
    /* left: -50%; */
    transform: translate(-50%, 50vh);
  }

  .header .menu-btn:checked ~ .header__login-btn {
    transform: translateY(0);
  }

  .header .menu-icon {
    cursor: pointer;
    position: relative;
    user-select: none;
    display: none;
    background: #ffecb3;
    border-radius: 4px;
    padding: 16px;
    order: 5;
  }

  .header .menu-icon .nav-icon {
    background: #333;
    display: block;
    height: 2px;
    position: relative;
    transition: background 0.2s ease-out;
    width: 18px;
  }

  .header .menu-icon .nav-icon:before,
  .header .menu-icon .nav-icon:after {
    background: #333;
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
  }

  .header .menu-icon .nav-icon:before {
    top: 5px;
  }

  .header .menu-icon .nav-icon:after {
    top: -5px;
  }

  .header .menu-btn {
    display: none;
    order: 6;
  }

  .header .menu-btn:checked ~ .menu-icon .nav-icon {
    background: transparent;
  }

  .header .menu-btn:checked ~ .menu-icon .nav-icon:before {
    transform: rotate(-45deg);
    top: 0;
  }

  .header .menu-btn:checked ~ .menu-icon .nav-icon:after {
    transform: rotate(45deg);
    top: 0;
  }
`,Wt=$.div`
  max-width: 1160px;
  padding: 25px 10px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 100%;
  padding: 15px;
  gap: 25px;
`,Yt=$.div`
  order: 1;
  flex-grow: 0;
  margin-right: 25px;

  svg {
    display: block;
    width: 40px;
    height: 40px;
    fill: rgba(var(--bg-primary), 1);
    transition: var(--trans);
  }

  &:hover {
    svg {
      fill: rgba(var(--bg-primary), 0.7);
    }
  }
`,Zt=$.nav`
  display: block;
  margin-top: 0;
  position: static;
  order: 2;
  flex-grow: 1;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    height: 100%;
    gap: 5px;
  }
`,dr=$(Ft)`
  display: block;
  border-radius: 4px;
  border: 2px solid transparent;
  padding: 8px;
  order: 0;
  font-size: 20px;
  font-weight: bold;
  background-color: transparent;
  color: rgba(var(--text-primary), 1);
  transition: var(--trans);

  &:hover {
    color: rgba(var(--text-primary), 1);
    border: 2px solid rgba(var(--bg-primary), 1);

    &.active {
      background-color: rgba(var(--bg-primary), 0.7);
      border: 2px solid rgba(var(--bg-primary), 0);
    }
  }

  &.active {
    background-color: rgba(var(--bg-primary), 1);
    color: rgba(var(--text), 1);
  }
  /* @media (width <= 576px) {
    display: none;
  } */
`,qt=$.button`
  order: 5;
  margin-top: 0;
  padding: 0px;
  border-width: 0;
  cursor: pointer;
  display: block;
  flex-basis: auto;
  align-items: center;
  background-color: transparent;
  transition: var(--trans);

  svg {
    display: block;
    width: 40px;
    height: 40px;
    stroke: rgba(var(--bg-primary), 1);
    transition: var(--trans);
  }

  &:hover {
    svg {
      stroke: rgba(var(--bg-primary), 0.7);
    }
  }

  @media (width <= 576px) {
    display: none;
  }
`;var Xt=function(r){return Jt(r)&&!Qt(r)};function Jt(e){return!!e&&typeof e=="object"}function Qt(e){var r=Object.prototype.toString.call(e);return r==="[object RegExp]"||r==="[object Date]"||tn(e)}var en=typeof Symbol=="function"&&Symbol.for,rn=en?Symbol.for("react.element"):60103;function tn(e){return e.$$typeof===rn}function nn(e){return Array.isArray(e)?[]:{}}function ge(e,r){return r.clone!==!1&&r.isMergeableObject(e)?oe(nn(e),e,r):e}function an(e,r,t){return e.concat(r).map(function(n){return ge(n,t)})}function on(e,r,t){var n={};return t.isMergeableObject(e)&&Object.keys(e).forEach(function(i){n[i]=ge(e[i],t)}),Object.keys(r).forEach(function(i){!t.isMergeableObject(r[i])||!e[i]?n[i]=ge(r[i],t):n[i]=oe(e[i],r[i],t)}),n}function oe(e,r,t){t=t||{},t.arrayMerge=t.arrayMerge||an,t.isMergeableObject=t.isMergeableObject||Xt;var n=Array.isArray(r),i=Array.isArray(e),o=n===i;return o?n?t.arrayMerge(e,r,t):on(e,r,t):ge(r,t)}oe.all=function(r,t){if(!Array.isArray(r))throw new Error("first argument should be an array");return r.reduce(function(n,i){return oe(n,i,t)},{})};var Re=oe,sn=typeof global=="object"&&global&&global.Object===Object&&global;const Br=sn;var cn=typeof self=="object"&&self&&self.Object===Object&&self,un=Br||cn||Function("return this")();const D=un;var ln=D.Symbol;const U=ln;var Hr=Object.prototype,fn=Hr.hasOwnProperty,dn=Hr.toString,ae=U?U.toStringTag:void 0;function pn(e){var r=fn.call(e,ae),t=e[ae];try{e[ae]=void 0;var n=!0}catch{}var i=dn.call(e);return n&&(r?e[ae]=t:delete e[ae]),i}var hn=Object.prototype,gn=hn.toString;function vn(e){return gn.call(e)}var bn="[object Null]",yn="[object Undefined]",pr=U?U.toStringTag:void 0;function Y(e){return e==null?e===void 0?yn:bn:pr&&pr in Object(e)?pn(e):vn(e)}function zr(e,r){return function(t){return e(r(t))}}var mn=zr(Object.getPrototypeOf,Object);const Be=mn;function Z(e){return e!=null&&typeof e=="object"}var Tn="[object Object]",Sn=Function.prototype,En=Object.prototype,Gr=Sn.toString,jn=En.hasOwnProperty,_n=Gr.call(Object);function hr(e){if(!Z(e)||Y(e)!=Tn)return!1;var r=Be(e);if(r===null)return!0;var t=jn.call(r,"constructor")&&r.constructor;return typeof t=="function"&&t instanceof t&&Gr.call(t)==_n}var gr=Array.isArray,vr=Object.keys,xn=Object.prototype.hasOwnProperty,An=typeof Element<"u";function Pe(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){var t=gr(e),n=gr(r),i,o,s;if(t&&n){if(o=e.length,o!=r.length)return!1;for(i=o;i--!==0;)if(!Pe(e[i],r[i]))return!1;return!0}if(t!=n)return!1;var p=e instanceof Date,v=r instanceof Date;if(p!=v)return!1;if(p&&v)return e.getTime()==r.getTime();var y=e instanceof RegExp,C=r instanceof RegExp;if(y!=C)return!1;if(y&&C)return e.toString()==r.toString();var O=vr(e);if(o=O.length,o!==vr(r).length)return!1;for(i=o;i--!==0;)if(!xn.call(r,O[i]))return!1;if(An&&e instanceof Element&&r instanceof Element)return e===r;for(i=o;i--!==0;)if(s=O[i],!(s==="_owner"&&e.$$typeof)&&!Pe(e[s],r[s]))return!1;return!0}return e!==e&&r!==r}var wn=function(r,t){try{return Pe(r,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}};const z=Mt(wn);var $n=!0;function Cn(e,r){if(!$n){if(e)return;var t="Warning: "+r;typeof console<"u"&&console.warn(t);try{throw Error(t)}catch{}}}function On(){this.__data__=[],this.size=0}function Kr(e,r){return e===r||e!==e&&r!==r}function ve(e,r){for(var t=e.length;t--;)if(Kr(e[t][0],r))return t;return-1}var In=Array.prototype,Fn=In.splice;function Mn(e){var r=this.__data__,t=ve(r,e);if(t<0)return!1;var n=r.length-1;return t==n?r.pop():Fn.call(r,t,1),--this.size,!0}function Rn(e){var r=this.__data__,t=ve(r,e);return t<0?void 0:r[t][1]}function Pn(e){return ve(this.__data__,e)>-1}function Ln(e,r){var t=this.__data__,n=ve(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this}function V(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}V.prototype.clear=On;V.prototype.delete=Mn;V.prototype.get=Rn;V.prototype.has=Pn;V.prototype.set=Ln;function kn(){this.__data__=new V,this.size=0}function Dn(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t}function Nn(e){return this.__data__.get(e)}function Vn(e){return this.__data__.has(e)}function ue(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}var Un="[object AsyncFunction]",Bn="[object Function]",Hn="[object GeneratorFunction]",zn="[object Proxy]";function Wr(e){if(!ue(e))return!1;var r=Y(e);return r==Bn||r==Hn||r==Un||r==zn}var Gn=D["__core-js_shared__"];const Oe=Gn;var br=function(){var e=/[^.]+$/.exec(Oe&&Oe.keys&&Oe.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Kn(e){return!!br&&br in e}var Wn=Function.prototype,Yn=Wn.toString;function q(e){if(e!=null){try{return Yn.call(e)}catch{}try{return e+""}catch{}}return""}var Zn=/[\\^$.*+?()[\]{}|]/g,qn=/^\[object .+?Constructor\]$/,Xn=Function.prototype,Jn=Object.prototype,Qn=Xn.toString,ea=Jn.hasOwnProperty,ra=RegExp("^"+Qn.call(ea).replace(Zn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ta(e){if(!ue(e)||Kn(e))return!1;var r=Wr(e)?ra:qn;return r.test(q(e))}function na(e,r){return e==null?void 0:e[r]}function X(e,r){var t=na(e,r);return ta(t)?t:void 0}var aa=X(D,"Map");const se=aa;var ia=X(Object,"create");const ce=ia;function oa(){this.__data__=ce?ce(null):{},this.size=0}function sa(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r}var ca="__lodash_hash_undefined__",ua=Object.prototype,la=ua.hasOwnProperty;function fa(e){var r=this.__data__;if(ce){var t=r[e];return t===ca?void 0:t}return la.call(r,e)?r[e]:void 0}var da=Object.prototype,pa=da.hasOwnProperty;function ha(e){var r=this.__data__;return ce?r[e]!==void 0:pa.call(r,e)}var ga="__lodash_hash_undefined__";function va(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=ce&&r===void 0?ga:r,this}function W(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}W.prototype.clear=oa;W.prototype.delete=sa;W.prototype.get=fa;W.prototype.has=ha;W.prototype.set=va;function ba(){this.size=0,this.__data__={hash:new W,map:new(se||V),string:new W}}function ya(e){var r=typeof e;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?e!=="__proto__":e===null}function be(e,r){var t=e.__data__;return ya(r)?t[typeof r=="string"?"string":"hash"]:t.map}function ma(e){var r=be(this,e).delete(e);return this.size-=r?1:0,r}function Ta(e){return be(this,e).get(e)}function Sa(e){return be(this,e).has(e)}function Ea(e,r){var t=be(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this}function B(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}B.prototype.clear=ba;B.prototype.delete=ma;B.prototype.get=Ta;B.prototype.has=Sa;B.prototype.set=Ea;var ja=200;function _a(e,r){var t=this.__data__;if(t instanceof V){var n=t.__data__;if(!se||n.length<ja-1)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new B(n)}return t.set(e,r),this.size=t.size,this}function te(e){var r=this.__data__=new V(e);this.size=r.size}te.prototype.clear=kn;te.prototype.delete=Dn;te.prototype.get=Nn;te.prototype.has=Vn;te.prototype.set=_a;function xa(e,r){for(var t=-1,n=e==null?0:e.length;++t<n&&r(e[t],t,e)!==!1;);return e}var Aa=function(){try{var e=X(Object,"defineProperty");return e({},"",{}),e}catch{}}();const yr=Aa;function Yr(e,r,t){r=="__proto__"&&yr?yr(e,r,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[r]=t}var wa=Object.prototype,$a=wa.hasOwnProperty;function Zr(e,r,t){var n=e[r];(!($a.call(e,r)&&Kr(n,t))||t===void 0&&!(r in e))&&Yr(e,r,t)}function ye(e,r,t,n){var i=!t;t||(t={});for(var o=-1,s=r.length;++o<s;){var p=r[o],v=n?n(t[p],e[p],p,t,e):void 0;v===void 0&&(v=e[p]),i?Yr(t,p,v):Zr(t,p,v)}return t}function Ca(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n}var Oa="[object Arguments]";function mr(e){return Z(e)&&Y(e)==Oa}var qr=Object.prototype,Ia=qr.hasOwnProperty,Fa=qr.propertyIsEnumerable,Ma=mr(function(){return arguments}())?mr:function(e){return Z(e)&&Ia.call(e,"callee")&&!Fa.call(e,"callee")};const Ra=Ma;var Pa=Array.isArray;const le=Pa;function La(){return!1}var Xr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Tr=Xr&&typeof module=="object"&&module&&!module.nodeType&&module,ka=Tr&&Tr.exports===Xr,Sr=ka?D.Buffer:void 0,Da=Sr?Sr.isBuffer:void 0,Na=Da||La;const Jr=Na;var Va=9007199254740991,Ua=/^(?:0|[1-9]\d*)$/;function Ba(e,r){var t=typeof e;return r=r??Va,!!r&&(t=="number"||t!="symbol"&&Ua.test(e))&&e>-1&&e%1==0&&e<r}var Ha=9007199254740991;function Qr(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Ha}var za="[object Arguments]",Ga="[object Array]",Ka="[object Boolean]",Wa="[object Date]",Ya="[object Error]",Za="[object Function]",qa="[object Map]",Xa="[object Number]",Ja="[object Object]",Qa="[object RegExp]",ei="[object Set]",ri="[object String]",ti="[object WeakMap]",ni="[object ArrayBuffer]",ai="[object DataView]",ii="[object Float32Array]",oi="[object Float64Array]",si="[object Int8Array]",ci="[object Int16Array]",ui="[object Int32Array]",li="[object Uint8Array]",fi="[object Uint8ClampedArray]",di="[object Uint16Array]",pi="[object Uint32Array]",E={};E[ii]=E[oi]=E[si]=E[ci]=E[ui]=E[li]=E[fi]=E[di]=E[pi]=!0;E[za]=E[Ga]=E[ni]=E[Ka]=E[ai]=E[Wa]=E[Ya]=E[Za]=E[qa]=E[Xa]=E[Ja]=E[Qa]=E[ei]=E[ri]=E[ti]=!1;function hi(e){return Z(e)&&Qr(e.length)&&!!E[Y(e)]}function He(e){return function(r){return e(r)}}var et=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ie=et&&typeof module=="object"&&module&&!module.nodeType&&module,gi=ie&&ie.exports===et,Ie=gi&&Br.process,vi=function(){try{var e=ie&&ie.require&&ie.require("util").types;return e||Ie&&Ie.binding&&Ie.binding("util")}catch{}}();const re=vi;var Er=re&&re.isTypedArray,bi=Er?He(Er):hi;const yi=bi;var mi=Object.prototype,Ti=mi.hasOwnProperty;function rt(e,r){var t=le(e),n=!t&&Ra(e),i=!t&&!n&&Jr(e),o=!t&&!n&&!i&&yi(e),s=t||n||i||o,p=s?Ca(e.length,String):[],v=p.length;for(var y in e)(r||Ti.call(e,y))&&!(s&&(y=="length"||i&&(y=="offset"||y=="parent")||o&&(y=="buffer"||y=="byteLength"||y=="byteOffset")||Ba(y,v)))&&p.push(y);return p}var Si=Object.prototype;function ze(e){var r=e&&e.constructor,t=typeof r=="function"&&r.prototype||Si;return e===t}var Ei=zr(Object.keys,Object);const ji=Ei;var _i=Object.prototype,xi=_i.hasOwnProperty;function Ai(e){if(!ze(e))return ji(e);var r=[];for(var t in Object(e))xi.call(e,t)&&t!="constructor"&&r.push(t);return r}function tt(e){return e!=null&&Qr(e.length)&&!Wr(e)}function Ge(e){return tt(e)?rt(e):Ai(e)}function wi(e,r){return e&&ye(r,Ge(r),e)}function $i(e){var r=[];if(e!=null)for(var t in Object(e))r.push(t);return r}var Ci=Object.prototype,Oi=Ci.hasOwnProperty;function Ii(e){if(!ue(e))return $i(e);var r=ze(e),t=[];for(var n in e)n=="constructor"&&(r||!Oi.call(e,n))||t.push(n);return t}function Ke(e){return tt(e)?rt(e,!0):Ii(e)}function Fi(e,r){return e&&ye(r,Ke(r),e)}var nt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,jr=nt&&typeof module=="object"&&module&&!module.nodeType&&module,Mi=jr&&jr.exports===nt,_r=Mi?D.Buffer:void 0,xr=_r?_r.allocUnsafe:void 0;function Ri(e,r){if(r)return e.slice();var t=e.length,n=xr?xr(t):new e.constructor(t);return e.copy(n),n}function at(e,r){var t=-1,n=e.length;for(r||(r=Array(n));++t<n;)r[t]=e[t];return r}function Pi(e,r){for(var t=-1,n=e==null?0:e.length,i=0,o=[];++t<n;){var s=e[t];r(s,t,e)&&(o[i++]=s)}return o}function it(){return[]}var Li=Object.prototype,ki=Li.propertyIsEnumerable,Ar=Object.getOwnPropertySymbols,Di=Ar?function(e){return e==null?[]:(e=Object(e),Pi(Ar(e),function(r){return ki.call(e,r)}))}:it;const We=Di;function Ni(e,r){return ye(e,We(e),r)}function ot(e,r){for(var t=-1,n=r.length,i=e.length;++t<n;)e[i+t]=r[t];return e}var Vi=Object.getOwnPropertySymbols,Ui=Vi?function(e){for(var r=[];e;)ot(r,We(e)),e=Be(e);return r}:it;const st=Ui;function Bi(e,r){return ye(e,st(e),r)}function ct(e,r,t){var n=r(e);return le(e)?n:ot(n,t(e))}function Hi(e){return ct(e,Ge,We)}function zi(e){return ct(e,Ke,st)}var Gi=X(D,"DataView");const Le=Gi;var Ki=X(D,"Promise");const ke=Ki;var Wi=X(D,"Set");const De=Wi;var Yi=X(D,"WeakMap");const Ne=Yi;var wr="[object Map]",Zi="[object Object]",$r="[object Promise]",Cr="[object Set]",Or="[object WeakMap]",Ir="[object DataView]",qi=q(Le),Xi=q(se),Ji=q(ke),Qi=q(De),eo=q(Ne),G=Y;(Le&&G(new Le(new ArrayBuffer(1)))!=Ir||se&&G(new se)!=wr||ke&&G(ke.resolve())!=$r||De&&G(new De)!=Cr||Ne&&G(new Ne)!=Or)&&(G=function(e){var r=Y(e),t=r==Zi?e.constructor:void 0,n=t?q(t):"";if(n)switch(n){case qi:return Ir;case Xi:return wr;case Ji:return $r;case Qi:return Cr;case eo:return Or}return r});const Ye=G;var ro=Object.prototype,to=ro.hasOwnProperty;function no(e){var r=e.length,t=new e.constructor(r);return r&&typeof e[0]=="string"&&to.call(e,"index")&&(t.index=e.index,t.input=e.input),t}var ao=D.Uint8Array;const Fr=ao;function Ze(e){var r=new e.constructor(e.byteLength);return new Fr(r).set(new Fr(e)),r}function io(e,r){var t=r?Ze(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}var oo=/\w*$/;function so(e){var r=new e.constructor(e.source,oo.exec(e));return r.lastIndex=e.lastIndex,r}var Mr=U?U.prototype:void 0,Rr=Mr?Mr.valueOf:void 0;function co(e){return Rr?Object(Rr.call(e)):{}}function uo(e,r){var t=r?Ze(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}var lo="[object Boolean]",fo="[object Date]",po="[object Map]",ho="[object Number]",go="[object RegExp]",vo="[object Set]",bo="[object String]",yo="[object Symbol]",mo="[object ArrayBuffer]",To="[object DataView]",So="[object Float32Array]",Eo="[object Float64Array]",jo="[object Int8Array]",_o="[object Int16Array]",xo="[object Int32Array]",Ao="[object Uint8Array]",wo="[object Uint8ClampedArray]",$o="[object Uint16Array]",Co="[object Uint32Array]";function Oo(e,r,t){var n=e.constructor;switch(r){case mo:return Ze(e);case lo:case fo:return new n(+e);case To:return io(e,t);case So:case Eo:case jo:case _o:case xo:case Ao:case wo:case $o:case Co:return uo(e,t);case po:return new n;case ho:case bo:return new n(e);case go:return so(e);case vo:return new n;case yo:return co(e)}}var Pr=Object.create,Io=function(){function e(){}return function(r){if(!ue(r))return{};if(Pr)return Pr(r);e.prototype=r;var t=new e;return e.prototype=void 0,t}}();const Fo=Io;function Mo(e){return typeof e.constructor=="function"&&!ze(e)?Fo(Be(e)):{}}var Ro="[object Map]";function Po(e){return Z(e)&&Ye(e)==Ro}var Lr=re&&re.isMap,Lo=Lr?He(Lr):Po;const ko=Lo;var Do="[object Set]";function No(e){return Z(e)&&Ye(e)==Do}var kr=re&&re.isSet,Vo=kr?He(kr):No;const Uo=Vo;var Bo=1,Ho=2,zo=4,ut="[object Arguments]",Go="[object Array]",Ko="[object Boolean]",Wo="[object Date]",Yo="[object Error]",lt="[object Function]",Zo="[object GeneratorFunction]",qo="[object Map]",Xo="[object Number]",ft="[object Object]",Jo="[object RegExp]",Qo="[object Set]",es="[object String]",rs="[object Symbol]",ts="[object WeakMap]",ns="[object ArrayBuffer]",as="[object DataView]",is="[object Float32Array]",os="[object Float64Array]",ss="[object Int8Array]",cs="[object Int16Array]",us="[object Int32Array]",ls="[object Uint8Array]",fs="[object Uint8ClampedArray]",ds="[object Uint16Array]",ps="[object Uint32Array]",S={};S[ut]=S[Go]=S[ns]=S[as]=S[Ko]=S[Wo]=S[is]=S[os]=S[ss]=S[cs]=S[us]=S[qo]=S[Xo]=S[ft]=S[Jo]=S[Qo]=S[es]=S[rs]=S[ls]=S[fs]=S[ds]=S[ps]=!0;S[Yo]=S[lt]=S[ts]=!1;function he(e,r,t,n,i,o){var s,p=r&Bo,v=r&Ho,y=r&zo;if(t&&(s=i?t(e,n,i,o):t(e)),s!==void 0)return s;if(!ue(e))return e;var C=le(e);if(C){if(s=no(e),!p)return at(e,s)}else{var O=Ye(e),f=O==lt||O==Zo;if(Jr(e))return Ri(e,p);if(O==ft||O==ut||f&&!i){if(s=v||f?{}:Mo(e),!p)return v?Bi(e,Fi(s,e)):Ni(e,wi(s,e))}else{if(!S[O])return i?e:{};s=Oo(e,O,p)}}o||(o=new te);var x=o.get(e);if(x)return x;o.set(e,s),Uo(e)?e.forEach(function(w){s.add(he(w,r,t,w,e,o))}):ko(e)&&e.forEach(function(w,_){s.set(_,he(w,r,t,_,e,o))});var R=y?v?zi:Hi:v?Ke:Ge,I=C?void 0:R(e);return xa(I||e,function(w,_){I&&(_=w,w=e[_]),Zr(s,_,he(w,r,t,_,e,o))}),s}var hs=4;function Dr(e){return he(e,hs)}function dt(e,r){for(var t=-1,n=e==null?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i}var gs="[object Symbol]";function qe(e){return typeof e=="symbol"||Z(e)&&Y(e)==gs}var vs="Expected a function";function Xe(e,r){if(typeof e!="function"||r!=null&&typeof r!="function")throw new TypeError(vs);var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],o=t.cache;if(o.has(i))return o.get(i);var s=e.apply(this,n);return t.cache=o.set(i,s)||o,s};return t.cache=new(Xe.Cache||B),t}Xe.Cache=B;var bs=500;function ys(e){var r=Xe(e,function(n){return t.size===bs&&t.clear(),n}),t=r.cache;return r}var ms=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ts=/\\(\\)?/g,Ss=ys(function(e){var r=[];return e.charCodeAt(0)===46&&r.push(""),e.replace(ms,function(t,n,i,o){r.push(i?o.replace(Ts,"$1"):n||t)}),r});const Es=Ss;var js=1/0;function _s(e){if(typeof e=="string"||qe(e))return e;var r=e+"";return r=="0"&&1/e==-js?"-0":r}var xs=1/0,Nr=U?U.prototype:void 0,Vr=Nr?Nr.toString:void 0;function pt(e){if(typeof e=="string")return e;if(le(e))return dt(e,pt)+"";if(qe(e))return Vr?Vr.call(e):"";var r=e+"";return r=="0"&&1/e==-xs?"-0":r}function As(e){return e==null?"":pt(e)}function ht(e){return le(e)?dt(e,_s):qe(e)?[e]:at(Es(As(e)))}function j(){return j=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},j.apply(this,arguments)}function ee(e,r){if(e==null)return{};var t={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(r.indexOf(i)>=0)&&(t[i]=e[i]);return t}var me=l.createContext(void 0);me.displayName="FormikContext";var ws=me.Provider;me.Consumer;function gt(){var e=l.useContext(me);return e||Cn(!1),e}var M=function(r){return typeof r=="function"},Te=function(r){return r!==null&&typeof r=="object"},$s=function(r){return String(Math.floor(Number(r)))===r},Fe=function(r){return Object.prototype.toString.call(r)==="[object String]"},Cs=function(r){return l.Children.count(r)===0},Me=function(r){return Te(r)&&M(r.then)};function F(e,r,t,n){n===void 0&&(n=0);for(var i=ht(r);e&&n<i.length;)e=e[i[n++]];return n!==i.length&&!e||e===void 0?t:e}function K(e,r,t){for(var n=Dr(e),i=n,o=0,s=ht(r);o<s.length-1;o++){var p=s[o],v=F(e,s.slice(0,o+1));if(v&&(Te(v)||Array.isArray(v)))i=i[p]=Dr(v);else{var y=s[o+1];i=i[p]=$s(y)&&Number(y)>=0?[]:{}}}return(o===0?e:i)[s[o]]===t?e:(t===void 0?delete i[s[o]]:i[s[o]]=t,o===0&&t===void 0&&delete n[s[o]],n)}function vt(e,r,t,n){t===void 0&&(t=new WeakMap),n===void 0&&(n={});for(var i=0,o=Object.keys(e);i<o.length;i++){var s=o[i],p=e[s];Te(p)?t.get(p)||(t.set(p,!0),n[s]=Array.isArray(p)?[]:{},vt(p,r,t,n[s])):n[s]=r}return n}function Os(e,r){switch(r.type){case"SET_VALUES":return j({},e,{values:r.payload});case"SET_TOUCHED":return j({},e,{touched:r.payload});case"SET_ERRORS":return z(e.errors,r.payload)?e:j({},e,{errors:r.payload});case"SET_STATUS":return j({},e,{status:r.payload});case"SET_ISSUBMITTING":return j({},e,{isSubmitting:r.payload});case"SET_ISVALIDATING":return j({},e,{isValidating:r.payload});case"SET_FIELD_VALUE":return j({},e,{values:K(e.values,r.payload.field,r.payload.value)});case"SET_FIELD_TOUCHED":return j({},e,{touched:K(e.touched,r.payload.field,r.payload.value)});case"SET_FIELD_ERROR":return j({},e,{errors:K(e.errors,r.payload.field,r.payload.value)});case"RESET_FORM":return j({},e,r.payload);case"SET_FORMIK_STATE":return r.payload(e);case"SUBMIT_ATTEMPT":return j({},e,{touched:vt(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return j({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return j({},e,{isSubmitting:!1});default:return e}}var H={},pe={};function Is(e){var r=e.validateOnChange,t=r===void 0?!0:r,n=e.validateOnBlur,i=n===void 0?!0:n,o=e.validateOnMount,s=o===void 0?!1:o,p=e.isInitialValid,v=e.enableReinitialize,y=v===void 0?!1:v,C=e.onSubmit,O=ee(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=j({validateOnChange:t,validateOnBlur:i,validateOnMount:s,onSubmit:C},O),x=l.useRef(f.initialValues),R=l.useRef(f.initialErrors||H),I=l.useRef(f.initialTouched||pe),w=l.useRef(f.initialStatus),_=l.useRef(!1),P=l.useRef({});l.useEffect(function(){return _.current=!0,function(){_.current=!1}},[]);var Se=l.useState(0),Ee=Se[1],fe=l.useRef({values:f.initialValues,errors:f.initialErrors||H,touched:f.initialTouched||pe,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),T=fe.current,m=l.useCallback(function(a){var c=fe.current;fe.current=Os(c,a),c!==fe.current&&Ee(function(u){return u+1})},[]),Je=l.useCallback(function(a,c){return new Promise(function(u,d){var h=f.validate(a,c);h==null?u(H):Me(h)?h.then(function(b){u(b||H)},function(b){d(b)}):u(h)})},[f.validate]),je=l.useCallback(function(a,c){var u=f.validationSchema,d=M(u)?u(c):u,h=c&&d.validateAt?d.validateAt(c,a):Rs(a,d);return new Promise(function(b,A){h.then(function(){b(H)},function(N){N.name==="ValidationError"?b(Ms(N)):A(N)})})},[f.validationSchema]),Qe=l.useCallback(function(a,c){return new Promise(function(u){return u(P.current[a].validate(c))})},[]),er=l.useCallback(function(a){var c=Object.keys(P.current).filter(function(d){return M(P.current[d].validate)}),u=c.length>0?c.map(function(d){return Qe(d,F(a,d))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(u).then(function(d){return d.reduce(function(h,b,A){return b==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||b&&(h=K(h,c[A],b)),h},{})})},[Qe]),mt=l.useCallback(function(a){return Promise.all([er(a),f.validationSchema?je(a):{},f.validate?Je(a):{}]).then(function(c){var u=c[0],d=c[1],h=c[2],b=Re.all([u,d,h],{arrayMerge:Ps});return b})},[f.validate,f.validationSchema,er,Je,je]),k=L(function(a){return a===void 0&&(a=T.values),m({type:"SET_ISVALIDATING",payload:!0}),mt(a).then(function(c){return _.current&&(m({type:"SET_ISVALIDATING",payload:!1}),m({type:"SET_ERRORS",payload:c})),c})});l.useEffect(function(){s&&_.current===!0&&z(x.current,f.initialValues)&&k(x.current)},[s,k]);var ne=l.useCallback(function(a){var c=a&&a.values?a.values:x.current,u=a&&a.errors?a.errors:R.current?R.current:f.initialErrors||{},d=a&&a.touched?a.touched:I.current?I.current:f.initialTouched||{},h=a&&a.status?a.status:w.current?w.current:f.initialStatus;x.current=c,R.current=u,I.current=d,w.current=h;var b=function(){m({type:"RESET_FORM",payload:{isSubmitting:!!a&&!!a.isSubmitting,errors:u,touched:d,status:h,values:c,isValidating:!!a&&!!a.isValidating,submitCount:a&&a.submitCount&&typeof a.submitCount=="number"?a.submitCount:0}})};if(f.onReset){var A=f.onReset(T.values,lr);Me(A)?A.then(b):b()}else b()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);l.useEffect(function(){_.current===!0&&!z(x.current,f.initialValues)&&y&&(x.current=f.initialValues,ne(),s&&k(x.current))},[y,f.initialValues,ne,s,k]),l.useEffect(function(){y&&_.current===!0&&!z(R.current,f.initialErrors)&&(R.current=f.initialErrors||H,m({type:"SET_ERRORS",payload:f.initialErrors||H}))},[y,f.initialErrors]),l.useEffect(function(){y&&_.current===!0&&!z(I.current,f.initialTouched)&&(I.current=f.initialTouched||pe,m({type:"SET_TOUCHED",payload:f.initialTouched||pe}))},[y,f.initialTouched]),l.useEffect(function(){y&&_.current===!0&&!z(w.current,f.initialStatus)&&(w.current=f.initialStatus,m({type:"SET_STATUS",payload:f.initialStatus}))},[y,f.initialStatus,f.initialTouched]);var rr=L(function(a){if(P.current[a]&&M(P.current[a].validate)){var c=F(T.values,a),u=P.current[a].validate(c);return Me(u)?(m({type:"SET_ISVALIDATING",payload:!0}),u.then(function(d){return d}).then(function(d){m({type:"SET_FIELD_ERROR",payload:{field:a,value:d}}),m({type:"SET_ISVALIDATING",payload:!1})})):(m({type:"SET_FIELD_ERROR",payload:{field:a,value:u}}),Promise.resolve(u))}else if(f.validationSchema)return m({type:"SET_ISVALIDATING",payload:!0}),je(T.values,a).then(function(d){return d}).then(function(d){m({type:"SET_FIELD_ERROR",payload:{field:a,value:F(d,a)}}),m({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Tt=l.useCallback(function(a,c){var u=c.validate;P.current[a]={validate:u}},[]),St=l.useCallback(function(a){delete P.current[a]},[]),tr=L(function(a,c){m({type:"SET_TOUCHED",payload:a});var u=c===void 0?i:c;return u?k(T.values):Promise.resolve()}),nr=l.useCallback(function(a){m({type:"SET_ERRORS",payload:a})},[]),ar=L(function(a,c){var u=M(a)?a(T.values):a;m({type:"SET_VALUES",payload:u});var d=c===void 0?t:c;return d?k(u):Promise.resolve()}),de=l.useCallback(function(a,c){m({type:"SET_FIELD_ERROR",payload:{field:a,value:c}})},[]),J=L(function(a,c,u){m({type:"SET_FIELD_VALUE",payload:{field:a,value:c}});var d=u===void 0?t:u;return d?k(K(T.values,a,c)):Promise.resolve()}),ir=l.useCallback(function(a,c){var u=c,d=a,h;if(!Fe(a)){a.persist&&a.persist();var b=a.target?a.target:a.currentTarget,A=b.type,N=b.name,$e=b.id,Ce=b.value,Ot=b.checked,ec=b.outerHTML,fr=b.options,It=b.multiple;u=c||N||$e,d=/number|range/.test(A)?(h=parseFloat(Ce),isNaN(h)?"":h):/checkbox/.test(A)?ks(F(T.values,u),Ot,Ce):fr&&It?Ls(fr):Ce}u&&J(u,d)},[J,T.values]),_e=L(function(a){if(Fe(a))return function(c){return ir(c,a)};ir(a)}),Q=L(function(a,c,u){c===void 0&&(c=!0),m({type:"SET_FIELD_TOUCHED",payload:{field:a,value:c}});var d=u===void 0?i:u;return d?k(T.values):Promise.resolve()}),or=l.useCallback(function(a,c){a.persist&&a.persist();var u=a.target,d=u.name,h=u.id,b=u.outerHTML,A=c||d||h;Q(A,!0)},[Q]),xe=L(function(a){if(Fe(a))return function(c){return or(c,a)};or(a)}),sr=l.useCallback(function(a){M(a)?m({type:"SET_FORMIK_STATE",payload:a}):m({type:"SET_FORMIK_STATE",payload:function(){return a}})},[]),cr=l.useCallback(function(a){m({type:"SET_STATUS",payload:a})},[]),ur=l.useCallback(function(a){m({type:"SET_ISSUBMITTING",payload:a})},[]),Ae=L(function(){return m({type:"SUBMIT_ATTEMPT"}),k().then(function(a){var c=a instanceof Error,u=!c&&Object.keys(a).length===0;if(u){var d;try{if(d=jt(),d===void 0)return}catch(h){throw h}return Promise.resolve(d).then(function(h){return _.current&&m({type:"SUBMIT_SUCCESS"}),h}).catch(function(h){if(_.current)throw m({type:"SUBMIT_FAILURE"}),h})}else if(_.current&&(m({type:"SUBMIT_FAILURE"}),c))throw a})}),Et=L(function(a){a&&a.preventDefault&&M(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&M(a.stopPropagation)&&a.stopPropagation(),Ae().catch(function(c){console.warn("Warning: An unhandled error was caught from submitForm()",c)})}),lr={resetForm:ne,validateForm:k,validateField:rr,setErrors:nr,setFieldError:de,setFieldTouched:Q,setFieldValue:J,setStatus:cr,setSubmitting:ur,setTouched:tr,setValues:ar,setFormikState:sr,submitForm:Ae},jt=L(function(){return C(T.values,lr)}),_t=L(function(a){a&&a.preventDefault&&M(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&M(a.stopPropagation)&&a.stopPropagation(),ne()}),xt=l.useCallback(function(a){return{value:F(T.values,a),error:F(T.errors,a),touched:!!F(T.touched,a),initialValue:F(x.current,a),initialTouched:!!F(I.current,a),initialError:F(R.current,a)}},[T.errors,T.touched,T.values]),At=l.useCallback(function(a){return{setValue:function(u,d){return J(a,u,d)},setTouched:function(u,d){return Q(a,u,d)},setError:function(u){return de(a,u)}}},[J,Q,de]),wt=l.useCallback(function(a){var c=Te(a),u=c?a.name:a,d=F(T.values,u),h={name:u,value:d,onChange:_e,onBlur:xe};if(c){var b=a.type,A=a.value,N=a.as,$e=a.multiple;b==="checkbox"?A===void 0?h.checked=!!d:(h.checked=!!(Array.isArray(d)&&~d.indexOf(A)),h.value=A):b==="radio"?(h.checked=d===A,h.value=A):N==="select"&&$e&&(h.value=h.value||[],h.multiple=!0)}return h},[xe,_e,T.values]),we=l.useMemo(function(){return!z(x.current,T.values)},[x.current,T.values]),$t=l.useMemo(function(){return typeof p<"u"?we?T.errors&&Object.keys(T.errors).length===0:p!==!1&&M(p)?p(f):p:T.errors&&Object.keys(T.errors).length===0},[p,we,T.errors,f]),Ct=j({},T,{initialValues:x.current,initialErrors:R.current,initialTouched:I.current,initialStatus:w.current,handleBlur:xe,handleChange:_e,handleReset:_t,handleSubmit:Et,resetForm:ne,setErrors:nr,setFormikState:sr,setFieldTouched:Q,setFieldValue:J,setFieldError:de,setStatus:cr,setSubmitting:ur,setTouched:tr,setValues:ar,submitForm:Ae,validateForm:k,validateField:rr,isValid:$t,dirty:we,unregisterField:St,registerField:Tt,getFieldProps:wt,getFieldMeta:xt,getFieldHelpers:At,validateOnBlur:i,validateOnChange:t,validateOnMount:s});return Ct}function Fs(e){var r=Is(e),t=e.component,n=e.children,i=e.render,o=e.innerRef;return l.useImperativeHandle(o,function(){return r}),l.createElement(ws,{value:r},t?l.createElement(t,r):i?i(r):n?M(n)?n(r):Cs(n)?null:l.Children.only(n):null)}function Ms(e){var r={};if(e.inner){if(e.inner.length===0)return K(r,e.path,e.message);for(var i=e.inner,t=Array.isArray(i),n=0,i=t?i:i[Symbol.iterator]();;){var o;if(t){if(n>=i.length)break;o=i[n++]}else{if(n=i.next(),n.done)break;o=n.value}var s=o;F(r,s.path)||(r=K(r,s.path,s.message))}}return r}function Rs(e,r,t,n){t===void 0&&(t=!1);var i=Ve(e);return r[t?"validateSync":"validate"](i,{abortEarly:!1,context:n||i})}function Ve(e){var r=Array.isArray(e)?[]:{};for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var n=String(t);Array.isArray(e[n])===!0?r[n]=e[n].map(function(i){return Array.isArray(i)===!0||hr(i)?Ve(i):i!==""?i:void 0}):hr(e[n])?r[n]=Ve(e[n]):r[n]=e[n]!==""?e[n]:void 0}return r}function Ps(e,r,t){var n=e.slice();return r.forEach(function(o,s){if(typeof n[s]>"u"){var p=t.clone!==!1,v=p&&t.isMergeableObject(o);n[s]=v?Re(Array.isArray(o)?[]:{},o,t):o}else t.isMergeableObject(o)?n[s]=Re(e[s],o,t):e.indexOf(o)===-1&&n.push(o)}),n}function Ls(e){return Array.from(e).filter(function(r){return r.selected}).map(function(r){return r.value})}function ks(e,r,t){if(typeof e=="boolean")return!!r;var n=[],i=!1,o=-1;if(Array.isArray(e))n=e,o=e.indexOf(t),i=o>=0;else if(!t||t=="true"||t=="false")return!!r;return r&&t&&!i?n.concat(t):i?n.slice(0,o).concat(n.slice(o+1)):n}var Ds=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?l.useLayoutEffect:l.useEffect;function L(e){var r=l.useRef(e);return Ds(function(){r.current=e}),l.useCallback(function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return r.current.apply(void 0,n)},[])}function Ns(e){var r=e.validate,t=e.name,n=e.render,i=e.children,o=e.as,s=e.component,p=e.className,v=ee(e,["validate","name","render","children","as","component","className"]),y=gt(),C=ee(y,["validate","validationSchema"]),O=C.registerField,f=C.unregisterField;l.useEffect(function(){return O(t,{validate:r}),function(){f(t)}},[O,f,t,r]);var x=C.getFieldProps(j({name:t},v)),R=C.getFieldMeta(t),I={field:x,form:C};if(n)return n(j({},I,{meta:R}));if(M(i))return i(j({},I,{meta:R}));if(s){if(typeof s=="string"){var w=v.innerRef,_=ee(v,["innerRef"]);return l.createElement(s,j({ref:w},x,_,{className:p}),i)}return l.createElement(s,j({field:x,form:C},v,{className:p}),i)}var P=o||"input";if(typeof P=="string"){var Se=v.innerRef,Ee=ee(v,["innerRef"]);return l.createElement(P,j({ref:Se},x,Ee,{className:p}),i)}return l.createElement(P,j({},x,v,{className:p}),i)}var bt=l.forwardRef(function(e,r){var t=e.action,n=ee(e,["action"]),i=t??"#",o=gt(),s=o.handleReset,p=o.handleSubmit;return l.createElement("form",j({onSubmit:p,ref:r,onReset:s,action:i},n))});bt.displayName="Form";const Vs=$(bt)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
  border: 2px solid rgba(var(--bg-primary), 1);
  border-radius: 4px;
  overflow: hidden;
  order: 3;
  background-color: transparent;
  transition: var(--trans);

  &:hover {
    border-color: rgba(var(--bg-primary), 0.7);
  }
  /* @media (width <= 576px) {
    display: none;
  } */
`,Us=$.button`
  padding: 0;
  color: rgba(var(--text), 1);
  width: 36px;
  height: 36px;
  border: 0;
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(var(--bg-primary), 1);
  transition: var(--trans);

  &:hover {
    background-color: rgba(var(--bg-primary), 0.7);
  }

  svg {
    width: 25px;
    height: 25px;
    fill: rgba(var(--text), 1);
    transition: var(--trans);
  }
`,Bs=$.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`,Hs=$(Ns)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  color-scheme: dark;
  color: rgba(var(--text-primary), 0.7);
  background-color: transparent;
  transition: var(--trans);

  &::placeholder {
    font: inherit;
    font-size: 18px;
    background-color: transparent;
    color: rgba(var(--text-primary), 0.7);
    transition: var(--trans);
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    outline: 3px solid black;
  }
`;function zs(){const e=Rt(),r=({search:t},n)=>{if(t.trim()===""){Ut.error("Please enter a word to search for");return}e(`movies?query=${encodeURIComponent(t)}`),n.resetForm()};return g.jsx(Fs,{initialValues:{search:""},onSubmit:r,children:g.jsxs(Vs,{children:[g.jsx(Us,{type:"submit",value:"submit",children:g.jsx(Dt,{})}),g.jsx(Bs,{htmlFor:"search"}),g.jsx(Hs,{type:"text",id:"search",name:"search",placeholder:"Search"})]})})}function Gs(e){return Ue({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"}}]})(e)}function Ks(e){return Ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"}}]})(e)}const Ws=$.label`
  display: flex;
  align-items: center;
  justify-content: center;
  order: 2;
  cursor: pointer;
  user-select: none;

  svg {
    font-size: 30px;
    fill: rgba(var(--bg-primary), 1);
    transition: var(--trans);
  }

  &:hover {
    svg {
      fill: rgba(var(--bg-primary), 0.7);
    }
  }

  input {
    cursor: pointer;
    opacity: 0;
  }
`,yt=Pt`   
  0% {
    transform: rotate(-360deg) scale(0);
    opacity: 0;
  }

  75% {
    transform: rotate(25deg);
  }
`,Ys=$(Gs)`
  animation: ${yt} 0.5s;
`,Zs=$(Ks)`
  animation: ${yt} 0.5s;
`;function qs(){const[e,r]=l.useState(()=>{const n=window.matchMedia("(prefers-color-scheme: dark)").matches;return localStorage.getItem("theme")||(n?"dark":"light")});l.useEffect(()=>{localStorage.setItem("theme",e)},[e]),l.useEffect(()=>{const{body:n}=document;n.dataset.theme=e},[e]);const t=()=>{r(e==="light"?"dark":"light")};return g.jsxs(Ws,{className:"switcher",children:[g.jsx("input",{type:"checkbox",onChange:t,checked:e==="dark"}),e==="dark"?g.jsx(Ys,{}):g.jsx(Zs,{})]})}function Xs(){return g.jsx(Kt,{children:g.jsxs(Wt,{children:[g.jsx(Yt,{children:g.jsx(Lt,{to:"/",children:g.jsx(Gt,{})})}),g.jsx(Zt,{children:g.jsxs("ul",{children:[g.jsx("li",{children:g.jsx(dr,{to:"/",children:"Home"})}),g.jsx("li",{children:g.jsx(dr,{to:"/movies",children:"Movies"})})]})}),g.jsx(zs,{}),g.jsx(qs,{}),g.jsx(qt,{type:"button",children:g.jsx(Nt,{})})]})})}const Js=$.main``;function Qs(){return g.jsx(Js,{children:g.jsx(Ur,{children:g.jsx(l.Suspense,{fallback:g.jsx(Vt,{}),children:g.jsx(kt,{})})})})}function ic(){return g.jsxs(Bt,{children:[g.jsx(Xs,{}),g.jsx(Qs,{}),g.jsx(zt,{})]})}export{ic as default};
