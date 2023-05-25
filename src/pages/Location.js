import React from "react";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Carrousel from "../components/Carrousel";
import Banner from "../components/Banner";

const Location = (props) => {

    const params = useParams();
    const [locations, setLocations] = useState();
    const [location, setLocation] = useState();

    const getLocations = async () => {
        const response = await fetch(`../data/locations.json`)
        .then((response) => response.json())
        .catch((error) => console.log(error));
        setLocations(response);
    };

    useEffect(() => {
        
        if (locations) {
            setLocation(locations.find(
                (location) => location.id === params.id
            ));
        }
        else{
            getLocations();
        }
    }, [locations]);

    return <div className="locationPage">
        {location && (typeof location.pictures === "string" ? <Banner banner={location.pictures}/> : <Carrousel pictures={location.pictures} />)}
    </div>
}

export default Location;