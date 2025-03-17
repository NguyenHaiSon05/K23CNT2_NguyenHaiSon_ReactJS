import React, { useState } from 'react';

import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import NhsNavNar from './components/NhsNavNar'
import NhsHome from './components/NhsHome'
import NhsAbout from './components/NhsAbout'
import NhsContact from './components/NhsContact'
import NhsListUser from './components/NhsListUser'
import NhsFormUser from './components/NhsFormUser';
export default function NhsApp() {

  const listUsers = [
    {id:"SV001", nhsFullName:"Nguyen Hai Son", nhsUserName:"HaiSon", nhsPass:"123456@"},
    {id:"SV002", nhsFullName:"Nguyen Hai Anh", nhsUserName:"HaiAnh", nhsPass:"123456@"},
    {id:"SV003", nhsFullName:"Nguyen Hai Em", nhsUserName:"HaiEm", nhsPass:"123456@"},
  ]

  const[nhsUsers, setNhsUsers] = useState(listUsers)
  // Ham su li su kien them moi
  const nhsHandleAdd = (nhsParam)=>{
    console.log("nhsHandleAdd:", nhsParam);

    setNhsUsers(prev =>{
      return [
        ...prev,
        nhsParam
      ]
    })

  }


  return (
    <div className='container border my-3'>
        <h1>React Router Dom - Demo - [Nguyễn Hải Sơn - K23CNT2]</h1>
        <hr/>
      <Router>
        <NhsNavNar />
        <Routes>
           <Route path='/' element = {<NhsHome />} /> 
           <Route path='/about' element = {<NhsAbout />} /> 
           <Route path='/contact' element = {<NhsContact />} />
           <Route path='/list-user' element = {<NhsListUser renderNhsUsers={nhsUsers}/>} />
           <Route path='/create-user' element = {<NhsFormUser onNhsAddNew={nhsHandleAdd}/>} />
        </Routes>
      </Router>
    </div>
  )
}
