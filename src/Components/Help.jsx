import "../style/Help.css";

export default function Help() {
    return (
        <div className="help-container">
            <div className="help-content">
                <h2>Help Center</h2>
                <p className="tagline">Find answers to your questions</p>
                <div className="help-cards">
                    <div className="help-card">
                        <h3>FAQs</h3>
                        <p>Explore our frequently asked questions.</p>
                        <button>View FAQs</button>
                    </div>
                    <div className="help-card">
                        <h3>Support</h3>
                        <p>Contact our support team for assistance.</p>
                        <button>Contact Support</button>
                    </div>
                </div>
            </div>
        </div>
    );
}