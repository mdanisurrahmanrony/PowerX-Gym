import React from "react";
import "./chooseUs.scss";

import img1 from "../../images/choose1.png";
import img2 from "../../images/choose2.png";
import img3 from "../../images/choose3.png";

const ChooseUsHome = () => {
    return (
        <div className="chooseUsHome">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2>
                            WHY
                            <span className="yellow-text"> Choose Us</span>
                        </h2>
                    </div>
                    <div className="col-md-4 text-center">
                        <div className="innerGym">
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

                    <div className="col-md-4 text-center">
                        <div className="innerGym">
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

                    <div className="col-md-4 text-center">
                        <div className="innerGym">
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

export default ChooseUsHome;
