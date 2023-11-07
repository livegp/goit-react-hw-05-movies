import{s as A,j as p,G as Vr,L as Mt,r as u,N as Rt,g as Lt,u as Pt,c as kt,O as Dt}from"./index-7dd3a3fa.js";import{I as Nt,A as pe,a as Bt}from"./index.esm-0a59db4e.js";import Vt from"./Loader-d8598875.js";import{Q as Ut}from"./react-toastify.esm-19f663eb.js";const zt=A.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100%;
`,Ur=A.div`
  max-width: 1160px;
  padding: 25px 10px;
  margin: 0 auto;
`,Ht=A.footer`
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
`;function Gt(){return p.jsx(Ht,{children:p.jsx(Ur,{children:p.jsxs("p",{children:[" ","© 2023 Movies App. All rights reserved. Designed and Developed by"," ",p.jsx("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/oleksandr-pishta",children:"Oleksandr Pishta"})]})})})}const Kt=A.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: rgba(var(--accent), 1);
  transition: var(--trans);
`,Wt=A(Ur)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 100%;
  padding: 15px;
  gap: 25px;
`,Yt=A.button`
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
`;function Zt(){return p.jsx(Yt,{type:"button",children:p.jsx(Nt,{})})}function qt(r){return Vr({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 20H20V22H12C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.2512 21.2561 16.3287 20.0007 18H17.2916C18.9525 16.5341 20 14.3894 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8C14 9.10457 13.1046 10 12 10ZM8 14C6.89543 14 6 13.1046 6 12C6 10.8954 6.89543 10 8 10C9.10457 10 10 10.8954 10 12C10 13.1046 9.10457 14 8 14ZM16 14C14.8954 14 14 13.1046 14 12C14 10.8954 14.8954 10 16 10C17.1046 10 18 10.8954 18 12C18 13.1046 17.1046 14 16 14ZM12 18C10.8954 18 10 17.1046 10 16C10 14.8954 10.8954 14 12 14C13.1046 14 14 14.8954 14 16C14 17.1046 13.1046 18 12 18Z"}}]})(r)}const Xt=A.div`
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
`;function Jt(){return p.jsx(Xt,{children:p.jsxs(Mt,{to:"/",children:[p.jsx(qt,{}),p.jsx("p",{children:"Movies"})]})})}const Qt=A.label`
  order: 6;
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  width: 44px;
  height: 40px;
  padding: 0 10px;
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
`;function rn(){const[r,e]=u.useState(!1),t=n=>{e(n.target.checked)};return p.jsxs(Qt,{htmlFor:"menu-check",children:[p.jsx("input",{id:"menu-check","aria-hidden":"true",type:"checkbox",checked:r,onChange:t}),p.jsx("span",{})]})}const en=A.nav`
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
`,ge=A(Rt)`
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
`;function tn(){return p.jsx(en,{children:p.jsxs("ul",{children:[p.jsx("li",{children:p.jsx(ge,{to:"/",children:"Home"})}),p.jsx("li",{children:p.jsx(ge,{to:"/movies",children:"Movies"})})]})})}var nn=function(e){return an(e)&&!on(e)};function an(r){return!!r&&typeof r=="object"}function on(r){var e=Object.prototype.toString.call(r);return e==="[object RegExp]"||e==="[object Date]"||un(r)}var sn=typeof Symbol=="function"&&Symbol.for,cn=sn?Symbol.for("react.element"):60103;function un(r){return r.$$typeof===cn}function ln(r){return Array.isArray(r)?[]:{}}function hr(r,e){return e.clone!==!1&&e.isMergeableObject(r)?or(ln(r),r,e):r}function fn(r,e,t){return r.concat(e).map(function(n){return hr(n,t)})}function dn(r,e,t){var n={};return t.isMergeableObject(r)&&Object.keys(r).forEach(function(i){n[i]=hr(r[i],t)}),Object.keys(e).forEach(function(i){!t.isMergeableObject(e[i])||!r[i]?n[i]=hr(e[i],t):n[i]=or(r[i],e[i],t)}),n}function or(r,e,t){t=t||{},t.arrayMerge=t.arrayMerge||fn,t.isMergeableObject=t.isMergeableObject||nn;var n=Array.isArray(e),i=Array.isArray(r),o=n===i;return o?n?t.arrayMerge(r,e,t):dn(r,e,t):hr(e,t)}or.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(n,i){return or(n,i,t)},{})};var Rr=or,pn=typeof global=="object"&&global&&global.Object===Object&&global;const ze=pn;var gn=typeof self=="object"&&self&&self.Object===Object&&self,hn=ze||gn||Function("return this")();const D=hn;var vn=D.Symbol;const V=vn;var He=Object.prototype,bn=He.hasOwnProperty,yn=He.toString,ar=V?V.toStringTag:void 0;function mn(r){var e=bn.call(r,ar),t=r[ar];try{r[ar]=void 0;var n=!0}catch{}var i=yn.call(r);return n&&(e?r[ar]=t:delete r[ar]),i}var Tn=Object.prototype,Sn=Tn.toString;function xn(r){return Sn.call(r)}var En="[object Null]",jn="[object Undefined]",he=V?V.toStringTag:void 0;function Y(r){return r==null?r===void 0?jn:En:he&&he in Object(r)?mn(r):xn(r)}function Ge(r,e){return function(t){return r(e(t))}}var _n=Ge(Object.getPrototypeOf,Object);const zr=_n;function Z(r){return r!=null&&typeof r=="object"}var An="[object Object]",wn=Function.prototype,$n=Object.prototype,Ke=wn.toString,Cn=$n.hasOwnProperty,On=Ke.call(Object);function ve(r){if(!Z(r)||Y(r)!=An)return!1;var e=zr(r);if(e===null)return!0;var t=Cn.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&Ke.call(t)==On}var be=Array.isArray,ye=Object.keys,In=Object.prototype.hasOwnProperty,Fn=typeof Element<"u";function Lr(r,e){if(r===e)return!0;if(r&&e&&typeof r=="object"&&typeof e=="object"){var t=be(r),n=be(e),i,o,s;if(t&&n){if(o=r.length,o!=e.length)return!1;for(i=o;i--!==0;)if(!Lr(r[i],e[i]))return!1;return!0}if(t!=n)return!1;var g=r instanceof Date,v=e instanceof Date;if(g!=v)return!1;if(g&&v)return r.getTime()==e.getTime();var y=r instanceof RegExp,C=e instanceof RegExp;if(y!=C)return!1;if(y&&C)return r.toString()==e.toString();var O=ye(r);if(o=O.length,o!==ye(e).length)return!1;for(i=o;i--!==0;)if(!In.call(e,O[i]))return!1;if(Fn&&r instanceof Element&&e instanceof Element)return r===e;for(i=o;i--!==0;)if(s=O[i],!(s==="_owner"&&r.$$typeof)&&!Lr(r[s],e[s]))return!1;return!0}return r!==r&&e!==e}var Mn=function(e,t){try{return Lr(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}};const H=Lt(Mn);var Rn=!0;function Ln(r,e){if(!Rn){if(r)return;var t="Warning: "+e;typeof console<"u"&&console.warn(t);try{throw Error(t)}catch{}}}function Pn(){this.__data__=[],this.size=0}function We(r,e){return r===e||r!==r&&e!==e}function vr(r,e){for(var t=r.length;t--;)if(We(r[t][0],e))return t;return-1}var kn=Array.prototype,Dn=kn.splice;function Nn(r){var e=this.__data__,t=vr(e,r);if(t<0)return!1;var n=e.length-1;return t==n?e.pop():Dn.call(e,t,1),--this.size,!0}function Bn(r){var e=this.__data__,t=vr(e,r);return t<0?void 0:e[t][1]}function Vn(r){return vr(this.__data__,r)>-1}function Un(r,e){var t=this.__data__,n=vr(t,r);return n<0?(++this.size,t.push([r,e])):t[n][1]=e,this}function B(r){var e=-1,t=r==null?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}B.prototype.clear=Pn;B.prototype.delete=Nn;B.prototype.get=Bn;B.prototype.has=Vn;B.prototype.set=Un;function zn(){this.__data__=new B,this.size=0}function Hn(r){var e=this.__data__,t=e.delete(r);return this.size=e.size,t}function Gn(r){return this.__data__.get(r)}function Kn(r){return this.__data__.has(r)}function ur(r){var e=typeof r;return r!=null&&(e=="object"||e=="function")}var Wn="[object AsyncFunction]",Yn="[object Function]",Zn="[object GeneratorFunction]",qn="[object Proxy]";function Ye(r){if(!ur(r))return!1;var e=Y(r);return e==Yn||e==Zn||e==Wn||e==qn}var Xn=D["__core-js_shared__"];const Or=Xn;var me=function(){var r=/[^.]+$/.exec(Or&&Or.keys&&Or.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}();function Jn(r){return!!me&&me in r}var Qn=Function.prototype,ra=Qn.toString;function q(r){if(r!=null){try{return ra.call(r)}catch{}try{return r+""}catch{}}return""}var ea=/[\\^$.*+?()[\]{}|]/g,ta=/^\[object .+?Constructor\]$/,na=Function.prototype,aa=Object.prototype,ia=na.toString,oa=aa.hasOwnProperty,sa=RegExp("^"+ia.call(oa).replace(ea,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ca(r){if(!ur(r)||Jn(r))return!1;var e=Ye(r)?sa:ta;return e.test(q(r))}function ua(r,e){return r==null?void 0:r[e]}function X(r,e){var t=ua(r,e);return ca(t)?t:void 0}var la=X(D,"Map");const sr=la;var fa=X(Object,"create");const cr=fa;function da(){this.__data__=cr?cr(null):{},this.size=0}function pa(r){var e=this.has(r)&&delete this.__data__[r];return this.size-=e?1:0,e}var ga="__lodash_hash_undefined__",ha=Object.prototype,va=ha.hasOwnProperty;function ba(r){var e=this.__data__;if(cr){var t=e[r];return t===ga?void 0:t}return va.call(e,r)?e[r]:void 0}var ya=Object.prototype,ma=ya.hasOwnProperty;function Ta(r){var e=this.__data__;return cr?e[r]!==void 0:ma.call(e,r)}var Sa="__lodash_hash_undefined__";function xa(r,e){var t=this.__data__;return this.size+=this.has(r)?0:1,t[r]=cr&&e===void 0?Sa:e,this}function W(r){var e=-1,t=r==null?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}W.prototype.clear=da;W.prototype.delete=pa;W.prototype.get=ba;W.prototype.has=Ta;W.prototype.set=xa;function Ea(){this.size=0,this.__data__={hash:new W,map:new(sr||B),string:new W}}function ja(r){var e=typeof r;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?r!=="__proto__":r===null}function br(r,e){var t=r.__data__;return ja(e)?t[typeof e=="string"?"string":"hash"]:t.map}function _a(r){var e=br(this,r).delete(r);return this.size-=e?1:0,e}function Aa(r){return br(this,r).get(r)}function wa(r){return br(this,r).has(r)}function $a(r,e){var t=br(this,r),n=t.size;return t.set(r,e),this.size+=t.size==n?0:1,this}function U(r){var e=-1,t=r==null?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}U.prototype.clear=Ea;U.prototype.delete=_a;U.prototype.get=Aa;U.prototype.has=wa;U.prototype.set=$a;var Ca=200;function Oa(r,e){var t=this.__data__;if(t instanceof B){var n=t.__data__;if(!sr||n.length<Ca-1)return n.push([r,e]),this.size=++t.size,this;t=this.__data__=new U(n)}return t.set(r,e),this.size=t.size,this}function tr(r){var e=this.__data__=new B(r);this.size=e.size}tr.prototype.clear=zn;tr.prototype.delete=Hn;tr.prototype.get=Gn;tr.prototype.has=Kn;tr.prototype.set=Oa;function Ia(r,e){for(var t=-1,n=r==null?0:r.length;++t<n&&e(r[t],t,r)!==!1;);return r}var Fa=function(){try{var r=X(Object,"defineProperty");return r({},"",{}),r}catch{}}();const Te=Fa;function Ze(r,e,t){e=="__proto__"&&Te?Te(r,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):r[e]=t}var Ma=Object.prototype,Ra=Ma.hasOwnProperty;function qe(r,e,t){var n=r[e];(!(Ra.call(r,e)&&We(n,t))||t===void 0&&!(e in r))&&Ze(r,e,t)}function yr(r,e,t,n){var i=!t;t||(t={});for(var o=-1,s=e.length;++o<s;){var g=e[o],v=n?n(t[g],r[g],g,t,r):void 0;v===void 0&&(v=r[g]),i?Ze(t,g,v):qe(t,g,v)}return t}function La(r,e){for(var t=-1,n=Array(r);++t<r;)n[t]=e(t);return n}var Pa="[object Arguments]";function Se(r){return Z(r)&&Y(r)==Pa}var Xe=Object.prototype,ka=Xe.hasOwnProperty,Da=Xe.propertyIsEnumerable,Na=Se(function(){return arguments}())?Se:function(r){return Z(r)&&ka.call(r,"callee")&&!Da.call(r,"callee")};const Ba=Na;var Va=Array.isArray;const lr=Va;function Ua(){return!1}var Je=typeof exports=="object"&&exports&&!exports.nodeType&&exports,xe=Je&&typeof module=="object"&&module&&!module.nodeType&&module,za=xe&&xe.exports===Je,Ee=za?D.Buffer:void 0,Ha=Ee?Ee.isBuffer:void 0,Ga=Ha||Ua;const Qe=Ga;var Ka=9007199254740991,Wa=/^(?:0|[1-9]\d*)$/;function Ya(r,e){var t=typeof r;return e=e??Ka,!!e&&(t=="number"||t!="symbol"&&Wa.test(r))&&r>-1&&r%1==0&&r<e}var Za=9007199254740991;function rt(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=Za}var qa="[object Arguments]",Xa="[object Array]",Ja="[object Boolean]",Qa="[object Date]",ri="[object Error]",ei="[object Function]",ti="[object Map]",ni="[object Number]",ai="[object Object]",ii="[object RegExp]",oi="[object Set]",si="[object String]",ci="[object WeakMap]",ui="[object ArrayBuffer]",li="[object DataView]",fi="[object Float32Array]",di="[object Float64Array]",pi="[object Int8Array]",gi="[object Int16Array]",hi="[object Int32Array]",vi="[object Uint8Array]",bi="[object Uint8ClampedArray]",yi="[object Uint16Array]",mi="[object Uint32Array]",x={};x[fi]=x[di]=x[pi]=x[gi]=x[hi]=x[vi]=x[bi]=x[yi]=x[mi]=!0;x[qa]=x[Xa]=x[ui]=x[Ja]=x[li]=x[Qa]=x[ri]=x[ei]=x[ti]=x[ni]=x[ai]=x[ii]=x[oi]=x[si]=x[ci]=!1;function Ti(r){return Z(r)&&rt(r.length)&&!!x[Y(r)]}function Hr(r){return function(e){return r(e)}}var et=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ir=et&&typeof module=="object"&&module&&!module.nodeType&&module,Si=ir&&ir.exports===et,Ir=Si&&ze.process,xi=function(){try{var r=ir&&ir.require&&ir.require("util").types;return r||Ir&&Ir.binding&&Ir.binding("util")}catch{}}();const er=xi;var je=er&&er.isTypedArray,Ei=je?Hr(je):Ti;const ji=Ei;var _i=Object.prototype,Ai=_i.hasOwnProperty;function tt(r,e){var t=lr(r),n=!t&&Ba(r),i=!t&&!n&&Qe(r),o=!t&&!n&&!i&&ji(r),s=t||n||i||o,g=s?La(r.length,String):[],v=g.length;for(var y in r)(e||Ai.call(r,y))&&!(s&&(y=="length"||i&&(y=="offset"||y=="parent")||o&&(y=="buffer"||y=="byteLength"||y=="byteOffset")||Ya(y,v)))&&g.push(y);return g}var wi=Object.prototype;function Gr(r){var e=r&&r.constructor,t=typeof e=="function"&&e.prototype||wi;return r===t}var $i=Ge(Object.keys,Object);const Ci=$i;var Oi=Object.prototype,Ii=Oi.hasOwnProperty;function Fi(r){if(!Gr(r))return Ci(r);var e=[];for(var t in Object(r))Ii.call(r,t)&&t!="constructor"&&e.push(t);return e}function nt(r){return r!=null&&rt(r.length)&&!Ye(r)}function Kr(r){return nt(r)?tt(r):Fi(r)}function Mi(r,e){return r&&yr(e,Kr(e),r)}function Ri(r){var e=[];if(r!=null)for(var t in Object(r))e.push(t);return e}var Li=Object.prototype,Pi=Li.hasOwnProperty;function ki(r){if(!ur(r))return Ri(r);var e=Gr(r),t=[];for(var n in r)n=="constructor"&&(e||!Pi.call(r,n))||t.push(n);return t}function Wr(r){return nt(r)?tt(r,!0):ki(r)}function Di(r,e){return r&&yr(e,Wr(e),r)}var at=typeof exports=="object"&&exports&&!exports.nodeType&&exports,_e=at&&typeof module=="object"&&module&&!module.nodeType&&module,Ni=_e&&_e.exports===at,Ae=Ni?D.Buffer:void 0,we=Ae?Ae.allocUnsafe:void 0;function Bi(r,e){if(e)return r.slice();var t=r.length,n=we?we(t):new r.constructor(t);return r.copy(n),n}function it(r,e){var t=-1,n=r.length;for(e||(e=Array(n));++t<n;)e[t]=r[t];return e}function Vi(r,e){for(var t=-1,n=r==null?0:r.length,i=0,o=[];++t<n;){var s=r[t];e(s,t,r)&&(o[i++]=s)}return o}function ot(){return[]}var Ui=Object.prototype,zi=Ui.propertyIsEnumerable,$e=Object.getOwnPropertySymbols,Hi=$e?function(r){return r==null?[]:(r=Object(r),Vi($e(r),function(e){return zi.call(r,e)}))}:ot;const Yr=Hi;function Gi(r,e){return yr(r,Yr(r),e)}function st(r,e){for(var t=-1,n=e.length,i=r.length;++t<n;)r[i+t]=e[t];return r}var Ki=Object.getOwnPropertySymbols,Wi=Ki?function(r){for(var e=[];r;)st(e,Yr(r)),r=zr(r);return e}:ot;const ct=Wi;function Yi(r,e){return yr(r,ct(r),e)}function ut(r,e,t){var n=e(r);return lr(r)?n:st(n,t(r))}function Zi(r){return ut(r,Kr,Yr)}function qi(r){return ut(r,Wr,ct)}var Xi=X(D,"DataView");const Pr=Xi;var Ji=X(D,"Promise");const kr=Ji;var Qi=X(D,"Set");const Dr=Qi;var ro=X(D,"WeakMap");const Nr=ro;var Ce="[object Map]",eo="[object Object]",Oe="[object Promise]",Ie="[object Set]",Fe="[object WeakMap]",Me="[object DataView]",to=q(Pr),no=q(sr),ao=q(kr),io=q(Dr),oo=q(Nr),G=Y;(Pr&&G(new Pr(new ArrayBuffer(1)))!=Me||sr&&G(new sr)!=Ce||kr&&G(kr.resolve())!=Oe||Dr&&G(new Dr)!=Ie||Nr&&G(new Nr)!=Fe)&&(G=function(r){var e=Y(r),t=e==eo?r.constructor:void 0,n=t?q(t):"";if(n)switch(n){case to:return Me;case no:return Ce;case ao:return Oe;case io:return Ie;case oo:return Fe}return e});const Zr=G;var so=Object.prototype,co=so.hasOwnProperty;function uo(r){var e=r.length,t=new r.constructor(e);return e&&typeof r[0]=="string"&&co.call(r,"index")&&(t.index=r.index,t.input=r.input),t}var lo=D.Uint8Array;const Re=lo;function qr(r){var e=new r.constructor(r.byteLength);return new Re(e).set(new Re(r)),e}function fo(r,e){var t=e?qr(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.byteLength)}var po=/\w*$/;function go(r){var e=new r.constructor(r.source,po.exec(r));return e.lastIndex=r.lastIndex,e}var Le=V?V.prototype:void 0,Pe=Le?Le.valueOf:void 0;function ho(r){return Pe?Object(Pe.call(r)):{}}function vo(r,e){var t=e?qr(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.length)}var bo="[object Boolean]",yo="[object Date]",mo="[object Map]",To="[object Number]",So="[object RegExp]",xo="[object Set]",Eo="[object String]",jo="[object Symbol]",_o="[object ArrayBuffer]",Ao="[object DataView]",wo="[object Float32Array]",$o="[object Float64Array]",Co="[object Int8Array]",Oo="[object Int16Array]",Io="[object Int32Array]",Fo="[object Uint8Array]",Mo="[object Uint8ClampedArray]",Ro="[object Uint16Array]",Lo="[object Uint32Array]";function Po(r,e,t){var n=r.constructor;switch(e){case _o:return qr(r);case bo:case yo:return new n(+r);case Ao:return fo(r,t);case wo:case $o:case Co:case Oo:case Io:case Fo:case Mo:case Ro:case Lo:return vo(r,t);case mo:return new n;case To:case Eo:return new n(r);case So:return go(r);case xo:return new n;case jo:return ho(r)}}var ke=Object.create,ko=function(){function r(){}return function(e){if(!ur(e))return{};if(ke)return ke(e);r.prototype=e;var t=new r;return r.prototype=void 0,t}}();const Do=ko;function No(r){return typeof r.constructor=="function"&&!Gr(r)?Do(zr(r)):{}}var Bo="[object Map]";function Vo(r){return Z(r)&&Zr(r)==Bo}var De=er&&er.isMap,Uo=De?Hr(De):Vo;const zo=Uo;var Ho="[object Set]";function Go(r){return Z(r)&&Zr(r)==Ho}var Ne=er&&er.isSet,Ko=Ne?Hr(Ne):Go;const Wo=Ko;var Yo=1,Zo=2,qo=4,lt="[object Arguments]",Xo="[object Array]",Jo="[object Boolean]",Qo="[object Date]",rs="[object Error]",ft="[object Function]",es="[object GeneratorFunction]",ts="[object Map]",ns="[object Number]",dt="[object Object]",as="[object RegExp]",is="[object Set]",os="[object String]",ss="[object Symbol]",cs="[object WeakMap]",us="[object ArrayBuffer]",ls="[object DataView]",fs="[object Float32Array]",ds="[object Float64Array]",ps="[object Int8Array]",gs="[object Int16Array]",hs="[object Int32Array]",vs="[object Uint8Array]",bs="[object Uint8ClampedArray]",ys="[object Uint16Array]",ms="[object Uint32Array]",S={};S[lt]=S[Xo]=S[us]=S[ls]=S[Jo]=S[Qo]=S[fs]=S[ds]=S[ps]=S[gs]=S[hs]=S[ts]=S[ns]=S[dt]=S[as]=S[is]=S[os]=S[ss]=S[vs]=S[bs]=S[ys]=S[ms]=!0;S[rs]=S[ft]=S[cs]=!1;function gr(r,e,t,n,i,o){var s,g=e&Yo,v=e&Zo,y=e&qo;if(t&&(s=i?t(r,n,i,o):t(r)),s!==void 0)return s;if(!ur(r))return r;var C=lr(r);if(C){if(s=uo(r),!g)return it(r,s)}else{var O=Zr(r),f=O==ft||O==es;if(Qe(r))return Bi(r,g);if(O==dt||O==lt||f&&!i){if(s=v||f?{}:No(r),!g)return v?Yi(r,Di(s,r)):Gi(r,Mi(s,r))}else{if(!S[O])return i?r:{};s=Po(r,O,g)}}o||(o=new tr);var _=o.get(r);if(_)return _;o.set(r,s),Wo(r)?r.forEach(function($){s.add(gr($,e,t,$,r,o))}):zo(r)&&r.forEach(function($,j){s.set(j,gr($,e,t,j,r,o))});var R=y?v?qi:Zi:v?Wr:Kr,I=C?void 0:R(r);return Ia(I||r,function($,j){I&&(j=$,$=r[j]),qe(s,j,gr($,e,t,j,r,o))}),s}var Ts=4;function Be(r){return gr(r,Ts)}function pt(r,e){for(var t=-1,n=r==null?0:r.length,i=Array(n);++t<n;)i[t]=e(r[t],t,r);return i}var Ss="[object Symbol]";function Xr(r){return typeof r=="symbol"||Z(r)&&Y(r)==Ss}var xs="Expected a function";function Jr(r,e){if(typeof r!="function"||e!=null&&typeof e!="function")throw new TypeError(xs);var t=function(){var n=arguments,i=e?e.apply(this,n):n[0],o=t.cache;if(o.has(i))return o.get(i);var s=r.apply(this,n);return t.cache=o.set(i,s)||o,s};return t.cache=new(Jr.Cache||U),t}Jr.Cache=U;var Es=500;function js(r){var e=Jr(r,function(n){return t.size===Es&&t.clear(),n}),t=e.cache;return e}var _s=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,As=/\\(\\)?/g,ws=js(function(r){var e=[];return r.charCodeAt(0)===46&&e.push(""),r.replace(_s,function(t,n,i,o){e.push(i?o.replace(As,"$1"):n||t)}),e});const $s=ws;var Cs=1/0;function Os(r){if(typeof r=="string"||Xr(r))return r;var e=r+"";return e=="0"&&1/r==-Cs?"-0":e}var Is=1/0,Ve=V?V.prototype:void 0,Ue=Ve?Ve.toString:void 0;function gt(r){if(typeof r=="string")return r;if(lr(r))return pt(r,gt)+"";if(Xr(r))return Ue?Ue.call(r):"";var e=r+"";return e=="0"&&1/r==-Is?"-0":e}function Fs(r){return r==null?"":gt(r)}function ht(r){return lr(r)?pt(r,Os):Xr(r)?[r]:it($s(Fs(r)))}function E(){return E=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},E.apply(this,arguments)}function rr(r,e){if(r==null)return{};var t={},n=Object.keys(r),i,o;for(o=0;o<n.length;o++)i=n[o],!(e.indexOf(i)>=0)&&(t[i]=r[i]);return t}var mr=u.createContext(void 0);mr.displayName="FormikContext";var Ms=mr.Provider;mr.Consumer;function vt(){var r=u.useContext(mr);return r||Ln(!1),r}var M=function(e){return typeof e=="function"},Tr=function(e){return e!==null&&typeof e=="object"},Rs=function(e){return String(Math.floor(Number(e)))===e},Fr=function(e){return Object.prototype.toString.call(e)==="[object String]"},Ls=function(e){return u.Children.count(e)===0},Mr=function(e){return Tr(e)&&M(e.then)};function F(r,e,t,n){n===void 0&&(n=0);for(var i=ht(e);r&&n<i.length;)r=r[i[n++]];return n!==i.length&&!r||r===void 0?t:r}function K(r,e,t){for(var n=Be(r),i=n,o=0,s=ht(e);o<s.length-1;o++){var g=s[o],v=F(r,s.slice(0,o+1));if(v&&(Tr(v)||Array.isArray(v)))i=i[g]=Be(v);else{var y=s[o+1];i=i[g]=Rs(y)&&Number(y)>=0?[]:{}}}return(o===0?r:i)[s[o]]===t?r:(t===void 0?delete i[s[o]]:i[s[o]]=t,o===0&&t===void 0&&delete n[s[o]],n)}function bt(r,e,t,n){t===void 0&&(t=new WeakMap),n===void 0&&(n={});for(var i=0,o=Object.keys(r);i<o.length;i++){var s=o[i],g=r[s];Tr(g)?t.get(g)||(t.set(g,!0),n[s]=Array.isArray(g)?[]:{},bt(g,e,t,n[s])):n[s]=e}return n}function Ps(r,e){switch(e.type){case"SET_VALUES":return E({},r,{values:e.payload});case"SET_TOUCHED":return E({},r,{touched:e.payload});case"SET_ERRORS":return H(r.errors,e.payload)?r:E({},r,{errors:e.payload});case"SET_STATUS":return E({},r,{status:e.payload});case"SET_ISSUBMITTING":return E({},r,{isSubmitting:e.payload});case"SET_ISVALIDATING":return E({},r,{isValidating:e.payload});case"SET_FIELD_VALUE":return E({},r,{values:K(r.values,e.payload.field,e.payload.value)});case"SET_FIELD_TOUCHED":return E({},r,{touched:K(r.touched,e.payload.field,e.payload.value)});case"SET_FIELD_ERROR":return E({},r,{errors:K(r.errors,e.payload.field,e.payload.value)});case"RESET_FORM":return E({},r,e.payload);case"SET_FORMIK_STATE":return e.payload(r);case"SUBMIT_ATTEMPT":return E({},r,{touched:bt(r.values,!0),isSubmitting:!0,submitCount:r.submitCount+1});case"SUBMIT_FAILURE":return E({},r,{isSubmitting:!1});case"SUBMIT_SUCCESS":return E({},r,{isSubmitting:!1});default:return r}}var z={},pr={};function ks(r){var e=r.validateOnChange,t=e===void 0?!0:e,n=r.validateOnBlur,i=n===void 0?!0:n,o=r.validateOnMount,s=o===void 0?!1:o,g=r.isInitialValid,v=r.enableReinitialize,y=v===void 0?!1:v,C=r.onSubmit,O=rr(r,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=E({validateOnChange:t,validateOnBlur:i,validateOnMount:s,onSubmit:C},O),_=u.useRef(f.initialValues),R=u.useRef(f.initialErrors||z),I=u.useRef(f.initialTouched||pr),$=u.useRef(f.initialStatus),j=u.useRef(!1),L=u.useRef({});u.useEffect(function(){return j.current=!0,function(){j.current=!1}},[]);var Sr=u.useState(0),xr=Sr[1],fr=u.useRef({values:f.initialValues,errors:f.initialErrors||z,touched:f.initialTouched||pr,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),T=fr.current,m=u.useCallback(function(a){var c=fr.current;fr.current=Ps(c,a),c!==fr.current&&xr(function(l){return l+1})},[]),Qr=u.useCallback(function(a,c){return new Promise(function(l,d){var h=f.validate(a,c);h==null?l(z):Mr(h)?h.then(function(b){l(b||z)},function(b){d(b)}):l(h)})},[f.validate]),Er=u.useCallback(function(a,c){var l=f.validationSchema,d=M(l)?l(c):l,h=c&&d.validateAt?d.validateAt(c,a):Bs(a,d);return new Promise(function(b,w){h.then(function(){b(z)},function(N){N.name==="ValidationError"?b(Ns(N)):w(N)})})},[f.validationSchema]),re=u.useCallback(function(a,c){return new Promise(function(l){return l(L.current[a].validate(c))})},[]),ee=u.useCallback(function(a){var c=Object.keys(L.current).filter(function(d){return M(L.current[d].validate)}),l=c.length>0?c.map(function(d){return re(d,F(a,d))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(l).then(function(d){return d.reduce(function(h,b,w){return b==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||b&&(h=K(h,c[w],b)),h},{})})},[re]),Tt=u.useCallback(function(a){return Promise.all([ee(a),f.validationSchema?Er(a):{},f.validate?Qr(a):{}]).then(function(c){var l=c[0],d=c[1],h=c[2],b=Rr.all([l,d,h],{arrayMerge:Vs});return b})},[f.validate,f.validationSchema,ee,Qr,Er]),k=P(function(a){return a===void 0&&(a=T.values),m({type:"SET_ISVALIDATING",payload:!0}),Tt(a).then(function(c){return j.current&&(m({type:"SET_ISVALIDATING",payload:!1}),m({type:"SET_ERRORS",payload:c})),c})});u.useEffect(function(){s&&j.current===!0&&H(_.current,f.initialValues)&&k(_.current)},[s,k]);var nr=u.useCallback(function(a){var c=a&&a.values?a.values:_.current,l=a&&a.errors?a.errors:R.current?R.current:f.initialErrors||{},d=a&&a.touched?a.touched:I.current?I.current:f.initialTouched||{},h=a&&a.status?a.status:$.current?$.current:f.initialStatus;_.current=c,R.current=l,I.current=d,$.current=h;var b=function(){m({type:"RESET_FORM",payload:{isSubmitting:!!a&&!!a.isSubmitting,errors:l,touched:d,status:h,values:c,isValidating:!!a&&!!a.isValidating,submitCount:a&&a.submitCount&&typeof a.submitCount=="number"?a.submitCount:0}})};if(f.onReset){var w=f.onReset(T.values,fe);Mr(w)?w.then(b):b()}else b()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);u.useEffect(function(){j.current===!0&&!H(_.current,f.initialValues)&&y&&(_.current=f.initialValues,nr(),s&&k(_.current))},[y,f.initialValues,nr,s,k]),u.useEffect(function(){y&&j.current===!0&&!H(R.current,f.initialErrors)&&(R.current=f.initialErrors||z,m({type:"SET_ERRORS",payload:f.initialErrors||z}))},[y,f.initialErrors]),u.useEffect(function(){y&&j.current===!0&&!H(I.current,f.initialTouched)&&(I.current=f.initialTouched||pr,m({type:"SET_TOUCHED",payload:f.initialTouched||pr}))},[y,f.initialTouched]),u.useEffect(function(){y&&j.current===!0&&!H($.current,f.initialStatus)&&($.current=f.initialStatus,m({type:"SET_STATUS",payload:f.initialStatus}))},[y,f.initialStatus,f.initialTouched]);var te=P(function(a){if(L.current[a]&&M(L.current[a].validate)){var c=F(T.values,a),l=L.current[a].validate(c);return Mr(l)?(m({type:"SET_ISVALIDATING",payload:!0}),l.then(function(d){return d}).then(function(d){m({type:"SET_FIELD_ERROR",payload:{field:a,value:d}}),m({type:"SET_ISVALIDATING",payload:!1})})):(m({type:"SET_FIELD_ERROR",payload:{field:a,value:l}}),Promise.resolve(l))}else if(f.validationSchema)return m({type:"SET_ISVALIDATING",payload:!0}),Er(T.values,a).then(function(d){return d}).then(function(d){m({type:"SET_FIELD_ERROR",payload:{field:a,value:F(d,a)}}),m({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),St=u.useCallback(function(a,c){var l=c.validate;L.current[a]={validate:l}},[]),xt=u.useCallback(function(a){delete L.current[a]},[]),ne=P(function(a,c){m({type:"SET_TOUCHED",payload:a});var l=c===void 0?i:c;return l?k(T.values):Promise.resolve()}),ae=u.useCallback(function(a){m({type:"SET_ERRORS",payload:a})},[]),ie=P(function(a,c){var l=M(a)?a(T.values):a;m({type:"SET_VALUES",payload:l});var d=c===void 0?t:c;return d?k(l):Promise.resolve()}),dr=u.useCallback(function(a,c){m({type:"SET_FIELD_ERROR",payload:{field:a,value:c}})},[]),J=P(function(a,c,l){m({type:"SET_FIELD_VALUE",payload:{field:a,value:c}});var d=l===void 0?t:l;return d?k(K(T.values,a,c)):Promise.resolve()}),oe=u.useCallback(function(a,c){var l=c,d=a,h;if(!Fr(a)){a.persist&&a.persist();var b=a.target?a.target:a.currentTarget,w=b.type,N=b.name,$r=b.id,Cr=b.value,It=b.checked,sc=b.outerHTML,de=b.options,Ft=b.multiple;l=c||N||$r,d=/number|range/.test(w)?(h=parseFloat(Cr),isNaN(h)?"":h):/checkbox/.test(w)?zs(F(T.values,l),It,Cr):de&&Ft?Us(de):Cr}l&&J(l,d)},[J,T.values]),jr=P(function(a){if(Fr(a))return function(c){return oe(c,a)};oe(a)}),Q=P(function(a,c,l){c===void 0&&(c=!0),m({type:"SET_FIELD_TOUCHED",payload:{field:a,value:c}});var d=l===void 0?i:l;return d?k(T.values):Promise.resolve()}),se=u.useCallback(function(a,c){a.persist&&a.persist();var l=a.target,d=l.name,h=l.id,b=l.outerHTML,w=c||d||h;Q(w,!0)},[Q]),_r=P(function(a){if(Fr(a))return function(c){return se(c,a)};se(a)}),ce=u.useCallback(function(a){M(a)?m({type:"SET_FORMIK_STATE",payload:a}):m({type:"SET_FORMIK_STATE",payload:function(){return a}})},[]),ue=u.useCallback(function(a){m({type:"SET_STATUS",payload:a})},[]),le=u.useCallback(function(a){m({type:"SET_ISSUBMITTING",payload:a})},[]),Ar=P(function(){return m({type:"SUBMIT_ATTEMPT"}),k().then(function(a){var c=a instanceof Error,l=!c&&Object.keys(a).length===0;if(l){var d;try{if(d=jt(),d===void 0)return}catch(h){throw h}return Promise.resolve(d).then(function(h){return j.current&&m({type:"SUBMIT_SUCCESS"}),h}).catch(function(h){if(j.current)throw m({type:"SUBMIT_FAILURE"}),h})}else if(j.current&&(m({type:"SUBMIT_FAILURE"}),c))throw a})}),Et=P(function(a){a&&a.preventDefault&&M(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&M(a.stopPropagation)&&a.stopPropagation(),Ar().catch(function(c){console.warn("Warning: An unhandled error was caught from submitForm()",c)})}),fe={resetForm:nr,validateForm:k,validateField:te,setErrors:ae,setFieldError:dr,setFieldTouched:Q,setFieldValue:J,setStatus:ue,setSubmitting:le,setTouched:ne,setValues:ie,setFormikState:ce,submitForm:Ar},jt=P(function(){return C(T.values,fe)}),_t=P(function(a){a&&a.preventDefault&&M(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&M(a.stopPropagation)&&a.stopPropagation(),nr()}),At=u.useCallback(function(a){return{value:F(T.values,a),error:F(T.errors,a),touched:!!F(T.touched,a),initialValue:F(_.current,a),initialTouched:!!F(I.current,a),initialError:F(R.current,a)}},[T.errors,T.touched,T.values]),wt=u.useCallback(function(a){return{setValue:function(l,d){return J(a,l,d)},setTouched:function(l,d){return Q(a,l,d)},setError:function(l){return dr(a,l)}}},[J,Q,dr]),$t=u.useCallback(function(a){var c=Tr(a),l=c?a.name:a,d=F(T.values,l),h={name:l,value:d,onChange:jr,onBlur:_r};if(c){var b=a.type,w=a.value,N=a.as,$r=a.multiple;b==="checkbox"?w===void 0?h.checked=!!d:(h.checked=!!(Array.isArray(d)&&~d.indexOf(w)),h.value=w):b==="radio"?(h.checked=d===w,h.value=w):N==="select"&&$r&&(h.value=h.value||[],h.multiple=!0)}return h},[_r,jr,T.values]),wr=u.useMemo(function(){return!H(_.current,T.values)},[_.current,T.values]),Ct=u.useMemo(function(){return typeof g<"u"?wr?T.errors&&Object.keys(T.errors).length===0:g!==!1&&M(g)?g(f):g:T.errors&&Object.keys(T.errors).length===0},[g,wr,T.errors,f]),Ot=E({},T,{initialValues:_.current,initialErrors:R.current,initialTouched:I.current,initialStatus:$.current,handleBlur:_r,handleChange:jr,handleReset:_t,handleSubmit:Et,resetForm:nr,setErrors:ae,setFormikState:ce,setFieldTouched:Q,setFieldValue:J,setFieldError:dr,setStatus:ue,setSubmitting:le,setTouched:ne,setValues:ie,submitForm:Ar,validateForm:k,validateField:te,isValid:Ct,dirty:wr,unregisterField:xt,registerField:St,getFieldProps:$t,getFieldMeta:At,getFieldHelpers:wt,validateOnBlur:i,validateOnChange:t,validateOnMount:s});return Ot}function Ds(r){var e=ks(r),t=r.component,n=r.children,i=r.render,o=r.innerRef;return u.useImperativeHandle(o,function(){return e}),u.createElement(Ms,{value:e},t?u.createElement(t,e):i?i(e):n?M(n)?n(e):Ls(n)?null:u.Children.only(n):null)}function Ns(r){var e={};if(r.inner){if(r.inner.length===0)return K(e,r.path,r.message);for(var i=r.inner,t=Array.isArray(i),n=0,i=t?i:i[Symbol.iterator]();;){var o;if(t){if(n>=i.length)break;o=i[n++]}else{if(n=i.next(),n.done)break;o=n.value}var s=o;F(e,s.path)||(e=K(e,s.path,s.message))}}return e}function Bs(r,e,t,n){t===void 0&&(t=!1);var i=Br(r);return e[t?"validateSync":"validate"](i,{abortEarly:!1,context:n||i})}function Br(r){var e=Array.isArray(r)?[]:{};for(var t in r)if(Object.prototype.hasOwnProperty.call(r,t)){var n=String(t);Array.isArray(r[n])===!0?e[n]=r[n].map(function(i){return Array.isArray(i)===!0||ve(i)?Br(i):i!==""?i:void 0}):ve(r[n])?e[n]=Br(r[n]):e[n]=r[n]!==""?r[n]:void 0}return e}function Vs(r,e,t){var n=r.slice();return e.forEach(function(o,s){if(typeof n[s]>"u"){var g=t.clone!==!1,v=g&&t.isMergeableObject(o);n[s]=v?Rr(Array.isArray(o)?[]:{},o,t):o}else t.isMergeableObject(o)?n[s]=Rr(r[s],o,t):r.indexOf(o)===-1&&n.push(o)}),n}function Us(r){return Array.from(r).filter(function(e){return e.selected}).map(function(e){return e.value})}function zs(r,e,t){if(typeof r=="boolean")return!!e;var n=[],i=!1,o=-1;if(Array.isArray(r))n=r,o=r.indexOf(t),i=o>=0;else if(!t||t=="true"||t=="false")return!!e;return e&&t&&!i?n.concat(t):i?n.slice(0,o).concat(n.slice(o+1)):n}var Hs=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?u.useLayoutEffect:u.useEffect;function P(r){var e=u.useRef(r);return Hs(function(){e.current=r}),u.useCallback(function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return e.current.apply(void 0,n)},[])}function Gs(r){var e=r.validate,t=r.name,n=r.render,i=r.children,o=r.as,s=r.component,g=r.className,v=rr(r,["validate","name","render","children","as","component","className"]),y=vt(),C=rr(y,["validate","validationSchema"]),O=C.registerField,f=C.unregisterField;u.useEffect(function(){return O(t,{validate:e}),function(){f(t)}},[O,f,t,e]);var _=C.getFieldProps(E({name:t},v)),R=C.getFieldMeta(t),I={field:_,form:C};if(n)return n(E({},I,{meta:R}));if(M(i))return i(E({},I,{meta:R}));if(s){if(typeof s=="string"){var $=v.innerRef,j=rr(v,["innerRef"]);return u.createElement(s,E({ref:$},_,j,{className:g}),i)}return u.createElement(s,E({field:_,form:C},v,{className:g}),i)}var L=o||"input";if(typeof L=="string"){var Sr=v.innerRef,xr=rr(v,["innerRef"]);return u.createElement(L,E({ref:Sr},_,xr,{className:g}),i)}return u.createElement(L,E({},_,v,{className:g}),i)}var yt=u.forwardRef(function(r,e){var t=r.action,n=rr(r,["action"]),i=t??"#",o=vt(),s=o.handleReset,g=o.handleSubmit;return u.createElement("form",E({onSubmit:g,ref:e,onReset:s,action:i},n))});yt.displayName="Form";const Ks=A.div`
  position: relative;
  width: 100%;
  max-width: ${r=>r.isSearching?300:40}px;
  height: 40px;
  background-color: transparent;
  border: 2px solid rgba(var(--bg-primary), 1);
  border-radius: 4px;
  align-items: center;
  overflow: hidden;
  order: 2;
  display: flex;
  justify-content: space-between;
  transition: var(--trans);

  &:hover {
    border-color: rgba(var(--bg-primary), 0.7);
  }
