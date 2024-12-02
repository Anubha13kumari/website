import React from 'react'
import Kanha from "../kanha.webp";
import Dress1 from "../kanha.webp";
import "./newarrivals.css";
import Dress2 from "../newdress2.webp";
import Dress3 from "../newdress3.webp";
import Dress4 from "../newdress4.webp";

function newarrivals() {
    return (
        <div className="new_container">

            <header>
                <h1>New Arrivals</h1>
            </header>

            <main>
                <div class="product-grid">
                    <div class="product">
                        <img src={Dress1} alt="Beautiful Rani Pink Laddu Gopal Dress"></img>
                        <p>Beautiful Rani Pink Laddu Gopal Dress with Matching Pagdi | SGN027</p>
                        <p>From Rs. 199.00</p>
                    </div>

                    <div class="product">
                        <img src={Dress2} alt="Black and Gold Laddu Gopal Dress"></img>
                        <p>Bright Orange Laddu Gopal Dress | SGB024</p>
                        <p>From Rs. 240.00</p>
                    </div>
                    <div class="product">
                        <img src={Dress3} alt="Black and Gold Laddu Gopal Dress"></img>
                        <p>Bright Yellow and Blue Laddu Gopal Dress with Beaded Crown | SGB032</p>
                        <p>From Rs. 280.00</p>
                    </div>
                    <div class="product">
                        <img src={Dress4} alt="Black and Gold Laddu Gopal Dress"></img>
                        <p>Charming Pink Laddu Gopal Dress with Floral Crown | SGB028</p>
                        <p>From Rs. 300.00</p>
                    </div>


                </div>
            </main>

            <div className='button'>
                <p>View All</p>
            </div>
        </div>
    )
}

export default newarrivals