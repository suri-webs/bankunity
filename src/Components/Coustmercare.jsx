import "../style/Customer.css";

export default function Customer() {
    return (
        <div className="customer-container">
            <div className="customer-content">
                <h2>Customer Services</h2>
                <p className="tagline">We're here to assist you</p>
                <div className="customer-cards">
                    <div className="customer-card">
                        <h3>24/7 Support</h3>
                        <p>Our support team is available round the clock.</p>
                        <button>Get Help</button>
                    </div>
                    <div className="customer-card">
                        <h3>Feedback</h3>
                        <p>Share your feedback to help us improve.</p>
                        <button>Submit Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
}