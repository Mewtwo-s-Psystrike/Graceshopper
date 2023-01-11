import React from "react";
import ReactDOM from "react-dom"
import App from "./App"
import {BrowserRouter as Router} from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById("app"))
root.render(
    <Router>
        <App />
    </Router>
    )
