import React from 'react';
// import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import ProjectModal from './ProjectModal';
import PropTypes from 'prop-types';

export default function ProjectCard({ project }) {

  return (
    <div className="project-card">
      <div className="card-body">
        <h4 className="card-title">{project.title}</h4>
        <img src={project.featurePhoto} className="card-img" alt="item" />
        <div>
          <ProjectModal project={project}/>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
    project: PropTypes.shape(PropTypes.obj).isRequired
};
