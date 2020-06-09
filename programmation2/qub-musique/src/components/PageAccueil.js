import React from 'react';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import Container from 'react-bootstrap/Container';  

import { Catalogue } from './Catalogue';
import { Connexion } from './Connexion';
import { Recherche } from './Recherche';

export class Accueil extends React.Component  {
    constructor(props) {
        super(props);
        this.state = { connected: false,  recherche: '', accueil: true}       
    }

    Recherche(){
        if (this.state.accueil===true){
            return (
                <Recherche  recherche={(recherche)=>this.setState({ recherche: recherche})}/> 
                    );
        }
    }

    afficheTitre(){
        if(this.state.accueil===true){
            return (
                    <Row style={{
                        borderBottom: '13px solid white',
                        marginBottom: '2rem',
                        marginTop: '2.5rem'
                    }}>
                        <h1 style={{fontSize: '1.8rem', 
                                    color: "#ffffff", 
                                    fontWeight: 'bold', 
                                    paddingLeft: '1rem'}}>
                        Albums</h1>
                    </Row>
                    )
        }
    }

    header(){
        return (
            <Row className="d-flex mt-3">
                <Col xs lg="12" className="d-flex justify-content-between" >
                    <div>
                    {this.Recherche()}
                    </div>
                    <div className="py-3 ">
                        <button style={{fontSize: '1rem', 
                                        fontWeight: 'bold', 
                                        paddingTop: '0.75rem', 
                                        paddingBottom: '0.75rem', 
                                        marginTop: '5px',
                                        backgroundColor: '#505050',
                                        textAlign: 'center',                                       
                                        color: 'white',
                                        border:0,
                                        outline: 0,
                                        display: 'flex',
                                        borderRadius: '0.5rem',
                                        padding: '1.0rem'
                                    }} type="" 
                                        className="btn btn-light btn-lg btn-block" onClick={() => this.setState({ connected: false, pageAlbum: false })}>Déconnexion</button>
                    </div>
                </Col>
            </Row>
       )
    }  

    affichageCataloque(){
        if (this.state.connected){
        return ( <Container >
                    {this.header()}
                    {this.afficheTitre()}
                    <Catalogue afficheAccueil={() => this.setState({accueil: true, recherche:""})} recherche={this.state.recherche} onClick={() => this.setState({ accueil: false})}/>
                </Container>
                );
        } else {
            return <Connexion handleConexion={(connecte) => this.setState({ connected: connecte })} />;
        }
    }

    render() { 
        return ( 
            this.affichageCataloque()
         );
    }
}
 

