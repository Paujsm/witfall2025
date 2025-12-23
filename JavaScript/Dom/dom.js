/*
Dom - Document Object Model is a tree-like that represent our HTML document in the browser
// is the way of the browser to reprsent our HTML code.
JavaScript uses the DOM to access the HTML element and manipulate them.

the first thing is the document - Document is a very big object

const document = {
    elements
}

document.
*/

/*
Access Method
1. select the element - class, id, tag
2. Usea the method - getElementById(), getElementsByClass(),
querySelector(), querySlectorAll(),

//by id
let firstarticle = document.getElementById("articleone");
console.log(firstarticle);

//By Class
let witdetails = document.getElementsByClassName("witdetails");
console.log(witdetails);

//By tag
let wittag = document.getElementsByTagName('article');
console.log(wittag);

//By querySelector - selects with any slector(class, id, tag), return the first element that matches the selector

let secondarticle = document.querySelector('.witdetails');
console.log(secondarticle)

//querySelectorAll - return nodelist(it is static) of all the element that matches the selector.

let queryAllSelection = document.querySelectorAll('.witdetails');
console.log(queryAllSelection)



//DOM Manipulations - create, update, delete, read element
//firstarticle.innerHTML = `<p>I hace change this from the DOM</p><div>This is from DOM</div>`;


for (let i = 0; i < witdetails.length; i++){
    if (i == 1){
        witdetails[i].style.backgroundColor = 'blue'
    } else{
        witdetails[i].style.backgroundColor = 'green'
    }
}


for (let i of wittag){
    i.innerHTML = `I change this from Dom`
}


//Events - something happens, click, hover, submit

//Event Listener - functions that happens for a particular event

//syntax
//elementfromDOM.addEventListener('event-type', callbackfunction)
//elementfromDOM.addEventListener('event-type',()=>{
    //execution statement    
// })

let firstaside = document.getElementById('firstaside');
let firstbutton = document.getElementById('firstbtn');
console.log(firstaside, firstbtn)

firstbutton.onclick = firstaside

function added directly in the function
firstbutton.addEventListener('click', ()=>{  //when click in firstbutton execute the function
    firstaside.innerHTML = `This change after the click event`;
})

/*function added outside
let clicktoseealert = () => {
    alert('You have click a button')
}

firstbutton.addEventListener('click', clicktoseealert);
*/




//ticket
//get the elements in variables
let fullnameInput = document.getElementById('fullname');
let emailInput = document.getElementById('email');
let sectionInput = document.getElementById('preferedsection');
let addressInput = document.getElementById('address');

let submitbtn = document.getElementById('submit');
let printTicket = document.getElementById('printticket');

submitbtn.addEventListener('click', (event)=>{
    event.preventDefault();    //it does not refresh 

    let fullname = fullnameInput.value;
    let email = emailInput.value;
    let section = sectionInput.value;
    let address = addressInput.value;
    
    //console.log(fullnamevalue, emailvalue, sectionvalue, addressvalue); //checker
    
    printTicket.innerHTML = '';
    printTicket.style.display = 'block';

    const ticketLine = (feature, value) => {
        const p = document.createElement('p');

        const valueText = document.createTextNode(value);
        p.appendChild(valueText);

        return p;
   } 
   printTicket.appendChild(ticketLine("fullname", fullname));
    printTicket.appendChild(ticketLine("email", email));
    printTicket.appendChild(ticketLine("preferedsection", section));
    printTicket.appendChild(ticketLine("address:", address));
        
});















/*
// CLASS
//Class - blueprint of creating object
//syntax
Class student{
    construtor(var1, var2, var3) {
        this.var1 = var1;
    }
}

Class ClassName {
    construtor(variable){
        this.variable = variable;
    }

    method1(){
        return 
    }
}

Class student{
    construtor(firstName, course) {
        this.firstName = firstname;
        this.course = course;
    }

    introduce(){
        return `${this.firstname} is taking the course ${course}`
    }
}

//object is an instance of the class
let femi = new student('Femi', 'Fullstack web Development')

console.log(femi.introduce())


// create a class shape, you get to decide the variables, 
// create a method to check if the shape is a poylgon or not

class Shape{
    constructor(name, sides) {
        this.name = name;
        this.sides = sides;
    }

    is_polygon(){
        return this.sides >= 3;
    }

    describe() {
        const polygonAnswer = this.is_polygon() ? 'is' : 'is not';
        console.log(`The ${this.name} ${polygonAnswer} a polygon`);
    }
}

const triangle = new Shape('Triangle', 3);
const square = new Shape('Pentagon', 5);
const circle = new Shape('Circle', 0);

triangle.describe();
square.describe();
circle.describe();
*/



/*
// SUBCLASS
//   subclass    superclass
class Wit extends Student{
    constructor(firstname, course, country){
        super(firstname, course)
        this.country = country
    }

    static greeting(){
        return 'this is a static greetings'
    }
}

let witinstance = new Wit()

*/