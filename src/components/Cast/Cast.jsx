import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { List } from './Cast.styled';
import fetch from '../../services/api';
import Loader from '../Loader/Loader';

function Cast() {
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      return;
    }

    fetch('movieCredits', '', '', id)
      .then(data => {
        setCast(data.cast);
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

  return (
    <List>
      {cast.map(actor => (
        <li key={actor.id}>{actor.name}</li>
      ))}
    </List>
  );
}

export default Cast;
