import "../style/Main-container.css"
import "../style/Navbar.css"
import ContactUs from "./ContactUs"
import Footerjsx from "./Footer"
import HeaderJSx from "./Header"
import Levelup from "./LevelUp"
import Navbar from "./Navbar"
import Offercomponet from "./Offercomoponet"
import Aboutus from "./Aboutus"
import Help from "./Help"
import Customer from "./Coustmercare"
import LoanDetails from "./LoanDetails"
import Account from "./Account"
import Deposit from "./Deposit"
import Payments from "./Payment"
import CreditCard from "./CreditCArd"
import AccountHolderPage from "./Holder"

export default function Main_container() {
    return (
        <main>

            {/* home  ---- */}
            {/* 
            <Navbar />
            <HeaderJSx />
            <Offercomponet />
            <Levelup />
            <Footerjsx /> */}

            <AccountHolderPage />

        </main>
    )
}