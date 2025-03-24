import React from 'react'
import {Link} from 'react-router-dom'


export default function NhsNavBar() {
  return (
    <nav>
      <Link to='/' >Home</Link> |
      <Link to='/nhs-list-user' >List User</Link> |
      <Link to='/nhs-create-user' >Create User</Link>
    </nav>
  )
}
