import { useState } from "react"

export default function NavTherd() {

    const [contai, setcontai] = useState(false);





    return (

        <div className="Nav-ankar">


            <div className="nonediv">
                <ul className="Navul none ">
                    <li className="Navul-li">
                        <a href="#" className="Anker-nav">About Us</a><i class="fa-solid fa-angle-down"></i>
                    </li>


                </ul>

                <a href="#" className="Anker-nav none">Contact Us </a>

                <ul className="Navul none ">
                    <li className="Navul-li" ><a href="#" className="Anker-nav">Accounts </a><i class="fa-solid fa-angle-down"></i></li>
                    <li className="cards-for-slide">
                        <a href="#" className="slide-anker">Savings Account</a>

                        <hr />
                        <a href="#" className="slide-anker">Salary Account</a>
                        <hr />
                        <a href="#" className="slide-anker">Courent Account</a>
                    </li>
                </ul>

                <a href="#" className="Anker-nav none ">Help</a>

                <ul className="Navul none">
                    <li className="Navul-li"><a href="#" className="Anker-nav">Customer Services</a><i class="fa-solid fa-angle-down"></i></li>
                    <li className="cards-for-slide">

                        <a href="#" className="slide-anker">Coustomer care</a>
                        <hr />
                        <a href="#" className="slide-anker">From center</a>
                        <hr />
                        <a href="#" className="slide-anker">FAQs</a>
                        <hr />

                        <a href="#" className="slide-anker">Report Suspicious Behavior</a>
                    </li>
                </ul>
            </div>

            {/* Small one  */}
            <ul className="Smallcontainer">
                <i class="fa-solid fa-list" onClick={() => setcontai(!contai)}></i>

                {
                    contai && (
                        <li className="Small-containerli">
                            <a href="#" className="slide-anker">Contact us</a>

                            <hr />
                            <a href="#" className="slide-anker">Coustomer care</a>
                            <hr />
                            <a href="#" className="slide-anker">From center</a>
                            <hr />
                            <a href="#" className="slide-anker">FAQs</a>
                            <hr />
                            <a href="#" className="slide-anker">Feedback</a>
                            <hr />
                            <a href="#" className="slide-anker">Serviecs Request</a>
                            <hr />
                            <a href="#" className="slide-anker">Contact us</a>
                        </li>
                    )
                }


            </ul>




        </div>
    )
}