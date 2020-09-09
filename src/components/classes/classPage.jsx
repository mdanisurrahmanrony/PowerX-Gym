import React from "react";
import "./classPage.scss";
import { Link } from "react-router-dom";

const ClassPage = ({ data }) => {
    const name = data.name.replace(/ /g, "");
    return (
        <div className="col-md-4 mt-3 mb-3">
            <img src={data.image} alt="" className="img-fluid cls-img" />
            <div className="cls-title btn text-center">
                <Link to={"/class/" + name} data={data}>
                    <h2>{data.name}</h2>
                    <span>
                        <i className="fas fa-arrow-right ml-3"></i>
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default ClassPage;
