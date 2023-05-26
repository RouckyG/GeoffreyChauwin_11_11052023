import React from "react";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Carrousel from "../components/Carrousel";
import Tags from "../components/Tags";
import Collapse from "../components/Collapse";

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
        {location && 
        <>
            <Carrousel pictures={location.pictures} />
            <>
                <>
                    <h2>
                        {location.title}
                    </h2>
                    <h3>
                        {location.location}
                    </h3>
                    <Tags tags={location.tags} />
                </>
                <>
                    <h3>
                        {location.host.name}
                    </h3>
                    <img src={location.host.picture} alt={"photo de profil de " + location.host.name}/>
                </>
            </>
            <>
                <Collapse title="Description">
                    <p>{location.description}</p>
                </Collapse>
                <Collapse title="Équipements">
                    {location.equipments.map((equipment)=> {return <p>{equipment}</p>})}
                </Collapse>
            </>
        </>
        }
    </div>
}

export default Location;