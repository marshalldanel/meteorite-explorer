import React from 'react';

const Pagination = ({ prevPage, nextPage }) => {
  return (
    <div>
      <button onClick={prevPage}>Previous Page</button>
      <button onClick={nextPage}>Next Page</button>
    </div>
  );
};

export default Pagination;
