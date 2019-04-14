import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Particles from 'react-particles-js';


class App extends Component {
    
  render() {
      
    return (
        <div>
        {this.props.children}
        </div>
        
      <div className="App">
      
          <link rel="stylesheet" media="screen" href="https://fontlibrary.org/face/8bit-wonder" type="text/css"/> 
          <div id="menu" class="topnav">
          <a class="active" href="#home">Home</a>
          <a href="#news">Programs</a>
          <a href="#contact">Games</a>
          <a href="#about">3d Art</a>
          </div>

  <body>


{/* Main Div */}
     <div>
          <Particles class="particles"
                params={{
                  "particles": {
                      "number": {
                          "value": 120,
                          "density": {
                              "enable": true,
                              "value_area": 100
                          }
                      },
                      "line_linked": {
                          "enable": true,
                          "opacity": 0.02
                      },
                      "move": {
                          "direction": "right",
                          "speed": 0.05
                      },
                      "size": {
                          "value": 4
                      },
                      "opacity": {
                          "anim": {
                              "enable": true,
                              "speed": 1,
                              "opacity_min": 1.4
                          }
                      }
                  },
                  
                  "retina_detect": true
           }} />

    <header className="App-header">
          
      <img src={logo} className="App-logo" alt="logo" />
      <p>
      Portfolio in Development
      </p>
    
    </header>

{/* put content here. */}





</div>




</body>
</div>
    );
  }
}


export default App;
