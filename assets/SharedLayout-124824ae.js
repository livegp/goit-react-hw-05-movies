import{s as A,j as p,G as Be,L as Ft,r as u,N as Mt,g as Rt,u as Lt,c as Pt,O as kt}from"./index-f6414a0a.js";import{I as Dt,A as Nt}from"./index.esm-2ba1b154.js";import Vt from"./Loader-f2a70570.js";import{Q as Bt}from"./react-toastify.esm-006ac346.js";const Ut=A.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100%;
`,Ue=A.div`
  max-width: 1160px;
  padding: 25px 10px;
  margin: 0 auto;
`,zt=A.footer`
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
`;function Ht(){return p.jsx(zt,{children:p.jsx(Ue,{children:p.jsxs("p",{children:[" ","© 2023 Movies App. All rights reserved. Designed and Developed by"," ",p.jsx("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/oleksandr-pishta",children:"Oleksandr Pishta"})]})})})}const Gt=A.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: rgba(var(--accent), 1);
  transition: var(--trans);
`,Kt=A(Ue)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 100%;
  padding: 15px;
  gap: 25px;
`,Wt=A.button`
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
`;function Yt(){return p.jsx(Wt,{type:"button",children:p.jsx(Dt,{})})}function Zt(e){return Be({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 20H20V22H12C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.2512 21.2561 16.3287 20.0007 18H17.2916C18.9525 16.5341 20 14.3894 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8C14 9.10457 13.1046 10 12 10ZM8 14C6.89543 14 6 13.1046 6 12C6 10.8954 6.89543 10 8 10C9.10457 10 10 10.8954 10 12C10 13.1046 9.10457 14 8 14ZM16 14C14.8954 14 14 13.1046 14 12C14 10.8954 14.8954 10 16 10C17.1046 10 18 10.8954 18 12C18 13.1046 17.1046 14 16 14ZM12 18C10.8954 18 10 17.1046 10 16C10 14.8954 10.8954 14 12 14C13.1046 14 14 14.8954 14 16C14 17.1046 13.1046 18 12 18Z"}}]})(e)}const qt=A.div`
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

    a {
      color: rgba(var(--bg-primary), 0.7);
    }
  }

  a {
    display: flex;
    gap: 5px;
    align-items: center;
    font-size: 30px;
    font-weight: bold;
    text-transform: uppercase;
    color: rgba(var(--bg-primary), 1);
    transition: var(--trans);
  }
`;function Xt(){return p.jsx(qt,{children:p.jsxs(Ft,{to:"/",children:[p.jsx(Zt,{}),p.jsx("p",{children:"Movies"})]})})}const Jt=A.label`
  order: 6;
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  width: 44px;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
  background-color: rgba(var(--bg-primary), 1);
  transition: var(--trans);

  &:hover {
    background-color: rgba(var(--bg-primary), 0.7);
  }

  &:hover input:checked span::before {
    width: 10px;
  }

  input {
    opacity: 0;
    display: none;
    pointer-events: none;

    &:checked ~ span {
      background-color: transparent;
    }

    &:checked ~ span::before {
      top: 0;
      transform: rotate(45deg);
    }

    &:checked ~ span::after {
      top: 0;
      transform: rotate(-45deg);
    }

    &:checked:hover ~ span {
      transform: rotate(-90deg);
    }
  }

  span {
    position: relative;
    display: block;
    width: 20px;
    height: 2px;
    background-color: rgba(var(--accent), 1);
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &::after,
    &:before {
      position: absolute;
      left: 0;
      width: 20px;
      height: 100%;
      background-color: rgba(var(--accent), 1);
      transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
      content: '';
    }

    &::after {
      top: 6px;
    }

    &:before {
      top: -6px;
    }
  }
