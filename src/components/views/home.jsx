import React, { Component } from "react";
import { browserHistory } from 'react-router';
import Particles from 'react-particles-js';



export default class Home extends Component {
  componentDidMount() {
    browserHistory.push('/');
  }
  render() {
    return (
  <div className="Home">
          <link rel="stylesheet" media="screen" href="https://fontlibrary.org/face/8bit-wonder" type="text/css"/> 
          <div id="menu" class="topnav">
          <a class="active" href="#home">Home</a>
          <a href="#news">Programs</a>
          <a href="#contact">Games</a>
          <a href="#about">3d Art</a>
          </div>

  <body>



     <div id='particle-div'>
          <Particles class="particles"
                params={{
                  "particles": {
                      "number": {
                          "value": 60,
                          "density": {
                              "enable": true,
                              "value_area": 1500
                          }
                      },
                      "line_linked": {
                          "enable": true,
                          "opacity": 0.04
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
                              "opacity_min": 0.08
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