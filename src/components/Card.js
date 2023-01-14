import React from "react"

export default function Card(props)
{
    return (
        <div className="card">
            <img className="card--image" src={props.image}></img>
            <p className="card--text">{props.text}</p>
        </div>
    );

}