import React from 'react';
import Col from 'react-bootstrap/Col'; 

export class PageChanson extends React.Component {
    constructor(props) {
        super(props);
        this.state = { style:{
            borderTop: '1px solid #404040', 
            paddingTop: '0.300rem', 
            paddingBottom: '0.300rem'}}
    }
    render() { 
        return (<>
                    <Col  xl="1" lg="1" md="1" sm="1"  onClick={()=> this.props.onClick(true)} style={this.state.style} className="text-center"
                        onMouseOut={() => this.setState({style: {
                            borderTop: '1px solid #404040', 
                            paddingTop: '0.300rem', 
                            paddingBottom: '0.300rem',
                            cursor: 'null'}})}
                        onMouseOver={() => this.setState({style: {
                            borderTop: '1px solid #404040',
                            paddingTop: '0.300rem',
                            paddingBottom: '0.300rem',
                            backgroundColor: '#404040',
                            cursor: 'pointer'
                        }})}>
                        <div>
                            {this.props.songNumberFromPageAlbum}
                        </div>
                    </Col>
                    <Col  xl="11" lg="11" md="11" sm="11" onClick={()=> this.props.onClick(true)} style={this.state.style}
                        onMouseOut={() => this.setState({style: {
                            borderTop: '1px solid #404040', 
                            paddingTop: '0.300rem', 
                            paddingBottom: '0.300rem',
                            cursor: 'null'}})}
                        onMouseOver={() => this.setState({style: {
                            borderTop: '1px solid #404040',
                            paddingTop: '0.300rem',
                            paddingBottom: '0.300rem',
                            backgroundColor: '#404040',
                            cursor: 'pointer'
                        }})}>
                        <div>
                            {this.props.chansonNameFromPageAlbum}
                        </div>
                    </Col>
                </>
            )
     }
}