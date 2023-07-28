import React from "react";
import { Hero, Mitra, Sertifikasi, Services } from "../components";
// import './App.css'

const Home = () => {
    return (
        <div>
            <Hero />
            <Services />
            <Sertifikasi />
            {/* <Blog /> */}
            <Mitra />
        </div>
    );
};

export default Home;
