import React from 'react'
import Heroimg from './Heroimg'
import projectimg from "../assets/project2.webp"

import Myproject from './Myproject'

const Projects = () => {
  return (
  <>
      <Heroimg image={projectimg}  heading= "My Projects ....."    />
     <Myproject />
  </>
  )
}

export default Projects