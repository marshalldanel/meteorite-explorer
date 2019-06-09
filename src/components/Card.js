import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InfoCard from './InfoCard';
import MapCard from './MapCard';

const Body = styled.div`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 0.7s linear;
  transform: ${props => {
    if (props.mapOpen) {
      return 'rotateY(180deg)';
    }
  }};
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
  margin: 32px auto;
  max-width: 720px;
  height: 265px;
`;

const usePrevious = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const Card = ({ data }) => {
  const [mapOpen, setMapOpen] = useState(false);
  const prevName = usePrevious(data.name);

  useEffect(() => {
    if (data.name !== prevName) setMapOpen(false);
  }, [data.name, prevName]);

  return (
    <Container onClick={() => setMapOpen(prevState => !prevState)}>
      <Body mapOpen={mapOpen}>
        <div>
          <InfoCard data={data} />
        </div>
        <MapCard data={data} />
      </Body>
    </Container>
  );
};

Card.propTypes = {
  data: PropTypes.object
};

export default Card;
