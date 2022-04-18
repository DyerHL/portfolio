import React from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';

function Initialize() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <br />
      <br />
      <About />
      <Contact />
      <Projects />
      <Technologies />
    </div>
  );
}

export default Initialize;
