import React from 'react'; 
import Row from 'react-bootstrap/Row';
import {TvShow} from '../TvShow/TvShow';
import Container from 'react-bootstrap/Container';


const nomCategorie ='Suspense';
export class Categorie extends React.Component{
    render() {
        return (
            <Container fluid>
                <Row>
                    <h1>{nomCategorie}</h1>
                </Row>
                <Row>
                    <TvShow/>
                    <TvShow/>
                    <TvShow/>
                    <TvShow/>
                    <TvShow/>
                    <TvShow/>
                </Row>
            </Container>
        );
    }
};