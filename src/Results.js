import React from 'react';
import styled, { css } from 'styled-components';
import Meteorite from './Meteorite';
import Loading from './Loading';
import Error from './Error';

const styles = css`
  display: contents;
`;

const StyledTable = styled.table`
  padding: 3em;
  display: grid;
  min-width: 100%;
  grid-template-columns: repeat(9, minmax(100px, 1fr));
`;
const Styledthead = styled.thead`
  ${styles}
`;
const Styledtbody = styled.tbody`
  ${styles}
`;
const Styledtr = styled.tr`
  ${styles};
  &:hover {
    color: lightgrey;
  }
  &:nth-child(even) td {
    background: #f8f6ff;
  }
`;

const Results = ({ data, loading, error, currentPage }) => {
  return (
    <div>
      <StyledTable>
        <Styledthead>
          <Styledtr>
            <th>Name</th>
            <th>Id</th>
            <th>Name Type</th>
            <th>Rec Class</th>
            <th>Mass (g)</th>
            <th>Fall</th>
            <th>Year</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </Styledtr>
        </Styledthead>
        <Styledtbody>
          {data.slice(currentPage, currentPage + 25).map((meteor, index) => (
            <Meteorite data={meteor} key={index} Styledtr={Styledtr} />
          ))}
        </Styledtbody>
      </StyledTable>
      {(error && <Error error={error} />) ||
        (loading && <Loading />) ||
        (!error && data.length < 1 && <Error />)}
    </div>
  );
};

export default Results;
