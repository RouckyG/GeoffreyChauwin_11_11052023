import React from "react";
import Banner from "../components/Banner";
import bannerPicture from "../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
import Collapse from "../components/Collapse";

const About = (props) => {
    return <>
        <Banner banner={bannerPicture}/>
        <Collapse collapseTitle="Équipements" collapseContent={"Clima"}/>
        <Collapse collapseTitle="Équipements" collapseContent={["Climatisation", "Wi-Fi"]}/>
    </>
}

export default About