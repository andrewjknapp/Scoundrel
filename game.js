const cards = {
    spade_1: -1,
    spade_2: -2,
    spade_3: -3,
    spade_4: -4,
    spade_5: -5,
    spade_6: -6,
    spade_7: -7,
    spade_8: -8,
    spade_9: -9,
    spade_10: -10,
    spade_Jack: -11,
    spade_Queen: -12,
    spade_King: -13,
    spade_Ace: -14,
    club_1: -1,
    club_2: -2,
    club_3: -3,
    club_4: -4,
    club_5: -5,
    club_6: -6,
    club_7: -7,
    club_8: -8,
    club_9: -9,
    club_10: -10,
    club_Jack: -11,
    club_Queen: -12,
    club_King: -13,
    club_Ace: -14,
    diamond_1: 1,
    diamond_2: 2,
    diamond_3: 3,
    diamond_4: 4,
    diamond_5: 5,
    diamond_6: 6,
    diamond_7: 7,
    diamond_8: 8,
    diamond_9: 9,
    diamond_10: 10,
    heart_1: 1,
    heart_2: 2,
    heart_3: 3,
    heart_4: 4,
    heart_5: 5,
    heart_6: 6,
    heart_7: 7,
    heart_8: 8,
    heart_9: 9,
    heart_10: 10
}

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

function takeCard(deck, room, card) {
    
}

function game() {
    let deck = shuffleCards(cards);
    let weapon = null;
    let HP = 20;
    let prevCard = null;

}

game();