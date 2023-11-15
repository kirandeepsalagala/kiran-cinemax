function loginOne () {
    window.location.href = "login.html";
}

function prevIcon() {
    // Redirect to another page by setting the href property of the location object
    window.location.href = "index.html";

}


function passwordToggle () {
    var x = document.getElementById("passwordInput");
    var eyeClosedEl = document.getElementById("eyeClosed");
    var eyeOpenEl = document.getElementById("eyeOpen");

    if(x.type === "password") {
        x.type = "text";
        eyeClosedEl.classList.add("d-none");
        eyeOpenEl.classList.remove("d-none");
    }
    else {
        x.type = "password";
        eyeClosedEl.classList.remove("d-none");
        eyeOpenEl.classList.add("d-none");
    }
}

function validateLoginDetails () {
    var userNameEl = document.getElementById("userName").value;

    var passwordInputEl = document.getElementById("passwordInput").value

    var correctUserName = "kiran";
    
    var correctPassword = "kiran@2022";

    if (userNameEl === correctUserName && passwordInputEl === correctPassword) {
        
        window.location.href = "home.html";
        console.log("valid");
    }
    else {
        alert("Invalid username or password. Please try again");
        console.log("invalid");
    }
}
