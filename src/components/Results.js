import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Meteorite from './Meteorite';
import Card from './Card';
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

const CardTable = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false
    };

    this.updatePredicate = this.updatePredicate.bind(this);
  }
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener('resize', this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 1024 });
  }

  render() {
    const { currentPage, data, error, loading } = this.props;
    const isDesktop = this.state.isDesktop;

    return (
      <div>
        {isDesktop ? (
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
                {data
                  .slice(currentPage, currentPage + 50)
                  .map((meteor, index) => (
                    <Meteorite data={meteor} key={index} Tr={Tr} Td={Td} />
                  ))}
              </Tbody>
            </Table>
            {(error && <Error error={error} />) ||
              (loading && <Loading />) ||
              (!error && data.length < 1 && <Error />)}
          </div>
        ) : (
          <CardTable>
            {data.slice(currentPage, currentPage + 50).map((meteor, index) => (
              <Card data={meteor} key={index} />
            ))}
            {(error && <Error error={error} />) ||
              (loading && <Loading />) ||
              (!error && data.length < 1 && <Error />)}
          </CardTable>
        )}
      </div>
    );
  }
}

Results.propTypes = {
  currentPage: PropTypes.number,
  data: PropTypes.array,
  error: PropTypes.bool,
  loading: PropTypes.bool
};

export default Results;
