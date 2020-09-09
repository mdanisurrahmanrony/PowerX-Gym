import React from "react";
import "./membersPage.scss";

import { useForm } from "react-hook-form";

const MembersPage = ({ val, changeVal, onMembersData }) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        onMembersData(data);
        changeVal();
    };
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-12">
                    <div className="step d-flex justify-content-around text-center">
                        <div>
                            <h5 className="personal">1</h5>
                            <p>Personal</p>
                        </div>
                        <div>
                            <h5 className="bg-gray">2</h5>
                            <p>Payment</p>
                        </div>
                        <div>
                            <h5 className="bg-gray">3</h5>
                            <p>Created</p>
                        </div>
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-row">
                    <div class="col">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            name="firstName"
                            type="text"
                            class="form-control"
                            ref={register({ required: true })}
                        />
                    </div>
                    <div class="col">
                        <label htmlFor="lastName">First Name</label>
                        <input
                            name="lastName"
                            type="text"
                            class="form-control"
                            ref={register({ required: true })}
                        />
                    </div>
                </div>
                <div class="form-row">
                    <div class="col">
                        <label htmlFor="email">Email</label>
                        <input
                            name="email"
                            type="email"
                            class="form-control"
                            ref={register({ required: true })}
                        />
                    </div>
                    <div class="col">
                        <label htmlFor="phone">Phone No</label>
                        <input
                            name="phone"
                            type="text"
                            class="form-control"
                            ref={register({ required: true })}
                        />
                    </div>
                </div>
                <div class="form-row">
                    <div class="col">
                        <label htmlFor="address">Address Line 1</label>
                        <input
                            name="address"
                            type="text"
                            class="form-control"
                            ref={register({ required: true })}
                        />
                    </div>
                    <div class="col">
                        <label htmlFor="country">Country/Region</label>
                        <input
                            name="country"
                            type="text"
                            ref={register({ required: true })}
                            class="form-control"
                        />
                    </div>
                </div>
                <div class="form-row">
                    <div class="col">
                        <label htmlFor="city">City</label>
                        <input
                            name="city"
                            type="text"
                            class="form-control"
                            ref={register({ required: true })}
                        />
                    </div>
                    <div class="col">
                        <label htmlFor="postcode">Post Code</label>
                        <input
                            name="postcode"
                            type="text"
                            class="form-control"
                            ref={register({ required: true })}
                        />
                    </div>
                </div>
                {errors.exampleRequired && <p>This field is required</p>}
                <button type="submit" className="btn btn-warning px-5">
                    Next
                </button>
            </form>
        </div>
    );
};

export default MembersPage;
