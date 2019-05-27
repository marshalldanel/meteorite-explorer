import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  border-radius: 5px;
  cursor: pointer;
  margin: 0 20px;
  padding: 10px;
  cursor: pointer;

  :focus {
    outline: 0;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 0 25px 0;
`;

const Pagination = ({ nextPage, prevPage }) => {
  return (
    <Div>
      <Button onClick={prevPage}>Previous Page</Button>
      <Button onClick={nextPage}>Next Page</Button>
    </Div>
  );
};

Pagination.propTypes = {
  nextPage: PropTypes.func,
  prevPage: PropTypes.func,
  count: PropTypes.number,
  currentPage: PropTypes.number
};

export default Pagination;
