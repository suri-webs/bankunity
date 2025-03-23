import { useState } from "react";
import "../style/Holder.css"


export default function AccountHolderPage() {
    const [accountHolder, setAccountHolder] = useState({ name: "", email: "", balance: 0 });
    const [transactions, setTransactions] = useState([]);

    useState(() => {
        // Fetch account holder details (dummy data for now)
        setAccountHolder({ name: "Amisha", email: "Amishanegi@email.com", balance: 5000 });
        setTransactions([
            { id: 1, type: "Credit", amount: 1000, date: "2025-03-01" },
            { id: 2, type: "Debit", amount: 500, date: "2025-03-05" },
            { id: 2, type: "Credit", amount: 50, date: "2025-03-05" },
            { id: 2, type: "Credit", amount: 200, date: "2025-03-07" },
        ]);
    });

    return (

        <section
            className="holder">
            <div className="container">
                <div className="card">
                    <h2>Account Holder Details</h2>
                    <p>Name : {accountHolder.name}</p>
                    <p>Email : {accountHolder.email}</p>
                    <p>Balance : ₹{accountHolder.balance}</p>
                </div>

                <div className="transactions">
                    <h2>Transactions</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Type</th>
                                <th>Amount</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((txn) => (
                                <tr key={txn.id}>
                                    <td>{txn.id}</td>
                                    <td>{txn.type}</td>
                                    <td>₹{txn.amount}</td>
                                    <td>{txn.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </section>

    );
};


