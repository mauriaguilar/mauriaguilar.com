import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container App">

        <div className='row'>
            <div className='col App-content'>
              <div className='App-title'>Studies:</div>
              <div className='App-description'>
                <ul>
                  <li>Computer Engineer</li>
                  <li>Techinical IT</li>
                  <li>Computer repairer</li>
                  <li>English Level 3</li>
                </ul>
              </div>
          </div>
        </div>

        <div className='row'>
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

        <div className='row'>
            <div className='col App-content'>
              <div className='App-title'>Skills:</div>
                <div className='App-description'>
                  <ul>
                    <li>Frontend: ReactJs, NextJs</li>
                    <li>Backend: Python, Flask, NodeJs, ExpressJs, AWS ApiGateway, AWS Lambda</li>
                    <li>Cloud: AWS EC2, AWS ECR, AWS IoT</li>
                    <li>Tools: Linux, Makefiles, Bash, Docker</li>
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
                      <a className="nav-link active" href="#">Studies</a>
                    </li>
                    <li className="col nav-item">
                      <a className="nav-link" href="#">Portfolio</a>
                    </li>
                    <li className="col nav-item">
                      <a className="nav-link" href="#">Skills</a>
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
