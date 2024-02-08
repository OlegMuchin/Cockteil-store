import React from 'react';
import "./Title.css"

function Title({title, ...props}) {
    return (
        <label className='Title'>{title}</label>
    );
}

export default Title;