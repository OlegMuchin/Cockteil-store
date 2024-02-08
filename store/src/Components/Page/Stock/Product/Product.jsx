import React from 'react';
import Picture from '../../../UI/Picture/Picture';
import MoreDetailsButton from '../../../UI/button/MoreDetailsButton/MoreDetailsButton';
import Stars from '../../../UI/Stars/Stars';
import "./Product.css"

function Product({photo, priceNow, price, text, like, stars, ...props}) {
    return (
        <div className='Product'>
            <Picture src={photo}/>
            <div className='Product_content'>
                <div className='content'>
                    <label>
                        <span className='priceNow'>{priceNow}.00 р </span>
                        <span className='price'> {price}.00 р</span><br/>
                        {text}
                    </label>
                    <div className='content_icons'>
                        <Picture imgId="heart" src={like? "./img/icons/Heart_red.svg.png":"./img/icons/clarity_heart-line.svg"}/>
                        <Picture imgId="bag" src="./img/icons/clarity_shopping-bag-line.svg"/>
                    </div>
                </div>
                <div className='content'>
                    <MoreDetailsButton text="Подробнее"/>
                    <Stars amoutStars={stars}/>
                </div>
            </div>
        </div>
    );
}

export default Product;