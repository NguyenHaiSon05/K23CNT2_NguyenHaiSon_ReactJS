import React, { useState } from 'react';
import axios from 'axios';

export default function NhsCreateMockAPI() {
    // Khởi tạo state
    const [nhsFullName, setNhsFullName] = useState('');
    const [nhsAge, setNhsAge] = useState(0);
    const [nhsActive, setNhsActive] = useState(true);

    // API POST
    const nhsCreateUserApi = "https://67d99f3e35c87309f5298bf4.mockapi.io/K23CNT2_NguyenHaiSon/nhs_user";

    // Khi submit form
    const nhsHandleSubmit = (event) => {
        event.preventDefault();
        console.log("nhsActive:", nhsActive);
        let nhsNewUser = { nhsFullName, nhsAge, nhsActive };
        console.log(nhsNewUser);

        // Ghi dữ liệu vào API
        axios
            .post(nhsCreateUserApi, nhsNewUser)
            .then((nhs_response) => {
                console.log("User created:", nhs_response.data);
            });
    };

    return (
        <div className='alert alert-info'>
            <h2>Thêm mới users</h2>
            <hr />
            <form>
                <div className='mb-1'>
                    <label htmlFor="nhsFullName">Full Name</label>
                    <input type='text' name='nhsFullName' id="nhsFullName"
                        value={nhsFullName}
                        onChange={(ev) => setNhsFullName(ev.target.value)} />
                </div>
                <div className='mb-1'>
                    <label htmlFor="nhsAge">Age</label>
                    <input type='number' name='nhsAge' id="nhsAge"
                        value={nhsAge}
                        onChange={(ev) => setNhsAge(ev.target.value)} />
                </div>
                <div className='mb-1'>
                    <label htmlFor="nhsActive">Active</label>
                    <input type='radio' name='nhsActive' id="nhsActive_hd" value={'true'}
                        onChange={(ev) => setNhsActive(ev.target.value)} />
                    <label htmlFor="nhsActive_hd"> Hoạt động</label>
                    <input type='radio' name='nhsActive' id="nhsActive_kh" value={'false'}
                        onChange={(ev) => setNhsActive(ev.target.value)} />
                    <label htmlFor="nhsActive_kh"> Khóa</label>
                </div>
                <button onClick={nhsHandleSubmit}>Create</button>
            </form>
        </div>
    );
}
