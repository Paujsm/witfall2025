// IIFE - Immediately Invoked Function Expression







/* High Order Function - 
1. takes one or more function as argument or
2. returns a function as its result.*/

/*example1

function greet(name){
    return 'Hello ' + name;
}

function hof(greetfunc){
    let firstName = 'Ola';
    let result = greetfunc(firstName);
    return result
}

console.log(hof(greet))*/




/*syntax hof - function that takes a function on the parameter
const hightOrderFunction = (callback1, callback2) => {
    return callback1()
}*/




/* example 2

function callbackFunction(){
    console.log('I am a callback function')
}

function hightOrderFunction(func){   //asking a funcion as an argument
    console.log('I am a high order function')
    func()
}

hightOrderFunction(callbackFunction) */

/* example 3
function toUpperCase(str){   //Normal Function
    return str.toUpperCase()
}
function toLowerCase(str){   //Normal Function
    return str.toLowerCase()
}
function reverseString(str){   //Normal Function
    return str.split('').reverse().join('')
}


function transformString(str, transformFunction){   //Hight Order Function - it takes one function as an argument and returns a function
    return transformFunction(str)
}


const myString = 'Hello World'
console.log(transformString(myString, toUpperCase))
console.log(transformString(myString, toLowerCase))
console.log(transformString(myString, reverseString)) */


/*example 4

function getCertificate(score, name){
    console.log(`${name} passed with ${score}%`)
}
function noCertificate(score, name){
    console.log(`${name} is not getting a certificate because she had ${score}%`)
}
function witFinalGrade(score, name, graduating, notGraduating){
    if(score >= 65){
        graduating(score, name)
    } else {
        notGraduating(score, name)
    }
}

witFinalGrade(65, 'Fatemeh', getCertificate, noCertificate)
witFinalGrade(30, 'Femi', getCertificate, noCertificate) */


const student = ['Ola', 'Ethin', 'Thaisa', 'Sreyasi', 'Rupinder']

student.forEach(function(student){  //console.log is not a hight order function, it just print
    console.log(student + ' is a student of MCA')
})

student.map((student, index) =>{
    console.log(`${student} is at position ${index}`)
})


