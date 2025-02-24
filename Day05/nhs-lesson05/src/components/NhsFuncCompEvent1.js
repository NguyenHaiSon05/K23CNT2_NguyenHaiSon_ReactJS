import React from 'react'

export default function NhsFuncEvent1() {

    // Ham su ly su kien
    const nhsEventButton1Click = () => {
        alert("Button 1 - Clicker");
    }

    const nhsEventButton2Click = () => {
        alert("Button 2 - Clicker");
    }

    const nhsEventButton3Click = (name) => {
        alert("Name:" + name);
    }
    return (
        <div className='alert alert-info'>
            <button className='btn btn-primary mx-1' onClick={nhsEventButton1Click()}>
                Button 1
            </button>

            <button className='btn btn-primary mx-1' onClick={nhsEventButton2Click}>
                Button 2
            </button>

            <button className='btn btn-success mx-1' onClick={nhsEventButton3Click("Hai Son")}>
                Button 3
            </button>

            <button className='btn btn-success mx-1' onClick={()=>nhsEventButton3Click("Nguyen Hai Son")}>
                Button 4
            </button>

        </div>
    )
}
