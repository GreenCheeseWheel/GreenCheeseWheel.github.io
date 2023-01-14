import React from "react"

export default function Headers()
{
    return(
        <nav className="navbar">
            <div className="navbar--title">✧ Costa Lucas</div>
            
            <ul className="navbar--links">
                <li className="link"><a href="#about-section"> About </a></li>
                <li className="link"><a href="#skills-section"> Skills </a></li>
                <li className="link"><a href="#proyectos-section"> Proyectos </a></li>
                <li className="link"><a href="#contacto-section"> Contacto </a></li>
             </ul>
            
        </nav>
    );
}

