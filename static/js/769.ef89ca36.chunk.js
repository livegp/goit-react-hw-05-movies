"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[769,922],{7922:function(n,e,r){r.r(e),r.d(e,{default:function(){return l}});var o,i=r(1142),t=r(6759),a=r(3442).default.div(o||(o=(0,t.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 25px;\n"]))),d=r(1447);var l=function(){return(0,d.jsx)(a,{children:(0,d.jsx)(i.Ll,{height:"40",width:"40",color:"#3b5998",ariaLabel:"bars-loading",wrapperStyle:{},wrapperClass:"",visible:!0})})}},9769:function(n,e,r){r.r(e),r.d(e,{default:function(){return N}});var o,i,t,a,d,l,s,c,p,f,h,u,x,b,g=r(9599),m=r(285),v=r(3097),k=r(7378),w=r(7770),j=r(6759),y=r(3442),Z=y.default.div(o||(o=(0,j.Z)(["\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n"]))),_=y.default.div(i||(i=(0,j.Z)(["\n  max-width: 1160px;\n  padding: 25px 10px;\n  margin: 0 auto;\n"]))),z=y.default.header(t||(t=(0,j.Z)(["\n  position: sticky;\n  top: 0;\n  background-color: #3b5998;\n  z-index: 10;\n\n  .header .menu-btn:checked ~ .nav {\n    position: absolute;\n    top: -50%;\n    /* left: -50%; */\n    transform: translate(-50%, 50vh);\n  }\n\n  .header .menu-btn:checked ~ .header__login-btn {\n    transform: translateY(0);\n  }\n\n  .header .menu-icon {\n    cursor: pointer;\n    position: relative;\n    user-select: none;\n    display: none;\n    background: #ffecb3;\n    border-radius: 4px;\n    padding: 16px;\n    order: 5;\n  }\n\n  .header .menu-icon .nav-icon {\n    background: #333;\n    display: block;\n    height: 2px;\n    position: relative;\n    transition: background 0.2s ease-out;\n    width: 18px;\n  }\n\n  .header .menu-icon .nav-icon:before,\n  .header .menu-icon .nav-icon:after {\n    background: #333;\n    content: '';\n    display: block;\n    height: 100%;\n    position: absolute;\n    transition: all 0.2s ease-out;\n    width: 100%;\n  }\n\n  .header .menu-icon .nav-icon:before {\n    top: 5px;\n  }\n\n  .header .menu-icon .nav-icon:after {\n    top: -5px;\n  }\n\n  .header .menu-btn {\n    display: none;\n    order: 6;\n  }\n\n  .header .menu-btn:checked ~ .menu-icon .nav-icon {\n    background: transparent;\n  }\n\n  .header .menu-btn:checked ~ .menu-icon .nav-icon:before {\n    transform: rotate(-45deg);\n    top: 0;\n  }\n\n  .header .menu-btn:checked ~ .menu-icon .nav-icon:after {\n    transform: rotate(45deg);\n    top: 0;\n  }\n"]))),C=y.default.div(a||(a=(0,j.Z)(["\n  max-width: 1160px;\n  padding: 25px 10px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  height: 100%;\n  padding: 15px;\n  gap: 5px;\n"]))),S=y.default.div(d||(d=(0,j.Z)(["\n  order: 1;\n  flex-grow: 0;\n  margin-right: 30px;\n\n  svg {\n    display: block;\n    width: 40px;\n    height: 40px;\n    fill: #dfe3ee;\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n\n  &:hover {\n    svg {\n      fill: #f7f7f7;\n    }\n  }\n"]))),A=y.default.nav(l||(l=(0,j.Z)(["\n  display: block;\n  margin-top: 0;\n  position: static;\n  order: 2;\n  flex-grow: 1;\n\n  ul {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n    flex-wrap: nowrap;\n    height: 100%;\n    gap: 5px;\n  }\n"]))),L=(0,y.default)(k.OL)(s||(s=(0,j.Z)(["\n  display: block;\n  background-color: transparent;\n  border-radius: 4px;\n  border: 2px solid transparent;\n  padding: 8px;\n  order: 0;\n  color: #dfe3ee;\n  font-size: 20px;\n  font-weight: bold;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    color: #f7f7f7;\n    border: 2px solid #f7f7f7;\n\n    &.active {\n      background-color: #f7f7f7;\n      border: 2px solid #f7f7f7;\n    }\n  }\n\n  &.active {\n    background-color: #dfe3ee;\n    color: #3b5998;\n  }\n  /* @media (width <= 576px) {\n    display: none;\n  } */\n"]))),M=y.default.button(c||(c=(0,j.Z)(["\n  order: 5;\n  margin-top: 0;\n  background: transparent;\n  border-width: 0;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  display: block;\n  flex-basis: auto;\n  align-items: center;\n\n  svg {\n    display: block;\n    width: 40px;\n    height: 40px;\n    stroke: #dfe3ee;\n  }\n\n  &:hover {\n    svg {\n      stroke: #f7f7f7;\n    }\n  }\n\n  @media (width <= 576px) {\n    display: none;\n  }\n"]))),D=y.default.main(p||(p=(0,j.Z)(["\n  flex-grow: 1;\n  background-color: #f7f7f7;\n"]))),F=y.default.footer(f||(f=(0,j.Z)(["\n  color: #dfe3ee;\n  background-color: #3b5998;\n\n  a {\n    color: #dfe3ee;\n\n    &:hover {\n      color: #f7f7f7;\n    }\n  }\n"]))),H=r(7922),I=r(1761),O=r(2272),P=r(479),R=(0,y.default)(I.l0)(h||(h=(0,j.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 300px;\n  border: 2px solid #dfe3ee;\n  background-color: transparent;\n  border-radius: 4px;\n  overflow: hidden;\n  order: 3;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    border-color: #f7f7f7;\n  }\n  /* @media (width <= 576px) {\n    display: none;\n  } */\n"]))),U=y.default.button(u||(u=(0,j.Z)(["\n  background-color: #dfe3ee;\n  padding: 0;\n  color: #3b5998;\n  width: 36px;\n  height: 36px;\n  border: 0;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  border-right: 2px solid #dfe3ee;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &:hover {\n    background-color: #f7f7f7;\n  }\n\n  svg {\n    width: 25px;\n    height: 25px;\n    fill: #3b5998;\n  }\n"]))),q=y.default.label(x||(x=(0,j.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),B=(0,y.default)(I.gN)(b||(b=(0,j.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  color: #dfe3ee;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  background-color: transparent;\n  color-scheme: dark;\n\n  &::placeholder {\n    background-color: transparent;\n    color: #dfe3ee;\n    font: inherit;\n    font-size: 18px;\n  }\n\n  input:-webkit-autofill,\n  input:-webkit-autofill:hover,\n  input:-webkit-autofill:focus {\n    outline: 3px solid black;\n  }\n"]))),G=r(1447);var J=function(){var n=(0,w.s0)();return(0,G.jsx)(I.J9,{initialValues:{search:""},onSubmit:function(e,r){var o=e.search;""!==o.trim()?(n("movies?query=".concat(encodeURIComponent(o))),r.resetForm()):P.Am.error("Please enter a word to search for")},children:(0,G.jsxs)(R,{children:[(0,G.jsx)(U,{type:"submit",value:"submit",children:(0,G.jsx)(O.RB5,{})}),(0,G.jsx)(q,{htmlFor:"search"}),(0,G.jsx)(B,{type:"text",id:"search",name:"search",placeholder:"Search"})]})})};var N=function(){return(0,G.jsxs)(Z,{children:[(0,G.jsx)(z,{children:(0,G.jsxs)(C,{children:[(0,G.jsx)(S,{children:(0,G.jsx)(k.rU,{to:"/",children:(0,G.jsx)(v.MGh,{})})}),(0,G.jsx)(A,{children:(0,G.jsxs)("ul",{children:[(0,G.jsx)("li",{children:(0,G.jsx)(L,{to:"/",children:"Home"})}),(0,G.jsx)("li",{children:(0,G.jsx)(L,{to:"/movies",children:"Movies"})})]})}),(0,G.jsx)(J,{}),(0,G.jsx)(M,{type:"button",children:(0,G.jsx)(m.HfI,{})})]})}),(0,G.jsx)(D,{children:(0,G.jsx)(_,{children:(0,G.jsx)(g.Suspense,{fallback:(0,G.jsx)(H.default,{}),children:(0,G.jsx)(w.j3,{})})})}),(0,G.jsx)(F,{children:(0,G.jsx)(_,{children:(0,G.jsxs)("p",{children:[" ","\xa9 2023 Movies App. All rights reserved. Designed and Developed by"," ",(0,G.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/oleksandr-pishta",children:"Oleksandr Pishta"})]})})})]})}}}]);
//# sourceMappingURL=769.ef89ca36.chunk.js.map