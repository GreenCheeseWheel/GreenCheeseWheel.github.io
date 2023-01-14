import React from "react"

import Header from "./components/Header"
import About from "./components/About"
import Skills from "./components/Skills"
import Proyectos from "./components/Proyectos"
import Contacto from "./components/Contacto"

import data from "./data"

export default function App()
{
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
            proyData.push([obj.imgData, obj.textData]);
        }
        );



    return (

        <div>
            <header>
                <Header />
            </header>

            <main>
                <About />
                <Skills data={skillsData.map(element => element)} />
                <Proyectos data={proyData.map(element => element)}/>
                <Contacto />
            </main>
        </div>
    );
}