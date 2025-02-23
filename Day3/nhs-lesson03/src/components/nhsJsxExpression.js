import React from 'react';

export default function nhsJsxExpression() {
  // Biến
  const name = "Nguyễn Hải Sơn";
  
  // Biến đối tượng
  const user = {
    firstName: "Sơn",  // Sửa lại từ fistName -> firstName
    lastName: "Nguyễn"
  };
  
  // Hàm
  const fullName = (user) => {
    return user.firstName + ' ' + user.lastName; // Sửa lại từ fistName -> firstName
  };
  
  // Trực tiếp sử dụng JSX trong return thay vì khai báo biến elemen
  return (
    <div>
      <h1> NHS - JSX Expression</h1>
      {/* Biểu thức JSX */}
      <div>
        <h2>{fullName(user)}</h2>
        <hr />
        <h3> Welcome to, {name}</h3>
      </div>
    </div>
  );
}
