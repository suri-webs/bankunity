import "../style/Footer.css"
import NavFirst from "./NavFirst-container"
export default function Footerjsx() {
    return (
        <footer>
            <div className="footer-first">
                <div className="logo">
                    <img className="nav-image" src="https://www.unitybank.com.au/Client_Theme/imgs/ua2/welcome-logo-unity@3x.png" alt="" />
                    <a href="">Of India</a>
                </div>
                <ul className="ulcontai">
                    <h2 className="ulcontai-h2">Qyick Links</h2>
                    <a href="" className="ulcontai-anker">Home</a>
                    <a href="" className="ulcontai-anker">About us</a>
                    <a href="" className="ulcontai-anker">Helps</a>
                    <a href="" className="ulcontai-anker">Privacy</a>
                </ul>
                <ul className="ulcontai">
                    <h2 className="ulcontai-h2">Oue Banks</h2>
                    <a href="" className="ulcontai-anker">New Delhi</a>
                    <a href="" className="ulcontai-anker">Himachal</a>
                    <a href="" className="ulcontai-anker">Uttrakhand</a>
                    <a href="" className="ulcontai-anker">Punjab</a>
                </ul>
                <ul className="ulcontai">
                    <h2 className="ulcontai-h2">Supports</h2>
                    <a href="" className="ulcontai-anker">contact us</a>
                    <a href="" className="ulcontai-anker">+91 99100 45781</a>
                    <a href="" className="ulcontai-anker">ino@inobank@email.com</a>
                    <a href="" className="ulcontai-anker">T-305, Fisrt Floor ,New delhi Koushik encalve burari delhi-110084</a>
                </ul>

            </div>
            <hr  className="hrhai"/>
            <div className="footer-second">
                <h4>Copyright © 2024 Unity-Bank-Of-India.com All Rights Reserved</h4>
                <li>
                    <a href="" className="last-ankr-img">
                        <img src="https://hotels-wale-static.s3.us-east-1.amazonaws.com/images/whatsapp.png" alt="" />
                    </a>
                    <a href="" className="last-ankr-img">
                        <img src="https://hotels-wale-static.s3.us-east-1.amazonaws.com/images/linkedin.png" alt="" />
                    </a>
                    <a href="" className="last-ankr-img">
                        <img src="https://hotels-wale-static.s3.us-east-1.amazonaws.com/images/facebook.png" alt="" />
                    </a>
                    <a href="" className="last-ankr-img">
                        <img src="https://hotels-wale-static.s3.us-east-1.amazonaws.com/images/twitter.png" alt="" />
                    </a>
                    <a href="" className="last-ankr-img">
                        <img src="https://hotels-wale-static.s3.us-east-1.amazonaws.com/images/instagram.png" alt="" />
                    </a>
                    <a href="" className="last-ankr-img">
                        <img src="https://hotels-wale-static.s3.us-east-1.amazonaws.com/images/youtube.png" alt="" />
                    </a>
                </li>
            </div>

        </footer>
    )
}