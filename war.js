// Create a Class card to create new cards for the deck
class Card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}

//Create a Class deck to create a deck of 52 cards.
class Deck {
    constructor() {
        this.cards = [];    
    }
                       
    createDeck() {     //function to create deck
        let suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];
        let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'Ace'];
        let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    
    for (let i = 0; i < suits.length; i++) {    
        for (let j = 0; j < ranks.length; j++) {
            this.cards.push(new Card(suits[i], ranks[j], values[j]));
        }
    }
        
  }   

  shuffleDeck() { //function to shuffle deck
    let location1, location2, tmp;
    for (let i = 0; i < 1000; i++) {
        location1 = Math.floor((Math.random() * this.cards.length));
        location2 = Math.floor((Math.random() * this.cards.length));
        tmp = this.cards[location1];
        this.cards[location1] = this.cards[location2];
        this.cards[location2] = tmp;
     }
 }

        
 }

 class Player {
    constructor(name) {
        this.playerName = name;
        this.playerCards = [];
    }
}

class Deal {
    constructor() {
        this.dealCards = [];
        this.players = [];
    }
    

    
}






