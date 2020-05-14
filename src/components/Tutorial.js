import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/tutorial.css";

function Tutorial() {
    return (
        <main className="tutorial">
            <h1>Tutorial</h1>
            <h2>Description</h2>
            <p>Scoundrel is a dungeon-crawling rogue-like card game. The goal is to survive. There are four types of cards: weapons, potions, skulls, and eyes. Monsters (skulls and eyes) subtract their number from your health. Weapons protect you from the monsters by subtracting their number from the monster's damage. However they can only protect you as much as the last monster it has slain. If you have a 10 of swords and attack a jack of skull you will take 1 damage, however if the last monster you had taken down was a 5 of skull your sword could only protect you up to 5 points so you would take 6 points of damage. Potions heal you the same number as they are. Can you make it to the end?</p>
            <Link to="/">Back</Link>
            <a href="http://stfj.net/art/2011/Scoundrel.pdf" target="_blank" rel="noopener noreferrer">Rules</a>
        </main>
    )
}

export { Tutorial };