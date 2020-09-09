import React from "react";

import "./header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="bg-color">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <NavLink className="navbar-brand" to="/">
                        POWER <span className="text-warning">X</span>
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink
                                    exact={true}
                                    className="nav-link"
                                    to="/"
                                    activeClassName="active"
                                >
                                    Home
                                </NavLink>
                            </li>
                            {/* <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/"
                                activeClassName=""
                            >
                                Services
                            </NavLink>
                        </li> */}
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/class"
                                    activeClassName="active"
                                >
                                    Our Classes
                                </NavLink>
                            </li>
                            {/* <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/"
                                activeClassName=""
                            >
                                About Us
                            </NavLink>
                        </li> */}
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/pricing"
                                    activeClassName="active"
                                >
                                    Pricing
                                </NavLink>
                            </li>
                            {/* <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/"
                                activeClassName=""
                            >
                                Contact Us
                            </NavLink>
                        </li> */}
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;
