import React from 'react';
import './About.css';

export default function About() {
  return (
    <section id="about">
      <h1 className="about">About Me</h1>
      <div className="about-content">
        <img src="/images/my photo.jpg" alt="about-image" className="about-image" />
        <div className="about-text">
          <p className='text-one'>It's nice to meet you!</p>
          <p className='text-two'>
            I’m a third-year student studying Computer Science Honors and Artificial Intelligence at Purdue University. With a strong background in software engineering, machine learning, and research, I’m passionate about building technology that bridges creativity and real-world impact. My projects have ranged from applying AI in healthcare to developing tools that support student learning. <br /><br />
            Outside of tech, I enjoy exploring creativity through art, fashion, and digital design, and I stay busy by going to the gym, cooking, and reading. <br /><br />
            I’m currently seeking summer internship opportunities in software engineering or machine learning where I can grow, collaborate, and create meaningful solutions.
          </p>
          <a className="resume-button" href="images/Nina_Gruteser_Resume_2025.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}