import React from 'react';
import "./EllipseButton.css"
import { NavLink } from 'react-router-dom';

function EllipseButton({id, text, ...props}) {
    return (
        <NavLink to="/Catalog" className='EllipseButton' id = {id}>
            <div id='ellipse'/>
            <label className='btnText'>{text}</label>
            <div id='arrow'/>
        </NavLink>
    );
}

export default EllipseButton;