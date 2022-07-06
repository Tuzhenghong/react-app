/*
 * @Descripttion: 入口文件
 * @version: V1.0
 * @Author: 涂正弘
 * @Date: 2022-07-05 08:40:52
 * @LastEditors: 涂正弘
 * @LastEditTime: 2022-07-05 16:14:45
 */
import React from 'react';
import { createRoot } from 'react-dom/client';

// 测试git提交

// 引入class组件
// import App from './01-base/01-class-component';
// 引入函数组件
// import App from './01-base/02-function-component';
// 引入嵌套组件
// import App from './01-base/03-component-nest';
// 引入 组件样式
// import App from './01-base/04-component-style';
// 引入事件绑定
// import App from './01-base/05-event-bind';
// 引入ref
import App from './01-base/06-ref';

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
