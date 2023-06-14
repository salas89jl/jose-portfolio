'use client'
import { Card } from 'flowbite-react'
import { projects } from 'app/projects.js'
import { AiFillGithub } from 'react-icons/ai'
import React from 'react'
export default function Projects () {
  const sortProjects = (p) => {
    p.sort((a, b) => a.title.localeCompare(b.title))
    return p
  }

  const sortedProjects = sortProjects(projects)

  return (
    <>
      <div className='mx-8 mt-2 flex flex-wrap justify-center'>
        {sortedProjects.map((project) => (
          <div key={project.id}>
            <Card className='w-30 mx-10' horizontal imgSrc={project.image}>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {project.title}
              </h5>
              <div className=" h-44 w-56 overflow-hidden hover:overflow-auto">
                <div>
                    <p className="font-normal text-gray-700  dark:text-gray-400">
                        {project.description}
                    </p>
                </div>
                </div>
               <h3 className='text-3xl'>
              <a href={project.github}><AiFillGithub className='text-black' /></a>
              </h3>
            </Card>
          </div>
        ))}
      </div>
    </>
  )
}
