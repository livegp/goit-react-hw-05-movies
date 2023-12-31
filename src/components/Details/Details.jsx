import React, { useState, useEffect, Suspense, useRef } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  ButtonAdditional,
  Card,
  Genres,
  Image,
  Link,
  Overview,
  Rating,
  Title,
} from './Details.styled';
import fetch from '../../services/fetch';
import BackLink from '../BackLink/BackLink';
import Loader from '../Loader/Loader';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

function Details() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState();
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!id) {
      return;
    }

    setLoading(true);

    fetch('movieDetails', '', '', id)
      .then(newData => {
        setLoading(false);
        setMovieDetails(newData);
        return newData;
      })
      .catch(error => {
        toast.error(`Error fetching data: ${error.message}`);
        setLoading(false);
        throw error;
      });
  }, [id]);

  if (!id || loading || !movieDetails) {
    return <Loader />;
  }

  const {
    title,
    genres,
    vote_average: rating,
    overview,
    poster_path: poster,
  } = movieDetails;
  const POSTER_URL = `https://image.tmdb.org/t/p/w500`;
  const url = poster ? `${POSTER_URL}${poster}` : defaultImg;

  return (
    <>
      <BackLink to={backLink.current} />
      <Card>
        <Image src={url} alt={title} />
        <Title>{title}</Title>
        <Genres>{genres.map(({ name }) => name).join(', ')}</Genres>
        <Rating>
          <AiFillStar /> {rating.toFixed(1)}
        </Rating>
        <Overview>{overview}</Overview>
        <ButtonAdditional>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ButtonAdditional>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Card>
    </>
  );
}

export default Details;
