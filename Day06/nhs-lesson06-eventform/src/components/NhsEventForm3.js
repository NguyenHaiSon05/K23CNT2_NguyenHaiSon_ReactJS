import React, { Component } from 'react';

class NhsEventForm3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            nhsGioiTinh: 'Nam',
        }
    }

    // Hàm xử lý sự kiện change
    nhsHandleChange = (event)=>{
        this.setState({
            nhsGioiTinh: event.target.value,
        })
    }

    // Hàm xử lý sự kiện submit form
    nhsHandleSubmit = (event)=>{
        event.preventDefault();
        alert("Giới tính của bạn là: " + this.state.nhsGioiTinh)
    }

    render() {
        return (
            <div className='alert alert-success'>
                <h2> Form input - radio</h2>
                <form>
                    <div>
                        <label htmlFor=''>Giới tính:</label> 
                        <input type='radio' name='nhsGioiTinh'  id='nhsNam' className='mx-2'
                            value="Nam" checked={this.state.nhsGioiTinh === 'Nam'} onChange={this.nhsHandleChange}/> 
                            <label htmlFor='nhsNam'>Nam</label>  
                        <input type='radio' name='nhsGioiTinh'  id='nhsNu' className='mx-2'
                            value="Nữ" checked={this.state.nhsGioiTinh === 'Nữ'} onChange={this.nhsHandleChange}/> 
                            <label htmlFor='nhsNu'>Nữ</label>  
                        <input type='radio' name='nhsGioiTinh' id='nhsKhac' className='mx-2'
                            value="Khác" checked={this.state.nhsGioiTinh === 'Khác'} onChange={this.nhsHandleChange}/> 
                            <label htmlFor='nhsKhac'>Khác</label>
                    </div>
                    <button onClick={this.nhsHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default NhsEventForm3;
