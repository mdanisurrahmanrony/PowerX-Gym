import React from "react";
import "./commonHero.scss";
import bg from "../../images/hero-bg.jpg";

const CommonHero = ({ title }) => {
    return (
        <div
            className="commonHero-sec"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="inner-gym">
                            <h1>{title}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommonHero;
