// <!-- Header.js -->
// <!-- Programmation Web 2 & Interfaces Web 2 -->
// <!-- Nico Gelinas -->

import React from "react"; 
import {NavLink} from 'react-router-dom' 
import {Link} from 'react-router-dom' 
import '../styles/header.sass';
import Button from 'react-bootstrap/Button';

export class Header extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {clicked: false}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ clicked: !this.state.clicked})
    }

render() 
{ 
    const MenuItems = [       
        {
            title: 'Accueil',
            url:'/Accueil',
            cName: 'nav-links'
        },
        {
            title: 'Ajouter chalet',
            url:'/Ajout',
            cName: 'nav-links'
        },
        {
            title: 'Portfolio',
            url:'/Portfolio',
            cName: 'nav-links'
        }       
    ]    

return ( 
        <nav className='NavbarItems'>


                <Link exact='true' to="/Accueil">
                
                <h2 className='navbar-logo'>Portfolio Chalets</h2>
                </Link>
                
                <div className='menu-icon' onClick={this.handleClick}>
                    <i  className={ this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <ul className={ this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    
                        {MenuItems.map((item,index)=>{
                            return(
                                <NavLink key={index} className={item.cName} to={item.url} onClick={this.handleClick}>
                                {item.title}    
                                </NavLink>
                            )
                        })}
                      <Button className='menu-buttonpwa' variant="primary" size="lg"  id="butInstall"> Installer PWA </Button> 
                </ul>
        </nav>
       
        );
    }
}
