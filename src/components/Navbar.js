import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/src/collapse';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-light justify-content-center fixed-top bg-white">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#about">ABOUT
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">CONTACT
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">PROJECTS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#tech">TECHNOLOGIES
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
