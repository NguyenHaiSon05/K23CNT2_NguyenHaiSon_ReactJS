import React, { Component } from 'react';

class NhsRenderListStudent extends Component {
    constructor(props){
        super(props);
        this.state = {
            nhsStudents:[
                {nhsId:"NTU001", nhsName:"Nguyễn Hải Sơn", nhsAge:20, nhsClass:"K23CNT2"},
                {nhsId:"NTU002", nhsName:"Nguyễn Hải Anh", nhsAge:22, nhsClass:"K23CNT2"},
                {nhsId:"NTU003", nhsName:"Nguyễn Hải Em", nhsAge:21, nhsClass:"K23CNT2"},
                {nhsId:"NTU004", nhsName:"Nguyễn Hải Chị", nhsAge:23, nhsClass:"K23CNT2"},
            ],
        }
    }
    render() {
        let nhsElement = this.state.nhsStudents.map((nhsItem, index) => {
            return(
                    <tr key={nhsItem.nhsId}>
                        <td>{index + 1}</td>
                        <td>{nhsItem.nhsId}</td>
                        <td>{nhsItem.nhsName}</td>
                        <td>{nhsItem.nhsAge}</td>
                        <td>{nhsItem.nhsClass}</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
            )
        })
        return (
            <div className='alert alert-info'>
                <h2>Danh sách sinh viên</h2>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>nhsId</th>
                            <th>nhsName</th>
                            <th>nhsAge</th>
                            <th>nhsClass</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {nhsElement}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default NhsRenderListStudent;
