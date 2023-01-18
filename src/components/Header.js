import React, { useState } from "react"

export default function Header(props)
{
    
    const backColor = props.darkmode ? "#e4e5f1" : "#282c34";
    const fontColor = props.darkmode ? "#282c34" : "#e4e5f1";
    
    return(
        <nav className="navbar" style={{backgroundColor: backColor, color: fontColor}}>
            <div className="navbar--title">✧ Costa Lucas</div>
            
            <ul className="navbar--links">
                <li className="link"><a style={{color: fontColor}} href="#about-section"> About </a></li>
                <li className="link"><a style={{color: fontColor}} href="#skills-section"> Skills </a></li>
                <li className="link"><a style={{color: fontColor}} href="#proyectos-section"> Proyectos </a></li>
                <li className="link"><a style={{color: fontColor}} href="#contacto-section"> Contacto </a></li>
             </ul>
            
        </nav>
    );
}

