import React, { Component } from 'react';


export default class Container extends Component {
    render() {
        return <li>
            <div className="pokemon-container">
                <h2>{this.props.pokemon.pokemon}</h2></div>
            <p className="type1-container">Type 1:{this.props.pokemon.type_1}</p>
            <p className="type2-container">Type 2: {this.props.pokemon.type_2}</p>
            <div className="image-container">
                <img
                    alt={this.props.pokemon.url_image}
                    src={this.props.pokemon.url_image} />
            </div>
        </li>

    }
}
