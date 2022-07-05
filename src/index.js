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

// 引入class组件
// import App from './01-base/01-class-component';
// 引入函数组件
// import App from './01-base/02-function-component';
// 引入嵌套组件
// import App from './01-base/03-component-nest';
// 引入 组件样式
import App from './01-base/04-component-style';

const root = createRoot(document.getElementById('root'))
root.render(<App />)