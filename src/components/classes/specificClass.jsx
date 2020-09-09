import React, { useState, useEffect } from "react";
import "./specificClass.scss";
import { useParams } from "react-router-dom";
import Header from "../home/header";
import CommonHero from "../commonHero/commonHero";
import Footer from "../home/footer";

const SpecificClass = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch("http://power-x-gym-backend.herokuapp.com/classes")
            .then((res) => res.json())
            .then((data) => {
                setClasses(data);
            });
    }, []);
    const { specific } = useParams();

    const data = classes.find(
        (item) => item.name.replace(/ /g, "") === specific
    );

    console.log("Training Data: ", data);

    return (
        <>
            {data && (
                <>
                    <Header />
                    <CommonHero title={data.name.toUpperCase()} />
                    <div className="specificClass">
                        <div className="container mt-5 mb-5">
                            <div className="row">
                                <div className="col-lg-6">
                                    <img
                                        src={data.image}
                                        alt=""
                                        className="img-fluid"
                                    />
                                    <p
                                        className="mt-4"
                                        style={{ textAlign: "justify" }}
                                    >
                                        {data.description}
                                    </p>
                                </div>
                                <div className="col-lg-6">
                                    <h2>
                                        CLASS
                                        <span className="text-dark">
                                            {" "}
                                            SCHEDULE
                                        </span>
                                    </h2>
                                    <div className="row">
                                        {data.schedules.map((schedule) => (
                                            <div className="col-md-6">
                                                <div className="schedule">
                                                    <h5> {schedule.day} </h5>
                                                    <p> {schedule.time} </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-md-6">
                                    {data.benefits.map((benefit) => (
                                        <p>
                                            <span className="yellow-icon">
                                                <i className="fas fa-check-square"></i>
                                            </span>
                                            {benefit}
                                        </p>
                                    ))}
                                </div>
                                <div className="col-md-6">
                                    <div className="joinBtn">
                                        <button className="btn btn-join">
                                            JOIN US
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </>
            )}
        </>
    );
};

export default SpecificClass;
