import React from 'react';
import "./CloseButton.css"
import Picture from "../../Picture/Picture"

function CloseButton({functionClose, ...props}) {
    return (
        <div className='CloseButton' onClick={functionClose}>
            <Picture imgId={"cross"} src={"./img/icons/crossWhite.svg"}/>
        </div>
    );
}

export default CloseButton;