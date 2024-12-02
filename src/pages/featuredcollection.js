import React from 'react'
import "./featuredcollection.css";
import Dress1 from "../kanha.webp";
import Dress2 from "../featuredress2.webp";
import Dress3 from "../featuredress3.webp";
import Dress4 from "../featuredress4.webp";
import Dress5 from "../featuredress5.webp";

function featuredcollection() {
    return (
        <div className="feature_container">
            <header>
                <h1>Featured Collection</h1>
            </header>

            <main>
                <div class="product-grid">
                    <div class="product">
                        <img src={Dress1} alt="Beautiful Rani Pink Laddu Gopal Dress"></img>
                        <p>Laddu Gopal poshak collection ➡</p>

                    </div>

                    <div class="product">
                        <img src={Dress2} alt="Black and Gold Laddu Gopal Dress"></img>
                        <p>Mata rani poshak collection ➡</p>
                    </div>
                    <div class="product">
                        <img src={Dress3} alt="Black and Gold Laddu Gopal Dress"></img>
                        <p>RK/yugal jodi dresses ➡</p>
                    </div>
                    <div class="product">
                        <img src={Dress4} alt="Black and Gold Laddu Gopal Dress"></img>
                        <p>Laxmi Ganesh poshak ➡</p>

                    </div>
                    <div class="product">
                        <img src={Dress5} alt="Black and Gold Laddu Gopal Dress"></img>
                        <p>Festive poshak ➡</p>

                    </div>



                </div>
            </main>

            <div className='button'>
                <p>View All</p>
            </div>
        </div>
    )
}

export default featuredcollection