import React from 'react';
import '../App/App.css';
import Col from 'react-bootstrap/Col';  
import Card  from 'react-bootstrap/Card'; 
import ListGroup from 'react-bootstrap/ListGroup'; 
import ListGroupItem from 'react-bootstrap/ListGroupItem'; 



export class Client extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hovered: false};
      }
    render() { 
        return ( 
            <Col xl="3" lg="3" md="4" sm="6" xs="12" className="mb-3" 
            onMouseOut={() => this.setState({hovered: false})}
            onMouseOver={() => this.setState({hovered: true})}   > 
                <Card className="h-100 bg-light">
                    <Card.Img   variant="top" src={this.props.src}   />
                    <Card.Body >
                        <Card.Title >{this.props.prenom}</Card.Title>
                        <Card.Text >{this.props.metier}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
         );
    }
}
 
