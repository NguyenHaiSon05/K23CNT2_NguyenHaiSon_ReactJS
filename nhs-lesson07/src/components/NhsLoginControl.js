import React, { Component } from 'react';
import NhsLoginComp from './NhsLoginComp';
import NhsLogoutComp from './NhsLogoutComp';

class NhsLoginControl extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false,
        }
    }
    // Hàm xử lý sự kiện login
    nhsHandleLogin = (event) => {
        event.preventDefault();
        this.setState({
            isLoggedIn: true,
        })
    }
    render() {
        let { isLoggedIn } = this.state;
        let nhsElement = isLoggedIn ? <NhsLoginComp /> : <NhsLogoutComp />;
        return (
            <div className='alert alert-danger'>
                {nhsElement}
                {
                    isLoggedIn ? 
                        <button onClick={() => this.setState({ isLoggedIn: false })}>Logout</button> 
                        : <button onClick={this.nhsHandleLogin}>Login</button>
                }
            </div>
        );
    }
}

export default NhsLoginControl;
