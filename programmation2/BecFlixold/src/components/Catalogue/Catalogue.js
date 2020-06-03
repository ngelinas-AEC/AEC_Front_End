import React from 'react';
import logo from '../../img/netflixLogo.png'; 
import Container from 'react-bootstrap/Container';
import {Categorie} from '../Categorie/Categorie';

const longueur = "200px"; 


const logoAcceuil = <img 
    src={logo}
    alt="logo"
    height={longueur}
    width={longueur}/>


export class Cataloge extends React.Component{
    render() {
        return (
            <Container fluid>
              {logoAcceuil}  
                <Categorie/>
                <Categorie/>
                <Categorie/>
                <Categorie/>
                <Categorie/>
            </Container>
        );
    }
};