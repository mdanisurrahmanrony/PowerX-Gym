import React from "react";
import "./hero.scss";
import bg from "../../images/hero-bg.jpg";

const Hero = () => {
    return (
        <div className="hero-sec" style={{ backgroundImage: `url(${bg})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="inner-gym">
                            <h1>
                                THE BEST FITNESS <br /> STUDIO IN TOWN
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Facilis id magni est expedita,
                                nihil amet quo enim similique illum quidem optio
                                placeat, maiores maxime sed. Sint tempora
                                numquam error nostrum!
                            </p>
                            <button className="btn join-btn">JOIN US</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
