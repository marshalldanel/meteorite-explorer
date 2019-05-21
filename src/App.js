import React, { Component } from 'react';
import axios from 'axios';
import Search from './Search';

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
      <NavBar>Meteorite Explorer</NavBar>
        <Search
          getResults={this.getResults}
          handleChange={this.handleChange}
          query={this.state.query}
        />
    </div>
  );
}
}

export default App;
