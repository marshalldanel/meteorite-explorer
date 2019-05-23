import React from 'react';

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
        <Td>{mass}</Td>
        <Td>{fall}</Td>
        <Td>{year ? year.substring(0, 4) : ''}</Td>
        <Td>{reclat}</Td>
        <Td>{reclong}</Td>
      </Tr>
    </>
  );
};

export default Meteorite;
