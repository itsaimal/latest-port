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

function ProjectList() {


    return (
        <motion.div className="flex   justify-center mt-56 
        "   variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit">

<div className="absolute -top-56  transform -translate-y-16 hover:translate-y-0 ease-in-out transition-all delay-500  z-20 ">
            <NavLink to="/">
            <h1 className="text-7xl cursor-pointer transform rotate-45 hover:rotate-0 ease-in-out transition-all delay-300 hover:text-gray-700 animate-pulse">Home </h1></NavLink>
        </div>

<div className="absolute -top-24 -right-12  transform translate-x-12 hover:-translate-x-14 ease-in-out transition-all delay-500  z-20 ">
            <NavLink to="/list-2">
            <h1 className="text-7xl cursor-pointer transform rotate-45 hover:rotate-0 ease-in-out transition-all delay-300 hover:text-gray-700 animate-pulse">More </h1></NavLink>
        </div>
            {/* 1 */}
            <div className="bg-gray-600 w-72 opacity-70 h-96 mr-5 shadow-2xl rounded-xl">
                <div className="absolute bg-gray-900 sm:w-16 h-96 md:w-72 z-20 transform hover:-translate-y-48  transition duration-500 ease-in-out shadow-2xl rounded-xl">
                    <h1 className="text-center mt-0 text-2xl font-semibold border-black border-b-2 text-white">Fleming App</h1>
                    
                    <h1 className="ml-3 mt-5 text-xl overflow-hidden font-semibold text-white ">Its an app based on health and care.Which is fully operation with the help of react components.Its accessible for all device</h1>

                    <button className="bg-gray-500 mt-3  ml-20 text-white rounded-2xl pl-6 pr-6 hover:bg-black hover:text-gray-400">Link is here</button>
                </div>
                <img className="relative mt-48 z-10 rounded-b-xl" src="https://miro.medium.com/max/10000/0*wZAcNrIWFFjuJA78"/>
            </div>

            {/* 2 */}
            <div className="bg-gray-600 w-72 opacity-70 h-96 mr-5 shadow-2xl rounded-xl">
                <div className="absolute bg-gray-900 sm:w-16 h-96 md:w-72 z-20 transform hover:-translate-y-48  transition duration-500 ease-in-out shadow-2xl rounded-xl">
                    <h1 className="text-center mt-0 text-2xl font-semibold border-black border-b-2 text-white">Paint & body shop</h1>
                    
                    <h1 className="ml-3 mt-5 text-xl overflow-hidden font-semibold text-white ">Its an app built for buying body parts and paint in which each and every function is operational with the help of react context api.You can even add and remove products from cart.</h1>

                    <button className="bg-gray-500 mt-3  ml-20 text-white rounded-2xl pl-6 pr-6 hover:bg-black hover:text-gray-400">Link is here</button>
                </div>
                <img className="relative mt-48 z-10 rounded-b-xl" src="https://miro.medium.com/max/10000/0*wZAcNrIWFFjuJA78"/>
            </div>

            {/* 3 */}
            <div className="bg-gray-600 opacity-70 w-72 h-96 mr-5 shadow-2xl rounded-xl">
                <div className="absolute bg-gray-900 sm:w-16 h-96 md:w-72 z-20 transform hover:-translate-y-48  transition duration-500 ease-in-out shadow-2xl rounded-xl">
                    <h1 className="text-center mt-0 text-2xl font-semibold border-black border-b-2 text-white">Netflix clone</h1>
                    
                    <h1 className="ml-3 mt-5 text-xl overflow-hidden font-semibold text-white ">It's a website operated on the basis of API using react framework and
its components.
It is operated with the help of react axios. Even the trailers also work
with the help of YouTube npm except for the Netflix original while the
other tags work e.g tranding now.</h1>

                    <button className="bg-gray-500  ml-20 mt-3 text-white rounded-2xl pl-6 pr-6 hover:bg-black hover:text-gray-400">Link is here</button>
                </div>
                <img className="relative mt-48 z-10 rounded-b-xl" src="https://miro.medium.com/max/10000/0*wZAcNrIWFFjuJA78"/>
            </div>

            {/* 4 */}
            <div className="bg-gray-600 w-72 opacity-70 h-96 mr-5 shadow-2xl rounded-xl">
                <div className="absolute bg-gray-900 h-96 w-72 z-20 transform hover:-translate-y-48  transition duration-500 ease-in-out shadow-2xl rounded-xl">
                    <h1 className="text-center mt-0 text-2xl font-semibold border-black border-b-2 text-white">Apple clone</h1>
                    
                    <h1 className="ml-3 mt-5 text-xl overflow-hidden font-semibold text-white ">App details fdgfhjkl;kjkg,gmkfnjsdnjsbdashbfasdhfbhdfgvdfhsahdbshfdbsdhabf</h1>

                    <button className="bg-gray-500 mt-3  ml-20 text-white rounded-2xl pl-6 pr-6 hover:bg-black hover:text-gray-400">Link is here</button>
                </div>
                <img className="relative mt-48 z-10 rounded-b-xl" src="https://miro.medium.com/max/10000/0*wZAcNrIWFFjuJA78"/>
            </div>
            
        </motion.div>
    )
}

export default ProjectList
