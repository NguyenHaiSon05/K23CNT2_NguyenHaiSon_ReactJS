import React, { Component } from 'react'

export default class NhsClassCompEventState extends Component {
    constructor(props){
        super(props);
        this.state = {
            nhsFullName:"Nguyen Hai Son",
            nhsAge:20,
        }
    }
    // Ham su ly su kien
    nhsEventHandleClick1 = ()=>{
        // Lay du lieu trong state
        alert("FullName: " + this.state.nhsFullName + this.state.nhsAge);
    }
  render() {
    return (
      <div className='alert alert-danger'>
        <button className='btn btn-primary' onClick={this.nhsEventHandleClick1}>Button 1 - Du lieu trong state</button>
        
      </div>
    )
  }
}
