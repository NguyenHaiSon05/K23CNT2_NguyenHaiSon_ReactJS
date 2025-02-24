import React from 'react'

export default function NhsFuncCompEventProps(nhsprops) {
    // Ham su ly su kien
    const nhsHanldeButtonClick1 = ()=>{
        alert("Dữ liệu từ props:" + nhsprops.nhsRenderName);
        console.log("Xin chao:",nhsprops.nhsRenderName);
    }

    const nhsHanldeButtonClick2 = (param)=>{
        //Lay du lieu tu Props
        alert("Du lieu tu props (Button 2 click):" + nhsprops.nhsRenderName);
        //Du lieu tu tham so
        console.log('=================================');
        console.log("Hi:",param);
        console.log('=================================');
     
    }

  return (
    <div className='alert alert-info'>
        <button className='btn btn-primary mx-1' 
                onClick={nhsHanldeButtonClick1}>Button 1</button>

        <button className='btn btn-success mx-1'
                onClick={()=>nhsHanldeButtonClick2("Button 2")}>Button 2</button>    
    </div>
  )
}   
