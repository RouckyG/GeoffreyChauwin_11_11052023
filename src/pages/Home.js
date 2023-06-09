import React from "react";
import Banner from "../components/Banner";
import bannerPicture from "../assets/eric-muhr-P_XxsdVgtpQ-unsplash.jpg";
import Card from "../components/Card";
import { useEffect, useState } from 'react';

const Home = (props) => {

    const [locations, setLocations] = useState();

  //async function that will call the JSON file to set the properties list into state
  const getLocations = async () => {
    
    const response = await fetch('data/locations.json')
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });

      setLocations(response);
  };

  useEffect(() => {
    getLocations();
}, []);

    return <div className="homePage">
        <Banner banner={bannerPicture} text="Chez vous, partout et ailleurs"/>
        <ul className="locationCards">
            {
                locations && locations.map((location, index) => {
                    return <li key={index}>
                        <Card id={location.id} picture={location.cover} title={location.title}/>
                    </li>
                })
            }
        </ul>
    </div>
}

export default Home