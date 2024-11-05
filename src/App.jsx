import React from 'react'

import Mainsection from './constants/mainsection'
import Technologies from './constants/technologies'
import Experience from './constants/Experience'
import Projects from './constants/projects'
import Navbarnew from './constants/Navbarnew'
import Contact from './constants/contact'
const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialised selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed top-0 -z-10 h-full w-full'>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      </div>
     </div>
       <div className='container mx-auto px-8'>
        <Navbarnew/>
       <Mainsection/>
       <Technologies/>
       <Experience/>
       <Projects/>
       <Contact/>
       </div>
       </div>
  )
}


export default App
