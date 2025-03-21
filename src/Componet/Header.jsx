import "../style/Header.css"
import "../style/HeaderPartSec.css"
import Headerbanking from "./HeaderBanking"
import HeaderGrow from "./HeaderGrow"
import HeaderFirstComponent from "./HeaderOffer"
export default function HeaderJSx() {
    return (
        <header>
            <div className="CreditCArd-slide-container">

                <div className="Get-yourcard">
                    <h1>Here You Can Get your </h1>

                    <i class="fa-solid fa-hand-holding">
                        <h2 className="h2one"> degital cards</h2>
                    </i>
                </div>

                <div className="scrollcontainer">
                    <div className="creditcard1 scale" >
                        <img className="chip-image" src="https://cdn-icons-png.flaticon.com/512/680/680284.png" alt="" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt=""
                            className="visa-image" />
                        <img src="https://pngimg.com/uploads/recycle/recycle_PNG17.png" alt="" className="reciling" />
                        <i class="fa-solid fa-wifi fawifi1"></i>
                        <p>UNITY BANK OF INDIA</p>
                        <i class="fa-solid fa-handshake-simple"></i>

                    </div>
                    <div className="creditcard2 scale">
                        <img className="chip-image" src="https://cdn-icons-png.flaticon.com/512/680/680284.png" alt="" />

                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                            alt="" className="visa-image" />

                        <img src="https://pngimg.com/uploads/recycle/recycle_PNG17.png" alt="" className="reciling" />
                        <i class="fa-solid fa-wifi"></i>
                        <p>UNITY BANK OF INDIA</p>
                        <i class="fa-solid fa-handshake-simple"></i>


                    </div>
                    <div className="creditcard3 scale">
                        <img className="chip-image" src="https://cdn-icons-png.flaticon.com/512/680/680284.png" alt="" />

                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                            alt="" className="visa-image" />

                        <img src="https://pngimg.com/uploads/recycle/recycle_PNG17.png" alt="" className="reciling" />
                        <i class="fa-solid fa-wifi"></i>
                        <p>UNITY BANK OF INDIA</p>
                        <i class="fa-solid fa-handshake-simple"></i>


                    </div>
                    <div className="creditcard4 scale">

                        <img className="chip-image" src="https://cdn-icons-png.flaticon.com/512/680/680284.png" alt="" />

                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                            alt="" className="visa-image" />

                        <img src="https://pngimg.com/uploads/recycle/recycle_PNG17.png" alt="" className="reciling" />
                        <i class="fa-solid fa-wifi"></i>
                        <p>UNITY BANK OF INDIA</p>
                        <i class="fa-solid fa-handshake-simple"></i>


                    </div>
                </div>






            </div>
            <div className="creditcard-details-container">
                <HeaderFirstComponent />
                <HeaderGrow />
                <Headerbanking />

            </div>
        </header>
    )
}