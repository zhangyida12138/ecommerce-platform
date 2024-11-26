//项目的入口文件，引入React和ReactDOM
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App';

//绑定根节点
const root = ReactDOM.createRoot(document.getElementById('root'))

// 将应用挂载到DOM中
root.render(

    <React.StrictMode>
        <App />
    </React.StrictMode>
)


