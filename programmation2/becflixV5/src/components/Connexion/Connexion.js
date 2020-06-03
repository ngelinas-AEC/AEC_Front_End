import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export class Connexion extends React.Component {
  constructor(props) {  
    super(props);  
    this.handleConnexion = this.handleConnexion.bind(this);  
  } 
  handleConnexion(){
    const connecter = true;

    //if  
    this.props.onClick(connecter);  
  } 
  render() {
    return (
      <Form>
        <h3>De la Musique pour tous.</h3>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Adresse courriel ou nom d'utilisateur" id="email"/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Mot de passe" id="password"/>
        </Form.Group>

        <Button variant="primary" onClick={this.handleConnexion}>
          SE CONNECTER
        </Button>
      </Form>
    );
  }
}
