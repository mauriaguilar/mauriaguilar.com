import { useState, useCallback, lazy, Suspense } from 'react';
import './App.css';
import Studies from './Studies';
import Menu from './Menu';
import FloatingButtons from './FloatingButtons';

const Experience = lazy(() => import('./Experience'));
const Skills = lazy(() => import('./Skills'));

type Section = 'studies' | 'experience' | 'skills';

function App() {
  const [activeSection, setActiveSection] = useState<Section>('studies');

  const activateStudies = useCallback(() => setActiveSection('studies'), []);
  const activateExperience = useCallback(() => setActiveSection('experience'), []);
  const activateSkills = useCallback(() => setActiveSection('skills'), []);

  return (
    <div className="App">
      <div className='row'>

        <div className='col-xs-0 col-md-1 col-lg-2 App-Lateral'></div>

        <div className="col">
          <Suspense fallback={null}>
            {activeSection === 'studies' && (
              <div id="studies">
                <Studies/>
              </div>
            )}
            {activeSection === 'experience' && (
              <div id="experience">
                <Experience/>
              </div>
            )}
            {activeSection === 'skills' && (
              <div id="skills">
                <Skills/>
              </div>
            )}
          </Suspense>
        </div>

        <div className='col-xs-0 col-md-1 col-lg-2 App-Lateral'></div>

      </div>

      <div className='row'>
        <div className='col App-navbar'>

          <div className='row'>

            <div className='col-xs-0 col-md-1 col-lg-2 App-Lateral'></div>
            <div className='col'>
              <Menu
                activateStudies={activateStudies}
                activateExperience={activateExperience}
                activateSkills={activateSkills}
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
