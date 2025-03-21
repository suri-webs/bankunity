import "../style/Account.css";

export default function Account() {
    return (
        <div className="account-container">
            <div className="account-content">
                <h2>Account Details</h2>
                <p className="tagline">Manage your accounts with ease</p>
                <div className="account-cards">
                    <div className="account-card">
                        <h3>Savings Account</h3>
                        <p>Earn interest on your savings with our flexible plans.</p>
                        <button>Learn More</button>
                    </div>
                    <div className="account-card">
                        <h3>Salary Account</h3>
                        <p>Get exclusive benefits with our salary accounts.</p>
                        <button>Learn More</button>
                    </div>
                    <div className="account-card">
                        <h3>Current Account</h3>
                        <p>Ideal for businesses with high transaction volumes.</p>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
}