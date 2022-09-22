import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Review = ({review, bigger}) => {
   
    const {name,picture,reviewText,rating,index} = review;

    
    let NumOfStars = [];
    for (let i = 0; i < rating; i++) {
        NumOfStars.push(i);
    }

   
    return (
        <div className={(typeof bigger === 'boolean') && `${bigger? 'scale-110': 'scale-75 opacity-70'}`}>
            <div  className='justify-center  flex flex-col h-[240px] border shadow-lg rounded-[20px] w-[205px] p-4' style={{alignItems:'center'}}>
            <img className='w-[80px] justify-between h-[80px] rounded-[50%]' src={picture} alt="" />
            {index}
            <div className='font-bold capitalize text-xl my-2'>{name}</div>
            <div className='font-bold flex '>
                {
                    NumOfStars.map(a=> <FontAwesomeIcon color='orange' key={a} icon={faStar}></FontAwesomeIcon>)
                }
            </div>
            <div>{reviewText.length > 100 ? reviewText.slice(0,100) + '..': reviewText}</div>
        </div>
        </div>
    );
};

export default Review;