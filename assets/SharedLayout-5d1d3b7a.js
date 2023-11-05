import{s as A,j as h,G as Be,N as Ft,r as u,g as Mt,u as Rt,c as Pt,L as Lt,O as kt}from"./index-41086487.js";import{A as Dt,I as Nt}from"./index.esm-615dfdc1.js";import Vt from"./Loader-b146353c.js";import{Q as Bt}from"./react-toastify.esm-c5721447.js";const Ut=A.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100%;
`,Br=A.div`
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
`;function Ht(){return h.jsx(zt,{children:h.jsx(Br,{children:h.jsxs("p",{children:[" ","© 2023 Movies App. All rights reserved. Designed and Developed by"," ",h.jsx("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/oleksandr-pishta",children:"Oleksandr Pishta"})]})})})}function Gt(e){return Be({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 20H20V22H12C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.2512 21.2561 16.3287 20.0007 18H17.2916C18.9525 16.5341 20 14.3894 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8C14 9.10457 13.1046 10 12 10ZM8 14C6.89543 14 6 13.1046 6 12C6 10.8954 6.89543 10 8 10C9.10457 10 10 10.8954 10 12C10 13.1046 9.10457 14 8 14ZM16 14C14.8954 14 14 13.1046 14 12C14 10.8954 14.8954 10 16 10C17.1046 10 18 10.8954 18 12C18 13.1046 17.1046 14 16 14ZM12 18C10.8954 18 10 17.1046 10 16C10 14.8954 10.8954 14 12 14C13.1046 14 14 14.8954 14 16C14 17.1046 13.1046 18 12 18Z"}}]})(e)}const Kt=A.header`
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
`,Wt=A.div`
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
`,Yt=A.div`
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
`,Zt=A.nav`
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
`,dr=A(Ft)`
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
`,qt=A.button`
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
`,Xt=A.label`
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
`;function Jt(){const[e,r]=u.useState(!1),t=n=>{r(n.target.checked)};return h.jsxs(Xt,{htmlFor:"menu-check",children:[h.jsx("input",{id:"menu-check","aria-hidden":"true",type:"checkbox",checked:e,onChange:t}),h.jsx("span",{})]})}var Qt=function(r){return en(r)&&!rn(r)};function en(e){return!!e&&typeof e=="object"}function rn(e){var r=Object.prototype.toString.call(e);return r==="[object RegExp]"||r==="[object Date]"||an(e)}var tn=typeof Symbol=="function"&&Symbol.for,nn=tn?Symbol.for("react.element"):60103;function an(e){return e.$$typeof===nn}function on(e){return Array.isArray(e)?[]:{}}function ge(e,r){return r.clone!==!1&&r.isMergeableObject(e)?oe(on(e),e,r):e}function sn(e,r,t){return e.concat(r).map(function(n){return ge(n,t)})}function cn(e,r,t){var n={};return t.isMergeableObject(e)&&Object.keys(e).forEach(function(i){n[i]=ge(e[i],t)}),Object.keys(r).forEach(function(i){!t.isMergeableObject(r[i])||!e[i]?n[i]=ge(r[i],t):n[i]=oe(e[i],r[i],t)}),n}function oe(e,r,t){t=t||{},t.arrayMerge=t.arrayMerge||sn,t.isMergeableObject=t.isMergeableObject||Qt;var n=Array.isArray(r),i=Array.isArray(e),o=n===i;return o?n?t.arrayMerge(e,r,t):cn(e,r,t):ge(r,t)}oe.all=function(r,t){if(!Array.isArray(r))throw new Error("first argument should be an array");return r.reduce(function(n,i){return oe(n,i,t)},{})};var Re=oe,un=typeof global=="object"&&global&&global.Object===Object&&global;const Ur=un;var ln=typeof self=="object"&&self&&self.Object===Object&&self,fn=Ur||ln||Function("return this")();const D=fn;var dn=D.Symbol;const B=dn;var zr=Object.prototype,pn=zr.hasOwnProperty,hn=zr.toString,ae=B?B.toStringTag:void 0;function gn(e){var r=pn.call(e,ae),t=e[ae];try{e[ae]=void 0;var n=!0}catch{}var i=hn.call(e);return n&&(r?e[ae]=t:delete e[ae]),i}var vn=Object.prototype,bn=vn.toString;function yn(e){return bn.call(e)}var mn="[object Null]",Tn="[object Undefined]",pr=B?B.toStringTag:void 0;function Y(e){return e==null?e===void 0?Tn:mn:pr&&pr in Object(e)?gn(e):yn(e)}function Hr(e,r){return function(t){return e(r(t))}}var Sn=Hr(Object.getPrototypeOf,Object);const Ue=Sn;function Z(e){return e!=null&&typeof e=="object"}var En="[object Object]",xn=Function.prototype,jn=Object.prototype,Gr=xn.toString,_n=jn.hasOwnProperty,wn=Gr.call(Object);function hr(e){if(!Z(e)||Y(e)!=En)return!1;var r=Ue(e);if(r===null)return!0;var t=_n.call(r,"constructor")&&r.constructor;return typeof t=="function"&&t instanceof t&&Gr.call(t)==wn}var gr=Array.isArray,vr=Object.keys,An=Object.prototype.hasOwnProperty,Cn=typeof Element<"u";function Pe(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){var t=gr(e),n=gr(r),i,o,s;if(t&&n){if(o=e.length,o!=r.length)return!1;for(i=o;i--!==0;)if(!Pe(e[i],r[i]))return!1;return!0}if(t!=n)return!1;var p=e instanceof Date,v=r instanceof Date;if(p!=v)return!1;if(p&&v)return e.getTime()==r.getTime();var y=e instanceof RegExp,$=r instanceof RegExp;if(y!=$)return!1;if(y&&$)return e.toString()==r.toString();var O=vr(e);if(o=O.length,o!==vr(r).length)return!1;for(i=o;i--!==0;)if(!An.call(r,O[i]))return!1;if(Cn&&e instanceof Element&&r instanceof Element)return e===r;for(i=o;i--!==0;)if(s=O[i],!(s==="_owner"&&e.$$typeof)&&!Pe(e[s],r[s]))return!1;return!0}return e!==e&&r!==r}var $n=function(r,t){try{return Pe(r,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}};const H=Mt($n);var On=!0;function In(e,r){if(!On){if(e)return;var t="Warning: "+r;typeof console<"u"&&console.warn(t);try{throw Error(t)}catch{}}}function Fn(){this.__data__=[],this.size=0}function Kr(e,r){return e===r||e!==e&&r!==r}function ve(e,r){for(var t=e.length;t--;)if(Kr(e[t][0],r))return t;return-1}var Mn=Array.prototype,Rn=Mn.splice;function Pn(e){var r=this.__data__,t=ve(r,e);if(t<0)return!1;var n=r.length-1;return t==n?r.pop():Rn.call(r,t,1),--this.size,!0}function Ln(e){var r=this.__data__,t=ve(r,e);return t<0?void 0:r[t][1]}function kn(e){return ve(this.__data__,e)>-1}function Dn(e,r){var t=this.__data__,n=ve(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this}function V(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}V.prototype.clear=Fn;V.prototype.delete=Pn;V.prototype.get=Ln;V.prototype.has=kn;V.prototype.set=Dn;function Nn(){this.__data__=new V,this.size=0}function Vn(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t}function Bn(e){return this.__data__.get(e)}function Un(e){return this.__data__.has(e)}function ue(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}var zn="[object AsyncFunction]",Hn="[object Function]",Gn="[object GeneratorFunction]",Kn="[object Proxy]";function Wr(e){if(!ue(e))return!1;var r=Y(e);return r==Hn||r==Gn||r==zn||r==Kn}var Wn=D["__core-js_shared__"];const Oe=Wn;var br=function(){var e=/[^.]+$/.exec(Oe&&Oe.keys&&Oe.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Yn(e){return!!br&&br in e}var Zn=Function.prototype,qn=Zn.toString;function q(e){if(e!=null){try{return qn.call(e)}catch{}try{return e+""}catch{}}return""}var Xn=/[\\^$.*+?()[\]{}|]/g,Jn=/^\[object .+?Constructor\]$/,Qn=Function.prototype,ea=Object.prototype,ra=Qn.toString,ta=ea.hasOwnProperty,na=RegExp("^"+ra.call(ta).replace(Xn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function aa(e){if(!ue(e)||Yn(e))return!1;var r=Wr(e)?na:Jn;return r.test(q(e))}function ia(e,r){return e==null?void 0:e[r]}function X(e,r){var t=ia(e,r);return aa(t)?t:void 0}var oa=X(D,"Map");const se=oa;var sa=X(Object,"create");const ce=sa;function ca(){this.__data__=ce?ce(null):{},this.size=0}function ua(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r}var la="__lodash_hash_undefined__",fa=Object.prototype,da=fa.hasOwnProperty;function pa(e){var r=this.__data__;if(ce){var t=r[e];return t===la?void 0:t}return da.call(r,e)?r[e]:void 0}var ha=Object.prototype,ga=ha.hasOwnProperty;function va(e){var r=this.__data__;return ce?r[e]!==void 0:ga.call(r,e)}var ba="__lodash_hash_undefined__";function ya(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=ce&&r===void 0?ba:r,this}function W(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}W.prototype.clear=ca;W.prototype.delete=ua;W.prototype.get=pa;W.prototype.has=va;W.prototype.set=ya;function ma(){this.size=0,this.__data__={hash:new W,map:new(se||V),string:new W}}function Ta(e){var r=typeof e;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?e!=="__proto__":e===null}function be(e,r){var t=e.__data__;return Ta(r)?t[typeof r=="string"?"string":"hash"]:t.map}function Sa(e){var r=be(this,e).delete(e);return this.size-=r?1:0,r}function Ea(e){return be(this,e).get(e)}function xa(e){return be(this,e).has(e)}function ja(e,r){var t=be(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this}function U(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}U.prototype.clear=ma;U.prototype.delete=Sa;U.prototype.get=Ea;U.prototype.has=xa;U.prototype.set=ja;var _a=200;function wa(e,r){var t=this.__data__;if(t instanceof V){var n=t.__data__;if(!se||n.length<_a-1)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new U(n)}return t.set(e,r),this.size=t.size,this}function te(e){var r=this.__data__=new V(e);this.size=r.size}te.prototype.clear=Nn;te.prototype.delete=Vn;te.prototype.get=Bn;te.prototype.has=Un;te.prototype.set=wa;function Aa(e,r){for(var t=-1,n=e==null?0:e.length;++t<n&&r(e[t],t,e)!==!1;);return e}var Ca=function(){try{var e=X(Object,"defineProperty");return e({},"",{}),e}catch{}}();const yr=Ca;function Yr(e,r,t){r=="__proto__"&&yr?yr(e,r,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[r]=t}var $a=Object.prototype,Oa=$a.hasOwnProperty;function Zr(e,r,t){var n=e[r];(!(Oa.call(e,r)&&Kr(n,t))||t===void 0&&!(r in e))&&Yr(e,r,t)}function ye(e,r,t,n){var i=!t;t||(t={});for(var o=-1,s=r.length;++o<s;){var p=r[o],v=n?n(t[p],e[p],p,t,e):void 0;v===void 0&&(v=e[p]),i?Yr(t,p,v):Zr(t,p,v)}return t}function Ia(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n}var Fa="[object Arguments]";function mr(e){return Z(e)&&Y(e)==Fa}var qr=Object.prototype,Ma=qr.hasOwnProperty,Ra=qr.propertyIsEnumerable,Pa=mr(function(){return arguments}())?mr:function(e){return Z(e)&&Ma.call(e,"callee")&&!Ra.call(e,"callee")};const La=Pa;var ka=Array.isArray;const le=ka;function Da(){return!1}var Xr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Tr=Xr&&typeof module=="object"&&module&&!module.nodeType&&module,Na=Tr&&Tr.exports===Xr,Sr=Na?D.Buffer:void 0,Va=Sr?Sr.isBuffer:void 0,Ba=Va||Da;const Jr=Ba;var Ua=9007199254740991,za=/^(?:0|[1-9]\d*)$/;function Ha(e,r){var t=typeof e;return r=r??Ua,!!r&&(t=="number"||t!="symbol"&&za.test(e))&&e>-1&&e%1==0&&e<r}var Ga=9007199254740991;function Qr(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Ga}var Ka="[object Arguments]",Wa="[object Array]",Ya="[object Boolean]",Za="[object Date]",qa="[object Error]",Xa="[object Function]",Ja="[object Map]",Qa="[object Number]",ei="[object Object]",ri="[object RegExp]",ti="[object Set]",ni="[object String]",ai="[object WeakMap]",ii="[object ArrayBuffer]",oi="[object DataView]",si="[object Float32Array]",ci="[object Float64Array]",ui="[object Int8Array]",li="[object Int16Array]",fi="[object Int32Array]",di="[object Uint8Array]",pi="[object Uint8ClampedArray]",hi="[object Uint16Array]",gi="[object Uint32Array]",E={};E[si]=E[ci]=E[ui]=E[li]=E[fi]=E[di]=E[pi]=E[hi]=E[gi]=!0;E[Ka]=E[Wa]=E[ii]=E[Ya]=E[oi]=E[Za]=E[qa]=E[Xa]=E[Ja]=E[Qa]=E[ei]=E[ri]=E[ti]=E[ni]=E[ai]=!1;function vi(e){return Z(e)&&Qr(e.length)&&!!E[Y(e)]}function ze(e){return function(r){return e(r)}}var et=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ie=et&&typeof module=="object"&&module&&!module.nodeType&&module,bi=ie&&ie.exports===et,Ie=bi&&Ur.process,yi=function(){try{var e=ie&&ie.require&&ie.require("util").types;return e||Ie&&Ie.binding&&Ie.binding("util")}catch{}}();const re=yi;var Er=re&&re.isTypedArray,mi=Er?ze(Er):vi;const Ti=mi;var Si=Object.prototype,Ei=Si.hasOwnProperty;function rt(e,r){var t=le(e),n=!t&&La(e),i=!t&&!n&&Jr(e),o=!t&&!n&&!i&&Ti(e),s=t||n||i||o,p=s?Ia(e.length,String):[],v=p.length;for(var y in e)(r||Ei.call(e,y))&&!(s&&(y=="length"||i&&(y=="offset"||y=="parent")||o&&(y=="buffer"||y=="byteLength"||y=="byteOffset")||Ha(y,v)))&&p.push(y);return p}var xi=Object.prototype;function He(e){var r=e&&e.constructor,t=typeof r=="function"&&r.prototype||xi;return e===t}var ji=Hr(Object.keys,Object);const _i=ji;var wi=Object.prototype,Ai=wi.hasOwnProperty;function Ci(e){if(!He(e))return _i(e);var r=[];for(var t in Object(e))Ai.call(e,t)&&t!="constructor"&&r.push(t);return r}function tt(e){return e!=null&&Qr(e.length)&&!Wr(e)}function Ge(e){return tt(e)?rt(e):Ci(e)}function $i(e,r){return e&&ye(r,Ge(r),e)}function Oi(e){var r=[];if(e!=null)for(var t in Object(e))r.push(t);return r}var Ii=Object.prototype,Fi=Ii.hasOwnProperty;function Mi(e){if(!ue(e))return Oi(e);var r=He(e),t=[];for(var n in e)n=="constructor"&&(r||!Fi.call(e,n))||t.push(n);return t}function Ke(e){return tt(e)?rt(e,!0):Mi(e)}function Ri(e,r){return e&&ye(r,Ke(r),e)}var nt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,xr=nt&&typeof module=="object"&&module&&!module.nodeType&&module,Pi=xr&&xr.exports===nt,jr=Pi?D.Buffer:void 0,_r=jr?jr.allocUnsafe:void 0;function Li(e,r){if(r)return e.slice();var t=e.length,n=_r?_r(t):new e.constructor(t);return e.copy(n),n}function at(e,r){var t=-1,n=e.length;for(r||(r=Array(n));++t<n;)r[t]=e[t];return r}function ki(e,r){for(var t=-1,n=e==null?0:e.length,i=0,o=[];++t<n;){var s=e[t];r(s,t,e)&&(o[i++]=s)}return o}function it(){return[]}var Di=Object.prototype,Ni=Di.propertyIsEnumerable,wr=Object.getOwnPropertySymbols,Vi=wr?function(e){return e==null?[]:(e=Object(e),ki(wr(e),function(r){return Ni.call(e,r)}))}:it;const We=Vi;function Bi(e,r){return ye(e,We(e),r)}function ot(e,r){for(var t=-1,n=r.length,i=e.length;++t<n;)e[i+t]=r[t];return e}var Ui=Object.getOwnPropertySymbols,zi=Ui?function(e){for(var r=[];e;)ot(r,We(e)),e=Ue(e);return r}:it;const st=zi;function Hi(e,r){return ye(e,st(e),r)}function ct(e,r,t){var n=r(e);return le(e)?n:ot(n,t(e))}function Gi(e){return ct(e,Ge,We)}function Ki(e){return ct(e,Ke,st)}var Wi=X(D,"DataView");const Le=Wi;var Yi=X(D,"Promise");const ke=Yi;var Zi=X(D,"Set");const De=Zi;var qi=X(D,"WeakMap");const Ne=qi;var Ar="[object Map]",Xi="[object Object]",Cr="[object Promise]",$r="[object Set]",Or="[object WeakMap]",Ir="[object DataView]",Ji=q(Le),Qi=q(se),eo=q(ke),ro=q(De),to=q(Ne),G=Y;(Le&&G(new Le(new ArrayBuffer(1)))!=Ir||se&&G(new se)!=Ar||ke&&G(ke.resolve())!=Cr||De&&G(new De)!=$r||Ne&&G(new Ne)!=Or)&&(G=function(e){var r=Y(e),t=r==Xi?e.constructor:void 0,n=t?q(t):"";if(n)switch(n){case Ji:return Ir;case Qi:return Ar;case eo:return Cr;case ro:return $r;case to:return Or}return r});const Ye=G;var no=Object.prototype,ao=no.hasOwnProperty;function io(e){var r=e.length,t=new e.constructor(r);return r&&typeof e[0]=="string"&&ao.call(e,"index")&&(t.index=e.index,t.input=e.input),t}var oo=D.Uint8Array;const Fr=oo;function Ze(e){var r=new e.constructor(e.byteLength);return new Fr(r).set(new Fr(e)),r}function so(e,r){var t=r?Ze(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}var co=/\w*$/;function uo(e){var r=new e.constructor(e.source,co.exec(e));return r.lastIndex=e.lastIndex,r}var Mr=B?B.prototype:void 0,Rr=Mr?Mr.valueOf:void 0;function lo(e){return Rr?Object(Rr.call(e)):{}}function fo(e,r){var t=r?Ze(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}var po="[object Boolean]",ho="[object Date]",go="[object Map]",vo="[object Number]",bo="[object RegExp]",yo="[object Set]",mo="[object String]",To="[object Symbol]",So="[object ArrayBuffer]",Eo="[object DataView]",xo="[object Float32Array]",jo="[object Float64Array]",_o="[object Int8Array]",wo="[object Int16Array]",Ao="[object Int32Array]",Co="[object Uint8Array]",$o="[object Uint8ClampedArray]",Oo="[object Uint16Array]",Io="[object Uint32Array]";function Fo(e,r,t){var n=e.constructor;switch(r){case So:return Ze(e);case po:case ho:return new n(+e);case Eo:return so(e,t);case xo:case jo:case _o:case wo:case Ao:case Co:case $o:case Oo:case Io:return fo(e,t);case go:return new n;case vo:case mo:return new n(e);case bo:return uo(e);case yo:return new n;case To:return lo(e)}}var Pr=Object.create,Mo=function(){function e(){}return function(r){if(!ue(r))return{};if(Pr)return Pr(r);e.prototype=r;var t=new e;return e.prototype=void 0,t}}();const Ro=Mo;function Po(e){return typeof e.constructor=="function"&&!He(e)?Ro(Ue(e)):{}}var Lo="[object Map]";function ko(e){return Z(e)&&Ye(e)==Lo}var Lr=re&&re.isMap,Do=Lr?ze(Lr):ko;const No=Do;var Vo="[object Set]";function Bo(e){return Z(e)&&Ye(e)==Vo}var kr=re&&re.isSet,Uo=kr?ze(kr):Bo;const zo=Uo;var Ho=1,Go=2,Ko=4,ut="[object Arguments]",Wo="[object Array]",Yo="[object Boolean]",Zo="[object Date]",qo="[object Error]",lt="[object Function]",Xo="[object GeneratorFunction]",Jo="[object Map]",Qo="[object Number]",ft="[object Object]",es="[object RegExp]",rs="[object Set]",ts="[object String]",ns="[object Symbol]",as="[object WeakMap]",is="[object ArrayBuffer]",os="[object DataView]",ss="[object Float32Array]",cs="[object Float64Array]",us="[object Int8Array]",ls="[object Int16Array]",fs="[object Int32Array]",ds="[object Uint8Array]",ps="[object Uint8ClampedArray]",hs="[object Uint16Array]",gs="[object Uint32Array]",S={};S[ut]=S[Wo]=S[is]=S[os]=S[Yo]=S[Zo]=S[ss]=S[cs]=S[us]=S[ls]=S[fs]=S[Jo]=S[Qo]=S[ft]=S[es]=S[rs]=S[ts]=S[ns]=S[ds]=S[ps]=S[hs]=S[gs]=!0;S[qo]=S[lt]=S[as]=!1;function he(e,r,t,n,i,o){var s,p=r&Ho,v=r&Go,y=r&Ko;if(t&&(s=i?t(e,n,i,o):t(e)),s!==void 0)return s;if(!ue(e))return e;var $=le(e);if($){if(s=io(e),!p)return at(e,s)}else{var O=Ye(e),f=O==lt||O==Xo;if(Jr(e))return Li(e,p);if(O==ft||O==ut||f&&!i){if(s=v||f?{}:Po(e),!p)return v?Hi(e,Ri(s,e)):Bi(e,$i(s,e))}else{if(!S[O])return i?e:{};s=Fo(e,O,p)}}o||(o=new te);var _=o.get(e);if(_)return _;o.set(e,s),zo(e)?e.forEach(function(C){s.add(he(C,r,t,C,e,o))}):No(e)&&e.forEach(function(C,j){s.set(j,he(C,r,t,j,e,o))});var R=y?v?Ki:Gi:v?Ke:Ge,I=$?void 0:R(e);return Aa(I||e,function(C,j){I&&(j=C,C=e[j]),Zr(s,j,he(C,r,t,j,e,o))}),s}var vs=4;function Dr(e){return he(e,vs)}function dt(e,r){for(var t=-1,n=e==null?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i}var bs="[object Symbol]";function qe(e){return typeof e=="symbol"||Z(e)&&Y(e)==bs}var ys="Expected a function";function Xe(e,r){if(typeof e!="function"||r!=null&&typeof r!="function")throw new TypeError(ys);var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],o=t.cache;if(o.has(i))return o.get(i);var s=e.apply(this,n);return t.cache=o.set(i,s)||o,s};return t.cache=new(Xe.Cache||U),t}Xe.Cache=U;var ms=500;function Ts(e){var r=Xe(e,function(n){return t.size===ms&&t.clear(),n}),t=r.cache;return r}var Ss=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Es=/\\(\\)?/g,xs=Ts(function(e){var r=[];return e.charCodeAt(0)===46&&r.push(""),e.replace(Ss,function(t,n,i,o){r.push(i?o.replace(Es,"$1"):n||t)}),r});const js=xs;var _s=1/0;function ws(e){if(typeof e=="string"||qe(e))return e;var r=e+"";return r=="0"&&1/e==-_s?"-0":r}var As=1/0,Nr=B?B.prototype:void 0,Vr=Nr?Nr.toString:void 0;function pt(e){if(typeof e=="string")return e;if(le(e))return dt(e,pt)+"";if(qe(e))return Vr?Vr.call(e):"";var r=e+"";return r=="0"&&1/e==-As?"-0":r}function Cs(e){return e==null?"":pt(e)}function ht(e){return le(e)?dt(e,ws):qe(e)?[e]:at(js(Cs(e)))}function x(){return x=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},x.apply(this,arguments)}function ee(e,r){if(e==null)return{};var t={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(r.indexOf(i)>=0)&&(t[i]=e[i]);return t}var me=u.createContext(void 0);me.displayName="FormikContext";var $s=me.Provider;me.Consumer;function gt(){var e=u.useContext(me);return e||In(!1),e}var M=function(r){return typeof r=="function"},Te=function(r){return r!==null&&typeof r=="object"},Os=function(r){return String(Math.floor(Number(r)))===r},Fe=function(r){return Object.prototype.toString.call(r)==="[object String]"},Is=function(r){return u.Children.count(r)===0},Me=function(r){return Te(r)&&M(r.then)};function F(e,r,t,n){n===void 0&&(n=0);for(var i=ht(r);e&&n<i.length;)e=e[i[n++]];return n!==i.length&&!e||e===void 0?t:e}function K(e,r,t){for(var n=Dr(e),i=n,o=0,s=ht(r);o<s.length-1;o++){var p=s[o],v=F(e,s.slice(0,o+1));if(v&&(Te(v)||Array.isArray(v)))i=i[p]=Dr(v);else{var y=s[o+1];i=i[p]=Os(y)&&Number(y)>=0?[]:{}}}return(o===0?e:i)[s[o]]===t?e:(t===void 0?delete i[s[o]]:i[s[o]]=t,o===0&&t===void 0&&delete n[s[o]],n)}function vt(e,r,t,n){t===void 0&&(t=new WeakMap),n===void 0&&(n={});for(var i=0,o=Object.keys(e);i<o.length;i++){var s=o[i],p=e[s];Te(p)?t.get(p)||(t.set(p,!0),n[s]=Array.isArray(p)?[]:{},vt(p,r,t,n[s])):n[s]=r}return n}function Fs(e,r){switch(r.type){case"SET_VALUES":return x({},e,{values:r.payload});case"SET_TOUCHED":return x({},e,{touched:r.payload});case"SET_ERRORS":return H(e.errors,r.payload)?e:x({},e,{errors:r.payload});case"SET_STATUS":return x({},e,{status:r.payload});case"SET_ISSUBMITTING":return x({},e,{isSubmitting:r.payload});case"SET_ISVALIDATING":return x({},e,{isValidating:r.payload});case"SET_FIELD_VALUE":return x({},e,{values:K(e.values,r.payload.field,r.payload.value)});case"SET_FIELD_TOUCHED":return x({},e,{touched:K(e.touched,r.payload.field,r.payload.value)});case"SET_FIELD_ERROR":return x({},e,{errors:K(e.errors,r.payload.field,r.payload.value)});case"RESET_FORM":return x({},e,r.payload);case"SET_FORMIK_STATE":return r.payload(e);case"SUBMIT_ATTEMPT":return x({},e,{touched:vt(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return x({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return x({},e,{isSubmitting:!1});default:return e}}var z={},pe={};function Ms(e){var r=e.validateOnChange,t=r===void 0?!0:r,n=e.validateOnBlur,i=n===void 0?!0:n,o=e.validateOnMount,s=o===void 0?!1:o,p=e.isInitialValid,v=e.enableReinitialize,y=v===void 0?!1:v,$=e.onSubmit,O=ee(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=x({validateOnChange:t,validateOnBlur:i,validateOnMount:s,onSubmit:$},O),_=u.useRef(f.initialValues),R=u.useRef(f.initialErrors||z),I=u.useRef(f.initialTouched||pe),C=u.useRef(f.initialStatus),j=u.useRef(!1),P=u.useRef({});u.useEffect(function(){return j.current=!0,function(){j.current=!1}},[]);var Se=u.useState(0),Ee=Se[1],fe=u.useRef({values:f.initialValues,errors:f.initialErrors||z,touched:f.initialTouched||pe,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),T=fe.current,m=u.useCallback(function(a){var c=fe.current;fe.current=Fs(c,a),c!==fe.current&&Ee(function(l){return l+1})},[]),Je=u.useCallback(function(a,c){return new Promise(function(l,d){var g=f.validate(a,c);g==null?l(z):Me(g)?g.then(function(b){l(b||z)},function(b){d(b)}):l(g)})},[f.validate]),xe=u.useCallback(function(a,c){var l=f.validationSchema,d=M(l)?l(c):l,g=c&&d.validateAt?d.validateAt(c,a):Ls(a,d);return new Promise(function(b,w){g.then(function(){b(z)},function(N){N.name==="ValidationError"?b(Ps(N)):w(N)})})},[f.validationSchema]),Qe=u.useCallback(function(a,c){return new Promise(function(l){return l(P.current[a].validate(c))})},[]),er=u.useCallback(function(a){var c=Object.keys(P.current).filter(function(d){return M(P.current[d].validate)}),l=c.length>0?c.map(function(d){return Qe(d,F(a,d))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(l).then(function(d){return d.reduce(function(g,b,w){return b==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||b&&(g=K(g,c[w],b)),g},{})})},[Qe]),mt=u.useCallback(function(a){return Promise.all([er(a),f.validationSchema?xe(a):{},f.validate?Je(a):{}]).then(function(c){var l=c[0],d=c[1],g=c[2],b=Re.all([l,d,g],{arrayMerge:ks});return b})},[f.validate,f.validationSchema,er,Je,xe]),k=L(function(a){return a===void 0&&(a=T.values),m({type:"SET_ISVALIDATING",payload:!0}),mt(a).then(function(c){return j.current&&(m({type:"SET_ISVALIDATING",payload:!1}),m({type:"SET_ERRORS",payload:c})),c})});u.useEffect(function(){s&&j.current===!0&&H(_.current,f.initialValues)&&k(_.current)},[s,k]);var ne=u.useCallback(function(a){var c=a&&a.values?a.values:_.current,l=a&&a.errors?a.errors:R.current?R.current:f.initialErrors||{},d=a&&a.touched?a.touched:I.current?I.current:f.initialTouched||{},g=a&&a.status?a.status:C.current?C.current:f.initialStatus;_.current=c,R.current=l,I.current=d,C.current=g;var b=function(){m({type:"RESET_FORM",payload:{isSubmitting:!!a&&!!a.isSubmitting,errors:l,touched:d,status:g,values:c,isValidating:!!a&&!!a.isValidating,submitCount:a&&a.submitCount&&typeof a.submitCount=="number"?a.submitCount:0}})};if(f.onReset){var w=f.onReset(T.values,lr);Me(w)?w.then(b):b()}else b()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);u.useEffect(function(){j.current===!0&&!H(_.current,f.initialValues)&&y&&(_.current=f.initialValues,ne(),s&&k(_.current))},[y,f.initialValues,ne,s,k]),u.useEffect(function(){y&&j.current===!0&&!H(R.current,f.initialErrors)&&(R.current=f.initialErrors||z,m({type:"SET_ERRORS",payload:f.initialErrors||z}))},[y,f.initialErrors]),u.useEffect(function(){y&&j.current===!0&&!H(I.current,f.initialTouched)&&(I.current=f.initialTouched||pe,m({type:"SET_TOUCHED",payload:f.initialTouched||pe}))},[y,f.initialTouched]),u.useEffect(function(){y&&j.current===!0&&!H(C.current,f.initialStatus)&&(C.current=f.initialStatus,m({type:"SET_STATUS",payload:f.initialStatus}))},[y,f.initialStatus,f.initialTouched]);var rr=L(function(a){if(P.current[a]&&M(P.current[a].validate)){var c=F(T.values,a),l=P.current[a].validate(c);return Me(l)?(m({type:"SET_ISVALIDATING",payload:!0}),l.then(function(d){return d}).then(function(d){m({type:"SET_FIELD_ERROR",payload:{field:a,value:d}}),m({type:"SET_ISVALIDATING",payload:!1})})):(m({type:"SET_FIELD_ERROR",payload:{field:a,value:l}}),Promise.resolve(l))}else if(f.validationSchema)return m({type:"SET_ISVALIDATING",payload:!0}),xe(T.values,a).then(function(d){return d}).then(function(d){m({type:"SET_FIELD_ERROR",payload:{field:a,value:F(d,a)}}),m({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Tt=u.useCallback(function(a,c){var l=c.validate;P.current[a]={validate:l}},[]),St=u.useCallback(function(a){delete P.current[a]},[]),tr=L(function(a,c){m({type:"SET_TOUCHED",payload:a});var l=c===void 0?i:c;return l?k(T.values):Promise.resolve()}),nr=u.useCallback(function(a){m({type:"SET_ERRORS",payload:a})},[]),ar=L(function(a,c){var l=M(a)?a(T.values):a;m({type:"SET_VALUES",payload:l});var d=c===void 0?t:c;return d?k(l):Promise.resolve()}),de=u.useCallback(function(a,c){m({type:"SET_FIELD_ERROR",payload:{field:a,value:c}})},[]),J=L(function(a,c,l){m({type:"SET_FIELD_VALUE",payload:{field:a,value:c}});var d=l===void 0?t:l;return d?k(K(T.values,a,c)):Promise.resolve()}),ir=u.useCallback(function(a,c){var l=c,d=a,g;if(!Fe(a)){a.persist&&a.persist();var b=a.target?a.target:a.currentTarget,w=b.type,N=b.name,Ce=b.id,$e=b.value,Ot=b.checked,tc=b.outerHTML,fr=b.options,It=b.multiple;l=c||N||Ce,d=/number|range/.test(w)?(g=parseFloat($e),isNaN(g)?"":g):/checkbox/.test(w)?Ns(F(T.values,l),Ot,$e):fr&&It?Ds(fr):$e}l&&J(l,d)},[J,T.values]),je=L(function(a){if(Fe(a))return function(c){return ir(c,a)};ir(a)}),Q=L(function(a,c,l){c===void 0&&(c=!0),m({type:"SET_FIELD_TOUCHED",payload:{field:a,value:c}});var d=l===void 0?i:l;return d?k(T.values):Promise.resolve()}),or=u.useCallback(function(a,c){a.persist&&a.persist();var l=a.target,d=l.name,g=l.id,b=l.outerHTML,w=c||d||g;Q(w,!0)},[Q]),_e=L(function(a){if(Fe(a))return function(c){return or(c,a)};or(a)}),sr=u.useCallback(function(a){M(a)?m({type:"SET_FORMIK_STATE",payload:a}):m({type:"SET_FORMIK_STATE",payload:function(){return a}})},[]),cr=u.useCallback(function(a){m({type:"SET_STATUS",payload:a})},[]),ur=u.useCallback(function(a){m({type:"SET_ISSUBMITTING",payload:a})},[]),we=L(function(){return m({type:"SUBMIT_ATTEMPT"}),k().then(function(a){var c=a instanceof Error,l=!c&&Object.keys(a).length===0;if(l){var d;try{if(d=xt(),d===void 0)return}catch(g){throw g}return Promise.resolve(d).then(function(g){return j.current&&m({type:"SUBMIT_SUCCESS"}),g}).catch(function(g){if(j.current)throw m({type:"SUBMIT_FAILURE"}),g})}else if(j.current&&(m({type:"SUBMIT_FAILURE"}),c))throw a})}),Et=L(function(a){a&&a.preventDefault&&M(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&M(a.stopPropagation)&&a.stopPropagation(),we().catch(function(c){console.warn("Warning: An unhandled error was caught from submitForm()",c)})}),lr={resetForm:ne,validateForm:k,validateField:rr,setErrors:nr,setFieldError:de,setFieldTouched:Q,setFieldValue:J,setStatus:cr,setSubmitting:ur,setTouched:tr,setValues:ar,setFormikState:sr,submitForm:we},xt=L(function(){return $(T.values,lr)}),jt=L(function(a){a&&a.preventDefault&&M(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&M(a.stopPropagation)&&a.stopPropagation(),ne()}),_t=u.useCallback(function(a){return{value:F(T.values,a),error:F(T.errors,a),touched:!!F(T.touched,a),initialValue:F(_.current,a),initialTouched:!!F(I.current,a),initialError:F(R.current,a)}},[T.errors,T.touched,T.values]),wt=u.useCallback(function(a){return{setValue:function(l,d){return J(a,l,d)},setTouched:function(l,d){return Q(a,l,d)},setError:function(l){return de(a,l)}}},[J,Q,de]),At=u.useCallback(function(a){var c=Te(a),l=c?a.name:a,d=F(T.values,l),g={name:l,value:d,onChange:je,onBlur:_e};if(c){var b=a.type,w=a.value,N=a.as,Ce=a.multiple;b==="checkbox"?w===void 0?g.checked=!!d:(g.checked=!!(Array.isArray(d)&&~d.indexOf(w)),g.value=w):b==="radio"?(g.checked=d===w,g.value=w):N==="select"&&Ce&&(g.value=g.value||[],g.multiple=!0)}return g},[_e,je,T.values]),Ae=u.useMemo(function(){return!H(_.current,T.values)},[_.current,T.values]),Ct=u.useMemo(function(){return typeof p<"u"?Ae?T.errors&&Object.keys(T.errors).length===0:p!==!1&&M(p)?p(f):p:T.errors&&Object.keys(T.errors).length===0},[p,Ae,T.errors,f]),$t=x({},T,{initialValues:_.current,initialErrors:R.current,initialTouched:I.current,initialStatus:C.current,handleBlur:_e,handleChange:je,handleReset:jt,handleSubmit:Et,resetForm:ne,setErrors:nr,setFormikState:sr,setFieldTouched:Q,setFieldValue:J,setFieldError:de,setStatus:cr,setSubmitting:ur,setTouched:tr,setValues:ar,submitForm:we,validateForm:k,validateField:rr,isValid:Ct,dirty:Ae,unregisterField:St,registerField:Tt,getFieldProps:At,getFieldMeta:_t,getFieldHelpers:wt,validateOnBlur:i,validateOnChange:t,validateOnMount:s});return $t}function Rs(e){var r=Ms(e),t=e.component,n=e.children,i=e.render,o=e.innerRef;return u.useImperativeHandle(o,function(){return r}),u.createElement($s,{value:r},t?u.createElement(t,r):i?i(r):n?M(n)?n(r):Is(n)?null:u.Children.only(n):null)}function Ps(e){var r={};if(e.inner){if(e.inner.length===0)return K(r,e.path,e.message);for(var i=e.inner,t=Array.isArray(i),n=0,i=t?i:i[Symbol.iterator]();;){var o;if(t){if(n>=i.length)break;o=i[n++]}else{if(n=i.next(),n.done)break;o=n.value}var s=o;F(r,s.path)||(r=K(r,s.path,s.message))}}return r}function Ls(e,r,t,n){t===void 0&&(t=!1);var i=Ve(e);return r[t?"validateSync":"validate"](i,{abortEarly:!1,context:n||i})}function Ve(e){var r=Array.isArray(e)?[]:{};for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var n=String(t);Array.isArray(e[n])===!0?r[n]=e[n].map(function(i){return Array.isArray(i)===!0||hr(i)?Ve(i):i!==""?i:void 0}):hr(e[n])?r[n]=Ve(e[n]):r[n]=e[n]!==""?e[n]:void 0}return r}function ks(e,r,t){var n=e.slice();return r.forEach(function(o,s){if(typeof n[s]>"u"){var p=t.clone!==!1,v=p&&t.isMergeableObject(o);n[s]=v?Re(Array.isArray(o)?[]:{},o,t):o}else t.isMergeableObject(o)?n[s]=Re(e[s],o,t):e.indexOf(o)===-1&&n.push(o)}),n}function Ds(e){return Array.from(e).filter(function(r){return r.selected}).map(function(r){return r.value})}function Ns(e,r,t){if(typeof e=="boolean")return!!r;var n=[],i=!1,o=-1;if(Array.isArray(e))n=e,o=e.indexOf(t),i=o>=0;else if(!t||t=="true"||t=="false")return!!r;return r&&t&&!i?n.concat(t):i?n.slice(0,o).concat(n.slice(o+1)):n}var Vs=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?u.useLayoutEffect:u.useEffect;function L(e){var r=u.useRef(e);return Vs(function(){r.current=e}),u.useCallback(function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return r.current.apply(void 0,n)},[])}function Bs(e){var r=e.validate,t=e.name,n=e.render,i=e.children,o=e.as,s=e.component,p=e.className,v=ee(e,["validate","name","render","children","as","component","className"]),y=gt(),$=ee(y,["validate","validationSchema"]),O=$.registerField,f=$.unregisterField;u.useEffect(function(){return O(t,{validate:r}),function(){f(t)}},[O,f,t,r]);var _=$.getFieldProps(x({name:t},v)),R=$.getFieldMeta(t),I={field:_,form:$};if(n)return n(x({},I,{meta:R}));if(M(i))return i(x({},I,{meta:R}));if(s){if(typeof s=="string"){var C=v.innerRef,j=ee(v,["innerRef"]);return u.createElement(s,x({ref:C},_,j,{className:p}),i)}return u.createElement(s,x({field:_,form:$},v,{className:p}),i)}var P=o||"input";if(typeof P=="string"){var Se=v.innerRef,Ee=ee(v,["innerRef"]);return u.createElement(P,x({ref:Se},_,Ee,{className:p}),i)}return u.createElement(P,x({},_,v,{className:p}),i)}var bt=u.forwardRef(function(e,r){var t=e.action,n=ee(e,["action"]),i=t??"#",o=gt(),s=o.handleReset,p=o.handleSubmit;return u.createElement("form",x({onSubmit:p,ref:r,onReset:s,action:i},n))});bt.displayName="Form";const Us=A(bt)`
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
`,zs=A.button`
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
`,Hs=A.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`,Gs=A(Bs)`
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
`;function Ks(){const e=Rt(),r=({search:t},n)=>{if(t.trim()===""){Bt.error("Please enter a word to search for");return}e(`movies?query=${encodeURIComponent(t)}`),n.resetForm()};return h.jsx(Rs,{initialValues:{search:""},onSubmit:r,children:h.jsxs(Us,{children:[h.jsx(zs,{type:"submit",value:"submit",children:h.jsx(Dt,{})}),h.jsx(Hs,{htmlFor:"search"}),h.jsx(Gs,{type:"text",id:"search",name:"search",placeholder:"Search"})]})})}function Ws(e){return Be({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"}}]})(e)}function Ys(e){return Be({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"}}]})(e)}const Zs=A.label`
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
`,qs=A(Ws)`
  animation: ${yt} 0.5s;
`,Xs=A(Ys)`
  animation: ${yt} 0.5s;
`;function Js(){const[e,r]=u.useState(()=>{const n=window.matchMedia("(prefers-color-scheme: dark)").matches;return localStorage.getItem("theme")||(n?"dark":"light")});u.useEffect(()=>{localStorage.setItem("theme",e)},[e]),u.useEffect(()=>{const{body:n}=document;n.dataset.theme=e},[e]);const t=()=>{r(e==="light"?"dark":"light")};return h.jsxs(Zs,{className:"switcher",children:[h.jsx("input",{type:"checkbox",onChange:t,checked:e==="dark"}),e==="dark"?h.jsx(qs,{}):h.jsx(Xs,{})]})}function Qs(){return h.jsx(Kt,{children:h.jsxs(Wt,{children:[h.jsx(Yt,{children:h.jsxs(Lt,{to:"/",children:[h.jsx(Gt,{}),h.jsx("p",{children:"Movie"})]})}),h.jsx(Zt,{children:h.jsxs("ul",{children:[h.jsx("li",{children:h.jsx(dr,{to:"/",children:"Home"})}),h.jsx("li",{children:h.jsx(dr,{to:"/movies",children:"Movies"})})]})}),h.jsx(Ks,{}),h.jsx(Js,{}),h.jsx(qt,{type:"button",children:h.jsx(Nt,{})}),h.jsx(Jt,{})]})})}const ec=A.main``;function rc(){return h.jsx(ec,{children:h.jsx(Br,{children:h.jsx(u.Suspense,{fallback:h.jsx(Vt,{}),children:h.jsx(kt,{})})})})}function sc(){return h.jsxs(Ut,{children:[h.jsx(Qs,{}),h.jsx(rc,{}),h.jsx(Ht,{})]})}export{sc as default};
