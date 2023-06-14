import React from 'react'
import {AiOutlineHome , AiFillGithub ,AiFillLinkedin} from 'react-icons/ai'
import {BsTelephone} from 'react-icons/bs'
import {MdOutlineMarkEmailRead} from 'react-icons/md'

import {BsFacebook} from 'react-icons/bs'


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='footer-left'>
                <div>
                    <AiOutlineHome size={20} />
                    <p>Sankt Nikolaji Vej.Copenhagen</p>
                </div>
                <div>
                    <BsTelephone size={20} />
                    <p>+45-50370009</p>
                </div>
                <div>
                    <MdOutlineMarkEmailRead size={20} />
                    <p>Ahmed.elshrkawy3681@gmail.com</p>
                </div>
            </div>
            <div className='footer-right'>
                <div className='footer-icon'>
                  <a href='https://github.com/AhmedElsharkawi' target="_blank" rel='noreferrer' ><AiFillGithub size={45}  /></a>  
                </div>
               <div  className='footer-icon'>
                 <a href='https://www.linkedin.com/in/ahmed-elsharkawi-b70326162/' target="_blank" rel='noreferrer'  >
                    <AiFillLinkedin size={45}    />
                 </a>
               </div>
                <div className='footer-icon'>
                    <a href='https://www.facebook.com/ahmed.a.elshrkawy/' target="_blank" rel='noreferrer'  >
                        <BsFacebook size={45}   />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer