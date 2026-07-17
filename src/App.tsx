import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';
import Studies from './Studies';
import Menu from './Menu';
import FloatingButtons from './FloatingButtons';
import Experience from './Experience';
import Skills from './Skills';

type Section = 'experience' | 'skills' | 'studies';

const SECTIONS: Section[] = ['experience', 'skills', 'studies'];

function App() {
  const [activeSection, setActiveSection] = useState<Section>('experience');
  const sectionRefs = useRef<Record<Section, HTMLElement | null>>({
    experience: null,
    skills: null,
    studies: null,
  });
  const isClickScrolling = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;

        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const id = visible[0].target.id as Section;
          setActiveSection(id);
        }
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    SECTIONS.forEach(section => {
      const el = sectionRefs.current[section];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = useCallback((section: Section) => {
    const el = sectionRefs.current[section];
    if (!el) return;

    isClickScrolling.current = true;
    setActiveSection(section);
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });

    window.clearTimeout((scrollToSection as unknown as { _t?: number })._t);
    (scrollToSection as unknown as { _t?: number })._t = window.setTimeout(() => {
      isClickScrolling.current = false;
    }, 700);
  }, []);

  const activateExperience = useCallback(() => scrollToSection('experience'), [scrollToSection]);
  const activateSkills = useCallback(() => scrollToSection('skills'), [scrollToSection]);
  const activateStudies = useCallback(() => scrollToSection('studies'), [scrollToSection]);

  return (
    <div className="App">

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
          <section id="experience" ref={(el) => { sectionRefs.current.experience = el; }}>
            <Experience/>
          </section>
          <section id="skills" ref={(el) => { sectionRefs.current.skills = el; }}>
            <Skills/>
          </section>
          <section id="studies" ref={(el) => { sectionRefs.current.studies = el; }}>
            <Studies/>
          </section>
        </main>
        <div className='col-xs-0 col-md-1 col-lg-2 App-Lateral'></div>
      </div>

      <div className='App-navbar'>
        <div className='row'>
          <div className='col-xs-0 col-md-1 col-lg-2 App-Lateral'></div>
          <div className='col'>
            <Menu
              activeSection={activeSection}
              activateExperience={activateExperience}
              activateSkills={activateSkills}
              activateStudies={activateStudies}
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
