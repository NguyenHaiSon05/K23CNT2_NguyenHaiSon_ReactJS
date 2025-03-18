import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function NhsReadApiLocal() {
    // Khởi tạo state
    const [nhsListUser, setNhsListUser] = useState([]);

    // Đọc dữ liệu từ API local và set cho nhsListUser
    const apiUrl = "http://localhost:3001/users";

    // Lấy danh sách từ apiUrl
    useEffect(() => {
        axios
            .get(apiUrl)
            .then((nhsResponse) => {
                setNhsListUser(nhsResponse.data);
            })
            .catch((error) => {
                console.error("Lỗi khi lấy dữ liệu từ API:", error);
            });
    }, []);

    return (
        <div>
            <h2>Đọc dữ liệu từ API Local</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>FullName</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        nhsListUser.map((nhsItem, index) => {
                            return (
                                <tr key={index}>
                                    <td>{nhsItem.fullName}</td>
                                    <td>{nhsItem.age}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}
