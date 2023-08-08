import { useState, useEffect, Suspense } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  BtnAdditional,
  Card,
  Genres,
  Image,
  Link,
  Overview,
  Rating,
  Title
} from './Details.styled';
import fetch from '../../services/api';
import BackLink from '../BackLink/BackLink';
import Loader from '../Loader/Loader';

function Details() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    setLoading(true);

    fetch('movieDetails', '', '', id)
      .then(newData => {
        setMovieDetails(newData);
        setLoading(false);
      })
      .catch(error => {
        toast.error(`Error fetching data: ${error.message}`);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (!movieDetails) {
    return null;
  }

  const POSTER_URL = `https://image.tmdb.org/t/p/w500`;
  const url = `${POSTER_URL}${movieDetails.poster_path}`;

  return (
    <>
      <BackLink to={backLinkHref} />
      <Card>
        <Image src={url} alt={movieDetails.title} />
        <Title>{movieDetails.title}</Title>
        <Genres>
          {movieDetails.genres.map(genre => genre.name).join(', ')}
        </Genres>
        <Rating>
          <AiFillStar /> {movieDetails.vote_average.toFixed(1)}
        </Rating>
        <Overview>{movieDetails.overview}</Overview>
        <BtnAdditional>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </BtnAdditional>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Card>
    </>
  );
}

export default Details;
