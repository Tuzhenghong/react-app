/*
 * @Descripttion: 事件绑定
 * @version: V1.0
 * @Author: 涂正弘
 * @Date: 2022-07-05 08:40:52
 * @LastEditors: 涂正弘
 * @LastEditTime: 2022-07-05 16:14:45
 */
import React, { Component } from 'react';

/*
1.React 并不会真正的绑定事件到每一个具体的元素上，而是事件代理的模式
 */

class App extends Component {
    a = 100;

    handleClick2() {
        console.log('click2', this.a);
        // this是undefined,可以通过bind修改this指向
        /*
          call 改变this 自动执行函数
          apply 改变this 自动执行函数
          bind 改变this 不会自动执行函数 
         */
    }

    handleClick3 = () => {
        console.log('click3', this.a);
    };

    handleClick4 = () => {
        console.log('click4', this.a);
    };

    render() {
        return (
            <div>
                <input type="text" />
                <button
                    onClick={() => {
                        console.log('click1', '如果处理逻辑过多，不推荐这种写法', this.a);
                    }}>
                    add1
                </button>

                <button onClick={this.handleClick2.bind(this)}>add2 - 不推荐</button>
                <button onClick={this.handleClick3}>add3 - 推荐</button>
                <button onClick={() => this.handleClick4()}>add4 - 比较推荐</button>
            </div>
        );
    }
}

export default App;
