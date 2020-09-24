// <!-- Accueil.js -->
// <!-- Programmation Web 2 & Interfaces Web 2 -->
// <!-- Nico Gelinas -->


import React from "react";
import '../styles/accueil.sass';
import {GridItems} from "./GridItems"
import Gallery from 'react-grid-gallery';

export class Accueil extends React.Component {
  render() {
    return (
  <>    
    <div className='main-content '>
          <Gallery images={GridItems}/> 
    </div>
  </>
    );
  }
}





  

  