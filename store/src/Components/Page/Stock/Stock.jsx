import React from 'react';
import "./Stock.css"
import Product from './Product/Product';
import TwoTitle from '../../TwoTitle/TwoTitle';

function Stock(props) {
    let products = [
        {
            photo:"./img/photo/Rectangle_23.png",
            priceNow:50,
            price:65,
            text:"Блузка женская классная",
            like:true,
            stars:2,
        },
        {
            photo:"./img/photo/Rectangle_24.png",
            priceNow:50,
            price:65,
            text:"Блузка женская классная",
            like:false,
            stars:3,
        },
        {
            photo:"./img/photo/Rectangle_25.png",
            priceNow:50,
            price:65,
            text:"Блузка женская классная",
            like:true,
            stars:5,
        },
        {
            photo:"./img/photo/Rectangle_26.png",
            priceNow:50,
            price:65,
            text:"Блузка женская классная",
            like:false,
            stars:4,
        },
    ]
    return (
        <section className='Stock' id="Stock">
            <TwoTitle title1="Успей купить!" title2="Акции"/>
            <div className='productsStock'>
                {products.map((product, index)=>(
                    <Product key={index} photo={product.photo} priceNow={product.priceNow} price={product.price} text={product.text} like={product.like} stars={product.stars}/>
                ))}
            </div>
        </section>
    );
}

export default Stock;