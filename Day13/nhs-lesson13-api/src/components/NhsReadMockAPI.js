import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function NhsReadMockAPI() {
    // Khởi tạo state 
    const [nhsListUser, setNhsListUser] = useState([]);

    // API
    const nhsApiOnline = "https://67d99f3e35c87309f5298bf4.mockapi.io/K23CNT2_NguyenHaiSon/nhs_user";

    // Đọc dữ liệu từ API bằng axios
    useEffect(() => {
        axios
            .get(nhsApiOnline)
            .then((nhs_response) => {
                setNhsListUser(nhs_response.data);
            })
            .catch((error) => {
                console.error("Lỗi phát sinh:", error);
            });
    }, []);

    // View data
    const nhsElementUser = nhsListUser.map((nhs_item, index) => {
        return (
            <tr key={index}>
                <td>{nhs_item.nhsId}</td>
                <td>{nhs_item.nhsFullName}</td>
                <td>{nhs_item.nhsAge}</td>
                <td>{nhs_item.nhsActive ? 'Hoạt động' : 'Khóa'}</td>
                <td>
                    <button>Sửa</button>
                    <button>Xóa</button>
                </td>
            </tr>
        );
    });

    return (
        <div className='alert alert-danger'>
            <h2>Danh sách</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>FullName</th>
                        <th>Age</th>
                        <th>Active</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {nhsElementUser}
                </tbody>
            </table>
        </div>
    );
}
