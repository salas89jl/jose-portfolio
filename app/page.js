import Image from 'next/image'
import {BsMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin, AiFillGithub, AiFillTwitterCircle, AiFillHtml5} from 'react-icons/ai'
import {IoLogoJavascript} from 'react-icons/io'
import avatar from '/Users/learnacademy/Desktop/jose-portfolio/public/img-1.jpeg'
import design from 'public/design.png'
import {BsFillEnvelopeAtFill} from 'react-icons/bs'
import {DiRuby} from 'react-icons/di'


export default function Home() {
  return (
    <main className='bg-gradient-to-t from-cyan-500 to-slate-800  text-white'>
      <section className='min-h-screen' >
       <nav className='bg-slate-900 p-10 mb-12 flex justify-between shadow-2xl'> 
       <div className='bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2  rounded-full'>
        <h1 className='text-lg font-burtons '>JS</h1>
       </div>
          <ul className='flex items-center'>
            <li> 
              <BsMoonStarsFill className='cursor-pointer text-2xl '/> 
            </li>
            <li>
              <a className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:f27f23b8-6112-43a2-8d10-55f7acc58f74">Resumé</a>
            </li>
          </ul>
       </nav>
       <div className='text-center p-10 '>
        <h2 className='text-5xl py-1 text-teal-500 font-medium'>Jose Salas</h2>
        <div className='relative mx-auto '>
        <Image src={avatar} className='mx-auto shadow-lg opacity-90 rounded-md w-80 h-70 mt-20 ' />
       </div>
        <h3 className='text-2xl py-2 '>Developer and Artist</h3>
        <p className='text-md pt-2 leading-8'>
          I am going to rule the web one day. You just wait and see!
        </p>
       </div>
       <div className='text-5xl flex justify-center gap-16 py-2'>
        <a href="#"><AiFillGithub className='text-black'/></a>
        <a href="#"><AiFillLinkedin className='text-white'/></a>
        <a href="#"><AiFillTwitterCircle className='text-white'/></a>

        <i class="devicon-adonisjs-original"></i>
          
       </div>
       
      </section>  
      <section>
        <div className='bg-black shadow-lg m-10 p-10 rounded-xl flex-1'>
        <h3 className='text-2xl text-white'>
          Contact
        </h3>
        <h1><samp><strong>Jose S.</strong></samp></h1>
          <p><samp>Software Developer | 💻 Tech & 🌳 Nature Enthusiast</samp></p>
          <h4>📫 How to reach me:</h4>
          <a className="text-white" href="https://www.linkedin.com/in/joselsalas/" >
            <img className='h-10'src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
          </a>
          <a href='salas.89jl@gmail.com'>
            <BsFillEnvelopeAtFill size='1.5rem' />
          </a>
        </div>
      </section>
   
      <section>
        <div className='bg-white p-5 mx-10 rounded-xl text-black'>
          <h3 className='text-lg font-semibold pt-8 pb-2 text-gray-800'>I work with the following:</h3>
          <h4 className='text-md font-medium text-gray-800'> Languages </h4>
          <br/>
          <div className='flex'>
            <IoLogoJavascript className=' shadow-md shadow-teal-700 rounded-xl bg-yellow-300 ' size='3rem'/>
            &nbsp;&nbsp;&nbsp; 
            <DiRuby size='3rem' className='text-red-700 shadow-md shadow-teal-700 rounded-xl' />  
            &nbsp;&nbsp;&nbsp; 
            <AiFillHtml5 size='3rem' className='text-orange-600 shadow-md shadow-teal-700 rounded-xl'/>
            &nbsp;&nbsp;&nbsp; 
            <img className='h-12 shadow-md shadow-teal-600 rounded-xl' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
              &nbsp;&nbsp;&nbsp;
            <img className='h-12 shadow-md shadow-teal-600 rounded-xl' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" /> 
          </div>
          <br/>
          <h4 className='text-md font-medium text-gray-800'> Frameworks </h4>
          <br/>
          <div className='flex flex-row'>
            <img className='h-12 shadow-md shadow-teal-600 rounded-xl' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            &nbsp;&nbsp;&nbsp; 
            
            <img className='h-12 shadow-md shadow-teal-600 rounded-xl fill-white' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
          
            &nbsp;&nbsp;&nbsp; 
            <img className='h-12 shadow-md shadow-teal-600 rounded-xl' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg" />
            &nbsp;&nbsp;&nbsp;  
            <img className='h-12 shadow-md shadow-teal-600 rounded-xl' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" />
            &nbsp;&nbsp;&nbsp;
            <img className='h-12 shadow-md shadow-teal-600 rounded-xl' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
            &nbsp;&nbsp;&nbsp;
            <img className='h-12 shadow-md shadow-teal-600 rounded-xl' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />  
          </div>
        </div>
        <div className=' bg-white text-center shadow-lg p-10 rounded-xl m-10 flex-1'>
          <Image src={design} width={100} height={100} className='mx-auto' />
          <h3 className='text-lg font-medium pt-8 pb-2 text-gray-800'>Beautiful Designs</h3>
          <p className='py-2 text-gray-900'>
             Creating elegant designs suited for your needs following core design theory.
          </p>
          <h4 className='py-4 text-teal-600'>Design tools I use</h4>
          <p className='text-gray-800 py-1'>Figma</p>
        </div>
      </section>
      <section>
        <div className='bg-white p-5 m-10 rounded-xl text-black'>
          <h3 className='text-3xl py-1'>Portfolio</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
        </div>
      </section>
      <footer className='bg-cyan-600 bottom-0 p-10 text-center'>
      <h3>
        This is my footer | Copyrights are all in this bitch
      </h3>
      </footer>
    </main>
  
  )
}
