(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(2);a(12);function l(){return c.a.createElement("nav",{className:"navbar"},c.a.createElement("div",{className:"navbar--title"},"\u2727 Costa Lucas"),c.a.createElement("ul",{className:"navbar--links"},c.a.createElement("li",{className:"link"},c.a.createElement("a",{href:"#about-section"}," About ")),c.a.createElement("li",{className:"link"},c.a.createElement("a",{href:"#skills-section"}," Skills ")),c.a.createElement("li",{className:"link"},c.a.createElement("a",{href:"#proyectos-section"}," Proyectos ")),c.a.createElement("li",{className:"link"},c.a.createElement("a",{href:"#contacto-section"}," Contacto "))))}function s(){return c.a.createElement("section",{className:"about section",id:"about-section"},c.a.createElement("h2",null,"About"),c.a.createElement("p",null," Adem\xe1s de estar cursando el segundo a\xf1o de mi carrera, estoy sumamente interesado en el back-end y la infraestructura que sostiene a las aplicaciones web. Comenc\xe9 a aprender Java por mi cuenta durante el 2021 y luego aprend\xed sobre el framework Spring en el curso 'Spring & Hibernate for beginners', en Udemy, del instructor Chad Darby. Adem\xe1s de eso he aprendido a usar Thymeleaf junto con Spring Boot y, aunque b\xe1sico, tambi\xe9n tengo manejo de la tecnolog\xeda JSP. Curs\xe9 en Alura Latam durante la mayor parte del 2022."))}function i(e){return c.a.createElement("div",{className:"card",onClick:function(){"#"!==e.link&&""!==e.link.trim()&&window.open(e.link,"__blank")}},c.a.createElement("img",{className:"card--image",src:e.image}),c.a.createElement("p",{className:"card--text"},e.text))}function o(e){var t=Object(n.useRef)(null);Object(n.useEffect)(function(){new IntersectionObserver(function(e){e.forEach(function(e){e.target.classList.toggle("hide-right",!e.isIntersecting)})},{threshold:.5}).observe(t.current)},[]);var a=e.data.map(function(e){return c.a.createElement(i,{key:e[1],link:"#",image:e[0],text:e[1]})});return c.a.createElement("section",{ref:t,className:"skills section",id:"skills-section"},c.a.createElement("h2",null,"Skills"),c.a.createElement("div",{className:"skills--cards"},a))}function m(e){var t=Object(n.useRef)(null);Object(n.useRef)(null);Object(n.useEffect)(function(){new IntersectionObserver(function(e){e.forEach(function(e){e.target.classList.toggle("hide-left",!e.isIntersecting)})},{threshold:.25}).observe(t.current)},[]);var a=e.data.map(function(e){return c.a.createElement(i,{key:e[1],image:e[0],text:e[1],link:e[2]})});return c.a.createElement("section",{ref:t,className:"proyectos section",id:"proyectos-section"},c.a.createElement("h2",null,"Proyectos"),c.a.createElement("div",{className:"proyectos--cards"},a))}function u(){var e=Object(n.useRef)(null);return Object(n.useEffect)(function(){new IntersectionObserver(function(e){e.forEach(function(e){e.target.classList.toggle("hide-right",!e.isIntersecting)})},{threshold:.5}).observe(e.current)},[]),c.a.createElement("section",{ref:e,className:"contacto section",id:"contacto-section"},c.a.createElement("h2",{className:"contacto--title"},"\xa1Cont\xe1ctame!"),c.a.createElement("form",{action:"https://formsubmit.co/thegreencheesewheel@gmail.com",method:"POST",className:"contacto--form"},c.a.createElement("input",{type:"text",placeholder:"Nombre",name:"name",className:"contacto--input"}),c.a.createElement("input",{type:"email",placeholder:"e-mail",name:"email",className:"contacto--input"}),c.a.createElement("input",{type:"text",placeholder:"Asunto",name:"about",className:"contacto--input"}),c.a.createElement("textarea",{placeholder:"Mensaje",name:"message",className:"contacto--input msg"}),c.a.createElement("input",{type:"submit",className:"contacto--input contacto--submit"})))}var g={skillData:[{imgData:"./img/html.svg",textData:"HTML 5"},{imgData:"./img/css.svg",textData:"CSS 3"},{imgData:"./img/javascript.svg",textData:"Javascript"},{imgData:"./img/react.svg",textData:"React"},{imgData:"./img/java.svg",textData:"Java"},{imgData:"./img/springboot.svg",textData:"Spring"}],proyectoData:[{imgData:"./img/proy/CustomerRel.png",textData:"CRM Application",urlData:"https://github.com/GreenCheeseWheel/CustomerRelManag"},{imgData:"./img/proy/ECommerce.png",textData:"E-Commerce website",urlData:"https://github.com/GreenCheeseWheel/ECommerceWeb"},{imgData:"./img/proy/Landing.png",textData:"Landing Page",urlData:"https://github.com/GreenCheeseWheel/LandingPage"},{imgData:"./img/proy/Security.png",textData:"Spring Security Application",urlData:"https://github.com/GreenCheeseWheel/secureAppDemo"}]};function p(){var e=[],t=[];return g.skillData.forEach(function(t){e.push([t.imgData,t.textData])}),g.proyectoData.forEach(function(e){t.push([e.imgData,e.textData,e.urlData])}),c.a.createElement("div",null,c.a.createElement("header",null,c.a.createElement(l,null)),c.a.createElement("main",null,c.a.createElement(s,null),c.a.createElement(o,{data:e.map(function(e){return e})}),c.a.createElement(m,{data:t.map(function(e){return e})}),c.a.createElement(u,null)))}var d=document.getElementById("root");Object(r.createRoot)(d).render(c.a.createElement(p,null))},3:function(e,t,a){e.exports=a(14)}},[[3,2,1]]]);
//# sourceMappingURL=main.1fe742bd.chunk.js.map