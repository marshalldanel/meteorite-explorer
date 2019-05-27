import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Div = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  border: 1px grey solid;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.1em;
  margin: 10px;
  padding: 5px;
  :focus {
    outline: 0;
  }
`;

const Input = styled.input`
  border: 1px grey solid;
  border-radius: 4px;
  font-size: 1.1em;
  margin: 10px;
  padding: 5px;
`;

const Search = ({ resetSearch, searchResults, handleChange, query }) => {
  return (
    <Div>
      <form
        onSubmit={e => {
          e.preventDefault();
          searchResults();
        }}
      >
        <Input
          type='text'
          name='name'
          placeholder='Find a meteorite'
          value={query}
          onChange={handleChange}
        />
        <Button type='submit'>Search</Button>
        <Button onClick={resetSearch}>Reset</Button>
      </form>
    </Div>
  );
};

Search.propTypes = {
  searchResults: PropTypes.func,
  handleChange: PropTypes.func,
  query: PropTypes.string
};

export default Search;
