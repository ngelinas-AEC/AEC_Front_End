import React from 'react';
import Form from 'react-bootstrap/Form';  
import FormControl from 'react-bootstrap/FormControl';  
import {AnnulerRecherche}  from '../AnnulerRecherche/AnnulerRecherche';

export class Recherche extends React.Component {
    constructor(props) {
        super(props);
        this.state = {stringRecherche: "" , reset:false, rechercheActive:false};
        
        this.handleRechercheChange = this.handleRechercheChange.bind(this);
        this.handleRecherche = this.handleRecherche.bind(this); 
        this.handleKeyPress = this.handleKeyPress.bind(this); 
        this.ChangeStateReset=this.ChangeStateReset.bind(this);
    }

    handleRechercheChange(e){
        const search = e.target.value;
        this.setState({stringRecherche: search});
        if (e.target.value.length===0 && this.state.rechercheActive===false){
            this.setState({reset: false});
        } else {
            this.setState({reset: true});
        }
    }

    handleRecherche() { 
        this.props.onBtnClick(this.state.stringRecherche); 
        if (this.state.stringRecherche!==""){
            this.setState({reset: true});
            this.setState({rechercheActive: true});
        }else {
            this.setState({reset: false});
            this.setState({rechercheActive: false});
        }
    }

    handleKeyPress(target) {
        if(target.charCode===13){
            this.handleRecherche();
        } 
    }

    ChangeStateReset(annuler){
        this.setState({reset: annuler});
        this.Reset();
    }
    
    Reset(){
        document.getElementById("inputRecherche").value="";
        this.setState({stringRecherche: ""});
        this.props.onBtnClick("");
        this.setState({rechercheActive: false});
    }

    AfficherAnnuler(){
        if (this.state.reset===true)
        return <AnnulerRecherche onAnnulerRecherche={this.ChangeStateReset}/>;
    }


    render() {
        return (
                <div className="d-flex justify-content-start">
                    <Form id="formRecherche" inline onSubmit={e => {e.preventDefault()}}>
                        <FormControl id="inputRecherche"onKeyPress={this.handleKeyPress} onChange={this.handleRechercheChange}  type="text" placeholder="Recherche" />
                        <button type="button" id="recherche" onClick={this.handleRecherche} variant="outline-success" className="mx-sm-2">Recherche</button>
                        {this.AfficherAnnuler()}
                    </Form>
                </div>
        );
    }
}