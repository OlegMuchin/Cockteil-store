import React from 'react';
import "./MoreDetailsButton.css"

function MoreDetailsButton({id, text, ...props}) {
    return (
        <button className='MoreDetailsButton' id={id}>
            <label>{text}</label>
            <div className='arrow'></div>
        </button>
    );
}

export default MoreDetailsButton;