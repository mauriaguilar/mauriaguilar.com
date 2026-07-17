import { useState, useEffect, type ReactNode } from 'react';
import './Studies.css';

type StudyModal = {
  title: string;
  description: ReactNode;
  media: ReactNode;
  ref?: string;
};

const modals: Record<string, StudyModal> = {
  thesis: {
    title: 'Thesis Project (2021)',
    description: (
      <ul className="exp-bullets">
        <li>Developed an obstacle avoidance system in Python on Raspberry Pi for autonomous vehicles.</li>
      </ul>
    ),
    media: <img src="thesis.png" alt="Thesis Screenshot" loading="lazy" />,
  },
  reactjs: {
    title: 'ReactJs Project (2021)',
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
            <span className="item-info-c1">Computer Engineer</span>
            <small>Universidad Nacional de Córdoba (2008 - 2022)</small>
          </div>
          <span className='study-arrow' aria-hidden="true"><ArrowIcon /></span>
        </button>

        <div className='study-group'>
          <ul>
            <li>
              <span className="item-info-c1">Python Advanced</span>
              <small>LinkedIn Learning (2023)</small>
            </li>
            <li>
              <button
                type="button"
                className='study-trigger'
                onClick={() => setActiveModal('reactjs')}
                aria-haspopup="dialog"
              >
                <div className='study-trigger-body'>
                  <span className="item-info-c1">ReactJS</span>
                  <small>CoderHouse (07/2021 - 09/2021)</small>
                </div>
                <span className='study-arrow' aria-hidden="true"><ArrowIcon /></span>
              </button>
            </li>
            <li>
              <span className="item-info-c1">Become a Better Engineer by Understanding Product Management</span>
              <small>Udemy (2026)</small>
            </li>
            <li>
              <span className="item-info-c1">Development with AI</span>
              <small>BIG School (2026)</small>
            </li>
            <li>
              <span className="item-info-c1">AWS Practitioner</span>
              <small>ISPC (2022)</small>
            </li>
            <li>
              <span className="item-info-c1">English Level B1</span>
              <small>GAPS Academy (2021, 2022)</small>
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
            <span className="item-info-c2">{modal.title}</span>
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
