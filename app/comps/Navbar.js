import React, { useState } from 'react'
import { Button, Navbar } from 'flowbite-react'
import ResumeModal from './Modals/ResumeModal'

export default function NavBar () {
  const [openModal1, setOpenModal1] = useState(false)

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault()
    const section = document.getElementById(sectionId)
    section.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Brand href="">
          <img alt="Flowbite React Logo" className="mr-3 h-16" src="/pflogo.png" />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <ResumeModal openModal1={openModal1} setOpenModal1={setOpenModal1} />
          <Button className='bg-gradient-to-tr from-cyan-600 to-cyan-900' onClick={() => setOpenModal1(true)}>Resumé</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
        <Navbar.Link className='text-lg' href="aboutId" onClick={(e) => handleScrollToSection(e, 'aboutId')} >
          About
        </Navbar.Link>
        <Navbar.Link className='text-lg' href="workId" onClick={(e) => handleScrollToSection(e, 'workId')}>
          Services
        </Navbar.Link>
        <Navbar.Link className='text-lg' href="techTalk" onClick={(e) => handleScrollToSection(e, 'techTalk')}>
          Tech Talks
        </Navbar.Link>
        <Navbar.Link className='text-lg' href="treasureHunt" onClick={(e) => handleScrollToSection(e, 'treasureHunt')}>
          Treasure Hunt
        </Navbar.Link>
        <Navbar.Link className='text-lg' href="projectsId" onClick={(e) => handleScrollToSection(e, 'projectsId')}>
          Projects
        </Navbar.Link>
        <Navbar.Link className='text-lg' href="contactId" onClick={(e) => handleScrollToSection(e, 'contactId')}>
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
      </Navbar>
    </>
  )
}
