import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Div = styled.div`
  color: #d33232;
  display: flex;
  font-size: 2em;
  justify-content: center;
  padding-bottom: 25px;
`;

const Error = ({ error }) => {
  return error ? (
    <Div>Something went wrong 🛠 Please try again</Div>
  ) : (
    <Div>No results found</Div>
  );
};

Error.propTypes = {
  error: PropTypes.bool
};

export default Error;
