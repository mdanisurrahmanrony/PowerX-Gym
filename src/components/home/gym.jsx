import React from "react";
import "./gym.scss";

import img1 from "../../images/gym1.png";
import img2 from "../../images/gym2.png";
import img3 from "../../images/gym3.png";

import bg1 from "../../images/gymbg-1.jpg";
import bg2 from "../../images/gymbg-2.jpg";
import bg3 from "../../images/gymbg-3.jpg";

const Gym = () => {
    return (
        <div className="gym">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div
                            className="innerGym"
                            style={{ backgroundImage: `url(${bg1})` }}
                        >
                            <div className="inner">
                                <img src={img1} alt="" />
                                <h1>PROGRESSION</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Incidunt odit odio sint
                                    recusandae maxime obcaecati ea reiciendis
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div
                            className="innerGym"
                            style={{ backgroundImage: `url(${bg2})` }}
                        >
                            <div className="inner">
                                <img src={img2} alt="" />
                                <h1 className="yellow-text">WORKOUT</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Incidunt odit odio sint
                                    recusandae maxime obcaecati ea reiciendis
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div
                            className="innerGym"
                            style={{ backgroundImage: `url(${bg3})` }}
                        >
                            <div className="inner">
                                <img src={img3} alt="" />
                                <h1>NUTRITION</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Incidunt odit odio sint
                                    recusandae maxime obcaecati ea reiciendis
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gym;
