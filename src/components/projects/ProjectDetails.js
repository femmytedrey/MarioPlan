import React from 'react'
// import { useLocation, useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const ProjectDetails = (props) => {
    const {id} = useParams()
  return (
    <div className='container section project-details'>
        <div className='card z-depth-0'>
            <div className='card-content'>
                <span className='card-title'>Project Title - {id}</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa</p>
            </div>
            <div className='card-action grey lighten-4 grey-text'>
                <div>Posted by FemiDev</div>
                <div>16th January, 9pm</div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails
