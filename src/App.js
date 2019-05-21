import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import axios from 'axios';
import Search from './Search';
import Results from './Results';

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
      query: '',
      data: []
    };
  }

  handleChange = name => {
    this.setState({ query: name.target.value });
  };

  getResults = () => {
    const query = this.state.query;
    const caseCorrect =
      query.charAt(0).toUpperCase() + query.slice(1).toLowerCase();
    const params = {};
    if (query) {
      params.name = caseCorrect;
    } else {
      params.$limit = 25;
      params.$offset = 0;
    }
    axios
      .get(`https://data.nasa.gov/resource/gh4g-9sfh.json`, { params })
      .then(({ data }) => {
        this.setState({ data });
      });
    this.setState({ query: '' });
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
        <Results data={this.state.data} />
      </div>
    );
  }
}

export default App;
