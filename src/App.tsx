import { useState } from 'react';
import './App.css';
import Studies from './Studies';
import Experience from './Experience';
import Skills from './Skills';
import Menu from './Menu';
import FloatingButtons from './FloatingButtons';

type Section = 'studies' | 'experience' | 'skills';

function App() {
  const [activeSection, setActiveSection] = useState<Section>('studies');

  return (
    <div className="App">
      <div className='row'>

        <div className='col-xs-0 col-md-1 col-lg-2 App-Lateral'></div>

        {activeSection === 'studies' && (
          <div className="col" id="studies">
            <Studies/>
          </div>
        )}

        {activeSection === 'experience' && (
          <div className="col" id="experience">
            <Experience/>
          </div>
        )}

        {activeSection === 'skills' && (
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
                activateStudies={() => setActiveSection('studies')}
                activateExperience={() => setActiveSection('experience')}
                activateSkills={() => setActiveSection('skills')}
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

export default App;
