import React from 'react';
import styled from 'styled-components';

const NavBar = styled.div`
  text-align: center;
  padding-top: 30px;
  padding-bottom: 10px;
`;

const P = styled.p`
  font-size: 1.5em;
`;

const A = styled.a`
  font-size: 1.2em;
  margin: 0 10px;
  text-decoration: none;
  color: black;
`;

const Nav = () => {
  return (
    <NavBar>
      <P>Meteorite Explorer | THE SKY IS FALLING</P>
      <>
        <A
          href='https://github.com/marshalldanel/meteorite-explorer'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-github' />
        </A>
        <A
          href='https://data.nasa.gov/Space-Science/Meteorite-Landings/gh4g-9sfh'
          target='_blank'
          rel='noopener noreferrer'
        >
          Nasa Data Set
        </A>
      </>
    </NavBar>
  );
};

export default Nav;
