// Album.js
// Nico Gelinas

import React from 'react';
import Col from 'react-bootstrap/Col';  
import Card  from 'react-bootstrap/Card'; 

export class Album extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {hovered: false, playHovered:false };
        this.handleOnClick=this.handleOnClick.bind(this);
      }

    handleOnClick(){
        this.props.pageAlbum(true);
        this.props.onClick(true);
    }

    render() { 
        return (
            <Col xl="2" lg="3" md="4" sm="6" xs="12" className="mb-5 center-block d-flex justify-content-center flex-column p-3" 
            onMouseOut={() => this.setState({hovered: false})}
            onMouseOver={() => this.setState({hovered: true})}  
            onClick={()=>this.handleOnClick()} 
            style={{transform: `${this.state.hovered ? 'scale(1.02,1.02)' : 'scale(1,1)'}`}}
            > 
                <Card className="h-100 bg-light" 
                onMouseOver={() => this.setState({hovered: true})}
                onMouseOut={() => this.setState({hovered: false})} 
                style={{cursor:  this.state.hovered ? 'pointer' : 'null'}}
                >
                    <Card.Img   variant="top" src={this.props.src}   />
                    <Card.Body >
                        <Card.Title >{this.props.title}</Card.Title>
                        <Card.Text >{this.props.artist}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
         );
    }
}
