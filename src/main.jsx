import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { animals, birds } from "./animalsList.js";

localStorage.setItem("animalCollection", JSON.stringify(animals));
localStorage.setItem("birdCollection", JSON.stringify(birds));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
