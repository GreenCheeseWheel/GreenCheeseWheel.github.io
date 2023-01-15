import React, {useState} from "react"

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
    var darkmodeOn = true;
    var skillsData = [];
    var proyData = [];
    
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
        
        setDarkMode(prevState => {

            //
            // Obtenemos los elementos para cambiar sus estilos
            let bodyElement = document.getElementsByTagName("body").item(0);
            let navbarElement = document.getElementsByClassName("navbar").item(0);
            let contactElement = document.getElementsByClassName("contacto").item(0);
            
            let linksElements = document.getElementsByTagName("a");
            let inputElements = document.getElementsByClassName("contacto--input");
            let submitElement = document.getElementsByClassName("contacto--submit").item(0);
            let homeElement = document.getElementsByClassName("home").item(0);

            //
            // Chequeamos si el dark-mode está activado o no y creamos el string para aplicar estilos
            darkmodeOn = (prevState === "Light Mode") ? false : true;

            let strDarkMode = `background-color: ${darkmodeOn ? "#251F30" : "#9394a5"}; color: ${darkmodeOn ? "snow" : "black"};`;
            
            //
            // Aplicamos los estilos a los elementos
            bodyElement.style = `background-color: ${darkmodeOn ? "#282c34" : "#e4e5f1"}; color: ${darkmodeOn ? "snow" : "black"};`;
            navbarElement.style = strDarkMode;
            contactElement.style = strDarkMode;
        
            for(let index = 0; index < linksElements.length; index++ )
            {
                linksElements.item(index).style = strDarkMode;
            }

            for(let index = 0; index < inputElements.length; index++ )
            {
                inputElements.item(index).style = `border-bottom: 3px solid ${darkmodeOn ? "aquamarine" : "black"}; 
                background-color: inherit;
                color: ${darkmodeOn ? "snow" : "black"};
                `;
            }
            
            submitElement.style = `color: snow; background-color: ${darkmodeOn ? "#45a6ff" : "#5cb85c"};`
            homeElement.style = `color: ${darkmodeOn ? "snow" : "black"}`;
            homeElement.classList.toggle("home--light_mode", !darkmodeOn);

            //
            // Cambiamos el estado
            return ((prevState === "Light Mode") ? "Dark Mode" : "Light Mode");
        });

    }

    
    /* DOCUMENTO A RENDERIZAR */

    return (

        <div>
            <header>
                <Header darkmode={darkmodeOn} />
                <div className="navbar--darkmode---container">
                    <div className="navbar--darkmode" onClick={changeDarkMode}>{darkmode} 🝰</div>
                </div>
            </header>

            <main>
                <Home />
                <About />
                <Skills data={skillsData.map(element => element)} darkmode={darkmodeOn} />
                <Proyectos data={proyData.map(element => element)} darkmode={darkmodeOn}/>
                <Contacto  darkmode={darkmodeOn}/>
            </main>
        </div>
    );
}