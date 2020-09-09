import React, { useState } from "react";
import "./mainMembers.scss";
import Header from "../home/header";
import CommonHero from "../commonHero/commonHero";
import Footer from "../home/footer";
import MembersPage from "./membersPage";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentPage from "./paymentPage";

const MainMembers = () => {
    const stripePromise = loadStripe(
        "pk_test_08P7DtktxO4F59vXk0VnRMuF000lGkIgA7"
    );

    const [val, setVal] = useState(true);
    const changeVal = () => {
        setVal(false);
    };

    const [confirm, setConfirm] = useState(false);
    const changeConf = () => {
        setConfirm(true);
    };

    const [membersData, setMembersData] = useState();

    const onMembersData = (data) => {
        setMembersData({ ...membersData, data });
    };

    console.log(membersData);

    return (
        <>
            <Header />
            <CommonHero title="YOUR GYM MEMBERSHIP" />
            {val ? (
                <MembersPage
                    val
                    changeVal={changeVal}
                    onMembersData={onMembersData}
                />
            ) : (
                <div className="paymentPage mt-5 mb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="step d-flex justify-content-around text-center">
                                    <div>
                                        <h5 className="personal">1</h5>
                                        <p>Personal</p>
                                    </div>
                                    <div>
                                        <h5 className="personal">2</h5>
                                        <p>Payment</p>
                                    </div>
                                    <div>
                                        <h5
                                            className={
                                                confirm ? "personal" : "bg-gray"
                                            }
                                        >
                                            3
                                        </h5>
                                        <p>Created</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <Elements className="pay" stripe={stripePromise}>
                                <PaymentPage
                                    membersData={membersData}
                                    onMembersData={onMembersData}
                                    changeConf={changeConf}
                                />
                            </Elements>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
};

export default MainMembers;
