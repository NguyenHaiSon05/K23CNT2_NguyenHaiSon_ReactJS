import React, { Component } from 'react'
import NhsFuncCompEvent1 from './components/NhsFuncCompEvent1';
import NhsClassCompEvent1 from './components/NhsClassCompEvent1';
import NhsFuncCompEventProps from './components/NhsFuncCompEventProps';
import NhsClassCompEventProps from './components/NhsClassCompEventProps';

class NhsApp extends Component {
  render() {
    return (
      <div className='container border mt-3'>
        <h1 className='text-center alert alert-info my-2'>K23CNT2 - Nguyen Hai Son - Event and Form</h1>
        <hr/>
        <div>
              <h2>Function Component - Event</h2>
              <NhsFuncCompEvent1 />
        </div>
        <hr/>
        <div>
             <h2>Class Component - Event</h2>
             <NhsClassCompEvent1 />
        </div>
        <hr/>
        <div>
             <h2>Function Component - Event; props</h2>
             <NhsFuncCompEventProps nhsRenderName="Nguyen Hai Son" />
        </div>
        <hr/>
        <div>
             <h2>Class Component - Event; props</h2>
            <NhsClassCompEventProps nhsRenderTitle = "Welcome to Hai Son" />
        </div>
      </div>
    )
  }
}

export default NhsApp;