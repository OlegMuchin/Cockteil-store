import React, { useEffect } from 'react';
import "./NavCatalog.css"
import Picture from "../../UI/Picture/Picture"
import { NavLink, useLocation } from 'react-router-dom';

function NavCatalog({id, ...props}) {
    let list = [{tag:"Женщинам",to:"Women"},{tag:"Мужчинам",to:"Men"},{tag:"Детям",to:"Children"},{tag:"Обувь",to:"/Catalog/Shoes"},{tag:"Игрушки",to:"/Catalog/Toys"},{tag:"Аксессуары",to:"/Catalog/Accessories"},{tag:"Большие размеры",to:"/Catalog/Big_sizes"},{tag:"Дополнительно",to:"/Catalog/Additionally"},{tag:"Акции",to:"/Catalog/Stock"}]
    let listPlus = ["Майки","Костюмы","Брюки","Джинсы","Юбки","Шорты","Свитшоты, худи","Блузки и рубашки","Пиджаки и жакеты","Платья и сарафаны","Верхняя одежда"]
    let location = useLocation()

    useEffect(()=>{
        let NavCatalogPlus = document.querySelector(".NavCatalogPlus")
        if (location["pathname"] === "/Women" || location["pathname"] === "/Men" || location["pathname"] === "/Children") {
            NavCatalogPlus.style.display = "flex"
        } else {
            NavCatalogPlus.style.display = "none"
        }
    },[location])
    return (
        <div className='NavCatalog' id = {id}>
            <Picture src="./img/photo/LogoNeon.png"/>
            <div className='listCatalog'>
                {list.map((obj, index) => (
                    <NavLink className={"tag_catalog"} key={index} to={obj.to} >{obj.tag}</NavLink>
                ))}
            </div>
            <div className='NavCatalogPlus'>
                <div className='listCatalogPlus'>
                    {listPlus.map((tag, index) => (
                        <NavLink className={"tag_catalog"} key={index} to={`/Catalog${location["pathname"]}/${tag}`}>{tag}</NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NavCatalog;