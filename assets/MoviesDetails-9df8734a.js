import{s as r,N as w,L as j,j as t,b as k,r as i,a as L,O as y}from"./index-435de195.js";import{a as R,b as S}from"./index.esm-c6e0ca95.js";import{Q as E}from"./react-toastify.esm-e5a60533.js";import{f as O}from"./fetch-90c42a9f.js";import d from"./Loader-e0b37aaa.js";const z=r.div`
  display: grid;
  grid-template: auto auto 1fr auto auto / 1fr 3fr auto;
  gap: 25px;
  height: 100%;
  font-size: 16px;

  @media (width <= 576px) {
    grid-template: auto auto auto auto auto auto auto / 1fr auto;
  }
`,B=r.img`
  width: 100%;
  height: 100%;
  grid-row: 1 / 4;
  grid-column: 1 / 2;
  border-radius: 4px;
  box-shadow:
    0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  object-fit: cover;

  @media (width <= 576px) {
    grid-row: 1 / 2;
    grid-column: 1 / 3;
  }
`,C=r.h1`
  color: rgba(var(--text), 1);
  font-size: 20px;
  font-weight: bold;
  grid-row: 1 / 2;
  grid-column: 2 / 4;

  @media (width <= 576px) {
    grid-row: 2 / 3;
    grid-column: 1 / 3;
  }
`,D=r.p`
  color: rgba(var(--text), 1);
  grid-row: 2 / 3;
  grid-column: 2 / 3;

  @media (width <= 576px) {
    grid-row: 3 / 4;
    grid-column: 1 / 2;
  }
`,_=r.p`
  display: flex;
  color: rgba(var(--text), 1);
  grid-row: 2 / 3;
  grid-column: 3 / 4;

  @media (width <= 576px) {
    grid-row: 3 / 4;
    grid-column: 2 / 3;
  }
`,$=r.p`
  color: rgba(var(--text), 1);
  text-align: justify;
  line-height: 1.2;
  grid-row: 3 / 4;
  grid-column: 2 / 4;

  @media (width <= 576px) {
    grid-row: 4 / 5;
    grid-column: 1 / 3;
  }
`,A=r.ul`
  grid-row: 4 / 5;
  grid-column: 1 / 2;
  display: flex;
  gap: 25px;
  justify-content: space-between;

  li {
    width: 100%;
  }

  @media (width <= 576px) {
    grid-row: 5 / 6;
    grid-column: 1 / 3;
  }
`,x=r(w)`
  text-align: center;
  background-color: #dfe3ee;
  color: rgba(var(--accent), 1);
  border-radius: 4px;
  padding: 8px 16px;
  display: block;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: rgba(var(--text), 0.7);
    color: #dfe3ee;

    &.active {
      background-color: rgba(var(--accent), 0.7);
      color: #f7f7f7;
    }
  }

  &.active {
    background-color: rgba(var(--accent), 1);
    color: #dfe3ee;
  }
`,F=r(j)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 25px;
  color: black;
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
  color: rgba(var(--text), 1);

  :hover {
    color: rgba(var(--text), 0.7);
  }
`,I=r.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`;function P({to:o}){return t.jsx(F,{to:o,children:t.jsxs(I,{children:[t.jsx(R,{size:"24"}),t.jsx("p",{children:"Back"})]})})}const T="https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700";function U(){var l;const{id:o}=k(),[s,g]=i.useState(),[p,a]=i.useState(!1),u=L(),m=i.useRef(((l=u.state)==null?void 0:l.from)??"/");if(i.useEffect(()=>{o&&(a(!0),O("movieDetails","","",o).then(e=>(a(!1),g(e),e)).catch(e=>{throw E.error(`Error fetching data: ${e.message}`),a(!1),e}))},[o]),!o||p||!s)return t.jsx(d,{});const{title:n,genres:f,vote_average:h,overview:b,poster_path:c}=s,v=c?`https://image.tmdb.org/t/p/w500${c}`:T;return t.jsxs(t.Fragment,{children:[t.jsx(P,{to:m.current}),t.jsxs(z,{children:[t.jsx(B,{src:v,alt:n}),t.jsx(C,{children:n}),t.jsx(D,{children:f.map(({name:e})=>e).join(", ")}),t.jsxs(_,{children:[t.jsx(S,{})," ",h.toFixed(1)]}),t.jsx($,{children:b}),t.jsxs(A,{children:[t.jsx("li",{children:t.jsx(x,{to:"cast",children:"Cast"})}),t.jsx("li",{children:t.jsx(x,{to:"reviews",children:"Reviews"})})]}),t.jsx(i.Suspense,{fallback:t.jsx(d,{}),children:t.jsx(y,{})})]})]})}function J(){return t.jsx(U,{})}export{J as default};
