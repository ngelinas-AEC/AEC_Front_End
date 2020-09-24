// <!-- FormEditChalet.js -->
// <!-- Programmation Web 2 & Interfaces Web 2 -->
// <!-- Nico Gelinas -->

import React , {useState , useEffect} from "react";
import { Form, Button,Image,Container,Row,Col } from "react-bootstrap";
import {toast} from "react-toastify"
import {API} from "../Api_constante";
import { Link } from "react-router-dom";

function FormEditChalet(props){
  const [donneesRecues , setDonneesRecues] = useState({name: '', picture:"", abilities : ["",""] });
  const [ChaletID ] = useState(props.location.search.substring(4,props.location.search.length));
  const [photos , setPhotos] = useState("");
  const [Errors , setErrors] = useState("");

  useEffect(() => {
    getChalet();
  },[]); 

  async function getChalet() {
    try {
      const response = await fetch( API + ChaletID);
      const reponseDeApi = await response.json();
      setDonneesRecues(reponseDeApi);
      handlePhoto();
      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function editChalet(nom, photo, adresse, ville, codePostal ) { 
    try{ 
      const response = await fetch( API + ChaletID, { 
        method:'PUT', 
        headers: {'Content-Type': 'application/json'  }, 
        body:JSON.stringify({
            name: nom,
            picture: photo,
            address: adresse,
            ville: ville,
            postalCode: codePostal,
          })  
      }); 
      if(response.ok){ 
        props.history.push("/Portfolio");
        toast.info("Fiche chalet modifié!!");

        return response; 
      } 
      throw new Error('Request failed!'); 
  } 
   catch(error){ 
      console.log(error); 
   } 
}

  function handleEdit(event){
    event.preventDefault();

    const nom = document.getElementById('nomChalet').value;
    const photo = document.getElementById('photoChalet').value;
    const adresseChalet = document.getElementById('adresseChalet').value;
    const villeChalet = document.getElementById('villeChalet').value;
    const codePostal = document.getElementById('codePostal').value;

    if(!formIsValid(nom,photo,adresseChalet, villeChalet,codePostal)) return;

    editChalet (nom, photo, adresseChalet, villeChalet, codePostal );
  }

  function handlePhoto(event){
    const photos = document.getElementById('photoChalet').value;
    setPhotos(photos);
  }

  function formIsValid(nomChalet,photoChalet,adresseChalet, villeChalet,codePostal){
    const _errors = {};
    if(!nomChalet) _errors.nomChalet = "Le nom est obligatoire";
    if(!photoChalet) _errors.photoChalet = "La photo est obligatoire";
    if(!adresseChalet) _errors.adresseChalet = "L'adresse est obligatoire";
    if(!villeChalet) _errors.villeChalet = "La ville est obligatoire";
    if(!codePostal) _errors.codePostal = "Le code postal est obligatoire";
  
    setErrors(_errors);
    if (Object.keys(_errors).length !== 0)
      {toast.error("Remplissez tout les champs!!!")}

    return Object.keys(_errors).length === 0;
  }

      return (
      <>
      <Container className='p-4 text-center'>   
        <h2>Modifier les informations de l'Chalet</h2> 
      </Container>
      <Container className='pb-4'>
        <Row>
          <Col>
            <Form>
              
            <Form.Label><h4>Identification</h4></Form.Label>
              <Form.Group as={Row} controlId="nom" className='border border-black py-3'>
                <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="nomChalet">
                  <Form.Label>Nom</Form.Label>
                  <Form.Control type="text" placeholder="Entrer le nom du chalet" defaultValue={donneesRecues.name}  isInvalid={!!Errors.nomChalet} required />
                  <Form.Control.Feedback type='invalid'>
                    {Errors.nomChalet}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Group>

              <Form.Label className='mt-4'><h4>Photo</h4></Form.Label>
              <Form.Group as={Row} controlId="photo" className='border border-black py-3'>
                              
                    <Form.Group  as={Col} xl="9" lg="9" md="12" sm="12" xs="12" controlId="photoChalet">
                      <Form.Label>URL d'une photo du chalet</Form.Label>
                      <Form.Control type="text" placeholder="Entrer une URL valide" onBlur={handlePhoto} isInvalid={!!Errors.photoChalet}  defaultValue={donneesRecues.picture} required/>
                      <Form.Control.Feedback type='invalid'>
                        {Errors.photoChalet}
                      </Form.Control.Feedback>
                    </Form.Group>
                
                <Col as={Col} xl="3" lg="3" md="6" sm="12" xs="12" className='text-center'> 
                    <div>
                      {photos !== "" && <Image src={photos} rounded height='200'/>}
                    </div>
                </Col> 

              </Form.Group>


              <Form.Label className='mt-4'><h4>Contact</h4></Form.Label>
              <Form.Group as={Row} controlId="add" className='border border-black py-3'>
              <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="adresseChalet">
                  <Form.Label>Adresse</Form.Label>
                  <Form.Control type="text" placeholder="Entrer l'adresse" isInvalid={!!Errors.adresseChalet}  defaultValue={donneesRecues.address} required/>
                  <Form.Control.Feedback type='invalid'>
                    {Errors.adresseChalet}
                  </Form.Control.Feedback>
              </Form.Group>

                <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="villeChalet">
                  <Form.Label>Ville</Form.Label>
                  <Form.Control type="text" placeholder="Entrer la ville" isInvalid={!!Errors.villeChalet}  defaultValue={donneesRecues.ville} required/>
                  <Form.Control.Feedback type='invalid'>
                    {Errors.villeChalet}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="codePostal">
                  <Form.Label>Code postal</Form.Label>
                  <Form.Control type="text" placeholder="Entrer le code postal" isInvalid={!!Errors.codePostal}  defaultValue={donneesRecues.postalCode}  required/>
                  <Form.Control.Feedback type='invalid'>
                    {Errors.codePostal}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Group>
            <Row>
              <Col xl="4" lg="4" md="4" sm="12" xs="12">
                <Button variant="primary" type="submit" onClick={handleEdit} to={"/Portfolio"}>
                    Enregistrer
                </Button>
            </Col>
              <Col xl="4" lg="4" md="4" sm="12" xs="12">
                    <Link className='links mx-2  btn btn-danger' to={"/Portfolio"}>
                          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-return-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                          </svg> Retour au Portfolio
                    </Link>

              </Col>
            </Row>
            </Form>  
            </Col>    
          </Row>
        </Container>
      </>
    );
  }

  export default FormEditChalet;