`;function Qt(){const[e,r]=u.useState(!1),t=n=>{r(n.target.checked)};return p.jsxs(Jt,{htmlFor:"menu-check",children:[p.jsx("input",{id:"menu-check","aria-hidden":"true",type:"checkbox",checked:e,onChange:t}),p.jsx("span",{})]})}const en=A.nav`
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
`,pr=A(Mt)`
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
`;function rn(){return p.jsx(en,{children:p.jsxs("ul",{children:[p.jsx("li",{children:p.jsx(pr,{to:"/",children:"Home"})}),p.jsx("li",{children:p.jsx(pr,{to:"/movies",children:"Movies"})})]})})}var tn=function(r){return nn(r)&&!an(r)};function nn(e){return!!e&&typeof e=="object"}function an(e){var r=Object.prototype.toString.call(e);return r==="[object RegExp]"||r==="[object Date]"||cn(e)}var on=typeof Symbol=="function"&&Symbol.for,sn=on?Symbol.for("react.element"):60103;function cn(e){return e.$$typeof===sn}function un(e){return Array.isArray(e)?[]:{}}function ge(e,r){return r.clone!==!1&&r.isMergeableObject(e)?oe(un(e),e,r):e}function ln(e,r,t){return e.concat(r).map(function(n){return ge(n,t)})}function fn(e,r,t){var n={};return t.isMergeableObject(e)&&Object.keys(e).forEach(function(i){n[i]=ge(e[i],t)}),Object.keys(r).forEach(function(i){!t.isMergeableObject(r[i])||!e[i]?n[i]=ge(r[i],t):n[i]=oe(e[i],r[i],t)}),n}function oe(e,r,t){t=t||{},t.arrayMerge=t.arrayMerge||ln,t.isMergeableObject=t.isMergeableObject||tn;var n=Array.isArray(r),i=Array.isArray(e),o=n===i;return o?n?t.arrayMerge(e,r,t):fn(e,r,t):ge(r,t)}oe.all=function(r,t){if(!Array.isArray(r))throw new Error("first argument should be an array");return r.reduce(function(n,i){return oe(n,i,t)},{})};var Re=oe,dn=typeof global=="object"&&global&&global.Object===Object&&global;const Ur=dn;var pn=typeof self=="object"&&self&&self.Object===Object&&self,hn=Ur||pn||Function("return this")();const D=hn;var gn=D.Symbol;const B=gn;var zr=Object.prototype,vn=zr.hasOwnProperty,bn=zr.toString,ae=B?B.toStringTag:void 0;function yn(e){var r=vn.call(e,ae),t=e[ae];try{e[ae]=void 0;var n=!0}catch{}var i=bn.call(e);return n&&(r?e[ae]=t:delete e[ae]),i}var mn=Object.prototype,Tn=mn.toString;function Sn(e){return Tn.call(e)}var En="[object Null]",jn="[object Undefined]",hr=B?B.toStringTag:void 0;function Y(e){return e==null?e===void 0?jn:En:hr&&hr in Object(e)?yn(e):Sn(e)}function Hr(e,r){return function(t){return e(r(t))}}var xn=Hr(Object.getPrototypeOf,Object);const ze=xn;function Z(e){return e!=null&&typeof e=="object"}var _n="[object Object]",wn=Function.prototype,An=Object.prototype,Gr=wn.toString,$n=An.hasOwnProperty,Cn=Gr.call(Object);function gr(e){if(!Z(e)||Y(e)!=_n)return!1;var r=ze(e);if(r===null)return!0;var t=$n.call(r,"constructor")&&r.constructor;return typeof t=="function"&&t instanceof t&&Gr.call(t)==Cn}var vr=Array.isArray,br=Object.keys,On=Object.prototype.hasOwnProperty,In=typeof Element<"u";function Le(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){var t=vr(e),n=vr(r),i,o,s;if(t&&n){if(o=e.length,o!=r.length)return!1;for(i=o;i--!==0;)if(!Le(e[i],r[i]))return!1;return!0}if(t!=n)return!1;var h=e instanceof Date,v=r instanceof Date;if(h!=v)return!1;if(h&&v)return e.getTime()==r.getTime();var y=e instanceof RegExp,C=r instanceof RegExp;if(y!=C)return!1;if(y&&C)return e.toString()==r.toString();var O=br(e);if(o=O.length,o!==br(r).length)return!1;for(i=o;i--!==0;)if(!On.call(r,O[i]))return!1;if(In&&e instanceof Element&&r instanceof Element)return e===r;for(i=o;i--!==0;)if(s=O[i],!(s==="_owner"&&e.$$typeof)&&!Le(e[s],r[s]))return!1;return!0}return e!==e&&r!==r}var Fn=function(r,t){try{return Le(r,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}};const H=Rt(Fn);var Mn=!0;function Rn(e,r){if(!Mn){if(e)return;var t="Warning: "+r;typeof console<"u"&&console.warn(t);try{throw Error(t)}catch{}}}function Ln(){this.__data__=[],this.size=0}function Kr(e,r){return e===r||e!==e&&r!==r}function ve(e,r){for(var t=e.length;t--;)if(Kr(e[t][0],r))return t;return-1}var Pn=Array.prototype,kn=Pn.splice;function Dn(e){var r=this.__data__,t=ve(r,e);if(t<0)return!1;var n=r.length-1;return t==n?r.pop():kn.call(r,t,1),--this.size,!0}function Nn(e){var r=this.__data__,t=ve(r,e);return t<0?void 0:r[t][1]}function Vn(e){return ve(this.__data__,e)>-1}function Bn(e,r){var t=this.__data__,n=ve(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this}function V(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}V.prototype.clear=Ln;V.prototype.delete=Dn;V.prototype.get=Nn;V.prototype.has=Vn;V.prototype.set=Bn;function Un(){this.__data__=new V,this.size=0}function zn(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t}function Hn(e){return this.__data__.get(e)}function Gn(e){return this.__data__.has(e)}function ue(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}var Kn="[object AsyncFunction]",Wn="[object Function]",Yn="[object GeneratorFunction]",Zn="[object Proxy]";function Wr(e){if(!ue(e))return!1;var r=Y(e);return r==Wn||r==Yn||r==Kn||r==Zn}var qn=D["__core-js_shared__"];const Oe=qn;var yr=function(){var e=/[^.]+$/.exec(Oe&&Oe.keys&&Oe.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Xn(e){return!!yr&&yr in e}var Jn=Function.prototype,Qn=Jn.toString;function q(e){if(e!=null){try{return Qn.call(e)}catch{}try{return e+""}catch{}}return""}var ea=/[\\^$.*+?()[\]{}|]/g,ra=/^\[object .+?Constructor\]$/,ta=Function.prototype,na=Object.prototype,aa=ta.toString,ia=na.hasOwnProperty,oa=RegExp("^"+aa.call(ia).replace(ea,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function sa(e){if(!ue(e)||Xn(e))return!1;var r=Wr(e)?oa:ra;return r.test(q(e))}function ca(e,r){return e==null?void 0:e[r]}function X(e,r){var t=ca(e,r);return sa(t)?t:void 0}var ua=X(D,"Map");const se=ua;var la=X(Object,"create");const ce=la;function fa(){this.__data__=ce?ce(null):{},this.size=0}function da(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r}var pa="__lodash_hash_undefined__",ha=Object.prototype,ga=ha.hasOwnProperty;function va(e){var r=this.__data__;if(ce){var t=r[e];return t===pa?void 0:t}return ga.call(r,e)?r[e]:void 0}var ba=Object.prototype,ya=ba.hasOwnProperty;function ma(e){var r=this.__data__;return ce?r[e]!==void 0:ya.call(r,e)}var Ta="__lodash_hash_undefined__";function Sa(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=ce&&r===void 0?Ta:r,this}function W(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}W.prototype.clear=fa;W.prototype.delete=da;W.prototype.get=va;W.prototype.has=ma;W.prototype.set=Sa;function Ea(){this.size=0,this.__data__={hash:new W,map:new(se||V),string:new W}}function ja(e){var r=typeof e;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?e!=="__proto__":e===null}function be(e,r){var t=e.__data__;return ja(r)?t[typeof r=="string"?"string":"hash"]:t.map}function xa(e){var r=be(this,e).delete(e);return this.size-=r?1:0,r}function _a(e){return be(this,e).get(e)}function wa(e){return be(this,e).has(e)}function Aa(e,r){var t=be(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this}function U(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}U.prototype.clear=Ea;U.prototype.delete=xa;U.prototype.get=_a;U.prototype.has=wa;U.prototype.set=Aa;var $a=200;function Ca(e,r){var t=this.__data__;if(t instanceof V){var n=t.__data__;if(!se||n.length<$a-1)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new U(n)}return t.set(e,r),this.size=t.size,this}function te(e){var r=this.__data__=new V(e);this.size=r.size}te.prototype.clear=Un;te.prototype.delete=zn;te.prototype.get=Hn;te.prototype.has=Gn;te.prototype.set=Ca;function Oa(e,r){for(var t=-1,n=e==null?0:e.length;++t<n&&r(e[t],t,e)!==!1;);return e}var Ia=function(){try{var e=X(Object,"defineProperty");return e({},"",{}),e}catch{}}();const mr=Ia;function Yr(e,r,t){r=="__proto__"&&mr?mr(e,r,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[r]=t}var Fa=Object.prototype,Ma=Fa.hasOwnProperty;function Zr(e,r,t){var n=e[r];(!(Ma.call(e,r)&&Kr(n,t))||t===void 0&&!(r in e))&&Yr(e,r,t)}function ye(e,r,t,n){var i=!t;t||(t={});for(var o=-1,s=r.length;++o<s;){var h=r[o],v=n?n(t[h],e[h],h,t,e):void 0;v===void 0&&(v=e[h]),i?Yr(t,h,v):Zr(t,h,v)}return t}function Ra(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n}var La="[object Arguments]";function Tr(e){return Z(e)&&Y(e)==La}var qr=Object.prototype,Pa=qr.hasOwnProperty,ka=qr.propertyIsEnumerable,Da=Tr(function(){return arguments}())?Tr:function(e){return Z(e)&&Pa.call(e,"callee")&&!ka.call(e,"callee")};const Na=Da;var Va=Array.isArray;const le=Va;function Ba(){return!1}var Xr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Sr=Xr&&typeof module=="object"&&module&&!module.nodeType&&module,Ua=Sr&&Sr.exports===Xr,Er=Ua?D.Buffer:void 0,za=Er?Er.isBuffer:void 0,Ha=za||Ba;const Jr=Ha;var Ga=9007199254740991,Ka=/^(?:0|[1-9]\d*)$/;function Wa(e,r){var t=typeof e;return r=r??Ga,!!r&&(t=="number"||t!="symbol"&&Ka.test(e))&&e>-1&&e%1==0&&e<r}var Ya=9007199254740991;function Qr(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Ya}var Za="[object Arguments]",qa="[object Array]",Xa="[object Boolean]",Ja="[object Date]",Qa="[object Error]",ei="[object Function]",ri="[object Map]",ti="[object Number]",ni="[object Object]",ai="[object RegExp]",ii="[object Set]",oi="[object String]",si="[object WeakMap]",ci="[object ArrayBuffer]",ui="[object DataView]",li="[object Float32Array]",fi="[object Float64Array]",di="[object Int8Array]",pi="[object Int16Array]",hi="[object Int32Array]",gi="[object Uint8Array]",vi="[object Uint8ClampedArray]",bi="[object Uint16Array]",yi="[object Uint32Array]",E={};E[li]=E[fi]=E[di]=E[pi]=E[hi]=E[gi]=E[vi]=E[bi]=E[yi]=!0;E[Za]=E[qa]=E[ci]=E[Xa]=E[ui]=E[Ja]=E[Qa]=E[ei]=E[ri]=E[ti]=E[ni]=E[ai]=E[ii]=E[oi]=E[si]=!1;function mi(e){return Z(e)&&Qr(e.length)&&!!E[Y(e)]}function He(e){return function(r){return e(r)}}var et=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ie=et&&typeof module=="object"&&module&&!module.nodeType&&module,Ti=ie&&ie.exports===et,Ie=Ti&&Ur.process,Si=function(){try{var e=ie&&ie.require&&ie.require("util").types;return e||Ie&&Ie.binding&&Ie.binding("util")}catch{}}();const re=Si;var jr=re&&re.isTypedArray,Ei=jr?He(jr):mi;const ji=Ei;var xi=Object.prototype,_i=xi.hasOwnProperty;function rt(e,r){var t=le(e),n=!t&&Na(e),i=!t&&!n&&Jr(e),o=!t&&!n&&!i&&ji(e),s=t||n||i||o,h=s?Ra(e.length,String):[],v=h.length;for(var y in e)(r||_i.call(e,y))&&!(s&&(y=="length"||i&&(y=="offset"||y=="parent")||o&&(y=="buffer"||y=="byteLength"||y=="byteOffset")||Wa(y,v)))&&h.push(y);return h}var wi=Object.prototype;function Ge(e){var r=e&&e.constructor,t=typeof r=="function"&&r.prototype||wi;return e===t}var Ai=Hr(Object.keys,Object);const $i=Ai;var Ci=Object.prototype,Oi=Ci.hasOwnProperty;function Ii(e){if(!Ge(e))return $i(e);var r=[];for(var t in Object(e))Oi.call(e,t)&&t!="constructor"&&r.push(t);return r}function tt(e){return e!=null&&Qr(e.length)&&!Wr(e)}function Ke(e){return tt(e)?rt(e):Ii(e)}function Fi(e,r){return e&&ye(r,Ke(r),e)}function Mi(e){var r=[];if(e!=null)for(var t in Object(e))r.push(t);return r}var Ri=Object.prototype,Li=Ri.hasOwnProperty;function Pi(e){if(!ue(e))return Mi(e);var r=Ge(e),t=[];for(var n in e)n=="constructor"&&(r||!Li.call(e,n))||t.push(n);return t}function We(e){return tt(e)?rt(e,!0):Pi(e)}function ki(e,r){return e&&ye(r,We(r),e)}var nt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,xr=nt&&typeof module=="object"&&module&&!module.nodeType&&module,Di=xr&&xr.exports===nt,_r=Di?D.Buffer:void 0,wr=_r?_r.allocUnsafe:void 0;function Ni(e,r){if(r)return e.slice();var t=e.length,n=wr?wr(t):new e.constructor(t);return e.copy(n),n}function at(e,r){var t=-1,n=e.length;for(r||(r=Array(n));++t<n;)r[t]=e[t];return r}function Vi(e,r){for(var t=-1,n=e==null?0:e.length,i=0,o=[];++t<n;){var s=e[t];r(s,t,e)&&(o[i++]=s)}return o}function it(){return[]}var Bi=Object.prototype,Ui=Bi.propertyIsEnumerable,Ar=Object.getOwnPropertySymbols,zi=Ar?function(e){return e==null?[]:(e=Object(e),Vi(Ar(e),function(r){return Ui.call(e,r)}))}:it;const Ye=zi;function Hi(e,r){return ye(e,Ye(e),r)}function ot(e,r){for(var t=-1,n=r.length,i=e.length;++t<n;)e[i+t]=r[t];return e}var Gi=Object.getOwnPropertySymbols,Ki=Gi?function(e){for(var r=[];e;)ot(r,Ye(e)),e=ze(e);return r}:it;const st=Ki;function Wi(e,r){return ye(e,st(e),r)}function ct(e,r,t){var n=r(e);return le(e)?n:ot(n,t(e))}function Yi(e){return ct(e,Ke,Ye)}function Zi(e){return ct(e,We,st)}var qi=X(D,"DataView");const Pe=qi;var Xi=X(D,"Promise");const ke=Xi;var Ji=X(D,"Set");const De=Ji;var Qi=X(D,"WeakMap");const Ne=Qi;var $r="[object Map]",eo="[object Object]",Cr="[object Promise]",Or="[object Set]",Ir="[object WeakMap]",Fr="[object DataView]",ro=q(Pe),to=q(se),no=q(ke),ao=q(De),io=q(Ne),G=Y;(Pe&&G(new Pe(new ArrayBuffer(1)))!=Fr||se&&G(new se)!=$r||ke&&G(ke.resolve())!=Cr||De&&G(new De)!=Or||Ne&&G(new Ne)!=Ir)&&(G=function(e){var r=Y(e),t=r==eo?e.constructor:void 0,n=t?q(t):"";if(n)switch(n){case ro:return Fr;case to:return $r;case no:return Cr;case ao:return Or;case io:return Ir}return r});const Ze=G;var oo=Object.prototype,so=oo.hasOwnProperty;function co(e){var r=e.length,t=new e.constructor(r);return r&&typeof e[0]=="string"&&so.call(e,"index")&&(t.index=e.index,t.input=e.input),t}var uo=D.Uint8Array;const Mr=uo;function qe(e){var r=new e.constructor(e.byteLength);return new Mr(r).set(new Mr(e)),r}function lo(e,r){var t=r?qe(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}var fo=/\w*$/;function po(e){var r=new e.constructor(e.source,fo.exec(e));return r.lastIndex=e.lastIndex,r}var Rr=B?B.prototype:void 0,Lr=Rr?Rr.valueOf:void 0;function ho(e){return Lr?Object(Lr.call(e)):{}}function go(e,r){var t=r?qe(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}var vo="[object Boolean]",bo="[object Date]",yo="[object Map]",mo="[object Number]",To="[object RegExp]",So="[object Set]",Eo="[object String]",jo="[object Symbol]",xo="[object ArrayBuffer]",_o="[object DataView]",wo="[object Float32Array]",Ao="[object Float64Array]",$o="[object Int8Array]",Co="[object Int16Array]",Oo="[object Int32Array]",Io="[object Uint8Array]",Fo="[object Uint8ClampedArray]",Mo="[object Uint16Array]",Ro="[object Uint32Array]";function Lo(e,r,t){var n=e.constructor;switch(r){case xo:return qe(e);case vo:case bo:return new n(+e);case _o:return lo(e,t);case wo:case Ao:case $o:case Co:case Oo:case Io:case Fo:case Mo:case Ro:return go(e,t);case yo:return new n;case mo:case Eo:return new n(e);case To:return po(e);case So:return new n;case jo:return ho(e)}}var Pr=Object.create,Po=function(){function e(){}return function(r){if(!ue(r))return{};if(Pr)return Pr(r);e.prototype=r;var t=new e;return e.prototype=void 0,t}}();const ko=Po;function Do(e){return typeof e.constructor=="function"&&!Ge(e)?ko(ze(e)):{}}var No="[object Map]";function Vo(e){return Z(e)&&Ze(e)==No}var kr=re&&re.isMap,Bo=kr?He(kr):Vo;const Uo=Bo;var zo="[object Set]";function Ho(e){return Z(e)&&Ze(e)==zo}var Dr=re&&re.isSet,Go=Dr?He(Dr):Ho;const Ko=Go;var Wo=1,Yo=2,Zo=4,ut="[object Arguments]",qo="[object Array]",Xo="[object Boolean]",Jo="[object Date]",Qo="[object Error]",lt="[object Function]",es="[object GeneratorFunction]",rs="[object Map]",ts="[object Number]",ft="[object Object]",ns="[object RegExp]",as="[object Set]",is="[object String]",os="[object Symbol]",ss="[object WeakMap]",cs="[object ArrayBuffer]",us="[object DataView]",ls="[object Float32Array]",fs="[object Float64Array]",ds="[object Int8Array]",ps="[object Int16Array]",hs="[object Int32Array]",gs="[object Uint8Array]",vs="[object Uint8ClampedArray]",bs="[object Uint16Array]",ys="[object Uint32Array]",S={};S[ut]=S[qo]=S[cs]=S[us]=S[Xo]=S[Jo]=S[ls]=S[fs]=S[ds]=S[ps]=S[hs]=S[rs]=S[ts]=S[ft]=S[ns]=S[as]=S[is]=S[os]=S[gs]=S[vs]=S[bs]=S[ys]=!0;S[Qo]=S[lt]=S[ss]=!1;function he(e,r,t,n,i,o){var s,h=r&Wo,v=r&Yo,y=r&Zo;if(t&&(s=i?t(e,n,i,o):t(e)),s!==void 0)return s;if(!ue(e))return e;var C=le(e);if(C){if(s=co(e),!h)return at(e,s)}else{var O=Ze(e),f=O==lt||O==es;if(Jr(e))return Ni(e,h);if(O==ft||O==ut||f&&!i){if(s=v||f?{}:Do(e),!h)return v?Wi(e,ki(s,e)):Hi(e,Fi(s,e))}else{if(!S[O])return i?e:{};s=Lo(e,O,h)}}o||(o=new te);var _=o.get(e);if(_)return _;o.set(e,s),Ko(e)?e.forEach(function($){s.add(he($,r,t,$,e,o))}):Uo(e)&&e.forEach(function($,x){s.set(x,he($,r,t,x,e,o))});var R=y?v?Zi:Yi:v?We:Ke,I=C?void 0:R(e);return Oa(I||e,function($,x){I&&(x=$,$=e[x]),Zr(s,x,he($,r,t,x,e,o))}),s}var ms=4;function Nr(e){return he(e,ms)}function dt(e,r){for(var t=-1,n=e==null?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i}var Ts="[object Symbol]";function Xe(e){return typeof e=="symbol"||Z(e)&&Y(e)==Ts}var Ss="Expected a function";function Je(e,r){if(typeof e!="function"||r!=null&&typeof r!="function")throw new TypeError(Ss);var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],o=t.cache;if(o.has(i))return o.get(i);var s=e.apply(this,n);return t.cache=o.set(i,s)||o,s};return t.cache=new(Je.Cache||U),t}Je.Cache=U;var Es=500;function js(e){var r=Je(e,function(n){return t.size===Es&&t.clear(),n}),t=r.cache;return r}var xs=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,_s=/\\(\\)?/g,ws=js(function(e){var r=[];return e.charCodeAt(0)===46&&r.push(""),e.replace(xs,function(t,n,i,o){r.push(i?o.replace(_s,"$1"):n||t)}),r});const As=ws;var $s=1/0;function Cs(e){if(typeof e=="string"||Xe(e))return e;var r=e+"";return r=="0"&&1/e==-$s?"-0":r}var Os=1/0,Vr=B?B.prototype:void 0,Br=Vr?Vr.toString:void 0;function pt(e){if(typeof e=="string")return e;if(le(e))return dt(e,pt)+"";if(Xe(e))return Br?Br.call(e):"";var r=e+"";return r=="0"&&1/e==-Os?"-0":r}function Is(e){return e==null?"":pt(e)}function ht(e){return le(e)?dt(e,Cs):Xe(e)?[e]:at(As(Is(e)))}function j(){return j=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},j.apply(this,arguments)}function ee(e,r){if(e==null)return{};var t={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(r.indexOf(i)>=0)&&(t[i]=e[i]);return t}var me=u.createContext(void 0);me.displayName="FormikContext";var Fs=me.Provider;me.Consumer;function gt(){var e=u.useContext(me);return e||Rn(!1),e}var M=function(r){return typeof r=="function"},Te=function(r){return r!==null&&typeof r=="object"},Ms=function(r){return String(Math.floor(Number(r)))===r},Fe=function(r){return Object.prototype.toString.call(r)==="[object String]"},Rs=function(r){return u.Children.count(r)===0},Me=function(r){return Te(r)&&M(r.then)};function F(e,r,t,n){n===void 0&&(n=0);for(var i=ht(r);e&&n<i.length;)e=e[i[n++]];return n!==i.length&&!e||e===void 0?t:e}function K(e,r,t){for(var n=Nr(e),i=n,o=0,s=ht(r);o<s.length-1;o++){var h=s[o],v=F(e,s.slice(0,o+1));if(v&&(Te(v)||Array.isArray(v)))i=i[h]=Nr(v);else{var y=s[o+1];i=i[h]=Ms(y)&&Number(y)>=0?[]:{}}}return(o===0?e:i)[s[o]]===t?e:(t===void 0?delete i[s[o]]:i[s[o]]=t,o===0&&t===void 0&&delete n[s[o]],n)}function vt(e,r,t,n){t===void 0&&(t=new WeakMap),n===void 0&&(n={});for(var i=0,o=Object.keys(e);i<o.length;i++){var s=o[i],h=e[s];Te(h)?t.get(h)||(t.set(h,!0),n[s]=Array.isArray(h)?[]:{},vt(h,r,t,n[s])):n[s]=r}return n}function Ls(e,r){switch(r.type){case"SET_VALUES":return j({},e,{values:r.payload});case"SET_TOUCHED":return j({},e,{touched:r.payload});case"SET_ERRORS":return H(e.errors,r.payload)?e:j({},e,{errors:r.payload});case"SET_STATUS":return j({},e,{status:r.payload});case"SET_ISSUBMITTING":return j({},e,{isSubmitting:r.payload});case"SET_ISVALIDATING":return j({},e,{isValidating:r.payload});case"SET_FIELD_VALUE":return j({},e,{values:K(e.values,r.payload.field,r.payload.value)});case"SET_FIELD_TOUCHED":return j({},e,{touched:K(e.touched,r.payload.field,r.payload.value)});case"SET_FIELD_ERROR":return j({},e,{errors:K(e.errors,r.payload.field,r.payload.value)});case"RESET_FORM":return j({},e,r.payload);case"SET_FORMIK_STATE":return r.payload(e);case"SUBMIT_ATTEMPT":return j({},e,{touched:vt(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return j({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return j({},e,{isSubmitting:!1});default:return e}}var z={},pe={};function Ps(e){var r=e.validateOnChange,t=r===void 0?!0:r,n=e.validateOnBlur,i=n===void 0?!0:n,o=e.validateOnMount,s=o===void 0?!1:o,h=e.isInitialValid,v=e.enableReinitialize,y=v===void 0?!1:v,C=e.onSubmit,O=ee(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=j({validateOnChange:t,validateOnBlur:i,validateOnMount:s,onSubmit:C},O),_=u.useRef(f.initialValues),R=u.useRef(f.initialErrors||z),I=u.useRef(f.initialTouched||pe),$=u.useRef(f.initialStatus),x=u.useRef(!1),L=u.useRef({});u.useEffect(function(){return x.current=!0,function(){x.current=!1}},[]);var Se=u.useState(0),Ee=Se[1],fe=u.useRef({values:f.initialValues,errors:f.initialErrors||z,touched:f.initialTouched||pe,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),T=fe.current,m=u.useCallback(function(a){var c=fe.current;fe.current=Ls(c,a),c!==fe.current&&Ee(function(l){return l+1})},[]),Qe=u.useCallback(function(a,c){return new Promise(function(l,d){var g=f.validate(a,c);g==null?l(z):Me(g)?g.then(function(b){l(b||z)},function(b){d(b)}):l(g)})},[f.validate]),je=u.useCallback(function(a,c){var l=f.validationSchema,d=M(l)?l(c):l,g=c&&d.validateAt?d.validateAt(c,a):Ns(a,d);return new Promise(function(b,w){g.then(function(){b(z)},function(N){N.name==="ValidationError"?b(Ds(N)):w(N)})})},[f.validationSchema]),er=u.useCallback(function(a,c){return new Promise(function(l){return l(L.current[a].validate(c))})},[]),rr=u.useCallback(function(a){var c=Object.keys(L.current).filter(function(d){return M(L.current[d].validate)}),l=c.length>0?c.map(function(d){return er(d,F(a,d))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(l).then(function(d){return d.reduce(function(g,b,w){return b==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||b&&(g=K(g,c[w],b)),g},{})})},[er]),mt=u.useCallback(function(a){return Promise.all([rr(a),f.validationSchema?je(a):{},f.validate?Qe(a):{}]).then(function(c){var l=c[0],d=c[1],g=c[2],b=Re.all([l,d,g],{arrayMerge:Vs});return b})},[f.validate,f.validationSchema,rr,Qe,je]),k=P(function(a){return a===void 0&&(a=T.values),m({type:"SET_ISVALIDATING",payload:!0}),mt(a).then(function(c){return x.current&&(m({type:"SET_ISVALIDATING",payload:!1}),m({type:"SET_ERRORS",payload:c})),c})});u.useEffect(function(){s&&x.current===!0&&H(_.current,f.initialValues)&&k(_.current)},[s,k]);var ne=u.useCallback(function(a){var c=a&&a.values?a.values:_.current,l=a&&a.errors?a.errors:R.current?R.current:f.initialErrors||{},d=a&&a.touched?a.touched:I.current?I.current:f.initialTouched||{},g=a&&a.status?a.status:$.current?$.current:f.initialStatus;_.current=c,R.current=l,I.current=d,$.current=g;var b=function(){m({type:"RESET_FORM",payload:{isSubmitting:!!a&&!!a.isSubmitting,errors:l,touched:d,status:g,values:c,isValidating:!!a&&!!a.isValidating,submitCount:a&&a.submitCount&&typeof a.submitCount=="number"?a.submitCount:0}})};if(f.onReset){var w=f.onReset(T.values,fr);Me(w)?w.then(b):b()}else b()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);u.useEffect(function(){x.current===!0&&!H(_.current,f.initialValues)&&y&&(_.current=f.initialValues,ne(),s&&k(_.current))},[y,f.initialValues,ne,s,k]),u.useEffect(function(){y&&x.current===!0&&!H(R.current,f.initialErrors)&&(R.current=f.initialErrors||z,m({type:"SET_ERRORS",payload:f.initialErrors||z}))},[y,f.initialErrors]),u.useEffect(function(){y&&x.current===!0&&!H(I.current,f.initialTouched)&&(I.current=f.initialTouched||pe,m({type:"SET_TOUCHED",payload:f.initialTouched||pe}))},[y,f.initialTouched]),u.useEffect(function(){y&&x.current===!0&&!H($.current,f.initialStatus)&&($.current=f.initialStatus,m({type:"SET_STATUS",payload:f.initialStatus}))},[y,f.initialStatus,f.initialTouched]);var tr=P(function(a){if(L.current[a]&&M(L.current[a].validate)){var c=F(T.values,a),l=L.current[a].validate(c);return Me(l)?(m({type:"SET_ISVALIDATING",payload:!0}),l.then(function(d){return d}).then(function(d){m({type:"SET_FIELD_ERROR",payload:{field:a,value:d}}),m({type:"SET_ISVALIDATING",payload:!1})})):(m({type:"SET_FIELD_ERROR",payload:{field:a,value:l}}),Promise.resolve(l))}else if(f.validationSchema)return m({type:"SET_ISVALIDATING",payload:!0}),je(T.values,a).then(function(d){return d}).then(function(d){m({type:"SET_FIELD_ERROR",payload:{field:a,value:F(d,a)}}),m({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Tt=u.useCallback(function(a,c){var l=c.validate;L.current[a]={validate:l}},[]),St=u.useCallback(function(a){delete L.current[a]},[]),nr=P(function(a,c){m({type:"SET_TOUCHED",payload:a});var l=c===void 0?i:c;return l?k(T.values):Promise.resolve()}),ar=u.useCallback(function(a){m({type:"SET_ERRORS",payload:a})},[]),ir=P(function(a,c){var l=M(a)?a(T.values):a;m({type:"SET_VALUES",payload:l});var d=c===void 0?t:c;return d?k(l):Promise.resolve()}),de=u.useCallback(function(a,c){m({type:"SET_FIELD_ERROR",payload:{field:a,value:c}})},[]),J=P(function(a,c,l){m({type:"SET_FIELD_VALUE",payload:{field:a,value:c}});var d=l===void 0?t:l;return d?k(K(T.values,a,c)):Promise.resolve()}),or=u.useCallback(function(a,c){var l=c,d=a,g;if(!Fe(a)){a.persist&&a.persist();var b=a.target?a.target:a.currentTarget,w=b.type,N=b.name,$e=b.id,Ce=b.value,Ot=b.checked,ic=b.outerHTML,dr=b.options,It=b.multiple;l=c||N||$e,d=/number|range/.test(w)?(g=parseFloat(Ce),isNaN(g)?"":g):/checkbox/.test(w)?Us(F(T.values,l),Ot,Ce):dr&&It?Bs(dr):Ce}l&&J(l,d)},[J,T.values]),xe=P(function(a){if(Fe(a))return function(c){return or(c,a)};or(a)}),Q=P(function(a,c,l){c===void 0&&(c=!0),m({type:"SET_FIELD_TOUCHED",payload:{field:a,value:c}});var d=l===void 0?i:l;return d?k(T.values):Promise.resolve()}),sr=u.useCallback(function(a,c){a.persist&&a.persist();var l=a.target,d=l.name,g=l.id,b=l.outerHTML,w=c||d||g;Q(w,!0)},[Q]),_e=P(function(a){if(Fe(a))return function(c){return sr(c,a)};sr(a)}),cr=u.useCallback(function(a){M(a)?m({type:"SET_FORMIK_STATE",payload:a}):m({type:"SET_FORMIK_STATE",payload:function(){return a}})},[]),ur=u.useCallback(function(a){m({type:"SET_STATUS",payload:a})},[]),lr=u.useCallback(function(a){m({type:"SET_ISSUBMITTING",payload:a})},[]),we=P(function(){return m({type:"SUBMIT_ATTEMPT"}),k().then(function(a){var c=a instanceof Error,l=!c&&Object.keys(a).length===0;if(l){var d;try{if(d=jt(),d===void 0)return}catch(g){throw g}return Promise.resolve(d).then(function(g){return x.current&&m({type:"SUBMIT_SUCCESS"}),g}).catch(function(g){if(x.current)throw m({type:"SUBMIT_FAILURE"}),g})}else if(x.current&&(m({type:"SUBMIT_FAILURE"}),c))throw a})}),Et=P(function(a){a&&a.preventDefault&&M(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&M(a.stopPropagation)&&a.stopPropagation(),we().catch(function(c){console.warn("Warning: An unhandled error was caught from submitForm()",c)})}),fr={resetForm:ne,validateForm:k,validateField:tr,setErrors:ar,setFieldError:de,setFieldTouched:Q,setFieldValue:J,setStatus:ur,setSubmitting:lr,setTouched:nr,setValues:ir,setFormikState:cr,submitForm:we},jt=P(function(){return C(T.values,fr)}),xt=P(function(a){a&&a.preventDefault&&M(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&M(a.stopPropagation)&&a.stopPropagation(),ne()}),_t=u.useCallback(function(a){return{value:F(T.values,a),error:F(T.errors,a),touched:!!F(T.touched,a),initialValue:F(_.current,a),initialTouched:!!F(I.current,a),initialError:F(R.current,a)}},[T.errors,T.touched,T.values]),wt=u.useCallback(function(a){return{setValue:function(l,d){return J(a,l,d)},setTouched:function(l,d){return Q(a,l,d)},setError:function(l){return de(a,l)}}},[J,Q,de]),At=u.useCallback(function(a){var c=Te(a),l=c?a.name:a,d=F(T.values,l),g={name:l,value:d,onChange:xe,onBlur:_e};if(c){var b=a.type,w=a.value,N=a.as,$e=a.multiple;b==="checkbox"?w===void 0?g.checked=!!d:(g.checked=!!(Array.isArray(d)&&~d.indexOf(w)),g.value=w):b==="radio"?(g.checked=d===w,g.value=w):N==="select"&&$e&&(g.value=g.value||[],g.multiple=!0)}return g},[_e,xe,T.values]),Ae=u.useMemo(function(){return!H(_.current,T.values)},[_.current,T.values]),$t=u.useMemo(function(){return typeof h<"u"?Ae?T.errors&&Object.keys(T.errors).length===0:h!==!1&&M(h)?h(f):h:T.errors&&Object.keys(T.errors).length===0},[h,Ae,T.errors,f]),Ct=j({},T,{initialValues:_.current,initialErrors:R.current,initialTouched:I.current,initialStatus:$.current,handleBlur:_e,handleChange:xe,handleReset:xt,handleSubmit:Et,resetForm:ne,setErrors:ar,setFormikState:cr,setFieldTouched:Q,setFieldValue:J,setFieldError:de,setStatus:ur,setSubmitting:lr,setTouched:nr,setValues:ir,submitForm:we,validateForm:k,validateField:tr,isValid:$t,dirty:Ae,unregisterField:St,registerField:Tt,getFieldProps:At,getFieldMeta:_t,getFieldHelpers:wt,validateOnBlur:i,validateOnChange:t,validateOnMount:s});return Ct}function ks(e){var r=Ps(e),t=e.component,n=e.children,i=e.render,o=e.innerRef;return u.useImperativeHandle(o,function(){return r}),u.createElement(Fs,{value:r},t?u.createElement(t,r):i?i(r):n?M(n)?n(r):Rs(n)?null:u.Children.only(n):null)}function Ds(e){var r={};if(e.inner){if(e.inner.length===0)return K(r,e.path,e.message);for(var i=e.inner,t=Array.isArray(i),n=0,i=t?i:i[Symbol.iterator]();;){var o;if(t){if(n>=i.length)break;o=i[n++]}else{if(n=i.next(),n.done)break;o=n.value}var s=o;F(r,s.path)||(r=K(r,s.path,s.message))}}return r}function Ns(e,r,t,n){t===void 0&&(t=!1);var i=Ve(e);return r[t?"validateSync":"validate"](i,{abortEarly:!1,context:n||i})}function Ve(e){var r=Array.isArray(e)?[]:{};for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var n=String(t);Array.isArray(e[n])===!0?r[n]=e[n].map(function(i){return Array.isArray(i)===!0||gr(i)?Ve(i):i!==""?i:void 0}):gr(e[n])?r[n]=Ve(e[n]):r[n]=e[n]!==""?e[n]:void 0}return r}function Vs(e,r,t){var n=e.slice();return r.forEach(function(o,s){if(typeof n[s]>"u"){var h=t.clone!==!1,v=h&&t.isMergeableObject(o);n[s]=v?Re(Array.isArray(o)?[]:{},o,t):o}else t.isMergeableObject(o)?n[s]=Re(e[s],o,t):e.indexOf(o)===-1&&n.push(o)}),n}function Bs(e){return Array.from(e).filter(function(r){return r.selected}).map(function(r){return r.value})}function Us(e,r,t){if(typeof e=="boolean")return!!r;var n=[],i=!1,o=-1;if(Array.isArray(e))n=e,o=e.indexOf(t),i=o>=0;else if(!t||t=="true"||t=="false")return!!r;return r&&t&&!i?n.concat(t):i?n.slice(0,o).concat(n.slice(o+1)):n}var zs=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?u.useLayoutEffect:u.useEffect;function P(e){var r=u.useRef(e);return zs(function(){r.current=e}),u.useCallback(function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return r.current.apply(void 0,n)},[])}function Hs(e){var r=e.validate,t=e.name,n=e.render,i=e.children,o=e.as,s=e.component,h=e.className,v=ee(e,["validate","name","render","children","as","component","className"]),y=gt(),C=ee(y,["validate","validationSchema"]),O=C.registerField,f=C.unregisterField;u.useEffect(function(){return O(t,{validate:r}),function(){f(t)}},[O,f,t,r]);var _=C.getFieldProps(j({name:t},v)),R=C.getFieldMeta(t),I={field:_,form:C};if(n)return n(j({},I,{meta:R}));if(M(i))return i(j({},I,{meta:R}));if(s){if(typeof s=="string"){var $=v.innerRef,x=ee(v,["innerRef"]);return u.createElement(s,j({ref:$},_,x,{className:h}),i)}return u.createElement(s,j({field:_,form:C},v,{className:h}),i)}var L=o||"input";if(typeof L=="string"){var Se=v.innerRef,Ee=ee(v,["innerRef"]);return u.createElement(L,j({ref:Se},_,Ee,{className:h}),i)}return u.createElement(L,j({},_,v,{className:h}),i)}var bt=u.forwardRef(function(e,r){var t=e.action,n=ee(e,["action"]),i=t??"#",o=gt(),s=o.handleReset,h=o.handleSubmit;return u.createElement("form",j({onSubmit:h,ref:r,onReset:s,action:i},n))});bt.displayName="Form";const Gs=A(bt)`
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
`,Ks=A.button`
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
`,Ws=A.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`,Ys=A(Hs)`
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
`;function Zs(){const e=Lt(),r=({search:t},n)=>{if(t.trim()===""){Bt.error("Please enter a word to search for");return}e(`movies?query=${encodeURIComponent(t)}`),n.resetForm()};return p.jsx(ks,{initialValues:{search:""},onSubmit:r,children:p.jsxs(Gs,{children:[p.jsx(Ks,{type:"submit",value:"submit",children:p.jsx(Nt,{})}),p.jsx(Ws,{htmlFor:"search"}),p.jsx(Ys,{type:"text",id:"search",name:"search",placeholder:"Search"})]})})}function qs(e){return Be({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"}}]})(e)}function Xs(e){return Be({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"}}]})(e)}const Js=A.label`
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
    display: none;
  }
`,yt=Pt`   
  0% {
    transform: rotate(-360deg) scale(0);
    opacity: 0;
  }

  75% {
    transform: rotate(25deg);
  }
`,Qs=A(qs)`
  animation: ${yt} 0.5s;
`,ec=A(Xs)`
  animation: ${yt} 0.5s;
`;function rc(){const[e,r]=u.useState(()=>{const n=window.matchMedia("(prefers-color-scheme: dark)").matches;return localStorage.getItem("theme")||(n?"dark":"light")});u.useEffect(()=>{localStorage.setItem("theme",e)},[e]),u.useEffect(()=>{const{body:n}=document;n.dataset.theme=e},[e]);const t=()=>{r(e==="light"?"dark":"light")};return p.jsxs(Js,{className:"switcher",children:[p.jsx("input",{type:"checkbox",onChange:t,checked:e==="dark"}),e==="dark"?p.jsx(Qs,{}):p.jsx(ec,{})]})}function tc(){return p.jsx(Gt,{children:p.jsxs(Kt,{children:[p.jsx(Xt,{}),p.jsx(rn,{}),p.jsx(Zs,{}),p.jsx(rc,{}),p.jsx(Yt,{}),p.jsx(Qt,{})]})})}const nc=A.main``;function ac(){return p.jsx(nc,{children:p.jsx(Ue,{children:p.jsx(u.Suspense,{fallback:p.jsx(Vt,{}),children:p.jsx(kt,{})})})})}function lc(){return p.jsxs(Ut,{children:[p.jsx(tc,{}),p.jsx(ac,{}),p.jsx(Ht,{})]})}export{lc as default};
