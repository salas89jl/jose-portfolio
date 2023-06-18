'use client'
import React from 'react'
import { Button, Navbar } from 'flowbite-react'

export default function NavBar () {
  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault()
    const section = document.getElementById(sectionId)
    section.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Navbar
      fluid
      rounded

    >
      <Navbar.Brand href="">
        <img
          alt="Jose Saslas Logo"
          className="mr-3 h-20"
          src='/pflogo.png'
        />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button href='https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:f1e22db7-6e35-41ee-ba55-991a21e31100'>
          Resumé
        </Button>
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
  )
}
