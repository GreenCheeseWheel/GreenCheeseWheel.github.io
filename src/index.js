import React from "react"
import {createRoot} from "react-dom/client"
import "./style.css"

import App from "./App"


/* RESALTAR CON UN COLOR DIFERENTE MI NOMBRE EN LA SECCION HOME */


const createRootElement = document.getElementById("root");
const root = createRoot(createRootElement);

root.render(<App />);


