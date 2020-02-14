import React, { Component } from 'react';
import Header from './Header.js';
import { getPokemon } from './getpokemon.js';
import Map from './map.js';
import SearchOptions from "./SearchOptions.js";
import Paging from "./Paging.js";

export default class HomeApp extends Component {
    state = { pokemon: [] };

    async loadPokemon() {
        const response = await getPokemon();
        const pokemon = response.results;
        const totalResults = response.count;

        this.setState({
            pokemon: pokemon,
            totalResults: totalResults,
        });
    }

    async componentDidMount() {
        await this.loadPokemon();

        window.addEventListener("hashchange", async () => {
            console.log("change");
            await this.loadPokemon();
        });
    }

    render() {
        const { pokemon, totalResults } = this.state;

        console.log(pokemon);
        return (
            <div>
                <Header />
                <main>
                    <section className='options-section'>
                        <SearchOptions />
                    </section>
                    <section className="list-section">
                        <Map array={pokemon} />
                        <Paging totalResults={totalResults} />
                    </section>
                </main>
            </div>
        )
    }
}

