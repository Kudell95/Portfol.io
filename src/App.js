import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      
      <div className="App">

<link rel="stylesheet" media="screen" href="https://fontlibrary.org/face/8bit-wonder" type="text/css"/> 
          <div id="menu" class="topnav">
          <a class="active" href="#home">Home</a>
          <a href="#news">Programs</a>
          <a href="#contact">Games</a>
          <a href="#about">3d Art</a>
          </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           Portfolio in Development
          </p>
        
        
        </header>
      </div>
    );
  }
}

export default App;
