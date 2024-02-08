import React from 'react';
import "./PurpleButton.css"

function PurpleButton({functuonButton ,text, ...props}) {
    return (
        <button className='PurpleButton' onClick={functuonButton}>{text}</button>
    );
}

export default PurpleButton;