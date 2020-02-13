import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import pokemon from './data.js';
import Container from './pokelist.js';


class App extends Component {
  render() {
    async componentDidMount() {
      const data = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex')
      this.setState({ data: data.body })
    }
    const pokeNode = pokemon.map(pokemonObject => <Container pokemon={
      pokemonObject} />);
    return (
      <ul className="pokeDeck">{pokeNode}</ul>
    )
  }
}
export default App;