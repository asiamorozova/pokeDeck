import React, { Component } from 'react';
import Container from './pokelist.js';

export default class Map extends Component {


    render() {
        const pokeList = this.props.array.map(pokemon => {
            return (<Container pokemon={pokemon} />
            )
        })
        return (
            <ul>{pokeList}</ul>)
    }


} 