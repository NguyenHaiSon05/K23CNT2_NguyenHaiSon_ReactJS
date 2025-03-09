import React, { Component } from "react";
import NhsControl from "./components/NhsControl";
import NhsStudentList from "./components/NhsStudentList";
import NhsForm from "./components/NhsForm";

class NhsApp extends Component {
  
  state = {
    nhsStudents: [
      { nhsId: "SV001", nhsStudentName: "Nguyễn Hải Sơn", nhsAge: 20, nhsGender: "Nam", nhsBirthday: "30/05/2005", nhsBirthPlace: "HN", nhsAddress: "Hà Nội" },
      { nhsId: "SV002", nhsStudentName: "Chu Nguyên Chương", nhsAge: 21, nhsGender: "Nữ", nhsBirthday: "26/05/2004", nhsBirthPlace: "HP", nhsAddress: "Hải Phòng" },
      { nhsId: "SV003", nhsStudentName: "Tần Thủy Hoàng", nhsAge: 22, nhsGender: "Nam", nhsBirthday: "27/05/2003", nhsBirthPlace: "HB", nhsAddress: "Hòa Bình" },
      { nhsId: "SV004", nhsStudentName: "Hoàng Thùy Linh", nhsAge: 23, nhsGender: "Nam", nhsBirthday: "28/05/2002", nhsBirthPlace: "HCM", nhsAddress: "Hồ Chí Minh" },
    ],
    nhsStudent: "",
  };

  // Hàm xử lý sự kiện xem Student
  nhsHandleView = (nhsStudent) => {
    this.setState({
      nhsStudent: nhsStudent,
    });
  };

  render() {
    // log
    console.log("View Student:", this.state.nhsStudent);

    return (
      <div>
        <h1 className="text-center">
          Nguyễn Hải Sơn - K23CNT2 - Mini Project1
        </h1>
        <section className="container-fluid mt-3">
          <div className="row">
            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">
                {/* header */}
                <NhsControl />
                {/* danh sách sinh viên */}
                <NhsStudentList renderNhsStudents={this.state.nhsStudents} onNhsHandleView={this.nhsHandleView} />
              </div>
            </div>

            <div className="col-5 grid-margin">
              {/* form */}
              <NhsForm renderNhsStudent={this.state.nhsStudent} />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default NhsApp;
