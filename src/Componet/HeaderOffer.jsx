export default function HeaderFirstComponent() {


    const CreditCarddata = [
        {
            img: "https://www.icicibank.com/content/dam/icicibank/india/managed-assets/images/personal-banking/icons/creditcard-icon.png",
            title: "Credit Card",
            paragraph: "Get the right card for you",
            anker: "GET CREDIT CARD,INSTANTLY"
        },
        {
            img: "https://www.icicibank.com/content/dam/icicibank/india/managed-assets/images/homepage/personal-loan-icon.png",
            title: "Personal Loan",
            paragraph: "For all you needs, up to ₹50 Lakh",
            anker: "AVAIL PERSONAL LOAN, NOW"
        },
        {
            img: "https://www.icicibank.com/content/dam/icicibank/india/managed-assets/images/personal-banking/icons/homeloan-icon.png",
            title: "Home Loan ",
            paragraph: "Digital sanction with benefit of special processing fee",
            anker: "AVAIL HOME LOAN ,NOW >"
        },
        {
            img: "https://www.icicibank.com/content/dam/icicibank/india/managed-assets/images/personal-banking/icons/car-loan-icon.png",
            title: "Car Loan",
            paragraph: "Drive your Dream Car home with an instant sanaction ",
            anker: "AVAIL CAR LOAN , NOW "
        }
    ]



    return (
        <div className="Headecomo-div">
            <p>Offer for you!!</p>
            <div className="card-credit">
                {CreditCarddata.map((data) => {
                    return (
                        <div className="card">
                            <img src={data.img} alt="" />
                            <li>
                                <h2>{data.title}</h2>
                                <p>{data.paragraph}</p>
                                <a href="">{data.anker}</a>
                            </li>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

