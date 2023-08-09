import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import fetch from './fetch';

const useDataFetching = (endpoint, searchIn, initialPage = 1) => {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(initialPage);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);

    fetch(endpoint, searchIn, page)
      .then(newData => {
        setTotal(newData.total_results);
        const newResults =
          page === 1 ? newData.results : [...results, ...newData.results];
        setResults(newResults);
        setLoading(false);
      })
      .catch(error => {
        toast.error(`Error fetching data: ${error.message}`);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [searchIn, page]); // eslint-disable-line

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return {
    results,
    loading,
    total,
    handleLoadMore
  };
};

export default useDataFetching;
