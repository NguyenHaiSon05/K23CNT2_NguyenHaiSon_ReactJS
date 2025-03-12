import React, { useState } from "react";
import NhsMemberList from "./components/NhsMemberList";
import NhsMemberAdd from "./components/NhsMemberAdd";
import "./App.css";

const NhsApp = () => {
  const [nhs_Members, setNhsMembers] = useState([
    { id: "2310900088", fullname: "Nguyễn Hải Sơn", username: "nguyenhaison", password: "123457" },
    { id: "2300012400", fullname: "Nguyễn Văn A", username: "nguyenvana", password: "abcdef" },
    { id: "2300012500", fullname: "Nguyễn Văn B", username: "nguyenvanb", password: "pass123" }
  ]);

  // Hàm thêm thành viên mới
  const addMember = (newMember) => {
    setNhsMembers([...nhs_Members, newMember]);
  };

  return (
    <div className="container">
      <h1>Ứng dụng Quản lý Thành viên</h1>
      <NhsMemberAdd onAddMember={addMember} existingMembers={nhs_Members} />
      <NhsMemberList members={nhs_Members} />
    </div>
  );
};

export default NhsApp;
