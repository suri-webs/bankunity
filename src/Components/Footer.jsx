import "../style/Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <div className="footer-first">
                <div className="logo">
                    <img 
                        className="nav-image" 
                        src="https://www.unitybank.com.au/Client_Theme/imgs/ua2/welcome-logo-unity@3x.png" 
                        alt="Bank Logo" 
                    />
                    <Link to="/">Of India</Link>
                </div>

                {/* Quick Links */}
                <ul className="ulcontai">
                    <h2 className="ulcontai-h2">Quick Links</h2>
                    <Link to="/" className="ulcontai-anker">Home</Link>
                    <Link to="/about" className="ulcontai-anker">About Us</Link>
                    <Link to="/help" className="ulcontai-anker">Help</Link>
                    <Link to="/privacy-policy" className="ulcontai-anker">Privacy Policy</Link>
                </ul>

                {/* Our Banks */}
                <ul className="ulcontai">
                    <h2 className="ulcontai-h2">Our Banks</h2>
                    <Link to="/branches/new-delhi" className="ulcontai-anker">New Delhi</Link>
                    <Link to="/branches/himachal" className="ulcontai-anker">Himachal</Link>
                    <Link to="/branches/uttarakhand" className="ulcontai-anker">Uttarakhand</Link>
                    <Link to="/branches/punjab" className="ulcontai-anker">Punjab</Link>
                </ul>

                {/* Support Section */}
                <ul className="ulcontai">
                    <h2 className="ulcontai-h2">Support</h2>
                    <Link to="/contact" className="ulcontai-anker">Contact Us</Link>
                    <a href="tel:+919910045781" className="ulcontai-anker">+91 99100 45781</a>
                    <a href="mailto:info@inobank.email.com" className="ulcontai-anker">info@inobank.email.com</a>
                    <p className="ulcontai-anker">
                        T-305, First Floor, New Delhi, Kaushik Enclave, Burari, Delhi-110084
                    </p>
                </ul>
            </div>

            <hr className="hrhai" />

            {/* Footer Bottom Section */}
            <div className="footer-second">
                <h4>Copyright © 2024 Unity-Bank-Of-India.com. All Rights Reserved</h4>

                {/* Social Media Links */}
                <ul className="social-links">
                    <li>
                        <a href="https://wa.me/919910045781" className="last-ankr-img" target="_blank" rel="noopener noreferrer">
                            <img src="https://hotels-wale-static.s3.us-east-1.amazonaws.com/images/whatsapp.png" alt="WhatsApp" />
                        </a>
                        <a href="https://linkedin.com" className="last-ankr-img" target="_blank" rel="noopener noreferrer">
                            <img src="https://hotels-wale-static.s3.us-east-1.amazonaws.com/images/linkedin.png" alt="LinkedIn" />
                        </a>
                        <a href="https://facebook.com" className="last-ankr-img" target="_blank" rel="noopener noreferrer">
                            <img src="https://hotels-wale-static.s3.us-east-1.amazonaws.com/images/facebook.png" alt="Facebook" />
                        </a>
                        <a href="https://twitter.com" className="last-ankr-img" target="_blank" rel="noopener noreferrer">
                            <img src="https://hotels-wale-static.s3.us-east-1.amazonaws.com/images/twitter.png" alt="Twitter" />
                        </a>
                        <a href="https://instagram.com" className="last-ankr-img" target="_blank" rel="noopener noreferrer">
                            <img src="https://hotels-wale-static.s3.us-east-1.amazonaws.com/images/instagram.png" alt="Instagram" />
                        </a>
                        <a href="https://youtube.com" className="last-ankr-img" target="_blank" rel="noopener noreferrer">
                            <img src="https://hotels-wale-static.s3.us-east-1.amazonaws.com/images/youtube.png" alt="YouTube" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
