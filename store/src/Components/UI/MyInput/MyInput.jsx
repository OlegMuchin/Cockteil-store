import React from 'react';
import "./MyInput.css"

function MyInput({id, placeholder, type, style, ...props}) {
    return (
        <input className='MyInput' id={id} placeholder={placeholder} type={type} style={style}/>
    );
}

export default MyInput;