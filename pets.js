//pet classes
class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //max of 10 except for bladder:
    hunger = 5;    
    thirst = 5;
    energy = 5;
    bladder = 0;    //full bladder = 10;
    hygiene = 5;
    fun = 5;    

    feed() {
        this.hunger += 2;
        this.thirst -= 1;
    }

    drink() {
        this.thirst += 2;
    }

    rest() {
        this.energy += 4;
        this.hunger -= 1;
        this.thirst -= 1;
    }

    potty() {
        this.bladder += 5;
        this.hunger -= 2;
        this.thirst -= 2;
    }

    wash() {
        this.hygiene +=5;
    }

    play() {
        this.social += 5;
        this.energy -= 3;
        this.hygiene -= 3;
        this.hunger -= 2;
    }
}


//dog class
class Dog extends Pet {
    constructor(name, age) {
        super(name, age);
    }       
    //bark
}

class Cat extends Pet {
    constructor(name, age) {
        super(name, age);
    }
    //growl
}

class Rabbit extends Pet {
    constructor(name, age) {
        super(name, age);
    }
    //hop
}


export default Pet;
