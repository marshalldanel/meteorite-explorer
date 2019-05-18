import React from 'react';
import styled from 'styled-components';

const NavBar = styled.div`
  font-size: 1.5em;
  text-align: center;
  padding: 25px 0;
`;

function App() {
  return (
    <div>
      <NavBar>Meteorite Explorer</NavBar>
    </div>
  );
}

export default App;
