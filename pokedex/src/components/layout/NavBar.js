import React, { Component } from 'react'
import styled from 'styled-components';

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
                    <a 
                    href="#" className= "navbar-brand col-sm-3 col-md-2 mr-0 align-items-center">Pokedex
                    </a>
                </nav>
  
            </div>
        )
    }
}
