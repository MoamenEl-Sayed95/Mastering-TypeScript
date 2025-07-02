class Player{
    #score = 0;
    #numLives = 10;
    constructor(first,last){
        this.first = first;
        this.last = last;
        this.#secret();
    }
    get fullName(){
        return `${this.first} ${this.last}`;
    }
    getScore(){
        return this.#score;
    }
    updateScore(newScore){
        this.#score = newScore;
    }
    taunt(){
        console.log("BOOYAH!");
    }
    loseLife(){
        this.#numLives -=1;
    }
    #secret(){
        console.log("SECRET!!!");
    }
}

const palyer1 = new Player("blue","steele");
// palyer1.taunt();
// console.log(palyer1.first);
// console.log(palyer1.last);
// console.log(palyer1);

// console.log(palyer1.numLives);
// palyer1.loseLife();
// console.log(palyer1.numLives);
// palyer1._score = -281731298;
console.log(palyer1.getScore());
console.log(palyer1.updateScore(28));
console.log(palyer1.getScore());
console.log(palyer1);

// const palyer2 = new Player("charlie","brown");
// palyer2.taunt();
