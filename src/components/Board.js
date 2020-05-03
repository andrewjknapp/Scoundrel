import React from "react";
import { actions } from "../assets/logic";
import { cards } from "../assets/cards";

function Board() {

    console.log(actions.shuffleCards(cards));

    return (
        <main>
            <h1>The party is here</h1>
        </main>
    )
}

export default Board;