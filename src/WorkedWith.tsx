import { memo } from 'react';
import './WorkedWith.css';

const LOGOS = [
  { src: '/wazuh.png', alt: 'Wazuh' },
  { src: '/intel.png', alt: 'Intel' },
  { src: '/personal-logo.png', alt: 'Telecom Personal' },
  { src: '/mcafee.png', alt: 'McAfee' },
];

const WorkedWith = memo(() => {
  return (
    <div className="WorkedWith">
      <span className="WorkedWith-label">Worked with</span>
      <ul className="WorkedWith-list">
        {LOGOS.map(({ src, alt }) => (
          <li key={alt} className="WorkedWith-item">
            <img src={src} alt={alt} loading="lazy" />
          </li>
        ))}
      </ul>
    </div>
  );
});

export default WorkedWith;
