import React from 'react';
import '../../styles/SideNavBar.css'
import report from "../../assets/report.png";
import message from "../../assets/message.png";
import cart from "../../assets/cart.png";
import help from "../../assets/help.png";
const SideNavBar = () => {
    return (
        <div className='side-navbar-container'>
            <div className='side-navbar-menu'>
                <div className='side-navbar-item'>
                    <img src={message} alt="消息"  className='icon' />
                    <div>消息</div>
                </div>
                <div className='side-navbar-item'>
                    <img src={cart} alt="购物车"  className='icon' />
                    <div>购物车</div>
                </div>
                <div className='side-navbar-item'>
                    <img src={help} alt="客服"  className='icon' />
                    <div>客服</div>
                </div>
                <div className='side-navbar-item'>
                    <img src={report} alt="反馈"  className='icon' />
                    <div>反馈</div>
                </div>
            </div>
        </div>
    )
}
export default SideNavBar;