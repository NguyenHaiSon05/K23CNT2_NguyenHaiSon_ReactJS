import NhsClassComp from "./components/NhsClassComp";
import NhsFuncComp from "./components/NhsFuncComp";
import NhsJsxExpression from "./components/NhsJsxExpression";

function NhsApp() {
  return (
  <div className="container border mt-3 bg-white">
    <h1>React JS Lesson03 - Nguyễn Hải Sơn</h1>

    <NhsJsxExpression/>
    <hr/>
    {/*Sử dụng Function Component*/}
    <NhsFuncComp/>
    {/*Sử dụng Class Components*/}
    <NhsClassComp/>
  </div>
  );
}

export default NhsApp;
