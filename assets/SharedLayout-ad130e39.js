import{s as $,j as g,G as Ne,N as Ft,g as Mt,r as l,u as Rt,W as Pt,L as Lt,O as kt}from"./index-435de195.js";import{A as Dt,I as Vt}from"./index.esm-c6e0ca95.js";import{Q as Nt}from"./react-toastify.esm-e5a60533.js";import Ut from"./Loader-e0b37aaa.js";const Bt=$.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100%;
`,Nr=$.div`
  max-width: 1160px;
  padding: 25px 10px;
  margin: 0 auto;
`,zt=$.footer`
  color: rgba(var(--text-primary), 1);
  background-color: rgba(var(--accent), 1);

  a {
    color: #dfe3ee;

    &:hover {
      color: #f7f7f7;
    }
  }
`;function Ht(){return g.jsx(zt,{children:g.jsx(Nr,{children:g.jsxs("p",{children:[" ","© 2023 Movies App. All rights reserved. Designed and Developed by"," ",g.jsx("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/oleksandr-pishta",children:"Oleksandr Pishta"})]})})})}function Gt(e){return Ne({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 20H20V22H12C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.2512 21.2561 16.3287 20.0007 18H17.2916C18.9525 16.5341 20 14.3894 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8C14 9.10457 13.1046 10 12 10ZM8 14C6.89543 14 6 13.1046 6 12C6 10.8954 6.89543 10 8 10C9.10457 10 10 10.8954 10 12C10 13.1046 9.10457 14 8 14ZM16 14C14.8954 14 14 13.1046 14 12C14 10.8954 14.8954 10 16 10C17.1046 10 18 10.8954 18 12C18 13.1046 17.1046 14 16 14ZM12 18C10.8954 18 10 17.1046 10 16C10 14.8954 10.8954 14 12 14C13.1046 14 14 14.8954 14 16C14 17.1046 13.1046 18 12 18Z"}}]})(e)}const Wt=$.header`
  position: sticky;
  top: 0;
  background-color: rgba(var(--accent), 1);
  z-index: 10;

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
`,Kt=$.div`
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
  gap: 5px;
