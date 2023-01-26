import React from 'react'
import { useSelector } from 'react-redux'
import './Header.module.scss'
import PublicNav from './PublicNav'
import UserNav from './UserNav'

function Header() {
  const auth = useSelector((state) => state.auth.value)

  return <div>{auth ? <UserNav /> : <PublicNav />}</div>
}

export default Header
