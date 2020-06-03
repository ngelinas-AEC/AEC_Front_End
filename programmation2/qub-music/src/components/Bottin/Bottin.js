import React from 'react';
import '../App/App.css';

import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';

import {Deconnexion}  from '../Deconnexion/Deconnexion';
import {Recherche}  from '../Recherche/Recherche';
import {Client} from '../Client/Client';


var tabAlbums = [ 
    { 
        src : require("../../img/Photos Albums/bisonnette1.jpg"), 
        alt: "Alexandre_Gagnon", 
        title: "Alexandre Gagnon",
        prenom: "Les barbes de séries",
        metier: "Bob Bisonnette",
    }, 
    {   
        src : require("../../img/Photos Albums/bisonnette2.jpg"), 
        alt: "Camille_Pelletier", 
        title: "Camille Pelletier",
        prenom: "Rock Star",
        metier: "Bob Bisonnette",
    } ,
    {   
        src :require("../../img/Photos Albums/bisonnette3.jpg"),
        alt:"Catherine_Gagné" ,
        title:"Catherine Gagné",
        prenom: "Recrue de l'année",
        metier: "Bob Bisonnette",
    } ,
    {   
        src:require("../../img/Photos Albums/bisonnette4.jpg"),
        alt:"David_Tremblay" ,
        title:"David Tremblay",
        prenom: "Le roi d'la glace",
        metier: "Bob Bisonnette",
    } ,
    {   
        src: require("../../img/Photos Albums/ciccone1.jpg"), 
        alt:"Gabrielle_Roy" ,
        title:"Gabrielle Roy",
        prenom: "Les Incontournables",
        metier: "Nicola Ciccone",
    } ,
    {   
        src:require("../../img/Photos Albums/ciccone2.jpg"),
        alt:"Jessica_Lavoie",
        title:"Jessica Lavoie",
        prenom: "Les Immortelles",
        metier: "Nicola Ciccone",
    } ,
    {   
        src:require("../../img/Photos Albums/ciccone3.jpg"),
        alt:"Jonathan_Gauthier",
        title:"",
        prenom: "Imaginaire",
        metier: "Nicola Ciccone",
    } ,
    {   
        src:require("../../img/Photos Albums/ciccone4.jpg"),
        alt:"Mathieu_Ouellet",
        title:"Mathieu Ouellet",
        prenom: "Le long chemin",
        metier: "Nicola Ciccone",
    } 
] 


export class Bottin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  recherche: "" , ajouter:false, hovered:false }
        this.Header = this.Header.bind(this); 
        this.handleDeconnexion =this.handleDeconnexion.bind(this); 
        this.ActiveRecherche =this.ActiveRecherche.bind(this); 
        this.Recherche =this.Recherche.bind(this); 
        this.AfficherClients =this.AfficherClients.bind(this); 
        this.handleReload=this.handleReload.bind(this);
    }
    
    AfficherClients() { 
        return (<Row>
                    {tabAlbums.map((element,i) =>  element.title.toLowerCase().includes(this.state.recherche.toLowerCase())   &&
                        <Client key={"client" + i} 
                                src={element.src} 
                                prenom={element.prenom}
                                metier={element.metier}>
                        </Client> )}
                </Row>
                )
    }   

    handleReload(){
        window.location.reload();
    }


    Header(){
        return (
                <Row id="header" className="d-flex align-items-center pt-3"> 
                    <Col xl="4" lg="4" md="4" sm="12" xs="12" ><h1 ><span   onClick={this.handleReload}  
                                                                            onMouseOver={() => this.setState({hovered: true})}
                                                                            onMouseOut={() => this.setState({hovered: false})} 
                                                                            style={{cursor:  this.state.hovered ? 'pointer' : 'null'}}
                                                                            className="px-2">Albums</span></h1></Col>
                    <Col xl="4" lg="4" md="4" sm="12" xs="12"> {this.Recherche()}</Col>
                    <Col xl="2" lg="2" md="4" sm="12" xs="12"> {this.AfficheButtonDeconnexion()}</Col>
                </Row>
                )
    }

    Recherche(){
        return (
          <Recherche onBtnClick={this.ActiveRecherche}/>    
        );
    }

    AfficheButtonDeconnexion(){
        return  <Deconnexion onClick={this.handleDeconnexion}/>      
    }
    
    ActiveRecherche(nouvelleRecherche){
        this.setState({ recherche: nouvelleRecherche });
    }
    
    handleDeconnexion(){
        this.props.onDeconnexion();
    }

    handleFormAjouterClient(){
        this.setState({ ajouter: !this.state.ajouter});
        this.AfficherFormulaire();
    }

    AfficherFormulaire(){
    }

    render() { 
        return (    <>
                    {this.Header()}
                    <hr className="style"></hr>
                    {this.AfficherFormulaire()}
                    {this.AfficherClients()}
                    </>
                );
    }
}



