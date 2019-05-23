import React from 'react';

const Meteorite = ({
  data: { fall, id, mass, name, nametype, recclass, reclat, reclong, year },
  Styledtr
}) => {
  return (
    <>
      <Styledtr>
        <td>{name}</td>
        <td>{id}</td>
        <td>{nametype}</td>
        <td>{recclass}</td>
        <td>{mass}</td>
        <td>{fall}</td>
        <td>{year ? year.substring(0, 4) : ''}</td>
        <td>{reclat}</td>
        <td>{reclong}</td>
      </Styledtr>
    </>
  );
};

export default Meteorite;
