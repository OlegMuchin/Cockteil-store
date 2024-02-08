import React from 'react';
import "./Catalog.css"
import NavBar from "../NavBar/NavBar"
import { NavLink, useLocation } from 'react-router-dom';
import Title from "../TwoTitle/Title/Title"
import Product from '../Page/Stock/Product/Product';

function Catalog(props) {
    let location = useLocation()["pathname"]
    let tags = location.slice(8)

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
        <section className='Catalog'>
            <NavBar/>
            <div className='CatalogContent'>
                <label className='NavTags'><NavLink to="/">Главная</NavLink>{tags}</label>
                <Title title={tags?tags:"Каталог"}/>
                <div className='Catalog_filterOnWord'>
                    <label className='filter_text'>Сортировать по:</label>
                    <label className='filter'>Популярности</label>
                    <label className='filter'>Рейтингу</label>
                    <label className='filter'>Цене</label>
                    <label className='filter'>Скидке</label>
                    <label className='filter'>Обновлению</label>
                </div>
                <div className='CatalogProducts'>
                    <div className='Catalog_filterOnNumbers'>
                        <label className='text_filter'>Цена, б.р</label>
                        <input className='rangePrice' type='range'></input>
                        <label className='text_filter'>Размер<select className='selectFilter'></select></label>
                        <label className='text_filter'>Цвета<select className='selectFilter'></select></label>
                    </div>
                    <div className='Products'>
                        {products.map((product, index)=>(
                        <Product key={index} photo={product.photo} priceNow={product.priceNow} price={product.price} text={product.text} like={product.like} stars={product.stars}/>
                    ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Catalog;