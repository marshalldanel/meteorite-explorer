import React from 'react';
import styled from 'styled-components';

const SearchDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledButton = styled.button`
  border: 1px grey solid;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.1em;
  margin: 10px;
  padding: 5px;
`;

const StyledInput = styled.input`
  border: 1px grey solid;
  border-radius: 4px;
  font-size: 1.1em;
  margin: 10px;
  padding: 5px;
`;

const Search = ({ getResults, handleChange, query }) => {
  return (
    <SearchDiv>
      <form
        onSubmit={e => {
          e.preventDefault();
          getResults();
        }}
      >
        <StyledInput
          type='text'
          name='name'
          placeholder='Find a meteorite'
          value={query}
          onChange={handleChange}
        />
        <StyledButton type='submit'>Search</StyledButton>
      </form>
    </SearchDiv>
  );
};

export default Search;
