import React, { Component } from "react";

class NhsStudent extends Component {
  nhsHandleView = (nhsStudent) => {
    this.props.onNhsHandleView(nhsStudent);
  };

  render() {
    const { renderNhsStudent, index } = this.props;

    console.log("Student:", renderNhsStudent);

    return (
      <tr>
        <td>{index + 1}</td>
        <td>{renderNhsStudent.nhsId}</td>
        <td>{renderNhsStudent.nhsStudentName}</td>
        <td>{renderNhsStudent.nhsAge}</td>
        <td>{renderNhsStudent.nhsGender}</td>
        <td>
          <div className="template-demo">
            <button
              type="button"
              className="btn btn-danger btn-icon-text"
              onClick={() => this.nhsHandleView(renderNhsStudent)}
            >
              Xem
            </button>
            <button type="button" className="btn btn-warning btn-icon-text">
              Sửa
            </button>
            <button type="button" className="btn btn-success btn-icon-text">
              Xóa
            </button>
          </div>
        </td>
      </tr>
    );
  }
}

export default NhsStudent;
