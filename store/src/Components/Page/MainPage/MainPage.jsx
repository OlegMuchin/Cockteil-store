import React from 'react';
import "./MainPage.css"
import MainScreen from './MainScreen/MainScreen';

function MainPage(props) {
    return (
        <section className='MainPage'>
            <MainScreen id = "MainScreen"/>
            <div className='ellipse'></div>
        </section>
    );
}

export default MainPage;