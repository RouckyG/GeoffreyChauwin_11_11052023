import React from "react";

const Banner = (props) => {
    return <div className="banner">
        <img src={props.banner} alt="banner" className="bannerPicture"/>
        <h1 className="bannerText">{props.text}</h1>
    </div>
}

export default Banner