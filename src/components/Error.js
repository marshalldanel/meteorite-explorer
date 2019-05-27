import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2em;
  color: #d33232;
`;

const Error = ({ error }) => {
  return error ? (
    <Div>Something went wrong 🛠 Please try again</Div>
  ) : (
    <Div>No results found</Div>
  );
};

export default Error;
