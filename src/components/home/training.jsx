import React from "react";
import "./training.scss";

import img1 from "../../images/training1.png";
import img2 from "../../images/training2.jpg";

const TrainingHome = () => {
    return (
        <div className="training-home">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>
                            training
                            <span className="yellow-text"> program</span>
                        </h1>
                    </div>
                    <div className="col-lg-6">
                        <img src={img1} alt="" className="img-fluid" />
                        <h2>Yoga Training Session</h2>
                    </div>
                    <div className="col-lg-6">
                        <img src={img2} alt="" className="img-fluid" />
                        <h2>Yoga Training Session</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainingHome;
