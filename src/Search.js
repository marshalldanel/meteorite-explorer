import React, { Component } from 'react';
import styled from 'styled-components';

const SearchDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledButton = styled.button`
  padding: 5px;
  border: 1px grey solid;
  font-size: 1.1em;
  border-radius: 4px;
  margin: 10px;
  cursor: pointer;
`;

const StyledInput = styled.input`
  padding: 5px;
  border: 1px grey solid;
  font-size: 1.1em;
  border-radius: 4px;
  margin: 10px;
`;

class Search extends Component {
  render() {
    return (
      <SearchDiv>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.getResults();
          }}
        >
          <StyledInput
            type='text'
            name='name'
            placeholder='Find a meteorite'
            value={this.props.query}
            onChange={this.props.handleChange}
          />
          <StyledButton type='submit'>Search</StyledButton>
        </form>
      </SearchDiv>
    );
  }
}

export default Search;
