import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Nav from './components/Nav';
import Home from './containers/Home';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html,
  body {
    padding: 0;
    margin: 0;
  }
  body {
    font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 100%;
    background-color: #fff;
  }
  .leaflet-container {
    height: 230px;
  }
`;

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Home />
    </div>
  );
};

export default App;
