const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];

class Deck {
    deck = [];
    constructor(){
        this.reset();
    }
    reset(){
        this.deck = [];
        for(let suit of suits){
            for(let value of values){
                this.deck.push(new Card(suit, value));
            }
        }
    }
    shuffle(){
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }
    deal(){
        return this.deck.pop();
    }
}