import React from "react";
import Header from "./header";
import Hero from "./hero";
import Gym from "./gym";
import AboutUsHome from "./aboutUs";
import TrainingHome from "./training";
import ChooseUsHome from "./chooseUS";
import Footer from "./footer";

const MainHome = () => {
    return (
        <>
            <Header />
            <Hero />
            <Gym />
            <AboutUsHome />
            <TrainingHome />
            <ChooseUsHome />
            <Footer />
        </>
    );
};

export default MainHome;
