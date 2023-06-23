'use client'
import AniText from './comps/AniText'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import avatar from '../public/img-1.jpeg'
import { BsFillEnvelopeAtFill } from 'react-icons/bs'
import Icons from './comps/Icons'
import Image from 'next/image'
import Projects from './comps/Projects'
import NavBar from './comps/Navbar'
import React from 'react'
import GoBackButton from './comps/Button/GoBackButton'
import YoutubeVideo from './comps/Video'
import lecture4 from 'public/lecture4.png'
import TreasureHunt from './comps/TreasureHunt'

export default function Home () {
  return (

    <main className='bg-gradient-to-tl from-cyan-600 via-cyan-700 to-slate-800  text-white'>
      <NavBar />
      <section className='min-h-auto flex flex-wrap justify-evenly motion-safe' >
        <div className='text-center p-10 rounded-xl mt-20 mx-10 flex-1 motion-safe:'>
           <h1 className="  text-6xl py-1 bg-gradient-to-r from-teal-400 via-cyan-500 to-indigo-400 inline-block text-transparent bg-clip-text font-bold">Jose Salas</h1>
           <h2 className='text-5xl py-1 text-teal-500 font-medium'></h2>
           <div className='relative mx-auto '>
            <Image src={avatar} className=' mx-auto shadow-xl shadow-slate-800 rounded-xl w-80 h-70 mt-10 ' />
            </div>
            <div className='flex flex-wrap justify-center pb-10 '>
              <div className="absolute word p-10 text-center"><AniText /></div>
            </div>
        </div>

      </section>
      <section>
      <div id='aboutId' className=' slide-in-right text-center p-10 rounded-xl mt-10 flex-1 mx-auto '>
          <h3 className='   text-3xl  p-3 m-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium flex justify-center rounded-xl shadow-xl shadow-slate-800  '>About Me</h3>
          <p className='text-lg p-5 bg-gradient-to-bl from-teal-400 via-cyan-500 to-cyan-600 tracking-wide text-white rounded-lg shadow-xl shadow-slate-800 justfiy-center m-5'>
          I am excited to announce that I am embarking on a new journey as a full-stack developer after retiring as a Boatswains Mate Chief Petty Officer. I am eager to utilize my skills in problem-solving, attention to detail, and teamwork in this dynamic field. With a passion for technology and a desire to continuously learn, I am confident that I can make a meaningful impact as a full-stack developer. I look forward to connecting with like-minded individuals and companies with the same passion for innovation and growth.
          </p>
        </div>
      </section>
      <section id='workId' className=' min-h-auto flex flex-wrap justify-center '>
        <div className='bg-gradient-to-bl from-teal-400 via-cyan-500 to-cyan-600 text-center p-10 rounded-xl mt-10 mx-10 flex-1 shadow-xl shadow-sky-950  motion-safe:'>
          <Image src='/code2.png' width={100} height={100} className='mx-auto shadow-lg shadow-sky-800 rounded-full border-4 border-cyan-500' />
          <h3 className="text-xl font-medium pt-8 pb-2  text-white">Code</h3>
          <div className=' mt-6 p-5 mx-10 rounded-lg flex flex-wrap justify-center bg-gradient-to-bl from-cyan-400 to-cyan-600 shadow-xl shadow-sky-900 '>
           <Icons />
          </div>
        </div>
      </section>
      <section id='techTalk'>
      <div className="bg-gradient-to-bl from-teal-400 via-cyan-500 to-cyan-600 text-center p-10 rounded-xl mt-20 mx-10 flex-1 shadow-xl shadow-sky-950 motion-safe">
          <Image src={lecture4} width={100} height={100} className="mx-auto  rounded-full shadow-lg shadow-sky-800" />
          <h3 className="text-xl font-medium pt-8 pb-2 text-white">Tech Talks</h3>
          <div className="mt-6 p-4 rounded-lg flex flex-wrap justify-center bg-gradient-to-bl from-cyan-400 to-cyan-600 shadow-xl shadow-sky-900 ">
            <div className="w-full aspect-w-16 aspect-h-0 ">
              <YoutubeVideo />

            </div>

          </div>
        </div>
      </section>
      <section id='treasureHunt'>
        <div className="bg-gradient-to-bl from-teal-400 via-cyan-500 to-cyan-600 text-center p-10 rounded-xl mt-20 mx-10 flex-1 shadow-xl shadow-sky-950 motion-safe" >
          <div >
            <TreasureHunt />
          </div>
        </div>
      </section>
      <section id='projectsId'>
        <div className='
        bg-gradient-to-bl from-teal-400 via-cyan-500 to-cyan-600 mx-10 mt-20 rounded-xl
        p-10 shadow-xl shadow-sky-950  text-center'>
        <Image src={'/projects2.png'} width={100} height={100} className="mx-auto  rounded-full border-1 border-cyan-500 shadow-lg shadow-sky-800" />
          <h3 className='text-xl font-medium pt-8  text-white py-2'>Projects</h3>
            <p className="text-md py-6 leading-8 text-white dark:text-gray-200">
            I offer a wide range of services, including design and programming!
            </p>
            <div>
              <Projects />
            </div>
        </div>

      </section>
      <div id='contactId' className='bg-black shadow-lg shadow-sky-950  m-10 p-10 rounded-xl flex-1' >
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
