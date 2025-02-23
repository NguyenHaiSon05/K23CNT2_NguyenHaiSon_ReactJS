import NhsClassComp from "./components/NhsClassComp";
import NhsFuncComp from "./components/NhsFuncComp";
import NhsFuncComp1 from "./components/NhsFuncComp1";

function NhsApp() {
  //Object
  const user = {
    fullName:'Nguyen Hai Son',
    age:20,
    phone:"0388604***"
  }
  return (
    <div className="container border">
      <h1>Demo component - Props - State</h1>
      <hr/>
      <div className='alert alert-danger'>
          <NhsFuncComp name="Hải Sơn" address="28A Lê Trọng Tấn" company ="NTU" />
          <hr/>
          <NhsFuncComp name="Nguyễn Hải Sơn" address="28A Le Trong Tan" company ="NTU" />
      </div>
      <div className="alert alert-info">
        <NhsFuncComp1 renderInfo={user} />
      </div>
      <NhsClassComp />
      {/* chuyển dữ liệu từ NhsApp -> xuống NhsClassComp */}
      <NhsClassComp renderName="K23CNT2" renderUsers={user} />
    </div>  
  );
}

export default NhsApp;
