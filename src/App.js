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
              <li>
                  English Level 3 & 4<br/>
                  <small>GAPS Academy (2020, 2021, 2022)</small>
              </li>
                  IT Essentials<br/>
                  <small>Cisco Networking Academy (11/2011)</small>
              </li>
              <li>
                  Computer repairer<br/>
                  <small>ICIR Institute (09/2005)</small>
              </li>
            </ul>
          </div>
        </div>

        <div className={"col " + (this.state.showExperience ? 'd-block' : 'd-none')} id="experience">
          <div className='App-title'>Work Experience:</div>
          <div className='App-description'>
            <ul>
              <li>Intel Transportation<br/>
                  <small>OpenVINO framework for deep learning models, Python, Docker, DockerCompose, JQuery, Flask, ThingsBoard for IoT, AWS IoT, AWS ECR, AWS EC2, Boto3, SQLite, GitHub, English meetings - (2020-2022)</small>
                  <div className='cap'>
                    <iframe width="90%" height="400px" src="https://www.youtube.com/embed/Ru51DELfc-Q" title="New OpenVINO Solution: Edge Insights For Fleet | Edge Innovation Series for Developers" frame-border="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                  </div>
              </li>
              <li>Telecom Personal Mobile & Web Apps<br/>
                  <small>Java, HTML, CSS, JQuery - (2020)</small>
                  <div className='cap'>
                    <img src="personal.png" alt="Telecom App Screenshot"></img>
                  </div>
              </li>
              <li>ReactJs Project<br/>
                  <small>ReactJs, Firebase - (2021)</small>
                  <div className='cap'>
                    <img src="https://github.com/mauriaguilar/tecnoshop-aguilar/raw/main/example_of_use.gif" alt="ReactJs Screenshot"></img>
                  </div>
              </li>
              <li>Thesis Project<br/>
                  <small>Python - (2021)</small>
                  <div className='cap'>
                    <img src="thesis.png" alt="Thesis Screenshot"></img>
                  </div>
              </li>
              <li>Business App<br/>
                  <small>AngularJs, HTML, CSS, ExpressJs, SQLite- (2018)</small>
                  <div className='cap'>
                    <img src="bussinessapp.png" alt="Business App Screenshot"></img>
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
                <small>Boto3, AWS EC2, AWS ECR, AWS IoT</small>
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
              <li>
                Languages: <br/>
                <small>English</small>
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

        <div className='row position-relative'>
          <div className='col SideButtons'>
            <a className='button-link' href="https://github.com/mauriaguilar">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              <br/>GitHub Profile
            </a>
            <a className='button-link' href="https://www.linkedin.com/in/mauriaguilar/">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
              </svg>
              <br/>Linkedin Profile
            </a>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
