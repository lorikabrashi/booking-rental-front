import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.module.scss'

function Header() {
  return (
    <div>
        <nav>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/login'}>Login</NavLink>
          <NavLink to={'/register'}>Register</NavLink>
        </nav>

    </div>
  )
}

export default Header