import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showStudies: true,
      showPortfolio: false,
      showSkills: false
    };
  };

  activateStudies = () => {
    this.setState({ showStudies: true, showPortfolio: false, showSkills: false })
  }
  
  activatePortfolio = () => {
    this.setState({ showStudies: false, showPortfolio: true, showSkills: false })
  }

  activateSkills = () => {
    this.setState({ showStudies: false, showPortfolio: false, showSkills: true })
  }

  render() {

    return (
      <div className="container App">

        <div className={"row hidden " + (this.state.showStudies ? 'd-block' : 'd-none')} id="studies">
          <div className='col App-content'>
            <div className='App-title'>Studies:</div>
            <div className='App-description'>
              <ul>
                <li>
                  Computer Engineer<br/>
                  Universidad Nacional de Córdoba (2008 - 2022)
                </li>
                <li>React Js<br/>CoderHouse (07/2021 - 09/2021)</li>
                <li>IT Essentials<br/>Cisco Networking Academy (11/2011)</li>
                <li>Computer repairer, ICIR Institute (09/2005)</li>
                <li>English Level 3 (2020, 2021, 2022)</li>
              </ul>
            </div>
          </div>
        </div>

        <div  className={"row hidden " + (this.state.showPortfolio ? 'd-block' : 'd-none')} id="portfolio">
            <div className='col App-content'>
              <div className='App-title'>Portfolio:</div>
                <div className='App-description'>
                  <ul>
                    <li>AppNegocios</li>
                    <li>ThingsBoard Video Intel</li>
                    <li>Cloud: AWS EC2, AWS ECR, AWS IoT</li>
                  </ul>
                </div>
          </div>
        </div>

        <div  className={"row hidden " + (this.state.showSkills ? 'd-block' : 'd-none')} id="skills">
            <div className='col App-content'>
              <div className='App-title'>Skills:</div>
                <div className='App-description'>
                  <ul>
                    <li>Frontend: ReactJs, NextJs</li>
                    <li>Backend: Python, Flask, NodeJs, ExpressJs, AWS ApiGateway, AWS Lambda</li>
                    <li>Cloud: AWS EC2, AWS ECR, AWS IoT</li>
                    <li>Tools: Git, GitHub, Docker, Linux, Makefiles, Bash</li>
                    <li>Test: PyTest</li>
                  </ul>
                </div>
          </div>
        </div>

        <div className='row'>
          <div className='col App-navbar'>

            <div className='row'>
              <div className='col App-domain'>
                mauriaguilar.com
              </div>
            </div>

            <nav className="row navbar navbar-expand">
              <div className="col">
                <ul className="row navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="col nav-item">
                      <a className="nav-link active" href="#" onClick={this.activateStudies}>Studies</a>
                    </li>
                    <li className="col nav-item">
                      <a className="nav-link" href="#" onClick={this.activatePortfolio}>Portfolio</a>
                    </li>
                    <li className="col nav-item">
                      <a className="nav-link" href="#" onClick={this.activateSkills}>Skills</a>
                    </li>
                  </ul>
              </div>
            </nav>
            
          </div>
        </div>

      </div>
    );
  }
}

export default App;
