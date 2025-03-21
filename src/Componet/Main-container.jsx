import "../style/Main-container.css"
import "../style/Navbar.css"
import ContactUs from "../BackComponet/ContactUs"
import Footerjsx from "./Footer"
import HeaderJSx from "./Header"
import Levelup from "./LevelUp"
import Navbar from "./Navbar"
import Offercomponet from "./Offercomoponet"
import Aboutus from "../BackComponet/Aboutus"
import Help from "../BackComponet/Helps"
import Customer from "../BackComponet/Coustmercare"
import LoanDetails from "../BackComponet/LoanDetails"
import Account from "../BackComponet/Account"
import Deposit from "../BackComponet/Deposit"
import Payments from "../BackComponet/Payment"
import CreditCard from "../BackComponet/CreditCArd"

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