import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showStudies: true,
      showExperience: false,
      showSkills: false
    };
  };

  activateStudies = () => {
    this.setState({ showStudies: true, showExperience: false, showSkills: false })
  }
  
  activateExperience = () => {
    this.setState({ showStudies: false, showExperience: true, showSkills: false })
  }

  activateSkills = () => {
    this.setState({ showStudies: false, showExperience: false, showSkills: true })
  }

  render() {

    return (
      <div className="App">

        <div className='row'>

        <div className='col-xs-0 col-md-1 col-lg-2 App-Lateral'></div>

        <div className={"col " + (this.state.showStudies ? 'd-block' : 'd-none')} id="studies">
          <div className='App-title'>Studies:</div>
          <div className='App-description'>
            <ul>
              <li>
                  Computer Engineer<br/>
                  <small>Universidad Nacional de Córdoba (2008 - 2022)</small>
              </li>
              <li>
                  React Js<br/>
                  <small>CoderHouse (07/2021 - 09/2021)</small>
              </li>
              <li>
                  IT Essentials<br/>
                  <small>Cisco Networking Academy (11/2011)</small>
              </li>
              <li>
                  Computer repairer<br/>
                  <small>ICIR Institute (09/2005)</small>
              </li>
              <li>
                  English Level 3 & 4<br/>
                  <small>GAPS Academy (2020, 2021, 2022)</small>
              </li>
            </ul>
          </div>
        </div>

        <div className={"col " + (this.state.showExperience ? 'd-block' : 'd-none')} id="experience">
          <div className='App-title'>Work Experience:</div>
          <div className='App-description'>
            <ul>
              <li>Intel Transportation<br/>
                  <small>OpenVINO framework for deep learning models, Python, Docker, DockerCompose, JQuery, Flask, ThingsBoard for IoT, AWS IoT, AWS ECR, AWS EC2, GitHub, English meetings - (2020-2022)</small>
                  <div className='cap'>
                    <iframe width="90%" height="400px" src="https://www.youtube.com/embed/Ru51DELfc-Q" title="New OpenVINO Solution: Edge Insights For Fleet | Edge Innovation Series for Developers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </div>
              </li>
              <li>Telecom Personal Mobile & Web Apps<br/>
                  <small>Java, HTML, CSS, JQuery - (2020)</small>
                  <div className='cap'>
                    <img src="personal.png"></img>
                  </div>
              </li>
              <li>ReactJs Project<br/>
                  <small>ReactJs, Firebase - (2021)</small>
                  <div className='cap'>
                    <img src="https://github.com/mauriaguilar/tecnoshop-aguilar/raw/main/example_of_use.gif"></img>
                  </div>
              </li>
              <li>Thesis Project<br/>
                  <small>Python - (2021)</small>
                  <div className='cap'>
                    <img src="thesis.png"></img>
                  </div>
              </li>
              <li>Business App<br/>
                  <small>AngularJs, HTML, CSS - (2018)</small>
                  <div className='cap'>
                    <img src="bussinessapp.png"></img>
                  </div>
              </li>
              <br/><br/><br/>
            </ul>
          </div>
        </div>

        <div className={"col " + (this.state.showSkills ? 'd-block' : 'd-none')} id="skills">
          <div className='App-title'>Skills:</div>
          <div className='App-description'>
            <ul>
              <li>
                Backend: <br/>
                <small>Python, Flask, NodeJs, ExpressJs</small>
              </li>
              <li>
                Cloud: <br/>
                <small>AWS EC2, AWS ECR, AWS IoT</small>
              </li>
              <li>
                Tools: <br/>
                <small>Git, GitHub, Docker, Linux, Makefile, Bash</small>
              </li>
              <li>
                Frontend: <br/>
                <small>ReactJs, NextJs</small>
              </li>
              <li>
                Test: <br/>
                <small>PyTest</small>
              </li>
            </ul>
          </div>
        </div>

        <div className='col-xs-0 col-md-1 col-lg-2 App-Lateral'></div>

      </div>




        <div className='row'>
          <div className='col App-navbar'>

            <div className='row'>

              <div className='col-xs-0 col-md-1 col-lg-2 App-Lateral'></div>
              <div className='col'>

                <div className='row menu'>
                  <div className='col App-domain'>
                    mauriaguilar.com
                  </div>
                </div>

                <div className="row menu">
                    <div className="col item text-center" onClick={this.activateStudies}>
                      <a className="link w-100 active" href="#">Studies</a>
                    </div>
                    <div className="col item" onClick={this.activateExperience}>
                      <a className="link w-100" href="#">Work Experience</a>
                    </div>
                    <div className="col item" onClick={this.activateSkills}>
                      <a className="link w-100" href="#">Skills</a>
                    </div>
                  </div>
                
              </div>
              <div className='col-xs-0 col-md-1 col-lg-2 App-Lateral'></div>

            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default App;
