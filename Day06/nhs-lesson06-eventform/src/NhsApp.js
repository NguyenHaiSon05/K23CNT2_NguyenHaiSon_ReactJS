import React, { Component } from 'react'
import NhsEventForm1 from './components/NhsEventForm1';
import NhsEventForm2 from './components/NhsEventForm2';
import NhsEventForm3 from './components/NhsEventForm3';
import NhsEventForm4 from './components/NhsEventForm4';
import NhsEventForm5 from './components/NhsEventForm5';

class NhsApp extends Component {

  // Hàm xử lý nhận dữ liệu từ form student
  nhsHandleSubmitForm = (param)=>{
    console.log("Student:",param);
  }

  render() {
    return (
      <div className='container boder my-3 bg-white'>
        <h1 className='text-center'>Event Form - Demo</h1>
        <hr/>
        <NhsEventForm1/>
        <NhsEventForm2/>
        <NhsEventForm3/>
        <NhsEventForm4/>
        <NhsEventForm5 onNhsHandleSumit={this.nhsHandleSumitForm}/>
      </div>
    )
  }
}

export default NhsApp;