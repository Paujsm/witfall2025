let studentDetails = {
    name: "Femi",
    age: 4,
    country: "Canada"
}

function displayName() {
    return "Jazz is a student";
}

//module.exports = studentDetails; //node runtime for single items

module.exports = { studentDetails, displayName } // for exporting multiple items node runtime
// export studentDetails; javaScript 