import React from 'react';
import projects from './projects';
import './style.css';

function Portfolio() {

   return (
      <section className='project-section d-flex justify-content-around flex-wrap'>
         {projects.map(project => {
            return (
               <div className="card bg-dark text-white rounded m-1 flex-row project" key={project.title}>
                  <img src={project.source} className="card-img" alt={project.title} />
                  <div className="card-img-overlay">
                     <h5 className="card-title">{project.title}</h5>
                     <p className="card-text">{project.description}</p>
                     <a href={project.link} target='_blank' rel="noreferrer">See it deployed!</a>
                     <br/>
                     <a href={project.repo} target='_blank' rel="noreferrer">This is the repository!</a>
                  </div>
               </div>
            );
         })}
      </section>
   );
}

export default Portfolio;