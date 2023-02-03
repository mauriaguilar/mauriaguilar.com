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

        <div className='row'>



        <div className={"row " + (this.state.showStudies ? 'd-block' : 'd-none')} id="studies">
          <div className='col col-md-8 App-content'>
            <div className='App-title'>Studies:</div>
            <div className='App-description'>
              <ul>
                <li>
                    Computer Engineer<br/>
                    <small>Universidad Nacional de Córdoba (2008 - 2022)</small>
                </li>
                <li>React Js<br/>
                    <small>CoderHouse (07/2021 - 09/2021)</small>
                </li>
                <li>IT Essentials<br/>
                    <small>Cisco Networking Academy (11/2011)</small>
                </li>
                <li>Computer repairer<br/>
                    <small>ICIR Institute (09/2005)</small>
                </li>
                <li>English Level 3 & 4<br/>
                    <small>GAPS Academy (2020, 2021, 2022)</small>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-xs-0 col-md-1 col-lg-2 AppLateral'></div>
        </div>

        <div  className={"row " + (this.state.showPortfolio ? 'd-block' : 'd-none')} id="portfolio">
            <div className='col col-lg-8 App-content'>
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

        <div  className={"row " + (this.state.showSkills ? 'd-block' : 'd-none')} id="skills">
            <div className='col col-lg-8 App-content'>
              <div className='App-title'>Skills:</div>
                <div className='App-description'>
                  <ul>
                    <li>Backend: Python, Flask, NodeJs, ExpressJs</li>
                    <li>Cloud: AWS EC2, AWS ECR, AWS IoT</li>
                    <li>Tools: Git, GitHub, Docker, Linux, Makefiles, Bash</li>
                    <li>Frontend: ReactJs, NextJs</li>
                    <li>Test: PyTest</li>
                  </ul>
                </div>
          </div>
        </div>

      </div>




        <div className='row'>
          <div className='col App-navbar'>

            <div className='row'>

              <div className='col-xs-0 col-md-1 col-lg-2 AppLateral'></div>
              <div className='col'>

                <div className='row menu'>
                  <div className='col App-domain'>
                    mauriaguilar.com
                  </div>
                </div>

                <div className="row menu">
                    <div className="col item" onClick={this.activateStudies}>
                      <a className="link active" href="#">Studies</a>
                    </div>
                    <div className="col item" onClick={this.activatePortfolio}>
                      <a className="link" href="#">Portfolio</a>
                    </div>
                    <div className="col item" onClick={this.activateSkills}>
                      <a className="link" href="#">Skills</a>
                    </div>
                  </div>
                
              </div>
              <div className='col-xs-0 col-md-1 col-lg-2 AppLateral'></div>

            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default App;
