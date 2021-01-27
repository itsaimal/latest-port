import React from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {NavLink} from "react-router-dom"
import { motion } from 'framer-motion';


const containerVariants = {
    hidden: { 
      opacity: 0, 
      x: '100vw' 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: 'spring', delay: 0.5 }
    },
    exit: {
      x: "-100vh",
      transition: { ease: 'easeInOut' }
    }
  };
  

function About() {
    return (
        <motion.div className="flex justify-center"  variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit">

            <div className="flex justify-center">
              <div className="hidden md:block">
            <ArrowBackIosIcon  className="md:left-36 animate-pulse absolute top-36 lg:left-96 transform rotate-45 "/>
            <ArrowBackIosIcon className="md:left-36 animate-pulse absolute -bottom-8 lg:left-96 transform -rotate-45 "/>
            <ArrowForwardIosIcon className="md:right-36 animate-pulse absolute -bottom-8 lg:right-96 transform rotate-45 "/>
            <ArrowForwardIosIcon className="md:right-36 animate-pulse absolute top-36 lg:right-96  transform -rotate-45 "/></div>
           <h1 className="animate-pulse absolute top-28 ml-10 left-96"><strong className="text-2xl">01</strong>/03</h1>
            <div className="bg-gray-900 mt-44 w-96 h-64 opacity-40 animate-pulse">

                <h1 className="animate-pulse ml-3 mt-6 text-white">
                I am a passionate web developer who wants to polish off his
thirst by showing zeal and enthusiasm for his effort.
</h1>
            </div>

            <div className="absolute -bottom-24 right-96 mr-16 "><h1 className="text-3xl font-serif animate-pulse ">About Me</h1></div>
                
                
            <div className="absolute top-56 right-0 transform translate-x-16 hover:translate-x-0 ease-in-out transition-all delay-500  ">
                <NavLink to="/skills">
                <h1 className="text-7xl cursor-pointer transform rotate-45 hover:rotate-0 ease-in-out transition-all delay-300 hover:text-gray-700 animate-pulse">Skills </h1></NavLink>
            </div>

            <div className="absolute top-56 left-0 transform -translate-x-16 hover:translate-x-0 ease-in-out transition-all delay-500  ">
                <NavLink to="/">
                <h1 className="text-7xl cursor-pointer transform rotate-45 hover:rotate-0 ease-in-out transition-all delay-300 hover:text-gray-700 animate-pulse">Back </h1></NavLink>
            </div>
            </div>
            
        </motion.div>
    )
}

export default About
