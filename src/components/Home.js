import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <section id="home">
      <div className="home-content">
        <img src="/images/flowers.png" alt="flower" className="flower" />
        <h1 className="hello">Hi, I'm Nina.</h1>
        <p className="intro">
          As a student of Computer Science and Artificial Intelligence with a strong foundation in software engineering, machine learning, and research, my work blends technology with creativity.
        </p>
      </div>
    </section>
  );
}