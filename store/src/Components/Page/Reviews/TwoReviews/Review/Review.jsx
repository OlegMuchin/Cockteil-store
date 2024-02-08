import React from 'react';
import "./Review.css"
import Picture from "../../../../UI/Picture/Picture"
import Stars from "../../../../UI/Stars/Stars"

function Review({avatar, amoutStars, text, nick, ...props}) {
    return (
        <div className='Review'>
            <Picture src={avatar}/>
            <div className='contentReview'>
                <Stars amoutStars={amoutStars}/>
                <label>{text}</label>
                <label>{nick}</label>
            </div>
        </div>
    );
}

export default Review;