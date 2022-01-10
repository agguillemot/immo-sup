import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/Home";

const Switch = () => (
    <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/immo-sup" element={<Home />}></Route>
    </Routes>
);

export default Switch;