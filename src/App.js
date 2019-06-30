import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import $ from 'jquery'; 
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import Scrollspy from 'react-scrollspy'




class App extends Component {
  

      state = {
        isTop: true,
      };
      


      componentDidMount() {
      document.addEventListener('scroll', this.handleScroll);
      window.addEventListener('load', this.handleLoad);
      }
      componentWillUnmount() {
        document.removeEventListener('scroll', this.handleScroll);
      }

      
 
      handleLoad()
      {
        window.scrollTo(0, 0);
       
      }
  
      handleScroll()
      {
          //old code, can probably be removed
          var distance = $(window).scrollTop();
          var windowHeight = $(window).height();
          var pathArray = window.location.href.split('/');
      }
   
  

  render() {
        //React Tables setup   
        const data = [{
        LiveLink: "https://pdftowordcloud.herokuapp.com/",
        link: ["https://github.com/Kudell95/pdfWordCloud", "WordCloud Generator"]
      },{
        LiveLink: "https://portfoli0.herokuapp.com/",
        link: ["https://github.com/Kudell95/Portfol.io", "Portfolio"]
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
      
      <div className="App" >

      <header><link rel="stylesheet" media="screen" href="https://fontlibrary.org/face/8bit-wonder" type="text/css"/> </header>
      

     <div id="navbar" onScroll={this.handleScroll}>
      <ul id="nav">
      <Scrollspy items={ ['Contact', 'Projects', 'Skills', 'Home'] } currentClassName="is-current">
              <li><a id="fourth" href="#Contact">Contact</a></li>
              <li><a id="third" href="#Projects">Projects</a></li>
              <li><a id="second" href="#Skills">Skills</a></li>
              <li><a id="first" href="#Home">Home</a></li>     
      </Scrollspy>
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

        {/* --------------------------- Home -------------------------  */}
        <section id="Home">
        <div id="intro-text">
        <h1>Hi, my name is Matt.</h1>
        <br/>
        <h1>And i'm a programmer.</h1>
        </div>
        </section>

        

        {/* ------------------------ Skills --------------------------- */}
        <section id="Skills">
        <div id="skills-text">
        <h2 style={{ position: 'fixed', top: 0 }}>Scroll {this.state.isTop ? 'down' : 'up'}!</h2>

        <div id="skills-table">
          <table cellPadding="10">
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
            <tr>
              <td></td>
              <td>C#</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>PHP</td>
              <td></td>
            </tr>
            </tbody>
          </table>
          </div>
        </div>
        </section>
        

        {/* ----------------------- Projects ------------------------ */}
        <section id="Projects">
        <div id="projects-table">
        <div id="table">
        <h1>Projects</h1>
        <ReactTable className="reactTable" minRows={5} data={data}  columns={columns} />
        </div>
        </div>
        </section>

        

        {/* -------------------- Contact ------------------------- */}
        <section id="Contact">
          <div id="intro-text">
          <h1>Matthew Kudell</h1>
          <br/>
          <p>email: <a href='mailto:kudell95@hotmail.com'>kudell95@hotmail.com</a></p>
          <br/>
          <a href="https://github.com/Kudell95/Resume">Resume</a>
          <br/>
          <a href="https://github.com/Kudell95/">Github</a>
          </div>
        </section>
         

      </div>
  
    </div>
    );
  }
}

export default App;
