import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Review = (props) => {
   
    const bigger = props.bigger;
    const {name,picture,reviewText,rating,index} = props.review;

    
    let NumOfStars = [];
    for (let i = 0; i < rating; i++) {
        NumOfStars.push(i);
    }

    let className;

    if ( typeof bigger === 'boolean') {
        if (bigger === true) {
             className = 'scale-110';
        }else{
            className = 'scale-75 opacity-70';
        }
    }
    console.log(props.children);
   
    return (
        <div className={`${className} + 'w-full flex justify-center '`}>
            <div  className='justify-center  flex flex-col  border shadow-lg rounded-[20px] w-[205px] p-4' style={{alignItems:'center'}}>
            <img className='w-[80px] justify-between h-[80px] rounded-[50%]' src={picture} alt="" />
            {index}
            <div className='font-bold capitalize text-xl my-2'>{name}</div>
            <div className='font-bold flex '>
                {
                    NumOfStars.map(a=> <FontAwesomeIcon color='orange' key={a} icon={faStar}></FontAwesomeIcon>)
                }
            </div>
            <div>{reviewText.length > 70 ? reviewText.slice(0,70) + '..': reviewText}</div>
            {
                props.children ? props.children : null
            }
        </div>
        </div>
    );
};

export default Review;