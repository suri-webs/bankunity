import "../style/Deposit.css";

export default function Deposit() {
    return (
        <div className="deposit-container">
            <div className="deposit-content">
                <h2>Deposit Details</h2>
                <p className="tagline">Secure your savings with our deposit plans</p>
                <div className="deposit-cards">
                    <div className="deposit-card">
                        <h3>Fixed Deposit</h3>
                        <p>Earn higher interest with fixed tenure deposits.</p>
                        <button>Learn More</button>
                    </div>
                    <div className="deposit-card">
                        <h3>Recurring Deposit</h3>
                        <p>Save regularly and earn interest over time.</p>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
}