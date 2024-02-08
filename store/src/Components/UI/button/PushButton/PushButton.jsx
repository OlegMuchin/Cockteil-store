import React from 'react';
import "./PushButton.css"

function PushButton({text, ...props}) {
    function PushButtonClick() {        
        const window = document.querySelector(".modal-window")
        window.style.display = "flex"
        window.classList.add("hystmodal--active")
    }
    return (
        <button className='PushButton' onClick={PushButtonClick}>
            {text}
            <div className='arrow'></div>
        </button>
    );
}

export default PushButton;