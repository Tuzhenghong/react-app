/*
 * @Descripttion: ref
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
    myRef = React.createRef();
    render() {
        return (
            <div>
                {/* <input ref="myValue" /> */}
                <input ref={this.myRef} />
                <button
                    onClick={() => {
                        // console.log('click', this.refs.myValue.value);

                        console.log('click', this.myRef.current.value);
                    }}>
                    add
                </button>
            </div>
        );
    }
}

export default App;
