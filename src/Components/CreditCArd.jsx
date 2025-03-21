import "../style/CreditCard.css";

export default function CreditCard() {
    return (
        <div className="creditcard-container">
            <div className="creditcard-content">
                <h2>Cards Details</h2>
                <p className="tagline">Explore our range of card options</p>
                <div className="creditcard-cards">
                    <div className="creditcard-card">
                        <h3>Credit Cards</h3>
                        <p>Manage Standing Instructions, Mandate Hub, FAQs, and more.</p>
                        <button>Learn More</button>
                    </div>
                    <div className="creditcard-card">
                        <h3>Debit Cards</h3>
                        <p>Upgrade your debit card and manage standing instructions.</p>
                        <button>Learn More</button>
                    </div>
                    <div className="creditcard-card">
                        <h3>Prepaid Cards</h3>
                        <p>Convenient and secure prepaid card options.</p>
                        <button>Learn More</button>
                    </div>
                    <div className="creditcard-card">
                        <h3>Loan on Credit Card</h3>
                        <p>Get instant loans on your credit card.</p>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
}