import React, { useState } from 'react';
import '../../styles/SearchForm.css'
const SearchForm = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    return (
        <div className='search-form-container'>
            <form className='search-form'>
                {/* 搜索框筛选区域 */}
                <div className='search-filter-container'
                    onMouseEnter={() => setIsDropdownVisible(true)}
                    onMouseLeave={() => { setIsDropdownVisible(false) }}>
                    <span className='search-filter'>宝贝▾</span>
                    {isDropdownVisible && (
                        <div className='dropdown-menu'>
                            <div className='dropdown-item'>宝贝▾</div>
                            <div className='dropdown-item'>店铺</div>
                            <div className='dropdown-item'>商家</div>
                        </div>
                    )}
                </div>

                <input className='search-input' type='text'
                    placeholder='请输入搜索内容'></input>
                <button className='search-button' type='submit'>搜索</button>
            </form>
        </div>
    )
}
export default SearchForm;