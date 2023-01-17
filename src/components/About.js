import React from "react"

export default function About(props)
{
    var styleVal;

    if(window.matchMedia("(min-width: 770px)").matches) {
        styleVal = {color: `${props.darkmode ? "snow" : "black"}`};
    } else {
        styleVal = {color: "snow"};
    }


    return (
        <section className="about section" id="about-section">
            <h2 className="about--title" style={styleVal}>About</h2>
            <h3 className="about--subtitle" style={styleVal}>↓ Conoce acerca de m&iacute; ↓</h3>
            <p className="about--text" style={styleVal}> Además de estar cursando el segundo año de mi carrera, estoy sumamente interesado en el 
                back-end y la infraestructura que sostiene a las aplicaciones web. 
                Comencé a aprender Java por mi cuenta durante el 2021 y luego aprendí sobre el 
                framework Spring en el curso 'Spring & Hibernate for beginners', en Udemy, 
                del instructor Chad Darby. Además de eso he aprendido a usar Thymeleaf junto con 
                Spring Boot y, aunque básico, también tengo manejo de la tecnología JSP. 
                Cursé en Alura Latam durante la mayor parte del 2022.
                
            </p>
        </section>
    );
}