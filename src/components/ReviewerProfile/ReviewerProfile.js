import React, { useEffect, useState } from 'react';


const ReviewerProfile = (props) => {
    
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('./reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    console.log(reviews);
    
    return (
        <div>
            <h1>Hello From Reviewer Profile:{}</h1>
        </div>
    );
};

export default ReviewerProfile;