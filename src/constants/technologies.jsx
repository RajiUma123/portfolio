import React from 'react'
import { DiJava, DiMysql } from 'react-icons/di'
import { FaAngular, FaBootstrap, FaCss3, FaHtml5, FaNodeJs } from 'react-icons/fa'
import { RiReactjsLine } from 'react-icons/ri'
import { SiAzuredevops, SiMongodb, SiTailwindcss } from 'react-icons/si'
import { VscAzure } from 'react-icons/vsc'
import {motion}  from 'framer-motion'

const iconVariants = (duration) =>({
   initial:{}, 
   animate:{
      y:[10,-10],
      transition:{
         duration:duration,
         ease:"linear",
         repeat:Infinity,
         repeatType:"reverse"


      },
   },
   
})

function Technologies() {
  return (
    <div id='technologies' className='border-b border-neutral-900 pb-4'>
      <motion.h1
      whileInView={{opacity: 1,y: 0}}
      initial={{opacity: 0 , y: -100}}
      transition={{duration:1.5}} className='my-20 text-center text-4xl'>Technologies</motion.h1>
      <div
      whileInView={{opacity: 1,x: 0}}
      initial={{opacity: 0 , x: -100}}
      transition={{duration:1.5}}
       className='flex flex-wrap items-center justify-center gap-4'>
      <div>
      <motion.div
       variants={iconVariants(2.5)} 
       initial="initial"
       animate="animate"
       className='rounded-2xl border-4 border-neutral-800 p-4'>
        <RiReactjsLine className='text-7xl text-cyan-400'/>
       </motion.div>
     <h1 className='text-center'>React js</h1>
     </div>
     <div>
     
     <motion.div variants={iconVariants(3)} 
       initial="initial"
       animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
      <SiMongodb className='text-7xl text-green-400'/>
     </motion.div>
     <h1 className='text-center'>MongoDB</h1>
     </div>
     
     <div>
     <motion.div  variants={iconVariants(5)} 
       initial="initial"
       animate="animate"className='rounded-2xl border-4 border-neutral-800 p-4'>
        <FaNodeJs className='text-7xl text-green-500'/>
     </motion.div>
     <h1 className='text-center'>NodeJs</h1>
     </div>

     <div>
     <motion.div
     variants={iconVariants(2)} 
     initial="initial"
     animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
        <FaHtml5 className='text-7xl text-red-400'/>
     </motion.div>
     <h1 className='text-center'>HTML5</h1>
     </div>
     
     <div>
     <motion.div 
     variants={iconVariants(4)} 
     initial="initial"
     animate="animate"className='rounded-2xl border-4 border-neutral-800 p-4'>
        <FaCss3 className='text-7xl text-blue-600'/>
     </motion.div>
     <h1 className='text-center'>Css3</h1>
     </div>
     

    <div>
     <motion.div
     variants={iconVariants(2)} 
     initial="initial"
     animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
        <DiMysql className='text-7xl text-cyan-400'/>
     </motion.div>
     <h1 className='text-center'>MySql</h1>
     </div>
      
      <div>
     <motion.div
     variants={iconVariants(4)} 
     initial="initial"
     animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
        <SiTailwindcss className='text-7xl text-cyan-400'/>
     </motion.div>
     <h1 className='text-center'>Tailwind Css</h1>
     </div>
      
       
       <div>
      <motion.div 
      variants={iconVariants(3)} 
      initial="initial"
      animate="animate"className='rounded-2xl border-4 border-neutral-800 p-4'>
        <FaBootstrap className='text-7xl text-black-400'/>
     </motion.div>
     <h1 className='text-center'>Bootstrap</h1>
     </div>

      <div>
     <motion.div
     variants={iconVariants(5)} 
     initial="initial"
     animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
        <DiJava className='text-7xl text-cyan-400'/>
     </motion.div>
     <h1 className='text-center'>Java</h1>
     </div>

     

     <div>
     <motion.div variants={iconVariants(4)} 
       initial="initial"
       animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
        <FaAngular className='text-7xl text-red-500'/>
     </motion.div>
     <h1 className='text-center'>Angular</h1>
     </div>

     <div>
     <motion.div variants={iconVariants(2)} 
       initial="initial"
       animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
        <VscAzure className='text-7xl text-[#007FFF]'/>
     </motion.div>
     <h1 className='text-center'>Azure</h1>
     </div>
      </div>
       
    </div>
  )
}

export default Technologies