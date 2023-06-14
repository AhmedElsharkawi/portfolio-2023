import React from 'react'
import { Link } from 'react-router-dom'
import homeimg from '../assets/istockphoto-1322201796-612x612.jpg'
import Typed from 'react-typed';
import {AiFillHtml5} from 'react-icons/ai'
import {SiCss3 , SiRedux} from 'react-icons/si'
import {TbBrandJavascript} from 'react-icons/tb'

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
            Hi, I'm a Front-End 
          
            </p>
          
          <h1>
          <Typed
                      strings={["React Developer"]}
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
    <div className='skillIcon'>
      <SiRedux color='#8533ff' />
<h3>REDUX</h3>
    </div>
    
   <div className='skillIcon' >
     < FaReact color='#80dfff' />
     <h3>REACT JS</h3>
   </div>
    
    
        </div>
      </div>
  </>
  )
}

export default Home