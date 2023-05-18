import React, { Children } from "react";
import { useState, useEffect } from "react";

const Collapse = (props) => {

    let [isDisplayed, setIsDisplayed] = useState(false);

    return <section className="collapse">
        <div className="collapseTitle" onClick={()=>setIsDisplayed(!isDisplayed)}>
            <h2>
                {props.collapseTitle}
            </h2>
            <i className={isDisplayed ? "fa fa-chevron-down" : "fa fa-chevron-up"} />
        </div>
        <div className="collapseContent" style={{display: isDisplayed ? "block" : "none"}}>
            {props.children}
        </div>
    </section>
}

export default Collapse