import React, { Component } from "react";
import NhsStudent from "./NhsStudent";

class NhsStudentList extends Component {
  // Hàm xử lý sự kiện xem
  nhsHandleView = (nhsStudent) => {
    // Chuyển dữ liệu lên NhsApp
    this.props.onNhsHandleView(nhsStudent);
  }

  render() {
    // lấy dữ liệu trong props từ NhsApp chuyển xuống
    let { renderNhsStudents } = this.props;
    console.log("List:", renderNhsStudents);
    
    // chuyển dữ liệu vào NhsStudent để hiển thị
    let nhsElementStudent = renderNhsStudents.map((nhsItem, index) => {
        return <NhsStudent key={index} renderNhsStudent={nhsItem} index={index} onNhsHandleView={this.nhsHandleView} />
    });
    
    return (
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {nhsElementStudent}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default NhsStudentList;
