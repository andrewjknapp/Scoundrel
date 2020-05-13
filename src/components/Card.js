import React from "react";
import "../assets/css/card.css";

function Card(props) {
    let { card, room, updateRoom, isRoom } = props;
    let soundType;
    
    //Checks to see which suit the card is to apply the appropriate sound
    switch (card.substring(0, card.indexOf("_"))) {
        case "diamond":
            soundType = "sword.flac";
            break;
        case "heart":
            soundType = "health.wav";
            break;
        case "spade":
            soundType = "bone.wav";
            break;
        default:
            break;
    }

    if (card === "none") {
        return null;
    } else if (!isRoom) {
        // These describe the weapon and the last slain cards.
        return (<section className="nonRoomCard" style={{backgroundImage: `url(${require("../assets/card_images/" + card + ".png")})`}}></section>)
    } else {
        // This describes the cards contained in the current room.
        return (
            <section 
                className="card" 
                onClick={()=>{
                    //new Audio(require("../assets/sounds/" + soundType)).play()
                    updateRoom(card, room)
                }}  
                style={{backgroundImage: `url(${require("../assets/card_images/" + card + ".png")})`}}
            ></section>
            )
    }
}

export { Card }