import React from "react"

export default function Card(props)
{
    function clickHandler() {
        if(props.link !== "#" && props.link.trim() !== "") {
            window.open(props.link, "__blank");
        }
    }

    return (
        <div className="card" onClick={clickHandler}>
            <img className="card--image" src={props.image}></img>
            <p className="card--text">{props.text}</p>
        </div>
    );

}