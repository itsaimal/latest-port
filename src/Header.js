import React,{useState,useEffect} from 'react'
import {NavLink} from "react-router-dom"

function Header() {


const Items = [
    {name:'Home', to:'/'},
    {name:'About', to:'/about'},
    {name:'Skills', to:'/skills'},
    {name:'Project', to:'/projects'}
];

const [active,setActive] = useState(Items[0].name);



const handleActive = (name) => {
setActive(name);
}



const menuItemsMap = Items.map((item,index) => {

    const isItemSelected = active === item.name; 

    return(
        <menu onClick={() => handleActive(item.name)} className={`${isItemSelected? 'text-black border-t border-black transition-all duration-500 ease-in-out': 'border-t border-white'} cursor-pointer pr-6`} key={index}><NavLink to={item.to}>
            {item.name}</NavLink>

        </menu>
    )
})

    return (
        <div className="max-w-4xl absolute top-3 right-16 z-20 ">
            <h1 className="flex text-xs text-white ">{menuItemsMap}</h1>
        </div>
    )
}

export default Header
