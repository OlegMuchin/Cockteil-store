import React from 'react';
import "./TwoReviews.css"
import Review from "./Review/Review"

function TwoReviews({arrayReviews, ...props}) {
    return (
        <div className='TwoReviews'>
            {arrayReviews.map((review, index)=>(
                <Review key={index} avatar={review.avatar} amoutStars={review.amoutStars} text={review.text} nick={review.nick}/>
            ))}

        </div>
    );
}

export default TwoReviews;