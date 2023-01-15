import React, {useRef, useEffect} from "react"
import Card from "./Card";

export default function Skills (props)
{   
    
    const sectionRef = useRef(null);

     /*
        El siguiente bloque de código se encarga de las animaciones
        de aparición y desaparición de los elementos en pantalla
        según el scroll del usuario
    
    */
    useEffect(() => {

        const observer = new IntersectionObserver((entries) =>{
            entries.forEach((entry) => {
                entry.target.classList.toggle("hide-right", !entry.isIntersecting);
            });
        }, {threshold: 0.33});

        observer.observe(sectionRef.current);

    }, []);



    /*
        Crea un array de componentes del tipo Card para renderizarlos
        en la sección de return
    */

    const cards = props.data.map(element => {
        return (<Card key={element[1]} link="#" image={element[0]} text={element[1]}/>);
    })

    return (
        <section ref={sectionRef} className="skills section" id="skills-section">
            <h2>Skills</h2>
            <div className="skills--cards">
                {cards}
            </div>
        </section>
    );

}