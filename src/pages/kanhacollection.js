import React from 'react'
import './kanhacollection.css';
import Dress1 from "../kanha.webp";
import Dress2 from "../dress2.webp";
import Dress3 from "../dress3.webp";
import Dress4 from "../dress4.webp";
import Dress5 from "../dress5.webp";
import Dress6 from "../dress6.webp";
import Dress7 from "../dress7.webp";
import Dress8 from "../dress8.webp";
import Dress9 from "../dress9.webp";
import Dress10 from "../dress10.webp";



function kanhacollection() {
    return (
        <div className='Container'>

            <header>
                <h1>Kanha's Lightwear</h1>
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
                        <p>Black and Gold Laddu Gopal Dress with Matching Pagdi | SGN044</p>
                        <p>From Rs. 240.00</p>
                    </div>
                    <div class="product">
                        <img src={Dress3} alt="Black and Gold Laddu Gopal Dress"></img>
                        <p>Bright Pink and Red Laddu Gopal Dress | SGN045</p>
                        <p>From Rs. 240.00</p>
                    </div>
                    <div class="product">
                        <img src={Dress4} alt="Black and Gold Laddu Gopal Dress"></img>
                        <p>Bright Yellow Laddu Gopal Dress with Floral Design and Matching Pagdi | SGN025</p>
                        <p>From Rs. 240.00</p>
                    </div>
                    <div class="product">
                        <img src={Dress5} alt="Black and Gold Laddu Gopal Dress"></img>
                        <p>Elegant Orange Laddu Gopal Dress with Matching Pagdi | SGN029</p>
                        <p>From Rs. 240.00</p>
                    </div>

                </div>
            </main>


            <main>
                <div class="product-grid">
                    <div class="product">
                        <img src={Dress6} alt="Beautiful Rani Pink Laddu Gopal Dress"></img>
                        <p>Elegant Pista Green Laddu Gopal Dress with Matching Pagdi | SGN026</p>
                        <p>From Rs. 190.00</p>
                    </div>

                    <div class="product">
                        <img src={Dress7} alt="Black and Gold Laddu Gopal Dress"></img>
                        <p>Golden Yellow Laddu Gopal Dress | SGN040</p>
                        <p>From Rs. 190.00</p>
                    </div>
                    <div class="product">
                        <img src={Dress8} alt="Black and Gold Laddu Gopal Dress"></img>
                        <p>Green and Gold Laddu Gopal Dress | SGN041</p>
                        <p>From Rs. 190.00</p>
                    </div>
                    <div class="product">
                        <img src={Dress9} alt="Black and Gold Laddu Gopal Dress"></img>
                        <p>Parrot Green Laddu Gopal Dress with Pink Accents paired with Matching Pagdi | SGB017</p>
                        <p>From Rs. 180.00</p>
                    </div>
                    <div class="product">
                        <img src={Dress10} alt="Black and Gold Laddu Gopal Dress"></img>
                        <p>Peach and Gold Laddu Gopal Dress with Matching Pagdi |SGB016</p>
                        <p>From Rs. 190.00</p>
                    </div>

                </div>
            </main>

            <div className='button'>
                <p>View All</p>
            </div>


        </div >
    )
}

export default kanhacollection