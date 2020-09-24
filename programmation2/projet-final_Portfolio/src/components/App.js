// <!-- App.js -->
// <!-- Programmation Web 2 & Interfaces Web 2 -->
// <!-- Projet Final par Nico Gelinas -->

import React from 'react';
import { Route, Switch } from "react-router-dom";
import { useLocation } from 'react-router-dom' 
import { Redirect } from "react-router-dom";

import { Accueil } from "./Accueil";
import { FormAjouterChalet } from "./FormAjouterChalet";
import {Menu} from './Menu'; 
import {FormPortfolio} from './FormPortfolio.js'; 
import { Footer } from "./Footer";
import {FicheChalet}  from "./FicheChalet";
import FormEditChalet from "./FormEditChalet.js"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../styles/header.sass';


function App() {
  let location = useLocation(); 
  console.log(location.pathname); 
  return (<div className='rep'>
    
    <Menu/>
   <div className='bg container-fluid m-0 p-0'>
      
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
      <Switch>
          <Redirect exact from="/" to="/Accueil" />
          <Redirect exact from="/PortfolioRefresh" to="/Portfolio" />
          <Route path="/" exact component={Accueil} /> 
          <Route path="/Accueil" component={Accueil} /> 
          <Route path="/Ajout" component={FormAjouterChalet} /> 
          <Route path="/Portfolio" component={FormPortfolio} /> 
          <Route path="/Chalet/:id" component={FicheChalet} />
          <Route path="/Edit/:id" component={FormEditChalet} />
      </Switch>
      <Footer/>
  </div>
  </div>
  );
}

export default App;
