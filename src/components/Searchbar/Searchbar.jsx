import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';
import { toast } from 'react-toastify';

import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchFormLabel
} from './Searchbar.styled';

function Searchbar({ onSubmit }) {
  const handleSubmit = (values, actions) => {
    if (values.search.trim() === '') {
      toast.error('Enter a word to search for:');
      return;
    }
    onSubmit(values.search);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
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

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default Searchbar;
