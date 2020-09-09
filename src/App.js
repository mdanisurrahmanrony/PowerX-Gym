import React, { useEffect } from "react";

import "./App.css";
import MainHome from "./components/home/mainHome";
import MainClass from "./components/classes/mainClass";
import { Switch, Route } from "react-router-dom";
import SpecificClass from "./components/classes/specificClass";
import MainPrice from "./components/pricing/mainPrice";
import MainMembers from "./components/members/mainmembers";

import ReactGa from "react-ga";

function App() {
    useEffect(() => {
        ReactGa.initialize("UA-153890111-1");

        //to report pageview
        ReactGa.pageview(window.location.pathname + window.location.search);
    }, []);
    return (
        <div>
            <Switch>
                <Route path="/" exact component={MainHome} />
                <Route path="/class" exact component={MainClass} />

                <Route path="/pricing" component={MainPrice} />
                <Route path="/membersRegistration" component={MainMembers} />
                <Route path="/class/:specific" component={SpecificClass} />
            </Switch>
        </div>
    );
}

export default App;
