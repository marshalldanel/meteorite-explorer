import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {
  state = {
    query: '',
    data: []
  };

  handleChange = name => {
    this.setState({ query: name.target.value });
  };

  getResults = () => {
    const params = {};
    if (this.state.query) {
      params.name = this.state.query;
    }
    axios
      .get(`https://data.nasa.gov/resource/gh4g-9sfh.json`, { params })
      .then(({ data }) => {
        this.setState({ data });
      });
  };

  componentDidMount() {
    this.getResults();
  }

  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.getResults();
            this.setState({ query: '' });
          }}
        >
          <input
            type='text'
            name='name'
            placeholder='Find a meteorite'
            value={this.state.query}
            onChange={this.handleChange}
          />
          <button type='submit'>Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
