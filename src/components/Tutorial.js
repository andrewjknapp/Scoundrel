import React from "react";
import { Link } from "react-router-dom";

function Tutorial() {
    return (
        <main>
            <h1>Tutorial</h1>
            <Link to="/">Back</Link>
            <a href="http://stfj.net/art/2011/Scoundrel.pdf" target="_blank" rel="noopener noreferrer">Rules</a>
        </main>
    )
}

export { Tutorial };