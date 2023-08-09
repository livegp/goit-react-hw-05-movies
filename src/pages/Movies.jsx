import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import GalleryList from '../components/GalleryList/GalleryList';
import fetch from '../services/api';

function Movies() {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState(null);
  const [searchParams] = useSearchParams();

  const title =
    searchQuery !== null
      ? `You searched for "${searchQuery}"`
      : 'Enter a query to search';

  useEffect(() => {
    const query = searchParams.get('query');
    if (query !== null) {
      setSearchQuery(prevQuery => (prevQuery !== query ? query : prevQuery));
    }
  }, [searchParams]);

  useEffect(() => {
    if (searchQuery !== null) {
      fetchData('searchMovies', searchQuery, page, '');
    }
  }, [searchQuery, page]); // eslint-disable-line

  const fetchData = (endpoint, searchIn, pageNumber) => {
    setLoading(true);

    fetch(endpoint, searchIn, pageNumber, '')
      .then(newData => {
        setTotal(newData.total_results);
        const newResults =
          pageNumber === 1 ? newData.results : [...results, ...newData.results];
        setResults(newResults);
        setLoading(false);
      })
      .catch(error => {
        toast.error(`Error fetching data: ${error.message}`);
        setLoading(false);
      });
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <GalleryList
      results={results}
      title={title}
      loading={loading}
      onLoadMore={handleLoadMore}
      total={total}
    />
  );
}

export default Movies;
