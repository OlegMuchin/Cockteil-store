import React from 'react';
import "./InvitationSuppliersModalWindow.css"
import TwoTitle from "../../../TwoTitle/TwoTitle"
import CloseButton from "../../../UI/button/CloseButton/CloseButton"

function InvitationSuppliersModalWindow(props) {
    function closeModal() {
        const window = document.querySelector(".modal-window")
        window.style.display = "none"
        window.classList.remove("hystmodal--active")
    }
    return (
        <div className='modal-window'>
            <div className='modal-wrap'>
                <div className='modal-transfer'>
                    <div className='modal-head'>
                        <div className='InvitationSuppliersText'> 
                            <TwoTitle title1="Ваша заявка обрабатывается." title2="Спасибо!"/>
                            <p>Наш специалист с Вами свяжется в ближайшее время</p>
                        </div>
                    </div>
                    <CloseButton functionClose={closeModal}/>
                </div>
            </div>
        </div>
    );
}

export default InvitationSuppliersModalWindow;