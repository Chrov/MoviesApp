import { useState } from 'react'
import './about.css'

const About = () => {
  const [status, setStatus] = useState(false)
  console.log(status);

  const changeStatus = () => {
    setStatus(!status)
  }

  return (<div className='aboutContainer'>
    <button className='aboutButton' onClick={changeStatus}> 
      About {status}
    </button>

  {
    status
    ? <p>
      Hello my name is Camilo Vergara, I'm Full Stack Web Developer, in this oportunity I was working with React, Router, and 
      movie API consumption, I hope that you like the project, all made thinking responsive.
      TIP: If you want to see the movie that you select go to the bottom side and you will see the link to Cuevana, Enjoy!!
    </p>
    : ""
  }
  </div>
  )
}

export default About