'use client';

import { Button, Navbar } from 'flowbite-react';


export default function NavBar() {

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <Navbar
      fluid
      rounded
    >
      <Navbar.Brand href="">
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-14"
          src='/pflogo.png'
        />

      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button href='https://acrobat.adobe.com/link/review?uri=urn%3Aaaid%3Ascds%3AUS%3Af27f23b8-6112-43a2-8d10-55f7acc58f74'>
          Resumé
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link className='text-lg' href="aboutId" onClick={(e) => handleScrollToSection(e, 'aboutId')}   >
          About
        </Navbar.Link>
        <Navbar.Link className='text-lg' href="workId" onClick={(e) => handleScrollToSection(e, 'workId')}>
          Services
        </Navbar.Link>
        <Navbar.Link className='text-lg' href="contactId" onClick={(e) => handleScrollToSection(e, 'contactId')}>
          Contact
        </Navbar.Link>
        <Navbar.Link className='text-lg' href="projectsId" onClick={(e) => handleScrollToSection(e, 'projectsId')}>
          Projects
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}
