import React from 'react';
import "./InvitationSuppliers.css"
import MyInput from '../../UI/MyInput/MyInput';
import PushButton from '../../UI/button/PushButton/PushButton';

function InvitationSuppliers(props) {
    return (
        <section className='InvitationSuppliers' id='InvitationSuppliers'>
            <div className='blockInvitationSuppliers'>
                <div className='textInvitationSuppliers'>
                    <label>Приглашаем к сотрудничеству производителей и поставщиков одежды, обуви и аксессуаров</label>
                    <div>
                        <MyInput placeholder="Ваше имя"/>
                        <MyInput placeholder="Номер телефона"/>
                        <MyInput placeholder="Электронная почта"/>
                        <label>
                           <MyInput type="checkbox" style={{borderRadius: "100%"}}/> 
                           Даю согласие на обработку персональных данных
                        </label>
                    </div>
                    <PushButton text="Отправить"/>
                </div>
            </div>
        </section>
    );
}

export default InvitationSuppliers;