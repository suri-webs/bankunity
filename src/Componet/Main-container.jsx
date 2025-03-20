import "../style/Main-container.css"
import "../style/Navbar.css"
import ContactUs from "./ContactUs"
import Footerjsx from "./Footer"
import HeaderJSx from "./Header"
import Levelup from "./LevelUp"
import Navbar from "./Navbar"
import Offercomponet from "./Offercomoponet"
import Aboutus from "./Aboutus"
import Help from "./Helps"
import Customer from "./Coustmercare"
import LoanDetails from "./LoanDetails"
import Account from "./Account"
import Deposit from "./Deposit"
import Payments from "./Payment"
import CreditCard from "./CreditCArd"

export default function Main_container() {
    return (
        <main>

            {/* home  ---- */}

            <Navbar />
            <HeaderJSx />
            <Offercomponet />
            <Levelup />
            <Footerjsx />




            {/* first row links */}

            {/* <Aboutus /> */}
            {/* <ContactUs /> */}
            {/* <Help />  */}
            {/* <Customer /> */}

            {/* second row links */}

            {/* <Account /> */}
            {/* <Deposit /> */}
            {/* <Payments /> */}
            {/* <CreditCard /> */}
            {/* <LoanDetails /> */}










        </main>
    )
}