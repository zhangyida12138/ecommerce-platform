import React from 'react';
import demo from '../../assets/granary.png';
import '../../styles/common.css';

const RecommendationCard=({images,text})=>{

    return (
        <div className='RecommendationCard'>
            <div>
                <img src={demo} alt='demo' className='RecommendationCard-img'/>
                <div className='RecommendationCard-Content'>
                    <div className='RecommendationCard-title'>
                        这是标题
                    </div>
                    <div className='RecommendationCard-text'>
                        这是内容
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RecommendationCard;

