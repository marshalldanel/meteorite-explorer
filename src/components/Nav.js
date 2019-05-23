import React from 'react';
import styled from 'styled-components';

const NavBar = styled.div`
  font-size: 1.5em;
  text-align: center;
  padding: 50px 0;
`;

const Nav = () => {
  return <NavBar>Meteorite Explorer</NavBar>;
};

export default Nav;
