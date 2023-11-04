import{s as d,b as l,r as i,j as r}from"./index-55b2e1f9.js";import{Q as f}from"./react-toastify.esm-79e6af07.js";import{f as h}from"./fetch-7525b344.js";import u from"./Loader-60b357a7.js";import{N as g}from"./NoDataMessage-73a3cd68.js";const p=d.ul`
  display: grid;
  gap: 25px;
  grid-row: 5 / 6;
  grid-column: 1 / 4;
  color: #3b5998;
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
`;function R(){const{id:e}=l(),[t,a]=i.useState([]),[n,o]=i.useState(!0);return i.useEffect(()=>{e&&h("movieReviews","","",e).then(s=>(a(s.results),o(!1),s)).catch(s=>{f.error(`Error fetching data: ${s.message}`),o(!1)})},[e]),n?r.jsx(u,{}):Array.isArray(t)&&t.length>0?r.jsx(p,{children:t.map(({id:s,author:m,content:c})=>r.jsxs("li",{children:[r.jsxs("h3",{children:[m,":"]}),r.jsx("p",{children:c})]},s))}):r.jsx(g,{})}export{R as default};
