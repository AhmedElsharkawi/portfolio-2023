import React from 'react'
import { Link } from 'react-router-dom'
import homeimg from '../assets/istockphoto-1322201796-612x612.jpg'
import Typed from 'react-typed';
import {AiFillHtml5} from 'react-icons/ai'
import {SiCss3 , SiRedux , SiTailwindcss, SiNestjs , SiPostgresql, SiPrisma} from 'react-icons/si'
import {TbBrandJavascript} from 'react-icons/tb'
import { IoLogoNodejs } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaDocker } from "react-icons/fa";







import {FaReact , FaBootstrap} from 'react-icons/fa'
const Home = () => {
  return (
  <>
      <div className='home'>
        <div className='home-img'>
          <img className='photo' src={homeimg} alt='home-img' />
        </div>
        <div className='content'>
       
        
          <p>
            Hi, I'm a
          
            </p>
          
          <h1>
          <Typed
                      strings={["Full Stack Developer"]}
                      typeSpeed={200}
                      backSpeed={100}
                      loop
                  />
            
            </h1>
        
        
          <Link to='/projects'>
          <button className='btn'>Projects</button>
          </Link>
          <Link to='/contact'>
          <button className='btn-light'>Contact</button>
          </Link>
        </div>
        
        
      </div>
    
      <div className='skills'>
        <h1>MY SKILLS</h1>
        <div className='skills-content'>
   <div className='skillIcon'>
     < AiFillHtml5  color='orange' />
     <h3>HTML</h3>
   </div>
    <div className='skillIcon' >
      <SiCss3 color=' #33adff' />
      <h3>CSS</h3>
    </div>
   <div className='skillIcon' >
     <TbBrandJavascript color='gold' />
<h3>JAVA SCRIPT</h3>
   </div>
    <div className='skillIcon' >
      < FaBootstrap color='#1d45ff' />
<h3>BOOTSTRAP</h3>
    </div>
    <div className='skillIcon' >
      <SiTailwindcss color=' #33adff' />
      <h3>TAILWIND</h3>
    </div>
    <div className='skillIcon'>
      <SiRedux color='#8533ff' />
<h3>REDUX</h3>
    </div>
    
   <div className='skillIcon' >
     < FaReact color='#80dfff' />
     <h3>REACT JS</h3>
   </div>
   <div className='skillIcon' >
      <IoLogoNodejs color=' green' />
      <h3>NODE JS</h3>
    </div>
    <div className='skillIcon' >
      <SiNestjs color=' red' />
      <h3>NEST JS</h3>
    </div>
   

    <div className='skillIcon' >
      <SiPrisma color='white' />
      <h3>PRISMA</h3>
    </div>
    <div className='skillIcon' >
      <FaDocker color='blue' />
      <h3>DOCKER</h3>
    </div>

    <div className='skillIcon' >
      <FaDatabase color='gold ' />
      <h3>(SQL-NO SQL)</h3>
    </div>



    <div className='skillIcon' >
      <DiMongodb color='green ' />
      <h3>MONGO DB</h3>
    </div>

    <div className='skillIcon' >
      <SiPostgresql color='#00d4ff' />
      <h3>POSTGRESQL</h3>
    </div>


    
    
        </div>
      </div>
  </>
  )
}

export default Home