"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[21,922],{1155:function(n,t,e){e.d(t,{Z:function(){return b}});var r,a=e(1426),o=e(806),i=e(6759),c=e(3442),s=c.default.li(r||(r=(0,i.Z)(["\n  img {\n    width: 100%;\n    height: 100%;\n    border-radius: 4px;\n    box-shadow:\n      0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n      0px 1px 1px 0px rgba(0, 0, 0, 0.14),\n      0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n    object-fit: cover;\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    &:hover {\n      transform: scale(1.03);\n      cursor: pointer;\n    }\n  }\n"]))),u=e(1447);var l,p,d,f=function(n){var t=n.post,e=t.id,r=t.poster_path,i=t.title,c=(0,a.TH)(),l=r?"".concat("https://image.tmdb.org/t/p/w500").concat(r):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700";return(0,u.jsx)(s,{children:(0,u.jsx)(o.rU,{to:"/movies/".concat(e),state:{from:c},children:(0,u.jsx)("img",{src:l,width:250,alt:i,role:"presentation"})})})},x=c.default.ul(l||(l=(0,i.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(273px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),h=c.default.h1(p||(p=(0,i.Z)(["\n  color: #8b9dc3;\n  font-size: 20px;\n  font-weight: bold;\n  margin-bottom: 25px;\n"]))),g=c.default.button(d||(d=(0,i.Z)(["\n  display: flex;\n  margin: 25px auto 0;\n  padding: 8px 16px;\n  border-radius: 4px;\n  background-color: #3b5998;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  color: #dfe3ee;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  max-width: 180px;\n  box-shadow:\n    0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14),\n    0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  &:hover,\n  &:focus {\n    background-color: #dfe3ee;\n    color: #3b5998;\n  }\n"])));var m=function(n){var t=n.onLoadMore;return(0,u.jsx)(g,{onClick:t,children:"Load more"})},v=e(7922);var b=function(n){var t=n.results,e=n.title,r=n.loading,a=n.onLoadMore,o=n.total,i=Array.isArray(t)&&t.length>0;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(h,{children:e}),i&&(0,u.jsx)(x,{children:t.map((function(n){return(0,u.jsx)(f,{post:n},n.id)}))}),r&&(0,u.jsx)(v.default,{}),!r&&t.length<o&&(0,u.jsx)(m,{onLoadMore:a})]})}},7922:function(n,t,e){e.r(t),e.d(t,{default:function(){return s}});var r,a=e(1142),o=e(6759),i=e(3442).default.div(r||(r=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 25px;\n"]))),c=e(1447);var s=function(){return(0,c.jsx)(i,{children:(0,c.jsx)(a.Ll,{height:"40",width:"40",color:"#3b5998",ariaLabel:"bars-loading",wrapperStyle:{},wrapperClass:"",visible:!0})})}},5021:function(n,t,e){e.r(t);var r=e(3446),a=e(9599),o=e(1426),i=e(1155),c=e(642),s=e(1447);t.default=function(){var n=(0,a.useState)(null),t=(0,r.Z)(n,2),e=t[0],u=t[1],l=(0,o.TH)();(0,a.useEffect)((function(){var n=new URLSearchParams(l.search).get("query");null!==n&&u((function(t){return t!==n?n:t}))}),[l]);var p,d=(0,c.Z)("searchMovies",e,1),f=d.results,x=d.loading,h=d.total,g=d.handleLoadMore;return null!==e?(p='Nothing was found for the search query "'.concat(e,'".'),Array.isArray(f)&&f.length>0&&(p='You searched for "'.concat(e,'"'))):p="Enter a query to search",(0,s.jsx)(i.Z,{results:f,title:p,loading:x,onLoadMore:g,total:h})}},4900:function(n,t,e){var r=e(9177),a=e(8351),o=e(2700),i=e(4666),c=e(479),s="https://api.themoviedb.org/3",u={api_key:"d1c21e798be8e69642bc9e5fdadcfaf6"};function l(){return(l=(0,o.Z)((0,r.Z)().mark((function n(t,e,o,l){var p,d,f,x;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return p={trending:"/trending/movie/day",searchMovies:"/search/movie",movieDetails:"/movie/".concat(l),movieCredits:"/movie/".concat(l,"/credits"),movieReviews:"/movie/".concat(l,"/reviews")},d="".concat(s).concat(p[t]),f={searchParams:(0,a.Z)((0,a.Z)((0,a.Z)({},u),l?{}:{page:o}),e?{query:e,page:o}:{})},n.prev=3,n.next=6,i.ZP.get(d,f).json();case 6:return x=n.sent,n.abrupt("return",x);case 10:throw n.prev=10,n.t0=n.catch(3),c.Am.error("Error fetching data: ".concat(n.t0.message)),new Error("API request failed: ".concat(n.t0.message));case 14:case"end":return n.stop()}}),n,null,[[3,10]])})))).apply(this,arguments)}t.Z=function(n,t,e,r){return l.apply(this,arguments)}},642:function(n,t,e){var r=e(2925),a=e(3446),o=e(9599),i=e(479),c=e(4900);t.Z=function(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,s=(0,o.useState)([]),u=(0,a.Z)(s,2),l=u[0],p=u[1],d=(0,o.useState)(e),f=(0,a.Z)(d,2),x=f[0],h=f[1],g=(0,o.useState)(0),m=(0,a.Z)(g,2),v=m[0],b=m[1],Z=(0,o.useState)(!1),w=(0,a.Z)(Z,2),y=w[0],j=w[1],_=(0,o.useState)(t),L=(0,a.Z)(_,2),k=L[0],A=L[1];return(0,o.useEffect)((function(){k!==t&&(h(1),p([]),A(t)),j(!0),(0,c.Z)(n,k,x).then((function(n){b(n.total_results),p((function(t){return 1===x?n.results:[].concat((0,r.Z)(t),(0,r.Z)(n.results))})),j(!1)})).catch((function(n){i.Am.error("Error fetching data: ".concat(n.message)),j(!1)}))}),[t,x,k]),{results:l,loading:y,total:v,handleLoadMore:function(){h((function(n){return n+1}))}}}}}]);
//# sourceMappingURL=21.24ea6223.chunk.js.map