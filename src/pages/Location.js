import React from "react";
import { useEffect, useState } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import Carrousel from "../components/Carrousel";
import Tags from "../components/Tags";
import Rating from "../components/Rating";
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

    const navigate = useNavigate();

    useEffect(() => {
        
        if (locations) {
            let location = locations.find(
                (location) => location.id === params.id
            );
            if(location === undefined){
                navigate("/*")
            }
            else{
                setLocation(location)
            }
        }
        else{
            getLocations();
        }

    }, [locations]);

    return <div className="locationPage">
        {location && 
        <>
            <Carrousel pictures={location.pictures} />
            <article className="locationDetails">
                <div className="locationTitle">
                    <h2>
                        {location.title}
                    </h2>
                    <h3>
                        {location.location}
                    </h3>
                </div>
                <div className="locationHost">
                    <h3>
                        {location.host.name.split(" ")[0]}
                        <br/>
                        {location.host.name.split(" ")[1]}
                    </h3>
                    <img src={location.host.picture} alt={"photo de profil de " + location.host.name}/>
                </div>
                <Tags tags={location.tags} />
                <Rating rating={location.rating} />
                <Collapse title="Description">
                <p>{location.description}</p>
                </Collapse>
                <Collapse title="Équipements">
                    {location.equipments.map((equipment)=> {return <p>{equipment}</p>})}
                </Collapse>
            </article>
        </>
        }
    </div>
}

export default Location;