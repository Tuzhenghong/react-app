/*
 * @Descripttion: 组件样式
 * @version: V1.0
 * @Author: 涂正弘
 * @Date: 2022-07-05 16:13:54
 * @LastEditors: 涂正弘
 * @LastEditTime: 2022-07-05 16:28:33
 */
import React, { Component } from "react";

class App extends Component {
  render() {
    const myname = "mengli";
    const obj = {
      backgroundColor: "yellow",
      fontSize: "30px",
    };
    return (
      <div>
        {10 + 20} - {myname}
        <div style={{ backgroundColor: "red" }}>1111111111</div>
        <div style={obj}>2222222222</div>
      </div>
    );
  }
}

export default App;
