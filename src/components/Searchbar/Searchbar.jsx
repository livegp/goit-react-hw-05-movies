import { Formik } from 'formik';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchFormLabel
} from './Searchbar.styled';

function Searchbar() {
  const navigate = useNavigate();

  const handleSearch = (values, actions) => {
    if (values.search.trim() === '') {
      toast.error('Enter a word to search for:');
      return;
    }

    navigate(`movies/?query=${encodeURIComponent(values.search)}`);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ search: '' }} onSubmit={handleSearch}>
      <SearchForm>
        <SearchFormButton type="submit" value="submit">
          <AiOutlineSearch />
        </SearchFormButton>
        <SearchFormLabel htmlFor="search" />
        <SearchFormInput
          type="text"
          id="search"
          name="search"
          placeholder="Search"
        />
      </SearchForm>
    </Formik>
  );
}

export default Searchbar;
