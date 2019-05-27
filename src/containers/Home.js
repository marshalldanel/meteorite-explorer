import React, { Component } from 'react';
import axios from 'axios';
import Search from '../components/Search';
import Results from '../components/Results';
import Pagination from '../components/Pagination';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      query: '',
      data: [],
      error: false,
      currentPage: 0,
      count: 0
    };
  }

  handleChange = name => {
    this.setState({ query: name.target.value });
  };

  getResults = args => {
    const params = { $limit: 50, $order: 'name', ...args };
    const path = `https://data.nasa.gov/resource/gh4g-9sfh.json`;

    if (args) {
      axios.get(path, { params }).then(({ data }) => {
        this.setState(prevState => ({
          data: [...prevState.data, ...data],
          currentPage: prevState.currentPage + 50
        }));
      });
    } else {
      axios
        .all([
          axios.get(path, { params: { $select: 'count(name)' } }),
          axios.get(path, { params })
        ])
        .then(
          axios.spread((count, data) => {
            this.setState({
              count: parseInt(count.data[0].count_name),
              data: data.data,
              loading: false,
              currentPage: 0
            });
          })
        );
    }
  };

  searchResults = () => {
    const path = `https://data.nasa.gov/resource/gh4g-9sfh.json`;
    const { query } = this.state;
    const params = {
      $where: `upper(name) like upper('%${query.trim()}%')`,
      $order: 'name',
      $limit: 50000
    };

    if (query === '') {
      this.getResults();
    }

    axios.get(path, { params }).then(({ data }) =>
      this.setState({
        data,
        count: data.length,
        currentPage: 0
      })
    );
  };

  resetSearch = () => {
    this.setState({
      query: ''
    });
    this.getResults();
  };

  prevPage = () => {
    if (this.state.currentPage > 1) {
      this.setState(prevState => ({
        currentPage: prevState.currentPage - 50
      }));
      window.scrollTo(0, 0);
    }
  };

  nextPage = () => {
    const { data, currentPage, count } = this.state;

    if (data.length > currentPage + 50) {
      this.setState(prevState => ({
        currentPage: prevState.currentPage + 50
      }));
      window.scrollTo(0, 0);
    } else if (currentPage + 50 < count) {
      this.getResults({ $offset: `${currentPage + 50}` });
      window.scrollTo(0, 0);
    }
  };

  componentDidMount() {
    this.getResults();
  }

  componentDidCatch(error, info) {
    this.setState({ error: true });
    console.log(error, info);
  }

  render() {
    return (
      <div>
        <Search
          searchResults={this.searchResults}
          resetSearch={this.resetSearch}
          handleChange={this.handleChange}
          query={this.state.query}
        />
        <Results {...this.state} />
        <Pagination
          nextPage={this.nextPage}
          prevPage={this.prevPage}
          {...this.state}
        />
      </div>
    );
  }
}

export default Home;
