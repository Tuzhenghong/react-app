/*
 * @Descripttion: class类组件
 * @version: V1.0
 * @Author: 涂正弘
 * @Date: 2022-07-05 09:51:12
 * @LastEditors: 涂正弘
 * @LastEditTime: 2022-07-05 15:43:22
 */
/* class Test {
  constructor(props) {
    this.a = 1;
  }

  testa() {
    console.log("123");
  }
}
// extends 继承 
class Child extends Test {
  testb() {
    console.log("test");
  }
}

var obj = new Child();
obj.testa()
console.log(obj.a); */

import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        hello react component
        <ul>
          <li>123</li>
          <li>123</li>
        </ul>
      </div>
    );
  }
}  

export default App;
