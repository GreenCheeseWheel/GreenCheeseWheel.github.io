import React, { useRef, useEffect, useState } from "react"



export default function Contacto(props) {

    const sectionRef = useRef(null);

    const fontColor = props.darkmode ? "#282c34" : "#e4e5f1";
    const backColor = props.darkmode ? "#e4e5f1" : "#282c34";

    /*
       El siguiente bloque de código se encarga de las animaciones
       de aparición y desaparición de los elementos en pantalla
       según el scroll del usuario
   */

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                entry.target.classList.toggle("hide-right", !entry.isIntersecting);
            });
        }, { threshold: 0.25 });

        observer.observe(sectionRef.current);

    }, []);

    

    return (
        <section className="contacto section" id="contacto-section" style={{backgroundColor: backColor,  color: fontColor}}>
            <h2 className="contacto--title">¡Cont&aacute;ctame!</h2>
            <div className="contacto--container">
                <form ref={sectionRef} action="https://formsubmit.co/thegreencheesewheel@gmail.com" method="POST" className="contacto--form">
                    <input type="text" placeholder="Nombre" name="name" className="contacto--input" style={{color: fontColor}}></input>
                    <input type="email" placeholder="e-mail" name="email" className="contacto--input" style={{color: fontColor}}></input>
                    <input type="text" placeholder="Asunto" name="about" className="contacto--input" style={{color: fontColor}}></input>
                    <textarea placeholder="Mensaje" name="message" className="contacto--input msg" style={{color: fontColor}}></textarea>

                    <input type="submit" className="contacto--input contacto--submit"></input>
                </form>
            </div>
        </section>
    );
}


/*


*/