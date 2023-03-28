import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAbout: true,
      showStudies: false,
      showExperience: false,
      showSkills: false
    };
  };

  activateAbout = () => {
    this.setState({showAbout: true, showStudies: false, showExperience: false, showSkills: false })
  }

  activateStudies = () => {
    this.setState({showAbout: false, showStudies: true, showExperience: false, showSkills: false })
  }
  
  activateExperience = () => {
    this.setState({showAbout: false,  showStudies: false, showExperience: true, showSkills: false })
  }

  activateSkills = () => {
    this.setState({showAbout: false,  showStudies: false, showExperience: false, showSkills: true })
  }

  render() {

    return (
      <div className="App">

        <div className='row'>

        <div className='col-xs-0 col-md-1 col-lg-2 App-Lateral'></div>

        <div className={"col " + (this.state.showAbout ? 'd-block' : 'd-none')} id="studies">
          <div className='App-title'>About me</div>
          <div className='row App-description'>
            <div className="col-3 mt-4 ms-5">
              <img src="https://avatars.githubusercontent.com/u/68705306?v=4" height="200px" width="200px"></img>
            </div>
            <div className="col-6 mt-3">
              Hola!, Soy Mauricio Aguilar<br/>
              <span className="description d-block">
                <p>Soy ingeniero en computación y desarrollador de software con experiencia trabajando
                para empresas como McAfee, Telecom e Intel desde IncluIT.</p>
                <p>Mis habilidades principales incluyen Python, Docker, ReactJs y Flutter.</p>
                <p>Desarrollé un sistema de prevención de colisiones como parte de mi proyecto de tesis.</p>
                <p>Me apasiona resolver problemas complejos y crear soluciones innovadoras en el desarrollo de software.</p>
              </span>
            </div>
            <br/><br/><br/>
          </div>
        </div>

        <div className={"col " + (this.state.showStudies ? 'd-block' : 'd-none')} id="studies">
          <div className='App-title'>Studies</div>
          <div className='App-description'>
            <ul className="mt-2">
              <li>
                  <span className="item-info-c1">Computer Engineer</span><br/>
                  <small>Universidad Nacional de Córdoba (2008 - 2022)</small>
              </li>
              <li>
                  <span className="item-info-c1">ReactJs</span><br/>
                  <small>CoderHouse (07/2021 - 09/2021)</small>
              </li>
              <li>
                  <span className="item-info-c1">English Level 3 & 4</span><br/>
                  <small>GAPS Academy (2020, 2021, 2022)</small>
              </li>
              <li>
                  <span className="item-info-c1">IT Essentials</span><br/>
                  <small>Cisco Networking Academy (11/2011)</small>
              </li>
              <li>
                  <span className="item-info-c1">Computer repairer</span><br/>
                  <small>ICIR Institute (09/2005)</small>
              </li>
            </ul><br/><br/><br/>
          </div>
        </div>

        <div className={"col " + (this.state.showExperience ? 'd-block' : 'd-none')} id="experience">
          <div className='App-title'>Work Experience</div>
          <div className='App-description'>
            <ul className="mt-2">
              <li>
                  <span className="item-info-c2">Intel Transportation</span><br/>
                  <small>OpenVINO framework for deep learning models, Python, Docker, DockerCompose, JQuery, Flask, ThingsBoard for IoT, AWS IoT, AWS ECR, AWS EC2, Boto3, SQLite, GitHub, English meetings - (2020-2022)</small>
                  <div className='cap'>
                    <iframe width="90%" height="400px" src="https://www.youtube.com/embed/Ru51DELfc-Q" title="New OpenVINO Solution: Edge Insights For Fleet | Edge Innovation Series for Developers" frame-border="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                  </div>
              </li>
              <li>
                  <span className="item-info-c2">Telecom Personal Mobile & Web Apps</span><br/>
                  <small>Java, HTML, CSS, JQuery - (2020)</small>
                  <div className='cap'>
                    <img src="personal.png" alt="Telecom App Screenshot"></img>
                  </div>
              </li>
              <li>
                  <span className="item-info-c2">ReactJs Project</span><br/>
                  <small>ReactJs, Firebase - (2021)</small>
                  <div className='cap'>
                    <img src="https://github.com/mauriaguilar/tecnoshop-aguilar/raw/main/example_of_use.gif" alt="ReactJs Screenshot"></img>
                  </div>
              </li>
              <li>
                  <span className="item-info-c2">Thesis Project</span><br/>
                  <small>Python - (2021)</small>
                  <div className='cap'>
                    <img src="thesis.png" alt="Thesis Screenshot"></img>
                  </div>
              </li>
              <li>
                  <span className="item-info-c2">Business App</span><br/>
                  <small>AngularJs, HTML, CSS, ExpressJs, SQLite- (2018)</small>
                  <div className='cap'>
                    <img src="bussinessapp.png" alt="Business App Screenshot"></img>
                  </div>
              </li>
              <br/><br/><br/>
            </ul><br/><br/><br/>
          </div>
        </div>

        <div className={"col " + (this.state.showSkills ? 'd-block' : 'd-none')} id="skills">
          <div className='App-title'>Skills</div>
          <div className='App-description'>
            <ul className="mt-2">
              <li>
                <span className="item-info-c3">Backend</span><br/>
                <small>Python, Flask, NodeJs, ExpressJs</small>
              </li>
              <li>
                <span className="item-info-c3">Cloud</span><br/>
                <small>Boto3, AWS EC2, AWS ECR, AWS IoT</small>
              </li>
              <li>
                <span className="item-info-c3">Tools</span><br/>
                <small>Git, GitHub, Docker, Linux, Makefile, Bash</small>
              </li>
              <li>
                <span className="item-info-c3">Frontend</span><br/>
                <small>ReactJs</small>
              </li>
              <li>
                <span className="item-info-c3">Test</span><br/>
                <small>PyTest</small>
              </li>
              <li>
                <span className="item-info-c3">Languages</span><br/>
                <small>English: Professional core competency</small>
              </li>
            </ul><br/><br/><br/>
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
                    <div className="col-2 item text-center bg-black" onClick={this.activateAbout}>
                      <a className="link w-100 active" href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                        <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                        <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                      </svg><br/>
                        About me
                      </a>
                    </div>
                    <div className="col item text-center" onClick={this.activateStudies}>
                      <a className="link w-100 active" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-book" viewBox="0 0 16 16">
                          <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                        </svg><br/>
                        Studies
                      </a>
                    </div>
                    <div className="col item" onClick={this.activateExperience}>
                      <a className="link w-100" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-keyboard" viewBox="0 0 16 16">
                          <path d="M14 5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12zM2 4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2z"/>
                          <path d="M13 10.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm0-2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-5 0A.25.25 0 0 1 8.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 8 8.75v-.5zm2 0a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25v-.5zm1 2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-5-2A.25.25 0 0 1 6.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 6 8.75v-.5zm-2 0A.25.25 0 0 1 4.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 4 8.75v-.5zm-2 0A.25.25 0 0 1 2.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 2 8.75v-.5zm11-2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-2 0a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-2 0A.25.25 0 0 1 9.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 9 6.75v-.5zm-2 0A.25.25 0 0 1 7.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 7 6.75v-.5zm-2 0A.25.25 0 0 1 5.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 5 6.75v-.5zm-3 0A.25.25 0 0 1 2.25 6h1.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-1.5A.25.25 0 0 1 2 6.75v-.5zm0 4a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm2 0a.25.25 0 0 1 .25-.25h5.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-5.5a.25.25 0 0 1-.25-.25v-.5z"/>
                        </svg><br/>
                        Work Experience
                      </a>
                    </div>
                    <div className="col item" onClick={this.activateSkills}>
                      <a className="link w-100" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-tools" viewBox="0 0 16 16">
                          <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z"/>
                        </svg><br/>
                        Skills
                      </a>
                    </div>
                  </div>
                
              </div>
              <div className='col-xs-0 col-md-1 col-lg-2 App-Lateral'></div>

            </div>

          </div>
        </div>

        <div className='row position-relative'>
          <div className='col SideButtons'>
            <div>
            <a className='button-link' href="https://github.com/mauriaguilar">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              <br/>GitHub Profile
            </a>
            </div>
            <div>
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

      </div>
    );
  }
}

export default App;
