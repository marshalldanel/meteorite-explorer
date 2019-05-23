import React from 'react';

const Error = ({ error }) => {
  return error ? (
    <>
      Uh Oh! Looks like you have an error: {error.message} Please try again 😄
    </>
  ) : (
    <>No meteorite found with that name ☹️ Please try another name</>
  );
};

export default Error;
