import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Home from './pages/Home';
import Details from './pages/Details';

class App extends Component {
  render() {    
    const url = new URL(document.location);
    const Page = url.searchParams.has('id')
      ? <Details id={url.searchParams.get('id')} />
      : <Home />
    return (
      <div className="App">
        { Page }
      </div>
    );
  }
}

export default App;
