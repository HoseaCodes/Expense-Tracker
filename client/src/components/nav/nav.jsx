import React from 'react';
import Plaid from '../../pages/plaid';
import { VscGear } from "react-icons/vsc";

const Nav = () => {
    return (
        <>
            <header className="d-flex align-items-center px-5 flex-wrap justify-content-center py-3 border-bottom">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <img src="https://i.imgur.com/0UGKyoj.png" alt="" height="100px" />
                    <span className="fs-4">Simple header</span>
                </a>

                <ul className="nav nav-pills align-items-center">
                    <li className="nav-item"><a href="/" className="nav-link" aria-current="page">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
                    <li className="nav-item"><a href="/faq" className="nav-link">FAQs</a></li>
                    <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <VscGear /> Settings
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a className="dropdown-item" href="/profile">Profile</a></li>
                            <li><a className="dropdown-item" href="/manageacess">Manage Access</a></li>
                            <li><a className="dropdown-item" href="/settings">Edit Settings</a></li>
                        </ul>
                    </li>
                    <li className="nav-item"><a href="/login" className="loginbtn btn btn-outline-dark">Login</a></li>
                    <li className="nav-item"><Plaid /></li>

                </ul>
            </header>
        </>
    )
}

export default Nav;