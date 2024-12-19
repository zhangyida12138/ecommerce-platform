import React from 'react';
import {createBrowserRouter,RouterProvider}from "react-router-dom";//允许路由对象配置，更灵活且功能性更强。

//页面组件
import Home from "../pages/Home";
import Login from "../pages/Login";
import Error from "../pages/Error";
import RotatePicture from "../components/RecommendationCard"

import { Suspense,lazy } from "react";//预留的懒加载

//使用lazy函数对组件进行导入
// const Home=lazy(()=>import('./pages/Home'));
// const Cart=lazy(()=> import('./pages/Cart'));

//不用BrowserRouter的原因是，下面这个可以更灵活的配置路由，支持嵌套和数据加载等功能，还可以懒加载。
const router = createBrowserRouter([
    {
        path:'*',
        element:<RotatePicture/>//默认页面为登录页面
    }
])

//配置路由
const Router=()=>{
    console.log('Router.js ');
    return <RouterProvider router={router}/>;
}

export default Router;