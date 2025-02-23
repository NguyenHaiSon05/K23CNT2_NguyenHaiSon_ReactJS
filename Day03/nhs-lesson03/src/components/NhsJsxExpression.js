import React from 'react'

export default function NhsJsxExpression() {
  // Biến
  const name="Nguyễn Hải Sơn";
  // Biến đối tượng
  const user = {
      firstName:"Hải",
      lastName:"Sơn"
  }
  //Hàm
  const fullName=(user)=>{
      return user.firstName + ' ' + user.lastName ;
  }
  //element
  const element =(
      <div>
          {/* Biểu thức jsx  */}
          <h2> {fullName(user)}  </h2>
          <hr/>
          <h3> Welcome to,{name} </h3>
      </div>  
  );
  //Ham
  const sayWelcome = (name)=>{
       if(name){
            return <h3> Welcome to {name}</h3>
       }else{
            return <h3> Welcome to Fit-NTU - K23CNT2</h3>
       }
  }
return (
  <div>
    <h1> NHS - JSX Expression</h1>
    {/*Sử dụng biến elemen */}
    {element}

    <hr/>
    {sayWelcome()}
    <hr/>
    {sayWelcome("Nguyễn Hải Sơn")}
  </div>
  )
}
