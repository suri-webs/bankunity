import "../style/Navbar.css"
import "../style/SecNAvbar.css"
import LoginComponent from "./Loginnutton"
import NavFirst from "./NavFirst-container"
import NavSeceond from "./NavSecn-container"
import NavTherd from "./NavTher-container"
export default function Navbar() {
    return (
        <>
            <nav>
                <NavFirst />
                <NavSeceond />
                <NavTherd />

            </nav>
            <div className="sec-nav">
                <ul>

                    <ul className="Sec-ankerul">
                        <li>
                            <a href="#" className="Secnavanker">Account </a>
                            <i class="fa-solid fa-angle-down"></i>
                        </li>
                        <li className="Sec-anker-ul-li">
                            <a href="#">Saving Account</a>
                            <hr />
                            <a href="#">Salary Account</a>
                            <hr />
                            <a href="#">Current Account</a>



                        </li>
                    </ul>

                    <hr />

                    <ul className="Sec-ankerul">
                        <li>
                            <a href="#" className="Secnavanker">Deposits </a>
                            <i class="fa-solid fa-angle-down"></i>
                        </li>
                        <li className="Sec-anker-ul-li">
                            <a href="#">Fixed Deposit</a>
                            <hr />
                            <a href="#"> Recurring Deposit</a>
                      


                        </li>
                    </ul>


                    <hr />

                    <ul className="Sec-ankerul">
                        <li>
                            <a href="#" className="Secnavanker">Payments </a>
                            <i class="fa-solid fa-angle-down"></i>
                        </li>
                        <li className="Sec-anker-ul-li">
                            <a href="#">Money Transfer</a>
                            <hr />
                            <a href="#">Overdue Loan Payment</a>
                            <hr />
                            <a href="#">Credit Card Bill Payment</a>
                            <hr />

                            <a href="#">Contactless Payments</a>


                        </li>
                    </ul>

                    <hr />

                    <ul className="Sec-ankerul">
                        <li>
                            <a href="#" className="Secnavanker">Cards </a>
                            <i class="fa-solid fa-angle-down"></i>
                        </li>
                        <li className="Sec-anker-ul-li">
                            <a href="#">Credit Cards <span>Manage Standing Instructions Mandate Hub FAQ's Mandate Hub User Guide</span></a>
                            <hr />
                            <a href="#">Debit Cards <span>Upgrade Debit Card Manage Standing Instructions Mandate Hub FAQ's Mandate Hub User Guide</span></a>
                            <hr />

                            <a href="#">Prepaid Cards</a>
                            <hr />

                            <a href="#">Loan on Credit Card</a>

                        </li>
                    </ul>

                    <hr />

                    <ul className="Sec-ankerul">
                        <li>
                            <a href="#" className="Secnavanker">Loans </a>
                            <i class="fa-solid fa-angle-down"></i>
                        </li>
                        <li className="Sec-anker-ul-li">
                            <a href="#">Personal Loan</a>
                            <hr />
                            <a href="#">Home Loans</a>
                            <hr />
                            <a href="#">Car Loan</a>
                            <hr />
                            <a href="#">Smart Loans</a>

                        </li>
                    </ul>

                    <hr />

                    <LoginComponent />

                    <a href="#" className="Secnavanker"><i class="fa-solid fa-bell"></i></a>





                </ul>
            </div >
        </>
    )
}