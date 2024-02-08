import React from 'react';
import "./TwoTitle.css"
import Title from './Title/Title';

function TwoTitle({title1, title2, ...props}) {
    return (
        <div className='TwoTitle'>
            <Title title={title1}/>
            <label className='title2'>{title2}</label>
        </div>
    );
}

export default TwoTitle;