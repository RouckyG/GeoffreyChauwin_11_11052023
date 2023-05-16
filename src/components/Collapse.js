import React from "react";
import { useState } from "react";

const Collapse = (props) => {

    let [isDisplayed, setIsDisplayed] = useState(false);

    let content;

    if(typeof props.collapseContent === "string"){
        content = props.collapseContent;
    }
    else{
        content = props.collapseContent.map((line) => {return <p>{line}</p>});
    }

    return <div className="collapse">
        <div className="collapseTitle" onClick={()=>setIsDisplayed(!isDisplayed)}>
            <p>
                {props.collapseTitle}
            </p>
            <span>
v
            </span>
        </div>
        {isDisplayed ? <div className="collapseContent">
            {content}
        </div> : ""}
    </div>
}

export default Collapse