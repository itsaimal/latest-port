import React from 'react'
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
function Home() {
    return (
        <motion.div className="flex justify-center mt-40 "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit">

            <div className="transform hover:scale-95 transition-all delay-300 ease-in-out">
                <h1 className="text-8xl opacity-75 animate-pulse">WEB/</h1>
                <h1 className="text-8xl ml-16 opacity-75 animate-pulse">REACT </h1>
                <h1 className="text-8xl ml-16 opacity-75 animate-pulse">DEVELOPER</h1>
                <h1 className="ml-96 text-xl opacity-75 animate-pulse">Aimal Khan Yousafzai</h1>
            </div>

            <div className="mt-72 ml-56 mr-16 text-4xl animate-pulse"><h1>Let's Talk about myself</h1></div>

            <div className="absolute top-40 right-0 transform translate-x-40 hover:translate-x-0 ease-in-out transition-all delay-500  ">
                <NavLink to="/about">
                <h1 className="text-7xl cursor-pointer transform rotate-45 hover:rotate-0 ease-in-out transition-all delay-300 hover:text-gray-700 animate-pulse ">About me</h1></NavLink>
            </div>
            
        </motion.div>
    )
}

export default Home
