import React from 'react';
import MainPage from './MainPage/MainPage';
import Footer from '../Footer/Footer';
import InvitationSuppliers from './InvitationSuppliers/InvitationSuppliers';
import Cooperation from "./Cooperation/Cooperation"
import FAQ from "./FAQ/FAQ"
import Reviews from "./Reviews/Reviews"
import Stock from "./Stock/Stock"
import AboutStore from "./AboutStore/AboutStore"
import InvitationSuppliersModalWindow from "./InvitationSuppliers/InvitationSuppliersModalWindow/InvitationSuppliersModalWindow"

function Page(props) {
    return (
        <div>
            <MainPage/>
            <AboutStore/>
            <Stock/>
            <Reviews/>
            <FAQ/>
            <Cooperation/>
            <InvitationSuppliers/>
            <Footer/>
            <InvitationSuppliersModalWindow/>
        </div>
    );
}
export default Page;