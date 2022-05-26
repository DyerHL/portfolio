import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import projects from '../assets/projects.json';

export default function Projects() {
  const [projectsItem, setProjectsItem] = useState([]);

  useEffect(() => {
    setProjectsItem(projects.individualProjects);
  }, []);

  return (
    <div className="projects" id="projects">
      <br />
      <br />
      <div className='fill-center'>
        <div className="fill">Projects</div>
      </div>
      <div className="body-projects">
        {projectsItem.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
}
