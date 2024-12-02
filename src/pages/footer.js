import React from 'react'
import "./footer.css";

function footer() {
    return (
        <div className="footer_container">
            <footer className="bg-dark text-light py-5 mt-5">
                <div className="container">
                    <div className="row">
                        {/* Quick Links */}
                        <div className="col-md-4 mb-4">
                            <h5 className="mb-3">Quick Links</h5>
                            <div>
                                <ul className="list-unstyled">
                                    <li className="mb-2">
                                        <a href="#" className="text-light text-decoration-none">Home</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="text-light text-decoration-none">About Us</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="text-light text-decoration-none">Products</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="text-light text-decoration-none">Contact</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="text-light text-decoration-none">Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Email Subscription */}
                        <div className="col-md-4 mb-4">
                            <h5 className="mb-3">Subscribe to Newsletter</h5>
                            <div className="input-group mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    aria-label="Enter your email"
                                />

                            </div>


                        </div>



                    </div>

                    {/* Copyright */}
                    <div className='copyright'>

                        <div className="border-top border-secondary pt-4 mt-4 text-center">
                            <p className="mb-0">© 2024 Your Company Name. All rights reserved.</p>
                        </div>
                        <div className="whatsapp">
                            <i class="bi bi-whatsapp" ></i>

                            <a
                                href="https://wa.me/1234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-success d-inline-flex align-items-center"
                            >
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default footer