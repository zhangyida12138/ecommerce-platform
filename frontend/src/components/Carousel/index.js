import React, { useState, useEffect, useRef } from 'react';
import '../../styles/Carousel.css';
import Demo from '../../assets/granary.png';

const Carousel = ({ images }) => {
    const imgList = [Demo, Demo, Demo, Demo];
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(true); // 是否处于过渡状态
    const trackRef = useRef(null);

    const extendImgList = [
        imgList[imgList.length - 1],
        ...imgList,
        imgList[0],
    ];

    const handleTransitionEnd = () => {
        if (currentIndex === 0) {
            // 从第一张克隆图跳到最后一张真实图片
            setIsTransitioning(false); // 暂停过渡
            setCurrentIndex(extendImgList.length - 2);
        } else if (currentIndex === extendImgList.length - 1) {
            // 从最后一张克隆图跳到第一张真实图片
            setIsTransitioning(false); // 暂停过渡
            setCurrentIndex(1);
        }
    };

    useEffect(() => {
        if (!isTransitioning) {
            // 强制下一帧重置 transition
            requestAnimationFrame(() => {
                setIsTransitioning(true); // 恢复过渡效果
            });
        }
    }, [isTransitioning]);
    //节流
    const handleNext = () => {
        let timer = null;
        return function () {
            if (!timer)
                timer = setTimeout(function () {
                    setIsTransitioning(true);
                    setCurrentIndex((prev) => prev + 1);
                    timer = null;//用这个清除计时器
                    //当计时器还在运作的时候是无法清除计时器的
                    //确保在延迟时间结束后可以再次触发
                }, 300)
        }
    }
    //节流
    const handlePrev = () => {
        let timer = null;
        return function () {
            if (!timer)
                timer = setTimeout(function () {
                    setIsTransitioning(true);
                    setCurrentIndex((prev) => prev - 1);
                    timer = null;//用这个清除计时器
                    //当计时器还在运作的时候是无法清除计时器的
                    //确保在延迟时间结束后可以再次触发
                }, 300)
        }

    }

    return (
        <div className='carousel'>
            <div
                className='carousel-track'
                ref={trackRef}
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
                }}
                onTransitionEnd={handleTransitionEnd}
            >
                {extendImgList.map((image, index) => (
                    <img key={index} src={image} alt={`Slide ${index}`} className='carousel-item' />
                ))}
            </div>
            <button className='carousel-button prev' onClick={handlePrev()}>&#10094;</button>
            <button className='carousel-button next' onClick={handleNext()}>&#10095;</button>
        </div>
    );
};

export default Carousel;
