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
      <div className="mx-4 mt-2 flex flex-wrap justify-center">
        {sortedProjects.map((project) => (
          <div key={project.id} className="w-96 mb-8 mx-auto shadow-lg">
            <Card className="h-full border-none bg-gradient-to-bl  from-gray-800 via-gray-700 to-gray-900 shadow-xl shadow-sky-900 ">
              <img src={project.image} alt={project.title} className="object-cover h-44 w-full rounded-sm border-4 border-gray-900" />
                <h5 className="text-xl font-bold tracking-tight  text-white  dark:text-white">
                {project.title}
                </h5>
                <div className="h-44 overflow-hidden shadow-lg bg-gray-900 rounded-sm  p-2 hover:overflow-auto border-4 border-gray-600">
                  <blockquote className='rounded-md shadow-lg'>
                    <p className="font-normal text-left text-gray-300 p-2  dark:text-gray-400">
                      {project.description}
                   </p>
                  </blockquote>
                </div>
                <h3 className="text-3xl">
                <a href={project.github}>
                  <AiFillGithub className="text-white" />
                </a>
              </h3>
            </Card>
          </div>
        ))}
      </div>
    </>
  )
}
