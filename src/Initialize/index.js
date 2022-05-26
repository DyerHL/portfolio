import React from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';

function Initialize() {
  return (
    <div className="app">
      <Navbar />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  );
}

export default Initialize;
