import React from 'react';
import "./Footer.css"
import Picture from "../UI/Picture/Picture"

function Footer(props) {
    const arrayNav = [
        {
            href:"#body",
            text:"Главная",
        },
        {
            href:"#Stock",
            text:"Акции",
        },
        {
            href:"Catalog",
            text:"Каталог",
        },
        {
            href:"",
            text:"Возврат",
        },
        {
            href:"",
            text:"Доставка",
        },
        {
            href:"#InvitationSuppliers",
            text:"Партнёрам",
        },
        {
            href:"",
            text:"Способы оплаты",
        },
        {
            href:"#FAQ",
            text:"Как сделать заказ?",
        },
    ]
    return (
        <footer className='Footer'>
            <div className='textFooter'>
                <div id='footer_block' className='footer_Information'>
                    <label>Информация</label>
                    <div>
                        {arrayNav.map((a, index) => (
                            <a className='footer_nav' key={index} href={a.href}>{a.text}</a>
                        ))}
                    </div>
                </div>
                <div id='footer_block' className='footer_my_office'>
                    <label>Мой кабинет</label>
                    <div>
                        
                    </div>
                </div>
                <div id='footer_block' className='footer_contact_Information'>
                    <label>Контактная информация</label>
                    <div>

                    </div>
                </div>
                <div id='footer_block' className='footer_networks'>
                    <label>Соц. сети</label>
                    <div  id='footer_networks_lines'>
                        <div id='footer_networks_line'>

                        </div>
                        <div id='footer_networks_line'>
                            <Picture id="icon" src="./img/icons/phone-voice.svg"/>
                            <p>+375255990755</p>
                        </div>
                        <div id='footer_networks_line'>
                            <Picture id="icon" src="./img/icons/time.svg"/>
                            <p>круглосуточно, без выходных</p>
                        </div>
                    </div>
                </div>
                <Picture id='footer_picture' src="./img/photo/LogoNeon.png"/>
            </div>
        </footer>
    );
}

export default Footer;