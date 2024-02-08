import React from 'react';
import "./Stars.css"
import Picture from '../Picture/Picture';

function Stars({amoutStars, ...props}) {
    function forStars(amoutStars) {
        let content = [];
        for (let index = 0; index < amoutStars; index++) {
            content.push(<Picture key={index} imgId="imgStar" src="./img/icons/favorite-solid.svg"/>)
        }
        return content;
    }
    return (
        <div className='Stars'>
            {forStars(amoutStars)}
        </div>
    );
}

export default Stars;