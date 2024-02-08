import React from 'react';
import "./AboutStore.css"
import Title from "../../TwoTitle/Title/Title"

function AboutStore(props) {
    const arrayAboutStore = [
        {
            location:"up",
            text:"Скидки постоянным клиентам от 5%",
        },
        {
            location:"down",
            text:"Возможность доставки в любой город Беларуси",
        },
        {
            location:"up",
            text:"Предлагаем самые выгодные цены",
        },
        {
            location:"up",
            text:"Наши покупатели всегда остаются довольны",
        },
        {
            location:"down",
            text:"Пункты выдачи заказов рядом с домом",
        },
        {
            location:"up",
            text:"Широкий ассортимент товаров для всей семьи",
        },
    ]
    return (
        <section className='AboutStore' id='AboutStore'>
            <div className='textAboutStore'>
                <Title title="Почему выбирают нас?"/>
                <div className='Causes'>
                    {arrayAboutStore.map((content, index)=>(
                        <label key={index} className={content.location} id='text'>{content.text}</label>
                    ))}  
                </div>
            </div>  
        </section>
    );
}

export default AboutStore;