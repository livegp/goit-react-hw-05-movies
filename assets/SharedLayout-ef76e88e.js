import{s as A,j as p,G as Be,L as Ft,r as u,N as Mt,g as Rt,u as Lt,c as Pt,O as kt}from"./index-f8bb810f.js";import{A as Dt,I as Nt}from"./index.esm-ac118990.js";import Vt from"./Loader-15c9ac58.js";import{Q as Bt}from"./react-toastify.esm-289c0549.js";const Ut=A.div`
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
`;function Ht(){return p.jsx(zt,{children:p.jsx(Br,{children:p.jsxs("p",{children:[" ","© 2023 Movies App. All rights reserved. Designed and Developed by"," ",p.jsx("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/oleksandr-pishta",children:"Oleksandr Pishta"})]})})})}const Gt=A.header`
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
`,Kt=A.div`
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
`;function Yt(e){return Be({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 20H20V22H12C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.2512 21.2561 16.3287 20.0007 18H17.2916C18.9525 16.5341 20 14.3894 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8C14 9.10457 13.1046 10 12 10ZM8 14C6.89543 14 6 13.1046 6 12C6 10.8954 6.89543 10 8 10C9.10457 10 10 10.8954 10 12C10 13.1046 9.10457 14 8 14ZM16 14C14.8954 14 14 13.1046 14 12C14 10.8954 14.8954 10 16 10C17.1046 10 18 10.8954 18 12C18 13.1046 17.1046 14 16 14ZM12 18C10.8954 18 10 17.1046 10 16C10 14.8954 10.8954 14 12 14C13.1046 14 14 14.8954 14 16C14 17.1046 13.1046 18 12 18Z"}}]})(e)}const Zt=A.div`
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
`;function qt(){return p.jsx(Zt,{children:p.jsxs(Ft,{to:"/",children:[p.jsx(Yt,{}),p.jsx("p",{children:"Movie"})]})})}const Xt=A.label`
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
`;function Jt(){const[e,r]=u.useState(!1),t=n=>{r(n.target.checked)};return p.jsxs(Xt,{htmlFor:"menu-check",children:[p.jsx("input",{id:"menu-check","aria-hidden":"true",type:"checkbox",checked:e,onChange:t}),p.jsx("span",{})]})}const Qt=A.nav`
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
`,dr=A(Mt)`
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
`;function en(){return p.jsx(Qt,{children:p.jsxs("ul",{children:[p.jsx("li",{children:p.jsx(dr,{to:"/",children:"Home"})}),p.jsx("li",{children:p.jsx(dr,{to:"/movies",children:"Movies"})})]})})}var rn=function(r){return tn(r)&&!nn(r)};function tn(e){return!!e&&typeof e=="object"}function nn(e){var r=Object.prototype.toString.call(e);return r==="[object RegExp]"||r==="[object Date]"||sn(e)}var an=typeof Symbol=="function"&&Symbol.for,on=an?Symbol.for("react.element"):60103;function sn(e){return e.$$typeof===on}function cn(e){return Array.isArray(e)?[]:{}}function ge(e,r){return r.clone!==!1&&r.isMergeableObject(e)?oe(cn(e),e,r):e}function un(e,r,t){return e.concat(r).map(function(n){return ge(n,t)})}function ln(e,r,t){var n={};return t.isMergeableObject(e)&&Object.keys(e).forEach(function(i){n[i]=ge(e[i],t)}),Object.keys(r).forEach(function(i){!t.isMergeableObject(r[i])||!e[i]?n[i]=ge(r[i],t):n[i]=oe(e[i],r[i],t)}),n}function oe(e,r,t){t=t||{},t.arrayMerge=t.arrayMerge||un,t.isMergeableObject=t.isMergeableObject||rn;var n=Array.isArray(r),i=Array.isArray(e),o=n===i;return o?n?t.arrayMerge(e,r,t):ln(e,r,t):ge(r,t)}oe.all=function(r,t){if(!Array.isArray(r))throw new Error("first argument should be an array");return r.reduce(function(n,i){return oe(n,i,t)},{})};var Re=oe,fn=typeof global=="object"&&global&&global.Object===Object&&global;const Ur=fn;var dn=typeof self=="object"&&self&&self.Object===Object&&self,pn=Ur||dn||Function("return this")();const D=pn;var hn=D.Symbol;const B=hn;var zr=Object.prototype,gn=zr.hasOwnProperty,vn=zr.toString,ae=B?B.toStringTag:void 0;function bn(e){var r=gn.call(e,ae),t=e[ae];try{e[ae]=void 0;var n=!0}catch{}var i=vn.call(e);return n&&(r?e[ae]=t:delete e[ae]),i}var yn=Object.prototype,mn=yn.toString;function Tn(e){return mn.call(e)}var Sn="[object Null]",En="[object Undefined]",pr=B?B.toStringTag:void 0;function Y(e){return e==null?e===void 0?En:Sn:pr&&pr in Object(e)?bn(e):Tn(e)}function Hr(e,r){return function(t){return e(r(t))}}var xn=Hr(Object.getPrototypeOf,Object);const Ue=xn;function Z(e){return e!=null&&typeof e=="object"}var jn="[object Object]",_n=Function.prototype,wn=Object.prototype,Gr=_n.toString,An=wn.hasOwnProperty,$n=Gr.call(Object);function hr(e){if(!Z(e)||Y(e)!=jn)return!1;var r=Ue(e);if(r===null)return!0;var t=An.call(r,"constructor")&&r.constructor;return typeof t=="function"&&t instanceof t&&Gr.call(t)==$n}var gr=Array.isArray,vr=Object.keys,Cn=Object.prototype.hasOwnProperty,On=typeof Element<"u";function Le(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){var t=gr(e),n=gr(r),i,o,s;if(t&&n){if(o=e.length,o!=r.length)return!1;for(i=o;i--!==0;)if(!Le(e[i],r[i]))return!1;return!0}if(t!=n)return!1;var h=e instanceof Date,v=r instanceof Date;if(h!=v)return!1;if(h&&v)return e.getTime()==r.getTime();var y=e instanceof RegExp,C=r instanceof RegExp;if(y!=C)return!1;if(y&&C)return e.toString()==r.toString();var O=vr(e);if(o=O.length,o!==vr(r).length)return!1;for(i=o;i--!==0;)if(!Cn.call(r,O[i]))return!1;if(On&&e instanceof Element&&r instanceof Element)return e===r;for(i=o;i--!==0;)if(s=O[i],!(s==="_owner"&&e.$$typeof)&&!Le(e[s],r[s]))return!1;return!0}return e!==e&&r!==r}var In=function(r,t){try{return Le(r,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}};const H=Rt(In);var Fn=!0;function Mn(e,r){if(!Fn){if(e)return;var t="Warning: "+r;typeof console<"u"&&console.warn(t);try{throw Error(t)}catch{}}}function Rn(){this.__data__=[],this.size=0}function Kr(e,r){return e===r||e!==e&&r!==r}function ve(e,r){for(var t=e.length;t--;)if(Kr(e[t][0],r))return t;return-1}var Ln=Array.prototype,Pn=Ln.splice;function kn(e){var r=this.__data__,t=ve(r,e);if(t<0)return!1;var n=r.length-1;return t==n?r.pop():Pn.call(r,t,1),--this.size,!0}function Dn(e){var r=this.__data__,t=ve(r,e);return t<0?void 0:r[t][1]}function Nn(e){return ve(this.__data__,e)>-1}function Vn(e,r){var t=this.__data__,n=ve(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this}function V(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}V.prototype.clear=Rn;V.prototype.delete=kn;V.prototype.get=Dn;V.prototype.has=Nn;V.prototype.set=Vn;function Bn(){this.__data__=new V,this.size=0}function Un(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t}function zn(e){return this.__data__.get(e)}function Hn(e){return this.__data__.has(e)}function ue(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}var Gn="[object AsyncFunction]",Kn="[object Function]",Wn="[object GeneratorFunction]",Yn="[object Proxy]";function Wr(e){if(!ue(e))return!1;var r=Y(e);return r==Kn||r==Wn||r==Gn||r==Yn}var Zn=D["__core-js_shared__"];const Oe=Zn;var br=function(){var e=/[^.]+$/.exec(Oe&&Oe.keys&&Oe.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function qn(e){return!!br&&br in e}var Xn=Function.prototype,Jn=Xn.toString;function q(e){if(e!=null){try{return Jn.call(e)}catch{}try{return e+""}catch{}}return""}var Qn=/[\\^$.*+?()[\]{}|]/g,ea=/^\[object .+?Constructor\]$/,ra=Function.prototype,ta=Object.prototype,na=ra.toString,aa=ta.hasOwnProperty,ia=RegExp("^"+na.call(aa).replace(Qn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function oa(e){if(!ue(e)||qn(e))return!1;var r=Wr(e)?ia:ea;return r.test(q(e))}function sa(e,r){return e==null?void 0:e[r]}function X(e,r){var t=sa(e,r);return oa(t)?t:void 0}var ca=X(D,"Map");const se=ca;var ua=X(Object,"create");const ce=ua;function la(){this.__data__=ce?ce(null):{},this.size=0}function fa(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r}var da="__lodash_hash_undefined__",pa=Object.prototype,ha=pa.hasOwnProperty;function ga(e){var r=this.__data__;if(ce){var t=r[e];return t===da?void 0:t}return ha.call(r,e)?r[e]:void 0}var va=Object.prototype,ba=va.hasOwnProperty;function ya(e){var r=this.__data__;return ce?r[e]!==void 0:ba.call(r,e)}var ma="__lodash_hash_undefined__";function Ta(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=ce&&r===void 0?ma:r,this}function W(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}W.prototype.clear=la;W.prototype.delete=fa;W.prototype.get=ga;W.prototype.has=ya;W.prototype.set=Ta;function Sa(){this.size=0,this.__data__={hash:new W,map:new(se||V),string:new W}}function Ea(e){var r=typeof e;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?e!=="__proto__":e===null}function be(e,r){var t=e.__data__;return Ea(r)?t[typeof r=="string"?"string":"hash"]:t.map}function xa(e){var r=be(this,e).delete(e);return this.size-=r?1:0,r}function ja(e){return be(this,e).get(e)}function _a(e){return be(this,e).has(e)}function wa(e,r){var t=be(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this}function U(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}U.prototype.clear=Sa;U.prototype.delete=xa;U.prototype.get=ja;U.prototype.has=_a;U.prototype.set=wa;var Aa=200;function $a(e,r){var t=this.__data__;if(t instanceof V){var n=t.__data__;if(!se||n.length<Aa-1)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new U(n)}return t.set(e,r),this.size=t.size,this}function te(e){var r=this.__data__=new V(e);this.size=r.size}te.prototype.clear=Bn;te.prototype.delete=Un;te.prototype.get=zn;te.prototype.has=Hn;te.prototype.set=$a;function Ca(e,r){for(var t=-1,n=e==null?0:e.length;++t<n&&r(e[t],t,e)!==!1;);return e}var Oa=function(){try{var e=X(Object,"defineProperty");return e({},"",{}),e}catch{}}();const yr=Oa;function Yr(e,r,t){r=="__proto__"&&yr?yr(e,r,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[r]=t}var Ia=Object.prototype,Fa=Ia.hasOwnProperty;function Zr(e,r,t){var n=e[r];(!(Fa.call(e,r)&&Kr(n,t))||t===void 0&&!(r in e))&&Yr(e,r,t)}function ye(e,r,t,n){var i=!t;t||(t={});for(var o=-1,s=r.length;++o<s;){var h=r[o],v=n?n(t[h],e[h],h,t,e):void 0;v===void 0&&(v=e[h]),i?Yr(t,h,v):Zr(t,h,v)}return t}function Ma(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n}var Ra="[object Arguments]";function mr(e){return Z(e)&&Y(e)==Ra}var qr=Object.prototype,La=qr.hasOwnProperty,Pa=qr.propertyIsEnumerable,ka=mr(function(){return arguments}())?mr:function(e){return Z(e)&&La.call(e,"callee")&&!Pa.call(e,"callee")};const Da=ka;var Na=Array.isArray;const le=Na;function Va(){return!1}var Xr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Tr=Xr&&typeof module=="object"&&module&&!module.nodeType&&module,Ba=Tr&&Tr.exports===Xr,Sr=Ba?D.Buffer:void 0,Ua=Sr?Sr.isBuffer:void 0,za=Ua||Va;const Jr=za;var Ha=9007199254740991,Ga=/^(?:0|[1-9]\d*)$/;function Ka(e,r){var t=typeof e;return r=r??Ha,!!r&&(t=="number"||t!="symbol"&&Ga.test(e))&&e>-1&&e%1==0&&e<r}var Wa=9007199254740991;function Qr(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Wa}var Ya="[object Arguments]",Za="[object Array]",qa="[object Boolean]",Xa="[object Date]",Ja="[object Error]",Qa="[object Function]",ei="[object Map]",ri="[object Number]",ti="[object Object]",ni="[object RegExp]",ai="[object Set]",ii="[object String]",oi="[object WeakMap]",si="[object ArrayBuffer]",ci="[object DataView]",ui="[object Float32Array]",li="[object Float64Array]",fi="[object Int8Array]",di="[object Int16Array]",pi="[object Int32Array]",hi="[object Uint8Array]",gi="[object Uint8ClampedArray]",vi="[object Uint16Array]",bi="[object Uint32Array]",E={};E[ui]=E[li]=E[fi]=E[di]=E[pi]=E[hi]=E[gi]=E[vi]=E[bi]=!0;E[Ya]=E[Za]=E[si]=E[qa]=E[ci]=E[Xa]=E[Ja]=E[Qa]=E[ei]=E[ri]=E[ti]=E[ni]=E[ai]=E[ii]=E[oi]=!1;function yi(e){return Z(e)&&Qr(e.length)&&!!E[Y(e)]}function ze(e){return function(r){return e(r)}}var et=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ie=et&&typeof module=="object"&&module&&!module.nodeType&&module,mi=ie&&ie.exports===et,Ie=mi&&Ur.process,Ti=function(){try{var e=ie&&ie.require&&ie.require("util").types;return e||Ie&&Ie.binding&&Ie.binding("util")}catch{}}();const re=Ti;var Er=re&&re.isTypedArray,Si=Er?ze(Er):yi;const Ei=Si;var xi=Object.prototype,ji=xi.hasOwnProperty;function rt(e,r){var t=le(e),n=!t&&Da(e),i=!t&&!n&&Jr(e),o=!t&&!n&&!i&&Ei(e),s=t||n||i||o,h=s?Ma(e.length,String):[],v=h.length;for(var y in e)(r||ji.call(e,y))&&!(s&&(y=="length"||i&&(y=="offset"||y=="parent")||o&&(y=="buffer"||y=="byteLength"||y=="byteOffset")||Ka(y,v)))&&h.push(y);return h}var _i=Object.prototype;function He(e){var r=e&&e.constructor,t=typeof r=="function"&&r.prototype||_i;return e===t}var wi=Hr(Object.keys,Object);const Ai=wi;var $i=Object.prototype,Ci=$i.hasOwnProperty;function Oi(e){if(!He(e))return Ai(e);var r=[];for(var t in Object(e))Ci.call(e,t)&&t!="constructor"&&r.push(t);return r}function tt(e){return e!=null&&Qr(e.length)&&!Wr(e)}function Ge(e){return tt(e)?rt(e):Oi(e)}function Ii(e,r){return e&&ye(r,Ge(r),e)}function Fi(e){var r=[];if(e!=null)for(var t in Object(e))r.push(t);return r}var Mi=Object.prototype,Ri=Mi.hasOwnProperty;function Li(e){if(!ue(e))return Fi(e);var r=He(e),t=[];for(var n in e)n=="constructor"&&(r||!Ri.call(e,n))||t.push(n);return t}function Ke(e){return tt(e)?rt(e,!0):Li(e)}function Pi(e,r){return e&&ye(r,Ke(r),e)}var nt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,xr=nt&&typeof module=="object"&&module&&!module.nodeType&&module,ki=xr&&xr.exports===nt,jr=ki?D.Buffer:void 0,_r=jr?jr.allocUnsafe:void 0;function Di(e,r){if(r)return e.slice();var t=e.length,n=_r?_r(t):new e.constructor(t);return e.copy(n),n}function at(e,r){var t=-1,n=e.length;for(r||(r=Array(n));++t<n;)r[t]=e[t];return r}function Ni(e,r){for(var t=-1,n=e==null?0:e.length,i=0,o=[];++t<n;){var s=e[t];r(s,t,e)&&(o[i++]=s)}return o}function it(){return[]}var Vi=Object.prototype,Bi=Vi.propertyIsEnumerable,wr=Object.getOwnPropertySymbols,Ui=wr?function(e){return e==null?[]:(e=Object(e),Ni(wr(e),function(r){return Bi.call(e,r)}))}:it;const We=Ui;function zi(e,r){return ye(e,We(e),r)}function ot(e,r){for(var t=-1,n=r.length,i=e.length;++t<n;)e[i+t]=r[t];return e}var Hi=Object.getOwnPropertySymbols,Gi=Hi?function(e){for(var r=[];e;)ot(r,We(e)),e=Ue(e);return r}:it;const st=Gi;function Ki(e,r){return ye(e,st(e),r)}function ct(e,r,t){var n=r(e);return le(e)?n:ot(n,t(e))}function Wi(e){return ct(e,Ge,We)}function Yi(e){return ct(e,Ke,st)}var Zi=X(D,"DataView");const Pe=Zi;var qi=X(D,"Promise");const ke=qi;var Xi=X(D,"Set");const De=Xi;var Ji=X(D,"WeakMap");const Ne=Ji;var Ar="[object Map]",Qi="[object Object]",$r="[object Promise]",Cr="[object Set]",Or="[object WeakMap]",Ir="[object DataView]",eo=q(Pe),ro=q(se),to=q(ke),no=q(De),ao=q(Ne),G=Y;(Pe&&G(new Pe(new ArrayBuffer(1)))!=Ir||se&&G(new se)!=Ar||ke&&G(ke.resolve())!=$r||De&&G(new De)!=Cr||Ne&&G(new Ne)!=Or)&&(G=function(e){var r=Y(e),t=r==Qi?e.constructor:void 0,n=t?q(t):"";if(n)switch(n){case eo:return Ir;case ro:return Ar;case to:return $r;case no:return Cr;case ao:return Or}return r});const Ye=G;var io=Object.prototype,oo=io.hasOwnProperty;function so(e){var r=e.length,t=new e.constructor(r);return r&&typeof e[0]=="string"&&oo.call(e,"index")&&(t.index=e.index,t.input=e.input),t}var co=D.Uint8Array;const Fr=co;function Ze(e){var r=new e.constructor(e.byteLength);return new Fr(r).set(new Fr(e)),r}function uo(e,r){var t=r?Ze(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}var lo=/\w*$/;function fo(e){var r=new e.constructor(e.source,lo.exec(e));return r.lastIndex=e.lastIndex,r}var Mr=B?B.prototype:void 0,Rr=Mr?Mr.valueOf:void 0;function po(e){return Rr?Object(Rr.call(e)):{}}function ho(e,r){var t=r?Ze(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}var go="[object Boolean]",vo="[object Date]",bo="[object Map]",yo="[object Number]",mo="[object RegExp]",To="[object Set]",So="[object String]",Eo="[object Symbol]",xo="[object ArrayBuffer]",jo="[object DataView]",_o="[object Float32Array]",wo="[object Float64Array]",Ao="[object Int8Array]",$o="[object Int16Array]",Co="[object Int32Array]",Oo="[object Uint8Array]",Io="[object Uint8ClampedArray]",Fo="[object Uint16Array]",Mo="[object Uint32Array]";function Ro(e,r,t){var n=e.constructor;switch(r){case xo:return Ze(e);case go:case vo:return new n(+e);case jo:return uo(e,t);case _o:case wo:case Ao:case $o:case Co:case Oo:case Io:case Fo:case Mo:return ho(e,t);case bo:return new n;case yo:case So:return new n(e);case mo:return fo(e);case To:return new n;case Eo:return po(e)}}var Lr=Object.create,Lo=function(){function e(){}return function(r){if(!ue(r))return{};if(Lr)return Lr(r);e.prototype=r;var t=new e;return e.prototype=void 0,t}}();const Po=Lo;function ko(e){return typeof e.constructor=="function"&&!He(e)?Po(Ue(e)):{}}var Do="[object Map]";function No(e){return Z(e)&&Ye(e)==Do}var Pr=re&&re.isMap,Vo=Pr?ze(Pr):No;const Bo=Vo;var Uo="[object Set]";function zo(e){return Z(e)&&Ye(e)==Uo}var kr=re&&re.isSet,Ho=kr?ze(kr):zo;const Go=Ho;var Ko=1,Wo=2,Yo=4,ut="[object Arguments]",Zo="[object Array]",qo="[object Boolean]",Xo="[object Date]",Jo="[object Error]",lt="[object Function]",Qo="[object GeneratorFunction]",es="[object Map]",rs="[object Number]",ft="[object Object]",ts="[object RegExp]",ns="[object Set]",as="[object String]",is="[object Symbol]",os="[object WeakMap]",ss="[object ArrayBuffer]",cs="[object DataView]",us="[object Float32Array]",ls="[object Float64Array]",fs="[object Int8Array]",ds="[object Int16Array]",ps="[object Int32Array]",hs="[object Uint8Array]",gs="[object Uint8ClampedArray]",vs="[object Uint16Array]",bs="[object Uint32Array]",S={};S[ut]=S[Zo]=S[ss]=S[cs]=S[qo]=S[Xo]=S[us]=S[ls]=S[fs]=S[ds]=S[ps]=S[es]=S[rs]=S[ft]=S[ts]=S[ns]=S[as]=S[is]=S[hs]=S[gs]=S[vs]=S[bs]=!0;S[Jo]=S[lt]=S[os]=!1;function he(e,r,t,n,i,o){var s,h=r&Ko,v=r&Wo,y=r&Yo;if(t&&(s=i?t(e,n,i,o):t(e)),s!==void 0)return s;if(!ue(e))return e;var C=le(e);if(C){if(s=so(e),!h)return at(e,s)}else{var O=Ye(e),f=O==lt||O==Qo;if(Jr(e))return Di(e,h);if(O==ft||O==ut||f&&!i){if(s=v||f?{}:ko(e),!h)return v?Ki(e,Pi(s,e)):zi(e,Ii(s,e))}else{if(!S[O])return i?e:{};s=Ro(e,O,h)}}o||(o=new te);var _=o.get(e);if(_)return _;o.set(e,s),Go(e)?e.forEach(function($){s.add(he($,r,t,$,e,o))}):Bo(e)&&e.forEach(function($,j){s.set(j,he($,r,t,j,e,o))});var R=y?v?Yi:Wi:v?Ke:Ge,I=C?void 0:R(e);return Ca(I||e,function($,j){I&&(j=$,$=e[j]),Zr(s,j,he($,r,t,j,e,o))}),s}var ys=4;function Dr(e){return he(e,ys)}function dt(e,r){for(var t=-1,n=e==null?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i}var ms="[object Symbol]";function qe(e){return typeof e=="symbol"||Z(e)&&Y(e)==ms}var Ts="Expected a function";function Xe(e,r){if(typeof e!="function"||r!=null&&typeof r!="function")throw new TypeError(Ts);var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],o=t.cache;if(o.has(i))return o.get(i);var s=e.apply(this,n);return t.cache=o.set(i,s)||o,s};return t.cache=new(Xe.Cache||U),t}Xe.Cache=U;var Ss=500;function Es(e){var r=Xe(e,function(n){return t.size===Ss&&t.clear(),n}),t=r.cache;return r}var xs=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,js=/\\(\\)?/g,_s=Es(function(e){var r=[];return e.charCodeAt(0)===46&&r.push(""),e.replace(xs,function(t,n,i,o){r.push(i?o.replace(js,"$1"):n||t)}),r});const ws=_s;var As=1/0;function $s(e){if(typeof e=="string"||qe(e))return e;var r=e+"";return r=="0"&&1/e==-As?"-0":r}var Cs=1/0,Nr=B?B.prototype:void 0,Vr=Nr?Nr.toString:void 0;function pt(e){if(typeof e=="string")return e;if(le(e))return dt(e,pt)+"";if(qe(e))return Vr?Vr.call(e):"";var r=e+"";return r=="0"&&1/e==-Cs?"-0":r}function Os(e){return e==null?"":pt(e)}function ht(e){return le(e)?dt(e,$s):qe(e)?[e]:at(ws(Os(e)))}function x(){return x=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},x.apply(this,arguments)}function ee(e,r){if(e==null)return{};var t={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(r.indexOf(i)>=0)&&(t[i]=e[i]);return t}var me=u.createContext(void 0);me.displayName="FormikContext";var Is=me.Provider;me.Consumer;function gt(){var e=u.useContext(me);return e||Mn(!1),e}var M=function(r){return typeof r=="function"},Te=function(r){return r!==null&&typeof r=="object"},Fs=function(r){return String(Math.floor(Number(r)))===r},Fe=function(r){return Object.prototype.toString.call(r)==="[object String]"},Ms=function(r){return u.Children.count(r)===0},Me=function(r){return Te(r)&&M(r.then)};function F(e,r,t,n){n===void 0&&(n=0);for(var i=ht(r);e&&n<i.length;)e=e[i[n++]];return n!==i.length&&!e||e===void 0?t:e}function K(e,r,t){for(var n=Dr(e),i=n,o=0,s=ht(r);o<s.length-1;o++){var h=s[o],v=F(e,s.slice(0,o+1));if(v&&(Te(v)||Array.isArray(v)))i=i[h]=Dr(v);else{var y=s[o+1];i=i[h]=Fs(y)&&Number(y)>=0?[]:{}}}return(o===0?e:i)[s[o]]===t?e:(t===void 0?delete i[s[o]]:i[s[o]]=t,o===0&&t===void 0&&delete n[s[o]],n)}function vt(e,r,t,n){t===void 0&&(t=new WeakMap),n===void 0&&(n={});for(var i=0,o=Object.keys(e);i<o.length;i++){var s=o[i],h=e[s];Te(h)?t.get(h)||(t.set(h,!0),n[s]=Array.isArray(h)?[]:{},vt(h,r,t,n[s])):n[s]=r}return n}function Rs(e,r){switch(r.type){case"SET_VALUES":return x({},e,{values:r.payload});case"SET_TOUCHED":return x({},e,{touched:r.payload});case"SET_ERRORS":return H(e.errors,r.payload)?e:x({},e,{errors:r.payload});case"SET_STATUS":return x({},e,{status:r.payload});case"SET_ISSUBMITTING":return x({},e,{isSubmitting:r.payload});case"SET_ISVALIDATING":return x({},e,{isValidating:r.payload});case"SET_FIELD_VALUE":return x({},e,{values:K(e.values,r.payload.field,r.payload.value)});case"SET_FIELD_TOUCHED":return x({},e,{touched:K(e.touched,r.payload.field,r.payload.value)});case"SET_FIELD_ERROR":return x({},e,{errors:K(e.errors,r.payload.field,r.payload.value)});case"RESET_FORM":return x({},e,r.payload);case"SET_FORMIK_STATE":return r.payload(e);case"SUBMIT_ATTEMPT":return x({},e,{touched:vt(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return x({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return x({},e,{isSubmitting:!1});default:return e}}var z={},pe={};function Ls(e){var r=e.validateOnChange,t=r===void 0?!0:r,n=e.validateOnBlur,i=n===void 0?!0:n,o=e.validateOnMount,s=o===void 0?!1:o,h=e.isInitialValid,v=e.enableReinitialize,y=v===void 0?!1:v,C=e.onSubmit,O=ee(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=x({validateOnChange:t,validateOnBlur:i,validateOnMount:s,onSubmit:C},O),_=u.useRef(f.initialValues),R=u.useRef(f.initialErrors||z),I=u.useRef(f.initialTouched||pe),$=u.useRef(f.initialStatus),j=u.useRef(!1),L=u.useRef({});u.useEffect(function(){return j.current=!0,function(){j.current=!1}},[]);var Se=u.useState(0),Ee=Se[1],fe=u.useRef({values:f.initialValues,errors:f.initialErrors||z,touched:f.initialTouched||pe,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),T=fe.current,m=u.useCallback(function(a){var c=fe.current;fe.current=Rs(c,a),c!==fe.current&&Ee(function(l){return l+1})},[]),Je=u.useCallback(function(a,c){return new Promise(function(l,d){var g=f.validate(a,c);g==null?l(z):Me(g)?g.then(function(b){l(b||z)},function(b){d(b)}):l(g)})},[f.validate]),xe=u.useCallback(function(a,c){var l=f.validationSchema,d=M(l)?l(c):l,g=c&&d.validateAt?d.validateAt(c,a):Ds(a,d);return new Promise(function(b,w){g.then(function(){b(z)},function(N){N.name==="ValidationError"?b(ks(N)):w(N)})})},[f.validationSchema]),Qe=u.useCallback(function(a,c){return new Promise(function(l){return l(L.current[a].validate(c))})},[]),er=u.useCallback(function(a){var c=Object.keys(L.current).filter(function(d){return M(L.current[d].validate)}),l=c.length>0?c.map(function(d){return Qe(d,F(a,d))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(l).then(function(d){return d.reduce(function(g,b,w){return b==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||b&&(g=K(g,c[w],b)),g},{})})},[Qe]),mt=u.useCallback(function(a){return Promise.all([er(a),f.validationSchema?xe(a):{},f.validate?Je(a):{}]).then(function(c){var l=c[0],d=c[1],g=c[2],b=Re.all([l,d,g],{arrayMerge:Ns});return b})},[f.validate,f.validationSchema,er,Je,xe]),k=P(function(a){return a===void 0&&(a=T.values),m({type:"SET_ISVALIDATING",payload:!0}),mt(a).then(function(c){return j.current&&(m({type:"SET_ISVALIDATING",payload:!1}),m({type:"SET_ERRORS",payload:c})),c})});u.useEffect(function(){s&&j.current===!0&&H(_.current,f.initialValues)&&k(_.current)},[s,k]);var ne=u.useCallback(function(a){var c=a&&a.values?a.values:_.current,l=a&&a.errors?a.errors:R.current?R.current:f.initialErrors||{},d=a&&a.touched?a.touched:I.current?I.current:f.initialTouched||{},g=a&&a.status?a.status:$.current?$.current:f.initialStatus;_.current=c,R.current=l,I.current=d,$.current=g;var b=function(){m({type:"RESET_FORM",payload:{isSubmitting:!!a&&!!a.isSubmitting,errors:l,touched:d,status:g,values:c,isValidating:!!a&&!!a.isValidating,submitCount:a&&a.submitCount&&typeof a.submitCount=="number"?a.submitCount:0}})};if(f.onReset){var w=f.onReset(T.values,lr);Me(w)?w.then(b):b()}else b()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);u.useEffect(function(){j.current===!0&&!H(_.current,f.initialValues)&&y&&(_.current=f.initialValues,ne(),s&&k(_.current))},[y,f.initialValues,ne,s,k]),u.useEffect(function(){y&&j.current===!0&&!H(R.current,f.initialErrors)&&(R.current=f.initialErrors||z,m({type:"SET_ERRORS",payload:f.initialErrors||z}))},[y,f.initialErrors]),u.useEffect(function(){y&&j.current===!0&&!H(I.current,f.initialTouched)&&(I.current=f.initialTouched||pe,m({type:"SET_TOUCHED",payload:f.initialTouched||pe}))},[y,f.initialTouched]),u.useEffect(function(){y&&j.current===!0&&!H($.current,f.initialStatus)&&($.current=f.initialStatus,m({type:"SET_STATUS",payload:f.initialStatus}))},[y,f.initialStatus,f.initialTouched]);var rr=P(function(a){if(L.current[a]&&M(L.current[a].validate)){var c=F(T.values,a),l=L.current[a].validate(c);return Me(l)?(m({type:"SET_ISVALIDATING",payload:!0}),l.then(function(d){return d}).then(function(d){m({type:"SET_FIELD_ERROR",payload:{field:a,value:d}}),m({type:"SET_ISVALIDATING",payload:!1})})):(m({type:"SET_FIELD_ERROR",payload:{field:a,value:l}}),Promise.resolve(l))}else if(f.validationSchema)return m({type:"SET_ISVALIDATING",payload:!0}),xe(T.values,a).then(function(d){return d}).then(function(d){m({type:"SET_FIELD_ERROR",payload:{field:a,value:F(d,a)}}),m({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Tt=u.useCallback(function(a,c){var l=c.validate;L.current[a]={validate:l}},[]),St=u.useCallback(function(a){delete L.current[a]},[]),tr=P(function(a,c){m({type:"SET_TOUCHED",payload:a});var l=c===void 0?i:c;return l?k(T.values):Promise.resolve()}),nr=u.useCallback(function(a){m({type:"SET_ERRORS",payload:a})},[]),ar=P(function(a,c){var l=M(a)?a(T.values):a;m({type:"SET_VALUES",payload:l});var d=c===void 0?t:c;return d?k(l):Promise.resolve()}),de=u.useCallback(function(a,c){m({type:"SET_FIELD_ERROR",payload:{field:a,value:c}})},[]),J=P(function(a,c,l){m({type:"SET_FIELD_VALUE",payload:{field:a,value:c}});var d=l===void 0?t:l;return d?k(K(T.values,a,c)):Promise.resolve()}),ir=u.useCallback(function(a,c){var l=c,d=a,g;if(!Fe(a)){a.persist&&a.persist();var b=a.target?a.target:a.currentTarget,w=b.type,N=b.name,$e=b.id,Ce=b.value,Ot=b.checked,ac=b.outerHTML,fr=b.options,It=b.multiple;l=c||N||$e,d=/number|range/.test(w)?(g=parseFloat(Ce),isNaN(g)?"":g):/checkbox/.test(w)?Bs(F(T.values,l),Ot,Ce):fr&&It?Vs(fr):Ce}l&&J(l,d)},[J,T.values]),je=P(function(a){if(Fe(a))return function(c){return ir(c,a)};ir(a)}),Q=P(function(a,c,l){c===void 0&&(c=!0),m({type:"SET_FIELD_TOUCHED",payload:{field:a,value:c}});var d=l===void 0?i:l;return d?k(T.values):Promise.resolve()}),or=u.useCallback(function(a,c){a.persist&&a.persist();var l=a.target,d=l.name,g=l.id,b=l.outerHTML,w=c||d||g;Q(w,!0)},[Q]),_e=P(function(a){if(Fe(a))return function(c){return or(c,a)};or(a)}),sr=u.useCallback(function(a){M(a)?m({type:"SET_FORMIK_STATE",payload:a}):m({type:"SET_FORMIK_STATE",payload:function(){return a}})},[]),cr=u.useCallback(function(a){m({type:"SET_STATUS",payload:a})},[]),ur=u.useCallback(function(a){m({type:"SET_ISSUBMITTING",payload:a})},[]),we=P(function(){return m({type:"SUBMIT_ATTEMPT"}),k().then(function(a){var c=a instanceof Error,l=!c&&Object.keys(a).length===0;if(l){var d;try{if(d=xt(),d===void 0)return}catch(g){throw g}return Promise.resolve(d).then(function(g){return j.current&&m({type:"SUBMIT_SUCCESS"}),g}).catch(function(g){if(j.current)throw m({type:"SUBMIT_FAILURE"}),g})}else if(j.current&&(m({type:"SUBMIT_FAILURE"}),c))throw a})}),Et=P(function(a){a&&a.preventDefault&&M(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&M(a.stopPropagation)&&a.stopPropagation(),we().catch(function(c){console.warn("Warning: An unhandled error was caught from submitForm()",c)})}),lr={resetForm:ne,validateForm:k,validateField:rr,setErrors:nr,setFieldError:de,setFieldTouched:Q,setFieldValue:J,setStatus:cr,setSubmitting:ur,setTouched:tr,setValues:ar,setFormikState:sr,submitForm:we},xt=P(function(){return C(T.values,lr)}),jt=P(function(a){a&&a.preventDefault&&M(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&M(a.stopPropagation)&&a.stopPropagation(),ne()}),_t=u.useCallback(function(a){return{value:F(T.values,a),error:F(T.errors,a),touched:!!F(T.touched,a),initialValue:F(_.current,a),initialTouched:!!F(I.current,a),initialError:F(R.current,a)}},[T.errors,T.touched,T.values]),wt=u.useCallback(function(a){return{setValue:function(l,d){return J(a,l,d)},setTouched:function(l,d){return Q(a,l,d)},setError:function(l){return de(a,l)}}},[J,Q,de]),At=u.useCallback(function(a){var c=Te(a),l=c?a.name:a,d=F(T.values,l),g={name:l,value:d,onChange:je,onBlur:_e};if(c){var b=a.type,w=a.value,N=a.as,$e=a.multiple;b==="checkbox"?w===void 0?g.checked=!!d:(g.checked=!!(Array.isArray(d)&&~d.indexOf(w)),g.value=w):b==="radio"?(g.checked=d===w,g.value=w):N==="select"&&$e&&(g.value=g.value||[],g.multiple=!0)}return g},[_e,je,T.values]),Ae=u.useMemo(function(){return!H(_.current,T.values)},[_.current,T.values]),$t=u.useMemo(function(){return typeof h<"u"?Ae?T.errors&&Object.keys(T.errors).length===0:h!==!1&&M(h)?h(f):h:T.errors&&Object.keys(T.errors).length===0},[h,Ae,T.errors,f]),Ct=x({},T,{initialValues:_.current,initialErrors:R.current,initialTouched:I.current,initialStatus:$.current,handleBlur:_e,handleChange:je,handleReset:jt,handleSubmit:Et,resetForm:ne,setErrors:nr,setFormikState:sr,setFieldTouched:Q,setFieldValue:J,setFieldError:de,setStatus:cr,setSubmitting:ur,setTouched:tr,setValues:ar,submitForm:we,validateForm:k,validateField:rr,isValid:$t,dirty:Ae,unregisterField:St,registerField:Tt,getFieldProps:At,getFieldMeta:_t,getFieldHelpers:wt,validateOnBlur:i,validateOnChange:t,validateOnMount:s});return Ct}function Ps(e){var r=Ls(e),t=e.component,n=e.children,i=e.render,o=e.innerRef;return u.useImperativeHandle(o,function(){return r}),u.createElement(Is,{value:r},t?u.createElement(t,r):i?i(r):n?M(n)?n(r):Ms(n)?null:u.Children.only(n):null)}function ks(e){var r={};if(e.inner){if(e.inner.length===0)return K(r,e.path,e.message);for(var i=e.inner,t=Array.isArray(i),n=0,i=t?i:i[Symbol.iterator]();;){var o;if(t){if(n>=i.length)break;o=i[n++]}else{if(n=i.next(),n.done)break;o=n.value}var s=o;F(r,s.path)||(r=K(r,s.path,s.message))}}return r}function Ds(e,r,t,n){t===void 0&&(t=!1);var i=Ve(e);return r[t?"validateSync":"validate"](i,{abortEarly:!1,context:n||i})}function Ve(e){var r=Array.isArray(e)?[]:{};for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var n=String(t);Array.isArray(e[n])===!0?r[n]=e[n].map(function(i){return Array.isArray(i)===!0||hr(i)?Ve(i):i!==""?i:void 0}):hr(e[n])?r[n]=Ve(e[n]):r[n]=e[n]!==""?e[n]:void 0}return r}function Ns(e,r,t){var n=e.slice();return r.forEach(function(o,s){if(typeof n[s]>"u"){var h=t.clone!==!1,v=h&&t.isMergeableObject(o);n[s]=v?Re(Array.isArray(o)?[]:{},o,t):o}else t.isMergeableObject(o)?n[s]=Re(e[s],o,t):e.indexOf(o)===-1&&n.push(o)}),n}function Vs(e){return Array.from(e).filter(function(r){return r.selected}).map(function(r){return r.value})}function Bs(e,r,t){if(typeof e=="boolean")return!!r;var n=[],i=!1,o=-1;if(Array.isArray(e))n=e,o=e.indexOf(t),i=o>=0;else if(!t||t=="true"||t=="false")return!!r;return r&&t&&!i?n.concat(t):i?n.slice(0,o).concat(n.slice(o+1)):n}var Us=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?u.useLayoutEffect:u.useEffect;function P(e){var r=u.useRef(e);return Us(function(){r.current=e}),u.useCallback(function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return r.current.apply(void 0,n)},[])}function zs(e){var r=e.validate,t=e.name,n=e.render,i=e.children,o=e.as,s=e.component,h=e.className,v=ee(e,["validate","name","render","children","as","component","className"]),y=gt(),C=ee(y,["validate","validationSchema"]),O=C.registerField,f=C.unregisterField;u.useEffect(function(){return O(t,{validate:r}),function(){f(t)}},[O,f,t,r]);var _=C.getFieldProps(x({name:t},v)),R=C.getFieldMeta(t),I={field:_,form:C};if(n)return n(x({},I,{meta:R}));if(M(i))return i(x({},I,{meta:R}));if(s){if(typeof s=="string"){var $=v.innerRef,j=ee(v,["innerRef"]);return u.createElement(s,x({ref:$},_,j,{className:h}),i)}return u.createElement(s,x({field:_,form:C},v,{className:h}),i)}var L=o||"input";if(typeof L=="string"){var Se=v.innerRef,Ee=ee(v,["innerRef"]);return u.createElement(L,x({ref:Se},_,Ee,{className:h}),i)}return u.createElement(L,x({},_,v,{className:h}),i)}var bt=u.forwardRef(function(e,r){var t=e.action,n=ee(e,["action"]),i=t??"#",o=gt(),s=o.handleReset,h=o.handleSubmit;return u.createElement("form",x({onSubmit:h,ref:r,onReset:s,action:i},n))});bt.displayName="Form";const Hs=A(bt)`
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
`,Gs=A.button`
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
`,Ks=A.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`,Ws=A(zs)`
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
`;function Ys(){const e=Lt(),r=({search:t},n)=>{if(t.trim()===""){Bt.error("Please enter a word to search for");return}e(`movies?query=${encodeURIComponent(t)}`),n.resetForm()};return p.jsx(Ps,{initialValues:{search:""},onSubmit:r,children:p.jsxs(Hs,{children:[p.jsx(Gs,{type:"submit",value:"submit",children:p.jsx(Dt,{})}),p.jsx(Ks,{htmlFor:"search"}),p.jsx(Ws,{type:"text",id:"search",name:"search",placeholder:"Search"})]})})}function Zs(e){return Be({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"}}]})(e)}function qs(e){return Be({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"}}]})(e)}const Xs=A.label`
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
`,Js=A(Zs)`
  animation: ${yt} 0.5s;
`,Qs=A(qs)`
  animation: ${yt} 0.5s;
`;function ec(){const[e,r]=u.useState(()=>{const n=window.matchMedia("(prefers-color-scheme: dark)").matches;return localStorage.getItem("theme")||(n?"dark":"light")});u.useEffect(()=>{localStorage.setItem("theme",e)},[e]),u.useEffect(()=>{const{body:n}=document;n.dataset.theme=e},[e]);const t=()=>{r(e==="light"?"dark":"light")};return p.jsxs(Xs,{className:"switcher",children:[p.jsx("input",{type:"checkbox",onChange:t,checked:e==="dark"}),e==="dark"?p.jsx(Js,{}):p.jsx(Qs,{})]})}function rc(){return p.jsx(Gt,{children:p.jsxs(Kt,{children:[p.jsx(qt,{}),p.jsx(en,{}),p.jsx(Ys,{}),p.jsx(ec,{}),p.jsx(Wt,{type:"button",children:p.jsx(Nt,{})}),p.jsx(Jt,{})]})})}const tc=A.main``;function nc(){return p.jsx(tc,{children:p.jsx(Br,{children:p.jsx(u.Suspense,{fallback:p.jsx(Vt,{}),children:p.jsx(kt,{})})})})}function uc(){return p.jsxs(Ut,{children:[p.jsx(rc,{}),p.jsx(nc,{}),p.jsx(Ht,{})]})}export{uc as default};
