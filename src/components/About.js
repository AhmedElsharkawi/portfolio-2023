import React from 'react'
import Heroimg from './Heroimg'
import aboutimg from "../assets/343817581_204448919175604_2634221712662876163_n.jpg"
const About = () => {
  return (
    <div className='about-sec'>
      <Heroimg image={aboutimg} heading="Hello there!" title=" I am skilled in creating responsive and user-friendly interfaces that enhance the user experience." />
      <div className='whoAmI'>
        <h1>Who Am I ?</h1>
        <h4>My name is Ahmed, I am a dedicated professional in the field of web development.
           With a strong background in Front-End and Back-End technologies,
           I bring a wealth of experience and expertise to every project I undertake.

          </h4>
      </div>
    </div>
  )
}

export default About