// promise - is a Javascript object that can be used to get the outcome 
// of an asynchronous operation when the result is not instantly available

// has 3 states: pending, resolved or rejected

//Pending - when the value is not available yet
//Resolved - succesful completion
//Rejected - failure (due to error)

// two properties - state and result

//async programming - multi-thread - program can be run in parallel 

//sync - single-thread - one operation at a time

//while a promise object is pending the result is undefined
//while a promise is fullfilled the result is a value
//while a promise is rejected the result is an error object.

//SetTimeOut



/*
setTimeout(()=>{
    console.log("This is an async Operation 1000")
}, 1000)

setTimeout(()=>{
    console.log("This is an async Operation 10")
}, 10)

console.log("end of program")

console.log(("this will print first"));
*/



console.log(`1. ${new Date().getSeconds()}`);
setTimeout(()=>{
    console.log(`2. ${new Date().getSeconds()}`);
}, 5000)
console.log(`3. ${new Date().getSeconds()}`);
console.log(`4. ${new Date().getSeconds()}`);
console.log(`5. ${new Date().getSeconds()}`);
setTimeout(()=>{
    console.log(`6. ${new Date().getSeconds()}`);
}, 0)
console.log(`7. ${new Date().getSeconds()}`);
console.log(`8. ${new Date().getSeconds()}`);
console.log(`9. ${new Date().getSeconds()}`);
console.log(`10. ${new Date().getSeconds()}`);