import React, { Component } from 'react';

export default class Details extends Component{
    state = {
        movie:"",
    }
    componentDidMount(){
        const { id } = this.props;
        this._fetchMovie(id)
    }
    _fetchMovie(id){
        fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&i=${id}`)
            .then(res => res.json())
            .then(movie => {
                console.log(movie)
                this.setState({ movie })
            });
    }
    _goBack(){
        window.history.back();
    }
    
    render(){
        const { Title, Poster, Genre } = this.state.movie;
        return(
            <div>
                <button onClick={this._goBack}>Volver</button>
                <img src={Poster} alt="Poster"/>
                <h1>{Title}</h1>
                <p>{`Genre: ${Genre}`}</p>
            </div>
        );
    }
}