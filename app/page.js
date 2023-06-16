'use client'
import AniText from './comps/AniText'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import avatar from '../public/img-1.jpeg'
import { BsFillEnvelopeAtFill } from 'react-icons/bs'
import Icons from './comps/Icons'
import Image from 'next/image'
import design from 'public/design.png'
import Projects from './comps/Projects'
import NavBar from './comps/Navbar'
import React from 'react'
import GoBackButton from './comps/Button/GoBackButton'

export default function Home () {
  return (

    <main className='bg-gradient-to-t from-cyan-500 to-slate-800  text-white'>
      <NavBar className='bg-slate-800' />
      <section className='min-h-auto flex flex-wrap justify-evenly motion-safe' >
        <div className='text-center p-10 rounded-xl mt-20 mx-10 flex-1 motion-safe:'>
           <h1 className="  text-5xl py-1 bg-gradient-to-r from-teal-400 via-cyan-500 to-indigo-400 inline-block text-transparent bg-clip-text font-bold">Jose Salas</h1>
           <h2 className='text-5xl py-1 text-teal-500 font-medium'></h2>
           <div className='relative mx-auto '>
            <Image src={avatar} className='mx-auto shadow-2xl opacity-90 rounded-md w-80 h-70 mt-10 ' />
            </div>
            <div className='flex flex-wrap justify-center pt-10'>
              <div className="absolute word p-10 text-center"><AniText /></div>
            </div>
        </div>
        <div id='aboutId' className=' slide-in-right text-center p-10 rounded-xl mt-32 flex-1 mx-auto '>
          <h3 className='   text-3xl h-14 p-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium flex justify-center rounded-2xl '>About Me</h3>
          <p className='text-lg p-5 bg-gradient-to-bl from-teal-400 via-cyan-500 to-cyan-600 tracking-wide text-white rounded-lg shadow-xl justfiy-center m-5'>
          I am excited to announce that I am embarking on a new journey as a full-stack developer after retiring as a Boatswains Mate Chief Petty Officer. I am eager to utilize my skills in problem-solving, attention to detail, and teamwork in this dynamic field. With a passion for technology and a desire to continuously learn, I am confident that I can make a meaningful impact as a full-stack developer. I look forward to connecting with like-minded individuals and companies with the same passion for innovation and growth.
          </p>
        </div>
      </section>
      <section id='workId' className=' min-h-auto flex flex-wrap justify-center '>
        <div className='bg-gradient-to-bl from-teal-400 via-cyan-500 to-cyan-600 text-center p-10 rounded-xl mt-10 mx-10 flex-1 motion-safe:'>
          <Image src='/code.png' width={100} height={100} className='mx-auto' />
          <div className=' mt-6 p-10 m-auto rounded-lg flex flex-wrap justify-center bg-white shadow-xl'>

           <Icons />

          </div>
        </div>
        <div className=' bg-gradient-to-br f from-teal-400 via-cyan-500 to-cyan-600 text-center p-10 rounded-xl mt-10 mx-10 flex-1 motion-safe:'>
          <Image src={design} width={100} height={100} className='mx-auto' />
          <h3 className='text-lg font-medium pt-8 pb-2 text-white'>Beautiful Designs</h3>
          <p className='py-2 text-white'>
             Creating elegant designs suited for your needs following core design theory soft.
          </p>
          <h4 className='py-4 text-teal-600'>Design tools I use</h4>
          <p className='text-gray-800 py-1'>Figma</p>
        </div>
      </section>
      <section id='projectsId'>
        <div className='bg-gradient-to-tl from-teal-400 via-cyan-500 to-cyan-600 p-5 m-10 rounded-xl shadow-xl text-center'>
          <h3 className='text-xl font-medium pt-8 pb-2 text-white py-1'>Projects</h3>
            <p className="text-md py-2 leading-8 text-white dark:text-gray-200">
            I offer a wide range of services, including design and programming.
            </p>
            <div>
              <Projects />
            </div>
        </div>
      </section>
      <div id='contactId' className='bg-black shadow-lg  m-10 p-10 rounded-xl flex-1' >
          <div className='text-5xl flex justify-center gap-10 py-2'>
            <a href="https://github.com/salas89jl"><AiFillGithub className='text-white'/></a>
            <a href="https://www.linkedin.com/in/joselsalas/"><AiFillLinkedin className='text-white'/></a>
            <a href='mailto:salas.89jl@gmail.com'>
              <BsFillEnvelopeAtFill size='2.5rem' />
            </a>
          </div>
        </div>
      <GoBackButton />
      <footer className='bg-cyan-600 bottom-0 p-10 text-center'>
        <h3>
          Jose Salas | Copyrights
        </h3>
      </footer>
    </main>

  )
}
