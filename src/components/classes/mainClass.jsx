import React, { useState, useEffect } from "react";
import "./mainClass.scss";
import Header from "../home/header";
import Footer from "../home/footer";
import CommonHero from "../commonHero/commonHero";

import ClassPage from "./classPage";

const MainClass = () => {
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://power-x-gym-backend.herokuapp.com/classes")
            .then((res) => res.json())
            .then((data) => {
                setClasses(data);
                setLoading(false);
            });
    }, []);

    console.log(classes);

    return (
        <>
            <Header />
            <CommonHero title="OUR CLASSES" />
            <div className="mainClass">
                <div className="container mt-5 mb-5">
                    {loading && (
                        <div class="d-flex justify-content-center">
                            <div
                                class="spinner-border text-warning"
                                role="status"
                            >
                                <span class="sr-only">Loading...</span>
                            </div>
                        </div>
                    )}
                    <div className="row">
                        {classes.map((data) => (
                            <ClassPage key={data._id} data={data} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MainClass;
