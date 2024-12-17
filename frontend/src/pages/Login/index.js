import React from 'react';
import LoginComponet from '../../components/Login';
import img from '../../assets/logo2.png';
import '../../styles/Login.css'


const Login = ({ name, foods }) => {
  console.log(123);

  return (
    <div className='bg'>
      <p className='tab active'>电子商城</p>
      <div className='empty-space'>
        <LoginComponet />
      </div>
    </div>
  )
}

export default Login;