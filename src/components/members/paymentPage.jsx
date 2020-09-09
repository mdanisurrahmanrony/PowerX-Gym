import React, { useState } from "react";
import "./paymentPage.scss";
import {
    useStripe,
    useElements,
    CardCvcElement,
    CardExpiryElement,
    CardNumberElement,
} from "@stripe/react-stripe-js";

const PaymentPage = ({ onMembersData, membersData, changeConf }) => {
    const [val, setVal] = useState(true);

    const stripe = useStripe();
    const elements = useElements();
    // const options = useOptions();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const payload = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardNumberElement),
        });

        fetch("http://power-x-gym-backend.herokuapp.com/members", {
            method: "post",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ membersData, payload }),
        })
            .then((res) => res.json())
            .then((res) => console.log("Store info:", res));

        setVal(false);
        changeConf();
    };

    return (
        <>
            {val ? (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Card number</label>
                        <CardNumberElement />
                    </div>
                    <div>
                        <label>Card number</label>
                        <CardCvcElement />
                    </div>
                    <div>
                        <label>Card number</label>
                        <CardExpiryElement />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-warning px-5"
                        disabled={!stripe}
                    >
                        Next
                    </button>
                </form>
            ) : (
                <>
                    <div className="text-center">
                        <h1>Thanks For Becoming Our Gym Member</h1>
                    </div>
                </>
            )}
        </>
    );
};

export default PaymentPage;
