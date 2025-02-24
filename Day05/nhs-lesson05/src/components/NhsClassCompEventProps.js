import React, { Component } from 'react'

export default class NhsClassCompEventProps extends Component {

    //Ham su ly su kien
    nhsEventHandleClick1 = ()=>{
        alert("Hello...." +  this.props.nhsRenderTitle);
    }
  render() {
    return (
      <div className='alert alert-danger'>
        <button className='btn btn-primary' onClick={this.nhsEventHandleClick1}>Button 1</button>
      </div>
    )
  }
}
