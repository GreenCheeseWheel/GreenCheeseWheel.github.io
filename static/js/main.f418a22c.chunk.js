(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t,a){e.exports=a.p+"static/media/CV_CostaLucas.3e08c827.pdf"},function(e,t,a){e.exports=a.p+"static/media/github.3ba44647.svg"},function(e,t,a){e.exports=a.p+"static/media/linkedin.17d4d429.svg"},function(e,t,a){e.exports=a(18)},,,,,,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(3),r=(a(16),a(1));function s(e){var t=e.darkmode?"#e4e5f1":"#282c34",a=e.darkmode?"#282c34":"#e4e5f1";return c.a.createElement("nav",{className:"navbar",style:{backgroundColor:t,color:a}},c.a.createElement("div",{className:"navbar--title"},"\u2727 Costa Lucas"),c.a.createElement("ul",{className:"navbar--links"},c.a.createElement("li",{className:"link"},c.a.createElement("a",{style:{color:a},href:"#about-section"}," About ")),c.a.createElement("li",{className:"link"},c.a.createElement("a",{style:{color:a},href:"#skills-section"}," Skills ")),c.a.createElement("li",{className:"link"},c.a.createElement("a",{style:{color:a},href:"#proyectos-section"}," Proyectos ")),c.a.createElement("li",{className:"link"},c.a.createElement("a",{style:{color:a},href:"#contacto-section"}," Contacto "))))}var l=a(4),i=a.n(l),m=a(5),u=a.n(m),d=a(6),g=a.n(d);function p(e){return c.a.createElement("section",{className:"home ".concat(e.darkmode?" ":"home--light_mode")},c.a.createElement("div",{className:"home--text"},c.a.createElement("h1",{className:"home--title"},"Costa Lucas"),c.a.createElement("h3",{className:"home--subtitle"},"React Web Developer"),c.a.createElement("ul",{className:"home--links"},c.a.createElement("li",{className:"home--link---item"},c.a.createElement("a",{href:"www.linkedin.com/in/lucas-costa-57b837224",target:"_blank"},c.a.createElement("img",{src:g.a}))),c.a.createElement("li",{className:"home--link---item"},c.a.createElement("a",{href:"https://github.com/GreenCheeseWheel?tab=repositories",target:"_blank"},c.a.createElement("img",{src:u.a}))),c.a.createElement("li",{className:"home--link---item"},c.a.createElement("a",{href:i.a,download:!0,style:{color:"".concat(e.darkmode?"snow":"black")}},"CV")))),c.a.createElement("img",{className:"home--image",src:"./img/portrait/perfil.jpg"}))}function h(e){var t;return t={backgroundColor:"".concat(e.darkmode?"#282c34":"#e4e5f1"),color:"".concat(e.darkmode?"snow":"black")},c.a.createElement("section",{className:"about section",id:"about-section",style:t},c.a.createElement("h2",{className:"about--title",style:t},"About"),c.a.createElement("h3",{className:"about--subtitle",style:t},"\u2193 Conoce acerca de m\xed \u2193"),c.a.createElement("p",{className:"about--text",style:t}," Adem\xe1s de estar cursando el segundo a\xf1o de mi carrera, estoy sumamente interesado en el back-end y la infraestructura que sostiene a las aplicaciones web. Comenc\xe9 a aprender Java por mi cuenta durante el 2021 y luego aprend\xed sobre el framework Spring en el curso 'Spring & Hibernate for beginners', en Udemy, del instructor Chad Darby. Adem\xe1s de eso he aprendido a usar Thymeleaf junto con Spring Boot y, aunque b\xe1sico, tambi\xe9n tengo manejo de la tecnolog\xeda JSP. Curs\xe9 en Alura Latam durante la mayor parte del 2022."))}function f(e){return c.a.createElement("div",{className:"card",onClick:function(){"#"!==e.link&&""!==e.link.trim()&&window.open(e.link,"__blank")}},c.a.createElement("img",{className:"card--image",src:e.image}),c.a.createElement("p",{className:"card--text"},e.text))}function b(e){var t=Object(n.useRef)(null);Object(n.useEffect)(function(){new IntersectionObserver(function(e){e.forEach(function(e){e.target.classList.toggle("hide-right",!e.isIntersecting)})},{threshold:.33}).observe(t.current)},[]);var a=e.data.map(function(e){return c.a.createElement(f,{key:e[1],link:"#",image:e[0],text:e[1]})});return c.a.createElement("section",{ref:t,className:"skills section",id:"skills-section",style:{backgroundColor:"inherit",color:"".concat(e.darkmode?"snow":"black")}},c.a.createElement("h2",null,"Skills"),c.a.createElement("div",{className:"skills--cards"},a))}function E(e){var t=Object(n.useRef)(null),a=(Object(n.useRef)(null),e.darkmode?"#e4e5f1":"#282c34");Object(n.useEffect)(function(){new IntersectionObserver(function(e){e.forEach(function(e){e.target.classList.toggle("hide-left",!e.isIntersecting)})},{threshold:.2}).observe(t.current)},[]);var o=e.data.map(function(e){return c.a.createElement(f,{key:e[1],image:e[0],text:e[1],link:e[2]})});return c.a.createElement("section",{ref:t,className:"proyectos section",id:"proyectos-section",style:{color:a}},c.a.createElement("h2",{className:"proyectos--title"},"Proyectos"),c.a.createElement("div",{className:"proyectos--cards"},o))}function k(e){var t=Object(n.useRef)(null),a=e.darkmode?"#282c34":"#e4e5f1",o=e.darkmode?"#e4e5f1":"#282c34";return Object(n.useEffect)(function(){new IntersectionObserver(function(e){e.forEach(function(e){e.target.classList.toggle("hide-right",!e.isIntersecting)})},{threshold:.25}).observe(t.current)},[]),c.a.createElement("section",{className:"contacto section",id:"contacto-section",style:{backgroundColor:o,color:a}},c.a.createElement("h2",{className:"contacto--title"},"\xa1Cont\xe1ctame!"),c.a.createElement("div",{className:"contacto--container"},c.a.createElement("form",{ref:t,action:"https://formsubmit.co/thegreencheesewheel@gmail.com",method:"POST",className:"contacto--form"},c.a.createElement("input",{type:"text",placeholder:"Nombre",name:"name",className:"contacto--input",style:{color:a}}),c.a.createElement("input",{type:"email",placeholder:"e-mail",name:"email",className:"contacto--input",style:{color:a}}),c.a.createElement("input",{type:"text",placeholder:"Asunto",name:"about",className:"contacto--input",style:{color:a}}),c.a.createElement("textarea",{placeholder:"Mensaje",name:"message",className:"contacto--input msg",style:{color:a}}),c.a.createElement("input",{type:"submit",className:"contacto--input contacto--submit"}))))}var v={skillData:[{imgData:"./img/html.svg",textData:"HTML 5"},{imgData:"./img/css.svg",textData:"CSS 3"},{imgData:"./img/javascript.svg",textData:"Javascript"},{imgData:"./img/react.svg",textData:"React"},{imgData:"./img/node-js.svg",textData:"Node JS"},{imgData:"./img/java.svg",textData:"Java"},{imgData:"./img/springboot.svg",textData:"Spring"},{imgData:"./img/figma.svg",textData:"Figma"},{imgData:"./img/mysql.svg",textData:"MySQL"}],proyectoData:[{imgData:"./img/proy/CustomerRel.png",textData:"CRM Application (Back-end)",urlData:"https://github.com/GreenCheeseWheel/CustomerRelManag"},{imgData:"./img/proy/ECommerce.png",textData:"E-Commerce (Front-end)",urlData:"https://github.com/GreenCheeseWheel/ECommerceWeb"},{imgData:"./img/proy/Landing.png",textData:"Landing Page (Front-end)",urlData:"https://github.com/GreenCheeseWheel/LandingPage"},{imgData:"./img/proy/Security.png",textData:"Spring Security Application (Back-end)",urlData:"https://github.com/GreenCheeseWheel/secureAppDemo"},{imgData:"./img/proy/portfolio.png",textData:"Portfolio (Repo)",urlData:"https://github.com/GreenCheeseWheel/GreenCheeseWheel.github.io"}],darkmodeData:[{moonSvg:"./img/moon.svg",sunSvg:"./img/sun.svg"}]};function y(){var e=Object(n.useState)("Light Mode"),t=Object(r.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(!0),i=Object(r.a)(l,2),m=i[0],u=i[1],d=[],g=[],f=Object(n.useState)(v.darkmodeData[0].sunSvg),y=Object(r.a)(f,2),D=y[0],N=y[1];return v.skillData.forEach(function(e){d.push([e.imgData,e.textData])}),v.proyectoData.forEach(function(e){g.push([e.imgData,e.textData,e.urlData])}),c.a.createElement("div",{className:"wrapper"},c.a.createElement("header",null,c.a.createElement(s,{darkmode:m}),c.a.createElement("div",{className:"navbar--darkmode---container"},c.a.createElement("div",{className:"navbar--darkmode",onClick:function(){var e=v.darkmodeData[0],t=document.getElementsByTagName("body").item(0);u(function(a){return N(a?e.moonSvg:e.sunSvg),t.style="background-color: ".concat(a?"#e4e5f1":"#282c34",";"),!a}),o(function(e){return"Light Mode"===e?"Dark Mode":"Light Mode"})}},a," ",c.a.createElement("img",{id:"darkmodeIcon",src:D})," ")),c.a.createElement(p,{darkmode:m})),c.a.createElement("main",null,c.a.createElement(h,{darkmode:m}),c.a.createElement(b,{data:d.map(function(e){return e}),darkmode:m}),c.a.createElement(E,{data:g.map(function(e){return e}),darkmode:m}),c.a.createElement(k,{darkmode:m})))}var D=document.getElementById("root");Object(o.createRoot)(D).render(c.a.createElement(y,null))}],[[7,2,1]]]);
//# sourceMappingURL=main.f418a22c.chunk.js.map