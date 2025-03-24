import React from "react";

function NhsCompInfor({ user }) {
  return (
    <div>
      <p><strong>Họ và tên:</strong> {user.fullName}</p>
      <p><strong>Mã sinh viên:</strong> {user.studentId}</p>
      <p><strong>Ngày sinh:</strong> {user.birthDate}</p>
      <p><strong>Điện thoại:</strong> {user.phone}</p>
      <p><strong>Tên lớp:</strong> {user.className}</p>
    </div>
  );
}

export default NhsCompInfor;
