import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import pokemon from './data.js';
//import Container from './pokelist.js';
import Map from './map.js';
import request from 'superagent';
import Header from './Header.js'


class App extends Component {

  state = {
    data: []
  }
  async componentDidMount() {
    const data = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex')
    console.log(data.body)
    this.setState({ data: data.body.results })
  }
  render() {
    return (
      <main>
        <Header />
        <Map array={this.state.data} />
      </main>
    )
  }
}
export default App;