import{s as u,b as m,r as a,j as r}from"./index-435de195.js";import{Q as l}from"./react-toastify.esm-e5a60533.js";import{f as d}from"./fetch-90c42a9f.js";import f from"./Loader-e0b37aaa.js";import{N as g}from"./NoDataMessage-90423909.js";const h=u.ul`
  grid-row: 5 / 6;
  grid-column: 1 / 4;
  color: rgba(var(--text), 1);
  column-count: 6;
  column-gap: 25px;
  column-rule: 1px solid rgba(var(--text), 1);

  li {
    line-height: 1.2;
  }

  @media (width <= 576px) {
    grid-row: 6 / 7;
    grid-column: 1 / 3;
    column-count: 2;
  }
`;function b(){const{id:s}=m(),[e,i]=a.useState([]),[n,o]=a.useState(!0);return a.useEffect(()=>{s&&(o(!0),d("movieCredits","","",s).then(t=>(i(t.cast),t)).then(t=>(o(!1),t)).catch(t=>{throw o(!1),l.error(`Error fetching data: ${t.message}`),t}))},[s]),n?r.jsx(f,{}):Array.isArray(e)&&e.length>0?r.jsx(h,{children:e.map(({id:t,name:c})=>r.jsx("li",{children:c},t))}):r.jsx(g,{})}export{b as default};
