import React, { Component } from 'react';
import { Title } from '../components/Title';
import { SearchForm } from '../components/SearchForm';
import { MoviesList } from '../components/MoviesList';

export default class Home extends Component {
    state = {
        useSearch: false,
        results: [],
      }
    
      _handleResults = (results) => {
        this.setState({results, useSearch: true});
      }
    
      _renderResults() {
        const { results } = this.state;
        return (results.length === 0)
          ? <p>Sorry! <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">😢</span> Results not found!</p>
          : <MoviesList movies={results} />
      }

    render() {
        const { useSearch } = this.state;
        return (
            <div>
                <Title>Search movies</Title>
                <div className="SearchFormWrapper">
                    <SearchForm onResults={this._handleResults} />
                </div>
                {
                    useSearch
                        ? this._renderResults()
                        : <small>Use the form to search a movie</small>
                }
            </div>
        );
    }
}