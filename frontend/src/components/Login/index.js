import React from 'react';
import QRcode from '../../assets/login-QRcode.png';
import '../../styles/Login.css'
const Login = () => {
    // console.log("Login.js");
    //在react中class时保留关键字，无法直接用class添加css类属性，需要使用className进行添加
    return (
        <div className='container'>
            {/* 左侧扫码区域 */}
            <div className='QRcode'>
                <p className='QRcode-Label'>手机扫码登录</p>
                <img className='QRcode-img' src={QRcode} alr='QR code' />
                {/* 在React项目中访问本地图片时，不能直接通过HTML语法的相对路径来访问图片，因为webpack环境下，图片需要经过编译和路径解析 */}
                <button className='refresh-btn'>刷新</button>
                <p className="QRcode-lession">
                    打开 <span className="app-highlight">手机商城</span> - 点击左上角扫一扫
                </p>
                <p className='QRcode-link'>怎么扫码登录？</p>
            </div>
            {/* 右侧登录区域 */}
            <div className='login'>
                <div className='login-tabs'>
                    <span className='tab active'>密码登录</span>
                    <span className='tab'>短信登录</span>
                </div>

                <form className='login-form'>
                    <input className='input-field' type='text' placeholder='账号名/邮箱/手机号'></input>
                    <input className='input-field' type='password' placeholder='请输入登录密码'></input>
                    <div className="forget-password">忘记密码</div>
                    <button className='btn'>登录</button>
                </form>
            </div>
        </div>
    )
}
export default Login;