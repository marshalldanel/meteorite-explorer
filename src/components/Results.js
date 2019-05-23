import React from 'react';
import styled, { css } from 'styled-components';
import Meteorite from './Meteorite';
import Loading from './Loading';
import Error from './Error';

const styles = css`
  display: contents;
`;

const Table = styled.table`
  display: grid;
  grid-template-columns: repeat(9, minmax(100px, 1fr));
  min-width: 100%;
  padding: 3em;
`;

const Thead = styled.thead`
  ${styles}
`;

const Tbody = styled.tbody`
  ${styles}
`;

const Tr = styled.tr`
  ${styles};
  &:hover {
    color: lightgrey;
  }
  &:nth-child(even) td {
    background: #f8f6ff;
  }
`;

const Th = styled.th`
  background: #6c7ae0;
  color: white;
  font-size: 1.2rem;
  font-weight: normal;
  padding: 15px;
  position: relative;
  text-align: left;
`;

const Td = styled.td`
  cursor: pointer;
  overflow: hidden;
  padding: 15px;
  text-overflow: ellipsis;
  white-space: nowrap;
  :hover {
    overflow: visible;
    white-space: normal;
  }
`;

const Results = ({ currentPage, data, error, loading }) => {
  return (
    <div>
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Id</Th>
            <Th>Name Type</Th>
            <Th>Rec Class</Th>
            <Th>Mass (g)</Th>
            <Th>Fall</Th>
            <Th>Year</Th>
            <Th>Latitude</Th>
            <Th>Longitude</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.slice(currentPage, currentPage + 25).map((meteor, index) => (
            <Meteorite data={meteor} key={index} Tr={Tr} Td={Td} />
          ))}
        </Tbody>
      </Table>
      {(error && <Error error={error} />) ||
        (loading && <Loading />) ||
        (!error && data.length < 1 && <Error />)}
    </div>
  );
};

export default Results;
