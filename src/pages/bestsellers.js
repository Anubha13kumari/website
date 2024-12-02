import React from 'react'
import "./bestsellers.css";
import Dress1 from "../bestdress1.webp";
import Dress2 from "../bestdress2.webp";
import Dress3 from "../bestdress3.webp";
import Dress4 from "../bestdress4.webp";

function bestsellers() {
    return (
        <div className="best_container">
            <header>
                <h1>Bestsellers</h1>
            </header>

            <main>
                <div class="product-grid">
                    <div class="product">
                        <img src={Dress1} alt="Beautiful Rani Pink Laddu Gopal Dress"></img>
                        <p>Bright Yellow Peacock Design Laddu Gopal Dress with Matching Pagdi | SGN005</p>
                        <p>From Rs. 310.00</p>
                    </div>

                    <div class="product">
                        <img src={Dress2} alt="Black and Gold Laddu Gopal Dress"></img>
                        <p>Elegant Floral and Pearl Design White Laddu Gopal Dress with Matching Pagdi | SGB014</p>
                        <p>From Rs. 190.00</p>
                    </div>
                    <div class="product">
                        <img src={Dress3} alt="Black and Gold Laddu Gopal Dress"></img>
                        <p>Elegant Wine Laddu Gopal Dress with Pearl Accents and Matching Pagdi | SGN024</p>
                        <p>From Rs. 370.00</p>
                    </div>
                    <div class="product">
                        <img src={Dress4} alt="Black and Gold Laddu Gopal Dress"></img>
                        <p>Laddu Gopal Dress with Matching Pagdi - Yellow & Ornate Design | SGN020</p>
                        <p>From Rs. 400.00</p>
                    </div>


                </div>
            </main>

            <div className='button'>
                <p>View All</p>
            </div>
        </div>
    )
}

export default bestsellers