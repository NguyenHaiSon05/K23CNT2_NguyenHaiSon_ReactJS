import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NhsNavBar from './components/NhsNavBar'
import NhsHome from './components/NhsHome'
import NhsEditUser from './components/NhsEditUser'
import NhsCreateUser from './components/NhsCreateUser'
import NhsListUser from './components/NhsListUser'

export default function NhsApp() {
  return (
    <div className='container border my-3 p-3'>
      <h1 className='alert alert-danger text-center'>K23CNT2 - Nguyễn Hải Sơn - 2310900088</h1>
      <hr/>
      <Router>
        <NhsNavBar />
        <hr/>
        <Routes>
            <Route path='/' element={<NhsHome/>} />
            <Route path='/nhs-list-user' element={<NhsListUser/>} />
            <Route path='/nhs-create-user' element={<NhsCreateUser/>} />
            <Route path='/nhs-edit-user/:id' element={<NhsEditUser/>} />
        </Routes>
      </Router>
    </div>
  )
}
