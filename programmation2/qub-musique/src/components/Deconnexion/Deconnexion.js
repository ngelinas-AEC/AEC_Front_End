import React from 'react';

export class Deconnexion extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeconexion = this.handleDeconexion.bind(this);
    }
    handleDeconexion(){
        window.location.reload();
        let connected = false;
        this.props.onClick(connected);
    }

    render() {
        return (
                <div className="d-flex justify-content-end">
                    <button onClick={this.handleDeconexion} type="" className="btn btn-danger " >Déconnexion</button>
                </div>
        );
    }
}

