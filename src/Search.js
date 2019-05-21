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

class Search extends Component {
  componentDidMount() {
    this.props.getResults();
  }

  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.getResults();
          }}
        >
          <input
            type='text'
            name='name'
            placeholder='Find a meteorite'
            value={this.props.query}
            onChange={this.props.handleChange}
          />
          <button type='submit'>Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
