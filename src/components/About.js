import React from "react"

export default function About(props)
{
    var styleVal;

    
    styleVal = {backgroundColor: `${props.darkmode ? "#282c34" : "#e4e5f1"}`, color: `${props.darkmode ? "snow" : "black"}`};
    


    return (
        <section className="about section" id="about-section" style={styleVal}>
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