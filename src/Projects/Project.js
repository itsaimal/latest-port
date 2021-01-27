import React from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CodeIcon from '@material-ui/icons/Code';
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
function Project() {
    return (
        <motion.div className="flex justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit">

        <div className="flex justify-center">
        <div className="hidden md:block">
            <ArrowBackIosIcon  className="md:left-36 animate-pulse absolute top-36 lg:left-96 transform rotate-45 "/>
            <ArrowBackIosIcon className="md:left-36 animate-pulse absolute -bottom-8 lg:left-96 transform -rotate-45 "/>
            <ArrowForwardIosIcon className="md:right-36 animate-pulse absolute -bottom-8 lg:right-96 transform rotate-45 "/>
            <ArrowForwardIosIcon className="md:right-36 animate-pulse absolute top-36 lg:right-96  transform -rotate-45 "/></div>
       <h1 className="animate-pulse absolute top-28 ml-10 left-96"><strong className="text-2xl">03</strong>/03</h1>
<NavLink to="/list">
       <button className="absolute -bottom-32 ml-20 z-20 bg-blue-400 rounded-xl pl-2 cursor-pointer pr-2 hover:bg-blue-600 hover:text-gray-100">Click to see my projects</button></NavLink>

        <div className=" mt-40  h-56   opacity-20 animate-pulse  flex flex-col">
        
        <img className="max-w-sm rounded-lg "  src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ea5d0476339699.5c6694d453222.gif"/>
            

           
        </div>

        <div className="absolute -bottom-48 right-96 mr-16 "><h1 className="text-3xl font-serif animate-pulse ">Projects</h1></div>
            
            
       

        <div className="absolute top-56 left-0 transform -translate-x-16 hover:translate-x-0 ease-in-out transition-all delay-500  ">
            <NavLink to="/skills">
            <h1 className="text-7xl cursor-pointer transform rotate-45 hover:rotate-0 ease-in-out transition-all delay-300 hover:text-gray-700 animate-pulse">Back </h1></NavLink>
        </div>
        </div>
        
    </motion.div>
    )
}

export default Project