`,Ws=A.label`
  position: absolute;
  width: 0px;
  height: 0px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`,Ys=A(Gs)`
  /* padding: 0 40px 0 40px; */
  padding-left: ${r=>r.isSearching?40:0}px;
  padding-right: ${r=>r.isSearching?40:0}px;
  position: absolute;
  border: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: transparent;
  font-size: 20px;
  color-scheme: dark;
  color: rgba(var(--text-primary), 0.7);
  background-color: transparent;
  transition: var(--trans);
  outline: none;
  /* border: 1px solid transparent; */

  &:focus {
    border-color: rgba(0, 0, 0, 0.3);
  }

  &::placeholder {
    font: inherit;
    font-size: 18px;
    background-color: transparent;
    color: rgba(var(--text-primary), 0.7);
    transition: var(--trans);
  }
`,Zs=A.button`
  position: absolute;
  top: 0;
  left: 0;
  height: 36px;
  width: 36px;
  border: none;
  z-index: 1;
  cursor: pointer;
  background-color: rgba(var(--bg-primary), 1);
  transition: var(--trans);

  &:hover {
    background-color: rgba(var(--bg-primary), 0.7);

    &::after {
      opacity: 1;
      transform: scale(1);
      transition: var(--trans);
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    border-radius: 4px;
    z-index: -1;
    background-color: #000;
    transform: scale(0.6);
    opacity: 0;
    transition: var(--trans);
  }

  svg {
    fill: rgba(var(--text), 1);
    transition: var(--trans);
  }
`,qs=A.button`
  position: absolute;
  top: 0;
  right: 0;
  height: 36px;
  width: 36px;
  border: none;
  z-index: 1;
  cursor: pointer;
  background-color: rgba(var(--bg-primary), 1);
  transition: var(--trans);

  &:hover {
    background-color: rgba(var(--bg-primary), 0.7);

    &::after {
      opacity: 1;
      transform: scale(1);
      transition: var(--trans);
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    border-radius: 4px;
    z-index: -1;
    background-color: #000;
    transition: all 0.25s ease;
    transform: scale(0.6);
    opacity: 0;
  }

  svg {
    fill: rgba(var(--text), 1);
    transition: var(--trans);
  }
`;function Xs(){const[r,e]=u.useState(!1),t=()=>e(!r),n=Pt(),i=({search:o},s)=>{if(o.trim()===""){Ut.error("Please enter a word to search for");return}n(`movies?query=${encodeURIComponent(o)}`),s.resetForm()};return p.jsxs(Ks,{isSearching:r,children:[r?p.jsx(Ds,{initialValues:{search:""},onSubmit:i,children:p.jsxs(yt,{children:[p.jsx(Zs,{type:"submit",value:"submit",children:p.jsx(pe,{size:25})}),p.jsx(Ws,{htmlFor:"search"}),p.jsx(Ys,{type:"text",id:"search",name:"search",placeholder:"Search",isSearching:r})]})}):void 0,p.jsx(qs,{onClick:t,children:r?p.jsx(Bt,{size:25}):p.jsx(pe,{size:25})})]})}function Js(r){return Vr({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"}}]})(r)}function Qs(r){return Vr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"}}]})(r)}const rc=A.label`
  display: flex;
  align-items: center;
  justify-content: center;
  order: 3;
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
`,mt=kt`   
  0% {
    transform: rotate(-360deg) scale(0);
    opacity: 0;
  }

  75% {
    transform: rotate(25deg);
  }
`,ec=A(Js)`
  animation: ${mt} 0.5s;
`,tc=A(Qs)`
  animation: ${mt} 0.5s;
`;function nc(){const[r,e]=u.useState(()=>{const n=window.matchMedia("(prefers-color-scheme: dark)").matches;return localStorage.getItem("theme")||(n?"dark":"light")});u.useEffect(()=>{localStorage.setItem("theme",r)},[r]),u.useEffect(()=>{const{body:n}=document;n.dataset.theme=r},[r]);const t=()=>{e(r==="light"?"dark":"light")};return p.jsxs(rc,{className:"switcher",children:[p.jsx("input",{type:"checkbox",onChange:t,checked:r==="dark"}),r==="dark"?p.jsx(ec,{}):p.jsx(tc,{})]})}function ac(){return p.jsx(Kt,{children:p.jsxs(Wt,{children:[p.jsx(Jt,{}),p.jsx(tn,{}),p.jsx(Xs,{}),p.jsx(nc,{}),p.jsx(Zt,{}),p.jsx(rn,{})]})})}const ic=A.main``;function oc(){return p.jsx(ic,{children:p.jsx(Ur,{children:p.jsx(u.Suspense,{fallback:p.jsx(Vt,{}),children:p.jsx(Dt,{})})})})}function dc(){return p.jsxs(zt,{children:[p.jsx(ac,{}),p.jsx(oc,{}),p.jsx(Gt,{})]})}export{dc as default};
