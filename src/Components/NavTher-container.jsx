import { Link } from "react-router-dom";

export default function NavTherd() {
    return (
        <div className="Nav-ankar">
            <ul className="Navul none">
                <li className="Navul-li">
                    <Link to="/about" className="Anker-nav">About Us</Link>
                </li>
            </ul>

            <Link to="/contact" className="Anker-nav none">Contact Us</Link>

            <ul className="Navul none">
                <li className="Navul-li">
                    <Link to="/account" className="Anker-nav">Accounts</Link>
                    <i className="fa-solid fa-angle-down"></i>
                </li>
                <li className="cards-for-slide">
                    <Link to="/account/savings" className="slide-anker">Savings Account</Link>
                    <hr />
                    <Link to="/account/salary" className="slide-anker">Salary Account</Link>
                    <hr />
                    <Link to="/account/current" className="slide-anker">Current Account</Link>
                </li>
            </ul>

            <Link to="/help" className="Anker-nav none">Help</Link>

            <ul className="Navul none">
                <li className="Navul-li">
                    <Link to="/customer" className="Anker-nav">Customer Services</Link>
                    <i className="fa-solid fa-angle-down"></i>
                </li>
                <li className="cards-for-slide">
                    <Link to="/customer/care" className="slide-anker">Customer Care</Link>
                    <hr />
                    <Link to="/customer/forms" className="slide-anker">Form Center</Link>
                    <hr />
                    <Link to="/customer/faqs" className="slide-anker">FAQs</Link>
                    <hr />
                    <Link to="/customer/report" className="slide-anker">Report Suspicious Behavior</Link>
                </li>
            </ul>

            {/* Small Menu */}
            <ul className="Smallcontainer">
                <i className="fa-solid fa-list"></i>
                <li className="Small-containerli">
                    <Link to="/contact" className="slide-anker">Contact Us</Link>
                    <hr />
                    <Link to="/customer/care" className="slide-anker">Customer Care</Link>
                    <hr />
                    <Link to="/customer/forms" className="slide-anker">Form Center</Link>
                    <hr />
                    <Link to="/customer/faqs" className="slide-anker">FAQs</Link>
                    <hr />
                    <Link to="/customer/feedback" className="slide-anker">Feedback</Link>
                    <hr />
                    <Link to="/customer/services" className="slide-anker">Service Request</Link>
                    <hr />
                </li>
            </ul>
        </div>
    );
}
