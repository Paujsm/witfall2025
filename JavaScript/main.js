// "use strict"

// // // //single line comment

// // // /* multi line cooment */

// // // //Javascript - a programming language - dynamic behavior on website/apps 
// // // // - works with html and css
// // // //declare variable, conditionals, array, loop, function, object, scope

// // // // console.log("Hello World");

// // // //Variable declaration
// // // // var, let, const

// // // //var - redeclare, reassign

// // // // var favColor = "Yellow"
// // // // var favColor = "Red"

// // // // console.log(favColor)

// // // // let - does not allow redeclare, but you can reassign

// // // // let favColor = "Yellow"
// // // // favColor = "red"

// // // // console.log(favColor)

// // // // const - doesnt allow redeclare or reassign - strict

// // // // const pie = 3.14
// // // // pie = 3.2

// // // // const student = {
// // // //     "name": "Femi",
// // // //     'age': 12
// // // // }

// // // // //SCOPE
// // // // // 1. Global Scope 
// // // // const firstName = "femi"  //global
// // // // //2. Function Scope
// // // // function studentName(){
// // // //     let surName = "Ola" //function scope
// // // //     const firstName = "Fatemeh"
// // // //     console.log(firstName)
// // // //     return surName
// // // // }

// // // // function hello(){
// // // //     const firstName = "Fatemeh"
// // // // }
// // // // console.log(firstName)
// // // // studentName()
// // // // //Block Scope 
// // // // //{
// // // // //}
// // // // if(firstName == "femi"){
// // // //     let secondName = "Thaisa"
// // // //     console.log(secondName)
// // // // }
// // // // console.log(secondName)

// // // //var let const

// // // //var - global scope
// // // var unluckyNumber = 9;
// // // function witalumni(){
// // //    let age = 12;
// // //     let luckyNumber;
// // //    for (let i = 0; i < 4; i++){
// // //         luckyNumber = age + 4;
// // //         var unluckyNumber = age - 4;
// // //    }
// // //   console.log(unluckyNumber)
// // //   if(){
// // //     let course = "wit"
// // //   }
// // // }
// // // witalumni()

// // // console.log(unluckyNumber)

// // //Data types
// // // primitive Datatype - basic value - Number, Boolean, String, 
// // // undefined, Null, symbol, bigint
// // //Non-primitive Datatype - complex data - Object, array, function, map

// // // let age = "Femi";
// // // age = 4
// // // console.log(typeof age)

// // //Assignment operator
// // // let color = "red"

// // // let favNumber = "Femi";
// // // favNumber *= 5   

// // // console.log(favNumber);

// // //== will check the value

// // //=== will check both the value and the datatype - strict 

// // let goals = undefined

// // // if (goals === "undefined"){
// // //     console.log("We won")
// // // }else{
// // //     console.log("We did not win")
// // // }

// // //Template literals
// // // console.log(`The goal for the year is ${goals}`)


// // //Conditionals and ternary operator
// // // if (expression){
// // //     do this
// // // }else if(next expression){
// // //     do this
// // // }else{
// // //     if everything is false
// // // }

// // // class grade 
// // // A = 80-100, B = 79 - 70, C = 69 - 60 D = 59 - 50 E = 49 - 40 F = 39" 
// // // using conditionals print the grade of a particular student

// // //Ternary operator

// // //condition ? do this : else this;

// // let canDrive = false;

// // canDrive === true ? console.log("Femi can drive") : console.log("Femi cannot drive")

// // condition ? firststatement : second condition ? secondstatement : th
// //Arrays - list of ordered - any datatype

// const studentArray = ["Thaisa", "Tham", "Jazz", 1, true, null]
// // console.log(studentArray[studentArray.length - 1])

// // studentArray[-1] = "Fatemeh"
// // studentArray[10] = "Chigozie"
// // console.log(typeof studentArray)
// // console.log(studentArray)


// // delete studentArray[-1]
// //Splice and slice


// //Splice - add, remove, replace elements
// // Array.splice(start, deleteCount, replacement items)
// console.log(studentArray)
// studentArray.splice(2, 0, "Femi")
// console.log(studentArray)


// //Slicing - taking a part of array
// // Array.slice(start, end)

// console.log(studentArray.slice(-3, 1))

///Function - reusable code

//traditional/standard function 
function functName(arg1, arg2){
    return
}
functName()

//function expression
const functName2 = function(arg){
    return
}
functName2()

//arrow function
const functName3 = () =>{
    return
}

//Hoisting - 
console.log(greeting());

function greeting(){
   return "Hello Canada"
}

// console.log(greeting2());
const greeting2 = function(){
    return "Hello Canada"
}
//console.log(greeting3());
const greeting3 = () => {
    return "Hello Canada"
}

//write a function that takes 2 arrays 
// one is wit_alumi, the other is wit_current_student 
// return a new array of unique name/elements

let studentid = {
    studentName: "Femi",
    saymyName: function(){
        return "Student name is " + this.studentName
    }
}
console.log(studentid.saymyName())
