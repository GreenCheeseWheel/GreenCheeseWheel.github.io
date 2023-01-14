import React, {useRef, useEffect} from "react"

export default function Contacto()
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
        }, {threshold: 0.5});
    
        observer.observe(sectionRef.current);
    
    }, []);




    return (
        <section ref={sectionRef} className="contacto section" id="contacto-section">
            <h2 className="contacto--title">¡Cont&aacute;ctame!</h2>
            <form className="contacto--form">
                <input type="mail" placeholder="e-mail" className="contacto--input"></input>
                <input type="text" placeholder="Asunto" className="contacto--input"></input>
                <textarea placeholder="Mensaje" className="contacto--input msg"></textarea>
                <input type="submit" className="contacto--input contacto--submit"></input>
            </form>
        </section>
    );
}