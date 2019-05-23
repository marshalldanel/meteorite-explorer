import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 15px 0 15px;
`;

const Button = styled.button`
  margin: 0 20px;
  padding: 10px;
  border-radius: 5px;
`;

const Pagination = ({ prevPage, nextPage }) => {
  return (
    <Div>
      <Button onClick={prevPage}>Previous Page</Button>
      <Button onClick={nextPage}>Next Page</Button>
    </Div>
  );
};

export default Pagination;
