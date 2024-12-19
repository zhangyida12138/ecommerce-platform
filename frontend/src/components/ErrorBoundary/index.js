import React from 'react';
import NotFound from '../../assets/NotFound.png';
import '../../styles/ErrorBoundary.css';
const ErrorBoundary = ({ name, foods }) => {
    return (
      <div className='NotFound'>
        <img className='NotFound-img' src={NotFound}></img>
        <div className='NotFound-text'>图片飞走啦</div>
      </div>
    )
  }
  
  export default ErrorBoundary;