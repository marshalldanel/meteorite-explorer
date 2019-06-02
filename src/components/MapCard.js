import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Map, TileLayer, Marker } from 'react-leaflet';

const Container = styled.div`
  z-index: 2;
  top: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

const Box = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 5px 5px 5px grey;
  margin: 10px 25px;
  min-width: 250px;
  height: 240px;
  padding: 10px;
`;

const MapCard = ({ data: { reclat, reclong } }) => {
  return (
    <Container>
      <Box>
        <Map center={[reclat, reclong]} zoom={2}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Marker position={[reclat, reclong]} />
        </Map>
      </Box>
    </Container>
  );
};

MapCard.propTypes = {
  reclat: PropTypes.string,
  reclong: PropTypes.string
};

export default MapCard;
