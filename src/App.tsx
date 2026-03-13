import { useState, useCallback, useRef, lazy, Suspense } from 'react';
import './App.css';
import Studies from './Studies';
import Menu from './Menu';
import FloatingButtons from './FloatingButtons';

const Experience = lazy(() => import('./Experience'));
const Skills = lazy(() => import('./Skills'));

type Section = 'studies' | 'experience' | 'skills';

const SECTIONS: Section[] = ['studies', 'experience', 'skills'];
const SWIPE_THRESHOLD = 50; // px mínimos para considerar swipe válido

function App() {
  const [activeSection, setActiveSection] = useState<Section>('studies');
  const touchStartX = useRef<number | null>(null);

  const activateStudies = useCallback(() => setActiveSection('studies'), []);
  const activateExperience = useCallback(() => setActiveSection('experience'), []);
  const activateSkills = useCallback(() => setActiveSection('skills'), []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(deltaX) < SWIPE_THRESHOLD) return;

    setActiveSection(current => {
      const currentIndex = SECTIONS.indexOf(current);
      if (deltaX < 0) {
        // swipe izquierda → sección siguiente
        return SECTIONS[Math.min(currentIndex + 1, SECTIONS.length - 1)];
      } else {
        // swipe derecha → sección anterior
        return SECTIONS[Math.max(currentIndex - 1, 0)];
      }
    });
  }, []);

  return (
    <div
      className="App"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >

      <header className="App-header">
        <h1>Mauri Aguilar</h1>
        <div className="header-role">Senior Backend Engineer</div>
        <div className="header-contact">
          <a href="mailto:aguilarmauri@gmail.com">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757ZM16 11.801V4.697l-5.803 3.546L16 11.801Z"/>
            </svg>
            aguilarmauri@gmail.com
          </a>
          <a href="https://mauriaguilar.com">mauriaguilar.com</a>
        </div>
      </header>

      <div className='row'>
        <div className='col-xs-0 col-md-1 col-lg-2 App-Lateral'></div>
        <main className="col">
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
        </main>
        <div className='col-xs-0 col-md-1 col-lg-2 App-Lateral'></div>
      </div>

      <div className='App-navbar'>
        <div className='row'>
          <div className='col-xs-0 col-md-1 col-lg-2 App-Lateral'></div>
          <div className='col'>
            <Menu
              activeSection={activeSection}
              activateStudies={activateStudies}
              activateExperience={activateExperience}
              activateSkills={activateSkills}
            />
          </div>
          <div className='col-xs-0 col-md-1 col-lg-2 App-Lateral'></div>
        </div>
      </div>

      <div className='SideButtons'>
        <FloatingButtons />
      </div>

    </div>
  );
}

export default App;
