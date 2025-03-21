import "../style/ContactUs.css";

export default function ContactUs() {
    return (
        <div className="contactus-container">
            <div className="contactus-content">
                <h2>Contact Us</h2>
                <p className="tagline">We're here to help you!</p>
                <div className="contactus-card">
                    <div className="contact-info">
                        <p>📞 Call us: <strong>+91-1234567890</strong></p>
                        <p>📧 Email: <strong>support@ignou.edu</strong></p>
                        <p>📍 Address: IGNOU Headquarters, New Delhi, India</p>
                    </div>
                    <div className="contact-form">
                        <input type="text" placeholder="Your Name" />
                        <input type="email" placeholder="Your Email" />
                        <textarea placeholder="Your Message"></textarea>
                        <button>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}