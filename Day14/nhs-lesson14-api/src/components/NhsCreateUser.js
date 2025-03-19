import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function NhsCreateUser() {
    const [user, setUser] = useState({ nhsName: '', nhsEmail: '', nhsPhone: '', nhsActive: true });
    const navigate = useNavigate();
    const apiUrl = "http://localhost:3001/users";

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setUser({ ...user, [name]: type === 'checkbox' ? checked : value });
    };

    const handleRadioChange = (value) => {
        setUser({ ...user, nhsActive: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(apiUrl, user)
            .then(() => navigate('/users'))
            .catch(error => console.log("Lỗi khi thêm user", error));
    };

    return (
        <div className="container">
            <h2 className="header">Thêm mới thông tin User</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" name="nhsName" value={user.nhsName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="nhsEmail" value={user.nhsEmail} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input type="text" name="nhsPhone" value={user.nhsPhone} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Active</label>
                    <div className="radio-group">
                        <input
                            type="radio"
                            name="nhsActive"
                            checked={user.nhsActive === true}
                            onChange={() => handleRadioChange(true)}
                        />
                        <label style={{ color: "green", marginRight: "10px" }}>Hoạt động</label>

                        <input
                            type="radio"
                            name="nhsActive"
                            checked={user.nhsActive === false}
                            onChange={() => handleRadioChange(false)}
                        />
                        <label style={{ color: "red" }}>Đang khóa</label>
                    </div>
                </div>
                <button type="submit">Create</button>
                <button type="button" onClick={() => navigate('/users')}>Back</button>
            </form>
        </div>
    );
}
