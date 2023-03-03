import React, {useEffect, useState} from "react"

import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Proyectos from "./components/Proyectos"
import Contacto from "./components/Contacto"

import data from "./data"


export default function App()
{   

    const [darkmode, setDarkMode] = useState("Light Mode");
    const [darkmodeOn, setDarkModeOn] = useState(true);
    var skillsData = [];
    var proyData = [];
    const [darkmodeIcon, setDarkModeIcon] = useState(data.darkmodeData[0].sunSvg);
    
    // Poblamos el array de skillsData con las url y los textos
    data.skillData.forEach((obj) =>
    {
        skillsData.push([obj.imgData, obj.textData]);
    }
    );


    // Poblamos el array de proyData con las url y los textos
    data.proyectoData.forEach((obj) => 
        {
            proyData.push([obj.imgData, obj.textData, obj.urlData]);
        }
    );

    
    // Función setter para el Dark Mode que configura el color del
    // tag body inmediatamente 

    function changeDarkMode() {
        
        const dataDarkMode = data.darkmodeData[0];
        var bodyElement = document.getElementsByTagName("body").item(0);

        setDarkModeOn(prevState => {
            
            setDarkModeIcon(prevState ? dataDarkMode.moonSvg : dataDarkMode.sunSvg);
            bodyElement.style = `background-color: ${prevState ? "#e4e5f1" : "#282c34"};`; 

            return (!prevState);
        });

        setDarkMode(prevState => {
            return (prevState === "Light Mode") ? "Dark Mode" : "Light Mode";       
        });

    }

   

    /* DOCUMENTO A RENDERIZAR */

    return (

        <div className="wrapper">
            <header>
                <Header darkmode={darkmodeOn} />
                <div className="navbar--darkmode---container">
                    <div className="navbar--darkmode" onClick={changeDarkMode}>{darkmode} <img id="darkmodeIcon" src={darkmodeIcon}></img> </div>
                </div>
                <Home darkmode={darkmodeOn} />
            </header>

            <main>
                
                <About darkmode={darkmodeOn} />
                <Skills data={skillsData.map(element => element)} darkmode={darkmodeOn} />
                <Proyectos data={proyData.map(element => element)} darkmode={darkmodeOn} />
                <Contacto  darkmode={darkmodeOn}/>
            </main>
        </div>
    );
}