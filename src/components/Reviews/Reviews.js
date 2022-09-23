import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();

    return (
        <div className='text-center '>
            <h1 className="text-3xl font-bold">All Reviews</h1>
            <div className='grid grid-cols-3 justify-center p-9'>
            {
                reviews.map(review => <Review key={review.id} review={review}> <Link to={'/reviewer/' +review.id} review={review} className='mt-5 font-bold hover:bg-blue-600 bg-blue-500 py-2 px-8 rounded text-white' >Profile</Link> </Review>)
            }
            </div>
        </div>
    );
};

export default Reviews;