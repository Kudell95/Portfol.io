import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import $ from 'jquery'; 
import ReactTable from 'react-table'
import 'react-table/react-table.css'




class App extends Component {
  

  state = {
    isTop: true,
  };

  componentDidMount() {
    var height = window.innerHeight;
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
          this.setState({ isTop })
      }
    });
  }


  render() {
        const data = [{
        name: 'WordCloud Generator',
        LiveLink: "https://pdftowordcloud.herokuapp.com/",
        link: ["https://github.com/Kudell95/pdfWordCloud", "WordCloud Generator"]
      }]
    
      const columns = [{
        Header: 'Project',
        accessor: 'link', // String-based value accessors!
        //eslint-disable-next-line
        Cell: link =><a href={link.value[0]}>{link.value[1]}</a> //TODO: needs some styling
        }, {
        Header: 'Live Build',
        accessor: 'LiveLink',
        Cell: LiveLink =><a href={LiveLink.value}>{LiveLink.value}</a> // Custom cell components!
      }]
  
    return (
      
      <div className="App">

<header><link rel="stylesheet" media="screen" href="https://fontlibrary.org/face/8bit-wonder" type="text/css"/> </header>


     <div id="navbar">
      <ul id="nav">
              <li><a href="#Contact">Contact</a></li>
              <li><a href="#Projects">Projects</a></li>
              <li><a href="#Skills">Skills</a></li>
              <li><a href="#Home">Home</a></li>     
      </ul>
      </div>


     
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
                          "opacity": 0.02
                      },
                      "move": {
                          "direction": "right",
                          "speed": 0.1
                      },
                      "size": {
                          "value": 1.6
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
            
        
        <div id="sections">

        
        <section id="Home">
        <div id="intro-text">
        <h1>Hi, my name is Matt.</h1>
        <br/>
        <h1>And i'm a programmer.</h1>
        </div>
        </section>

        
        <section id="Skills">
        <div id="skills-text">
        <h2 style={{ position: 'fixed', top: 0 }}>Scroll {this.state.isTop ? 'down' : 'up'}!</h2>
        {/* <h1>Hi, my name is Matt.</h1>
        <br/>
        <h1>And i'm a programmer.</h1> */}
        <div id="skills-table">
          <table cellpadding="10">
            <colgroup>
              <col />
              <col />
            </colgroup>
            <tbody>
            <tr>
              <th><h1>Front-end</h1></th>
              <th><h1>Back-end</h1></th>
              <th><h1>Other</h1></th>
            </tr>
            <tr>
              <td>React</td>
              <td>NodeJs</td>
              <td>Git</td>
            </tr>
            <tr>
              <td>Angular</td>
              <td>C++</td>
              <td>Linux CLI</td>
            </tr>
            </tbody>
          </table>
          </div>
        </div>
        </section>

        <section id="Projects">
        <div id="projects-table">
        <ReactTable className="reactTable" data={data}  columns={columns} />
    
        </div>
        </section>
         

        </div>
  
      </div>
    );
  }
}

export default App;
