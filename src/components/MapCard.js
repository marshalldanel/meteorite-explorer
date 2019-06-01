import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
  max-width: 500px;
  min-width: 250px;
  min-height: 240px;
  padding: 10px;
`;

const P = styled.p`
  margin: 3px;
`;

const LineInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MapCard = ({ data: { reclat, reclong } }) => {
  return (
    <Container>
      <Box>
        <LineInfo>
          <P>Latitude</P>
          <P>{parseFloat(reclat).toFixed(3)}</P>
        </LineInfo>
        <LineInfo>
          <P>Longitude</P>
          <P>{parseFloat(reclong).toFixed(3)}</P>
        </LineInfo>
      </Box>
    </Container>
  );
};

MapCard.propTypes = {
  reclat: PropTypes.string,
  reclong: PropTypes.string
};

export default MapCard;
