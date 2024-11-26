//配置路由，进行路由管理
import React from "react";
import {createBrowserRouter,RouterProvider}from "react-router-dom"//允许路由对象配置，更灵活且功能性更强。

import { Suspense,lazy } from "react";//预留的懒加载

const router = createBrowserRouter([
    {
        
    },
    {
        
    }
])

function App () {
    
    return <RouterProvider router={router}/>;
  };
  
  export default App