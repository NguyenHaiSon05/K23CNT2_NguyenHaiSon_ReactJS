import React, { Component } from 'react'

class NhsClassComp extends Component {
    constructor(props){
        super(props);
        //Khởi tạo state
        this.state ={
            fullName:"Nguyễn Hải Sơn",
            age:20,
            phone:"0388604***"
        }
    }
    //Hàm sử lý sự kiện
    changeInfo = (ev)=>{
        //Cập nhật state
        this.setState({
            fullName:"Sơn"
        });
    }
  render() {
    let user = this.props.renderUsers;
    console.log('====================================');
    console.log(user);
    console.log('====================================');
    return (
      <div className='alert alert-success'>
        <h2>Trình bày dữ liệu từ State</h2>
        <p>info state: {this.state.fullName}</p>
        <p>info age: {this.state.age}</p>
        <p>info phone: {this.state.phone}</p>

        <hr/>
        <button className='btn btn-primary' onClick={this.changeInfo}>Change Info</button>
        <hr/>
        <h3>Lấy dữ liệu từ Props</h3>
        <p>Name: {this.props.renderName}</p>

        <p>FullName: { this.props.renderUsers ?this.props.renderUsers.fullname:''}</p>
        <p>Age: { this.props.renderUsers ?this.props.renderUsers.age:''}</p>
        <p>Phone: { this.props.renderUsers ?this.props.renderUsers.phone:''}</p>
        
      </div>
    );
  }
}

export default NhsClassComp;