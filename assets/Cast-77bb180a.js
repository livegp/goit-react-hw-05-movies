import{s as u,a as m,r as o,j as r}from"./index-158127e4.js";import{Q as l}from"./react-toastify.esm-9ca6db28.js";import{f as d}from"./fetch-3fcac4ba.js";import f from"./Loader-e61525c3.js";import{N as g}from"./NoDataMessage-3e54c434.js";const h=u.ul`
  grid-row: 5 / 6;
  grid-column: 1 / 4;
  column-count: 6;
  column-gap: 25px;
  column-rule: 1px solid rgba(var(--text), 1);
  color: rgba(var(--text), 1);
  transition: var(--trans);

  li {
    line-height: 1.2;
  }

  @media (width <= 576px) {
    grid-row: 6 / 7;
    grid-column: 1 / 3;
    column-count: 2;
  }
`;function E(){const{id:s}=m(),[a,i]=o.useState([]),[n,e]=o.useState(!0);return o.useEffect(()=>{s&&(e(!0),d("movieCredits","","",s).then(t=>(i(t.cast),t)).then(t=>(e(!1),t)).catch(t=>{throw e(!1),l.error(`Error fetching data: ${t.message}`),t}))},[s]),n?r.jsx(f,{}):Array.isArray(a)&&a.length>0?r.jsx(h,{children:a.map(({id:t,name:c})=>r.jsx("li",{children:c},t))}):r.jsx(g,{})}export{E as default};
