// <!-- FormPortfolio.js -->
// <!-- Programmation Web 2 & Interfaces Web 2 -->
// <!-- Nico Gelinas -->

import React from "react";
import Chalet  from "./Chalet";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {API} from "../Api_constante";
import { Recherche } from './Recherche';

export class FormPortfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {donneesRecues: [], recherche: ""};

  }
   
  async componentDidMount(){
      try {
        const response = await fetch(API);
        const reponseDeApi = await response.json();
        this.setState({donneesRecues:reponseDeApi});
        if (!response.ok) {
          throw Error(response.statusText);
        }
      } catch (error) {
        console.log(error);
      }
    }
 
    render()
  {

    return (
      <>
      <Container className='p-4 d-flex justify-content-around'>   
      <Row>
        <Col xl="6" lg="6" md="6" sm="6" xs="12" ><div><h2 className='titreRep'>Portfolio</h2></div></Col>
        <Col xl="6" lg="6" md="6" sm="6" xs="12"><div><Recherche  recherche={(recherche)=>this.setState({ recherche: recherche})}/> </div></Col>
      </Row>
      </Container>
      <Container>
        <Row>        
          {this.state.donneesRecues.map((key, i) => ( (key.name.toLowerCase().includes(this.state.recherche.toLowerCase()) ) &&
          <Chalet history={this.props.history} key={i} ChaletData={key} id={key._id}></Chalet>
        ))}
        </Row>
      </Container>
      </>
    );
  }
  }
  
  export default FormPortfolio;