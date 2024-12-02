import React from 'react'
import './wintercollection.css';
import Dress1 from "../winterdress1.webp";
import Dress2 from "../winterdress2.webp";
import Dress3 from "../winterdress3.webp";

function wintercollection() {
    return (
        <div className='winter_container'>

            <header>
                <h1>Winter Collection</h1>
            </header>

            <main>
                <div class="product-grid">
                    <div class="product">
                        <img src={Dress1} alt="Beautiful Rani Pink Laddu Gopal Dress"></img>
                        <p>Blue and White Woolen Laddu Gopal Dress | SGW002</p>
                        <p>From Rs. 310.00</p>
                    </div>

                    <div class="product">
                        <img src={Dress2} alt="Black and Gold Laddu Gopal Dress"></img>
                        <p>White Woolen Laddu Gopal Dress | SGW001</p>
                        <p>From Rs. 340.00</p>
                    </div>
                    <div class="product">
                        <img src={Dress3} alt="Black and Gold Laddu Gopal Dress"></img>
                        <p>Yellow Woolen Laddu Gopal Dress with Floral Design | SGW003
                        </p>
                        <p>From Rs. 240.00</p>
                    </div>


                </div>
            </main>

            <div className='button'>
                <p>View All</p>
            </div>

        </div>
    )
}

export default wintercollection