import "../style/Payments.css";

export default function Payments() {
    return (
        <div className="payments-container">
            <div className="payments-content">
                <h2>Payments Details</h2>
                <p className="tagline">Fast, secure, and hassle-free payments</p>
                <div className="payments-cards">
                    <div className="payments-card">
                        <h3>Money Transfer</h3>
                        <p>Transfer funds instantly to any account.</p>
                        <button>Learn More</button>
                    </div>
                    <div className="payments-card">
                        <h3>Overdue Loan Payment</h3>
                        <p>Clear your overdue loans with ease.</p>
                        <button>Learn More</button>
                    </div>
                    <div className="payments-card">
                        <h3>Credit Card Bill Payment</h3>
                        <p>Pay your credit card bills seamlessly.</p>
                        <button>Learn More</button>
                    </div>
                    <div className="payments-card">
                        <h3>Contactless Payments</h3>
                        <p>Experience the future of payments.</p>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
}