import "./styles.css";

import "./modules/app/barrel.js";

import { initializeApp } from "./modules/app/init";

document.addEventListener("DOMContentLoaded", () => {
    initializeApp();
});