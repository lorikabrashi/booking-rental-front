import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.module.scss'
import { useDispatch } from 'react-redux'
import { logout } from '../../lib/store/slices/authSlice'
function UserNav() {
  const dispatch = useDispatch()
  return (
    <nav>
      <NavLink to={'/profile'}>Profile</NavLink>
      <NavLink
        onClick={() => {
          dispatch(logout())
        }}
      >
        Logout
      </NavLink>
    </nav>
  )
}

export default UserNav
