import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function NhsListUser() {
    // State
    const [NhsListUser, setNhsListUser] = useState([]);
    const nhsApi = "https://67e0d38858cc6bf785230bb7.mockapi.io/nhs-k23cnt1-2310900088/nhs_users";
    
    useEffect(() => {
        axios.get(nhsApi)
        .then(nhs_response => {
            console.log(nhs_response.data); // Dữ liệu từ API
            setNhsListUser(nhs_response.data);
        })
        .catch(error => {
            console.error('Có lỗi xảy ra:', error);
        });
    }, []);

    // Hàm xử lý xóa user
    const nhsHandleDelete = async (nhsId) => {
        if (window.confirm("Bạn có chắc chắn muốn xóa người dùng này không?")) {
            await axios.delete(`${nhsApi}/${nhsId}`);

            let NhsListUserDelete = NhsListUser.filter(x => x.id !== nhsId);
            setNhsListUser(NhsListUserDelete);
        }
    };

    const navigate = useNavigate();
    const nhsHandleUpdate = (nhsId) => {
        navigate(`/nhs-edit-user/${nhsId}`);
    };

    return (
        <div>
            <h2>Danh sách user</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>FullName</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Active</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {NhsListUser.map((nhsUserItem) => (
                        <tr key={nhsUserItem.id}>
                            <td>{nhsUserItem.id}</td>
                            <td>{nhsUserItem.nhs_name}</td>
                            <td>{nhsUserItem.nhs_email}</td>
                            <td>{nhsUserItem.nhs_phone}</td>
                            <td>
                                {nhsUserItem.nhs_active ? 
                                    <span className='badge text-bg-success'>Hoạt động</span>
                                    : <span className='badge text-bg-danger'>Tạm khóa</span>
                                }
                            </td>
                            <td>
                                <button onClick={() => nhsHandleUpdate(nhsUserItem.id)}>Edit</button> 
                                <button onClick={() => nhsHandleDelete(nhsUserItem.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
