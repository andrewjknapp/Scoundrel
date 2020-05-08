import React from "react";
import "../assets/css/card.css";

function Card(props) {
    let { card, room, updateRoom, isRoom } = props;

    if (card === "none") {
        return null;
    } else if (!isRoom) {
        return (<section className="nonRoomCard" style={{backgroundImage: `url(${require("../assets/card_images/" + card + ".png")})`}}></section>)
    } else {
        return (<section className="card" onClick={()=>updateRoom(card, room)}  style={{backgroundImage: `url(${require("../assets/card_images/" + card + ".png")})`}}></section>)
    }
}

export { Card }