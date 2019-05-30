import React from 'react';
import styled from 'styled-components';

const NavBar = styled.div`
  padding-bottom: 10px;
  padding-top: 30px;
  text-align: center;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 490px) {
    flex-direction: column;
  }
`;

const P = styled.p`
  font-size: 1.5em;
  margin: 15px;
  @media (max-width: 490px) {
    margin: 0 0 10px 0;
  }
`;

const A = styled.a`
  color: black;
  font-size: 1.2em;
  margin: 0 10px;
  text-decoration: none;
`;

const Nav = () => {
  return (
    <NavBar>
      <Title>
        <P>Meteorite Explorer</P>
        <P>THE SKY IS FALLING</P>
      </Title>
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
