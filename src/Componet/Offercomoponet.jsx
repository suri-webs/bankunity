import "../style/Offer.css"
export default function Offercomponet() {


    const carddata = [
        {
            img: "https://media.gettyimages.com/id/1146830235/photo/financial-advisor-with-indian-family.jpg?s=612x612&w=gi&k=20&c=aRbHNYPuzJjLqdPR2_hUHTyRdsx-wkJp5dFsbJic1j8=",
            anker: "How to improve your money mindset and make better choices",
            i: <i class="fa-brands fa-studiovinari"></i>,
        },
        {
            img: "https://media.istockphoto.com/id/1353379561/photo/black-woman-with-daughter-holding-piggy-bank.jpg?s=612x612&w=0&k=20&c=pkOceZlZMYilM7-WpGToOqyzPMEv2Zdnk9zdjJPns_Q=",
            anker: "Help me decide: Should I pay down debt, save or invest?",
            i: <i class="fa-brands fa-digital-ocean"></i>,
        },
        {
            img: "https://www1.bac-assets.com/homepage/spa-assets/images/assets-images-site-homepage-bmh-module-default-education-ent_edu_bac_7242867_319_es_gc_04-CSXd552f69f.jpg",
            anker: "Your guide to creating a budget plan",
            i: <i class="fa-solid fa-piggy-bank"></i>,
        },
        {
            img: "https://media.istockphoto.com/id/1142364156/photo/family-savings-budget-planning-childrens-pocket-money-family-with-piggy-bank.jpg?s=612x612&w=0&k=20&c=LcqejgFudYWfYoMiVG23SyKbwPQY0nmP4Tvqo0AFtiE=",
            anker: "Top 5 reasons to refinance and the pros and cons of each",
            i: <i class="fa-brands fa-leanpub"></i>,
        },

    ]


    return (

        <section className="financial-goals-section">
            <ul className="financial-goals-ul">
                <h1>Your financial goals matter</h1>
                <p>We can help you achieve them through Better Money Habits® financial education and programs that make communities stronger.</p>
            </ul>
            <div className="financial-goals-container2">

                {
                    carddata.map((data) => {
                        return (

                            <div className="Family-card">
                                <img src={data.img} alt="" />

                                <li className="li-container">
                                    {data.i}
                                    <a href="" className="box-anker">{data.anker}</a>
                                </li>

                            </div>
                        )
                    })


                }






            </div>
            <ul className="financial-goals-ul">
                <p>Explore more topics and build your financial know‑how.</p>
                <a href="">Better Money Habits</a>
            </ul>
        </section >
    )
}



