import React from 'react';

export default function NhsListUser({ renderNhsUsers }) {
  return (
    <div>
      <h2>Danh sách tài khoản</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Full Name</th>
            <th>Username</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {renderNhsUsers.map((nhsItem, index) => (
            <tr key={nhsItem.id}>
              <td>{index + 1}</td>
              <td>{nhsItem.id}</td>
              <td>{nhsItem.nhsFullName}</td>
              <td>{nhsItem.nhsUserName}</td>
              <td>{nhsItem.nhsPass}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
