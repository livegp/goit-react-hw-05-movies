import{s as u,b as m,r as a,j as r}from"./index-e27297c9.js";import{Q as l}from"./react-toastify.esm-e36840a6.js";import{f as d}from"./fetch-a885b13d.js";import f from"./Loader-332373af.js";import{N as h}from"./NoDataMessage-2265a568.js";const p=u.ul`
  grid-row: 5 / 6;
  grid-column: 1 / 4;
  color: #3b5998;
  column-count: 6;
  column-gap: 25px;
  column-rule: 1px solid #dfe3ee;

  li {
    line-height: 1.2;
  }

  @media (width <= 576px) {
    grid-row: 6 / 7;
    grid-column: 1 / 3;
    column-count: 2;
  }
`;function y(){const{id:s}=m(),[e,i]=a.useState([]),[n,o]=a.useState(!0);return a.useEffect(()=>{s&&(o(!0),d("movieCredits","","",s).then(t=>(i(t.cast),t)).then(t=>(o(!1),t)).catch(t=>{throw o(!1),l.error(`Error fetching data: ${t.message}`),t}))},[s]),n?r.jsx(f,{}):Array.isArray(e)&&e.length>0?r.jsx(p,{children:e.map(({id:t,name:c})=>r.jsx("li",{children:c},t))}):r.jsx(h,{})}export{y as default};
