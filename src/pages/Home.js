import React from "react";
import Banner from "../components/Banner";
import bannerPicture from "../assets/eric-muhr-P_XxsdVgtpQ-unsplash.jpg";

const Home = (props) => {
    return <>
        <Banner banner={bannerPicture} text="Chez vous, partout et ailleurs"/>
    </>
}

export default Home