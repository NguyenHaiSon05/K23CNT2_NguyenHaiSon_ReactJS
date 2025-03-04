import React from 'react'

export default function NhsRenderList() {
    const nhsList = ["Hải Sơn", "ReactJS","Fit-NTU"];

    const nhsElement = nhsList.map(item => {
        return <li>{item}</li>
    })

  return (
    <div className='alert alert-success'>
        <h2> Danh sách:</h2>
        <ul>
            {
                nhsList.map(item => {
                    return <li>{item}</li>
                })
            }
        </ul>
        <hr/>
        {nhsElement}
    </div>
  )
}
