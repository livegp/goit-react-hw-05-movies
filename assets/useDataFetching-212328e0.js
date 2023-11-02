import{s as g,P as e,a as L,j as r,L as T,T as S,C as E,r as p}from"./index-cc00a240.js";import P from"./Loader-30f54913.js";import{Q as _}from"./react-toastify.esm-1e8011a6.js";import{f as k}from"./fetch-07069c81.js";const v=g.li`
  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    box-shadow:
      0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14),
      0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    object-fit: cover;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      transform: scale(1.03);
      cursor: pointer;
    }
  }
`,w="https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700";function f({post:t}){const{id:s,poster_path:i,title:l}=t,c=L(),n=i?`https://image.tmdb.org/t/p/w500${i}`:w;return r.jsx(v,{children:r.jsx(T,{to:`/movies/${s}`,state:{from:c},children:r.jsx("img",{src:n,width:250,alt:l,role:"presentation"})})})}f.propTypes={post:e.shape({id:e.number.isRequired,poster_path:e.string,title:e.string.isRequired}).isRequired};const C=g.button`
  display: flex;
  margin: 25px auto 0;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: #3b5998;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  color: #dfe3ee;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  max-width: 180px;
  box-shadow:
    0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    background-color: #dfe3ee;
    color: #3b5998;
  }
`;function h({onLoadMore:t}){return r.jsx(C,{onClick:t,children:"Load more"})}h.propTypes={onLoadMore:e.func.isRequired};function $({results:t,title:s,loading:i,onLoadMore:l,total:c}){const a=Array.isArray(t)&&t.length>0;return r.jsxs(r.Fragment,{children:[r.jsx(S,{children:s}),a&&r.jsx(E,{children:t.map(n=>r.jsx(f,{post:n},n.id))}),i&&r.jsx(P,{}),!i&&t.length<c&&r.jsx(h,{onLoadMore:l})]})}$.propTypes={results:e.arrayOf(e.shape({id:e.number.isRequired,poster_path:e.string,title:e.string.isRequired}).isRequired).isRequired,title:e.string.isRequired,loading:e.bool.isRequired,onLoadMore:e.func.isRequired,total:e.number.isRequired};const O=(t,s,i=1)=>{const[l,c]=p.useState([]),[a,n]=p.useState(i),[m,b]=p.useState(0),[R,d]=p.useState(!1),[u,j]=p.useState(s),x=p.useCallback(()=>{d(!0),k(t,u,a).then(o=>(b(o.total_results),c(y=>a===1?o.results:[...y,...o.results]),d(!1),o)).catch(o=>{_.error(`Error fetching data: ${o.message}`),d(!1)})},[t,u,a]),q=()=>{n(o=>o+1)};return p.useEffect(()=>{u!==s&&(n(1),c([]),j(s)),x()},[s,a,u,x]),{results:l,loading:R,total:m,handleLoadMore:q}};export{$ as G,O as u};
