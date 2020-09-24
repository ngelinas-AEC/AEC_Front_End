// <!-- FormAjouterChalet.js -->
// <!-- Programmation Web 2 & Interfaces Web 2 -->
// <!-- Projet Final par Nico Gelinas -->

import React from "react";
import { Form, Button, Image, Container, Row, Col } from "react-bootstrap";
import '../styles/formAjout.sass';
import { toast } from "react-toastify";
import { API } from "../Api_constante";
import { Link } from "react-router-dom";

export class FormAjouterChalet extends React.Component {
  constructor(props) {
    super(props);
    this.state = { photo: "", errors: {} };

    this.handleAdd = this.handleAdd.bind(this);
    this.handlePhoto = this.handlePhoto.bind(this);
    this.addChalet = this.addChalet.bind(this);
  }

  async addChalet(nom, photo, adresse, ville, codePostal) {
    try {
      const response = await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: nom,
          picture: photo,
          address: adresse,
          ville: ville,
          postalCode: codePostal,
        })
      });
      if (response.ok) {
        const jsonResponse = await response.json();
        this.props.history.push("/Portfolio");
        toast.success("Ajout du chalet " + nom);

        return jsonResponse;
      }
      throw new Error('Request failed!');
    }
    catch (error) {
      console.log(error);
    }
  }

  formIsValid(nomChalet, photoChalet, adresseChalet, villeChalet, codePostal) {
    const _errors = {};
    if (!nomChalet) _errors.nomChalet = "Le nom est obligatoire";
    if (!photoChalet) _errors.photoChalet = "La photo est obligatoire";
    if (!adresseChalet) _errors.adresseChalet = "L'adresse est obligatoire";
    if (!villeChalet) _errors.villeChalet = "La ville est obligatoire";
    if (!codePostal) _errors.codePostal = "Le code postal est obligatoire";

    this.setState({ setErrors: _errors });

    if (Object.keys(_errors).length !== 0) {
      toast.error("Remplissez tout les champs!!!")
    }

    return Object.keys(_errors).length === 0;
  }


  handleAdd(event) {
    event.preventDefault();

    const nom = document.getElementById('nomChalet').value;
    const photo = document.getElementById('photoChalet').value;
    const adresseChalet = document.getElementById('adresseChalet').value;
    const villeChalet = document.getElementById('villeChalet').value;
    const codePostal = document.getElementById('codePostal').value;

    if (!this.formIsValid(nom, photo, adresseChalet, villeChalet, codePostal )) return;

    this.addChalet( nom, photo, adresseChalet, villeChalet, codePostal);

  }

  handlePhoto(event) {
    const photo = document.getElementById('photoChalet').value;
    this.setState({ photo: photo });
  }


  render() {
    console.log(this.props.history);
    return (
      <>
        <Container className='p-4 text-center'>
          <h2>Ajout d'un nouveau chalet</h2>
        </Container>
        <Container className='pb-4'>
          <Row>
            <Col>
              <Form>
                
                <Form.Label><h4>Identification</h4></Form.Label>
                <Form.Group as={Row} controlId="nom" className='border border-black py-3'>                                
                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="nomChalet">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le nom du chalet" isInvalid={!!this.state.errors.nomChalet} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.nomChalet}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Group>


                <Form.Label className='mt-4'><h4>Photo</h4></Form.Label>
                <Form.Group as={Row} controlId="photo" className='border border-black py-3'>
                  <Form.Group as={Col} xl="9" lg="9" md="12" sm="12" xs="12" controlId="photoChalet">
                    <Form.Label>URL d'une photo du chalet</Form.Label>
                    <Form.Control type="text" placeholder="Entrer une URL valide" onBlur={this.handlePhoto} isInvalid={!!this.state.errors.photoChalet} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.photoChalet}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Col as={Col} xl="3" lg="3" md="6" sm="12" xs="12" className='text-center'>
                    <div>
                      {this.state.photo !== "" && <Image src={this.state.photo} rounded height='200' />}
                    </div>
                  </Col>
                </Form.Group>

                <Form.Label className='mt-4'><h4>Coordonnées du chalet</h4></Form.Label>
                <Form.Group as={Row} controlId="coordonne" className='border border-black py-3'>
                  <Form.Group as={Col} xl="12" lg="12" md="12" sm="12" xs="12" controlId="adresseChalet">
                    <Form.Label>Adresse</Form.Label>
                    <Form.Control type="text" placeholder="Entrer l'adresse" isInvalid={!!this.state.errors.adresseChalet} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.adresseChalet}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} xl="12" lg="12" md="12" sm="12" xs="12" controlId="villeChalet">
                    <Form.Label>Ville</Form.Label>
                    <Form.Control type="text" placeholder="Entrer la ville" isInvalid={!!this.state.errors.villeChalet} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.villeChalet}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} xl="12" lg="12" md="12" sm="12" xs="12" controlId="codePostal">
                    <Form.Label>Code postal</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le code postal" isInvalid={!!this.state.errors.codePostal} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.codePostal}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Group>


                <Button variant="primary" type="submit" onClick={this.handleAdd}>
                  Enregistrer
            </Button>
                <Link className='links mx-2  btn btn-danger' to={"/Portfolio"}>
                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-return-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z" />
                  </svg> Retour au Portfolio
                </Link>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}