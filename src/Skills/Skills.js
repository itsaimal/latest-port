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

function Skills() {
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
       <h1 className="animate-pulse absolute top-28 ml-10 left-96"><strong className="text-2xl">02</strong>/03</h1>
        <div className=" mt-56 w-96 h-64  flex flex-col">
            <div className="flex justify-center">
                {/* 1 */}
                <div className="ml-5"><CodeIcon className="mr-5  bg-white rounded-full  animate-pulse" style={{fontSize:'100', fontSize:'50'}}/>
                <h1 className="ml-0 text-black opacity-100">React.js</h1>
                </div>
                {/* 2 */}
                <div className="ml-5"><CodeIcon className="mr-5  animate-pulse bg-white rounded-full" style={{fontSize:'100', fontSize:'50'}}/>
                <h1 className="  text-black opacity-100">Javascript</h1>
                </div>
                {/* 3 */}
                <div className="ml-5"><CodeIcon className="mr-5  animate-pulse bg-white rounded-full" style={{fontSize:'100', fontSize:'50'}}/>
                <h1 className="ml-0 text-black opacity-100">HTML/CSS</h1>
                </div>
                {/* 4 */}
                <div className="ml-5"><CodeIcon className="mr-5  animate-pulse bg-white rounded-full" style={{fontSize:'100', fontSize:'50'}}/>
                <h1 className="ml-0">Typescript</h1>
                </div>
                
            </div>

            <div className="flex justify-center">
                     {/* 1 */}
                     <div className="ml-5" ><CodeIcon className="mr-5  animate-pulse bg-white rounded-full" style={{fontSize:'100', fontSize:'50'}}/>
                <h1 className="ml-0">Rest API</h1>
                </div>
                {/* 2 */}
                <div  className="ml-5"><CodeIcon className="mr-5  animate-pulse bg-white rounded-full" style={{fontSize:'100', fontSize:'50'}}/>
                <h1 className="ml-0">Firebase</h1>
                </div>
                {/* 3 */}
                <div className="ml-5"><CodeIcon className="mr-5  animate-pulse bg-white rounded-full" style={{fontSize:'100', fontSize:'50'}}/>
                <h1 className="ml-4">Git</h1>
                </div>
                {/* 4 */}
                <div className="ml-5"><CodeIcon className="mr-5  animate-pulse bg-white rounded-full" style={{fontSize:'100', fontSize:'50'}}/>
                <h1 className="ml-0">CSS Frameworks</h1>
                </div>
            </div>
            
            <div className="flex justify-center">
                     {/* 1 */}
                     <div className="ml-5" ><CodeIcon className="mr-5  animate-pulse bg-white rounded-full" style={{fontSize:'100', fontSize:'50'}}/>
                <h1 className="ml-0">Next.js</h1>
                </div>
                {/* 2 */}
                <div className="ml-5"><CodeIcon className="mr-5  animate-pulse bg-white rounded-full" style={{fontSize:'100', fontSize:'50'}}/>
                <h1 className=" flex">React Context Api</h1>
                </div>
               
              
            </div>
            

           
        </div>

        <div className="absolute -bottom-48 right-96 mr-16 "><h1 className="text-3xl font-serif animate-pulse ">Skills</h1></div>
            
            
        <div className="absolute top-56 right-0 transform translate-x-24 hover:translate-x-0 ease-in-out transition-all delay-500  ">
            <NavLink
            to="/projects">
            <h1 className="text-7xl cursor-pointer transform rotate-45 hover:rotate-0 ease-in-out transition-all delay-300 hover:text-gray-700 animate-pulse">Projects </h1></NavLink>
        </div>

        <div className="absolute top-56 left-0 transform -translate-x-16 hover:translate-x-0 ease-in-out transition-all delay-500  ">
            <NavLink to="/about">
            <h1 className="text-7xl cursor-pointer transform rotate-45 hover:rotate-0 ease-in-out transition-all delay-300 hover:text-gray-700 animate-pulse">Back </h1></NavLink>
        </div>
        </div>
        
    </motion.div>
    )
}

export default Skills
