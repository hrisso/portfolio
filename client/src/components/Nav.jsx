import React from 'react';
import resume from '../assets/HeatherRissoResume.pdf';

export default function Nav() {
  return (
    <div className="nav">
      <h1>Heather Risso</h1>
      <div className="nav-right">
      <a href="#about-me">About Me</a>
      <a href="#projects">Projects</a>
        <a href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
    </div>
  )
}
