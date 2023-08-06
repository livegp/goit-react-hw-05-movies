import { useState, useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Link, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  Additional,
  Card,
  Genres,
  Image,
  Overview,
  Rating,
  Title
} from './Movies.styled';
import Loader from '../../components/Main/Loader/Loader';
import fetch from '../../services/api';

function Movies({ selected }) {
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selected) {
      setLoading(true);

      fetch('movieDetails', '', '', selected)
        .then(newData => {
          setMovieDetails(newData);
          setLoading(false);
        })
        .catch(error => {
          toast.error(`Error fetching data: ${error.message}`);
          setLoading(false);
        });
    }
  }, [selected]);

  if (loading) {
    return <div>{loading && <Loader />}</div>;
  }

  if (!movieDetails) {
    return null;
  }

  const POSTER_URL = `https://image.tmdb.org/t/p/w500`;
  const url = `${POSTER_URL}${movieDetails.poster_path}`;

  return (
    <div>
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
        <Additional>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </Additional>
      </Card>
    </div>
  );
}

export default Movies;
