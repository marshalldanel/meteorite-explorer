import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import axios from 'axios';
import Search from './Search';
import Results from './Results';
import Pagination from './Pagination';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0;
  }

  th, td {
    padding: 15px;
  }

  td {
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    :hover {
      overflow: visible; 
      white-space: normal; 
    }
  }

  th {
    background: #6c7ae0;
    text-align: left;
    font-weight: normal;
    font-size: 1.2rem;
    color: white;
    position: relative;
  }
`;

const NavBar = styled.div`
  font-size: 1.5em;
  text-align: center;
  padding: 25px 0;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      query: '',
      data: [],
      error: '',
      currentPage: 0
    };
  }

  componentDidMount() {
    this.getResults();
  }

  handleChange = name => {
    this.setState({ query: name.target.value });
  };

  getResults = () => {
    const query = this.state.query;
    const caseCorrect = query
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    const params = {};
    if (query) {
      params.name = caseCorrect;
    } else {
      params.$limit = 50000;
      params.$order = 'name';
    }

    axios
      .get(`https://data.nasa.gov/resource/gh4g-9sfh.json`, { params })
      .then(({ data }) => {
        this.setState({ data, loading: false, currentPage: 0 });
      })
      .catch(error => {
        this.setState({ error });
      });
    this.setState({ query: '' });
  };

  prevPage = () => {
    if (this.state.currentPage > 1) {
      this.setState(prevState => ({ currentPage: prevState.currentPage - 25 }));
    }
  };

  nextPage = () => {
    if (this.state.currentPage + 25 < this.state.data.length) {
      this.setState(prevState => ({ currentPage: prevState.currentPage + 25 }));
    }
  };

  render() {
    return (
      <div>
        <GlobalStyle />
        <NavBar>Meteorite Explorer</NavBar>
        <Search
          getResults={this.getResults}
          handleChange={this.handleChange}
          query={this.state.query}
        />
        <Pagination nextPage={this.nextPage} prevPage={this.prevPage} />
        <Results {...this.state} />
      </div>
    );
  }
}

export default App;
