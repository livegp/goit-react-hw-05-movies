"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[167,422],{7167:function(e,n,r){r.r(n),r.d(n,{default:function(){return p}});var t,a=r(3446),i=r(3526),c=r(1100),o=r(448),u=r(6759),s=r(3930).default.ul(t||(t=(0,u.Z)(["\n  grid-row: 5 / 6;\n  grid-column: 1 / 4;\n  color: #3b5998;\n  column-count: 6;\n  column-gap: 25px;\n  column-rule: 1px solid #dfe3ee;\n\n  li {\n    line-height: 1.2;\n  }\n"]))),l=r(7536),d=r(9422),f=r(3772),h=r(6568);var p=function(){var e=(0,c.UO)().id,n=(0,i.useState)([]),r=(0,a.Z)(n,2),t=r[0],u=r[1],p=(0,i.useState)(!0),v=(0,a.Z)(p,2),m=v[0],g=v[1];return(0,i.useEffect)((function(){e&&(0,l.Z)("movieCredits","","",e).then((function(e){u(e.cast),g(!1)})).catch((function(e){o.Am.error("Error fetching data: ".concat(e.message)),g(!1)}))}),[e]),m?(0,h.jsx)(d.default,{}):Array.isArray(t)&&t.length>0?(0,h.jsx)(s,{children:t.map((function(e){var n=e.id,r=e.name;return(0,h.jsx)("li",{children:r},n)}))}):(0,h.jsx)(f.Z,{})}},9422:function(e,n,r){r.r(n),r.d(n,{default:function(){return u}});var t,a=r(7310),i=r(6759),c=r(3930).default.div(t||(t=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 25px;\n"]))),o=r(6568);var u=function(){return(0,o.jsx)(c,{children:(0,o.jsx)(a.Ll,{height:"40",width:"40",color:"#3b5998",ariaLabel:"bars-loading",wrapperStyle:{},wrapperClass:"",visible:!0})})}},3772:function(e,n,r){r.d(n,{Z:function(){return o}});var t,a=r(6759),i=r(3930).default.p(t||(t=(0,a.Z)(["\n  grid-row: 5 / 6;\n  grid-column: 1 / 4;\n  color: #3b5998;\n"]))),c=r(6568);var o=function(){return(0,c.jsx)(i,{children:"There is no information"})}},7536:function(e,n,r){var t=r(9177),a=r(8351),i=r(2700),c=r(153),o=r(448),u="https://api.themoviedb.org/3",s={api_key:"d1c21e798be8e69642bc9e5fdadcfaf6"};function l(){return(l=(0,i.Z)((0,t.Z)().mark((function e(n,r,i,l){var d,f,h,p;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d={trending:"/trending/movie/day",searchMovies:"/search/movie",movieDetails:"/movie/".concat(l),movieCredits:"/movie/".concat(l,"/credits"),movieReviews:"/movie/".concat(l,"/reviews")},f="".concat(u).concat(d[n]),h={searchParams:(0,a.Z)((0,a.Z)((0,a.Z)({},s),l?{}:{page:i}),r?{query:r,page:i}:{})},e.prev=3,e.next=6,c.ZP.get(f,h).json();case 6:return p=e.sent,e.abrupt("return",p);case 10:throw e.prev=10,e.t0=e.catch(3),o.Am.error("Error fetching data: ".concat(e.t0.message)),new Error("API request failed: ".concat(e.t0.message));case 14:case"end":return e.stop()}}),e,null,[[3,10]])})))).apply(this,arguments)}n.Z=function(e,n,r,t){return l.apply(this,arguments)}}}]);
//# sourceMappingURL=167.d4827e6b.chunk.js.map