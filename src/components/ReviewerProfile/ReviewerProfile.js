import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ReviewerProfile = (props) => {
    

    // not working for local data
    // const [reviews, setReviews] = useState([]);
    // useEffect(()=>{
    //     fetch('./reviews.json')
    //     .then(res => res.json())
    //     .then(data => setReviews(data))
    // },[])
    // console.log(reviews);

    const params = useParams();
    
    return (
        <div className='text-3xl font-semibold mt-6 w-full flex justify-center capitalize'>
            <h1>will show data for id:{params.id}</h1>
        </div>
    );
};

export default ReviewerProfile;