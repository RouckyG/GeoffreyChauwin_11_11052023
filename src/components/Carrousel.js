import React from "react";
import { useEffect, useState } from 'react';
import arrowLeft from "../assets/arrowLeft.svg";
import arrowRight from "../assets/arrowRight.svg";

const Carrousel = (props) => {

    let [currentSlide, setCurrentSlide] = useState(0);
    return <div className="carrousel">
        { props.pictures.length > 1 &&
        <>
            <span className="arrows">
                <img src={arrowLeft} className="carrouselArrowLeft" onClick={()=>setCurrentSlide(currentSlide === 0 ? props.pictures.length-1 : (currentSlide-1) % props.pictures.length)}/>
                <img src={arrowRight} className="carrouselArrowRight" onClick={()=>setCurrentSlide((currentSlide+1) % props.pictures.length )}/>
            </span>
            <span className="currentSlide">{currentSlide+1} / {props.pictures.length}</span>
        </>
        }
        <img src={props.pictures[currentSlide]} className="carrouselPicture"/>
    </div>
}

export default Carrousel