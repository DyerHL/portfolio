import React from 'react';
// import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import ProjectModal from './ProjectModal';

export default function ProjectCard() {

  return (
    <div className="project card">
      Im a card
      <div className="card-body">
        <h3 className="card-header">Project Name</h3>
        <img src="" className="card-img" alt="item" />
        <div className="button-row">
          <ProjectModal />
        </div>
      </div>
    </div>
  );
}
