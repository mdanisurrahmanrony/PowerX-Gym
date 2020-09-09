import React, { useState, useEffect } from "react";
import "./mainPrice.scss";
import Header from "../home/header";
import CommonHero from "../commonHero/commonHero";
import Footer from "../home/footer";

import PricePage from "./pricePage";

const MainPrice = () => {
    const [prices, setPrices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://power-x-gym-backend.herokuapp.com/pricings")
            .then((res) => res.json())
            .then((data) => {
                setPrices(data);
                setLoading(false);
            });
    }, []);

    console.log(prices);

    return (
        <>
            <Header />
            <CommonHero title="PRICING PLANS" />
            <div className="mainPrice">
                <div className="container mt-5 mb-5">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2>
                                Choose the offer
                                <span className="text-dark">
                                    {" "}
                                    that suits you
                                </span>
                            </h2>
                            <p className="mb-3">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quidem molestias <br />{" "}
                                debitis non, libero excepturi facere.
                            </p>
                        </div>
                    </div>
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
                    <div className="row mt-5">
                        {prices.map((price) => (
                            <PricePage key={price._id} data={price} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MainPrice;
