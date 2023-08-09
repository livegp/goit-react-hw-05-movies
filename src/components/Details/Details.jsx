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
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    if (!id) {
      return;
    }

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

  if (!id) {
    return null;
  }

  if (loading) {
    return <Loader />;
  }

  if (!movieDetails) {
    return null;
  }

  const {
    title,
    genres,
    vote_average: rating,
    overview,
    poster_path: poster
  } = movieDetails;
  const POSTER_URL = `https://image.tmdb.org/t/p/w500`;
  const url = `${POSTER_URL}${poster}`;

  return (
    <>
      <BackLink to={backLink} />
      <Card>
        <Image src={url} alt={title} />
        <Title>{title}</Title>
        <Genres>{genres.map(({ name }) => name).join(', ')}</Genres>
        <Rating>
          <AiFillStar /> {rating.toFixed(1)}
        </Rating>
        <Overview>{overview}</Overview>
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
