//配置路由，进行路由管理
import React from "react";
import {createBrowserRouter,RouterProvider}from "react-router-dom"//允许路由对象配置，更灵活且功能性更强。

//页面组件

import Login from "./pages/Login"
import Error from "./pages/Error"

import { Suspense,lazy } from "react";//预留的懒加载

//使用lazy函数对组件进行导入
const Home=lazy(()=>import('./pages/Home'));
const Cart=lazy(()=> import('./pages/Cart'));

//配置路由
const router = createBrowserRouter([
    {
        
    },
    {
        path:'/login',
        element:<Login/>
    }
])

function App () {
    
    return <RouterProvider router={router}/>;
  };
  
  export default App