import React from "react";
import NhsCompInfor from './components/NhsCompInfor';


function NhsApp() {
  const userInfo = {
    fullName: "Nguyễn Hải Sơn",
    studentId: "2310900088",
    birthDate: "30/05/2005",
    phone: "0388604819",
    className: "K23CNT2"
  };

  return (
    <div className="container">
      <h1>Thông tin cá nhân</h1>
      <NhsCompInfor user={userInfo} />
    </div>
  );
}

export default NhsApp;
