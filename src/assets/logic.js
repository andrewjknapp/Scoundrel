const actions = {
    // Done once at the start of the game. 
    // Input: Object containing all possible cards
    // Output: Array of cards put into random order
    shuffleCards: function (cards) {
        let shuffledCards = [];

        for (const card in cards) {
            let randIndex = Math.floor(Math.random() * shuffledCards.length);
        
            shuffledCards.splice(randIndex, 0, card)
        }

        return shuffledCards
    },
    // Start of the game four cards are drawn from the deck. This makes the current room.
    // Each subsequent room contains three new cards and one from the previous room. 
    // Input: shuffled deck of cards (optional one card from precious room) \
    // Output: current room
    makeRoom: function (deck, prevCard = null) {
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
    },
    // Player has the option to leave the current room of the dungeon. 
    // This puts the cards from the room at the bottom of the deck 
    // Input: remaining cards from shuffled deck and room to be left
    // Output: none 
    leaveRoom: function(deck, leaveRoom) {
        console.log(deck);
        deck.push(...leaveRoom);
        console.log(deck);
    }

}

export { actions };