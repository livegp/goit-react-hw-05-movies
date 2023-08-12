"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[662,922],{7922:function(n,e,r){r.r(e),r.d(e,{default:function(){return d}});var t,i=r(1142),o=r(6759),a=r(3442).default.div(t||(t=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 25px;\n"]))),c=r(1447);var d=function(){return(0,c.jsx)(a,{children:(0,c.jsx)(i.Ll,{height:"40",width:"40",color:"#3b5998",ariaLabel:"bars-loading",wrapperStyle:{},wrapperClass:"",visible:!0})})}},9662:function(n,e,r){r.r(e),r.d(e,{default:function(){return F}});var t,i,o,a,c,d,l,s,u,p,f=r(3446),g=r(9599),x=r(2272),h=r(1426),m=r(479),v=r(6759),w=r(806),b=r(3442),j=b.default.div(t||(t=(0,v.Z)(["\n  display: grid;\n  grid-template: auto auto 1fr auto auto / 1fr 3fr auto;\n  gap: 25px;\n  height: 100%;\n  font-size: 16px;\n\n  @media (width <= 768px) {\n    grid-template: auto auto auto auto auto auto auto / 1fr auto;\n  }\n"]))),Z=b.default.img(i||(i=(0,v.Z)(["\n  width: 100%;\n  height: 100%;\n  grid-row: 1 / 4;\n  grid-column: 1 / 2;\n  border-radius: 4px;\n  box-shadow:\n    0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14),\n    0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  object-fit: cover;\n\n  @media (width <= 768px) {\n    grid-row: 1 / 2;\n    grid-column: 1 / 3;\n  }\n"]))),y=b.default.h1(o||(o=(0,v.Z)(["\n  color: #3b5998;\n  font-size: 20px;\n  font-weight: bold;\n  grid-row: 1 / 2;\n  grid-column: 2 / 4;\n\n  @media (width <= 768px) {\n    grid-row: 2 / 3;\n    grid-column: 1 / 3;\n  }\n"]))),k=b.default.p(a||(a=(0,v.Z)(["\n  color: #3b5998;\n  grid-row: 2 / 3;\n  grid-column: 2 / 3;\n\n  @media (width <= 768px) {\n    grid-row: 3 / 4;\n    grid-column: 1 / 2;\n  }\n"]))),_=b.default.p(c||(c=(0,v.Z)(["\n  display: flex;\n  color: #3b5998;\n  grid-row: 2 / 3;\n  grid-column: 3 / 4;\n\n  @media (width <= 768px) {\n    grid-row: 3 / 4;\n    grid-column: 2 / 3;\n  }\n"]))),C=b.default.p(d||(d=(0,v.Z)(["\n  color: #3b5998;\n  text-align: justify;\n  line-height: 1.2;\n  grid-row: 3 / 4;\n  grid-column: 2 / 4;\n\n  @media (width <= 768px) {\n    grid-row: 4 / 5;\n    grid-column: 1 / 3;\n  }\n"]))),z=b.default.ul(l||(l=(0,v.Z)(["\n  color: #3b5998;\n  grid-row: 4 / 5;\n  grid-column: 1 / 2;\n  display: flex;\n  gap: 25px;\n  justify-content: space-between;\n\n  li {\n    width: 100%;\n  }\n\n  @media (width <= 768px) {\n    grid-row: 5 / 6;\n    grid-column: 1 / 3;\n  }\n"]))),A=(0,b.default)(w.OL)(s||(s=(0,v.Z)(["\n  text-align: center;\n  background-color: #dfe3ee;\n  color: #3b5998;\n  border-radius: 4px;\n  padding: 5px 10px;\n  display: block;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    background-color: #3b5998;\n    color: #dfe3ee;\n\n    &.active {\n      color: #f7f7f7;\n    }\n  }\n\n  &.active {\n    background-color: #3b5998;\n    color: #dfe3ee;\n  }\n"]))),E=r(4900),S=r(285),U=(0,b.default)(w.rU)(u||(u=(0,v.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  margin-bottom: 25px;\n  color: black;\n  text-decoration: none;\n  font-weight: bold;\n  text-transform: uppercase;\n  color: #8b9dc3;\n\n  :hover {\n    color: #3b5998;\n  }\n"]))),q=b.default.div(p||(p=(0,v.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n"]))),D=r(1447);var L=function(n){var e=n.to;return(0,D.jsx)(U,{to:e,children:(0,D.jsxs)(q,{children:[(0,D.jsx)(S.dUf,{size:"24"}),(0,D.jsx)("p",{children:"Back"})]})})},P=r(7922);var R=function(){var n,e,r=(0,h.UO)().id,t=(0,g.useState)(null),i=(0,f.Z)(t,2),o=i[0],a=i[1],c=(0,g.useState)(!1),d=(0,f.Z)(c,2),l=d[0],s=d[1],u=(0,h.TH)(),p=(0,g.useRef)(null!==(n=null===(e=u.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");if((0,g.useEffect)((function(){r&&(s(!0),(0,E.Z)("movieDetails","","",r).then((function(n){a(n),s(!1)})).catch((function(n){m.Am.error("Error fetching data: ".concat(n.message)),s(!1)})))}),[r]),!r)return null;if(l)return(0,D.jsx)(P.default,{});if(!o)return null;var v=o.title,w=o.genres,b=o.vote_average,S=o.overview,U=o.poster_path,q=U?"".concat("https://image.tmdb.org/t/p/w500").concat(U):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700";return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(L,{to:p.current}),(0,D.jsxs)(j,{children:[(0,D.jsx)(Z,{src:q,alt:v}),(0,D.jsx)(y,{children:v}),(0,D.jsx)(k,{children:w.map((function(n){return n.name})).join(", ")}),(0,D.jsxs)(_,{children:[(0,D.jsx)(x.pHD,{})," ",b.toFixed(1)]}),(0,D.jsx)(C,{children:S}),(0,D.jsxs)(z,{children:[(0,D.jsx)("li",{children:(0,D.jsx)(A,{to:"cast",children:"Cast"})}),(0,D.jsx)("li",{children:(0,D.jsx)(A,{to:"reviews",children:"Reviews"})})]}),(0,D.jsx)(g.Suspense,{fallback:(0,D.jsx)(P.default,{}),children:(0,D.jsx)(h.j3,{})})]})]})};var F=function(){return(0,D.jsx)(R,{})}},4900:function(n,e,r){var t=r(9177),i=r(8351),o=r(2700),a=r(4666),c=r(479),d="https://api.themoviedb.org/3",l={api_key:"d1c21e798be8e69642bc9e5fdadcfaf6"};function s(){return(s=(0,o.Z)((0,t.Z)().mark((function n(e,r,o,s){var u,p,f,g;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u={trending:"/trending/movie/day",searchMovies:"/search/movie",movieDetails:"/movie/".concat(s),movieCredits:"/movie/".concat(s,"/credits"),movieReviews:"/movie/".concat(s,"/reviews")},p="".concat(d).concat(u[e]),f={searchParams:(0,i.Z)((0,i.Z)((0,i.Z)({},l),s?{}:{page:o}),r?{query:r,page:o}:{})},n.prev=3,n.next=6,a.ZP.get(p,f).json();case 6:return g=n.sent,n.abrupt("return",g);case 10:throw n.prev=10,n.t0=n.catch(3),c.Am.error("Error fetching data: ".concat(n.t0.message)),new Error("API request failed: ".concat(n.t0.message));case 14:case"end":return n.stop()}}),n,null,[[3,10]])})))).apply(this,arguments)}e.Z=function(n,e,r,t){return s.apply(this,arguments)}}}]);
//# sourceMappingURL=662.6b8bf6d3.chunk.js.map