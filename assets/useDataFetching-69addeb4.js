import{s as g,P as t,a as L,j as r,L as T,T as v,C as S,r as p}from"./index-55b2e1f9.js";import E from"./Loader-60b357a7.js";import{Q as P}from"./react-toastify.esm-79e6af07.js";import{f as _}from"./fetch-7525b344.js";const k=g.li`
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
`,w="https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700";function h({post:e}){const{id:s,poster_path:i,title:l}=e,c=L(),n=i?`https://image.tmdb.org/t/p/w500${i}`:w;return r.jsx(k,{children:r.jsx(T,{to:`/movies/${s}`,state:{from:c},children:r.jsx("img",{src:n,width:250,alt:l,role:"presentation"})})})}h.propTypes={post:t.shape({id:t.number.isRequired,poster_path:t.string,title:t.string.isRequired}).isRequired};const C=g.button`
  display: flex;
  margin: 25px auto 0;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: rgba(var(--accent), 1);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  color: rgba(var(--text-primary), 1);
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
    color: rgba(var(--accent), 1);
  }
`;function m({onLoadMore:e}){return r.jsx(C,{onClick:e,children:"Load more"})}m.propTypes={onLoadMore:t.func.isRequired};function $({results:e,title:s,loading:i,onLoadMore:l,total:c}){const a=Array.isArray(e)&&e.length>0;return r.jsxs(r.Fragment,{children:[r.jsx(v,{children:s}),a&&r.jsx(S,{children:e.map(n=>r.jsx(h,{post:n},n.id))}),i&&r.jsx(E,{}),!i&&e.length<c&&r.jsx(m,{onLoadMore:l})]})}$.propTypes={results:t.arrayOf(t.shape({id:t.number.isRequired,poster_path:t.string,title:t.string.isRequired}).isRequired).isRequired,title:t.string.isRequired,loading:t.bool.isRequired,onLoadMore:t.func.isRequired,total:t.number.isRequired};const O=(e,s,i=1)=>{const[l,c]=p.useState([]),[a,n]=p.useState(i),[f,b]=p.useState(0),[R,x]=p.useState(!1),[u,y]=p.useState(s),d=p.useCallback(()=>{x(!0),_(e,u,a).then(o=>(b(o.total_results),c(q=>a===1?o.results:[...q,...o.results]),x(!1),o)).catch(o=>{P.error(`Error fetching data: ${o.message}`),x(!1)})},[e,u,a]),j=()=>{n(o=>o+1)};return p.useEffect(()=>{u!==s&&(n(1),c([]),y(s)),d()},[s,a,u,d]),{results:l,loading:R,total:f,handleLoadMore:j}};export{$ as G,O as u};
