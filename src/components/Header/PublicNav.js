import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.module.scss'

function PublicNav() {
  return (
    <nav>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/login'}>Login</NavLink>
      <NavLink to={'/register'}>Register</NavLink>
    </nav>
  )
}

export default PublicNav
