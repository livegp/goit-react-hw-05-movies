import{s as n,j as e,G as m,L as E,r as i,N as T,c as I,O as R}from"./index-158127e4.js";import{I as A,A as H,a as P}from"./index.esm-13241870.js";import"./react-toastify.esm-9ca6db28.js";import Z from"./Loader-e61525c3.js";const $=n.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100%;
`,v=n.div`
  max-width: 1160px;
  padding: 25px 10px;
  margin: 0 auto;
`,W=n.footer`
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
`;function D(){return e.jsx(W,{children:e.jsx(v,{children:e.jsxs("p",{children:[" ","© 2023 Movies App. All rights reserved. Designed and Developed by"," ",e.jsx("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/oleksandr-pishta",children:"Oleksandr Pishta"})]})})})}const G=n.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: rgba(var(--accent), 1);
  transition: var(--trans);
`,K=n(v)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 100%;
  padding: 15px;
  gap: 25px;
`,V=n.button`
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
`;function q(){return e.jsx(V,{type:"button",children:e.jsx(A,{})})}function J(r){return m({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 20H20V22H12C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.2512 21.2561 16.3287 20.0007 18H17.2916C18.9525 16.5341 20 14.3894 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8C14 9.10457 13.1046 10 12 10ZM8 14C6.89543 14 6 13.1046 6 12C6 10.8954 6.89543 10 8 10C9.10457 10 10 10.8954 10 12C10 13.1046 9.10457 14 8 14ZM16 14C14.8954 14 14 13.1046 14 12C14 10.8954 14.8954 10 16 10C17.1046 10 18 10.8954 18 12C18 13.1046 17.1046 14 16 14ZM12 18C10.8954 18 10 17.1046 10 16C10 14.8954 10.8954 14 12 14C13.1046 14 14 14.8954 14 16C14 17.1046 13.1046 18 12 18Z"}}]})(r)}const Q=n.div`
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
`;function U(){return e.jsx(Q,{children:e.jsxs(E,{to:"/",children:[e.jsx(J,{}),e.jsx("p",{children:"Movies"})]})})}const X=n.label`
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
`;function Y(){const[r,a]=i.useState(!1),t=o=>{a(o.target.checked)};return e.jsxs(X,{htmlFor:"menu-check",children:[e.jsx("input",{id:"menu-check","aria-hidden":"true",type:"checkbox",checked:r,onChange:t}),e.jsx("span",{})]})}const _=n.nav`
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
`,C=n(T)`
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
`;function rr(){return e.jsx(_,{children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(C,{to:"/",children:"Home"})}),e.jsx("li",{children:e.jsx(C,{to:"/movies",children:"Movies"})})]})})}var er=!0;function tr(r,a){if(!er){if(r)return;var t="Warning: "+a;typeof console<"u"&&console.warn(t);try{throw Error(t)}catch{}}}function c(){return c=Object.assign||function(r){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r},c.apply(this,arguments)}function x(r,a){if(r==null)return{};var t={},o=Object.keys(r),s,l;for(l=0;l<o.length;l++)s=o[l],!(a.indexOf(s)>=0)&&(t[s]=r[s]);return t}var f=i.createContext(void 0);f.displayName="FormikContext";f.Provider;f.Consumer;function L(){var r=i.useContext(f);return r||tr(!1),r}var nr=function(a){return typeof a=="function"};function ar(r){var a=r.validate,t=r.name,o=r.render,s=r.children,l=r.as,p=r.component,g=r.className,d=x(r,["validate","name","render","children","as","component","className"]),M=L(),u=x(M,["validate","validationSchema"]),y=u.registerField,k=u.unregisterField;i.useEffect(function(){return y(t,{validate:a}),function(){k(t)}},[y,k,t,a]);var h=u.getFieldProps(c({name:t},d)),j=u.getFieldMeta(t),w={field:h,form:u};if(o)return o(c({},w,{meta:j}));if(nr(s))return s(c({},w,{meta:j}));if(p){if(typeof p=="string"){var z=d.innerRef,N=x(d,["innerRef"]);return i.createElement(p,c({ref:z},h,N,{className:g}),s)}return i.createElement(p,c({field:h,form:u},d,{className:g}),s)}var b=l||"input";if(typeof b=="string"){var B=d.innerRef,O=x(d,["innerRef"]);return i.createElement(b,c({ref:B},h,O,{className:g}),s)}return i.createElement(b,c({},h,d,{className:g}),s)}var F=i.forwardRef(function(r,a){var t=r.action,o=x(r,["action"]),s=t??"#",l=L(),p=l.handleReset,g=l.handleSubmit;return i.createElement("form",c({onSubmit:g,ref:a,onReset:p,action:s},o))});F.displayName="Form";n(F)`
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
`;n.button`
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
`;n.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;n(ar)`
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
`;const or=n.div`
  position: relative;
  width: ${r=>r.isSearching?300:40}px;
  height: 40px;
  background-color: transparent;
  border: 2px solid rgba(var(--bg-primary), 1);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding-left: 5px; */
  transition: all 0.25s ease;

  order: 3;
  display: flex;
  justify-content: flex-end;
`,ir=n.input`
  padding-left: 36px;
  border: none;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: transparent;
  outline: none;
  font-size: 16px;
  border: 1px solid transparent;

  &:focus {
    border-color: rgba(0, 0, 0, 0.3);
  }
`,sr=n.button`
  position: relative;
  height: 36px;
  width: 36px;
  border: none;
  z-index: 1;
  cursor: pointer;
  background-color: rgba(var(--bg-primary), 1);

  &:hover {
    background-color: rgba(var(--bg-primary), 0.7);

    &::after {
      opacity: 1;
      transform: scale(1);
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
`;function cr(){const[r,a]=i.useState(!1),t=()=>a(!r);return e.jsxs(or,{isSearching:r,children:[e.jsx(ir,{}),e.jsx(sr,{onClick:t,children:r?e.jsx(H,{size:25}):e.jsx(P,{size:25})})]})}function lr(r){return m({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"}}]})(r)}function dr(r){return m({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"}}]})(r)}const pr=n.label`
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
`,S=I`   
  0% {
    transform: rotate(-360deg) scale(0);
    opacity: 0;
  }

  75% {
    transform: rotate(25deg);
  }
`,gr=n(lr)`
  animation: ${S} 0.5s;
`,ur=n(dr)`
  animation: ${S} 0.5s;
`;function hr(){const[r,a]=i.useState(()=>{const o=window.matchMedia("(prefers-color-scheme: dark)").matches;return localStorage.getItem("theme")||(o?"dark":"light")});i.useEffect(()=>{localStorage.setItem("theme",r)},[r]),i.useEffect(()=>{const{body:o}=document;o.dataset.theme=r},[r]);const t=()=>{a(r==="light"?"dark":"light")};return e.jsxs(pr,{className:"switcher",children:[e.jsx("input",{type:"checkbox",onChange:t,checked:r==="dark"}),r==="dark"?e.jsx(gr,{}):e.jsx(ur,{})]})}function xr(){return e.jsx(G,{children:e.jsxs(K,{children:[e.jsx(U,{}),e.jsx(rr,{}),e.jsx(cr,{}),e.jsx(hr,{}),e.jsx(q,{}),e.jsx(Y,{})]})})}const fr=n.main``;function br(){return e.jsx(fr,{children:e.jsx(v,{children:e.jsx(i.Suspense,{fallback:e.jsx(Z,{}),children:e.jsx(R,{})})})})}function jr(){return e.jsxs($,{children:[e.jsx(xr,{}),e.jsx(br,{}),e.jsx(D,{})]})}export{jr as default};
