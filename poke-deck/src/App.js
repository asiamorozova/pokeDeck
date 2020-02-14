import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import pokemon from './data.js';
//import Container from './pokelist.js';
import Map from './map.js';
import request from 'superagent';
import Header from './Header.js';
import ExploreApp from './exploreDeck.js';


class App extends Component {




  render() {
    return (
      <main>
        <ExploreApp />

      </main>
    )
  }
}
export default App;