export default function HeaderGrow() {

    const GrowStockData = [
        {
            img: "https://www.icicibank.com/content/dam/icicibank/india/managed-assets/images/homepage/cc-icon.png",
            paragraph: "Fixed Deposit",

        },
        {
            img: "https://www.icicibank.com/content/dam/icicibank/india/managed-assets/images/homepage/mf-icon.png",
            paragraph: "Mutual Fund",

        },
        {
            img: "https://www.icicibank.com/content/dam/icicibank/india/assets/images/icons/invest-icon-m.svg",
            paragraph: "Invest in Stocks",

        },
        {
            img: "https://www.icicibank.com/content/dam/icicibank/india/managed-assets/images/homepage/rd-icon.png",
            paragraph: "Retirement Planning",

        }
    ]
    return (
        <div className="Headecomo-div1">
            <p>Grow your invesment</p>
            <div className="Grow-stock-container">
                {
                    GrowStockData.map((data) => {
                        return (
                            <div className="card1">
                                <img src={data.img} alt="" />
                                <p>{data.paragraph}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}