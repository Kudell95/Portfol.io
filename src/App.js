import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';





class App extends Component {
  
  // setactive(){
  //   console.log("active test");
    
  // } 
  render() {    
    return (
      <div className="App">
     
      <link rel="stylesheet" media="screen" href="https://fontlibrary.org/face/8bit-wonder" type="text/css"/> 
        {/* background particles */}
        <div id='particle-div'>
          <Particles className="particles"
                params={{
                  "particles": {
                      "number": {
                          "value": 130,
                          "density": {
                              "enable": true,
                              "value_area": 1600
                          }
                      },
                      "color": {
                        "value": "#77dfff"
                      },
                      "line_linked": {
                          "enable": true,
                          "opacity": 0.1
                      },
                      "move": {
                          "direction": "right",
                          "speed": 0.1
                      },
                      "size": {
                          "value": 1.9
                      },
                      "opacity": {
                          "anim": {
                              "enable": true,
                              "speed": 1,
                              "opacity_min": 0
                          }
                      }
                  },
                  
                  "retina_detect": true
           }} />
        </div>
            
        
        <div id="navbar">
              <ul id="nav">
              <li><a href="#Contact" >Contact</a></li>
              <li><a href="#Projects">Projects</a></li>
              <li><a href="#Skills">Skills</a></li>
              <li><a href="#Home">Home</a></li>
               
                
                
              </ul>

              
        </div>

        
        <div id="intro">
        <div id="intro-text">
        <h1>Hi, my name is Matt.</h1>
        <br/>
        <h1>And i like to program.</h1>
        </div>
        </div>
         
  
      </div>
    );
  }
}

export default App;
