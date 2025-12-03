import { Component } from 'react';
import './App.css';
import Studies from './Studies';
import Experience from './Experience';
import Skills from './Skills';
import Menu from './Menu';
import FloatingButtons from './FloatingButtons';

interface AppState {
  showStudies: boolean;
  showExperience: boolean;
  showSkills: boolean;
}

class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      showStudies: true,
      showExperience: false,
      showSkills: false
    };
  };

  activateStudies = () => this.setState({ showStudies: true, showExperience: false, showSkills: false })
  activateExperience = () => this.setState({ showStudies: false, showExperience: true, showSkills: false })
  activateSkills = () => this.setState({ showStudies: false, showExperience: false, showSkills: true })

  render() {

    return (
      <div className="App">
        <div className='row'>

          <div className='col-xs-0 col-md-1 col-lg-2 App-Lateral'></div>

          {this.state.showStudies && (
            <div className="col" id="studies">
              <Studies/>
            </div>
          )}

          {this.state.showExperience && (
            <div className="col" id="experience">
              <Experience/>
            </div>
          )}

          {this.state.showSkills && (
            <div className="col" id="skills">
              <Skills/>
            </div>
          )}

          <div className='col-xs-0 col-md-1 col-lg-2 App-Lateral'></div>

        </div>

        <div className='row'>
          <div className='col App-navbar'>

            <div className='row'>

              <div className='col-xs-0 col-md-1 col-lg-2 App-Lateral'></div>
              <div className='col'>
                <Menu
                  activateStudies={this.activateStudies}
                  activateExperience={this.activateExperience}
                  activateSkills={this.activateSkills}
                />
              </div>
              <div className='col-xs-0 col-md-1 col-lg-2 App-Lateral'></div>

            </div>

          </div>
        </div>

        <div className='row position-relative'>
          <div className='col SideButtons'>
            <FloatingButtons />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
