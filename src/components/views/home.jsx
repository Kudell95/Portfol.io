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
          <div id="menu" className="topnav">
          <a id="active" href="#home">Home</a>
          <a href="#news">Programs</a>
          <a href="#contact">Games</a>
          <a href="#about">3d Art</a>
          </div>


 <div id="container4">
        <div id="info_panel">
        <p>Hi... My name's Matt and I like programming</p>
        </div>
</div>





{/* TODO: add colour */}

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


</div>
    );
  }
}