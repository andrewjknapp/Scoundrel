import React from "react";
import { Link } from "react-router-dom";

function HomeScreen() {
    return (
        <main>
            <h1>Home Screen</h1>
            <Link to="/game">Play</Link>
            <Link to="/tutorial">Tutorial</Link>
        </main>
    )
}

export { HomeScreen };