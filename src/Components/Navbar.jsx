import "../style/Navbar.css";
import "../style/SecNAvbar.css";
import LoginComponent from "./Loginnutton";
import NavFirst from "./NavFirst-container";
import NavSeceond from "./NavSecn-container";
import NavTherd from "./NavTher-container";
import { Link } from "react-router-dom";

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
                            <Link to="/account" className="Secnavanker">Account</Link>
                            <i className="fa-solid fa-angle-down"></i>
                        </li>
                        <li className="Sec-anker-ul-li">
                            <Link to="/account/savings">Saving Account</Link>
                            <hr />
                            <Link to="/account/salary">Salary Account</Link>
                            <hr />
                            <Link to="/account/current">Current Account</Link>
                        </li>
                    </ul>

                    <hr />

                    <ul className="Sec-ankerul">
                        <li>
                            <Link to="/deposit" className="Secnavanker">Deposits</Link>
                            <i className="fa-solid fa-angle-down"></i>
                        </li>
                        <li className="Sec-anker-ul-li">
                            <Link to="/deposit/fixed">Fixed Deposit</Link>
                            <hr />
                            <Link to="/deposit/recurring">Recurring Deposit</Link>
                        </li>
                    </ul>

                    <hr />

                    <ul className="Sec-ankerul">
                        <li>
                            <Link to="/payment" className="Secnavanker">Payments</Link>
                            <i className="fa-solid fa-angle-down"></i>
                        </li>
                        <li className="Sec-anker-ul-li">
                            <Link to="/payment/transfer">Money Transfer</Link>
                            <hr />
                            <Link to="/payment/loan">Overdue Loan Payment</Link>
                            <hr />
                            <Link to="/payment/credit-bill">Credit Card Bill Payment</Link>
                            <hr />
                            <Link to="/payment/contactless">Contactless Payments</Link>
                        </li>
                    </ul>

                    <hr />

                    <ul className="Sec-ankerul">
                        <li>
                            <Link to="/credit-cards" className="Secnavanker">Cards</Link>
                            <i className="fa-solid fa-angle-down"></i>
                        </li>
                        <li className="Sec-anker-ul-li">
                            <Link to="/credit-cards">Credit Cards</Link>
                            <hr />
                            <Link to="/credit-cards/debit">Debit Cards</Link>
                            <hr />
                            <Link to="/credit-cards/prepaid">Prepaid Cards</Link>
                            <hr />
                            <Link to="/credit-cards/loan">Loan on Credit Card</Link>
                        </li>
                    </ul>

                    <hr />

                    <ul className="Sec-ankerul">
                        <li>
                            <Link to="/loan-details" className="Secnavanker">Loans</Link>
                            <i className="fa-solid fa-angle-down"></i>
                        </li>
                        <li className="Sec-anker-ul-li">
                            <Link to="/loan-details/personal">Personal Loan</Link>
                            <hr />
                            <Link to="/loan-details/home">Home Loans</Link>
                            <hr />
                            <Link to="/loan-details/car">Car Loan</Link>
                            <hr />
                            <Link to="/loan-details/smart">Smart Loans</Link>
                        </li>
                    </ul>

                    <hr />

                    <LoginComponent />

                    <Link to="/notifications" className="Secnavanker">
                        <i className="fa-solid fa-bell"></i>
                    </Link>
                </ul>
            </div>
        </>
    );
}
