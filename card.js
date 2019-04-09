class Card {
    constructor(suit, value){
        this.suit = suit;
        this.value = value;
        this.image = "";
        if(isNaN(this.value)){
            this.image += this.value[0]; 
        }else{
            this.image += this.value;
        }
        this.image += this.suit[0] + ".png";
    }
}