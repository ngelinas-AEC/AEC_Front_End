import React from 'react'; 
import Col from 'react-bootstrap/Col';
import show from '../../img/narcosMexico.png';

const image = <img 
    src={show}
    alt="logo"
    title="logo" fluid/>

export class TvShow extends React.Component{
    render() {
        return (
            <Col lg='2'>
                {image}
            </Col>
        );
    }
};