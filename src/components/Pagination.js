import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border-radius: 5px;
  margin: 0 20px;
  padding: 10px;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 15px 0 15px;
`;

const Pagination = ({ nextPage, prevPage }) => {
  return (
    <Div>
      <Button onClick={prevPage}>Previous Page</Button>
      <Button onClick={nextPage}>Next Page</Button>
    </Div>
  );
};

export default Pagination;
