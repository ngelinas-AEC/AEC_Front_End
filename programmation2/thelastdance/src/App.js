import React from 'react';
import logo from './netflix.png';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <h1 class="texteAfficher">THE LAST DANCE</h1> 
        <p>
        "Une production de" 
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        "Mettant en vedette" 
        </p>

    </div>
  );
}

export default App;
