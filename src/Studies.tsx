import { useState, useEffect, type ReactNode } from 'react';
import './Studies.css';

type StudyModal = {
  title: string;
  date: string;
  description: ReactNode;
  media: ReactNode;
  ref?: string;
};

const modals: Record<string, StudyModal> = {
  thesis: {
    title: 'Thesis Project',
    date: '2021',
    description: (
      <ul className="exp-bullets">
        <li>Developed an obstacle avoidance system in Python on Raspberry Pi for autonomous vehicles.</li>
      </ul>
    ),
    media: <img src="thesis.png" alt="Thesis Screenshot" loading="lazy" />,
  },
  reactjs: {
    title: 'ReactJs Project',
    date: '2021',
    description: (
      <ul className="exp-bullets">
        <li>Final project for the ReactJs course at CoderHouse. E-commerce built with ReactJs and Firebase.</li>
      </ul>
    ),
    media: <img src="tecnoshop.gif" alt="ReactJs Screenshot" loading="lazy" />,
  },
};

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const Studies = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const modal = activeModal ? modals[activeModal] : null;

  useEffect(() => {
    if (!modal) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveModal(null);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [modal]);

  return (
    <>
      <div className='App-title'>Studies</div>
      <div className='App-description'>
        <button
          type="button"
          className='study-featured study-trigger'
          onClick={() => setActiveModal('thesis')}
          aria-haspopup="dialog"
        >
          <div className='study-trigger-body'>
            <div className='study-heading'>
              <span className="study-title">Computer Engineer</span>
              <span className="study-date">2008 – 2022</span>
            </div>
            <small>Universidad Nacional de Córdoba</small>
          </div>
          <span className='study-arrow' aria-hidden="true"><ArrowIcon /></span>
        </button>

        <div className='study-group'>
          <ul>
            <li>
              <div className='study-heading'>
                <span className="study-title">Become a Better Engineer by Understanding Product Management</span>
                <span className="study-date">2026</span>
              </div>
              <small>Udemy</small>
            </li>
            <li>
              <div className='study-heading'>
                <span className="study-title">Development with AI</span>
                <span className="study-date">2026</span>
              </div>
              <small>BIG School</small>
            </li>
            <li>
              <div className='study-heading'>
                <span className="study-title">Python Advanced</span>
                <span className="study-date">2023</span>
              </div>
              <small>LinkedIn Learning</small>
            </li>
            <li>
              <div className='study-heading'>
                <span className="study-title">AWS Practitioner</span>
                <span className="study-date">2022</span>
              </div>
              <small>ISPC</small>
            </li>
            <li>
              <button
                type="button"
                className='study-trigger'
                onClick={() => setActiveModal('reactjs')}
                aria-haspopup="dialog"
              >
                <div className='study-trigger-body'>
                  <div className='study-heading'>
                    <span className="study-title">ReactJS</span>
                    <span className="study-date">Jul 2021 – Sep 2021</span>
                  </div>
                  <small>CoderHouse</small>
                </div>
                <span className='study-arrow' aria-hidden="true"><ArrowIcon /></span>
              </button>
            </li>
            <li>
              <div className='study-heading'>
                <span className="study-title">English Level B1</span>
                <span className="study-date">2021 – 2022</span>
              </div>
              <small>GAPS Academy</small>
            </li>
          </ul>
        </div>
      </div>

      {modal && (
        <div className='study-modal-overlay' onClick={() => setActiveModal(null)}>
          <div
            className='study-modal'
            role="dialog"
            aria-modal="true"
            aria-label={modal.title}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className='study-modal-close'
              onClick={() => setActiveModal(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <div className='study-heading'>
              <span className="study-title">{modal.title}</span>
              <span className="study-date">{modal.date}</span>
            </div>
            <div className='exp-description'>{modal.description}</div>
            <div className='cap'>{modal.media}</div>
            {modal.ref && (
              <div className='ref'>
                <a href={modal.ref} target='_blank' rel="noopener noreferrer">{modal.ref}</a>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Studies;
