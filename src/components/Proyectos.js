import React, {useRef, useEffect} from "react"
import Card from "./Card"

export default function Proyectos (props)
{   
    const sectionRef = useRef(null);
    const cardsClick = useRef(null);

     /*
        El siguiente bloque de código se encarga de las animaciones
        de aparición y desaparición de los elementos en pantalla
        según el scroll del usuario
    
    */
    useEffect(() => {

        const observer = new IntersectionObserver((entries) =>{
            entries.forEach((entry) => {
                entry.target.classList.toggle("hide-left", !entry.isIntersecting);
            });
        }, {threshold: 0.25});

        observer.observe(sectionRef.current);

    }, []);




    const cards = props.data.map(element => {
        return (<Card key={element[1]} image={element[0]} text={element[1]} link={element[2]}/>);
    })


    return (
        <section ref={sectionRef} className="proyectos section" id="proyectos-section">
            <h2 className="proyectos--title">Proyectos</h2>
            <div className="proyectos--cards">
                {cards}
            </div>

        </section>
    );

}