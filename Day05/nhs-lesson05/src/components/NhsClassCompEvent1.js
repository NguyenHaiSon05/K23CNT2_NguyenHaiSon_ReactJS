import React, { Component } from 'react'

class NhsClassCompEvent1 extends Component {
       // Ham su ly su kien
    NhsEventHandleClick1 = ()=>{
        alert("Button 1 clicked");
    }

    NhsEventHandleClick2 = (name)=>{
        alert("Button 2 clicked; name=" + name);
    }
  render() {
    return (
      <div className='alert alert-danger'>
          <button className='btn btn-primary mx-1' onClick={this.NhsEventHandleClick1}>Button 1</button>
          <button className='btn btn-success mx-1'
              onClick={()=>this.NhsEventHandleClick2("Hai Son")}>Button 2</button>
      </div>
    )
  }
}

export default NhsClassCompEvent1;
