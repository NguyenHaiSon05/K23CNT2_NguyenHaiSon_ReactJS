import React, { Component } from 'react';

class NhsEventForm5 extends Component {
    constructor(props){
        super(props);
        this.state = {
            nhsName: 'Son',
            nhsAge: 20,
            nhsGender: 'Female',
            nhsCourse: 'CSS3'
        }
    }

    // Hàm xử lý sự kiện change
    nhsHandleChange = (event)=>{
        // lấy tên điều khiển
        let name = event.target.name;
        // Lấy giá trị trên điều khiển đang thao tác
        let value = event.target.value;

        // Cập nhật state
        this.setState({
            [name]: value,
        })
    }

    // Sự kiện khi submit form
    nhsHandleSubmit = (ev)=>{
        ev.preventDefault();
        alert(this.state.nhsName + "\n" + this.state.nhsAge);

        // Chuyển dữ liệu trên form lên App component (NhsApp);
        this.props.onNhsHandleSubmit(this.state);
    }

    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Form Student Info </h2>
                <form>
                    <div>
                        <label htmlFor='nhsName'>Student Name:</label>
                        <input type='text' name='nhsName' id='nhsName' 
                            value={this.state.nhsName}
                            onChange={this.nhsHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='nhsAge'>Student Age:</label>
                        <input type='text' name='nhsAge' id='nhsAge' 
                            value={this.state.nhsAge}
                            onChange={this.nhsHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='nhsGender'>Student Gender:</label>
                        <div>
                            <input type='radio' name='nhsGender' id='nhsMale' className='mx-2'
                                value={'Male'}
                                checked={this.state.nhsGender === 'Male'}
                                onChange={this.nhsHandleChange} />
                            <label htmlFor='nhsMale'> Male</label>
                        </div>
                        <div>
                            <input type='radio' name='nhsGender' id='nhsFemale' className='mx-2'
                                value={'Female'}
                                checked={this.state.nhsGender === 'Female'}
                                onChange={this.nhsHandleChange} />
                            <label htmlFor='nhsFemale'> Female</label>
                        </div>
                        <div>
                            <input type='radio' name='nhsGender' id='nhsNone' className='mx-2'
                                value={'None'}
                                checked={this.state.nhsGender === 'None'}
                                onChange={this.nhsHandleChange} />
                            <label htmlFor='nhsNone'> None</label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='nhsCourse'>
                            <select name='nhsCourse' id='nhsCourse' 
                                    value={this.state.nhsCourse}
                                    onChange={this.nhsHandleChange} >
                                <option value={'HTML5'}>HTML5</option>
                                <option value={'CSS3'}>CSS3</option>
                                <option value={'Javascript'}>Javascript</option>
                                <option value={'Jquery'}>Jquery</option>
                                <option value={'Bootstrap'}>Bootstrap</option>
                            </select>
                        </label>
                    </div>
                    <button onClick={this.nhsHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default NhsEventForm5;
