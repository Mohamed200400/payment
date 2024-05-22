import React from 'react'
import logo from '../image/hoobank.svg' 
import { navLinks } from '../constants'


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src={logo} alt="logo"/>
            <h1 id='logo-title'>HooBank</h1>
        </div>
        <div className='links'>
            <ul className='nav-list'>
            {navLinks.map((el) => 
                <li key={el.id} className="nav-item">{el.title}</li>
            )}
            </ul>
        </div>
    </div>
  )
}

export default Navbar