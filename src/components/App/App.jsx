import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Wrappen } from './App.styled';
import fetch from '../../services/api';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';

function App() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchData('trending', '', page, '');
  }, [page]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSearchSubmit = input => {
    if (search !== input) {
      setSearch(input);
      setPage(1);
    }
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const selectItem = item => {
    setSelected(item.id);
  };

  const fetchData = (endpoint, searchIn, pageNumber, selectedId) => {
    setLoading(true);

    fetch(endpoint, searchIn, pageNumber, selectedId)
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

  return (
    <Wrappen>
      <Header onSubmit={handleSearchSubmit} />
      <Main
        results={results}
        loading={loading}
        selected={selected}
        page={page}
        total={total}
        onLoadMore={handleLoadMore}
        onClick={selectItem}
      />
      <Footer />
      <ToastContainer hideProgressBar />
    </Wrappen>
  );
}

export default App;
