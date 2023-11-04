import{s as d,b as l,r as i,j as s}from"./index-435de195.js";import{Q as f}from"./react-toastify.esm-e5a60533.js";import{f as g}from"./fetch-90c42a9f.js";import h from"./Loader-e0b37aaa.js";import{N as u}from"./NoDataMessage-90423909.js";const p=d.ul`
  display: grid;
  gap: 25px;
  grid-row: 5 / 6;
  grid-column: 1 / 4;
  color: rgba(var(--text), 1);
  text-align: justify;

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
`;function R(){const{id:e}=l(),[t,a]=i.useState([]),[n,o]=i.useState(!0);return i.useEffect(()=>{e&&g("movieReviews","","",e).then(r=>(a(r.results),o(!1),r)).catch(r=>{f.error(`Error fetching data: ${r.message}`),o(!1)})},[e]),n?s.jsx(h,{}):Array.isArray(t)&&t.length>0?s.jsx(p,{children:t.map(({id:r,author:m,content:c})=>s.jsxs("li",{children:[s.jsxs("h3",{children:[m,":"]}),s.jsx("p",{children:c})]},r))}):s.jsx(u,{})}export{R as default};
