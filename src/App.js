import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Particles from 'react-particles-js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         
        </header>

        <body>

        <div id='particle-div'>
          <Particles className="particles"
                params={{
                  "particles": {
                      "number": {
                          "value": 90,
                          "density": {
                              "enable": true,
                              "value_area": 1800
                          }
                      },
                      "color": {
                        "value": "#16a5cf"
                      },
                      "line_linked": {
                          "enable": true,
                          "opacity": 0.08
                      },
                      "move": {
                          "direction": "right",
                          "speed": 0.05
                      },
                      "size": {
                          "value": 1
                      },
                      "opacity": {
                          "anim": {
                              "enable": true,
                              "speed": 1,
                              "opacity_min": 0.4
                          }
                      }
                  },
                  "interactivity": {
                      "events": {
                          "onclick": {
                              "enable": true,
                              "mode": "push"
                          }
                      },
                      "modes": {
                          "push": {
                              "particles_nb": 1
                          }
                      }
                  },
                  "retina_detect": true
           }} />

    </div>
        </body>
      </div>
    );
  }
}

export default App;
