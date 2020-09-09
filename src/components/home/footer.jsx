import React from "react";
import "./footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <h2>
                            POWER <span className="yellow-text">X</span>
                        </h2>
                    </div>
                    <div className="col-lg-2">
                        <h3>Need Help?</h3>
                        <p>
                            <a href="">Help Center </a>
                        </p>
                        <p>
                            <a href="">Email Support </a>
                        </p>
                        <p>
                            <a href="">Live Chat </a>
                        </p>
                        <p>
                            <a href="">Gift Certificates </a>
                        </p>
                        <p>
                            <a href="">Send Us Feedback </a>
                        </p>
                    </div>
                    <div className="col-lg-2">
                        <h3>Digital Resources</h3>
                        <p>
                            <a href="">Help Center </a>
                        </p>
                        <p>
                            <a href="">Email Support </a>
                        </p>
                    </div>
                    <div className="col-lg-2">
                        <h3>Connect with Us</h3>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-youtube"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-whatsapp"></i>
                    </div>
                    <div className="col-lg-3">
                        <h3>Join Our Newsletter</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Tempora, reiciendis.
                        </p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 text-center">
                        <p> &copy; Programming Hero | All Right Reserved. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
