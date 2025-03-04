import React, { Component } from 'react'
import NhsLoginComp from './components/NhsLoginComp';
import NhsRenderList from './components/NhsRenderList';
import NhsRenderListStudent from './components/NhsRenderListStudent';
import NhsProductTable from './components/NhsProductTable';

class NhsApp extends Component {
  render() {
    return (
      <div className='container boder my-3'>
        <h1 className='text-center'>Nguyễn Hải Sơn - Render condition,List key</h1> 
        <hr/>
        <NhsLoginComp />

        <NhsRenderList />

        <NhsRenderListStudent />

        <NhsProductTable />
      </div>
    )
  }
}

export default NhsApp;