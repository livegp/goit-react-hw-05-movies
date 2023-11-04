import{s as d,b as l,r as i,j as s}from"./index-b5cb4dc3.js";import{Q as f}from"./react-toastify.esm-fd450294.js";import{f as g}from"./fetch-e96fe894.js";import h from"./Loader-d2db7f26.js";import{N as u}from"./NoDataMessage-2f765900.js";const p=d.ul`
  display: grid;
  gap: 25px;
  grid-row: 5 / 6;
  grid-column: 1 / 4;
  text-align: justify;
  color: rgba(var(--text), 1);
  transition: var(--trans);

  h3 {
    font-weight: 600;
    margin-bottom: 10px;
  }

  p {
    line-height: 1.2;
  }

  @media (width <= 576px) {
    grid-row: 6 / 7;
    grid-column: 1 / 3;
  }
`;function R(){const{id:t}=l(),[e,o]=i.useState([]),[n,a]=i.useState(!0);return i.useEffect(()=>{t&&g("movieReviews","","",t).then(r=>(o(r.results),a(!1),r)).catch(r=>{f.error(`Error fetching data: ${r.message}`),a(!1)})},[t]),n?s.jsx(h,{}):Array.isArray(e)&&e.length>0?s.jsx(p,{children:e.map(({id:r,author:m,content:c})=>s.jsxs("li",{children:[s.jsxs("h3",{children:[m,":"]}),s.jsx("p",{children:c})]},r))}):s.jsx(u,{})}export{R as default};
