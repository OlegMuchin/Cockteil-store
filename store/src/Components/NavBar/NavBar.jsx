import React from 'react';
import Icons from './Icons/Icons';
import Picture from "../UI/Picture/Picture"
import "./NavBar.css"
import NavCatalog from './NavCatalog/NavCatalog';

function NavBar({id, ...props}) {
    return (
        <div className='NavBar' id={id}>
            <NavCatalog/>
            <Picture id = "menu" src='./img/icons/clarity_menu-line.svg'/>
            <Icons id = "icons"/>
        </div>
    );
}

export default NavBar;