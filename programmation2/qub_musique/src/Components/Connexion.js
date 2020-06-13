// Connexion.js
// Nico Gelinas

import React from 'react';
import './App/App.css';
import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';  
import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container';  

import logoQUBMusique from '../img/qub-musique.png'

export class Connexion extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            user:'',
            password: ''
         }
         this.handleUser = this.handleUser.bind(this); 
         this.handlePassword = this.handlePassword.bind(this); 
         this.handleConnexion = this.handleConnexion.bind(this);
    }

    handleConnexion() {
        if (((this.state.user ==='shany') || (this.state.user ==='shany.carle@gmail.com')) && this.state.password==='patate'){ 
            this.props.handleStatutConnexion(true);
       }  
    }

    handlePassword(e) {
        this.setState({ password: e.target.value }); 
    } 

    handleUser(e) { 
        this.setState({ user: e.target.value });
    }  

    render() { 
        return (  
            <Container fluid>
                <Row className="d-flex justify-content-center text-center mt-5"  >
                    <Col xl="3" lg="3" md="6" sm="8" xs="10">
                            <form >
                                <img src={logoQUBMusique} alt="logoQUB" height="75px" className="my-5"/> 
                                <h1 className="text-white mb-8">De la musique pour tous.</h1>
                                <Form.Group controlId="formBasicUser">
                                    <Form.Control 
                                        type="text" 
                                        id="user" 
                                        name="user"
                                        placeholder="Adresse courriel ou nom d'utilisateur" 
                                        style={{color: 'white', 
                                                backgroundColor: '#282828', 
                                                border: 0}}
                                        onChange={this.handleUser}/>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control 
                                        type="password" 
                                        id="password" 
                                        name="password"
                                        placeholder="Mot de passe" 
                                        style={{color: 'white', 
                                                backgroundColor: '#282828', 
                                                border: 0}}
                                        onChange={this.handlePassword}/>
                                </Form.Group>

                                <button variant="primary" 
                                            style={{borderRadius: '2.2rem', 
                                            fontSize: '1rem', 
                                            fontWeight: 'bold', 
                                            padding: '0.75rem'}} 
                                            className="btn btn-light btn-block"
                                            onClick={this.handleConnexion}>
                                            SE CONNECTER
                                </button>

                            </form>
                    </Col>
                </Row>
            </Container>
        );
    }
}
