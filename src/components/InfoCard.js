import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const Box = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 5px 5px 5px grey;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 10px 25px;
  height: 250px;
  padding: 8px;
`;

const P = styled.p`
  margin: 3px;
`;

const LineInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const InfoCard = ({
  data: { fall, id, mass, name, nametype, recclass, reclat, reclong, year }
}) => {
  return (
    <Container>
      <Box>
        <LineInfo>
          <P>Name</P>
          <P>{name}</P>
        </LineInfo>
        <LineInfo>
          <P>Id</P>
          <P>{id}</P>
        </LineInfo>
        <LineInfo>
          <P>Name TyPe</P>
          <P>{nametype}</P>
        </LineInfo>
        <LineInfo>
          <P>Rec Class</P>
          <P>{recclass}</P>
        </LineInfo>
        <LineInfo>
          <P>Mass (g)</P>
          <P>{parseFloat(mass).toFixed(1)}</P>
        </LineInfo>
        <LineInfo>
          <P>Fall</P>
          <P>{fall}</P>
        </LineInfo>
        <LineInfo>
          <P>Year</P>
          <P>{year ? year.substring(0, 4) : ''}</P>
        </LineInfo>
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

InfoCard.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  nametype: PropTypes.string,
  rcclass: PropTypes.string,
  mass: PropTypes.string,
  fall: PropTypes.string,
  year: PropTypes.string,
  reclat: PropTypes.string,
  reclong: PropTypes.string
};

export default InfoCard;
