import React, { useState, useEffect } from "react";
import { cards } from "../assets/cards";

function Board() {

    const [ data, setData ] = useState({
        HP: 20,
        weapon: "none",
        card: "heart_1",
        lastSlain: "none",
        lose: false,
        deck: [],
        room: [],
        hasHealed: false
    })

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
        // if (prevCard !== null) {
        //     room.push(prevCard);
        // }
        let shift = 0;
        for ( let i = 0; i < 4; i++) {
            if (deck[shift] === prevCard) {
                shift++;
            } else {
                deck.splice(shift, 1);
            }
        }
        room = [deck[0], deck[1], deck[2], deck[3]];
        
        setData({
            ...data,
            room: room,
            deck: deck,
            hasHealed: false
        })
        return room;
    }

    // Player has the option to leave the current room of the dungeon. 
    // This puts the cards from the room at the bottom of the deck 
    // Input: remaining cards from shuffled deck and room to be left
    // Output: none 
    function leaveRoom(deck, leaveRoom) {
        deck.push(...leaveRoom);
    }

    // Called when player chooses a card from the current room
    // Input: Card that is chosen from the room
    // Output: none
    // Side Effects: setHP or setWeapon depending on input
    function takeCard(card) {
        const type = card.substring(0, card.indexOf("_"));
        const number = Number(card.substring(card.indexOf("_") + 1));
        let newHP = data.HP;
        let weapon = data.weapon;
        let lastSlain = data.lastSlain;
        let hasHealed = data.hasHealed;
        
        if (type === "heart" && hasHealed === false) {
            hasHealed = true;
            if (data.HP + number > 20) {
                newHP = 20;
            } else {
                newHP += number;
            }
        } else if (type === "diamond") {

            weapon = card;
            lastSlain = "none";

        } else if (type === "spade" || type === "club") {
            let defense = 0;
            if (weapon !== "none") {
                defense = Number(weapon.substring(weapon.indexOf("_") + 1));
            }

            if (lastSlain !== "none" && Math.abs(cards[lastSlain]) < defense ) {
                defense = Math.abs(cards[lastSlain]);
            }

            let damage = defense - number;
            
            if (damage > 0) {
                damage = 0;
            }
            newHP += damage;

            if (newHP <= 0) {
                newHP = 0;
            }

            if (weapon !== "none") {
                lastSlain = card;
            }
        }

        setData({
            ...data,
            HP: newHP,
            weapon: weapon,
            lastSlain: lastSlain,
            hasHealed: hasHealed
        })
    }

    function updateRoom(card, room) {
        if (room.length > 1) {
            let index = room.indexOf(card); 
            room.splice(index, 1);
            setData({
                ...data,
                card: card,
                room: room
            })
        }
    }

    useEffect(() => {
        takeCard(data.card);
    }, [data.card])

    useEffect(() => {
        let shuffled = shuffleCards(cards); 
        let firstRoom = [shuffled[0], shuffled[1], shuffled[2], shuffled[3]];
        setData({
            ...data,
            room: firstRoom,
            deck: shuffled
        })
    }, [])

    let { HP, weapon, deck, lose, room, lastSlain } = data;
    return (
        <main>
            <p>Health: {HP}</p>
            <p>Weapon: {weapon}</p>
            <p>Last Slain: {lastSlain}</p>
            {lose ? <p>YOU LOSE</p> : null}
            {room.map((element, i) => <button key={i} onClick={()=>updateRoom(element, room)}>{element}</button>)}
            { room.length === 1 ? <button onClick={()=>makeRoom(deck, room[0])}>Next Room</button> : null}
            <h1>{deck[0]}</h1>
        </main>
    )
}

export default Board;