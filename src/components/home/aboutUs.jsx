import React from "react";
import "./aboutUs.scss";
import img from "../../images/about-us-home.jpg";

const AboutUsHome = () => {
    return (
        <div className="about-us-home">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img src={img} alt="" className="img-fluid" />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <h1>About Us</h1>
                        <h2>
                            <span className="text-yellow">
                                We are here to dream!
                            </span>
                            <br /> our team is here to serve you
                        </h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Reprehenderit, unde atque dicta autem
                            inventore maxime, omnis ratione hic tempore
                            cupiditate molestiae earum nisi praesentium, aut
                            mollitia dolores ex laudantium id.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsHome;
