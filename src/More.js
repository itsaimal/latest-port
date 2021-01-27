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

function More() {


    return (
        <motion.div className="flex justify-center mt-56 
        "   variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit">

<div className="absolute -top-56  transform -translate-y-16 hover:translate-y-0 ease-in-out transition-all delay-500  z-20 ">
            <NavLink to="/">
            <h1 className="text-7xl cursor-pointer transform rotate-45 hover:rotate-0 ease-in-out transition-all delay-300 hover:text-gray-700 animate-pulse">Home </h1></NavLink>
        </div>

            {/* 1 */}
            <div className="bg-gray-600 w-72 opacity-70 h-96 mr-5 shadow-2xl rounded-xl">
                <div className="absolute bg-gray-900 h-96 w-72 z-20 transform hover:-translate-y-48  transition duration-500 ease-in-out shadow-2xl rounded-xl">
                    <h1 className="text-center mt-0 text-2xl font-semibold border-black border-b-2 text-white">Message App</h1>
                    
                    <h1 className="ml-3 mt-5 text-xl overflow-hidden font-semibold text-white ">It's kind a clone of messenger which helps to communicate with other
people using react framework.
Most of my apps are built with react context API with is easier and
responsive then redux</h1>

                    <button className="bg-gray-500 mt-3  ml-20 text-white rounded-2xl pl-6 pr-6 hover:bg-black hover:text-gray-400">Link is here</button>
                </div>
                <img className="relative mt-48 z-10 rounded-b-xl" src="img/works/thumbs/2.jpg"/>
            </div>

            {/* 2 */}
            <div className="bg-gray-600 w-72 opacity-70 h-96 mr-5 shadow-2xl rounded-xl">
                <div className="absolute bg-gray-900 h-96 w-72 z-20 transform hover:-translate-y-48  transition duration-500 ease-in-out shadow-2xl rounded-xl">
                    <h1 className="text-center mt-0 text-2xl font-semibold border-black border-b-2 text-white">BMW website</h1>
                    
                    <h1 className="ml-3 mt-5 text-xl overflow-hidden font-semibold text-white ">This app works like a Facebook by posting feeds to the website which
are stored in the database, its hosted with firebase and having a
feature of user authentication.
React framework is utilized to make it faster and more responsive.</h1>

                    <button className="bg-gray-500 mt-3  ml-20 text-white rounded-2xl pl-6 pr-6 hover:bg-black hover:text-gray-400">Link is here</button>
                </div>
                <img className="relative mt-48 z-10 rounded-b-xl" src="https://miro.medium.com/max/10000/0*wZAcNrIWFFjuJA78"/>
            </div>

            {/* 3 */}
            <div className="bg-gray-600 opacity-70 w-72 h-96 mr-5 shadow-2xl rounded-xl">
                <div className="absolute bg-gray-900 h-96 w-72 z-20 transform hover:-translate-y-48  transition duration-500 ease-in-out shadow-2xl rounded-xl">
                    <h1 className="text-center mt-0 text-2xl font-semibold border-black border-b-2 text-white">Airbnb Clone</h1>
                    
                    <h1 className="ml-3 mt-5 text-xl overflow-hidden font-semibold text-white ">I have worked on this project to create a clone of Airbnb which is a
model for me for its looks.
React components such as props and stats are used.
</h1>

                    <button className="bg-gray-500  ml-20 mt-3 text-white rounded-2xl pl-6 pr-6 hover:bg-black hover:text-gray-400">Link is here</button>
                </div>
                <img className="relative mt-48 z-10 rounded-b-xl" src="https://miro.medium.com/max/10000/0*wZAcNrIWFFjuJA78"/>
            </div>

            {/* 4 */}
            <div className="bg-gray-600 w-72 opacity-70 h-96 mr-5 shadow-2xl rounded-xl">
                <div className="absolute bg-gray-900 h-96 w-72 z-20 transform hover:-translate-y-48  transition duration-500 ease-in-out shadow-2xl rounded-xl">
                    <h1 className="text-center mt-0 text-2xl font-semibold border-black border-b-2 text-white">Amazon Clone
</h1>
                    
                    <h1 className="ml-3 mt-5 text-xl overflow-hidden font-semibold text-white ">I have build this app using react framework which comprise of his
components such as props and stats.
The app works like amazon with having a feature of adding and
deleting products from the cart.
In addition to that this app consist of user authentication.
</h1>

                    <button className="bg-gray-500 mt-3  ml-20 text-white rounded-2xl pl-6 pr-6 hover:bg-black hover:text-gray-400">Link is here</button>
                </div>
                <img className="relative mt-48 z-10 rounded-b-xl" src="https://miro.medium.com/max/10000/0*wZAcNrIWFFjuJA78"/>
            </div>
            
        </motion.div>
    )
}

export default More
