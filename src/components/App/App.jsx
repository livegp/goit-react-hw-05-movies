import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import SharedLayout from '../SharedLayout/SharedLayout';

const Movies = lazy(() => import('../Details/Details'));
const Details = lazy(() => import('../Details/Details'));
const Home = lazy(() => import('../../pages/Home'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<Details />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
