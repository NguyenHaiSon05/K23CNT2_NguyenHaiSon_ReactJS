import React, { useState } from 'react'

export default function NhsUseState() {
    //Khoi tao state
    const [nhsCount, setNhsCount] = useState(0);

    //Khoi tao state la mot mang
    const nhsArr = [10,12,20,22];
    const [nhsArray, setNhsArray] = useState(nhsArr);

    //Khoi tao state voi mang object
    const nhsStudents = [
        {nhsId:"SV001",nhsName:"Hai Son",nhsAge:20},
        {nhsId:"SV002",nhsName:"Nguyen Hai Son",nhsAge:20},
    ];
    const [nhsStudentList, setNhsStudentList] = useState(nhsStudents);
    
    return (
      <div className='alert alert-danger'>
        <h2>useState Demo</h2>
        <div>
          <h3>Count: {nhsCount}</h3>
          <button>Tăng + </button>
          <button>Giảm + </button>
        </div>
        <div>
          <h3>Array: {nhsArray.toString()}</h3>
          <button>Thêm phần tử</button>
        </div>
        <div>
          <h3>Danh sách sinh viên</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nam</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {
                nhsStudentList.map((nhsStudent,index)=>{
                  return <>
                    <tr>
                      <td>{nhsStudent.nhsId}</td>
                      <td>{nhsStudent.nhsName}</td>
                      <td>{nhsStudent.nhsAge}</td>
                    </tr>
                  </>
                })  
              }
            </tbody>
          </table>
        </div>
      </div>
    )
}
