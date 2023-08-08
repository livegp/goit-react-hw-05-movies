import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import Details from '../components/Details/Details';
import fetch from '../services/api';

function Movies() {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState(null);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search).get('query');
    setSearchQuery(query);
  }, []);

  useEffect(() => {
    if (searchQuery !== null) {
      fetchData('searchMovies', searchQuery, page);
    }
  }, [searchQuery, page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const fetchData = (endpoint, searchIn, pageNumber) => {
    setLoading(true);

    fetch(endpoint, searchIn, pageNumber, '')
      .then(newData => {
        setResults(newData.results);
        setLoading(false);
      })
      .catch(error => {
        toast.error(`Error fetching data: ${error.message}`);
        setLoading(false);
      });
  };

  return <Details />;
}

export default Movies;
