// PageParole.js
// Nico Gelinas

import React from 'react';
import './App/App.css';

export class Paroles extends React.Component  {

    render() { 
        return ( 
            this.props.paroles
         );
    }
}

Paroles.defaultProps = { paroles: 'Paroles pas encore disponibles' };  