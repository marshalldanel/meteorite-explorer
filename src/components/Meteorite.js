import React from 'react';
import PropTypes from 'prop-types';

const Meteorite = ({
  data: { fall, id, mass, name, nametype, recclass, reclat, reclong, year },
  Td,
  Tr
}) => {
  return (
    <>
      <Tr>
        <Td>{name}</Td>
        <Td>{id}</Td>
        <Td>{nametype}</Td>
        <Td>{recclass}</Td>
        <Td>{parseFloat(mass).toFixed(1)}</Td>
        <Td>{fall}</Td>
        <Td>{year ? year.substring(0, 4) : ''}</Td>
        <Td>{parseFloat(reclat).toFixed(3)}</Td>
        <Td>{parseFloat(reclong).toFixed(3)}</Td>
      </Tr>
    </>
  );
};

Meteorite.propTypes = {
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

export default Meteorite;
