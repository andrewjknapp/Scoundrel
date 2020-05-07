import React from "react";
import "../assets/css/card.css";

function Card(card) {
    return (<section className="card" style={{
        backgroundImage: `url(${require(`../assets/card_images/${card}.png`)})`}}></section>)
}

export { Card }