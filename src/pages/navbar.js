import React from 'react'
import "./navbar.css";
import Logo from "../logo.avif"

function navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container d-flex align-items-center">

                    <a className="navbar-brand" href="#">
                        <img src={Logo} alt="Logo" height="40" />
                    </a>


                    <div className="d-flex">
                        <ul className="list-unstyled d-flex gap-4 m-0">
                            <li>
                                <a className="text-decoration-none text-dark" href="#">Home</a>
                            </li>
                            <li>
                                <a className="text-decoration-none text-dark" href="#">Products</a>
                            </li>
                            <li>
                                <a className="text-decoration-none text-dark" href="#">About</a>
                            </li>
                            <li>
                                <a className="text-decoration-none text-dark" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default navbar