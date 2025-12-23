$(document).ready(function(){


    $("#loginForm").on('submit', (e) => {
        e.preventDefault(); //prevent the default form submission behavior
        //get the form values
        let $username = $('#username').val();
        let $email = $('#email').val();
        let $password = $('#password').val();
       

        console.log($username, $email, $password);
        //initialize a flag to check if the form is valid or not
        let$isValid = true;

        if ($username === "") {
            $("#usernameError").text("Username cannot be empty");
            $("#usernameError").css("color", "red");
            isValid = false;
        } else {
            $("#usernameError").text("");
        }
               
        if ($password.length < 8) {
            $("#passwordError").text("Password cannot have less than 8 characters");
            $("#passwordError").css("color", "red");
            isValid = false;
        } else {
            $("#passwordError").text("");
        }

        //email pattern
        let $emailPattern = ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$

        $emailPattern.test($email)
        if (!$emailPattern.test){
            $('#emailError').text('Invalid email format')
            isValid = false;
            
        }

    })
})