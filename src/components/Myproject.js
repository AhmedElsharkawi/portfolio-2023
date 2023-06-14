import React from 'react'
import { projects } from '../Data/Data'
import Slide from 'react-reveal/Slide'
const Myproject = () => {
    return (
        <div className='project-sec'>
            {projects.map((proj) => {
                return (
                    <div className='projects' key={proj.id}>
                        <Slide left>
                            <div className='project-right' >
                                <h2 className='img-title'>{proj.title}</h2>
                                <h5 className='img-desc'>{proj.description}</h5>
                            </div>
                        </Slide>
                        <Slide right  >
                            <div className='project-img' >
                                <img src={proj.image} alt='img' />
                            </div>
                        </Slide>


                    </div>
                )

            })}
        </div>
    )
}

export default Myproject
