import React from 'react';
import styled from 'styled-components';
import Search from './Search';

const NavBar = styled.div`
  font-size: 1.5em;
  text-align: center;
  padding: 25px 0;
`;

function App() {
  return (
    <div>
      <NavBar>Meteorite Explorer</NavBar>
      <Search />
    </div>
  );
}

export default App;
