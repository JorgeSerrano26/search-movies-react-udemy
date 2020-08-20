import React, { Component } from 'react';

export class SearchForm extends Component {
    state = {
        inputMovie: '',
    }

    _handleChange = (e) => {
        this.setState({ inputMovie: e.target.value });
    }

    _handleSubmit = (e) => {
        e.preventDefault();
        const { inputMovie } = this.state;
        
        if(inputMovie !== ""){
            fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&s=${inputMovie}`)
            .then(res => res.json())
            .then(result => {
                const { Search = [], totalResults } = result;
                console.log({Search, totalResults});
                this.props.onResults(Search);
            });
        }else{
            alert("Ingrese una pelicula");
        }
    }

    render() {
        return (
            <form onSubmit={ this._handleSubmit }>
                <div className="field has-addons">
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            onChange={ this._handleChange }
                            placeholder="Find a movie" />
                    </div>
                    <div className="control">
                        <button
                            className="button is-info">
                            Search
                    </button>
                    </div>
                </div>
            </form>
        );
    }
}

