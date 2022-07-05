/*
 * @Descripttion: 组件嵌套
 * @version: V1.0
 * @Author: 涂正弘
 * @Date: 2022-07-05 15:53:49
 * @LastEditors: 涂正弘
 * @LastEditTime: 2022-07-05 16:11:03
 */
import React, { Component } from "react";

// Navbar 的 Child 子组件
class Child extends Component {
    render() {
        return <div>Child</div>
    }
}

// Navbar 组件
class Navbar extends Component {
  render() {
    return (
      <div>
        Navbar
        <Child></Child>
      </div>
    );
  }
}

// Swiper 组件
function Swiper() {
  return <div>Swiper</div>;
}

// Tabbar 组件
const Tabbar = () => <div>Tabbar</div>;

class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Swiper></Swiper>
        <Tabbar></Tabbar>
      </div>
    );
  }
}

export default App;
