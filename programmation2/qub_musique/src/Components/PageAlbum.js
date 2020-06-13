import React from 'react';
import Row  from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';  

import { PageChanson } from './PageChanson';
import { Paroles } from './PageParole';
import arrow from '../img/back.png'

export class PageAlbum extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {paroles:false, chanson: false, hovered: false};
    }
   
    render() { 
        if (this.state.paroles===false){
            return ( 
                <>
                <Row>
                    <Col xs lg="12">
                        <img onClick={()=>this.props.back(true)} className="img-fluid my-5" // retour sur state
                        src={arrow} alt='return' 
                        onMouseOut={() => this.setState({hovered: false})}
                        onMouseOver={() => this.setState({hovered: true})}
                        style={this.state.hovered ? {cursor: 'pointer',height: '64px'} : {height: '64px'}} title="Retourner au catalogue"/>
                   
                    </Col>
                </Row>
                <Row>
                    <Col  xl="4" lg="4" md="6" sm="12" >
                        <img src={this.props.album.src} alt="album" className="fluid"/>
                    </Col>
                    
                    <Col xl="6" lg="6" md="6" sm="12" className="text-white d-flex align-items-begin flex-column justify-content-end">
                        <p>Album</p>
                        <h1><b>{this.props.album.title}</b></h1>
                        <p><span style={{fontWeight: 'lighter'}}>Par </span><b>{this.props.album.artist}</b></p>
                        <p className="mb-0"><span>{this.props.album.releaseYear} </span>{" - " +this.props.album.chansons.length} chansons</p>
                    </Col>
                </Row>
                <Row className="text-white mt-5">
                    <Col  xl="1" lg="1" md="1" sm="1" xs="1" className="text-center">
                        <p><b>#</b></p>
                    </Col>
                    <Col  xl="11" lg="11" md="11" sm="11">
                        <p><b>TITRE</b></p>
                    </Col>
                    {this.props.album.chansons.map((element,i) => 
                        <PageChanson onClick={() => this.setState({paroles: true, chanson: this.props.album.chansons[i]})} songNumberFromPageAlbum={i+1} chansonNameFromPageAlbum={this.props.album.chansons[i].nom}  />
                     )} 
                </Row>
                </>
            );
        } else if (this.state.paroles===true){
            return ( 
                <>
                <Row>
                    <Col xl="12" lg="12" md="12" sm="12"  >
                        <img   onClick={() => this.setState({paroles: false})} className="img-fluid my-5" // retour sur state
                        src={arrow} alt='return'  
                        onMouseOut={() => this.setState({hovered: false})}
                        onMouseOver={() => this.setState({hovered: true})}
                        style={this.state.hovered ? {cursor: 'pointer', height: '64px'} : {height: '64px'}} title="Retourner à l'album"/>
                    </Col>
                </Row>
                <Row>
                    <Col  xl="4" lg="4" md="6" sm="12" >
                            <img onClick={() => this.setState({paroles: false})}
                            src={this.props.album.src} alt={this.props.album.alt} className="img-fluid" 
                            onMouseOut={() => this.setState({hovered: false})}
                            onMouseOver={() => this.setState({hovered: true})}
                            style={this.state.hovered ?  {cursor: 'pointer'} : null }
                            title={this.props.album.title+ " de " + this.props.album.artist}/>
                    </Col>
                    <Col xl="6" lg="6" md="6" sm="12"  className="text-white d-flex align-items-begin flex-column justify-content-end">
                            <p>Album</p>
                            <h2><b>{this.props.album.title}</b></h2>
                            <p>Chanson</p>
                            <h2><b>{this.state.chanson.nom}</b></h2>
                    </Col>
                </Row>
                <Row className="text-white mt-5 no-gutters">
                    <Col lg="12" >
                        <h1 className='mb-4'>Paroles</h1>
                    </Col>
                    <Col lg="12" >
                        <Paroles paroles={this.state.chanson.paroles}/>
                    </Col>
                </Row>
                </>
            );
        }
    }
}
