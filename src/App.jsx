import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Services from "./Services";
import Error from "./Error";

function App() {
    return <>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />}></Route>
                <Route path="/services" element={<Services />}></Route>
                <Route path="*" element={<Error />}></Route>
            </Route>
        </Routes>
    </>
}

export default App;