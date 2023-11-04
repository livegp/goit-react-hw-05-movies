import{s as g,P as t,a as L,j as e,L as v,T,C as S,r as p}from"./index-b5cb4dc3.js";import E from"./Loader-d2db7f26.js";import{Q as P}from"./react-toastify.esm-fd450294.js";import{f as _}from"./fetch-e96fe894.js";const k=g.li`
  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    box-shadow:
      0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14),
      0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    object-fit: cover;
    transition: var(--trans);

    &:hover {
      transform: scale(1.03);
      cursor: pointer;
    }
  }
`,w="https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700";function h({post:r}){const{id:s,poster_path:a,title:l}=r,c=L(),n=a?`https://image.tmdb.org/t/p/w500${a}`:w;return e.jsx(k,{children:e.jsx(v,{to:`/movies/${s}`,state:{from:c},children:e.jsx("img",{src:n,width:250,alt:l,role:"presentation"})})})}h.propTypes={post:t.shape({id:t.number.isRequired,poster_path:t.string,title:t.string.isRequired}).isRequired};const C=g.button`
  display: flex;
  margin: 25px auto 0;
  padding: 8px 16px;
  border-radius: 4px;
  text-align: center;
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
  color: rgba(var(--text-primary), 1);
  background-color: rgba(var(--accent), 1);
  transition: var(--trans);

  &:hover,
  &:focus {
    background-color: rgba(var(--accent), 0.7);
    color: rgba(var(--text-primary), 1);
  }
`;function m({onLoadMore:r}){return e.jsx(C,{onClick:r,children:"Load more"})}m.propTypes={onLoadMore:t.func.isRequired};function $({results:r,title:s,loading:a,onLoadMore:l,total:c}){const i=Array.isArray(r)&&r.length>0;return e.jsxs(e.Fragment,{children:[e.jsx(T,{children:s}),i&&e.jsx(S,{children:r.map(n=>e.jsx(h,{post:n},n.id))}),a&&e.jsx(E,{}),!a&&r.length<c&&e.jsx(m,{onLoadMore:l})]})}$.propTypes={results:t.arrayOf(t.shape({id:t.number.isRequired,poster_path:t.string,title:t.string.isRequired}).isRequired).isRequired,title:t.string.isRequired,loading:t.bool.isRequired,onLoadMore:t.func.isRequired,total:t.number.isRequired};const U=(r,s,a=1)=>{const[l,c]=p.useState([]),[i,n]=p.useState(a),[f,b]=p.useState(0),[R,u]=p.useState(!1),[x,y]=p.useState(s),d=p.useCallback(()=>{u(!0),_(r,x,i).then(o=>(b(o.total_results),c(q=>i===1?o.results:[...q,...o.results]),u(!1),o)).catch(o=>{P.error(`Error fetching data: ${o.message}`),u(!1)})},[r,x,i]),j=()=>{n(o=>o+1)};return p.useEffect(()=>{x!==s&&(n(1),c([]),y(s)),d()},[s,i,x,d]),{results:l,loading:R,total:f,handleLoadMore:j}};export{$ as G,U as u};
