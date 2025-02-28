import React, { Component } from 'react'

class NhsClassCompPostData extends Component {
    constructor(props){
        super(props);
    }

    //Ham quan ly su kien
    nhsEventHandleClick = ()=>{
        //Chuyen du lieu len app thong qua props
        this.props.onNhsDataToApp("Du lieu tu component con - NhsClassCompPostData ");
    }
  render() {
    return (
      <div className='alert alert-success'>
        <button className="btn btn-primary"
               onClick={this.nhsEventHandleClick}>
                Button 1 - Chuyen du lieu len app</button>
      </div>
    )
  }
}

export default NhsClassCompPostData;