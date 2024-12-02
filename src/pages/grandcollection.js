import React from 'react'
import "./grandcollection.css";
import Dress1 from "../kanha.webp";
import Dress2 from "../granddress2.webp";
import Dress3 from "../granddress3.webp";
import Dress4 from "../granddress4.webp";

function grandcollection() {
    return (
        <div className="grand_container">
            <header>
                <h1>Grand Collection</h1>
            </header>

            <main>
                <div class="product-grid">
                    <div class="product">
                        <img src={Dress1} alt="Beautiful Rani Pink Laddu Gopal Dress"></img>
                        <p>Bright Orange Laddu Gopal Dress with Mirror Work | Handcrafted Gopal Poshak | SGN034</p>
                        <p>From Rs. 210.00</p>
                    </div>

                    <div class="product">
                        <img src={Dress2} alt="Black and Gold Laddu Gopal Dress"></img>
                        <p>Bright Yellow Peacock Design Laddu Gopal Dress with Matching Pagdi | SGN005</p>
                        <p>From Rs. 310.00</p>
                    </div>
                    <div class="product">
                        <img src={Dress3} alt="Black and Gold Laddu Gopal Dress"></img>
                        <p>Elegant Blue Laddu Gopal Dress with Floral Border and Peacock Design | Handcrafted Poshak | SGB021</p>
                        <p>From Rs. 450.00</p>
                    </div>
                    <div class="product">
                        <img src={Dress4} alt="Black and Gold Laddu Gopal Dress"></img>
                        <p>Elegant Magenta pink Laddu Gopal Dress with Yellow Floral Accents and Matching Pagdi | Handcrafted Gopal Poshak | SGN033</p>
                        <p>From Rs. 840.00</p>
                    </div>


                </div>
            </main>

            <div className='button'>
                <p>View All</p>
            </div>
        </div>
    )
}

export default grandcollection