`,Yt=$.div`
  order: 1;
  flex-grow: 0;
  margin-right: 30px;

  svg {
    display: block;
    width: 40px;
    height: 40px;
    fill: rgba(var(--bg-primary), 1);
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
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
`,fr=$(Ft)`
  display: block;
  background-color: transparent;
  border-radius: 4px;
  border: 2px solid transparent;
  padding: 8px;
  order: 0;
  color: rgba(var(--text-primary), 1);
  font-size: 20px;
  font-weight: bold;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

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
  background: transparent;
  border-width: 0;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  display: block;
  flex-basis: auto;
  align-items: center;

  svg {
    display: block;
    width: 40px;
    height: 40px;
    stroke: rgba(var(--bg-primary), 1);
  }

  &:hover {
    svg {
      stroke: rgba(var(--bg-primary), 0.7);
    }
  }

  @media (width <= 576px) {
    display: none;
  }
`;var Xt=function(r){return Jt(r)&&!Qt(r)};function Jt(e){return!!e&&typeof e=="object"}function Qt(e){var r=Object.prototype.toString.call(e);return r==="[object RegExp]"||r==="[object Date]"||tn(e)}var en=typeof Symbol=="function"&&Symbol.for,rn=en?Symbol.for("react.element"):60103;function tn(e){return e.$$typeof===rn}function nn(e){return Array.isArray(e)?[]:{}}function ge(e,r){return r.clone!==!1&&r.isMergeableObject(e)?oe(nn(e),e,r):e}function an(e,r,t){return e.concat(r).map(function(n){return ge(n,t)})}function on(e,r,t){var n={};return t.isMergeableObject(e)&&Object.keys(e).forEach(function(i){n[i]=ge(e[i],t)}),Object.keys(r).forEach(function(i){!t.isMergeableObject(r[i])||!e[i]?n[i]=ge(r[i],t):n[i]=oe(e[i],r[i],t)}),n}function oe(e,r,t){t=t||{},t.arrayMerge=t.arrayMerge||an,t.isMergeableObject=t.isMergeableObject||Xt;var n=Array.isArray(r),i=Array.isArray(e),o=n===i;return o?n?t.arrayMerge(e,r,t):on(e,r,t):ge(r,t)}oe.all=function(r,t){if(!Array.isArray(r))throw new Error("first argument should be an array");return r.reduce(function(n,i){return oe(n,i,t)},{})};var Me=oe,cn=typeof global=="object"&&global&&global.Object===Object&&global;const Ur=cn;var sn=typeof self=="object"&&self&&self.Object===Object&&self,un=Ur||sn||Function("return this")();const D=un;var ln=D.Symbol;const U=ln;var Br=Object.prototype,fn=Br.hasOwnProperty,dn=Br.toString,ae=U?U.toStringTag:void 0;function pn(e){var r=fn.call(e,ae),t=e[ae];try{e[ae]=void 0;var n=!0}catch{}var i=dn.call(e);return n&&(r?e[ae]=t:delete e[ae]),i}var hn=Object.prototype,gn=hn.toString;function vn(e){return gn.call(e)}var bn="[object Null]",yn="[object Undefined]",dr=U?U.toStringTag:void 0;function Y(e){return e==null?e===void 0?yn:bn:dr&&dr in Object(e)?pn(e):vn(e)}function zr(e,r){return function(t){return e(r(t))}}var mn=zr(Object.getPrototypeOf,Object);const Ue=mn;function Z(e){return e!=null&&typeof e=="object"}var Tn="[object Object]",Sn=Function.prototype,En=Object.prototype,Hr=Sn.toString,jn=En.hasOwnProperty,_n=Hr.call(Object);function pr(e){if(!Z(e)||Y(e)!=Tn)return!1;var r=Ue(e);if(r===null)return!0;var t=jn.call(r,"constructor")&&r.constructor;return typeof t=="function"&&t instanceof t&&Hr.call(t)==_n}var hr=Array.isArray,gr=Object.keys,xn=Object.prototype.hasOwnProperty,An=typeof Element<"u";function Re(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){var t=hr(e),n=hr(r),i,o,c;if(t&&n){if(o=e.length,o!=r.length)return!1;for(i=o;i--!==0;)if(!Re(e[i],r[i]))return!1;return!0}if(t!=n)return!1;var p=e instanceof Date,T=r instanceof Date;if(p!=T)return!1;if(p&&T)return e.getTime()==r.getTime();var v=e instanceof RegExp,P=r instanceof RegExp;if(v!=P)return!1;if(v&&P)return e.toString()==r.toString();var C=gr(e);if(o=C.length,o!==gr(r).length)return!1;for(i=o;i--!==0;)if(!xn.call(r,C[i]))return!1;if(An&&e instanceof Element&&r instanceof Element)return e===r;for(i=o;i--!==0;)if(c=C[i],!(c==="_owner"&&e.$$typeof)&&!Re(e[c],r[c]))return!1;return!0}return e!==e&&r!==r}var wn=function(r,t){try{return Re(r,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}};const H=Mt(wn);var $n=!0;function Cn(e,r){if(!$n){if(e)return;var t="Warning: "+r;typeof console<"u"&&console.warn(t);try{throw Error(t)}catch{}}}function On(){this.__data__=[],this.size=0}function Gr(e,r){return e===r||e!==e&&r!==r}function ve(e,r){for(var t=e.length;t--;)if(Gr(e[t][0],r))return t;return-1}var In=Array.prototype,Fn=In.splice;function Mn(e){var r=this.__data__,t=ve(r,e);if(t<0)return!1;var n=r.length-1;return t==n?r.pop():Fn.call(r,t,1),--this.size,!0}function Rn(e){var r=this.__data__,t=ve(r,e);return t<0?void 0:r[t][1]}function Pn(e){return ve(this.__data__,e)>-1}function Ln(e,r){var t=this.__data__,n=ve(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this}function N(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}N.prototype.clear=On;N.prototype.delete=Mn;N.prototype.get=Rn;N.prototype.has=Pn;N.prototype.set=Ln;function kn(){this.__data__=new N,this.size=0}function Dn(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t}function Vn(e){return this.__data__.get(e)}function Nn(e){return this.__data__.has(e)}function ue(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}var Un="[object AsyncFunction]",Bn="[object Function]",zn="[object GeneratorFunction]",Hn="[object Proxy]";function Wr(e){if(!ue(e))return!1;var r=Y(e);return r==Bn||r==zn||r==Un||r==Hn}var Gn=D["__core-js_shared__"];const Ce=Gn;var vr=function(){var e=/[^.]+$/.exec(Ce&&Ce.keys&&Ce.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Wn(e){return!!vr&&vr in e}var Kn=Function.prototype,Yn=Kn.toString;function q(e){if(e!=null){try{return Yn.call(e)}catch{}try{return e+""}catch{}}return""}var Zn=/[\\^$.*+?()[\]{}|]/g,qn=/^\[object .+?Constructor\]$/,Xn=Function.prototype,Jn=Object.prototype,Qn=Xn.toString,ea=Jn.hasOwnProperty,ra=RegExp("^"+Qn.call(ea).replace(Zn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ta(e){if(!ue(e)||Wn(e))return!1;var r=Wr(e)?ra:qn;return r.test(q(e))}function na(e,r){return e==null?void 0:e[r]}function X(e,r){var t=na(e,r);return ta(t)?t:void 0}var aa=X(D,"Map");const ce=aa;var ia=X(Object,"create");const se=ia;function oa(){this.__data__=se?se(null):{},this.size=0}function ca(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r}var sa="__lodash_hash_undefined__",ua=Object.prototype,la=ua.hasOwnProperty;function fa(e){var r=this.__data__;if(se){var t=r[e];return t===sa?void 0:t}return la.call(r,e)?r[e]:void 0}var da=Object.prototype,pa=da.hasOwnProperty;function ha(e){var r=this.__data__;return se?r[e]!==void 0:pa.call(r,e)}var ga="__lodash_hash_undefined__";function va(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=se&&r===void 0?ga:r,this}function K(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}K.prototype.clear=oa;K.prototype.delete=ca;K.prototype.get=fa;K.prototype.has=ha;K.prototype.set=va;function ba(){this.size=0,this.__data__={hash:new K,map:new(ce||N),string:new K}}function ya(e){var r=typeof e;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?e!=="__proto__":e===null}function be(e,r){var t=e.__data__;return ya(r)?t[typeof r=="string"?"string":"hash"]:t.map}function ma(e){var r=be(this,e).delete(e);return this.size-=r?1:0,r}function Ta(e){return be(this,e).get(e)}function Sa(e){return be(this,e).has(e)}function Ea(e,r){var t=be(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this}function B(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}B.prototype.clear=ba;B.prototype.delete=ma;B.prototype.get=Ta;B.prototype.has=Sa;B.prototype.set=Ea;var ja=200;function _a(e,r){var t=this.__data__;if(t instanceof N){var n=t.__data__;if(!ce||n.length<ja-1)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new B(n)}return t.set(e,r),this.size=t.size,this}function te(e){var r=this.__data__=new N(e);this.size=r.size}te.prototype.clear=kn;te.prototype.delete=Dn;te.prototype.get=Vn;te.prototype.has=Nn;te.prototype.set=_a;function xa(e,r){for(var t=-1,n=e==null?0:e.length;++t<n&&r(e[t],t,e)!==!1;);return e}var Aa=function(){try{var e=X(Object,"defineProperty");return e({},"",{}),e}catch{}}();const br=Aa;function Kr(e,r,t){r=="__proto__"&&br?br(e,r,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[r]=t}var wa=Object.prototype,$a=wa.hasOwnProperty;function Yr(e,r,t){var n=e[r];(!($a.call(e,r)&&Gr(n,t))||t===void 0&&!(r in e))&&Kr(e,r,t)}function ye(e,r,t,n){var i=!t;t||(t={});for(var o=-1,c=r.length;++o<c;){var p=r[o],T=n?n(t[p],e[p],p,t,e):void 0;T===void 0&&(T=e[p]),i?Kr(t,p,T):Yr(t,p,T)}return t}function Ca(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n}var Oa="[object Arguments]";function yr(e){return Z(e)&&Y(e)==Oa}var Zr=Object.prototype,Ia=Zr.hasOwnProperty,Fa=Zr.propertyIsEnumerable,Ma=yr(function(){return arguments}())?yr:function(e){return Z(e)&&Ia.call(e,"callee")&&!Fa.call(e,"callee")};const Ra=Ma;var Pa=Array.isArray;const le=Pa;function La(){return!1}var qr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,mr=qr&&typeof module=="object"&&module&&!module.nodeType&&module,ka=mr&&mr.exports===qr,Tr=ka?D.Buffer:void 0,Da=Tr?Tr.isBuffer:void 0,Va=Da||La;const Xr=Va;var Na=9007199254740991,Ua=/^(?:0|[1-9]\d*)$/;function Ba(e,r){var t=typeof e;return r=r??Na,!!r&&(t=="number"||t!="symbol"&&Ua.test(e))&&e>-1&&e%1==0&&e<r}var za=9007199254740991;function Jr(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=za}var Ha="[object Arguments]",Ga="[object Array]",Wa="[object Boolean]",Ka="[object Date]",Ya="[object Error]",Za="[object Function]",qa="[object Map]",Xa="[object Number]",Ja="[object Object]",Qa="[object RegExp]",ei="[object Set]",ri="[object String]",ti="[object WeakMap]",ni="[object ArrayBuffer]",ai="[object DataView]",ii="[object Float32Array]",oi="[object Float64Array]",ci="[object Int8Array]",si="[object Int16Array]",ui="[object Int32Array]",li="[object Uint8Array]",fi="[object Uint8ClampedArray]",di="[object Uint16Array]",pi="[object Uint32Array]",E={};E[ii]=E[oi]=E[ci]=E[si]=E[ui]=E[li]=E[fi]=E[di]=E[pi]=!0;E[Ha]=E[Ga]=E[ni]=E[Wa]=E[ai]=E[Ka]=E[Ya]=E[Za]=E[qa]=E[Xa]=E[Ja]=E[Qa]=E[ei]=E[ri]=E[ti]=!1;function hi(e){return Z(e)&&Jr(e.length)&&!!E[Y(e)]}function Be(e){return function(r){return e(r)}}var Qr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ie=Qr&&typeof module=="object"&&module&&!module.nodeType&&module,gi=ie&&ie.exports===Qr,Oe=gi&&Ur.process,vi=function(){try{var e=ie&&ie.require&&ie.require("util").types;return e||Oe&&Oe.binding&&Oe.binding("util")}catch{}}();const re=vi;var Sr=re&&re.isTypedArray,bi=Sr?Be(Sr):hi;const yi=bi;var mi=Object.prototype,Ti=mi.hasOwnProperty;function et(e,r){var t=le(e),n=!t&&Ra(e),i=!t&&!n&&Xr(e),o=!t&&!n&&!i&&yi(e),c=t||n||i||o,p=c?Ca(e.length,String):[],T=p.length;for(var v in e)(r||Ti.call(e,v))&&!(c&&(v=="length"||i&&(v=="offset"||v=="parent")||o&&(v=="buffer"||v=="byteLength"||v=="byteOffset")||Ba(v,T)))&&p.push(v);return p}var Si=Object.prototype;function ze(e){var r=e&&e.constructor,t=typeof r=="function"&&r.prototype||Si;return e===t}var Ei=zr(Object.keys,Object);const ji=Ei;var _i=Object.prototype,xi=_i.hasOwnProperty;function Ai(e){if(!ze(e))return ji(e);var r=[];for(var t in Object(e))xi.call(e,t)&&t!="constructor"&&r.push(t);return r}function rt(e){return e!=null&&Jr(e.length)&&!Wr(e)}function He(e){return rt(e)?et(e):Ai(e)}function wi(e,r){return e&&ye(r,He(r),e)}function $i(e){var r=[];if(e!=null)for(var t in Object(e))r.push(t);return r}var Ci=Object.prototype,Oi=Ci.hasOwnProperty;function Ii(e){if(!ue(e))return $i(e);var r=ze(e),t=[];for(var n in e)n=="constructor"&&(r||!Oi.call(e,n))||t.push(n);return t}function Ge(e){return rt(e)?et(e,!0):Ii(e)}function Fi(e,r){return e&&ye(r,Ge(r),e)}var tt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Er=tt&&typeof module=="object"&&module&&!module.nodeType&&module,Mi=Er&&Er.exports===tt,jr=Mi?D.Buffer:void 0,_r=jr?jr.allocUnsafe:void 0;function Ri(e,r){if(r)return e.slice();var t=e.length,n=_r?_r(t):new e.constructor(t);return e.copy(n),n}function nt(e,r){var t=-1,n=e.length;for(r||(r=Array(n));++t<n;)r[t]=e[t];return r}function Pi(e,r){for(var t=-1,n=e==null?0:e.length,i=0,o=[];++t<n;){var c=e[t];r(c,t,e)&&(o[i++]=c)}return o}function at(){return[]}var Li=Object.prototype,ki=Li.propertyIsEnumerable,xr=Object.getOwnPropertySymbols,Di=xr?function(e){return e==null?[]:(e=Object(e),Pi(xr(e),function(r){return ki.call(e,r)}))}:at;const We=Di;function Vi(e,r){return ye(e,We(e),r)}function it(e,r){for(var t=-1,n=r.length,i=e.length;++t<n;)e[i+t]=r[t];return e}var Ni=Object.getOwnPropertySymbols,Ui=Ni?function(e){for(var r=[];e;)it(r,We(e)),e=Ue(e);return r}:at;const ot=Ui;function Bi(e,r){return ye(e,ot(e),r)}function ct(e,r,t){var n=r(e);return le(e)?n:it(n,t(e))}function zi(e){return ct(e,He,We)}function Hi(e){return ct(e,Ge,ot)}var Gi=X(D,"DataView");const Pe=Gi;var Wi=X(D,"Promise");const Le=Wi;var Ki=X(D,"Set");const ke=Ki;var Yi=X(D,"WeakMap");const De=Yi;var Ar="[object Map]",Zi="[object Object]",wr="[object Promise]",$r="[object Set]",Cr="[object WeakMap]",Or="[object DataView]",qi=q(Pe),Xi=q(ce),Ji=q(Le),Qi=q(ke),eo=q(De),G=Y;(Pe&&G(new Pe(new ArrayBuffer(1)))!=Or||ce&&G(new ce)!=Ar||Le&&G(Le.resolve())!=wr||ke&&G(new ke)!=$r||De&&G(new De)!=Cr)&&(G=function(e){var r=Y(e),t=r==Zi?e.constructor:void 0,n=t?q(t):"";if(n)switch(n){case qi:return Or;case Xi:return Ar;case Ji:return wr;case Qi:return $r;case eo:return Cr}return r});const Ke=G;var ro=Object.prototype,to=ro.hasOwnProperty;function no(e){var r=e.length,t=new e.constructor(r);return r&&typeof e[0]=="string"&&to.call(e,"index")&&(t.index=e.index,t.input=e.input),t}var ao=D.Uint8Array;const Ir=ao;function Ye(e){var r=new e.constructor(e.byteLength);return new Ir(r).set(new Ir(e)),r}function io(e,r){var t=r?Ye(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}var oo=/\w*$/;function co(e){var r=new e.constructor(e.source,oo.exec(e));return r.lastIndex=e.lastIndex,r}var Fr=U?U.prototype:void 0,Mr=Fr?Fr.valueOf:void 0;function so(e){return Mr?Object(Mr.call(e)):{}}function uo(e,r){var t=r?Ye(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}var lo="[object Boolean]",fo="[object Date]",po="[object Map]",ho="[object Number]",go="[object RegExp]",vo="[object Set]",bo="[object String]",yo="[object Symbol]",mo="[object ArrayBuffer]",To="[object DataView]",So="[object Float32Array]",Eo="[object Float64Array]",jo="[object Int8Array]",_o="[object Int16Array]",xo="[object Int32Array]",Ao="[object Uint8Array]",wo="[object Uint8ClampedArray]",$o="[object Uint16Array]",Co="[object Uint32Array]";function Oo(e,r,t){var n=e.constructor;switch(r){case mo:return Ye(e);case lo:case fo:return new n(+e);case To:return io(e,t);case So:case Eo:case jo:case _o:case xo:case Ao:case wo:case $o:case Co:return uo(e,t);case po:return new n;case ho:case bo:return new n(e);case go:return co(e);case vo:return new n;case yo:return so(e)}}var Rr=Object.create,Io=function(){function e(){}return function(r){if(!ue(r))return{};if(Rr)return Rr(r);e.prototype=r;var t=new e;return e.prototype=void 0,t}}();const Fo=Io;function Mo(e){return typeof e.constructor=="function"&&!ze(e)?Fo(Ue(e)):{}}var Ro="[object Map]";function Po(e){return Z(e)&&Ke(e)==Ro}var Pr=re&&re.isMap,Lo=Pr?Be(Pr):Po;const ko=Lo;var Do="[object Set]";function Vo(e){return Z(e)&&Ke(e)==Do}var Lr=re&&re.isSet,No=Lr?Be(Lr):Vo;const Uo=No;var Bo=1,zo=2,Ho=4,st="[object Arguments]",Go="[object Array]",Wo="[object Boolean]",Ko="[object Date]",Yo="[object Error]",ut="[object Function]",Zo="[object GeneratorFunction]",qo="[object Map]",Xo="[object Number]",lt="[object Object]",Jo="[object RegExp]",Qo="[object Set]",ec="[object String]",rc="[object Symbol]",tc="[object WeakMap]",nc="[object ArrayBuffer]",ac="[object DataView]",ic="[object Float32Array]",oc="[object Float64Array]",cc="[object Int8Array]",sc="[object Int16Array]",uc="[object Int32Array]",lc="[object Uint8Array]",fc="[object Uint8ClampedArray]",dc="[object Uint16Array]",pc="[object Uint32Array]",S={};S[st]=S[Go]=S[nc]=S[ac]=S[Wo]=S[Ko]=S[ic]=S[oc]=S[cc]=S[sc]=S[uc]=S[qo]=S[Xo]=S[lt]=S[Jo]=S[Qo]=S[ec]=S[rc]=S[lc]=S[fc]=S[dc]=S[pc]=!0;S[Yo]=S[ut]=S[tc]=!1;function he(e,r,t,n,i,o){var c,p=r&Bo,T=r&zo,v=r&Ho;if(t&&(c=i?t(e,n,i,o):t(e)),c!==void 0)return c;if(!ue(e))return e;var P=le(e);if(P){if(c=no(e),!p)return nt(e,c)}else{var C=Ke(e),f=C==ut||C==Zo;if(Xr(e))return Ri(e,p);if(C==lt||C==st||f&&!i){if(c=T||f?{}:Mo(e),!p)return T?Bi(e,Fi(c,e)):Vi(e,wi(c,e))}else{if(!S[C])return i?e:{};c=Oo(e,C,p)}}o||(o=new te);var A=o.get(e);if(A)return A;o.set(e,c),Uo(e)?e.forEach(function(w){c.add(he(w,r,t,w,e,o))}):ko(e)&&e.forEach(function(w,_){c.set(_,he(w,r,t,_,e,o))});var F=v?T?Hi:zi:T?Ge:He,M=P?void 0:F(e);return xa(M||e,function(w,_){M&&(_=w,w=e[_]),Yr(c,_,he(w,r,t,_,e,o))}),c}var hc=4;function kr(e){return he(e,hc)}function ft(e,r){for(var t=-1,n=e==null?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i}var gc="[object Symbol]";function Ze(e){return typeof e=="symbol"||Z(e)&&Y(e)==gc}var vc="Expected a function";function qe(e,r){if(typeof e!="function"||r!=null&&typeof r!="function")throw new TypeError(vc);var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],o=t.cache;if(o.has(i))return o.get(i);var c=e.apply(this,n);return t.cache=o.set(i,c)||o,c};return t.cache=new(qe.Cache||B),t}qe.Cache=B;var bc=500;function yc(e){var r=qe(e,function(n){return t.size===bc&&t.clear(),n}),t=r.cache;return r}var mc=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Tc=/\\(\\)?/g,Sc=yc(function(e){var r=[];return e.charCodeAt(0)===46&&r.push(""),e.replace(mc,function(t,n,i,o){r.push(i?o.replace(Tc,"$1"):n||t)}),r});const Ec=Sc;var jc=1/0;function _c(e){if(typeof e=="string"||Ze(e))return e;var r=e+"";return r=="0"&&1/e==-jc?"-0":r}var xc=1/0,Dr=U?U.prototype:void 0,Vr=Dr?Dr.toString:void 0;function dt(e){if(typeof e=="string")return e;if(le(e))return ft(e,dt)+"";if(Ze(e))return Vr?Vr.call(e):"";var r=e+"";return r=="0"&&1/e==-xc?"-0":r}function Ac(e){return e==null?"":dt(e)}function pt(e){return le(e)?ft(e,_c):Ze(e)?[e]:nt(Ec(Ac(e)))}function j(){return j=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},j.apply(this,arguments)}function ee(e,r){if(e==null)return{};var t={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(r.indexOf(i)>=0)&&(t[i]=e[i]);return t}var me=l.createContext(void 0);me.displayName="FormikContext";var wc=me.Provider;me.Consumer;function ht(){var e=l.useContext(me);return e||Cn(!1),e}var I=function(r){return typeof r=="function"},Te=function(r){return r!==null&&typeof r=="object"},$c=function(r){return String(Math.floor(Number(r)))===r},Ie=function(r){return Object.prototype.toString.call(r)==="[object String]"},Cc=function(r){return l.Children.count(r)===0},Fe=function(r){return Te(r)&&I(r.then)};function O(e,r,t,n){n===void 0&&(n=0);for(var i=pt(r);e&&n<i.length;)e=e[i[n++]];return n!==i.length&&!e||e===void 0?t:e}function W(e,r,t){for(var n=kr(e),i=n,o=0,c=pt(r);o<c.length-1;o++){var p=c[o],T=O(e,c.slice(0,o+1));if(T&&(Te(T)||Array.isArray(T)))i=i[p]=kr(T);else{var v=c[o+1];i=i[p]=$c(v)&&Number(v)>=0?[]:{}}}return(o===0?e:i)[c[o]]===t?e:(t===void 0?delete i[c[o]]:i[c[o]]=t,o===0&&t===void 0&&delete n[c[o]],n)}function gt(e,r,t,n){t===void 0&&(t=new WeakMap),n===void 0&&(n={});for(var i=0,o=Object.keys(e);i<o.length;i++){var c=o[i],p=e[c];Te(p)?t.get(p)||(t.set(p,!0),n[c]=Array.isArray(p)?[]:{},gt(p,r,t,n[c])):n[c]=r}return n}function Oc(e,r){switch(r.type){case"SET_VALUES":return j({},e,{values:r.payload});case"SET_TOUCHED":return j({},e,{touched:r.payload});case"SET_ERRORS":return H(e.errors,r.payload)?e:j({},e,{errors:r.payload});case"SET_STATUS":return j({},e,{status:r.payload});case"SET_ISSUBMITTING":return j({},e,{isSubmitting:r.payload});case"SET_ISVALIDATING":return j({},e,{isValidating:r.payload});case"SET_FIELD_VALUE":return j({},e,{values:W(e.values,r.payload.field,r.payload.value)});case"SET_FIELD_TOUCHED":return j({},e,{touched:W(e.touched,r.payload.field,r.payload.value)});case"SET_FIELD_ERROR":return j({},e,{errors:W(e.errors,r.payload.field,r.payload.value)});case"RESET_FORM":return j({},e,r.payload);case"SET_FORMIK_STATE":return r.payload(e);case"SUBMIT_ATTEMPT":return j({},e,{touched:gt(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return j({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return j({},e,{isSubmitting:!1});default:return e}}var z={},pe={};function Ic(e){var r=e.validateOnChange,t=r===void 0?!0:r,n=e.validateOnBlur,i=n===void 0?!0:n,o=e.validateOnMount,c=o===void 0?!1:o,p=e.isInitialValid,T=e.enableReinitialize,v=T===void 0?!1:T,P=e.onSubmit,C=ee(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=j({validateOnChange:t,validateOnBlur:i,validateOnMount:c,onSubmit:P},C),A=l.useRef(f.initialValues),F=l.useRef(f.initialErrors||z),M=l.useRef(f.initialTouched||pe),w=l.useRef(f.initialStatus),_=l.useRef(!1),k=l.useRef({});l.useEffect(function(){return _.current=!0,function(){_.current=!1}},[]);var Se=l.useState(0),yt=Se[1],fe=l.useRef({values:f.initialValues,errors:f.initialErrors||z,touched:f.initialTouched||pe,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),m=fe.current,y=l.useCallback(function(a){var s=fe.current;fe.current=Oc(s,a),s!==fe.current&&yt(function(u){return u+1})},[]),Xe=l.useCallback(function(a,s){return new Promise(function(u,d){var h=f.validate(a,s);h==null?u(z):Fe(h)?h.then(function(b){u(b||z)},function(b){d(b)}):u(h)})},[f.validate]),Ee=l.useCallback(function(a,s){var u=f.validationSchema,d=I(u)?u(s):u,h=s&&d.validateAt?d.validateAt(s,a):Rc(a,d);return new Promise(function(b,x){h.then(function(){b(z)},function(V){V.name==="ValidationError"?b(Mc(V)):x(V)})})},[f.validationSchema]),Je=l.useCallback(function(a,s){return new Promise(function(u){return u(k.current[a].validate(s))})},[]),Qe=l.useCallback(function(a){var s=Object.keys(k.current).filter(function(d){return I(k.current[d].validate)}),u=s.length>0?s.map(function(d){return Je(d,O(a,d))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(u).then(function(d){return d.reduce(function(h,b,x){return b==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||b&&(h=W(h,s[x],b)),h},{})})},[Je]),mt=l.useCallback(function(a){return Promise.all([Qe(a),f.validationSchema?Ee(a):{},f.validate?Xe(a):{}]).then(function(s){var u=s[0],d=s[1],h=s[2],b=Me.all([u,d,h],{arrayMerge:Pc});return b})},[f.validate,f.validationSchema,Qe,Xe,Ee]),L=R(function(a){return a===void 0&&(a=m.values),y({type:"SET_ISVALIDATING",payload:!0}),mt(a).then(function(s){return _.current&&(y({type:"SET_ISVALIDATING",payload:!1}),y({type:"SET_ERRORS",payload:s})),s})});l.useEffect(function(){c&&_.current===!0&&H(A.current,f.initialValues)&&L(A.current)},[c,L]);var ne=l.useCallback(function(a){var s=a&&a.values?a.values:A.current,u=a&&a.errors?a.errors:F.current?F.current:f.initialErrors||{},d=a&&a.touched?a.touched:M.current?M.current:f.initialTouched||{},h=a&&a.status?a.status:w.current?w.current:f.initialStatus;A.current=s,F.current=u,M.current=d,w.current=h;var b=function(){y({type:"RESET_FORM",payload:{isSubmitting:!!a&&!!a.isSubmitting,errors:u,touched:d,status:h,values:s,isValidating:!!a&&!!a.isValidating,submitCount:a&&a.submitCount&&typeof a.submitCount=="number"?a.submitCount:0}})};if(f.onReset){var x=f.onReset(m.values,ur);Fe(x)?x.then(b):b()}else b()},[f.initialErrors,f.initialStatus,f.initialTouched]);l.useEffect(function(){_.current===!0&&!H(A.current,f.initialValues)&&v&&(A.current=f.initialValues,ne(),c&&L(A.current))},[v,f.initialValues,ne,c,L]),l.useEffect(function(){v&&_.current===!0&&!H(F.current,f.initialErrors)&&(F.current=f.initialErrors||z,y({type:"SET_ERRORS",payload:f.initialErrors||z}))},[v,f.initialErrors]),l.useEffect(function(){v&&_.current===!0&&!H(M.current,f.initialTouched)&&(M.current=f.initialTouched||pe,y({type:"SET_TOUCHED",payload:f.initialTouched||pe}))},[v,f.initialTouched]),l.useEffect(function(){v&&_.current===!0&&!H(w.current,f.initialStatus)&&(w.current=f.initialStatus,y({type:"SET_STATUS",payload:f.initialStatus}))},[v,f.initialStatus,f.initialTouched]);var er=R(function(a){if(k.current[a]&&I(k.current[a].validate)){var s=O(m.values,a),u=k.current[a].validate(s);return Fe(u)?(y({type:"SET_ISVALIDATING",payload:!0}),u.then(function(d){return d}).then(function(d){y({type:"SET_FIELD_ERROR",payload:{field:a,value:d}}),y({type:"SET_ISVALIDATING",payload:!1})})):(y({type:"SET_FIELD_ERROR",payload:{field:a,value:u}}),Promise.resolve(u))}else if(f.validationSchema)return y({type:"SET_ISVALIDATING",payload:!0}),Ee(m.values,a).then(function(d){return d}).then(function(d){y({type:"SET_FIELD_ERROR",payload:{field:a,value:O(d,a)}}),y({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Tt=l.useCallback(function(a,s){var u=s.validate;k.current[a]={validate:u}},[]),St=l.useCallback(function(a){delete k.current[a]},[]),rr=R(function(a,s){y({type:"SET_TOUCHED",payload:a});var u=s===void 0?i:s;return u?L(m.values):Promise.resolve()}),tr=l.useCallback(function(a){y({type:"SET_ERRORS",payload:a})},[]),nr=R(function(a,s){var u=I(a)?a(m.values):a;y({type:"SET_VALUES",payload:u});var d=s===void 0?t:s;return d?L(u):Promise.resolve()}),de=l.useCallback(function(a,s){y({type:"SET_FIELD_ERROR",payload:{field:a,value:s}})},[]),J=R(function(a,s,u){y({type:"SET_FIELD_VALUE",payload:{field:a,value:s}});var d=u===void 0?t:u;return d?L(W(m.values,a,s)):Promise.resolve()}),ar=l.useCallback(function(a,s){var u=s,d=a,h;if(!Ie(a)){a.persist&&a.persist();var b=a.target?a.target:a.currentTarget,x=b.type,V=b.name,we=b.id,$e=b.value,Ot=b.checked,es=b.outerHTML,lr=b.options,It=b.multiple;u=s||V||we,d=/number|range/.test(x)?(h=parseFloat($e),isNaN(h)?"":h):/checkbox/.test(x)?kc(O(m.values,u),Ot,$e):lr&&It?Lc(lr):$e}u&&J(u,d)},[J,m.values]),je=R(function(a){if(Ie(a))return function(s){return ar(s,a)};ar(a)}),Q=R(function(a,s,u){s===void 0&&(s=!0),y({type:"SET_FIELD_TOUCHED",payload:{field:a,value:s}});var d=u===void 0?i:u;return d?L(m.values):Promise.resolve()}),ir=l.useCallback(function(a,s){a.persist&&a.persist();var u=a.target,d=u.name,h=u.id,b=u.outerHTML,x=s||d||h;Q(x,!0)},[Q]),_e=R(function(a){if(Ie(a))return function(s){return ir(s,a)};ir(a)}),or=l.useCallback(function(a){I(a)?y({type:"SET_FORMIK_STATE",payload:a}):y({type:"SET_FORMIK_STATE",payload:function(){return a}})},[]),cr=l.useCallback(function(a){y({type:"SET_STATUS",payload:a})},[]),sr=l.useCallback(function(a){y({type:"SET_ISSUBMITTING",payload:a})},[]),xe=R(function(){return y({type:"SUBMIT_ATTEMPT"}),L().then(function(a){var s=a instanceof Error,u=!s&&Object.keys(a).length===0;if(u){var d;try{if(d=jt(),d===void 0)return}catch(h){throw h}return Promise.resolve(d).then(function(h){return _.current&&y({type:"SUBMIT_SUCCESS"}),h}).catch(function(h){if(_.current)throw y({type:"SUBMIT_FAILURE"}),h})}else if(_.current&&(y({type:"SUBMIT_FAILURE"}),s))throw a})}),Et=R(function(a){a&&a.preventDefault&&I(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&I(a.stopPropagation)&&a.stopPropagation(),xe().catch(function(s){console.warn("Warning: An unhandled error was caught from submitForm()",s)})}),ur={resetForm:ne,validateForm:L,validateField:er,setErrors:tr,setFieldError:de,setFieldTouched:Q,setFieldValue:J,setStatus:cr,setSubmitting:sr,setTouched:rr,setValues:nr,setFormikState:or,submitForm:xe},jt=R(function(){return P(m.values,ur)}),_t=R(function(a){a&&a.preventDefault&&I(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&I(a.stopPropagation)&&a.stopPropagation(),ne()}),xt=l.useCallback(function(a){return{value:O(m.values,a),error:O(m.errors,a),touched:!!O(m.touched,a),initialValue:O(A.current,a),initialTouched:!!O(M.current,a),initialError:O(F.current,a)}},[m.errors,m.touched,m.values]),At=l.useCallback(function(a){return{setValue:function(u,d){return J(a,u,d)},setTouched:function(u,d){return Q(a,u,d)},setError:function(u){return de(a,u)}}},[J,Q,de]),wt=l.useCallback(function(a){var s=Te(a),u=s?a.name:a,d=O(m.values,u),h={name:u,value:d,onChange:je,onBlur:_e};if(s){var b=a.type,x=a.value,V=a.as,we=a.multiple;b==="checkbox"?x===void 0?h.checked=!!d:(h.checked=!!(Array.isArray(d)&&~d.indexOf(x)),h.value=x):b==="radio"?(h.checked=d===x,h.value=x):V==="select"&&we&&(h.value=h.value||[],h.multiple=!0)}return h},[_e,je,m.values]),Ae=l.useMemo(function(){return!H(A.current,m.values)},[A.current,m.values]),$t=l.useMemo(function(){return typeof p<"u"?Ae?m.errors&&Object.keys(m.errors).length===0:p!==!1&&I(p)?p(f):p:m.errors&&Object.keys(m.errors).length===0},[p,Ae,m.errors,f]),Ct=j({},m,{initialValues:A.current,initialErrors:F.current,initialTouched:M.current,initialStatus:w.current,handleBlur:_e,handleChange:je,handleReset:_t,handleSubmit:Et,resetForm:ne,setErrors:tr,setFormikState:or,setFieldTouched:Q,setFieldValue:J,setFieldError:de,setStatus:cr,setSubmitting:sr,setTouched:rr,setValues:nr,submitForm:xe,validateForm:L,validateField:er,isValid:$t,dirty:Ae,unregisterField:St,registerField:Tt,getFieldProps:wt,getFieldMeta:xt,getFieldHelpers:At,validateOnBlur:i,validateOnChange:t,validateOnMount:c});return Ct}function Fc(e){var r=Ic(e),t=e.component,n=e.children,i=e.render,o=e.innerRef;return l.useImperativeHandle(o,function(){return r}),l.createElement(wc,{value:r},t?l.createElement(t,r):i?i(r):n?I(n)?n(r):Cc(n)?null:l.Children.only(n):null)}function Mc(e){var r={};if(e.inner){if(e.inner.length===0)return W(r,e.path,e.message);for(var i=e.inner,t=Array.isArray(i),n=0,i=t?i:i[Symbol.iterator]();;){var o;if(t){if(n>=i.length)break;o=i[n++]}else{if(n=i.next(),n.done)break;o=n.value}var c=o;O(r,c.path)||(r=W(r,c.path,c.message))}}return r}function Rc(e,r,t,n){t===void 0&&(t=!1);var i=Ve(e);return r[t?"validateSync":"validate"](i,{abortEarly:!1,context:n||i})}function Ve(e){var r=Array.isArray(e)?[]:{};for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var n=String(t);Array.isArray(e[n])===!0?r[n]=e[n].map(function(i){return Array.isArray(i)===!0||pr(i)?Ve(i):i!==""?i:void 0}):pr(e[n])?r[n]=Ve(e[n]):r[n]=e[n]!==""?e[n]:void 0}return r}function Pc(e,r,t){var n=e.slice();return r.forEach(function(o,c){if(typeof n[c]>"u"){var p=t.clone!==!1,T=p&&t.isMergeableObject(o);n[c]=T?Me(Array.isArray(o)?[]:{},o,t):o}else t.isMergeableObject(o)?n[c]=Me(e[c],o,t):e.indexOf(o)===-1&&n.push(o)}),n}function Lc(e){return Array.from(e).filter(function(r){return r.selected}).map(function(r){return r.value})}function kc(e,r,t){if(typeof e=="boolean")return!!r;var n=[],i=!1,o=-1;if(Array.isArray(e))n=e,o=e.indexOf(t),i=o>=0;else if(!t||t=="true"||t=="false")return!!r;return r&&t&&!i?n.concat(t):i?n.slice(0,o).concat(n.slice(o+1)):n}var Dc=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?l.useLayoutEffect:l.useEffect;function R(e){var r=l.useRef(e);return Dc(function(){r.current=e}),l.useCallback(function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return r.current.apply(void 0,n)},[])}function Vc(e){var r=e.validate,t=e.name,n=e.render,i=e.children,o=e.as,c=e.component,p=ee(e,["validate","name","render","children","as","component"]),T=ht(),v=ee(T,["validate","validationSchema"]),P=v.registerField,C=v.unregisterField;l.useEffect(function(){return P(t,{validate:r}),function(){C(t)}},[P,C,t,r]);var f=v.getFieldProps(j({name:t},p)),A=v.getFieldMeta(t),F={field:f,form:v};if(n)return n(j({},F,{meta:A}));if(I(i))return i(j({},F,{meta:A}));if(c){if(typeof c=="string"){var M=p.innerRef,w=ee(p,["innerRef"]);return l.createElement(c,j({ref:M},f,w),i)}return l.createElement(c,j({field:f,form:v},p),i)}var _=o||"input";if(typeof _=="string"){var k=p.innerRef,Se=ee(p,["innerRef"]);return l.createElement(_,j({ref:k},f,Se),i)}return l.createElement(_,j({},f,p),i)}var vt=l.forwardRef(function(e,r){var t=e.action,n=ee(e,["action"]),i=t??"#",o=ht(),c=o.handleReset,p=o.handleSubmit;return l.createElement("form",j({onSubmit:p,ref:r,onReset:c,action:i},n))});vt.displayName="Form";const Nc=$(vt)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
  border: 2px solid rgba(var(--bg-primary), 1);
  background-color: transparent;
  border-radius: 4px;
  overflow: hidden;
  order: 3;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: rgba(var(--bg-primary), 0.7);
  }
  /* @media (width <= 576px) {
    display: none;
  } */
`,Uc=$.button`
  background-color: rgba(var(--bg-primary), 1);
  padding: 0;
  color: rgba(var(--text), 1);
  width: 36px;
  height: 36px;
  border: 0;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgba(var(--bg-primary), 0.7);
  }

  svg {
    width: 25px;
    height: 25px;
    fill: rgba(var(--text), 1);
  }
`,Bc=$.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`,zc=$(Vc)`
  display: inline-block;
  width: 100%;
  font: inherit;
  color: rgba(var(--text-primary), 0.7);
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  background-color: transparent;
  color-scheme: dark;

  &::placeholder {
    background-color: transparent;
    color: rgba(var(--text-primary), 0.7);
    font: inherit;
    font-size: 18px;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    outline: 3px solid black;
  }
`;function Hc(){const e=Rt(),r=({search:t},n)=>{if(t.trim()===""){Nt.error("Please enter a word to search for");return}e(`movies?query=${encodeURIComponent(t)}`),n.resetForm()};return g.jsx(Fc,{initialValues:{search:""},onSubmit:r,children:g.jsxs(Nc,{children:[g.jsx(Uc,{type:"submit",value:"submit",children:g.jsx(Dt,{})}),g.jsx(Bc,{htmlFor:"search"}),g.jsx(zc,{type:"text",id:"search",name:"search",placeholder:"Search"})]})})}function Gc(e){return Ne({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"}}]})(e)}function Wc(e){return Ne({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"}}]})(e)}const Kc=$.label`
  display: flex;
  align-items: center;
  justify-content: center;
  order: 2;
  cursor: pointer;
  user-select: none;

  svg {
    font-size: 30px;
    fill: rgba(var(--bg-primary), 1);
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  :hover svg {
    fill: rgba(var(--bg-primary), 0.7);
  }

  input {
    cursor: pointer;
    opacity: 0;
  }
`,bt=Pt`   
  0% {
    transform: rotate(-360deg) scale(0);
    opacity: 0;
  }

  75% {
    transform: rotate(25deg);
  }
`,Yc=$(Gc)`
  animation: ${bt} 0.5s;
`,Zc=$(Wc)`
  animation: ${bt} 0.5s;
`;function qc(){const[e,r]=l.useState(()=>{const n=window.matchMedia("(prefers-color-scheme: dark)").matches;return localStorage.getItem("theme")||(n?"dark":"light")});l.useEffect(()=>{localStorage.setItem("theme",e)},[e]),l.useEffect(()=>{const{body:n}=document;n.dataset.theme=e},[e]);const t=()=>{r(e==="light"?"dark":"light")};return g.jsxs(Kc,{className:"switcher",children:[g.jsx("input",{type:"checkbox",onChange:t,checked:e==="dark"}),e==="dark"?g.jsx(Yc,{}):g.jsx(Zc,{})]})}function Xc(){return g.jsx(Wt,{children:g.jsxs(Kt,{children:[g.jsx(Yt,{children:g.jsx(Lt,{to:"/",children:g.jsx(Gt,{})})}),g.jsx(Zt,{children:g.jsxs("ul",{children:[g.jsx("li",{children:g.jsx(fr,{to:"/",children:"Home"})}),g.jsx("li",{children:g.jsx(fr,{to:"/movies",children:"Movies"})})]})}),g.jsx(Hc,{}),g.jsx(qc,{}),g.jsx(qt,{type:"button",children:g.jsx(Vt,{})})]})})}const Jc=$.main``;function Qc(){return g.jsx(Jc,{children:g.jsx(Nr,{children:g.jsx(l.Suspense,{fallback:g.jsx(Ut,{}),children:g.jsx(kt,{})})})})}function is(){return g.jsxs(Bt,{children:[g.jsx(Xc,{}),g.jsx(Qc,{}),g.jsx(Ht,{})]})}export{is as default};
