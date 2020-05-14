import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/homescreen.css";
import "../assets/css/homescreen.css";

function HomeScreen() {
    return (
        <main className="HomeScreenBackground">
            <h1>Scoundrel</h1>
            <Link to="/game">Play</Link>
            <Link to="/tutorial">Tutorial</Link>
        </main>
    )
}

export { HomeScreen };