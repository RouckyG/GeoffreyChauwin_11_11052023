import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
    return <article className="card">
        <Link to={"./logement/" + props.id}>
            <img src={props.picture} alt={"location " + props.title} className="cardPicture"/>
            <h3 className="cardTitle">{props.title}</h3>
        </Link>
    </article>
}

export default Card