"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[632,922],{7922:function(n,e,r){r.r(e),r.d(e,{default:function(){return s}});var t,i=r(1142),a=r(6759),o=r(3442).default.div(t||(t=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 25px;\n"]))),c=r(1447);var s=function(){return(0,c.jsx)(o,{children:(0,c.jsx)(i.Ll,{height:"40",width:"40",color:"#3b5998",ariaLabel:"bars-loading",wrapperStyle:{},wrapperClass:"",visible:!0})})}},3567:function(n,e,r){r.d(e,{Z:function(){return c}});var t,i=r(6759),a=r(3442).default.p(t||(t=(0,i.Z)(["\n  grid-row: 5 / 6;\n  grid-column: 1 / 4;\n  color: #3b5998;\n\n  @media (width <= 768px) {\n    grid-row: 6 / 7;\n    grid-column: 1 / 3;\n  }\n"]))),o=r(1447);var c=function(){return(0,o.jsx)(a,{children:"There is no information"})}},4632:function(n,e,r){r.r(e),r.d(e,{default:function(){return p}});var t,i=r(3446),a=r(9599),o=r(1426),c=r(479),s=r(6759),u=r(3442).default.ul(t||(t=(0,s.Z)(["\n  display: grid;\n  gap: 25px;\n  grid-row: 5 / 6;\n  grid-column: 1 / 4;\n  color: #3b5998;\n  text-align: justify;\n\n  h3 {\n    font-weight: 600;\n    margin-bottom: 10px;\n  }\n\n  p {\n    line-height: 1.2;\n  }\n\n  @media (width <= 768px) {\n    grid-row: 6 / 7;\n    grid-column: 1 / 3;\n  }\n"]))),d=r(4900),l=r(7922),f=r(3567),h=r(1447);var p=function(){var n=(0,o.UO)().id,e=(0,a.useState)([]),r=(0,i.Z)(e,2),t=r[0],s=r[1],p=(0,a.useState)(!0),g=(0,i.Z)(p,2),v=g[0],m=g[1];return(0,a.useEffect)((function(){n&&(0,d.Z)("movieReviews","","",n).then((function(n){s(n.results),m(!1)})).catch((function(n){c.Am.error("Error fetching data: ".concat(n.message)),m(!1)}))}),[n]),v?(0,h.jsx)(l.default,{}):Array.isArray(t)&&t.length>0?(0,h.jsx)(u,{children:t.map((function(n){var e=n.id,r=n.author,t=n.content;return(0,h.jsxs)("li",{children:[(0,h.jsxs)("h3",{children:[r,":"]}),(0,h.jsx)("p",{children:t})]},e)}))}):(0,h.jsx)(f.Z,{})}},4900:function(n,e,r){var t=r(9177),i=r(8351),a=r(2700),o=r(4666),c=r(479),s="https://api.themoviedb.org/3",u={api_key:"d1c21e798be8e69642bc9e5fdadcfaf6"};function d(){return(d=(0,a.Z)((0,t.Z)().mark((function n(e,r,a,d){var l,f,h,p;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l={trending:"/trending/movie/day",searchMovies:"/search/movie",movieDetails:"/movie/".concat(d),movieCredits:"/movie/".concat(d,"/credits"),movieReviews:"/movie/".concat(d,"/reviews")},f="".concat(s).concat(l[e]),h={searchParams:(0,i.Z)((0,i.Z)((0,i.Z)({},u),d?{}:{page:a}),r?{query:r,page:a}:{})},n.prev=3,n.next=6,o.ZP.get(f,h).json();case 6:return p=n.sent,n.abrupt("return",p);case 10:throw n.prev=10,n.t0=n.catch(3),c.Am.error("Error fetching data: ".concat(n.t0.message)),new Error("API request failed: ".concat(n.t0.message));case 14:case"end":return n.stop()}}),n,null,[[3,10]])})))).apply(this,arguments)}e.Z=function(n,e,r,t){return d.apply(this,arguments)}}}]);
//# sourceMappingURL=632.a2244607.chunk.js.map