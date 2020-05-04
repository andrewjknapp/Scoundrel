import React, { useState, useEffect } from "react";
import { cards } from "../assets/cards";

function Board() {
    const [ HP, setHP ] = useState(20);
    const [weapon, setWeapon ] = useState("none");
    const [ card, setCard ] = useState("heart_1");
    const [ lose, setLose ] = useState(false);
    const [ deck, setDeck ] = useState([]);
    const [ room, setRoom ] = useState([]);

    // Done once at the start of the game. 
    // Input: Object containing all possible cards
    // Output: Array of cards put into random order
    function shuffleCards(cards) {
        let shuffledCards = [];

        for (const card in cards) {
            let randIndex = Math.floor(Math.random() * shuffledCards.length);

            shuffledCards.splice(randIndex, 0, card)
        }

        return shuffledCards
    }

    // Start of the game four cards are drawn from the deck. This makes the current room.
    // Each subsequent room contains three new cards and one from the previous room. 
    // Input: shuffled deck of cards (optional one card from precious room) \
    // Output: current room
    function makeRoom(deck, prevCard = null) {
        let room = [];
        if (prevCard !== null) {
            room.push(prevCard);
        }
        while (room.length < 4) {
            let currentCard = deck.shift();
            if(currentCard === undefined) {
                break;
            }
            room.push(currentCard);
        }
        setDeck(deck);
        return room;
    }

    // Player has the option to leave the current room of the dungeon. 
    // This puts the cards from the room at the bottom of the deck 
    // Input: remaining cards from shuffled deck and room to be left
    // Output: none 
    function leaveRoom(deck, leaveRoom) {
        console.log(deck);
        deck.push(...leaveRoom);
        console.log(deck);
    }

    // Called when player chooses a card from the current room
    // Input: Card that is chosen from the room
    // Output: none
    // Side Effects: setHP or setWeapon depending on input
    function takeCard(card) {
        const type = card.substring(0, card.indexOf("_"));
        const number = Number(card.substring(card.indexOf("_") + 1));
        console.log(number);
        if (type === "heart") {
            let newHP;
            if (HP + number > 20) {
                newHP = 20;
            } else {
                newHP = HP + number;
            }
            setHP(newHP);
        } else if (type === "diamond") {

            setWeapon(card);

        } else if (type === "spade" || type === "club") {
            let defense = 0;
            if (weapon !== "none") {
                defense = Number(weapon.substring(weapon.indexOf("_") + 1));
            }
            let damage = defense - number;
            if (damage > 0) {
                damage = 0;
            }
            let newHP = HP + damage;

            if (newHP <= 0) {
                newHP = 0;
            }

            setHP(newHP);
        }
    }

    useEffect(() => {
        let shuffled = shuffleCards(cards); 
        setDeck(shuffled);
        console.log(shuffled);
    }, [])

    useEffect(() => {
        takeCard(card);
    }, [card])
    console.log(deck);
    return (
        <main>
            <h1>The party is here</h1>
            <p>Health: {HP}</p>
            <p>Weapon: {weapon}</p>
            {lose ? <p>YOU LOSE</p> : null}
            <button onClick={()=>setCard(deck[0])}>{deck[0]}</button>
            <button onClick={()=>setCard(deck[1])}>{deck[1]}</button>
            <button onClick={()=>setCard(deck[2])}>{deck[2]}</button>
            <button onClick={()=>setCard(deck[3])}>{deck[3]}</button>
            <button onClick={()=>makeRoom(deck)}>Next Room</button>
            <h1>{deck[0]}</h1>
        </main>
    )
}

export default Board;