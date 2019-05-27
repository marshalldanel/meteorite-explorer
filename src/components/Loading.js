import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  font-size: 2em;
  padding-bottom: 25px;
  justify-content: center;
`;

const Loading = () => {
  return <Div>Loading...</Div>;
};

export default Loading;
