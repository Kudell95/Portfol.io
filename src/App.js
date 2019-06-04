import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import $ from 'jquery'; 
import ReactTable from 'react-table'
import 'react-table/react-table.css'




// window.addEventListener('scroll', function(e) {
//   var distance = $(window).scrollTop();
//   var windowHeight = $(window).height();

//   alert($('#nav:nth-child(0)').href);
//   if(distance < (windowHeight * 1)){
//   $('#nav:nth-child(0) a').css('color:', '#77dfff');
//   }else if ( distance > (windowHeight * 1) && distance < (windowHeight * 2))
//   {
//     $('#nav:nth-child(0) a').css('color:', '#77dfff');
//   }else if ( distance > (windowHeight * 2) && distance < (windowHeight * 3))
//   {
//     $('#nav:nth-child(0) a').css('color:', '#77dfff');
//   }
// });

class App extends Component {
  
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     message: ''
  //   };
  //   this.handleScroll = this.handleScroll.bind(this);
  //   this.handleKeyPress = this.handleKeyPress.bind(this);
  // }

  state = {
    isTop: true,
  };

  // componentDidMount() {
  //   var height = window.innerHeight;
  //   document.addEventListener('scroll', () => {
  //     const isTop = window.scrollY < 100;
  //     if (isTop !== this.state.isTop) {
  //         this.setState({ isTop })
  //     }
  //   });
  // }

   // change code below this line
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
        $('#first').css('color', '#77dfff');
      }
  
      handleScroll()
      {
          //somewhat messy solution, but fixes some problems
          var distance = $(window).scrollTop();
          var windowHeight = $(window).height();
          var pathArray = window.location.href.split('/');
         
          //FIXME: this is broken, navbar highlight can be easily broken like this.
          if(( distance > 0 && distance < (windowHeight) ) || pathArray[pathArray.length-1] =="#Home"){
            $('#first').css('color', '#77dfff');
            $('#second').css('color', 'whitesmoke');
            $('#third').css('color', 'whitesmoke');
            $('#fourth').css('color', 'whitesmoke');
          }else if ( distance => (windowHeight) && distance < (windowHeight * 2) || pathArray[pathArray.length-1] =="#Skills")
          {
            $('#first').css('color', 'whitesmoke');
            $('#second').css('color', '#77dfff');
            $('#third').css('color', 'whitesmoke');
            $('#fourth').css('color', 'whitesmoke');
          }else if ( distance >= (windowHeight * 2) && distance < (windowHeight * 3) || pathArray[pathArray.length-1] =="#Projects")
          {
            $('#first').css('color', 'whitesmoke');
            $('#second').css('color', 'whitesmoke');
            $('#third').css('color', '#77dfff');
            $('#fourth').css('color', 'whitesmoke');
          }else if ( distance >= (windowHeight * 3) && distance < (windowHeight * 4) || pathArray[pathArray.length-1] =="#Contacts")
          {
            $('#first').css('color', 'whitesmoke');
            $('#second').css('color', 'whitesmoke');
            $('#third').css('color', 'whitesmoke');
            $('#fourth').css('color', '#77dfff');
          }
      }
   
  

  render() {

    // <ScrollableComponent   onScroll={this.handleScroll}  />

      
        const data = [{
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
      
      <div className="App" >

<header><link rel="stylesheet" media="screen" href="https://fontlibrary.org/face/8bit-wonder" type="text/css"/> </header>
      

     <div id="navbar" onScroll={this.handleScroll}>
      <ul id="nav">
              <li><a id="fourth" href="#Contact">Contact</a></li>
              <li><a id="third" href="#Projects">Projects</a></li>
              <li><a id="second" href="#Skills">Skills</a></li>
              <li><a id="first" href="#Home">Home</a></li>     
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
            </tbody>
          </table>
          </div>
        </div>
        </section>

        <section id="Projects">
        <div id="projects-table">
        <div id="table">
        <h1>Projects</h1>
        <ReactTable className="reactTable" minRows={5} data={data}  columns={columns} />
        </div>
        </div>
        </section>
         

        </div>
  
      </div>
    );
  }
}

export default App;
