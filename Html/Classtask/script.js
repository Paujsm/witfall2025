class User {
    constructor(level, imageURL, points, name, description, color, linkedinURL){
        this.level = level;
        this.imageURL = imageURL;
        this.points = points;
        this.name = name;
        this.description = description;
        this.color = color;
        this.linkedinURL = linkedinURL;

    }
}

//Instances of users
let Chia = new User (
    22,
    "https://aras.kntu.ac.ir/wp-content/uploads/2019/05/hoodie-.png",
    8248,
    "Chia Ching",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.",
    "pink",
    "#"
)

let Chigozie = new User (
    2,
    "https://icon-library.com/images/icon-avatar/icon-avatar-6.jpg",
    3248,
    "Chigozie Ngene",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.",
    "yellow",
    "#"
)

let Etin = new User (
    8,
    "https://www.pngarts.com/files/5/User-Avatar-PNG-Free-Download.png",
    9248,
    "Etin Ekanem",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.",
    "blue",
    "#"
)

let Leena = new User (
    50,
    "https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png",
    50248,
    "Leena Patil",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.",
    "red",
    "#"
)

var users = [];
users.push(Chia);
users.push(Chigozie);
users.push(Etin);
users.push(Leena);

console.log(users)

//                      
function addUserCardToDOM(user){
    //get the card container element from the DOM
    const cardContainer = document.getElementById("card-container");

    // append a new user card to the card-container
    cardContainer.innerHTML += `<div class="card">
            <div class="left-info" style="--background-color: ${user.color}">
                <div class="center-horizontally">
                    <p id="user-level">Level ${user.level}</p>
                </div>
                <div>
                    <img src=${user.imageURL} alt="male avatar with beard">
                </div>
                <div class="center-horizontally">
                    <p id="user-points-${user.name}">${user.points} points</p>
                </div>
                <div class="flex-wrap">
                    <div class="plus-minus-button">-</div>
                    <div class="plus-minus-button" onclick="incrementPoints(${user.name})">+</div>
                </div>
            </div>
            <div class="right-info">
                <header>
                    <div>
                        <h1>${user.name}</h1>
                        <p id="'user-description">
                            ${user.description}
                        </p>
                    </div>
                    <div class="linkedin-link">
                        <a href="#">
                            <i class="fa fa-linkedin-square"></i>
                        </a>
                    </div>
                </header>
            </div>
        </div>
        `
}

// we already have the array of users, so to render it to the DOM

renderUsersToDom(users)

function renderUsersToDom(users){
    /*getting the card container element from dom and make sure its empty before we write in it, to avoid duplicate.*/
    document.getElementById("card-container").innerHTML = ""; //this for try to avoid duplicates

    //for(user of users){
    //    addUserCardToDOM(user)
    //}

    users.forEach(users => addUserCardToDOM(users));
}


function sortUsers(){
    //get the selected property to sort the dom
    let property = document.getElementById('sortBy').value;
    users.sort((a, b) => (a[property]) > b[property] ? 1 : -1)

    //update the dom with the sorted list
    renderUsersToDom(users)
}

function incrementPoints(userName){
    //find the user in the array
    const user = users.find((user) => user.name === userName)
    console.log(user); 
    //increase the points
    user.points += 1;
    //update the point on the dom
    const pointLabel = document.getElementById(`user-points-${user.name}`);

    pointLabel.textContent = `${user.points} points`;
}

//decrement
//calculate the total points for everyvody

