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
            <form action="https://formsubmit.co/thegreencheesewheel@gmail.com" method="POST" className="contacto--form">
                <input type="text" placeholder="Nombre" name="name" className="contacto--input"></input>
                <input type="email" placeholder="e-mail" name="email" className="contacto--input"></input>
                <input type="text" placeholder="Asunto" name="about" className="contacto--input"></input>
                <textarea placeholder="Mensaje" name="message" className="contacto--input msg"></textarea>
                <input type="submit" className="contacto--input contacto--submit"></input>
            </form>
        </section>
    );
}