'use client';
import { Card } from 'flowbite-react';
import { projects } from 'app/projects.js';
import { AiFillGithub } from 'react-icons/ai'
export default function Projects() {
  const sortProjects = (p) => {
    p.sort((a, b) => b.title.localeCompare(a.title));
    return p;
  };

  const sortedProjects = sortProjects(projects);
  
  return (
    <>
      <div className='m-8 flex flex-wrap justify-center'>
        {sortedProjects.map((project) => (
          <div key={project.id}>
            <Card className='w-30 mx-10' horizontal imgSrc={project.image}>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {project.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {project.description}
              </p>
              <a href={project.github}><AiFillGithub className='text-black'/></a>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}
