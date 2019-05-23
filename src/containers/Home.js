import React, { Component } from 'react';
import axios from 'axios';
import Search from '../Search';
import Results from '../components/Results';
import Pagination from '../components/Pagination';

class Home extends Component {
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
      this.setState(prevState => ({
        currentPage: prevState.currentPage - 25
      }));
    }
  };

  nextPage = () => {
    if (this.state.currentPage + 25 < this.state.data.length) {
      this.setState(prevState => ({
        currentPage: prevState.currentPage + 25
      }));
    }
  };

  render() {
    return (
      <div>
        <Search
          getResults={this.getResults}
          handleChange={this.handleChange}
          query={this.state.query}
        />
        <Pagination
          nextPage={this.nextPage}
          prevPage={this.prevPage}
          {...this.state}
        />
        <Results {...this.state} />
      </div>
    );
  }
}

export default Home;
