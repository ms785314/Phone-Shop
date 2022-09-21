import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();

    return (
        <div className='text-center '>
            <h1 className="text-3xl">Reviews here:{reviews.length}</h1>
            <div className='grid grid-cols-3 justify-center border border-red-400'>
            {
                reviews.map(review => <Review review={review}></Review>)
            }
            </div>
        </div>
    );
};

export default Reviews;