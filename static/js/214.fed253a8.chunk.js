"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[214,922],{1155:function(n,t,e){e.d(t,{Z:function(){return b}});var r,o=e(1426),a=e(806),i=e(6759),c=e(3442),s=c.default.li(r||(r=(0,i.Z)(["\n  img {\n    width: 100%;\n    height: 100%;\n    border-radius: 4px;\n    box-shadow:\n      0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n      0px 1px 1px 0px rgba(0, 0, 0, 0.14),\n      0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n    object-fit: cover;\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    &:hover {\n      transform: scale(1.03);\n      cursor: pointer;\n    }\n  }\n"]))),l=e(1447);var u,p,d,f=function(n){var t=n.post,e=t.id,r=t.poster_path,i=t.title,c=(0,o.TH)(),u=r?"".concat("https://image.tmdb.org/t/p/w500").concat(r):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700";return(0,l.jsx)(s,{children:(0,l.jsx)(a.rU,{to:"/movies/".concat(e),state:{from:c},children:(0,l.jsx)("img",{src:u,width:250,alt:i,role:"presentation"})})})},x=c.default.ul(u||(u=(0,i.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(273px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),g=c.default.h1(p||(p=(0,i.Z)(["\n  color: #8b9dc3;\n  font-size: 20px;\n  font-weight: bold;\n  margin-bottom: 25px;\n"]))),h=c.default.button(d||(d=(0,i.Z)(["\n  display: flex;\n  margin: 25px auto 0;\n  padding: 8px 16px;\n  border-radius: 4px;\n  background-color: #3b5998;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  color: #dfe3ee;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  max-width: 180px;\n  box-shadow:\n    0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14),\n    0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  &:hover,\n  &:focus {\n    background-color: #dfe3ee;\n    color: #3b5998;\n  }\n"])));var m=function(n){var t=n.onLoadMore;return(0,l.jsx)(h,{onClick:t,children:"Load more"})},v=e(7922);var b=function(n){var t=n.results,e=n.title,r=n.loading,o=n.onLoadMore,a=n.total,i=Array.isArray(t)&&t.length>0;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g,{children:e}),i&&(0,l.jsx)(x,{children:t.map((function(n){return(0,l.jsx)(f,{post:n},n.id)}))}),r&&(0,l.jsx)(v.default,{}),!r&&t.length<a&&(0,l.jsx)(m,{onLoadMore:o})]})}},7922:function(n,t,e){e.r(t),e.d(t,{default:function(){return s}});var r,o=e(1142),a=e(6759),i=e(3442).default.div(r||(r=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 25px;\n"]))),c=e(1447);var s=function(){return(0,c.jsx)(i,{children:(0,c.jsx)(o.Ll,{height:"40",width:"40",color:"#3b5998",ariaLabel:"bars-loading",wrapperStyle:{},wrapperClass:"",visible:!0})})}},6214:function(n,t,e){e.r(t);var r=e(1155),o=e(642),a=e(1447);t.default=function(){var n=(0,o.Z)("trending","",1),t=n.results,e=n.loading,i=n.total,c=n.handleLoadMore;return(0,a.jsx)(r.Z,{results:t,title:"In trend",loading:e,onLoadMore:c,total:i})}},4900:function(n,t,e){var r=e(9177),o=e(8351),a=e(2700),i=e(4666),c=e(479),s="https://api.themoviedb.org/3",l={api_key:"d1c21e798be8e69642bc9e5fdadcfaf6"};function u(){return(u=(0,a.Z)((0,r.Z)().mark((function n(t,e,a,u){var p,d,f,x;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return p={trending:"/trending/movie/day",searchMovies:"/search/movie",movieDetails:"/movie/".concat(u),movieCredits:"/movie/".concat(u,"/credits"),movieReviews:"/movie/".concat(u,"/reviews")},d="".concat(s).concat(p[t]),f={searchParams:(0,o.Z)((0,o.Z)((0,o.Z)({},l),u?{}:{page:a}),e?{query:e,page:a}:{})},n.prev=3,n.next=6,i.ZP.get(d,f).json();case 6:return x=n.sent,n.abrupt("return",x);case 10:throw n.prev=10,n.t0=n.catch(3),c.Am.error("Error fetching data: ".concat(n.t0.message)),new Error("API request failed: ".concat(n.t0.message));case 14:case"end":return n.stop()}}),n,null,[[3,10]])})))).apply(this,arguments)}t.Z=function(n,t,e,r){return u.apply(this,arguments)}},642:function(n,t,e){var r=e(2925),o=e(3446),a=e(9599),i=e(479),c=e(4900);t.Z=function(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,s=(0,a.useState)([]),l=(0,o.Z)(s,2),u=l[0],p=l[1],d=(0,a.useState)(e),f=(0,o.Z)(d,2),x=f[0],g=f[1],h=(0,a.useState)(0),m=(0,o.Z)(h,2),v=m[0],b=m[1],Z=(0,a.useState)(!1),w=(0,o.Z)(Z,2),j=w[0],y=w[1],_=(0,a.useState)(t),k=(0,o.Z)(_,2),L=k[0],M=k[1];return(0,a.useEffect)((function(){L!==t&&(g(1),p([]),M(t)),y(!0),(0,c.Z)(n,L,x).then((function(n){b(n.total_results),p((function(t){return 1===x?n.results:[].concat((0,r.Z)(t),(0,r.Z)(n.results))})),y(!1)})).catch((function(n){i.Am.error("Error fetching data: ".concat(n.message)),y(!1)}))}),[t,x,L]),{results:u,loading:j,total:v,handleLoadMore:function(){g((function(n){return n+1}))}}}}}]);
//# sourceMappingURL=214.fed253a8.chunk.js.map