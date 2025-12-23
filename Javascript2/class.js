//class - a class of blueprint for creating objects
// a new object created from a class is an instance - NEW

// constructor - a method that is called when an object is created
// used to set the initial values for the object.


//   name always uppercase
/*class Mammal {
    constructor(name) {
        this.name = name; //Dinamic value - it can be written as an argument of the function
        this.habitat = "Land";  //static value/variable - its already written and cannot be change
    }

    get nameofDog() {
        return this._name;
    }

    set nameofDog(newName) {
        return this._name = newName
    }

    static toLowerCase() { // it applies on the class itself
        return "this is lower case"
    }
}

const testcase = Mammal.toLowerCase(); // it does not applie to the instance


let dog = new Mammal("Dog");
console.log(dog.nameofDog); // runs getter
dog.nameofDog = "Dog 2" // runs setter
console.log(dog.nameofDog)


// Methods - function of a class. perform an action. 


//sub class - it would inheritate the variables and methods of the superclass 
class Human extends Mammal {

}
*/


// inheritance

// instance



//Static Method


// why OPP - Object Oriented Programming
//to write your or structure your code
// modularity and code reusability - make it be applied to many profiles as a template
// encapsulation  make sure that internal details of a class are hidden. This helps to protect the integrity of data. from innecesary exposure.
// inheritance of some features heredar
// polymorphism - giving different shapes and sizes at the same time.






//  create a class Mammal , give it variables, create some methods.
// we want to introduce the mamal
// on the browser I want to print out the introduction to the mammal

// create a subclass of mammal called human
// we want to introduce the mamal
// on the browser I want to print out the introduction to the human and let us know it is a subclass

// create a static method for both

class Mammal {
    constructor(species, habitat) {
        this.species = species; 
        this.habitat = habitat;
    }

    introduce() {
        return `I am a ${this.species} and my habitat is ${this.habitat}.`;
    }
}

class Human extends Mammal {
    constructor (name, city){
        super("Human", "Urban and rural")
        this.name = name;
        this.city = city;
    }

    introduce() {
        const parentIntro = super.introduce();
        return `${parentIntro} My name is ${this.name} and I live in city ${this.city} , and I am a subclass of Mammal.`;
    }
}

const person = new Human ("Paula", "Calgary");

const introParagraph = document.getElementById("intro");
introParagraph.textContent = person.introduce();




//modules