import React from "react";
import "./pricePage.scss";
import { useHistory } from "react-router-dom";

const PricePage = ({ data }) => {
    const history = useHistory();
    return (
        <div className="col-md-4 text-center">
            <div
                className="pricePage"
                style={{ backgroundImage: `url(${data.image})` }}
            >
                <h5 className="text-warning">Billed Monthly</h5>
                <h2 className="text-light"> {data.name} </h2>
                <h1 className="text-warning"> ${data.bill} </h1>
                {data.features.map((feature) => (
                    <p>
                        <i class="fas fa-check"></i> {feature}
                    </p>
                ))}

                <button
                    onClick={() => history.push("/membersRegistration")}
                    className="btn btn-warning"
                >
                    PURCHASE
                </button>
            </div>
        </div>
    );
};

export default PricePage;
