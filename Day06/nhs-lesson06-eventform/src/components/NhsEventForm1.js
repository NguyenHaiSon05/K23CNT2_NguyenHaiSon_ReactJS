import React, { Component } from 'react'

export default class NhsEventForm1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            nhsStudentName:'Hai Son',
        }
    }
    // Ham su ly su kien khi du lieu tren texbox (nhsStudent) thay doi
    nhsHandleChange = (event)=>{
        //Cap nhat lai state
        this.setState({
            nhsStudentName:event.target.value,
        })
    }
    //Khi Submit form lay du lieu hien thi
    nhsHandleSubmit = (ev)=>{
        alert('Xin chao:' + this.state.nhsStudentName);
        ev.preventDefault();
    }
  render() {
    return (
      <div className='alert alert-info'>
        <h2>Form Input</h2>
        <form onSubmit={this.nhsHandleSubmit}>
            <label htmlFor='nhsStudentName'>
                <input type='text' name='nhsStudentName' id='nhsStudentName'
                       value={this.state.nhsStudentName}
                       onChange={this.nhsHandleChange}
                />
            </label>
            <button className='btn btn-pimary'>Click here</button>
        </form>
      </div>
    )
  }
}
