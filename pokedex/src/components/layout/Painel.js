import ListaPokemons from '../pokemons/ListaPokemons';
import React, { Component } from 'react'

export default class Painel extends Component {
    render() {
        return (
            <div className = "row"> 
            <div className = "col">
                <ListaPokemons />
            </div>
                
            </div>
        )
    }
}
