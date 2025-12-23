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

let chia_ching = new User(22, 
    "https://aras.kntu.ac.ir/wp-content/uploads/2019/05/hoodie-.png", 
    44323, 
    "Chia-Ching Lin", 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.", 
    "red", 
    "#")

let jazz = new User(20, 
    "https://icon-library.com/images/icon-avatar/icon-avatar-6.jpg", 
    11673, 
    "Jaswinder Kaur", 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.", 
    "blue", 
    "#")

let chigozie = new User(11, 
    "https://www.pngarts.com/files/5/User-Avatar-PNG-Free-Download.png", 
    83932, 
    "Chigozie Ngene", 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.", 
    "yellow", 
    "#")

let divya = new User(25, 
     "https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png", 
    73244, 
    "Divya Rayapati", 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.", 
    "purple", 
    "#")

var users = [];
users.push(chia_ching);
users.push(jazz);
users.push(chigozie);
users.push(divya)

console.log(users)

function addUserCardToDOM(user){
    //get the card container element from the DOM
    //const cardContainer = document.getElementById("card-container");
    const $cardContainer = $('#card-container')

    //append a new user card to the card container
    let $cardHtml = `<div class="card">
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
                    <div><button class="plus-minus-button">-</button></div>
                    <div><button class="plus-minus-button" onclick="incrementPoints('${user.name}')">+</button></div>
                </div>
            </div>
            <div class="right-info">
                <header>
                    <h1>${user.name}</h1>
                </header>
                <div>
                    <p id="user-description">
                        ${user.description}
                        </p>
                </div>
                <div class="linkedin-link">
                    <a href="#">
                        <i class="fa fa-linkedin-square"></i>
                    </a>
                </div>
            </div>
        </div>`
}

renderUsersToDom(users)

function renderUsersToDom(users){
    //geting the card container element from dom and make sure its empty 
    // before we write in it, to avoid duplicate.
    $('#card-container').empty();
    // for (user of users){
    //     addUserCardToDOM(user)
    // }
    users.forEach(user => addUserCardToDOM(user));
}

function sortUsers(){
    //get the selected property to sort the dom
    let $property = $('#sortBy').val();
    users.sort((a, b) => (a[property]) > b[property] ? 1 : -1)
    //update the dom with the sorted list
    renderUsersToDom(users);
}

$('#sortBy').on('change', function(){
    sortUsers();
})

function incrementPoints(userName){
    //find the user in the array
    const user = users.find((user) => user.name === userName)
    console.log(user);
    //increase the point
    user.points += 1;
    //update the point on the screen/dom
    //const pointLabel = document.getElementById(`user-points-${user.name}`);
    const $pointLabel = $(`#user-points-${user.name}`);

    //pointLabel.textContent = `${user.points} points`;
    $pointLabel.text(`${user.points} points`);

}

//decrement
//calculate the total point for everybody
$document.ready((=>{
    
}))