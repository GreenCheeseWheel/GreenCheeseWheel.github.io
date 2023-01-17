import React from "react";

import cv from "../cv/CV_CostaLucas.pdf";
import gitHub from "../home/github.svg";
import linkedIn from "../home/linkedin.svg"

export default function Home(props)
{

    return (
        <section className={`home ${props.darkmode ? " " : "home--light_mode"}`}>
            <div className="home--text">
                <h1 className="home--title">Costa Lucas</h1>
                <h3 className="home--subtitle">React Web Developer</h3>
                <ul className="home--links">
                    <li className="home--link---item"><a href="www.linkedin.com/in/lucas-costa-57b837224" target="_blank"><img src={linkedIn}></img></a></li>
                    <li className="home--link---item"><a href="https://github.com/GreenCheeseWheel?tab=repositories" target="_blank"><img src={gitHub}></img></a></li>
                    <li className="home--link---item"><a href={cv} download style={{color: `${props.darkmode ? "snow" : "black"}`}}>CV</a></li>
                </ul>

            </div>
            <img className="home--image" src="./img/portrait/perfil.jpg"></img>
        </section>
    );
}