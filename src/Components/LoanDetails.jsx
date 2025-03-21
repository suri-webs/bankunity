import "../style/LoanDetails.css";

export default function LoanDetails() {
    return (
        <div className="loandetails-container">
            <div className="loandetails-content">
                <h2>Loan Details</h2>
                <p className="tagline">Find the perfect loan for your needs</p>
                <div className="loandetails-cards">
                    <div className="loandetails-card">
                        <h3>Home Loan</h3>
                        <p>Buy your dream home with our flexible home loans.</p>
                        <button>Learn More</button>
                    </div>
                    <div className="loandetails-card">
                        <h3>Car Loan</h3>
                        <p>Drive your dream car with our affordable car loans.</p>
                        <button>Learn More</button>
                    </div>
                    <div className="loandetails-card">
                        <h3>Personal Loan</h3>
                        <p>Fulfill your personal needs with instant loans.</p>
                        <button>Learn More</button>
                    </div>
                    <div className="loandetails-card">
                        <h3>Smart Loans</h3>
                        <p>Smart solutions for all your financial needs.</p>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
}