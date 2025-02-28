import React, { Component } from 'react';

class NhsEventForm2 extends Component {
    constructor(props){
        super(props);
        this.state={
            nhsCourse: 'CSS3',
        }
    }

    // Hàm xử lý sự kiện khi thay đổi khóa học
    nhsHandleChange = (event)=>{
        // Cập nhật lại state
        this.setState({
            nhsCourse: event.target.value,
        })
    }

    // Hàm xử lý sự kiện khi submit form
    nhsHandleSubmit = (event)=>{
        alert("Khóa học bạn chọn: " + this.state.nhsCourse);
        event.preventDefault();
    }

    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Form Select</h2>
                <form>
                    <label htmlFor=''>
                      <select name='nhsCourse' id='nhsCourse' 
                            value={this.state.nhsCourse}
                            onChange={this.nhsHandleChange}>
                        <option value={'HTML5'}>HTML5</option>
                        <option value={'CSS3'}>CSS3</option>
                        <option value={'Javascript'}>Javascript</option>
                        <option value={'Jquery'}>Jquery</option>
                        <option value={'Bootstrap'}>Bootstrap</option>
                      </select>
                    </label>
                    <button className='btn btn-primary' onClick={this.nhsHandleSubmit}>Click here</button>
                </form>
            </div>
        );
    }
}

export default NhsEventForm2;
