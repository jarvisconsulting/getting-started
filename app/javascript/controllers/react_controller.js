import {Controller} from "@hotwired/stimulus"
import React from "react";

import App from "../App";
import {createRoot} from "react-dom/client";

export default class extends Controller {
    connect() {
        this.element.textContent = "Hello World!"
        console.log("Hello");
        const app = document.getElementById("app");
        createRoot(app).render(<App/>)
    }
}
